import Link from "next/link"
import { Phone, Mail, Instagram, Facebook, Linkedin, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Career Counseling", href: "#services" },
    { label: "University Selection", href: "#services" },
    { label: "Visa Assistance", href: "#services" },
    { label: "Scholarship Guidance", href: "#services" },
  ],
  destinations: [
    { label: "Study in USA", href: "#destinations" },
    { label: "Study in UK", href: "#destinations" },
    { label: "Study in Canada", href: "#destinations" },
    { label: "Study in Australia", href: "#destinations" },
    { label: "Study in Germany", href: "#destinations" },
    { label: "Study in India", href: "#destinations" },
    { label: "Study in Uzbekistan", href: "#destinations" },
    { label: "Study in Georgia", href: "#destinations" },
    { label: "Study in Kazakhstan", href: "#destinations" },
  ],
  quickLinks: [
    { label: "About Us", href: "#" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/goadmit.official?igsh=aWt1OTZsbG53NTg4",
    label: "Instagram",
  },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-primary rounded-lg">
                <img
                  src="/GOadmit.png"
                  alt="GOadmit Logo"
                  className="h-full object-contain p-2 px-0 py-0 rounded-sm border-0 w-full border-t-0 mx-0 text-background leading-3 tracking-normal my-0 mr-0 mt-0"
                />
              </div>
              <span className="text-xl font-bold text-background">GoAdmit</span>
            </Link>
            <p className="text-sm text-background/70 mb-4">
              Expert admission consulting for your dream education in India and abroad.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Mangalore, Karnataka, India
              </div>
              <a
                href="tel:9141103537"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background"
              >
                <Phone className="w-4 h-4" />
                9141103537
              </a>
              <a
                href="mailto:team.goadmit@gmail.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background"
              >
                <Mail className="w-4 h-4" />
                team.goadmit@gmail.com
              </a>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} GoAdmit. All rights reserved. Founder Shiban.
            </p>
            <p className="text-sm text-background/70">Helping students achieve their dream education since 2020.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
