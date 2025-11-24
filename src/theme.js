import { createTheme } from "@mui/material/styles";

export const HR_GREEN_LIGHT = "#94ad1857";
export const HR_GREEN_DARK = "#5a6f07";

const hrTheme = createTheme({
  palette: {
    primary: {
      main: HR_GREEN_DARK, // couleur principale (boutons, etc.)
    },
    secondary: {
      main: HR_GREEN_LIGHT, // accent
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // On laisse MUI gérer la bordure par défaut (gris)
          "& .MuiOutlinedInput-notchedOutline": {
            // pas de borderColor ici
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_DARK, // hover = dark
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_LIGHT, // focus = light
          },
        },
      },
    },
  },
});

export default hrTheme;
