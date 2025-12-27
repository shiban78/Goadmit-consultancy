import { FileText, Compass, GraduationCap, Plane, Users, Award } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Career Counseling",
    description:
      "Personalized guidance to help you choose the right course and university based on your goals and profile.",
  },
  {
    icon: FileText,
    title: "Application Support",
    description: "End-to-end assistance with applications, SOPs, LORs, and all documentation requirements.",
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert recommendations from our network of 50+ partner universities across the globe.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Complete visa guidance with 98% success rate. We prepare you for interviews and documentation.",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Mock interviews and coaching to help you confidently face university admission interviews.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Identify and apply for scholarships to make your dream education more affordable.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Comprehensive Support for Your Education Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial counseling to visa approval, we guide you through every step of the admission process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-sky-50 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
