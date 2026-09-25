/**
 * A small model of the heartbeat logic in the Device Monitoring System.
 * A device reports a heartbeat every tick; once it misses OFFLINE_AFTER in a
 * row it is OFFLINE, and the next heartbeat brings it back ONLINE.
 * Everything here is a pure function of the tick number, so the server render
 * and the first client render always match.
 */

export type Device = {
  id: string;
  /** Length of one full cycle, in ticks. */
  cycle: number;
  /** How many ticks at the end of each cycle the device stays silent. */
  silent: number;
  offset: number;
};

export type Status = "ONLINE" | "OFFLINE";

export type StatusEvent = {
  deviceId: string;
  status: Status;
};

/** Missed heartbeats before OFFLINE: three ticks of 10 s is the 30 s threshold. */
export const OFFLINE_AFTER = 3;
export const BAR_COUNT = 96;
export const TICK_MS = 700;
export const START_TICK = 130;

export const devices: readonly Device[] = [
  { id: "DMS-001", cycle: 37, silent: 5, offset: 9 },
  { id: "DMS-002", cycle: 29, silent: 4, offset: 21 },
  { id: "DMS-003", cycle: 43, silent: 6, offset: 2 },
];

export function heartbeatAt(device: Device, tick: number): boolean {
  if (tick < 0) return true;
  const phase = (tick + device.offset) % device.cycle;
  return phase < device.cycle - device.silent;
}

export function statusAt(device: Device, tick: number): Status {
  for (let step = 0; step < OFFLINE_AFTER; step++) {
    if (heartbeatAt(device, tick - step)) return "ONLINE";
  }
  return "OFFLINE";
}

export function historyOf(
  device: Device,
  tick: number,
  count: number = BAR_COUNT,
): boolean[] {
  return Array.from({ length: count }, (_, index) =>
    heartbeatAt(device, tick - count + 1 + index),
  );
}

/** The most recent status change across all devices, if any is in range. */
export function lastEvent(
  tick: number,
  lookback: number = BAR_COUNT,
): StatusEvent | null {
  for (let t = tick; t > tick - lookback; t--) {
    for (const device of devices) {
      const status = statusAt(device, t);
      if (status !== statusAt(device, t - 1)) {
        return { deviceId: device.id, status };
      }
    }
  }
  return null;
}
