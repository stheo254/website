import { JSX } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import myPic from './assets/Untitled.jpg';

type SocialLink = {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
};

const socialLinks: SocialLink[] = [
  { id: 1, name: 'Twitter', url: 'https://twitter.com/', icon: <FaTwitter /> },
  { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/', icon: <FaLinkedin /> },
  { id: 3, name: 'GitHub', url: 'https://github.com/', icon: <FaGithub /> },
  { id: 4, name: 'Instagram', url: 'https://instagram.com/', icon: <FaInstagram /> },
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

        <div className="bg-gray-800 rounded-lg flex items-center justify-center mr-50">
          <img src={myPic} alt="desc"></img>
        </div>
      </div>
      <div className="flex gap-6 p-4 justify-center items-center relative w-full">
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
    </>
  );
}

export default Contact;
