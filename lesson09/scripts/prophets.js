const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

  // THOUGH ANOTHER WAY OF DOING IT IS LIKE THIS ACCORDING THE EXAMPLE
  async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {  // card build code goes here
        //create a section element and store it in a variable named card using createElement(),
        let card = document.createElement('section');
        // create an h2 element and store it in a variable named "fullName",
        let fullName = document.createElement("h2") // fill in the blank
        //create an img element and store it in a variable named "portrait",
        let portrait = document.createElement("img") 
        //populate the heading element with the prophet's full name using a template string to build the full name
        fullName.textContent = `${prophet.name}  ${prophet.lastname}`;// in blank
        // build the image element by setting the  src, alt, loading, width, and height attributes using setAttribute(). 
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName); //fill in the blank
   
        
        let birthInformation = document.createElement("p")
        birthInformation.innerHTML=`Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace} `;
        card.appendChild(birthInformation);
        
        card.appendChild(portrait);

        //Finally, add the section card to the "cards" div that was selected at the beginning of the script file.
        cards.appendChild(card);
    });  
  }