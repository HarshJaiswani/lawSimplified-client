import React from "react";
import Link from "next/link";

const Team = () => {
  return (
    <section className="w-full min-h-[50vh] lg:flex py-8" id="team">
      <div className="w-full lg:w-1/2 lg:pl-40 flex p-12 flex-col justify-center items-start">
        <h2 className="mt-4 text-2xl font-semibold ">Our Team</h2>
        <p className="mt-4 pr-12 text-gray-400">
          We are what we are only due to our team the people who actually
          simplifies the law for you and eventully help you, us and themselves
          grow!
        </p>
        <Link href="/about">
          <a>
            <button className="px-6 py-2 rounded-[4px] my-4 bg-blue-600 text-white cursor-pointer outline-none">
              Read More
            </button>
          </a>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 lg:pr-36 flex justify-center items-center">
        <img
          src="/assets/teamIllus.svg"
          className="w-[400px] hover:scale-105 transition-all"
          alt=""
        />
      </div>
    </section>
  );
};

export default Team;
