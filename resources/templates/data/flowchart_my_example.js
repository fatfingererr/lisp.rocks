window.onload = function() {
    var diagram2 = flowchart.parse('\n'+
                                   'st=>start: Start:>http://www.google.com[blank]\n' +
                                   '\n');
    diagram.drawSVG('diagram2');
};
