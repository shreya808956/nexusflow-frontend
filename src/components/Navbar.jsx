
import {
  Search,
  Bell,
  ChevronDown,
  Plus
} from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">
        <div>
          <p className="breadcrumb">Workspace / Overview</p>
          <h2>Dashboard</h2>
        </div>
      </div>

      <div className="navbar-right">

        <button className="search-button">
          <Search size={17} />
          Search
        </button>

        <button className="icon-button">
          <Bell size={19} />
        </button>

        <button className="new-workflow-button">
          <Plus size={17} />
          New Workflow
        </button>

        <div className="navbar-profile">
          <div className="user-avatar">S</div>
          <ChevronDown size={16} />
        </div>

      </div>

    </header>
  );
}

export default Navbar;
