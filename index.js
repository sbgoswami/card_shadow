function card_shadow(options){
    var image = document.querySelector('.card_shadow');

    if(options.shadow_type === 'hard'){
        image.forEach(image => {
            image.style.boxShadow = '5px 5px 5px 5px rgba(0,0,0,0.2)';
            image.style.padding = '1em';
        });
    }
    else{
        image.forEach(image => {
            image.style.boxShadow = '10px 10px 10px 10px rgba(0,0,0,0.2)';
            image.style.padding = '3em';
        });
    }

    
}