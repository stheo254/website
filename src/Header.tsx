type ScrollButtonsProps = {
  scrollTo: (index: number) => void;
};

function Header(props: ScrollButtonsProps) {
  console.log('Props received in Header:', props); // Debug log
  return (
    // Header.jsx
    <header className="flex justify-between items-center p-10 top-10">
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-full bg-white border shadow-sm hover:shadow-md">
          CV
        </button>
        <div>Email(logo) : Stefanustheo21@gmail.com</div>
      </div>
      <div className="items-end">
        <nav className="flex items-end space-x-4">
          <button className="text-gray-600 hover:underline" onClick={() => props.scrollTo(1)}>
            About Me
          </button>
          <span>/</span>
          <button className="text-gray-600 hover:underline" onClick={() => props.scrollTo(2)}>
            Past Works
          </button>
          <span>/</span>
          <button className="text-gray-600 hover:underline" onClick={() => props.scrollTo(3)}>
            My Journey
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
