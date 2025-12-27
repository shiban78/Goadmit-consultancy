import { Workflow, Shield, Zap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline your processes with intelligent automation that adapts to your team's needs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance certifications keep your data safe and secure.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance that keeps your team moving forward.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights with real-time dashboards and comprehensive reporting tools.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Faster iteration. More innovation.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The platform for rapid progress. Let your team focus on shipping features instead of managing
            infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
