 // Variável para controlar se o áudio está ou não mudo
 let isMuted = false;

 // Função para alternar entre mutar e desmutar o áudio
 function toggleMute() {
     const muteIcon = document.getElementById('muteIcon');
     const audioElement = document.getElementById('backgroundMusic');
     
     if (isMuted) {
         muteIcon.classList.remove('fa-volume-off');
         muteIcon.classList.add('fa-volume-up');
         isMuted = false;
         // Desmutar o áudio
         audioElement.muted = false;
     } else {
         muteIcon.classList.remove('fa-volume-up');
         muteIcon.classList.add('fa-volume-off');
         isMuted = true;
         // Mutar o áudio
         audioElement.muted = true;
     }
 }
