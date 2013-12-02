var lig = require('./index');


lig({style: 'red'}, 'options', 'can be passed in')

lig({style: 'yellow', messageLength: 2}, 'yellow', 'and work just the same', 'have multiple lines', 'but keep the same clean indentation')

lig('single message');
lig('standard', 'label and a message');
lig('multiple', 'my message goes here', 'and here as well', 'i can pass as many as i want');
lig('array', ['or i can', 'pass an array', 'like this']);
lig({style: 'red'}, 'options', 'i can even pass in extra options');

// console.log('\n');

var error = new lig({style: 'red'})
error('error', 'work just fine too')
error('error', ['work just fine too', 'just like this'])

var msg = 'this message is very long and hopefully the terminal won\'t allow it to wrap'
lig('long',[msg, msg, msg, msg].join(' '));
