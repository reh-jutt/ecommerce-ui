import bannerbg from '/src/assets/bannerbg.png'

const Hero = () => {
  return (
    <div className="flex py-6 gap-4">
      <div   style={{ backgroundImage: `url(${bannerbg})` }} className="flex-1 text-left p-6">
        <h2 className="text-xl font-medium">Latest trending</h2>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Electronic items</h1>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100">Learn more</button>
      </div>
      <div className="w-56 space-y-2">
        <div className="bg-[#E3F0FF] p-3 rounded text-sm">
          <p className="font-medium">Hi, user</p>
          <p>let's get started</p>
          <button className="bg-blue-500 text-white w-full mt-2 py-1 rounded">Join now</button>
          <button className="bg-white border w-full mt-2 py-1 rounded">Log in</button>
        </div>
        <div className="bg-orange-400 text-white p-3 rounded text-sm">Get US $10 off with a new supplier</div>
        <div className="bg-teal-400 text-white p-3 rounded text-sm">Send quotes with supplier preferences</div>
      </div>
    </div>
  );
};

export default Hero;
