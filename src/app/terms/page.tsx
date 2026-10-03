import type { Metadata } from "next";
import LegalPage, { CONTACT_EMAIL, JURISDICTION } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — The Wedge",
  description: "The terms that apply to using The Wedge website and newsletter.",
};

/*
 * TEMPLATE ONLY, NOT LEGAL ADVICE. This text is a starting point written for a small
 * newsletter. Have a qualified lawyer review and adapt it to your situation and
 * jurisdiction before launch, and replace the bracketed placeholders
 * ([CONTACT_EMAIL], [JURISDICTION]).
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms apply to your use of The Wedge website and weekly email newsletter. By using the site or subscribing, you agree to them."
    >
      <h2>Use of the site and newsletter</h2>
      <p>
        The Wedge is a free newsletter and website for personal, non-commercial
        reading. Use them lawfully and don&apos;t misuse them: for example, don&apos;t
        attempt to disrupt the site, or subscribe other people without their
        consent. You can unsubscribe at any time using the link in every email.
      </p>

      <h2>Informational content only</h2>
      <p>
        Everything we publish is for general information and inspiration. It is
        not financial, investment, legal, tax or other professional advice, and
        you should not rely on it as such. Ideas in the newsletter are starting
        points, not validated business plans. Do your own research and consult a
        qualified professional before making decisions.
      </p>

      <h2>Third-party figures may be inaccurate</h2>
      <p>
        We summarise and link to information from other people and sources,
        including revenue, growth and pricing figures that founders report
        themselves. We attribute these where we can, but we do not independently
        verify them and they may be inaccurate, incomplete or out of date.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Wedge name, design, and original text are ours or our licensors&apos; and
        are protected by copyright and other laws. You may share links to
        issues and quote short excerpts with credit, but you may not republish
        or sell our content without permission. Third-party material we
        reference remains the property of its owners.
      </p>

      <h2>Links to third-party sites</h2>
      <p>
        The newsletter and website link to sites and services we don&apos;t control,
        including our email provider, Beehiiv. We are not responsible for their
        content, policies or practices, and a link is not an endorsement.
      </p>

      <h2>No warranties</h2>
      <p>
        The site and newsletter are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;, without warranties of any kind, express or implied,
        including accuracy, fitness for a particular purpose, and
        uninterrupted or error-free delivery.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, The Wedge and its author will
        not be liable for any indirect, incidental, special or consequential
        damages, or for any loss of profits, revenue, data or business
        opportunity, arising from your use of, or reliance on, the site or
        newsletter. Nothing in these terms limits liability that cannot be
        limited by law.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The &ldquo;last
        updated&rdquo; date above shows the current version. By continuing to
        use the site or newsletter after a change, you accept the updated terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of {JURISDICTION}, and any dispute
        will be handled by the courts of {JURISDICTION}, subject to any
        mandatory consumer rights you have where you live.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms? Email us at {CONTACT_EMAIL}.</p>
    </LegalPage>
  );
}
