function GetXMLHttp(){
    var xmlhttp=false;
    try{
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch (e){
        try{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(E){
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
       xmlhttp = new XMLHttpRequest();
    }
    
    return xmlhttp;
}
function Do(v){ 
	var xmlhttp = GetXMLHttp(),SiteUrl=null,url="",linfo;
	if(v==0){
		      url="../chklogin.php";
		     SiteUrl="t=0&user="+$("user").value+"&password="+$("password").value+"&d="+$("timeout").value;
			 linfo=$("logininfo").innerHTML;
			 $("logininfo").innerHTML="���������½��Ϣ�����Ժ󡣡���";
	}else if(v==1){
		     url="../chklogin.php";SiteUrl="t=1";
			 linfo=$("logininfo").innerHTML;
			 $("logininfo").innerHTML="���������½��Ϣ�����Ժ󡣡���";
	}else if(v==2){
		if(arguments.length==1){
		     var e = document.getElementsByName("selectzx"),listid="",t2=document.getElementsByName("zxtype");
		     for (var i = 0; i < e.length; i++) {
		          if (e[i].checked ==true){
			               listid+=","+e[i].value;
		          }
	         }
			 
			 for (var ii=0; ii<t2.length;ii++) {
			 	if (t2[ii].checked == true)
				t1 = t2[ii].value;
			 }
			 
		     if(listid==""){alert("����ûѡ��Ҫɾ������ѡ�ɣ�");return false;}
		     else{listid=listid.substr(1);
			 }
			 SiteUrl="t=0&code="+listid+"&t1="+t1;
			 var doArguments = true;
		}else if(arguments.length==3)
		{
			SiteUrl="t=0&code="+arguments[2]+"&t1="+arguments[1];
			if(!confirm("ȷ��Ҫɾ����ѡ�Ĺ�Ʊ��")){return;}
			var doArguments = false;
		}
		url="../del.php";
	}else if(v==3){
		var t1,t2 = document.getElementsByName("zxtype");
		for (var i=0;i<t2.length;i++)
		{
			if (t2[i].checked)
				t1 = t2[i].value;
		}
		var doArguments = true;
		url="../del.php";SiteUrl="t=1&t1="+t1;
		if(!confirm("ȷ��Ҫɾ������ѡ���е����й�Ʊ?")){return;}
	}else if(v==4){
		
		url="../import.php";
		if(arguments.length==1)
		{
			var boxArray = document.getElementsByName('zxtype');
			var tv;
			for (var i=0; i<boxArray.length;i++)
			{
				if (boxArray[i].checked)
				{
					tv = boxArray[i].value;
				}
			}
			tv = Number(tv)+1;
			if (!tv){alert('��ѡ����ѡ�ɣ�');return false;}
			SiteUrl="t="+tv+"&code="+$("stockcode").value;
			var doArguments = true;
		}
		if(arguments.length==3){SiteUrl="t="+arguments[1]+"&code="+arguments[2]; var doArguments = false;}
	}else if(v==5){
		url="../chkuser.php";SiteUrl="t=0&user="+document.getElementById("username").value;
	}else if(v==6){
		url="../chkuser.php";SiteUrl="t=1&user="+document.getElementById("username").value+"&password="+document.getElementById("pwd").value;
	}
	xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(SiteUrl);
	xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4){
		  //$("key").alt=xmlhttp.responseText;
		     if(v==1){
				   eval("var uinfo="+xmlhttp.responseText+";");
				   if(uinfo.status==1){
					        $("logininfo").innerHTML=uinfo.user+",��ӭ��ʹ�ò��������: [<a href='../zixuan.php'>��ѡ��ϵͳ</a>] [<a href='../xg/ddx.html'>DDXѡ��ϵͳ</a>] [<a href='../xg/xuangu.html'>DDX�ۺ�ѡ��</a>] [<a href='../xg/tongji.html'>DDXͳ��ϵͳ</a>] [<a href='../xg/chaoying.html'>��Ӯ�ֲ�ѡ��</a>] [<a href='../xg/jiben.html'>������ѡ��</a>] [<a href='../ths/ddexuangu.html'>ͬ��˳DDEѡ��</a>] [<a href='../ths/ccxuangu.html'>��Ӯѡ��ϵͳ</a>] [<a href='../logout.php'>�˳�</a>]";
				   }else{
					        $("logininfo").innerHTML=linfo;
				   }
			 }else if(v==0){
				   eval("var uinfo="+xmlhttp.responseText+";");
				   if(uinfo.status!=1){
					        if(uinfo.err==0)alert("��������û�����������������������");
							else if(uinfo.err==2)alert("���������֤����������������");
							$("logininfo").innerHTML=linfo;
				   }else{		        
					        $("logininfo").innerHTML=uinfo.user+",��ӭ��ʹ�ò��������: [<a href='../zixuan.php'>��ѡ��ϵͳ</a>] [<a href='../xg/ddx.html'>DDXѡ��ϵͳ</a>] [<a href='../xg/xuangu.html'>DDX�ۺ�ѡ��</a>] [<a href='../xg/tongji.html'>DDXͳ��ϵͳ</a>] [<a href='../xg/chaoying.html'>��Ӯ�ֲ�ѡ��</a>] [<a href='../xg/jiben.html'>������ѡ��</a>] [<a href='../ths/ddexuangu.html'>ͬ��˳DDEѡ��</a>] [<a href='../ths/ccxuangu.html'>��Ӯѡ��ϵͳ</a>] [<a href='../logout.php'>�˳�</a>]";
							location.reload();
				   }
			 }else if(v==2 || v==3){
				 eval("var uinfo="+xmlhttp.responseText+";");
				 //alert('../getzxdata.php?t='+t1+'&page=1&m=0&n=-1&order=-1');
				 //alert(uinfo.status);
				   
				   var tbox=0,arrbox = document.getElementsByName("zxtype");
	for (var i =0; i<arrbox.length;i++ )
	{
		if (arrbox[i].checked)
		tbox=Number(arrbox[i].value)+1;
	}
				   
				   if(uinfo.status==1){
					   		if(doArguments)
							include_js('../getzxdata.php?t='+tbox+'&page=1&m=0&n=-1&order=-1');
				   }else{
					   		//alert(xmlhttp.responseText);
					        if(uinfo.err==0){
								alert("�޷�ɾ��������û��½��");
							}else if(uinfo.err==1){
								alert("�޷�ɾ������鿴������ã�");
							}
				   }
			 }else if(v==4){
				   eval("var uinfo="+xmlhttp.responseText+";");
				   if(uinfo.status==1){
					   if(doArguments)
					   include_js('../getzxdata.php?t='+tv+'&page=1&m=0&n=-1&order=-1');
				   }else{
					        if(uinfo.err==0){
								alert("����û��½���½�Ѿ����ڣ������µ�½��");
							}else if(uinfo.err==1){
								alert("����Ĺ�Ʊ��ʽ������Ʊ��������");
							}else if(uinfo.err==2){
								alert("����Ĺ�Ʊ�Ѿ����ڣ�");
							}else if(uinfo.err==3){
								alert("��ܰ��ʾ:������ѡ���Ѿ��ﵽ300��!��ɾ��������ѡ�ɲ����µ���!");
							}
				   }
			 }else if(v==5){
				   eval("var uinfo="+xmlhttp.responseText+";");
				   if(uinfo.status==1){
					        document.getElementById("check1").innerHTML="<font color='green'>���û�������ʹ��</font>";
				   }else{
					        document.getElementById("check1").innerHTML="<font color='red'>���û����Ѿ�����</font>";
				   }
			 }else if(v==6){
				   eval("var uinfo="+xmlhttp.responseText+";");
				   if(uinfo.status==1){
					     document.getElementById("showlogin").style.display="block";
						 document.getElementById("reginfo").style.display="none";
						 document.getElementById("uname").innerHTML=uinfo.user;
			       }else{
					     if(uinfo.err==0){
							 alert("�û��������ϣ���");
						 }else if(uinfo.err==1){
							 alert("��֤����󣡣�");
						 }else if(uinfo.err==2){
							 alert("���볤�Ȳ����ϣ���");
						 }else if(uinfo.err==3){
							 alert("���û����Ѿ����ڣ��뻻���û�������");
						 }
				   }
			 }
        }
    }
}
String.prototype.trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
function Login(){
	if($("user").value.trim()==""){alert("��������û���Ϊ�գ�����������");return;}
	else if($("password").value.trim()==""){alert("�����������Ϊ�գ�����������");return;}
	Do(0);
}
function Chklogin(){Do(1);}
function Chkimg(){
	var img="../img.php?"+Math.random();
	$("chkimg").width=60;
	$("chkimg").height=16;
	$("chkimg").src=img;
}
function select_all(t) {
	var e = document.getElementsByName("selectzx");
	for (var i = 0; i < e.length; i++) {
		if (t==0){
			e[i].checked =true;
		}else if(t==1){
		    e[i].checked =false;
		}
	}
}
function export1(_this){
	if(_this.value=="������ѡ��1"){
        window.open("../export.php?t=1","_blank");
	}else if(_this.value=="������ѡ��2"){
        window.open("../export.php?t=2","_blank");
	}else if(_this.value=="������ѡ��3"){
        window.open("../export.php?t=3","_blank");
	}else if(_this.value=="������ѡ��4") {
        window.open("../export.php?t=4","_blank");
    }else if(_this.value.indexOf('��')>1){

        if (_this.value.indexOf('��')>1)
        {
            zxjbac = 'j';
        }
        if (_this.value.indexOf('��')>1)
        {
            zxjbac = 'b';
        }
        if (zxjbac == 'j' || zxjbac == 'b')
        {
            var zxjbtype = getzxjbtype();
            zxjbtype = zxjbtype.join("-");
            window.open("../exportjb.php?zxjbtype="+zxjbtype+'&ac='+zxjbac,"_blank");
        }
    }
}

function export2(){
	var e = document.getElementsByName("selectzx"),listid="";
		     for (var i = 0; i < e.length; i++) {
		          if (e[i].checked ==true){
			               listid+=","+e[i].value;
		          }
	         }
			 
		     if(listid==""){alert("����ûѡ��Ҫ��������ѡ�ɣ�");return false;}
		     else{listid=listid.substr(1);
			 document.getElementById("listid").value=listid;
			 document.forms.exportList.submit();
			 }
			 return true;
			 
}


function Addzx(_this,t,code){
	if(_this.checked==true){Do(4,t+1,code);}
	else{Do(2,t,code);}
}
function Cstype1(obj){
	
	obj.checked = true;
	var t,v;
	var boxArray = document.getElementsByName('zxtype');
	for (var i=0; i<boxArray.length;i++)
	{
		if 	(boxArray[i]==obj && boxArray[i].checked)
		{
			v = boxArray[i].value;
		}else
		   boxArray[i].checked = false;
	}
	
	
	if(v==0){
		 $("export").value="������ѡ��1";
		 $("zxname").innerHTML="�ҵ���ѡ��1";
         t=1;
	}else if(v==1){
		 $("export").value="������ѡ��2";
		 $("zxname").innerHTML="�ҵ���ѡ��2";
		 t=2;
	}else if(v==2){
		 $("export").value="������ѡ��3";
		 $("zxname").innerHTML="�ҵ���ѡ��3";
		 t=3;		 
	}else if(v==3){
		 $("export").value="������ѡ��4";
		 $("zxname").innerHTML="�ҵ���ѡ��4";
		 t=4;
	}
	$("gotoPageList").innerHTML = "";
	include_js('../getzxdata.php?t='+t+'&page=1&m=0&n=-1&order=-1');
}
function CheckUserName(_this){
	var errmsg="";
	if(_this.value==""){
		errmsg="�û�������Ϊ��";
	}else{
			 if(_this.value.length<6 || _this.value.length>20){
				   errmsg="�û���������6~20���ַ�֮��";
			 }else{
				   if(_this.value.match(/^([a-z0-9\_]{1,})$/i)){
					      Do(5);
				   }else{
					      errmsg="�û�����������ĸ�����ֺ��»�����ɡ�";
				   }
			 }
	}
	if(errmsg!=""){
		     document.getElementById("check1").innerHTML="<font color='red'>"+errmsg+"</font>";
			 return false;
	}
	return true;
}
function CheckPassWord(_this,t){
	var errmsg="";
	if(t==1){
		if(_this.value==""){
			  errmsg="�����Ϊ��";
		}else{
			 if(_this.value.length<6 || _this.value.length>32){
			       errmsg="���������6~32���ַ�֮��";
			 }else{
				   var psd=document.getElementById("pwd").value;
				   if(psd!=_this.value || psd.length!=_this.value.length)errmsg="�������벻һ����"; 
			 }
		}
		if(errmsg!=""){
			 document.getElementById("password3").innerHTML="<font color='red'>"+errmsg+"</font>";
			 return false;
		}else{
			 document.getElementById("password3").innerHTML="<font color='green'>������ȷ</font>";
			 return true;
		}
	}else{
		if(_this.value==""){
			       errmsg="�����Ϊ��";
		}else if(_this.value.length<6 || _this.value.length>32){
			       errmsg="���������6~20���ַ�֮��";
		}
		if(errmsg!=""){
			 document.getElementById("password2").innerHTML="<font color='red'>"+errmsg+"</font>";
			 return false;
		}else{
			 document.getElementById("password2").innerHTML="<font color='green'>������ȷ</font>";
			 return true;
		}
	}
}
function Reg(){
	var user,password,password1,img;
	     user=CheckUserName(document.getElementById("username"));
	     password=CheckPassWord(document.getElementById("pwd"),0);
	     password1=CheckPassWord(document.getElementById("pwd1"),1);
	     if(user && password && password1)Do(6);
	     else{alert("�ʺŻ����벻��ȷ��");}
}