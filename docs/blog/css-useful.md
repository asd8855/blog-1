# 有用的 CSS 特性

CSS 平时用的很多，但是也就那么一些常用的属性，这里收集一些不常用，但是却很有用的 CSS 属性。

## mix-blend-mode 混合模式

该 CSS 属性作用是让元素内容和这个元素的背景以及下面的元素发生“混合”。例如：根据色相，饱和度，等进行混合。

也可以使用此属性来改变图片颜色。

```css
mix-blend-mode: normal; //正常
mix-blend-mode: multiply; //正片叠底
mix-blend-mode: screen; //滤色
mix-blend-mode: overlay; //叠加
mix-blend-mode: darken; //变暗
mix-blend-mode: lighten; //变亮
```

### background-blend-mode 混合背景图片

这个要更好理解一点，背景的混合模式。可以是背景图片间的混合，也可以是背景图片和背景色的混合。

## 相关链接

- [CSS3 混合模式 mix-blend-mode/background-blend-mode 简介](https://www.zhangxinxu.com/wordpress/2015/05/css3-mix-blend-mode-background-blend-mode/)
