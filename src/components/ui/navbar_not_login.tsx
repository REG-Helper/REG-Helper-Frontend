import { LogIn } from "lucide-react"

export default function Navbar_Not_Login() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#DDE1E6] border-b border-gray-300">
        <div className="flex items-center space-x-8">
          <div className="text-lg font-bold pl-8">LOGO</div>
          <nav className="flex space-x-6">
            <a href="#" className="text-[#21272A] hover:text-gray-900">ค้นหาวิชาเรียน</a>
            <a href="#" className="text-[#21272A] hover:text-gray-900">แนะนำวิชาเรียน</a>
          </nav>
        </div>
        <a href="#" className="flex items-center text-[#001D6C] hover:text-blue-800 pr-4">
        <LogIn className="w-5 h-5 mr-1" />
        <span>เข้าสู่ระบบ</span>
      </a>
    </header>
  )
}