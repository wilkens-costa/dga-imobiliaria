import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="brand-mark" aria-label="DGA Imobiliária — início">
      <span className="brand-monogram" aria-hidden="true">DGA</span>
      <span className="brand-words">
        <strong>DGA</strong>
        <small>IMOBILIÁRIA</small>
      </span>
    </Link>
  );
}
