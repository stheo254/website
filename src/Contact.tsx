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
          <h1 className="text-xl font-light text-gray-800 mt-10 pl-10">Contact me:</h1>
          <div className="border-t-2 border-black w-full my-4 ml-10 -py-10"></div>
          <span className="text-l pl-10">E-mail: stefanustheo21@gmail.com</span>
        </div>

        <div className="flex flex-col gap-6 p-4 justify-center items-center mr-20">
          <div>You can also find me here:</div>
          <div className="flex gap-6">
            {socialLinks.map((link: SocialLink) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl hover:text-blue-500 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
