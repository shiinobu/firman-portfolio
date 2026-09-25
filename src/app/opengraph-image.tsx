import { site } from "@/config/site";
import { renderOg } from "@/lib/og";

export const alt = "Firman Aprilian Sugiharto, Fullstack Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: site.role,
    title: site.name,
    subtitle: site.tagline,
  });
}
