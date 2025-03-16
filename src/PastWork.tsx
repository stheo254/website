import serverjpg from './assets/server.jpg';
import board from './assets/swappy-20250315_001649.png';
import db from './assets/kisspng-computer-icons-scalable-vector-graphics-database-p-folder-networking-icons-1-6-free-vector-icons-5c6c5e4f61a510.1562063015506059034.png';
import FadeIn from './FadeIn';
import { useRef } from 'react';

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
    },
    {
      id: 1,
      name: 'Board Game in Haskell',
      description:
        'Creating a board game called Catapult in Haskell highlights your ability to design functional programs with clean, maintainable code. It typically involves modeling the game state, handling player moves, and defining win conditions using Haskell’s powerful type system and pure functions.',
      image: board,
    },
    {
      id: 2,
      name: 'Managing Databases in Python',
      description:
        'Handling databases in Python involves connecting to a database, executing queries, and managing data efficiently. A database management project in Python shows my ability to store, retrieve, and manipulate data effectively—essential for back-end development and data engineering roles.',
      image: db,
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-evenly h-screen items-center gap-15">
        {features.map((feature) => (
          <FadeIn>
            <div
              ref={feature.id == 0 ? null : props.sections[feature.id + 2]}
              key={feature.id}
              className="text-center max-w-3xl pt-10 border-2 border-gray-400 rounded-2xl"
            >
              <div className="relative mb-8">
                <h2 className="relative text-4xl text-gray-400 pb-10 font-bold">{feature.name}</h2>
                <img src={feature.image} className="mx-auto w-80 drop-shadow-lg rounded-2xl" />
              </div>
              <p className="text-lg text-black mb-6 pb-5 text-gray-400 mx-5">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
export default PastWork;
