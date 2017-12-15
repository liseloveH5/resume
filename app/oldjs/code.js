define(function(require, exports, module) {

    $("#codeConfirm").click(function(){
        var code = $.trim($("#code").val());
        Code[code]();
    })

    $("#codeReset").click(function(){
        foucusInput("#code");
    })

    $("#code").keyup(function(event){
        if(event.keyCode == 13){
            $("#codeConfirm").click();
        }
    })

wq

    $(".img-circle").click(function(){
        $("#myModal").modal('show');
        setTimeout("foucusInput('#code')",300)
    })



    var Code = {
        phone: function(){
            $("#phone").html("13909842001");
            $("#myModal").modal('hide')
        },
        code : function(){
            window.open("https://github.com/E-HERO-ZZ/resume/tree/gh-pages");
        }
    }
})

function foucusInput(id){
    $(id).focus();
    $(id).val("");
}