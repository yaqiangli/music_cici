
$().ready(function(){
	newSongInit();
});

function newSongInit(){
	$.ajax({
		  url:'aaa',
		    type:'POST', //GET
		    async:true,    //��false,�Ƿ��첽
		    data:{
		       
		    },
		    timeout:5000,    //��ʱʱ��
		    dataType:'json',    //���ص����ݸ�ʽ��json/xml/html/script/jsonp/text
		   
		    success:function(data,textStatus,jqXHR){
		        console.log(data);
		        console.log(textStatus);
		        console.log(jqXHR);
		        /**
		         * <li>
                <dl class="singer">
                	<a href="/mlist/951.shtml" title="Ѧ֮ǫ����" target="_blank">Ѧ֮ǫ</a></dl>
                	<span>1</span>
                	<dl  class="songname">
                	<a  target="m" href="/play/951/396179.shtml" rel="2006_951/77523/1.mp3|����|Ѧ֮ǫ|396179|951|77523|����">����</a>
                </dl>
               </li>
		         */
		        debugger;
		        $(".newsong").html("");
		        data=JSON.parse(data);
		        var song =data.ccc_c;
		        song=song[0];
		        for(var i=0;i<song.length;i++){
		        	$(".newsong").append("<li> <dl class='singer'> <a href='' title="+song[i].singername+"target='_blank'>"+song[i].singername+"</a></dl>"
		        			+"<span>"+(i+1)+"</span>"+"<dl class='songname'> <a target='m' href='"+song[i].url+"' >"+song[i].name+"</a>   </dl> </li>");
		        }
		       },
		    error:function(xhr,textStatus){
		        console.log('����')
		        console.log(xhr)
		        console.log(textStatus)
		    },
		   
	});
}