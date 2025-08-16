import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, TrendingUp, Check, X, Lightbulb } from 'lucide-react';
import { usePasswordStrength } from '../hooks/usePasswordStrength';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/hooks/useAnalytics';

export function PasswordStrengthChecker() {
  const { password, setPassword, showPassword, togglePasswordVisibility, strength } = usePasswordStrength();
  const { trackPasswordChecked, trackButtonClick } = useAnalytics();

  const getCheckIcon = (isValid: boolean) => {
    return isValid ? (
      <Check className="w-4 h-4 text-green-500" />
    ) : (
      <X className="w-4 h-4 text-red-500" />
    );
  };

  const getCheckBackground = (isValid: boolean) => {
    return isValid
      ? 'bg-green-100 dark:bg-green-900/30'
      : 'bg-red-100 dark:bg-red-900/30';
  };

  return (
    <Card className="h-fit shadow-xl border-slate-200 dark:border-slate-700">
      <CardContent className="p-6 lg:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Strength Checker</h2>
            <p className="text-slate-500 dark:text-slate-400">Analyze password security</p>
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <Label htmlFor="passwordInput" className="block text-sm font-medium mb-2">
            Enter password to analyze
          </Label>
          <div className="relative">
            <Input
              id="passwordInput"
              type={showPassword ? 'text' : 'password'}
              placeholder="Type or paste a password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length > 0) {
                  trackPasswordChecked('checking', e.target.value.length);
                }
              }}
              className="pr-12 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:ring-primary focus:border-primary"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Strength Meter */}
        {strength && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Password Strength</span>
              <span
                className="text-sm font-bold"
                style={{ color: strength.color }}
              >
                {strength.label}
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${strength.percentage}%`,
                  backgroundColor: strength.color,
                }}
              />
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Entropy: <span className="font-medium">{strength.entropy.toFixed(1)}</span> bits
            </div>
          </div>
        )}

        {/* Password Analysis */}
        {strength && (
          <div className="space-y-4 mb-6">
            {/* Length Analysis */}
            <div
              className={cn(
                'flex items-center space-x-3 p-3 rounded-lg',
                getCheckBackground(password.length >= 12)
              )}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                {getCheckIcon(password.length >= 12)}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900 dark:text-white">Length</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {password.length} characters (recommended: 12+)
                </div>
              </div>
            </div>

            {/* Character Types */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className={cn(
                  'flex items-center space-x-2 p-2 rounded-lg',
                  getCheckBackground(strength.hasUpper)
                )}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  {getCheckIcon(strength.hasUpper)}
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Uppercase</span>
              </div>
              <div
                className={cn(
                  'flex items-center space-x-2 p-2 rounded-lg',
                  getCheckBackground(strength.hasLower)
                )}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  {getCheckIcon(strength.hasLower)}
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Lowercase</span>
              </div>
              <div
                className={cn(
                  'flex items-center space-x-2 p-2 rounded-lg',
                  getCheckBackground(strength.hasNumbers)
                )}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  {getCheckIcon(strength.hasNumbers)}
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Numbers</span>
              </div>
              <div
                className={cn(
                  'flex items-center space-x-2 p-2 rounded-lg',
                  getCheckBackground(strength.hasSymbols)
                )}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  {getCheckIcon(strength.hasSymbols)}
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Symbols</span>
              </div>
            </div>
          </div>
        )}

        {/* Suggestions */}
        {strength && strength.suggestions.length > 0 && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
              <Lightbulb className="w-4 h-4 mr-2" />
              Suggestions to improve
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
              {strength.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
