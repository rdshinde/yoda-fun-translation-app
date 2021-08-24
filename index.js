const originalText = document.querySelector("#original-text");
const translatedText = document.querySelector("#translated-text");
const translateBtn = document.querySelector("#translate");

serverURL = "https://api.funtranslations.com/translate/"+'yoda'+".json"; // serverURL for minion translation


function getURL(text) {                   // API URL builder function
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert(error.message+" Plaese Try again later.");  // Error handling function 
}

function translate() {        // defining function for translate event.
  var inputText = originalText.value;
  if(inputText == ''){                              // Handling empty input text request
    alert('Please enter some text to translate.')
  }
  else{                         //Fetching Data from API and dispalying translation output 
    fetch(getURL(inputText))
    .then((response) => response.json())
    .then(json => {
      var translatedtext = json.contents.translated;
      translatedText.innerText = translatedtext;
    })
    .catch(errorHandler);
  }
}
translateBtn.addEventListener("click", translate); //click event listener for translate button