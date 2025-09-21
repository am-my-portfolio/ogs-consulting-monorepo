import { kebabCase } from "lodash";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { landing_page_navigation } from "@/helpers/navigation";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import LandingPage from "@/pages/LandingPage";
import TermsAndConditions from "@/pages/TermsAndConditions.tsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/overview" element={<LandingPage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          exact
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        {landing_page_navigation.map((page, index) => {
          if (!page.static) {
            const LazyComponent = lazy(() =>
              import(`./pages/${page.name.replace(/ /g, "")}.tsx`)
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
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
