import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const successStories = [
  {
    quote:
      "GoAdmit helped me secure admission to MIT with a full scholarship. Shiban's guidance on my SOP was invaluable. I couldn't have done it without their support!",
    author: "Priya Sharma",
    role: "Admitted to MIT, USA",
    course: "Computer Science",
    initials: "PS",
    university: "MIT",
  },
  {
    quote:
      "The visa preparation was thorough and professional. I got my UK student visa approved on the first attempt. Highly recommend GoAdmit to everyone!",
    author: "Rahul Mehta",
    role: "Admitted to Oxford, UK",
    course: "Business Administration",
    initials: "RM",
    university: "Oxford",
  },
  {
    quote:
      "From university selection to visa approval, the team was with me at every step. Now I'm studying at University of Toronto. Thank you GoAdmit!",
    author: "Ananya Patel",
    role: "Admitted to UofT, Canada",
    course: "Engineering",
    initials: "AP",
    university: "UofT",
  },
  {
    quote:
      "I was unsure about my career path, but the counseling sessions at GoAdmit clarified everything. Now I'm thriving at Stanford!",
    author: "Vikas Kumar",
    role: "Admitted to Stanford, USA",
    course: "Data Science",
    initials: "VK",
    university: "Stanford",
  },
  {
    quote:
      "The application support was exceptional. Every detail was reviewed and improved. Getting into Cambridge was my dream and it came true!",
    author: "Neha Singh",
    role: "Admitted to Cambridge, UK",
    course: "Economics",
    initials: "NS",
    university: "Cambridge",
  },
  {
    quote:
      "GoAdmit's scholarship guidance helped me secure a partial scholarship at UBC. The team's dedication is unmatched!",
    author: "Arjun Desai",
    role: "Admitted to UBC, Canada",
    course: "Medicine",
    initials: "AD",
    university: "UBC",
  },
]

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-100 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">Success Stories</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real stories from 700+ students who achieved their dream admissions with GoAdmit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="p-6 border border-border rounded-xl bg-sky-50 shadow-lg flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed flex-1 text-sm">{story.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                        {story.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{story.author}</p>
                      <p className="text-xs text-primary">{story.university}</p>
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
