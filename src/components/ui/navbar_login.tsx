import { UserCircle } from "lucide-react"

export default function Navbar_Login() {
    return (
      <header className="flex items-center justify-between px-4 py-4 bg-gray-200 border-b border-gray-300">
        <div className="flex items-center space-x-8">
          <div className="text-lg font-bold pl-8">LOGO</div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">ค้นหาวิชาเรียน</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">แนะนำวิชาเรียน</a>
          </nav>
        </div>
        <a href="#" className="flex items-center text-blue-700 hover:text-blue-800 pr-4">
          <UserCircle className="w-5 h-5 mr-1" />
          <span>My Account</span>
        </a>
      </header>
    )
  }