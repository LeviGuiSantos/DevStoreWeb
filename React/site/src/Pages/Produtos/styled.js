import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;

.novo-produto-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;       
}

.bar-novo-produto {
    border: 3px solid #119FDC;
    border-radius: .5em;
    margin-right: .4em;
    background-color: #119FDC;
}

.text-novo-produto {
    display: flex;
    flex-direction: row;

    font-size: 32px;
}

.text-novo-produto div {
    font-weight: bolder;
}

.input-novo-produto {
    display: flex;
    flex-direction: row;
    padding-top: 2.4em;
    flex-wrap: wrap;
}

.agp-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.agp-input-1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    margin-left: 24.8em;
    margin-top: -22.3em;
}

.agp-input-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    margin-left: 24em;
}

.agp-input-3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    margin-left: 25.3em;
}

.input {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    flex-wrap: wrap;
}

.input-left {
    display: flex;
    flex-direction: column;
    margin-right: 3em;
    flex-wrap: wrap;
}

.input-right {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    flex-wrap: wrap;
}

input {
    width: 209px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 0.5em;
    flex-wrap: wrap;
}

.input-1 {
    width: 600px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 0.5em;
    flex-wrap: wrap;
}

.input-2 {
    width: 600px;
    height: 10em;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 0.5em;
    flex-wrap: wrap;

    align-items: flex-start;
}

.nome-produto {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    padding-left: 1em;
    font-weight: 800;

    margin-left: 0.3em;
}

.categoria-produto {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    font-weight: 800;

    margin-left: 0.3em;
}

.avaliacao-produto {
    font-size: 18px;
    color: #615858;
    margin-right: 0.8em;
    font-weight: 800;

    margin-left: 0.3em;
}

.descricao-produto {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;

    margin-top: -6.1em;
}

.img-produto {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;

    margin-left: -1.3em;
}

.preco-de-produto {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;
}

.preco-por-produto {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;
}

.estoque-produto {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;
}

.botao-criar {
    align-self: flex-end;
    justify-self: flex-end;
    padding-bottom: 1.5em;
}

.botao-criar button {
    width: 106px;
    height: 36px;

    background: #119FDC;
    border-radius: 44px;
    border: none;
    color: white;
    font-size: 14px;
    margin-left: 2em;
    font-weight: bold;
}

.botao-1 {
    margin-top: 15em;
}
.produto-registrado-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;
    margin-top: 2em;  
}

.text-produto-registrado {
    display: flex;
    flex-direction: row;
    font-weight: bolder;
    font-size: 32px;
    padding-left: .3em;
}

.row-bar {
    display: flex;
    flex-direction: row;
}

.information-blue {
    display: flex;
    flex-direction: row;
    background: #6CC3DF;
    width: 1454px;
    height: 67px;
    color: #FFFFFF;
    justify-content: space-evenly;
    margin-top: 2em;
    align-items: center;
    font-size: 18px ;
    margin-bottom: 1em;
 }

.gray {
    width: 1454px;
    height: 61.93px;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    
    align-items: center;
    font-size: 18px;
}

.white {
    width: 1454px;
    height: 61.93px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
        
    align-items: center;
    font-size: 18px;
}

.box-information {
    border: 1px solid #E2E2E2;
}

.body-right-box {
    display: flex;
    flex-direction: column;

    background-color: #F5F5F5;

    height: 100%;
    padding: 3em;
        
    margin-bottom: 0em;
    margin-right: 0em;
}

.reader-right-box {
    margin-top: 0em;
    padding-right: 0em;  
}

td button {
    border-radius: 50%;
    background-color: #565656;
    border: none;
    width: 31px;
    height: 31px;
}
    
.box-imagem {
    margin-right: 2em;
}

thead {
    background-color: #6CC3DF;
}

table {
    margin-top: 2em;
}

tbody {
    background-color: #F5F5F5;
}

td {
    text-align: left;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
} 
    
.tabela-usuario {
    border-collapse: collapse;
}

.linha-alternada {
    background-color: #fff;
}

.coluna-acao {
    width: .1em;
}

.coluna-acao > button {
    visibility: hidden;
}

tr:hover {
    .coluna-acao > button {
        visibility: visible;
    }
}

button {
    cursor: pointer;
}

.botao-criar button:hover {
    background-color: #6CC3DF;
    transition: 2s;
}

img {
    cursor: pointer;
}

.absolute {
    color: white;
    background-color: #119FDC;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: .7em;
}

.usuario-imagem {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;   
}

.usuario-imagem img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;    
}
`;

const Elementos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export { Container, Elementos };