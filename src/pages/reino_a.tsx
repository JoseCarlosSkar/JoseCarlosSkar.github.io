import { Page, HeadPage, NavbarPage, BodyPage, FooterPage } from "../components/Page";

export function ReinoA() {
	return (
		<Page>
			<HeadPage row={true} height_screen={true} classname='p-4 pt-[20vh]'>
				<NavbarPage />
				<img
					className="h-1/3 max-h-[300px] opacity-70 hidden md:block"
					src='/assets/images/bandeira/02.png' alt=""
				/>
				<div className="p-4 flex flex-wrap flex-col flex-1">
					<h1 className="pb-4 text-[#d7e0e0] text-3xl xl:text-5xl">
						Reino de Agaroff
					</h1>
					<div className="flex flex-wrap flex-col justify-center items-center text-ellipsis text-lg">
						<span className="p-4 text-clip">
							Grande Agaroff, terras dos colossais do tempo, sob tuas asas
							repousam a história de uma terra mágica, de poderes e mistérios
							descomunais, confortam-se todos os teus cidadãos ao saber que no
							trono, existe um rei da mais alta coragem e competência, pronto
							para a próxima batalha.
						</span>
						<span className="p-4">
							A prosperidade de Trionte depende dos quatro reinos e mais de ti,
							tuas colheitas não fraquejam na seca e tua força emana sem sessar,
							teu poder bélico e tua fé são as argrúrias de maior inveja para
							outros reinos.
						</span>
						<span className="p-4">
							No passado, foste a terra escolhida para sediar o mais importante
							senso de paz e amor, frente a batalha mais temível de Trionte em
							tão pouco tempo de preparo, a batalha de Dyllewalt. És a sede do
							continente triontino, de onde todo o princípio emanou e se
							converteu em quatro símbolos da glória e temor do sul. Salve
							Agaroff, terra dos justos.{" "}
						</span>
					</div>
				</div>
			</HeadPage>
			<FooterPage />
		</Page>
	)
}
