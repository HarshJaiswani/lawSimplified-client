import React, { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { HiStar, HiFolder, HiOutlineDocumentText } from "react-icons/hi";
import { BsFillFilePdfFill } from "react-icons/bs";
import { IoLinkOutline } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
import getFullDate from "../hooks/getDate";
import { client } from "../hooks/sanityClient";

const Tools = ({ tools }) => {
  const [indexCheck, setIndexCheck] = useState();
  const [showMsg, setShowMsg] = useState("false");
  // const tools = [
  //   {
  //     name: "File 1",
  //     fileType: "pdf",
  //     link: "",
  //     rating: 0,
  //   },
  //   {
  //     name: "File 2",
  //     fileType: "file",
  //     link: "",
  //     rating: 3,
  //   },
  //   {
  //     name: "File 3",
  //     fileType: "link",
  //     link: "/",
  //     rating: 0,
  //   },
  //   {
  //     name: "File 4",
  //     fileType: "doc",
  //     link: "",
  //     rating: 1,
  //   },
  //   {
  //     name: "File 5",
  //     fileType: "excel",
  //     link: "",
  //     rating: 4,
  //   },
  // ];
  const rateTools = (index) => {
    setIndexCheck(index);
    setTimeout(() => {
      setShowMsg("true");
      setTimeout(() => {
        setShowMsg("no true");
      }, 2000);
    }, 2000);
  };
  let fileExtention;
  const getUrlFromId = (ref) => {
    let projectId = "gov5eqnr";
    let dataset = "production";
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split("-");
    // setExtention(extension);
    fileExtention = extension;
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
  };
  console.log(tools[0]);
  return (
    <>
      <Header title="Tools" />
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto">
        {/* <div className="rounded-full flex justify-evenly items-center my-4 px-4 py-1 bg-gray-800">
          <span className="text-white font-semibold text-xl mr-10">
            Tools Rated :{" "}
          </span>
          <HiStar className="text-3xl text-[yellow]" />
          <HiStar className="text-3xl text-[yellow]" />
          <HiStar className="text-3xl text-[yellow]" />
          <HiStar className="text-3xl text-[yellow]" />
          <HiStar className="text-3xl text-[yellow]" />
          <span className="text-gray-200 ml-4">(26 Viewers)</span>
        </div> */}
        <ul className="w-full my-4">
          {tools.map((item, index) => (
            <li
              key={index}
              className="w-full flex flex-wrap justify-between items-center border-b-2 px-4 py-4 border-[#e2e2e2]"
            >
              <div className="flex items-center">
                {item.fileType == "pdf" && (
                  <BsFillFilePdfFill className="text-2xl text-[red]" />
                )}
                {item.fileType == "file" && (
                  <HiFolder className="text-2xl text-[blue]" />
                )}
                {item.fileType == "excel" && (
                  <SiMicrosoftexcel className="text-2xl text-[green]" />
                )}
                {item.fileType == "doc" && (
                  <HiOutlineDocumentText className="text-2xl text-[gray]" />
                )}
                {item.fileType == "link" && (
                  <IoLinkOutline className="text-2xl text-[orange]" />
                )}
                <div className="ml-4 text-lg text-indigo-900 font-semibold">
                  {item.toolurl ? (
                    <Link href={item.toolurl}>
                      <a>
                        {item.title} -{" "}
                        <span className="text-base text-[#8a8a8a]">
                          {item.description}
                        </span>
                      </a>
                    </Link>
                  ) : (
                    <a
                      href={`${getUrlFromId(item.toolfile.asset._ref)}?dl=<${
                        item.title
                      }.${fileExtention}>`}
                      className="cursor-pointer"
                      download={true}
                    >
                      {item.title} -{" "}
                      <span className="text-base text-[#8a8a8a]">
                        {item.description}
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="text-gray-400">
                {getFullDate(item._createdAt)}
              </div>
            </li>
          ))}
        </ul>
        {/* {showMsg == "false" && (
          <div className="flex items-center">
            <div className="text-2xl font-semibold mx-4 my-4">
              Rate Tools :{" "}
            </div>
            <div className="flex items-center mt-1">
              <span
                className="cursor-pointer"
                onClick={() => {
                  rateTools(1);
                }}
              >
                <HiStar
                  className={`text-3xl ${
                    indexCheck >= 1 ? "text-[yellow]" : "text-gray-300"
                  }`}
                />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  rateTools(2);
                }}
              >
                <HiStar
                  className={`text-3xl ${
                    indexCheck >= 2 ? "text-[yellow]" : "text-gray-300"
                  }`}
                />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  rateTools(3);
                }}
              >
                <HiStar
                  className={`text-3xl ${
                    indexCheck >= 3 ? "text-[yellow]" : "text-gray-300"
                  }`}
                />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  rateTools(4);
                }}
              >
                <HiStar
                  className={`text-3xl ${
                    indexCheck >= 4 ? "text-[yellow]" : "text-gray-300"
                  }`}
                />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  rateTools(5);
                }}
              >
                <HiStar
                  className={`text-3xl ${
                    indexCheck >= 5 ? "text-[yellow]" : "text-gray-300"
                  }`}
                />
              </span>
            </div>
          </div>
        )}
        {showMsg == "true" && (
          <div className="text-3xl font-bold text-[green] my-4">Thank You</div>
        )} */}
      </div>
    </>
  );
};

export default Tools;

export async function getServerSideProps(context) {
  const query = `*[_type == "tools"]`;
  const tools = await client.fetch(query);
  return {
    props: {
      tools,
    },
  };
}
