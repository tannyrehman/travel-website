$(document).ready(function(){
 // For Counter
 $('.counter').counterUp({
    delay: 10,
    time: 1500
  });



    //    Slick Carousel
    $(".slider-2").slick({
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },  
        
    ]
    }); 
    
    new WOW().init();
    

});

   // for about section tabs
   const tabs= document.querySelectorAll(".tab-btn");
   const all_content= document.querySelectorAll(".content");

   tabs.forEach((tab, index)=>{
       tab.addEventListener('click', ()=>{
           tabs.forEach(tab=>{tab.classList.remove('active')});
           tab.classList.add('active');

           all_content.forEach(content=>{content.classList.remove('active')})
           all_content[index].classList.add('active')
       })

   });

    // Video Button
    var videoPlayer = document.getElementById("videoPlayer");
    var myVideo = document.getElementById("myVideo");
   
    function stopVideo(){
        videoPlayer.style.display = "none";
        playBtn.style.display = "block";
    }
   
    function playVideo (file){
        myVideo.src = file;
        videoPlayer.style.display = "block";
        playBtn.style.display = "none";

    };


    
    // For Accordion
    const buttons = document.querySelectorAll('button');

    buttons.forEach( button =>{
        button.addEventListener('click',()=>{
            const faq = button.nextElementSibling;
            const icon = button.children[1];
    
            faq.classList.toggle('show');
            icon.classList.toggle('rotate');
        });
    });

       // init Isotope
    var $grid = $('.grid').isotope({
    // options
    });
   // filter items on button click
 
    $('.filter-button-group').on( 'click', 'button', function() {
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({ filter: filterValue });
 
     // filter items on button active
     $(this).addClass('active').siblings().removeClass('active');
     });




