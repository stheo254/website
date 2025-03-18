import serverjpg from './assets/server.jpg';
import board from './assets/swappy-20250315_001649.png';
import db from './assets/kisspng-computer-icons-scalable-vector-graphics-database-p-folder-networking-icons-1-6-free-vector-icons-5c6c5e4f61a510.1562063015506059034.png';
import med from './assets/il_fullxfull.4832901302_jj39.webp';
import FadeIn from './FadeIn';

import clang from './assets/clang.png';
import python from './assets/Python-logo-notext.svg.png';
import haskell from './assets/haskell2.png';
import duck from './assets/DuckDB_logo.svg.png';

function PastWork2() {
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
    <section className="max-w-5xl mx-auto  px-6">
      <div className="relative ">
        {features.map((exp, index) => (
          <div key={index} className="pb-3 flex items-start ">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] w-3 h-3 bg-gray-400 rounded-full " />

            {/* Logo */}
            <div className="border-l-4 flex items-start mt-5 pl-5">
              <img
                src={exp.image}
                alt={exp.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-md"
              />

              {/* Content */}
              <div className="ml-8 flex flex-col sm:flex-row sm:justify-between w-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-400 text-left">{exp.name}</h3>
                  <p className="text-white text-left">{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PastWork2;
