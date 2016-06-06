var $ = (function(){
  var jakeWeary = function(selector){
    if(selector.nodeName){
      var els = [selector]
    }else{
      var els = document.querySelectorAll(selector)
    }
    els.on = function(eventName, callback){
      for(var i = 0; i < els.length; i ++){
	els[i].addEventListener(eventName, callback)
      }
    }
    els.css = function(props){
      for(var i = 0; i < els.length; i ++){
        for(var key in props){
	  els[i].style[key] = props[key]
	}
      }
    }
    return els
  }

  return jakeWeary

})()


$(".box").on("click", function(){
  $(this).css({'background':'red'})
})