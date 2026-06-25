const intro = document.getElementById('intro');
const main = document.getElementById('main');

const horseSound = document.getElementById('horseSound');
const farmAmbient = document.getElementById('farmAmbient');

if (farmAmbient) {
  farmAmbient.loop = true;
}

/* =========================
   ENTRAR
========================== */

function enterInvitation() {
  if (horseSound) horseSound.play();
  if (farmAmbient) farmAmbient.play();

  intro.style.display = 'none';
  main.style.display = 'block';
  
  // Muestra todos los paneles de botones flotantes (izquierdo y derecho)
  document.querySelectorAll('.floating-buttons').forEach(panel => {
    panel.style.display = 'flex';
  });

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* =========================
   REPRODUCIR SONIDOS DE ANIMALES
========================== */

function playSound(animal) {
  // Lista de IDs de todos los audios de animales en el HTML
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
  
  // Detiene cualquier sonido de animal que ya se esté reproduciendo para evitar que se empalmen
  animalSounds.forEach(id => {
    const sound = document.getElementById(id);
    if (sound) {
      sound.pause();
      sound.currentTime = 0; // Reinicia el audio al inicio
    }
  });

  // Reproduce el sonido del animal seleccionado
  const selectedSound = document.getElementById(`${animal}Sound`);
  if (selectedSound) {
    selectedSound.play().catch(error => {
      console.log("El navegador bloqueó la reproducción automática: ", error);
    });
  }
}

/* =========================
   MODAL (Se conserva el código por compatibilidad)
========================== */

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

function openModal(type) {
  if (!modal || !modalBody) return;
  modal.style.display = 'flex';

  if (type === 'wish') {
    modalBody.innerHTML = `
      <h3>Deseos para Regina 💖</h3>
      <textarea 
        rows=\"5\"
        placeholder=\"Escribe un bonito mensaje...\"
      ></textarea>
      <button>
        Enviar Deseo
      </button>
    `;
  }

  if (type === 'photo') {
    modalBody.innerHTML = `
      <h3>Sube tus fotos 📸</h3>
      <input type=\"file\">
      <button>
        Subir Foto
      </button>
    `;
  }

  if (type === 'rsvp') {
    modalBody.innerHTML = `
      <h3>Confirmar asistencia 🐴</h3>
      <input 
        type=\"text\"
        placeholder=\"Tu nombre\"
      >
      <input 
        type=\"number\"
        placeholder=\"Número de asistentes\"
      >
      <button>
        Confirmar asistencia
      </button>
    `;
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
  }
}
