import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16 bg-orange-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="text-center">
          <h2 className="text-2xl font-bold">SunCart</h2>
          <p className="text-sm text-white/90 mt-2">
            Smart summer shopping, curated for you.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-medium">Contact: support@suncart.com</p>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-sm font-medium">
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FaSquareInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm text-white/90">
          <p>© 2026 SunCart. All rights reserved.</p>
          <p className="mt-1 cursor-pointer hover:underline">Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
}