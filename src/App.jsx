import WorkflowEditor from "./pages/WorkflowEditor";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      <Sidebar />

      <main className="main-container">

        <Navbar />

        <WorkflowEditor />

      </main>

    </div>
  );
}

export default App;
