---
layout: post
title:  "Adding Loading Screen in Website"
date: 2014-07-23 11:46 +5:30
permalink: blog/:categories/:title/
featured: add-loading-screen.gif
is_post: true

excerpt: Regularly as a web designer, we build websites that can be reasonably media intensive
description: adding loading screen...Regularly as a web designer, we build websites that can be reasonably media intensive (e.g. It can be portfolio or photography...
vertical: Tutorial
categories: tutorials
tags: ['Loading', 'Screen']
comments: true
---

<p>Regularly as a web designer, we build websites that can be reasonably media intensive (e.g. It can be portfolio or photography website). It may contain lots of graphics, videos or flash contents, and thousands lines of code so page can be load slow. But there has a better way to display awesome loading screen instead of those half loaded pages.</p>

<p>Let's start, To adding loading screen to your website with the following simple steps.</p>

<h4>Find a beautiful page loading graphic</h4>

<p>There are two way to find out an attractive page loader. <strong>1)</strong> Find from internet and <strong>2)</strong> Design your own loading graphics with photography tools or using CSS(3). In this article, i have designed custom loading graphic with CSS3 animation.</p>

<figure>
	<img src="/blog/uploads/2014/07/add-loading-screen.gif" alt="Add Loading Screen" />
	<figcaption>Add Loading Screen</figcaption>
</figure>

<h4>Adding HTML stuff</h4>

<p>Add the following code into your HTML at the beginning of <body> tag or before the closing of </body> tag.</p>

{% highlight html %}
<div class="loader-wrap">
	<div class="loader">
		<div class="box-1 box"></div>
		<div class="box-2 box"></div>
		<div class="box-3 box"></div>
		<div class="box-4 box"></div>
		<div class="box-5 box"></div>
	</div>
</div>
{% endhighlight %}

<h4>Setting up loader with CSS</h4>

{% highlight css %}
*, *:after, *:before{
	-moz-box-sizing: border-box;
	     box-sizing: border-box;
}
body{
	margin: 0;
	font-family: "Open Sans",sans-serif;
}
.loader-wrap{
	background: #333 url("back.png") repeat center center fixed;
	height: 100%;
	width: 100%;
	position: fixed;
	z-index: 99999;
}
.loader{
	font-size: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translateX(-50%) translateY(-50%);
	    -ms-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
	width: 120px;
	height: 20px;
}
.loader:after{
	color: rgba(0,183,229,0.9);
	content: "Loading...";
	font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
	font-size: 15px;
	position: absolute;
	width: 120px;
	top: 40px;
	left: 5px;
	text-align: center;
}
[class*='box-']{
	display: inline-block;
	font-size: 15px;
	line-height: 20px;
	margin-right: 5px;
	height: 20px;
	width: 20px;
	border: 5px solid rgba(0,183,229,0.9);
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
	box-shadow: 0 0 10px #2187e7;
	border-radius: 50%;
	-webkit-transform: scale(0.7);
	    -ms-transform: scale(0.7);
	        transform: scale(0.7);
	-webkit-animation: loader 1s infinite linear;
	        animation: loader 1s infinite linear;
}
[class*='box-']:last-child{
	margin-right: 0;
}
.box-1{
	-webkit-animation-delay: .4s;
	        animation-delay: .4s;
}
.box-2{
	-webkit-animation-delay: .3s;
	        animation-delay: .3s;
}
.box-3{
	-webkit-animation-delay: .2s;
	        animation-delay: .2s;
}
.box-4{
	-webkit-animation-delay: .3s;
	        animation-delay: .3s;
}
.box-5{
	-webkit-animation-delay: .4s;
	        animation-delay: .4s;
}
@-webkit-keyframes loader{
    0% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
        opacity: 1;
    }

    100% {
        -webkit-transform: scale(0.7) rotate(10deg);
                transform: scale(0.7) rotate(10deg);
        opacity: 0.1;
    }
}
@keyframes loader{
    0% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
        opacity: 1;
    }

    100% {
        -webkit-transform: scale(0.7) rotate(10deg);
                transform: scale(0.7) rotate(10deg);
        opacity: 0.1;
    }
}
{% endhighlight %}

<h4>Adding jQuery</h4>

<p>This is the final step of this article, Here we are gonna adding jQuery in your web page to display loading screen until website is loaded successfully.</p>

<p>Copy the following code in <code>&lt;head&gt;</code> section of your document.</p>

{% highlight html %}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
{% endhighlight %}

<p>And again add this code in your footer means that before closing of <code></body></code> tag. This code will smoothly hide the loading screen when DOM is completely loaded.</p>

{% highlight javascript %}
$(window).load(function() {
	$(".loader-wrap").fadeOut("slow");
})
{% endhighlight %}