"use client"
import { students } from "@/data/students"
import { useAppDispatch, useAppSelector } from "@/hook"
import { addToDebt } from "@/store/debtSlice"
import Link from "next/link"

const Students = () => {
  const dispatch = useAppDispatch()
  const debtStudents = useAppSelector((state) => state.debt.debtStudents)

  return (
    <div className="min-h-screen bg-white text-black p-10 pt-20">
      <h1 className="text-4xl font-bold text-center mb-7 tracking-wide pb-6">
        Talabalar Ro'yxati
      </h1>
      <div className="grid grid-cols-3 gap-8 px-15">
        {students.map((item) => {
          const isInDebt = debtStudents.some((d) => d.id === item.id)
          return (
            <div key={item.id} className="group border border-transparent rounded-2xl p-6 shadow-sm transition duration-300 bg-gray-50 hover:bg-gray-100 ease-out hover:-translate-y-1 hover:shadow-2xl" >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">#ID: {item.id}</span>
                <span className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full">
                  {item.group}
                </span>
              </div>
              <Link href={`/students/${item.firstname}-${item.lastname}-${item.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black cursor-pointer hover:underline underline-offset-2">
                  {item.firstname}{" "}
                  <span className="font-light text-gray-600">{item.lastname}</span>
                </h2>
              </Link>
              <p className="text-sm text-gray-600 mt-1">{item.email}</p>
              {item.debt > 0 && (
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-red-500 font-medium">
                    Qarzi: {item.debt.toLocaleString()} so'm
                  </span>
                  <button onClick={() => dispatch(addToDebt(item))} disabled={isInDebt} className={`text-xs px-3 py-1 rounded-full border transition duration-200 ${ isInDebt ? "border-gray-300 text-gray-400 cursor-not-allowed" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer" }`} >
                    {isInDebt ? "Qo'shilgan ✓" : "Qarzdorga qo'shish"}
                  </button>
                </div>
              )}
              {item.debt === 0 && (
                <p className="text-xs text-green-600 font-medium mt-3">✓ Qarzsiz</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Students
