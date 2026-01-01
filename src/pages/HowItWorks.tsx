import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "[Step 1 Title]",
    description: "[Placeholder: Description of the first step in the custom PC building process]",
  },
  {
    number: "02",
    title: "[Step 2 Title]",
    description: "[Placeholder: Description of the second step in the process]",
  },
  {
    number: "03",
    title: "[Step 3 Title]",
    description: "[Placeholder: Description of the third step in the process]",
  },
  {
    number: "04",
    title: "[Step 4 Title]",
    description: "[Placeholder: Description of the final step - delivery and support]",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-brand py-16 pb-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              How It <span className="text-white/90">Works</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              [Placeholder: Brief introduction to the custom PC building process]
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide - Floating Card */}
      <section className="relative -mt-20 pb-24">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-background p-8 shadow-2xl md:p-12">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-6 md:gap-12"
                >
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold gradient-brand-text">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 border-l border-border pl-6 md:pl-12">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-brand py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to build your dream PC?
            </h2>
            <p className="mt-4 text-white/80">
              [Placeholder: Encouraging message to start the build process]
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/start-your-build">Start Your Build</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
