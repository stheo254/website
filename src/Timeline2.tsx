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

const Timeline2: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 ">
      <div className="relative ml-10 lg:ml-5">
        {timelineData.map((exp, index) => (
          <div key={index} className="relative pb-8 flex items-center">
            {index !== 0 && (
              <div
                className="absolute -left-5 top-0 bg-black "
                style={{ height: 'calc(50% - 2rem)', width: '2px' }}
              ></div>
            )}

            {/* Dot and Image Container */}

            <div className="relative flex items-center mt-5">
              {/* Timeline Dot */}
              <div className="w-4 h-4 bg-gray-400 rounded-full absolute -left-[27px] " />

              {/* Logo */}
              <FadeIn direction="left">
                <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden bg-black ">
                  <img
                    src={exp.picture}
                    alt={exp.label}
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
              </FadeIn>
            </div>
            {/* Timeline Line (Below Circle) */}
            {index !== timelineData.length - 1 && (
              <div
                className="absolute -left-5 w-1 bg-black pb-5 "
                style={{ top: 'calc(50% + 1rem)', height: 'calc(50% - 1rem)', width: '2px' }}
              ></div>
            )}
            {/* Content */}
            <FadeIn direction="right">
              <div className="px-4 lg:mx-4 flex flex-col sm:flex-row sm:justify-between w-full ">
                <div className={`${index === timelineData.length - 1 ? 'flex items-center' : ' '}`}>
                  <h3 className="text-xl font-semibold text-black text-left">{exp.label}</h3>
                  <h2 className="text-xl font-semibold text-black text-left">{exp.color}</h2>
                  <p className="text-black text-left py-auto">{exp.content}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline2;
