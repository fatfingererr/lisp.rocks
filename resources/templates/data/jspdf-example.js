document.getElementById("toPdfBtn").onclick = function () {
    var doc = new jsPDF();
    doc.addFont('msjh.ttc', 'Microsoft JhengHei', 'normal');

    doc.setFont('Microsoft JhengHei');
    doc.text(15, 45, '早上好。 很高兴见到你');

    doc.text('[  ] 1. item1', 10, 10);
    doc.text('[  ] 2. item2', 10, 20);
    doc.text('[  ] 3. item3', 10, 30);
    doc.text('[  ] 4. item4', 10, 40);
    doc.text('[  ] 5. item5', 10, 50);

    doc.save('jspdf-from-lisp-rocks.pdf');
};
