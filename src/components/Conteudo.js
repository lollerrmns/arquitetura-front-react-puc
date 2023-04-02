import { Card } from './Card';
import './Conteudo.css';
export const Conteudo = () => (
    <>
        <div class="row-conteudo">
            <div class="col1-conteudo">
                .
            </div>
            <div class="col2-conteudo">
                <h1>Últimas do Blog</h1><br />
                <Card titulo="1 dica para a sua carreira profissional" resumo="Tem leite de morcego? Não? Deus é testemunha de que eu queria leite, então bota uma pinga aí!"></Card>
                <Card titulo="2 dica para a sua carreira profissional" resumo="Tá tudo muito paradis? Tome um mé que o mundo vai girarzis!"></Card>
                <Card titulo="3 dica para a sua carreira profissional" resumo="Suco de cevadiss deixa as pessoas mais interessantiss."></Card>
                <Card titulo="4 dica para a sua carreira profissional" resumo="Mais vale um bebadis conhecidiss, que um alcoolatra anonimiss."></Card>
                <br />
                <br />
                <a href="#" className = "link"><h1> Veja mais . . . </h1></a>
            </div>
        </div>

    </>
);