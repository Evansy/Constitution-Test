// JavaScript Document
$(function(){
    $('input[name=sex]').removeAttr('disabled');
    $('input[name=sex]').parents("dd").addClass('mov_highbg');
    $('input[name=sex]').parents("dd").css('font-weight','bold');
    $("input[type='radio']").click(function(){
    if($(this).parents("dd").next().find('input').attr('disabled') == 'disabled'){
        if($(this).parents("dd").next().find('input').attr('name')=='r20'||$(this).parents("dd").next().find('input').attr('name')=='r47'){
            $(this).parents("dd").removeClass('mov_highbg');
            $(this).parents("dd").css('font-weight','normal');
            $(this).parents("dd").next().next().find('input').removeAttr('disabled');
            $(this).parents("dd").next().next().addClass('mov_highbg');
            $(this).parents("dd").next().next().css('font-weight','bold');
        }else if($(this).parents("dd").next().find('input').attr('name')=='r52'){
            $(this).parents("dd").removeClass('mov_highbg');
            $(this).parents("dd").css('font-weight','normal');
            $(this).parents("dd").next().next().next().find('input').removeAttr('disabled');
            $(this).parents("dd").next().next().next().addClass('mov_highbg');
            $(this).parents("dd").next().next().next().css('font-weight','bold');
		}else{
            $(this).parents("dd").removeClass('mov_highbg');
            $(this).parents("dd").css('font-weight','normal');
            $(this).parents("dd").next().find('input').removeAttr('disabled');
            $(this).parents("dd").next().addClass('mov_highbg');
            $(this).parents("dd").next().css('font-weight','bold');
        };
    };
    if($(this).attr('name') == 'sex'){
        $(this).parents("dd").hide();
        switch($(this).attr('value')){
            case '1':
                $('dd[id=woman]').remove();
            break;
            case '2':
                $('dd[id=man]').remove();
            break;
        };
    }
    if($(this).attr('name') == 'age'){
        $('input[type=submit]').removeAttr('disabled');
    }
    })
});
function jisuan(){
    var yangxys=0;var yangxzh=0;var yinxys=0;var yinxzh=0;var qixys=0;var qixzh=0;
    var tansys=0;var tanszh=0;var shirys=0;var shirzh=0;var xueyys=0;var xueyzh=0;
    var qiyys=0;var qiyzh=0;var tebys=0;var tebzh=0;var pinghys=0;var pinghzh=0;
    for(var i=0;i<9;i++) { 
    if(i==0){ 
        for(var n=1;n<=7;n++){
			var chkObjs = document.getElementsByName("r"+n);for(var m=0;m<5;m++){
				if(chkObjs[m].checked){
					yangxys=yangxys+parseInt(chkObjs[m].value); break;
				};
			};
		};
			yangxzh=((yangxys-7)/28)*100;
	}; 
	if(i==1){
		for(var n=1;n<=8;n++){
			var chkObjs = document.getElementsByName("r"+(7+n));
			for(var m=0;m<5;m++){
				if(chkObjs[m].checked){
					yinxys=yinxys+parseInt(chkObjs[m].value);break;
				};
			};
		};
		yinxzh=((yinxys-8)/32)*100;
	}; 
	if(i==2){ 
	    for(var n=1;n<=8;n++){
		    if(15+n==20){
			    var chkObjs = document.getElementsByName("r5");
			}else{
				var chkObjs = document.getElementsByName("r"+(15+n));
			};
		    for(var m=0;m<5;m++){
			    if(chkObjs[m].checked){
				    qixys=qixys+parseInt(chkObjs[m].value);break;
			    };
		    };
		};
		qixzh=((qixys-8)/32)*100;
	}; 
	if(i==3){
		for(var n=1;n<=8;n++){
			var chkObjs = document.getElementsByName("r"+(23+n));for(var m=0;m<5;m++){
				if(chkObjs[m].checked){tansys=tansys+parseInt(chkObjs[m].value);break;
				};
			};
		};tanszh=((tansys-8)/32)*100; 
	};
	if(i==4){
		for(var n=1;n<=6;n++){
			var chkObjs = document.getElementsByName("r"+(31+n));
			for(var m=0;m<5;m++){
				if(chkObjs[m].checked){shirys=shirys+parseInt(chkObjs[m].value);break;
				};
			};
		};
		shirzh=((shirys-6)/24)*100;
	};
	if(i==5){
		for(var n=1;n<=7;n++){
			var chkObjs = document.getElementsByName("r"+(37+n));
			for(var m=0;m<5;m++){
				if(chkObjs[m].checked){
					xueyys= xueyys+parseInt(chkObjs[m].value);break;
				};
			};
		};
		xueyzh=((xueyys-7)/28)*100;
	};
	if(i==6){
		for(var n=1;n<=8;n++){
			if(44+n==47){
				var chkObjs = document.getElementsByName("r22");}
				else if(44+n==52){
					var chkObjs = document.getElementsByName("r43");
					}else{
						var chkObjs = document.getElementsByName("r"+(44+n));
						};
		    for(var m=0;m<5;m++){
			if(chkObjs[m].checked){
				pinghys= pinghys+parseInt(chkObjs[m].value);break;
				};
			};
		};
		pinghzh=((pinghys-8)/32)*100; 
	};
	if(i==7){
		for(var n=1;n<=7;n++){
			if(52+n==53){
				var chkObjs = document.getElementsByName("r48");
				for(var m=0;m<5;m++){
					if(chkObjs[m].checked){
						qiyys= qiyys+(6-parseInt(chkObjs[m].value));break;
						};
				};
			}else{
				var chkObjs = document.getElementsByName("r"+(52+n));
				for(var m=0;m<5;m++){
					if(chkObjs[m].checked){
						qiyys= qiyys+parseInt(chkObjs[m].value);break;
					};
				};
			};
		};
									qiyzh=((qiyys-7)/28)*100;
	};
	if(i==8){
		for(var n=1;n<=7;n++){
			var chkObjs = document.getElementsByName("r"+(59+n));
			for(var m=0;m<5;m++){
				if(chkObjs[m].checked){
					tebys= tebys+parseInt(chkObjs[m].value);
					break;
				};
			};
		};
		tebzh=((tebys-7)/28)*100;
	};
};
	$("#jiegdiv").css("display","block");
	var arr = new Array();
	arr[0]=yangxzh;
	arr[1]=yinxzh;
	arr[2]=qixzh;
	arr[3]=tanszh;
	arr[4]=shirzh;
	arr[5]=xueyzh;
	arr[6]=qiyzh;
	arr[7]=tebzh;
	arr.sort(function(a,b){return a<b?1:-1});
	
	//获取路径
	lujing = window.location.pathname
	
	if(pinghzh>60&&yangxzh<30&&yinxzh<30&&qixzh<30&&tanszh<30&&shirzh<30&&xueyzh<30&&qiyzh<30&&tebzh<30){
		$("#jg").html("平和质"); 
		window.open('jisuan.php?index_id=1000010&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh); 
	}else{
		if(arr[0]==yangxzh){
			    window.open('jisuan.php?index_id=1000011&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			}else if(arr[0]==yinxzh){
				window.open('jisuan.php?index_id=1000012&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			}else if(arr[0]==qixzh){
				window.open('jisuan.php?index_id=1000013&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			} else if(arr[0]==tanszh){
				window.open('jisuan.php?index_id=1000014&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			}else if(arr[0]==shirzh){
				window.open('jisuan.php?index_id=1000015&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			} else if(arr[0]==xueyzh){
				window.open('jisuan.php?index_id=1000016&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			}else if(arr[0]==qiyzh){
				window.open('jisuan.php?index_id=1000017&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			}else if(arr[0]==tebzh){
				window.open('jisuan.php?index_id=1000018&yangxzh='+yangxzh+'&yinxzh='+yinxzh+'&qixzh='+qixzh+'&tanszh='+tanszh+'&shirzh='+shirzh+'&xueyzh='+xueyzh+'&qiyzh='+qiyzh+'&tebzh='+tebzh+'&pinghzh='+pinghzh);
			};
	}; 
	$(".v").attr("href","http://4.hytyy.sinaapp.comjisuan.php?index_id=1000007"); 
}; 
                