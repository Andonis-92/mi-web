/* USER SETTING */
var SOCIAL_LINKS = new Array(
  'https://www.instagram.com/brodwei_/?hl=es',
  'https://www.tiktok.com/@brodwei_',
  'https://twitter.com/brodwei_',
  'https://www.facebook.com/facebrodwei/',
  'https://www.youtube.com/channel/UCU_nCLG8XiIo9i_st8LZCJA',
  'https://open.spotify.com/artist/4Jf86IZAzXn1UDa7laE9yS',
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
);

var SOCIAL_ICONS = new Array(
  'instagram',
  'tiktok',
  'x-twitter',
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

var HOVER_EFFECT = 'jump';
var SHOW_TITLE = true;

/* LOAD FONT AWESOME 6 (CORRECTO) */
if (!document.querySelector('link[href*="font-awesome/6"]')) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/v4-shims.min.css";
  document.head.appendChild(link);
}

/* MAKE SOCIAL LIST */
var html = '';
for (var i = 0; i < SOCIAL_LINKS.length; i++) {
  var href = SOCIAL_LINKS[i];
  if (href && href.indexOf('http') === 0) {
    var title = SHOW_TITLE ? ' title="' + SOCIAL_ICONS[i] + '"' : '';
    html +=
      '<a href="' + href + '" target="_blank"' + title + '>' +
      '<i class="fa-brands fa-' + SOCIAL_ICONS[i] + '"></i>' +
      '</a>';
  }
}

if (html) {
  var hook = document.getElementById('abcd_141017_hook');
  hook.innerHTML = html;
  hook.className = HOVER_EFFECT;
}

