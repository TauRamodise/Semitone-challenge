let JamBuddy = require('./semitone')

describe('class JamBuddy()', () => {
     let jamBuddy;
    beforeEach(() => {
       jamBuddy = new JamBuddy();
    })
    it('should be defined', () => {
        expect(JamBuddy).toBeDefined();
    });

});

fdescribe('class JamBuddy() methods ', () => {
    let jamBuddy;
   beforeEach(() => {
      jamBuddy = new JamBuddy();
   })
   it('selectNotes() should be defined', () => {
       expect(JamBuddy).toBeDefined();
   });
   it('should be defined', () => {
       let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    expect(notes.selectNotes()).not.toBe(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
});
});

describe('class JamBuddy() methods ', () => {
    let jamBuddy;
   beforeEach(() => {
      jamBuddy = new JamBuddy();
   })
   it('checkAnswer should be defined', () => {
       expect(JamBuddy).toBeDefined();
   });
   it('.... should be defined', () => {
    expect(JamBuddy).toBeDefined();
});
});