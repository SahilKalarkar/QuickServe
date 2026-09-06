import { Card } from "antd";
import { useAuth } from "../../context/AuthContext";

const CustomerDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Customer Dashboard</h1>

      <p className="mt-2 text-gray-600">Welcome back, {user?.firstName}!</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card title="Bookings">
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-500">Total bookings</p>
        </Card>

        <Card title="Active Service">
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-500">Active bookings</p>
        </Card>

        <Card title="Completed">
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-500">Completed services</p>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDashboard;
