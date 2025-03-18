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

const Timeline3: React.FC = () => {
  return (
    <ul className="timeline timeline-vertical">
      <li>
        <div className="timeline-start text-base-content font-medium">1984</div>
        <div className="timeline-middle">
          <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
            <span className="badge badge-primary size-3 rounded-full p-0"></span>
          </span>
        </div>
        <div className="timeline-end timeline-box">Macintosh PC</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-base-content font-medium">1998</div>
        <div className="timeline-middle">
          <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
            <span className="badge badge-primary size-3 rounded-full p-0"></span>
          </span>
        </div>
        <div className="timeline-end timeline-box">iMac</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-base-content font-medium">2001</div>
        <div className="timeline-middle">
          <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
            <span className="badge badge-primary size-3 rounded-full p-0"></span>
          </span>
        </div>
        <div className="timeline-end timeline-box">iPod</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-base-content font-medium">2007</div>
        <div className="timeline-middle">
          <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
            <span className="badge badge-primary size-3 rounded-full p-0"></span>
          </span>
        </div>
        <div className="timeline-end timeline-box">iPhone</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-base-content font-medium">2015</div>
        <div className="timeline-middle">
          <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
            <span className="badge badge-primary size-3 rounded-full p-0"></span>
          </span>
        </div>
        <div className="timeline-end timeline-box">Apple Watch</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-base-content font-medium">2024</div>
        <div className="timeline-middle">
          <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
            <span className="badge badge-primary size-3 rounded-full p-0"></span>
          </span>
        </div>
        <div className="timeline-end timeline-box">Vision Pro</div>
      </li>
    </ul>
  );
};

export default Timeline3;
