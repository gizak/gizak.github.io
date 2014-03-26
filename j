#!/usr/bin/perl

use threads; 

$_ = shift @ARGV;

(sub {
	my $th = threads->create(sub {
		sleep(2);
		system('open -a "/Applications/Safari.app" "http://localhost:4000"')
	})->detach();

	system('cd ~/GDrive/projects/HTML5/gizakego.github.io/_blogsrc ; jekyll serve --draft --baseurl=""');
})->() if $_ eq 'pre';


system('cd ~/GDrive/projects/HTML5/gizakego.github.io/_blogsrc ; jekyll build') if $_ eq 'gen';
