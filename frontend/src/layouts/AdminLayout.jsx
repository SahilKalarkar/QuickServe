import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/admin/dashboard" className="text-2xl font-bold">
            QuickServe Admin
          </Link>

          <div className="flex items-center gap-5">
            <span>
              {user?.firstName} {user?.lastName}
            </span>

            <button
              onClick={logout}
              className="rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600"
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

export default AdminLayout;
