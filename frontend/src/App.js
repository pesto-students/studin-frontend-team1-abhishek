import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailLogin from "./Pages/EmailLogin";
import ProfilePage from "./Pages/ProfilePage";
import AllConnections from "./Pages/AllConnections";
import ConnectionRequest from "./Pages/ConnectionRequest";
import LandingPage from "./Pages/LandingPage"
import OtpLogin from "./Pages/OtpLogin";
import Register from "./Pages/Register";
import Allsearch from "./Pages/AllSearch"
import ConnectionProfile from "./Pages/ConnectionProfile"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailLogin/>}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/connections" element={<AllConnections/>}></Route>
          <Route path="/connection-request" element={<ConnectionRequest />}></Route>
          <Route path="/otp" element={<OtpLogin />}></Route>
          <Route path="/landingpage" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/search" element={<Allsearch/>}></Route>
          <Route path="/connectionprofile" element={<ConnectionProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
