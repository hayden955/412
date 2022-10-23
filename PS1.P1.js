const word = items => items.split('').sort().reverse().join('');
console.log(`rev alpha order is: ${word('supercalifragilisticexpialidocious')}`)