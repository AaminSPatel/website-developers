"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Information We Collect</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you contact us through our website, request a quote, or sign up for our services. This may include your name, email address, phone number, and project details.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">How We Use Your Information</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about your projects</li>
                    <li>Send you updates and marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Information Sharing</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Data Security</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Your Rights</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Contact Us</CardTitle>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at privacy@websitedevelopers.com.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
