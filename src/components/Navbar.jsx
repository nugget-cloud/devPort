export default function Navbar() {
    return (
      <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-zinc-800 bg-black text-white">
        <div className="text-2xl font-bold text-red-300">Nugget-Cloud</div>
        <ul className="flex space-x-6 text-sm text-gray-400">
          <li className="hover:text-red-200 cursor-pointer">Home</li>
          <li className="hover:text-red-200 cursor-pointer">Projects</li>
          <li className="hover:text-red-200 cursor-pointer">About</li>
          <li className="hover:text-red-200 cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  }
  