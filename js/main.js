$(function (){


    


    const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('topch');
          }
        });
      });

    listec = ['.reviews__item-1', '.reviews__item-2', '.reviews__item-3'];

    // for(let i = 0; i < 3; i++){ 
    //     // observer.observe(document.querySelector(listec[i]));
    //     setTimeout(function () {
    //         observer.observe(document.querySelector(listec[i]));
    //       }, 2000 * i); 
    // }




    setTimeout(function so() {
        observer.observe(document.querySelector(listec[0]));
    }, 0);

    setTimeout(function pa() {
        observer.observe(document.querySelector(listec[1]));
    }, 1000);
    setTimeout(function ka() {
        observer.observe(document.querySelector(listec[2]));
    }, 1500);
      
    



    $('.topblock__info-list').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
    });


});