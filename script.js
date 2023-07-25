// Add code that runs on the window load event.
window.addEventListener("load", function () {
    // Make a GET request using fetch to the astronauts API https://handlers.education.launchcode.org/static/astronauts.json

    // Do this part inside the load event handler.
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (astronauts) {
            
            // Sort astronauts from most to least hours in space
            astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
            
            // Update astronaut count
            let countDiv = document.getElementById("astronautCount");
            countDiv.innerText = `Total Astronauts: ${astronauts.length}`;
            
            let div = document.getElementById("container");
            for (let i = 0; i < astronauts.length; i++) {
                let astronaut = astronauts[i];
                // Determine the color based on active status
                let activeColor = astronaut.active ? "green" : "black";

                div.innerHTML += (`
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li style="color:${activeColor}">Active: ${astronaut.active}</li>
                            <li>Skills:${astronaut.skills}</li>
                        </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
                </div>`);
            }
        })
    })
})
