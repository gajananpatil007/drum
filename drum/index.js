document.addEventListener('keydown',function(event){
  playSounds(event.key);
});

function playSounds(character){
  if(character=='a'){
    var song1 = new Audio('songs/crash.mp3')
    song1.play();
  }
  else if(character=='s'){
    var song2 = new Audio('songs/kick-bass.mp3')
    song2.play();
  }
  else if(character=='d'){
    var song3 = new Audio('songs/snare.mp3')
    song3.play();
  }
  else if(character=='f'){
    var song4 = new Audio('songs/tom-1.mp3')
    song4.play();
  }
  else if(character=='g'){
    var song5 = new Audio('songs/tom-2.mp3')
    song5.play();
  }
  else if(character=='h'){
    var song6 = new Audio('songs/tom-3.mp3')
    song6.play();
  }
  else if(character=='j'){
    var song7 = new Audio('songs/tom-4.mp3')
    song7.play();
  }
}

function buttonAniamtion(currentKey){
  var activeButton=document.querySelect("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
