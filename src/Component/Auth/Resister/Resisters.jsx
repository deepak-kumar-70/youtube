import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const Resisters = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });
  const [showPassword,setShowPassword]=useState(true)
  const [fileName, setFileName] = useState('Select File');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name);
    } else {
      setFileName('Select File');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.mobile.trim()) {
      validationErrors.mobile = 'mobile number is required';
    } else if (formData.mobile.trim().length < 10) {
      validationErrors.mobile = 'mobile number must be at least 10 characters';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.trim().length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.confirmPassword.trim() !== formData.password.trim()) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        setLoading(true);

      
        const formDataObject = new FormData();

      
        formDataObject.append('name', formData.name);
        formDataObject.append('email', formData.email);
        formDataObject.append('password', formData.password);
        formDataObject.append('confirmPassword', formData.confirmPassword);
        formDataObject.append('mobile', formData.mobile);

      
        const fileInput = document.getElementById('file-input');
        if (fileInput.files.length > 0) {
          formDataObject.append('avatar', fileInput.files[0]);
        }

      
        const response = await fetch('http://localhost:5000/Resister', {
          method: 'POST',
          body: formDataObject,
        });

        if (response.ok) {
          console.log('Registration successful:', formData);
        } else {
          console.error('Registration failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during registration:', error);
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <div className="w-full h-fit-content pt-3 pb-7 bg-neutral-300 flex items-center justify-center flex-col">
      <div>
        <h1 className="font-extrabold text-2xl">Sign up for an account</h1>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <input
              type={`${showPassword?'password':'text'}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`relative form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${errors.password ? 'border-red-500' : ''}`}
              />
              <div
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-[39%] top-[50.9%] z-50 cursor-pointer text-neutral-600 ">{showPassword?<IoIosEyeOff/>:<IoMdEye/>}</div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <input
              type={`${showPassword?'password':'text'}`}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`relavtive form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${errors.confirmPassword ? 'border-red-500' : ''}`}
              />
              <div
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-[39%] top-[62.5%] text-neutral-600 z-50 cursor-pointer mb-8 ">{showPassword?<IoIosEyeOff/>:<IoMdEye/>}</div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Avatar
              </span>
              <label htmlFor="file-input" className="cursor-pointer">
                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className={`form-input overflow-hidden px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${errors.avatar ? 'border-red-500' : ''}`}>
                  {fileName}
                </span>
              </label>
              {errors.avatar && (
                <p className="text-red-500 text-sm mt-1">{errors.avatar}</p>
              )}
            </div>
            <div>
              <button
                className={`inline-flex w-full justify-center rounded-md px-4 py-2 text-white bg-[#0284C7] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:outline-offset-0 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>

          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>Already have an account? </div>
            <div className="underline cursor-pointer">
              <span>
                <Link to="/Login">Login</Link>
              </span>
              <span className="ml-2 text-blue-700">
                <Link to="/">skip</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resisters;
