import Image from "next/image";

export default function Header() {
  return (
    <header
      className="relative flex flex-col md:flex-row items-center justify-between px-6 pt-10 pb-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg2.png')" }}
    >
      {/* Lapisan blur */}
      <div className="absolute inset-0 backdrop-blur z-0"></div>

      {/* Konten utama */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-lg">
          Selamat Datang di
        </h1>
        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Laman Sanpio 62
        </h2>
        <p className="text-white mb-6 text-ms drop-shadow-lg">
        Alumni Seminari Pius XII Kisol 2017-2023<br /> Anak Anak Si Bangau Putih
        </p>
      </div>

      <Image
        src="/images/p.leo2.svg"
        alt="Hero"
        width={500}
        height={500}
        priority
        className="relative z-10 w-full md:w-1/2 mt-0"
      />
    </header>
  );
}
