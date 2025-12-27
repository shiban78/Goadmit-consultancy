const stats = [
  { value: "20 days", description: "saved on daily builds.", company: "TechCorp" },
  { value: "98%", description: "faster time to market.", company: "InnovateCo" },
  { value: "300%", description: "increase in productivity.", company: "ScaleUp" },
  { value: "6×", description: "faster to build + deploy.", company: "DevStudio" },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">{stat.value}</span> {stat.description}
              </p>
              <p className="text-sm font-medium text-muted-foreground">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
