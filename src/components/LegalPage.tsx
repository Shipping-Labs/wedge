import Link from "next/link";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

/** Placeholders to fill in before launch. Keep the brackets so they're easy to spot. */
export const CONTACT_EMAIL = "[CONTACT_EMAIL]";
export const JURISDICTION = "[JURISDICTION]";
export const LAST_UPDATED = "October 3, 2026";

/**
 * Shared shell for the legal pages: Header + readable prose column + Footer.
 * Prose styling is applied to plain p / ul / li / a elements via descendant selectors,
 * so the page files can stay as simple markup.
 */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Container>
        <Header home={false} />
      </Container>
      <main className="pt-6 pb-20 mobile:pb-14">
        <Container>
          <article className="mx-auto max-w-[720px]">
            <Link
              href="/"
              className="inline-block text-[0.95rem] font-medium text-accent no-underline hover:text-accent-d hover:underline"
            >
              &larr; Back to home
            </Link>
            <h1 className="mt-6">{title}</h1>
            <p className="mt-3 text-[0.9rem] text-muted">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="mt-6 text-[1.1rem] text-body-2">{intro}</p>
            <div className="[&_a]:text-accent [&_a]:underline [&_a:hover]:text-accent-d [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[1.5rem] [&_li]:mt-1.5 [&_p]:mt-3.5 [&_ul]:mt-3.5 [&_ul]:list-disc [&_ul]:pl-6 text-body-2">
              {children}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
