import { StyleSheet } from "@react-pdf/renderer";
// import { ACCENT } from "./ResumePDF";

export const C = {
  accent: "#C44536",
  accentLight: "#FBEAE8",
  black: "#1a1a1a",
  darkGray: "#2d2d2d",
  medGray: "#555555",
  lightGray: "#999999",
  veryLightGray: "#e5e5e5",
  border: "#dddddd",
  bg: "#ffffff",
  pillBg: "#f2f2f2",
  progressTrack: "#e8e8e8",
};

export const styles = StyleSheet.create({
  /* ── Page ── */
  page: {
    fontFamily: "Helvetica",
    fontSize: 8,
    color: C.black,
    backgroundColor: C.bg,
    lineHeight: 1.4,
  },

  /* ── Two-column body ── */
  body: {
    flexDirection: "row",
    flex: 1,
  },
  leftColumn: {
    width: "62%",
    paddingTop: 20,
    paddingLeft: 32,
    paddingRight: 20,
    paddingBottom: 30,
  },
  rightColumn: {
    width: "38%",
    backgroundColor: "#FAFAFA",
    paddingTop: 20,
    paddingLeft: 18,
    paddingRight: 24,
    paddingBottom: 30,
    borderLeftWidth: 1,
    borderLeftColor: C.veryLightGray,
  },

  /* ── Header (full width, top of page) ── */
  header: {
    paddingHorizontal: 32,
    paddingTop: 28,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: C.accent,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: C.black,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    color: C.accent,
    fontFamily: "Helvetica",
    marginTop: 8,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 8,
    alignItems: "center",
  },
  contactItem: {
    fontSize: 6,
    color: C.medGray,
  },
  contactLink: {
    fontSize: 6,
    color: C.medGray,
    textDecoration: "none",
  },
  contactSep: {
    fontSize: 6,
    paddingHorizontal: 2,
    color: C.lightGray,
    marginHorizontal: 3,
  },

  /* ── Section headings ── */
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    margin: 2,
  },
  sectionIcon: {
    fontSize: 7,
    color: C.accent,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: C.veryLightGray,
    marginBottom: 2,
  },

  /* ── Profile ── */
  profileText: {
    fontSize: 9,
    color: C.darkGray,
    lineHeight: 1.6,
    marginBottom: 14,
  },

  /* ── Experience ── */
  expItem: {
    marginBottom: 12,
    paddingLeft: 12,
  },
  expBullet: {
    position: "absolute",
    left: 0,
    top: 3,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.accent,
  },
  expTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  expTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.black,
    maxWidth: "60%",
  },
  expDateInfo: {
    fontSize: 8,
    color: C.lightGray,
    textAlign: "right",
  },
  expCompany: {
    fontSize: 9,
    fontFamily: "Helvetica-Oblique",
    color: C.accent,
    marginBottom: 3,
  },
  expDesc: {
    fontSize: 8.5,
    color: C.medGray,
    lineHeight: 1.55,
    marginBottom: 4,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  techPill: {
    fontSize: 7,
    color: C.medGray,
    backgroundColor: C.pillBg,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderColor: C.border,
  },

  /* ── Projects ── */
  projItem: {
    marginBottom: 10,
    paddingLeft: 12,
  },
  projBullet: {
    position: "absolute",
    left: 0,
    top: 3,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.accent,
  },
  projTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  projTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.black,
  },
  projLinksRow: {
    flexDirection: "row",
    gap: 6,
  },
  projLink: {
    fontSize: 7.5,
    color: C.accent,
    textDecoration: "none",
  },
  projDesc: {
    fontSize: 8.5,
    color: C.medGray,
    lineHeight: 1.5,
    marginBottom: 3,
  },

  /* ── Right column: Personal Details ── */
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: C.veryLightGray,
  },
  detailLabel: {
    fontSize: 8.5,
    color: C.lightGray,
  },
  detailValue: {
    fontSize: 8.5,
    color: C.darkGray,
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
  },
  detailLink: {
    fontSize: 8.5,
    color: C.accent,
    fontFamily: "Helvetica-Bold",
    textDecoration: "none",
    textAlign: "right",
  },

  /* ── Right column: Skills with progress bars ── */
  skillSection: {
    marginBottom: 10,
    display: "flex",
    gap: 2,
    flexDirection: "row",
  },
  skillCategoryName: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: C.darkGray,
    flexDirection: "row",
    alignItems: "center",
  },
  skillCategoryIcon: {
    fontSize: 8,
    color: C.accent,
    marginRight: 4,
  },
  skillLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.darkGray,
    width: 75,
  },
  skillValue: {
    fontSize: 8,
    color: C.black,
    flex: 1,
    lineHeight: 1.5,
  },
  skillRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "flex-start",
    marginBottom: 5,
  },
  skillName: {
    fontSize: 8,
    color: C.medGray,
    width: 62,
  },

  /* ── Right column: Education ── */
  eduTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: C.black,
    marginBottom: 1,
  },
  eduDuration: {
    fontSize: 8,
    color: C.lightGray,
    marginBottom: 2,
  },
  eduInstitute: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Oblique",
    color: C.medGray,
  },

  /* ── Footer ── */
  footer: {
    position: "absolute",
    bottom: 10,
    left: 32,
    right: 24,
    textAlign: "center",
    fontSize: 7,
    color: C.lightGray,
  },
});
