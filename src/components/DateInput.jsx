import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { enUS } from "date-fns/locale";

const HR_GREEN = "#94ad1857";
const HR_GREEN_HOVER = "#5a6f07";

const hrTheme = createTheme({
  palette: {
    primary: {
      main: HR_GREEN,
    },
    secondary: {
      main: HR_GREEN_HOVER,
    },
  },
});

export default function DateInput({ label, value, onChange }) {
  return (
    <ThemeProvider theme={hrTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
        <DatePicker
          label={label}
          value={value ? new Date(value) : null}
          onChange={onChange}
          sx={{
            "& .MuiInputLabel-root.Mui-focused": {
              color: HR_GREEN_HOVER,
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
