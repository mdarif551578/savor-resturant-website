
import { PageHeader } from "@/components/shared/page-header";

export default function TermsOfServicePage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Terms of Service"
        subtitle={`Last updated on ${lastUpdated}`}
        imageSrc="/reservation.jpg"
        imageHint="legal document"
      />
      <div className="container mx-auto py-20 animate-fade-in-up">
        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
            <h2>1. Agreement to Terms</h2>
            <p>
                By accessing this website, you are agreeing to be bound by these website Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
            
            <h2>2. User Representations</h2>
            <p>
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (3) you will not use the Site for any illegal or unauthorized purpose; and (4) your use of the Site will not violate any applicable law or regulation.
            </p>

            <h2>3. Intellectual Property Rights</h2>
            <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only.
            </p>

            <h2>4. Prohibited Activities</h2>
            <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>

            <h2>5. Disclaimer</h2>
            <p>
                The materials on Savor's website are provided on an 'as is' basis. Savor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2>6. Limitations</h2>
            <p>
                In no event shall Savor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Savor's website, even if Savor or a Savor authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>7. Modifications and Interruptions</h2>
            <p>
                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
            </p>

            <h2>8. Governing Law</h2>
            <p>
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the land, applicable to agreements made and to be entirely performed within the jurisdiction, without regard to its conflict of law principles.
            </p>

            <h2>9. Contact Us</h2>
            <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:savor0525@gmail.com" className="text-primary hover:underline">savor0525@gmail.com</a>.
            </p>
        </div>
      </div>
    </div>
  );
}
