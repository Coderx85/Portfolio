import React from "react";
import { Fa1, FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

type THeadingType = "section" | "subsection";

type HeadingProps =
  | {
      title: string;
      icon: IconType;
      type: "section";
      description?: string;
    }
  | {
      title?: string;
      icon?: IconType;
      type?: "subsection";
    };

const Heading = ({ type = "subsection", ...props }: HeadingProps) => {
  const Icon = props.icon || Fa1;

  const renderHeading = () => {
    switch (type) {
      case "section":
        return (
          <motion.div className="flex flex-col gap-2 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-2 items-center"
            >
              <Icon className="fill-secondary size-7 items-center" />
              <motion.h2 className="text-secondary font-bold text-3xl uppercase tracking-wide">
                {props.title}
              </motion.h2>
            </motion.div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white pl-2.5"
            >
              Where I&apos;ve Worked
            </motion.h4>
          </motion.div>
        );

      default:
        return (
          <motion.div className="flex gap-3 items-center mb-4">
            <Icon className="fill-secondary size-5" />
            <motion.h3 className="text-secondary font-medium uppercase tracking-wide">
              {props.title}
            </motion.h3>
          </motion.div>
        );
    }
  };

  return renderHeading();
};

export default Heading;
