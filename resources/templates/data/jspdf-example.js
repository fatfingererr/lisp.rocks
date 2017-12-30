document.getElementById("toPdfBtn").onclick = function () {
    var doc = new jsPDF();

    // 設定字體為 王翰宗細圓體繁
    doc.addFont('wt006.ttf', 'HanWangYenLight', 'normal');
    doc.setFont('HanWangYenLight');

    // 測試中文內容
    doc.text('[  ] 1. 項目一', 10, 10);
    doc.text('[  ] 2. 項目二', 10, 20);
    doc.text('[  ] 3. 項目三', 10, 30);
    doc.text('[  ] 4. 項目四', 10, 40);
    doc.text('[  ] 5. 項目五', 10, 50);

    doc.save('jspdf-from-lisp-rocks.pdf');
};
