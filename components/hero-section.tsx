import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const highlights = ["500+ Students Placed", "50+ Partner Universities", "98% Visa Success Rate"]

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Trusted by 500+ Students</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Gateway to <span className="text-primary">World-Class Education</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-0">
              Expert admission consulting for top universities in India and abroad. Let GoAdmit guide you to your dream
              college with personalized support every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Link href="/inquiry">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-slate-50"
              >
                <Link href="tel:9141103537">Call Now: 9141103537</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/diverse-students-graduating-celebrating-with-caps-.jpg"
                alt="Students celebrating graduation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 border border-border rounded-xl p-4 shadow-lg bg-sidebar-accent">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary px-0 py-2.5 opacity-100 leading-7 tracking-tighter">98%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Admission</p>
                  <p className="text-xs text-muted-foreground">Approval Rate</p>
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
