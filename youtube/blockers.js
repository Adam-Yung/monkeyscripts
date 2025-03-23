(() => {
	if (location.pathname.startsWith("/shorts/")) return;
	let e, t, a, r, n, s, i;

	function o(e) {
    	let a = document.querySelector("video:not([vinegared])");
    	!a || a.paused || a.readyState < 4 ? setTimeout((() => {
        	o(e)
    	}), 100) : i || (i = e, "2160p" !== t && "best" !== t || !i.hd2160 ? "1440p" !== t && "best" !== t || !i.hd1440 ? "1080p" !== t && "best" !== t || !i.hd1080 ? "720p" !== t && "best" !== t || !i.hd720 ? "480p" !== t && "best" !== t || !i.large ? "360p" !== t && "best" !== t || !i.medium ? "240p" !== t && "best" !== t || !i.small ? "144p" !== t && "best" !== t || !i.tiny ? "audio" === t && i.audio ? d(a, i.audio.url) : d(a, i.auto.url) : d(a, i.tiny.url) : d(a, i.small.url) : d(a, i.medium.url) : d(a, i.large.url) : d(a, i.hd720.url) : d(a, i.hd1080.url) : d(a, i.hd1440.url) : d(a, i.hd2160.url))
	}

	function d(a, s) {
    	let o = a.cloneNode(!0);
    	a.replaceWith(o), l(o), o.src = s, o.load(), o.play(),
        	function(e) {
            	let t = c();
            	t > 0 && (e.currentTime = t)
        	}(o), o.setAttribute("vinegared", !0), E("\n  	(() => {\n    	let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n    	let video = document.querySelector('video[vinegared]');\n    	if (player && video) {\n      	player.addEventListener('resize', (e) => {\n        	video.style.width = e.width + 'px';\n        	video.style.height = e.height + 'px';\n      	});\n    	}\n  	})();\n  	"),
        	function(t) {
            	t.addEventListener("ended", (t => {
                	e && k()
            	}))
        	}(o),
        	function() {
            	let e = document.querySelector("#primary");
            	if (!e) return;
            	r || e.setAttribute("notoolbar", !0)
        	}(),
        	function(e) {
            	let a = document.createElement("div");
            	a.id = "vinegar-toolbar";
            	let r = document.createElement("div");
            	r.classList.add("left"), a.appendChild(r);
            	let n = document.createElement("div");
            	n.classList.add("right"), a.appendChild(n);
            	let s, o = p(r, "Quality", (t => {
                	t.stopPropagation(), t.preventDefault(), r.classList.add("hidden"), n.classList.add("hidden"),
                    	function(e, t) {
                        	i.auto && y(e, t, i.auto.url, "Auto", "auto");
                        	i.tiny && y(e, t, i.tiny.url, "144p", "144p");
                        	i.small && y(e, t, i.small.url, "240p", "240p");
                        	i.medium && y(e, t, i.medium.url, "360p", "360p");
                        	i.large && y(e, t, i.large.url, "480p", "480p");
                        	i.hd720 && y(e, t, i.hd720.url, "720p", "720p");
                        	i.hd1080 && y(e, t, i.hd1080.url, "1080p", "1080p");
                        	i.hd1440 && y(e, t, i.hd1440.url, "1440p", "1440p");
                        	i.hd2160 && y(e, t, i.hd2160.url, "2160p", "2160p");
                        	i.audio && y(e, t, i.audio.url, "Audio", "audio")
                    	}(e, a)
            	}));
            	o.textContent = `${t.charAt(0).toUpperCase()}${t.slice(1)}`, p(n, "Loop", (t => {
                	t.stopPropagation(), t.preventDefault();
                	let a = t.target;
                	e.loop ? (e.loop = !1, a.classList.remove("active")) : (e.loop = !0, a.classList.add("active"))
            	})), p(n, "Replay", (t => {
                	t.stopPropagation(), t.preventDefault(), e.currentTime = 0
            	})), p(n, "Theater", (e => {
                	e.stopPropagation(), e.preventDefault(), b()
            	})), e.addEventListener("mousemove", (e => {
                	clearTimeout(s), n.classList.add("showing"), n.classList.remove("removing"), s = setTimeout((() => {
                    	n.classList.add("removing")
                	}), 3e3)
            	})), e.addEventListener("mouseleave", (e => {
                	clearTimeout(s), s = setTimeout((() => {
                    	n.classList.remove("showing", "removing")
                	}), 100)
            	})), n.addEventListener("mouseenter", (e => {
                	clearTimeout(s), n.classList.add("showing"), n.classList.remove("removing")
            	})), n.addEventListener("mouseleave", (e => {
                	clearTimeout(s), s = setTimeout((() => {
                    	n.classList.remove("showing", "removing")
                	}), 100)
            	}));
            	let d = e.closest("div");
            	d.insertBefore(a, e)
        	}(o),
        	function(e) {
            	let t;
            	i.captions.forEach((t => {
                	let a = document.createElement("track");
                	a.label = t.name.runs[0].text, a.kind = "subtitles", a.srclang = t.languageCode, a.src = `${t.baseUrl}&fmt=vtt`, e.appendChild(a)
            	}));
            	let a = "system" === n ? navigator.language : n,
                	r = i.captions.filter((e => "en" === e.languageCode));
            	t = r.length > 0 ? r[0] : i.captions[0];
            	let s = document.createElement("track");
            	s.label = `Auto-translated (${u(a)})`, s.kind = "subtitles", s.srclang = a, u(t.languageCode) === u(a) ? s.src = `${t.baseUrl}&fmt=vtt` : s.src = `${t.baseUrl}&fmt=vtt&tlang=${a}`;
            	e.appendChild(s)
        	}(o), E("\n  	(() => {\n    	let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n    	if (player) {\n      	player.mute();\n      	player.pauseVideo();\n    	}\n  	})();\n  	"),
        	function(e) {
            	let t = 0;
            	e.addEventListener("timeupdate", (a => {
                	Math.abs(e.currentTime - t) < 10 || (t = e.currentTime, E(`\n    	(() => {\n      	let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n      	if (player) {\n        	player.seekTo(${t});\n        	player.pauseVideo();\n      	}\n    	})();\n    	`))
            	}))
        	}(o),
        	function(e) {
            	navigator.mediaSession.setActionHandler("play", (async () => {
                	await e.play()
            	})), navigator.mediaSession.setActionHandler("pause", (() => {
                	e.pause()
            	})), navigator.mediaSession.setActionHandler("seekbackward", (() => {
                	g(e, 10)
            	})), navigator.mediaSession.setActionHandler("seekforward", (() => {
                	f(e, 10)
            	})), navigator.mediaSession.setActionHandler("previoustrack", (() => {
                	E("\n  	(() => {\n    	let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n    	if (player) {\n      	player.previousVideo();\n    	}\n  	})();\n  	")
            	})), navigator.mediaSession.setActionHandler("nexttrack", (() => {
                	k()
            	}))
        	}(o)
	}

	function l(e) {
    	e.addEventListener("error", (r => {
        	a || e.src === i.auto.url ? function(e) {
            	e.remove(),
                	function() {
                    	let e = document.querySelector("#vinegar-toolbar .left .quality"),
                        	a = e.cloneNode(!0);
                    	e.replaceWith(a), a.textContent = `${t.charAt(0).toUpperCase()}${t.slice(1)} (Fallback)`, a.addEventListener("click", (e => {
                        	e.stopPropagation(), e.preventDefault(), alert("Vinegar had a problem with this video. It could be because of a codec that can’t be played or a video with DRM. To keep the video playing, Vinegar has switched to YouTube’s video stream. Please note that the viewing experience might be degraded.")
                    	}))
                	}(), E(`\n  	(() => {\n    	let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n    	if (player) {\n      	player.loadVideoById('${h()}', ${c()}, '${function(){switch(t){case"144p":return"tiny";case"240p":return"small";case"360p":return"medium";case"480p":return"large";case"720p":return"hd720";case"1080p":return"hd1080";case"1440p":return"hd1440";case"2160p":return"hd2160";default:return"auto"}}()}');\n      	player.unMute();\n\n      	function showControls() {\n        	let video = document.querySelector('video');\n        	if (video) {\n          	video.setAttribute('vinegar-fallback', true);\n          	video.setAttribute('vinegared', true);\n        	} else {\n          	setTimeout(() => {\n            	showControls();\n          	}, 1000);\n        	}\n      	}\n\n      	showControls();\n    	}\n  	})();\n  	`)
        	}(e) : (v(e, i.auto.url), l(e))
    	}), {
        	once: !0
    	})
	}

	function c() {
    	let e = location.search.match(/t=(.+?)(&|$)/);
    	if (e) {
        	let a = e[1],
            	r = a.match(/^(\d+h)?(\d+m)?(\d+s)?$/),
            	n = a.match(/^\d+$/);
        	if (r) {
            	var t = 0;
            	return r[1] && (t += 60 * parseInt(r[1]) * 60), r[2] && (t += 60 * parseInt(r[2])), r[3] && (t += parseInt(r[3])), t
        	}
        	return n ? parseInt(n[0]) : 0
    	}
    	return 0
	}

	function u(e) {
    	return e.startsWith("af") ? "Afrikaans" : e.startsWith("sq") ? "Albanian" : e.startsWith("am") ? "Amharic" : e.startsWith("ar") ? "Arabic" : e.startsWith("hy") ? "Armenian" : e.startsWith("az") ? "Azerbaijani" : e.startsWith("bn") ? "Bangla" : e.startsWith("eu") ? "Basque" : e.startsWith("be") ? "Belarusian" : e.startsWith("bs") ? "Bosnian" : e.startsWith("bg") ? "Bulgarian" : e.startsWith("my") ? "Burmese" : e.startsWith("ca") ? "Catalan" : e.startsWith("ceb") ? "Cebuano" : e.startsWith("zh") ? "Chinese" : e.startsWith("co") ? "Corsican" : e.startsWith("hr") ? "Croatian" : e.startsWith("cs") ? "Czech" : e.startsWith("da") ? "Danish" : e.startsWith("nl") ? "Dutch" : e.startsWith("en") ? "English" : e.startsWith("eo") ? "Esperanto" : e.startsWith("et") ? "Estonian" : e.startsWith("tl") || e.startsWith("fil") ? "Filipino" : e.startsWith("fi") ? "Finnish" : e.startsWith("fr") ? "French" : e.startsWith("gl") ? "Galician" : e.startsWith("ka") ? "Georgian" : e.startsWith("de") ? "German" : e.startsWith("el") ? "Greek" : e.startsWith("gu") ? "Gujarati" : e.startsWith("ht") ? "Haitian Creole" : e.startsWith("haw") ? "Hawaiian" : e.startsWith("ha") ? "Hausa" : e.startsWith("iw") || e.startsWith("he") ? "Hebrew" : e.startsWith("hi") ? "Hindi" : e.startsWith("hmn") ? "Hmong" : e.startsWith("hu") ? "Hungarian" : e.startsWith("is") ? "Icelandic" : e.startsWith("ig") ? "Igbo" : e.startsWith("id") ? "Indonesian" : e.startsWith("ga") ? "Irish" : e.startsWith("it") ? "Italian" : e.startsWith("jp") ? "Japanese" : e.startsWith("jv") ? "Javanese" : e.startsWith("kn") ? "Kannada" : e.startsWith("kk") ? "Kazakh" : e.startsWith("km") ? "Khmer" : e.startsWith("rw") ? "Kinyarwanda" : e.startsWith("ko") ? "Korean" : e.startsWith("ku") ? "Kurdish" : e.startsWith("ky") ? "Kyrgyz" : e.startsWith("lo") ? "Lao" : e.startsWith("la") ? "Latin" : e.startsWith("lv") ? "Latvian" : e.startsWith("lt") ? "Lithuanian" : e.startsWith("lb") ? "Luxembourgish" : e.startsWith("mk") ? "Macedonian" : e.startsWith("mg") ? "Malagasy" : e.startsWith("ms") ? "Malay" : e.startsWith("ml") ? "Malayalam" : e.startsWith("mt") ? "Maltese" : e.startsWith("mi") ? "Maori" : e.startsWith("mr") ? "Marathi" : e.startsWith("mn") ? "Mongolian" : e.startsWith("ne") ? "Nepali" : e.startsWith("nb") || e.startsWith("nn") || e.startsWith("no") ? "Norwegian" : e.startsWith("ny") ? "Nyanja" : e.startsWith("or") ? "Odia" : e.startsWith("ps") ? "Pashto" : e.startsWith("fa") ? "Persian" : e.startsWith("pl") ? "Polish" : e.startsWith("pt") ? "Portuguese" : e.startsWith("pa") ? "Punjabi" : e.startsWith("ro") ? "Romanian" : e.startsWith("ru") ? "Russian" : e.startsWith("sm") ? "Samoan" : e.startsWith("gd") ? "Scottish Gaelic" : e.startsWith("sr") ? "Serbian" : e.startsWith("sn") ? "Shona" : e.startsWith("sd") ? "Sindhi" : e.startsWith("si") ? "Sinhala" : e.startsWith("sk") ? "Slovak" : e.startsWith("sl") ? "Slovenian" : e.startsWith("so") ? "Somali" : e.startsWith("st") ? "Southern Sotho" : e.startsWith("es") ? "Spanish" : e.startsWith("su") ? "Sudanese" : e.startsWith("sw") ? "Swahili" : e.startsWith("sv") ? "Swedish" : e.startsWith("tg") ? "Tajik" : e.startsWith("ta") ? "Tamil" : e.startsWith("tt") ? "Tatar" : e.startsWith("te") ? "Telugu" : e.startsWith("th") ? "Thai" : e.startsWith("tr") ? "Turkish" : e.startsWith("tk") ? "Turkmen" : e.startsWith("uk") ? "Ukrainian" : e.startsWith("ur") ? "Urdu" : e.startsWith("ug") ? "Uyghur" : e.startsWith("uz") ? "Uzbek" : e.startsWith("vi") ? "Vietnamese" : e.startsWith("cy") ? "Welsh" : e.startsWith("fy") ? "Western Frisian" : e.startsWith("xh") ? "Xhosa" : e.startsWith("yi") ? "Yiddish" : e.startsWith("yo") ? "Yoruba" : e.startsWith("zu") ? "Zulu" : "System"
	}

	function h() {
    	if ("/watch" === location.pathname) {
        	let e = location.search.match(/v=(.+?)(&|%|$)/);
        	if (e) return e[1]
    	}
	}

	function m() {
    	if (s === location.href) return;
    	s = location.href, i = null,
        	function() {
            	let e = h();
            	e && safari.extension.dispatchMessage("youtube", {
                	videoId: e
            	})
        	}();
    	let e = document.querySelector("#vinegar-toolbar");
    	e && e.remove(), document.querySelectorAll("video[vinegared]").forEach((e => {
        	e.remove()
    	}))
	}

	function p(e, t, a) {
    	let r = document.createElement("a");
    	return r.classList.add("button", t.toLowerCase()), r.textContent = t, r.addEventListener("click", a), e.appendChild(r), r
	}

	function y(e, a, r, n, s) {
    	let i = document.createElement("a");
    	i.classList.add("button"), i.textContent = n, i.setAttribute("data-quality", s), t === s && i.classList.add("active"), i.addEventListener("click", (i => {
        	var o;
        	i.stopPropagation(), i.preventDefault(), t = o = s, safari.extension.dispatchMessage("updateQuality", {
            	quality: o
        	}), v(e, r), a.querySelectorAll("[data-quality]").forEach((e => {
            	e.remove()
        	})), a.querySelector(".quality").textContent = n, a.querySelector(".left").classList.remove("hidden"), a.querySelector(".right").classList.remove("hidden")
    	})), a.appendChild(i)
	}

	function v(e, t) {
    	let a = e.paused,
        	r = e.currentTime;
    	e.pause(), e.src = t, e.load(), e.addEventListener("canplay", (t => {
        	e.currentTime = r, a || e.play()
    	}), {
        	once: !0
    	})
	}

	function g(e, t) {
    	e.currentTime = Math.max(e.currentTime - t, 0)
	}

	function f(e, t) {
    	e.currentTime = Math.min(e.currentTime + t, e.duration)
	}

	function b() {
    	E("\n  	(() => {\n    	let hotkeys = document.querySelector('yt-Hotkey-Manager');\n    	hotkeys.toggleTheaterMode();\n  	})();\n  	")
	}

	function W(e, t) {
    	e.currentTime = e.duration * t / 100
	}

	function k() {
    	E("\n  	(() => {\n    	let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n    	if (player) {\n      	player.nextVideo();\n    	}\n  	})();\n  	")
	}

	function E(e) {
    	let t = document.createElement("script");
    	t.innerHTML = e, (document.head || document.documentElement).prepend(t), setTimeout((() => {
        	t.remove()
    	}), 100)
	}
	if (void 0 === window.injected && (window.injected = !0, E('\n  	(()=>{window.addEventListener("keydown",(e=>{if("INPUT"==e.target.tagName||"SELECT"==e.target.tagName||"TEXTAREA"==e.target.tagName||e.target.isContentEditable)return;if(e.altKey||e.ctrlKey||e.metaKey)return;let t=e.key.toLowerCase();"cfijklmt,. <0123456789>".includes(t)&&(e.stopImmediatePropagation()," "===t&&e.preventDefault())}),!0);let e=new MutationObserver((e=>{e.forEach((e=>{let t=e.target;t.controls||(t.controls=!0)}))}));function t(){let e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");0!==e.length&&e.forEach((e=>{if(e.parentNode&&e.parentNode.parentNode){let t=e.parentNode.parentNode;"YTD-RICH-ITEM-RENDERER"===t.tagName&&(t.style.display="none")}}))}function r(){if(!document.querySelector(".ad-showing"))return;let e=document.querySelectorAll("video:not([vinegared])");0!==e.length&&e.forEach((e=>{e.duration&&(e.currentTime=e.duration,setTimeout((()=>{let e=document.querySelector("button.ytp-ad-skip-button");e&&e.click()}),100))}))}function o(){let t=document.querySelector("video[vinegared]:not([vinegared-once])");if(!t)return;let r=t.closest("div");r&&r.setAttribute("vinegar-container",!0),t.controls=!0,t.hasAttribute("vinegar-fallback")&&e.observe(t,{attributes:!0,attributeFilter:["controls"]}),t.addEventListener("click",(e=>{e.stopPropagation()})),t.addEventListener("dblclick",(e=>{e.stopPropagation()})),t.addEventListener("contextmenu",(e=>{e.stopPropagation()})),t.setAttribute("vinegared-once",!0)}function n(){if(!document.querySelector("video[vinegared]"))return;let e=document.querySelectorAll("video:not([vinegared])");0!==e.length&&e.forEach((e=>{e.remove()}))}function a(){let t=document.querySelector("video:not([vinegared-once])");if(!t)return;let r=t.closest("div");r&&r.setAttribute("vinegar-container",!0),t.controls=!0,e.observe(t,{attributes:!0,attributeFilter:["controls"]}),t.addEventListener("contextmenu",(e=>{e.stopPropagation()})),t.addEventListener("play",(e=>{let t=document.querySelector(".ytp-chrome-top");t&&t.classList.remove("paused")})),t.addEventListener("pause",(e=>{let t=document.querySelector(".ytp-chrome-top");t&&t.classList.add("paused")})),t.addEventListener("ended",(e=>{t.removeAttribute("vinegared")})),t.setAttribute("vinegared",!0),t.setAttribute("vinegared-once",!0)}location.pathname.startsWith("/embed/")?a():location.pathname.startsWith("/shorts/")||(t(),r(),o(),n()),new MutationObserver((e=>{location.pathname.startsWith("/embed/")?a():location.pathname.startsWith("/shorts/")||(t(),r(),o(),n())})).observe(document.documentElement,{childList:!0,subtree:!0});let d=document.createElement("style");(document.head||document.documentElement).prepend(d);let i=d.sheet;i.insertRule(\'#__ffYoutube1,#__ffYoutube2,#__ffYoutube3,#__ffYoutube4,#feed-pyv-container,#feedmodule-PRO,#homepage-chrome-side-promo,#merch-shelf,#offer-module,#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"],#pla-shelf,#premium-yva,#promo-info,#promo-list,#promotion-shelf,#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer,#search-pva,#shelf-pyv-container,#video-masthead,#watch-branded-actions,#watch-buy-urls,#watch-channel-brand-div,#watch7-branded-banner,#YtKevlarVisibilityIdentifier,#YtSparklesVisibilityIdentifier,.carousel-offer-url-container,.companion-ad-container,.GoogleActiveViewElement,.list-view[style="margin: 7px 0pt;"],.promoted-sparkles-text-search-root-container,.promoted-videos,.searchView.list-view,.sparkles-light-cta,.watch-extra-info-column,.watch-extra-info-right,.ytd-carousel-ad-renderer,.ytd-compact-promoted-video-renderer,.ytd-companion-slot-renderer,.ytd-merch-shelf-renderer,.ytd-player-legacy-desktop-watch-ads-renderer,.ytd-promoted-sparkles-text-search-renderer,.ytd-promoted-video-renderer,.ytd-search-pyv-renderer,.ytd-video-masthead-ad-v3-renderer,.ytp-ad-action-interstitial-background-container,.ytp-ad-action-interstitial-slot,.ytp-ad-image-overlay,.ytp-ad-overlay-container,.ytp-ad-progress,.ytp-ad-progress-list,[class*="ytd-display-ad-"],[layout*="display-ad-"],a[href^="http://www.youtube.com/cthru?"],a[href^="https://www.youtube.com/cthru?"],ytd-action-companion-ad-renderer,ytd-banner-promo-renderer,ytd-compact-promoted-video-renderer,ytd-companion-slot-renderer,ytd-display-ad-renderer,ytd-promoted-sparkles-text-search-renderer,ytd-promoted-sparkles-web-renderer,ytd-search-pyv-renderer,ytd-single-option-survey-renderer,ytd-video-masthead-ad-advertiser-info-renderer,ytd-video-masthead-ad-v3-renderer,YTM-PROMOTED-VIDEO-RENDERER,.video-ads{display:none !important;}\',i.cssRules.length)})();\n  	'), safari.extension.dispatchMessage("refreshSettings"), safari.self.addEventListener("message", (s => {
        	if ("youtubeSuccess" === s.name) {
            	o(s.message.response)
        	} else if ("settings" === s.name) {
            	let i = s.message;
            	e = i.autoplay, t = i.quality, a = i.fallback, r = i.showToolbar, n = i.subtitles
        	}
    	}))), void 0 === window.mutationObserved) {
    	window.mutationObserved = !0, new MutationObserver((e => {
        	m()
    	})).observe(document.documentElement, {
        	childList: !0,
        	subtree: !0
    	}), document.addEventListener("keyup", (e => {
        	if ("INPUT" == e.target.tagName || "SELECT" == e.target.tagName || "TEXTAREA" == e.target.tagName || e.target.isContentEditable) return;
        	let t = document.querySelector("video[vinegared]");
        	if (t && !(e.altKey || e.ctrlKey || e.metaKey)) switch (e.key.toLowerCase()) {
            	case "c":
                	! function(e) {
                    	let t, a;
                    	Array.from(e.textTracks).forEach((e => {
                        	"showing" === e.mode && (t = e), e.label.startsWith("Auto-translated") && (a = e)
                    	})), t ? t.mode = "disabled" : a.mode = "showing"
                	}(t);
                	break;
            	case "i":
                	! function(e) {
                    	document.pictureInPictureElement ? document.exitPictureInPicture() : document.pictureInPictureEnabled && e.requestPictureInPicture()
                	}(t);
                	break;
            	case "f":
                	! function(e) {
                    	document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : e.requestFullscreen()
                	}(t);
                	break;
            	case "j":
                	g(t, 10);
                	break;
            	case "l":
                	f(t, 10);
                	break;
            	case "arrowleft":
                	g(t, 5);
                	break;
            	case "arrowright":
                	f(t, 5);
                	break;
            	case ",":
                	t.paused && g(t, 1 / 60);
                	break;
            	case ".":
                	t.paused && f(t, 1 / 60);
                	break;
            	case "k":
            	case " ":
                	! function(e) {
                    	e.paused ? (async () => {
                        	try {
                            	await e.play()
                        	} catch (e) {}
                    	})() : e.pause()
                	}(t);
                	break;
            	case "m":
                	! function(e) {
                    	e.muted = !e.muted
                	}(t);
                	break;
            	case "t":
                	b();
                	break;
            	case "0":
                	W(t, 0);
                	break;
            	case "1":
                	W(t, 10);
                	break;
            	case "2":
                	W(t, 20);
                	break;
            	case "3":
                	W(t, 30);
                	break;
            	case "4":
                	W(t, 40);
                	break;
            	case "5":
                	W(t, 50);
                	break;
            	case "6":
                	W(t, 60);
                	break;
            	case "7":
                	W(t, 70);
                	break;
            	case "8":
                	W(t, 80);
                	break;
            	case "9":
                	W(t, 90);
                	break;
            	case "<":
                	! function(e) {
                    	e.playbackRate = Math.max(e.playbackRate - .25, .25)
                	}(t);
                	break;
            	case ">":
                	! function(e) {
                    	e.playbackRate = Math.min(e.playbackRate + .25, 2)
                	}(t)
        	}
    	}))
	}
})();
