$(document).ready(function(){
    initialize();
    var skill;

    var myInterval = setInterval(() => {
        console.log(new Date());
    }, 10000);

    // ANCHOR click the button and do log for now
    $('.btn-secondary').click(function () {
        var buttonId = $(this).attr('id');
        skill = buttonId;
        console.log(buttonId + " button clicked!");
    })

    $('form').submit(function(e){
        e.preventDefault();
    });

    // ANCHOR the submit button (innerHTML='NEXT')
    $('#nextBtn').click(function(){
        var name = $('#name').val();
        console.log(`this name: ${name}`)

        $.ajax({
            url: '/help',
            type: 'POST',
            data: {
                name: name,
                skill: skill
            },
            success: function(data, status, els){
                console.log(`skill: ${skill}`);
                console.log (`name: ${name}`);
                if (skill!=undefined){
                    console.log(data.cred);
                    window.location.href = "/chat";
                }
                else{
                    // ANCHOR undefined skill / never click 
                    console.log("click skill pls");
                }
            },
            error: function(error){
                if (error.status == 500){
                    console.error("Failed to create guest user in backend!");
                    
                }
            }
        });
    });
    
});