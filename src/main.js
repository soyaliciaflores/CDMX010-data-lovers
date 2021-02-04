import {theAthletes} from './data/athletes/athletes.js';
import {filterSearch, cards} from './data.js';

const losAtletas= theAthletes.athletes
const butShowAll= document.getElementById("buttonShowAll");
butShowAll.addEventListener ("click", function showCards() {
   let cardsFunction = losAtletas.map((e)=>{
       return cards(e);
   }).join(""); 
  document.getElementById("resultados").innerHTML= cardsFunction
});
const selectGender = document.querySelector("#genderFilter");
const selectMedal = document.querySelector("#medalFilter");
const selectTeam = document.querySelector("#pais");
const selectSport = document.querySelector("#sportSelector")
const buttonSearch = document.getElementById("buttonsearch2");
buttonSearch.addEventListener("click", function theGenderFilter() {
    let athletesFilter = theAthletes.athletes;
    let html1 = ""
    let results = document.querySelector("#resultados");

    let filterGender = athletesFilter.filter( athlete => athlete.sport === selectSport.value && athlete.gender === selectGender.value && athlete.medal === selectMedal.value && athlete.team === selectTeam.value)
    filterGender.forEach( athlete => { html1 += cards(athlete)})
    results.innerHTML= html1;
  
    const theTotal = filterGender.length;
    let element = document.createElement("p")
    element.textContent = `${theTotal} Total`
    const nav = document.querySelector("#totalFilter");
    nav.appendChild(element);
    nav.innerHTML = theTotal;
});  

const losAtletas2 = theAthletes.athletes;
losAtletas2.sort( function (a,b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});
// muestra una lista con total de los equipos ganadores 
document.getElementById("allCountries").addEventListener("click", function () {
    const importedAthletes=theAthletes.athletes;
    let countries = importedAthletes.slice(0);
    countries.sort(function(a,b) {
         var x = a.team.toLowerCase(); 
         var y = b.team.toLowerCase(); 
        return x < y ? -1 : x > y ? 1 : 0;
    });
    let countriesOne = [...new Set(countries.map(item => item.team))];
    
  let cardsFunction22 = () => {
        let containerCards22 = document.getElementById("card");
        let html = `
       <div class="cardTeam" >

                 <img src="assets/logo rio de janeiro.png" class="mediumLogo">                       
                 <div class="titletotalteams">${countriesOne.length} Equipos ganaron medallas</div> 
                 <br> 
                 <img src="assets/logo rio de janeiro.png" class="mediumLogo">

       </div>
      <table>  
        <tr>
        `;
          countriesOne.map(( country ) => {
            let card22 = `
                 <td class="itemTeam"> ${country} </td> 
                 `
                html += card22 ;                     
          }); 
          html += `
        </tr>
      </table>
          `; 
      containerCards22.innerHTML = html;
    };
    cardsFunction22()

  });

    //imprime el menu de deportes
    function cargarSports (){
        let allSports = ["Archery", "Athletics", "Badminton", "Basketball", "Beach Volleyball", "Boxing", "Canoeing", "Cycling", "Diving", "Equestrianism", "Fencing", "Football", "Golf", "Gymnastics", "Handball", "Hockey",
            "Judo", "Modern Pentathlon", "Rhythmic Gymnastics", "Rowing", "Rugby Sevens", "Sailing", "Shooting", "Swimming", "Synchronized Swimming", "Table Tennis", "Taekwondo", "Tennis", "Trampolining", "Triathlon", 
            "Volleyball", "Water Polo", "Weightlifting", "Wrestling"]
        let sportSelector = document.getElementById("sportSelector");
        for (let i=0; i<allSports.length; i++){
        let option = document.createElement("option"); //se crea la opcion
        option.innerHTML=allSports[i];
        sportSelector.appendChild(option);
        }}
        cargarSports();
//Inicia la función que carga los datos en el menú desplegable de países
function cargarCountries(){
  const paises = [ "Algeria", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",  "Bahamas",  "Bahrain", "Belarus", "Belgium", "Brazil", "Brazil-1", "Bulgaria", "Burundi", "Canada", "China", "China-1", "Chinese Taipei", "Colombia", 
          "Cote d'Ivoire", "Croatia", "Cuba", "Czech Republic", "Czech Republic-1", "Denmark", "Dominican Republic", "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Georgia", "Germany", "Germany-1", "Great Britain", "Greece",
          "Grenada", "Hungary", "India", "Individual Olympic Athletes", "Indonesia", "Indonesia-1", "Iran", "Ireland", "Israel", "Italy", "Italy-1", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Lithuania", "Malaysia","Mexico",
          "Mongolia", "Morocco", "Netherlands", "Netherlands-1", "New Zealand", "Niger", "Nigeria", "North Korea", "Norway", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Russia-2", "Serbia", "Singapore",
          "Slovakia", "Slovenia", "South Africa", "South Korea", "South Korea-1", "Spain", "Spain-2", "Sweden", "Switzerland", "Tajikistan", "Thailand", "Trinidad and Tobago", "Tunisia", "Turkey", "Ukraine", "United Arab Emirates", "United States",
          "United States-1", "United States-2", "Uzbekistan", "Venezuela", "Vietnam"];
  const select = document.getElementById("pais"); //selecciona el select
  for (let i=0; i<paises.length; i++){
      let option = document.createElement("option"); //se crea la opcion
      option.innerHTML=paises[i]; //se mete el texto en la opción
      select.appendChild(option); // se mete la opción en el select
  }}

  cargarCountries();        

//Inicia la función que busca por coincidenicia de nombre
const boton = document.querySelector("#buttonFinder");
boton.addEventListener("click", filterSearch);


