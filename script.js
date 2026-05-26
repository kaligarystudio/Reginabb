function enterInvitation(){

  document.getElementById('horseSound').play();

  document.getElementById('intro').style.display = 'none';

  document.getElementById('main').style.display = 'block';

}

function openModal(type){

  if(type === 'wishes'){
    document.getElementById('wishesModal').style.display = 'flex';
  }

  if(type === 'photos'){
    document.getElementById('photosModal').style.display = 'flex';
  }

  if(type === 'rsvp'){
    document.getElementById('rsvpModal').style.display = 'flex';
  }

}

function closeModal(id){

  document.getElementById(id).style.display = 'none';

}

function playPig(){

  document.getElementById('pigSound').play();

}

function playSheep(){

  document.getElementById('sheepSound').play();

}

function playHorse(){

  document.getElementById('horseSound').play();

}

// CERRAR MODAL AL DAR CLIC AFUERA
window.onclick = function(e){

  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {

    if(e.target === modal){
      modal.style.display = 'none';
    }

  });

}
