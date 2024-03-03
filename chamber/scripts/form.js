// Obtén una referencia al div de la tarjeta
const cardDiv = document.querySelector('.card');

// Agrega un evento de cambio a los radios de membresía
document.querySelectorAll('input[type=radio][name=membership]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // Oculta todos los detalles de los planes
        cardDiv.innerHTML = '';

        // Muestra el detalle del plan seleccionado
        if (this.value === 'non-profit') {
            showNonProfitDetails();
        } else if (this.value === 'bronze') {
            showBronzeDetails();
        } else if (this.value === 'silver') {
            showSilverDetails();
        } else if (this.value === 'gold') {
            showGoldDetails();
        }
    });
});

// Funciones para mostrar los detalles de cada plan
function showNonProfitDetails() {
    cardDiv.innerHTML = `
        <h3>NP Membership is for non-profit organizations and there is no fee.</h3>
        <p>Benefits:</p>
        <ul>
            <li>Access to networking opportunities with other non-profit organizations.</li>
            <li>Listing in the chamber's directory for increased visibility.</li>
            <!-- Add other benefits here -->
        </ul>`;
    
}

function showBronzeDetails() {
    cardDiv.innerHTML = `
        <h3>Bronze Membership</h3>
        <p>Price: $50 per month</p>
        <p>Benefits:</p>
        <ul>
            <li>Full access to the careers and job opportunities section related to the Harry Potter world.</li>
            <li>Exclusive discounts on special events organized by the chamber.</li>
            <!-- Add other benefits here -->
        </ul>
    `;
}

function showSilverDetails() {
    cardDiv.innerHTML = `
        <h3>Silver Membership</h3>
        <p>Price: $150 per month</p>
        <p>Benefits:</p>
        <ul>
            <li>Priority access to exclusive events, including meetings with prominent figures from the magical world and the professional realm.</li>
            <li>Free or discounted attendance to workshops and specialized courses in skills and knowledge relevant to the community.</li>
            <!-- Add other benefits here -->
        </ul>
    `;
}

function showGoldDetails() {
    cardDiv.innerHTML = `
        <h3>Gold Membership</h3>
        <p>Price: $300 per month</p>
        <p>Benefits:</p>
        <ul>
            <li>Unlimited access to premium platform features, including the ability to highlight your profile or job listings in searches.</li>
            <li>Personalized mentoring sessions with experts in various fields related to the Harry Potter world and the professional realm.</li>
            <!-- Add other benefits here -->
        </ul>
    `;
}
//to select automatically
const nonProfitRadio = document.getElementById('non-profit');
nonProfitRadio.checked = true;
showNonProfitDetails();