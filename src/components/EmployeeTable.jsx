import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { formatDate } from "../utils/dateFormatter";

const HR_GREEN_LIGHT = "#94ad1857";
const HR_GREEN_DARK = "#5a6f07";

const hrTheme = createTheme({
  palette: {
    primary: { main: HR_GREEN_DARK },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_LIGHT, // normal
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_DARK, // hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: HR_GREEN_LIGHT, // focus
          },
        },
      },
    },
  },
});

export default function EmployeeTable({ rows }) {
  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      // type: "date",
      // valueGetter: (value) => (value ? new Date(value) : null),
      valueFormatter: (params) => {
        formatDate(params.value);
      },
    },
    { field: "department", headerName: "Department", flex: 1 },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      flex: 1,
      // type: "date",
      // valueGetter: (value) => (value ? new Date(value) : null),
      valueFormatter: (params) => {
        formatDate(params.value);
      },
    },
    { field: "street", headerName: "Street", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <ThemeProvider theme={hrTheme}>
      <div style={{ height: 720, width: "100%", padding: "1rem" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          disableRowSelectionOnClick
          showToolbar
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 300 },
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
