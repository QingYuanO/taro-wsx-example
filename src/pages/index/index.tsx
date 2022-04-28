import { Button, View } from "@tarojs/components";
import { useState } from "react";
import testWxs from "./index.wxs";
//参考链接：https://developers.weixin.qq.com/miniprogram/dev/framework/view/interactive-animation.html
const Index = () => {
  console.log(testWxs);
  const [propValue, setPropValue] = useState(0);
  //wxs中调用此方法
  const testCallmethod = () => {
    console.log('testCallmethod')
  }
  return (
    <View>
      <View
        changeProp={testWxs.propObserver}
        onClick={testWxs.testClick}
        prop={propValue}
        onTouchMove={testWxs.touchmove}
        style={{height:100,width:100,borderRadius:50,backgroundColor:'rebeccapurple'}}
        className="movable"
      ></View>
      <Button onClick={() => setPropValue((state) => state + 1)}>
        PLUS {propValue}
      </Button>
    </View>
  );
};

export default Index;
