---
layout: post
title:  "Introduction to Sass"
date: 2014-07-27 00:32 +5:30
permalink: blog/:categories/:title/
featured: sass.png
is_post: true

excerpt: Sass is a CSS preprocessor which makes your work simple by facilitating you with variables, mixins
description: Sass is a CSS preprocessor which makes your work simple by facilitating you with variables, mixins, inheritance and ton of cool features that help you to...
vertical: Article
categories: articles
tags: ['Compass', 'Sass']
comments: true
---

<h2>What is Sass?</h2>

<p>Sass stands for <strong>Syntactically Awesome Stylesheets</strong></p>

<p>Sass is a CSS preprocessor which makes your work simple by facilitating you with variables, mixins, inheritance and ton of cool features that help you to write codes in a much less time. It can be pretty helpful for creating nice & neat code.</p>

<figure>
	<img src="/blog/uploads/2014/07/sass.png" alt="Sass" />
	<figcaption>Images source: <a href="http://schedule.sxsw.com/2014/events/event_IAP23717" target="_blank">schedule.sxsw.com</a></figcaption>
</figure>

<h2>Using Sass</h2>

<p>Sass consists of two syntax:</p>

<ol>
	<li>Sass</li>
	<li>SCSS</li>
</ol>

<p>Sass is the original syntax, called “The indented Syntax”. This syntax doesn’t require curly braces and semicolon that are a require in CSS. Using newlines and indentation(two white spaces), Sass is able to read and compile as if they were there:</p>

{% highlight sass %}
p
	color: tomato
div
	width: 100%
{% endhighlight %}

<p>SCSS - “Sassy CSS” is newer syntax that uses block formatting same as CSS. SCSS is uses the curly brackets to identify code blocks and semicolon to separate lines in blocks:</p>

{% highlight scss %}
$font-family:  Arial, Helvetica, sans-serif;
body {
	font-family: $font-family;
}
{% endhighlight %}

<h2>How it Works?</h2>

<p>Sass is command line CSS compiler that reads and compiles the codes to clean and structured CSS that you have write in .sass or .scss. For example,</p>

{% highlight scss %}
$color: black;
body {
	background: white;
	color: $color;
}
{% endhighlight %}

<p>Would compiled to..</p>

{% highlight css %}
body {
	background: white;
	color: black;
}
{% endhighlight %}

<h2>Some Features of Sass</h2>

<p>The advantages of using Sass are the drivers behind the usage which is:</p>

<ul>
	<li>Implementing the DRY(Don’t Repeat Yourself).</li>
	<li>Adding dynamic programming functionality instead of a very static language: CSS</li>
	<li>Code Reusability(Inheritance)</li>
</ul>

<h2>Let’s get familiar with Compass</h2>

<p>Compass is an extension of Sass. It has its own compiler so, you use <strong>compass watch</strong> command instead of <strong>sass --watch</strong>.</p>

<p>It is a CSS framework that contains large collection of mixins and functions that you will find incredibly useful. This will generate a set of codes in your CSS file with the values you pass as parameters. For example,</p>

{% highlight scss %}
@mixin border-radius($br) {
	-webkit-border-radius: $br;
	border-radius: $br;
}
div {
	@include border-radius(10px);
}
{% endhighlight %}

<p>Would compiled to..</p>

{% highlight css %}
div {
	-webkit-border-radius: 10px;
	border-radius: 10px;
}
{% endhighlight %}

<h2>Variables</h2>

<p>Sass provides way to be able to use variables within CSS before it is compiled, allowing for re-usable data. The Sass variables begin with dollar sign($).</p>

{% highlight sass %}
$color: purple
p
	color: $color
{% endhighlight %}

{% highlight scss %}
$color: purple;
p {
	color: $color;
}
{% endhighlight %}

<p>Output in .css will be</p>

{% highlight css %}
p {
	color: purple;
}
{% endhighlight %}

<h2>Nesting</h2>

<p>This is one of the more useful features of Sass along with the variables. It allows you to target particularly nested HTML components such as navigation:</p>

{% highlight sass %}
nav
	/* Some Style */
	ul
		/* Some Style */
    	li
			/* Some Style */
			a
        		/* Some Style */
{% endhighlight %}

{% highlight scss %}
nav {
	/* Some Style */
	ul {
		/* Some Style */
		li {
			/* Some Style */
			a  {
				/* Some Style */
			}
		}
	}
}
{% endhighlight %}

<p>And .css file will be:</p>

{% highlight css %}
nav {
	/* Some Style */
}
nav ul {
	/* Some Style */
}
nav ul li {
	/* Some Style */
}
nav ul li a {
	/* Some Style */
}
{% endhighlight %}

<h2>@import</h2>

<p>CSS has <code>@import</code> functionality but each time you use <code>@import</code> in CSS it creates another HTTP requests. In Sass, it avoids to creating additional HTTP requests because files are imported and concatenated on compile rather than browser run-time.</p>

{% highlight scss %}
@import "compass/reset";
{% endhighlight %}

<p>Your .css will be:</p>

{% highlight css %}
html, body, div {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
}
.....
{% endhighlight %}

<h2>Mixin</h2>

<p>Mixin is a very brilliant feature of Sass and i personally love it. The excellent example of this feature is, when you need to use CSS property that has a vendor prefixes. For example, <code>border-radius</code>, <code>box-shadow</code> and many other.</p>

{% highlight sass %}
@mixin border-radius($br)
	-webkit-border-radius: $br
	border-radius: $br
div
	@include border-radius(10px)
{% endhighlight %}

{% highlight scss %}
@mixin border-radius($br) {
	-webkit-border-radius: $br;
	border-radius: $br;
}
div {
	@include border-radius(10px);
}
{% endhighlight %}

<p>CSS Result:</p>

{% highlight css %}
div {
	-webkit-border-radius: 10px;
	border-radius: 10px;
}
{% endhighlight %}

<h2>Operators</h2>

<p>Like many other programming languages, Sass has operator to perform basic math operation in your CSS.</p>

{% highlight sass %}
$width: 960px
div
	width: 300px / $width * 100%
{% endhighlight %}

{% highlight scss %}
$width: 960px;
div{
	width: 300px / $width * 100%;
}
{% endhighlight %}

<p>Calculation result in CSS</p>

{% highlight css %}
div {
	width: 31.25%;
}
{% endhighlight %}

<h2>Extend(Inheritance)</h2>

<p>Most of all programming language has this feature called "inheritance". Using <code>@extend</code>, you can share CSS properties from one selector to another so it helps keep your Sass very <abbr title="Don’t Repeat Yourself">DRY</abbr></p>

{% highlight sass %}
.zero-out
	padding: 0
	margin: 0
ul
	@extend .zero-out
	list-style: none
{% endhighlight %}

{% highlight scss %}
.zero-out {
	padding: 0;
	margin: 0;
}
ul {
	@extend .zero-out;
	list-style: none;
}
{% endhighlight %}

<p>Would compiled to:</p>

{% highlight css %}
.zero-out, ul {
	padding: 0;
	margin: 0;
}
ul {
	list-style: none;
}
{% endhighlight %}

<p>Sass is very easy to use and understand. I swear that, once you understand the Sass' methods and syntax, you’ll never want to go back to writing static CSS again.</p>

<h2>More Resources</h2>

<ul>
	<li>Guide on Sass: <a href="http://sass-lang.com/guide" target="_blank">sass-lang.com</a></li>
	<li>Article on Sass: <a href="http://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">Wikipedia</a></li>
	<li>Beginner Guides and Tutorials on Sass and Compass: <a href="http://thesassway.com/beginner" target="_blank">thesassway.com</a></li>
</ul>