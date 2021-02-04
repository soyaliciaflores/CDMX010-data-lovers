
import {theAthletes} from './data/athletes/athletes.js';

 export const filterSearch = () => {

    const losAtletas= theAthletes.athletes
    const formulario = document.querySelector("#searchB");
    const resultadoDelFinder = document.querySelector("#resultados")
    const textUser = formulario.value.toLowerCase();
    for(let e of losAtletas){
        let nombre = e.name.toLowerCase();
        if(nombre.indexOf(textUser) !== -1){
            resultadoDelFinder.innerHTML += 
            cards(e);
        }}
    if(resultadoDelFinder.innerHTML === ""){
        resultadoDelFinder.innerHTML += `
        <h1> The athlete don´t have found...try again</h1>
            `
    }}

    export let cards = (athlete) => {
        let card = `
        <div class="cardAthletes">
        <img class="logochico" src="assets/logo rio de janeiro.png">
        <h1 class="name">Name: ${athlete.name}</h1>
        <h2>Gender: ${athlete.gender}</h2>
        <h2>Height: ${athlete.height}</h2>
        <h2>Weight: ${athlete.weight}</h2>
        <h2>Sport: ${athlete.sport}</h2>
        <h2>Team: ${athlete.team}</h2>
        <h2>Age: ${athlete.age}</h2>
        <h2>Event: ${athlete.event}</h2>
        <h2>Medal: ${athlete.medal}</h2>
        </div>
        `;
        return card;
    }
