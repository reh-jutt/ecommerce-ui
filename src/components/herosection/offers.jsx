const offers = [
  { name: "Smart watches", discount: "-25%", img: "⌚" },
  { name: "Laptops", discount: "-15%", img: "💻" },
  { name: "GoPro cameras", discount: "-40%", img: "📷" },
  { name: "Headphones", discount: "-25%", img: "🎧" },
  { name: "Canon cameras", discount: "-25%", img: "📱" },
];

const Offers = () => {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-1">Deals and offers</h2>
      <p className="text-sm text-gray-500 mb-4">Hygiene equipments</p>

      <div className="grid grid-cols-5 gap-4">
        {offers.map((offer, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl mb-2">{offer.img}</div>
            <p className="text-sm">{offer.name}</p>
            <span className="text-red-500 text-xs font-medium">{offer.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
