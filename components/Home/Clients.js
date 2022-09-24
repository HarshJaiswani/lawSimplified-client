import React from "react";
import Link from "next/link";

const Clients = () => {
  const clients = ["amazon", "facebook", "microsoft", "disney", "cocacola"];
  return (
    <section className="w-[80%] mx-auto py-12" id="clients">
      <h3 className="w-full text-center text-3xl my-4 font-semibold">
        Our Clients
      </h3>
      <div className="text-center text-[#808080] font-semibold text-xl">
        People who trusted us!
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap justify-evenly items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="w-[25%] h-[150px] flex items-center justify-center rounded-md hover:shadow-md m-3"
          >
            <img
              src={`/assets/${client}.PNG`}
              className="w-full scale-150 lg:scale-50"
              alt=""
            />
          </div>
        ))}
      </div>
      <Link href="/testimonials">
        <a>
          <button className="px-6 py-2 w-1/2 block mx-auto rounded-[4px] my-4 bg-blue-600 text-white cursor-pointer outline-none">
            Read More
          </button>
        </a>
      </Link>
    </section>
  );
};

export default Clients;
