const overlay = document.querySelector('.overlay');
const card = document.querySelector('.card');

//Fetch Functions
function fetchData(url) {
    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error => "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."));
}

Promise.all([
    fecthData('https://randomuser.me/api/')
    fecthData('https://randomuser.me/api/portraits')
    fecthData('https://randomuser.me/api/?exc=login')
])

.then(data => {
    console.log(data);
})

