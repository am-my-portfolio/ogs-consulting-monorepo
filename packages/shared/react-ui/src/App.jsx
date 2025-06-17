// import TopNavigation from "@/components/landing/TopNavigation";
import Footer from '@/components/layout/Footer';
// import AppRoutes from "@/Routes";

function App() {
  const isAuthenticated = false;
  const isLoading = false;

  return (
    <>
      {/* the X value needs to match b/w the lg:w-X of the side column and the lg:pl-X of the main column  */}

      {/* Left Column  */}
      {isAuthenticated && (
        <div
          isAuthenticated={true}
          className="hidden lg:fixed lg:flex lg:flex-col lg:inset-y-0 lg:z-50 lg:w-80"
        >
          Side Menu
          {/* <SideMenu /> */}
        </div>
      )}

      {/* Main Column   */}
      <div
        className={`flex flex-col h-screen justify-between ${isAuthenticated ? 'lg:pl-80' : ''}`}
      >
        {isAuthenticated && (
          <div className="sticky top-0 z-40 lg:px-8">
            Header
            {/* <Header /> */}
          </div>
        )}
        {!isAuthenticated && (
          <div className="sticky top-0 z-40 px-2 sm:px-6 lg:px-44">
            <TopNavigation />
          </div>
        )}

        {!isLoading && (
          <div className="mb-auto mx-auto w-full py-4 px-4 sm:px-6 lg:px-44 overflow-auto scrollbar">
            <AppRoutes />
          </div>
        )}

        <div className="sticky bottom-0 border-t-2 z-40 mx-2 md:mx-8 border-pop-secondary bg-dull-primary">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
