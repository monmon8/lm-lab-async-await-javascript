import fetch from "node-fetch";

const jsonTypicode = "https://cat-fact.herokuapp.com/facts/random";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);
async function fetchData(apiEndPoint) {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
fetchData(jsonTypicode);
