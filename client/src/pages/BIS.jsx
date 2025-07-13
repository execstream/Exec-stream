import React, { useState } from "react";

const updates = [
  {
    id: 1,
    title: "Recent Updates on the Steel and Steel Products (Quality Control) Order, 2024",
    date: "July 12, 2025",
    pdf: "/Steel.pdf",
  },
   {
    id: 2,
    title: "Recent Updates on the Machinery and Electrical Equipment Safety (Omnibus Technical Regulation) Order, 2024",
   date: "July 12, 2025",
    pdf: "/Machinery.pdf",
  },
];

const BIS = () => {
  const [selected, setSelected] = useState(updates[0]);

  return (
    <div className="mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
     
      <div className="space-y-4 order-2 lg:order-1">
        <h2 className="text-xl font-semibold mb-2">Weekly Digest PDFs</h2>
        {updates.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className={`p-4 rounded-lg border shadow-sm cursor-pointer transition hover:shadow-md ${
              selected.id === item.id ? "bg-blue-50 border-blue-500" : "bg-white"
            }`}
          >
             <h3 className="font-semibold text-sm">{item.title}</h3>
<p className="text-sm flex justify-end">{item.date}</p>
          </div>
        ))}
      </div>

     
   <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
  <div className="bg-white rounded-lg border border-gray-200 shadow relative overflow-hidden">
    
 
    <div className="p-4 border-b flex justify-between items-start ">
      <div className="w-3/4">
        <h1 className="text-2xl font-bold text-[#789BFF]">{selected.title}</h1>
        <p className="text-sm text-gray-600">{selected.date}</p>
      </div>
      
      {/* Download Button */}
      <a 
        href={selected.pdf}
        download
        className="text-white w-36 bg-[#789BFF] hover:bg-white  hover:text-[#789BFF] px-4 py-2 rounded-full text-sm transition"
      >
        Download PDF
      </a>
    </div>

   
    <div
      className="bg-[#f6f8ff] h-[70vh] p-4 md:p-6 shadow-inner border-t border-gray-100"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="w-full h-full border border-gray-300 rounded-md overflow-hidden shadow-lg">
        <iframe
          src={`${selected.pdf}#toolbar=0`}
          title={selected.title}
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BIS;
