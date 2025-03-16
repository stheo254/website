import FadeIn from './FadeIn';
function About() {
  return (
    <>
      <h1 className="mt-30 text-left text-md border-2 rounded-full mx-auto w-25 flex justify-center">
        About me
      </h1>
      {/*
      <div className="flex justify-center items-center w-full">
        <div className="w-4/5 bg-gray-700 rounded-3xl p-5">
          <p className="text-xl text-white">
            {' '}
            Hi, I'm Theo—a curious and driven Computer Engineering student eager to deepen my
            understanding of the technologies shaping our world. I’m passionate about improving my
            programming skills and exploring how systems work at a fundamental level.
          </p>
          <p className="text-xl text-white p-5">
            I’m particularly interested in computer architecture and cybersecurity. I enjoy learning
            how hardware and software interact and tackling the challenges of protecting digital
            systems. Staying updated on emerging technologies in these areas excites me, as they
            play a vital role in the future of computing.
          </p>{' '}
          <p className="text-xl text-white p-5k">
            I love solving complex problems and finding innovative solutions. My hands-on approach
            to learning involves engaging in personal projects, collaborating with others, and
            exploring new ideas to expand my skills.
          </p>
          <p className="text-xl text-white p-5">
            Outside academics, I enjoy computer games—especially team-oriented ones where
            collaboration matters as much as individual skill. I also play badminton, which helps me
            stay active and sharp. Additionally, I like refining my Linux configurations, combining
            creativity with technical skills to customize efficient and personalized systems.
          </p>
          <p className="text-xl text-white ">
            As I continue my journey in computer engineering, I’m excited to explore new
            possibilities and contribute to the evolving world of technology.
          </p>
        </div>
      </div>

      */}

      <div className="min-h-screen flex flex-col items-center justify-center p-8 -mt-10">
        {/* First Item (Centered Alone) */}
        <FadeIn direction="top">
          <div key="intro" className="relative pl-16 max-w-2xl mb-16">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                className="text-gray-600"
              >
                <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>

            <p className="text-lg text-black">
              Hi, I'm Theo—a curious and driven Computer Engineering student eager to deepen my
              understanding of the technologies shaping our world. I’m passionate about improving my
              programming skills and exploring how systems work at a fundamental level.
            </p>
          </div>
        </FadeIn>

        {/* Remaining Items (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl ">
          {[
            'I’m particularly interested in computer architecture and cybersecurity. I enjoy learning how hardware and software interact and tackling the challenges of protecting digital systems. Staying updated on emerging technologies in these areas excites me, as they play a vital role in the future of computing.',
            'I love solving complex problems and finding innovative solutions. My hands-on approach to learning involves engaging in personal projects, collaborating with others, and exploring new ideas to expand my skills.',
            'Outside academics, I enjoy computer games—especially team-oriented ones where collaboration matters as much as individual skill. I also play badminton, which helps me stay active and sharp. Additionally, I like refining my Linux configurations, combining creativity with technical skills to customize efficient and personalized systems.',
            'As I continue my journey in computer engineering, I’m excited to explore new possibilities and contribute to the evolving world of technology.',
          ].map((item, index) => (
            <FadeIn direction={index % 2 == 0 ? 'left' : 'right'}>
              <div key={index} className="relative pl-16 flex items-center">
                <span className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    className="text-gray-600"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>

                <p className="text-lg text-black">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
