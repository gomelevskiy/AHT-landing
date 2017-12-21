// Modal form
$(".modal-feedback form").on("submit",function(e){

    var inputFirstName = $(".modal-feedback form").find('.firstNameForm').val(),
        inputPhone = $(".modal-feedback form").find('.phoneForm').val(),
        inputEmail = $(".modal-feedback form").find('.emailForm').val();

    if( inputFirstName == "" || inputPhone == "" || inputEmail == "" ) {
        alert("Поля формы обратной связи заполнены неверно!");
        console.log('Ваше имя:' + inputFirstName);
        console.log('Телефон:' + inputPhone);
        console.log('Email:' + inputEmail);

        return false;
    }

    e.preventDefault();
    $.ajax({
         type: "POST"
         , url: "mail.php"
         , data: $(this).serialize()
     }).done(function () {
        $(".modal-feedback form").hide();
        $(".modal-feedback").find(".h1").text("Спасибо");
        $(".modal-feedback .form-successful").show();
         $("form").trigger("reset");
     });
});

// Form section 15
$(".section15-right form").on("submit",function(e){

    var inputFirstName = $(".section15-right form").find('.firstNameForm').val(),
        inputPhone = $(".section15-right form").find('.phoneForm').val(),
        inputEmail = $(".section15-right form").find('.emailForm').val();

    if( inputFirstName == "" || inputPhone == "" || inputEmail == "" ) {
        alert("Поля формы обратной связи заполнены неверно!");
        console.log('Ваше имя:' + inputFirstName);
        console.log('Телефон:' + inputPhone);
        console.log('Email:' + inputEmail);

        return false;
    }

    e.preventDefault();
    $.ajax({
        type: "POST"
        , url: "mail.php"
        , data: $(this).serialize()
    }).done(function () {
        $(".section15-right form").hide();
        $(".section15-right .form-successful").show();
        $("form").trigger("reset");
    });
});


//Chrome Smooth Scroll
try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
        $.smoothScroll();
    }
}
catch (err) {};
$("img, a").on("dragstart", function (event) {
    event.preventDefault();
});
