import { Page, HeadPage, NavbarPage, BodyPage } from "./Page";
import image from '../../assets/images/front.png'
import b01 from '../../assets/images/bandeira/01.png'
import b02 from '../../assets/images/bandeira/02.png'
import b03 from '../../assets/images/bandeira/03.png'
import b04 from '../../assets/images/bandeira/04.png'
import b1 from '../../assets/images/1.png'

export function Home() {
	return (
		<Page>
			<HeadPage
				style={{
					background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%,rgba(10, 20, 29, 0.95) 90%), url(${b1}) no-repeat center/cover`
				}}
			>
				<NavbarPage />
				<img className="h-1/3 max-h-[350px] xl:min-h-[550px]" src={image} alt="" />
			</HeadPage>

			<BodyPage>
				<div className="container p-4 my-6 m-auto justify-evenly text-center flex flex-wrap flex-col flex-1">
					<span className="text-white text-xl xl:text-2xl fontBlackWide">
						Faça seu teste e descubra à qual reino
					</span>
					<div className="uppercase text-3xl xl:text-4xl font-bold py-2 xl:py-4">
						seu <span className="text-white">Destino</span> foi
					</div>
					<span className="text-white text-2xl xl:text-2xl fontBlackWide">
						traçado!
					</span>
					<div className="py-4 flex flex-wrap flex-row justify-center">
						<a href="/reino/k">
							<img
								className="max-h-36 xl:max-h-56 m-1 cursor-pointer"
								src={b01}
							/>
						</a>
						<a href="/reino/a">
							<img
								className="max-h-36 xl:max-h-56 m-1 cursor-pointer"
								src={b02}
							/>
						</a>
						<a href="/reino/c">
							<img
								className="max-h-36 xl:max-h-56 m-1 cursor-pointer"
								src={b03}
							/>
						</a>
						<a href="/reino/d">
							<img
								className="max-h-36 xl:max-h-56 m-1 cursor-pointer"
								src={b04}
							/>
						</a>
					</div>
					<a className="text-white  fontBlackWide max-w-sm xl:max-w-xs self-center p-1 rounded-3xl text-2xl xl:text-2xl">
						<a href="/test">Realizar teste</a>
					</a>
					{/* <img
						className="h-1/3 max-h-[450px] opacity-50 hidden lg:block"
						src="/assets/images/backhome.png"
					/> */}
				</div>

				<div className="container p-2 py-10 flex flex-col flex-wrap flex-1 text-center">
					<h2 className="text-4xl p-2 py-4">Curiosidades</h2>
					<h3 className="text-2xl p-2 px-10">
						Gabriel Aquino afirmou que planejou oito volumes para Trionte.
					</h3>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp;O jovem autor, foi ousado ao admitir que tem planejamento de
						extensões para o universo triontino, quando indagado sobre o
						verdadeiro potencial de seu primeiro livro, disse; “Desde a primeira
						palavra, escrita sobre este império no papel, acreditei que não se
						trataria apenas de um único livro e pronto, mas de um universo bem
						enriquecido.
					</p>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp;Claro que o jovem autor não calcula a importância de um fã
						clube, ou algo assim, ele se destaca pelo seu trabalho independente
						em vários projetos iniciantes entorno do próprio universo, tudo isso
						para agradar um, ou dois fãs reais de seus trabalhos.
					</p>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp;Trionte foi contemplado pela Ordem DeMolay, que posteriormente
						veio a ser a segunda casa de seu autor e logo foi publicado um
						artigo sobre Gabriel Aquino em um dos sites jornalísticos da
						Marçônaria em 14/10/2021.
					</p>
					<br />
					<br />

					<h3 className="text-2xl p-2 px-10">
						A forte ligação entre a origem de Trionte e seu autor.{" "}
					</h3>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp;Não é novidade que Aquino teve uma vida difícil, nascido em
						uma família de classe média, com custos apertados e uma relação
						familiar unilateral, tóxica, teve muitos sonhos desperdiçados pela
						falta de estímulo e investimento. Seus pais nunca foram muito
						chegados à literatura, cinema, ou música, no geral eram os típicos
						trabalhadores de bem.
					</p>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp;Nada ruim, eles deram orgulho e importantes lições ao autor,
						mas faltava algo, a fé em uma vida melhor, acostumados com a vida
						que possuíam, quase sempre ignoravam a ideia de que um senso
						intelectual surgia na família, um pensador incompreendido, um
						filósofo incompreendido.{" "}
					</p>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp;Aquino sonhava com um padrão melhor de existência não só para
						si, mas para todos os seus, ele nunca foi obediente à doutrinação de
						onde quer que ela viesse e sempre foi visto com maus olhos por todos
						que acompanhavam sua trajetória com sangue nos dentes. Nunca foi um
						bom aluno, ou estudioso, sempre gostou de realizar projetos
						mirabolantes que sempre tinha falta de algo de grande importância
						para que acontecessem. Um dia, Gabriel acordou com vontade de
						vomitar uma ideia louca no papel, escreveu sobre um reino distante e
						batalhas de navios nas ilhas galápagos, nada muito palpável, apenas
						besteiras soltas... Um ano depois, virou trinta páginas, depois
						sessenta... E contra a vontade de seus familiares e com a ajuda de
						seu pai, em 07 de outubro de 2020, Gabriel Aquino finalmente chegou
						à uma editora com seu primeiro rascunho.
					</p>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						Trionte iria existir para todos.{" "}
					</p>
					<br />
					<br />

					<h3 className="text-2xl p-2 px-10">
						A solidão do autor e amizade dos personagens de tinta e papel.{" "}
					</h3>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp; Gabriel Aquino é um cara estranho, isso ninguém pode negar,
						mas daí julgar o cara pelo seu jeito, já é sacanagem. Tendo um senso
						de amizade muito rebuscado para a simplicidade brasileira e uma
						crença transparente e polvorosa de que basta acreditar com fervor e
						tudo o que tocar terá sucesso, Gabriel sempre se colocou muito
						sozinho desde criança, sempre com ideias atípicas de fundar uma
						sociedade secreta, ou criar projetos de grande impacto, foi
						reconhecido em seu meio, como “o pequeno doido”, “jeito amigável”,
						de reconhecer o pensamento fora da caixa de Aquino, ele não era nem
						de longe o cara mais inteligente do mundo, mas bem esperto, ou
						popular, mas é inegável que genérico, Gabriel Aquino nunca foi.{" "}
					</p>
					<p className="text-justify text-lg p-2 max-w-2xl self-center">
						&emsp; As amizades nunca foram o forte de Aquino, ele conseguia se
						expressar bem demais e isso causava repulsa em seus colegas, que o
						comparavam constantemente com um antissocial, arrogante e hermético,
						escândalos envolvendo feminismo e homofobia impulsionaram ainda mais
						Gabriel ao declínio social, ele já não conseguia sair de casa e tudo
						isso se transformou em uma ditadura opressora, a única forma era
						andar de dia sobre os leões e de noite, escrever sobre as aventuras
						da vida em um mundo fictício. E assim, em sua mente, Thomas Afftton,
						Helena Goldflower, Simon Blackston e Suzana Ediphy nasceram e se
						tornaram seus melhores amigos de tinta e papel, Gabriel se apegou
						tanto aos personagens que começou a escrever trechos de seus
						passados na vida dos personagens, de forma que eles e os leitores
						pudessem compreender algo, Aquino fala abertamente da alegria que
						possui com Trionte do amor sem igual ao primeiro livro.{" "}
					</p>
				</div>
			</BodyPage>
		</Page>

	)
}
