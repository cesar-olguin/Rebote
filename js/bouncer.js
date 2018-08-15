var MoX=5, MoY=5, sp=0.0;
$(document).ready(function(){
	$("#idTam").on("input",function(){
		$("#idBall").outerWidth($(this).val()).outerHeight($(this).val());
		$("#idBall").css("border-radius",$(this).val()/2+"px");
		if(pxToInt($("#idBall").css("left"))+$("#idBall").outerWidth()>$("#idCont").width())
			$("#idBall").css("left",$("#idCont").width()-$("#idBall").outerWidth());
		if(pxToInt($("#idBall").css("top"))+pxToInt($("#idBall").css("height"))>pxToInt($("#idCont").width()))
			$("#idBall").css("top",$("#idCont").height()-$("#idBall").outerHeight());
	});

	$("#idVel").on("input",function(){
		sp=(1/$("#idVel").val())*100;
	});

	$("#idStart").click(function(){
		$("#idPB").attr("max",parseInt($("#idRebotes").val()));
		$("#idPB").val("0");
		sp=(1/$("#idVel").val())*100;
		move();
	});


	function move()
	{
		var l=0, t=0;
		l=pxToInt($("#idBall").css("left"));
		t=pxToInt($("#idBall").css("top"));
		$("#idBall").animate({"left":parseInt(l+MoX)+"px","top":parseInt(t+MoY)+"px"},{"duration":sp,"done":function(){
			check();
		}});
	}

function check()
{
	if(pxToInt($("#idBall").css("left"))+$("#idBall").outerWidth()>=$("#idCont").width() || pxToInt($("#idBall").css("left"))<=0)
		{
			MoX*=-1;
			$("#idPB").val($("#idPB").val()+1);
		}
	if(pxToInt($("#idBall").css("top"))+$("#idBall").outerHeight()>=$("#idCont").height() || pxToInt($("#idBall").css("top"))<=0)
		{
			MoY*=-1;
			$("#idPB").val($("#idPB").val()+1);
		}
	if(parseInt($("#idPB").val())<parseInt($("#idPB").attr("max")))
		move();
}

function pxToInt(px)
{
	return parseInt(px.substr(0,px.indexOf("p")));
}
});