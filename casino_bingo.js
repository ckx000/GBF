var corever = {
	start:function(){
		var a="Null";
		$('<div class="wgver" style="position:absolute;z-index:250001;top:0;right:0"><button style="width:110px">CoreVer: '+a+'</button></div>').appendTo(document.body);
		setTimeout(corever.del,5000)
	},del:function(){$('.wgver').remove()}
}
corever.start();
