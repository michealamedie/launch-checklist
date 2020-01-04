// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
    
      let form = document.querySelector("form");
    
      form.addEventListener("submit", function(event) {
          event.preventDefault();
    
        let readyforlauch = true;
        let vaildinput = true;
          
         let pilotName = document.querySelector("input[name=pilotName]");
                            
         let copilotName = document.querySelector("input[name=copilotName]");
    
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
          
          let fuelStatus = document.getElementById("fuelStatus");
          let cargoStatus = document.getElementById("cargoStatus");
          let launchStatus = document.getElementById("launchStatus");
          let copilotStatus = document.getElementById("copilotStatus");
          let pilotStatus = document.getElementById("pilotStatus");
    
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")
         {
            alert("all fileds are required!");
             vaildinput = false;
             document.getElementById("faultyItems").style.visibility= "hidden";
             
             launchStatus.innerHTML= "Awaiting Information Before Launch ";
             launchStatus.style.color= " BLACK ";
              
        
         }
          else if(isNaN(Number(fuelLevel.value))|| isNaN(Number(cargoMass.value)))
          {
              alert("the input for has to be a number!");
              vaildInput=false;
              document.getElementById("faultyItems").style.visibility= "hidden";
              launchStatus.innerHTML="Awaiting Information Before Launch";
              launchStatus.style.color= "red";
              
            // stop the form submission
              
          }
    if (vaildinput){
        if (Number(fuelLevel.value)< 10000 ){
            readyforlauch = false;
            fuelStatus.innerHTML="you need to add more fuel";
        }else {
            fuelStatus.innerHTML= " you have enough fuel for your journey" ;
        }
        if (Number(cargoMass.value)> 10000){
            readyforlauch = false;
            cargoStatus.innerHTML = "you need to lose weight";
        } else {
            cargoStatus.innerHTML = "the weight is go enough for the trip "
        }
        if (!readyforlauch){
            
             document.getElementById("faultyItems").style.visibility= "visible";
             launchStatus.innerHTML= "shuttle not ready for launch ";
             launchStatus.style.color= " RED ";
            pilotStatus.innerHTML = `pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `copilot ${copilot.value} is ready for launch`;
        } else {
             document.getElementById("faultyItems").style.visibility= "visible";
            launchStatus.innerHTML= "shuttle ready for launch ";
            launchStatus.style.color= "green";
            pilotStatus.innerHTML=`pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML= `copilot ${copilot.value} is ready for launch`;
            
      
        }
    }

      });
    
   });
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
	response.json().then(function (json) {
		const div = document.getElementById("missionTarget");
		// Add HTML that includes the JSON data
		let i = Math.floor(Math.random() * 6);;
		let planetaryData = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[i].name}</li>
   <li>Diameter: ${json[i].diameter}</li>
   <li>Star: ${json[i].star}</li>
   <li>Distance from Earth: ${json[i].distance}</li>
   <li>Number of Moons: ${json[i].moons}</li>
</ol>
<img src="${json[i].image}">`
        div.innerHTML = planetaryData;

});
    
   });
