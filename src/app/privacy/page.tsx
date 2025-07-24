
import { PageHeader } from "@/components/shared/page-header";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
      />
      <div className="container mx-auto py-20">
        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Culinary Canvas. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and phone number when you make a reservation or use our contact form. We also collect non-personal information, such as browser type and IP address, to improve our website.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
            <ul>
              <li>Process your reservations and requests.</li>
              <li>Improve our website and services.</li>
              <li>Communicate with you about promotions and events, with your consent.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </p>

          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information.
          </p>
          
          <h2>6. Your Consent</h2>
          <p>
            By using our site, you consent to our website's privacy policy.
          </p>

          <h2>7. Changes to Our Privacy Policy</h2>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on {new Date().toLocaleDateString()}.
          </p>

          <h2>8. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information on our Contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
