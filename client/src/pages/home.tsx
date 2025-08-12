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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Top AdSense Banner */}
      {/* <AdSpace 
        size="banner" 
        className="mb-6"
        adClient={ADSENSE_CONFIG.CLIENT_ID}
        adSlot={ADSENSE_CONFIG.AD_SLOTS.TOP_BANNER}
        showPlaceholder={!shouldShowAds()}
      /> */}

      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  SecurePass Pro
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Password Generator & Checker
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Install PWA Button */}
              {showInstallButton && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleInstallApp}
                  className="hidden sm:flex"
                >
                  Install App
                </Button>
              )}

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative inline-flex items-center h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              >
                <span className="sr-only">Toggle dark mode</span>
                <span
                  className={`inline-block w-6 h-6 transform bg-white dark:bg-slate-800 rounded-full shadow-lg transition-transform duration-300 ${
                    theme === "dark" ? "translate-x-7" : "translate-x-1"
                  }`}
                >
                  {theme === "dark" ? (
                    <Moon className="text-slate-400 w-4 h-4 flex items-center justify-center h-full w-full" />
                  ) : (
                    <Sun className="text-yellow-500 w-4 h-4 flex items-center justify-center h-full w-full" />
                  )}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

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
      </div>

      {/* Mobile Sticky Ad Bar */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <AdSpace 
          size="mobile" 
          className="shadow-lg rounded-none"
          adClient={ADSENSE_CONFIG.CLIENT_ID}
          adSlot={ADSENSE_CONFIG.AD_SLOTS.MOBILE_STICKY}
          showPlaceholder={!shouldShowAds()}
        />
      </div> */}

      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm mt-8">
        <p>
          © {new Date().getFullYear()} SecurePass Pro. All rights reserved.
          {" | "}
          <a href="/terms" className="hover:text-white underline">
            Terms of Use
          </a>
          {" | "}
          <a href="/privacy" className="hover:text-white underline">
            Privacy Policy
          </a>
        </p>
      </footer>

      {/* Mobile Install Button */}
      {showInstallButton && (
        <div className="lg:hidden fixed bottom-20 right-4 z-40">
          <Button
            onClick={handleInstallApp}
            className="bg-primary hover:bg-primary/90 shadow-lg"
          >
            Install App
          </Button>
        </div>
      )}

      {/* Add bottom padding for mobile to account for sticky ad */}
      <div className="lg:hidden h-16" />
    </div>
  );
}
