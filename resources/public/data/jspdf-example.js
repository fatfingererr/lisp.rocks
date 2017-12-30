document.getElementById("toPdfBtn").onclick = function () {
  alert("即将打印，样式会有变化，但不妨碍您继续编辑");

    var doc = new jsPDF();

    // 添加文本‘Download PDF’
    doc.text('[  ] 1. tttt', 10, 10);
    doc.text('[  ] 2. aaaa', 10, 20);
    doc.text('[  ] 3. tttt', 10, 30);
    doc.text('[  ] 4. bbbb', 10, 40);
    doc.text('[  ] 5. tttt', 10, 50);

    doc.save('a4.pdf');

};
