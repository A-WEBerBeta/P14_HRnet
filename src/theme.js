import { createTheme } from "@mui/material/styles";

const HR_GREEN_LIGHT = "#94ad1857";
const HR_GREEN_DARK = "#5a6f07";

export const hrTheme = createTheme({
  palette: {
    primary: {
      main: HR_GREEN_LIGHT,
    },
    secondary: {
      main: HR_GREEN_DARK,
    },
  },
});
