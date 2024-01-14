"use client";
import React from "react";
import { SocialLinksProps } from "../../../types";
import Link from "next/link";
import Image from "next/image";


const icons: SocialLinksProps[] = [
  {    
    name: "Email",
    icon: "/social/email.svg",
    url: "",
  }, 
  {
    name: "Linkedin",
    icon: "/social/linkedin.svg",
    url: "",
  },
  {
    name: "Twitter",
    icon: "/social/twitter.svg",
    url: "",
  },
  {
    name: "Instagram",
    icon: "/social/instagram.svg",
    url: "",
  }
];
const EmailSection = () => {

return (
  <section
  id="contact"
  className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  >
    <div className=" bg-gradient-conic primary-bg from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <div className="z-10">
      <h5 className="text-xl font-bold text-white my-2">
        Let`&apos;s Connect
      </h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        {" "}
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      
      <div className="socials flex flex-row gap-5">
        {/* <div className="gap-5"> */}
        {icons.map((link, index) => (
          <Link href= {link.url} className="shadow-xl gap-1">
            <Image src={link.icon} width={35} height={35} className=" rounded-full shadow-2xl shadow-red-500 bg-gradient-to-b" alt={""} />
          </Link>
        ))}
        {/* </div> */}
      </div> 
      
    </div>
    <div className="z-10">
      <form className="flex flex-col">
        <div className="mb-6 ">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="abpriyanshu007@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);
};

export default EmailSection;
