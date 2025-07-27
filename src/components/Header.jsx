import logo from '../assets/logo-colored.png';
import profilevector from '../assets/Headers-vector-icons/profilevector.svg'
import messagesvector from '../assets/Headers-vector-icons/messagesvector.svg'
import myorder from '../assets/Headers-vector-icons/myorder.svg'
import cartvector from '../assets/Headers-vector-icons/cartvector.svg'
import bottom_arrow from '../assets/Headers-vector-icons/bottom_arrow.svg'

export default function Header() {
  return (
    <>
         <header className="w-[80%] mx-auto flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-2xl px-4 font-bold text-blue-600">
    <a href='#'><img src={logo} alt="Brand Logo" className="h-10" /></a>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-grow px-4 mx-4 px-6">
  <div className="flex gap-2 border-blue-600 border-2 rounded-md focus:ring-blue-400">
   {/* Search Input */}
    <input
      type="text"
      placeholder="Search products"
      className="flex-grow px-4 mx-0 py-2 rounded-md focus:outline-none"
    />
    {/* Category Dropdown */}
    <select className="px-4 py-2 bg-white focus:outline-none border-l border-blue-300">
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="fashion">Fashion</option>
      <option value="books">Books</option>
      <option value="beauty">Beauty</option>
    </select>
    {/* Search Button */}
    <button className="bg-blue-600 text-white px-6 py-2 rounded-tr rounded-br hover:bg-blue-700 transition">
      Search
    </button>
  </div>
</div>

      {/* Right: Icons */}
      <div className="flex cursor-pointer p-4 ">
        <div className="flex flex-col items-center text-gray-700 px-2 hover:text-blue-600">
  <img src={profilevector} alt="Profile" className="w-6 h-6" />
    <span className="text-sm ">Profile</span>
  </div>
   <div className="flex flex-col items-center text-gray-700 px-2 hover:text-blue-600">
  <img src={messagesvector} alt="Messages" className="w-6 h-6" />
    <span className="text-sm ">Messages</span>
  </div>
   <div className="flex flex-col items-center text-gray-700 px-2 hover:text-blue-600">
  <img src={myorder} alt="My Order" className="w-6 h-6" />
    <span className="text-sm ">My Order</span>
  </div>
   <div className="flex flex-col items-center text-gray-700 px-2 hover:text-blue-600">
  <img src={cartvector} alt="Cart" className="w-6 h-6" />
    <span className="text-sm ">Cart</span>
  </div>
      </div>
    </header>
     <div className="w-full h-px bg-gray-400"></div>

     {/* <div className='w-[80%] mx-auto flex justify-between items-center'>
     <div className='w-[70%] mx-auto'> 
      <img src={menu} alt="manu" className="w-6 h-6" />
     </div>
     <div className='w-[30%] mx-auto'> 
      
     </div>
     </div> */}

<div class="bg-white py-2 border-b">
  <div class="container mx-auto w-[80%] flex justify-between items-center text-sm">
    
    {/* <!-- Left Menu --> */}
    <div class="w-[65%] mx-l flex items-center space-x-6">
      <div class="flex items-center space-x-1 cursor-pointer">
        <span class="text-xl">&#9776;</span>
        <span class="font-medium">All category</span>
      </div>
      <span class="cursor-pointer">Hot offers</span>
      <span class="cursor-pointer">Gift boxes</span>
      <span class="cursor-pointer">Projects</span>
      <span class="cursor-pointer">Menu item</span>
      <div class="cursor-pointer flex items-center space-x-1">
        <span>Help</span>
        <a href='#'><img src={bottom_arrow} alt='bottom arrow' className='w-3 h-3'></img></a>
      </div>
    </div>

    {/* <!-- Right Menu --> */}
    <div class="w-[20%] flex items-center space-x-6">
      <div class="flex items-center space-x-1 cursor-pointer">
        <span>English, USD</span>
        <a href='#'><img src={bottom_arrow} alt='bottom arrow' className='w-3 h-3'></img></a>
      </div>
      <div class="flex items-center space-x-1 cursor-pointer">
        <span>Ship to</span>
        <img src="https://flagcdn.com/w40/de.png" alt="Germany Flag" class="w-5 h-3 object-cover rounded-sm"/>
        <a href='#'><img src={bottom_arrow} alt='bottom arrow' className='w-3 h-3'></img></a>   
      </div>
    </div>

  </div>
</div>


    </>
  );
}
