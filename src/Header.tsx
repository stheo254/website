import email from './assets/email-logo-icon-email-png-dd3fc13c3c3d6e6d110176ae0d6aa42a.png';
import logo from './assets/webdev-1.svg';
import { useState } from 'react';
type ScrollButtonsProps = {
  scrollTo: (index: number) => void;
};

function Header(props: ScrollButtonsProps) {
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
    <header className="lg:flex lg:flex-wrap lg:justify-around grid grid-cols justify-items-center items-center top-0 p-4 relative">
      {/* Left Navigation */}
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
        <a
          href="https://drive.google.com/uc?export=download&id=1QPqhgcKlIv_bfK9K9BZtnARFLlDZ46n7"
          target="_blank"
          rel="noopener noreferrer"
          download="your-file.pdf"
        >
          <button className="px-4 py-2 rounded-full border shadow-sm hover:shadow-md transition-transform transform hover:scale-110">
            CV
          </button>
        </a>
        <div className="text-black border rounded-full p-2 flex items-center justify-center transition-transform transform hover:scale-110 ">
          <img src={email} className="w-7" alt="Email Icon" />
          <button onClick={copyToClipboard} className="min-w-[200px] pt-1 pl-1 truncate">
            {copied ? 'Copied!' : 'stefanustheo21@gmail.com'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
