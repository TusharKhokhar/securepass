import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Search, Smartphone, CheckCircle, AlertTriangle, Info, ArrowRight, ExternalLink, Clock, Users, Key } from 'lucide-react';

export default function Guides() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Security Guides & Tutorials
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Step-by-step guides to help you implement strong security practices and protect your digital accounts.
        </p>
      </div>

      {/* Guide 1: Create Secure Password */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-6">
              <Key className="text-white w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                How to Create a Secure Password in 5 Steps
              </h2>
              <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  5 minutes
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Beginner
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Start with a Strong Foundation</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Choose a memorable phrase or sentence that's at least 12 characters long. This could be a favorite quote, song lyric, or personal memory.
                </p>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Example:</strong> "My favorite color is blue"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Add Complexity with Character Types</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Mix uppercase and lowercase letters, numbers, and special characters throughout your password, not just at the end.
                </p>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Example:</strong> "MyF@voriteC0lor1sBlu3!"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Make It Unique for Each Account</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Never reuse passwords across multiple accounts. Each service should have its own unique password to prevent credential stuffing attacks.
                </p>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Example:</strong> "MyF@voriteC0lor1sBlu3!-Gmail" for Gmail
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Avoid Common Patterns</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Stay away from predictable sequences, keyboard patterns, or common substitutions that attackers know about.
                </p>
                <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Avoid:</strong> "password123", "qwerty", "123456"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Test Your Password Strength</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Use our password strength checker to verify your password meets security requirements and isn't easily guessable.
                </p>
                <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Tip:</strong> Aim for "Very Strong" or "Excellent" ratings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Guide 2: Check for Leaks */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-6">
              <Search className="text-white w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                How to Check If Your Password Was Leaked
              </h2>
              <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  3 minutes
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Beginner
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Use Trusted Breach Checkers</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Visit reputable websites like HaveIBeenPwned.com or Firefox Monitor to check if your email addresses have been involved in known data breaches.
                </p>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Trusted Sites:</strong> haveibeenpwned.com, monitor.firefox.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Check Multiple Email Addresses</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Don't just check your primary email. Check all email addresses you use for online accounts, including work and personal addresses.
                </p>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Check:</strong> personal@gmail.com, work@company.com, old@yahoo.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Change Compromised Passwords</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  If your password was exposed, change it immediately on the affected service and any other accounts using the same password.
                </p>
                <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Action:</strong> Change password on breached service AND any other accounts using the same password
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Guide 3: Two-Factor Authentication */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-6">
              <Smartphone className="text-white w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                How to Use Two-Factor Authentication
              </h2>
              <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  10 minutes
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Intermediate
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Choose Your 2FA Method</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Most services offer multiple 2FA options: authenticator apps (recommended), SMS codes, email codes, or hardware security keys.
                </p>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Recommended:</strong> Google Authenticator, Authy, or Microsoft Authenticator
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Download Authenticator App</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Download a trusted authenticator app from your device's app store. Popular options include Google Authenticator, Authy, and Microsoft Authenticator.
                </p>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Search:</strong> "Google Authenticator" in App Store or Google Play
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Enable 2FA on Your Account</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Go to your account security settings and look for "Two-Factor Authentication," "2FA," or "Two-Step Verification." Follow the setup process.
                </p>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Path:</strong> Settings → Security → Two-Factor Authentication → Enable
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Scan QR Code & Test</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  When prompted, open your authenticator app and scan the QR code displayed on the website. Enter the code to verify the setup works.
                </p>
                <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Important:</strong> Save backup codes in a secure location for account recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Services 2FA Setup */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Shield className="text-primary mr-3 w-8 h-8" />
            Popular Services: 2FA Setup Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Gmail', icon: '📧', setup: 'Google Account → Security → 2-Step Verification' },
              { name: 'Facebook', icon: '📘', setup: 'Settings → Security and Login → Two-Factor Authentication' },
              { name: 'Twitter', icon: '🐦', setup: 'Settings → Security → Two-Factor Authentication' },
              { name: 'Apple ID', icon: '🍎', setup: 'Settings → Apple ID → Password & Security → Two-Factor Authentication' },
              { name: 'Microsoft', icon: '🪟', setup: 'Account Settings → Security → Advanced Security Options' },
              { name: 'Amazon', icon: '📦', setup: 'Account → Login & Security → Two-Step Verification' },
              { name: 'PayPal', icon: '💳', setup: 'Settings → Security → Two-Factor Authentication' },
              { name: 'Dropbox', icon: '📁', setup: 'Settings → Security → Two-Step Verification' }
            ].map((service, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{service.name}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{service.setup}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <ExternalLink className="text-primary mr-3 w-8 h-8" />
            Additional Security Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Trusted Security Tools</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    HaveIBeenPwned - Check for data breaches
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://monitor.firefox.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    Firefox Monitor - Mozilla's breach checker
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://2fa.directory" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    2FA Directory - Find 2FA-enabled services
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Security Standards</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://pages.nist.gov/800-63-3/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    NIST Digital Identity Guidelines
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    OWASP Top 10 Security Risks
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://www.ncsc.gov.uk/collection/passwords" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    NCSC Password Guidance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Implement These Security Practices?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Now that you have the knowledge, take action to secure your accounts and protect your digital life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Generate Secure Password
            </a>
            <a 
              href="/myths-facts"
              className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Info className="w-5 h-5 mr-2" />
              Learn More Myths & Facts
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
