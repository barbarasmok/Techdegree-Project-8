//Global variables
let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

//Fetch data from API
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(displayEmployees)
    .catch(err => console.log(err))

function displayEmployees(employeeData) {
     employees = employeeData;
     //store HTML
     let employeeHTML = '';

     //Loop
     employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        employeeHTML += `
            <div class="card" data-index="${index}">
            <img class="avatar" src="${picture.large}" />
            <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
            </div>
            </div>
            `
    });
    gridContainer.innerHTML = employeeHTML;
};

//Display Modal function 
function displayModal(index) {
    let { name, dob, phone, email, 
        location: { city, street, state, postcode}, 
        picture } = employees[index];

    let date = new Date(dob.date);3
    const modalHTML = `
        <img class="avatar" src="${picture.large}" />
        <div class="text-container">
        <h2 class="name">${name.first} ${name.last}</h2>
        <p class="email">${email}</p>
        <p class="address">${city}</p>
        <hr />
        <p>${phone}</p>
        <p class="address">${street}, ${state} ${postcode}</p>
        <p>Birthday:
        ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
        </div>
    `;

    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
};

// //Fetch Functions
// function fetchData(urlAPI) {
//    return fetch(url)
//         .then(res => res.json())
//         .catch(error => console.log(err => "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.", err));
// }

// Promise.all([
//      fetchData('https://randomuser.me/api/'),
//      fetchData('https://randomuser.me/api/?page=3&results=10&seed=abc'),
//      fetchData('https://randomuser.me/api/?inc=name,location,email,phone,cell,id,picture,nat')
// ])


// //Helper functions
// function checkStatus(response) {
//     if(response.Ok) {
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }

// function generateHTML(data) {
//     const html = `
//         <img src='${data}' alt>
//         <h2>${person.name} ${person.lastName}</h2>
//          <span>${person.email}</span>
//          <p>${person.city}</p>
//          `;

//     card.innerHTML = html;
// }

// //Post Data
// function postData(e) {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const city = document.getElementById('city').value;
//     const config = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, city})
//     }

//     fetch('https://randomuser.me/api/?inc=name,location,email,phone,cell,id,picture,nat', config)
//         .then(checkStatus)
//         .then(res => res.JSON())
//         .then(data => console.log(data))
// }


//THIS METHOD ISN"T WORKING EITHER
// Fetch Functions 
// function getProfiles(json) {
//     const profiles = json.people.map(person => {
//         const name = person.name;
//         return fetch(randomuserUrl + person.name)
//             .then(res => res.json())
//             .then(profile => {
//                 return { ...profile, name };
//             })
//             .catch(err => console.log('Error Fetching Random user', err))
//     });
//     return Promise.all(profiles);
// }

// //Generate HTMLs 
// function generateHTML(data) {
//     data.map(person => {
//         const section = document.createElement('section');
//         employeesList.appendChild(section);
//         section.innerHTML = `
//         <img src=${person.thumbnail.source}></img>
//         <h2>${person.name} ${person.lastName}</h2>
//         <span>${person.email}</span>
//         <p>${person.city}</p>
//         `;
//     });
// }

// function overlayCard(data) {
//     data.map(person => {
//         const section = document.createElement('section');
//         overlay.appendChild(section);
//         section.innerHTML = `
//             <img src=${person.thumbnail.source}></img>
//             <h2>${person.name} ${person.lastName}</h2>
//             <span>${person.email}</span>
//             <p>${person.cell}</p>
//             <p>${person.address}</p>
//             <p>${person.birthdate}</p>
//         `;
//     });
// }


// //Overlay set up
// card.addEventListener('mouseover', (event) => {

//     fetch(randomuserUrl)
//         .then(res => res.json())
//         .then(getProfiles)
//         .then(overlayCard)
//         .catch(err => {
//             peopleList.innerHTML = '<h3>Something went wrong!</h3>';
//             console.log(err);
//         })
//         .finally(() => event.target.remove)

// });
