$(document).ready(function(){
  var textarea = $('textarea');
  var text="";
  if(localStorage.text)
  {
    text=localStorage.text;
  }
  else {
    text="";
  }

  textarea.val(text);

  if(textarea.val()!="")
  {
    $('.title-text2').hide();
  }

  $(textarea).on('input',function(e){
  if(e.target.value === ''){
    $('.title-text2').fadeIn("medium");
    localStorage.setItem("text","");
  } else {
    $('.title-text2').fadeOut("medium");
    text = textarea.val();
    localStorage.setItem("text",text);
  }
});

});
