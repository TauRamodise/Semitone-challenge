
 class JamBuddy {
    constructor(notes, result, rightAnswer) {
        this.notes = ['A', ['A#','Bb'], 'B', 'C', ['C#','Db'], 'D', ['D#','Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#', 'Ab']];
        this.result = result;
        this.rightAnswer = rightAnswer;
    }
    // selectNotes randomizes the array and returns two new letters in the array
    selectNotes() {
        let array = [...this.notes];
        array.sort(() => Math.random() - 0.5);
        this.result = array.slice(0, 2);
        return window.document.getElementById('notes').innerHTML = this.result.sort();
    }

    checkAnswer() {

        let inputNumber = Number(window.document.getElementById('value').value);
        this.rightAnswer = Math.abs(this.notes.indexOf(this.result[1]) - this.notes.indexOf(this.result[0]));


        if (inputNumber === this.rightAnswer) {
            return window.document.getElementById('answer').innerHTML = `Super! You got it right`;
        } else {
            return window.document.getElementById('answer').innerHTML = `Sorry! The answer is ${this.rightAnswer}. Try again`;
        }


    }
}

let verify = new JamBuddy()


module.exports = verify


