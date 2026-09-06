import { useState } from "react";
import { Alert, Button, Card, Form, Input, Radio } from "antd";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setError("");
      setLoading(true);

      const data = await register(values);

      if (data.user.role === "customer") {
        navigate("/customer/dashboard");
      } else if (data.user.role === "provider") {
        navigate("/provider/dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-10">
      <Card
        title="Create QuickServe Account"
        className="w-full max-w-lg shadow-md"
      >
        {error && (
          <Alert message={error} type="error" showIcon className="mb-5" />
        )}

        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            role: "customer",
          }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Enter first name",
                },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Enter last name",
                },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
          </div>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Enter email",
              },
              {
                type: "email",
                message: "Enter valid email",
              },
            ]}
          >
            <Input placeholder="Email address" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Enter phone number",
              },
            ]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Enter password",
              },
              {
                min: 6,
                message: "Password must contain at least 6 characters",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item label="Account Type" name="role">
            <Radio.Group>
              <Radio value="customer">Customer</Radio>

              <Radio value="provider">Service Provider</Radio>
            </Radio.Group>
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Account
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
