function bid()
    {
        
    var phone = $('#phone').val(),
        ch='';
        $('.checkbox:checked').each(function(){
            ch="&checkbox[]="+$(this).val()+ch;
        })

           $.ajax({
            type: "POST",
            url: "/send.php",
            data: "phone="+phone+ch,
            success: function(html) {
                $("#result").arcticmodal();
                $(".result-text").empty();file:
                $(".result-text").append(html);
            }
        });
    }

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+120,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

$(window).scroll(function(){
    var r=$(document).scrollTop();
        e=0;
        rm=500;
    if(r>e){
        $(".main-nav").addClass("locked");

    }
    else{
        $(".main-nav").removeClass("locked");
    };

    if(r>rm){
        $(".menu-right").addClass("opac");

    }
    else{
        $(".menu-right").removeClass("opac");
    };

     // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("act")
         .end().filter("[href=#"+id+"]").parent().addClass("act");
   }                   
});



$(window).on('mousemove', function(e) {
        var w = $(window).width();
        var h = $(window).height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $(".parallax").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });
$(function(){
   $('#num')
  .prop('number', 10)
  .animateNumber(
    {
      number: 1000000
    },
    15000
  );
    $("#phone").mask("+7 (999) 999-99-99",{placeholder:" "});
        /*Плавная прокрутка*/
    $('a[href^="#step1"], a[href^="#step2"], a[href^="#step3"],a[href^="#bid"]').click( function(){ // если в href начинается с # или ., то ловим клик
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top -120}, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    $('.bx-clients').bxSlider({
        auto:1,
        pause:1000
    })

    //  $('.steps-ul').bxSlider({
    //     auto:1,
    //     pause:5000,
    //     minSlides: 2,
    //     maxSlides: 3,
    //     slideWidth: 300,
    //     slideMargin: 50,
    //     moveSlides: 1
    // })
    $('.popap_box').click(function() {
        $('#modalbox_' + $(this).data('body')).arcticmodal();
    });

      //Количество элементов div находящихся внутри дочернего Div "<div class="scroll_child">"
      var quqntity=$(".scroll_child li").size();

      //Общая длинна всех элементов
      var widthScroll=0;
      for (i=0;i<quqntity;i++){
        widthScroll+=$("..scroll_child li:eq("+i+")").width();
      }

      //Установка ширины дочернего Div "<div class="scroll_child">"
      $(".scroll_child").width(widthScroll);
})

/**/
    // ymaps.ready(function () {
    // var myMap = new ymaps.Map('map', {
    //         center: [51.13620429, 71.43457050],
    //         zoom: 15,
    //         controls: ['zoomControl']
    //     }, {
    //         searchControlProvider: 'yandex#search'
    //     }),
    //     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //         hintContent: 'Петрит'
    //     }, {
    //         // Опции.
    //         // Необходимо указать данный тип макета.
    //         iconLayout: 'default#image',
    //         // Своё изображение иконки метки.
    //         //iconImageHref: 'upload/na_karte2.png',
    //         // Размеры метки.
    //         iconImageSize: [40, 40],
    //         // Смещение левого верхнего угла иконки относительно
    //         // её "ножки" (точки привязки).
    //         iconImageOffset: [-20, -57]
            
    //     });
    // myMap.behaviors.disable('scrollZoom');
    // myMap.geoObjects.add(myPlacemark);
    // });
    /**/