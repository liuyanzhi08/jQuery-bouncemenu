>Copyright (c) 2013 Nancle from CAU CS101
>
>Licensed under the MIT License.
>
>version: 1.0
>
>经过IE6&IE6+，chrome，firefox测试兼容


*使用方法：{yourId}替换成你的id

	1. [ HTML ] 
        <div class="{yourId}">
		    <div class="{yourId}_menu">
		        <a href="#">导航一</a>
		        <a href="#">导航二</a>
		        <a href="#">导航三</a>
		        <a href="#">...</a>
		    </div>
		    <div id="{yourId}_animate_block"></div>
		</div>
         
    2.[ CSS ]  以下这些参数可以根据需要自行调整
        #nav{ position:relative; width:px; height:70px; padding-bottom:10px; background:#fff}
		#nav #nav_menu{ height:50px;}
		#nav #nav_menu a{ display:block; float:left; height:50px; padding:0 33px; line-height:50px; color:#666; font-size:18px; text-decoration:none;}
		#nav #nav_animate_block{ position:absolute; top:60px; height:2px; overflow:hidden; background:#80b600;}
        
    3.[ JS ]
        <script type="text/javascript" src="lib/jquery-1.9.1.js"></script>
		<script type="text/javascript" src="jquery.bouncemenu.js"></script>
        
    4.调用
        $("#{yourId}").bouncemenu({
		    'nav_current' : {nav索引}, //设置当前nav，{nav索引}替换成你想要的第N个nav的索引(n-1)，默认值是0,即第一个
	    });
*演示地址： [http://quchen.cau.edu.cn/jsDev/jquery-boucemenu/](http://quchen.cau.edu.cn/jsDev/jquery-boucemenu/) .
