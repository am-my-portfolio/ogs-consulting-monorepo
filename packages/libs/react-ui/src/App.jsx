import AppRoutes from '@/Routes';
import TopNavigation from '@/components/TopNavigation.tsx';
import SiteLayoutTwo from '@/components/site-layout/SiteLayoutTwo.tsx';
import FooterTwo from '@/components/footers/FooterTwo.tsx';

function App() {
  // TODO: this will change when we integrate login
  const isAuthenticated = false;
  const isLoading = false;

  const socials = [
    {
      name: 'Website',
      href: 'https://www.teenhustl.com/',
      icon: 'fa-solid fa-globe',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/teenhustl/',
      icon: 'fa-brands fa-linkedin',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/JackBonneau',
      icon: 'fa-brands fa-youtube',
    },
    {
      name: 'X',
      href: 'https://x.com/teenhustl',
      icon: 'fa-brands fa-x-twitter',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/teenhustl',
      icon: 'fa-brands fa-instagram',
    },
  ];

  const sections = [
    {
      title: 'Company',
      children: [
        {
          title: 'About Us',
        },
        {
          title: 'Services',
        },
        {
          title: 'Locations',
        },
        {
          title: 'Partners',
        },
        {
          title: 'In the News',
        },
      ],
    },
    {
      title: 'Services',
      children: [
        {
          title: 'Circular Economy',
        },
        {
          title: 'Sustainability',
        },
        {
          title: 'Your Benefits',
        },
        {
          title: 'FAQs',
        },
      ],
    },
  ];

  const legals = [
    {
      href: '/privacy-policy',
      title: 'Privacy Policy',
    },
    {
      href: '/terms-and-conditions',
      title: 'Terms of Service',
    },
  ];

  return (
    <SiteLayoutTwo
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
      topNavigation={<TopNavigation />}
      appRoutes={<AppRoutes />}
      footer={
        <div>
          <FooterTwo
            colors={{
              text: 'text-pop-secondary',
              border: 'border-t-2 border-dull-secondary',
              bg: 'bg-dull-secondary',
              hover: 'text-pop-primary',
            }}
            socials={socials}
            legals={legals}
            sections={sections}
            since="2004"
            company={{
              name: 'Circle Lockers',
              description: `Convenient neighborhood ecommerce returns, neighbor-to-neighbor deliveries, and forthcoming services that support the Circular Economy`,
              address: {
                street: 'Circle Locker LLC',
                building: '13952 Sky Cove Drive',
                city: 'Broomfield',
                state: 'CO',
                zip: '80023',
              },
              email: 'support@circlelockers.com',
              phone: '+1 (555) 123-4567',
              logo: '/circle-lockers-rows-sm.png',
            }}
          />
        </div>
      }
    />
  );
}

export default App;
