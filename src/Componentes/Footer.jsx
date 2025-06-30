import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="rounded-2xl bg-gradient-to-br from-[#0f0f23] via-[#0a0a23] to-[#0f0f23] text-gray-300 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Your Name</h3>
          <p className="text-gray-400">Web Developer | Designer | Creator</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-400 transition">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Follow Me</h4>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition"
            >
              {/* GitHub Icon (Simple SVG) */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 ... (icon path truncated) ..." />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              {/* LinkedIn Icon */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 ... (icon path truncated) ..." />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              {/* Twitter Icon */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.954 4.569c-0.885 0.39-1.83 0.654-2.825 ... (icon path truncated) ..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Your Name. All rights reserved.
      </div>
    </footer>
  );
}
