Dropzone.options.myDropzone = {
  maxFiles: 1,
  acceptedFiles: 'image/tiff,.tif',
  addRemoveLinks: true,
  dictDefaultMessage: "Click or drop you tif file here",
  progressBarWidth: '100%',
  init: function() {
    // this.on("maxfilesreached", function() {
    //   alert('MAX FILESSSS');
    // });
    this.on("error", function(file, message, xhr) {
      if (xhr == null ) {
          if(message == 'You can not upload any more files.' || message == 'You can\'t upload files of this type.'){
            this.removeFile(file);
          }
          console.log(message);
          alert(message);
      }
    });
    this.on("addedfile", function(file, message, xhr) {
      $('#sample-dataset').val('_none').attr('disabled', 'disabled');
      $('.select-wrapper .notice').removeClass('d-none');
    });
    this.on("removedfile", function(file) {
      if(this.files.length == 0){
        $('#sample-dataset').removeAttr('disabled');
        $('.select-wrapper .notice').addClass('d-none');
      }
    });
  },
};



function show_overlay(){
  $('.overlay').css('visibility', 'visible').css('opacity', '1');
}

function hide_overlay(){
  $('.overlay').css('visibility', 'hidden').css('opacity', '0');
}


function fakeShowResults(){

  setTimeout(
    function() {

      //remove form
      $('section.form').remove();
      //hide overlay
      hide_overlay();

      let results_div = $('section.results')
      //show results div
      results_div.removeClass('d-none');

      //scroll to results div
      $([document.documentElement, document.body]).animate({
        scrollTop: results_div.offset().top
      }, 1000);

    }, 4000);

}


$(document).ready(function(){

  $('.submit-btn').click(function(e){
    e.preventDefault();
    show_overlay();

    //just for presentation purposes
    //we will remove it
    fakeShowResults();

  });


});



