import myPic from './assets/head140250(1).png';
import FadeIn from './FadeIn';

type PastWorkProps = {
  sections: React.RefObject<HTMLDivElement | null>[];
  scrollTo: (e: number) => void;
};

function Titlecard(props: PastWorkProps) {
  return (
    <>
      <main className="relative flex items-center justify-between p-8 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bottom-0 -z-10 flex justify-center ">
          <img src={myPic} alt="desc" className=" h-full max-w-none object-cover md:object-fill " />
        </div>
        {/* Content Section */}
        <FadeIn direction="left" distance={100}>
          <div className="grid justify-items-start p-10  rounded-lg max-w-3xl z-10 -mt-45">
            <h1 className="text-5xl sm:text-7xl md:text-8xl text-black mb-4 font-bold font-montserrat text-left leading-tight text-left">
              Stefanus Theo Chandra
            </h1>
            <p className="text-black mb-6 sm:mb-8 text-lg sm:text-xl">a curious student</p>
            <button
              className="px-6 py-2 rounded-full bg-gray-600 text-white italic transition-transform transform hover:scale-110"
              onClick={() => props.scrollTo(6)}
            >
              CONTACT
            </button>
          </div>
        </FadeIn>
      </main>
    </>
  );
}

export default Titlecard;
