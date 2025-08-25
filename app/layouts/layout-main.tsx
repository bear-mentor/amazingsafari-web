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
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex items-center gap-4">
          <img
            src="/logo.svg"
            alt="Amazing Safari Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-bold text-gray-800">Amazing Safari</h1>
        </div>
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
