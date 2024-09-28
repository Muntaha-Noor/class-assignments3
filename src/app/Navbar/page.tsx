const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4"> 
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold"> My Navbar</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-500 font-semibold">Home</a>
                    </li>
                        
                    <li>
                        <a href="/About" className="text-white hover:text-gray-500 font-semibold">About</a>
                    </li>
                        
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-500 font-semibold">Contact</a>
                    </li>
                </ul>
        </div>
    </nav>
  )
}

export default Navbar
