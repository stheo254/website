import serverjpg from './assets/—Pngtree—web server vector icon_5462090(1).png';
import board from './assets/swappy-20250315_001649.png';
import db from './assets/information_5134979.png';
import FadeIn from './FadeIn';

import clang from './assets/clang.png';
import python from './assets/Python-logo-notext.svg.png';
import haskell from './assets/haskell2.png';
import duck from './assets/DuckDB_logo.svg.png';

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
      image: serverjpg,
      lang: [clang],
      animation: 'left',
      distance: 150,
    },
    {
      id: 1,
      name: 'Board Game in Haskell',
      description:
        'Creating a board game called Catapult in Haskell highlights your ability to design functional programs with clean, maintainable code. It typically involves modeling the game state, handling player moves, and defining win conditions using Haskell’s powerful type system and pure functions.',
      image: board,
      lang: [haskell],
      animation: 'right',
      distance: 150,
    },
    {
      id: 2,
      name: 'Managing Databases in Python',
      description:
        'Handling databases in Python involves connecting to a database, executing queries, and managing data efficiently. A database management project in Python shows my ability to store, retrieve, and manipulate data effectively—essential for back-end development and data engineering roles.',
      image: db,
      lang: [python, duck],
      animation: 'left',
      distance: 150,
    },
  ];
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 min-h-screen items-start gap-y-12 gap-x-4 px-6 sm:px-8 justify-items-center pb-10 mx-5">
        {features.map((feature) => (
          <FadeIn direction={feature.animation} distance={feature.distance} key={feature.id}>
            <div
              ref={feature.id == 0 ? null : props.sections[feature.id + 2]}
              className="text-center max-w-xl pt-10 border-2 border-gray-400 rounded-xl bg-gray-800/30 justify-self-center h-full flex flex-col min-h-[550px]"
            >
              {/* Title and First Line */}
              <div className="mb-8 px-5">
                <h2 className="text-4xl text-gray-100 font-bold whitespace-pre-wrap">
                  {feature.name}
                </h2>
                <hr className="w-4/5 mx-auto border-white my-6" />
              </div>

              {/* Description (Expands to Fill Space) */}
              <div className="flex-grow px-5">
                <p className="text-lg text-white">{feature.description}</p>
              </div>

              {/* Second Line & Icons */}
              {feature.lang.length > 0 && (
                <div>
                  <hr className="w-4/5 mx-auto border-white my-6" />
                  <div className="flex flex-wrap justify-center pb-5">
                    {feature.lang.map((lang, index) => (
                      <img key={index} src={lang} className="h-12 m-5" alt="Technology" />
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
