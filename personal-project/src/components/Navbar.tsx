export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between mt-12 px-5 w-full mx-auto items-center">
      <div className="flex flex-row gap-x-5 font-bold items-center relative">
        <p className="border-4 rounded-md border-black p-2 text-4xl">SP</p>
        <ul className="flex flex-row justify-evenly w-1/4 gap-x-5">
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-3 after:bg-[#635FC7] after:-z-10 text-2xl hover:after:h-full after:transition-all px-1">
            Projects
          </li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-3 after:bg-[#635FC7] after:-z-10 text-2xl hover:after:h-full after:transition-all px-1">
            Extras
          </li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-3 after:bg-[#635FC7] after:-z-10 text-2xl hover:after:h-full after:transition-all px-1">
            Media
          </li>
        </ul>
      </div>
      <p className="w-fit text-end border-black border-4 rounded-md px-2 py-2 font-bold text-2xl hover:bg-gray-900 transition-all hover:text-white cursor-pointer">
        Contact Me
      </p>
    </nav>
  );
}
