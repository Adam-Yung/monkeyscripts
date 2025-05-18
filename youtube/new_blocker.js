(async () => {
    if (location.pathname.startsWith("/shorts/"))
        return;
    let t,
        e,
        a,
        n,
        r,
        i,
        o,
        s,
        l = !1;
    function d(t) {
        let a = document.querySelector("video");
        if (!a || a.paused || a.readyState < 4)
            return void setTimeout((() => {
                d(t)
            }), 100);
        if (s)
            return;
        if (t.videoId !== i)
            return;
        s = t;
        let o = document.querySelector("button.ytp-unmute:not([style])");
        o && o.click(),
        "2160p" !== e && "best" !== e || !s.hd2160 ? "1440p" !== e && "best" !== e || !s.hd1440 ? "1080p" !== e && "best" !== e || !s.hd1080 ? "720p" !== e && "best" !== e || !s.hd720 ? "480p" !== e && "best" !== e || !s.large ? "360p" !== e && "best" !== e || !s.medium ? "240p" !== e && "best" !== e || !s.small ? "144p" !== e && "best" !== e || !s.tiny ? "audio" === e && s.audio ? u(a, s.audio.url, "Audio") : s.auto && r ? u(a, s.auto.url, "Auto") : c("Auto") : u(a, s.tiny.url, "best" === e ? "Best" : "144p") : u(a, s.small.url, "best" === e ? "Best" : "240p") : u(a, s.medium.url, "best" === e ? "Best" : "360p") : u(a, s.large.url, "best" === e ? "Best" : "480p") : u(a, s.hd720.url, "best" === e ? "Best" : "720p") : u(a, s.hd1080.url, "best" === e ? "Best" : "1080p") : u(a, s.hd1440.url, "best" === e ? "Best" : "1440p") : u(a, s.hd2160.url, "best" === e ? "Best" : "2160p"),
        function() {
            if (E || !s)
                return;
            let t = document.querySelector("video");
            if (!t)
                return;
            let e,
                a = t.querySelectorAll("track");
            if (a.length > 0 || !s.captions)
                return void (E = !0);
            s.captions.forEach((e => {
                let a = document.createElement("track");
                a.label = e.name.runs[0].text,
                a.kind = "subtitles",
                a.srclang = e.languageCode,
                a.src = `${C(e.baseUrl)}&fmt=vtt`,
                t.appendChild(a)
            }));
            let r = "system" === n ? navigator.language : n,
                i = s.captions.filter((t => "en" === t.languageCode));
            e = i.length > 0 ? i[0] : s.captions[0];
            let o = document.createElement("track");
            o.label = `Auto-translated (${f(r)})`,
            o.kind = "subtitles",
            o.srclang = r,
            f(e.languageCode) === f(r) ? o.src = `${C(e.baseUrl)}&fmt=vtt` : o.src = `${C(e.baseUrl)}&fmt=vtt&tlang=${r}`;
            t.appendChild(o),
            E = !0
        }(),
        l = !0
    }
    function u(t, e, a) {
        t.src = e,
        t.load(),
        t.play(),
        c(a)
    }
    function c(t) {
        let e = document.querySelector(".player-placeholder:empty");
        if (e) {
            let a = e.shadowRoot;
            a || (W = !1, w = !1, T(), L(), a = e.shadowRoot),
            a.querySelector("#vinegar-toolbar .quality").textContent = t
        }
    }
    function h(t, e) {
        let a = !1,
            n = !1,
            r = [];
        for (let i of t)
            if (n)
                n = !1,
                r.push(i);
            else if (i.startsWith("#EXTM3U") || i.startsWith("#EXT-X-INDEPENDENT-SEGMENTS"))
                r.push(i);
            else if (i.startsWith("#EXT-X-MEDIA") && i.includes("TYPE=AUDIO") && !i.includes("dubbed-auto"))
                r.push(i);
            else if (void 0 === e && i.includes("RESOLUTION=") || i.includes(`RESOLUTION=${e}x`)) {
                let t = i.split("SUBTITLES="),
                    e = t[0];
                n = !0,
                a = !0,
                t.length > 1 ? r.push(`${e}CLOSED-CAPTIONS=NONE`) : r.push(e)
            }
        if (a) {
            let t = r.join("\n");
            return `data:application/vnd.apple.mpegURL;base64,${btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, ((t, e) => String.fromCharCode("0x" + e))))}`
        }
        return !1
    }
    function p(t) {
        console.log("handleExtensionError", t),
        document.querySelector("yt-player-error-message-renderer") || function(t) {
            t.src = "",
            function(t, e) {
                let a = document.querySelector(".player-placeholder:empty");
                if (a) {
                    let n = a.shadowRoot;
                    n || (W = !1, w = !1, T(), L(), n = a.shadowRoot);
                    let r = n.querySelector("#vinegar-toolbar .quality");
                    if (!r)
                        return;
                    let i = r.cloneNode(!0);
                    r.replaceWith(i),
                    i.textContent = t,
                    i.addEventListener("click", (t => {
                        t.stopPropagation(),
                        t.preventDefault(),
                        alert(e)
                    }))
                }
            }("Vinegar Off", "YouTube returned an error instead of a valid video stream, so Vinegar has temporarily turned itself off to protect your account. This is to ensure your account remains safe and avoids any potential issues. If you have the option to change your IP address (such as turning off iCloud Private Relay or using Cloudflare WARP), you can try that to see if it resolves the issue. Thank you for your understanding and patience.");
            let e = document.createElement("script");
            e.innerHTML = `\n    (() => {\n      let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n      if (player) {\n        player.loadVideoById('${i}');\n      }\n    })();\n    `,
            (document.head || document.documentElement).prepend(e),
            setTimeout((() => {
                e.remove()
            }), 100)
        }(document.querySelector("video"))
    }
    if (void 0 === window.injected) {
        window.injected = !0;
        let t = document.createElement("script");
        t.innerHTML = '\n    (()=>{document.addEventListener("visibilitychange",(e=>{e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault()}));let e=new MutationObserver((e=>{e.forEach((e=>{let t=e.target;t.controls||(t.controls=!0)}))}));function t(e,n,o){for(let r in e)e.hasOwnProperty(r)&&(r===n?e[r]=o:"object"==typeof e[r]&&t(e[r],n,o))}function n(e,n){let o=JSON.parse;JSON.parse=(...r)=>{let a=o.apply(this,r);return t(a,e,n),a};let r=Response.prototype.json;Response.prototype.json=new Proxy(r,{apply(...o){let a=Reflect.apply(r,o[1],o[2]);return new Promise(((o,r)=>{a.then((r=>{t(r,e,n),o(r)})).catch((e=>r(e)))}))}})}n("playerAds",[]),n("adPlacements",[]),n("adSlots",[]);let o=HTMLMediaElement.prototype,r=Object.getOwnPropertyDescriptor(o,"muted");Object.defineProperty(o,"muted",{get:function(){return r.get.call(this)},set:function(e){}});let a=0;function i(){let e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");0!==e.length&&e.forEach((e=>{if(e.parentNode&&e.parentNode.parentNode){let t=e.parentNode.parentNode;"YTD-RICH-ITEM-RENDERER"===t.tagName&&(t.style.display="none")}}))}function l(){if(!document.querySelector(".ad-showing"))return;let t=document.querySelectorAll("video");0!==t.length&&t.forEach((t=>{t.duration&&(t.controls=!1,e.disconnect(),t.currentTime=t.duration,setTimeout((()=>{let n=document.querySelector("button.ytp-ad-skip-button, button.ytp-ad-skip-button-modern");n&&(n.click(),function(e){let t=11*Math.random()+30,n=new Touch({identifier:Date.now(),target:e,clientX:300+Math.floor(51*Math.random()),clientY:200+Math.floor(31*Math.random()),radiusX:t,radiusY:t,rotationAngle:0,force:1}),o=new TouchEvent("touchstart",{bubbles:!0,cancelable:!0,view:window,touches:[n],targetTouches:[n],changedTouches:[n]});e.dispatchEvent(o);let r=new TouchEvent("touchend",{bubbles:!0,cancelable:!0,view:window,touches:[],targetTouches:[],changedTouches:[n]});e.dispatchEvent(r)}(n)),t.controls=!0,e.observe(t,{attributes:!0,attributeFilter:["controls"]})}),100))}))}function c(){let t=document.querySelector("video:not([vinegared-once])");if(!t)return;let n=t.closest("div");n&&n.setAttribute("vinegar-container",!0),"true"===document.body.getAttribute("has-pivot-bar")&&!t.muted&&r.set.call(t,!0),t.controls=!0,e.observe(t,{attributes:!0,attributeFilter:["controls"]}),t.addEventListener("contextmenu",(e=>{e.stopPropagation()})),t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",(e=>{e.stopImmediatePropagation(),e.stopPropagation()}),!0),t.addEventListener("webkitplaybacktargetavailabilitychanged",(e=>{e.stopImmediatePropagation(),e.stopPropagation()}),!0),t.addEventListener("ended",(e=>{t.removeAttribute("vinegared")})),t.addEventListener("touchstart",(e=>{let n=(new Date).getTime();if(t.lastTap&&n-t.lastTap<=300)return e.preventDefault(),t.lastTap=null,void function(e,t,n){let o=e.touches[0],r=o.target,a=r.offsetWidth;o.clientX-r.getBoundingClientRect().left<a/2?t():n()}(e,(()=>{t.currentTime=Math.max(t.currentTime-10,0)}),(()=>{t.currentTime=Math.min(t.currentTime+10,t.duration)}));t.lastTap=n})),t.addEventListener("touchmove",(e=>{t.lastTap=null})),t.addEventListener("touchcancel",(e=>{t.lastTap=null})),t.addEventListener("ratechange",(e=>{if(Date.now()-a<=100)return;let n=document.getElementById("movie_player")||document.getElementsByClassName("html5-video-player")[0];n&&t.playbackRate<=2&&n.setPlaybackRate(t.playbackRate),a=Date.now()})),t.setAttribute("vinegared",!0),t.setAttribute("vinegared-once",!0)}let s=HTMLVideoElement.prototype.addEventListener;HTMLVideoElement.prototype.addEventListener=function(...e){["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"].includes(e[0])||s.apply(this,e)};HTMLVideoElement.prototype.removeChild;HTMLVideoElement.prototype.removeChild=function(...e){},location.pathname.startsWith("/shorts/")||(i(),l(),c()),new MutationObserver((e=>{location.pathname.startsWith("/shorts/")||(i(),l(),c())})).observe(document.documentElement,{childList:!0,subtree:!0})})();\n    ',
        (document.head || document.documentElement).prepend(t),
        setTimeout((() => {
            t.remove()
        }), 1e3)
    }
    let m = await browser.storage.sync.get(["autoplay", "quality", "showToolbar", "subtitles", "ignoreDubs"]);
    function f(t) {
        return t.startsWith("af") ? "Afrikaans" : t.startsWith("sq") ? "Albanian" : t.startsWith("am") ? "Amharic" : t.startsWith("ar") ? "Arabic" : t.startsWith("hy") ? "Armenian" : t.startsWith("az") ? "Azerbaijani" : t.startsWith("bn") ? "Bangla" : t.startsWith("eu") ? "Basque" : t.startsWith("be") ? "Belarusian" : t.startsWith("bs") ? "Bosnian" : t.startsWith("bg") ? "Bulgarian" : t.startsWith("my") ? "Burmese" : t.startsWith("ca") ? "Catalan" : t.startsWith("ceb") ? "Cebuano" : t.startsWith("zh") ? "Chinese" : t.startsWith("co") ? "Corsican" : t.startsWith("hr") ? "Croatian" : t.startsWith("cs") ? "Czech" : t.startsWith("da") ? "Danish" : t.startsWith("nl") ? "Dutch" : t.startsWith("en") ? "English" : t.startsWith("eo") ? "Esperanto" : t.startsWith("et") ? "Estonian" : t.startsWith("tl") || t.startsWith("fil") ? "Filipino" : t.startsWith("fi") ? "Finnish" : t.startsWith("fr") ? "French" : t.startsWith("gl") ? "Galician" : t.startsWith("ka") ? "Georgian" : t.startsWith("de") ? "German" : t.startsWith("el") ? "Greek" : t.startsWith("gu") ? "Gujarati" : t.startsWith("ht") ? "Haitian Creole" : t.startsWith("haw") ? "Hawaiian" : t.startsWith("ha") ? "Hausa" : t.startsWith("iw") || t.startsWith("he") ? "Hebrew" : t.startsWith("hi") ? "Hindi" : t.startsWith("hmn") ? "Hmong" : t.startsWith("hu") ? "Hungarian" : t.startsWith("is") ? "Icelandic" : t.startsWith("ig") ? "Igbo" : t.startsWith("id") ? "Indonesian" : t.startsWith("ga") ? "Irish" : t.startsWith("it") ? "Italian" : t.startsWith("jp") ? "Japanese" : t.startsWith("jv") ? "Javanese" : t.startsWith("kn") ? "Kannada" : t.startsWith("kk") ? "Kazakh" : t.startsWith("km") ? "Khmer" : t.startsWith("rw") ? "Kinyarwanda" : t.startsWith("ko") ? "Korean" : t.startsWith("ku") ? "Kurdish" : t.startsWith("ky") ? "Kyrgyz" : t.startsWith("lo") ? "Lao" : t.startsWith("la") ? "Latin" : t.startsWith("lv") ? "Latvian" : t.startsWith("lt") ? "Lithuanian" : t.startsWith("lb") ? "Luxembourgish" : t.startsWith("mk") ? "Macedonian" : t.startsWith("mg") ? "Malagasy" : t.startsWith("ms") ? "Malay" : t.startsWith("ml") ? "Malayalam" : t.startsWith("mt") ? "Maltese" : t.startsWith("mi") ? "Maori" : t.startsWith("mr") ? "Marathi" : t.startsWith("mn") ? "Mongolian" : t.startsWith("ne") ? "Nepali" : t.startsWith("nb") || t.startsWith("nn") || t.startsWith("no") ? "Norwegian" : t.startsWith("ny") ? "Nyanja" : t.startsWith("or") ? "Odia" : t.startsWith("ps") ? "Pashto" : t.startsWith("fa") ? "Persian" : t.startsWith("pl") ? "Polish" : t.startsWith("pt") ? "Portuguese" : t.startsWith("pa") ? "Punjabi" : t.startsWith("ro") ? "Romanian" : t.startsWith("ru") ? "Russian" : t.startsWith("sm") ? "Samoan" : t.startsWith("gd") ? "Scottish Gaelic" : t.startsWith("sr") ? "Serbian" : t.startsWith("sn") ? "Shona" : t.startsWith("sd") ? "Sindhi" : t.startsWith("si") ? "Sinhala" : t.startsWith("sk") ? "Slovak" : t.startsWith("sl") ? "Slovenian" : t.startsWith("so") ? "Somali" : t.startsWith("st") ? "Southern Sotho" : t.startsWith("es") ? "Spanish" : t.startsWith("su") ? "Sudanese" : t.startsWith("sw") ? "Swahili" : t.startsWith("sv") ? "Swedish" : t.startsWith("tg") ? "Tajik" : t.startsWith("ta") ? "Tamil" : t.startsWith("tt") ? "Tatar" : t.startsWith("te") ? "Telugu" : t.startsWith("th") ? "Thai" : t.startsWith("tr") ? "Turkish" : t.startsWith("tk") ? "Turkmen" : t.startsWith("uk") ? "Ukrainian" : t.startsWith("ur") ? "Urdu" : t.startsWith("ug") ? "Uyghur" : t.startsWith("uz") ? "Uzbek" : t.startsWith("vi") ? "Vietnamese" : t.startsWith("cy") ? "Welsh" : t.startsWith("fy") ? "Western Frisian" : t.startsWith("xh") ? "Xhosa" : t.startsWith("yi") ? "Yiddish" : t.startsWith("yo") ? "Yoruba" : t.startsWith("zu") ? "Zulu" : "System"
    }
    async function b() {
        try {
            if (i = function() {
                if ("/watch" === location.pathname) {
                    let t = o.match(/v=(.+?)(&|%|$)/);
                    if (t)
                        return t[1]
                }
            }(), !i)
                return;
            let t = {
                    context: {
                        client: {
                            clientName: "IOS",
                            clientVersion: "19.45.4",
                            deviceMake: "Apple",
                            deviceModel: "iPhone16,2",
                            userAgent: "com.google.ios.youtube/19.45.4 (iPhone16,2; U; CPU iOS 18_1_0 like Mac OS X;)",
                            osName: "iPhone",
                            osVersion: "18.1.0.22B83",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0
                        }
                    }
                },
                e = "https://www.youtube.com/youtubei/v1/player?prettyPrint=false",
                a = await fetch(e, {
                    method: "POST",
                    body: JSON.stringify(t)
                }),
                n = await a.json(),
                r = n.responseContext.visitorData;
            if (t = function(t, e) {
                return {
                    context: {
                        client: {
                            clientName: "IOS",
                            clientVersion: "19.45.4",
                            deviceMake: "Apple",
                            deviceModel: "iPhone16,2",
                            userAgent: "com.google.ios.youtube/19.45.4 (iPhone16,2; U; CPU iOS 18_1_0 like Mac OS X;)",
                            osName: "iPhone",
                            osVersion: "18.1.0.22B83",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0,
                            visitorData: e
                        }
                    },
                    videoId: t,
                    playbackContext: {
                        contentPlaybackContext: {
                            html5Preference: "HTML5_PREF_WANTS"
                        }
                    },
                    contentCheckOk: !0,
                    racyCheckOk: !0
                }
            }(i, r), a = await fetch(e, {
                method: "POST",
                body: JSON.stringify(t)
            }), n = await a.json(), "OK"===n.playabilityStatus?.status) {
                let t = await fetch(n.streamingData.hlsManifestUrl);
                !function(t, e, a) {
                    let n = e.split("\n"),
                        r = {
                            videoId: a
                        },
                        i = [{
                            label: "hd2160",
                            width: "3840"
                        }, {
                            label: "hd1440",
                            width: "2560"
                        }, {
                            label: "hd1080",
                            width: "1920"
                        }, {
                            label: "hd720",
                            width: "1280"
                        }, {
                            label: "large",
                            width: "854"
                        }, {
                            label: "medium",
                            width: "640"
                        }, {
                            label: "small",
                            width: "426"
                        }, {
                            label: "tiny",
                            width: "256"
                        }];
                    for (let t of i) {
                        let e = h(n, t.width);
                        e && (r[t.label] = {
                            url: e
                        })
                    }
                    let o = function(t) {
                        let e;
                        for (let a of t)
                            if (a.startsWith("#EXT-X-MEDIA") && a.includes("TYPE=AUDIO") && !a.includes("dubbed-auto")) {
                                let t = a.match(/URI="(.+?)"/);
                                t && (e = t[1])
                            }
                        return e
                    }(n);
                    o && (r.audio = {
                        url: o
                    }),
                    r.auto = {
                        url: h(n)
                    },
                    r.captions=t.captions?.playerCaptionsTracklistRenderer?.captionTracks,
                    d(r)
                }(n, await t.text(), i)
            } else
                p("Unable to find playable video stream.")
        } catch (t) {
            p(t.message)
        }
    }
    function y() {
        return document.querySelector('link[rel="canonical"]').getAttribute("href")
    }
    t = void 0 !== m.autoplay && m.autoplay,
    e = m.quality || "auto",
    a = void 0 === m.showToolbar || m.showToolbar,
    n = m.subtitles || "system",
    r = void 0 !== m.ignoreDubs && m.ignoreDubs;
    let g = !1,
        v = !1,
        W = !1,
        w = !1,
        E = !1;
    function T() {
        if (W)
            return;
        let t,
            e = document.querySelector(".player-placeholder:empty");
        if (!e)
            return;
        for (t = e.shadowRoot ? e.shadowRoot : e.attachShadow({
            mode: "open"
        }); t.firstChild;)
            t.firstChild.remove();
        let a = document.createElement("style");
        a.textContent = "\n      #vinegar-toolbar {\n        all: initial !important;\n        position: fixed !important;\n        top: 48px !important;\n        left: env(safe-area-inset-left) !important;\n        height: 43px !important;\n        width: calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right)) !important;\n        padding: 6px !important;\n        font-size: 0 !important;\n        text-align: center !important;\n        background: #000 !important;\n        white-space: nowrap !important;\n        box-sizing: border-box !important;\n        overflow: auto !important;\n        -webkit-user-select: none !important;\n        z-index: 3 !important;\n      }\n\n      #vinegar-toolbar.hidden {\n        display: none !important;\n      }\n\n      #vinegar-toolbar .left {\n        all: initial !important;\n        position: absolute !important;\n        top: 6px !important;\n        left: 6px !important;\n      }\n\n      #vinegar-toolbar .right {\n        all: initial !important;\n        position: absolute !important;\n        top: 6px !important;\n        right: 6px !important;\n      }\n\n      #vinegar-toolbar .left.hidden,\n      #vinegar-toolbar .right.hidden {\n        display: none !important;\n      }\n\n      #vinegar-toolbar .button {\n        all: initial !important;\n        display: inline-block !important;\n        height: 31px !important;\n        padding: 0 16px !important;\n        font-size: 12px !important;\n        line-height: 31px !important;\n        font-weight: 400 !important;\n        font-family: ui-sans-serif, sans-serif !important;\n        color: rgba(255, 255, 255, 0.55) !important;\n        text-decoration: none !important;\n        background: #242424 !important;\n        cursor: pointer !important;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n        -webkit-user-select: none !important;\n      }\n\n      #vinegar-toolbar .button:first-of-type {\n        border-top-left-radius: 8px !important;\n        border-bottom-left-radius: 8px !important;\n      }\n\n      #vinegar-toolbar .button:last-of-type {\n        border-top-right-radius: 8px !important;\n        border-bottom-right-radius: 8px !important;\n      }\n\n      #vinegar-toolbar .button.active {\n        color: rgba(255, 255, 255, 0.847) !important;\n        background: #3d3d3d !important;\n      }\n    ",
        t.appendChild(a),
        W = !0
    }
    function S(t, e, a) {
        let n = document.createElement("a");
        return n.classList.add("button", e.toLowerCase()), n.textContent = e, n.addEventListener("click", a), n.addEventListener("touchstart", (t => {
            t.stopPropagation()
        })), n.addEventListener("touchend", (t => {
            t.stopPropagation()
        })), t.appendChild(n), n
    }
    function k(t, a, n, r, i) {
        let o = document.createElement("a");
        o.classList.add("button"),
        o.textContent = r,
        o.setAttribute("data-quality", i),
        e === i && o.classList.add("active"),
        o.addEventListener("click", (o => {
            var s;
            o.stopPropagation(),
            o.preventDefault(),
            e = s = i,
            browser.storage.sync.set({
                quality: s
            });
            let l = t.paused,
                d = t.currentTime;
            t.pause(),
            t.src = n,
            t.load(),
            t.addEventListener("canplay", (e => {
                t.currentTime = d,
                l || t.play()
            }), {
                once: !0
            }),
            a.querySelectorAll("[data-quality]").forEach((t => {
                t.remove()
            })),
            a.querySelector(".quality").textContent = r,
            a.querySelector(".left").classList.remove("hidden"),
            a.querySelector(".right").classList.remove("hidden")
        })),
        o.addEventListener("touchstart", (t => {
            t.stopPropagation()
        })),
        o.addEventListener("touchend", (t => {
            t.stopPropagation()
        })),
        a.appendChild(o)
    }
    function L() {
        if (w || !W || !e)
            return;
        let t = document.createElement("div");
        t.id = "vinegar-toolbar",
        t.dir = "ltr",
        a || t.classList.add("hidden");
        let n = document.createElement("div");
        n.classList.add("left"),
        t.appendChild(n);
        let r = document.createElement("div");
        r.classList.add("right"),
        t.appendChild(r);
        let i = S(n, "Quality", (e => {
            if (e.stopPropagation(), e.preventDefault(), !l)
                return;
            let a = document.querySelector("video");
            !s || a.readyState < 4 || (n.classList.add("hidden"), r.classList.add("hidden"), function(t, e) {
                s.auto && k(t, e, s.auto.url, "Auto", "auto"),
                s.tiny && k(t, e, s.tiny.url, "144p", "144p"),
                s.small && k(t, e, s.small.url, "240p", "240p"),
                s.medium && k(t, e, s.medium.url, "360p", "360p"),
                s.large && k(t, e, s.large.url, "480p", "480p"),
                s.hd720 && k(t, e, s.hd720.url, "720p", "720p"),
                s.hd1080 && k(t, e, s.hd1080.url, "1080p", "1080p"),
                s.hd1440 && k(t, e, s.hd1440.url, "1440p", "1440p"),
                s.hd2160 && k(t, e, s.hd2160.url, "2160p", "2160p"),
                s.audio && k(t, e, s.audio.url, "Audio", "audio")
            }(a, t))
        }));
        i.textContent = "Loading…",
        S(r, "Loop", (t => {
            t.stopPropagation(),
            t.preventDefault();
            let e = document.querySelector("video"),
                a = t.target;
            e.loop ? (e.loop = !1, a.classList.remove("active")) : (e.loop = !0, a.classList.add("active"))
        })),
        S(r, "Replay", (t => {
            t.stopPropagation(),
            t.preventDefault(),
            document.querySelector("video").currentTime = 0
        }));
        let o = document.querySelector(".player-placeholder:empty");
        if (o) {
            let e = o.shadowRoot;
            e && e.appendChild(t)
        }
        w = !0
    }
    function C(t) {
        return o.startsWith("https://m.youtube.com") ? t.replace(/www\.youtube\.com/, "m.youtube.com") : t
    }
    if (void 0 === window.mutationObserved) {
        window.mutationObserved = !0,
        window.addEventListener("click", (t => {
            if (t.metaKey)
                return;
            let e = t.composedPath();
            for (let a of e)
                if (1 === a.nodeType && "A" === a.nodeName && a.hasAttribute("href")) {
                    if (a.isContentEditable)
                        return;
                    new URL(a.href).pathname.startsWith("/shorts") && (t.stopImmediatePropagation(), t.preventDefault(), location.href = a.href)
                }
        }), !0),
        new MutationObserver((e => {
            !function() {
                if (o !== y()) {
                    if (o = y(), s = null, b(), l = !1, g = !1, v = !1, w = !1, E = !1, W) {
                        W = !1;
                        let t = document.querySelector(".player-placeholder:empty");
                        if (t) {
                            let e = t.shadowRoot;
                            if (e)
                                for (; e.firstChild;)
                                    e.firstChild.remove()
                        }
                    }
                    document.querySelectorAll("video track").forEach((t => {
                        t.remove()
                    })),
                    document.querySelectorAll("[vinegared]").forEach((t => {
                        t.removeAttribute("vinegared")
                    }))
                }
            }(),
            g || (setTimeout((() => {
                let e = document.querySelector(".ytm-autonav-toggle-button-container");
                if (!e)
                    return;
                let a = e.getAttribute("aria-pressed");
                t && "false" === a && e.click(),
                t || "true" !== a || e.click()
            }), 5e3), g = !0),
            v || (a || location.pathname.startsWith("/shorts/") ? browser.runtime.sendMessage({
                message: "inject"
            }) : document.querySelector("#player").setAttribute("notoolbar", !0), v = !0),
            T(),
            L()
        })).observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }),
        document.addEventListener("keydown", (t => {
            if ("KeyC" === t.code && !t.metaKey) {
                let t,
                    e,
                    a = document.querySelector("video");
                if (!a)
                    return;
                if ("INPUT" === document.activeElement.tagName || "TEXTAREA" === document.activeElement.tagName || "true" === document.activeElement.getAttribute("contenteditable"))
                    return;
                Array.from(a.textTracks).forEach((a => {
                    "showing" === a.mode && (t = a),
                    a.label.startsWith("Auto-translated") && (e = a)
                })),
                t ? t.mode = "disabled" : e.mode = "showing"
            }
        }))
    }
})();

