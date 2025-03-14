import PropTypes from "prop-types";

const RegisterForm = ({ onLogin }) => {
  return (
    <div className="h-fit mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 shadow-lg rounded-4xl bg-white">
      <h1 className="text-black text-2xl font-semibold">Create a new account</h1>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>
        {/* w-full border-2 border-gray-200 rounded-2xl p-4 text-sm shadow-md focus:outline-none */}

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>

          <input
            type="text"
            id="LastName"
            name="last_name"
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
            Password Confirmation
          </label>

          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md border-gray-200 bg-white shadow-xs"
            />

            <span className="text-sm text-gray-700">
              I want to receive emails about events, product updates and company announcements.
            </span>
          </label>
        </div>

        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <a href="#" className="text-gray-700 underline mx-1">
              terms and conditions
            </a>
            and
            <a href="#" className="text-gray-700 underline mx-1">
              privacy policy
            </a>
            .
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary cursor-pointer">
            Create an account
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <button type="button" onClick={onLogin} className="ms-2 underline cursor-pointer">
              Log in
            </button>
            .
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
