import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function EnsVision() {
	const tasks = [
		{
			text: 'Freelance software engineer with consistent 5-star ratings and positive client reviews on Upwork',
			keywords: ['Freelance', 'software', 'Engineer', 'upwork'],
		},
		{
			text: 'Expertise in mobile app development (React Native) and web app creation (React)',
			keywords: ['Mobile app', 'React Native', 'React', 'web app'],
		},
		{
			text: 'Proven success with WordPress projects.',
			keywords: ['website design', 'wordpress'],
		},
		{
			text: 'Strong ability to understand client needs and deliver exceptional results',
			keywords: ['understand client needs', 'exceptional results'],
		},
	]

	return (
		<>
			<div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
				<div className='flex flex-col spacey-y-2'>
					{/* Title */}
					<span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
						Senior Frontend Developer <span className='text-AAsecondary'>@ Upwork</span>
					</span>
					{/* Date */}
					<span className='font-mono text-xs text-gray-500'>January 2024 - Present</span>
				</div>
				<div className='flex flex-col space-y-4 sm:text-sm text-xs'>
					{/* Tasks Description 1 */}
					{tasks.map((item, index) => {
						return (
							<div key={index} className='flex flex-row space-x-1'>
								<ArrowIcon className={' h-5 w-4 text-AAsecondary flex-none'} />
								<span
									className='text-gray-500 sm:text-sm text-xs'
									dangerouslySetInnerHTML={{
										__html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
									}}
								></span>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
