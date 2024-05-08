import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function SuperBerry() {
	const tasks = [
		{
			text: 'Designed and developed the full architecture of the property management system, including both web and mobile components.',
			keywords: ['ReactJS', 'TailwindCSS v1', 'TypeScript'],
		},
		{
			text: 'Implemented front-end features using React.js, HTML, CSS, and Javascript, ensuring a seamless user experience.',
			keywords: ['Next.js'],
		},
		{
			text: 'Built the mobile app utilizing React Native, providing secure and efficient property management on the go.',
			keywords: ['technical support', 'troubleshoots'],
		},
		{
			text: 'Collaborated with back-end developers and stakeholders to ensure data integration and feature alignment.',
			keywords: ['technical support', 'troubleshoots'],
		},
		{
			text: 'Revamped property management: Improved operational efficiency by 30% by developing a web dashboard and mobile app that streamlined workflows, automated tasks, and provided real-time property data access for landlords and tenants.',
			keywords: ['technical support', 'troubleshoots'],
		},
	]

	return (
		<>
			<div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
				<div className='flex flex-col spacey-y-2'>
					{/* Title */}
					<span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
						Software Engineer <span className='text-AAsecondary'>@ Kejacop</span>
					</span>
					{/* Date */}
					<span className='font-mono text-xs text-gray-500'>Feb 2017 - Aug 2021</span>
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
