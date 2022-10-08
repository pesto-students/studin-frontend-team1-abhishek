import { Routes, Route } from "react-router-dom";
import EmailLogin from "./Pages/EmailLogin";
import  Dashboard  from './Pages/Dashboard';
import ProfilePage from "./Pages/ProfilePage";
import AllConnections from "./Pages/AllConnections";
import ConnectionRequest from "./Pages/ConnectionRequest";
import { createTheme, ThemeProvider } from "@mui/material";
// import { theme } from "./Theme/theme";
import { useState } from "react";
import OtpLogin from "./Pages/OtpLogin";
import Register from "./Pages/Register";
import Allsearch from "./Pages/AllSearch"
import ConnectionProfile from "./Pages/ConnectionProfile"

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });
  console.log("inside app.js")

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <div>
          <Routes>
            <Route path="/" element={<EmailLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard setMode={setMode} mode={mode}/>}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/connections" element={<AllConnections/>}></Route>
            <Route path="/connection-request" element={<ConnectionRequest />}></Route>
            <Route path="/otp" element={<OtpLogin />}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/search" element={<Allsearch/>}></Route>
            <Route path="/connectionprofile" element={<ConnectionProfile/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}
export default App;
