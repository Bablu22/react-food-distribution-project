import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddFood from "./components/AddFood/AddFood";
import AddStudent from "./components/AddStudent/AddStudent";
import StudentTable from "./components/AllStudents/StudentTable";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/addFood" element={<AddFood />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/students" element={<StudentTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
