import { useEffect, useState } from 'react'
import image2 from '../../assets/images/2.png'
import image_logo from '../../assets/images/logo2.png'

export function Page(props: { children?: JSX.Element | JSX.Element[] }) {
	return (
		<div
			style={{
				background: `linear-gradient(-90deg, rgba(10, 20, 29, 0.7), rgba(10, 20, 29, 0.7)), url(${image2}) repeat`,
				animation: 'gradient 50s infinite'
			}}
		>
			{props.children}
		</ div>

	)
}

export function HeadPage(props: { children?: JSX.Element | JSX.Element[], row?: boolean, height_screen?: boolean, classname?: string, style?: {} }) {
	const isrow = props.row ?? false
	const isheight_full = (props.height_screen ?? false) ? 'min-h-screen' : 'min-h-[80vh] md:min-h-[85vh]'

	return (
		<div
			className={`${isheight_full} m-auto flex flex-1 justify-center text-center items-center ${isrow ? 'flex-row' : 'flex-col'} ${props.classname}`}
			style={{
				...props.style
			}}
		>
			{props.children}
		</div>
	)
}

export function BodyPage(props: { children?: JSX.Element | JSX.Element[] }) {
	return (
		<div
			className='container min-h-full m-auto flex flex-1 flex-col justify-center text-center items-center'
		>
			{props.children}
		</div>
	)
}

export function NavbarPage(props: { children?: JSX.Element | JSX.Element[] }) {
	const [active, setActive] = useState(false)
	const [colorChange, setColorChange] = useState(false)

	const handleClickMenu = () => {
		setActive(!active)
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 80) {
				setColorChange(true)
			} else {
				setColorChange(false)
			}
		})
	})

	return (
		<nav className='fixed top-0 w-full'>
			<div
				className={`${colorChange || active ? 'bg-[#242633]' : 'bg-transparent'}`}
				style={{ transitionDuration: '1s' }}
			>
				<div className='py-1 flex flex-1 flex-wrap flex-row justify-center'>
					<a href="/">
						<img className='max-h-16' src={image_logo} alt="" />
					</a>
					<button
						className=' p-3 rounded text-white ml-auto outline-none md:hidden'
						onClick={handleClickMenu}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				className={`${colorChange || active ? 'bg-[#10141b]' : 'bg-transparent'}`}
				style={{ transitionDuration: '1s' }}
			>
				<div className={`py-1 flex flex-1 flex-wrap flex-row justify-center w-full md:inline-flex md:w-auto ${active ? '' : 'hidden'}`}>
					<div className='items-start flex flex-1 flex-col border-b-2 border-cyan-500 md:inline-flex w-full md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto'>
						<a href="/" className='w-full px-3 py-2 rounded text-white font-bold items-center justify-center md:inline-flex md:w-auto'>
							Home
						</a>
						<a href="/" className='w-full px-3 py-2 rounded text-white font-bold items-center justify-center md:inline-flex md:w-auto'>
							Sobre
						</a>
					</div>
				</div>
			</div>
			<div
				className={`${active ? 'bg-[#10141b] opacity-90 min-h-screen md:bg-transparent md:opacity-100' : 'hidden'}`}
				style={{ transitionDuration: '1s' }}
				onClick={handleClickMenu}
			>
			</div>
		</nav>
	)
}
