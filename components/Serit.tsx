import { SERIT_RENKLERI } from "./site";

export default function Serit({ kucuk = false }: { kucuk?: boolean }) {
  return (
    <div className={kucuk ? "serit-kucuk" : "serit"} aria-hidden="true">
      {SERIT_RENKLERI.map((renk) => (
        <span key={renk} style={{ background: renk }} />
      ))}
    </div>
  );
}
