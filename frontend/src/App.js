import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailLogin from "./Pages/EmailLogin";
import ProfilePage from "./Pages/ProfilePage";
import AllConnections from "./Pages/AllConnections";
import ConnectionRequest from "./Pages/ConnectionRequest";
import { styled, Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed />
            <Rightbar />
          </Stack>
        </Box>
        <div>
          <Routes>
            <Route path="/" element={<EmailLogin/>}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/connections" element={<AllConnections/>}></Route>
            <Route path="/connection-request" element={<ConnectionRequest />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}
export default App;
