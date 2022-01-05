 class Tabela{

    constructor(){
        this.id = 1;
        this.arrayDados = [];
        this.editDados = null;
    }
    //salvar os dados na tabela/arrayList
    salvar(){
       let dados = this.pegaDados();
        if(this.validaCampos(dados)){
            if(this.editDados == null){
                this.addDados(dados);
            } else{
                this.attDados(this.editDados, dados);
            }
        }
       this.listaDados();
       this.limpaCampos();
    }
    //adicionando-os no arrayList
    addDados(dados){
        dados.idade = parseInt(dados.idade);
        this.arrayDados.push(dados);
        this.id++;
    }
    attDados(id, dados){
        for (let i=0; i<this.arrayDados.length; i++){
            if(this.arrayDados[i].id == id){
                this.arrayDados[i].nome = dados.nome;
                this.arrayDados[i].idade = dados.idade;
        }
    }
    }
    //listando os dados
    listaDados(){
        let Tcorpo = document.getElementById('Tcorpo');
        Tcorpo.innerHTML ='';
        for(let i= 0; i < this.arrayDados.length; i++){
            let tr = Tcorpo.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerHTML = this.arrayDados[i].id;
            td_nome.innerHTML = this.arrayDados[i].nome;
            td_idade.innerHTML = this.arrayDados[i].idade;

            //colocando as imgs e setando os atributos
            let edit = document.createElement('img');
            edit.src = 'images/edit.png';
            edit.setAttribute('onclick', 'tabela.editaCampos('+JSON.stringify(this.arrayDados[i])+")")

            let del = document.createElement('img');
            del.src = 'images/delete.png';

            del.setAttribute('onclick','tabela.delCampos('+ this.arrayDados[i].id +')');

            td_acoes.appendChild(edit);
            td_acoes.appendChild(del);
            
        }
    }
    //coletar os dados fornecidos pelo usuário
    pegaDados(){
        let dados = {}
       dados.id = this.id; 
       dados.nome = document.getElementById('nome').value;
       dados.idade = document.getElementById('idade').value;

        return dados;
    }
    //validando se os campos não estão vazios
    validaCampos(dados){
        let msg ='';

        if(dados.nome ==''){
            msg += 'Informe o seu nome! \n';
        }
        if(dados.idade ==''){
            msg += 'Informe sua idade! \n';
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }
    //função limpar campos
    limpaCampos(){
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('btns').innerHTML = 'Salvar';
        this.editDados = null;
    }
    //função editar os campos
    editaCampos(dados){
        this.editDados = dados.id;
       document.getElementById('nome').value = dados.nome;
       document.getElementById('idade').value = dados.idade;
       document.getElementById('btns').innerHTML = 'Atualizar Dados';

    }
    //deletar o campo selecionado
    delCampos(id){
        if(confirm('Deseja excluir o ID'+id+'?')){
            let tabcorp = document.getElementById('Tcorpo');
        
            for (let i=0; i<this.arrayDados.length; i++){
                if(this.arrayDados[i].id == id){
                    this.arrayDados.splice(i,1);
                    tabcorp.deleteRow(i);
                }
            }
        }
       
    }
 }
 var tabela = new Tabela();