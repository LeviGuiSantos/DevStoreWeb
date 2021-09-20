import { Container, Elementos } from './styled.js';

import { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Cabecalho from '../../Components/Cabecalho';
import Menu from '../../Components/Menu';

import Api from '../../Service/api.js';
const api = new Api();

export default function Index() {
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);
    const loading = useRef(null);

    async function revisarErro(error){
        if (!error.e) 
            return true;
        toast.error(`${error.e}`);
            return false;
    };

    async function listarProduto() {
        loading.current.continuousStart();
        let r = await api.listar();
        setProdutos(r);
        loading.current.complete();
    };

    async function inserirProduto() {
    if (!nome || nome === '')
        return toast.error('Campo de Nome Precisa Ser Preenchido!');

    if (!categoria || categoria === '')
        return toast.error('Campo de Categoria Precisa Ser Preenchido!');

    if (!avaliacao || avaliacao === '')
        return toast.error('Campo de Avaliação Precisa Ser Preenchido!');

    if (avaliacao <= 0)
        return toast.error('Campo de Avaliação Precisa Ter Um Número Válido!');

    if (avaliacao <= 10)
        return toast.error('Campo de Avaliação Pode Conter no Máximo Até o Valor 10!');

    if (!descricao || descricao === '')
        return toast.error('Campo de Descrição Precisa Ser Preenchido!');
    
    if (!imagem || imagem === '')
        return toast.error('Campo de Imagem Precisa Ser Preenchido!');

    if (!precoDe || precoDe === '')
        return toast.error('Campo de Preço DE Precisa Ser Preenchido!');

    if (precoDe <= 0)
        return toast.error('Campo de Preço DE Precisa Ter Um Número Válido!');

    if (!precoPor || precoPor === '')
        return toast.error('Campo de Preço POR Precisa Ser Preenchido!');

    if (precoPor <= 0)
        return toast.error('Campo de Preço POR Precisa Ter Um Número Válido!');

    if (!estoque || estoque === '')
        return toast.error('Campo de Estoque Precisa Ser Preenchido!');

    if (estoque <= 0)
        return toast.error('Campo de Estoque Precisa Ter Um Número Válido!');

    if (idAlterando > 0) {
            const r = await api.editar(nome, categoria, avaliacao, imagem, descricao, precoDe, precoPor, estoque);
                if (r.erro)
                    return toast.error(`Esse Produto Já Existe!`);
                if (r.Status)
                    return toast.error(`${r.Status}`);
            
                           toast.dark(`Produto ${nome} Alterado!`);
    
                listarProduto();
                limparCampos();
    
            } else {
                const e = await api.inserir(idAlterando, avaliacao, precoDe, precoPor, estoque);
                if (e.erro)
                    return toast.error(`Os Campos de Avaliação, Preço DE, Preço POR e Estoque Precisam Ter Um Número!`);
                if (e.status)
                    return toast.error(`${e.status}`)
                                
                           toast.dark(`Produto ${nome} Inserido`);
            
                listarProduto();
                limparCampos();
            };
        
        listarProduto();
        limparCampos();
    };

    async function limparCampos() {
        setNome('');
        setCategoria('');
        setAvaliacao('');
        setImagem('');
        setDescricao('');
        setPrecoDe('');
        setPrecoPor('');
        setEstoque('');
        setIdAlterando(0);
    };

    async function removerProduto() {
        confirmAlert({
            title: 'Remover Produto',
            message: `Você Realmente Deseja Remover o Produto ${nome} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.remover(produtos);
                        toast.dark(`Produto ${nome} Removido com Sucesso!`)
                        listarProduto();
                    }
                },
            {
                label: 'Não',
            }
            ]
        });
    };

    async function editarProduto(item) {
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setImagem(item.img_produto);
        setPrecoDe(item.vl_preco_de);
        setPrecoPor(item.vl_preco_por);
        setEstoque(item.qtd_estoque);
        setIdAlterando(item.id_produto);
    };

    useEffect(() => {
        listarProduto();
    }, []);

    return (
        <Container>
            <Menu />
            <ToastContainer />
            <LoadingBar color="#6CC3DF" ref={loading} />
            <Elementos>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="novo-produto-box">
                        <div class="text-novo-produto">
                            <div class="bar-novo-produto"></div>
                            <div class="text-novo-produto"> {idAlterando == 0 ? "Novo Produto" : "Alterando Produto" + idAlterando}</div>
                        </div>
                        <div class="input-novo-produto"> 
                        <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="nome-produto">Nome:</div>  
                                    <div class="input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="categoria-produto">Categoria:</div>  
                                    <div class="input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/> </div> 
                                </div>
                            </div>
                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="avaliacao-produto">Avaliação:</div>  
                                    <div class="input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="img-produto">Link Imagem:</div>  
                                    <div class="input"> <input class="input-1" type="text" value={imagem} onChange={e => setImagem(e.target.value)}/> </div> 
                                </div>
                                <div class="agp-input">
                                    <div class="descricao-produto">Descrição:</div>  
                                    <div class="input"> <input class="input-2" type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/> </div> 
                                </div>
                                <div class="agp-input-1">
                                    <div class="preco-de-produto">Preço DE:</div>  
                                    <div class="input"> <input type="text" value={precoDe} onChange={e => setPrecoDe(e.target.value)}/> </div> 
                                </div>
                                <div class="agp-input-2">
                                    <div class="preco-por-produto">Preço POR:</div>  
                                    <div class="input"> <input type="text" value={precoPor} onChange={e => setPrecoPor(e.target.value)}/> </div> 
                                </div>
                                <div class="agp-input-3">
                                    <div class="estoque-produto">Estoque:</div>  
                                    <div class="input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/> </div> 
                                </div>
                            </div>
                            <div class="botao-criar"> <button class="botao-1" onClick={inserirProduto}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
                        </div>
                    </div>
                    <div class="produto-registrado-box">
                        <div class="row-bar"> 
                        <div class="bar-novo-produto"> </div>
                        <div class="text-produto-registrado">Produtos Cadastrados</div>
                    </div>
                    <table class ="tabela-usuario">
                        <thead>
                            <tr>
                                <th> </th>
                                <th>ID</th>
                                <th>Produto</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                                <th class="coluna-acao"> </th>
                                <th class="coluna-acao"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((item, i) =>
                                <tr className={i % 2 == 0 ? "linha-alternada" : ""}>
                                    <td> <img src={item.img_produto} style={{width: "55px", height: "55px", borderRadius: "0.5em" }}/> </td>
                                    <td> {item.id_produto} </td>
                                    <td title={item.nm_produto}>
                                            {item.nm_produto != null && item.nm_produto.length >= 25
                                            ? item.nm_produto.substr(0, 25) + '...'
                                            : item.nm_produto}
                                    </td>
                                    <td> {item.ds_categoria} </td>
                                    <td> {item.vl_preco_por} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td className="coluna-acao"> <button onClick={() => editarProduto(item)}> <img src="/Assets/Images/Ícone-Editar.svg"/> </button> </td>
                                    <td className="coluna-acao"> <button onClick={() => removerProduto(item.id_matricula)}> <img src="/Assets/Images/Ícone-Remover.svg"/> </button> </td>
                                </tr>
                            )};
                        </tbody> 
                    </table>
                </div>
            </div>
        </Elementos>
    </Container>
 );
};