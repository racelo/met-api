
// document.querySelector('button').addEventListener('click', getFetchArt)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// Create a function that will fetch the object IDs of all the works of Van Gogh
// function getFetchArt() {
//   const choice = (document.querySelector("input").value).split(" ").join("+");

//   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${choice}`)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     // console.log(data.objectIDs);
//     let objectID = data.objectIDs[Math.floor(Math.random() * data.total)];
//     console.log(objectID);
//     showArt(objectID);
//   })
//   .catch(err => {
//     console.log(`error ${err}`);
//   })
  
// }

// function showArt(objectID){
//   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.querySelector("h2").textContent = data.title;
//     document.querySelector("img").src = data.primaryImageSmall;
//     document.querySelector("h3").textContent = data.artistDisplayName;
//     document.getElementsByTagName("span")[0].textContent = data.artistDisplayBio;
//     document.getElementsByTagName("span")[1].textContent = data.medium;

//   })
//   .catch(err => {
//     console.log(`error ${err}`);
//   })
// }


// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/437984")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.querySelector("h4").textContent = data.title;
//     document.querySelector("img").src = data.primaryImageSmall;

//   })
//   .catch(err => {
//     console.log(`error ${err}`);
//   })

let strr = "This website is for losers LOL!";

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  // console.log(str.split("").filter(chr => filterVowels(chr)));

  console.log(str.split("").filter(chr => !vowels.includes(chr)).join(""));

  // return str;
}

disemvowel(strr)

// console.log(strr.split("").);


