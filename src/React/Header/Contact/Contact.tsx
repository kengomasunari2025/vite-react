import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    hira: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", hira: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section className="py-5">
      <form className="px-3 px-md-5" onSubmit={handleSubmit}>
        <div className="card px-1 px-md-5 py-3">
          <div className="container py-1">
            <div className="">お名前(漢字)</div>
            <input
              required
              className="form-control form-control-lg bg-white"
              type="text"
              name="name"
              placeholder="漢字"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="container py-1">
            <div className="">お名前(ひらがな)</div>
            <input
              required
              className="form-control form-control-lg bg-white"
              type="text"
              name="hira"
              placeholder="ひらがな"
              value={formData.hira}
              onChange={handleChange}
            />
          </div>
          <div className="container py-1">
            <div className="">あなたのメールアドレス</div>
            <input
              required
              className="form-control form-control-lg bg-white"
              type="email"
              name="email"
              placeholder="メールアドレス"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="container py-1">
            <div className="">お問合せ内容</div>
            <textarea
              required
              className="form-control form-control-lg bg-white"
              name="message"
              placeholder="お問合せ内容"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center pt-3">
            <div className="d-block">
              <button
                className="btn btn-outline-dark mb-2 bg-dark text-white hover mx-5 px-5 py-2"
                type="submit"
                name="send"
              >
                送信
              </button>
            </div>
          </div>
          {status === "success" && (
            <div className="text-success text-center mt-3">
              メッセージが送信されました。ありがとうございます！
            </div>
          )}
          {status === "error" && (
            <div className="text-danger text-center mt-3">
              メッセージの送信中にエラーが発生しました。もう一度お試しください。
            </div>
          )}
        </div>
      </form>
    </section>
  );
};
export default Contact;
