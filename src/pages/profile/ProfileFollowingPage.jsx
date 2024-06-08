import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlinePeople } from 'react-icons/md'
import _ from 'lodash'

const ProfileFollowingPage = () => {
	const [followings, setFollowings] = useState([
		{
			id: 1,
			name: 'Achyut Krishna Sai Adiraju',
			username: 'adirajua',
		},
		{
			id: 2,
			name: 'Shubham Sareliya',
			username: 'sareliyas',
		},
		{
			id: 3,
			name: 'Anand Adiraju',
			username: 'adirajua2',
		},
	])
	const [query, setQuery] = useState('')
	const [filteredFollowings, setFilteredFollowings] = useState(followings)

	const isMyProfile = true

	useEffect(() => {
		console.log(followings)
		// Add logic to Fetch Followers
	}, [])

	const handleSearch = (query) => {
		const lowercasedQuery = query.toLowerCase()
		const results = followings.filter(
			(following) =>
				following.name.toLowerCase().includes(lowercasedQuery) ||
				following.username.toLowerCase().includes(lowercasedQuery)
		)
		setFilteredFollowings(results)
	}

	const debouncedHandleSearch = useCallback(_.debounce(handleSearch, 500), [])

	const handleChange = (event) => {
		const { value } = event.target
		setQuery(value)
		debouncedHandleSearch(value)
	}

	return (
		<>
			<form
				className='flex items-center max-w-sm mx-auto m-4'
				onChange={handleChange}
			>
				<label htmlFor='search' className='sr-only'>
					Search
				</label>
				<div className='relative w-full'>
					<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
						<MdOutlinePeople size={20} />
					</div>
					<input
						type='text'
						id='search'
						value={query}
						className='bg-gray-50 font-medium border border-border text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary-dark block w-full ps-10 p-2.5'
						placeholder='Search Following Name / Username'
						onChange={handleChange}
						required
					/>
				</div>
				{/* <button
					type='submit'
					className='p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary'
				>
					<IoSearch />
					<span className='sr-only'>Search</span>
				</button> */}
			</form>
			{filteredFollowings.length ? (
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
					<table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
						<tbody>
							{filteredFollowings.map((following) => (
								<tr
									className='bg-white border-b hover:bg-gray-50'
									key={following.id}
								>
									<th
										scope='row'
										className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap hover:text-primary'
									>
										<Link
											to={'https://url.to/following/id'}
										>
											{`${following.name} (${following.username})`}
										</Link>
									</th>
									{isMyProfile && (
										<td className='px-6 py-4'>
											<Link
												to={'#'}
												className='font-medium text-primary  hover:underline'
											>
												Unfollow
											</Link>
										</td>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className='flex flex-col items-center justify-center align-middle mt-16'>
					<div className='bg-white p-8 rounded-lg shadow-lg text-center'>
						<h1 className='text-2xl font-bold mb-4'>
							Following Person Not Found
						</h1>
						<p className='text-gray-700 mb-4'>
							{followings.length === 0
								? `It looks like you are not following anyone yet. Start engaging with people to have some followings.`
								: 'No results found'}
						</p>
					</div>
				</div>
			)}
		</>
	)
}

export default ProfileFollowingPage
