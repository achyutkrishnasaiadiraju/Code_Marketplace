import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/bms-logo.svg';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

	console.log('rajesh', username, password)

    try {

	const response = await axios.get(
        'https://hqwt8yfq61.execute-api.us-east-1.amazonaws.com/Dev/login/',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status == 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        setMessage('Login successful!');
        navigate('/');
      } else {
        setMessage('Login failed: Incorrect username or password');
      }
    } catch (error) {
		console.log('Rajesh', error)
      setMessage(`Login failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center align-middle'>
      <div className='w-full max-w-sm p-6 m-auto mx-auto bg-background rounded-lg shadow-md'>
        <div className='flex justify-center mx-auto'>
          <img className='w-auto h-10 sm:h-9' src={logo} alt='BMS' />
        </div>

        <form className='mt-6' onSubmit={handleSubmit}>
          <div>
            <label key='12' className='block text-sm font-medium'>
              Username
            </label>
            <input
              type='text'
              className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className='mt-4'>
            <div className='flex items-center justify-between'>
              <label key='13' className='block text-sm text-secondary font-medium'>
                Password
              </label>
              <Link to={'#'} className='text-xs text-primary font-medium hover:underline'>
                Forget Password?
              </Link>
            </div>

            <input
              type='password'
              className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50'
            >
              Sign In
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}

        <p className='mt-8 text-xs font-light text-center text-lightText'>
          Dont have an account?{' '}
          <Link to={'/register'} className='font-medium text-secondary hover:underline hover:text-primary'>
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
