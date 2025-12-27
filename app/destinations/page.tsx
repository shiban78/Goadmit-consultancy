import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const destinationDetails = [
  {
    country: "United States",
    flag: "🇺🇸",
    topUniversities: ["Harvard", "MIT", "Stanford", "Yale", "Princeton"],
    highlights: "Home to the world's top universities with excellent career opportunities.",
    avgTuition: "$50,000 - $80,000/year",
    visaAcceptance: "95%",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    topUniversities: ["Oxford", "Cambridge", "Imperial College", "LSE"],
    highlights: "Prestigious universities with rich academic heritage and global recognition.",
    avgTuition: "£20,000 - £35,000/year",
    visaAcceptance: "98%",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    topUniversities: ["University of Toronto", "UBC", "McGill", "McMaster"],
    highlights: "Affordable education with world-class universities and high-quality of life.",
    avgTuition: "CAD 20,000 - 40,000/year",
    visaAcceptance: "96%",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    topUniversities: ["Melbourne", "Sydney", "ANU", "UNSW"],
    highlights: "Great student life, part-time work opportunities, and PR pathways.",
    avgTuition: "AUD 25,000 - 45,000/year",
    visaAcceptance: "94%",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    topUniversities: ["TUM", "LMU", "Heidelberg", "Berlin"],
    highlights: "Low or free tuition with excellent engineering and research programs.",
    avgTuition: "Free - EUR 3,000/year",
    visaAcceptance: "92%",
  },
  {
    country: "India",
    flag: "🇮🇳",
    topUniversities: ["IIT", "IIM", "AIIMS", "Delhi University"],
    highlights: "Affordable and quality education with diverse program options.",
    avgTuition: "₹1,00,000 - 10,00,000/year",
    visaAcceptance: "100%",
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-100 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">Study Destinations</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore top countries where we've successfully placed 700+ students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {destinationDetails.map((dest) => (
                <div key={dest.country} className="p-8 border border-border rounded-xl bg-sky-50 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl">{dest.flag}</span>
                      <h3 className="text-2xl font-semibold text-foreground">{dest.country}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Visa Success</p>
                      <p className="text-lg font-bold text-primary">{dest.visaAcceptance}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{dest.highlights}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Top Universities:</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.topUniversities.map((uni) => (
                        <span key={uni} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Avg. Tuition:</span> {dest.avgTuition}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/inquiry">Get Personalized Guidance</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
