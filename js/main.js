

document.addEventListener('DOMContentLoaded', () => {

   // Cambiar el video principal al hacer clic en un video pequeño
    function changeVideo(videoSrc) {
      const mainVideo = document.getElementById('mainVideo');
      mainVideo.src = videoSrc;
      mainVideo.play();
    }

    const products = document.querySelectorAll('.product');
    const previewImage = document.getElementById('preview-image');

    products.forEach(product => {
    product.addEventListener('mouseover', () => {
      const imageSrc = product.getAttribute('data-image');
      previewImage.src = imageSrc;
    });

    product.addEventListener('mouseout', () => {
      previewImage.src = './assets/img/g.png';
    });
    });

    const products2 = document.querySelectorAll('.product-2');
    const previewImage2 = document.getElementById('preview-image-2');

    products2.forEach(product => {
    product.addEventListener('mouseover', () => {
      const imageSrc = product.getAttribute('data-image');
      console.log('hola 2')
      previewImage2.src = imageSrc;
    });

    product.addEventListener('mouseout', () => {
      previewImage2.src = './assets/img/fm.png';
    });
    });

  
});