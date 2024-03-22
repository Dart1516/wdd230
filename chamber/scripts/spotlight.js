const urlJson = 'https://dart1516.github.io/wdd230/chamber/data/members.json';

async function getData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

// to select a random gold member
function selectRandom(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// a random member each time
function updateMemberSpotlights(members) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = ''; // this is for cleaning tle last

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card1');
        card.innerHTML = `
            <h3>${member.names}</h3>
            <p>${member.legalRepresentative}</p>
            <p>${member.phone[0].phone1}</p>
            <a class="color_link" href= "https://www.churchofjesuschrist.org/">${member.websiteURL}</a>
        `;
        container.appendChild(card);
    });
}

async function getGoldMembers() {
    const data = await getData(urlJson);
    if (!data) return;
    const goldMembers = data.Companies.filter(member => member.membershipLevel === 'Gold');
    const selectedMembers = selectRandom(goldMembers, 3); 
    updateMemberSpotlights(selectedMembers);
}

getGoldMembers();