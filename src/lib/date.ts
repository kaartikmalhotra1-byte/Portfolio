const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function ordinal(day: number) {
  if (day % 10 === 1 && day !== 11) return `${day}st`;
  if (day % 10 === 2 && day !== 12) return `${day}nd`;
  if (day % 10 === 3 && day !== 13) return `${day}rd`;
  return `${day}th`;
}

/** Formats an ISO date ("2026-11-14") as "14th Nov '26". */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${ordinal(day)} ${MONTHS[month - 1]} '${String(year).slice(2)}`;
}
