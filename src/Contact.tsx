import { JSX } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import myPic from './assets/Email-marketing-iStock-1094872032.webp';

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
      <div className="flex flex-wrap items-center justify-between p-10">
        <div className="grid justify-items-start">
          <h1 className="text-2xl font-light text-gray-800 mt-10 pl-10">
            You can contact me with my Email
          </h1>
          <h4 className="text-2xl font-light text-gray-800 pl-10">stefanustheo21@gmail.com</h4>
        </div>

        <div className="bg-gray-800 flex items-center justify-center mr-50 rounded-4xl">
          <img className="w-80 rounded-3xl " src={myPic} alt="desc"></img>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 justify-center items-center relative w-full">
        <div>You can also find me here:</div>
        <div className="flex gap-6">
          {socialLinks.map((link: SocialLink) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
