const Sidebar = () => {
  const categories = [
    "Automobiles", "Clothes and wear", "Home interiors", "Computer and tech",
    "Tools, equipments", "Sports and outdoor", "Animal and pets", "Machinery tools", "More category"
  ];

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow">
      {categories.map((cat, i) => (
        <div key={i} className={`p-2 text-sm ${i === 0 ? "bg-blue-100 font-semibold rounded" : ""}`}>
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
