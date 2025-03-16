import random from './assets/react.svg';
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
      "After Studienkolleg,I started my tuition to another University before I started my Bachelor's degree program at Technische Universität Berlin. I moved because i dont feel that i am a great fit in my previous university. I study Technische Informatik, which translates to Computer Engineering.",
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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-8/10 mt-25 "></div>

      {timelineData.map((item, index) => (
        <div key={item.id} className="relative w-full flex items-center my-25 ">
          {/* Left Description */}
          {index % 2 === 0 && (
            <>
              <span className="absolute right-1/2 pr-20 text-sm italic -mt-45 mr-20 text-xl font-bold">
                {item.label}
              </span>
              <span className="absolute right-1/2 pr-20 text-sm italic -mt-35 mr-20 text-l font-bold">
                {item.color}
              </span>
              <span className="absolute right-1/2 pr-20 text-sm italic max-w-100 ">
                {item.content}
              </span>
            </>
          )}

          {/* Circle on the Line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-black`}
          >
            <img src={item.picture} alt={item.label} className="w-full h-full object-cover" />
          </div>

          {/* Right Description */}
          {index % 2 !== 0 && (
            <>
              <span className="absolute left-1/2 pl-20 text-sm italic -mt-40 mr-20 text-xl font-bold">
                {item.label}
              </span>
              <span className="absolute left-1/2 pl-20 text-sm italic -mt-30 mr-20 text-l font-bold">
                {item.color}
              </span>
              <span className="absolute left-1/2 pl-20 text-sm italic max-w-100 ">
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
