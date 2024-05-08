import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ArrowIcon from '../../Icons/ArrowIcon'
import Img from '../../smallComp/image/Img'
import GithubIcon from '../../Icons/GithubIconForSomethingIveBuild'
import ExternalLink from '../../Icons/ExternalLink'

export default function SomethingIveBuilt() {
	const router = useRouter()
	return (
		<div
			id='SomethingIveBuiltSection'
			className=' flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4'
		>
			{/* // ? Title  */}
			<div data-aos='fade-up' className=' flex flex-row  items-center md:px-0'>
				<ArrowIcon className={'flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary'} />
				<div className='flex-none flex-row space-x-2 items-center pr-2'>
					<span className='text-AAsecondary font-sans text-sm  sm:text-xl'> 03.</span>
					<span className=' font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85'>
						{' '}
						Some Things I&apos;ve Built
					</span>
				</div>
				<div className='bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2'></div>
			</div>

			<div className='flex flex-col   xl:space-y-36 space-y-8 md:space-y-28'>
				{/* // ?  Project  1*/}
				<div data-aos='fade-up' className='relative md:grid md:grid-cols-12 w-full md:h-96 '>
					{/* Left image */}
					<div
						className='hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center'
					>
						<div className='relative rounded w-full h-full col-span-7 '>
							{/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

							<a href='https://smsleopard.com' target={'_blank'} rel='noreferrer'>
								<div
									// onClick={}
									className='absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300'
								></div>
							</a>

							<Img src={'/f-mobile.png'} alt={'Project Screen shot'} className={`w-full rounded h-full `} />
						</div>
					</div>

					{/* right Content */}
					<div className=' md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center '>
						{/* background for text in mobile responsive */}
						<div className='absolute w-full h-full bg-opacity-70 z-0'>
							<div className='relative w-full h-full'>
								<div className='absolute w-full h-full bg-AAsecondary opacity-10 z-10'></div>
								<div className='absolute w-full h-full bg-AAprimary opacity-80 z-10'></div>
								<Img src={'/f-mobile.png'} alt={'Project Screen shot'} className={`w-full h-full `} />
							</div>
						</div>

						<div
							className='px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3'
						>
							<div className='flex flex-col space-y-1 md:items-end z-10'>
								<span className='text-AAsecondary text-base'>Focus Mobile </span>
								<a href='https://smsleopard.com' target='_blank' rel='noopener noreferrer'>
									<span className=' md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer'>
										Sms Leopard Platform
									</span>
								</a>
							</div>
							<div className='w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10'>
								<p className='text-gray-300 md:text-gray-400 text-left md:text-right '>
									At <span className='text-AAsecondary'>Focus Mobile</span>, I played a crucial role in
									developing frontend interface for their{' '}
									<span className='text-AAsecondary'>Smsleopard platform</span> using React.js and Typescript
									and Tailwind. Our focus was on integrating new features and improving the user interface. One
									notable achievement was the release of 3 new products{' '}
									<span className='text-AAsecondary'>bulk payments, bulk airtime, bulk mobile data</span>{' '}
									enabling users to have all their communication needs{' '}
									<span className='text-AAsecondary'>centralized</span>. This showcased our commitment to
									delivering innovative solutions.
								</p>
							</div>
							<ul
								className='flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end'
							>
								<span className='pr-4 z-10'>React.js</span>
								<span className='pr-4 z-10'>React Native</span>
								<span className='pr-4 z-10'>Typescript</span>
								<span className='pr-4 z-10'>Javascript</span>
								<span className='pr-4 z-10'>Tailwind</span>
							</ul>
							<div className='z-10 flex fle-row space-x-5 '>
								<a href='https://smsleopard.com/' target={'_blank'} rel='noreferrer'>
									<ExternalLink url={''} router={router} />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* // ?  Project 2 */}
				<div data-aos='fade-up' className='relative md:grid md:grid-cols-12 w-full md:h-96  '>
					{/* Left image */}
					<div
						className='hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center '
					>
						<div className='relative rounded w-full h-full col-start-6 col-span-7 '>
							<a href={'https://ubiquitous-bublanina-da84ec.netlify.app/'} target='_blank' rel='noreferrer'>
								<div
									className='absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300'
								></div>
							</a>
							<Img src={'/Quantrica.png'} alt={'Project Screen shot'} className={`w-full rounded h-full `} />
						</div>
					</div>

					{/* right Content */}
					<div className=' md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center '>
						{/* background for text in mobile responsive */}
						<div className='absolute w-full h-full bg-opacity-70 z-0 md:order-2'>
							<div className='relative w-full h-full'>
								<div className='absolute w-full h-full bg-AAsecondary opacity-10 z-10'></div>
								<div className='absolute w-full h-full bg-AAprimary opacity-80 z-10'></div>
								<Img src={'/hackme.jpg'} alt={'Project Screen shot'} className={`w-full h-full`} />
							</div>
						</div>

						<div
							className='px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1'
						>
							<div className='flex flex-col space-y-1  z-10'>
								<span className='text-AAsecondary text-base'>Quantrica</span>
								<a href='https://quantrica.com/platform.html' target='_blank' rel='noopener noreferrer'>
									<span className=' md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer'>
										Athena BI
									</span>
								</a>
							</div>
							<div className='w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10'>
								<p className='text-gray-300 md:text-gray-400 text-left '>
									I had the opportunity to lead the development of an interactive BI dashboard which aimed to
									bring all businesses data into one platform and visualize it to allow businesses make informed
									data driven decisions.We used{' '}
									<span className='text-AAsecondary'> React.js (Redux, Hooks) , TypeScript, Git, D3.js</span>{' '}
									and <span className='text-AAsecondary'> CICD.</span>This visually compelling tool empowered
									businesses with data-driven insights, leading to a 70% increase in informed decision-making.
								</p>
							</div>
							<ul
								className='flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start'
							>
								<span className='pr-4 z-10'>D3.js</span>
								<span className='pr-4 z-10'>React.js</span>
								<span className='pr-4 z-10'>Typescript</span>
								<span className='pr-4 z-10'>Javascript</span>
								<span className='pr-4 z-10'>Sass</span>
							</ul>
							<div className='z-10 flex fle-row space-x-5 '>
								<a href='https://quantrica.com/platform.html' target={'_blank'} rel='noreferrer'>
									<ExternalLink url={''} router={router} />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* // ?  Project  3*/}
				<div data-aos='fade-up' className='relative md:grid md:grid-cols-12 w-full md:h-96 '>
					{/* Left image */}
					<div
						className='hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center'
					>
						<div className='relative rounded w-full h-full col-span-7 '>
							<Link href='https://ebbot.com/'>
								<div
									// onClick={}
									className='absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300'
								></div>
							</Link>

							<Img src={'/ebbot.png'} alt={'Project Screen shot'} className={`w-full rounded h-full `} />
						</div>
					</div>

					{/* right Content */}
					<div className=' md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center '>
						{/* background for text in mobile responsive */}
						<div className='absolute w-full h-full bg-opacity-70 z-0'>
							<div className='relative w-full h-full'>
								<div className='absolute w-full h-full bg-AAsecondary opacity-10 z-10'></div>
								<div className='absolute w-full h-full bg-AAprimary opacity-80 z-10'></div>
								<Img src={'/ebbot.png'} alt={'Project Screen shot'} className={`w-full h-full `} />
							</div>
						</div>

						<div
							className='px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3'
						>
							<div className='flex flex-col space-y-1 md:items-end z-10'>
								<span className='text-AAsecondary text-base'>Ebbot.ai</span>
								<Link href='https://ebbot.com/'>
									<span className=' md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer'>
										Ebbot chat bot
									</span>
								</Link>
							</div>
							<div className='w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10'>
								<p className='text-gray-300 md:text-gray-400 text-left md:text-right'>
									Built a <span className='text-AAsecondary'> customer service AI chatbot </span> studio for
									websites, powered by AI to enhance user engagement and resolve inquiries efficiently. Utilized
									a cutting-edge tech stack {''}
									<span className='text-AAsecondary'>
										{' '}
										(React.js, Redux, TypeScript, Git,Redux, Docker, Storybook, CICD)
									</span>{' '}
									for advanced functionality and smooth development.
								</p>
							</div>
							<ul
								className='flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end'
							>
								<span className='pr-4 z-10'>React</span>
								<span className='pr-4 z-10'>Typescript</span>
								<span className='pr-4 z-10'>Storybook</span>
								<span className='pr-4 z-10'>React redux</span>
							</ul>
							<div className='z-10 flex fle-row space-x-5 '>
								<ExternalLink url='https://ebbot.com/' router={router} />
							</div>
						</div>
					</div>
				</div>

				{/* // ?  Project 4 */}
				<div data-aos='fade-up' className='relative md:grid md:grid-cols-12 w-full md:h-96  '>
					{/* Left image */}
					<div
						className='hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center '
					>
						<div className='relative rounded w-full h-full col-start-6 col-span-7 '>
							<Link href='https://play.google.com/store/apps/details?id=com.faida.posapp'>
								<div
									className='absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300'
								></div>
							</Link>
							<Img src={'/Faida.jpg'} alt={'Project Screen shot'} className={`w-full rounded h-full `} />
						</div>
					</div>

					{/* right Content */}
					<div className=' md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center '>
						{/* background for text in mobile responsive */}
						<div className='absolute w-full h-full bg-opacity-70 z-0 md:order-2'>
							<div className='relative w-full h-full'>
								<div className='absolute w-full h-full bg-AAsecondary opacity-10 z-10'></div>
								<div className='absolute w-full h-full bg-AAprimary opacity-80 z-10'></div>
								<Img src={'/Faida.jpg'} alt={'Project Screen shot'} className={`w-full h-full`} />
							</div>
						</div>

						<div
							className='px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1'
						>
							<div className='flex flex-col space-y-1  z-10'>
								<span className='text-AAsecondary text-base'>Faida</span>
								<Link href='https://play.google.com/store/apps/details?id=com.faida.posapp'>
									<span className=' md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer'>
										Point of Sales Mobile App
									</span>
								</Link>
							</div>
							<div className='w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10'>
								<p className='text-gray-300 md:text-gray-400 text-left '>
									Faida POS - Point of Sale & Inventory - is the perfect Point Of Sale mobile application
									solution for your small and medium retail shops, grocery stores, boutiques, book stores and
									more, offering a simple interface, lots of free features.
								</p>
							</div>
							<ul
								className='flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start'
							>
								<span className='pr-4 z-10'>React Native</span>
								<span className='pr-4 z-10'>Google APi</span>
								<span className='pr-4 z-10'>Typescript</span>
								<span className='pr-4 z-10'>React Context</span>
							</ul>
							<div className='z-10 flex fle-row space-x-5 '>
								<ExternalLink
									url='https://play.google.com/store/apps/details?id=com.faida.posapp'
									router={router}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
