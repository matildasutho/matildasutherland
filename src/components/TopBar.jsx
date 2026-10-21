const TopBar = ({ children }) => (
  <header className="topbar">
    <h1>
      <a href="/">Matilda Sutherland</a>
    </h1>
    <nav>{children}</nav>
  </header>
);

export default TopBar;
