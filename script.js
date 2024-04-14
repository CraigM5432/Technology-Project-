


//marys code

//for piano

function play(id){
		var audio = document.getElementById(id);
		audio.play();
		}


//for log in

var loggedIn; //variable called logged in

    function check() { 
	
        var firstName = document.getElementById('firstName').value; // first name is equal to name text feild 
        var email = document.getElementById('email').value;		//email is equal to the equal text feild
        var password = document.getElementById('password').value; // password is equal to the password text feild 
		 
        loggedIn = login(firstName, email, password); // arrgument passes through the parmeter
        stats(); //than goes to login function
		clear();
		
    }

    function login(firstName, email, password) { //fuction login checks is the text feilds equal the below hard coded login 
        var info = {
            firstName: 'Bob',
            email: 'Bob@gmail.com',
            password: 'password'
        };

        return firstName === info.firstName && email === info.email && password === info.password; //if all are equal returns 
    }

    function stats() { //displays if logged if or else displays not logged in 
        if (loggedIn) {
            alert('You are logged in');
        } else {          
			alert('Log in incorrect. Please try again. \n\nHINT: \nName: Bob, \nEmail: Bob@gmail.com, \nPassword: password');
        }
	}
	
	function clear() {
		document.getElementById('firstName').value = '';
		document.getElementById('email').value = '';
        document.getElementById('password').value = '';
	
    }
//marys code
		/*function play01(){
		var audio = document.getElementById("01");
        audio.play();
		}
		function play02(){
		var audio = document.getElementById("02");
        audio.play();
		}
		function play03(){
		var audio = document.getElementById("03");
        audio.play();
		}
		function play04(){
		var audio = document.getElementById("04");
        audio.play();
		}
		function play05(){
		var audio = document.getElementById("05");
        audio.play();
		}
		function play06(){
		var audio = document.getElementById("06");
        audio.play();
		}
		function play07(){
		var audio = document.getElementById("07");
        audio.play();
		}
		function play08(){
		var audio = document.getElementById("08");
        audio.play();
		}
		function play09(){
		var audio = document.getElementById("09");
		audio.play();
		}
		function play10(){
		var audio = document.getElementById("10");
		audio.play();
		}
		function play11(){
		var audio = document.getElementById("11");
		audio.play();
		}
		function play12(){
		var audio = document.getElementById("12");
		audio.play();
		}
		function play13(){
		var audio = document.getElementById("13");
		audio.play();
		}
		function play14(){
		var audio = document.getElementById("14");
		audio.play();
		}
		function play15(){
		var audio = document.getElementById("15");
		audio.play();
		}
		function play16(){
		var audio = document.getElementById("16");
		audio.play();
		}
		function play17(){
		var audio = document.getElementById("17");
		audio.play();
		}
		function play18(){
		var audio = document.getElementById("18");
		audio.play();
		}
		function play19(){
		var audio = document.getElementById("19");
		audio.play();
		}
		function play20(){
		var audio = document.getElementById("20");
		audio.play();
		}
		function play21(){
		var audio = document.getElementById("21");
		audio.play();
		}
		function play22(){
		var audio = document.getElementById("22");
		audio.play();
		}
		function play23(){
		var audio = document.getElementById("23");
		audio.play();
		}
		function play24(){
		var audio = document.getElementById("24");
		audio.play();
		}
		function play25(){
		var audio = document.getElementById("25");
		audio.play();
		}
		function play26(){
		var audio = document.getElementById("26");
		audio.play();
		}
		function play27(){
		var audio = document.getElementById("27");
		audio.play();
		}
		function play28(){
		var audio = document.getElementById("28");
		audio.play();
		}
		function play29(){
		var audio = document.getElementById("29");
		audio.play();
		}
		function play30(){
		var audio = document.getElementById("30");
		audio.play();
		}
		function play31(){
		var audio = document.getElementById("31");
		audio.play();
		}
		function play32(){
		var audio = document.getElementById("32");
		audio.play();
		}
		function play33(){
		var audio = document.getElementById("33");
		audio.play();
		}
		function play34(){
		var audio = document.getElementById("34");
		audio.play();
		}
		function play35(){
		var audio = document.getElementById("35");
		audio.play();
		}
		function play36(){
		var audio = document.getElementById("36");
		audio.play();
		}
	*/
//marys code

//Start of Craig's Code for The Chord Game

	//declaring variables
	document.addEventListener('DOMContentLoaded', function() {
    var selectedLevel;
    var randomNote;
    var score = 0;
    var attempts = 0;
    var time = 30;
    var timerInterval;

    // Handling level selection
    function selectLevel(level) {
        selectedLevel = level;
        document.getElementById('levelSelection').style.display = 'none';
        document.getElementById('playButton').style.display = 'block';
    }

    // Event listeners for level selection buttons
    document.getElementById('level1Button').addEventListener('click', function() {
        selectLevel(1);
    });
    document.getElementById('level2Button').addEventListener('click', function() {
        selectLevel(2);
    });
    document.getElementById('level3Button').addEventListener('click', function() {
        selectLevel(3);
    });

    // Initializing the game
    function initializeGame() {
        score = 0; // Reset score to 0
        time = 30; // Reset the timer to 30 seconds
        updateScore();
        updateTimer();
        startTimer();
        playNote();
		
		// Showing images when the game starts
		document.querySelectorAll('.note').forEach(function(img) {
        img.style.display = 'inline-block';
		});
		
		// hiding the "press play to begin " button
		document.getElementById('playButton').style.display = 'none';
    }

    // Handling end of game session and reset the game
    function endGameSession() {
        clearInterval(timerInterval);
        alert('Round Over! Your final score is: ' + score);
        location.reload(); // Reload the page to reset the game
    }

    // Playing a random note and displaying chord options based on selected level
	function playNote() {
    var chordImages = document.querySelectorAll('.note');
  
    // Define chord options based on selected level
    var chordOptions;
    if (selectedLevel === 1) {
        chordOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    } else if (selectedLevel === 2) {
        chordOptions = ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'];
    } else {
        chordOptions = ['A', 'Am', 'B', 'Bm', 'C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm', 'G', 'Gm'];
    }

    // Get random note sound file name
    randomNote = chordOptions[Math.floor(Math.random() * chordOptions.length)];
    var randomSound = 'chordsounds/' + randomNote + '.mp3';

    // Play random note sound
    var audio = new Audio(randomSound);
    audio.play();

    // Display three random chords
    var correctChordIndex = getRandomIndex(3); // Choose a random index for the correct chord
    var correctChordImageSrc = 'chordpictures/' + randomNote + '.jpg'; // Correct chord image
    var incorrectImage1Src = getRandomImageSrc(correctChordImageSrc); // First incorrect image
    var incorrectImage2Src = getRandomImageSrc(correctChordImageSrc); // Second incorrect image
    while (incorrectImage2Src === incorrectImage1Src) {
        // Ensure the second incorrect image is different from the first one
        incorrectImage2Src = getRandomImageSrc(correctChordImageSrc);
    }
    chordImages.forEach(function(chord, index) {
        var chordImageSrc;
        if (index === correctChordIndex) {
            chordImageSrc = correctChordImageSrc;
        } else {
            chordImageSrc = index === 0 ? incorrectImage1Src : incorrectImage2Src;
        }
        chord.src = chordImageSrc;
        chord.style.display = 'inline-block'; // Show the image
        chord.addEventListener('click', handleClick);
    });
}

    // Handling user's chord selection
    function handleClick() {
        var chordName = this.src.substring(this.src.lastIndexOf('/') + 1, this.src.lastIndexOf('.'));
        attempts++;

        if (chordName === randomNote) {
            var points;
            if (attempts === 1) {
                points = 10;
            } else if (attempts === 2) {
                points = 7;
            } else if (attempts === 3) {
                points = 4;
            } else {
                points = 4;
            }
            score += points;
            alert('Correct! You earned ' + points + ' points');
            updateScore();
            attempts = 0;
            playNote();
        } else {
            alert('Incorrect. Try again!');
        }
    }

    // Updating the displayed score 
    function updateScore() {
        document.getElementById('score').innerText = 'SCORE: ' + score;
    }

    // Updating the timer
    function updateTimer() {
        document.getElementById('timer').innerText = 'Time: ' + time + 's';
    }

    // Generating a random index
    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    // Generating a random image source different from the correct chord image source
    var previousIncorrectImageSrc = '';
    function getRandomImageSrc(correctChordImageSrc) {
        var imageNames = ['A.jpg', 'Am.jpg', 'B.jpg', 'Bm.jpg', 'C.jpg', 'Cm.jpg', 'D.jpg', 'Dm.jpg', 'E.jpg', 'Em.jpg', 'F.jpg', 'Fm.jpg', 'G.jpg', 'Gm.jpg'];
        var randomIndex;
        var randomImageSrc;
        
        do {
            randomIndex = Math.floor(Math.random() * imageNames.length);
            randomImageSrc = 'chordpictures/' + imageNames[randomIndex];
        } while (randomImageSrc === correctChordImageSrc || randomImageSrc === previousIncorrectImageSrc);
        
        previousIncorrectImageSrc = randomImageSrc;
        
        return randomImageSrc;
    }

    // Function to start the timer countdown
    function startTimer() {
        timerInterval = setInterval(function() {
            time--;
            updateTimer();
            if (time === 0) {
                endGameSession();
            }
        }, 1000);
    }

    // Initializing game when the "Play" button is clicked
    document.getElementById('playButton').addEventListener('click', initializeGame);
});

//End of Craig's Code for The Game



































