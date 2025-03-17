import stk from './assets/tu-kaiserslautern-100~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg';
import tu from './assets/images.jpg';
import binus from './assets/1.jpg';
import more from './assets/iwqemages.png';
type TimelineItem = {
  id: number;
  content: string;
  label: string;
  color: string;
  picture: string;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    content:
      'Finished high school in Tangerang, Indonesia, my beautiful hometown! Majored in the A Levels Cambridge curriculum and Science, it provided me with the proper foundation of logical & critical thinking.',
    label: 'SCHOOL',
    color: '2016-2019',
    picture: binus,
  },
  {
    id: 2,
    content:
      "Before taking my Bachelor's degree, I took the Studienkolleg program at Hochschule Kaiserslautern, at... you guessed it, Kaiserslautern!",
    label: 'Studienkolleg Kaiserslautern',
    color: 'March - June 2020',
    picture: stk,
  },
  {
    id: 3,
    content:
      "After Studienkolleg,I started my tuition to another University before I started my Bachelor's degree program at Technische Universität Berlin. I moved because i dont feel that i am a great fit in my previous university.",
    label: 'TU BERLIN',
    color: 'April 2022 - Now',
    picture: tu,
  },
  { id: 4, content: 'There is more to come', label: '', color: '', picture: more },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-8/10 mt-20"></div>

      {timelineData.map((item, index) => (
        <div key={item.id} className="relative w-full flex items-center my-35">
          {/* Left Description */}
          {index % 2 === 0 && (
            <>
              <span className="absolute right-1/2 pr-40 italic -mt-45 mr-20 text-l font-bold text-left">
                {item.label}
              </span>
              <span className="absolute right-1/2 pr-40 italic -mt-35 mr-20 text-md font-bold text-left">
                {item.color}
              </span>
              <span className="absolute right-1/2 pr-40 text-xs italic max-w-100 text-left">
                {item.content}
              </span>
            </>
          )}

          {/* Circle on the Line (with Hover Effect) */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-48 h-48 flex items-center justify-center rounded-full overflow-hidden bg-black transition-transform duration-300 hover:scale-110`}
          >
            <img src={item.picture} alt={item.label} className="w-full h-full object-cover" />
          </div>

          {/* Right Description */}
          {index % 2 !== 0 && (
            <>
              <span className="absolute left-1/2 pl-40 italic -mt-40 mr-20 text-lg font-bold">
                {item.label}
              </span>
              <span className="absolute left-1/2 pl-40 italic -mt-30 mr-20 text-md font-bold">
                {item.color}
              </span>
              <span className="absolute left-1/2 pl-40 text-xs italic max-w-100 text-left">
                {item.content}
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
