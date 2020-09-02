import Vue from 'vue'
function vueTouch(el,binding,type){
  var _this=this;
  this.obj=el;
  this.binding=binding;
  this.touchType=type;
  this.vueTouches={x:0,y:0};
  this.vueMoves=true;
  this.vueLeave=true;
  this.longTouch=true;
  this.vueCallBack=typeof(binding.value)=="object"?binding.value.fn:binding.value;
  this.obj.addEventListener("touchstart",function(e){
    _this.start(e);
  },{ passive: false });
  this.obj.addEventListener("touchend",function(e){
    _this.end(e);
  },{ passive: false });
  this.obj.addEventListener("touchmove",function(e){
    _this.move(e);
  },{ passive: false });
};
vueTouch.prototype={
  start:function(e){
    this.vueMoves=true;
    this.vueLeave=true;
    this.longTouch=true;
    this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};
    this.time=setTimeout(function(){
      if(this.vueLeave&&this.vueMoves){
        this.touchType=="longTap"&&this.vueCallBack(this.binding.value,e);
        this.longTouch=false;
      };
    }.bind(this),1000);
  },
  end:function(e){
    var disX=e.changedTouches[0].pageX-this.vueTouches.x;
    var disY=e.changedTouches[0].pageY-this.vueTouches.y;
    clearTimeout(this.time);
    if(Math.abs(disX)>10||Math.abs(disY)>100){
      this.touchType=="swipe"&&this.vueCallBack(this.binding.value,e);
      if(Math.abs(disX)>Math.abs(disY)){
        if(disX>10){
          this.touchType=="swipeRight"&&this.vueCallBack(this.binding.value,e);
        };
        if(disX<-10){
          this.touchType=="swipeLeft"&&this.vueCallBack(this.binding.value,e);
        };
      }else{
        if(disY>10){
          this.touchType=="swipeDown"&&this.vueCallBack(this.binding.value,e);
        };
        if(disY<-10){
          this.touchType=="swipeUp"&&this.vueCallBack(this.binding.value,e);
        };
      };
    }else{
      if(this.longTouch&&this.vueMoves){
        this.touchType=="tap"&&this.vueCallBack(this.binding.value,e);
        this.vueLeave=false
      };
    };
  },
  move:function(e){
    this.vueMoves=false;
  }
};
Vue.directive("tap",{
  bind:function(el,binding){
    new vueTouch(el,binding,"tap");
  }
});
Vue.directive("swipe",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipe");
  }
});
Vue.directive("swipeLeft",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeLeft");
  }
});
Vue.directive("swipeRight",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeRight");
  }
});
Vue.directive("swipeDown",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeDown");
  }
});
Vue.directive("swipeUp",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeUp");
  }
});
Vue.directive("longTap",{
  bind:function(el,binding){
    new vueTouch(el,binding,"longTap");
  }
});
