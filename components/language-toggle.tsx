"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "kn" : "en")}
      className="flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      {language === "en" ? "ಕನ್ನಡ" : "English"}
    </Button>
  )
}
