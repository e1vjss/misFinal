
const form = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
        <h3>${name}</h3>
        <p>${message}</p>
    `;

    
    reviewsContainer.appendChild(reviewCard);


    form.reset();
});