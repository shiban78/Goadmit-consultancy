import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Compass, GraduationCap, Plane } from "lucide-react"

const serviceDetails = [
  {
    icon: Compass,
    title: "Career Counseling",
    description:
      "Personalized guidance to help you choose the right course and university based on your goals and profile.",
    details: [
      "One-on-one counseling sessions",
      "Career aptitude assessment",
      "Goal-based university shortlisting",
      "Profile evaluation and improvement",
    ],
  },
  {
    icon: FileText,
    title: "Application Support",
    description: "End-to-end assistance with applications, SOPs, LORs, and all documentation requirements.",
    details: [
      "SOP (Statement of Purpose) writing",
      "Letter of Recommendation (LOR) guidance",
      "Resume and CV optimization",
      "Application proofreading and review",
    ],
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert recommendations from our network of 50+ partner universities across the globe.",
    details: [
      "Access to partner universities",
      "Scholarship opportunities",
      "Ranking and placement data",
      "Cost comparison analysis",
    ],
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Complete visa guidance with 98% success rate. We prepare you for interviews and documentation.",
    details: [
      "Visa documentation checklist",
      "Mock visa interviews",
      "Financial documentation help",
      "Post-visa support",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-100 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">Our Services</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support for your education journey from initial counseling to visa approval.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceDetails.map((service) => (
                <div key={service.title} className="p-8 border border-border rounded-xl bg-sky-50 shadow-lg">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
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
