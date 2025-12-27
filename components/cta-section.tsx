import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
          Ready to streamline your workflow?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of teams already using StreamLine to automate their processes and boost productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          No credit card required. Start your 14-day free trial today.
        </p>
      </div>
    </section>
  )
}
