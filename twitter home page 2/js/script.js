// *** CARD MANIPULATION ***
const followbtn = document.querySelectorAll('.follow-btn');
const xbtn = document.querySelectorAll('.xbtn');
const suggestionContainer = document.querySelectorAll('.topics-suggestion-container');
const showMore = document.querySelector('#topics-showmore-container');

// follow/unfollow
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

// remove/restore suggestions
for (i = 0; i < xbtn.length; ++i) { 
    xbtn[i].addEventListener('click', function() { // cannot access each via i anymore - value of i now == length as it has finished iterating to add event listeners
        this.parentElement.style.display = 'none'; // omg
    })
}

showMore.addEventListener('click', function() {
    for (i = 0; i < suggestionContainer.length; ++i) {
        suggestionContainer[i].style.display = 'flex';
    }
})

// *** STATUS UPDATE ***
const statusTweet = document.querySelector('#status-tweet-btn');
const welcomeSection = document.querySelector('#welcome-msg-container');
const statusUpdateContainer = document.querySelector('#status-update-container');
const statusContent = document.querySelector('#status-update-content');

// pop-up on click
const popUp = document.querySelector('#status-popup');
const status = document.querySelector('#status');

status.addEventListener('focus', function() {
    popUp.style.display = 'block';
  });

// tweet button
statusTweet.disabled = false;
statusTweet.style.background = 'var(--hover-light-blue)';

status.addEventListener('keyup', function() {
    if (status.value != '') {
        statusTweet.disabled = false;
        statusTweet.style.background = 'var(--primary-blue)';

        statusTweet.addEventListener('mouseenter', function() {
            this.style.background = 'var(--hover-dark-blue)';
            this.style.cursor = 'pointer';
        })

        statusTweet.addEventListener('mouseleave', function() {
            this.style.background = 'var(--primary-blue)';
        })

    } else {
        statusTweet.disabled = false;
        statusTweet.style.background = 'var(--hover-light-blue)';
        
        statusTweet.addEventListener('mouseenter', function() {
            this.style.background = 'var(--hover-light-blue)';
            this.style.cursor = 'default';
        })

        statusTweet.addEventListener('mouseleave', function() {
            this.style.background = 'var(--hover-light-blue)';
            this.style.cursor = 'default';
        })

    }
})

// tweet content
statusTweet.addEventListener('click', function() {
    if (status.value != '') {
        const statusInput = document.querySelector('#status').value;

        welcomeSection.style.display = 'none';
        statusUpdateContainer.style.display = 'flex';

        statusContent.innerHTML = statusInput;
        status.value = '';

        statusTweet.disabled = true;
        statusTweet.style.background = 'var(--hover-light-blue)';
        statusTweet.style.cursor = 'default';

    } else {
        welcomeSection.style.display = 'flex';
        statusUpdateContainer.style.display = 'none';
    }
})

