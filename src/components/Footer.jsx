import { Facebook, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black py-12 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="fade-in-up text-center">
            <h3 className="gradient-text mb-2 text-2xl font-bold">عمال مصر</h3>
            <p className="text-sm text-gray-300">
              نحن نصنع التاريخ .. نحمل مستقبل افضل للصناعه في مصر
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/ahmed.elsyed.92754"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift hover-glow flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-700"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>

            <a
              href="https://wa.me/01060764606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift hover-glow flex h-12 w-12 items-center justify-center rounded-full bg-green-600 transition-all duration-300 hover:scale-110 hover:bg-green-700"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 عمال مصر. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
