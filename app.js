function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga a seção no console para fins de depuração

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);

  // se o campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nenhum atleta foi encontrado. Você precisa digitar o nome de craques brasileiros, que são FLAMENGUISTAS!!! </p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Constrói o HTML para cada item do resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank"> Mais informações:</a>
      </div> 
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nenhum atleta foi encontrado</p>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
