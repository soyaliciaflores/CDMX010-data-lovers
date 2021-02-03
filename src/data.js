// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

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

export function showCards() {
  const losAtletas = theAthletes.athletes;
  let cardsFunction = losAtletas.map((athlete)=>{
      return  cards(athlete);
      }).join(" ");

  document.getElementById("resultados").innerHTML= cardsFunction
    };
