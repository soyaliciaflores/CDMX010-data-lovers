

 
// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



export function showCards() {
  const losAtletas = theAthletes.athletes;
  let cardsFunction = losAtletas.map((athlete)=>{
      return  cards(athlete);
      }).join(" ");

  document.getElementById("resultados").innerHTML= cardsFunction
    };


