import React from 'react';
import Navbar from "@/components/Navbar";


export default function PrivacyPage() {
  return (
    
       <div className="min-h-screen">
      <Navbar />
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 mt-5">
      <h1 className="text-4xl font-bold text-center mb-8">Kotodama AI – Privacy Policy</h1>

      <div className="mb-6">
        <p><strong>Effective Date:</strong> July 22, 2025</p>
        <p className="mt-2">
          This Privacy Policy explains how <strong>Proksi Yazılım ve Tasarım Hizmetleri Bilgisayar İthalat İhracat Ticaret Limited Şirketi</strong> ("Proksi Yazılım," "we," "our") collects, uses, stores, and protects your personal data when you use the <strong>Kotodama AI</strong> mobile application and related services ("App").
        </p>
        <p className="mt-2">
          By using Kotodama AI, you agree to the practices described in this Policy. If you do not agree, please stop using the App.
        </p>
      </div>

      {/* Section 1 */}
      <Section title="1. Data We Collect">
        <p>When you use Kotodama AI, we may collect the following types of data:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Account Information:</strong> Email address, username, subscription status, and payment information (processed securely via Apple App Store or Google Play).</li>
          <li><strong>Voice and Audio Data:</strong> Voice samples, cloned voices, and AI-generated audio you create.</li>
          <li><strong>Project Content:</strong> Scripts, text, and audio projects stored in your account.</li>
          <li><strong>Usage Data:</strong> Device type, IP address, app version, crash logs, and analytics to improve performance.</li>
          <li><strong>Cookies and Tracking:</strong> Through analytics tools (e.g., Firebase) for service optimization.</li>
        </ul>
      </Section>

      {/* Section 2 */}
      <Section title="2. How We Use Your Data">
        <p>We use your data to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Provide, operate, and improve Kotodama AI.</li>
          <li>Store and process your projects securely.</li>
          <li>Personalize your experience and generate AI audio outputs.</li>
          <li>Detect and prevent fraud, misuse, or illegal activities.</li>
          <li>Comply with legal obligations and resolve disputes.</li>
        </ul>
      </Section>

      {/* Section 3 */}
      <Section title="3. Data Retention">
        <p>We retain your User Content, voice samples, and project data while your account is active and for up to 30 days after deletion, unless longer retention is required by law. After this period, your data is permanently deleted or anonymized.</p>
      </Section>

      {/* Section 4 */}
      <Section title="4. How We Share Data">
        <p>We do not sell your data. We only share information with:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Service providers (e.g., cloud hosting, analytics) who process data on our behalf under strict confidentiality agreements.</li>
          <li>Legal authorities if required by law or to protect against fraud or misuse.</li>
        </ul>
      </Section>

      {/* Section 5 */}
      <Section title="5. Your Privacy Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Access, correct, or delete your personal data.</li>
          <li>Request a copy of your stored data.</li>
          <li>Object to or restrict certain processing activities.</li>
          <li>Withdraw consent for data processing at any time.</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, contact us at <a href="mailto:support@kotodama.app" className="text-blue-600 underline">support@kotodama.app</a>. We will respond within legally required timeframes.
        </p>
      </Section>

      {/* Section 6 */}
      <Section title="6. International Data Transfers">
        <p>Your data may be transferred to servers located outside your country, including the European Union and the United States, where data protection laws may differ. We implement safeguards (such as encryption and standard contractual clauses) to protect your information.</p>
      </Section>

      {/* Section 7 */}
      <Section title="7. Children’s Privacy">
        <p>Kotodama AI is not intended for individuals under 18. We do not knowingly collect data from minors. If we discover data from someone under 18, we will delete it promptly.</p>
      </Section>

      {/* Section 8 */}
      <Section title="8. Data Security">
        <p>We use encryption, secure servers, and access controls to protect your information. However, no system is completely secure, and we cannot guarantee absolute security of your data.</p>
      </Section>

      {/* Section 9 */}
      <Section title="9. Third-Party Services">
        <p>Kotodama AI integrates with services like Firebase (analytics) and Meta (authentication/ads). These providers have their own privacy policies, which you should review.</p>
      </Section>

      {/* Section 10 */}
      <Section title="10. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. The latest version will always be available at <a href="https://www.kotodama.app/privacy" className="text-blue-600 underline">https://www.kotodama.app/privacy</a>. Your continued use of Kotodama AI after changes means you accept the updated Policy.</p>
      </Section>

      {/* Section 11 */}
      <Section title="11. Contact Us">
        <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
        <p><a href="mailto:support@kotodama.app" className="text-blue-600 underline">support@kotodama.app</a></p>
        <p><strong>Proksi Yazılım ve Tasarım Hizmetleri Bilgisayar İthalat İhracat Ticaret Limited Şirketi</strong><br />
        Teknopark Ankara, Turkey</p>
      </Section>

      <footer className="text-sm text-center text-gray-500 mt-12">
        &copy; 2025 Proksi Yazılım. All rights reserved.
      </footer>
    </div>
    </div>
  );
}

// Helper component for each section
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
