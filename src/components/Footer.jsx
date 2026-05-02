import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center space-y-2">
        <p className="font-semibold">Contact: support@suncart.com</p>

        <div className="flex justify-center gap-4">
          <a href="#" className="flex justify-center items-center" > <FaFacebookF/>Facebook</a>
          <a href="#" className="flex justify-center items-center"> <FaSquareInstagram />Instagram</a>
          <a href="#" className="flex justify-center items-center" > <FaTwitter />Twitter</a>
        </div>

        <p>Privacy Policy</p>
      </div>
    </footer>
  );
}