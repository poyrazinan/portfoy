import { Reveal } from "./Reveal";

export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <Reveal className="sec-label">
      <span className="n">{n}</span> <span>{children}</span>
    </Reveal>
  );
}
