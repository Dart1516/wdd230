document.addEventListener("DOMContentLoaded", () => {
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("#mainDiv");

    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }

    const baseURL = "https://dart1516.github.io/wdd230/chamber/";
    const companiesURL = baseURL + "data/members.json";

    getCompaniesData();

    async function getCompaniesData() {
        try {
            const response = await fetch(companiesURL);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // testing only
                displayCompanies(data.Companies);
            } else {
                console.error("Error fetching data:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayCompanies(companies) {
        display.innerHTML = "";
    
        companies.forEach(company => {
            const { names, category, addresses, 
                phone, websiteURL, image, 
                membershipLevel, legalRepresentative } = company;
    

            const phone1 = phone[0].phone1;
            const phone2 = phone[0].phone2;
    
            const companyHTML = `
                <section class="card">
                    <img src="${image}" alt="${names} loading="lazy"">
                    <h3>${names}</h3>
                    <p>Company Category: ${category}</p>
                    <p>Company Representative: ${legalRepresentative}</p>
                    <p>Company Membership Level: ${membershipLevel}</p>
                    <p>Phone Numbers: ${phone1} / ${phone2}</p>
                    <p>Company Address: ${addresses}</p>
                    <a  class="color_link" href="${websiteURL}" target="_blank">${websiteURL}</a>
                </section>
            `;
            display.innerHTML += companyHTML;
        });
    }
});
