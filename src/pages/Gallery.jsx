import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className="min-h-screen bg-gray-100 pt-20">
          <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-3xl font-bold">Gallery</h1>
            <p className="text-center text-gray-600">
              Gallery page content goes here...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
