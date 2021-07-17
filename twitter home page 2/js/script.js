// *** SEARCH ***
const searchInput = document.querySelector('#input-search');
const searchPopUp = document.querySelector('#search-popup');
const searchForm = document.querySelector('#search-bar');
const searchIcon = document.querySelector('.fa-search');
const searchCancel = document.querySelector('#input-cancel-button');

searchInput.addEventListener('focus', function() {
    searchForm.style.background = 'var(--primary-background-color)';
    searchForm.style.border = '1px solid var(--primary-blue)';
    searchIcon.style.color = 'var(--primary-blue)';
    searchPopUp.style.display = 'block';

    searchCancel.style.display = 'block';
    searchCancel.addEventListener('click', function() {
        searchForm.style.background = 'var(--secondary-background-color)';
        searchForm.style.border = 'none';
        searchIcon.style.color = 'black';
        searchPopUp.style.display = 'none';
        this.style.display = 'none';
        searchInput.value = '';
    })
    
})

// *** CARD MANIPULATION ***
const followButton = document.querySelectorAll('.follow-btn');
const xBtn = document.querySelectorAll('.xbtn');
const suggestionContainer = document.querySelectorAll('.topics-suggestion-container');
const showMore = document.querySelector('#topics-showmore-container')

// Follow/Unfollow - possibly improve this with return statement?
for (i = 0; i < followButton.length; ++i) {
    followButton[i].addEventListener('click', function() {
        if (this.innerHTML === 'Follow') {
            this.innerHTML = 'Following';
            
            this.addEventListener('mouseleave', function() {
                if (this.innerHTML === 'Following') {
                    this.style.color = 'white';
                    this.style.background = 'var(--primary-blue)';
                    this.style.border = '1px solid var(--primary-blue)';
                }
            })

            this.addEventListener('mouseenter', function() {
                if (this.innerHTML === 'Following') {
                this.style.background = 'rgb(202, 32, 85)';
                this.style.border = '1px solid rgb(202, 32, 85)';
                this.innerHTML = 'Unfollow';
                }

                this.addEventListener('mouseleave', function() {
                    if (this.innerHTML === 'Unfollow') {
                    this.style.color = 'white';
                    this.style.background = 'var(--primary-blue)';
                    this.style.border = '1px solid var(--primary-blue)';
                    this.innerHTML = 'Following';
                    }
                })
            })
            
        } else {
            this.innerHTML = 'Follow';
            this.style.color = 'white';
            this.style.background = 'var(--primary-blue)';
            this.style.border = '1px solid var(--primary-blue)';

            this.addEventListener('mouseleave', function() {
                if (this.innerHTML === 'Follow') {
                    this.innerHTML = 'Follow';
                    this.style.color = 'var(--primary-blue)';
                    this.style.background = 'transparent';
                    this.style.border = '1px solid var(--primary-blue)';
                }
            })

            this.addEventListener('mouseenter', function() {
                if (this.innerHTML === 'Follow') {
                    this.style.background = 'var(--hover-light-blue)';
                }
                
            })
        }
    })
}

// Remove/Restore Suggestions
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

// Pop-up On Click
const popUp = document.querySelector('#status-popup');
const status = document.querySelector('#status');

status.addEventListener('focus', function() {
    popUp.style.display = 'block';
  });

// Tweet Button
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

// Tweet Content
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
    
// Delete Tweet
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