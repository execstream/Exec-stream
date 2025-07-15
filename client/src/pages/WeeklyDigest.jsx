import { useNavigate } from "react-router-dom";

const playlists = [
  {
    id: 1,
    title: "BIS & QCOs Compliance Snapshot",
    description: "Latest developments around BIS certifications and QCOS alerts.",
    thumbnail: "BIS QCO .png",
    content:
      "This week’s BIS & QCOS digest includes updates on product recalls, mandatory certification timelines, and evolving labeling requirements. Stay ahead of compliance mandates for electronics and industrial goods.",
    path: "/weekly/bis",
  },
  {
    id: 2,
    title: "Customs & Trade Pulse",
    description: "Import-export updates, tariff changes, and trade facilitation highlights.",
    thumbnail: "/Customs.png",
    content:
      "India’s latest customs circulars introduce simplified documentation for exporters. The weekly bulletin also reviews key trade partnerships and dispute resolution cases at WTO.",
    path: "/weekly/customs",
  },
  {
    id: 3,
    title: "Fintech Brief",
    description: "Regulatory signals around digital lending, wallets, and UPI.",
    thumbnail: "/Fintech Friday.png",
    content:
      "Fintechs are under scrutiny for KYC compliance and data sharing. RBI’s working group has recommended stricter audits for non-bank prepaid instrument providers and digital lenders.",
    path: "/weekly/fintech",
  },
];

const WeeklyDigest = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Weekly Digest</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {playlists.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering card onClick
                  navigate(item.path);
                }}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                View Full Series →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyDigest;
