import "@aweb1112/hrnet-modal/dist/hrnet-modal.css";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { enUS } from "date-fns/locale";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/index.js";
import hrTheme from "./theme.js";

/**
 * Apllication entry point
 *
 * Wraps the entire app with:
 * - React StrictMode (dev warnings)
 * - MUI theme provider
 * - MUI date localization (date-fns)
 * - Redux store provider
 * - React Router navigation context
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={hrTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
