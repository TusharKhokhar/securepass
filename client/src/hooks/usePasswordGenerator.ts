import { useState } from 'react';
import { generatePassword, PasswordOptions } from '../utils/passwordUtils';

export function usePasswordGenerator() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const updateOptions = (updates: Partial<PasswordOptions>) => {
    setOptions(prev => ({ ...prev, ...updates }));
  };

  const generateMultiplePasswords = (count: number = 5) => {
    setIsGenerating(true);
    
    // Simulate slight delay for better UX
    setTimeout(() => {
      const passwords: string[] = [];
      for (let i = 0; i < count; i++) {
        const password = generatePassword(options);
        if (password) {
          passwords.push(password);
        }
      }
      setGeneratedPasswords(passwords);
      setIsGenerating(false);
    }, 100);
  };

  return {
    options,
    updateOptions,
    generatedPasswords,
    generateMultiplePasswords,
    isGenerating,
  };
}
