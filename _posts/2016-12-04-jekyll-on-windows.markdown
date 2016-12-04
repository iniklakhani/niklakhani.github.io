---
layout: post
title:  "Running Jekyll on Windows"
date: 2016-12-04 11:45 +5:30
permalink: blog/:categories/:title/
featured: jekyll.png
is_post: true

excerpt: Jekyll is a static site generator. It is used to transform your raw text files into complete, ready static website.
description: Jekyll on Windows..GitHub is a good choice for hosting your project's page, blog or even website..Jekyll on windows is not supported but there are..
vertical: Tutorial
categories: tutorials
tags: ['Jekyll', 'Windows', 'GitHub']
comments: true
---

<h2>What is Jekyll?</h2>

<p>
	<a href="//jekyllrb.com/">Jekyll</a> is a static site generator. It is used to transform your raw text files into complete, ready-to-launch static website. Jekyll is very popular blog-aware, static site generator. <a href="//github.com/">GitHub</a> is a good choice for hosting your project's page, blog or even website.
</p>

<figure>
  <img src="/blog/uploads/2016/12/jekyll.png" alt="Jekyll Logo" style="max-width: 400px">
  <figcaption>
    Jekyll
  </figcaption>
</figure>

<h2>Why Jekyll?</h2>

<p>
	I was tired of having my blog posts end up in a database off on a paid server. So there are some reasons why i've started using jekyll for my <a href="/">site</a> and <a href="/blog/">blog</a>.
</p>

<ol>
	<li>It's free.</li>
	<li>Hosting is also free on GitHub.</li>
	<li>Version Control on GitHub.</li>
	<li>Static pages, so obviously faster.</li>
</ol>

<h3>Installation on Windows</h3>

<p>
	Installing Jekyll on windows can be pain in the butt, because it's not officially supported by windows systems. According to official Jekyll website, <strong>"Windows is not an officially-supported platform, it can be used to run Jekyll with the proper tweaks."</strong>
</p>

<p>
	So In this article, i've tried to discover all those tweaks to run Jekyll on windows platform. For this installation you'll need some tools, first download those tools based on your system(either x64 or x86) and follow the installation procedure.
</p>

<ul>
	<li><a href="http://rubyinstaller.org/downloads/">Ruby Installer</a></li>
	<li><a href="http://rubyinstaller.org/downloads/">Ruby DevKit</a> (corresponds to your ruby version)</li>
</ul>

<h4>Ruby Installation</h4>

<p>
	Run the ruby installer and follow the installation instructions, but don't forgot to check the "Add Ruby executables to your PATH", because it'll add ruby executable path to your system's environment variables.
</p>

<figure>
	<img src="/blog/uploads/2016/12/ruby-installer.png" alt="Ruby Installer">
	<figcaption>Ruby Installation</figcaption>
</figure>

<p>
	And go further for installation by clicking in "Install" button.
</p>

<h4>Ruby DevKit Installation</h4>

<p>
	In order to make Jekyll works properly, you might need to install Ruby DevKit. It is a self exctracting archive, so extract it in your system. for example i've extracted it in <code>C:\RubyDevKit</code>.
</p>

<p>
	Now open up your windows command line tool and navigate to the folder where you've extracted Ruby DevKit.
</p>

<figure>
	<img src="/blog/uploads/2016/12/ruby-devkit.png" alt="Ruby DevKit">
	<figcaption>Ruby DevKit</figcaption>
</figure>

<p>
	You need to initialize Ruby DevKit configuration file for Ruby installations by performing the next command.
</p>

<figure class="highlight">
<pre>
<code data-lang="Windows Command">ruby dk.rb init</code>
</pre>
</figure>

<p>
	One more command is left for Ruby DevKit installation, that will bind Ruby DevKit to your Ruby Installation.
</p>

<figure class="highlight">
<pre>
<code data-lang="Windows Command">ruby dk.rb install</code>
</pre>
</figure>

<p>
	That's it for Ruby and Ruby DevKit. Now it's Jekyll time.
</p>

<h2>Installing Jekyll</h2>

<p>
	Jekyll is the software package of Ruby called Gem. To install Jekyll Gem and all its dependencies, enter the following command in your command line tool.
</p>

<figure class="highlight">
<pre>
<code data-lang="Windows Command">gem install jekyll</code>
</pre>
</figure>

<p>
	You'll see gems are automatically downloaded and installed. This might take a while depends on your internet connection and number of dependencies.
</p>

<h2>Create Jekyll Website</h2>

<p>
	Creating new site locally using Jekyll is pretty easy. Just open up your windows command line tool and hit the following command:
</p>

<figure class="highlight">
<pre>
<code data-lang="Windows Command">jekyll new [site-folder-name]</code>
</pre>
</figure>

<p>
	It'll create new folder at specified path with the name you've given in command. It contains many files and directories which are used to transform your raw text files into static website or blog.
</p>

<h2>Launching Your Site</h2>

<p>
	Finally you are at the end, you are going to launch your website locally by hitting the next and last command.
</p>

<figure class="highlight">
<pre>
<code data-lang="Windows Command">jekyll serve --watch</code>
</pre>
</figure>

<p>
	and your command line would be
</p>

<figure>
	<img src="/blog/uploads/2016/12/run-new-site.png" alt="Run New Site">
	<figcaption>Run and Watch</figcaption>
</figure>

<p>
	Open up your favorite browser and browse the URL <code>http://127.0.0.1/4000</code>. And your site is live on your local system. 
</p>

<figure>
	<img src="/blog/uploads/2016/12/jekyll-new-site.png" alt="Local Jekyll Site">
	<figcaption>New Jekyll Site</figcaption>
</figure>

<p>
	When you perform the last command, Jekyll will generate another folder with name <code>_site</code> in which contains your actual static site data that you see in your browser.
</p>

<h2>Wrap Up</h2>

<p>
	Finally you are done! You've now installed everything that need to run Jekyll on Windows. You can see your website locally, but you can deploy it on live web server so everybody can see it. GitHub is a free and great choice for hosting your Jekyll based websites. It also provides a version control feature for your repositories.
</p>

<h2>More Resource</h2>

<ul>
	<li><a href="https://jekyllrb.com/docs/windows/">Jekyll on Windows - Official Jekyll Site</a></li>
	<li><a href="http://jekyll-windows.juthilo.com/">Run Jekyll on Windows</a> by <a href="https://twitter.com/juthilo">@juthilo</a></li>
</ul>