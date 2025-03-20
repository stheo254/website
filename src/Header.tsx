import logo from './assets/webdev-1.svg';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { useState } from 'react';
import { JSX } from 'react';
type ScrollButtonsProps = {
  scrollTo: (index: number) => void;
};

type SocialLink = {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
};
function Header(props: ScrollButtonsProps) {
  const socialLinks: SocialLink[] = [
    { id: 3, name: 'GitHub', url: 'https://github.com/stheo254', icon: <FaGithub /> },
  ];
  const pdfLink = 'stefanustheo21@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pdfLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    // Header.jsx
    <header>
      {/* Left Navigation */}
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-wrap lg:justify-between grid grid-cols justify-items-center items-center top-0 py-4 relative px-8">
          <div className="flex items-center space-x-4 w-auto justify-start sm:justify-start ">
            <nav className="flex items-end space-x-4">
              <button
                className="font-bold text-black hover:underline"
                onClick={() => props.scrollTo(1)}
              >
                About Me
              </button>
              <span>/</span>
              <button
                className="font-bold text-black hover:underline"
                onClick={() => props.scrollTo(2)}
              >
                Past Works
              </button>
              <span>/</span>
              <button
                className="text-black font-bold hover:underline"
                onClick={() => props.scrollTo(5)}
              >
                My Journey
              </button>
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:static w-auto mt-4 ">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          </div>

          {/* Right Section (CV and Email) */}
          <div className="flex items-center gap-4 w-auto justify-end mt-4 ">
            {socialLinks.map((link: SocialLink) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors border rounded-full p-2"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1QPqhgcKlIv_bfK9K9BZtnARFLlDZ46n7"
              target="_blank"
              rel="noopener noreferrer"
              download="your-file.pdf"
            >
              <button className="px-4 py-2 rounded-full border shadow-sm hover:shadow-md hover:text-blue-500 transition-colors">
                CV
              </button>
            </a>
            <div className="text-black border rounded-full p-2 flex items-center justify-center hover:text-blue-500 transition-colors ">
              <MdEmail className="w-6 h-6 hover:text-blue-500 transition-colors" />
              <button onClick={copyToClipboard} className="min-w-[200px] pt-1 pl-1 truncate">
                {copied ? 'Copied!' : 'stefanustheo21@gmail.com'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
