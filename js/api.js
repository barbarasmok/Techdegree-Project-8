const randomuserUrl = 'https://randomuser.me/api/?format=json';
const overlay = document.querySelector('.overlay');
const card = document.querySelector('.cards');
const employeesList = document.getElementById('employees');

//Fetch Functions
function fetchData(url) {
   return fetch(url)
        .then(res => res.json())
         .catch(error => console.log(err => "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.", err));
}

 Promise.all([
     fetchData('https://randomuser.me/api/')
     fetchData('https://randomuser.me/api/?page=3&results=10&seed=abc')
     fetchData('https://randomuser.me/api/?inc=name,location,email,phone,cell,id,picture,nat')
])

console.log(fetchData);

.then(data => {
    const employees = data[0].message;
    const randomImage = data[1].message;
})

//Helper functions
function checkStatus(response) {
    if(response.Ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function generateHTML(data) {
    const html = `
        <img src='${data}' alt>
        <h2>${person.name} ${person.lastName}</h2>
         <span>${person.email}</span>
         <p>${person.city}</p>
         `;

    cards.innerHTML = html;
}

function fetchData() {
    const employee = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    fetchData('https://randomuser.me/api/?inc=name,location,email,phone,cell,id,picture,nat')
        .then(data => {
            img.src = data.message;
            img.alt = profile;
        })
}

//Post Data
function postData(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const config = {
        method: 'POST',
        headers {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, city})
    }

    fetch('https://randomuser.me/api/?inc=name,location,email,phone,cell,id,picture,nat', config)
        .then(checkStatus)
        .then(res => res.JSON())
        .then(data => console.log(data))
}



// //Fetch Functions 
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
// cards.addEventListener('mouseover', (event) => {

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
