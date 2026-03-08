import { teachers } from "@/data/teachers"
import TeacherCard from "@/components/TeacherCard"

const MainTeachers = () => {
  const mainTeachers = teachers.filter((t) => t.type === "main")

  return (
    <div className="min-h-screen bg-white text-black p-10 pt-6">
      <h1 className="text-4xl font-bold text-center mb-7 tracking-wide pb-6">
        Asosiy O'qituvchilar
      </h1>
      <div className="grid grid-cols-3 gap-10 px-15">
        {mainTeachers.map((item) => (
          <TeacherCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default MainTeachers
