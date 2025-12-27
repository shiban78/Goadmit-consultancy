import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "GoAdmit helped me secure admission to MIT with a scholarship. Shiban's guidance on my SOP was invaluable. I couldn't have done it without their support!",
    author: "Priya Sharma",
    role: "Admitted to MIT, USA",
    initials: "PS",
  },
  {
    quote:
      "The visa preparation was thorough and professional. I got my UK student visa approved on the first attempt. Highly recommend GoAdmit to everyone!",
    author: "Rahul Mehta",
    role: "Admitted to Oxford, UK",
    initials: "RM",
  },
  {
    quote:
      "From university selection to visa approval, the team was with me at every step. Now I'm studying at University of Toronto. Thank you GoAdmit!",
    author: "Ananya Patel",
    role: "Admitted to UofT, Canada",
    initials: "AP",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Success Stories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Students Who Made It Happen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who achieved their dream admissions with GoAdmit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border border-border rounded-xl relative bg-sky-50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
