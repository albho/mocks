// FOLLOW/UNFOLLOW
var followbtn = document.querySelectorAll('.follow-btn');

for (i = 0; i < followbtn.length; ++i) {
    followbtn[i].addEventListener('click', function() {
        if (this.innerHTML === 'Follow') {
            this.innerHTML = 'Following';
            this.style.color = 'white';
            this.style.background = 'var(--primary-blue)';
        } else {
            this.innerHTML = 'Follow';
            this.style.color = 'var(--primary-blue)';
            this.style.background = 'transparent';
        }    
    })
}

// REMOVE TOPIC SUGGESTIONS
var xbtn = document.querySelectorAll('.xbtn');
var suggestionContainer = document.querySelectorAll('.topics-suggestion-container');

for (i = 0; i < xbtn.length; ++i) { 
    xbtn[i].addEventListener('click', function() { // cannot access each via i anymore - value of i now == length as it has finished iterating to add event listeners
        this.parentElement.style.display = 'none'; // omg
    })
}
