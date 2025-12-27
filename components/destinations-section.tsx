const destinations = [
  {
    country: "United State",
    flag: "US",
    universities: "Harvard, MIT, Stanford & more",
    students: "150+ placed",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    universities: "Oxford, Cambridge, Imperial & more",
    students: "120+ placed",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    universities: "Toronto, UBC, McGill & more",
    students: "100+ placed",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    universities: "Melbourne, Sydney, ANU & more",
    students: "80+ placed",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    universities: "TUM, LMU, Heidelberg & more",
    students: "50+ placed",
  },
 {
  country: "India",
  flag: "🇮🇳",
  universities: "IITs, IIMs, AIIMS & more",
  students: "200+ placed",
},
{
  country: "Uzbekistan",
  flag: "🇺🇿",
  universities: "Top Medical & Technical Universities",
  students: "90+ placed",
},
{
  country: "Georgia",
  flag: "🇬🇪",
  universities: "Tbilisi, Batumi, European Universities & more",
  students: "70+ placed",
},
{
  country: "Kazakhstan",
  flag: "🇰🇿",
  universities: "NU, KazNMU, KBTU & more",
  students: "60+ placed",
},

]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Study Destinations</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Your Dream University Awaits
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We have successfully placed students in top universities across these popular destinations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.country}
              className="group p-6 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-primary bg-sky-50 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{dest.flag}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{dest.country}</h3>
                  <p className="text-sm text-primary font-medium">{dest.students}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{dest.universities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
