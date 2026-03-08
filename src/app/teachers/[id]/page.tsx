import { TeacherType } from "@/@types"
import { teachers } from "@/data/teachers"
import Link from "next/link"

const SinglePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  const singleTeacher: TeacherType | undefined = teachers.find(
    (item: TeacherType) => item.id === Number(id)
  )

  return (
    <div className="flex justify-center mt-7">
      <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 w-full max-w-2xl p-10 duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 select-none rounded-full bg-linear-to-tr from-black to-gray-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            {singleTeacher?.firstname[0]}{singleTeacher?.lastname[0]}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {singleTeacher?.firstname}{" "}
              <span className="font-light text-gray-600">{singleTeacher?.lastname}</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">#ID: {singleTeacher?.id}</p>
            <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block font-medium ${singleTeacher?.type === "main" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}>
              {singleTeacher?.type === "main" ? "Asosiy o'qituvchi" : "Yordamchi o'qituvchi"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="font-semibold">Tajriba:</p>
            <p>{singleTeacher?.experience} yillik</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{singleTeacher?.email}</p>
          </div>
          <div>
            <p className="font-semibold">Tug'ilgan yili:</p>
            <p>{singleTeacher?.birthYear}</p>
          </div>
          <div>
            <p className="font-semibold">Telefon raqami:</p>
            <p>{singleTeacher?.phone}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Manzili:</p>
            <p>{singleTeacher?.address}</p>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Link href={`/teachers/${singleTeacher?.type}`} className="select-none px-6 py-3 border-2 border-black rounded-4xl bg-black text-white hover:bg-white hover:text-black transition duration-300" >
            ← Ro'yxatga qaytish
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
