import { Route, Routes } from "react-router-dom";
import {
  Header,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinid" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
