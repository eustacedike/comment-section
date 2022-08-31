// Limit size of upload file
function limit (a) {
    if(a.files[0].size > 2097152){
       alert("File is too big! upload an image less than 2mb");
       a.value = "";
    };

    document.querySelector('.view').style.display = "flex";
};


//Preview file
var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);


    //Another copy: for canvas drawing.Display set to none
    var output2 = document.getElementById('output2');
    output2.src = URL.createObjectURL(event.target.files[0]);

    // free memory
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
  };

function profile () {

let open =  document.getElementById("open");


// Save file as a variable with canvas
const getBase64Image = (img) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  };
  
  const imgData = getBase64Image(output2);

  open.src = "data:image/png;base64," + imgData;

  document.querySelector('.main1').style.display='none';
}

function remove () {
  var rem =  document.getElementById('custom');
  var output = document.getElementById('output');

  output.src = "";
  rem.value = "";
  document.querySelector('.view').style.display = "none";
}

function sect () {
  event.preventDefault();

  var first = document.getElementById('first').value;
  var last = document.getElementById('last').value;
  var mal = document.getElementById('mal').value;
  var major = document.getElementById('username').value;

  if ((first === '') || (last === '') || (mal==='')) {
    alert('Please, fill all the boxes')
  } else {
    
    const getBase64Image = (img) => {
      
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    
    const imgData = getBase64Image(output2);

    // Save profile picture, full name and email on localStorage using username as key
    var comp = {AVATAR: imgData, NAME: `${first} ${last}`, eMAIL: mal};
    localStorage.setItem(major, JSON.stringify(comp));

    //Saves the last username entered
    localStorage.setItem('allKey', major);

    // window.localStorage.clear();

    // work.src = "data:image/png;base64," + imgData;


    window.location.href='./name.html';
  };
  
}

function retrieve () {
var RET =  document.getElementById('ma');

// Retrieve the last username entered
var lastKey = localStorage.getItem('allKey');


 // Retrieves all localStorage keys in an array
 var localStoragesKeys = Object.keys(localStorage);


//Match last username with any of the usernames already in localStorage
 function match(elem) {
      
  /** make search case insentive **/
  let searchKeys = localStoragesKeys.map( e => e.toLowerCase());
  /** search the input **/
  let index = searchKeys.indexOf(elem.toLowerCase());
      
  /** if not matched **/
  if(index == -1) {
     window.alert("Album does not exist. Please try again");
  }
  else {
      let album = localStoragesKeys[index];
      var current = JSON.parse(localStorage.getItem(album));

      var yourDP = current.AVATAR;
      var fNAME = current.NAME.toUpperCase();
      var mailYou = current.eMAIL;

      var plexIMG = document.getElementById('plexIMG');
      var plex2h3 = document.getElementById('plex2h3');
      var plex2h6 = document.getElementById('plex2h6');
      var plex2p = document.getElementById('plex2p');

      // plexIMG.src = '';
      plexIMG.src = "data:image/png;base64," + yourDP;
      plex2h3.innerHTML = fNAME;
      plex2h6.innerHTML = mailYou;
      plex2p.innerHTML = album;

      console.log(current);
      console.log(fNAME);
      
      
      // window.alert("FOUND IT! " + album);
  }

//  // Retrieve the last local storage key
//  var localStoragesKeys = Object.keys(localStorage);
//  var lastEntry = localStoragesKeys[localStoragesKeys.length-1];
//     console.log(lastEntry);

//  var now = JSON.parse(localStorage.getItem(mainMan));
//     console.log(now);
}

match(lastKey);

}

function sub () {
  event.preventDefault();
  var lastKey = localStorage.getItem('allKey');



  var localStoragesKeys = Object.keys(localStorage);
    let searchKeys = localStoragesKeys.map( e => e.toLowerCase());
    let index = searchKeys.indexOf(lastKey.toLowerCase());
  
    let album = localStoragesKeys[index];
        var current = JSON.parse(localStorage.getItem(album));

  var commentum = document.getElementById('commentum').value;
  localStorage.setItem(`${album}2`, commentum);
  // window.location.href='./comments.html';
}

function dropComment () {
  
var lastKey = localStorage.getItem('allKey');



var localStoragesKeys = Object.keys(localStorage);
  let searchKeys = localStoragesKeys.map( e => e.toLowerCase());
  let index = searchKeys.indexOf(lastKey.toLowerCase());

  let album = localStoragesKeys[index];
      var current = JSON.parse(localStorage.getItem(album));

      var yourDP = current.AVATAR;
      var fNAME = current.NAME.toUpperCase();
      var mailYou = current.eMAIL;

var theComment = localStorage.getItem(`${album}2`);

var Container = document.getElementById('container');

var commentBox = document.createElement("div");
var mentHead = document.createElement('div');
var mentHeadImg = document.createElement('img');
var mentHeadDiv = document.createElement('div');
var mentBody = document.createElement('div');
var mentFoot = document.createElement('div');
var mentFootDiv = document.createElement('div');


commentBox.classList = 'comment-box';
commentBox.appendChild(mentHead);
commentBox.appendChild(mentBody);
commentBox.appendChild(mentFoot);

mentHead.classList = 'ment-head';
mentHead.appendChild(mentHeadImg);
mentHead.appendChild(mentHeadDiv);

// mentHeadImg.src=;
mentHeadDiv.innerHTML = `<h5>${fNAME}</h5><p>@${album}</p>`;

mentBody.classList = 'ment-body';
mentBody.innerHTML = `<p>${theComment}</p>`;

mentFoot.classList = 'ment-foot';
mentFoot.innerHTML = `<h6>${album}</h6>`;
mentFoot.appendChild(mentFootDiv);

mentFootDiv.innerHTML = `<img src="./icons8-thumbs-up-90.png" alt="">
<img src="./icons8-thumbs-down-90.png" alt="">`

Container.appendChild(commentBox);




// element.textContent = "I have changed!";

      var demo = document.getElementById('demo');
      demo.innerHTML = theComment;





}