
import {
  LayoutDashboard,
  Workflow,
  Activity,
  Settings,
  HelpCircle,
  Zap
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">
          <Zap size={23} />
        </div>
        <h2>NexusFlow</h2>
      </div>

      <div className="sidebar-menu">
        <p className="menu-title">WORKSPACE</p>

        <div className="menu-item active">
          <LayoutDashboard size={19} />
          <span>Overview</span>
        </div>

        <div className="menu-item">
          <Workflow size={19} />
          <span>Workflows</span>
        </div>

        <div className="menu-item">
          <Activity size={19} />
          <span>Activity</span>
        </div>

        <p className="menu-title">PREFERENCES</p>

        <div className="menu-item">
          <Settings size={19} />
          <span>Settings</span>
        </div>

        <div className="menu-item">
          <HelpCircle size={19} />
          <span>Help & Support</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="user-avatar">S</div>
        <div>
          <h4>Shreya</h4>
          <p>Frontend Developer</p>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
