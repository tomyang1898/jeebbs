var islogining =0;

function login() {
    if(islogining){
        return;
    }
    var username = $('#username').val();
    username = $.trim(username);
    var password = $.trim($('#password').val());
    
    
    if (username && password) {
       //$("#loginbutton").disabled =true;
        showajaxlogin();
        islogining = 1;
        var cookielife = $('#cookielife').val();
        $.post('xg/login.php',{username:username,password:password,cookielife:cookielife},function(data){
               if(data=='success'){
                    islogin =true;islogining=0;
                    hideajaxlogin();
                    showuserinfo(username);
                    isgetfangan = true;
        isgetzixuan = true;
        showdata();
               }else{
                    alert('��½ʧ�ܣ����ٴε�½');
                    hideajaxlogin();
               }
        });
    }else{
        alert('�û���������Ϊ�գ�');
        hideajaxlogin();
    }
}

function showajaxlogin(){
    if($('#ajaxlogin') != 'undefined'){
        $('#logininfo > span').eq(0).before('<span id="ajaxlogin"><img src="images/ajaxloader1.gif" />��½�У����Ժ򡣡�����</span>');
    }
    $('#ajaxlogin').show();
}
function hideajaxlogin(){
    $('#ajaxlogin').hide();
}

function showuserinfo(user){
    if(user!= 'undefined'){
        var str = user+'��ӭ��ʹ�ò��������!&nbsp;[<a href="zixuan.php">��ѡ��ϵͳ</a>]&nbsp; [<a href="../xg/ddx.html">DDXѡ��ϵͳ</a>] &nbsp;[<a href="../xg/xuangu.html">DDX�ۺ�ѡ��</a>]&nbsp; [<a href="../xg/tongji.html">DDXͳ��ϵͳ</a>]&nbsp; [<a href="../xg/chaoying.html">��Ӯ�ֲ�ѡ��</a>]&nbsp; [<a href="../xg/jiben.html">������ѡ��</a>]&nbsp; [<a href="ths/ddexuangu.html">ͬ��˳DDEѡ��</a>] [<a href="ths/ccxuangu.html">��Ӯѡ��ϵͳ</a>]&nbsp; [<a href="logout.php">�˳�</a>]';
        $('#logininfo').html(str);
    }
}

function showmustlogin(){
    alert('���¼ʹ�ã�лл��');
}
