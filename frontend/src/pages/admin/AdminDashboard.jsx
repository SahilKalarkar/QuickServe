import { Card } from "antd";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <p className="mt-2 text-gray-600">Welcome, {user?.firstName}!</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card title="Customers">
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card title="Providers">
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card title="Pending Services">
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card title="Bookings">
          <p className="text-3xl font-bold">0</p>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
