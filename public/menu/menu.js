let menu = "";
async function Menu() {
  let data = await fetch("https://api.jsonbin.io/v3/b/65a18b5bdc74654018916634");
  let res = await data.json();
  menu = res.map((elem) => { 
  return `
  <div class="dropdown  col-2 text-center" ><div class=" dropdown-toggle " type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" >${elem.link}</div>
  <ul class="dropdown-menu bg-dark position-absolute top-20  rounded-0  " aria-labelledby="dropdownMenuButton " >
  ${elem.dropdown
    .map((elem) => {
      return `
      <li >
      <a class="dropdown-item d-flex justify-content-center gap-2 align-items-start pointer-event cursor text-white"  >
      <spna>
      <img src="${elem.svg}" class="w-h-25-o "/>
       </spna>
       <span class="d-flex flex-column">
       <span class="t">${elem.textb}</span>
       <span class=" lg:text-[13px] lg:font-[bold] lg:text-gray-600 ">${elem.texts}</span>
      </span>
      </a>
      </li>
      
      `;
    })
    .join("")}
  
  </ul>
  </div>
  `

  });
  document.querySelector("#menu").innerHTML += menu.join("");
}
export default Menu;



  


 