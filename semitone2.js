// let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
let newArr = []
// module.exports = 
class JamBuddy {
    constructor(notes, result) {
        this.notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        this.result = result;
    }
// selectNotes randomizes the array and returns two new letters in the array
    selectNotes() {
        const array = this.notes;
        array.sort(() => Math.random() - 0.5);
        this.result = array.splice(0,2)
        return this.result.sort();
    }
    
    checkAnswer(){

    }
};

 let jam = new JamBuddy()
 console.log(jam.selectNotes());
 