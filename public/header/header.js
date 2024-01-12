let header = "";
async function Header() {
  let data = await fetch("http://localhost:3000/header");
  let res = await data.json();
  header = res.map((elem) => { 
    if(elem.dropdown.length===0){
      return `
      <li class="nav-item">
      <a href="#" class="nav-link d-flex justify-content-centeralign-items-center gap-2" >${elem.svg}${elem.link}</a>
    
      </li>
     `
    }else{
return`
<li class="nav-item dropdown ">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">${elem.link}</a>
<ul class="dropdown-menu    ">
  ${elem.dropdown.map((item)=>{
return`    <li><a class="dropdown-item" href="#">${item.svg}${item.text}</a></li>
`
  }).join("")}
</ul>
</li>
`
    }
  
  });
  document.querySelector("#head").innerHTML += header.join(""); 
}
export default   Header;
  