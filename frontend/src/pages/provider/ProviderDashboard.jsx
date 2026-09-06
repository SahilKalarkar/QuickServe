import { Card } from "antd";
import { useAuth } from "../../context/AuthContext";

const ProviderDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Provider Dashboard</h1>

      <p className="mt-2 text-gray-600">Welcome, {user?.firstName}!</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card title="My Services">
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-500">Listed services</p>
        </Card>

        <Card title="Bookings">
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-500">Assigned bookings</p>
        </Card>

        <Card title="Earnings">
          <p className="text-3xl font-bold">₹0</p>
          <p className="text-gray-500">Total earnings</p>
        </Card>
      </div>
    </div>
  );
};

export default ProviderDashboard;
