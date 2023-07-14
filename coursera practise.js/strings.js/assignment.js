// Lab Instructions: Building a Functional Program

// In this exercise you'll get hands-on practice with functional programming concepts.

// Note: It is best to follow these instructions in the Preview tab on the right side.

// Tips: Before you Begin
// To view your code and instructions side-by-side, select the following in your VSCode toolbar:
// View -> Editor Layout -> Two Columns
// To view this file in Preview mode, right click on this README.md file and Open Preview
// Select your code file in the code tree, which will open it up in a new VSCode tab.
// Drag your assessment code files over to the second column.
// Great work! You can now see instructions and code at the same time.
// Questions about using VSCode? Please see our support resources here:
// Visual Studio Code on Coursera
// To run your JavaScript code
// Select your JavaScript file
// Select the "Run Code" button in the upper right hand toolbar of VSCode. Ex: It looks like a triangular "Play" button. 


// Task 1: Build a function-based console log message generator
// In this exercise, your task is to code a function named consoleStyler, which accepts four parameters:

// color
// background
// fontSize
// txt
// Inside the body of the consoleStyler() function declaration, you need to do the following:

// Create a new variable named message, and assign the following to it on the very first line inside the consoleStyler() function body.:

// "%c" + txt;
// Tip: Do not copy the 3 back ticks. These are used to format this document in the Preview tab.

// Create a style variable and assign the following to it on the next line:

// `color: ${color};`
// Tip: The single backtick before color and after the semi-colon must be included.

// Next, update the style variable (using the += operator) with the following code:

// `background: ${background};`
// Tip: The single backtick before background and after the semi-colon must be included.

// Then, update the style variable (again, using the += operator) with the following code:

// `font-size: ${fontSize};`
// Tip: The single backtick before font-size and after the semi-colon must be included.

// Finally, console log the message and style variables inside the consoleStyler function declaration.

// Hint: Be sure to use backticks (``) when updating your variable styles and not single ('') or double ("") quotes.


// Task 2: Build another console log message generator.
// Your task is to code another function, and name it celebrateStyler(). The function accepts a single parameter, reason, which should be of string data type.

// Inside the function declaration's body, code the following:

// A new variable, named fontStyle, assigning it this code:

// "color: tomato; font-size: 50px";
// On the next line, an if statement, verifying that reason == "birthday".

// Inside the body of the if block, code the following:

// console.log(`%cHappy birthday`, fontStyle);
// On the next line, add an else if, and inside the parentheses, check that

// reason == "champions"
// Inside the else if block, add this code:

// console.log(`%cCongrats on the title!`, fontStyle);
// Add an else block, with the following code inside of it:

// console.log(message, style);

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Invoke the consoleStyler() function, with the following arguments:

// '#1d5c63'

// '#ede6db'

// '40px'

// 'Congrats!'

// Next, invoke the celebrateStyler() function, with the following argument:

// 'birthday'
// Task 4: Insert a congratulatory and custom message
// Code another function, named styleAndCelebrate().
// The function declaration's body should consist of two function invocations:

// consoleStyler(color, background, fontSize, txt);  
// celebrateStyler(reason);
// Next, invoke the new function, using the following arguments:

// 'ef7c8e'
// 'fae8e0'
// '30px'
// 'You made it!'
// 'champions'

// Final Step: Let's submit your code!
// Nice work! To complete this assessment:

// Save your file through File -> Save
// Select "Submit Assignment" in your Lab toolbar.
// Your code will be autograded and return feedback shortly on the "Grades" tab.
// You can also see your score in your Programming Assignment "My Submission" tab. 


// Great job! Please continue to the next lesson.