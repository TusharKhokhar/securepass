export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export interface PasswordStrength {
  score: number;
  entropy: number;
  label: string;
  color: string;
  percentage: number;
  suggestions: string[];
  hasLower: boolean;
  hasUpper: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}

export function generatePassword(options: PasswordOptions): string {
  let charset = '';
  
  if (options.includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (options.includeNumbers) charset += '0123456789';
  if (options.includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  if (!charset) return '';
  
  // Use crypto.getRandomValues for better randomness
  const array = new Uint8Array(options.length);
  crypto.getRandomValues(array);
  
  let password = '';
  for (let i = 0; i < options.length; i++) {
    password += charset.charAt(array[i] % charset.length);
  }
  
  return password;
}

export function calculatePasswordStrength(password: string): PasswordStrength {
  let score = 0;
  let entropy = 0;
  const suggestions: string[] = [];
  
  // Character set analysis
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^A-Za-z0-9]/.test(password);
  
  // Calculate character set size
  let charsetSize = 0;
  if (hasLower) charsetSize += 26;
  if (hasUpper) charsetSize += 26;
  if (hasNumbers) charsetSize += 10;
  if (hasSymbols) charsetSize += 32;
  
  // Calculate entropy (bits of randomness)
  if (charsetSize > 0) {
    entropy = Math.log2(Math.pow(charsetSize, password.length));
  }
  
  // Scoring based on various criteria
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (hasLower && hasUpper) score++;
  if (hasNumbers) score++;
  if (hasSymbols) score++;
  if (entropy >= 50) score++;
  if (entropy >= 70) score++;
  
  // Deduct points for common patterns
  if (/(.)\1{2,}/.test(password)) score = Math.max(0, score - 1);
  if (/123|abc|qwe|password|admin/i.test(password)) score = Math.max(0, score - 2);
  
  // Generate suggestions
  if (password.length < 12) suggestions.push('Use at least 12 characters for better security');
  if (!hasUpper) suggestions.push('Add uppercase letters (A-Z)');
  if (!hasLower) suggestions.push('Add lowercase letters (a-z)');
  if (!hasNumbers) suggestions.push('Add numbers (0-9)');
  if (!hasSymbols) suggestions.push('Add special symbols (!@#$)');
  if (/(.)\1{2,}/.test(password)) suggestions.push('Avoid repeating characters');
  if (/123|abc|qwe|password|admin/i.test(password)) suggestions.push('Avoid common words and sequences');
  
  // Determine strength label and color
  let label: string;
  let color: string;
  let percentage: number;
  
  if (score <= 2) {
    label = 'Weak';
    color = '#ef4444';
    percentage = 25;
  } else if (score <= 4) {
    label = 'Fair';
    color = '#f59e0b';
    percentage = 50;
  } else if (score <= 6) {
    label = 'Good';
    color = '#10b981';
    percentage = 75;
  } else {
    label = 'Excellent';
    color = '#059669';
    percentage = 100;
  }
  
  return {
    score,
    entropy,
    label,
    color,
    percentage,
    suggestions,
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols
  };
}

export function getTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}
