"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "./language-toggle"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const { t } = useLanguage()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      destination: formData.get("destination") as string,
      educationLevel: formData.get("educationLevel") as string,
      course: formData.get("course") as string,
      message: formData.get("message") as string,
      referredBy: formData.get("referredBy") as string,
      referrerPhone: formData.get("referrerPhone") as string,
    }

    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setIsSubmitted(true)
    } catch {
      setError(t("errorMessage"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t("getInTouch")}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t("startYourJourney")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t("contactDescription")}</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("callUs")}</p>
                  <a href="tel:9141103537" className="text-lg font-semibold text-foreground hover:text-primary">
                    9141103537
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("emailUs")}</p>
                  <a
                    href="mailto:contact@goadmit.com"
                    className="text-lg font-semibold text-foreground hover:text-primary"
                  >
                    team.goadmit@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("Founder of GoAdmit")}</p>
                  <p className="text-lg font-semibold text-foreground">Shiban</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-border rounded-2xl p-8 bg-sky-50">
            <div className="flex justify-end mb-4">
              <LanguageToggle />
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t("thankYou")}</h3>
                <p className="text-muted-foreground">{t("successMessage")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("fullName")} *</Label>
                    <Input id="name" name="name" placeholder={t("yourName")} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email")} *</Label>
                    <Input id="email" name="email" type="email" placeholder={t("emailPlaceholder")} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("phoneNumber")} *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder={t("phonePlaceholder")} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">{t("preferredDestination")} *</Label>
                    <Select name="destination" required>
                      <SelectTrigger>
                        <SelectValue placeholder={t("selectCountry")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">{t("usa")}</SelectItem>
                        <SelectItem value="uk">{t("uk")}</SelectItem>
                        <SelectItem value="canada">{t("canada")}</SelectItem>
                        <SelectItem value="australia">{t("australia")}</SelectItem>
                        <SelectItem value="germany">{t("germany")}</SelectItem>
                        <SelectItem value="india">{t("india")}</SelectItem>
                        <SelectItem value="uzbekistan">{t("uzbekistan")}</SelectItem>
                        <SelectItem value="georgia">{t("georgia")}</SelectItem>
                        <SelectItem value="kazakhstan">{t("kazakhstan")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="educationLevel">{t("educationLevel")} *</Label>
                  <Select name="educationLevel" required>
                    <SelectTrigger>
                      <SelectValue placeholder={t("selectEducation")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10th-pass">{t("tenthPass")}</SelectItem>
                      <SelectItem value="12th-pcms">{t("twelfthPCMS")}</SelectItem>
                      <SelectItem value="12th-pcmb">{t("twelfthPCMB")}</SelectItem>
                      <SelectItem value="12th-arts">{t("twelfthArts")}</SelectItem>
                      <SelectItem value="12th-commerce">{t("twelfthCommerce")}</SelectItem>
                      <SelectItem value="diploma">{t("diploma")}</SelectItem>
                      <SelectItem value="undergraduate">{t("undergraduate")}</SelectItem>
                      <SelectItem value="graduate">{t("graduate")}</SelectItem>
                      <SelectItem value="postgraduate">{t("postgraduate")}</SelectItem>
                      <SelectItem value="working-professional">{t("workingProfessional")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">{t("courseField")}</Label>
                  <Input id="course" name="course" placeholder={t("coursePlaceholder")} />
                </div>
                <div className="border-t border-border pt-5 mt-5">
                  <p className="text-sm font-medium text-muted-foreground mb-4">{t("referralInfo")}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="referredBy">{t("whoReferred")}</Label>
                      <Input id="referredBy" name="referredBy" placeholder={t("referrerName")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="referrerPhone">{t("referrerPhone")}</Label>
                      <Input
                        id="referrerPhone"
                        name="referrerPhone"
                        type="tel"
                        placeholder={t("referrerPhonePlaceholder")}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("tellUsGoals")}</Label>
                  <Textarea id="message" name="message" placeholder={t("goalsPlaceholder")} rows={4} />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("submitting")}
                    </>
                  ) : (
                    t("submitInquiry")
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">{t("submitConsent")}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
