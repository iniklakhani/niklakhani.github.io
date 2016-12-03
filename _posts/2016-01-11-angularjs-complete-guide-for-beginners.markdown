---
layout: post
title:  "AngularJS: A Complete Guide for Beginners"
date: 2016-01-11 17:49 +05:30
permalink: blog/:categories/:title/
featured: AngularJS-Framework.png
is_post: true

excerpt: AngularJs is a front-end Javascript framework that helps you to build single page web applications.
description: AngularJS. It&#039;s one of the hot and trending Javascript framework. Before getting started, you should at least know bit about Javascript.
vertical: Tutorial
categories: tutorials
tags: ['Angular', 'AngularJS', 'JS']
comments: true
---

### What is AngularJS?

AngularJs is a front-end Javascript framework that helps you to build single page web applications. It is an MV*-style javascript framework mainly maintained by Google. It can be a lot of pain in the butt when it comes to make a functional front-end but AngularJS eases this pain. It is purely front-end, hence, your server only needs to be able to ship out JSON. It provides some great features like data binding and dependency injection, filtering, expressions, HTTP requests and many more. It's one of the hot and trending Javascript framework. Before getting started, you should at least know bit about Javascript.

<figure>
	<img src="/blog/uploads/2016/01/AngularJS-Framework.png" alt="AngularJS"/>
	<figcaption>AngularJS</figcaption>
</figure>

Without further ado, let's dive deep in it!

### Embedding AngularJS in Your Application

Since, It is Javascript framework, you can embed like your simple Javascipt file.

{% highlight javascript %}
<script src="angular.min.js">
</script>
{% endhighlight %}

### Bootstrapping The App

To bootstrap any Angular app, we need to use <code>ng-app</code> directive to any HTML element, that defines an AngularJS application. The <code>ng-app</code> directive represents the root of the Angular app and this can be used only once per HTML page. The <code>ng-app</code> directive marks the DOM element that contains the AngularJS application. For example,

{% highlight html %}
<html ng-app="app">
</html>
{% endhighlight %}

### AngularJS: The Simple App

Here is a simple and neat example made with AngularJS which shows the <strong>model</strong>, <strong>view</strong> and <strong>controller</strong>.

{% highlight html %}
<html>
<head>
	<script src="angular.min.js"></script>
</head>
<body ng-app="myApp">
	<div ng-controller="myController" >
		<h1>Hello {% raw %}{{ name }}!{% endraw %}</h1>
	</div>
</body>

<script>
	// Declaring an App
	var app = angular.module("myApp", []);

	// Creating controller
	app.controller("myController", function( $scope ){
		$scope.name = "Nikul";
	});
</script>
</html>
{% endhighlight %}

The <code>ng-model</code> directive binds the value of the input field to an application variable "name".

The <strong>view</strong> simply creates a place holder where a corresponding HTML can be placed. In the above example "view" is this:

{% highlight html %}
<div ng-controller="myController" >
	<h1>Hello {% raw %}{{ name }}!{% endraw %}</h1>
</div>
{% endhighlight %}

<h6>Preview</h6>

<div class="preview">
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script><div ng-app="myApp" ng-controller="myController" > <h4 class="nomargin">Hello {% raw %}{{ name }}!{% endraw %}</h4></div><script>var app=angular.module("myApp", []);app.controller("myController", function( $scope ){$scope.name="Nikul";});</script>
</div>

The <code>ng-controller</code> control the data of AngularJS app. These are actually Javascript objects. The <code>ng-controller</code> tells AngularJS what controller to use with this <strong>view</strong>. Here we've declared "myController" using <code>ng-controller</code> directive. So in this example, we've defined the "myController" as follows -

{% highlight javascript %}
var app = angular.module("myApp", []);
app.controller("myController", function( $scope ){
  $scope.name = "Nikul"; // default initialization
});
{% endhighlight %}

<strong>$scope</strong> refers to an application which is to use "myController" object.

<strong>$scope.name</strong> is property of  "myController" object.

We can also defined the controller object in discrete Javascipt file and embed that file in an HTML page.

### Data binding

A data binding can be specified in two different ways:

<ul>
  <li>With double curly braces: {% raw %}{{ expression }}{% endraw %}</li>
  <li>With <code>ng-bind</code> directive: <code>ng-bind="varName"</code></li>
</ul>

<p>AngularJS provides two types of data binding:</p>

<ul>
	<li><a href="#one-time">One-Time Data-Binding</a></li>
	<li><a href="#two-way">Two-Way Data-Binding</a></li>
</ul>

<h6 id="one-time">One-Time Data-Binding</h6>

<p>First of all, note that this is one-time data-binding NOT one-way. We are saying one-time data binding because the model values are automatically assigned to the <strong>view</strong> only once.</p>

<strong>For example:</strong>

{% highlight html %}
<div ng-app="" ng-init="firstName = 'John'; lastName = 'Doe';">
  <p><strong>First name:</strong> {% raw %}{{ firstname }}{% endraw %}</p>
  <p><strong>Last name:</strong> {% raw %}{{ lastName }}{% endraw %}</p>
</div>
{% endhighlight %}

<h6 id="two-way">Two-Way Data-Binding</h6>

<p>Two-way data binding allows you to take the value of a property on your scope and display it on your <strong>view</strong>. For example, updating particular element's value based on text input without any shitty logic.</p>

<p>So how does one use this?</p>

{% highlight html %}
<div ng-app="myApp" ng-controller="myController">
  <input type="text" ng-model="name">
  <p>{% raw %}{{ name }}{% endraw %}</p>
</div>
{% endhighlight %}

{% highlight javascript %}
var app = angular.module("myApp", []);
app.controller("myController", function( $scope ){
  $scope.name = "Nikul"; // default initialization
});
{% endhighlight %}

<h3>Working with JSON, ng-repeat And ng-filter</h3>

<p>As we know about arrays in Javascript, one more complicated dataset can be written as an objects. For example,</p>

{% highlight javascript %}
app.controller("myController", function( $scope ) {
  $scope.names = [
    {
      name: 'Jani',
      country: 'Norway'
    },
    {
      name:'Hege',
      country:'Sweden'
    },
    {
      name:'Kai',
      country:'Denmark'
    }
  ];
})
{% endhighlight %}

<p>So here, we've three records with two fields(name, country)	which are stored in "names" property of <strong>$scope</strong> variable. There can be any kind of data like <strong>string</strong>, <strong>number</strong>, <strong>boolean</strong> etc.</p>

<p>The value of an arrays, dataset can be extracted through the loop. Similarly AngularJS provides <strong>ng-repeat</strong> directive to loop through the data in HTML. Let's see the magic of <strong>ng-repeat</strong>!</p>

{% highlight html %}
<ul>
  <li ng-repeat="x in names">
    {% raw %}{{ x.name }} is from {{ x.country }}{% endraw %}
  </li>
</ul>
{% endhighlight %}

<p>Angular has a capability to filter the data. It has many built in filters that we can apply to our data. For example, here, we've try to transform all character to uppercase.</p>

{% highlight html %}
<ul>
  <li ng-repeat="x in names">
    {% raw %}{{ x.name | uppercase }} is from {{ x.country | uppercase }}{% endraw %}
  </li>
</ul>
{% endhighlight %}

<h3>ng-show / ng-hide</h3>

<p>We can hide and show elements conditionally in DOM. AngularJS provides us the <code>ng-show</code> and <code>ng-hide</code> directives. Actually, these both directives will work by changing display style(CSS property) of DOM element. Let's have a look!</p>

{% highlight html %}
<div ng-app="">
  <fieldset>
    <p>
      <label>Show: <input type="checkbox" ng-model="showMe" /></label>
    </p>

    <fieldset ng-show="showMe">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, hic.
    </fieldset>
  </fieldset>

  <fieldset>
    
    <p>
      <label>Hide: <input type="checkbox" ng-model="hideMe" /></label>
    </p>

    <fieldset ng-hide="hideMe">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, officiis!
    </fieldset>
  </fieldset>
</div>
{% endhighlight %}

<p>When we click on "showMe" checkbox it evaluates to true and hence Angular tells first box to show by evaluating <code>ng-show="showMe"</code> and same will be done with second checkbox and box.</p>

<h3>ng-class</h3>
<p>The <code>ng-class</code> directive allow us to add one or more class to an element dynamically. It can be supported by all HTML elements. <code>ng-repeat</code> directive can also add more than one class based on expression just like below -</p>

{% highlight html %}
<div ng-class="{class1 : expression1, class2 : expression2}">
  Lorem ipsum dolor sit amet, consectetur adipisicing.
</div>
{% endhighlight %}

<h2>Wrap Up!</h2>

<p>And that's it! In this article, I tried to discover a lot of basic of AngularJS that should be enough for every newbies. If it's not enough than don't worry because there are some links that will probably helpful to you.</p>

<ul>
	<li>A great introduction on <a href="http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro" target="_blank">Codeschool(free)</a></li>
	<li><a href="http://srikarg.github.io/blog/learning-angularjs/" target="_blank">AngularJS for Beginners </a>by Srikar Gudipati</li>
	<li>Absolute Beginner's Resource on <a href="http://www.w3schools.com/angular/" target="_blank">W3Schools.com</a></li>
</ul>