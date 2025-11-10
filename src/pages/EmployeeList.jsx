import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

export default function EmployeeList() {
  const rows = useSelector((state) => state.employees.items);

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      type: "date",
      valueGetter: (value) => (value ? new Date(value) : null),
    },
    { field: "department", headerName: "Department", flex: 1 },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      flex: 1,
      type: "date",
      valueGetter: (value) => (value ? new Date(value) : null),
    },
    { field: "street", headerName: "Street", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <>
      <h2>Current Employees</h2>
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

      <Footer />
    </>
  );
}
