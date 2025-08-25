import { Link, Outlet } from "react-router";

const navigationLinks = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/register", text: "Register" },
  { to: "/login", text: "Login" },
  { to: "/dashboard", text: "Dashboard" },
];

export default function LayoutMain() {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.svg" alt="Amazing Safari Logo" className="size-20" />
          <h1 className="hidden">Amazing Safari</h1>
        </Link>
        <ul className="flex gap-6">
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.to}>
              <Link
                to={navigationLink.to}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition-colors"
              >
                {navigationLink.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />

      <footer>
        <p>&copy; {new Date().getFullYear()} Amazing Safari</p>
      </footer>
    </div>
  );
}
