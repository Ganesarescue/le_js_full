
function activeGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");
    // let currentImage = document.querySelector(".current");
    
    // mainImage.setAttribute("src", newImagesrc);
    

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            // Set clicked image as display image.
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);

            // Change which image is current.
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");
        });
    });
}