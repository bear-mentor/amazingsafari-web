import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <div>
      <nav>
        <h1>Amazing Safari</h1>
        <div>
          <img src="/logo.svg" alt="Amazing Safari Logo" />
        </div>
      </nav>

      <Outlet />

      <footer>
        <p>&copy; {new Date().getFullYear()} Amazing Safari</p>
      </footer>
    </div>
  );
}
