let logo = "";
async function Logo() {
  let data = await fetch("https://api.jsonbin.io/v3/b/65a18b5bdc74654018916634");
  let res = await data.json();
  logo = res.map((elem) => {
  return `
  
  <img src="${elem.logo}" class="img"/>
  </div>
  `

  });
  document.querySelector("#games").innerHTML += logo.join("");
}
export default Logo;
