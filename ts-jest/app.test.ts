import Charles from '../src/app'

describe('Charles', () => {

  const charles = new Charles()

  it('stating something', () => {
    const result = charles.hey('Tom-ay-to, tom-aaaah-to.')
    expect(result).toEqual('Whatever.')
  })

  xit('shouting', () => {
    const result = charles.hey('WATCH OUT!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting gibberish', () => {
    const result = charles.hey('FCECDFCAAB')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('asking a question', () => {
    const result = charles.hey('Does this cryogenic chamber make me look fat?')
    expect(result).toEqual('Sure.')
  })

  xit('asking a numeric question', () => {
    const result = charles.hey('You are, what, like 15?')
    expect(result).toEqual('Sure.')
  })

  xit('asking gibberish', () => {
    const result = charles.hey('fffbbcbeab?')
    expect(result).toEqual('Sure.')
  })

  xit('talking forcefully', () => {
    const result = charles.hey("Let's go make out behind the gym!")
    expect(result).toEqual('Whatever.')
  })

  xit('using acronyms in regular speech', () => {
    const result = charles.hey("It's OK if you don't want to go to the DMV.")
    expect(result).toEqual('Whatever.')
  })

  xit('shouting numbers', () => {
    const result = charles.hey('1, 2, 3 GO!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('no letters', () => {
    const result = charles.hey('1, 2, 3')
    expect(result).toEqual('Whatever.')
  })

  xit('question with no letters', () => {
    const result = charles.hey('4?')
    expect(result).toEqual('Sure.')
  })

  xit('shouting with special characters', () => {
    const result = charles.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting with no exclamation mark', () => {
    const result = charles.hey('I HATE THE DMV')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('statement containing question mark', () => {
    const result = charles.hey('Ending with ? means a question.')
    expect(result).toEqual('Whatever.')
  })

  xit('prattling on', () => {
    const result = charles.hey('Wait! Hang on.  Are you going to be OK?')
    expect(result).toEqual('Sure.')
  })

  xit('silence', () => {
    const result = charles.hey('')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('prolonged silence', () => {
    const result = charles.hey('   ')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('alternate silence', () => {
    const result = charles.hey('\t\t\t\t\t\t\t\t\t\t')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('multiple line question', () => {
    const result = charles.hey('\nDoes this cryogenic chamber make me look fat?\nNo.')
    expect(result).toEqual('Whatever.')
  })

  xit('starting with whitespace', () => {
    const result = charles.hey('         hmmmmmmm...')
    expect(result).toEqual('Whatever.')
  })

  xit('ending with whitespace', () => {
    const result = charles.hey('Okay if like my  spacebar  quite a bit?   ')
    expect(result).toEqual('Sure.')
  })

  xit('other whitespace', () => {
    const result = charles.hey('\n\r \t')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('non-question ending with whitespace', () => {
    const result = charles.hey('This is a statement ending with whitespace      ')
    expect(result).toEqual('Whatever.')
  })

})