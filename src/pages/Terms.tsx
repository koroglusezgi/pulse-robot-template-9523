import React from 'react';
import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (


    <div className="min-h-screen">
      <Navbar />
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 mt-5">
      <h1 className="text-4xl font-bold text-center mb-8">Kotodama AI – Terms & Conditions</h1>

      <Section>
        <p><strong>Effective Date:</strong> July 22, 2025</p>
        <p className="mt-2">
          These Terms and Conditions ("Terms") form a legally binding agreement between you ("User") and <strong>Proksi Yazılım ve Tasarım Hizmetleri Bilgisayar İthalat İhracat Ticaret Limited Şirketi</strong> ("Proksi Yazılım"), located at Teknopark Ankara, regarding your use of the <strong>Kotodama AI</strong> mobile application and related services (the "App" or "Services").
        </p>
        <p className="mt-2">
          By downloading, accessing, or using the App, you agree to these Terms and our <a href="https://www.kotodama.app/privacy" className="text-blue-600 underline">Privacy Policy</a>. If you do not agree, you must stop using Kotodama AI immediately.
        </p>
      </Section>

      <Section title="1. Eligibility">
        <p>You must be at least 18 years old to use Kotodama AI. By using the App, you confirm that you meet this requirement. Users under 18 are not permitted to create accounts or use the Services.</p>
      </Section>

      <Section title="2. Scope of Services">
        <p>Kotodama AI provides tools to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Clone your own voice or voices you are legally authorized to use.</li>
          <li>Generate realistic speech in over 30 languages.</li>
          <li>Create, edit, and export professional-quality audio projects.</li>
          <li>Store your content securely on our cloud servers.</li>
        </ul>
        <p className="mt-2">
          You must not use Kotodama AI for illegal, harmful, defamatory, fraudulent, or infringing purposes. Any misuse, including unauthorized voice cloning (without documented consent), generating misleading or illegal content, or attempting to reverse-engineer the App, may lead to immediate suspension or termination of your account without refund.
        </p>
      </Section>

      <Section title="3. Consent for Voice Cloning">
        <p>You may only upload or clone voices you own or for which you have written or verifiable consent from the voice owner. By using our Services, you represent and warrant that you have obtained all necessary rights and licenses. You agree to indemnify and hold harmless Proksi Yazılım from any claims arising from your breach of this requirement.</p>
      </Section>

      <Section title="4. License Grant">
        <p>Proksi Yazılım grants you a personal, non-exclusive, non-transferable, revocable license to download and use the App on your device for lawful purposes. All rights not expressly granted are reserved by Proksi Yazılım.</p>
      </Section>

      <Section title="5. User Content and AI-Generated Content">
        <p>You retain ownership of any text, audio, or materials you upload ("User Content"). By uploading content, you grant Proksi Yazılım a worldwide, royalty-free license to process, store, and use your User Content solely to provide the Services.</p>
        <p className="mt-2">
          Any AI-generated content ("Generated Content") created via the App is licensed to you royalty-free for lawful personal or commercial use, subject to these Terms and applicable laws. Proksi Yazılım does not claim ownership of Generated Content.
        </p>
      </Section>

      <Section title="6. Data Retention and Privacy">
        <p>Kotodama AI processes and stores User Content, cloned voices, and project data on encrypted servers. Data is retained for as long as your account is active and for up to 30 days after account deletion, after which it will be permanently deleted or anonymized unless longer retention is required by law. You may request deletion at any time by contacting <a href="mailto:support@kotodama.app" className="text-blue-600 underline">support@kotodama.app</a>. Details are outlined in our <a href="https://www.kotodama.app/privacy" className="text-blue-600 underline">Privacy Policy</a>.</p>
      </Section>

      <Section title="7. Subscriptions, Payments, and Refunds">
        <p>Subscriptions and purchases are managed through the Apple App Store or Google Play, following their billing and refund policies. Subscriptions auto-renew unless canceled at least 24 hours before renewal. If Kotodama AI is discontinued or a core feature is removed, we will provide prorated refunds or credits where legally required.</p>
      </Section>

      <Section title="8. Connectivity and Third-Party Services">
        <p>Some features require an internet connection. You are responsible for any carrier or data charges. Kotodama AI integrates with third-party services (e.g., Firebase, Meta) governed by their own terms and privacy policies.</p>
      </Section>

      <Section title="9. Updates and Termination">
        <p>We may update, modify, or discontinue the App at any time. Updates may be mandatory to maintain functionality. We may suspend or terminate your account for violating these Terms or applicable laws. Upon termination, we will delete your stored data unless retention is legally required.</p>
      </Section>

      <Section title="10. Intellectual Property">
        <p>All intellectual property in Kotodama AI, including software, algorithms, AI models, branding, and databases, belongs to Proksi Yazılım. You may not reproduce, modify, distribute, or create derivative works of the App without prior written permission.</p>
      </Section>

      <Section title="11. Acceptable Use Restrictions">
        <p>You agree not to use Kotodama AI to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Create deceptive, fraudulent, or defamatory deepfakes.</li>
          <li>Impersonate political figures, celebrities, or individuals without consent.</li>
          <li>Violate any local, national, or international laws.</li>
        </ul>
      </Section>

      <Section title="12. Indemnity">
        <p>You agree to defend, indemnify, and hold harmless Proksi Yazılım from any claims, damages, or liabilities arising from your User Content, Generated Content, misuse of the App, or breach of these Terms.</p>
      </Section>

      <Section title="13. Warranty Disclaimer">
        <p>The App is provided "as is" and "as available," without any warranties, express or implied. We do not guarantee uninterrupted or error-free operation, or that generated voices will meet your specific expectations.</p>
      </Section>

      <Section title="14. Limitation of Liability">
        <p>To the fullest extent permitted by law, Proksi Yazılım shall not be liable for indirect, incidental, or consequential damages. Our total liability for any claim shall not exceed the total fees paid by you in the twelve (12) months preceding the claim.</p>
      </Section>

      <Section title="15. Dispute Resolution and Governing Law">
        <p>These Terms are governed by the laws of the Republic of Turkey. Before filing any lawsuit, both parties agree to first attempt to resolve disputes through good-faith negotiation and, if unsuccessful, binding arbitration under the rules of the Istanbul Arbitration Centre (ISTAC). Any legal proceedings not subject to arbitration shall be brought exclusively in the courts and enforcement offices of Ankara, Turkey.</p>
      </Section>

      <Section title="16. Changes to Terms">
        <p>We may revise these Terms periodically. The latest version will be posted at <a href="https://www.kotodama.app/terms" className="text-blue-600 underline">https://www.kotodama.app/terms</a>. Continued use of the App constitutes your acceptance of the updated Terms.</p>
      </Section>

      <Section title="17. Contact Us">
        <p>For questions or concerns, please contact us at: <a href="mailto:support@kotodama.app" className="text-blue-600 underline">support@kotodama.app</a></p>
        <p><strong>Proksi Yazılım ve Tasarım Hizmetleri Bilgisayar İthalat İhracat Ticaret Limited Şirketi</strong><br />
          Teknopark Ankara, Turkey
        </p>
      </Section>

      <footer className="text-sm text-center text-gray-500 mt-12">
        &copy; 2025 Proksi Yazılım. All rights reserved.
      </footer>
    </div>
     </div>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
