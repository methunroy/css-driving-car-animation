$(document).ready(function(){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    // $audio = $('.car audio');
    let flag = true;
    // let carSound = true;

    const cars = ['images/Img_05.png', 'images/Img_06.png'];

    // const sounds = new Audio ['sound/car+start3.mp3', 'sound/car+horn+x.mp3', 'sound/car+driveby2.mp3'];

    // keypress event
    $(document).on("keypress",function(e){
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    });

    $(document).on("keypress",function(e){
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src',cars[0]);
            }else{
                flag = true;
                $img.attr('src',cars[1]);
            }
        }
    });

    // $(document).on("keypress",function(e){
    //     if(e.which == 108){
    //         // sounds.play();
    //         event.preventDefault();
    //         window.alert("sadjnkj");
    //     }
    // });


});