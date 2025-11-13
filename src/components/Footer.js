// Footer.js
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-amber-50 py-6 text-center border-t ">
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://www.instagram.com/serabinotosumanny.lidia?igsh=MTE1a2c1bmYwMTBuYw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-600 transition-transform transform hover:scale-110"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=6287783847886&text=Halo%2C+saya+tertarik+dengan+produk+Anda&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-600 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
      <p className="text-black text-lg text-bold">
        Serabi Notosuman
      </p>
      <p className="text-gray-600 text-sm mb-2">
        Menjaga keautentikan rasa serabi tradisional Solo sejak 1923 dengan cita rasa yang tak terlupakan.
      </p>
      <p className="text-gray-600 text-sm">
        © 2025 <span className="font-semibold text-amber-700">Teknik Informatika Solotech University</span>. All rights reserved.
      </p>
    </footer>
  );
}
