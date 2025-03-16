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
    <header className="flex justify-between items-center p-10 top-10">
      <div className="items-end pl-30">
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
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://drive.google.com/uc?export=download&id=1RnjE-ameqAYzQKp47vYyU83lm0zqS4kh"
          target="_blank" // Opens in a new tab if the browser does not auto-download
          rel="noopener noreferrer"
          download="your-file.pdf"
        >
          <button className="px-4 py-2 rounded-full border shadow-sm hover:shadow-md transition-transform transform hover:scale-110">
            CV
          </button>
        </a>
        <div className="text-black border rounded-full p-2 flex item-center justify-center">
          <img src={email} className="w-7"></img>
          <button onClick={copyToClipboard} className="pt-1 pl-1">
            {' '}
            {copied ? 'Copied!' : 'stefanustheo21@gmail.com'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
