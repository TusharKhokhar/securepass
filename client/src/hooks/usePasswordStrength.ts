import { useState, useMemo } from 'react';
import { calculatePasswordStrength, PasswordStrength } from '../utils/passwordUtils';

export function usePasswordStrength() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo<PasswordStrength | null>(() => {
    if (!password) return null;
    return calculatePasswordStrength(password);
  }, [password]);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const clearPassword = () => {
    setPassword('');
    setShowPassword(false);
  };

  return {
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    clearPassword,
    strength,
  };
}
