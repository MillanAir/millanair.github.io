
// self-executing anonymous function
// IIFE -- Immediately invoked function expression
(function(){
    

    function Start(){
        
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();