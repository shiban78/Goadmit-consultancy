import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, FileText, Plane, Trophy } from "lucide-react"

const steps = [
  {
    icon: CheckCircle,
    number: "01",
    title: "Initial Consultation",
    description:
      "Start with a free consultation where we understand your academic background, career goals, and preferences.",
    details: ["Personality assessment", "Academic profile review", "Career goal discussion", "University shortlisting"],
  },
  {
    icon: FileText,
    number: "02",
    title: "Application Preparation",
    description: "We guide you through the entire application process with expert tips and personalized feedback.",
    details: ["SOP writing and editing", "LOR guidance", "Resume optimization", "Application strategy"],
  },
  {
    icon: Plane,
    number: "03",
    title: "Visa & Documentation",
    description: "Complete visa preparation and documentation support to ensure smooth approval.",
    details: ["Visa document checklist", "Mock visa interviews", "Financial documentation", "Interview coaching"],
  },
  {
    icon: Trophy,
    number: "04",
    title: "Admission & Beyond",
    description: "Secure your admission and get post-admission support for a smooth transition.",
    details: ["Admission tracking", "Accommodation guidance", "Pre-arrival support", "Ongoing mentorship"],
  },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">How It Works</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven 4-step process to guide you from dream to admission.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    {index < steps.length - 1 && <div className="w-1 h-20 bg-primary/20" />}
                  </div>

                  <div className="flex-1 pt-2 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-foreground text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
