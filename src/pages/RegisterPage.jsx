import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/bms-logo.svg'

const RegisterPage = () => {
	return (
		<div className='w-screen h-screen flex justify-center align-middle'>
			<div className='w-full max-w-sm p-6 m-auto mx-auto bg-background rounded-lg shadow-md'>
				<div className='flex justify-center mx-auto'>
					<img className='w-auto h-10 sm:h-9' src={logo} alt='BMS' />
				</div>

				<form className='mt-6'>
					<div className='mt-4'>
						<label
							htmlFor='name'
							className='block text-sm font-medium'
						>
							Name
						</label>
						<input
							type='text'
							className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>

					<div className='mt-4'>
						<label
							htmlFor='username'
							className='block text-sm font-medium'
						>
							Username
						</label>
						<input
							type='text'
							className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>

					<div className='mt-4'>
						<label
							htmlFor='password'
							className='block text-sm font-medium'
						>
							Password
						</label>
						<input
							type='password'
							className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>

					<div className='mt-4'>
						<label
							htmlFor='confirmPassword'
							className='block text-sm font-medium'
						>
							Confirm Password
						</label>
						<input
							type='password'
							className='block w-full px-4 py-2 mt-2 text-secondary bg-background border rounded-lg focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>

					<div className='mt-6'>
						<button className='w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50'>
							Sign In
						</button>
					</div>
				</form>

				<p className='mt-8 text-xs font-light text-center text-lightText'>
					{' '}
					Already have an account?{' '}
					<Link
						to={'/login'}
						className='font-medium text-secondary hover:underline hover:text-primary'
					>
						Sign In
					</Link>
				</p>
			</div>
		</div>
	)
}

export default RegisterPage
