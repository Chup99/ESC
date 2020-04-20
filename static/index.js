$(document).ready(function(){
    initialize();
    var skill;

    // NOTE timer in the console
    // var myInterval = setInterval(() => {
    //     console.log(new Date());
    // }, 10000);

    // ANCHOR click the button and do log for now
    // TODO make toggle different color button & radio button to select multiple skills
    $('.btn-secondary').click(function () {
        var buttonId = $(this).attr('id');
        skill = buttonId;
        console.log(buttonId + " button clicked!");
    })

    $('form').submit(function(e){
        e.preventDefault();
    });

    // NOTE cache the selected-skills-ul button
    var $ulSelectedSkills = $('#ul-selected-skills');
    // cache chat-container
    var $chatContainer = $('#chat-container');

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
                    // NOTE i disable the window to direct to the chat
                    // window.location.href = "/chat";

                    // TODO INSERT the chat here --chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat
                    $ulSelectedSkills.append("<li>name: " + name + ", skills: " + skill + "</li>");  // chat example (remove this ul-select-skills)
                    // FIXME serve the chat as separate componet in div id chat-container
                    $chatContainer.append("../views/chat.html");
                    // --chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat--chat
                } else{
                    // ANCHOR alert to interrupt page --> before user submit without click skill buttons
                    // console.log("click skill pls");
                    alert("Please choose a skill you want to ask");
                }
            },
            error: function(error){
                if (error.status == 500){
                    // NOTE failure of creation of guest user should happen in ../app.js
                    console.error("Failed to create guest user in backend!");
                }
            }
        });
    });
    
});