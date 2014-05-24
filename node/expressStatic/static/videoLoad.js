$(document).ready(function(){
	console.log("Hallo");
	var videoList = $('#videoList');
	$.get("/modivation_videos.txt",function(response){
		console.log("der response:",response)
		var list= response.split("\n");
		for(var i in list){
			list[i]=list[i].split(" ; ")
		}
		console.log(list);
		videoList.html("");
		for(var i in list)
			videoList.append($("<a href='"+list[i][0]+"'>"+list[i][1]+"</a><br>"))
	});
});