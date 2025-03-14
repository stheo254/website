function About() {
  return (
    <>
      <h1 className="pt-30 text-left p-10 text-4xl">About me</h1>
      <div className="flex justify-center items-center w-full">
        <div className="w-4/5 bg-gray-700 rounded-3xl p-10">
          <p className="text-xl text-white">
            {' '}
            Hi, I'm Theo—a curious Computer Engineering student looking to improve my skills in most
            aspects of computer programming. I am fascinated by how it shapes the world around us.
          </p>
          <p className="text-xl text-white p-10">
            I am particularly interested in areas like computer architecture and cybersecurity. I
            love tackling complex problems, developing innovative solutions, and learning about
            emerging technologies that drive computing.
          </p>{' '}
          <p className="text-xl text-white p-10">
            Outside of academics, I enjoy playing computer games, badminton, and refining my Linux
            configurations. I like team-oriented games where, in order to win, it's not just
            individual skill that matters but how well people work together.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
