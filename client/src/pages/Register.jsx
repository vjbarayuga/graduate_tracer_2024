import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const { username, email, password } = data;

    try {
      const response = await axios.post('/register', {
        username,
        email,
        password,
      });

      if (response.data && response.data.success) {
        setData({
          username: '',
          email: '',
          password: '',
          role: 'user', // Assign a default role to new users
        });
        toast.success('Registration is Successful...');
        navigate('/login');
      } else {
        toast.error(response.data?.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-[100%] h-[100%] bg-[#dedede] text-black flex justify-center items-center">
          <form
            className="bg-[#7f7f7f] text-center border rounded-lg md:w-[600px] md:h-[400px] sm:w-full sm:h-auto p-9"
            onSubmit={registerUser}
          >
            <label className="text-white">Username</label>
            <br />
            <input
              className="w-[400px] h-[40px] rounded-xl bg-[#dedede]-700 p-2 text-center"
              type="text"
              placeholder="Enter name..."
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <br />
            <br />
            <label className="text-white">Email</label>
            <br />
            <input
              className="w-[400px] h-[40px] rounded-xl bg-[#dedede]-700 p-2 text-center"
              type="email"
              placeholder="Enter email..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br />
            <br />
            <label className="text-white">Password</label>
            <br />
            <input
              className="w-[400px] h-[40px] rounded-xl bg-[#dedede]-700 p-2 text-center"
              type="password"
              placeholder="Enter password..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <br />
            <br />
            <button
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
            >
              Register
            </button>

            {/* Return to Login Link */}
            <p className="flex cursor-pointer w-full justify-center mt-4 text-sm">
              Already have an account?{' '}
              <span
                className="border-white text-red-800  hover:text-blue-600 block"
                onClick={() => navigate('/login')}
              >
                Login here
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
