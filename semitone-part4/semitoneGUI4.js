class JamBuddy {
  constructor(notes, selectedSemitoneNotes, rightAnswer, inputNumber, streak) {
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
    this.streak = 0
  }

  

  // selectNotes randomizes the array and returns two new letters in the array
  
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
    
    return window.document.getElementById('notes').innerHTML = this.selectedSemitoneNotes.sort();
  }

  checkAnswer() {

    // let score = 0;

    this.inputNumber = Number(window.document.getElementById('value')); 
    let noteOne = this.selectedSemitoneNotes[1]
    let noteTwo = this.selectedSemitoneNotes[0]

    // if(noteOne > noteTwo){
    //   this.rightAnswer = Math.abs(this.notes.indexOf(noteOne) - this.notes.indexOf(noteTwo));
    //   return this.rightAnswer
    // } 
    // if(noteTwo > noteOne){
    //   this.rightAnswer = Math.abs(this.notes.indexOf(noteTwo) - this.notes.indexOf(noteOne));
    //   return this.rightAnswer
    // }

     this.rightAnswer = Math.abs(this.notes.indexOf(noteOne) - this.notes.indexOf(noteTwo));
    console.log(this.rightAnswer);
    

    if (this.inputNumber === this.rightAnswer) {
      this.streak++
      return window.document.getElementById('answer').innerHTML = `Super! You got it right Streak: ${this.streak}
      `;
    } else {
      this.streak = 0
      return  window.document.getElementById('answer').innerHTML =  `Sorry! The answer is ${this.rightAnswer}. Try again`;
    }
  }


  revealAnswer() {
    let showNotes  = document.getElementById('explanation'); 
    this.semitoneNoteOne = this.selectedSemitoneNotes[0];
    this.semitoneNoteTwo = this.selectedSemitoneNotes[1];

    console.log(this.semitoneNoteOne);
    console.log(this.semitoneNoteTwo);

     showNotes.textContent = `${this.notes}
                          
                          The distance between the ${this.semitoneNoteOne} and ${this.semitoneNoteTwo} is ${this.rightAnswer}`

    
    for( let n = 0; n < this.selectedSemitoneNotes.length; n++ ){
      if(this.selectedSemitoneNotes[n][0] == this.semitoneNoteOne || this.selectedSemitoneNotes[n][1] == this.semitoneNoteOne ){
        this.selectedSemitoneNotes[n].style.fontcolor('#27ae60');
      }
      if(this.selectedSemitoneNotes[n][0] == this.semitoneNoteTwo || this.selectedSemitoneNotes[n][1] == this.semitoneNoteTwo ){
        this.selectedSemitoneNotes[n].style.fontcolor('#27ae60');
      }
    }
  }
  

}   

let buddy = new JamBuddy()
buddy.selectNotes()
buddy.checkAnswer()
buddy.revealAnswer();

module.exports = buddy;