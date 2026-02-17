"use client";
import { SiWorkplace } from "react-icons/si";
import { motion } from "framer-motion";
import { services } from "@/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type Props = "full" | "half";

export default function ServiceSection({ page }: { page: Props }) {
  const servicesArray = page === "half" ? services.slice(0, 6) : services;
  return (
    <motion.div
      className="mx-auto h-full mt-10 flex flex-col gap-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
    >
      <div className="flex gap-3 justify-between">
        <div className="flex gap-3 flex-col text-accent">
          <motion.h3
            className="flex gap-3 text-accent text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          >
            <SiWorkplace className="fill-accent" />
            Services
          </motion.h3>
          <motion.h2
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          >
            Whats I Offer
          </motion.h2>
        </div>
        {page === "full" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
            className="flex gap-3 items-center"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 border-b-2 border-white/25 hover:bg-white/15 transition-colors duration-300"
            >
              Contact Me
              <FaArrowRight className="text-sm items-center justify-center" />
            </Link>
          </motion.div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-7">
        {servicesArray.map((service, index) => (
          <motion.div
            key={index + service.title}
            className="group relative flex flex-col gap-3 py-5 px-5 rounded-xl glass-card glass-card-hover overflow-hidden"
            style={{
              borderLeft: `3px solid ${service.color}`,
              background: `linear-gradient(135deg, ${service.color}12 0%, transparent 60%), rgba(15, 23, 42, 0.5)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.4 + index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <motion.h3 className="flex items-center gap-4 text-white/90 font-semibold">
              <service.icon
                className="text-xl"
                style={{ fill: service.color }}
              />
              {service.title}
            </motion.h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {service.description}
            </p>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
              style={{
                background: `radial-gradient(circle at top left, ${service.color}15, transparent 70%)`,
              }}
            />
          </motion.div>
        ))}
        {page === "half" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.4 + 5 * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="pl-5 h-full w-fit justify-start flex items-start "
          >
            <Link
              href="/service"
              className="text-white flex gap-2 px-4 py-2 rounded-xl border-2 border-white hover:border-white/50 hover:bg-white/10 transition-colors duration-300"
            >
              View more services
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center"
              >
                <FaArrowRight className="text-sm items-center" />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
