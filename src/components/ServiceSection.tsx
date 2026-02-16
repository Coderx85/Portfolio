import { SiWorkplace } from "react-icons/si";
import { motion } from "framer-motion";
import { services } from "@/constants";

export default function ServiceSection() {
  return (
    <motion.div
      className="mx-auto h-full mt-40 flex flex-col gap-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
    >
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-7">
        {services.map((service, index) => (
          <div key={index + service.title} className="flex flex-col gap-3 py-5">
            <motion.h3 className="flex gap-4 text-white">
              <service.icon className="fill-accent" />
              {service.title}
            </motion.h3>
            <p className="text-white/60">{service.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
