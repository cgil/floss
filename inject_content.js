var BASE_URI = 'https://www.facebook.com';
var GET_GUEST_LIST_SELECTOR = '#event_guest_list > div._4-u2.mbm._4-u8 > div:nth-child(2) > div._5x0j > table > tbody > tr > td:nth-child(1) > div > a';


function handleAttendants(attendants) {
    console.log(attendants);
}


function get(path, cb) {
    var xhr = new XMLHttpRequest();
    var fullPath = 'https://www.facebook.com/event/typeahead/invite_bootstrap/?event_id=1688229041422814&subtitles=0&__pc=EXP1%3ADEFAULT&dpr=2&viewer=100000788012232&token=v7&filter[0]=user&options[0]=friends_only&context=event_invite&__user=100000788012232&__a=1&__dyn=5V5yAW8-aloAwmgDxyIGzGomyp9EbEyGgS8zCC-C26m6oKeG3t6zUybxu3efwFG3Ou5R88wPG4Xz9XDG4Xxm58CEuwTADDBBwDKqcBGqewIUsz8gCxm5Erw&__req=25&__rev=2247844';
    xhr.open('GET', fullPath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // JSON.parse does not evaluate the attacker's scripts.
            var resp = xhr.responseText;
            console.log(resp);
            return cb(resp);
        }
        return cb();
    }
    xhr.send();
}

var eventGuestList = document.getElementById('event_guest_list');
var flossContainer = document.createElement('div');
flossContainer.classList.add('_4-u3');
eventGuestList.appendChild(flossContainer);

var getGuestListPath = document.querySelector(GET_GUEST_LIST_SELECTOR).getAttribute('ajaxify');
get(getGuestListPath, handleAttendants);


