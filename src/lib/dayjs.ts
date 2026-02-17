export const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const formatDate = (date: Date) =>
  `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;

export const calcDuration = (start: Date, end: Date) => {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months < 1) months = 1;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years > 0 && rem > 0)
    return `${years} yr${years > 1 ? "s" : ""} ${rem} mo${rem > 1 ? "s" : ""}`;
  if (years > 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${rem} mo${rem > 1 ? "s" : ""}`;
};
