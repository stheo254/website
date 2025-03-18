import { useRef } from 'react';
import './App.css';
import Header from './Header';
import Titlecard from './Titlecard';
import About from './About';
import PastWork from './PastWork';
import Timeline from './Timeline';
import FadeIn from './FadeIn';
import Contact2 from './contactv2';

function App() {
  const sections = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  let currentSection = 0;

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
      currentSection = Math.max(currentSection - 1, 0);
    }

    // Ensure the current section exists before calling scrollIntoView
    sections[currentSection].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (index: number) => {
    console.log('Scrolling to section:', index);
    sections[index].current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ Ensure sectionStyle is properly defined
  const sectionStyle = (
    bgColor: string,
    height: string,
    margintop: string,
    z: number,
  ): React.CSSProperties => ({
    minHeight: height,
    marginTop: margintop,
    position: 'relative',
    zIndex: z,
    /*
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    */
    backgroundColor: bgColor,
  });
  return (
    <>
      <div id="title" style={{ overflow: 'hidden' }}>
        <section
          className="bg-[#F8F8F8] bg-cover bg-center "
          ref={sections[0]}
          style={sectionStyle('lightgray', '100vh', '-10px', 10)}
        >
          <FadeIn direction="top">
            <Header scrollTo={scrollToSection} />
          </FadeIn>
          <Titlecard scrollTo={scrollToSection} sections={sections} />
        </section>
        <section
          id="about"
          className="mb-10"
          ref={sections[1]}
          style={sectionStyle('white', 'auto', '-100px', 8)}
        >
          <About />
        </section>
        <section
          id="past"
          className="bg-[#4A4A4A] bg-center bg-cover"
          style={{
            minHeight: '100vh',
            borderTopRightRadius: '10%',
            borderTopLeftRadius: '10%',
            borderBottomLeftRadius: '10%',
            borderBottomRightRadius: '10%',
            paddingTop: '2rem',
          }}
        >
          {' '}
          <h1
            ref={sections[2]}
            className="text-lg p-1 border-1 border-white text-gray-400 rounded-full w-25 mx-auto mb-20"
          >
            Past Work
          </h1>
          <PastWork scrollTo={handleScroll} sections={sections} />
        </section>
        <section
          id="journey"
          ref={sections[sections.length - 2]}
          style={{
            backgroundColor: 'white',
            minHeight: '100vh',
            paddingTop: '2rem',
          }}
        >
          <h2 className="text-lg border-2 rounded-full w-30 mx-auto mb-5">My Journey</h2>
          <FadeIn direction="left">
            <Timeline />
          </FadeIn>
        </section>
        <section
          id="contact"
          ref={sections[sections.length - 1]}
          style={{
            backgroundColor: 'lightgray',
            height: 'auto',
            borderTopRightRadius: '20%',
            borderTopLeftRadius: '20%',
          }}
        >
          <Contact2 />
        </section>
      </div>
    </>
  );
}

export default App;

/*
 *
      <div id="title" onWheel={handleScroll} style={{ overflow: 'hidden' }}>
      <div className="min-h-screen p-8 bg-gradient-to-b from-gray-500 to-gray-000">
        <div className="absolute inset-0  "></div>
        <header className="flex items-center justify-between mb-16">
          <a href="mailto:email@email.com" className="flex items-center gap-2 text-gray-600">
            <span className="material-icons">mail</span>
            EMail@email.com
          </a>
          <nav className="flex items-center space-x-8 text-gray-600 italic">
            <a href="#about" className="hover:underline">
              ABOUT ME
            </a>
            <a href="#works" className="hover:underline">
              PAST WORKS
            </a>
            <a href="#journey" className="hover:underline">
              MY JOURNEY
            </a>
            <a href="#contact" className="hover:underline">
              CONTACT
            </a>
          </nav>
        </header>

        <main className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-light text-gray-800 mb-4">Stefanus Theo Chandra</h1>
            <p className="text-gray-600 mb-8">a curious student</p>
            <button className="px-6 py-2 rounded-full bg-gray-600 text-white italic">
              CONTACT
            </button>
          </div>

          <div className="w-96 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-white italic">GAMBAR</span>
          </div>
        </main>

        <section id="about" className="h-screen bg-gray-400 flex items-center justify-center">
          ABOUT ME SECTION
        </section>
        <section id="works" className="h-screen bg-gray-300 flex items-center justify-center">
          PAST WORKS SECTION
        </section>
        <section id="journey" className="h-screen bg-gray-200 flex items-center justify-center">
          MY JOURNEY SECTION
        </section>
        <section id="contact" className="h-screen bg-gray-100 flex items-center justify-center">
          CONTACT SECTION
        </section>
      </div>

      */
