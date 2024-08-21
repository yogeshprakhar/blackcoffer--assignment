import Dashboard from "./components/Dashboard/Dashboard";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="border bg-gray-400 shadow">
        <Sidebar />
      </div>
      <div className="flex flex-1 p-5 bg-blue-200">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
