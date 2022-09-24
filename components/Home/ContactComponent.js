import React from "react";

const ContactComponent = () => {
  return (
    <section className="w-[80%] border-t mx-auto py-8 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-4xl font-semibold text-[#5F9EA0]">
          Want to know more ?
        </span>
        <span className="text-lg font-semibold">Get a call from us !</span>
      </div>
      <button className="px-6 py-2 rounded-[4px] bg-blue-600 text-white cursor-pointer outline-none">
        Contact Us
      </button>
    </section>
  );
};

export default ContactComponent;
