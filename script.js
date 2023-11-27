console.log("sanity check");

const peopleInSpace = document.querySelector('[data-js="people-in-space"]');

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  //peopleInSpace.textContent = peopleInSpace.number;
  peopleInSpace.textContent = data.number;
  peopleInSpaceData = data.people;
  //console.log(data);
  return data;
}

const peopleInSpaceData = getPeopleInSpace();
