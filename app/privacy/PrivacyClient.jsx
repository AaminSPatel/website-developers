"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle, Badge } from "@/components/ui";
import { MdSecurity, MdCookie, MdLock, MdContactSupport, MdUpdate, MdDataUsage } from "react-icons/md";
import { FaUserSecret, FaServer } from "react-icons/fa";

export function PrivacyClient() {
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
          <Badge variant="outline" className="mb-4">Data Protection</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We value your trust. Here is how we protect your data while delivering exceptional web development services.
            <br />
            <span className="text-sm flex items-center justify-center gap-2 mt-4 text-muted-foreground/80">
              <MdUpdate /> Effective Date: <time dateTime={new Date().toISOString()}>{lastUpdated}</time>
            </span>
          </p>
        </motion.div>
      </header>

      {/* Content Section */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
            <p>
              At <strong>Website Developers India</strong>, we are committed to protecting the privacy and security of our clients and website visitors. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to safeguard your data in compliance with Indian IT Laws and GDPR standards.
            </p>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* 1. Information Collection */}
            <motion.section variants={itemVariants} id="collection">
              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdDataUsage className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We collect information to provide better services to our users. This includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Personal Information</h3>
                      <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                        <li>Name & Job Title</li>
                        <li>Email Address & Phone Number</li>
                        <li>Billing Address (for invoicing)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Project Data</h3>
                      <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                        <li>Website Content & Assets</li>
                        <li>Server Access Credentials (encrypted)</li>
                        <li>Domain Registrar Details</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* 2. Usage of Information */}
            <motion.section variants={itemVariants} id="usage">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserSecret className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">2. How We Use Your Data</h2>
                  </div>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>To deliver requested web development and SEO services.</li>
                    <li>To communicate regarding project milestones, updates, and invoices.</li>
                    <li>To improve our website functionality through anonymous analytics.</li>
                    <li>To comply with legal obligations and tax regulations in India.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* 3. Third-Party Sharing */}
            <motion.section variants={itemVariants} id="sharing">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaServer className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">3. Third-Party Services</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We do not sell your data. However, we may share necessary data with trusted third-party providers to facilitate our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Hosting Providers:</strong> (e.g., Vercel, AWS) for deploying your website.</li>
                    <li><strong>Analytics:</strong> (e.g., Google Analytics) to track website performance.</li>
                    <li><strong>Payment Gateways:</strong> (e.g., Razorpay, PayPal) for secure transaction processing.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* 4. Security Measures */}
            <motion.section variants={itemVariants} id="security">
              <Card className="border-l-4 border-l-green-500 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdSecurity className="text-green-600 text-2xl" />
                    <h2 className="text-2xl font-bold">4. Data Security</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <MdLock className="mx-auto text-primary text-2xl mb-2" />
                      <h3 className="font-semibold text-sm">SSL Encryption</h3>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <MdSecurity className="mx-auto text-primary text-2xl mb-2" />
                      <h3 className="font-semibold text-sm">Secure Databases</h3>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <FaUserSecret className="mx-auto text-primary text-2xl mb-2" />
                      <h3 className="font-semibold text-sm">NDA Available</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* 5. Cookie Policy */}
            <motion.section variants={itemVariants} id="cookies">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdCookie className="text-orange-500 text-2xl" />
                    <h2 className="text-2xl font-bold">5. Cookie Policy</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Our website uses cookies to enhance user experience. These are small text files stored on your device. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* 6. User Rights */}
            <motion.section variants={itemVariants} id="rights">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MdContactSupport className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">6. Your Rights</h2>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction of inaccurate data.</li>
                    <li>Request deletion of your data (Right to be Forgotten).</li>
                    <li>Withdraw consent for marketing communications.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* Contact Info */}
            <motion.section variants={itemVariants} id="contact">
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Contact Privacy Officer</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions or concerns regarding this Privacy Policy, please reach out to us directly.
                  </p>
                  <a href="mailto:privacy@websitedevelopers.com" className="text-primary font-semibold hover:underline text-lg">
                    aswebsitedevelopers@gmail.com
                  </a>
                </CardContent>
              </Card>
            </motion.section>

          </motion.div>
        </div>
      </article>
    </main>
  );
}