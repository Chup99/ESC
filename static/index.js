$(document).ready(function(){
    initialize();
    var skill;
    $('#networkBtn').click(function(){
        skill="Network";
        console.log("Network button clicked!")
    })
    $('#displayBtn').click(function(){
        skill="Display";
        console.log("Display button clicked!")
    })
    $('#hardwareBtn').click(function(){
        skill="Hardware";
        console.log("Hardware button clicked!")
    })

    $('form').submit(function(e){
        e.preventDefault();
    });
    $('#nextBtn').click(function(){
        var name = $('#name').val();
        $.ajax({
            url: '/help',
            type: 'POST',
            data: {
                name: name,
                skill: skill
            },
            success: function(data, status, els){
                console.log(data.cred);
                window.location.href = "/chat";
            },
            error: function(error){
                if (error.status == 500){
                    console.error("Failed to create guest user in backend!");
                    
                }
            }
        });
    });
    
});