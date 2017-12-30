window.onload = function() {
    var diagram = flowchart.parse('st=>start: Start:>http://www.google.com[blank]\n' +
        'e=>end:>http://www.google.com\n' +
        'op1=>operation: My Operation1\n' +
        'sub1=>subroutine: My Subroutine1\n' +
        'cond1=>condition: Yes \n' +
        'or No 1?\n:>http://www.google.com\n' +
        'op2=>operation: My Operation2\n' +
        'sub2=>subroutine: My Subroutine2\n' +
        'cond2=>condition: Yes \n' +
        'or No 2?\n:>http://www.google.com\n' +
        'io=>inputoutput: catch something...\n' +
        '' +
        'st->op1->cond1\n' +
        'cond1(yes, right)->op2->cond2\n' +
        'cond1(no)->op1\n' +
        'cond2(yes, right)->io->e\n' +
        'cond2(no)->op2');
    diagram.drawSVG('diagram');

    // you can also try to pass options:

    diagram.drawSVG('diagram', {
        'line-width': 3,
        'line-length': 50,
        'text-margin': 10,
        'font-size': 14,
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block'
    });

    var diagram2 = flowchart.parse('st=>start: Start:>http://www.google.com[blank]\n' +
        'e=>end:>http://www.google.com\n' +
        'op1=>operation: My Operation1\n' +
        'sub1=>subroutine: My Subroutine1\n' +
        'cond1=>condition: Yes \n' +
        'or No 1?\n:>http://www.google.com\n' +
        'op2=>operation: My Operation2\n' +
        'sub2=>subroutine: My Subroutine2\n' +
        'cond2=>condition: Yes \n' +
        'or No 2?\n:>http://www.google.com\n' +
        'io=>inputoutput: catch something...\n' +
        '' +
        'st->op1->cond1\n' +
        'cond1(yes, right)->op2->cond2\n' +
        'cond1(no)->op1\n' +
        'cond2(yes, right)->io->e\n' +
        'cond2(no)->op2');
    diagram2.drawSVG('diagram2');

    // you can also try to pass options:

    diagram2.drawSVG('diagram2', {
        'line-width': 3,
        'line-length': 50,
        'text-margin': 10,
        'font-size': 14,
        'font-color': 'red',
        'line-color': 'black',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block'
    });
};
