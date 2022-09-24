import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { SiSimpleanalytics } from "react-icons/si";
import { BsFillGearFill, BsPersonFill } from "react-icons/bs";
import { MdGroups, MdContactPage } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

export const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const sections = [
    {
      name: "Services we offer",
      link: "#services",
      icon: <BsFillGearFill className="text-xl" />,
    },
    {
      name: "Clients we worked for",
      link: "#clients",
      icon: <BsPersonFill className="text-xl" />,
    },
    {
      name: "Team - Our Real Strength",
      link: "#team",
      icon: <MdGroups className="text-xl" />,
    },
    {
      name: "Articles to keep you updated",
      link: "#articles",
      icon: <HiOutlineDocumentText className="text-xl" />,
    },
    {
      name: "Contact Us",
      link: "",
      icon: <MdContactPage className="text-xl" />,
    },
  ];
  return (
    <div className="w-full lg:flex min-h-[90vh] bg-bg-img bg-[length:100vw_100%] bg-no-repeat bg">
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between text-white py-8 lg:py-24">
        <div>
          <h3 className="font-semibold text-3xl lg:text-5xl">
            Stressed due to legalities ?
          </h3>
          <h4 className="text-xl lg:text-2xl font-semibold my-8">
            No worries ! They are simplified Now
          </h4>
        </div>
        <div className="flex sm:flex-row flex-col my-8 items-start sm:items-end">
          <span className="font-semibold text-gray-400 text-xl">
            Introducing
          </span>
          <div className="w-fit h-[35px] rounded-[10px] bg-[orange] flex my-4 sm:my-0 mx-1 sm:mx-5 px-4 py-6 sm:py-8 items-center">
            <SiSimpleanalytics className="text-[crimson] text-xl sm:text-4xl mr-2" />
            <span className="text-white font-semibold text-xl sm:text-2xl">
              Law Simplified
            </span>
          </div>
        </div>
      </div>
      {!showForm && (
        <div className="w-full lg:w-1/2 p-8 lg:p-12 text-[whitesmoke]">
          {sections.map((section, index) =>
            section.name != "Contact Us" ? (
              <Link key={index} href={section.link}>
                <a className="flex items-center backdrop-blur-[10px] bg-white/10 rounded-md my-4 border px-3 sm:px-8 border-[#e2e2e2] py-4">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 mr-4 rounded-full">
                    {section.icon && section.icon}
                  </div>
                  <div className="font-semibold">{section.name}</div>
                </a>
              </Link>
            ) : (
              <Link key={index} href={section.link}>
                <a
                  onClick={() => setShowForm(true)}
                  className="flex items-center backdrop-blur-[10px] bg-white/10 rounded-md my-4 border px-3 sm:px-8 border-[#e2e2e2] py-4"
                >
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 mr-4 rounded-full">
                    {section.icon && section.icon}
                  </div>
                  <div className="font-semibold">{section.name}</div>
                </a>
              </Link>
            )
          )}
        </div>
      )}
      {showForm && <ContactForm setShowForm={setShowForm} />}
    </div>
  );
};
