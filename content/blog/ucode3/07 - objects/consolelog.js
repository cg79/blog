function wrapConsole() {
 var original = console.log;
 console.log = function() {
        debugger;
        original('entering here');
        original(...arguments);
        original.apply(console, arguments);
        original.apply(null, arguments);

        original.call(null, ...arguments);
        
    } 
}

wrapConsole();

console.log(1, 'a');