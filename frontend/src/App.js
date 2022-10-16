import { Routes, Route, Navigate } from "react-router-dom";
import EmailLogin from "./Pages/EmailLogin";
import  Dashboard  from './Pages/Dashboard';
import ProfilePage from "./Pages/ProfilePage";
import AllConnections from "./Pages/AllConnections";
import ConnectionRequest from "./Pages/ConnectionRequest";
import { createTheme, ThemeProvider } from "@mui/material";
// import { theme } from "./Theme/theme";
import { useState } from "react";
import OtpLogin from "./Pages/OtpLogin";
import {Register} from "./Pages/Register";
import Allsearch from "./Pages/AllSearch"
import ConnectionProfile from "./Pages/ConnectionProfile"
import { AuthProvider } from "./Components/Auth";
import { RequireAuth } from "./Components/RequireAuth";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });
  // console.log("inside app.js")

  return (
    <AuthProvider>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <div>
            <Routes>
              <Route path="/" element={<EmailLogin/>}></Route>
              <Route path="/dashboard" element={<RequireAuth><Dashboard setMode={setMode} mode={mode}/></RequireAuth>}></Route>
              <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>}></Route>
              <Route path="/connections" element={<AllConnections/>}></Route>
              <Route path="/connection-request" element={<ConnectionRequest />}></Route>
              <Route path="/otp" element={<OtpLogin />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/search" element={<Allsearch/>}></Route>
              <Route path="/connectionprofile" element={<ConnectionProfile/>}></Route>
              <Route path="/redirect" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </ThemeProvider>
      </div>
    </AuthProvider>
  );
}
export default App;
