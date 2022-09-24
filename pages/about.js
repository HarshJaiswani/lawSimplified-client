import React from "react";
import Header from "../components/Header";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const About = () => {
  const team = [
    {
      name: "John Calture",
      designation: "Managing Director",
      img: "/assets/team/person1.jpeg",
      descp:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur libero reiciendis voluptatem qui rem, neque fugit, quibusdam error ipsa maiores, commodi est perspiciatis magnam?",
    },
    {
      name: "Sneha Batra",
      designation: "Operational Head",
      img: "/assets/team/person2.jpeg",
      descp:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur libero reiciendis voluptatem qui rem, neque fugit, quibusdam error ipsa maiores, commodi est perspiciatis magnam?",
    },
    {
      name: "Ramesh Sahu",
      designation: "Human Resource Manager",
      img: "/assets/team/person3.jpeg",
      descp:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur libero reiciendis voluptatem qui rem, neque fugit, quibusdam error ipsa maiores, commodi est perspiciatis magnam?",
    },
    {
      name: "Stephen Malwart",
      designation: "Finance Team",
      img: "/assets/team/person4.jpeg",
      descp:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur libero reiciendis voluptatem qui rem, neque fugit, quibusdam error ipsa maiores, commodi est perspiciatis magnam?",
    },
  ];
  return (
    <div>
      <Header title="About Us" />
      <div className="w-[80%] lg:w-[70%] mx-auto">
        <h3 className="text-2xl text-center font-semibold my-8">
          Law Simplified
        </h3>
        <p className="mb-8 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          dolorem distinctio. Accusantium a sint, ipsa provident voluptatum unde
          corporis libero animi incidunt facere. Aliquid, veniam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Labore, ad a voluptas
          corrupti quaerat hic eos earum, atque repudiandae veritatis ea!
          Obcaecati cum voluptas placeat?
        </p>
        <p className="mb-8 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          dolorem distinctio. Accusantium a sint, ipsa provident voluptatum unde
          corporis libero animi incidunt facere. Aliquid, veniam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Labore, ad a voluptas
          corrupti quaerat hic eos earum, atque repudiandae veritatis ea!
          Obcaecati cum voluptas placeat?
        </p>
      </div>
      <div className="my-12">
        <h3 className="text-2xl text-center font-semibold my-8">Our Team</h3>
        <div className="flex lg:flex-row flex-col flex-wrap justify-evenly items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-[80%] lg:w-1/4 rounded-[30px] bg-[white] shadow-lg m-3"
            >
              <img
                src={member.img}
                className="w-24 h-24 rounded-full my-4 mx-auto bg-gray-300"
                alt=""
              />
              <span className="text-center text-lg block font-semibold">
                {member.name}
              </span>
              <span className="text-center text-sm block font-semibold text-[crimson]">
                {member.designation}
              </span>
              <p className="mx-4 my-4 text-center text-gray-400">
                {member.descp}
              </p>
              <div className="flex items-center justify-evenly my-8">
                <Link href="">
                  <a>
                    <BsLinkedin className="text-xl text-[gray]" />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <BsTwitter className="text-xl text-[gray]" />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <MdEmail className="text-xl text-[gray]" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] lg:py-0 py-8 mx-auto rounded-md my-12 bg-[gray]/30 flex lg:flex-row flex-col items-center justify-center">
        <span className="lg:text-2xl text-center text-[black]/80 font-semibold">
          What people who trusted us are saying about us ?
        </span>
        <Link href="/testimonials">
          <a>
            <button className="mx-6 px-6 py-2 rounded-[4px] my-4 bg-blue-600 text-white cursor-pointer outline-none">
              Read Here
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
