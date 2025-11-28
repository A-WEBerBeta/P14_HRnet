import { DataGrid } from "@mui/x-data-grid";
import { formatYMDToMDY } from "../utils/dateFormatter";

/**
 * EmployeeTable
 *
 * Displays the list of employees using MUI's DataGrid.
 * Accepts an array of employee objects as `rows`.
 *
 * Handles:
 * - Column definition
 * - Date formatting for display
 * - Pagination defaults
 * - Quick filter search bar
 */
export default function EmployeeTable({ rows }) {
  // Table columns definition
  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,

      // Format stored "YYYY-MM-DD" into "MM/DD/YYYY"
      valueFormatter: (params) => formatYMDToMDY(params),
    },
    { field: "department", headerName: "Department", flex: 1 },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      flex: 1,
      valueFormatter: (params) => formatYMDToMDY(params),
    },
    { field: "street", headerName: "Street", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
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
  );
}
