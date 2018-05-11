$(document).ready(function() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    // Get the modal


    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modal = document.getElementById('myModal');
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01").src = "css/images/i-sandshrew.png";
    var captionText = document.getElementById("caption");

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // $('input').blur(function() {

    //     if ($(this).val())
    //         $(this).addClass('used');
    //     else
    //         $(this).removeClass('used');

    // });



    // MEGA TESTE
    // document.getElementById("myImage").style.display = "none";

    // var modal = document.getElementById('myModal');

    // var img = document.getElementById('myImg');
    // var modalImg = document.getElementById("img01").src = "css/images/i-sandshrew.png";

    // var captionText = document.getElementById("caption");
    // img.onclick = function() {
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }


    // var span = document.getElementsByClassName("close")[0];

    // span.onclick = function() {
    //     modal.style.display = "none";
    // }


});