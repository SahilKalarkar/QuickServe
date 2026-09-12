import {
  Plus,
  ClipboardList,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProviderDashboard = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Provider Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Provider Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Manage your services and track their approval status.
            </p>
          </div>

          <Link
            to="/provider/services/create"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <Plus size={20} />
            Add New Service
          </Link>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Services</p>

                <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <ClipboardList size={24} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>

                <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600">
                <Clock size={24} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approved</p>

                <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
              </div>

              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <CheckCircle2 size={24} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rejected</p>

                <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
              </div>

              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <XCircle size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Link
            to="/provider/services/create"
            className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              <Plus size={24} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              List a New Service
            </h2>

            <p className="mt-2 text-gray-500">
              Add your professional service and submit it for QuickServe admin
              approval.
            </p>
          </Link>

          <Link
            to="/provider/services"
            className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
              <ClipboardList size={24} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              My Services
            </h2>

            <p className="mt-2 text-gray-500">
              View your submitted services and check their approval status.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProviderDashboard;
