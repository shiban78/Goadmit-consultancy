// app/components/Header.jsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/admin", label: "Admin" }, // added admin link
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-background bg-transparent">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary rounded-lg w-20 h-14 overflow-hidden">
              {/* Logo inside the box - put /public/goadmit-logo.png */}
              <img
                src="/GOadmit.png"
                alt="GOadmit logo"
                className="object-contain p-1 tracking-normal leading-7 mx-0 py-0 w-full h-fit px-0"
              />
            </div>
            <span className="text-xl font-bold text-foreground">GoAdmit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:9141103537"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Call Now: 9141103537
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/inquiry">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Link
                  href="tel:9141103537"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Call: 9141103537
                </Link>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <Link href="/inquiry">Get Free Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
