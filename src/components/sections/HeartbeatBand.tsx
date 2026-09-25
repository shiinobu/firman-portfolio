import HeartbeatStrip from "@/components/heartbeat/HeartbeatStrip";
import Container from "@/components/layout/Container";

/** Sits inside the Work section, under its label. The strip describes itself. */
export default function HeartbeatBand() {
  return (
    <div className="bg-band text-on-band">
      <Container className="py-10 md:py-14">
        <HeartbeatStrip />
      </Container>
    </div>
  );
}
