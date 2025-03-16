import email from './assets/email-logo-icon-email-png-dd3fc13c3c3d6e6d110176ae0d6aa42a.png';
type ScrollButtonsProps = {
  scrollTo: (index: number) => void;
};

function Header(props: ScrollButtonsProps) {
  console.log('Props received in Header:', props); // Debug log
  return (
    // Header.jsx
    <header className="flex justify-between items-center p-10 top-10">
      <div className="flex items-center gap-4">
        <a
          href="https://drive.google.com/file/d/1RnjE-ameqAYzQKp47vYyU83lm0zqS4kh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 rounded-full bg-gray-500 border shadow-sm hover:shadow-md transition-transform transform hover:scale-110">
            CV
          </button>
        </a>
        <div className="text-black rounded-full bg-gray-500 p-2 border flex item-center justify-center">
          <img src={email} className="w-7"></img>
          <span className="pt-1 pl-1"> Stefanustheo21@gmail.com</span>
        </div>
      </div>
      <div className="items-end">
        <nav className="flex items-end space-x-4">
          <button className="text-white hover:underline" onClick={() => props.scrollTo(1)}>
            About Me
          </button>
          <span>/</span>
          <button className="text-white hover:underline" onClick={() => props.scrollTo(2)}>
            Past Works
          </button>
          <span>/</span>
          <button className="text-white hover:underline" onClick={() => props.scrollTo(5)}>
            My Journey
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
