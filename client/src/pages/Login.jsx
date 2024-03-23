import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import logo from '../assets/ISPSC_LOGO_new.png';

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Add this code before making the /login request
  axios.interceptors.request.use((config) => {
    console.log('Axios request config:', config);
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      console.log('Axios response:', response);
      return response;
    },
    (error) => {
      console.error('Axios response error:', error);
      return Promise.reject(error);
    }
  );

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post(
        '/login',
        {
          email,
          password,
        },
        {
          credentials: 'include',
          withCredentials: true,
        }
      );

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Store the role along with other user data
        localStorage.setItem('role', response.data.user.role);

        setUser(response.data.user);
        toast.success('Login is Successful...');

        console.log('Stored Token:', localStorage.getItem('token'));
        console.log('About to navigate to /dashboard');

        // Log a message after navigating
        navigate('/dashboard');
      } else {
        toast.error(response.data?.error || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during login');
    }
  };

  //
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-full h-full bg-[#dedede] text-black flex justify-center items-center">
          <form
            className="bg-[#7f7f7f] text-center border rounded-lg md:w-[600px] md:h-[420px] sm:w-full sm:h-auto p-9"
            onSubmit={loginUser}
          >
            <img className="mx-auto h-24 w-auto mb-6" src={logo} alt="/" />

            {/* Email Section */}
            <div className="mb-4 flex flex-col items-center">
              <label className="text-white">Email</label>
              <input
                className="w-[400px] h-[40px] rounded-xl bg-[#dedede]-700 p-2 text-center"
                type="email"
                placeholder="Enter email..."
                value={data.email}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            {/* Password Section */}
            <div className="mb-4 flex flex-col items-center">
              <label className="text-white">Password</label>
              <input
                className="w-[400px] h-[40px] rounded-xl bg-[#dedede]-700 p-2 text-center"
                type="password"
                placeholder="Enter password..."
                value={data.password}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            {/* Login Button */}
            <button
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-4"
              type="submit"
            >
              Login
            </button>

            {/* Registration Link */}
            <Link
              to="/register"
              className="border-white text-red-800  hover:text-blue-600 block"
            >
              Register an account...
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
