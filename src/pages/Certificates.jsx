import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";

function Certificates() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className="min-h-screen bg-gray-100 pt-20">
          <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-3xl font-bold">
              Certificates
            </h1>
            <p className="text-center text-gray-600">
              Certificates page content goes here...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Certificates;
