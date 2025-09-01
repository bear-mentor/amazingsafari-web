import { Link, Outlet } from "react-router";
import type { Route } from "./+types/layout-main";
import { getSession } from "~/sessions";
import type { UserAuthMe } from "~/modules/user/type";

const navigationLinks = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/register", text: "Register" },
  { to: "/login", text: "Login" },
  { to: "/dashboard", text: "Dashboard" },
];

export async function loader({ request }: Route.ClientLoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/me`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const user: UserAuthMe = await response.json();
  return { user };
}

export default function LayoutMain({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;

  return (
    <div className="flex min-h-screen flex-col">
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

          {user.fullName && (
            <li>
              <div>
                <b>{user.fullName}</b>
              </div>
            </li>
          )}
        </ul>
      </nav>

      <main className="flex-[1]">
        <Outlet />
      </main>

      <footer className="p-2 bg-green-100">
        <p>&copy; {new Date().getFullYear()} Amazing Safari</p>
      </footer>
    </div>
  );
}
