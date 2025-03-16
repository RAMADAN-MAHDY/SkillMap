import { useState } from "react";
import PropTypes from "prop-types";

const RegisterForm = ({ onLogin }) => {
    const [error, setError] = useState("");                   
    const [success, setSuccess] = useState("");
    
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    const finalData = {
      name: `${formData.first_name} ${formData.last_name}`.trim(),
      email: formData.email,
      password: formData.password,
    };

    console.log("Data Sent:", finalData);
    // هنا ممكن تستخدم fetch أو axios لإرسال البيانات للباك إند

    try {
        const res = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          throw new Error(data.message || "Registration failed");
        }
  
        setSuccess("Account created successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        });
      } catch (err) {
        setError(err.message);
      }
  };

  return (
    <div className="h-fit mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 shadow-lg rounded-4xl bg-white">
      <h1 className="text-black text-2xl font-semibold">Create a new account</h1>
      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
        {/* الاسم الأول */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        {/* الاسم الأخير */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        {/* البريد الإلكتروني */}
        <div className="col-span-6">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        {/* كلمة المرور */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        {/* تأكيد كلمة المرور */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
            Password Confirmation
          </label>
          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        {/* زر التسجيل */}
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            type="submit"
            className="inline-block shrink-0 rounded-md border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary cursor-pointer"
          >
            Create an account
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <button type="button" onClick={onLogin} className="ms-2 underline cursor-pointer">
              Log in
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default RegisterForm;
