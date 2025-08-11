import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="rounded-2xl bg-gradient-to-br text-center md:text-left from-[#0f0f23] via-[#0a0a23] to-[#0f0f23] text-gray-300 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Md. Sazzad Hossen</h3>
          
        </div>

        <div>
          <p className="text-gray-400">Web Developer | Designer | Creator</p>
        </div>

        {/* Social Links */}
        <div className='mb-2'>
          <h4 className="text-lg font-semibold mb-1 text-white">Follow Me</h4>
          <div className='flex gap-2 justify-center'>
            <a href="https://www.facebook.com/mdsazzad272/"><FaFacebook /></a>
          <a href="https://github.com/MD-SAZZAD-HOSSEN-272"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sazzad272/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-2 border-t border-blue-500 text-center text-gray-500 text-sm">
        © 2025 Md. Sazzad Hossen. All rights reserved.
      </div>
    </footer>
  );
}
