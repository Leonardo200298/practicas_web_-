document.querySelector("#btn_toggle").addEventListener("click", () => {
  document.querySelector("span").classList.toggle("subrayado");
});

let lista = document.querySelector("#lista");

let botonAgregar = document
  .querySelector("#generar")
  .addEventListener("click", () => {
    let elementoLi = `<li id="nodos">Hola <button id="btn_borrar">borrar</button></li>`;
    lista.innerHTML += elementoLi;
    document.querySelectorAll("#nodos").forEach((element) => {
    console.log(element.id);
    console.log(element.childNodes[1].id);
    element.childNodes[1].addEventListener("click", () => {
        elementoLi =  `<li></li>`
      });
    });
  });

