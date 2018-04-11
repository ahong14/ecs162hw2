
function changeImage(containerId){

    var windowSize = window.matchMedia("(min-width: 751px)");

  
    if(windowSize.matches){

        //get image source of image in current container
         var imgSrc = document.getElementById(containerId).getElementsByTagName('img')[0].src;

         //get picture caption 
        var picCaption = document.getElementById(containerId).getElementsByTagName('figcaption')[0].innerHTML;
    
        //get paint caption
        var paintCaption = document.getElementById(containerId).getElementsByTagName('figcaption')[1].innerHTML;
        
        //get main image source
        var mainImgSrc = document.getElementById('image').getElementsByTagName('img')[0].src;

        //if the current image source being clicked does not equal to the main image source,
        //change the image to the clicked source and change corresponding captions
        if(imgSrc != mainImgSrc){
            document.getElementById('image').getElementsByTagName('img')[0].src = imgSrc;
            document.getElementById('main_picture_caption').innerHTML = picCaption;
            document.getElementById('main_picture_paint_description').innerHTML = paintCaption;
        }
        
    }

}