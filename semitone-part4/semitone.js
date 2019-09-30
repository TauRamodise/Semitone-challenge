class JamBuddy {
    constructor(notes, selectedSemitoneNotes, rightAnswer, inputNumber, semitoneNoteOne, semitoneNoteTwo, streak) {
        this.notes = ['A',
            ['A#', 'B♭'],
            'B',
            'C',
            ['C#', 'D♭'],
            'D',
            ['D#', 'E♭'],
            'E',
            'F',
            ['F#', 'G♭'],
            'G',
            ['G#', 'A♭']
        ];
        this.selectedSemitoneNotes = selectedSemitoneNotes;
        this.rightAnswer = rightAnswer;
        this.inputNumber = inputNumber;
        this.semitoneNoteOne = semitoneNoteOne;
        this.semitoneNoteTwo = semitoneNoteTwo;
        this.streak = 0
    }

    selectNotes() {
        let array = [...this.notes];

        // shuffle the array
        let shuffledArray = array.sort(() => Math.random() - 0.5)

        // reduce the array two only 2 elements
        let newArray = shuffledArray.slice(0, 2)

        /*  convert the array of elements to individual strings in a new array (takes the sharps and flats 
         out of the second array) */
        let selectedNotes = newArray.toString().split(',')

        // randomize new array with either two or three elements 
        this.selectedSemitoneNotes = selectedNotes.sort(() => Math.random() - 0.5).slice(0, 2)

        return /*  window.document.getElementById('notes').innerHTML = */ this.selectedSemitoneNotes.sort();
    }

    checkAnswer() {
        this.inputNumber = Number();

        let noteOne = this.selectedSemitoneNotes[1];
        let noteTwo = this.selectedSemitoneNotes[0];

        this.rightAnswer = Math.abs(this.notes.indexOf(noteOne) - this.notes.indexOf(noteTwo));

        if (this.inputNumber === this.rightAnswer) {
            this.streak++
            return `You got it right. Well done!`
        } else {
            this.streak = 0;
        }

    }
    scoreCounter() {
        let streakCount = this.checkAnswer();
        if (streakCount === true) {
            this.streak++
            return document.getElementById('score').innerHTML = ` Streak: ${this.streak}`
        } else {
            this.streak = 0;
            let btn = document.createElement('BUTTON');
            btn.innerHTML = 'Restart Game'
            document.body.appendChild(btn);
            return btn
        }

    }
}