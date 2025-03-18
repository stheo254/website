import serverjpg from './assets/server.jpg';
import board from './assets/swappy-20250315_001649.png';
import db from './assets/kisspng-computer-icons-scalable-vector-graphics-database-p-folder-networking-icons-1-6-free-vector-icons-5c6c5e4f61a510.1562063015506059034.png';
import med from './assets/il_fullxfull.4832901302_jj39.webp';
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
    {
      id: 3,
      name: 'Medic in a school sporting event',
      description:
        'Serving as a medic during a school event involves providing first aid, ensuring participant safety, and responding to medical emergencies. This role requires attentiveness, quick thinking, and effective communication.',
      image: med,
      lang: [],
      animation: 'right',
      distance: 150,
    },
  ];
  return (
    <>
      <div className="relative flex flex-wrap justify-center min-h-screen items-start gap-x-5 gap-y-10 pb-10 px-65">
        {features.map((feature) => (
          <FadeIn direction={feature.animation} distance={feature.distance}>
            <div
              ref={feature.id == 0 ? null : props.sections[feature.id + 2]}
              key={feature.id}
              className="text-center max-w-xl pt-10 border-2 border-gray-400 rounded-xl bg-gray-800/30"
            >
              <div className="relative mb-8">
                <h2 className="relative text-4xl text-gray-100 pb-10 font-bold">{feature.name}</h2>
                <img src={feature.image} className="mx-auto w-80 drop-shadow-lg rounded-2xl" />
              </div>
              <hr className="w-4/5 mx-auto border-white mb-6" />
              <p className="text-lg mb-6  text-white p-2">{feature.description}</p>

              {feature.lang.length != 0 && <hr className="w-4/5 mx-auto border-white " />}
              <div className="flex flex-wrap justify-center">
                {feature.lang?.map((lang) => <img src={lang} className="h-12 m-5"></img>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
export default PastWork;
