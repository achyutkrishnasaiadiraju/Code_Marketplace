import React from 'react'
import Accordion from '../../components/ui/Accordion'

const accordions = [
	{
		title: 'Title 1',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam omnis, nostrum animi quisquam delectus natus. Corporis itaque quisquam amet?',
	},
	{
		title: 'Title 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam omnis, nostrum animi quisquam delectus natus. Corporis itaque quisquam amet?',
	},
	{
		title: 'Title 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam omnis, nostrum animi quisquam delectus natus. Corporis itaque quisquam amet?',
	},
]

const ProfilePage = () => {
	return (
		<div className='min-h-64 grid grid-cols-2 gap-4 justify-between m-4 p-2 rounded'>
			<div className='shadow-lg border-2 border-primary p-4 rounded max-h-96 overflow-auto'>
				<h2 className='text-xl font-medium'>My Discussion</h2>
				<hr className='my-4 h-0.5 border-t-0 bg-secondary' />
				{accordions.map((accordion) => (
					<Accordion
						title={accordion.title}
						content={accordion.content}
					/>
				))}
			</div>
			<div className='shadow-lg border-2 border-primary p-4 rounded max-h-96 overflow-auto'>
				<h2 className='text-xl font-medium'>My Contributions</h2>
				<hr className='my-4 h-0.5 border-t-0 bg-secondary' />
				{accordions.map((accordion) => (
					<Accordion
						title={accordion.title}
						content={accordion.content}
					/>
				))}
			</div>
		</div>
	)
}

export default ProfilePage
