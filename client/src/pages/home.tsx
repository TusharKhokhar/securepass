import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Sun, Moon } from "lucide-react";
import { PasswordGenerator } from "../components/PasswordGenerator";
import { PasswordStrengthChecker } from "../components/PasswordStrengthChecker";
import { AdSpace } from "../components/AdSpace";
import { SecureTips } from "../components/SecureTips";
import { useTheme } from "../components/ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import { ADSENSE_CONFIG, shouldShowAds } from "../config/adsense";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      toast({
        title: "App Installed",
        description: "SecurePass Pro has been installed successfully!",
      });
    }

    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section: Password Generator */}
          <div className="lg:col-span-5">
            <PasswordGenerator />
          </div>

          {/* Right Section: Password Strength Checker */}
          <div className="lg:col-span-5">
            <PasswordStrengthChecker />
          </div>

          {/* Right Sidebar: Desktop Ads */}
          {/* <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-8 space-y-6">
              <AdSpace 
                size="sidebar"
                adClient={ADSENSE_CONFIG.CLIENT_ID}
                adSlot={ADSENSE_CONFIG.AD_SLOTS.SIDEBAR_1}
                showPlaceholder={!shouldShowAds()}
              />
              <AdSpace 
                size="square"
                adClient={ADSENSE_CONFIG.CLIENT_ID}
                adSlot={ADSENSE_CONFIG.AD_SLOTS.SIDEBAR_2}
                showPlaceholder={!shouldShowAds()}
              />
            </div>
          </div> */}
        </div>

        {/* In-Content Ad Block */}
        {/* <div className="mt-12">
          <AdSpace 
            size="banner" 
            className="rounded-2xl"
            adClient={ADSENSE_CONFIG.CLIENT_ID}
            adSlot={ADSENSE_CONFIG.AD_SLOTS.IN_CONTENT}
            showPlaceholder={!shouldShowAds()}
          />
        </div> */}

        {/* Secure Tips Section */}
        <div className="mt-12">
          <SecureTips />
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                © {new Date().getFullYear()} SecurePass Pro. All rights reserved.
                {" | "}
                <a href="/terms" className="hover:text-primary underline">
                  Terms of Use
                </a>
                {" | "}
                <a href="/privacy" className="hover:text-primary underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}
