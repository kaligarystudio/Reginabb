const intro = document.getElementById('intro');
const main = document.getElementById('main');

const horseSound = document.getElementById('horseSound');

const farmAmbient = document.getElementById('farmAmbient');

farmAmbient.loop = true;

/* =========================
   ENTRAR
========================== */

function enterInvitation(){
 
  horseSound.play();

  farmAmbient.play();

  intro.style.display = 'none';

  main.style.display = 'block';
  
  // Muestra ambos bloques flotantes (izquierdo y derecho) sin alterar la lógica de entrada
  document.querySelectorAll('.floating-buttons').forEach(panel => {
    panel.style.display = 'flex';
  });

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

}

/* =========================
   REPRODUCIR SONIDOS DE ANIMALES
========================== */

function playSound(animal) {
  const animalSounds = [
    'horseSound', 
    'pigSound', 
    'sheepSound', 
    'duckSound', 
    'donkeySound', 
    'chickenSound', 
    'dogSound', 
    'rabbitSound'
  ];
  
  // Detiene otros animales para que no se empalmen los sonidos
  animalSounds.forEach(id => {
    const sound = document.getElementById(id);
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  });

  const selectedSound = document.getElementById(`${animal}Sound`);
  if (selectedSound) {
    selectedSound.play().catch(error => {
      console.log("Error al reproducir audio: ", error);
    });
  }
}

/* =========================
   MODAL
========================== */

const modal = document.getElementById('modal');

const modalBody = document.getElementById('modalBody');

function openModal(type){

  modal.style.display = 'flex';

  if(type === 'wish'){

    modalBody.innerHTML = `

      <h3>Deseos para Regina 💖</h3>

      <textarea 
        rows="5"
        placeholder="Escribe un bonito mensaje..."
      ></textarea>

      <button>
        Enviar Deseo
      </button>

    `;

  }

  if(type === 'photo'){

    modalBody.innerHTML = `

      <h3>Sube tus fotos 📸</h3>

      <input type="file">

      <button>
        Subir Foto
      </button>

    `;

  }

  if(type === 'rsvp'){

    modalBody.innerHTML = `

      <h3>Confirmar asistencia 🐴</h3>

      <input 
        type="text"
        placeholder="Tu nombre"
      >

      <input 
        type="number"
        placeholder="Número de asistentes"
      >

      <button>
        Confirmar asistencia
      </button>

    `;

  }

}

function closeModal(){

  modal.style.display = 'none';

}
