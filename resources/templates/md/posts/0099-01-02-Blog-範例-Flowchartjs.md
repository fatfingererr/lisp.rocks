    {:title "Blog 範例 flowchart.js" :layout :post :tags [""] :toc false}


# 


## 

本文章只是單純測試本部落格如何使用 flowchart.js 

方便未來在文章中插入使用

<div id="diagram"></div>
<script src="http://flowchart.js.org/raphael-min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.8.0/flowchart.min.js"></script>

<div id="diagram2"></div>
<script>
window.onload = function() {var diagram2 = flowchart.parse('\n'+
    'st=>start: Start:>http://www.google.com[blank]\n' +

   
    '\n');diagram.drawSVG('diagram2');
};
</script>

