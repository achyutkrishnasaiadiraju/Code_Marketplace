import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const Accordion = ({ title, content }) => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	return (
		<div
			id='accordion'
			className='border border-lightText mt-2 rounded-lg overflow-hidden'
		>
			<div className=''>
				<h2 className='mb-0' id='heading'>
					<button
						className='group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none'
						type='button'
						onClick={toggleVisibility}
						aria-expanded={isVisible}
						aria-controls='collapseOne'
					>
						{title}
						<span
							className={`-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
								isVisible ? 'rotate-180' : 'rotate-0'
							}`}
						>
							<FaAngleDown />
						</span>
					</button>
				</h2>
				<div
					id='collapseOne'
					className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
						isVisible ? 'max-h-screen' : 'max-h-0'
					}`}
					aria-labelledby='heading'
				>
					<hr className='my-1 mx-4 h-0.5 border-t-0 bg-secondary' />
					<div className='px-5 py-4'>{content}</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
