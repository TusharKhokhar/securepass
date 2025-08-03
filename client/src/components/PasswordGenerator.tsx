import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Copy, Key, Trash2, FileText, FileSpreadsheet, RotateCcw } from 'lucide-react';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import { usePasswordHistory } from '../hooks/usePasswordHistory';
import { calculatePasswordStrength, getTimeAgo } from '../utils/passwordUtils';
import { exportPasswordsAsTxt, exportPasswordsAsCsv } from '../utils/exportUtils';
import { useToast } from '@/hooks/use-toast';

export function PasswordGenerator() {
  const { options, updateOptions, generatedPasswords, generateMultiplePasswords, isGenerating } = usePasswordGenerator();
  const { history, addToHistory, clearHistory } = usePasswordHistory();
  const { toast } = useToast();

  const handleGeneratePasswords = () => {
    // Validate that at least one character type is selected
    const hasAtLeastOneType = options.includeUppercase || options.includeLowercase || 
                             options.includeNumbers || options.includeSymbols;
    
    if (!hasAtLeastOneType) {
      toast({
        title: "Invalid Configuration",
        description: "Please select at least one character type.",
        variant: "destructive",
      });
      return;
    }

    generateMultiplePasswords();
  };

  const copyToClipboard = async (password: string) => {
    try {
      await navigator.clipboard.writeText(password);
      addToHistory(password);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy password to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleExportTxt = () => {
    if (history.length === 0) {
      toast({
        title: "No Data",
        description: "No passwords to export. Generate some passwords first!",
        variant: "destructive",
      });
      return;
    }
    exportPasswordsAsTxt(history);
    toast({
      title: "Exported",
      description: "Passwords exported as TXT file.",
    });
  };

  const handleExportCsv = () => {
    if (history.length === 0) {
      toast({
        title: "No Data",
        description: "No passwords to export. Generate some passwords first!",
        variant: "destructive",
      });
      return;
    }
    exportPasswordsAsCsv(history);
    toast({
      title: "Exported",
      description: "Passwords exported as CSV file.",
    });
  };

  return (
    <Card className="h-fit shadow-xl border-slate-200 dark:border-slate-700">
      <CardContent className="p-6 lg:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Key className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Password Generator</h2>
            <p className="text-slate-500 dark:text-slate-400">Create secure passwords instantly</p>
          </div>
        </div>

        {/* Password Options */}
        <div className="space-y-6 mb-8">
          {/* Password Length */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <Label className="text-sm font-medium">Password Length</Label>
              <span className="text-sm font-bold text-primary">{options.length}</span>
            </div>
            <Slider
              value={[options.length]}
              onValueChange={(value) => updateOptions({ length: value[0] })}
              max={50}
              min={8}
              step={1}
              className="w-full"
            />
          </div>

          {/* Character Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="includeUppercase"
                checked={options.includeUppercase}
                onCheckedChange={(checked) => updateOptions({ includeUppercase: !!checked })}
              />
              <Label htmlFor="includeUppercase" className="text-sm">Uppercase (A-Z)</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="includeLowercase"
                checked={options.includeLowercase}
                onCheckedChange={(checked) => updateOptions({ includeLowercase: !!checked })}
              />
              <Label htmlFor="includeLowercase" className="text-sm">Lowercase (a-z)</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="includeNumbers"
                checked={options.includeNumbers}
                onCheckedChange={(checked) => updateOptions({ includeNumbers: !!checked })}
              />
              <Label htmlFor="includeNumbers" className="text-sm">Numbers (0-9)</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="includeSymbols"
                checked={options.includeSymbols}
                onCheckedChange={(checked) => updateOptions({ includeSymbols: !!checked })}
              />
              <Label htmlFor="includeSymbols" className="text-sm">Symbols (!@#$)</Label>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGeneratePasswords}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
        >
          {isGenerating ? (
            <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Key className="mr-2 h-4 w-4" />
          )}
          {isGenerating ? 'Generating...' : 'Generate Passwords'}
        </Button>

        {/* Generated Passwords */}
        {generatedPasswords.length > 0 && (
          <div className="mt-8 space-y-3 animate-fade-in">
            {generatedPasswords.map((password, index) => {
              const strength = calculatePasswordStrength(password);
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 animate-slide-up"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm text-slate-900 dark:text-white break-all">
                      {password}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-16 bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${strength.percentage}%`,
                            backgroundColor: strength.color,
                          }}
                        />
                      </div>
                      <span
                        className="text-xs font-medium"
                        style={{ color: strength.color }}
                      >
                        {strength.label}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => copyToClipboard(password)}
                    className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                  >
                    <Copy className="text-primary w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        )}

        {/* Password History */}
        {history.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Passwords</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearHistory}
                className="text-slate-500 dark:text-slate-400 hover:text-red-500"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {history.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-slate-600 dark:text-slate-400 truncate">
                      {item.password}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">
                      {getTimeAgo(new Date(item.timestamp))}
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => copyToClipboard(item.password)}
                    className="w-8 h-8 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-lg"
                  >
                    <Copy className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Export Options */}
        {history.length > 0 && (
          <>
            <Separator className="my-6" />
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleExportTxt}
                className="flex-1"
              >
                <FileText className="w-4 h-4 mr-2" />
                Export TXT
              </Button>
              <Button
                variant="outline"
                onClick={handleExportCsv}
                className="flex-1"
              >
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
