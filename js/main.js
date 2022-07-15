(() => {
  // variables / DOM connections go here
  let sigils = document.querySelectorAll('.sigilContainer'),
        houseVid = document.querySelector('video'),
        lightBox = document.querySelector ('.lightbox'),
        closeBut = lightBox.querySelector ('.close'),
        houseName = document.querySelector ('.house-name'),
        houseInfo = document.querySelector ('.house-desc'),
        bannerImages = document.querySelector ('#houseImages');

        const houseData = [
            [`stark`, `stark house info`], // index 0 => houseData [0][0], houseData [0][1]
            [`baratheon`, `baratheon house info`], // index 1
            [`lannister`, `lannisterhouse info`], // index 2
            [`tully`, `tully house info`], // index 3
            [`greyjoy`, `greyjoy house info`], // index 4
            [`arryn`, `arryn house info`] // index 5
        ];

    function showHouseData() {
        let currentHouse = this.dataset.offset;
        //debugger;
        // show the right  house info on a sigil click
        // this refers to the shield you clicked on
        // this.dataset.offset is the data-offset attribute defined on that html tag
        houseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
        houseInfo.textContent = houseData[this.dataset.offset][1];

        // each banner is 600px per wde
        let animationTotal = 600 * this.dataset.offset;
        // actually changes the css an animate the banner 
        bannerImages.style.right = `${animationTotal}px`;

        console.log('move the banner images', animationTotal);
    }

    function openLightbox() {
            lightBox.classList.add('show-lightbox');
            houseVid.currentTime = 0;
            houseVid.play();
       }

    function closeLightbox (){
            lightBox.classList.remove('show-lightbox');
            houseVid.currentTime = 0;
            houseVid.pause();
            lightBox.classList.remove('show-lightbox');
        }

   
    
    // event handling here (how is the user going to interact with stuff)

    //sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
    sigils.forEach(sigil => sigil.addEventListener('click', showHouseData));

    houseVid.addEventListener('ended', closeLightbox),
    closeBut.addEventListener('click', closeLightbox);

})();
