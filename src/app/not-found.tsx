import Link from "next/link"

const NotFound = () => {
    return (
        <div className="bg-white text-black flex flex-col justify-center items-center h-screen gap-4 select-none">
            <div className="relative mb-4">
                <span className="text-[160px] font-black leading-none text-gray-100 select-none">404</span>
                <span className="absolute inset-0 flex items-center justify-center text-[80px] font-black text-black leading-none">404</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Sahifa topilmadi</h2>
            <p className="text-gray-400 text-sm mt-1 text-center max-w-xs">Siz qidirayotgan sahifa mavjud emas yoki o'chirib yuborilgan.</p>
            <Link href="/" className="mt-6 px-8 py-3 border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black transition duration-300 text-sm font-medium" >
                ← Bosh sahifaga qaytish
            </Link>
        </div>
    )
}

export default NotFound