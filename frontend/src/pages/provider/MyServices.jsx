import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus,
  ClipboardList,
  Clock3,
  CheckCircle2,
  XCircle,
  Ban,
  ArrowLeft,
} from "lucide-react";

import { getMyProviderServices } from "../../services/providerService";

const statusConfig = {
  pending: {
    label: "Pending",
    className: "bg-yellow-50 text-yellow-700",
    icon: Clock3,
  },

  approved: {
    label: "Approved",
    className: "bg-green-50 text-green-700",
    icon: CheckCircle2,
  },

  rejected: {
    label: "Rejected",
    className: "bg-red-50 text-red-700",
    icon: XCircle,
  },

  cancelled: {
    label: "Cancelled",
    className: "bg-gray-100 text-gray-600",
    icon: Ban,
  },
};

const MyServices = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getMyProviderServices();
      setServices(data);
    } catch (error) {
      console.error(error);

      setError(error.message || "Unable to load your services.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadServices();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadServices]);

  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <button
              type="button"
              onClick={() => navigate("/provider/dashboard")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-blue-600"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </button>

            <h1 className="text-3xl font-bold text-gray-900">My Services</h1>

            <p className="mt-2 text-gray-500">
              Manage your submitted services and approval status.
            </p>
          </div>

          <Link
            to="/provider/services/create"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus size={19} />
            Add New Service
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-52 animate-pulse rounded-2xl bg-white"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && services.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ClipboardList size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              No services listed yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-gray-500">
              List your first service and start the QuickServe approval process.
            </p>

            <Link
              to="/provider/services/create"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Your First Service
            </Link>
          </div>
        )}

        {/* Services */}
        {!loading && !error && services.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const config =
                statusConfig[service.status] || statusConfig.pending;

              const StatusIcon = config.icon;

              return (
                <div
                  key={service._id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-blue-600">
                        {service.category?.name || "Category"}
                      </p>

                      <h2 className="mt-2 truncate text-xl font-bold text-gray-900">
                        {service.serviceName}
                      </h2>
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${config.className}`}
                    >
                      <StatusIcon size={14} />

                      {config.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-5">
                    <div>
                      <p className="text-xs text-gray-400">Service Price</p>

                      <p className="mt-1 text-xl font-bold text-gray-900">
                        ₹{Number(service.price).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-400">Service Area</p>

                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {service.serviceArea}
                      </p>
                    </div>
                  </div>

                  {/* Rejection reason */}
                  {service.status === "rejected" && service.rejectionReason && (
                    <div className="mt-5 rounded-xl bg-red-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-red-500">
                        Admin Reason
                      </p>

                      <p className="mt-1 text-sm leading-6 text-red-700">
                        {service.rejectionReason}
                      </p>
                    </div>
                  )}

                  {/* Cancellation reason */}
                  {service.status === "cancelled" &&
                    service.cancellationReason && (
                      <div className="mt-5 rounded-xl bg-gray-100 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                          Cancellation Reason
                        </p>

                        <p className="mt-1 text-sm leading-6 text-gray-700">
                          {service.cancellationReason}
                        </p>
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyServices;
