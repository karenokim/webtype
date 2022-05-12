let words;
let counter = 0;

$(document).ready(function(){   

  $.getJSON("words.json")
      .done(function( data ) {
         console.log(data);

         words = data;

          showWord(counter);

         $('.col2').click(function(){

          if(counter < 12){        
            counter ++; // increment fact index until 5
          }else{
            counter = 0; // reset fact index
          }
          console.log(counter);
          showWord(counter);
       
        });

      });

}); 


function showWord(index){

   let item  = words[index];

   let word = item.word;
   // console.log(word);
   $('#word').text(word);

   let sound = item.pronounciation;
   // console.log(sound);
   $('#pronounciation').text(sound);
  
  let meaning = item.meaning;
  // console.log(meaning);
  $('#meaning').text(meaning);

  let image = item.image;
  $('#image img').attr('src', 'asset/'+image);

  let background = item.bg;
  $('.col2').css('background',background);


}