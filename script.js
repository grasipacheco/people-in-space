console.log("sanity check");

const peopleInSpace = document.querySelector('[data-js="people-in-space"]');

async function getPeopleInSpace() {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    //peopleInSpace.textContent = peopleInSpace.number;
    //const { people } = data;
    //peopleInSpace.textContent = people;
    //console.log(people[0].name);
    return data;
  } catch (error) {
    console.log(error);
  }
}

console.log(getPeopleInSpace);

//const peopleInSpaceData = getPeopleInSpace();
