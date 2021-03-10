function init (){
    let liftoffButton = document.getElementById('takeoff');
    let shuttleBackgroundColor = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let landingButton = document.getElementById('landing');
    let flightStatus = document.getElementById('flightStatus');
    let abortMissionButton = document.getElementById('missionAbort');

    let text = shuttleHeight.textContent;
    let number = Number(text);

    let rocket = document.getElementById('rocket');
    rocket.style.position="relative";
    rocket.style.left='0px';
    rocket.style.top='250px'
    let x = 0;
    let y = 250;

    let upbutton = document.getElementById('upbutton');
    let downbutton = document.getElementById('downbutton');
    let rightbutton = document.getElementById('rightbutton');
    let leftbutton = document.getElementById('leftbutton');

    liftoffButton.addEventListener("click", function (){
        if(shuttleHeight.innerHTML == 0){
            if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
                number = 0;
                y -= 10;
                rocket.style.top = y + 'px';
                flightStatus.innerHTML = "Shuttle in flight"
                shuttleBackgroundColor.style.background = 'blue';
                number += 10000;
                shuttleHeight.innerHTML = number;
             }
        }
    })

    landingButton.addEventListener("click", function (){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackgroundColor.style.background = '';
        y = 250;
        number = 0;
        shuttleHeight.innerHTML = number;
        rocket.style.left = `0px`;
        rocket.style.top = `${y}px`;
    })

    abortMissionButton.addEventListener("click", function(){
        if (window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackgroundColor.style.background = "";
            y = 250;
            number =0;
            shuttleHeight.innerHTML = number;
            rocket.style.left = `0px`;
            rocket.style.top = `${y}px`;
        }
    })
    
    rightbutton.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle in flight" && x < 280){
            x += 10
            rocket.style.left = x + 'px';
        }
    })
    leftbutton.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle in flight" && x > -280){
            x -= 10
            rocket.style.left = x + 'px';
        }
    })

    downbutton.addEventListener("click", function (){
        if (flightStatus.innerHTML === "Shuttle in flight" && number > 0){
            y += 10;
            rocket.style.top = y + 'px';
            number -= 10000;
            shuttleHeight.innerHTML = number;
        }
    })

    upbutton.addEventListener("click", function (){
        if (flightStatus.innerHTML === "Shuttle in flight" && y > 0){
            y -= 10;
            rocket.style.top = y + 'px';
            number += 10000;
            shuttleHeight.innerHTML = number;
        }
    })



}

window.addEventListener("load", init);