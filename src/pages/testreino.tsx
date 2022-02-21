import { useState } from "react";
import { Page, HeadPage, NavbarPage, BodyPage, FooterPage } from "../components/Page";

type prop_children = JSX.Element | JSX.Element[] | string

function Card(props: { children?: prop_children, question: string, fun?: any }) {
	return (
		<div className="border-2 p-4 rounded-xl m-4" onChange={props.fun}>
			<p className="p-2 text-xl">{props.question}</p>
			<hr />
			{props.children}
		</div>
	)
}

function Option(props: { children?: prop_children, name: string, value: string }) {
	return (
		<div className="p-4 flex flex-1 flex-row">
			<input type="radio" name={props.name} value={props.value} className="m-1" />
			<p className="text-left">{props.children}</p>
		</div>
	);
}

export function TestReino() {
	const [inputs, setInputs] = useState({ '1': '', '2': '', 3: '', '4': '' })

	const handleChange = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name == '1') {
			inputs['1'] = value
		} else if (name == '2') {
			inputs['2'] = value
		} else if (name == '3') {
			inputs['3'] = value
		} else if (name == '4') {
			inputs['4'] = value
		}
		setInputs(inputs)
	}

	const handleSubmit = (event: any) => {
		event.preventDefault();
		let k = 0
		let a = 0
		let c = 0
		let d = 0

		const e1 = inputs['1'];
		const e2 = inputs['2'];
		const e3 = inputs['3'];
		const e4 = inputs['4'];
		let es = [e1, e2, e3, e4]
		for (const er in es) {
			let e = es[er]
			if (e == "K") { k += 1 }
			if (e == "A") { a += 1 }
			if (e == "C") { c += 1 }
			if (e == "D") { d += 1 }
			if (e == "A/C") { a += 1; c += 1 }
		}

		alert(
			`Kwaizahdar: ${k}\nAgaroff: ${a}\nCastindell: ${c}\nDyllewalt: ${d}\n`
		)
	}

	return (
		<Page>
			<HeadPage classname='p-4 pt-[20vh]'>
				<NavbarPage />
				<h1 className="text-3xl m-5">
					Trionte clamou pela escolha dos reinos!
				</h1>
				<h2 className="text-2xl m-5">
					A alma de um reino se mede pelas qualidades individuais de cada
					cidadão e a fé na justiça de Sua Majestade e seu deus.
				</h2>
			</HeadPage>
			<BodyPage>
				<form className="mb-10" onSubmit={handleSubmit}>
					<Card question="Pergaminho N°1 Como você resolve seus problemas cotidianos?" fun={handleChange}>
						<Option name="1" value="A">
							Eu costumo resolver os problemas com dedicação e coragem.
						</Option>
						<Option name="1" value="D">
							Eu ligo muito pouco para minha vida cotidiana, por que isso
							importaria tanto?
						</Option>
						<Option name="1" value="K">
							Meus esforços são medidos em minha mente a medida que eu vejo os
							resultados, se vejo que a coisa está caminhando para baixo, nem
							adianta tentar subir.!
						</Option>
						<Option name="1" value="C">
							Eu acredito 100% em minha capacidade e quando por um acaso
							desacredito, me lembro de alguns grandes feitos meus.
						</Option>
						<Option name="1" value="A/C">
							Eu apenas desejo com toda a força que de mim emana, respiro e digo à
							mim mesmo, vai em frente, não desista!
						</Option>
					</Card>
					<Card question="Pergaminho Nº2 Porque a fidelidade é importante em nossas vidas?" fun={handleChange}>
						<Option name="2" value="K">
							Não acho a fidelidade importante, na verdade na primeira
							oportunidade eu ferraria meu melhor amigo por lemranças ruins e
							deslizes dele no passado, sou vingativo.
						</Option>
						<Option name="2" value="C">
							Porque é através dela que podemos construir relações firmes e
							saudáveis com nossos amigos e isso é algo insdispensável.
						</Option>
						<Option name="2" value="A">
							Porque a fidelidade é o ponto de partida para valores ainda maiores
							dentro da amizade, como o amor e a lealdade.
						</Option>
						<Option name="2" value="D">
							Fidelidade é um mal, nos prendemos à alguém que dificilmente vai
							corresponder e guardamos segredos para um possível alguém que tem a
							boca aberta para o mundo.
						</Option>
					</Card>
					<Card question="Pergaminho Nº3 O que você faria caso uma batalha estourasse no seu reino e você fosse a única esperança do império?" fun={handleChange}>
						<Option name="3" value="D">
							Fugiria, não me sinto apto à lutar e também, foda-se os outros!
						</Option>
						<Option name="3" value="A">
							Lutaria bravamente, pois meu reino é minha vida e meus semelhantes
							precisam de mim.
						</Option>
						<Option name="3" value="D">
							Participaria da batalha do lado que estivesse ganhando, pois é a
							coisa mais esperta a se fazer nestes momentos.
						</Option>
						<Option name="3" value="C">
							Sinceramente, se dois, ou mais reinos vivem em paz e um motivo besta
							ameaça a aliança de ambos, estando eu na condição de plebeu, nada
							posso fazer para ajudar, mas me colocaria à disposição de minha
							Majestade e do exército imperial.
						</Option>
						<Option name="3" value="K">
							Eu simplesmente deixaria todo mundo morrer e ficaria do lado oposto,
							seria preso, mas eu viveria.
						</Option>
					</Card>
					<Card question="Pergaminho Nº4 Se fosse para escolher uma Majestade que o representasse, qual você escolheria?" fun={handleChange}>
						<Option name="4" value="A">
							Thomas Afftton, rei modelo. Thomas é corajoso, leal ao seu povo e
							conectado com suas próprias energias e raìzes. Em qualquer momento,
							é só clamar que Thomas ajudará, não importa o quão grande é o
							problema para um cidadão triontino, se seu rei está com seu povo!
						</Option>
						<Option name="4" value="K">
							Simon Blackston, rei independente. De todas as qualidades de Simon,
							a maior talvez seja sua independência, pois seu jeito despreocupado
							e seu individualismo não agradam à ninguém, nem mesmo ao concelho de
							esguardian, mas ninguém nega que seu reino é o mais bem desenvolvido
							financeiramente.
						</Option>
						<Option name="4" value="D">
							Suzana Ediphy, rainha mimada. O mimo de Suzana supera qualquer outro
							defeito seu, sua maior força está na teimosia e na impaciência, tudo
							a rainha consegue, não importa o que seja!
						</Option>
						<Option name="4" value="C">
							Helena Goldflower, rainha pacificadora. Helena tem seu temperamento
							agressivo, sim, mas a qualidade que mais chama a atenção é seu jeito
							pacificador, principalmente com seu irmão mais velho, Thomas, Helena
							sempre consegue faze-lo pensar melhor nos momentos em que ele decide
							estrvazar a raiva.
						</Option>
					</Card>

					<button
						type="submit"
						className="m-1 border-orange-800 border-4 py-3 px-5 rounded-2xl hover:bg-orange-600"
					>Finalizar</button>
				</form>
			</BodyPage>
			<FooterPage />
		</Page>
	)
}
