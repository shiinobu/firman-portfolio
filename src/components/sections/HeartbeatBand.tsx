import HeartbeatStrip from "@/components/heartbeat/HeartbeatStrip";
import Container from "@/components/layout/Container";

export default function HeartbeatBand() {
  return (
    <section aria-label="Heartbeat simulation" className="bg-band text-on-band">
      <Container className="py-10 md:py-14">
        <HeartbeatStrip />
      </Container>
    </section>
  );
}
