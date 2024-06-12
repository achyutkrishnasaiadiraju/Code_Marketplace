import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bms-logo.svg';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
		toast.error('Passwords do not match');
      return;
    }

    const payload = { id: uuidv4(), name, email, password };

    try {
      const response = await axios.post(
        'https://hqwt8yfq61.execute-api.us-east-1.amazonaws.com/Dev/users2',
        payload,
        {
          headers: {
            'x-api-key': '7q5JIiJ7mz2m6fGBkU4SE6iTyhYbBTtb2B3ooQ49',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.statusCode == 201) {
		toast.success('Registration successful!')
      } else {
		console.log('Rajesh', response)
		toast.error(`Registration failed: ${response.data.error}`)
      }
    } catch (error) {
		toast.error(`Registration failed: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center align-middle'>
      <div className='w-full max-w-sm p-6 m-auto bg-background rounded-lg shadow-md'>
        <div className='flex justify-center'>
          <img className='w-auto h-10' src={logo} alt='BMS' />
        </div>

        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label htmlFor='name' className='block text-sm font-medium'>
              Name
            </label>
            <input
              type='text'
              className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='mt-4'>
            <label htmlFor='email' className='block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='mt-4'>
            <label htmlFor='password' className='block text-sm font-medium'>
              Password
            </label>
            <input
              type='password'
              className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='mt-4'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium'>
              Confirm Password
            </label>
            <input
              type='password'
              className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50'>
              Register
            </button>
          </div>
        </form>

        <p className='mt-8 text-xs font-light text-center text-lightText'>
          Already have an account?{' '}
          <Link to={'/login'} className='font-medium text-secondary hover:underline hover:text-primary'>
            Sign In
          </Link>
        </p>
      </div>
		<ToastContainer />
    </div>
  );
};

export default RegisterPage;
