
function openNav() {
     $('#phone-name').removeAttr('class')
  document.getElementById("mySidebar").style.height = "80%";
  document.getElementById("mySidebar").style.paddingTop = "60px";
  $('header').not("#mySidebar").css("filter","blur(8px)");
  $('section').css("filter","blur(8px)");
  document.getElementById("mySidebar").style.transition=('height 1s');
  document.getElementById("mySidebar").style.paddingTop = "60px";
     $('#logo-image-1').show();
 
}

function closeNav() {
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("mySidebar").style.paddingTop = "0px";
    $('header').not("#mySidebar").css("filter","none");
   
    $('section').css("filter","none");
    if( document.getElementById("mySidebar").style.height==0){
          $('#phone-name').attr('class','sticky-top');
          $('#logo-image-1').hide();
    }
  

}
    function openNavIphone() {
        $('#title-text').delay(200).fadeOut()
        document.getElementById("SidebarIphone").style.height = "60%";
        document.getElementById("SidebarIphone").style.transition=('height 1s');
        $('header').not("#mySidebar").css("filter","blur(8px)");
        $('section').css("filter","blur(8px)");
        
}


function closeNavIphone() {
      document.getElementById("SidebarIphone").style.height = "0px";
     
       $('header').not("#mySidebar").css("filter","none");
  
         $('section').css("filter","none");
       
              $('#title-text').delay(500).fadeIn()

        
      

}
    function openNavAcc() {
        document.getElementById("SidebarAcc").style.height = "20%";
      document.getElementById("SidebarAcc").style.transition=('height 1s');
        $('header').not("#mySidebar").css("filter","blur(8px)");
        $('section').css("filter","blur(8px)");
       
          }




function closeNavAcc() {
   document.getElementById("SidebarAcc").style.height = "0";
    
       $('header').not("#mySidebar").css("filter","none");
  
         $('section').css("filter","none");

}
/*------------------------scroll--------------------*/
 
      Aacessórios =  $('.Aacessórios');
      $(Aacessórios).click(  function(){
           var valid=true;
            container =  $('#SidebarAcc');
           document.onclick=function ( e ) {
        
         
               if (Aacessórios.is(e.target))
           {
               $('#phone-name').removeAttr('class')
              openNavAcc()
               valid=true;
              
            }else if(valid){
                if (!container.is(e.target)){
                     $('#phone-name').attr('class','sticky-top')
                         closeNavAcc()
                 valid=false;
               return false;
            }}
           }
    })
  iPhones =  $('.iPhones');
 
   

$(iPhones).click(  function(){  
            var valid=true
            container1 =  $('#SidebarIphone');
            $('body ').click(function (e){

            if (iPhones.is(e.target))
         {
              $('#phone-name').removeAttr('class')
              openNavIphone();
              
              valid=true;
           
         }else if(valid){
             if (!$(e.target).closest("#SidebarIphone").length ){
              $('#phone-name').attr('class','sticky-top')
               closeNavIphone();
               valid=false;
               return false;
            
             }
              
             
         }})})


    
    
    
 burger=$('.burger-icon')
burger.click(  function(){  
            var valid=true
            container1 =  $('#mySidebar');
            $('body ').click(function (e){

            if (burger.is(e.target))
         {
              openNav();
             
              valid=true;
           
           
         }else if(valid){
  
             if (!$(e.target).closest("#mySidebar").length ){
               
               closeNav();
               valid=false;
               return false;
            
             }
              
             
         }})})
var car = document.querySelectorAll('.carousel-item');
for (var i=0;car.length<i;i++){
    car[i].addEventListener('click',function(){

            alert('dsqdsqdsq')
            $('.section-text').css('right:inherit;','left:15%;')
        }
    
    
    )
}

/*--------------------------responsive jquery----------------------*/
$(document).ready(function() {
var $window = $(window);
function checkWidth() {
  var windowsize = $window.width();
  if (windowsize < 768) {
  $('.rating').removeClass('mx-5');
  //$('#btnbtn').removeClass('form-control');
  //$('#btnbtn').addClass('form-control-sm');
  $('.rating').addClass('mx-2');
  $('.fa-star').addClass('fa-xs');
  $('.footer').removeClass('mt-6');
  $('.footer').addClass('mt-4');
  $('#newsletter').removeClass('form-control') ;   
  $('#newsletter').addClass('form-control-sm');
  $('.icon-bor-1').addClass('fa-sm');
  $('.icon-bor').removeClass('mx-3');
  $('.icon-bor').addClass('mx-2');
  $('.icon-bor-fb').removeClass('mx-3');
  $('.icon-bor-fb').addClass('mx-2');
  $('.icon-bor-1').removeClass('mx-2');
  $('.icon-bor-1').removeClass('mx-2');
  $('.col-dis').addClass('p-0'); 
  $('.col-dis ').removeClass('px-3');
  $('.selling').addClass('mx-1'); 
  $('.selling').removeClass('mx-3');   
  $('.intro-text').removeClass('py-5');   
  $('.intro-text').addClass('py-1'); 
  $('.vertical').removeClass('ml-4'); 
  $('.text-section').removeClass('mx-3')
  $('.destaques').addClass('mx-2')
  $('.containers').addClass('pl-1')
  }
  else{
  $('.rating').addClass('mx-5');
  $('.rating').removeClass('mx-2');
  $('.fa-star').removeClass('fa-xs');
  $('.footer').addClass('mt-6');
  $('.footer').removeClass('mt-4');
  $('#newsletter').addClass('form-control') ;   
  $('#newsletter').removeClass('form-control-sm'); 
    $('.icon-bor').addClass('mx-3');
    $('.icon-bor').removeClass('mx-2');
       $('.icon-bor-fb').addClass('mx-3');
    $('.icon-bor-fb').removeClass('mx-2');
     $('.icon-bor-1').removeClass('fa-sm');
     $('.icon-bor-1').addClass('mx-2');
      $('.col-dis ').addClass('px-3'); 
      $('.col-dis ').removeClass('p-0');
     $('.selling').addClass('mx-3'); 
     $('.selling').removeClass('mx-1'); 
      $('.vertical').addClass('ml-4');   
  $('.text-section').addClass('mx-3')
      $('.destaques').removeClass('mx-2')
     $('.containers').removeClass('pl-1')
  }}
  checkWidth();
  $(window).resize(checkWidth);
})
    
    





