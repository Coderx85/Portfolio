import { categoryGlass, tech as techData } from "@/constants/resume";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import { convertLevelIntoNumber } from "@/lib/convertLevel";
import { levelBarColor } from "@/lib/levelBarColor";
import { config, SocialLink } from "@/constants";
import { FaBookOpen, FaGithub, FaLayerGroup } from "react-icons/fa6";
import GitHubStats from "@/app/_components/GitHubStats";
import Heading from "@/components/Heading";
import { FaRegUserCircle } from "react-icons/fa";
import { webPanelId, webTabId } from "./webmodeToggle";

// Skill tiles are inert decoration, not interactive controls — per the
// design system's Glow-Means-Active rule they get the plain glass border at
// rest and no hover treatment (rest + hover are the same state).
const techTileClassName =
  "w-20 border border-black/10 dark:border-white/10 rounded-xl p-3 flex flex-col gap-2 items-center text-center";

export default function WebView() {
  return (
    <motion.div
      key="web"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      // Matches PrintView so the tab swap is an instant crossfade.
      transition={{ duration: 0.15, ease: "easeInOut" }}
      // Pane of the mode toggle's WAI-APG tabs pattern (see webmodeToggle).
      role="tabpanel"
      id={webPanelId}
      aria-labelledby={webTabId}
      className="flex flex-col gap-15"
    >
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeIn" }}
        className="py-8 h-full flex flex-col gap-8"
      >
        {/* ── Profile ── */}
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
          <div>
            <Heading title="Profile" icon={FaRegUserCircle} />
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
                    delay: 0.25,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-transform duration-300 shrink-0" />
                  <p className="text-foreground text-sm md:text-base leading-relaxed">
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
              background: "var(--card-tint)",
            }}
            className="flex flex-col gap-3 lg:w-65 justify-end shrink-0 rounded-xl p-4"
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
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex items-start gap-3 px-1 py-2 rounded-lg transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 group"
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
                  <span className="text-foreground text-xs font-medium transition-colors">
                    {link.name}
                  </span>
                  <span className="text-secondary-foreground text-[11px]">
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
              "linear-gradient(90deg, transparent, rgba(255, 122, 26, 0.4), transparent)",
          }}
        />

        {/* ── About Me ── */}
        <div>
          <Heading title="About Me" icon={FaBookOpen} />
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              Full-stack and DevOps engineer with a B-Tech in Computer Science
              (2021–25). I work across the whole stack — React and Next.js
              frontends, Node.js and Fastify backends, and the
              Docker/Kubernetes/cloud infrastructure they run on.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              As a Forward Deployed Engineer at Adleia Labs, I took an
              AI-driven healthcare SaaS from zero to production in 10 weeks
              (40+ shipped features), building a multimodal LangGraph +
              Gemini Vision pipeline served over WhatsApp and Telegram. At
              Websmiths I built a multi-tenant SaaS backend for 100+
              enterprise organizations and 5k+ users — including a Kafka
              notification microservice handling 450 req/sec — and cut
              production MTTR by 24%.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              As a Frontend Developer Intern at JarGoan, my redesigns improved
              usability by 20.6% and cut the initial bundle size by 18%.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* GitHub widget is interactive/embedded — excluded from printing. */}
      <motion.div className="py-3 flex flex-col print:hidden">
        <Heading
          title="GitHub Contributions"
          icon={FaGithub}
          type="subsection"
        />
        <GitHubStats />
      </motion.div>

      {/* Expertise */}
      <div id="skills">
        <Heading title="Expertise" icon={FaLayerGroup} type="section" />
        {/* Profile Highlights */}
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
                return (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className={`${categoryGlass.bg} ${categoryGlass.border} rounded-2xl p-5 flex flex-col gap-4`}
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.35,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="text-lg flex items-center gap-2 font-semibold text-foreground tracking-wide"
                    >
                      <category.icon className="text-muted-foreground" />
                      {category.title}
                    </motion.h4>
                    <div className="flex gap-4 flex-wrap md:justify-start justify-center">
                      {category.techStack.map((techItem, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className={techTileClassName}
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
                              className="bg-black/10 dark:bg-white/10 h-1.5 rounded-full"
                              aria-label={`${techItem.title}: ${techItem.level}`}
                              indicatorStyle={{
                                backgroundColor: levelBarColor(techItem.level),
                              }}
                            />
                            <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground tracking-wide uppercase">
                              {techItem.level}
                            </p>
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
                return (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className={`${categoryGlass.bg} ${categoryGlass.border} rounded-2xl p-5 flex flex-col gap-4`}
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.35,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="text-lg flex items-center gap-2 font-semibold text-foreground tracking-wide"
                    >
                      <category.icon className="text-muted-foreground" />
                      {category.title}
                    </motion.h4>
                    <div className="grid md:grid-cols-4 grid-cols-2 whitespace-nowrap self-center md:gap-3">
                      {category.techStack.map((techItem, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className={techTileClassName}
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
                              className="bg-black/10 dark:bg-white/10 h-1.5 rounded-full"
                              aria-label={`${techItem.title}: ${techItem.level}`}
                              indicatorStyle={{
                                backgroundColor: levelBarColor(techItem.level),
                              }}
                            />
                            <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground tracking-wide uppercase">
                              {techItem.level}
                            </p>
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

      {/* Plain section divider — low-key, in line with the glass language;
          the amber gradient above is the emphasis device. */}
      <div className="h-px w-full border-t border-black/10 dark:border-white/10" />

      {/* ── Experience section ── */}
      <ExperienceSection />
    </motion.div>
  );
}
