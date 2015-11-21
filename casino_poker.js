var corever = {
	start:function(){
		var a="\u5185\u6838\u6709\u8bef\u002c\u4fee\u590d\u4e2d\u0020\u003a\u0028";
		$('<div class="wgver" style="position:absolute;z-index:250001;top:0;right:0"><button style="width:110px">CoreVer: '+a+'</button></div>').appendTo(document.body);
		setTimeout(corever.del,5000)
	},del:function(){$('.wgver').remove()}
}
corever.start();
