import Router from "next/router";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const ContactForm = (props) => {
  const router = useRouter();
  const { setShowForm, services, defaultService = "select" } = props;
  const [showMsg, setShowMsg] = useState({ isActive: false, msg: "" });
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycby0dX1xphBeDXm4yAxCLMN4mlUdtKTT19qqUt2HH_vFg8Fns9QywsyprQWfZpfhr9nndQ/exec";
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = document.forms["contactForm"];
    setShowMsg({ isActive: true, msg: "Loading..." });
    fetch(scriptUrl, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setShowMsg({ isActive: true, msg: "Response Recorded ! Thank You" });
        setTimeout(() => {
          setShowForm(false);
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setShowMsg({ isActive: true, msg: "Sorry! some error occured" });
      });
    form.reset();
  };
  return (
    <div className="w-full lg:w-1/2 h-full p-4 lg:p-12">
      {showMsg.isActive && (
        <div className="font-semibold text-3xl text-white px-4 py-2 border-2 rounded-md">
          {showMsg.msg}
        </div>
      )}
      {!showMsg.isActive && (
        <form
          onSubmit={handleSubmit}
          id="contactForm"
          className="w-full h-full flex flex-col justify-between items-center rounded-md border-2 backdrop-blur-[10px] bg-white/10"
        >
          <h2 className="w-[80%] px-2 flex justify-between items-center my-4 font-semibold text-xl text-[whitesmoke] text-center">
            <span>Wanna Hear From Us ?</span>
            {!router.asPath.includes("/contact") && (
              <span
                onClick={() => setShowForm(false)}
                className="cursor-pointer"
              >
                <AiOutlineCloseCircle className="text-white text-2xl" />
              </span>
            )}
          </h2>
          <div className="w-[90%] sm:w-[80%] mx-auto">
            <input
              name="Name"
              type="text"
              required
              placeholder="Enter Your Name"
              className="w-full rounded-md my-2 px-2 py-2 outline-none"
            />
            <div className="w-full my-2 rounded-md bg-white">
              <span className="font-semibold mx-1 sm:mx-4">+91</span>{" "}
              <input
                type="text"
                required
                name="Contact Number"
                minLength={10}
                maxLength={10}
                placeholder="Enter Contact Number"
                className="px-2 py-2 outline-none"
              />
            </div>
            <input
              type="email"
              name="Email"
              required
              placeholder="Enter Your Email"
              className="w-full rounded-md px-2 py-2 my-2 outline-none"
            />
            <input
              type="text"
              name="City"
              required
              placeholder="Enter Your City"
              className="w-full rounded-md px-2 py-2 my-2 outline-none"
            />
            <select
              name="Service"
              id="service"
              required
              defaultValue={defaultService}
              className="outline-none cursor-pointer font-semibold w-full rounded-md bg-white py-2 my-2"
            >
              <option value="select" disabled>
                Select Service
              </option>
              {services?.map((service, index) => (
                <option key={index} value={`${service.title.toLowerCase()}`}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-[50%] my-4 font-semibold text-white bg-[#091921] mx-auto block rounded-md py-2 text-center"
          >
            Get It
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
