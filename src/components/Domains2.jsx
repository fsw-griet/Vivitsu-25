import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const domains = [
  {
    id: 1,
    title: "Open Innovation",
    description:
      "Build groundbreaking solutions across any domain. Let your creativity run wild and innovate without boundaries.",
    gif: "https://i.gifer.com/74pZ.gif",
    backText: "Open Innovation text -1",
  },
  {
    id: 2,
    title: "Health Care",
    description:
      "Create innovative solutions for healthcare challenges. From patient care to medical technology, make a difference in healthcare.",
    gif: "https://i.gifer.com/7BZb.gif",
    backText: "Healthcare text -1",
  },
  {
    id: 3,
    title: "Smart Education",
    description:
      "Revolutionize learning through technology. Develop solutions that make education more accessible, engaging, and effective.",
    gif: "https://i.gifer.com/Ybin.gif",
    backText: "Smart Education text -1",
  },
  {
    id: 4,
    title: "Heritage and Culture Preservation",
    description:
      "Develop solutions that protect and promote cultural heritage, ensuring that traditions and history are preserved for future generations.",
    gif: "https://i.gifer.com/HAFq.gif",
    backText: "AI-powered tool to digitally restore and preserve ancient manuscripts.",
  },
  {
    id: 5,
    title: "Legal Awareness and Civic Governance",
    description:
      "Empower communities with knowledge of their legal rights and responsibilities while enhancing civic engagement and governance.",
    gif: "https://i.gifer.com/Lrbo.gif",
    backText: "Legal Awareness text -1",
  },
];

const DomainsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const nextDomain = () => {
    setCurrentIndex((prev) => (prev + 1) % domains.length);
    setFlippedIndex(null);
  };

  const prevDomain = () => {
    setCurrentIndex((prev) => (prev - 1 + domains.length) % domains.length);
    setFlippedIndex(null);
  };

  const getPosition = (index) => {
    const diff = (index - currentIndex + domains.length) % domains.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -4) return "right";
    if (diff === -1 || diff === 4) return "left";
    return "hidden";
  };

  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {domains.map((domain, index) => {
          const position = getPosition(index);
          const isCenter = position === "center";
          const isFlipped = isCenter && flippedIndex === index;

          return (
            <div
              key={domain.id}
              className={`absolute w-full max-w-lg transition-all duration-500 ease-in-out ${
                position === "center"
                  ? "opacity-100 transform translate-x-0 scale-100 z-20"
                  : position === "right"
                  ? "opacity-50 transform translate-x-[50%] scale-90 z-10"
                  : position === "left"
                  ? "opacity-50 transform -translate-x-[50%] scale-90 z-10"
                  : "opacity-0 transform scale-75 z-0"
              }`}
              onClick={() => isCenter && setFlippedIndex(isFlipped ? null : index)}
            >
              <div
                className={`relative w-full h-[300px] rounded-xl border border-blue-800/30 transition-transform duration-500 transform ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/30 backdrop-blur-lg p-8 rounded-xl text-center"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={domain.gif}
                    alt={domain.title}
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_0_10px_#00FFFF]">
                    {domain.title}
                  </h3>
                  <p className="text-gray-300">{domain.description}</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900 text-white rounded-xl p-4 text-lg font-bold rotate-y-180"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-xl">{domain.backText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevDomain}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-cyan-500/30 hover:bg-cyan-500/60 p-3 rounded-full transition-all drop-shadow-[0_0_10px_#00FFFF]"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextDomain}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-cyan-500/30 hover:bg-cyan-500/60 p-3 rounded-full transition-all drop-shadow-[0_0_10px_#00FFFF]"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default DomainsCarousel;
