
import { PageHeader } from "@/components/shared/page-header";

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
      />
      <div className="container mx-auto py-20">
        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
          <h2>1. Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
          
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Culinary Canvas's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on Culinary Canvas's website are provided "as is". Culinary Canvas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Culinary Canvas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Culinary Canvas's website.
          </p>

          <h2>5. Revisions and Errata</h2>
          <p>
            The materials appearing on Culinary Canvas's website could include technical, typographical, or photographic errors. Culinary Canvas does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
          
          <h2>6. Governing Law</h2>
          <p>
            Any claim relating to Culinary Canvas's website shall be governed by the laws of the State without regard to its conflict of law provisions.
          </p>

          <h2>7. Site Terms of Use Modifications</h2>
          <p>
            Culinary Canvas may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
          </p>
        </div>
      </div>
    </div>
  );
}
