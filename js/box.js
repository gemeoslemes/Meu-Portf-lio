document.getElementById('box1').style.display = 'block';
document.getElementById('box2').style.display = 'none';
document.getElementById('box3').style.display = 'none';

    function showContent(boxId) {
      // Ocultar todos os parágrafos
      var allContents = document.querySelectorAll('.content');
      allContents.forEach(function(content) {
        content.style.display = 'none';
      });

      // Mostrar o parágrafo da div clicada
      var selectedContent = document.getElementById(boxId);
      selectedContent.style.display = 'block';
    }