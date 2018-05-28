//header
changestyle();
slider();
tabPackage();

//跑车
var oCountdownad_bg = document.getElementById('countdownad_bg');
var oRoadster = document.getElementById('roadster');
var timer = null;
var timer2 = null;
clearInterval(timer);
clearTimeout(timer2);
function show(){
	oRoadster.style.display = 'block';
	oCountdownad_bg.style.display = 'block';
}
function hide(){
	oRoadster.style.display = 'none';
	oCountdownad_bg.style.display = 'none';
}
timer = setInterval(show,500);
timer2 = setTimeout(function(){
	clearInterval(timer);
	hide();
},3000);

//显示隐藏
function closeAd(oEve,oAd){
	oEve.onclick = function(){
		oAd.style.display = 'none';
	};
}
var oCloseit1 = document.getElementById('closeit1');
var oCloseit2 = document.getElementById('closeit2');
var oReturntop = document.getElementById('returntop');
var oFixedad = document.getElementById('fixedad');
closeAd(oCloseit2,oReturntop);
closeAd(oCloseit1,oFixedad);

//移入移出封装的函数
function overout(oBtn,oHov){
	oBtn.onmouseover = function(){
		oHov.style.display = 'block';
	};
	oBtn.onmouseout= function(){
		oHov.style.display = 'none';
	};
}

//有长度的轮播图封装的函数
function prevnext1(oSlider,oPrev,oNext,aBtn,aLi){
	var iNow = 0;
	var timer = null;
	function getStyle(iNow){
		for (var i=0; i<aLi.length; i++) {
			aLi[i].className = '';
			aBtn[i].className = '';
		}
		aBtn[iNow].className = 'active';
		aLi[iNow].className = 'active';
	}
	function fnnext(){
		iNow++;
		if (iNow == aBtn.length) {
			iNow = 0;
		} 
		getStyle(iNow);
	}
	oPrev.onclick = function(){
		iNow--;
		if (iNow < 0) {
			iNow = aBtn.length - 1;
		}
		getStyle(iNow);
	};
	oNext.onclick = fnnext;
	timer = setInterval(fnnext,3000);
	oSlider.onmouseover = function(){
		clearInterval(timer);
	};
	oSlider.onmouseout = function(){
		timer = setInterval(fnnext,3000);
	};
}
//没有长度的轮播图封装的函数
function prevnext2(oSlider,oPrev,oNext,aLi){
	var iNow = 0;
	var timer = null;
	function getStyle(iNow){
		for (var i=0; i<aLi.length; i++) {
			aLi[i].className = '';
		}
		aLi[iNow].className = 'active';
	}
	function fnnext(){
		iNow++;
		if (iNow == aLi.length) {
			iNow = 0;
		} 
		getStyle(iNow);
	}
	oPrev.onclick = function(){
		iNow--;
		if (iNow < 0) {
			iNow = aLi.length - 1;
		}
		getStyle(iNow);
	};
	oNext.onclick = fnnext;
	timer = setInterval(fnnext,3000);
	oSlider.onmouseover = function(){
		clearInterval(timer);
	};
	oSlider.onmouseout = function(){
		timer = setInterval(fnnext,3000);
	};
}
//选项卡封装的函数
function tab(oBtn,oDiv){
	for (var i=0; i<oBtn.length; i++) {
		oBtn[i].index = i;
		oBtn[i].onmouseover = function(){
			for (var i=0; i<oBtn.length; i++) {
				oBtn[i].className = '';
				oDiv[i].className = 'options-hov';
			}
			oBtn[this.index].className = 'active';
			oDiv[this.index].className = 'options-hov visited';
		};
	}
}
//封装的购物广告带有页数的函数
function countpoint(oSlider,oPrev,oNext,oCurrent,aLi){
	var iNow = 0;
	var timer = null;
	function getStyle(iNow){
		for (var i=0; i<aLi.length; i++) {
			aLi[i].className = '';
		}
		aLi[iNow].className = 'active';
	}
	function current(){
		oCurrent.innerHTML = iNow+1+'/'+aLi.length;
	}
	function fnnext(){
		iNow++;
		if (iNow == aLi.length) {
			iNow = 0;
		} 
		getStyle(iNow);
		current();
	}
	oPrev.onclick = function(){
		iNow--;
		if (iNow < 0) {
			iNow = aLi.length - 1;
		}
		getStyle(iNow);
		current();
	};
	oNext.onclick = fnnext;
	current();
	timer = setInterval(fnnext,3000);
	oSlider.onmouseover = function(){
		clearInterval(timer);
	};
	oSlider.onmouseout = function(){
		timer = setInterval(fnnext,3000);
	};
}
//封装的淘宝轮播图的函数
function picslider(oSlider,aBtn,aLi){
	var iNow = 0;
	var timer = null;
	function getStyle(iNow){
		for (var i=0; i<aLi.length; i++) {
			aLi[i].className = '';
			aBtn[i].className = '';
		}
		aBtn[iNow].className = 'active';
		aLi[iNow].className = 'active';
	}
	for (var i=0; i<aBtn.length; i++) {
		aBtn[i].index = i;
		aBtn[i].onmouseover = function(){
			iNow = this.index;
			getStyle(iNow);
		};
	}
	function fnnext(){
		iNow++;
		if (iNow == aBtn.length) {
			iNow = 0;
		} 
		getStyle(iNow);
	}
	timer = setInterval(fnnext,2000);
	oSlider.onmouseover = function(){
		clearInterval(timer);
	};
	oSlider.onmouseout = function(){
		timer = setInterval(fnnext,2000);
	};
}


function tabPackage(){
	//选项卡
	var oTabs1 = document.getElementById('tabs1');
	var oOptions1 = document.getElementById('options1');
	var aOptionshov = oTabs1.getElementsByClassName('options-hov');
	var aSpan = oOptions1.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	
	var oTabs2 = document.getElementById('tabs2');
	var oOptions2 = document.getElementById('options2');
	var aOptionshov = oTabs2.getElementsByClassName('options-hov');
	var aSpan = oOptions2.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	var oTabs5 = document.getElementById('tabs5');
	var oOptions5 = document.getElementById('options5');
	var aOptionshov = oTabs5.getElementsByClassName('options-hov');
	var aSpan = oOptions5.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	//热点
	var oExplorepic_slider = document.getElementById('explorepic_slider2');
	var oUl = oExplorepic_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oOl = oExplorepic_slider.getElementsByTagName('ol')[0];
	var aBtn = oOl.getElementsByTagName('li');
	picslider(oExplorepic_slider,aBtn,aLi);
	
	var oExplorepic_slider = document.getElementById('explorepic_slider3');
	var oUl = oExplorepic_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oOl = oExplorepic_slider.getElementsByTagName('ol')[0];
	var aBtn = oOl.getElementsByTagName('li');
	picslider(oExplorepic_slider,aBtn,aLi);
	
	var oExplorepic_slider = document.getElementById('explorepic_slider4');
	var oUl = oExplorepic_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oOl = oExplorepic_slider.getElementsByTagName('ol')[0];
	var aBtn = oOl.getElementsByTagName('li');
	picslider(oExplorepic_slider,aBtn,aLi);
	
	var oExplorepic_slider = document.getElementById('explorepic_slider5');
	var oUl = oExplorepic_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oOl = oExplorepic_slider.getElementsByTagName('ol')[0];
	var aBtn = oOl.getElementsByTagName('li');
	picslider(oExplorepic_slider,aBtn,aLi);
	
	//体育
	var oSports_tabs1 = document.getElementById('sports_tabs1');
	var oSports_options1 = document.getElementById('sports_options1');
	var aOptionshov = oSports_tabs1.getElementsByClassName('options-hov');
	var aSpan = oSports_options1.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	var oSports_tabs2 = document.getElementById('sports_tabs2');
	var oSports_options2 = document.getElementById('sports_options2');
	var aOptionshov = oSports_tabs2.getElementsByClassName('options-hov');
	var aSpan = oSports_options2.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	//听歌音乐
	var oMusic_tabs1 = document.getElementById('music_tabs1');
	var oMusic_options1 = document.getElementById('music_options1');
	var aOptionshov = oMusic_tabs1.getElementsByClassName('options-hov');
	var aSpan = oMusic_options1.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	var oMusic_tabs2 = document.getElementById('music_tabs2');
	var oMusic_options2 = document.getElementById('music_options2');
	var aOptionshov = oMusic_tabs2.getElementsByClassName('options-hov');
	var aSpan = oMusic_options2.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	var oMusic_tab = document.getElementById('music_tab');
	var oUl = oMusic_tab.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup = document.getElementById('pgup');
	var oPgon = document.getElementById('pgon');
	prevnext2(oUl,oPgup,oPgon,aLi);
	
	var oMusic_slider = document.getElementById('music_slider');
	var oUl = oMusic_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup2 = document.getElementById('pgup2');
	var oPgon2 = document.getElementById('pgon2');
	var oCount = document.getElementById('count');
	var oSpan = oCount.getElementsByTagName('span')[0];
	countpoint(oMusic_slider,oPgup2,oPgon2,oSpan,aLi);
	
	//我爱看图
	var oCarousel_tab = document.getElementById('carousel_tab');
	var oCarousel_options1 = document.getElementById('carousel_options1');
	var aOptionshov = oCarousel_tab.getElementsByClassName('options-hov');
	var aSpan = oCarousel_options1.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	function prevnext3(oSlider,oPrev,oNext,aLi,aBtn){
		var iNow = 0;
		var timer = null;
		function getStyle(iNow){
			for (var i=0; i<aLi.length; i++) {
				aLi[i].className = '';
				aBtn[i].className = '';
			}
			aBtn[iNow].className = 'active';
			aLi[iNow].className = 'active';
		}
		for (var i=0; i<aBtn.length; i++) {
			aBtn[i].index = i;
			aBtn[i].onmouseover = function(){
				iNow = this.index;
				getStyle(iNow);
			};
		}
		function fnnext(){
			iNow++;
			if (iNow == aBtn.length) {
				iNow = 0;
			} 
			getStyle(iNow);
		}
		oPrev.onclick = function(){
			iNow--;
			if (iNow < 0) {
				iNow = aBtn.length - 1;
			}
			getStyle(iNow);
		};
		oNext.onclick = fnnext;
		timer = setInterval(fnnext,3000);
		oSlider.onmouseover = function(){
			clearInterval(timer);
		};
		oSlider.onmouseout = function(){
			timer = setInterval(fnnext,3000);
		};
	}
	var oCarouselfigure_slider = document.getElementById('carouselfigure_slider');
	var oCarouselfigure_slider2 = document.getElementById('carouselfigure_slider2');
	var aUl1 = oCarouselfigure_slider.getElementsByTagName('ul');
	var aUl2 = oCarouselfigure_slider2.getElementsByTagName('ul');
	var aOl1 = oCarouselfigure_slider.getElementsByTagName('ol')[0];
	var aOl2 = oCarouselfigure_slider2.getElementsByTagName('ol')[0];
	var aBtn1 = aOl1.getElementsByTagName('li');
	var aBtn2 = aOl2.getElementsByTagName('li');
	var oPrev3 = document.getElementById('prev3');
	var oNext3 = document.getElementById('next3');
	var oPrev4 = document.getElementById('prev4');
	var oNext4 = document.getElementById('next4');
	prevnext3(oCarouselfigure_slider,oPrev3,oNext3,aUl1,aBtn1);
	prevnext3(oCarouselfigure_slider2,oPrev4,oNext4,aUl2,aBtn2);
	
	//社会公益
	var oSociety_tabs1 = document.getElementById('society_tabs1');
	var oSociety_options1 = document.getElementById('society_options1');
	var aOptionshov = oSociety_tabs1.getElementsByClassName('options-hov');
	var aSpan = oSociety_options1.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	var oSociety_tabs2 = document.getElementById('society_tabs2');
	var oSociety_options2 = document.getElementById('society_options2');
	var aOptionshov = oSociety_tabs2.getElementsByClassName('options-hov');
	var aSpan = oSociety_options2.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	//图片博客
	var oPicblog_tab = document.getElementById('picblog_tab');
	var oUl = oPicblog_tab.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup3 = document.getElementById('pgup3');
	var oPgon3 = document.getElementById('pgon3');
	prevnext2(oUl,oPgup3,oPgon3,aLi);
	
	var oPicblog_slider = document.getElementById('picblog_slider');
	var oUl = oPicblog_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup4 = document.getElementById('pgup4');
	var oPgon4 = document.getElementById('pgon4');
	var oCount2 = document.getElementById('count2');
	var oSpan = oCount2.getElementsByTagName('span')[0];
	countpoint(oPicblog_slider,oPgup4,oPgon4,oSpan,aLi);
	
	//探索趣图
	var oExplorepic_tabs1 = document.getElementById('explorepic_tabs1');
	var oExplorepic_options1 = document.getElementById('explorepic_options1');
	var aOptionshov = oExplorepic_tabs1.getElementsByClassName('options-hov');
	var aSpan = oExplorepic_options1.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	var oExplorepic_tabs2 = document.getElementById('explorepic_tabs2');
	var oExplorepic_options2 = document.getElementById('explorepic_options2');
	var aOptionshov = oExplorepic_tabs2.getElementsByClassName('options-hov');
	var aSpan = oExplorepic_options2.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	var oExplorepic_tabs3 = document.getElementById('explorepic_tabs3');
	var oExplorepic_options3 = document.getElementById('explorepic_options3');
	var aOptionshov = oExplorepic_tabs3.getElementsByClassName('options-hov');
	var aSpan = oExplorepic_options3.getElementsByTagName('span');
	tab(aSpan,aOptionshov);
	
	var oExplorepic_slider = document.getElementById('explorepic_slider');
	var oUl = oExplorepic_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oOl = oExplorepic_slider.getElementsByTagName('ol')[0];
	var aBtn = oOl.getElementsByTagName('li');
	picslider(oExplorepic_slider,aBtn,aLi);
	
	//历史图库
	var oHistorygallery_tab = document.getElementById('historygallery_tab');
	var oUl = oHistorygallery_tab.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup5 = document.getElementById('pgup5');
	var oPgon5 = document.getElementById('pgon5');
	prevnext2(oUl,oPgup5,oPgon5,aLi);
	
	var oHistorygallery_slider = document.getElementById('historygallery_slider');
	var oUl = oHistorygallery_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup6 = document.getElementById('pgup6');
	var oPgon6 = document.getElementById('pgon6');
	var oCount3 = document.getElementById('count3');
	var oSpan = oCount3.getElementsByTagName('span')[0];
	countpoint(oHistorygallery_slider,oPgup6,oPgon6,oSpan,aLi);
	
	//社会
	var oSociety_tab = document.getElementById('society_tab');
	var oUl = oSociety_tab.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup7 = document.getElementById('pgup7');
	var oPgon7 = document.getElementById('pgon7');
	prevnext2(oUl,oPgup7,oPgon7,aLi);
	
	var oSociety_slider = document.getElementById('society_slider');
	var oUl = oSociety_slider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPgup8 = document.getElementById('pgup8');
	var oPgon8 = document.getElementById('pgon8');
	var oCount4 = document.getElementById('count4');
	var oSpan = oCount4.getElementsByTagName('span')[0];
	countpoint(oSociety_slider,oPgup8,oPgon8,oSpan,aLi);
	
	
	//内容1的轮播图
	var oTabs4 = document.getElementById('tabs4');
	var oLove_btn = document.getElementById('love_btn');
	var oPrev2 = document.getElementById('prev2');
	var oNext2 = document.getElementById('next2');
	var oOl = oLove_btn.getElementsByTagName('ol')[0];
	var aLi = oOl.getElementsByTagName('li');
	var oOptions4_list = document.getElementById('options4_list');
	var aUl = oOptions4_list.getElementsByTagName('ul');
	var iNow = 0;
	function getStyle(iNow){
		for (var i=0; i<aLi.length; i++) {
			aLi[i].className = '';
			aUl[i].className = '';
		}
		aUl[iNow].className = 'visited';
		aLi[iNow].className = 'active';
	}
	for (var i=0; i<aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			iNow = this.index;
			getStyle(iNow);
		};
	}
	oNext2.onclick = function(){
		iNow++;
		if (iNow == aLi.length) {
			iNow = 0;
		} 
		getStyle(iNow);
	};
	oPrev2.onclick = function(){
		iNow--;
		if (iNow < 0) {
			iNow = aLi.length - 1;
		}
		getStyle(iNow);
	};
}
function changestyle(){
	var oLogo_btn = document.getElementById('logo_btn');
	var oLogo_hov = document.getElementById('logo_hov');
	overout(oLogo_btn,oLogo_hov);
	
	var omicro_blog = document.getElementById('micro_blog');
	var omicro_blog_hov = document.getElementById('micro_blog_hov');
	overout(omicro_blog,omicro_blog_hov);
	
	var oblog = document.getElementById('blog');
	var oblog_hov = document.getElementById('blog_hov');
	overout(oblog,oblog_hov);
	
	var oemail = document.getElementById('email');
	var oemail_hov = document.getElementById('email_hov');
	overout(oemail,oemail_hov);
	
	//content	sort
	var onews_btn = document.getElementById('news_btn');
	var onews_hov = document.getElementById('news_hov');
	var aLi = onews_hov.getElementsByTagName('li');
	onews_btn.onclick = function(){
		if (onews_hov.style.display == 'block') {
			onews_hov.style.display = 'none';
		} else{
			onews_hov.style.display = 'block';
		}
	};
	for (var i=0; i<aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function(){
			switch (this.index){
				case 0:
					onews_btn.innerHTML = '新闻';
					break;
				case 1:
					onews_btn.innerHTML = '微博';
					break;
				case 2:
					onews_btn.innerHTML = '图片';
					break;
				case 3:
					onews_btn.innerHTML = '博客';
					break;
				case 4:
					onews_btn.innerHTML = '视频';
					break;
				default:
					alert('目前没有更多。。。')
					break;
			}
		};
	}
	//内容2 	更多
	var omore = document.getElementById('more');
	var omore_hov = document.getElementById('more_hov');
	overout(omore,omore_hov);
}
function slider(){
	//slider
	var oSlider = document.getElementById('slider');
	var oUl = oSlider.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oOl = oSlider.getElementsByTagName('ol')[0];
	var aBtn = oOl.getElementsByTagName('li');
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	var iNow = 0;
	var timer = null;
	function getStyle(iNow){
		for (var i=0; i<aLi.length; i++) {
			aLi[i].className = '';
			aBtn[i].className = '';
		}
		aBtn[iNow].className = 'active';
		aLi[iNow].className = 'active';
	}
	for (var i=0; i<aBtn.length; i++) {
		aBtn[i].index = i;
		aBtn[i].onmouseover = function(){
			iNow = this.index;
			getStyle(iNow);
		};
	}
	function fnnext(){
		iNow++;
		if (iNow == aBtn.length) {
			iNow = 0;
		} 
		getStyle(iNow);
	}
	oPrev.onclick = function(){
		iNow--;
		if (iNow < 0) {
			iNow = aBtn.length - 1;
		}
		getStyle(iNow);
	};
	oNext.onclick = fnnext;
	timer = setInterval(fnnext,5000);
	oSlider.onmouseover = function(){
		clearInterval(timer);
	};
	oSlider.onmouseout = function(){
		timer = setInterval(fnnext,5000);
	};
}