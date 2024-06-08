import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { profileMenus } from '../../utils/constants'
import { useLocation } from 'react-router-dom'
import { MdOutlinePersonAddAlt } from 'react-icons/md'

const ProfilePageLayout = () => {
	const [activeMenu, setActiveMenu] = useState('profile')

	const location = useLocation()

	const isMyProfile = true

	useEffect(() => {
		console.log(location.pathname)
		const path = location.pathname.split('/')
		setActiveMenu(path[path.length - 1])
	}, [location])

	return (
		<>
			<div className='flex'>
				<aside className='flex flex-col min-w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l'>
					<div className='flex flex-col items-center mt-6 -mx-2'>
						<img
							className='object-cover w-36 h-36 mx-2 rounded-full'
							src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
							alt='avatar'
						/>
						<h4 className='mx-2 mt-2 font-medium text-gray-800 text-center'>
							{'Achyut Krishna Sai Adiraju (adirajua)'}
						</h4>
						<p className='mx-2 mt-1 text-sm font-medium text-center text-gray-600'>
							{'achyutkrishnasai.adiraju@bms.com'}
						</p>
					</div>

					<div className='flex flex-col justify-between mt-6 gap-2'>
						{!isMyProfile && (
							<button className='flex flex-row justify-center items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-80'>
								<MdOutlinePersonAddAlt />
								<span className='mx-1'>Follow</span>
							</button>
						)}
						{/* <div className='flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg font-medium'>
							Shubham Sareliya
						</div> */}
					</div>
				</aside>
				<main className='w-full'>
					<div className='flex overflow-x-auto whitespace-nowrap'>
						{profileMenus.map((profileMenu) => (
							<Link to={profileMenu.href} key={profileMenu.href}>
								<button
									className={`inline-flex items-center h-12 px-2 py-2 text-center font-medium ${
										profileMenu.tag === activeMenu
											? 'text-primary border-primary-dark border-2 border-b-0'
											: 'text-gray-700 border-b-2 border-secondary'
									}  sm:px-4 rounded-t-md -px-1 whitespace-nowrap focus:outline-none`}
								>
									{profileMenu.icon}

									<span className='mx-1 text-sm sm:text-base'>
										{profileMenu.label}
									</span>
								</button>
							</Link>
						))}
					</div>
					<Outlet />
				</main>
			</div>
		</>
	)
}

export default ProfilePageLayout
