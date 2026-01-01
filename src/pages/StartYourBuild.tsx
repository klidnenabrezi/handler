import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const StartYourBuild = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              Start Your <span className="gradient-brand-text">Build</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              [Placeholder: Introduction to the questionnaire and what to expect]
            </p>
          </div>
        </div>
      </section>

      {/* Questionnaire Placeholder */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Placeholder Question 1 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">[Question 1]</h3>
                <p className="mt-2 text-muted-foreground">
                  [Placeholder: Question about budget, use case, or preferences]
                </p>
                <div className="mt-4 h-12 rounded-md border border-input bg-muted/50" />
              </div>

              {/* Placeholder Question 2 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">[Question 2]</h3>
                <p className="mt-2 text-muted-foreground">
                  [Placeholder: Question about specific requirements]
                </p>
                <div className="mt-4 h-12 rounded-md border border-input bg-muted/50" />
              </div>

              {/* Placeholder Question 3 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">[Question 3]</h3>
                <p className="mt-2 text-muted-foreground">
                  [Placeholder: Question about preferred contact method]
                </p>
                <div className="mt-4 h-12 rounded-md border border-input bg-muted/50" />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="gradient-brand text-primary-foreground hover:opacity-90"
                >
                  Submit Your Build Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartYourBuild;
