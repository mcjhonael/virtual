let tbody = document.getElementById("tbody");
let btnLlenar = document.getElementById("btnLlenar");

const llenarTable = () => {
  let content = "";
  covid.forEach((objCovid, id) => {
    content += `
    <tr>
      <th>${id}</th>
      <th>${objCovid.country}</th>
      <th>${objCovid.cases}</th>
      <th>${objCovid.active}</th>
      <th>${objCovid.recovered}</th>
      <th><button type="button">Eliminar</button>
      <button  type="button">editar</button></th>
    </tr>
    `;
  });
  tbody.innerHTML = content;
};

btnLlenar.onclick = () => {
  llenarTable();
};