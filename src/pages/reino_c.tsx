import { Page, HeadPage, NavbarPage, BodyPage, FooterPage } from "../components/Page";

export function ReinoC() {
	return (
		<Page>
			<HeadPage row={true} height_screen={true} classname='p-4 pt-[20vh]'>
				<NavbarPage />
				<img
					className="h-1/3 max-h-[300px] opacity-70 hidden md:block"
					src='/assets/images/bandeira/03.png' alt=""
				/>
				<div className="p-4 flex flex-wrap flex-col flex-1">
					<h1 className="pb-4 text-[#d7e0e0] text-3xl xl:text-5xl">
						Reino de Castindell
					</h1>
					<div className="flex flex-wrap flex-col justify-center items-center text-ellipsis text-lg">
						<span className="p-4 text-clip">
							Oh Castindell, adorável são tuas florestas douradas cujos segredos
							do tempo escureceram, teu poder e riqueza altamente naturais,
							causam inveja em qualquer outro reino, o teu povo é seleto de
							nascença pela força, e sua vida resplandece a sabedoria da rainha.
						</span>
						<span className="p-4">
							Glorificada seja Helena Goldflower e todo o seu povo!
						</span>
						<span className="p-4">
							Castindell é um reino historicamente próspero, no continente
							triontino, Castindell é colocado como um importante ponto
							mercantil, pelo porto da praia de Colossus, que também foi palco
							da ancoragem dos navios que traziam os reis inimigos de Livesburn
							e as famílias de renome do continente.
						</span>
					</div>
				</div>
			</HeadPage>
			<FooterPage />
		</Page>
	)
}
