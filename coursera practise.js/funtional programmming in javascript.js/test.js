
// Task 1: Build a function-based console log message generator
function consoleStyler(color,background,fontsize,txt) {
    

    var message = "%c" + "text";
    var style = 'color:${color};';
    style +='background:${background};';
    style += `font-size: ${"fontSize"};`;

    
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    
    var message;
    var style;
    var reason;
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday"){
        console.log(`%cHappy birthday`, fontStyle);
        
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
    
}
var fontStyle;

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63');
consoleStyler('#ede6db');
consoleStyler('40px');
consoleStyler('congrats!');
celebrateStyler('birthday');
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    var color;
    var background;
    var fontSize;
    var txt;
    

    consoleStyler(color, background, fontSize, txt);  
celebrateStyler(reason);
    
}
// Call styleAndCelebrate
var reason;
celebrateStyler("you made it!");
styleAndCelebrate('ef7c8e');
styleAndCelebrate('fae8eo');
styleAndCelebrate('30px');
styleAndCelebrate('you made it!');
styleAndCelebrate('champions');

 





function styleAndCelebrate() {
    var color;
    var background;
    var fontSize;
    var txt;
    

    consoleStyler(color, background, fontSize, txt);  
       celebrateStyler(reason);
    
}
// Call styleAndCelebrate


styleAndCelebrate('ef7c8e');
styleAndCelebrate('fae8eo');
styleAndCelebrate('30px');
styleAndCelebrate('you made it!');
styleAndCelebrate('champions');
