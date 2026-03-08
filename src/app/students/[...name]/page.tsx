import { students } from "@/data/students"
import { StudentType } from "@/@types"
import Link from "next/link"

const StudentSinglePage = async ({ params }: { params: { name: string[] } }) => {
  const { name } = await params
  const slug = name[0]
  const id = Number(slug.split("-").at(-1))

  const student: StudentType | undefined = students.find((s) => s.id === id)

  return (
    <div className="flex justify-center m-25">
      <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 w-full max-w-2xl p-10 duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 select-none rounded-full bg-linear-to-tr from-black to-gray-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            {student?.firstname[0]}{student?.lastname[0]}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {student?.firstname}{" "}
              <span className="font-light text-gray-600">{student?.lastname}</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">#ID: {student?.id}</p>
            <span className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full mt-2 inline-block">
              {student?.group} guruh
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="font-semibold">Yoshi:</p>
            <p>{student?.age}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{student?.email}</p>
          </div>
          <div>
            <p className="font-semibold">Telefon:</p>
            <p>{student?.phone}</p>
          </div>
          <div>
            <p className="font-semibold">Qarzi:</p>
            <p className={student?.debt && student.debt > 0 ? "text-red-500 font-semibold" : "text-green-600"}>
              {student?.debt && student.debt > 0 ? `${student.debt.toLocaleString()} so'm` : "Qarzsiz ✓"}
            </p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Manzil:</p>
            <p>{student?.address}</p>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <Link href="/students" className="select-none px-6 py-3 border-2 border-black rounded-4xl bg-black text-white hover:bg-white hover:text-black transition duration-300" >
            ← Ro'yxatga qaytish
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StudentSinglePage