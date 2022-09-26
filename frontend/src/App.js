import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailLogin from "./Pages/EmailLogin";
import ProfilePage from "./Pages/ProfilePage";
import AllConnections from "./Pages/AllConnections";
import ConnectionRequest from "./Pages/ConnectionRequest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailLogin/>}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/connections" element={<AllConnections/>}></Route>
          <Route path="/connection-request" element={<ConnectionRequest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
