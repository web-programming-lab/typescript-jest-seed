import School from '../src/app'

describe('School', () => {
  let school: School;

  beforeEach(() => {
    school = new School();
  })

  it('a new school has an empty roster', () => {
    expect(school.classlist().size === 0).toEqual(true);
  })

  it('adding a student adds them to the roster for the given grade', () => {
    school.addStudent('Aimee', 2)

    let expectedDb = new Map<number,string[]>();
    expectedDb.set(2, ['Aimee']);
    expect(school.classlist()).toEqual(expectedDb);
  })

  it('adding more students to the same grade adds them to the roster', () => {
    school.addStudent('Blair', 2);
    school.addStudent('James', 2);
    school.addStudent('Paul', 2);

    let expectedDb = new Map<number,string[]>();
    expectedDb.set(2, ['Blair', 'James', 'Paul']);
    expect(school.classlist()).toEqual(expectedDb);
  })

  it('adding students to different grades adds them to the roster', () => {
    school.addStudent('Chelsea', 3);
    school.addStudent('Logan', 7);

    let expectedDb = new Map<number,string[]>();
    expectedDb.set(3, ['Chelsea']);
    expectedDb.set(7, ['Logan']);
    expect(school.classlist()).toEqual(expectedDb);
  })

  it('grade returns the students in that grade in alphabetical order', () => {
    school.addStudent('Franklin', 5);
    school.addStudent('Bradley', 5);
    school.addStudent('Jeff', 1);

    const expectedStudents = [ 'Bradley', 'Franklin' ];
    expect(school.studentsInClass(5)).toEqual(expectedStudents);
  })

  it('grade returns an empty array if there are no students in that grade', () => {
    expect(school.studentsInClass(1)).toEqual([]);
  })

  it('the students names in each grade in the roster are sorted', () => {
    school.addStudent('Jennifer', 4);
    school.addStudent('Kareem', 6);
    school.addStudent('Christopher', 4);
    school.addStudent('Kyle', 3);

    const expectedSortedStudents = new Map<number,string[]>();
    expectedSortedStudents.set(3, ['Kyle']);
    expectedSortedStudents.set(4, ['Christopher', 'Jennifer']);
    expectedSortedStudents.set(6, ['Kareem']);

    expect(school.classlist()).toEqual(expectedSortedStudents);
  })

  it('roster cannot be modified outside of module', () => {
    school.addStudent('Aimee', 2);
    const roster = school.classlist();
    const result = roster.get(2) || [];
    result.push('Oops.');

    let expectedDb = new Map<number,string[]>();
    expectedDb.set(2, ['Aimee']);
    expect(school.classlist()).toEqual(expectedDb);
  })

  it('roster cannot be modified outside of module using studentsInGrade()', () => {
    school.addStudent('Aimee', 2);
    school.studentsInClass(2).push('Oops.');
    let expectedDb = new Map<number,string[]>();
    expectedDb.set(2, ['Aimee']);
    expect(school.classlist()).toEqual(expectedDb);
  })

})