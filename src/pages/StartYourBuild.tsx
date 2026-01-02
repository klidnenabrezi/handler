import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StartYourBuild = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState("");
  const [useCase, setUseCase] = useState("");
  const [requirements, setRequirements] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [email, setEmail] = useState("");

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
              Tell us about your project and we'll help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Questionnaire */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 - Budget & Use Case */}
              <div className="rounded-lg border border-border bg-card p-6">
                <Label htmlFor="budget" className="text-lg font-semibold">What's your budget range?</Label>
                <p className="mt-2 text-muted-foreground">
                  This helps us recommend the right components for your build.
                </p>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="mt-4">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500">Under $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                    <SelectItem value="2000-plus">$2,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Question 2 - Primary Use Case */}
              <div className="rounded-lg border border-border bg-card p-6">
                <Label htmlFor="useCase" className="text-lg font-semibold">What will you primarily use this build for?</Label>
                <p className="mt-2 text-muted-foreground">
                  Select the main purpose for your new system.
                </p>
                <Select value={useCase} onValueChange={setUseCase}>
                  <SelectTrigger className="mt-4">
                    <SelectValue placeholder="Select primary use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="content-creation">Content Creation</SelectItem>
                    <SelectItem value="professional">Professional Work</SelectItem>
                    <SelectItem value="general">General Use</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Question 3 - Specific Requirements */}
              <div className="rounded-lg border border-border bg-card p-6">
                <Label htmlFor="requirements" className="text-lg font-semibold">Any specific requirements or preferences?</Label>
                <p className="mt-2 text-muted-foreground">
                  Tell us about any must-have features, brands, or specifications.
                </p>
                <Textarea
                  id="requirements"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="E.g., RGB lighting, specific GPU brand, quiet operation..."
                  className="mt-4 min-h-[100px]"
                />
              </div>

              {/* Question 4 - Contact Info */}
              <div className="rounded-lg border border-border bg-card p-6">
                <Label htmlFor="contactMethod" className="text-lg font-semibold">How should we contact you?</Label>
                <p className="mt-2 text-muted-foreground">
                  We'll reach out to discuss your build details.
                </p>
                <Select value={contactMethod} onValueChange={setContactMethod}>
                  <SelectTrigger className="mt-4">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="discord">Discord</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-4"
                />
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
