import { useState, useEffect } from 'react';

export interface PasswordHistoryItem {
  password: string;
  timestamp: string;
}

const STORAGE_KEY = 'passwordHistory';
const MAX_HISTORY_SIZE = 20;

export function usePasswordHistory() {
  const [history, setHistory] = useState<PasswordHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse password history:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const addToHistory = (password: string) => {
    const newItem: PasswordHistoryItem = {
      password,
      timestamp: new Date().toISOString(),
    };

    setHistory(prevHistory => {
      const updated = [newItem, ...prevHistory.filter(item => item.password !== password)]
        .slice(0, MAX_HISTORY_SIZE);
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    history,
    addToHistory,
    clearHistory,
  };
}
