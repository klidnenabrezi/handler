import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              <span className="gradient-brand-text">Customization</span> meets{" "}
              <span className="gradient-brand-text">Performance</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              [Placeholder: Hero subtitle describing Handler Lab's custom PC building service]
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="gradient-brand text-primary-foreground hover:opacity-90">
                <Link to="/start-your-build">Start Your Build</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background gradient decoration */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary blur-3xl" />
          <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-accent blur-3xl" />
        </div>
      </section>

      {/* About Us */}
      <section className="border-t border-border py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">About Us</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              [Placeholder: About section describing Handler Lab's mission, values, and what makes us different]
            </p>
          </div>
        </div>
      </section>

      {/* Featured Builds (Placeholder for future) */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Featured Builds</h2>
            <p className="mt-6 text-muted-foreground">
              [Placeholder: This section is reserved for showcasing custom PC builds in the future]
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-muted-foreground">[Build 1]</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-muted-foreground">[Build 2]</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-muted-foreground">[Build 3]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
