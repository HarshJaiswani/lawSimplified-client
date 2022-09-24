import React from "react";
import ContactForm from "../components/Home/ContactForm";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { client } from "../hooks/sanityClient";
import { useRouter } from "next/router";

const Contact = ({ services }) => {
  const router = useRouter();
  return (
    <>
      {/* <Header title="Contact Us" /> */}
      <div className="bg-bg-img bg-cover bg-no-repeat w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center text-white my-4">Contact Us</h2>
        <div className="lg:flex">
          <div className="w-full lg:w-1/2 px-8 pb-8 sm:p-12 text-[whitesmoke]">
            <div className="my-8">
              <h2 className="text-[wheat] text-lg">Address :</h2>
              <p className="text-xl font-semibold my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                maiores.
              </p>
              <p className="text-xl font-semibold my-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="my-8">
              <h2 className="text-[wheat] text-lg">Email Address :</h2>
              <p className="text-xl font-semibold my-2">
                support@law_simplified.com
              </p>
            </div>
            <div className="my-8">
              <h2 className="text-[wheat] text-lg">Phone Number</h2>
              <p className="text-xl font-semibold my-2">+91 xxxxxx1234</p>
            </div>
            <div className="flex w-full sm:w-1/2 lg:w-1/3 items-center justify-between">
              <Link href="/">
                <a>
                  <BsFacebook className="text-2xl cursor-pointer" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <BsInstagram className="text-2xl cursor-pointer" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <BsLinkedin className="text-2xl cursor-pointer" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <BsTwitter className="text-2xl cursor-pointer" />
                </a>
              </Link>
            </div>
          </div>
          <ContactForm
            services={services}
            defaultService={router.query.serviceName?.toLowerCase()}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;

export async function getServerSideProps(context) {
  const query = `*[_type == "services"]`;
  const services = await client.fetch(query);
  return {
    props: {
      services,
    },
  };
}
