function jiaoji(){
    var zxjbtype = getzxjbtype();
    var num = zxjbtype.length
    if(num ==0){
        return;
    }
    if(num == 1){
        var obj = document.getElementsByName("zxtype");
        var tmp = zxjbtype[0] -1;
        for (var i =0; i<obj.length;i++ )
        {
            
            if (obj[i].value == tmp){
                obj[i].checked=true;
                obj[i].click();
            }else{
                obj[i].checked=false;
            }
        }
        return;
    }
    var obj = document.getElementsByName("zxtype");
    var tmp = zxjbtype[0] -1;
    for (var i =0; i<obj.length;i++ )
    {
        obj[i].checked=false;
    }

    
    bzxjbtype = zxjbtype.join("-");
    $("gotoPageList").innerHTML = "";
    include_js('../getzxdata_jb.php?ac=j&zxjbtype='+bzxjbtype+'&page=1&m=0&n=-1&order=-1');
    var tmp = zxjbtype.join(",");
    $("export").value="������ѡ��"+tmp+'����';
    $("zxname").innerHTML="�ҵ���ѡ��"+tmp+'����';
    $('zxdel1').style.display='none';
    $('zxdel2').style.display='none';
}

function binji(){
    var zxjbtype = getzxjbtype();
    var zxjbtype = getzxjbtype();
    var num = zxjbtype.length
    if(num ==0){
        return;
    }
    if(num == 1){
        var obj = document.getElementsByName("zxtype");
        var tmp = zxjbtype[0] -1;
        for (var i =0; i<obj.length;i++ )
        {
            
            if (obj[i].value == tmp){
                obj[i].checked=true;
                obj[i].click();
            }else{
                obj[i].checked=false;
            }
        }
        return;
    }
    var obj = document.getElementsByName("zxtype");
    var tmp = zxjbtype[0] -1;
    for (var i =0; i<obj.length;i++ )
    {
        obj[i].checked=false;
    }
    
    bzxjbtype = zxjbtype.join("-");
    $("gotoPageList").innerHTML = "";
    include_js('../getzxdata_jb.php?ac=b&zxjbtype='+bzxjbtype+'&page=1&m=0&n=-1&order=-1');
    var tmp = zxjbtype.join(",");
    $("export").value="������ѡ��"+tmp+'����';
    $("zxname").innerHTML="�ҵ���ѡ��"+tmp+'����';
    $('zxdel1').style.display='none';
    $('zxdel2').style.display='none';
}

function getzxjbtype(){
    var zxjbtype=new Array();
    for(var i= 1;i<5;i++){
        if($('zxjbtype'+i).checked){
            zxjbtype.push(i);
        }
    }
    return zxjbtype;
}