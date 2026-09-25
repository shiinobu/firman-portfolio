"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  BAR_COUNT,
  START_TICK,
  TICK_MS,
  devices,
  historyOf,
  lastEvent,
  statusAt,
} from "./simulation";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

type HeartbeatStripProps = {
  /** How many of the simulated devices to show. */
  rows?: number;
};

/**
 * Replays the heartbeat logic of the Device Monitoring System: one tick is one
 * heartbeat, three missed ticks mean OFFLINE. It pauses when off-screen, when
 * the tab is hidden, and under prefers-reduced-motion (static frame).
 */
export default function HeartbeatStrip({ rows = 3 }: HeartbeatStripProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [tick, setTick] = useState(START_TICK);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onChange = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  const running = !reducedMotion && inView && tabVisible;

  useEffect(() => {
    if (!running) return;

    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(id);
  }, [running]);

  const shown = devices.slice(0, rows);
  const event = lastEvent(tick);

  return (
    <div ref={rootRef}>
      <div
        role="img"
        aria-label="Simulation of devices sending heartbeats. A device is marked OFFLINE after three missed heartbeats and ONLINE again on the next one."
        className="grid gap-3 md:gap-4"
      >
        {shown.map((device) => {
          const history = historyOf(device, tick);
          const online = statusAt(device, tick) === "ONLINE";

          return (
            <div
              key={device.id}
              aria-hidden="true"
              className="grid grid-cols-[4.5rem_minmax(0,1fr)_5.25rem] items-center gap-3 md:grid-cols-[6.5rem_minmax(0,1fr)_7rem] md:gap-6"
            >
              <span className="font-mono text-xs text-on-band-2 md:text-sm">
                {device.id}
              </span>

              <div className="flex h-8 items-stretch gap-0.75 overflow-hidden md:h-11">
                {history.map((received, index) => (
                  <span
                    key={index}
                    className={`min-w-0 flex-1 ${
                      received ? "bg-band-signal" : "bg-band-alert"
                    } ${index < BAR_COUNT - 24 ? "max-md:hidden" : ""}`}
                  />
                ))}
              </div>

              <span
                className={`flex items-center justify-end gap-2 font-mono text-xs md:text-sm ${
                  online ? "text-band-signal" : "text-band-alert"
                }`}
              >
                <span
                  className={`size-2 rounded-full ${
                    online ? "bg-band-signal" : "bg-band-alert"
                  }`}
                />
                {online ? "ONLINE" : "OFFLINE"}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-6 max-w-[62ch] text-sm text-on-band-2">
        A simulation of the heartbeat logic in my Device Monitoring System. One
        tick is one 10 s heartbeat, played at 0.7 s. A device with three missed
        ticks (30 s) is marked OFFLINE.
      </p>
      <p
        aria-hidden="true"
        className="mt-2 min-h-5 font-mono text-xs text-on-band-2"
      >
        {event
          ? `DEVICE_STATUS_CHANGED  ${event.deviceId}  ${event.status}`
          : ""}
      </p>
    </div>
  );
}
