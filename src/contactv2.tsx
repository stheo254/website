import FadeIn from './FadeIn';

function Contact() {
  return (
    <>
      <div className="items-center justify-between p-10">
        <FadeIn direction="right" distance={100}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#4A4A4A] rounded-xl py-12 text-center">
              <h2 className="text-3xl font-semibold mb-4 relative text-white">
                Get in Touch
                <span className="block w-16 h-1 bg-gray-400 mx-auto mt-2"></span>
              </h2>
              <p className="text-white mb-8">
                Interested in working together or have a question? Feel free to reach out!
              </p>
              <a
                href="mailto:stefanustheo21@gmail.com"
                className="bg-gray-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Contact;
