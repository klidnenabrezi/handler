import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

const goalOptions = [
  { id: "smooth-performance", label: "Smooth Performance" },
  { id: "competitive-fps", label: "Competitive FPS" },
  { id: "quiet-cool", label: "Quiet and Cool" },
  { id: "upgrade-path", label: "Future Upgrade Path" },
  { id: "nas-home-server", label: "NAS/Home Server" },
  { id: "other", label: "Not Sure Yet/Others" },
];

const budgetOptions = [
  { id: "low", label: "Low" },
  { id: "mid", label: "Mid" },
  { id: "high-end", label: "High End" },
];

const StartYourBuild = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [otherGoalText, setOtherGoalText] = useState("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [requirements, setRequirements] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [email, setEmail] = useState("");
  const [goalsOpen, setGoalsOpen] = useState(false);

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  const getSelectedGoalsDisplay = () => {
    if (selectedGoals.length === 0) return "";
    const labels = selectedGoals.map(
      (id) => goalOptions.find((opt) => opt.id === id)?.label
    );
    return labels.join(", ");
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
              {/* Question 1 - Goals */}
              <div className="rounded-lg border border-border bg-card p-6">
                <Label className="text-lg font-semibold">What are you aiming for?</Label>
                <p className="mt-2 text-muted-foreground">
                  What matters the most to you? Select all that apply.
                </p>
                <Popover open={goalsOpen} onOpenChange={setGoalsOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={goalsOpen}
                      className="mt-4 w-full justify-between text-left font-normal"
                    >
                      <span className="truncate">
                        {selectedGoals.length > 0
                          ? getSelectedGoalsDisplay()
                          : "Select your goals"}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                    <div className="p-2 space-y-2">
                      {goalOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-muted cursor-pointer"
                          onClick={() => handleGoalToggle(option.id)}
                        >
                          <Checkbox
                            id={option.id}
                            checked={selectedGoals.includes(option.id)}
                            onCheckedChange={() => handleGoalToggle(option.id)}
                          />
                          <label
                            htmlFor={option.id}
                            className="text-sm font-medium leading-none cursor-pointer flex-1"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
                {selectedGoals.includes("other") && (
                  <Input
                    value={otherGoalText}
                    onChange={(e) => setOtherGoalText(e.target.value)}
                    placeholder="Tell us more about what you're looking for..."
                    className="mt-4"
                  />
                )}
              </div>

              {/* Question 2 - Budget */}
              <div className="rounded-lg border border-border bg-card p-6">
                <Label className="text-lg font-semibold">What is your comfort budget?</Label>
                <p className="mt-2 text-muted-foreground">
                  This helps us recommend the right balance.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {budgetOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedBudget === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:bg-muted"
                      }`}
                      onClick={() => setSelectedBudget(option.id)}
                    >
                      <Checkbox
                        id={`budget-${option.id}`}
                        checked={selectedBudget === option.id}
                        onCheckedChange={() => setSelectedBudget(option.id)}
                      />
                      <label
                        htmlFor={`budget-${option.id}`}
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
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
