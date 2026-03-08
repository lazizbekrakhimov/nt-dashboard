import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          Najot Ta'lim Hisobot
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          O'qituvchilar, talabalar va qarzdor talabalarni boshqarish uchun
          yaratilgan oddiy va zamonaviy tizim. Barcha ma'lumotlarni bir joyda
          ko'ring va boshqaring.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link href="/teachers" className="select-none px-6 py-3 border-2 border-black rounded-4xl bg-black text-white hover:bg-white hover:text-black transition duration-300">
            O'qituvchilar
          </Link>
          <Link href="/students" className="select-none px-6 py-3 border-2 border-black rounded-4xl bg-black text-white hover:bg-white hover:text-black transition duration-300">
            Talabalar
          </Link>
          <Link href="/debt-students" className="select-none px-6 py-3 border-2 border-black rounded-4xl bg-black text-white hover:bg-white hover:text-black transition duration-300" >
            Qarzdor Talabalar
          </Link>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="border-transparent bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition duration-300 ease-out hover:-translate-y-1">
          <h3 className="font-semibold text-xl mb-2">O'qituvchilar</h3>
          <p className="text-gray-600 text-sm">
            Asosiy va yordamchi o'qituvchilar haqida ma'lumotlarni ko'ring.
          </p>
        </div>
        <div className="border-transparent bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition duration-300 ease-out hover:-translate-y-1">
          <h3 className="font-semibold text-xl mb-2">Talabalar</h3>
          <p className="text-gray-600 text-sm">
            Barcha talabalar ro'yxatini va ularning sahifalarini ko'rish mumkin.
          </p>
        </div>
        <div className="border-transparent bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition duration-300 ease-out hover:-translate-y-1">
          <h3 className="font-semibold text-xl mb-2">Qarzdorlik</h3>
          <p className="text-gray-600 text-sm">
            Qarzdor talabalarni kuzatish va boshqarish uchun maxsus sahifa.
          </p>
        </div>
      </div>
    </main>
  );
}