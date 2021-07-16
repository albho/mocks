// FOLLOW/UNFOLLOW
const followbtn = document.querySelectorAll('.follow-btn');

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
const xbtn = document.querySelectorAll('.xbtn');
const suggestionContainer = document.querySelectorAll('.topics-suggestion-container');

for (i = 0; i < xbtn.length; ++i) { 
    xbtn[i].addEventListener('click', function() { // cannot access each via i anymore - value of i now == length as it has finished iterating to add event listeners
        this.parentElement.style.display = 'none'; // omg
    })
}

// STATUS POP-UP
const popUp = document.querySelector('#status-popup');
const status = document.querySelector('#status');

status.addEventListener('focus', function() {
    popUp.style.display = 'block';
  });


// STATUS UPDATE
var statusTweet = document.querySelector('#status-tweet-btn');
var welcomeSection = document.querySelector('#welcome-msg-container');
var statusUpdateContainer = document.querySelector('#status-update-container');
var statusContent = document.querySelector('#status-update-content');

statusTweet.addEventListener('click', function() {
    if (status.value != '') {
        var statusInput = document.querySelector('#status').value;

        welcomeSection.style.display = 'none';
        statusUpdateContainer.style.display = 'flex';

        statusContent.innerHTML = statusInput;
        status.value = '';

    } else {
        welcomeSection.style.display = 'flex';
        statusUpdateContainer.style.display = 'none';
    }
    
})
