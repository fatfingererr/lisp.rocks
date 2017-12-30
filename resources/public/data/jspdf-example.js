window.onload = function() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    var canvas = pdf.canvas;
    canvas.height = 72 * 11;
    canvas.width=72 * 8.5;;
    // var width = 400;
    html2pdf(document.body, pdf, function(pdf) {
        var iframe = document.getElementById('report');
        iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
        document.body.appendChild(iframe);
        iframe.src = pdf.output('datauristring');
        //var div = document.createElement('pre');
        //div.innerText=pdf.output();
        //document.body.appendChild(div);
    }
            );
}
