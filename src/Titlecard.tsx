import myPic from './assets/20241210_140250(1).jpg';

type PastWorkProps = {
  sections: React.RefObject<HTMLDivElement | null>[];
  scrollTo: (e: number) => void;
};

function Titlecard(props: PastWorkProps) {
  return (
    <>
      <main className="flex flex-wrap items-center justify-between p-8">
        <div className="grid justify-items-start bg-[#000080]/90 p-10 rounded-4xl">
          <h1 className="text-5xl font-light text-white mb-4">Stefanus Theo Chandra</h1>
          <p className="text-white mb-8">a curious student</p>
          <button
            className="px-6 py-2 rounded-full bg-gray-600 text-white italic transition-transform transform hover:scale-110"
            onClick={() => props.scrollTo(6)}
          >
            CONTACT
          </button>
        </div>

        <div className="w-96 h-96 bg-gray-800 rounded-lg flex items-center justify-center mr-30">
          <img src={myPic} alt="desc" className=" scale-y-[-1] rounded-2xl"></img>
        </div>
      </main>
    </>
  );
}

export default Titlecard;
