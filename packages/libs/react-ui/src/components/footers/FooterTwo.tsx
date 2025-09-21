import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  colors: {
    text: string;
    border: string;
    bg: string;
    hover: string;
  };
  since: string;
  legals: Record<string, string>[];
  socials: Record<string, string>[];
  sections: Record<string, any>[];
  company: {
    name: string;
    description: string;
    email: string;
    phone: string;
    logo: string;
    address: {
      street: string;
      building: string;
      suite: string;
      city: string;
      state: string;
      zip: string;
    };
  };
}

const FooterTwo = ({
  since,
  colors,
  socials,
  legals,
  sections,
  company,
}: FooterProps) => {
  return (
    <div className="p-6 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <img
            src={company.logo}
            alt="logo"
            className="h-12 md:h-16 object-cover"
          />
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {company.description}
          </p>

          <div className="flex space-x-4 md:order-2">
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
          {/* <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/one-gal-shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
          </div> */}
        </div>

        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
            <ul className="space-y-3">
              {section.children.map((item: any, index: number) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon
                icon={faMapMarker}
                className="text-primary mt-1"
              />
              <div>
                <p className="text-muted-foreground">
                  {company.address.street}
                </p>

                <p className="text-muted-foreground">
                  {company.address.building}{', '}
                  {company.address.suite ? 'Suite ' : ''}
                  {company.address.suite}
                </p>

                <p className="text-muted-foreground">
                  {company.address.city}, {company.address.state},{' '}
                  {company.address.zip}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
              <p className="text-muted-foreground">{company.phone}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <p className="text-muted-foreground">{company.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {since} {company.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {legals.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
