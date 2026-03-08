export interface TeacherType {
  id: number
  firstname: string
  lastname: string
  experience: number
  email: string
  birthYear: number
  address: string
  phone: string
  type: "main" | "support"
}

export interface StudentType {
  id: number
  firstname: string
  lastname: string
  age: number
  email: string
  phone: string
  group: string
  debt: number
  address: string
}
