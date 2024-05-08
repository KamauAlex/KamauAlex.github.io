import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function IdealFresh() {
	const tasks = [
		{
			text: 'Designed and implemented user-friendly front-end interfaces for complex data visualization tools using React.js, React Native and D3.js..',
			keywords: ['data visualization tools', 'React.js', 'React Native', 'D3.js'],
		},
		{
			text: 'Collaborated with back-end developers and data analysts to ensure seamless data integration and functionality.',
			keywords: [],
		},
		{
			text: 'Conducted ongoing performance optimization and implemented best practices for code maintainability.',
			keywords: ['code maintainability'],
		},
		{
			text: 'Participated in code reviews and provided technical mentorship to junior developers.',
			keywords: ['technical mentorship'],
		},
		{
			text: 'Enhanced data-driven decision making: Developed interactive and intuitive interfaces for business intelligence tools, leading to user adoption and data analysis',
			keywords: ['business intelligence tools'],
		},
		{
			text: 'Improved operational efficiency: Built a streamlined dispatch management and order processing dashboard, resulting in a 15% reduction in task completion time and a 20% boost in team productivity.',
			keywords: ['dispatch management and order processing dashboard'],
		},
	]
	return (
		<>
			<div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
				<div className='flex flex-col spacey-y-2'>
					{/* Title */}
					<span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
						Software Engineer <span className='text-AAsecondary'>@ Quantrica Technologies</span>
					</span>
					{/* Date */}
					<span className='font-mono text-xs text-gray-500'>April 2019 - December 2021</span>
					<span
						className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
						style={{ fontSize: '0.6rem' }}
						// set on click to open the website
						onClick={() => window.open('https://quantrica.com/', '_blank')}
					>
						www.quantrica.com
					</span>
				</div>
				<div className='flex flex-col space-y-4 sm:text-sm text-xs'>
					{/* Tasks Description 1 */}
					{tasks.map((item, index) => {
						return (
							<div key={index} className='flex flex-row space-x-2'>
								<ArrowIcon className={'h-5 w-4 text-AAsecondary flex-none'} />
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
