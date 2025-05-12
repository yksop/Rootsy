import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  const lastUpdated = "May 1, 2025"

  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-green max-w-none mb-12">
        <p>
          At Rootsy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our website, mobile application, and services (collectively, the
          "Services").
        </p>
        <p>
          Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have
          read, understood, and agree to be bound by this Privacy Policy.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              1. Information We Collect
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="font-medium">Personal Information</p>
              <p>
                We may collect personal information that you voluntarily provide to us when you register for an account,
                express interest in obtaining information about us or our Services, participate in activities on our
                Services, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Password</li>
                <li>Profile information (such as profile pictures, bio, etc.)</li>
                <li>Payment information</li>
              </ul>

              <p className="font-medium mt-4">Automatically Collected Information</p>
              <p>We may also collect certain information automatically when you visit our Services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Usage data (such as pages visited, time spent on pages, etc.)</li>
                <li>Location data</li>
              </ul>

              <p className="font-medium mt-4">Information from Third Parties</p>
              <p>
                We may receive information about you from third parties, such as social media platforms, payment
                processors, and other websites that integrate with our Services.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              2. How We Use Your Information
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing, maintaining, and improving our Services</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending administrative information, such as updates to our Terms and Privacy Policy</li>
                <li>Sending marketing and promotional communications</li>
                <li>Personalizing your experience on our Services</li>
                <li>Monitoring and analyzing usage and trends</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Protecting the security and integrity of our Services</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              3. How We Share Your Information
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>With Service Providers:</strong> We may share your information with third-party vendors,
                  service providers, contractors, or agents who perform services for us.
                </li>
                <li>
                  <strong>With Other Users:</strong> When you share personal information or interact with other users on
                  our Services, such information may be viewed by all users and may be publicly available.
                </li>
                <li>
                  <strong>With Business Partners:</strong> We may share your information with our business partners to
                  offer you certain products, services, or promotions.
                </li>
                <li>
                  <strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we
                  will require those affiliates to honor this Privacy Policy.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
                  during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
                  consent.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law
                  or in response to valid requests by public authorities.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-lg py-4">4. Your Privacy Rights</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access the personal information we have about you</li>
                <li>The right to request that we correct or update your personal information</li>
                <li>The right to request that we delete your personal information</li>
                <li>The right to object to the processing of your personal information</li>
                <li>The right to request that we restrict the processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw your consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the contact information provided at the end of this
                Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-lg py-4">5. Data Security</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the
                security of any personal information we process. However, despite our safeguards and efforts to secure
                your information, no electronic transmission over the Internet or information storage technology can be
                guaranteed to be 100% secure.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium text-lg py-4">6. Data Retention</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in
                this Privacy Policy. We will retain and use your information to the extent necessary to comply with our
                legal obligations, resolve disputes, and enforce our policies.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-medium text-lg py-4">7. Children's Privacy</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and you are aware that your child
                has provided us with personal information, please contact us.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              8. Changes to This Privacy Policy
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left font-medium text-lg py-4">9. Contact Us</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                Rootsy
                <br />
                123 Plant Street
                <br />
                New York, NY 10001
                <br />
                Email: privacy@rootsy.com
                <br />
                Phone: (800) 555-1234
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center">
        <p className="mb-6 text-muted-foreground">
          By using Rootsy, you acknowledge that you have read and understood this Privacy Policy.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Accept Privacy Policy</Button>
      </div>
    </div>
  )
}
