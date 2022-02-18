import { Page, HeadPage, NavbarPage, BodyPage } from "./Page";
import image from '../../assets/images/front.png'

export function ReinoD() {
	return (
		<Page>
			<HeadPage row={true} height_screen={true} classname='p-4 pt-[20vh]'>
				<NavbarPage />
				<img
					className="h-1/3 max-h-[300px] opacity-70 hidden md:block"
					src='/assets/images/bandeira/04.png' alt=""
				/>
				<div className="p-4 flex flex-wrap flex-col flex-1">
					<h1 className="pb-4 text-[#d7e0e0] text-3xl xl:text-5xl">
						Reino de Dyllewalt
					</h1>
					<div className="flex flex-wrap flex-col justify-center items-center text-ellipsis text-lg">
						<span className="p-4 text-clip">
							Dyllewalt, eu conto com você, seus problemas nunca foram tão
							grandes que a birra da rainha não conseguisse resolver, a
							capacidade bélica é proporcional, a obediência cega do povo é
							descomunal. Mas se salva no quesito diferença, não só na incrível
							vegetação colorada, como nos gigantescos campos montanhosos e
							ensolarados.
						</span>
						<span className="p-4">
							Dyllewalt Sempre devem pensar em Dyllewalt como o reino dos
							teimosos, dos resilientes, daqueles que não desistem fácil, dos
							intempérios da vida existem sonhos que não devem ser ofuscados,
							assim vive um cidadão de Dyllewalt, reino dos perseverantes e
							fortes.
						</span>
						<span className="p-4">
							Dyllewalt é um reino fenomenal, a incrível destreza e impaciência
							de sua rainha o levou ao nível de poderio absoluto, somente
							perdendo posição para Agaroff e Castindell que armaram uma tomada
							de poder em 1537, depois que descobriram que Suzana Ediphy, sua
							rainha, havia se aliado aos inimigos do sul, contra a soberania
							triontina.{" "}
						</span>
					</div>
				</div>
			</HeadPage>
		</Page>
	)
}
