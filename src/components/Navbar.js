import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="h-12 w-full bg-black text-white">
      <ul className="realtive  gap-2 flex p-2">
        <li className="rounded-md hover:text-green-600 bg-gray-700  p-1 inline-flex"> <Link to="/">Home</Link></li>
        <li className="rounded-md hover:text-green-600 bg-gray-700  p-1 inline-flex"> <Link to="/contact">Contact</Link></li>
        <li className="rounded-md hover:text-green-600 bg-gray-700  p-1 inline-flex"> <Link to="/about">About</Link></li>
        <li className="rounded-md hover:text-green-600 bg-gray-700  p-1 inline-flex"> <Link to="/create">New Blog</Link></li>
      </ul>
    </nav>
  );
}
