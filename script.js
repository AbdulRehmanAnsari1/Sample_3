
// JavaScript for Welcome Message Modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('welcome-modal');
    const closeBtn = document.querySelector('.close');
    
    // Show modal
    modal.style.display = 'block';

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(function() {
            modal.style.display = 'none';
        }, 500);
    });

    // Automatically close modal after 5 seconds
    setTimeout(function() {
        modal.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(function() {
            modal.style.display = 'none';
        }, 500);
    }, 5000);
});


// JavaScript for Menu Navigation
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const foodItems = document.querySelectorAll('.food-item');
let currentIndex = 0;

// Show the initial set of food items
showFoodItems(currentIndex);

// Function to display food items based on the current index
function showFoodItems(index) {
    // Hide all food items
    foodItems.forEach(item => {
        item.style.display = 'none';
    });

    // Show the food items corresponding to the current index
    for (let i = index; i < index + 3 && i < foodItems.length; i++) {
        foodItems[i].style.display = 'block';
    }
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 3;
        showFoodItems(currentIndex);
    }
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    if (currentIndex + 3 < foodItems.length) {
        currentIndex += 3;
        showFoodItems(currentIndex);
    }
});

// JavaScript for Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('totalAmount');
    
    // Initialize total amount
    let totalAmount = 0;

    // Function to add an item to the cart
    function addToCart(item) {
        const itemName = item.querySelector('h3').innerText;
        const itemPrice = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
        const newItem = document.createElement('li');
        newItem.innerHTML = `${itemName} - $${itemPrice.toFixed(2)} <button class="remove-item-btn">Remove</button>`;
        cartItemsList.appendChild(newItem);
        
        totalAmount += itemPrice;
        updateTotalAmount();
        
        // Event listener to remove item from cart
        newItem.querySelector('.remove-item-btn').addEventListener('click', () => {
            newItem.remove();
            totalAmount -= itemPrice;
            updateTotalAmount();
        });
    }

    // Function to update the total amount in the cart
    function updateTotalAmount() {
        totalAmountSpan.innerText = `$${totalAmount.toFixed(2)}`;
    }

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const foodItem = button.parentElement; // Adjust according to HTML structure
            addToCart(foodItem);
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('review-form');
    const userReviews = document.getElementById('user-reviews');

    // Function to handle form submission
    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const reviewInput = document.getElementById('review-input').value;
        const ratingInput = document.getElementById('rating-input').value;

        // Create a new review element
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `<p><strong>You:</strong> ${reviewInput}</p><p><strong>Rating:</strong> ${ratingInput}</p>`;

        // Insert new review above existing reviews
        userReviews.insertBefore(newReview, userReviews.firstChild);

        // Reset form fields
        reviewForm.reset();
    });
});


// JavaScript for Scroll Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show the scroll top button when user scrolls down
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
