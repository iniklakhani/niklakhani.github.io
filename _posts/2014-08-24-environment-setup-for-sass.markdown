---
layout: post
title:  "Environment Setup for Sass"
date: 2014-08-24 21:25 +5:30
permalink: blog/:categories/:title/
featured: sass.png
is_post: true

excerpt: Sass is a CSS pre-processor that helps you to write more smart and dynamic code. It comes in two syntax
description: Environment Setup for Sass...Sass is a CSS pre-processor that helps you to write more smart and dynamic code. It comes in two syntax .scss and .sass...
vertical: Tutorial
categories: tutorials
tags: ['Environment', 'Install', 'Sass', 'Setup']
comments: true
---

<p>Sass is a <abbr title="Cascading Style Sheets">CSS</abbr> pre-processor that helps you to write more smart and dynamic code. It comes in two syntax: <code>.scss</code> and <code>.sass</code> as i say in previous <a href="/blog/articles/introduction-to-sass" title="Introduction to Sass">article</a>.</p>

<p>There are so many application that allows you to running up Sass in few minutes on cross platform and some of them are listed below.</p>

<figure>
	<img src="/blog/uploads/2014/08/sass.png" alt="Sass" />
	<figcaption>Sass</figcaption>
</figure>

<ul>
	<li><a href="http://incident57.com/codekit/" title="CodeKit" target="_blank">CodeKit</a> (Mac)</li>
	<li><a href="http://compass.handlino.com/" title="Compass.app" target="_blank">Compass.app</a> (Windows, Linux, Mac)</li>
	<li><a href="http://koala-app.com/" title="Koala" target="_blank">Koala</a> (Windows, Linux, Mac)</li>
</ul>

<p>And many more. BTW, i am not using any of them because i like to compile Sass via Command line.</p>

<h4>Installing Sass on Windows</h4>

<p>To running up Sass on windows, you will need to install Ruby. Pick the latest version of <a href="http://rubyinstaller.org/downloads/" title="Download Ruby" target="_blank">Ruby</a> and install it.</p>

<p>While running the installation, there is a check box option called <strong>Add Ruby executables to your PATH</strong>.</p>

<p>This is option is unchecked by default, you need to check this option. This will set up an environment variable to be linked to the Ruby installation for your command prompt.</p>

<p>If you forgot to check that box than perform the following step.</p>

<ol>
	<li>Right Click on My Computer > Properties > Advanced Options > Environment Variables</li>
	<li>Look for <strong>path</strong> and put in the path of the ruby bin installed, here my ruby path is : C:Ruby200bin;</li>
</ol>

<figure>
	<img src="/blog/uploads/2014/08/environment-setup-for-sass.png" alt="Environment Setup for Sass" />
	<figcaption>Environment Setup for Sass</figcaption>
</figure>

<p>Once you have done ruby installation then go forward to Sass and Compass installation.</p>

<p>Perform the following command in Command prompt:</p>

{% highlight rb %}
gem install sass compass
{% endhighlight %}

<p>The above command will install Sass and Compass, it may take some time to install necessary files.</p>

<p>You should now have Sass and Compass installed, but it never hurts to double-check. So, check in your Command prompt.</p>

{% highlight rb %}
sass -v
{% endhighlight %}

{% highlight rb %}
compass -v
{% endhighlight %}

<p>You should return the detail about Sass and Compass version number. Now you have successfully installed <a href="/blog/articles/introduction-to-sass" title="Introduction to Sass" target="_blank">Sass</a>.</p>

<h4>Installing Sass on Linux and OS X</h4>

<p>To install Sass and Compass both on linux/OS X platform, you will first need to install ruby and ruby gems packages.</p>

<p>You can install ruby on various linux or on OS X platform by following this <a href="https://www.ruby-lang.org/en/installation/" title="Installing Ruby" target="_blank">article</a>. And then again perform this command in your terminal.</p>

{% highlight rb %}
sudo gem install sass compass
{% endhighlight %}

<p>Oh Yeah, that was the final step, now you have installed Sass and Compass both on your system. So, Now are ready to become expert in Sass.</p>

<p>If you are very new beginners in Sass than check out <a href="http://css-tricks.com/video-screencasts/88-intro-to-compass-sass/" title="Introduction to Sass and Compass" target="_blank">CSS-Tricks' Screencast</a>.</p>
