import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function TrouveTavoie() {
	const tasks = [
		{
			text: 'As the Lead Frontend Developer at Focus Mobile, I spearheaded new product development while maintaining existing interfaces. I provided crucial guidance and technical support to my team, ensuring cohesive collaboration and optimal project outcomes..',
			keywords: ['Lead Frontend Developer', ''],
		},
		{
			text: 'Enhanced user experience and streamlined workflows: Designed and implemented three new features (bulk payments, bulk airtime sender, bulk mobile data sender) in the smsleopard platform, increasing user efficiency by 45%.',
			keywords: [
				'Enhanced user experience ',
				'Designed and implemented three new features',
				'increasing user efficiency by 45%',
			],
		},
		{
			text: 'Improved brand visibility and accessibility: Revamped the company web application with a focus on technical SEO and WCAG compliance, boosting organic traffic by 68% and ensuring inclusivity for diverse users.',
			keywords: ['Improved brand visibility and accessibility', 'technical SEO and WCAG compliance'],
		},
		{
			text: 'Championed modern tech stack: Led the transition to a scalable and performant tech stack utilizing React.js,React Native, TypeScript, Next.js, React-Redux, Tailwind, and Docker, reducing development time by 35%.',
			keywords: ['React.js,React Native, TypeScript, Next.js, React-Redux, Tailwind, and Docker'],
		},
	]

	return (
		<>
			<div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
				<div className='flex flex-col spacey-y-2'>
					{/* Title */}
					<span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
						Senior Frontend Developer <span className='text-AAsecondary'>@ Focus Mobile</span>
					</span>
					{/* Date */}
					<span className='font-mono text-xs text-gray-500'>Jan 2022 - Nov 2023</span>
					<span
						className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
						style={{ fontSize: '0.6rem' }}
						// set on click to open the website
						onClick={() => window.open('https://www.smsleopard.com', '_blank')}
					>
						www.smsleopard.com
					</span>
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
