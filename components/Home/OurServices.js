import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Link from "next/link";
Chart.register(ArcElement);

const OurServices = () => {
  return (
    <section
      className="w-[80%] mx-auto min-h-[50vh] lg:flex py-8"
      id="services"
    >
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-[250px]">
          <Doughnut
            data={{
              labels: ["Service 1", "Service 2", "Service 3"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [300, 50, 100],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
            height={400}
            width={600}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex p-4 lg:p-12 flex-col justify-center items-start">
        <h2 className="mt-4 text-2xl font-semibold ">Our Services</h2>
        <p className="mt-4 text-gray-400">
          We offer the full spectrum of services to help organizations work
          better. Everything from creating handling all your legal work, and
          providing you the best way to grow you business
        </p>
        <Link href="/services">
          <a>
            <button className="px-6 py-2 rounded-[4px] my-4 bg-blue-600 text-white cursor-pointer outline-none">
              Read More
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
