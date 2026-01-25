"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui";
import { contact } from "../data/Contact";

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Acceptance of Terms</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    By engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Services</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    We provide web development, design, and related digital services. The specific services will be outlined in your project proposal and agreement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Payment Terms</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    <strong>Important:</strong> We require a 40% advance payment before commencing any work. The remaining 60% of the total project cost will be paid during the course of the project as milestones are completed.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                    <li>All payments are non-refundable once work has begun</li>
                    <li>Late payments may result in project delays</li>
                    <li>Additional costs for scope changes will be billed separately</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Project Timeline</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    Project timelines will be agreed upon in writing. We strive to meet all deadlines but cannot guarantee completion dates due to unforeseen circumstances.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Intellectual Property</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    Upon full payment, you will own the intellectual property rights to the final deliverables. We retain rights to showcase the work in our portfolio.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Revisions and Changes</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    A reasonable number of revisions are included in our pricing. Major changes to scope may incur additional charges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Confidentiality</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    We maintain strict confidentiality regarding all client information and project details.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Limitation of Liability</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    Our liability is limited to the amount paid for services. We are not liable for indirect or consequential damages.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    For questions about these Terms and Conditions, please contact us at {contact.email}.
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
