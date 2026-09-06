import { Card, Form, Input, Button } from "antd";

const Contact = () => {
  const handleSubmit = (values) => {
    console.log("Contact form:", values);
  };

  return (
    <section className="min-h-[70vh] bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">GET IN TOUCH</p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Contact QuickServe
          </h1>

          <p className="mt-4 text-gray-600">
            Have a question or need help? Send us a message.
          </p>
        </div>

        <Card>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input placeholder="Your email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please enter your message",
                },
              ]}
            >
              <Input.TextArea rows={5} placeholder="How can we help?" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Send Message
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
