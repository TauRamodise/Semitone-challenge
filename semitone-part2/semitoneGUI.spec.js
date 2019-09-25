describe('class JamBuddy()', () => {
    const jsdom = require('jsdom');
    const {
        JSDOM
    } = jsdom
    global.view = dom.window;
    global.window = dom.window.document;

    beforeEach(() => {
        dom = new JSDOM(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="css/main.css">
        
        </head>
        
        <body>
            <h1 style="text-align: center">Semitone Game</h1>
            <div class="container">
                <h4>Your chosen letters are: </h4>
                <button class="btn btn-lg " onclick="verify.selectNotes()" id="btn">Click me!</button>
                <p id="notes"></p>
                <script src="semitoneGUI.js" type="text/javascript"></script>
        
                <h4>What is the distance between the two letters: </h4>
                <input type="text" id="value" placeholder="What's your guess?">
                <button onclick="verify.checkAnswer()">Check my answer</button>
                <p id="answer"></p>
                <br>
                <h4> Player Score</h4>
                <p id="score"></p>
            </div>
        </body>
        </html>
        `)
    })

})