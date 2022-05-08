$(document).ready(function(){   

  $.getJSON("words.json")
      .done(function( data ) {
         console.log(data);
         let item  = data[0];

         let word = item.word;
         console.log(word);

         $('#word').text(word);

         let sound = item.pronounciation;
         console.log(sound);

         $('#pronounciation').text(sound);
         // $('.salad').text( saladname );

         // for(let i = 0; i<data.length; i++ ){
         //   console.log(i, data[i]);
         //   $('.word').append('<div class="word">' + data[i] +'</div>')
         // }
      });

}); 
  