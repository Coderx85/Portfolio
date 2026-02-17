import { config } from "@/lib/config";
import { categoryColors, tech as techData } from "@/constants/resume";
import { Progress } from "@/components/ui/progress";
import { SiAboutdotme } from "react-icons/si";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import { covertLevelIntoNumber } from "@/lib/covertLevel";

export default function WebView() {
  const { description } = config;

  return (
    <motion.div
      key="web"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col gap-[60px]"
    >
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeIn" }}
        className="mx-auto pb-12 text-left py-0 h-full min-h-[400px] flex flex-col gap-3"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex gap-4"
        >
          <span className="text-accent">
            <SiAboutdotme />
          </span>
          About me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Expertise */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex gap-4 pb-6"
        >
          <span className="text-accent">
            <SiAboutdotme />
          </span>
          Expertise
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {/* Frameworks (full-width row) */}
          <motion.div>
            {techData
              .filter((t) => t.title === "Frameworks")
              .map((category, catIndex) => {
                const colors = categoryColors[category.title];
                return (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25 + catIndex * 0.15,
                      duration: 0.5,
                    }}
                    className={`${colors.bg} ${colors.border} rounded-2xl p-5 flex flex-col gap-4`}
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + catIndex * 0.15,
                        duration: 0.4,
                      }}
                      className={`text-lg flex items-center gap-2 font-semibold ${colors.text} tracking-wide`}
                    >
                      <category.icon className={`${colors.fill}`} />
                      {category.title}
                    </motion.h4>
                    <div className="flex gap-4 flex-wrap md:justify-start justify-center">
                      {category.techStack.map((techItem, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.35 + catIndex * 0.15 + techIndex * 0.08,
                            duration: 0.4,
                          }}
                          className="w-[80px] transition-colors border-white/10 hover:border-white/30 duration-300 rounded-xl p-3 flex flex-col gap-2 items-center text-center"
                          style={{ borderColor: `${techItem.color}20` }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${techItem.color}60`;
                            e.currentTarget.style.backgroundColor = `${techItem.color}80`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = `${techItem.color}80`;
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <span
                            className="text-3xl"
                            style={{ color: techItem.color }}
                          >
                            <techItem.icon />
                          </span>
                          <p className="text-xs font-medium uppercase">
                            {techItem.title}
                          </p>
                          <div className="w-full">
                            <Progress
                              value={covertLevelIntoNumber(techItem.level)}
                              className="bg-white/10 h-1.5 rounded-full"
                              indicatorStyle={{
                                backgroundColor: techItem.color,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>

          {/* Other categories (3-column grid) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {techData
              .filter((category) => category.title !== "Frameworks")
              .map((category, catIndex) => {
                const colors = categoryColors[category.title];
                return (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25 + catIndex * 0.15,
                      duration: 0.5,
                    }}
                    className={`${colors.bg} ${colors.border} rounded-2xl p-5 flex flex-col gap-4`}
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + catIndex * 0.15,
                        duration: 0.4,
                      }}
                      className={`text-lg flex items-center gap-2 font-semibold ${colors.text} tracking-wide`}
                    >
                      <category.icon className={`${colors.fill}`} />
                      {category.title}
                    </motion.h4>
                    <div className="grid md:grid-cols-4 grid-cols-2 whitespace-nowrap self-center md:gap-3">
                      {category.techStack.map((techItem, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.35 + catIndex * 0.15 + techIndex * 0.08,
                            duration: 0.4,
                          }}
                          className="w-[80px] transition-colors border-white/10 hover:border-white/30 duration-300 rounded-xl p-3 flex flex-col gap-2 items-center text-center"
                          style={{ borderColor: `${techItem.color}/20` }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${techItem.color}/60`;
                            e.currentTarget.style.backgroundColor = `${techItem.color}50`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = `${techItem.color}/80`;
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <span
                            className="text-3xl"
                            style={{ color: techItem.color }}
                          >
                            <techItem.icon />
                          </span>
                          <p className="text-xs font-medium uppercase">
                            {techItem.title}
                          </p>
                          <div className="w-full">
                            <Progress
                              value={covertLevelIntoNumber(techItem.level)}
                              className="bg-white/10 h-1.5 rounded-full"
                              indicatorStyle={{
                                backgroundColor: techItem.color,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
      </div>

      <ExperienceSection />
    </motion.div>
  );
}
