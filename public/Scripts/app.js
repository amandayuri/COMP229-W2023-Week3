// IIFE -- Immediately Invoked Function Expression
(function(){
    function Start(){
        console.log("App Started..."); // this will running in the client-side
    }

    window.addEventListener("load", Start);
})();
