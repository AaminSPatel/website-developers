 "use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ServicesSection() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    const sampleServices = [
      { id: 1, title: 'Web Development', description: 'Custom web solutions for your business', icon: 'MdCode' },
      { id: 2, title: 'Mobile Apps', description: 'Cross-platform mobile applications', icon: 'MdPhoneAndroid' },
      { id: 3, title: 'Digital Marketing', description: 'Grow your online presence', icon: 'MdMarketing' }
    ];
    setServices(sampleServices);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive <Link href="/services" className="text-primary font-medium hover:underline">web development solutions</Link> tailored for Indore's Startups, Travel Agencies, and Professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="three-d-box-white">
              <div className="h-full flex flex-col transition-transform  p-6">
                <div className="pt-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <div className="text-primary" style={{fontSize: '24px'}}>📱</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="three-d-box-orange mt-16 bg-background rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4 text-center">Specialized Industries We Serve</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">For Travel Agencies</h4>
              <p>We build high-converting <Link href="/services" className="text-primary underline">travel agency websites</Link> in Indore and Ujjain. Check our <Link href="/projects" className="text-primary underline">travel portfolio</Link> for details.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">For Small Businesses</h4>
              <p>Offering <strong>Affordable Web Design Services in Indore</strong> for local shops and freelancers. Start your <Link href="/contact" className="text-primary underline">online journey</Link> today.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
