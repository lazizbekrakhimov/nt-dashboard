import { TeacherType } from "@/@types"
import Link from "next/link"

const TeacherCard = ({ item }: { item: TeacherType }) => {
  return (
    <Link href={`/teachers/${item.id}`} className="group border border-transparent rounded-2xl p-6 shadow-sm transition duration-300 bg-gray-50 hover:bg-gray-100 ease-out hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">#ID: {item.id}</span>
        <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
          Tajriba: {item.experience} yillik
        </span>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black">
        {item.firstname}{" "}
        <span className="font-light text-gray-600">{item.lastname}</span>
      </h2>
      <p className="text-sm text-gray-600 mt-2 flex justify-between">
        {item.email}
        <span>Batafsil ⭢</span>
      </p>
    </Link>
  )
}

export default TeacherCard
