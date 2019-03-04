//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;


//WHILE LOOP FOR SPEECH AUTHOR
var i=0
while(i<speechesArray.length)
{console.log("This speech is written by " + speechesArray[i].author + ".");
 i++;}


//DONATE BUTTON
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
    
    
//FAVORITE AUTHOR / AGE    
  favoriteSpeechPrompt = window.prompt("Which speech's author is your favorite?");
  for(var i=0; i<speechesArray.length; i++)
  {if(favoriteSpeechPrompt === speechesArray[i].author){console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge + " during this speech.")};
};


//OLDEST AND NEWEST
var = oldestSpeech
var = newestSpeech

for(i=0; i<speechesArray.length; i++)
    {if(speechesArray[i].year < oldestSpeech)
    {var oldestSpeech = speechesArray[i].year;};}

for(i=0; i<speechesArray.length; i++)
    {if(speechesArray[i].year > newestSpeech)
    {var newestSpeech = speechesArray[i].year;};}


//CHURCHILL
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

if(speechesArray[0].yearIsBCE === true)
{console.log('This speech took place before the common era.');}
    else
    {console.log('This speech took place during the common era.');}

if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year)
{console.log('This is the oldest speech on the page.');}
    else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year)
    {console.log('This is the most recent speech on the page.');}
});


//GHANDI
document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});


//DEMOSTHENES
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
    console.log('This is the most recent speech on the page.');
  }
});

