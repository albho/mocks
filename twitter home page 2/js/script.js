// *** CARD MANIPULATION ***
const followButton = document.querySelectorAll('.follow-btn');
const xBtn = document.querySelectorAll('.xbtn');
const suggestionContainer = document.querySelectorAll('.topics-suggestion-container');
const showMore = document.querySelector('#topics-showmore-container');

// follow/unfollow
for (i = 0; i < followButton.length; ++i) {
    followButton[i].addEventListener('click', function() {
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
for (i = 0; i < xBtn.length; ++i) { 
    xBtn[i].addEventListener('click', function() {
        this.parentElement.style.display = 'none';
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
    }
})
    
// delete tweet
const statusOptions = document.querySelector('.status-ellipsis');
const deleteTweet = document.querySelector('#status-delete');
const deleteCancel = document.querySelector('#status-delete-cancel');

statusOptions.addEventListener('click', function() {
    if (deleteTweet.style.display == '') {
        deleteTweet.style.display = 'inline';
    } else {
        deleteTweet.style.display = '';
        deleteCancel.style.display = '';
    }
})

deleteTweet.addEventListener('click', function() {
    if (deleteCancel.style.display == '') {
        deleteCancel.style.display = 'inline';

        deleteCancel.addEventListener('click', function() {
            deleteTweet.style.display = '';
            deleteCancel.style.display = '';
        })
    } else {
        statusUpdateContainer.style.display = 'none';
    }
})

status.addEventListener('focus', function() {
    deleteTweet.style.display = '';
    deleteCancel.style.display = '';
})