import { JSX } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import FadeIn from './FadeIn';

type SocialLink = {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
};

const socialLinks: SocialLink[] = [
  { id: 1, name: 'Twitter', url: 'https://x.com/theo_stefanus', icon: <FaTwitter /> },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stefanus-theo-chandra-909375200/',
    icon: <FaLinkedin />,
  },
  { id: 3, name: 'GitHub', url: 'https://github.com/stheo254', icon: <FaGithub /> },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://www.instagram.com/stefanus_theo/',
    icon: <FaInstagram />,
  },
];
function Contact() {
  return (
    <>
      <div className="items-center justify-between p-10">
        <FadeIn direction="left" distance={100}>
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

        <FadeIn direction="right" distance={100}>
          <div className="flex flex-col pt-5 justify-center items-center text-sm ">
            <div>You can also find me here:</div>
            <div className="flex gap-6">
              {socialLinks.map((link: SocialLink) => (
                <FadeIn rotate={45}>
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-500 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Contact;
