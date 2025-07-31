import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/80 mt-32">
      <Container className="grid max-w-7xl grid-cols-1 gap-8 py-10 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <Logo className="mb-3 text-white" />
          <p className="text-sm">
            Book your flights effortlessly. Compare prices, choose seats, and take off with confidence using FlightGo.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-primary mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/flights" className="hover:text-primary">
                Flights
              </Link>
            </li>
            <li>
              <Link href="#privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links & Contact */}
        <div>
          <h4 className="text-primary mb-3 font-semibold">Connect With Us</h4>
          <div className="flex items-center space-x-4 text-xl">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:support@flightgo.com"
              className="hover:text-primary"
            >
              <FaEnvelope />
            </Link>
          </div>
          <p className="mt-3 text-xs">support@flightgo.com</p>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-blue-950 py-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} FlightGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
