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
              [Placeholder: Hero subtitle describing HandlerLab's custom PC building service]
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:opacity-90">
                <Link to="/start-your-build">Start Your Build</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Handler is For */}
      <section className="py-24 gradient-brand">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Who HandlerLab is For</h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              [Placeholder: Describe target audience - gamers, content creators, professionals, enthusiasts who demand custom-built performance machines]
            </p>
          </div>
        </div>
      </section>

      {/* Why Handler Exists */}
      <section className="py-24 gradient-brand">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Why HandlerLab Exists</h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              [Placeholder: Explain the mission - bridging the gap between off-the-shelf PCs and truly personalized builds, delivering expertise and quality]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
