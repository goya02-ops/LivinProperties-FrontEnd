import { Link } from 'react-router-dom'

export default function OptionCard({ to, icon: Icon, title }) {
  return (
    <Link
      to={to}
      className="
        block p-6 bg-white border border-gray-200 rounded-lg 
        shadow hover:shadow-md transition 
        flex items-center space-x-4
      "
    >
      <Icon className="h-8 w-8 text-indigo-600" />
      <span className="text-lg font-semibold text-gray-800">{title}</span>
    </Link>
  )
}
