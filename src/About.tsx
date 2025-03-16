function About() {
  return (
    <>
      <h1 className="mt-30 mb-10 text-left p-5 text-4xl border-2 rounded-full mx-auto w-65 flex justify-center">
        About me
      </h1>
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
    </>
  );
}

export default About;
