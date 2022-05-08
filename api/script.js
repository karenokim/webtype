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
        
        let meaning = item.meaning;
        console.log(meaning);

      });

}); 
  