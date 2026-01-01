import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center gradient-brand">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
              Customization meets Performance
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              [Placeholder: Hero subtitle describing Handler Lab's custom PC building service]
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:opacity-90">
                <Link to="/start-your-build">Start Your Build</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 gradient-brand">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">About Us</h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              [Placeholder: About section describing Handler Lab's mission, values, and what makes us different]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
