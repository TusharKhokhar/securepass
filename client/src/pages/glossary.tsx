import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Shield, Lock, AlertTriangle, Users, Database, Smartphone, Wifi, Key, EyeOff, Clock, Zap, ExternalLink } from 'lucide-react';

export default function Glossary() {
  const securityTerms = [
    {
      term: 'Two-Factor Authentication (2FA)',
      definition: 'A security process that requires users to provide two different authentication factors to verify their identity. This typically includes something you know (password) and something you have (phone or security key).',
      category: 'Authentication',
      example: 'Using a password plus a code sent to your phone to log into your email account.'
    },
    {
      term: 'Brute Force Attack',
      definition: 'A hacking method that attempts to gain access to a system by systematically trying every possible password combination until the correct one is found.',
      category: 'Attack Methods',
      example: 'An attacker trying every possible 4-digit PIN from 0000 to 9999.'
    },
    {
      term: 'Phishing',
      definition: 'A cyber attack where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data.',
      category: 'Social Engineering',
      example: 'Receiving an email that looks like it\'s from your bank asking you to verify your account details.'
    },
    {
      term: 'Credential Stuffing',
      definition: 'An attack where hackers use stolen username and password combinations from one service to gain unauthorized access to accounts on other services.',
      category: 'Attack Methods',
      example: 'Using leaked LinkedIn credentials to try logging into Gmail, Facebook, and other popular services.'
    },
    {
      term: 'Password Hashing',
      definition: 'A cryptographic process that converts passwords into a fixed-length string of characters. This makes it difficult for attackers to reverse-engineer the original password.',
      category: 'Security Technology',
      example: 'Converting "password123" into "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8".'
    },
    {
      term: 'Salt',
      definition: 'Random data added to a password before hashing to make it more secure. This prevents rainbow table attacks and ensures that identical passwords have different hashes.',
      category: 'Security Technology',
      example: 'Adding "x7K9m" to "password123" before hashing creates a unique hash even if another user has the same password.'
    },
    {
      term: 'Rainbow Table',
      definition: 'A precomputed table used to reverse cryptographic hash functions. Attackers use these tables to quickly look up hashed passwords and find the original plaintext.',
      category: 'Attack Methods',
      example: 'A database containing millions of common passwords and their corresponding hash values.'
    },
    {
      term: 'Dictionary Attack',
      definition: 'An attack that uses a list of common words, phrases, and variations to guess passwords instead of trying every possible combination.',
      category: 'Attack Methods',
      example: 'Trying passwords like "password", "123456", "qwerty", "admin", and common names.'
    },
    {
      term: 'Multi-Factor Authentication (MFA)',
      definition: 'A security system that requires multiple methods of authentication from different categories: something you know, something you have, or something you are.',
      category: 'Authentication',
      example: 'Using a password (knowledge), a security key (possession), and fingerprint (biometric).'
    },
    {
      term: 'Password Manager',
      definition: 'A software application that generates, stores, and manages passwords for multiple accounts. It typically uses strong encryption to protect stored credentials.',
      category: 'Security Tools',
      example: 'Applications like LastPass, 1Password, or Bitwarden that store all your passwords in an encrypted vault.'
    },
    {
      term: 'Data Breach',
      definition: 'A security incident where sensitive, protected, or confidential data is accessed, disclosed, or stolen by an unauthorized individual or group.',
      category: 'Security Incidents',
      example: 'Hackers gaining access to a company\'s database and stealing customer email addresses and passwords.'
    },
    {
      term: 'Social Engineering',
      definition: 'A manipulation technique that exploits human psychology to gain access to confidential information or systems. It relies on human interaction and often involves tricking people into breaking normal security procedures.',
      category: 'Attack Methods',
      example: 'Calling someone pretending to be IT support and asking for their password.'
    },
    {
      term: 'Man-in-the-Middle Attack',
      definition: 'An attack where the attacker secretly relays and possibly alters communication between two parties who believe they are directly communicating with each other.',
      category: 'Attack Methods',
      example: 'Intercepting communication between a user and their bank\'s website to steal login credentials.'
    },
    {
      term: 'Zero-Day Vulnerability',
      definition: 'A security flaw in software or hardware that is unknown to the vendor and has no available patch or fix. Attackers can exploit these vulnerabilities before they are discovered and fixed.',
      category: 'Security Vulnerabilities',
      example: 'A newly discovered flaw in a web browser that allows attackers to execute malicious code.'
    },
    {
      term: 'Encryption',
      definition: 'The process of converting information or data into a code to prevent unauthorized access. Only authorized parties with the correct key can decrypt and read the information.',
      category: 'Security Technology',
      example: 'Converting "Hello World" into "Khoor Zruog" using a simple substitution cipher.'
    },
    {
      term: 'VPN (Virtual Private Network)',
      definition: 'A service that creates a secure, encrypted connection over a less secure network, such as the internet. It protects your data and privacy by routing your traffic through secure servers.',
      category: 'Security Tools',
      example: 'Using a VPN service to encrypt your internet traffic when connecting to public Wi-Fi.'
    },
    {
      term: 'Firewall',
      definition: 'A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between trusted and untrusted networks.',
      category: 'Security Technology',
      example: 'A firewall blocking unauthorized access attempts to your home network from the internet.'
    },
    {
      term: 'Malware',
      definition: 'Malicious software designed to harm, exploit, or gain unauthorized access to computer systems. This includes viruses, worms, trojans, ransomware, and spyware.',
      category: 'Malicious Software',
      example: 'A virus that infects your computer and steals your passwords or encrypts your files for ransom.'
    },
    {
      term: 'Ransomware',
      definition: 'A type of malicious software that encrypts a victim\'s files and demands payment in exchange for the decryption key. It essentially holds your data hostage.',
      category: 'Malicious Software',
      example: 'WannaCry ransomware that encrypted files on thousands of computers worldwide in 2017.'
    },
    {
      term: 'Spyware',
      definition: 'Software that secretly monitors and collects information about a user\'s activities without their knowledge or consent. It can track keystrokes, capture screenshots, and steal sensitive data.',
      category: 'Malicious Software',
      example: 'Keyloggers that record every keystroke to steal passwords and credit card information.'
    },
    {
      term: 'Botnet',
      definition: 'A network of compromised computers (bots) controlled by a single attacker. These networks are often used to carry out distributed denial-of-service attacks or send spam.',
      category: 'Attack Infrastructure',
      example: 'Thousands of infected computers working together to overwhelm a website with traffic.'
    },
    {
      term: 'DDoS (Distributed Denial of Service)',
      definition: 'An attack that attempts to make a service unavailable by overwhelming it with traffic from multiple sources. This prevents legitimate users from accessing the service.',
      category: 'Attack Methods',
      example: 'Flooding a website with so much traffic that it becomes slow or completely unavailable.'
    },
    {
      term: 'SQL Injection',
      definition: 'A code injection technique used to attack data-driven applications. Attackers insert malicious SQL code into input fields to manipulate databases and access sensitive information.',
      category: 'Attack Methods',
              example: 'Entering \';\' DROP TABLE users; --\' into a login form to delete a database table.'
    },
    {
      term: 'Cross-Site Scripting (XSS)',
      definition: 'A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. This can steal cookies, session tokens, or other sensitive information.',
      category: 'Attack Methods',
      example: 'Injecting JavaScript code into a comment section that steals other users\' login cookies.'
    },
    {
      term: 'HTTPS',
      definition: 'A secure version of HTTP that uses encryption to protect data transmitted between a web browser and a website. It ensures that sensitive information like passwords and credit card numbers are encrypted.',
      category: 'Security Technology',
      example: 'The padlock icon in your browser\'s address bar indicating a secure connection.'
    },
    {
      term: 'SSL/TLS Certificate',
      definition: 'A digital certificate that authenticates the identity of a website and enables encrypted communication. It\'s what enables HTTPS connections and shows the padlock icon in browsers.',
      category: 'Security Technology',
      example: 'The certificate that verifies you\'re actually connected to your bank\'s website and not a fake one.'
    }
  ];

  const categories = Array.from(new Set(securityTerms.map(term => term.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Security Glossary
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Understand the key terms and concepts in cybersecurity and password security. 
          This comprehensive glossary will help you navigate the world of digital security.
        </p>
      </div>

      {/* Category Filter */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="text-primary mr-3 w-7 h-7" />
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                <h3 className="font-semibold text-slate-900 dark:text-white text-center">{category}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-1">
                  {securityTerms.filter(term => term.category === category).length} terms
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Terms List */}
      <div className="space-y-6">
        {securityTerms.map((term, index) => (
          <Card key={index} className="shadow-xl border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{term.term}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {term.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Definition</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                    <AlertTriangle className="text-blue-500 w-4 h-4 mr-2" />
                    Example
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{term.example}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <Card className="shadow-xl border-slate-200 dark:border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <ExternalLink className="text-primary mr-3 w-8 h-8" />
            Additional Learning Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Official Security Standards</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://pages.nist.gov/800-63-3/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    NIST Digital Identity Guidelines
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    OWASP Top 10 Security Risks
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://www.ncsc.gov.uk/collection/passwords" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    NCSC Password Guidance
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Security Organizations</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://www.sans.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    SANS Institute
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://www.cisa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    CISA (Cybersecurity & Infrastructure Security Agency)
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="text-primary w-4 h-4" />
                  <a href="https://www.bsi.bund.de/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    BSI (German Federal Office for Information Security)
                  </a>
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
            Ready to Apply This Knowledge?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Now that you understand the terminology, put your knowledge into practice with our security tools and guides.
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
              <BookOpen className="w-5 h-5 mr-2" />
              Security Guides
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
