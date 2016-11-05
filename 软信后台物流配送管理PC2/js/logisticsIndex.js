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
$(function(){
	$(".nS4threeTable>tr>td").hover(function(){
		$(".nS4threeTable>tr>td>.dropdown").CSS("background-color","#EEE")
	});
});
//选项卡
$(function(){
	$("#shop").click(function(){
		location.href="shop.html";
		$(this).css("background","#EEE")
	});
	$("#warehouse").click(function(){
		location.href="warehouse.html";
		$(this).css("background","#EEE")
	});
	$("#factory").click(function(){
		location.href="factory.html";
		$(this).css("background","#EEE")
	});
	$("#functionary").click(function(){
		location.href="functionary.html";
		$(this).css("background","#EEE")
	});
	$("#carton").click(function(){
		location.href="carton.html";
		$(this).css("background","#EEE")
	});
	$("#dispatching").click(function(){
		location.href='dispatching.html';
		$(this).css("background","#EEE")
	});
});
	
//新增”物流配送模板“按钮
$(function(){
	$(".dispaclick").click(function(){
		$(".templet3").toggle();
	});
});
//现有配送模板明细新增
$(function(){
	$(".dispamodify").click(function(){
		$(".templet3").show();
	});
	//现有配送模板明细修改
	$("#dispatchingW1").click(function(){
		$(".templet3").show();
	});
	$("#dispatchingW2").click(function(){
		$(".templet3").show();
	});
	$("#dispatchingW3").click(function(){
		$(".templet3").show();
	});
	$("#dispatchingW4").click(function(){
		$(".templet3").show();
	});
	$("#dispatchingW5").click(function(){
		$(".templet3").show();
	});
	$("#dispatchingW6").click(function(){
		$(".templet3").show();
	});
	$("#dispatchingW7").click(function(){
		$(".templet3").show();
	});
});

//实体工厂
//取消与确定按钮
$(function(){
	$(".facBoxclick").click(function(){
		$(".factoryBox").toggle();
	});
});
//实体工厂中工厂明细新增
$(function(){
	$(".facBoxmodify").click(function(){
		$(".factoryBox").show();
	});
	//实体工厂中工厂明细修改
	$("#factoryW1").click(function(){
		$(".factoryBox").show();
	});
	$("#factoryW2").click(function(){
		$(".factoryBox").show();
	});
	$("#factoryW3").click(function(){
		$(".factoryBox").show();
	});
	$("#factoryW4").click(function(){
		$(".factoryBox").show();
	});
	$("#factoryW5").click(function(){
		$(".factoryBox").show();
	});
	$("#factory6").click(function(){
		$(".factoryBox").show();
	});
	$("#factoryW7").click(function(){
		$(".factoryBox").show();
	});
	
});


//实体仓库
//取消与确定按钮
$(function(){
	$(".Newwareclick").click(function(){
		$(".NewwarehouseBox").toggle();
	});
});
//实体仓库中仓库新增
$(function(){
	$(".Newwaremodify").click(function(){
		$(".NewwarehouseBox").show();
	});
	//实体仓库中仓库明细修改
	$("#wareW1").click(function(){
		$(".NewwarehouseBox").show();
	});
	$("#wareW2").click(function(){
		$(".NewwarehouseBox").show();
	});
	$("#wareW3").click(function(){
		$(".NewwarehouseBox").show();
	});
	$("#wareW4").click(function(){
		$(".NewwarehouseBox").show();
	});
	$("#wareW5").click(function(){
		$(".NewwarehouseBox").show();
	});
	$("#wareW6").click(function(){
		$(".NewwarehouseBox").show();
	});
	$("#wareW7").click(function(){
		$(".NewwarehouseBox").show();
	});
});


//实体店铺部分
//实体店铺
//取消与确定按钮
$(function(){
	$(".logistclick").click(function(){
		$(".NewlogisticsBox").toggle();
	});
});
//实体店铺中店铺新增
$(function(){
	$(".logistmodify").click(function(){
		$(".NewlogisticsBox").show();
	});
	//实体店铺中店铺明细修改
	$("#shopW1").click(function(){
		$(".NewlogisticsBox").show();
	});
	$("#shopW2").click(function(){
		$(".NewlogisticsBox").show();
	});
	$("#shopW3").click(function(){
		$(".NewlogisticsBox").show();
	});
	$("#shopW4").click(function(){
		$(".NewlogisticsBox").show();
	});
	$("#shopW5").click(function(){
		$(".NewlogisticsBox").show();
	});
	$("#shopW6").click(function(){
		$(".NewlogisticsBox").show();
	});
	$("#shopW7").click(function(){
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
//全选按钮后面追加文字
$(function(){
	$(".LogcheckAll").append("text","全选")
});

//各明细input全选或取消全选
(function($){
    $.fn.checkall = function(options){
        var defaults = {chname:"checkname[]", callback:function(){}},
        options = $.extend(defaults, options),
        $obj = $(this),
        $items = $("input[name='"+options.chname+"']"),
        checkedItem = 0;
        $items.click(function(){
            if($items.filter(":checked").length === $items.length){
                $obj.attr("checked",true);
            }else{
                $obj.removeAttr("checked");
            }
            checkedItem = $items.filter(":checked").length;
            if(typeof options.callback === 'function') options.callback(checkedItem);
        });
        return $obj.each(function(){
            $(this).click(function(){
                if($(this).attr('checked')){
                    $items.attr("checked",true);
                }else{
                    $items.removeAttr("checked");
                }
                checkedItem = $items.filter(":checked").length;
                if(typeof options.callback === 'function') options.callback(checkedItem);
            });
        });
    }
})(jQuery);
//回调
$(function(){
    $("#checkall").checkall({chname:"logistics", callback: function(e){}});
});
//删除
$(function(){
	$("#delBtn").click(function () {
        $(".detailtable").find("input[name='logistics']").each(function () {
            if($(this).prop("checked")) {
               $(this).parent().parent().remove();
            }
        });
        //纸箱明细
        $(".cartontable").find("input[name='logistics']").each(function () {
            if($(this).prop("checked")) {
               $(this).parent().parent().remove();
            }
        });
    });
});