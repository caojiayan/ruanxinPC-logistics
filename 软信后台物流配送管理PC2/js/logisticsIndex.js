//所有下拉框
            $(function(){
				//当列表项被点击时，把列表项的值放在输入框里面，
				$(".dropdown").delegate("li", "click", function(e){
					var v = $(this).attr("data-value"),
						drop = $(this).closest(".dropdown");
					drop.attr("data-value", v);
					drop.find(".editor").val(v);
					$(this).parent().hide();
					e.stopPropagation();
				}).delegate(".trigger", "click", function(e){    //当下拉按钮被点击时，显示数据列表
					$(this).closest(".dropdown").find("ul").show();
					e.stopPropagation();  //阻止冒泡，因为冒泡到 document 的时候，会隐藏列表
				}).delegate(".search input", "click", function(e){
					e.stopPropagation(); 
				}).delegate(".search input", "keyup", function(e){    //当检测到列表中的输入框的时候，启动过滤，不满足的项隐藏
					var v = $.trim(this.value), list = $(this).closest("ul").children("li");
					if(v == "") {    //特殊情况，过滤输入框中没有值的时候迭代所有的列表项并显示它们
						list.each(function(){
							if(this.className.indexOf("search") != -1) {return;}//不考虑过滤输入框所在的列表项
							$(this).text(this.innerText || this.textContent).show();
						});
					} else {
						list.each(function(){   //迭代列表，
							if(this.className.indexOf("search") != -1) {return;}  //不考虑过滤输入框所在的列表项
							var lv = $(this).text();   //列表的文本
							if(lv.indexOf(v) === -1) {   //不匹配过滤文本，就隐藏
								$(this).hide();
							} else {                 //匹配，把匹配的文本替换会含有标记的文本（红色）
								$(this).html(lv.replace(v, '<span class="hot">'+v+'</span>')).show();
							}
						});
					}
					
				});
				
				$(this).click(function(){   //当数据列表在显示时，如果点击了页面其它区域，则隐藏列表
					$(".dropdown ul:visible").hide();   
				});
				//加载数据，数据列表中的每一项是一个列表，为了模拟select，每个列表项目还包括一个自定义的属性 data-value,用于保存此列表项的值
				$("#load").click(function(){
					var p = $(".dropdown ul");
					var fragment = document.createDocumentFragment(), li;  //临时容器，为了避免多次添加引起页面高频率重绘
					for(var i=1, len=30;i<len;i++) {
						li = document.createElement("li");
						li.setAttribute("data-value", i);
						li.innerHTML = i;
						fragment.appendChild(li);
						//$('<li data-value="' + i + '">' + i + '</li>').appendTo(fragment);
					}
					p.append(fragment);  //将临时容器添加到无序列表里面，一次添加效率高
				});
			});
			
//dropdown
$(document).ready(function(){
	$(".nS4threeTable>tr>td").hover(function(){
		$(".nS4threeTable>tr>td>.dropdown").CSS("background-color","#EEE")
	});
});


$(function(){
			$('.listtr td').on('click',function(){
				$(this).addClass('active');//为被点击的选项卡添加“active”类
				$(this).siblings().removeClass('active');//去掉其它选项卡的"active”类
				var $now=$('.logisticsBox .logbox').eq($('.listtr td').index(this));//获取到和被点击选项卡顺序相同的内容容器
				$now.addClass('active');//为这个内容容器添加“active”类
				$now.siblings().removeClass('active')//去掉其它内容容器的“active”类
			});
	});
	
//新增”物流配送模板“按钮
$(function(){
	$(".dispaclick").click(function(){
		$(".templet3").toggle();
	});
});
//现有配送模板明细修改
$(function(){
	$(".dispamodify").click(function(){
		$(".templet3").show();
	});
});

//实体工厂
$(function(){
	$(".facBoxclick").click(function(){
		$(".factoryBox").toggle();
	});
});
//实体工厂中工厂明细修改
$(function(){
	$(".facBoxmodify").click(function(){
		$(".factoryBox").show();
	});
});


//实体仓库
$(function(){
	$(".Newwareclick").click(function(){
		$(".NewwarehouseBox").toggle();
	});
});
//实体仓库中仓库明细修改
$(function(){
	$(".Newwaremodify").click(function(){
		$(".NewwarehouseBox").show();
	});
});


//实体店铺部分
//实体店铺
$(function(){
	$(".logistclick").click(function(){
		$(".NewlogisticsBox").toggle();
	});
});
//实体店铺中店铺明细修改
$(function(){
	$(".logistmodify").click(function(){
		$(".NewlogisticsBox").show();
	});
});


//店铺商品在实体店铺库存情况中上传图片
function fileSelect() {
        document.getElementById("fileToUpload").click();
   }
    function fileSelected() {
      // 文件选择后触发次函数
    }
//店铺商品在实体店铺库存情况中修改盒子
//遮盖层
$(function(){
	$(".nS4Goodsdel").click(function(){
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#nShop4modifyMod").show();
		$("#nShop4modifyNew").hide();
		$(".maskingLayer").show();
	});
});
//点击盒子左上角的删除键进行关闭盒子
$(function(){
	$(".nS4modModdel").click(function(){
		$("#nShop4modifyMod").hide();
		$(".maskingLayer").hide();
	});
});
//点击盒子左上角的保存键进行关闭盒子
$(function(){
	$(".nS4modModpres").click(function(){
		$("#nShop4modifyMod").hide();
		$(".maskingLayer").hide();
	});
});


//店铺商品在实体店铺库存情况中新增盒子
//遮盖层
$(function(){
	$(".nS4GoodsPreserve").click(function(){
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#nShop4modifyNew").show();
		$("#nShop4modifyMod").hide();
		$(".maskingLayer").show();
	});
});
//点击盒子左上角的删除键进行关闭盒子
$(function(){
	$(".nS4modNewdel").click(function(){
		$("#nShop4modifyNew").hide();
		$(".maskingLayer").hide();
	});
});
//点击盒子左上角的保存键进行关闭盒子
$(function(){
	$(".nS4modNewpres").click(function(){
		$("#nShop4modifyNew").hide();
		$(".maskingLayer").hide();
	});
});
//点击库存换算按钮，输入框获得焦点
//$(function(){
//  $(".nS4modWrite").click(function(){
//		$(".nS4modWriteNum").get(0).focus();
//		$(".nShop4two").show();
//	});
//})

