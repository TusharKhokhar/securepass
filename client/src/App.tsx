import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";
import { initGA } from "./config/analytics";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import TermsPage from "@/pages/terms";
import PrivacyPage from "./pages/privacy";
import AboutSecurity from "./pages/about-security";
import MythsFacts from "./pages/myths-facts";
import Guides from "./pages/guides";
import Glossary from "./pages/glossary";
import FAQ from "./pages/faq";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-security" component={AboutSecurity} />
      <Route path="/myths-facts" component={MythsFacts} />
      <Route path="/guides" component={Guides} />
      <Route path="/glossary" component={Glossary} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <main>
              <Router />
            </main>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
