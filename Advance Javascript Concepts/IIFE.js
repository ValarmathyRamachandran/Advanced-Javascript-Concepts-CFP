var userName = "Bill Gates";

(function (name) {

    function display(name)
    {
        alert("IIFE.js: " + name);
    }

    display(name);
})(userName);