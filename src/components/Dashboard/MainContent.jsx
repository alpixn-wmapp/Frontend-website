import { useState } from "react";
import { rowsData } from "../../data/dashboard";

const MainContent = () => {
  const [visibleRows, setVisibleRows] = useState(2); // show first 2 rows initially

  const handleSeeMore = () => {
    setVisibleRows(rowsData.length); // show all rows
  };
  return (
    <div className="bg-gradient-to-br from-[#000] via-[#0e213a] to-[#000000] overflow-y-auto hide-scrollbar h-screen pt-[80px]">
      <div className=" text-center mx-auto flex flex-col gap-1 justify-center items-center py-[7%] text-white">
        <div className="h-[80px] w-[80px] ">
          <img src="/images/logo2.png" alt="icon" className="object-cover" />
        </div>
        <p className="text-[2.5rem] font-[600] text-center">
          Welcome To Your AI Workspace
        </p>
        <p className="w-[55%] text-lg">
          Manage and explore your Chatbot Projects. Pick up where you left off
          or dive into what our Platform offers
        </p>
      </div>

      {/* Mapped Rows Section */}
      <div className="text-white px-[6%] py-[20px] flex flex-col gap-12 items-start">
        <div className="mx-auto flex flex-col gap-12 ">
          {rowsData.slice(0, visibleRows).map((row, index) => (
            <div key={index} className="flex flex-col gap-6">
              {/* Row Heading */}
              <div>
                <p className="text-xl font-[600]">{row.heading}</p>
                <p className="text-white/60">{row.subheading}</p>
              </div>

              {/* Cards */}
              <div className="flex flex-wrap gap-6">
                {row.cards.map((card) => (
                  <div
                    key={card.id}
                    className="h-[375px] w-[300px] p-[1px] bg-gradient-to-b from-blue-500/50 to-white/50 rounded-2xl"
                  >
                    <div className="flex flex-col justify-between gap-8 h-full w-full bg-[linear-gradient(to_bottom_left,_#231f0c,_#061927,_#231f0c)] rounded-2xl p-4">
                      <div>
                        <div className="h-[150px] w-full">
                          <img
                            src={card.image}
                            alt="project"
                            className="object-center object-cover h-full w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <p className="font-semibold">{card.title}</p>
                          <p className="text-sm text-white/80">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs mb-2 text-white/60">
                          Last updated {card.lastUpdated}
                        </p>
                        <button
                          className={`${
                            index === 1
                              ? "btn-animated-gradient text-white"
                              : "bg-white text-black"
                          } text-[.9rem] w-full py-2 rounded-md`}
                        >
                          {card.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {visibleRows < rowsData.length && (
          <div className="mx-auto">
            <button
              onClick={handleSeeMore}
              className="bg-transparent border-2 border-white/70 px-6 py-2 text-white rounded-md"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
