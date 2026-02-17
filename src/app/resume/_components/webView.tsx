import { categoryColors, tech as techData } from "@/constants/resume";
import { Progress } from "@/components/ui/progress";
import { SiAboutdotme } from "react-icons/si";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import { convertLevelIntoNumber } from "@/lib/convertLevel";
import { Separator } from "@radix-ui/react-select";
import { config, SocialLink } from "@/constants";
import { FaBookOpen, FaUser } from "react-icons/fa6";
import GitHubStats from "@/app/_components/GitHubStats";

export default function WebView() {
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
        className="py-8 px-8 h-full flex flex-col gap-8"
      >
        {/* ── Profile ── */}
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center gap-3 text-white mb-5"
            >
              <FaUser className="text-lg fill-accent" />
              Profile
            </motion.h3>

            {/* Profile Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-1 flex flex-col gap-3 "
            >
              {config.profile.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.35 + index * 0.1,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="flex items-left gap-3 group"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300 shrink-0" />
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          {/* Social Links — Glass Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)",
              background:
                // use grey shade for background
                "linear-gradient(90deg, rgba(22, 22, 22, 0.4), rgba(22, 22, 22, 0.4), 0.5)",
            }}
            className="flex flex-col gap-3 lg:w-[260px] justify-end shrink-0 rounded-xl p-4"
          >
            {SocialLink.filter(
              (l) =>
                l.name === "Github" ||
                l.name === "LinkedIn" ||
                l.name === "Email",
            ).map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.08, duration: 0.4 }}
                className="flex items-left gap-3 px-1 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 group"
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${link.color}1a`,
                    color: link.color,
                  }}
                >
                  <link.icon className="w-4 h-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-white/80 text-xs font-medium group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  <span className="text-white/40 text-[11px]">
                    {link.username}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(22, 100, 102, 0.4), transparent)",
          }}
        />

        {/* ── About Me ── */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <FaBookOpen className="text-lg fill-accent" />
            About me
          </motion.h3>
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="text-white/70 text-sm md:text-base leading-relaxed"
            >
              Driven by a passion for technology, I&apos;ve been building
              software from an early age — with web development and the
              ecosystem around it as my home base from the start. Especially in
              an era increasingly driven and accelerated by AI, I firmly believe
              that standing still means falling behind: I never stop learning,
              exploring, and pushing myself forward.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-white/70 text-sm md:text-base leading-relaxed"
            >
              I don&apos;t just focus on the technical side — I own the full
              stack, from architecture to delivery. Client experience,
              usability, and user experience are equally important. As a
              realistic perfectionist, I have a clear view of what&apos;s
              feasible and deliver quality work efficiently.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="text-white/70 text-sm md:text-base leading-relaxed"
            >
              Every project comes with genuine passion and empathy. Understand
              first, then build — I love diving into a client&apos;s business
              logic and developing the right solution for it. I thrive in an
              informal atmosphere with clear goals — where professionalism and a
              good team dynamic go hand in hand.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <GitHubStats />
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
                              value={convertLevelIntoNumber(techItem.level)}
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
                              value={convertLevelIntoNumber(techItem.level)}
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

      <Separator className="size-0.5 bg-white w-screen" />

      {/* ── Experience section ── */}
      <ExperienceSection />
    </motion.div>
  );
}
