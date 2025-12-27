import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started.",
    features: ["Up to 5 team members", "10 automated workflows", "Basic analytics", "Email support", "1GB storage"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For growing teams that need more power.",
    features: [
      "Up to 20 team members",
      "Unlimited workflows",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited team members",
      "Unlimited workflows",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                plan.popular ? "bg-accent/5 border-accent" : "bg-card border-border"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
