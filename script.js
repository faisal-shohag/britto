let lpages=['.page2', '.page3', '.page4', '.page5'];
let lhide=['.page1', '.page2', '.page3', '.page4', '.page5'];
let l =-1;

$('.next').click(function(){
l++;
$(lhide[l]).hide();
$(lpages[l]).show();
});
$('.prev').click(function(){
    l--;
    $(lhide[4]).hide();
    $(lpages[l]).show();
});