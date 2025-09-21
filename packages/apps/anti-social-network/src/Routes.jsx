import { kebabCase } from 'lodash';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@am-ogs/react-ui';
import { landing_page_navigation } from '@/helpers/navigation';
import LandingPage from '@/pages/LandingPage';
import LockerLocations from '@/pages/LockerLocations';
import Pricing from '@/pages/Pricing';
import AtHome from '@/pages/AtHome';

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/overview" element={<LandingPage />} />

        {landing_page_navigation.map((page, index) => {
          if (!page.static) {
            const LazyComponent = lazy(() =>
              import(`./pages/${page.action}.tsx`),
            );
            return (
              <Route
                exact
                key={index}
                path={`/${kebabCase(page.action)}`}
                element={<LazyComponent />}
              />
            );
          }
        })}

        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/locker-locations" element={<LockerLocations />} />
        <Route exact path="/at-home" element={<AtHome />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
