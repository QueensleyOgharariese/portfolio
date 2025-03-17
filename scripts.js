// Testo WELCOME
const welcomeText = document.querySelector("#welcome-text");
const text = "WELCOME!";
let index = 1;

setTimeout(typeText, 1000);

function typeText() {
  welcomeText.textContent = text.slice(0, index) + "|";
  if (index < text.length) {
    index++;
    const randomInterval = Math.floor(Math.random() * 350) + 50;
    setTimeout(typeText, randomInterval);
  } else {
    setTimeout(eraseText, 1300);
  }
}

function eraseText() {
  index--;
  welcomeText.textContent = text.slice(0, index) + "|";
  if (index > 0) {
    setTimeout(eraseText, 100);
  } else {
    setTimeout(typeText, 1500);
  }
}

// progress-bar

  $(document).ready(function() {
    function animateSkillbars() {
      var windowHeight = $(window).height();
      var windowTop = $(window).scrollTop();
      var skillbarTop = $('#skills').offset().top;

      if (windowTop + windowHeight > skillbarTop) {
        // Animiamo le skillbars solo una volta
        $('.skillbar-bar').each(function() {
          var $this = $(this);
          if (!$this.hasClass('animated')) { 
            var percentage = $this.parent().data('percent'); 
            $this.animate({
              width: percentage
            }, 1500); 
            $this.addClass('animated'); 
          }
        });
      }
    }

    // Controlliamo quando la pagina viene scrollata
    $(window).scroll(function() {
      animateSkillbars();
    });

    animateSkillbars();
  });
  function downloadResume() {
    const filePath = document.querySelector('.download-btn').getAttribute('data-file');
    const fileName = filePath.split('/').pop();
  
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      alert('Download avviato!');
  }




 