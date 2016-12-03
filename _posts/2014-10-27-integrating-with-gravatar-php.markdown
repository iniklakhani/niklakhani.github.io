---
layout: post
title:  "Integrating Gravatar with PHP"
date: 2014-10-27 20:54 +5:30
permalink: blog/:categories/:title/
featured: gravatar.png
is_post: true

excerpt: Integrating gravatar with PHP. Gravatar is an image that follows you from site to site
description: Integrating gravatar with PHP. Gravatar is an image that follows you from site to site appearing beside your name when you do things like ...
vertical: Tutorial
categories: tutorials
tags: ['Gravatar', 'PHP']
comments: true
---

<p><abbr title="Globally Recognized Avatar">Gravatar</abbr> is an image that follows you from site to site appearing beside your name when you do things like comment or post on a blog. Gravatar was started by Tom Preston-Werner but it is now owned by "Automattic" which is the company behind WordPress. Today, there are a many of people using this service. Because using it you can use the same avatar for different websites without even uploading an image to the website.</p>

<p>In simple word, <abbr title="Globally Recognized Avatar">Gravatar</abbr> is Awesome and integrating Gravatar with PHP is easy too.</p><!--more-->

<figure>
	<img src="/blog/uploads/2014/10/gravatar.png" alt="Gravatar" />
	<figcaption>Gravatar</figcaption>
</figure>

<p>We are gonna making a simple PHP application that load user avatar associated with email. It is pretty simple process to use Gravatar with PHP. So let's get start.</p>

{% highlight php %}
function get_avatar($email){
	$size = 164;
	$default = "/blog/images/logo.png";
	$avatar = "http://www.gravatar.com/avatar/" . md5( strtolower( trim( $email ) ) ) . "?d=" . urlencode( $default ) . "&s=" . $size;
	return $avatar;
}
{% endhighlight %}

<p>We can fetch avatar from Gravatar using above simple function which will call from <code><img></code> element. It convert each email into MD5 hash format so we need to use this hash to load image.</p>

{% highlight html %}
<form method="post" id="formarea">
	<input type="email" value="" placeholder="you@yourdomain.com" name="email" required>
	<input type="submit" value="Show">
</form>
{% endhighlight %}

<p>Finally we are going to display email associated avatar.</p>

{% highlight html %}
<img id="avatar" src="<?php if( isset($_POST['email']) ){echo get_avatar($_POST['email']); } ?>" alt="Avatar Couldn't Loaded.">
{% endhighlight %}