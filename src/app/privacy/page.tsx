import type { Metadata } from "next";
import LegalPage, { CONTACT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — The Wedge",
  description:
    "How The Wedge newsletter collects, uses and protects your personal data.",
};

/*
 * TEMPLATE ONLY, NOT LEGAL ADVICE. This text is a starting point written for a small
 * newsletter. Have a qualified lawyer review and adapt it to your situation and
 * jurisdiction before launch, and replace the bracketed placeholders ([CONTACT_EMAIL]).
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="The Wedge is a free weekly email newsletter. This policy explains what personal data we collect when you subscribe, why we collect it, and the choices you have."
    >
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Your email address</strong>, which you give us when you
          subscribe.
        </li>
        <li>
          <strong>Basic subscription and engagement data</strong>, such as when
          you subscribed, which issues were delivered, and whether you opened
          or clicked links in them.
        </li>
      </ul>
      <p>
        We do not ask for anything else, such as your name, address or payment
        details.
      </p>

      <h2>Who processes it</h2>
      <p>
        We use Beehiiv as our newsletter and email delivery provider. Beehiiv
        stores your email address and subscription data and sends the emails on
        our behalf. It collects the open and click data described above. It
        processes your data under its own terms and privacy policy, which you
        can read on its website.
      </p>

      <h2>Why we use it, and our legal basis</h2>
      <p>
        We use your data to send you the weekly newsletter and to understand,
        in aggregate, which topics readers find useful. Our legal basis is your
        consent, which you give by subscribing. You can withdraw it at any time
        by unsubscribing.
      </p>

      <h2>We don&apos;t sell your data</h2>
      <p>
        We do not sell, rent or trade your personal data. We share it only with
        the service providers needed to run the newsletter (such as Beehiiv), or
        where the law requires it.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your data until you unsubscribe. After that, your address is
        removed from our active list, apart from any minimal record we must keep
        to honour your unsubscribe or to comply with the law.
      </p>

      <h2>Unsubscribing</h2>
      <p>
        Every email we send contains an unsubscribe link in the footer. One
        click removes you from the list.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access the
        personal data we hold about you, to have it corrected or deleted, to
        object to or restrict its use, and to receive a copy of it. To make a
        request, email us at {CONTACT_EMAIL}. We will respond within a
        reasonable time.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This website does not use advertising cookies and we do not run
        third-party advertising trackers. The embedded subscribe form is
        provided by Beehiiv and may set or read minimal cookies or similar
        technology, for example to remember that you already subscribed or
        dismissed the form, and to measure sign-ups. Any analytics we use are
        limited to basic, aggregate figures.
      </p>

      <h2>Children</h2>
      <p>
        The Wedge is not directed at children under 16, and we do not knowingly
        collect personal data from them. If you believe a child has subscribed,
        contact us at {CONTACT_EMAIL} and we will delete the data.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last
        updated&rdquo; date at the top shows when it last changed. If we make a
        significant change, we will let subscribers know in the newsletter.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Email us at {CONTACT_EMAIL}.
      </p>
    </LegalPage>
  );
}
