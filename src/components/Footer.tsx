import Link from "next/link";
import Container from "./Container";

const link = "text-muted underline";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-9 pb-12 text-[0.9rem] text-muted">
      <Container className="flex flex-wrap justify-between gap-5">
        <div>
          <strong className="text-ink">The Wedge</strong>
          <br />A weekly brief by Vipul Yadav.
        </div>
        <div>
          <Link className={link} href="/privacy">
            Privacy
          </Link>
          {" \u00a0·\u00a0 "}
          <Link className={link} href="/terms">
            Terms
          </Link>
          {" \u00a0·\u00a0 "}
          <a className={link} href="#">
            Contact
          </a>
          <br />© 2026 The Wedge
        </div>
      </Container>
    </footer>
  );
}
