import { Route, Routes } from "react-router-dom";
import AppLayout from "@components/appLayout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<AppLayout />}></Route>
    </Routes>
  );
}

export default App;
