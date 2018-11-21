function dwarfRollCall(dwarves){
  var string = ""
  for (var i = 0; i < dwarves.length; i++){
    string += (i + 1) + ". " + dwarves[i];
    string += " "
  }
  return string
}


function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase();
  }
  return planeteerCalls.map(planeteerCalls => planeteerCalls + "!")
}

function longPlaneteerCalls(calls){
  if (calls.length > 4){
    return true
  } else {
    return false
  }
}

function findTheCheese(foods){
  for (var i = 0; i < foods.length; i++){
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert"){
      return foods[i]
    }
  }
  return "no cheese!"
}
