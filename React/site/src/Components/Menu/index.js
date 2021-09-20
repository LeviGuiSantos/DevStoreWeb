import { Container } from './styled.js';

export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <img src="/Assets/Images/Logo-DevStore.png"/> </div>
                <div className="titulo-site"> <span>Dev</span>Store</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-gerenciamento">
                <div>Gerenciamento</div>
                <img src="/Assets/Images/Ícone-Chevron-Down.svg"/>
            </div>
            <div className="left-box-produtos">
                <div>Produtos</div>
            </div> 
        </Container>
    );
};