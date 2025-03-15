import serverjpg from './assets/swappy-20250314_230813.png';
import board from './assets/swappy-20250315_001649.png';
import db from './assets/cartoon-image-of-database-icon--15675526.jpg';
function PastWork() {
  const features = [
    {
      id: 1,
      name: 'TCP and UDP Server in C language',
      description:
        'Building a basic TCP server in C demonstrates my ability to work with low-level networking and system programming. It involves handling socket connections, processing client requests, and sending responses.',
      image: serverjpg,
    },
    {
      id: 2,
      name: 'Board Game in Haskell',
      description:
        'Creating a board game called Catapult in Haskell highlights your ability to design functional programs with clean, maintainable code. It typically involves modeling the game state, handling player moves, and defining win conditions using Haskell’s powerful type system and pure functions.',
      image: board,
    },
    {
      id: 3,
      name: 'Managing Databases in Python',
      description:
        'Handling databases in Python involves connecting to a database, executing queries, and managing data efficiently.',
      image: db,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-20 py-20">
        {features.map((feature) => (
          <div key={feature.id} className="text-center max-w-3xl">
            <div className="relative mb-8">
              <img src={feature.image} className="mx-auto w-80 drop-shadow-lg" />
              <h2 className="relative">{feature.name}</h2>
            </div>
            <p className="text-lg text-black mb-6">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default PastWork;
