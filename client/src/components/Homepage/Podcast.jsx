import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribeNewsletter } from "../../redux/slices/newsletterSlice";
import { useNavigate } from "react-router-dom";
import SubscribeModal from "../SubscribeModal"; 

const Podcast = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subscriber } = useSelector((state) => state.newsletter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = true; 

  const podcastEpisodes = [
    {
      id: 1,
      image: "/Pod1.svg",
      tag: "Finance",
      title: "When the Board Wants Growth, But the Balance Sheet Disagrees \n (Coming Soon)",
      episode: "Episode 1",
    },
    {
      id: 2,
      image: "/Pod2.svg",
      tag: "Legal",
      title: "The Clause We Forgot Almost Sank the Deal \n (Coming Soon)",
      episode: "Episode 1",
    },
    {
      id: 3,
      image: "/Pod3.svg",
      
      tag: "HR",
      title: "They Were Top Performers. And Still Burned Out \n (Coming Soon)",
      episode: "Episode 1",
    },
  ];

  const handleSubscribe = async (email) => {
    if (!isLoggedIn) {
      navigate("/register");
      return;
    }

    try {
      const resultAction = await dispatch(subscribeNewsletter(email));
      if (subscribeNewsletter.fulfilled.match(resultAction)) {
        alert("You are now subscribed to our newsletter!");
        setIsModalOpen(false);
      } else {
        throw new Error(resultAction.payload || "Subscription failed.");
      }
    } catch (err) {
      alert(err.message || "Failed to subscribe.");
    }
  };

  return (
    <div className="w-full bg-[#DFE6FF] pt-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Podcast</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {podcastEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-lg p-4 shadow-sm flex flex-col border border-gray-200"
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <svg
                      className="h-6 w-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {episode.tag && (
               
                   <span className="text-blue-500">{episode.tag}</span>
               
              )}
              {episode.host && (
                <span className="text-xs text-gray-600 font-medium mb-1">
                  Hosted by <span className="text-blue-600">{episode.host}</span>
                </span>
              )}

              <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-4 whitespace-pre-line">
                {episode.title}
              </h3>

              <div className="flex justify-between items-center mt-auto">
                <button className="flex items-center text-black text-sm font-medium hover:underline">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Episode
                </button>
                <span className="text-pink-600 text-sm font-bold">{episode.episode}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <button className="border border-[#789BFF] bg-white text-[#789BFF] px-6 py-2 rounded-full hover:bg-[#789BFF] hover:text-white transition-colors font-semibold text-sm">
            SEE MORE
          </button>
        </div>
      </div>

      {!subscriber && (
        <div className="bg-[#050545] py-10 px-4 md:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-1 text-[#789BFF]">Sign up for our newsletters</h3>
              <p className="text-sm text-[#FFFFFF]">The best of Business news, in your inbox.</p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#789BFF] hover:bg-white hover:text-[#789BFF] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubscribe}
      />
    </div>
  );
};

export default Podcast;
