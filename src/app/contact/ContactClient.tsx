"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaEnvelope,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaUser,
  FaBuilding,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    title: "Email",
    description: "work.priyanshu085@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    title: "Phone",
    description: "(+91) 707 191 5785",
    icon: <FaPhone />,
  },
  {
    title: "Location",
    description: "New Delhi, India",
    icon: <FaLocationArrow />,
  },
  {
    title: "LinkedIn",
    description: "coderx85",
    icon: <FaLinkedin />,
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Great! Your email was sent successfully",
        description: "I will get back to you soon",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-3 flex xl:flex-row flex-col justify-between"
    >
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.6, duration: 0.5 }}
        className="px-8 py-8"
        id="contact"
      >
        <form
          onSubmit={handleSubmit}
          className="glass-card px-6 py-3 xl:py-6 flex flex-col gap-3"
        >
          {/* ── Header ── */}
          <div className="py-2">
            <h2 className="text-2xl xl:text-3xl font-bold gradient-text">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/75 leading-relaxed text-sm">
              I&apos;m currently looking for new opportunities. Whether you have
              a question or just want to say hi, I&apos;ll try my best to get
              back to you!
            </p>
          </div>

          {/* ── Your Details Group ── */}
          <div className="space-y-2">
            <p className="text-xs text-white/95 font-semibold">Your Details</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Name */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <FaUser className="text-xs text-white/25 group-focus-within:text-accent transition-colors duration-300" />
                </div>
                <Input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  required
                  className="glass border-white/10 rounded-xl h-10 pl-10 pr-4 text-sm w-full
                        placeholder:text-white/95
                        focus:border-accent/50 focus:shadow-[0_0_15px_rgba(22,100,102,0.1)]
                        transition-all duration-300"
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <FaEnvelope className="text-xs text-white/25 group-focus-within:text-accent transition-colors duration-300" />
                </div>
                <Input
                  type="email"
                  id="email"
                  required
                  placeholder="Email address"
                  className="glass border-white/10 rounded-xl h-10 pl-10 pr-4 text-sm w-full
                        placeholder:text-white/95
                        focus:border-accent/50 focus:shadow-[0_0_15px_rgba(22,100,102,0.1)]
                        transition-all duration-300"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>

              {/* Company */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <FaBuilding className="text-xs text-white/25 group-focus-within:text-accent transition-colors duration-300" />
                </div>
                <Input
                  type="text"
                  id="company"
                  placeholder="Company / Organization"
                  required
                  className="glass border-white/10 rounded-xl h-10 pl-10 pr-4 text-sm w-full
                        placeholder:text-white/95
                        focus:border-accent/50 focus:shadow-[0_0_15px_rgba(22,100,102,0.1)]
                        transition-all duration-300"
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                  }}
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <FaPhone className="text-xs text-white/25 group-focus-within:text-accent transition-colors duration-300" />
                </div>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Phone number"
                  required
                  className="glass border-white/10 rounded-xl h-10 pl-10 pr-4 text-sm w-full
                        placeholder:text-white/95
                        focus:border-accent/50 focus:shadow-[0_0_15px_rgba(22,100,102,0.1)]
                        transition-all duration-300"
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Project Details Group ── */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">
              Project Details
            </p>

            {/* Role Select - full width */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <HiOutlineBriefcase className="text-sm text-white/25 group-focus-within:text-accent transition-colors duration-300" />
              </div>
              <Select
                name="role"
                required
                onValueChange={(value) => {
                  setFormData({ ...formData, role: value });
                }}
              >
                <SelectTrigger
                  className="w-1/3 glass border-white/10 rounded-xl h-10 pl-10 pr-4 text-sm
                        text-white/95 
                        focus:border-accent/50 focus:shadow-[0_0_15px_rgba(22,100,102,0.1)]
                        transition-all duration-300
                        [&>span]:text-white/95 data-[state=open]:border-accent/50"
                >
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent className="glass border-white/10 rounded-xl backdrop-blur-xl">
                  <SelectGroup>
                    <SelectItem
                      value="Software Developer Engineer"
                      className="focus:bg-accent/10 focus:text-white rounded-lg"
                    >
                      Software Developer Engineer
                    </SelectItem>
                    <SelectItem
                      value="Backend Developer"
                      className="focus:bg-accent/10 focus:text-white rounded-lg"
                    >
                      Backend Developer
                    </SelectItem>
                    <SelectItem
                      value="Fullstack Developer"
                      className="focus:bg-accent/10 focus:text-white rounded-lg"
                    >
                      Fullstack Developer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <Textarea
                name="message"
                id="message"
                className="glass border-white/10 rounded-xl min-h-[140px] p-3 text-sm
                      placeholder:text-white/95
                      focus:border-accent/50 focus:shadow-[0_0_15px_rgba(22,100,102,0.1)]
                      transition-all duration-300 resize-none"
                placeholder="Tell me about your project, timeline, and how I can help..."
                required
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
              <p className="text-white/20 text-[11px] mt-1 text-right">
                Be as detailed as possible for a quicker response
              </p>
            </div>
          </div>

          {/* ── Submit Button ── */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl h-11
                  hover:shadow-lg hover:shadow-accent/25 
                  active:scale-[0.98]
                  transition-all duration-300
                  flex items-center justify-center gap-3 group"
          >
            <span className="text-base">Send Message</span>
            <FiSend className="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>

          <p className="text-white/20 text-xs text-center">
            I typically respond within 24–48 hours
          </p>
        </form>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="flex flex-1 items-start xl:justify-end order-1 xl:order-0 pr-8 my-8 xl:mb-0"
      >
        <ul className="flex flex-col gap-6 ">
          {contactInfo.map((info, index) => {
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + index * 0.1, duration: 0.4 }}
                className="glass-card glass-card-hover p-5 flex items-center gap-5"
              >
                <div
                  className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-accent/10 border border-accent/20 
                        text-accent flex items-center justify-center shrink-0"
                >
                  <div className="text-xl">{info.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-sm font-medium uppercase tracking-wider">
                    {info.title}
                  </p>
                  <h3 className="text-base font-medium text-white/90 truncate">
                    {info.description}
                  </h3>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
