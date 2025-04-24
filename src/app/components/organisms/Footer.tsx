import {
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#335770] text-[#d2e7f5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo dan Sosial Media */}
        <div>
        <div className="text-2xl font-bold text-white">
          Sanpio<span className="text-white">62</span>
        </div>
          <p className="text-sm mb-6 text-white">
          Alumni Seminari Pius XII Kisol 2017-2023<br /> Anak Anak Si Bangau Putih
          </p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-0">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <p className="font-bold">Telepon Admin</p>
              <a href="tel:+62 813-9585-2459" className="hover:text-white">
              081395852459
              </a>
              <p className="font-bold">Instagram</p>
              <a href="https://www.instagram.com/sanpio2017_/" className="hover:text-white">
              @sanpio2017_
            </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-0">Alamat</h3>
          <p className="text-sm">
          Kisol, Kel, Tanah Rata, Kec. Kota Komba, Kabupaten Manggarai Timur, Nusa Tenggara Timur
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        Support by @sanpio2017_
      </div>
    </footer>
  );
}