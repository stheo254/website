import FadeIn from './FadeIn';
import myPic2 from './assets/ABC(1).png';

type PastWorkProps = {
  sections: React.RefObject<HTMLDivElement | null>[];
  scrollTo: (e: number) => void;
};

function Titlecard(props: PastWorkProps) {
  return (
    <>
      <main className="">
        {/* Background Image */}
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between min-h-[80vh] overflow-hidden">
            <div className="absolute inset-0 bottom-0 -z-10 flex justify-end mr-0 xl:mr-40 ">
              <img
                src={myPic2}
                alt="desc"
                className=" max-h-[100%] max-w-none object-cover md:object-fill hidden md:block absolute bottom-0"
              />
            </div>
            {/* Content Section */}
            <FadeIn direction="left" distance={100}>
              <div className="grid justify-items-center md:justify-items-start p-8 rounded-lg max-w-3xl z-10 xl:-mt-15">
                <h1 className=" text-center md:text-left roboto-bold text-5xl sm:text-7xl md:text-8xl text-black mb-4">
                  Stefanus Theo Chandra
                </h1>
                <p className="text-black mb-6 sm:mb-8 text-lg sm:text-xl p-4">a curious student</p>
                <button
                  className="px-6 py-2 rounded-full bg-gray-600 text-white transition-transform transform hover:scale-110 m-4"
                  onClick={() => props.scrollTo(6)}
                >
                  CONTACT
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  );
}

export default Titlecard;
