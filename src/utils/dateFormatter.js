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

export const formatYMDToMDY = (dateStr) => {
  if (!dateStr) return "";

  const dateSplitted = dateStr.split("-");
  if (dateSplitted.length !== 3) return "Invalid date.";
  return `${dateSplitted[1]}/${dateSplitted[2]}/${dateSplitted[0]}`;
};
