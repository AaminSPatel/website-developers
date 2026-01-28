"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle, Badge, Button } from "@/components/ui";
import { contact } from "../data/Contact";
import { 
  MdGavel, 
  MdAttachMoney, 
  MdCopyright, 
  MdSecurity, 
  MdUpdate,
  MdHandshake,
  MdCode,
  MdWarning
} from "react-icons/md";
import Link from "next/link";

export function TermsClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const lastUpdated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4">Legal Agreement</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent and fair guidelines for our web development services. 
            <br />
            <span className="text-sm flex items-center justify-center gap-2 mt-4">
              <MdUpdate /> Last Updated: <time dateTime={new Date().toISOString()}>{lastUpdated}</time>
            </span>
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Text SEO */}
          <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
            <p>
              Welcome to <strong>Website Developers India</strong>. These Terms and Conditions govern your use of our freelance web development services, including <strong>Custom Next.js Website Design</strong>, <strong>SEO Optimization</strong>, and <strong>Digital Strategy Consultation</strong>. By hiring us, you agree to these terms, ensuring a smooth collaboration for your business growth.
            </p>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* 1. Definitions & Scope */}
            <motion.section variants={itemVariants} id="scope">
              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdHandshake className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">1. Scope of Services</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We provide professional web development services as outlined in your specific project proposal. This includes but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Custom Web Design:</strong> UI/UX design tailored to your brand.</li>
                    <li><strong>Development:</strong> Coding using modern technologies like React.js, Next.js, and Tailwind CSS.</li>
                    <li><strong>SEO Services:</strong> Basic on-page search engine optimization setup.</li>
                    <li><strong>Maintenance:</strong> Ongoing support as per the selected package.</li>
                  </ul>
                  <p className="text-sm bg-muted/50 p-3 rounded">
                    <strong>Note:</strong> Any task outside the agreed scope (e.g., creating extra pages, advanced 3D animations not previously discussed) will be considered an "Add-on" and billed separately.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* 2. Payment Terms */}
            <motion.section variants={itemVariants} id="payment">
              <Card className="border-l-4 border-l-green-500 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdAttachMoney className="text-green-600 text-2xl" />
                    <h2 className="text-2xl font-bold">2. Payment & Milestones</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    To ensure project sustainability and commitment, we follow a strict milestone-based payment structure for all Indian and International clients.
                  </p>
                  
                  

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Standard Payment Schedule</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>40% Advance:</strong> To book the slot and start research.</li>
                        <li>• <strong>30% Mid-Project:</strong> After design approval/development phase.</li>
                        <li>• <strong>30% Final:</strong> Before credentials handover and live deployment.</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Accepted Methods</h3>
                      <p className="text-sm text-muted-foreground">
                        We accept UPI (Google Pay, PhonePe), Bank Transfers (NEFT/IMPS), and PayPal for international clients.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* 3. Client Obligations */}
            <motion.section variants={itemVariants} id="obligations">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdCode className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">3. Client Responsibilities</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    To ensure your project is delivered on time (typically 7-14 days for small business websites), the client agrees to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide all necessary content (text, images, logos) within 5 days of project start.</li>
                    <li>Provide timely feedback (within 24-48 hours) on designs and drafts.</li>
                    <li>Grant necessary access to domain registrars or hosting accounts if required.</li>
                  </ul>
                  <p className="mt-4 text-sm text-red-500/80">
                    * Delays in providing content by the client will result in a corresponding extension of the project deadline.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* 4. Intellectual Property */}
            <motion.section variants={itemVariants} id="ip">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdCopyright className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">4. Intellectual Property Rights</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Upon <strong>full payment</strong> of all dues:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>You (the Client) grant full ownership of the final website design and code.</li>
                    <li>We (the Developer) retain the right to showcase the project in our portfolio and case studies.</li>
                    <li>We retain ownership of any reusable code libraries or boilerplate tools used during development.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* 5. Support & Bug Fixes */}
            <motion.section variants={itemVariants} id="support">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdSecurity className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">5. Warranty & Support</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We stand by the quality of our code.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <h3 className="font-semibold mb-2">30-Day Free Support Window</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide 30 days of free bug-fixing support after the website launch. This covers any broken links, layout issues, or bugs in the code we wrote. It does not cover new feature additions or issues caused by third-party plugins updates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* 6. Legal & Jurisdiction */}
            <motion.section variants={itemVariants} id="legal">
              <Card className="border-l-4 border-l-red-500 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdGavel className="text-red-500 text-2xl" />
                    <h2 className="text-2xl font-bold">6. Governing Law</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. 
                  </p>
                  <p className="text-muted-foreground">
                    Any disputes arising out of this agreement shall be subject to the exclusive jurisdiction of the courts located in <strong>Indore, Madhya Pradesh</strong>.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

             {/* 7. Limitation of Liability */}
             <motion.section variants={itemVariants} id="liability">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdWarning className="text-orange-500 text-2xl" />
                    <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
                  </div>
                  <p className="text-muted-foreground">
                    In no event shall Website Developers India be liable for any indirect, special, or consequential damages, including loss of data or business profits, arising out of the use or inability to use the website delivered. Our total liability is limited to the total amount paid by the client for the specific project.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Contact CTA */}
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about these terms? We believe in transparency.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="default">
                  Contact Us for Clarification
                </Button>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </article>
    </main>
  );
}