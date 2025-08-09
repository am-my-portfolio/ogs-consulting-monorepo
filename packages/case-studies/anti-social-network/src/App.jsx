import { SiteLayout, Footer } from '@am-ogs/react-ui';
import AppRoutes from '@/Routes';
import TopNavigation from '@/components/landing/TopNavigation';

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

  return (
    <SiteLayout
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
      topNavigation={<TopNavigation />}
      appRoutes={<AppRoutes />}
      footer={<Footer
        colors={{
          text: 'text-pop-secondary',
          border: 'border-t-2 border-dull-secondary',
          // bg: 'bg-dull-secondary',
          hover: 'text-pop-primary'
        }}
        socials={socials}
      />}
    />
  );
}

export default App;
