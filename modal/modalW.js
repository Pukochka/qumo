$(function(){

    const show = $('.btna');

    const bg = $('.bg');

    const btn = $('.btn');

    const sect = $('section');

    bg.hide();

        show.click(function(){
            bg.show();
            $('body').css({'overflow-y': 'hidden'});
        });
        btn.click(function(){
            bg.hide();
            $('body').css({'overflow-y': 'visible'});
        });
      const button=  $('.butt');
      const btnActive=  $('active')
  

   $('.butt').click(function (e) { 
       $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
       
            if($(this).data('type') === 'glass'){
                $('.glass').addClass('active1')
                .siblings()
                .removeClass('active1');
            }else if($(this).data('type') === 'cap')  {
                $('.cap').addClass('active1')
                .siblings()
                .removeClass('active1');
            }else if($(this).data('type') === 'bandana')  {
                $('.bandana').addClass('active1')
                .siblings()
                .removeClass('active1');
            }         
   });


   let count = Number($('#count').val());
   let days = Number($('#day').val());

//    function calculate(){

//    }
            
                

                $('.butt').click(function (e) { 
                    
                    function s(){
                        
                         if($(this).data('type') === 'man'){
                             let sex = $('#man').val();
                         }else{
                             let sex = $('#woman').val();
                         }
                    }
                    s();
                   
                   console.log(sex[s]);
            });
        
});