var allButtons = document.querySelectorAll("button"); //collects all button into a variable

//looping through the buttons with FORLOOP
    for (var i = 0; i < allButtons.length; i++){
        //adding an eventlistener to all the looped buttons
        allButtons[i].addEventListener("click", handleClick);
        //stating the function
        //detects button click from the makeSound function
        function handleClick(){
            var buttonHtml = this.innerHTML;
            //caling sound function
            makeSound(buttonHtml); //this calls the function "makeSound" created below and passes the parameter "buttonhtml" which gives the letter of each button
            //adding an animation function to the clicked buttons
            makeAnimation(buttonHtml);
            

    }
    
}
//detects key presses from the makeSound function
document.addEventListener("keypress", keyClick);
function keyClick(event){
    //calling sound function
    makeSound(event.key); //this calls the function "makeSound" created below and passes the parameter "event.key" which givs the key value.
    //adding an animation function to the key presses
    makeAnimation(event.key)
}

function makeSound(key){
    switch (key) {
        case "w":
            var wSound = new Audio("sounds/crash.mp3");
            wSound.play();
            break;
        case "a":
            var aSound =  new Audio("sounds/kick-bass.mp3");
            aSound.play();
            break;
        case "s":
                var sSound =  new Audio("sounds/snare.mp3");
                sSound.play();
                break;
        case "d":
            var dSound =  new Audio("sounds/tom-1.mp3");
                    dSound.play();
                    break;
        case "j":
            var jSound =  new Audio("sounds/tom-2.mp3");
            jSound.play();
            break;
        case "k":
            var kSound =  new Audio("sounds/tom-3.mp3");
            kSound.play();
            break;
        case "l":
            var lSound =  new Audio("sounds/tom-4.mp3");
            lSound.play();
            break;
        

    
        default: console.log(buttonHtml);
    }

}
//creating a function for timed animation
function makeAnimation(currentkey){//current key takes in input from the "buttonHtml" and "event.key"
    document.querySelector("." + currentkey).classList.add("pressed");
    //setting a timeout function for the animation
    setTimeout(function(){
        document.querySelector("." + currentkey).classList.remove("pressed");
    }, 100 );
}
