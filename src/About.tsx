import FadeIn from './FadeIn';
import clang from './assets/clang.png';
import css from './assets/haskell2.png';
import typescript from './assets/Typescript.svg.png';
import js from './assets/js.png';
import express from './assets/express-1.png';
import node from './assets/Node.js_logo.svg.png';
import ract from './assets/React-icon.svg.png';
import bootstrap from './assets/Bootstrap_logo.svg.png';
import git from './assets/18133.png';
import java from './assets/Java_programming_language_logo.svg.png';
import tailwind from './assets/Tailwind_CSS_Logo.svg.png';
import duck from './assets/DuckDB_logo.svg.png';

function About() {
  const techStack = [
    { name: 'C Language', image: clang },
    { name: 'TypeScript', image: typescript },
    { name: 'JavaScript', image: js },
    { name: 'Express', image: express },
    { name: 'Node.js', image: node },
    { name: 'React', image: ract },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'Git', image: git },
    { name: 'Java', image: java },
    { name: 'Haskell', image: css },
    { name: 'Tailwind CSS', image: tailwind },
    { name: 'DuckDB', image: duck },
  ];
  return (
    <>
      <h1 className="mt-30 text-left text-md border-2 rounded-full mx-auto w-25 flex justify-center">
        About me
      </h1>

      <div className="min-h-screen flex flex-col items-center justify-center p-8 -mt-10">
        {/* First Item (Centered Alone) */}
        <FadeIn direction="top">
          <div key="intro" className="relative pl-16 max-w-2xl mb-16 mt-10">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                className="text-gray-600"
              >
                <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>

            <p className="text-lg text-black">
              Hi, I'm Theo—a curious and driven Computer Engineering student eager to deepen my
              understanding of the technologies shaping our world. I’m passionate about improving my
              programming skills and exploring how systems work at a fundamental level.
            </p>
          </div>
        </FadeIn>

        {/* Remaining Items (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl ">
          {[
            'I’m particularly interested in computer architecture and cybersecurity. I enjoy learning how hardware and software interact and tackling the challenges of protecting digital systems.',
            'Outside academics, I enjoy computer games—especially team-oriented ones where collaboration matters as much as individual skill. I also play badminton, which helps me stay active and sharp',
          ].map((item, index) => (
            <FadeIn direction={index % 2 == 0 ? 'left' : 'right'}>
              <div key={index} className="relative pl-16 flex items-center">
                <span className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    className="text-gray-600"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>

                <p className="text-lg text-black">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="py-12 px-6">
          <FadeIn direction="left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technologies and Tools</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-4xl">
              Using a combination of cutting-edge technologies and reliable open-source software, I
              build user-focused, performant apps and websites.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.map((tech) => (
                <FadeIn rotate={45}>
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow-sm hover:scale-105 transition-transform flex-wrap min-w-0"
                  >
                    <img src={tech.image} alt={tech.name} className=" h-12" />
                    <span className="text-lg text-gray-800 font-medium break-words whitespace-normal">
                      {tech.name}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}

export default About;
