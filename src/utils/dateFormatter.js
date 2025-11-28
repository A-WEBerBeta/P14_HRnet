/**
 * Convert a date value into a YYYY-MM-DD string.
 *
 * Steps:
 * - Create a JS Date object from the input
 * - Format it as US locale (MM/DD/YYYY)
 * - Rearrange to YYYY-MM-DD
 */
export const formatDate = (value) => {
  if (!value) return "";

  const date = new Date(value);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return date
    .toLocaleDateString("en-US", options)
    .split("/")
    .reverse()
    .join("-");
};

/**
 * Convert a YYYY-MM-DD string to MM/DD/YYYY.
 * Used for displaying stored dates back into date pickers or UI components.
 */
export const formatYMDToMDY = (dateStr) => {
  if (!dateStr) return "";

  const dateSplitted = dateStr.split("-");
  if (dateSplitted.length !== 3) return "Invalid date.";
  return `${dateSplitted[1]}/${dateSplitted[2]}/${dateSplitted[0]}`;
};
