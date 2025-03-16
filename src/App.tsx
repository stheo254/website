import { useEffect, useRef } from 'react';
import './App.css';
import Header from './Header';
import Titlecard from './Titlecard';
import About from './About';
import Contact from './Contact';
import PastWork from './PastWork';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { section } from 'framer-motion/client';

function App() {
  /*
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  */

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
    height: height,
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
          className="bg-[url('./assets/80503.jpg')] bg-cover bg-center rounded-b-[10%]"
          ref={sections[0]}
          style={sectionStyle('lightgray', '100vh', '-10px', 10)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Header scrollTo={scrollToSection} />
            <Titlecard scrollTo={scrollToSection} sections={sections} />
          </motion.div>
        </section>
        <section
          id="about"
          className="mb-10"
          ref={sections[1]}
          style={sectionStyle('white', 'auto', '-100px', 8)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <About />
          </motion.div>
        </section>
        <section
          id="past"
          className="bg-[url('./assets/bg6.jpg')] bg-center bg-cover"
          style={{
            backgroundColor: 'lightgray',
            height: '300vh',
            borderTopRightRadius: '10%',
            borderTopLeftRadius: '10%',
            borderBottomLeftRadius: '10%',
            borderBottomRightRadius: '10%',
          }}
        >
          {' '}
          <h1
            ref={sections[2]}
            className="text-4xl pt-5 pb-10 bg-gray-400/80 rounded-xl w-96 mx-auto mb-20"
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
            height: '100vh',
          }}
        >
          <h2 className="text-4xl pb-10">My Journey</h2>
          <Timeline />
        </section>
        <section
          id="contact"
          ref={sections[sections.length - 1]}
          style={{
            backgroundColor: 'lightgray',
            height: '50vh',
            borderTopRightRadius: '20%',
            borderTopLeftRadius: '20%',
          }}
        >
          <Contact />
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
