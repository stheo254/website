import stk from './assets/tu-kaiserslautern-100~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg';
import tu from './assets/images.jpg';
import binus from './assets/1.jpg';
import more from './assets/iwqemages.png';
import FadeIn from './FadeIn';
type TimelineItem = {
  id: number;
  content: string;
  label: string;
  color: string;
  picture: string;
  animation: string;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    content:
      'Finished high school in Tangerang, Indonesia. Majored in the A Levels Cambridge curriculum and Science, it provided me with the proper foundation of logical & critical thinking.',
    label: 'SCHOOL',
    color: '2016-2019',
    picture: binus,
    animation: 'top',
  },
  {
    id: 2,
    content:
      "Before taking my Bachelor's degree, I took the Studienkolleg program at Hochschule Kaiserslautern, at... you guessed it, Kaiserslautern!",
    label: 'Studienkolleg Kaiserslautern',
    color: 'March - June 2020',
    picture: stk,
    animation: 'right',
  },
  {
    id: 3,
    content:
      "After Studienkolleg,I started my tuition to another University before I started my Bachelor's degree program at Technische Universität Berlin. I moved because i dont feel that i am a great fit in my previous university.",
    label: 'TU BERLIN',
    color: 'April 2022 - Now',
    picture: tu,
    animation: 'left',
  },
  {
    id: 4,
    content: 'There is more to come                                            ',
    label: '',
    color: '',
    picture: more,
    animation: 'top',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center mb-10 ">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-7/10 mt-52 md:block"></div>
      <div className="flex flex-col justify-between h-full w-full max-w-5xl space-y-50 mx-auto my-20">
        {timelineData.map((item, index) => (
          <div key={item.id} className="relative flex flex-col items-center w-full">
            {/* Left Description */}
            {index % 2 === 0 ? (
              <div className="grid justify-items-start items-center text-center w-1/2 pr-25">
                <FadeIn direction="left">
                  <div className="italic text-lg font-bold text-right">{item.label}</div>
                  <div className="italic text-md font-bold text-right">{item.color}</div>
                  <div className="italic text-md max-w-100 break-words text-right">
                    {item.content}
                  </div>
                </FadeIn>
              </div>
            ) : (
              <div className="w-1/2" /> // Empty space for left alignment on odd items
            )}

            {/* Circle on the Line (with Hover Effect) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-36 h-36  md:w-48 md:h-48 flex items-center justify-center rounded-full overflow-hidden bg-black transition-transform duration-300 hover:scale-110">
              <img src={item.picture} alt={item.label} className="w-full h-full object-cover" />
            </div>
            {/* Right Description */}
            {index % 2 !== 0 ? (
              <div className="grid justify-items-center items-center text-center w-1/2 pl-25 whitespace-pre-wrap">
                <FadeIn direction="right">
                  <div className="italic text-lg font-bold text-left">{item.label}</div>
                  <div className="italic text-md font-bold text-left">{item.color}</div>
                  <div className="italic text-md max-w-100 break-words text-left">
                    {item.content}
                  </div>
                </FadeIn>
              </div>
            ) : (
              <div className="w-1/2" /> // Empty space for right alignment on even items
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
