$(function(){

            let position = 0;
            
            let slideShow = 1;

            let slideScroll = slideShow;

            const conteiner = $('.moneyTrack');

            const track = $('.moneyContent');

            const item = $('.moneyContent-item');

            const items = item.length;

            const btnNext = $('.next');

            const btnPrev = $('.prev');

            let trackW = track.width();

            const itemWid = $('.monimg');

            const slideWidth = conteiner.width() / slideShow;

            const moveSlide = slideWidth;

            let onDoc = $(window).width();

            let itemCount = 0;

            
            btnNext.click(function (e) { 

                position -= moveSlide;

                itemCount++;
                
                if(itemCount === 6){
                    itemCount=0;   
                    position = 0;
                    track.css({
                        transform:`translateX(0px)`
                
                    });
                }else{
                    track.css({
            
                        transform:`translateX(${position}px)`
                
                    });
                }
            
                // checkBtn();
                console.log(position);
                console.log(itemCount);
            });

            
            btnPrev.click(function (e) { 
                
                position += moveSlide;

                itemCount--;


                if(itemCount === -1){
                    itemCount=5;
                    position=-5*conteiner.width();
                    track.css({
            
                        transform:`translateX(-${5*onDoc}px)`
                
                    });
                }else{
    
                    track.css({
                        
                        transform:`translateX(${position}px)`
                
                    });
                }
                
            
                // checkBtn();
                console.log(position);
                console.log(itemCount);
            });
            
            // НАЖАТИЕ НА КНОПКУ НАЖАТИЕ НА КНОПКУ НАЖАТИЕ НА КНОПКУ НАЖАТИЕ НА КНОПКУ
            
            // ПРОВЕРКА КНОПКИ ПРОВЕРКА КНОПКИ ПРОВЕРКА КНОПКИ ПРОВЕРКА КНОПКИ
            
            // const checkBtn = () => {
            
            //     btnNext.prop('disabled',
            
            //     position <= -(items - slideShow) * slideWidth
            
            //     );
            
            //     btnPrev.prop('disabled', position === 0);
            
            // }
            
            // checkBtn();

            

            



            const adpitem = $('.monimg');

            const adpWidth = () => {
                let docw = $(window).width();
                item.css({
                    'min-width':docw
                })
    
                // adpitem.css({
                //     'min-width':docw
                // });
            }
            setInterval(adpWidth, 10);



            const btnVis = $('.vis');    
            const btnLan = $('.lan');
            const btnProm = $('.prom');
            const btnServ = $('.serv');
            const btnKatal = $('.katal');
            const btnNet = $('.net');


            btnVis.click(function (e) { 
                e.preventDefault();
                $('#vis').addClass('visitCard');

            });
            btnLan.click(function (e) { 
                e.preventDefault();
                $('#lan').addClass('landing');

            });
            btnProm.click(function (e) { 
                e.preventDefault();
                $('#prom').addClass('promo');

            });
            btnServ.click(function (e) { 
                e.preventDefault();
                $('#serv').addClass('service');

            });
            btnKatal.click(function (e) { 
                e.preventDefault();
                $('#katal').addClass('katalog');

            });
            btnNet.click(function (e) { 
                e.preventDefault();
                $('#net').addClass('netShop');

            });

            $('.btnLan').click(function(e){
                e.preventDefault();
                $('#lan').removeClass('landing');
     
            });
            $('.btnProm').click(function(e){
                e.preventDefault();
                $('#prom').removeClass('promo');
     
            });
            $('.btnServ').click(function(e){
                e.preventDefault();
                $('#serv').removeClass('service');
     
            });
            $('.btnKatal').click(function(e){
                e.preventDefault();
                $('#katal').removeClass('katalog');
     
            });
            $('.btnNet').click(function(e){
                e.preventDefault();
                $('#net').removeClass('netShop');
     
            });
            $('.btnVisit').click(function(e){
                e.preventDefault();
                $('#vis').removeClass('visitCard');
     
            });


            // ЧЗВ
            
            $('.question-item-box-add').hide();

            $('#price').click(function (e) { 
                e.preventDefault();
                $('#priceAdd').slideToggle(300);
                $('#howAdd, #payAdd, #prePayAdd').hide(300);
                $(this).toggleClass('btnAct');
                $('#aftPr').toggleClass('dn');
                $('#aftHow, #aftPay, #aftPre').removeClass('dn');
                $('#how, #pay, #prePay').removeClass('btnAct');
            });
            $('#how').click(function (e) { 
                e.preventDefault();
                $('#howAdd').slideToggle(300);
                $('#priceAdd, #payAdd, #prePayAdd').hide(300);
                $(this).toggleClass('btnAct');
                $('#aftHow').toggleClass('dn');
                $('#aftPr, #aftPay, #aftPre').removeClass('dn');
                $('#price, #pay, #prePay').removeClass('btnAct');
            });
            $('#pay').click(function (e) { 
                e.preventDefault();
                $('#payAdd').slideToggle(300);
                $('#priceAdd, #howAdd, #prePayAdd').hide(300);
                $(this).toggleClass('btnAct');
                $('#aftPay').toggleClass('dn');
                $('#aftHow, #aftPr, #aftPre').removeClass('dn');
                $('#how, #price, #prePay').removeClass('btnAct');
            });
            $('#prePay').click(function (e) { 
                e.preventDefault();
                $('#prePayAdd').slideToggle(300);
                $('#priceAdd, #howAdd, #payAdd').hide(300);
                $(this).toggleClass('btnAct');
                $('#aftPre').toggleClass('dn');
                $('#aftHow, #aftPay, #aftPr').removeClass('dn');
                $('#how, #price, #pay').removeClass('btnAct');
            });







            $('.appl, .mr').click(function (e) { 
                e.preventDefault();
                $('.contein').addClass('active');
                $('.burgerMenu-vis').removeClass('burgerMenuAct');
            });

            $('.application-btn').click(function (e) { 
                e.preventDefault();
                $('.contein').removeClass('active');
            });

          
    $(document).on('scroll', function(e){
            if(window.scrollY  > 2){
                $('.mainBar').addClass('mainBarAct');
                $('.wrapperr').addClass('wrapperAct');
            }
            if(window.scrollY === 0){
                $('.mainBar').removeClass('mainBarAct');
                $('.wrapperr').removeClass('wrapperAct');
            }

});

                $('.s1').click(function (e) { 
                    e.preventDefault();
                    $(this)
                    .toggleClass('scale1')

               
                });
                $('.s2').click(function (e) { 
                    e.preventDefault();
                    $(this)
                    .toggleClass('scale2')

                });
                $('.s3').click(function (e) { 
                    e.preventDefault();
                    $(this)
                    .toggleClass('scale3')

                });
                $('.s4').click(function (e) { 
                    e.preventDefault();
                    $(this)
                    .toggleClass('scale4')


                });

                $('.s5').click(function (e) { 
                    e.preventDefault();
                    $(this)
                    .toggleClass('scale5')


                });
                $('.s6').click(function (e) { 
                    e.preventDefault();
                    $(this)
                    .toggleClass('scale6')
                    
                });


                $('.burgerMenu').click(function (e) { 
                    e.preventDefault();
                    $('.burgerMenu-vis').addClass('burgerMenuAct');
                });

                $('.burgerMenu-vis-ul-btn').click(function (e) { 
                    e.preventDefault();
                    $('.burgerMenu-vis').removeClass('burgerMenuAct');
                });

                $('.footer-polic').click(function(e){
                    e.preventDefault();
                    $('.modal').addClass('modalAct');
                });
                $('.footer-btn').click(function(e){
                    e.preventDefault();
                    $('.modal').removeClass('modalAct');
                });
                         
});
document.addEventListener('DOMContentLoaded',function(){
    const nums = document.querySelectorAll('.examplesClient-content-item-number');
    const speed = 200000;

    nums.forEach(num => { 
        const updateCount = () =>{
            const target = +num.getAttribute('data-target');
            const count = +num.innerText;

            const inc = target / speed;

            if(count < target){
                num.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 100);
            }else{
                count.innerText = target;
            }

        }
        updateCount();
    });
     
});    
