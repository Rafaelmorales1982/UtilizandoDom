const caixaCursos = document.querySelector("#caixaCursos");
const cursos = ["HTML",  "CSS",  "JavaScript",  "PHP",  "React",  " MySQL",  "ReactNative",];
//pegando botão para selecionar os cursos
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois");
const nomeCurso = document.getElementById("nomeCurso");


let indice = 0; //vai dar a posição do elemento para não ter id duplicado
const criarNovoCurso=(curso)=>{
    //criando uma div para ser adicionanda na página dentro container caixa1
    const novoElemento = document.createElement("div");
    //criando id e adicionando chave para colocar sequência numérica pois chave gera a quantidade do array cursos
    novoElemento.setAttribute("id", "c" +indice); //chave mais 1 vai começar com 1 de forma sequêncial depende da quantidade de cursos
    novoElemento.setAttribute("class", "curso c1");
    //adicionando um texto com innerHTML
    novoElemento.innerHTML = curso; //mostra os cursos do array
  
    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");
  
    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");
  
    comandos.appendChild(rb);
    novoElemento.appendChild(comandos);
    return novoElemento;

}


//criando um MAP para percorrer todos elementos do array cursos
cursos.map((elemento, chave) => {
//variável recebendo função ja criada (esta function cria os elementos)
  const novoElemento = criarNovoCurso(elemento);
  //tudo isso acima vai ser adicionando na página dentro container caixaCursos
  caixaCursos.appendChild(novoElemento);
  indice++;
});

const radioSelecionado = ()=>{
  const todosRadios = [...document.querySelectorAll("input[type=radio]")];
  //filtrando todos os btn radios para poder selecionar aquele que estiver ligado
  let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
    return ele.checked;
  });
  return radioSelecionado[0];
}
//quando botão radio tiver selecionado mostra alert com nome do curso
btnCursoSelecionado.addEventListener("click", (evt) => {
  const rs = radioSelecionado();//obtendo função para radioSelecionado
  //console.log(rs)
  /*
  if(rs != undefined){// se for diferente de indefinido mostra o nome do curso selecionado
    const cursoSelecionado = rs.parentNode.previousSibling.textContent;
    alert("Curso selecionado" + " " + cursoSelecionado);
  }else{//caso seja indefinido mostra esta mensagem
    alert("Selecione um curso ");
  }
*/
  /**Utilizando try catch ou if para tratamento de erros */
  try{
    const cursoSelecionado = rs.parentNode.previousSibling.textContent;
    alert("Curso selecionado" + " " + cursoSelecionado);
  }catch{
    alert("Selecione um curso ");
  }

});
  
  btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = radioSelecionado();
    if(rs != undefined){
    const cursoSelecionado = rs.parentNode.parentNode;
    alert(`${cursoSelecionado.textContent} foi removido`);
    cursoSelecionado.remove();
    }else {
      alert("Selecione um curso para remover")
    }

  });

//criando eventos de clique para adicionar antes e depois
btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
  const rs = radioSelecionado();//pegando  esta função para saber o elemento selecionando
  try{
    if(nomeCurso.value != ""){
      const cursoSelecionado = rs.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);//pegando a função que cria os elementos do curso
      alert(`${novoCurso.textContent} vai ser adicionado antes do curso ${cursoSelecionado.textContent}`);
      caixaCursos.insertBefore(novoCurso,cursoSelecionado);

    }else{
      alert("Digite o nome do curso");
    }

  } catch(ex){
    alert("Selecione um curso");
  }
});

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
  const rs = radioSelecionado();//pegando  esta função para saber o elemento selecionando
  try{
    if(nomeCurso.value != ""){
      const cursoSelecionado = rs.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);//pegando a função que cria os elementos do curso
      alert(`${novoCurso.textContent} vai ser adicionado depois do curso ${cursoSelecionado.textContent}`);
      caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling);

    }else{
      alert("Digite o nome do curso");
    }

  } catch(ex){
    alert("Selecione um curso");
  }

});

  /*

  console.log(cursoSelecionado);
  console.log(todosRadios);
  console.log(radioSelecionado);
  */

/* 
parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSbling

*/
