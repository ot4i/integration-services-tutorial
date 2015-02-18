   function startTutorialFromDetailsScreen() {
      var result = null;
      var tut = null;
      try {            
           result = javaGetSelectedTutorialFunction();
           
           var tutInfoString = result[0];
           tut = JSON.parse( tutInfoString );

      }//try
      catch(e){
          alert( 'a java error in javaGetSelectedTutorialFunction occurred: ' + e.message );
      }//catch

      var tutUrl = null;
      if (tut !== undefined)
        tutUrl = tut.stepsURL;

      try {

           result = javaOpenTutorialStepsFunction(tutUrl);

      }//try
      catch(e){
          alert( 'a java error in startTutorialFromDetailsScreen occurred: ' + e.message );
      }//catch
   };

   function backToGallery() 
   {
      var result = null;

      try 
      {
           result = javaBackToGalleryFunction();
      }//try
      catch(e)
      {
          alert( 'a java error in javaBackToGalleryFunction occurred: ' + e.message );
      }//catch

   };