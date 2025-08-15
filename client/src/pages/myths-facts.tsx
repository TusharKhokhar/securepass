import { Card, CardContent } from '@/components/ui/card';
import { X, CheckCircle, AlertTriangle, Info, Shield, Lock, Users, Database, Smartphone, Wifi, Key, EyeOff, Clock, Zap } from 'lucide-react';

export default function MythsFacts() {
  const mythsAndFacts = [
    {
      myth: "Changing passwords often is unnecessary",
      reality: "Regular updates reduce the risk of long-term breaches. Even strong passwords can be compromised over time through data leaks, phishing, or other security incidents. Regular changes limit the window of opportunity for attackers.",
      icon: Clock,
      category: "Password Management",
      explanation: "While frequent password changes can be annoying, they serve as a critical security measure. When passwords are changed regularly, even if an old password is compromised, the attacker's access is limited. The key is finding the right balance - not so frequent that users resort to weak passwords, but often enough to maintain security."
    },
    {
      myth: "Using one password for everything is fine",
      reality: "One leak = full access to your accounts. When you reuse passwords, a single data breach can compromise multiple accounts. Attackers use automated tools to try leaked credentials across popular services.",
      icon: Users,
      category: "Password Reuse",
      explanation: "Credential stuffing attacks are one of the most common and effective attack methods. When a service is breached, attackers obtain millions of username/password combinations. They then use automated tools to try these credentials on other popular services, knowing that many people reuse passwords."
    },
    {
      myth: "Password managers aren't safe",
      reality: "Reputable managers use strong encryption, making them safer than memorizing weak passwords. They protect against phishing, generate strong passwords, and provide secure sharing features.",
      icon: Database,
      category: "Password Managers",
      explanation: "Modern password managers use military-grade encryption (AES-256) and zero-knowledge architecture, meaning even the service provider cannot access your passwords. They're more secure than writing passwords down or using weak, memorable passwords. Additionally, they protect against phishing by only filling passwords on legitimate sites."
    },
    {
      myth: "Complex passwords are impossible to remember",
      reality: "Use passphrases or let password managers handle complexity. A memorable phrase like 'MyFavoriteColorIsBlue2024!' is both strong and easier to remember than random characters.",
      icon: Key,
      category: "Password Creation",
      explanation: "Passphrases combine multiple words with numbers and symbols, creating passwords that are both strong and memorable. For example, 'CorrectHorseBatteryStaple!' is much easier to remember than 'K8#mP$2q' but provides similar security. Password managers can also generate and store truly random passwords for you."
    },
    {
      myth: "Adding numbers to the end makes any password strong",
      reality: "Simple additions like 'password123' are easily cracked. Attackers know these patterns and include them in their attack dictionaries. Real strength comes from complexity and randomness.",
      icon: EyeOff,
      category: "Password Patterns",
      explanation: "Attackers use sophisticated dictionaries that include common words with numbers, years, and simple substitutions. 'Password123' or 'MyName2024' are among the first combinations tried. True password strength comes from using a mix of character types in unpredictable patterns."
    },
    {
      myth: "Two-factor authentication is too complicated",
      reality: "Modern 2FA is simple and provides massive security benefits. Most services offer easy-to-use authenticator apps or SMS codes. The small inconvenience is worth the significant security improvement.",
      icon: Shield,
      category: "Multi-Factor Authentication",
      explanation: "Two-factor authentication adds a second layer of protection beyond your password. Even if your password is compromised, attackers cannot access your account without the second factor. Most authenticator apps are free and easy to set up, requiring just a QR code scan."
    },
    {
      myth: "I don't have anything worth stealing",
      reality: "Even basic accounts have value to attackers. Email accounts can be used for password resets, social media for scams, and personal information for identity theft. Every account is a potential target.",
      icon: AlertTriangle,
      category: "Account Value",
      explanation: "Attackers don't just target financial accounts. Email accounts are particularly valuable because they can be used to reset passwords on other services. Social media accounts can be used for scams targeting your friends and family. Personal information can be sold on the dark web or used for identity theft."
    },
    {
      myth: "Strong passwords are enough protection",
      reality: "Security requires multiple layers. Strong passwords are essential, but you also need 2FA, secure devices, and awareness of phishing attempts. No single measure provides complete protection.",
      icon: Lock,
      category: "Security Layers",
      explanation: "Security is about defense in depth. While strong passwords are crucial, they're just one layer. Two-factor authentication, keeping devices updated, using secure networks, and being aware of phishing attempts all work together to protect your accounts. Think of it as multiple locks on a door."
    },
    {
      myth: "Password strength checkers are always accurate",
      reality: "Online checkers vary in accuracy and some may be malicious. Use trusted tools and understand that real security depends on factors beyond just character complexity.",
      icon: Zap,
      category: "Security Tools",
      explanation: "Not all password strength checkers are created equal. Some may use outdated algorithms or be designed to steal passwords. Trusted tools like those from security companies or built into password managers are more reliable. Remember that strength is also about uniqueness and avoiding common patterns."
    },
    {
      myth: "I can trust my browser to save passwords",
      reality: "Browser password managers offer basic protection but lack advanced security features. Dedicated password managers provide better encryption, secure sharing, and protection against phishing.",
      icon: Smartphone,
      category: "Password Storage",
      explanation: "While browser password managers are better than nothing, they lack many security features found in dedicated password managers. They're vulnerable to malware, don't protect against phishing, and offer limited sharing capabilities. Dedicated managers provide stronger encryption and additional security features."
    }
  ];

  const categories = Array.from(new Set(mythsAndFacts.map(item => item.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Password Security Myths & Facts
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Separate fact from fiction when it comes to password security. Understanding these common misconceptions 
          can help you make better security decisions and protect your digital life.
        </p>
      </div>

      {/* Introduction */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <CardContent className="p-8">
          <div className="flex items-start space-x-4">
            <Info className="text-blue-500 w-8 h-8 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Myths Matter
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Password security myths can lead to dangerous practices that put your accounts at risk. 
                By understanding the facts, you can make informed decisions about your security practices 
                and avoid common pitfalls that attackers exploit.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Myths and Facts Grid */}
      <div className="space-y-8">
        {mythsAndFacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="shadow-xl border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.category}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Myth #{index + 1}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Myth */}
                  <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200/50 dark:border-red-700/50">
                    <div className="flex items-center mb-4">
                      <X className="text-red-500 w-6 h-6 mr-2" />
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Myth</h4>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 italic">
                      "{item.myth}"
                    </p>
                  </div>

                  {/* Reality */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200/50 dark:border-green-700/50">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Reality</h4>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.reality}
                    </p>
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div className="mt-6 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 rounded-xl">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <Info className="text-primary w-4 h-4 mr-2" />
                    Why This Matters
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Category Summary */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Shield className="text-primary mr-3 w-8 h-8" />
            Key Security Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{category}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {mythsAndFacts.filter(item => item.category === category).length} myth{mythsAndFacts.filter(item => item.category === category).length !== 1 ? 's' : ''} debunked
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <AlertTriangle className="text-amber-500 mr-3 w-7 h-7" />
            What You Should Do Now
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Immediate Actions</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Enable two-factor authentication on all important accounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Start using a password manager</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Change any reused passwords to unique ones</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Ongoing Practices</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Regularly review and update your security practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Stay informed about new security threats</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Share security knowledge with family and friends</span>
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
            Ready to Put These Facts Into Practice?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Now that you understand the facts, use our tools to implement strong security practices 
            and protect your digital accounts.
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
              <Lock className="w-5 h-5 mr-2" />
              Security Guides
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
