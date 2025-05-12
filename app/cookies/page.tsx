import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  const lastUpdated = "May 1, 2025"

  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading tracking-tight mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-green max-w-none mb-12">
        <p>
          This Cookie Policy explains how Rootsy ("we", "us", or "our") uses cookies and similar technologies on our
          website and mobile application (collectively, the "Services"). This Cookie Policy should be read together with
          our Privacy Policy and Terms of Service.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-lg py-4">1. What Are Cookies?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
                a website. Cookies are widely used to make websites work more efficiently and provide information to the
                website owners.
              </p>
              <p>Cookies help us enhance your experience on our Services by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remembering your preferences and settings</li>
                <li>Keeping you signed in</li>
                <li>Understanding how you use our Services</li>
                <li>Tailoring content and advertisements to your interests</li>
                <li>Improving the speed and security of our Services</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              2. Types of Cookies We Use
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for our Services to function properly.
                  They enable core functionality such as security, network management, and account access. You cannot
                  opt out of these cookies.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These cookies allow us to remember your preferences and settings,
                  such as language and region, to provide a more personalized experience.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our
                  Services by collecting and reporting information anonymously. This helps us improve our Services.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies track your online activity to help advertisers
                  deliver more relevant advertising or to limit how many times you see an ad. These cookies can share
                  information with other organizations or advertisers.
                </li>
                <li>
                  <strong>Social Media Cookies:</strong> These cookies are set by social media services that we have
                  added to our Services to enable you to share our content with your friends and networks.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-lg py-4">3. Third-Party Cookies</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>Some cookies are placed by third parties on our Services. These third parties may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analytics providers (such as Google Analytics)</li>
                <li>Advertising networks</li>
                <li>Social media platforms</li>
                <li>Payment processors</li>
              </ul>
              <p>
                These third parties may use cookies, web beacons, and similar technologies to collect information about
                your use of our Services and other websites. This information may be used to, among other things,
                analyze and track data, determine the popularity of certain content, and better understand your online
                activity.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-lg py-4">4. Cookie Management</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit
                the ability of websites to set cookies, you may worsen your overall user experience, as it will no
                longer be personalized to you. It may also stop you from saving customized settings like login
                information.
              </p>
              <p>To manage cookies in your web browser, you can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Chrome:</strong> Click the three dots in the top right corner, select "Settings,"
                  scroll down and click on "Advanced," then select "Privacy and security" and "Site Settings," then
                  "Cookies and site data."
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Click the three lines in the top right corner, select "Options,"
                  choose "Privacy & Security" on the left, and go to the "Cookies and Site Data" section.
                </li>
                <li>
                  <strong>Safari:</strong> Go to "Preferences," select the "Privacy" tab, and then choose your preferred
                  cookie settings.
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Click the three dots in the top right corner, select "Settings," then
                  "Site permissions," and then "Cookies and site data."
                </li>
              </ul>
              <p>
                You can also use tools like the Digital Advertising Alliance's WebChoices tool
                (www.aboutads.info/choices) to opt out of interest-based advertising by certain third parties.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-lg py-4">5. Do Not Track</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have
                your online activities tracked. Currently, there is no standard for how online services should respond
                to "Do Not Track" signals, and we do not currently respond to such signals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium text-lg py-4">
              6. Updates to This Cookie Policy
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
                business practices. Any changes will become effective when we post the revised Cookie Policy on our
                Services. We encourage you to periodically review this page for the latest information on our cookie
                practices.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-medium text-lg py-4">7. Contact Us</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
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
          By continuing to use our Services, you consent to our use of cookies as described in this Cookie Policy.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700">Accept All Cookies</Button>
          <Button variant="outline">Manage Cookie Preferences</Button>
        </div>
      </div>
    </div>
  )
}
