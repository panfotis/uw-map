Dropzone.options.myDropzone = {
  maxFiles: 1,
  acceptedFiles: 'image/tif',
  addRemoveLinks: true,
  dictDefaultMessage: "Click or drop you tif file here",
  progressBarWidth: '100%',
  init: function() {
    this.on("maxfilesreached", function() {
      alert('MAX FILESSSS');
    });
    //this.on("error", function(file, message, xhr) { if (xhr == null) this.removeFile(file);   alert('Only .tif files are allowed');    });
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

$(document).ready(function(){

  $('.submit-btn').click(function(e){
    e.preventDefault();
    $('.overlay').css('visibility', 'visible').css('opacity', '1');
  });


});



