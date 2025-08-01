const offers = [
  { name: "Smart watches", discount: "-25%", img: "⌚" },
  { name: "Laptops", discount: "-15%", img: "💻" },
  { name: "GoPro cameras", discount: "-40%", img: "📷" },
  { name: "Headphones", discount: "-25%", img: "🎧" },
  { name: "Canon cameras", discount: "-25%", img: "📱" },
];

const Offers = () => {
  return (
    <div className="w-[80%] flex mt-6 bg-white p-4 rounded-lg shadow"> 
      <div className="w-[25%] px-6 text-left border-r divide-gray-200">
        <h2 className="text-lg font-semibold mb-1">Deals and offers</h2>
        <p className="text-sm text-gray-500 mb-4">Hygiene equipments</p>
        <div className="grid grid-cols-4 gap-2 max-w-[260px]">
         {[
                 {v:"04", l:"Days"},
                 {v:"13", l:"Hour"},
                 {v:"34", l:"Min"},
                 {v:"56", l:"Sec"},
               ].map((b, i) => (
                  <div key={i} className="bg-gray-100 rounded-md px- py-2 text-center">
                   <div className="text-sm font-semibold text-gray-800 leading-none">{b.v}</div>
                   <div className="text-[10px] text-gray-500 leading-none mt-1">{b.l}</div>
                 </div>
               ))}
         </div>
      </div>
      <div className="w-[75%] grid grid-cols-5 divide-x divide-gray-200 gap-4">
        {offers.map((offer, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl mb-2">{offer.img}</div>
            <p className="text-sm">{offer.name}</p>
            <span className="text-red-500 text-xs font-medium">
              {offer.discount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;



// src/components/DealsSection.jsx
// NOTE: apni images /src/assets me rakh kar neeche import/update kar len

// const products = [
//   { name: "Smart watches", discount: "-25%", img: "/assets/watch.png" },
//   { name: "Laptops",       discount: "-15%", img: "/assets/laptop.png" },
//   { name: "GoPro cameras", discount: "-40%", img: "/assets/camera.png" },
//   { name: "Headphones",    discount: "-25%", img: "/assets/headphone.png" },
//   { name: "Canon cammeras",discount: "-25%", img: "/assets/phone.png" },
// ];

// export default function DealsSection() {
//   return (
//     <section className="w-[80%] mx-auto mt-6">
//       {/* outer frame (green) */}
//       <div className="bg-white border-2 border-green-500 rounded-lg shadow-sm overflow-hidden">

//         {/* grid: left info + 5 cards; divide-x adds vertical borders between items */}
//         <div className="grid grid-cols-6 divide-x divide-gray-200">

//           {/* LEFT: info panel */}
//           <div className="p-6 flex flex-col gap-4">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800">Deals and offers</h3>
//               <p className="text-sm text-gray-400">Hygiene equipments</p>
//             </div>

//             {/* countdown boxes */}
//             <div className="grid grid-cols-4 gap-2 max-w-[260px]">
//               {[
//                 {v:"04", l:"Days"},
//                 {v:"13", l:"Hour"},
//                 {v:"34", l:"Min"},
//                 {v:"56", l:"Sec"},
//               ].map((b, i) => (
//                 <div key={i} className="bg-gray-100 rounded-md px-3 py-2 text-center">
//                   <div className="text-sm font-semibold text-gray-800 leading-none">{b.v}</div>
//                   <div className="text-[10px] text-gray-500 leading-none mt-1">{b.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: product cards */}
//           {products.map((p, idx) => (
//             <div key={idx} className="p-6 flex flex-col items-center justify-between text-center">
//               <img
//                 src={p.img}
//                 alt={p.name}
//                 className="h-24 md:h-28 object-contain"
//               />
//               <p className="mt-4 text-sm text-gray-800">{p.name}</p>

//               <span className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold
//                                bg-rose-100 text-rose-600">
//                 {p.discount}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
