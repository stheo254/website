import random from './assets/react.svg';
type TimelineItem = {
  id: number;
  content: string;
  label: string;
  color: string;
};

const timelineData: TimelineItem[] = [
  { id: 1, content: 'GAMBA R', label: 'HIGH SCHOOL', color: 'bg-black' },
  { id: 2, content: 'GAMBA R', label: 'STK', color: 'bg-gray-700' },
  { id: 3, content: 'GAMBA R', label: 'TU BERLIN', color: 'bg-gray-600' },
  { id: 4, content: 'MORE', label: '', color: 'bg-gray-500' },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-6/10 mt-25 "></div>

      {timelineData.map((item, index) => (
        <div key={item.id} className="relative w-full flex items-center my-20 ">
          {/* Left Description */}
          {index % 2 === 0 && (
            <span className="absolute right-1/2 pr-20 text-sm italic -mt-10">{item.label}</span>
          )}

          {/* Circle on the Line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-32 h-32 flex items-center justify-center rounded-full ${item.color}`}
          >
            <img src={random}></img>
          </div>

          {/* Right Description */}
          {index % 2 !== 0 && (
            <span className="absolute left-1/2 pl-20 text-sm italic -mt-10">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
