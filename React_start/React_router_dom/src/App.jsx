import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { AllRoutes } from './Routes/AllRoutes';

export const App = () => {
  return (
    <>
      {/* hello */}
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
};
