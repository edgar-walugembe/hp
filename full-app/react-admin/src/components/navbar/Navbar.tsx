import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
        <span>adminpractice</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search_icon" className="icon" />
        <img src="/app.svg" alt="app_icon" className="icon" />
        <img src="/expand.svg" alt="expand_icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification_icon" />
          <span>2</span>
        </div>
        <div className="user">
          <img src="/profile.png" alt="" />
          <span>Joy</span>
        </div>
        <img src="/settings.svg" alt="settings_icon" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
