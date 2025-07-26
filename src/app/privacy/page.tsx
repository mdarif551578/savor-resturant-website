
import { PageHeader } from "@/components/shared/page-header";

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Privacy Policy"
        subtitle={`Last updated on ${lastUpdated}`}
        imageSrc="reservation.jpg"
        imageHint="legal document"
      />
      <div className="container mx-auto py-20 animate-fade-in-up">
        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Savor ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a reservation, or use our services. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you make a reservation or use our contact form.
          </p>
          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Process and manage your reservations and requests.</li>
            <li>Email you regarding your reservation or order.</li>
            <li>Improve our website, offerings, and overall customer service.</li>
            <li>With your consent, send you promotional emails about new menu items, special events, or other information which we think you may find interesting.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, rent, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (e.g., reservation systems), so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Your Rights</h2>
           <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul>
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
          <p>To exercise these rights, please contact us using the contact information provided below.</p>
          
          <h2>7. Changes to Our Privacy Policy</h2>
          <p>
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </p>

          <h2>8. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information on our Contact page or by emailing us at <a href="mailto:savor0525@gmail.com" className="text-primary hover:underline">savor0525@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
