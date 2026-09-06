import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProviderLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/provider/dashboard"
            className="text-2xl font-bold text-green-600"
          >
            QuickServe Provider
          </Link>

          <div className="flex items-center gap-5">
            <span className="text-gray-700">Hi, {user?.firstName}</span>

            <button
              onClick={logout}
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProviderLayout;
