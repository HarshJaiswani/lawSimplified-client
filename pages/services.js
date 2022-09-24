import React from "react";
import Header from "../components/Header";
import { MdMiscellaneousServices } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import { BsChevronUp as ChevronUpIcon } from "react-icons/bs";
import PortableText from "react-portable-text";
import { client } from "../hooks/sanityClient";
import { useRouter } from "next/router";

const Services = ({ services }) => {
  const router = useRouter();
  const handleAvail = (title) => {
    router.push({
      pathname: "/contact",
      query: { serviceName: title },
    });
  };
  return (
    <div>
      {/* take inspiraTION from style now and implement in tailwind */}
      <Header title="Services" />
      {/* <div className="w-[80%] mx-auto flex justify-evenly items-center flex-wrap py-12">
        {services.map((item, index) => (
          <div key={index} className="w-[300px] my-4 p-4 rounded-[30px] border hover:-translate-y-[10px] cursor-pointer hover:shadow-md transition-all border-[#e2e2e2]">
            <h3 className="w-full border-b-2 pb-2 justify-center flex items-center font-semibold text-2xl px-4 py-1.5">
              <MdMiscellaneousServices className="text-[crimson] mr-2" />{" "}
              Service {index + 1}
            </h3>
            <p className="text-[#8a8a8a] p-4 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae voluptas obcaecati esse eligendi magni harum labore,
              dolores ullam, facere dolor nam aspernatur, veniam laborum
              voluptatibus.
            </p>
            <button className="w-1/2 my-2 px-4 block py-1.5 rounded-md text-white mx-auto bg-cyan-600">
              Avail Now
            </button>
          </div>
        ))}
      </div> */}
      <div className="w-[80%] mx-auto pt-8 lg:p-12">
        {services.map((service, index) => (
          <Disclosure key={index} as="div" className="my-4 border rounded-lg">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2">
                  <h3 className="flex items-center font-semibold text-lg sm:text-xl lg:text-2xl">
                    <MdMiscellaneousServices className="text-cyan-600 mr-2" />{" "}
                    {service.title}
                  </h3>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 font-semibold text-gray-400`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 text-lg text-gray-700">
                  <PortableText
                    content={service.content}
                    serializers={{
                      h1: (props) => (
                        <h1 className="text-2xl font-semibold" {...props} />
                      ),
                      li: ({ children }) => <li>{children}</li>,
                    }}
                  />{" "}
                  <button
                    onClick={() => handleAvail(service.title)}
                    className="px-4 py-1 ml-auto block rounded-[4px] my-4 bg-blue-600 text-white cursor-pointer outline-none"
                  >
                    Avail Now
                  </button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Services;

export async function getServerSideProps(context) {
  const query = `*[_type == "services"]`;
  const services = await client.fetch(query);
  return {
    props: {
      services,
    },
  };
}
