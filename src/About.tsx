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
      {' '}
      <h2 className="text-4xl font-bold text-gray-800 mb-4 mx-auto pt-30">About me</h2>
      <div className="flex flex-col items-center justify-start pt-8 mx-auto ">
        {/* First Item (Centered Alone) */}
        <FadeIn direction="top">
          <div key="intro" className="relative max-w-4xl mb-16 mt-10">
            <p className="text-lg text-black">
              Hi, I'm Theo—a <span className="font-bold">curious and driven</span> Computer
              Engineering student eager to deepen my understanding of the technologies shaping our
              world. I’m passionate about{' '}
              <span className="font-bold">improving my programming skills</span> and{' '}
              <span className="font-bold">exploring how systems work at a fundamental level </span>
              .I’m particularly interested in computer architecture and cybersecurity. I enjoy
              learning how hardware and software interact and tackling the challenges of protecting
              digital systems.
            </p>
          </div>
        </FadeIn>

        {/* Remaining Items (2x2 Grid) */}
        <div className="py-12 px-6">
          <FadeIn direction="left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 mx-auto">
              Technologies and Tools
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto">
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
                    <span className="text-lg text-gray-800 font-medium break-words whitespace-normal text-center">
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
