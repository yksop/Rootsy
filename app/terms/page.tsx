import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  const lastUpdated = "May 1, 2025"

  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-green max-w-none mb-12">
        <p>
          Welcome to Rootsy. These Terms of Service ("Terms") govern your access to and use of the Rootsy website,
          mobile application, and services (collectively, the "Services"). Please read these Terms carefully before
          using our Services.
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms,
          you may not access or use the Services.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-lg py-4">1. Acceptance of Terms</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you
                are using our Services on behalf of a company or other legal entity, you represent that you have the
                authority to bind such entity to these Terms.
              </p>
              <p>
                We may modify these Terms at any time. If we make changes, we will provide notice by posting the updated
                Terms on our website and updating the "Last Updated" date. Your continued use of our Services after such
                notice constitutes your acceptance of the changes.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-lg py-4">2. Account Registration</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                To use certain features of our Services, you may need to create an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all activities that occur under your account.
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
              <p>
                We reserve the right to suspend or terminate your account if any information provided during the
                registration process or thereafter proves to be inaccurate, not current, or incomplete.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              3. Plant Sitting Services
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Rootsy provides a platform for plant owners to connect with plant sitters. We do not provide plant
                sitting services directly. We are not responsible for the actions or inactions of plant sitters or plant
                owners.
              </p>
              <p>
                Plant sitters are independent contractors and not employees or agents of Rootsy. Plant sitters are
                solely responsible for their interactions with plant owners and the care they provide to plants.
              </p>
              <p>
                Plant owners are solely responsible for providing accurate information about their plants and clear care
                instructions to plant sitters.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-lg py-4">4. Marketplace Services</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Rootsy provides a platform for users to buy and sell plants and plant-related products. We do not sell
                products directly. We are not responsible for the quality, safety, legality, or availability of products
                listed on our platform.
              </p>
              <p>
                Sellers are solely responsible for the products they list, including descriptions, pricing, shipping,
                and compliance with applicable laws and regulations.
              </p>
              <p>Buyers are solely responsible for verifying that products meet their needs before purchasing.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-lg py-4">5. Payments and Fees</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Rootsy charges fees for the use of our Services. These fees are described on our website and may be
                updated from time to time.
              </p>
              <p>
                For plant sitting services, we charge a service fee to both plant owners and plant sitters. For
                marketplace transactions, we charge a commission on each sale.
              </p>
              <p>
                All payments are processed through our third-party payment processors. By using our Services, you agree
                to comply with the terms and conditions of our payment processors.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium text-lg py-4">6. User Content</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Our Services allow you to post, link, store, share, and otherwise make available certain information,
                text, graphics, videos, or other material ("User Content"). You are responsible for the User Content
                that you post on or through our Services.
              </p>
              <p>
                By posting User Content on or through our Services, you grant us a worldwide, non-exclusive,
                royalty-free license to use, copy, modify, create derivative works based on, distribute, publicly
                display, publicly perform, and otherwise use your User Content in connection with operating and
                providing our Services.
              </p>
              <p>
                You represent and warrant that: (i) the User Content is yours or you have the right to use it and grant
                us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or
                through our Services does not violate the privacy rights, publicity rights, copyrights, contract rights,
                or any other rights of any person.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-medium text-lg py-4">7. Prohibited Conduct</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violating any applicable law, regulation, or these Terms</li>
                <li>Using our Services for any illegal purpose</li>
                <li>Impersonating any person or entity</li>
                <li>Harassing, abusing, or harming another person</li>
                <li>Sending spam or unsolicited messages</li>
                <li>
                  Attempting to interfere with, compromise the system integrity or security, or decipher any
                  transmissions to or from the servers running our Services
                </li>
                <li>
                  Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure
                </li>
                <li>Uploading invalid data, viruses, worms, or other software agents through our Services</li>
                <li>Collecting or harvesting any personally identifiable information from our Services</li>
                <li>Using our Services for any commercial solicitation purposes without our prior written consent</li>
                <li>Impersonating another user or accessing the account of another user</li>
                <li>Selling or otherwise transferring your account</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left font-medium text-lg py-4">8. Termination</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                We may terminate or suspend your account and access to our Services immediately, without prior notice or
                liability, for any reason, including if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use our Services will immediately cease. If you wish to terminate your
                account, you may simply discontinue using our Services or delete your account through the account
                settings.
              </p>
              <p>
                All provisions of these Terms which by their nature should survive termination shall survive
                termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and
                limitations of liability.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              9. Disclaimer of Warranties
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Our Services are provided "as is" and "as available" without any warranties of any kind, either express
                or implied, including but not limited to the implied warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </p>
              <p>
                We do not warrant that our Services will be uninterrupted or error-free, that defects will be corrected,
                or that our Services or the servers that make them available are free of viruses or other harmful
                components.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              10. Limitation of Liability
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                To the maximum extent permitted by law, in no event shall Rootsy, its directors, employees, partners,
                agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from (i) your access to or use of or inability to access or use our
                Services; (ii) any conduct or content of any third party on our Services; (iii) any content obtained
                from our Services; and (iv) unauthorized access, use, or alteration of your transmissions or content,
                whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or
                not we have been informed of the possibility of such damage.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center">
        <p className="mb-6 text-muted-foreground">
          By using Rootsy, you acknowledge that you have read, understood, and agree to be bound by these Terms of
          Service.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Accept Terms</Button>
      </div>
    </div>
  )
}
