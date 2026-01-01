import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Confirmation = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full gradient-brand">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold md:text-4xl">
              Thank you for your{" "}
              <span className="gradient-brand-text">submission!</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              [Placeholder: Confirmation message explaining that the build request has been received]
            </p>

            {/* Next Steps */}
            <div className="mt-12 rounded-lg border border-border bg-card p-8">
              <h2 className="text-xl font-semibold">What happens next?</h2>
              <p className="mt-4 text-muted-foreground">
                [Placeholder: Explanation of next steps - Handler Lab will review the request and reach out via the customer's preferred contact channel]
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Confirmation;
