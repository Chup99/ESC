//import rainbowSDK from "./rainbow-sdk.min.js";

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
                    var contact=rainbowSDK.contacts.getAll();
                    console.log ("Contacts below!\n");
                    console.log(contact);
                    //window.location.href = "/chat";
                }
                else{
                    console.log("click skill pls")

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