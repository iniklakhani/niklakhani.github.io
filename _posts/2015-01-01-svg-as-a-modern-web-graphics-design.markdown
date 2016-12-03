---
layout: post
title:  "SVG as a Modern Web Graphics Design"
date: 2015-01-01 23:02 +05:30
permalink: blog/:categories/:title/
featured: Vector-vs-Raster.png
is_post: true

excerpt: The SVG specification is an open standard developed by the WWW Consortium (W3C) since 1999.
description: SVG as a Modern Web Graphics Design...SVG is a vector graphics so it is truly scalable. Depending on how you implement SVG, it offers more control than...
vertical: Article
categories: articles
tags: ['SVG', 'Illustrator']
comments: true
---

<h3>Table of Contents</h3>

<p>In this article, i covered following points of SVG:</p>

<ul style="list-style:none">
	<li><a href="#intro" >#</a>&nbsp;What is SVG?</li>
	<li><a href="#reason" >#</a>&nbsp;Why use SVG? - Pros and Cons</li>
	<li><a href="#make" >#</a>&nbsp;How to make SVG? - Tools</li>
	<li><a href="#shape" >#</a>&nbsp;Basic shapes of SVG</li>
	<li><a href="#use" >#</a>&nbsp;How to use SVG on the web?</li>
	<li><a href="#export" >#</a>&nbsp;Exporting SVG for web</li>
	<li><a href="#support" >#</a>&nbsp;Browser Support</li>
	<li><a href="#resources" >#</a>&nbsp;More resources about SVG</li>
</ul>
<h3 id="intro">What is SVG?</h3>

<p>SVG stands for Scalable Vector Graphics which can describe in:</p>


<p><strong>S</strong> - We can zoom or resize image at any size without losing quality.
<strong>V</strong> - It is not pixel based, means all shaped are defined by geometry instead of dots (.).
<strong>G</strong> - Obviously, it is graphic.</p>


<p>Before we dive into SVG, at least we should know what is SVG?</p>


<p>The SVG specification is an open standard developed by the WWW Consortium (W3C) since 1999. It is the XML based language that defines 2D (two-dimensional) vector graphics.</p>
<!--more-->
<h3 id="reason">Why use SVG?</h3>

<p>SVG is a vector graphics so it is truly scalable. Depending on how you implement SVG, it offers more control than with an image. We can target each element separately via CSS because SVG is in xml format.</p>

<figure>
	<img src="/blog/uploads/2015/01/Vector-vs-Raster.png" alt="Vector vs Raster" />
	<figcaption>Vector vs Raster</figcaption>
</figure>

<h6>Pros</h6>

<ul>
  <li>SVG graphics are vector graphics, so they can be resized without losing quality.</li>
  <li>SVG file might also be smaller in size than raster (.jpeg, .gif, .png) graphics.</li>
  <li>Size is small so obviously web page load is faster.</li>
  <li>SVG is a W3C recommendation.</li>
  <li>SVG defines graphics in XML format.</li>
</ul>

<h6>Cons</h6>

<ul>
  <li>Older browsers are not able to render SVG.</li>
</ul>

<h3 id="make">How to Make SVG?</h3>

<p>Let’s have a look at some tools to work with SVG.</p>

<ol>
  <li><a href="http://www.w3.org/Amaya/" target="_blank">W3C Amaya</a> - An open source editor/browser</li>
  <li><a href="http://www.inkscape.org/" target="_blank">InkScape</a> - An open source graphics drawing tool with advanced features, using SVG as a native format</li>
  <li><a href="http://code.google.com/p/svg-edit/" target="_blank">SVG-edit</a> - A simple browser based SVG drawing tool</li>
  <li><a href="http://www.adobe.com/products/illustrator/" target="_blank">Adobe Illustrator</a> - A Professional commercial vector graphics drawing tool</li>
  <li><a href="http://www.corel.com/servlet/Satellite/us/en/Product/1191272117978#tabview=tab0" target="_blank">CorelDRAW</a> - A Professional commercial vector graphics drawing tool</li>
</ol>

<h3 id="shape">Basic Shapes of SVG</h3>

<p>SVG has some built in shape elements that are as under:</p>

<ol>
  <li>Rectangle</li>
  <li>Circle</li>
  <li>Ellipse</li>
  <li>Line</li>
  <li>Polyline</li>
  <li>Polygon</li>
  <li>Path</li>
</ol>

<h4>&lt;rect&gt;</h4>

<p>The <code>&lt;rect&gt;</code> element is used to create a rectangle. There are six basic attributes that control the position and shape of the rectangle.</p>

{% highlight html %}
<rect x="0" y="0" width="200" height="200" style="fill:skyblue;stroke:lightpink;stroke-width:10;" />
{% endhighlight %}

<h6>Preview</h6>
<style>.preview{padding: 10px 10px 5px;border: 1px solid silver;text-align: center;-webkit-padding-before: 0;webkit-padding-after: 0;-webkit-padding-start: 0;-webkit-padding-end: 5px;text-align: center!important;max-height: 300px}</style>
<div class="preview"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 200 200" style="max-width: 200px;"><rect x="0" y="0" width="200" height="200" style="fill:skyblue;stroke:lightpink;stroke-width:10;" /></svg></div>

<h6>Attributes</h6>
<ul>
  <li><strong>x</strong> - The x position of top left corner.</li>
  <li><strong>y</strong> - The y position of top left corner.</li>
  <li><strong>rx</strong> - The x radius of corner.</li>
  <li><strong>ry</strong> - The y radius of corner.</li>
  <li><strong>width</strong> - The width of the rectangle.</li>
  <li><strong>Height</strong> - The height of the rectangle.</li>
</ul>

<h4>&lt;circle&gt;</h4>

<p>The <code>&lt;circle&gt;</code> element is used to draw circle on the screen. There are three attributes that define the position and radius of circle.</p>

{% highlight html %}
<circle cx="100" cy="100" r="97" style="fill:skyblue;stroke:lightpink;stroke-width:5;" />
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 200 200" style="max-width: 200px;"><circle cx="100" cy="100" r="97" style="fill:skyblue;stroke:lightpink;stroke-width:5;" /></svg>
</div>

<h6>Attributes</h6>
<ul>
	<li><strong>x</strong> - The x position of the center of the circle.</li>
	<li><strong>y</strong> - The y position of the center of the circle.</li>
	<li><strong>r</strong> - Defines the radius of the circle.</li>
</ul>

<h4>&lt;ellipse&gt;</h4>

<p>The <code>&lt;ellipse&gt;</code> element is similar to <code>&lt;circle&gt;</code> element, but here we can specify x and y radius separately. Let’s see the following example.</p>

{% highlight html %}
<ellipse cx="100" cy="100" rx="97" ry="50" style="fill:skyblue;stroke:lightpink;stroke-width:5;" />
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 200 200" style="max-width: 200px;"><ellipse cx="100" cy="100" rx="97" ry="50" style="fill:skyblue;stroke:lightpink;stroke-width:5;" /></svg>
</div>

<h6>Attributes</h6>
<ul>
	<li><strong>cx</strong> - The x position of the center of the ellipse.</li>
	<li><strong>cy</strong> - The y position of the center of the ellipse.</li>
	<li><strong>rx</strong> - The x radius of the ellipse.</li>
	<li><strong>ry</strong> - The y radius of the ellipse.</li>
</ul>

<h4>&lt;line&gt;</h4>

<p>It is line, just straight line. It takes four attributes to draw a line which determine start and end point of the line.</p>

{% highlight html %}
<line x1="25" y1="25" x2="175" y2="175" style="stroke:lightpink;stroke-width:5" />
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 200 200" style="max-width: 200px;"><line x1="25" y1="25" x2="175" y2="175" style="stroke:lightpink;stroke-width:5" /></svg>
</div>

<h6>Attributes</h6>
<ul>
	<li><strong>x1</strong> - Starting x position of the line.</li>
	<li><strong>y1</strong> - Starting y position of the line.</li>
	<li><strong>x2</strong> - Ending x position of the line.</li>
	<li><strong>y2</strong> - Ending y position of the line. </li>
</ul>

<h4>&lt;polyline&gt;</h4>

<p>Polylines are group of connected straight lines. All points are included in single attribute that why list can get quit long.</p>

{% highlight html %}
<polyline points="50 50, 100 50, 100 100, 150 100, 150 150" style="fill:none;stroke:lightpink;stroke-width:5" />
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 200 200" style="max-width: 200px;"><polyline points="50 50, 100 50, 100 100, 150 100, 150 150" style="fill:none;stroke:lightpink;stroke-width:5" /></svg>
</div>

<h6>Attrributes</h6>
<ul>
	<li><strong>points</strong> - It accepts multiple values which is called points. Each of them have a two value x and y.</li>
</ul>

<h4>&lt;polygon&gt;</h4>

<p>Polygon is similar to <code>&lt;polyline&gt;</code>, it accepts list of points and these points make up a polygon. All coordinate values are in the user coordinate system.</p>

{% highlight html %}
<polygon points="100 3, 132 60, 197 72, 153 120, 162 190, 100 160, 37 190, 48 120, 3 72, 67 60" style="fill:skyblue;stroke:lightpink;stroke-width:3" />
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 200 200" style="max-width: 200px;"><polygon points="100 3, 132 60, 197 72, 153 120, 162 190, 100 160, 37 190, 48 120, 3 72, 67 60" style="fill:skyblue;stroke:lightpink;stroke-width:3" /></svg>
</div>

<h6>Attributes</h6>

<ul>
	<li><strong>points</strong> - It accepts multiple values which is called points. Each of them have a two value x and y. For example, points=“0 0, 1 1, 2 2” then closing path would be drawn from (2 2) to (0 0).</li>
</ul>

<h4>&lt;path&gt;</h4>

<p>Path is the most important shape of SVG. With the help of <code>&lt;path&gt;</code> element, we can draw any shapes including curve, rounded rectangle etc. Also we can create Bézier curves, quadratic curves, rectangular shapes etc.</p>

{% highlight html %}
<path d="m 160.53125,0.90625 -0.34375,0.75 -48.75,102.625 -112.1875,18.0625 -0.78125,0.125 L -0.9375,123 81.625,201.09375 64.09375,313.375 l -0.125,0.78125 0.71875,-0.375 99.75,-54.40625 101.375,51.34375 0.71875,0.34375 -0.15625,-0.78125 -20.90625,-111.65625 80.15625,-80.5625 0.59375,-0.5625 -0.8125,-0.125 -112.6875,-14.625 -51.8125,-101.125 -0.375,-0.71875 z m 0.0312,1.8125 51.5625,100.59375 0.0937,0.15625 0.1875,0.0312 112.09375,14.5625 -79.71875,80.125 -0.15625,0.15625 0.0312,0.1875 20.8125,111.09375 -100.84375,-51.0625 -0.1875,-0.0937 -0.1875,0.0937 L 65,312.6875 82.4375,201 82.46875,200.78125 82.3125,200.65625 0.1875,123 111.78125,105.03125 111.96875,105 l 0.0937,-0.1875 48.5,-102.09375 z" style="fill:black;" />
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewbox="0 0 328 313" style="max-width: 200px;"><path d="m 160.53125,0.90625 -0.34375,0.75 -48.75,102.625 -112.1875,18.0625 -0.78125,0.125 L -0.9375,123 81.625,201.09375 64.09375,313.375 l -0.125,0.78125 0.71875,-0.375 99.75,-54.40625 101.375,51.34375 0.71875,0.34375 -0.15625,-0.78125 -20.90625,-111.65625 80.15625,-80.5625 0.59375,-0.5625 -0.8125,-0.125 -112.6875,-14.625 -51.8125,-101.125 -0.375,-0.71875 z m 0.0312,1.8125 51.5625,100.59375 0.0937,0.15625 0.1875,0.0312 112.09375,14.5625 -79.71875,80.125 -0.15625,0.15625 0.0312,0.1875 20.8125,111.09375 -100.84375,-51.0625 -0.1875,-0.0937 -0.1875,0.0937 L 65,312.6875 82.4375,201 82.46875,200.78125 82.3125,200.65625 0.1875,123 111.78125,105.03125 111.96875,105 l 0.0937,-0.1875 48.5,-102.09375 z" style="fill:black;" /></svg>
</div>

<h6>Attributes</h6>

<ul>
	<li><strong>d</strong> - A list of points and other commands about how to draw a path. There are following commands available for path:
		<ul style="list-style-type:none;margin-top:10px;">
			<li><strong>M</strong> - moveto</li>
			<li><strong>L</strong> - lineto</li>
			<li><strong>H</strong> - horizontal lineto</li>
			<li><strong>V</strong> - vertical lineto</li>
			<li><strong>C</strong> - curveto</li>
			<li><strong>S</strong> - smooth curveto</li>
			<li><strong>Q</strong> - quadratic Bézier curveto</li>
			<li><strong>T</strong> - smooth quadratic Bézier curveto</li>
			<li><strong>A</strong> - elliptical arc</li>
			<li><strong>Z</strong> - close path</li>
		</ul>
	</li>
</ul>

<p>Actually, we don’t need to remember everything in path element because we don’t create SVG vectors manually (most of time).</p>

<p><strong>Note</strong>: All above commands can be expressed in upper case or lower case where upper case means absolute position and lower case means relative position.</p>

<h3 id="use">How to use SVG on the Web?</h3>

<p>Here we get to the fun bit. There are a number of ways you can implement SVG on a web. So let’s start.</p>

<h6>Using HTML</h6>

{% highlight html %}
<img src="butterfly.svg" alt="I can't fly" width="150px" height="150px" />
{% endhighlight %}

<h6>Using CSS</h6>

{% highlight css %}
header {
	height: 150px;
	width: 150px;
	background-image: url('butterfly.svg');
}
{% endhighlight %}

<h6>PHP Emebed</h6>

{% highlight php %}
<?php include("butterfly.svg"); ?>
{% endhighlight %}

<h6>Inline SVG</h6>

{% highlight html %}
<body>
	<!-- Your SVG Code -->
</body>
{% endhighlight %}

<h6>Inline SVG fallback</h6>

{% highlight html %}
<!--[if gte IE 9]><!-->
	<svg>
	...
	</svg>
<!--<![endif]-->

<!--[if lte IE 8]>
	<img src="butterfly.png" alt="I can't fly">
<![endif]-->
{% endhighlight %}

<h6>Using Object</h6>

{% highlight html %}
<object type="image/svg+xml" data="butterfly.svg">
	<!-- Fallback image -->
</object>
{% endhighlight %}

<h6>Iframe embed</h6>

{% highlight html %}
<iframe src="butterfly.svg">
	<!-- Fallback image -->
</iframe>
{% endhighlight %}

<h3 id="export">Exporting SVG for Web</h3>

<p>First of all, draw something in Adobe Illustrator. Here I've drawn simple butterfly.</p>

<figure>
	<img src="/blog/uploads/2015/01/butterfly.jpg" alt="Butterfly" />
	<figcaption>Butterfly</figcaption>
</figure>

<p>When you are done, save it as SVG.</p>

<figure>
	<img src="/blog/uploads/2015/01/Save-as-SVG.png" alt="Save as SVG" />
	<figcaption>Save as SVG</figcaption>
</figure>

<p>When you save, it will prompt for SVG options, examine the SVG options dialog box. SVG 1.1 (it is second edition) is the best export for web.</p>

<figure>
	<img src="/blog/uploads/2015/01/SVG-options.jpg" alt="SVG Options" />
	<figcaption>SVG Options</figcaption>
</figure>

<p>Now open your .SVG file and use this code in your HTML document. When we directly insert SVG markup into HTML document, it becomes inline SVG.</p>

{% highlight html %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="27.922 23.094 519 402">
	<path class="butterfly" fill="orange" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M36.595,28.623c0,0,82.812,86.513,66.903,145.784 c-12.306,45.847,2.51,68.922,2.51,68.922s16.396-19.703,62.073-12.852c37.043,5.557,50.205,20.327,50.205,20.327 s-52.066-37.653-137.599,20.301c87.081,48.075,30.416,117.125,108.267,151.459c1.091-0.149,32.916-79.909,99.481-85.375 c66.548,5.482,98.362,85.226,99.454,85.375c77.851-34.334,21.187-103.384,108.267-151.459 c-85.531-57.954-137.599-20.301-137.599-20.301s13.161-14.771,50.205-20.327c45.678-6.852,62.073,12.852,62.073,12.852 s14.815-23.075,2.511-68.922c-15.909-59.271,66.902-145.784,66.902-145.784S376.836,63.226,296.294,197.654 c0.307-10.404,1.226-30.15,4.147-54.352c4.005-33.19,12.359-51.842,12.359-51.842s7.236,4.774,13.588-2.483 c8.618-9.848-4.026-21.305-13.588-12.96c-10.959,9.564-23.563,75.061-24.065,135.197c-0.107,0.209-0.223,0.417-0.328,0.628 c-0.103-0.208-0.195-0.422-0.3-0.628c-0.503-60.137-13.106-125.633-24.065-135.197c-9.562-8.344-22.206,3.113-13.588,12.96 c6.351,7.257,13.588,2.483,13.588,2.483s8.354,18.652,12.36,51.842c2.921,24.201,3.84,43.947,4.147,54.352 C200.008,63.226,36.595,28.623,36.595,28.623z M97.358,75.226c0,0,49.19,11.829,100.327,49.877 c64.202,47.769,90.422,113.478,90.422,113.478l0.3-13.069l0.328,13.069c0,0,26.221-65.709,90.422-113.478 c51.137-38.048,100.327-49.877,100.327-49.877s-35.757,60.083-20.546,102.564c12.225,34.139-1.527,43.001-1.527,43.001 s-82.44-21.808-125.402,49.958c62.325-34.146,101.156-19.26,136.37-0.873c0,0-38.171,24.652-43.301,61.719 c-6.128,44.276-27.395,54.844-27.395,54.844s-29.165-35.653-53.86-46.767c-23.304-10.487-51.901-15.456-55.088-15.989v-0.109 c0,0-0.254,0.047-0.3,0.055c-0.053-0.009-0.328-0.055-0.328-0.055v0.109c-3.243,0.543-31.811,5.514-55.088,15.989 c-24.695,11.113-53.861,46.767-53.861,46.767s-21.266-10.567-27.394-54.844c-5.13-37.066-43.301-61.719-43.301-61.719 c35.214-18.387,74.045-33.273,136.371,0.873c-42.961-71.767-125.402-49.958-125.402-49.958s-13.752-8.862-1.528-43.001 C133.115,135.309,97.358,75.226,97.358,75.226z M273.947,209.496c21.57,41.128-2.811,74.215-2.811,74.215 s-3.711,36.089,16.971,109.249c20.683-73.16,16.999-109.249,16.999-109.249s-24.408-33.087-2.838-74.215l-14.161,12.469 L273.947,209.496z"/>
</svg>
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="max-width:300px;" viewBox="27.922 23.094 519 402"><path class="butterfly" fill="orange" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M36.595,28.623c0,0,82.812,86.513,66.903,145.784 c-12.306,45.847,2.51,68.922,2.51,68.922s16.396-19.703,62.073-12.852c37.043,5.557,50.205,20.327,50.205,20.327 s-52.066-37.653-137.599,20.301c87.081,48.075,30.416,117.125,108.267,151.459c1.091-0.149,32.916-79.909,99.481-85.375 c66.548,5.482,98.362,85.226,99.454,85.375c77.851-34.334,21.187-103.384,108.267-151.459 c-85.531-57.954-137.599-20.301-137.599-20.301s13.161-14.771,50.205-20.327c45.678-6.852,62.073,12.852,62.073,12.852 s14.815-23.075,2.511-68.922c-15.909-59.271,66.902-145.784,66.902-145.784S376.836,63.226,296.294,197.654 c0.307-10.404,1.226-30.15,4.147-54.352c4.005-33.19,12.359-51.842,12.359-51.842s7.236,4.774,13.588-2.483 c8.618-9.848-4.026-21.305-13.588-12.96c-10.959,9.564-23.563,75.061-24.065,135.197c-0.107,0.209-0.223,0.417-0.328,0.628 c-0.103-0.208-0.195-0.422-0.3-0.628c-0.503-60.137-13.106-125.633-24.065-135.197c-9.562-8.344-22.206,3.113-13.588,12.96 c6.351,7.257,13.588,2.483,13.588,2.483s8.354,18.652,12.36,51.842c2.921,24.201,3.84,43.947,4.147,54.352 C200.008,63.226,36.595,28.623,36.595,28.623z M97.358,75.226c0,0,49.19,11.829,100.327,49.877 c64.202,47.769,90.422,113.478,90.422,113.478l0.3-13.069l0.328,13.069c0,0,26.221-65.709,90.422-113.478 c51.137-38.048,100.327-49.877,100.327-49.877s-35.757,60.083-20.546,102.564c12.225,34.139-1.527,43.001-1.527,43.001 s-82.44-21.808-125.402,49.958c62.325-34.146,101.156-19.26,136.37-0.873c0,0-38.171,24.652-43.301,61.719 c-6.128,44.276-27.395,54.844-27.395,54.844s-29.165-35.653-53.86-46.767c-23.304-10.487-51.901-15.456-55.088-15.989v-0.109 c0,0-0.254,0.047-0.3,0.055c-0.053-0.009-0.328-0.055-0.328-0.055v0.109c-3.243,0.543-31.811,5.514-55.088,15.989 c-24.695,11.113-53.861,46.767-53.861,46.767s-21.266-10.567-27.394-54.844c-5.13-37.066-43.301-61.719-43.301-61.719 c35.214-18.387,74.045-33.273,136.371,0.873c-42.961-71.767-125.402-49.958-125.402-49.958s-13.752-8.862-1.528-43.001 C133.115,135.309,97.358,75.226,97.358,75.226z M273.947,209.496c21.57,41.128-2.811,74.215-2.811,74.215 s-3.711,36.089,16.971,109.249c20.683-73.16,16.999-109.249,16.999-109.249s-24.408-33.087-2.838-74.215l-14.161,12.469 L273.947,209.496z"/></svg>
</div>

<h3 id="support">Browser Support</h3>

<table class="browser-support">
<tr>
<td><span class="ie"></span></td>
<td><span class="firefox"></span></td>
<td><span class="opera"></span></td>
<td><span class="chrome"></span></td>
<td><span class="safari"></span></td>
</tr>
<tr>
<td><span class="yes"></span></td>
<td><span class="yes"></span></td>
<td><span class="yes"></span></td>
<td><span class="yes"></span></td>
<td><span class="yes"></span></td>
</tr>
</table>

<p><strong>Note</strong>: SVG is not supported in IE8 and its older versions. More about SVG browser support at <a href="http://caniuse.com/#search=svg" target="_blank">Can I use?</a></p>

<h3 id="resources">More Resources</h3>
<ul>
	<li><a href="http://www.w3.org/TR/SVG/shapes.html" target="_blank">Basic SVG Shapes</a></li>
	<li>Understanding SVG Path - <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths" target="_blank">MDN</a></li>
	<li>Resolution independence with SVG - <a href="http://coding.smashingmagazine.com/2012/01/16/resolution-independence-with-svg/" target="_blank">SmashingMagazine</a></li>
	<li>Using SVG - <a href="http://css-tricks.com/using-svg/" target="_blank">CSS-Tricks</a></li>
	<li>SVG animations, CSS animations and CSS transitions - <a href="http://blogs.adobe.com/webplatform/2012/03/30/svg-animations-css-animations-css-transitions/" target="_blank">Adobe Blog</a></li>
	<li>Exporting SVG for the Web using Adobe Illustrator - <a href="http://www.adobe.com/inspire/2013/09/exporting-svg-illustrator.html" target="_blank">Adobe.com</a></li>
	<li>Demo - Interactive SVG coordinate system - By <a href="http://sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html" target="_blank">Sara Soueidan</a></li>
</ul>