import "./App.css";
import { useState } from "react"
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { useTheme } from "./context/ThemeContext";
import { PageRoutes } from "./routes/routes";


function App() {
  const { theme } = useTheme();
  const [ham, setHam] = useState(false);
  return (
    <div className={`App ${theme}`}>
      <Header ham={ham} setHam={setHam} />
      <div className="main">
        <Sidebar />
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
