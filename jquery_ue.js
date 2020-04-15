let ready = $(document).ready(() => {
   console.log('jQuery ready');
   let checkc = true;
   let checka = false;

   $('#executeProperty').on('click', ev => prop());
   $('#executeEffect').on('click', ev => effect());

   let where = $('#selector').val();
   let which = $('#property').val();
   let what = $('#propertyVal').val();
   let speed = $('#speed').val();

   function prop(){
      if($('#css').prop("checked") === true){
         $(where).css(which, what);
      }else if($('#animate').prop("checked") === true){
         $(where).animate({
            which: what
         }, speed);
      }
   }

   function effect(){
      console.log("effect");
      $(where).fadeIn({
         which: what
      }, speed);
   }

});