// components/LoginForm.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    let formIsValid = true;
    if (!formData.identifier) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        identifier: 'Mobile number or email is required',
      }));
      formIsValid = false;
    }
    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      formIsValid = false;
    }

    if (formIsValid) {
      // Handle your login logic here (e.g., API call)
      console.log('Form submitted with:', formData);
      // Reset form fields
      setFormData({
        identifier: '',
        password: '',
      });
    }
    router.push('#home');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Mobile/Email field */}
        <div className="mb-4">
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
            Mobile number or Email
          </label>
          <input
            type="text"
            id="identifier"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.identifier ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.identifier && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errors.identifier}
            </p>
          )}
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600" id="password-error">
              {errors.password}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
