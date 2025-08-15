import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, AlertTriangle, Users, Globe, Clock, TrendingUp, Database, Smartphone, Wifi, Key, EyeOff, BookOpen } from 'lucide-react';

export default function AboutSecurity() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          About Password Security
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Understanding the fundamentals of password security is crucial in today's digital landscape. 
          Learn why strong passwords matter and how to protect yourself from cyber threats.
        </p>
      </div>

      {/* Why Password Security Matters */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Shield className="text-primary mr-3 w-8 h-8" />
            Why Password Security Matters
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <AlertTriangle className="text-red-500 mr-2 w-5 h-5" />
                  The Threat Landscape
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cybercriminals use sophisticated tools to crack weak passwords. Brute force attacks, 
                  dictionary attacks, and credential stuffing can compromise accounts in seconds. 
                  Every year, millions of accounts are breached due to weak password practices.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Users className="text-blue-500 mr-2 w-5 h-5" />
                  Personal Impact
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  A compromised password can lead to identity theft, financial loss, and damage to your 
                  digital reputation. Hackers can access your email, social media, banking, and other 
                  sensitive accounts, causing long-term consequences.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Globe className="text-green-500 mr-2 w-5 h-5" />
                  Global Statistics
                </h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                  <li>• 81% of data breaches involve weak passwords</li>
                  <li>• 59% of people reuse passwords across accounts</li>
                  <li>• 51% of passwords contain personal information</li>
                  <li>• 23% of users have been victims of account takeover</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <TrendingUp className="text-purple-500 mr-2 w-5 h-5" />
                  Growing Threats
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cyber threats are evolving rapidly. AI-powered attacks, sophisticated phishing schemes, 
                  and automated credential stuffing make weak passwords more vulnerable than ever. 
                  Staying ahead requires proactive security measures.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Passwords Work */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Lock className="text-primary mr-3 w-8 h-8" />
            How Passwords Work
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Authentication Process</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                When you enter a password, it's typically hashed using cryptographic algorithms. 
                The server compares the hash of your input with the stored hash to verify your identity.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Password Hashing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Modern systems use secure hashing algorithms like bcrypt, Argon2, or PBKDF2. 
                These add "salt" to passwords and use multiple iterations to prevent rainbow table attacks.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Security Layers</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Strong passwords are just the first layer. Two-factor authentication, biometrics, 
                and session management provide additional security layers to protect your accounts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Attack Methods */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <AlertTriangle className="text-primary mr-3 w-8 h-8" />
            Common Attack Methods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Brute Force Attacks</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Attackers systematically try every possible password combination until they find the correct one.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>Protection:</strong> Use long, complex passwords with mixed character types
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Dictionary Attacks</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Attackers use lists of common words, names, and phrases to guess passwords.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>Protection:</strong> Avoid common words and use random character combinations
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Credential Stuffing</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Attackers use leaked username/password combinations from one service to access other accounts.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>Protection:</strong> Use unique passwords for each account
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Phishing Attacks</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Attackers trick users into revealing passwords through fake websites or emails.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <strong>Protection:</strong> Verify URLs, never click suspicious links, use 2FA
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Password Strength Factors */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Key className="text-primary mr-3 w-8 h-8" />
            What Makes a Password Strong
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">12+</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Length</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Longer passwords are exponentially harder to crack
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">A-Z</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Uppercase</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Include capital letters to increase complexity
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">0-9</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Numbers</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Add digits to expand the character set
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">!@#</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Symbols</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Special characters add maximum complexity
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evolution of Password Security */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Clock className="text-primary mr-3 w-8 h-8" />
            Evolution of Password Security
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Early Days (1960s-1990s)</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Simple text passwords were stored in plain text. Security was minimal, and passwords were often shared or easily guessable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Hashing Era (1990s-2000s)</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Passwords began to be hashed using algorithms like MD5 and SHA-1. However, these were vulnerable to rainbow table attacks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Modern Security (2000s-Present)</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Advanced hashing algorithms like bcrypt, Argon2, and PBKDF2 with salt and multiple iterations provide robust protection.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Future Trends</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Passwordless authentication, biometrics, and hardware security keys are becoming more prevalent, 
                  but strong passwords remain essential for many systems.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Secure Your Passwords?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Now that you understand the importance of password security, use our tools to create strong, 
            secure passwords and protect your digital life.
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
              href="/guides"
              className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Security Guides
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
