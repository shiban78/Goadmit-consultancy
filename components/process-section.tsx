const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Book a free call with our expert counselors to discuss your goals, profile, and preferences.",
  },
  {
    number: "02",
    title: "Profile Evaluation",
    description: "We analyze your academic background, test scores, and interests to create a personalized plan.",
  },
  {
    number: "03",
    title: "University Shortlisting",
    description: "Get a curated list of universities that match your profile and aspirations.",
  },
  {
    number: "04",
    title: "Application & Visa",
    description: "We guide you through applications, documentation, and visa process until you get your admit.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Simple Steps to Your Dream Admission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes the complex admission journey simple and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-sky-50 shadow-xl rounded-2xl px-2.5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-bold text-primary/10 mb-4 px-px">{step.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 px-0.5">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed border-0 px-0.5">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent -translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
