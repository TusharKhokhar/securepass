import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, RotateCcw, UserX, EyeOff, Database, Smartphone, Wifi, Key, AlertTriangle, CheckCircle, Clock, Zap, Users, Globe, FileText, Settings, Bell, Search, Download, BookOpen, Target, Award } from 'lucide-react';

export function SecureTips() {
  const tips = [
    {
      icon: Lock,
      title: 'Use Strong Passwords',
      description: 'Create passwords with at least 12 characters, mixing uppercase, lowercase, numbers, and symbols. Avoid predictable patterns and personal information.',
      gradient: 'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
      iconBg: 'bg-emerald-500',
    },
    {
      icon: RotateCcw,
      title: 'Regular Updates',
      description: 'Change your passwords regularly, especially for important accounts like banking and email. Set reminders for quarterly password updates.',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      iconBg: 'bg-blue-500',
    },
    {
      icon: UserX,
      title: 'Unique for Each Account',
      description: 'Never reuse passwords across multiple accounts. Each service should have its own unique password to prevent credential stuffing attacks.',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      iconBg: 'bg-purple-500',
    },
    {
      icon: Shield,
      title: 'Two-Factor Authentication',
      description: 'Enable 2FA whenever possible for an extra layer of security beyond just passwords. Use authenticator apps over SMS when available.',
      gradient: 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20',
      iconBg: 'bg-amber-500',
    },
    {
      icon: EyeOff,
      title: 'Avoid Common Passwords',
      description: 'Never use obvious passwords like "password123", birthdays, or common dictionary words. These are easily cracked by automated tools.',
      gradient: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
      iconBg: 'bg-red-500',
    },
    {
      icon: Database,
      title: 'Use a Password Manager',
      description: 'Consider using a reputable password manager to generate and store complex passwords securely. They can also help detect compromised passwords.',
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20',
      iconBg: 'bg-indigo-500',
    },
    {
      icon: Smartphone,
      title: 'Secure Your Mobile Devices',
      description: 'Use biometric authentication, keep your device updated, and avoid installing apps from untrusted sources. Enable device encryption.',
      gradient: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20',
      iconBg: 'bg-cyan-500',
    },
    {
      icon: Wifi,
      title: 'Public Wi-Fi Safety',
      description: 'Avoid accessing sensitive accounts on public Wi-Fi. Use a VPN if you must connect to public networks to encrypt your traffic.',
      gradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      iconBg: 'bg-orange-500',
    },
    {
      icon: Key,
      title: 'Password Recovery Setup',
      description: 'Set up secure recovery options like backup email addresses and phone numbers for account recovery. Use security questions carefully.',
      gradient: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20',
      iconBg: 'bg-pink-500',
    },
    {
      icon: AlertTriangle,
      title: 'Beware of Phishing',
      description: 'Never click on suspicious links or provide passwords in response to unexpected emails or messages. Verify sender authenticity.',
      gradient: 'from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20',
      iconBg: 'bg-yellow-500',
    },
    {
      icon: CheckCircle,
      title: 'Monitor Account Activity',
      description: 'Regularly check your account activity and enable notifications for suspicious login attempts. Review login history monthly.',
      gradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      iconBg: 'bg-green-500',
    },
    {
      icon: Clock,
      title: 'Session Management',
      description: 'Log out of accounts when finished, especially on shared devices, and clear browser data regularly. Use incognito mode when needed.',
      gradient: 'from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20',
      iconBg: 'bg-slate-500',
    },
  ];

  const securityGuides = [
    {
      icon: Zap,
      title: 'Password Strength Analysis',
      content: 'Learn how to evaluate password strength using our advanced algorithm. We analyze character variety, length, and common patterns to provide accurate security assessments. Strong passwords typically include uppercase and lowercase letters, numbers, and special characters in a random, non-predictable sequence.',
    },
    {
      icon: Users,
      title: 'Family Security Practices',
      content: 'Implement security best practices for your entire family. Teach children about online safety, set up parental controls, and establish guidelines for sharing passwords. Consider using family password managers that allow secure sharing of household accounts while maintaining individual privacy.',
    },
    {
      icon: Globe,
      title: 'International Security Standards',
      content: 'Understand global cybersecurity standards and compliance requirements. Different countries have varying regulations for data protection and password security. Stay informed about GDPR, CCPA, and other privacy laws that affect how your passwords and personal data should be protected.',
    },
    {
      icon: FileText,
      title: 'Security Documentation',
      content: 'Maintain proper documentation of your security practices. Create a secure record of your password policies, recovery procedures, and security protocols. This documentation should be stored securely and updated regularly as your security practices evolve.',
    },
  ];

  const advancedTips = [
    {
      icon: Settings,
      title: 'Advanced Security Settings',
      content: 'Configure advanced security settings on all your accounts. Enable login notifications, set up trusted devices, and configure security questions with answers that are not easily guessable. Many services offer additional security features like login location restrictions.',
    },
    {
      icon: Bell,
      title: 'Security Alerts & Monitoring',
      content: 'Set up comprehensive security monitoring across all your accounts. Enable breach notifications, suspicious activity alerts, and regular security reports. Consider using services that monitor the dark web for your personal information.',
    },
    {
      icon: Search,
      title: 'Regular Security Audits',
      content: 'Conduct regular security audits of your accounts and passwords. Review account permissions, remove unused accounts, and update security settings. Schedule quarterly reviews to ensure your security practices remain current and effective.',
    },
    {
      icon: Download,
      title: 'Secure Backup Strategies',
      content: 'Implement secure backup strategies for your passwords and security information. Use encrypted storage solutions and consider multiple backup locations. Ensure your backup methods are as secure as your primary password storage.',
    },
  ];

  return (
    <div className="space-y-8">
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center">
              <Shield className="text-primary mr-3 w-8 h-8" />
              Comprehensive Password Security Guide
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Protect your digital life with our comprehensive security practices. This guide covers everything from basic password creation to advanced security protocols, helping you build a robust defense against cyber threats in today's interconnected world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br ${tip.gradient} rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className={`w-12 h-12 ${tip.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <tip.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">{tip.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="text-primary mr-3 w-7 h-7" />
            In-Depth Security Guides
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityGuides.map((guide, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                    <guide.icon className="text-white w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{guide.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{guide.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Target className="text-primary mr-3 w-7 h-7" />
            Advanced Security Protocols
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedTips.map((tip, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <tip.icon className="text-white w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{tip.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center">
              <Award className="text-primary mr-3 w-7 h-7" />
              Security Excellence Checklist
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Use this comprehensive checklist to ensure you're following all recommended security practices for maximum protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Password Creation</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Minimum 12 characters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Mix of character types</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">No personal information</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Unique per account</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Account Security</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-blue-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Two-factor authentication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-blue-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Security notifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-blue-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Recovery options set</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-blue-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Regular activity review</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Device Protection</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-purple-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Updated software</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-purple-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Antivirus protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-purple-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Encryption enabled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-purple-500 w-4 h-4" />
                  <span className="text-slate-700 dark:text-slate-300">Secure Wi-Fi usage</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200/50 dark:border-amber-700/50">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg flex items-center">
              <AlertTriangle className="text-amber-500 mr-2 w-5 h-5" />
              Critical Security Reminders
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300">Never share passwords via email, text, or social media</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300">Be cautious of unsolicited password reset requests</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300">Regularly backup important accounts and data</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300">Stay informed about latest security threats and scams</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
