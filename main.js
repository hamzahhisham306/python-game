
var buttons=document.querySelector(".control-buttons span");
var names=document.querySelector('.name span');
var controlbuttons=document.querySelector('.control-buttons');



buttons.addEventListener('click',()=>{
  controlbuttons.style.display='none';
  var n=prompt("Enter Your Name");
  if(n==null||n==''){
    names.innerHTML="Unknown";
  }
  else{
    names.innerHTML=n;
  }
});

let duration=1000;
let blocksContainer=document.querySelector('.memory-game-blocks');
let blocks=Array.from(blocksContainer.children);
let gameblock=document.querySelectorAll('.memory-game-blocks .game-block');
let gameblocks=document.querySelector('.memory-game-blocks .game-block');
let orderRange=[...Array(blocks.length).keys()];

gameblock.forEach(block => {
var orderRandom=Math.floor(Math.random()*orderRange.length);
block.style.order=orderRandom; 
// Add click Event 
block.addEventListener('click', function(){
  // Trigger the flip Function
  flipBlock(block); 
});

});

function flipBlock(selectedBlock){
  selectedBlock.classList.add('is-flipped');
  //Collect All Filpped Cards
  let allFippedBlocks=blocks.filter(flippedBlock=> flippedBlock.classList.contains('is-flipped'));
  
   // Uf theres two Selected Blocks
   if(allFippedBlocks.length===2){
     
    // Stop Clicking Function
    stopCliking();

   //Check Mathced block function  

   }
   checkMatchedBlocks(allFippedBlocks[0],allFippedBlocks[1]);



}

function checkMatchedBlocks(first,seconde){
  
  if(first.dataset.technology===seconde.dataset.technology){
    first.classList.remove('is-flipped');
    seconde.classList.remove('is-flipped');

    first.classList.add('has-match');
    seconde.classList.add('has-match');
  }
  else{
  setTimeout(()=>{
    first.classList.remove('is-flipped');
    seconde.classList.remove('is-flipped');
  
  },duration)
}
}





function stopCliking(){
  // Add class no clickin on mainContorner
  blocksContainer.classList.add('no-clicking');
  
  setTimeout(()=>{
  blocksContainer.classList.remove('no-clicking');
  },duration);

}