"use client"
import { useAppDispatch, useAppSelector } from "@/hook"
import { removeToDebt } from "@/store/debtSlice"
import Link from "next/link"

const DebtStudents = () => {
  const dispatch = useAppDispatch()
  const debtStudents = useAppSelector((state) => state.debt.debtStudents)

  return (
    <div className="min-h-screen bg-white text-black p-10 pt-20">
      <h1 className="text-4xl font-bold text-center mb-2 tracking-wide">Qarzdor Talabalar</h1>
      <p className="text-center text-gray-500 text-sm mb-8">Jami: {debtStudents.length} nafar qarzdor talaba</p>
      {debtStudents.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 gap-4">
          <p className="text-6xl mb-2">🎉</p>
          <p className="text-xl font-semibold text-gray-600">Hech qanday qarzdor talaba yo'q</p>
          <Link href="/students" className="mt-4 px-6 py-3 border-2 border-black rounded-4xl bg-black text-white hover:bg-white hover:text-black transition duration-300">
            Talabalar ro'yxatiga o'tish
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8 px-15">
          {debtStudents.map((item) => (
            <div key={item.id} className="border border-transparent rounded-2xl p-6 shadow-sm transition duration-300 bg-red-50 ease-out hover:-translate-y-1 hover:shadow-2xl" >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">#ID: {item.id}</span>
                <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">
                  {item.group}
                </span>
              </div>
              <Link href={`/students/${item.firstname}-${item.lastname}-${item.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:underline underline-offset-2 cursor-pointer">
                  {item.firstname}{" "}
                  <span className="font-light text-gray-600">{item.lastname}</span>
                </h2>
              </Link>
              <p className="text-sm text-gray-600 mt-1">{item.email}</p>
              <div className="flex mt-3 items-center justify-between">
                <p className="text-sm text-red-600 font-semibold mt-2">
                Qarzi: {item.debt.toLocaleString()} so'm
              </p>
              <button onClick={() => dispatch(removeToDebt(item.id))} className="px-3 py-1.5 mt-2 border border-red-500 rounded-full bg-red-500 text-white hover:bg-red-50 hover:text-red-500 transition duration-300 text-xs cursor-pointer" >
                Ro'yxatdan chiqarish ✕
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DebtStudents
