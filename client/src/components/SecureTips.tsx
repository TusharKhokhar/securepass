import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, RotateCcw, UserX, EyeOff, Database } from 'lucide-react';

export function SecureTips() {
  const tips = [
    {
      icon: Lock,
      title: 'Use Strong Passwords',
      description: 'Create passwords with at least 12 characters, mixing uppercase, lowercase, numbers, and symbols.',
      gradient: 'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
      iconBg: 'bg-emerald-500',
    },
    {
      icon: RotateCcw,
      title: 'Regular Updates',
      description: 'Change your passwords regularly, especially for important accounts like banking and email.',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      iconBg: 'bg-blue-500',
    },
    {
      icon: UserX,
      title: 'Unique for Each Account',
      description: 'Never reuse passwords across multiple accounts. Each service should have its own unique password.',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      iconBg: 'bg-purple-500',
    },
    {
      icon: Shield,
      title: 'Two-Factor Authentication',
      description: 'Enable 2FA whenever possible for an extra layer of security beyond just passwords.',
      gradient: 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20',
      iconBg: 'bg-amber-500',
    },
    {
      icon: EyeOff,
      title: 'Avoid Common Passwords',
      description: 'Never use obvious passwords like "password123", birthdays, or common dictionary words.',
      gradient: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
      iconBg: 'bg-red-500',
    },
    {
      icon: Database,
      title: 'Use a Password Manager',
      description: 'Consider using a reputable password manager to generate and store complex passwords securely.',
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20',
      iconBg: 'bg-indigo-500',
    },
  ];

  return (
    <Card className="shadow-xl border-slate-200 dark:border-slate-700">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <Shield className="text-primary mr-3 w-7 h-7" />
          Password Security Tips
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`p-4 bg-gradient-to-br ${tip.gradient} rounded-xl`}
            >
              <div className={`w-10 h-10 ${tip.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                <tip.icon className="text-white w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{tip.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{tip.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
