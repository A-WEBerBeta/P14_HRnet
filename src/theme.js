import { createTheme } from "@mui/material/styles";

// Project color palette
export const HR_GREEN_LIGHT = "#94ad1857";
export const HR_GREEN_DARK = "#5a6f07";

/**
 * Custom MUI theme for the HRnet project.
 *
 * Includes:
 * - Primary/secondary color palette
 * - Style ovverides for OutlinedInput (hover & focus behavior)
 */
const hrTheme = createTheme({
  palette: {
    primary: {
      main: HR_GREEN_DARK, // used for primary buttons, focus states, etc.
    },
    secondary: {
      main: HR_GREEN_LIGHT, // accent / subtle highlight color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          /**
           * Custom border behavior:
           * - Default border : keep MUI's native gray
           * - Hover: dark green
           * - Focus: light green
           */
          "& .MuiOutlinedInput-notchedOutline": {},
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_DARK,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_LIGHT,
          },
        },
      },
    },
  },
});

export default hrTheme;
