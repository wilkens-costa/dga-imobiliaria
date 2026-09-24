import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="brand-mark" aria-label="DGA Imobiliária — início">
      <span className="brand-identity" aria-hidden="true">
        <strong className="brand-initials">DGA</strong>
        <span className="brand-signature">
          <span className="brand-line" />
          IMOBILIÁRIA
        </span>
      </span>
    </Link>
  );
}
