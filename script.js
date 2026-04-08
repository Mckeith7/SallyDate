// Initialize EmailJS with your Public Key
emailjs.init("WwiAqL_Qw_EV405nv"); 

const favSong = new Audio('fav_song.mp3');
let selections = {
    location: '',
    movie: '',
    time: 'Saturday at 7:00 PM'
};

function startExperience() {
    // Starts the song at 14 seconds
    favSong.currentTime = 14; 
    favSong.play();
    showSection('phase1');
}

function selectLocation(loc) {
    selections.location = loc;
    showSection('phase2');
}

function selectMovie(movieName) {
    selections.movie = movieName;
    
    // Update the final ticket text
    document.getElementById('summary-text').innerHTML = 
        `We're going to the <b>${selections.location}</b> <br> to watch <b>${selections.movie}</b>.`;

    // SILENT EMAIL SENDING
    emailjs.send("service_fdlyjyd", "template_zvvcrxp", {
        location: selections.location,
        movie: selections.movie,
        time: selections.time
    }).then(() => {
        console.log("Keith notified silently!");
    });

    showSection('final');
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

