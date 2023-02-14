const inputEl = document.getElementById('inputtwo');
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById('audio');

async function fetchAPI(word){


  
  try{
  //making the info displayed
  infoTextEl.style.display = "block";
  //making the meaning container go away
  meaningContainerEl.style.display = "none";
  infoTextEl.innerText = `Searching the meaning of "${word}"`;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const result = await fetch(url).then((res)=>
 
    res.json());
  console.log(result); 
  if(result.title){
    meaningContainerEl.style.display = "block";
    infoTextEl.style.display = "none";
    titleEl.innerText = word;
    meaningEl.innerText = "N/A";
    audioEl.style.display = "none";

  }
  else{
    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    audioEl.style.display = "inline-flex";
    titleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
  }

  }
  catch(error){
    console.log(error);
    infoTextEl.innerText = "Error please try again";
  }
}


inputEl.addEventListener("keyup", (e) =>{
 
  if (e.target.value && e.key === "Enter"){
    if (e.target.value == 'Megan'){

    }
    fetchAPI(e.target.value);
  }
})