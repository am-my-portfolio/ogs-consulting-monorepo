import React from 'react';

export interface FooterProps {
  colors: {
    text: string;
    border: string;
    bg: string;
    hover: string;
  },
  socials: Record<string, string>[]
}
// text-pop-secondary border-pop-secondary bg-dull-secondary/40
const Footer = ({
  colors,
  socials
}: FooterProps) => {
  return (
    <div className={`px-4 py-4 md:py-6 md:flex md:items-center md:justify-between border-t-0 ${colors.text} ${colors.border} ${colors.bg}`}>
      <div className="flex justify-center space-x-6 md:order-2">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            className={`hover:${colors.hover}`}
          >
            <div className="sr-only fixed">{item.name}</div>
            <div className={item.icon}></div>
          </a>
        ))}
      </div>

      <div className="md:order-1 mt-4 md:mt-0">
        <div className="text-center text-sm leading-5">
          <i className="fa-regular fa-copyright"></i> 2024 - Present. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
