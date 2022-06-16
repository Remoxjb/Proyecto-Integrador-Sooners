
$(document).ready(function (){
    $('submit1').on('click', function(e){
        e.preventDefault();
        function showPopUp(){
            $('.pop-up').addClass('show')
            $('.pop-wrap').addClass('show')
        }
        
        $("#close").click(function(){
            $('.pop-up').removeClass('show')
            $('.pop-wrap').removeClass('show')
        });
        
        setTimeout(showPopUp, 1000); 
    })
})