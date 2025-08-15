import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - SecurePass Pro</title>
        <meta
          name="description"
          content="Privacy Policy for SecurePass Pro. Learn what data is collected, how we use cookies and analytics, and why passwords are processed locally."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        {/* MAIN CONTENT */}
        <main className="max-w-4xl mx-auto px-4 py-10">
          <section className="prose dark:prose-invert max-w-none">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Last updated: August 12, 2025
            </p>

            <h2>Overview</h2>
            <p>
              SecurePass Pro ("we", "us", or "our") operates a password
              generator and strength checking service at{" "}
              <Link href="/" className="text-primary">
                SecurePass Pro
              </Link>
              . We respect your privacy and aim for maximum transparency.
            </p>

            <h3>1. Data We Do NOT Collect</h3>
            <ul>
              <li>
                We do not collect or store any passwords generated on the
                client.
              </li>
              <li>
                We do not store user-submitted passwords or personal
                credentials.
              </li>
            </ul>

            <h3>2. Client-side Processing</h3>
            <p>
              Password generation and strength checking happen entirely in your
              browser. No password data is sent to our servers unless you
              explicitly use a feature that transmits data (none by default).
            </p>

            <h3>3. Usage Analytics & Cookies</h3>
            <p>
              We may use third-party analytics (for example, Google Analytics)
              to measure anonymous site usage and improve the product. These
              tools may collect non-personally-identifying information such as:
            </p>
            <ul>
              <li>IP address (may be anonymized)</li>
              <li>Browser and device type</li>
              <li>Pages visited and time on site</li>
            </ul>
            <p>
              You can opt out of analytics by using browser-level tracking
              protection or by disabling cookies.
            </p>

            <h3>4. Third-Party Services</h3>
            <p>
              If we display ads or integrate with third-party services, those
              services have their own privacy practices. We recommend reviewing
              their policies directly.
            </p>

            <h3>5. Data Security</h3>
            <p>
              Because we do not store passwords, there is no password database
              to secure. We maintain standard security practices for any server
              endpoints we use (e.g., HTTPS).
            </p>

            <h3>6. Children</h3>
            <p>
              Our Service is not directed to children under 13. We do not
              knowingly collect personal information from children.
            </p>

            <h3>7. Changes to this Policy</h3>
            <p>
              We may update this policy occasionally. We will post changes here
              with the "Last updated" date.
            </p>

            <h3>8. Contact</h3>
            <p>
              For privacy questions:{" "}
              <a
                href="mailto:privacy@securepass-pro.vercel.app"
                className="text-primary"
              >
                privacy@securepass-pro.vercel.app
              </a>
              .
            </p>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} SecurePass Pro.{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Use
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
