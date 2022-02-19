import { Page, HeadPage, NavbarPage, BodyPage, FooterPage } from "../components/Page";

export function ReinoK() {
	return (
		<Page>
			<HeadPage row={true} height_screen={true} classname='p-4 pt-[20vh]'>
				<NavbarPage />
				<img
					className="h-1/3 max-h-[300px] opacity-70 hidden md:block"
					src={'/assets/images/bandeira/01.png'} alt=""
				/>
				<div className="p-4 flex flex-wrap flex-col flex-1">
					<h1 className="pb-4 text-[#d7e0e0] text-3xl xl:text-5xl">
						Reino de Kwaizahdar
					</h1>
					<div className="flex flex-wrap flex-col justify-center items-center text-ellipsis text-lg">
						<span className="p-4">
							Não existe orgulho maior para qualquer cidadão que almeja uma boa
							e farta vida, do que fazer parte deste reino talhado em ouro.
							Kwaizahdar é o lugar ideal para aqueles que buscam ser
							recompensados por seus atos, tanto bons, quanto ruins, seu rei é
							extremamente poderoso e não desperdiça sua autoridade por nada,
							Simon Blackston, sempre foi admirado por seu povo e muito
							respeitado por onde passou.
						</span>
						<span className="p-4">
							Kwaizahdar, tal como Castindell, também tem histórico comercial e
							já foi palco de diferentes batalhas com o norte, este reino
							raramente vai buscar por guerras, mas caso seja atacado, não
							hesitará em se defender e não importa se vai ser de forma covarde,
							ou não, no governo de Simon, o importante é vencer!
						</span>
					</div>
				</div>
			</HeadPage>
			<FooterPage />
		</Page>
	)
}
