/*USER SETTING*/
var SOCIAL_LINKS = new Array(
/*instagram*/'https://www.instagram.com/brodwei_/?hl=es',/*instagram*/
/*tiktok*/'https://www.tiktok.com/@brodwei_',/*tiktok*/
/*twitter*/'https://twitter.com/brodwei_',/*twitter*/
/*facebook*/'https://www.facebook.com/facebrodwei/',/*facebook*/
/*youtube*/'https://www.youtube.com/channel/UCU_nCLG8XiIo9i_st8LZCJA',/*youtube*/
/*spotify*/'https://open.spotify.com/artist/4Jf86IZAzXn1UDa7laE9yS',/*spotify*/
/*google-plus*/'',/*google*/
/*behance*/'',/*behance*/
/*linkedin*/'',/*linkedin*/
/*codepen*/'',/*codepen*/
/*delicious*/'',/*delicious*/
/*deviantart*/'',/*deviantart*/
/*dribbble*/'',/*dribbble*/
/*dropbox*/'',/*dropbox*/
/*drupal*/'',/*drupal*/
/*flickr*/'',/*flickr*/
/*foursquare*/'',/*foursquare*/
/*github*/'',/*github*/
/*joomla*/'',/*joomla*/
/*lastfm*/'',/*lastfm*/
/*pinterest*/'',/*pinterest*/
/*reddit*/'',/*reddit*/
/*skype*/'',/*skype*/
/*slideshare*/'',/*slideshare*/
/*soundcloud*/'',/*soundcloud*/
/*stack-exchange*/'',/*stack-exchange*/
/*stack-overflow*/'',/*stack-overflow*/
/*steam*/'',/*steam*/
/*tumblr*/'',/*tumblr*/
/*twitch*/'',/*twitch*/
/*wordpress*/'',/*wordpress*/
/*yelp*/''/*yelp*/
);
var SOCIAL_ICONS = new Array(
'instagram',
'tiktok',
'twitter',
'facebook',
'youtube',
'spotify',
'google-plus',
'behance',
'linkedin',
'codepen',
'delicious',
'deviantart',
'dribbble',
'dropbox',
'drupal',
'flickr',
'foursquare',
'github',
'joomla',
'lastfm',
'pinterest',
'reddit',
'skype',
'slideshare',
'soundcloud',
'stack-exchange',
'stack-overflow',
'steam',
'tumblr',
'twitch',
'wordpress',
'yelp'
);
// spin, jump, zoom, opacity, leave blank for none effect
var HOVER_EFFECT = 'jump';/*HOVER_EFFECT*/
var SHOW_TITLE = true;/*SHOW_TITLE*/

// load font awesome
var ss = document.getElementsByTagName('link');
for (var i = 0, max = ss.length; i < max; i++) {
	var href = ss[i].getAttribute('href');
	if (href && href != null && href.indexOf("font-awesome") != -1) {
        break;
	}
}
if (i >= ss.length) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
	document.getElementsByTagName("head")[0].appendChild(link);	
}

// make social list
var html = '';
for (var i = 0; i < SOCIAL_LINKS.length; i++) {
	var href = SOCIAL_LINKS[i];
	var title = '';
	if (SHOW_TITLE) {
		title = ' title="'+SOCIAL_ICONS[i]+'" ';
	}
	if (href && href.indexOf('://') != -1 && href.indexOf('http') != -1 && href.indexOf('.') != -1) {
		html += '<a href="'+href+'" target="_blank"'+title+'><i class="fa fa-'+SOCIAL_ICONS[i]+'"></i></a>';
	}
}
if (html) {
	hook = document.getElementById('bcd_141017_hook');
	hook.innerHTML = html;
	hook.removeAttribute('style');
	hook.setAttribute('class', HOVER_EFFECT);
}