import FadeIn from './FadeIn';

import clang from './assets/cxd.png';
import ts from './assets/Typescript.svg.png';
import haskell from './assets/haskell2.png';
import react from './assets/react-bg.png';

type PastWorkProps = {
  sections: React.RefObject<HTMLDivElement | null>[];
  scrollTo: (e: React.WheelEvent) => void;
};

function PastWork(props: PastWorkProps) {
  const features = [
    {
      id: 0,
      name: 'TCP and UDP Server in C language',
      description:
        'Building a basic TCP server in C demonstrates my ability to work with low-level networking and system programming. It involves handling socket connections, processing client requests, and sending responses.',
      image: 'https://github.com/stheo254/DHT#',
      lang: [clang],
      animation: 'left',
      distance: 150,
    },
    {
      id: 1,
      name: `Board Game in Haskell`,
      description:
        'Creating a board game called Catapult in Haskell highlights your ability to design functional programs with clean, maintainable code. It typically involves modeling the game state, handling player moves, and defining win conditions using Haskell’s powerful type system and pure functions.',
      image: 'https://github.com/stheo254/Catapult',
      lang: [haskell],
      animation: 'top',
      distance: 150,
    },
    {
      id: 2,
      name: 'Personal Website',
      description:
        'Creating a personal website highlights your ability to develop and structure web applications using modern frameworks. It typically involves building interactive user interfaces, managing application state, and ensuring responsive design while showcasing your proficiency in front-end technologies and attention to detail.',
      image: 'https://github.com/stheo254/website',
      lang: [ts, react],
      animation: 'right',
      distance: 150,
    },
  ];
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 items-start gap-y-12 gap-x-4 px-6 sm:px-8 justify-items-center pb-10 mx-5">
        {features.map((feature) => (
          <FadeIn direction={feature.animation} distance={feature.distance} key={feature.id}>
            <div
              ref={feature.id == 0 ? null : props.sections[feature.id + 2]}
              className="text-center max-w-xl pt-10 border-2 border-gray-400 rounded-xl justify-self-center h-full flex flex-col min-h-[550px]"
            >
              {/* Title and First Line */}
              <div className="mb-8 px-5">
                <h2 className="text-2xl text-gray-100 font-bold whitespace-pre-wrap">
                  {feature.name}
                </h2>
                <hr className="w-4/5 mx-auto border-white my-6" />
              </div>

              {/* Description (Expands to Fill Space) */}
              <div className="flex-grow px-5">
                <p className="text-lg text-white">{feature.description}</p>
              </div>

              <a
                href={feature.image}
                className="text-blue-400 transition-colors hover:text-blue-200"
              >
                Github
              </a>
              {/* Second Line & Icons */}
              {feature.lang.length > 0 && (
                <div>
                  <hr className="w-4/5 mx-auto border-white my-6" />
                  <div className="flex flex-wrap justify-center pb-5">
                    {feature.lang.map((lang, index) => (
                      <img
                        key={index}
                        src={lang}
                        className="h-12 m-5 rounded-full"
                        alt="Technology"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
export default PastWork;
