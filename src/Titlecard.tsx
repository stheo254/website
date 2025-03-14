import myPic from './assets/Untitled.jpg';
function Titlecard() {
  return (
    <>
      <main className="flex items-center justify-between p-8">
        <div className="grid justify-items-start">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Stefanus Theo Chandra</h1>
          <p className="text-gray-600 mb-8">a curious student</p>
          <button className="px-6 py-2 rounded-full bg-gray-600 text-white italic">CONTACT</button>
        </div>

        <div className="w-96 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
          <img src={myPic} alt="desc"></img>
        </div>
      </main>
    </>
  );
}

export default Titlecard;
