import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

  import 'react-toastify/dist/ReactToastify.css';
const AuthForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const notify = () => toast('Login succefull ');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 
  const [showPassword,setShowPassword]=useState(true)
  const navigate = useNavigate();
 if(loading){
  return <div className="absolute w-full h-screen flex justify-center items-center"><Loader/></div>
 }
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
  const mangeReload=()=>{
    setTimeout(()=>{
      
      navigate('/');
      window.location.reload();
    },1000)
  
  }
  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        localStorage.setItem("token", data.token);
       
       
        notify()
        mangeReload()
        
      } else {
        console.error("Login failed:", data.message);

        setErrors({
          ...errors,
          login: data.message,
        });
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleLogin();
    }
  };

  return (
    <div className="w-full h-screen bg-neutral-300 flex items-center justify-center flex-col">
   <div className="w-full absolute flex justify-center h-[100px] inset-0"> <ToastContainer /></div>
      <div>
        <h1 className="font-extrabold text-2xl">Sign in to your account</h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4 ">
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
                className={` relative form-input px-4 block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <div
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-[39%] top-[53.5%]  z-50 cursor-pointer text-neutral-600 ">{showPassword?<IoIosEyeOff/>:<IoMdEye/>}</div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <button
                className="inline-flex w-full justify-center rounded-md px-4 py-2 text-white bg-[#0284C7] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:outline-offset-0"
                type="submit"
                disabled={loading} 
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>New to DevTube</div>
            <div className="underline cursor-pointer">
              <Link to="/Resister">Create an account</Link>
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

export default AuthForm;
