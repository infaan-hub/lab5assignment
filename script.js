document.getElementById('fetchBtn').addEventListener('click', function(){
    
    const number = Number(document.getElementById('numPeople').value);
    const container = document.getElementById('profiles-container');
    const limit = Math.min(number, 10);

    if (!number || number < 1){
        alert('Please enter a number from 1 to 10');
        return;
    }

    container.innerHTML = 'Loading...';

fetch(`https://randomuser.me/api/?results=10`)
.then(response => response.json())
.then(data =>{
    console.log(data);

    container.innerHTML = '';

    data.results.slice(0, limit).forEach(person =>{
        const card = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('p');
        const fullName = person.name.first + ' ' + person.name.last;

        card.className = 'profile-card';
        image.src = person.picture.medium;
        name.textContent = fullName;
        location.textContent = person.location.city + ', ' + person.location.country;

        card.append(image);
        card.append(name);
        card.append(location);
        container.append(card);
    });
})
.catch(error =>{
    container.innerHTML = 'Something went wrong. Please try again.';
    console.error(error);
});
});
