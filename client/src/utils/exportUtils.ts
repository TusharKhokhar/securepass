export interface PasswordHistoryItem {
  password: string;
  timestamp: string;
}

export function exportPasswordsAsTxt(passwords: PasswordHistoryItem[]): void {
  const content = passwords.map(item => item.password).join('\n');
  downloadFile(content, `passwords_${getCurrentDateString()}.txt`, 'text/plain');
}

export function exportPasswordsAsCsv(passwords: PasswordHistoryItem[]): void {
  const headers = 'Password,Generated At\n';
  const rows = passwords.map(item => 
    `"${item.password}","${new Date(item.timestamp).toLocaleString()}"`
  ).join('\n');
  
  const content = headers + rows;
  downloadFile(content, `passwords_${getCurrentDateString()}.csv`, 'text/csv');
}

function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

function getCurrentDateString(): string {
  return new Date().toISOString().split('T')[0];
}
