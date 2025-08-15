import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle, Shield, Lock, Users, AlertTriangle, Info, CheckCircle, ExternalLink, Clock, Key, Smartphone, Database } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How often should I change my passwords?",
      answer: "The frequency depends on the account type. For high-security accounts like banking and email, change passwords every 3-6 months. For regular accounts, every 6-12 months is sufficient. However, change passwords immediately if you suspect a breach or if the service has been compromised.",
      category: "Password Management",
      icon: Clock
    },
    {
      question: "What makes a password truly secure?",
      answer: "A secure password should be at least 12 characters long, include a mix of uppercase and lowercase letters, numbers, and special characters. It should be unique for each account and avoid common patterns, personal information, or dictionary words. Random generation is the most secure approach.",
      category: "Password Creation",
      icon: Key
    },
    {
      question: "Are password managers safe to use?",
      answer: "Yes, reputable password managers are very safe. They use strong encryption (AES-256) and zero-knowledge architecture, meaning even the service provider cannot access your passwords. They're much safer than using weak, memorable passwords or writing them down. Popular options include LastPass, 1Password, and Bitwarden.",
      category: "Password Managers",
      icon: Database
    },
    {
      question: "What is two-factor authentication and why should I use it?",
      answer: "Two-factor authentication (2FA) adds a second layer of security beyond your password. It requires something you know (password) plus something you have (phone, security key, or authenticator app). Even if your password is compromised, attackers cannot access your account without the second factor. Enable 2FA on all important accounts.",
      category: "Authentication",
      icon: Smartphone
    },
    {
      question: "How can I check if my password has been leaked?",
      answer: "Use trusted breach checking services like HaveIBeenPwned.com or Firefox Monitor. Enter your email addresses to see if they've been involved in known data breaches. If your password was exposed, change it immediately on the affected service and any other accounts using the same password.",
      category: "Security Monitoring",
      icon: AlertTriangle
    },
    {
      question: "Is it safe to use the same password for multiple accounts?",
      answer: "No, never reuse passwords across multiple accounts. If one service is breached, attackers can use those credentials to access your other accounts. This is called credential stuffing and is one of the most common attack methods. Each account should have a unique password.",
      category: "Password Security",
      icon: Lock
    },
    {
      question: "What should I do if I suspect my account has been hacked?",
      answer: "Immediately change your password, enable two-factor authentication if not already enabled, check for suspicious activity, review connected devices and apps, contact the service provider, and monitor your accounts for unusual activity. For financial accounts, also contact your bank or credit card company.",
      category: "Security Incidents",
      icon: Shield
    },
    {
      question: "Are biometric authentication methods (fingerprint, face ID) secure?",
      answer: "Biometric authentication is generally secure and convenient, but it's not perfect. Fingerprints can be copied, and face recognition can be fooled with photos or masks. Use biometrics as part of multi-factor authentication, not as your only security method. Always have a backup authentication method.",
      category: "Authentication",
      icon: Users
    },
    {
      question: "How do I create strong passwords that I can remember?",
      answer: "Use passphrases - combine multiple words with numbers and symbols. For example, 'MyFavoriteColorIsBlue2024!' is both strong and memorable. You can also use a password manager to generate and store truly random passwords. Another technique is to use a memorable sentence and take the first letter of each word.",
      category: "Password Creation",
      icon: Key
    },
    {
      question: "What's the difference between a password and a passphrase?",
      answer: "A password is typically shorter and may include random characters, while a passphrase is longer and uses multiple words. Passphrases are often easier to remember while still being secure. For example, 'CorrectHorseBatteryStaple!' is a passphrase that's both memorable and strong.",
      category: "Password Creation",
      icon: Key
    },
    {
      question: "Should I write down my passwords?",
      answer: "Generally, no. Writing down passwords creates a security risk if the paper is lost or stolen. However, if you must write them down, keep them in a secure location like a locked safe, and never store them digitally in plain text. Better alternatives include password managers or memorization techniques.",
      category: "Password Storage",
      icon: Database
    },
    {
      question: "What are the most common password mistakes to avoid?",
      answer: "Common mistakes include using personal information (birthdays, names), common words or patterns (password123, qwerty), reusing passwords across accounts, using short passwords, and not updating passwords regularly. Also avoid obvious substitutions like 'p@ssw0rd'.",
      category: "Password Security",
      icon: AlertTriangle
    },
    {
      question: "How secure are SMS-based two-factor authentication codes?",
      answer: "SMS-based 2FA is better than no 2FA, but it has vulnerabilities. Attackers can intercept SMS messages through SIM swapping or other methods. Authenticator apps like Google Authenticator or Authy are more secure. Hardware security keys provide the highest level of security.",
      category: "Authentication",
      icon: Smartphone
    },
    {
      question: "What should I do if I forget my password?",
      answer: "Use the account recovery options you set up (backup email, phone number, security questions). If you can't recover the account, contact the service provider's support. For important accounts, consider using a password manager to prevent this situation in the future.",
      category: "Password Recovery",
      icon: HelpCircle
    },
    {
      question: "Are there any passwords that are impossible to crack?",
      answer: "No password is completely impossible to crack, but strong passwords can make it computationally infeasible. A truly random 20-character password with mixed character types would take centuries to crack with current technology. The key is making passwords strong enough that the effort required exceeds the value of the target.",
      category: "Password Security",
      icon: Shield
    },
    {
      question: "How do I know if a website is secure before entering my password?",
      answer: "Look for HTTPS in the URL (not HTTP), check for a padlock icon in the address bar, verify the website URL is correct (watch for typos), and be cautious of unsolicited login requests. Never enter passwords on sites you reached through suspicious links in emails or messages.",
      category: "Security Best Practices",
      icon: Lock
    },
    {
      question: "What's the difference between a data breach and a data leak?",
      answer: "A data breach is an intentional attack where hackers gain unauthorized access to systems and steal data. A data leak is usually accidental, where data is exposed due to misconfiguration, human error, or system vulnerabilities. Both can expose your passwords and personal information.",
      category: "Security Incidents",
      icon: AlertTriangle
    },
    {
      question: "Should I use different passwords for work and personal accounts?",
      answer: "Yes, absolutely. Keep work and personal accounts completely separate. Work accounts may have different security policies and access to sensitive company information. If your personal password is compromised, it shouldn't affect your work accounts and vice versa.",
      category: "Password Management",
      icon: Users
    },
    {
      question: "How do password strength checkers work?",
      answer: "Password strength checkers analyze factors like length, character variety, complexity, and whether the password appears in common password databases. They estimate how long it would take to crack the password using various attack methods. However, not all checkers are equally accurate or trustworthy.",
      category: "Security Tools",
      icon: Info
    },
    {
      question: "What are backup codes and why are they important?",
      answer: "Backup codes are one-time use codes provided when you set up two-factor authentication. They allow you to access your account if you lose your phone or can't use your primary 2FA method. Store them securely (not on your phone) and use them only when necessary.",
      category: "Authentication",
      icon: Key
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Find answers to common questions about password security, authentication methods, 
          and best practices for protecting your digital accounts.
        </p>
      </div>

      {/* Category Overview */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <HelpCircle className="text-primary mr-3 w-7 h-7" />
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                <h3 className="font-semibold text-slate-900 dark:text-white text-center">{category}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-1">
                  {faqs.filter(faq => faq.category === category).length} questions
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const Icon = faq.icon;
          return (
            <Card key={index} className="shadow-xl border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                        {faq.question}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Tips Section */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <CheckCircle className="text-green-500 mr-3 w-7 h-7" />
            Quick Security Checklist
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Immediate Actions</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Enable 2FA on all important accounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use unique passwords for each account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Install a reputable password manager</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Check for data breaches regularly</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Ongoing Practices</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Update passwords regularly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Monitor account activity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep software updated</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Be cautious of phishing attempts</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Scenarios */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <AlertTriangle className="text-primary mr-3 w-8 h-8" />
            Common Security Scenarios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Suspicious Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                You receive an email asking you to verify your account or reset your password.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>What to do:</strong> Don't click any links. Go directly to the official website and check your account status there.
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Unknown Login</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                You get a notification about a login from an unfamiliar location or device.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>What to do:</strong> Change your password immediately and enable 2FA if not already enabled.
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Lost Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Your phone with 2FA apps is lost or stolen.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>What to do:</strong> Use backup codes to access accounts, then set up 2FA on a new device.
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Breach</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A service you use announces a data breach affecting user accounts.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>What to do:</strong> Change your password on that service and any other accounts using the same password.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you're looking for, explore our comprehensive guides 
            and resources to learn more about password security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/guides"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Security Guides
            </a>
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Generate Secure Password
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
