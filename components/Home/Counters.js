import React, { useEffect } from "react";

const Counters = () => {
  useEffect(() => {
    let interval = 2000;
    let displays = document.getElementsByClassName("numCount");
    Array.from(displays).forEach((display) => {
      let start = 0;
      let end = parseInt(display.getAttribute("data-val"));
      let duration = Math.floor(interval / end);
      let counter = setInterval(() => {
        start += 1;
        display.textContent = start;
        if (end == start) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);
  return (
    <section className="w-full flex flex-col lg:flex-row justify-evenly items-center">
      <div className="bg-white w-fit p-12 border-2 rounded-[30px] m-4">
        <div className="text-center text-2xl text-[crimson] font-bold">
          <span data-val="22" className="numCount"></span>+
        </div>
        <div className="font-semibold text-center text-lg text-gray-500">
          Services
        </div>
      </div>
      <div className="bg-white w-fit p-12 border-2 rounded-[30px] m-4">
        <div className="text-center text-2xl text-[crimson] font-bold">
          <span data-val="36" className="numCount"></span>+
        </div>
        <div className="font-semibold text-center text-lg text-gray-500">
          Clients
        </div>
      </div>
      <div className="bg-white w-fit p-12 border-2 rounded-[30px] m-4">
        <div className="text-center text-2xl text-[crimson] font-bold">
          <span data-val="52" className="numCount"></span>+
        </div>
        <div className="font-semibold text-center text-lg text-gray-500">
          Projects
        </div>
      </div>
    </section>
  );
};

export default Counters;
