"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { experienceData } from "@/constants";
import { ProjectData } from "@/constants/project";
import { tech as techData } from "@/constants/resume";
import { educationData } from "@/constants/resume";
import { config } from "@/lib/config";
import { calcDuration, formatDate } from "@/lib/dayjs";
import { styles } from "./style";

/* ────────────────────────────────────────────
   Data slices
   ──────────────────────────────────────────── */

// Latest 3 work experiences
const experiences = [...experienceData.items]
  .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
  .slice(0, 3);

// Projects: IDs 8 (Collaro), 7 (Neotion), 6 (Byte), 5 (Droxy)
const selectedProjectIds = [8, 7, 6, 5];
const projects = selectedProjectIds
  .map((id) => ProjectData.find((p) => p.id === id)!)
  .filter(Boolean);

// Latest education
const education = educationData.items[0];

// All skills
const skills = techData;

const SectionHeading = ({ icon, title }: { icon?: string; title: string }) => (
  <>
    <View style={styles.sectionHeader}>
      {icon && <Text style={styles.sectionIcon}>{icon}</Text>}
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionDivider} />
  </>
);

/* ────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────── */

const ResumePDF = () => (
  <Document
    title={`${config.name} — Resume`}
    author={config.name}
    subject="Professional Resume"
  >
    <Page size="A4" style={styles.page}>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <View style={styles.header}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{config.name}</Text>
        </View>
        <Text style={styles.subtitle}>Full Stack Web Developer</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{config.location}</Text>
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactItem}>{config.email}</Text>
          <Text style={styles.contactSep}>|</Text>
          <Link
            href="https://www.linkedin.com/in/coderx85/"
            style={styles.contactLink}
          >
            linkedin.com/in/coderx85
          </Link>
          <Text style={styles.contactSep}>|</Text>
          <Link href="https://github.com/coderx85" style={styles.contactLink}>
            github.com/coderx85
          </Link>
        </View>
      </View>

      {/* ═══════════════════ BODY ═══════════════════ */}
      <View style={styles.body}>
        {/* ─────── LEFT COLUMN ─────── */}
        <View style={styles.leftColumn}>
          {/* PROFILE */}
          <SectionHeading title="Profile" />
          <Text style={styles.profileText}>{config.description}</Text>

          {/* EXPERIENCE */}
          <SectionHeading title="Experience" />
          {experiences.map((exp) => {
            const dateRange = `${formatDate(exp.startDate)} – ${exp.isCurrent ? "Present" : formatDate(exp.endDate)}`;
            const duration = calcDuration(
              exp.startDate,
              exp.isCurrent ? new Date() : exp.endDate,
            );
            return (
              <View key={exp.id} style={styles.expItem} wrap={false}>
                <View style={styles.expBullet} />
                <View style={styles.expTitleRow}>
                  <Text style={styles.expTitle}>{exp.title}</Text>
                  <Text style={styles.expDateInfo}>
                    {dateRange} · {duration}
                  </Text>
                </View>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expDesc}>{exp.description}</Text>
                {exp.techStack && exp.techStack.length > 0 && (
                  <View style={styles.techRow}>
                    {exp.techStack.map((t, i) => (
                      <Text key={i} style={styles.techPill}>
                        {t.title}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            );
          })}

          {/* PROJECTS */}
          <SectionHeading icon="▲" title="Projects" />
          {projects.map((proj) => (
            <View key={proj.id} style={styles.projItem} wrap={false}>
              <View style={styles.projBullet} />
              <View style={styles.projTitleRow}>
                <Text style={styles.projTitle}>{proj.title}</Text>
                <View style={styles.projLinksRow}>
                  {proj.gitUrl && proj.gitUrl.startsWith("http") && (
                    <Link href={proj.gitUrl} style={styles.projLink}>
                      GitHub ↗
                    </Link>
                  )}
                  {proj.previewUrl && (
                    <Link href={proj.previewUrl} style={styles.projLink}>
                      Live ↗
                    </Link>
                  )}
                </View>
              </View>
              {proj.description ? (
                <Text style={styles.projDesc}>{proj.description}</Text>
              ) : null}
              <View style={styles.techRow}>
                {Object.keys(proj.techStack).map((tech, i) => (
                  <Text key={i} style={styles.techPill}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* ─────── RIGHT COLUMN (Sidebar) ─────── */}
        <View style={styles.rightColumn}>
          {/* PERSONAL DETAILS */}
          <SectionHeading icon="☆" title="Personal Details" />
          {[
            { label: "Name", value: config.name },
            { label: "Phone", value: config.phone },
            { label: "Email", value: config.email },
            {
              label: "Website",
              value: "coderx85.vercel.app",
              href: "https://coderx85.vercel.app",
            },
            { label: "Location", value: config.location },
          ].map((item, i) => (
            <View key={i} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{item.label}</Text>
              {item.href ? (
                <Link href={item.href} style={styles.detailLink}>
                  {item.value}
                </Link>
              ) : (
                <Text style={styles.detailValue}>{item.value}</Text>
              )}
            </View>
          ))}

          {/* TECHNICAL SKILLS */}
          <View style={{ marginTop: 14 }}>
            <SectionHeading title="Technical Skills" />
            {skills.map((category, i) => (
              <View key={i} style={styles.skillRow}>
                <Text style={styles.skillLabel}>{category.title}</Text>
                <Text style={styles.skillValue}>
                  {category.techStack.map((tech) => tech.title).join(", ")}
                </Text>
              </View>
            ))}
          </View>

          {/* EDUCATION */}
          <View style={{ marginTop: 14 }}>
            <SectionHeading title="Education" />
            <Text style={styles.eduTitle}>{education.title}</Text>
            <Text style={styles.eduDuration}>{education.duration}</Text>
            <Text style={styles.eduInstitute}>{education.institute}</Text>
          </View>
        </View>
      </View>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <Text style={styles.footer}>
        Generated from coderx85.vercel.app ·{" "}
        {new Date().toLocaleDateString("en-IN", {
          month: "short",
          year: "numeric",
        })}
      </Text>
    </Page>
  </Document>
);

export default ResumePDF;
