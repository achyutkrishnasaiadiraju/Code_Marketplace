import React, { useState } from 'react'
import logo from '../assets/bms-logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { FaBars } from 'react-icons/fa6'
import { MdOutlineNotifications } from 'react-icons/md'
import { navbarMenus } from '../utils/constants'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(true)

	const location = useLocation()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}

	return (
		<nav x-data='{ isOpen: false }' className='relative bg-white shadow-lg'>
			<div className='container px-6 py-4 mx-auto'>
				<div className='lg:flex lg:items-center lg:justify-between'>
					<div className='flex items-center justify-between'>
						<Link to='/'>
							<img
								className='w-auto h-6 sm:h-7'
								src={logo}
								alt=''
							/>
						</Link>

						{/* Mobile menu button */}
						<div className='flex lg:hidden'>
							<button
								type='button'
								onClick={toggleMenu}
								className='text-secondary hover:text-secondary focus:outline-none focus:text-secondary'
								aria-label='toggle menu'
							>
								{isOpen ? <IoMdClose /> : <FaBars />}
							</button>
						</div>
					</div>

					<div
						className={`${
							isOpen
								? 'translate-x-0 opacity-100 shadow-lg'
								: 'opacity-0 -translate-x-full'
						} absolute inset-x-0 z-20 w-full px-8 md:px-24 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
					>
						<div className='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'>
							<div className='hidden mx-10 md:block'>
								<div className='relative'>
									<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
										<IoMdSearch />
									</span>

									<input
										type='text'
										className='w-full py-2 pl-10 pr-4 text-secondary bg-background border rounded-md focus:border-primary-dark focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary'
										placeholder='Search'
									/>
								</div>
							</div>
							{navbarMenus.map((navbarMenu) => (
								<Link
									key={navbarMenu.href}
									to={navbarMenu.href}
									className={`px-3 py-2 mx-3 mt-2 text-secondary font-medium transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 hover:text-primary`}
								>
									{navbarMenu.label}
								</Link>
							))}
						</div>

						<div className='flex items-center mt-4 lg:mt-0'>
							<button
								className='hidden mx-4 text-secondary transition-colors duration-300 transform lg:block hover:text-secondary focus:text-secondary focus:outline-none'
								aria-label='show notifications'
							>
								<MdOutlineNotifications size={24} />
							</button>

							<button
								type='button'
								className='flex items-center focus:outline-none'
								aria-label='toggle profile dropdown'
							>
								<div className='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full'>
									<img
										src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
										className='object-cover w-full h-full'
										alt='avatar'
									/>
								</div>

								<h3 className='mx-2 text-secondary lg:hidden'>
									Achyut Krishna Sai Adiraju
								</h3>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
