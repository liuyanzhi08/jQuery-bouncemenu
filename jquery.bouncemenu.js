/*! Copyright (c) 2013 Nancle from CAU CS101
 * Licensed under the MIT License.
 *
 * copyright: Nancle from CAU CS 101
 *	 version: 1.0
 *
 *  此插件参照了该作者的思路：http://runjs.cn/code/ouvvjqka，jquery代码系另外编写 -->
 * 	实现思路：
 *	CSS:用一个绝对定位的div作为动画滑块,改变它的left属性来呈现动画效果
 *	javascript：hover()触发移动鼠标到导航nav的动作，和移出导航nav的动作（即返回到current导航）
 */
;(function($){
	
	$.fn.bouncemenu = function(options){
		var defaul_options = {
			'nav_current' : 0
		}
		options = $.extend(defaul_options, options);
		
		var id = this.attr('id');
		var $nav_menu = $('#' + id);
		var $nav_menu_a = $("#nav_menu a");
		var $nav_current = $nav_menu.find('a').eq(options.nav_current); //current元素（当前所在导航项)
		
		var nav_current_width = $nav_current.innerWidth();
		var nav_current_left = $nav_current.position().left;
	
		var $nav_animate_block = $("#" + id + "_animate_block"); //动画滑块
		$nav_animate_block.css({ width:nav_current_width, left:nav_current_left }); //初始状态下，动画滑块位置在current元素
	
		// 鼠标进入a元素时触发动画事件
		$nav_menu_a.hover(function(){
			
			var index = $(this).index();
			var $a_now = $nav_menu.find("a").eq(index);
	
			//利用触发的a元素索引获取其left位置和它的宽度
			var width = $a_now.innerWidth();
			var left = $a_now.position().left;
	
			//设置动画滑块位置
			$nav_animate_block.stop().animate({
				width: width,
				left: left 
			}, 300)
		}, function(){
			//鼠标离开a元素时，动画滑块返回current元素位置
			$nav_animate_block.stop().animate({
				width: nav_current_width,
				left: nav_current_left
			})
		})

	}
})(jQuery);