---
layout: post
title:  "Custom Wordpress Login Page Without Plugins"
date: 2014-05-24 18:57 +5:30
permalink: blog/:categories/:title/
featured: custom-wordpress-login.png
is_post: true

excerpt: Wordpress login is well designed but what, if you want to use your own brand logo or whatever like custom design and UI.
description: custom wordpress login page without plugins Wordpress login is well designed but what, if you want to use your own brand logo or whatever like custom...
vertical: Tutorial
categories: tutorials
tags: ['Custom', 'WordPress', 'Login']
comments: true
---

<p>Wordpress login is well designed but what, if you want to use your own brand logo or whatever like custom design and UI. So, it's very simple, There are lots of wordpress plugins that allows you to change default logo, URL, and design as well. But some people likes to play with code and me too.</p>

<p>In this article, i am gonna show to custom wordpress login page without plugins. This will be done in following simple steps.</p>

<ol>
  <li>Changing default logo</li>
  <li>Change logo link</li>
  <li>Changing title of logo link</li>
  <li>Setting up CSS</li>
  <li>Replacing CSS</li>
</ol>

<figure>
	<img src="/blog/uploads/2014/05/custom-wordpress-login.png" alt="Custom WordPress Login" />
	<figcaption>Custom WordPress Login</figcaption>
</figure>

<h2>1. Changing default logo</h2>

<p>The logo is most important part of your brand. Here is a small snippet that will allows you to replace default wordpress logo from your login screen. All you have to do is copy this code into your <code>functions.php</code> file and change the image to the image you want to use and it's done.</p>

{% highlight php %}
<?php function niklakhani_login_logo() { ?>
    <style type="text/css">
        body.login h1 a {
            background: url(<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png) no-repeat;
            background-size: 200px;
            height: 200px;
            width: 200px;
        }
    </style>
<?php } ?> 
<?php add_action( 'login_enqueue_scripts', 'niklakhani_login_logo' ); ?>
{% endhighlight %}

<h2>2. Change Logo Link</h2>

<p>The default logo link will point to the <a href="http://wordpress.org" target="_blank">http://wordpress.org</a> website, you can change this and point it to your own website site by placing following snippet into your <code>functions.php</code>.</p>

{% highlight php %}
function niklakhani_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'niklakhani_login_logo_url' );
{% endhighlight %}

<h2>3. Change title of logo link</h2>

<p>The default title of wordpress logo link is "Powered by Wordpress" and we can change it by placing following code in <code>functions.php</code>.

{% highlight php %}
function niklakhani_logo_url_title() {
    return "Nikul Lakhani's Blog"; // Replace it with your own.
}
add_filter( 'login_headertitle', 'niklakhani_logo_url_title' );
{% endhighlight %}

<h2>4. Setting up CSS</h2>

<p>To be able to modify the style and color of the login screen, we need to create a new stylesheet that we will add to the login page, using a custom function, and then we add it to the login page, using <code>add_action()</code> WordPress function.</p>

<p>Now create new file in your theme folder called <code>login.css</code></p>

<p>After creating the css file place following code into your <code>functions.php</code></p>

{% highlight php %}
function niklakhani_login_css() { ?>
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/login.css'; ?>" media="all" />
<?php } ?>
add_action( 'login_enqueue_scripts', 'niklakhani_login_css' );
{% endhighlight %}

<h2>5. Replacing CSS</h2>

<p>After you are done with this, open the newly created stylesheet <code>login.css</code> and copy and paste the following code into it.</p>

{% highlight css %}
html{
  background: #13202c; 
}
body.login{
  background: #13202c;
  height: 100%;
}
#login{
  padding-top: 2%;
}
#login form{
  background: #edeff1;
}
#login input[type='text'], #login input[type='password']{
  border: 2px solid #bdc3c7;
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #34495e;
  font-size: 15px;
  height: 42px;
  line-height: 1.467;
  padding: 8px 12px;
  position: relative;
  -webkit-transition: border .25s linear, color .25s linear, background-color .25s linear;
  transition: border .25s linear, color .25s linear, background-color .25s linear;
  z-index: 9998;
}
#login input[type='text']:focus, #login input[type='password']:focus{
  border-color: #1abc9c;
}
#login input[type='submit']{
  border: none;
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #1abc9c;
  color: #ffffff;
  display: block;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.4;
  height: auto !important;
  width: 100%;
  margin-top: 15px;
  padding: 10px 0 !important;
  -webkit-transition: border .25s linear, color .25s linear, background-color .25s linear;
  transition: border .25s linear, color .25s linear, background-color .25s linear;
}
#login input[type='submit']:hover{
  background: #48c9b0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#login input[type='submit']:active, #login input[type='submit']:focus{
  background: #1abc9c;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#login h1 a{
  -moz-transition: all .7s ease;
  -webkit-transition: all .7s ease;
  transition: all .7s ease;
  position: relative;
}
#login h1:hover a{
  -moz-transform: rotateY(360deg);
  -webkit-transform: rotateY(360deg);
  transform: rotateY(360deg);
}
#login #backtoblog a, #login #nav a{
  -moz-transition: all .3s ease;
  -o-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  border-bottom-color: #fff;
}
#login #backtoblog a:active,#login #backtoblog a:focus,#login #backtoblog a:hover,#login #nav a:active,#login #nav a:focus,#login #nav a:hover,.terms-link:active,.terms-link:focus,.terms-link:hover{
  border-bottom: 1px solid transparent;
  color: #1abc9c;
  padding-bottom: 4px;
}
#login .message{
  border-left: 4px solid #1abc9c;
  background-color: #edeff1;
  box-shadow: none;
  color: #777;
}
#login #login_error{
  border-left: 4px solid #e74c3c;
  background-color: #edeff1;
  box-shadow: none;
  color: #777;
}
{% endhighlight %}