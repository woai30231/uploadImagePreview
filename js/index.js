function PreviewImage(){
	this.init.apply(this,arguments);
};
PreviewImage.prototype = {
	init:function(id){
		var _that = this;
		this.wrap = (typeof id === "string")?document.getElementById(id):id;
		this.img = this.wrap.getElementsByTagName("img")[0];
		this.inputBtn = this.wrap.getElementsByTagName("input")[0];
		this.inputBtnChange();
	},
	inputBtnChange:function(){
		var _that = this;
		this.inputBtn.onchange = function(){
			if(_that.inputBtn.files && _that.inputBtn.files[0]){
				_that.img.src = window.URL.createObjectURL(_that.inputBtn.files[0]);
				_that.img.style.width = "100%";
				_that.img.style.height = "100%";
			}else{
				_that.inputBtn.select();
	 			var imgSrc = document.selection.createRange().text;
	 			var localImagId = _that.wrap;
	 			try{
					localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
					localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
				}
				catch(e){
					alert("您上传的图片格式不正确，请重新选择!");
					return false;
				};
				_that.wrap.style.display = 'none';
				document.selection.empty();
			};
		};
	}
};
window.onload = function(){
	var sxPreviewImage = new PreviewImage("imgPreviewWrap");
};
