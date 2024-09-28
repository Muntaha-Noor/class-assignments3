"use client"
import { useRouter } from "next/navigation"
import Link from "next/link";

export default function Home() {
  const route = useRouter()
  
    return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-6 p-6">
      <div className="text-center"> 
        <h1 className="font-4xl font-bold font-gray-800">Welcom to the Home page </h1>
      </div>
      
      {/* use link */}
    <div className="space-y-3"> 
    <Link href="/Navbar" className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ">Go to Navbar</Link><br/>

    <Link href="/About" className="block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition ">Go to About page.</Link><br/>

    <Link href="/contact" className="block px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">Go to Contact Page.</Link><br/>

    <Link href="/Footer" className="block px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Go to Footer page.</Link><br/>
    </div>
      
    {/* use navigation */}
    <button className="px-6 py-3 mt-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 shadow-lg transition-all" onClick={() =>route.push('/About')}>Go to About Page</button>
    </div>
    </>
  );
}
