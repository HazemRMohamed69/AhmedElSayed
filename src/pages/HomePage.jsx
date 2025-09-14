/* eslint-disable*/
import { Menu, Users } from "lucide-react";
import Navbar from "../components/navigation/Navbar";
import ImageSlideshow from "../components/Animation/ImageSlideshow";
import Box from "../ui/Box";
import TitleDesc from "../ui/TitleDesc";
import FloatingImage from "../components/Animation/FloatingImage";
import FlipBox from "../components/Animation/FlipBox";
import FoldedBackground from "../ui/FoldedBackground";
import WaveDivider from "../ui/WaveDivider";
import Divider from "../ui/Divider";
import Footer from "../components/Footer";

import { flipBoxSections } from "../constants/flipBoxSections";

function HomePage() {
  // Example: Dummy stats
  const boxData = Array.from({ length: 10 }, () => ({
    Icon: Users,
    unit: "الف",
    value: "7.882",
    title: "راس المال البشري ",
    description: "في مجمع عمال مصر داخل القطاعات الصناعيه في مصر",
  }));

  return (
    <>
      {/* ✅ Header */}
      <div className="relative">
        {/* Slideshow as the background */}
        <ImageSlideshow />

        {/* Navbar sitting on top */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
      </div>

      {/* ✅ Wave Divider */}
      <WaveDivider color="#30b364" className="md:hidden" />

      {/* ✅ Stats Section */}
      <div className="bg-gradient-to-b from-green-700 to-green-800 pt-8">
        {/* Enhanced divider above first grid */}
        <div className="container mx-auto px-4">
          <div className="relative">
            <Divider className="mb-8" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-600 px-4 py-2">
              <span className="text-sm font-semibold text-white">
                إحصائياتنا
              </span>
            </div>
          </div>
        </div>

        {/* First Grid of Stats */}
        <div className="container mx-auto px-4">
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boxData.slice(0, 8).map((box, index) => (
              <Box
                key={index}
                Icon={box.Icon}
                unit={box.unit}
                value={box.value}
                title={box.title}
                description={box.description}
              />
            ))}
          </div>
        </div>

        <TitleDesc
          Title="احصائيات انجازات حققتها عمال مصر"
          description="خلال 15 عام عمل داخل المناطق الصناعية"
        />

        {/* Enhanced Floating Image Section */}
        <div className="relative py-16">
          <div className="absolute inset-0 mx-4 rounded-3xl bg-gradient-to-r from-green-600/20 to-green-800/20"></div>
          <div className="relative z-10">
            <FloatingImage
              src="./ol7a-oval.png"
              alt="عمال مصر"
              width="w-100"
              height="h-100"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 left-8 h-4 w-4 animate-pulse rounded-full bg-green-400"></div>
          <div className="absolute right-12 bottom-8 h-6 w-6 animate-pulse rounded-full bg-green-300 delay-1000"></div>
          <div className="absolute top-1/2 right-8 h-3 w-3 animate-pulse rounded-full bg-green-500 delay-500"></div>
        </div>

        <TitleDesc
          Title="نحن نصنع التاريخ .. نحمل مستقبل افضل للصناعه في مصر"
          description="م/احمد السيد"
          subtitle="مؤسس عمال مصر"
        />

        {/* Second Grid of Stats - Centered with enhanced styling */}
        <div className="container mx-auto px-4 pb-8">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-green-600/20 blur-xl"></div>
              <div className="relative grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                {boxData.slice(8, 10).map((box, index) => (
                  <Box
                    key={index + 8}
                    Icon={box.Icon}
                    unit={box.unit}
                    value={box.value}
                    title={box.title}
                    description={box.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FlipBox Sections (dynamic from constants) */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="gradient-text mb-4 text-3xl font-bold">
              خدماتنا ومشاريعنا
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              اكتشف مجموعة واسعة من الخدمات والمشاريع التي نقدمها
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {flipBoxSections.map((section, i) => (
              <div key={i} className="mb-10">
                <FlipBox
                  imageSource={section.imageSource}
                  title={section.title}
                  subtitle={section.subtitle}
                >
                  <ul className="space-y-3 text-center">
                    {section.content.map((c, k) => (
                      <li key={k} className="text-sm leading-relaxed">
                        {c}
                      </li>
                    ))}
                  </ul>
                </FlipBox>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Wave Divider */}
      <WaveDivider color="#ffffff" />

      {/* ✅ Folded Background */}
      <FoldedBackground
        title={"اراء كبار المسئولين عن منظومه عمال مصر الاقتصاديه"}
        description={
          "فيديو يوضح اراء كبار المسئوليه والعديد من رواد الاعمال والمستثمرين بمختلف انحاء العالم في منظومه عمال مصر الاقتصاديه "
        }
      />

      {/* ✅ Wave Divider */}
      <WaveDivider color="#000000" />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
/* eslint-enable*/
