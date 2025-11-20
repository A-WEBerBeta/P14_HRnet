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
