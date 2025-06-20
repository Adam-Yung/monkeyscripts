(() => {
    if (location.pathname.startsWith("/shorts/"))
        return;
    let e,
        t,
        a,
        n,
        i = !1,
        r = "auto",
        s = !1,
        o = !0,
        l = "system",
        d = {},
        u = 0;
    function c(t) {
        let i = document.querySelector("video.video-stream:not([vinegared])");
        if (!i || i.closest("#video-preview") || parseInt(i.style.top) < 0)
            return void setTimeout((() => {
                c(t)
            }), 50);
        if (Number.isFinite(i.duration)) {
            if (i.readyState < 3)
                return void i.addEventListener("canplay", (e => {
                    c(t)
                }), {
                    once: !0
                })
        } else if (Number.isNaN(i.duration))
            return void i.addEventListener("durationchange", (e => {
                c(t)
            }), {
                once: !0
            });
        if (n)
            return;
        n = t;
        let o = i.cloneNode(!0);
        i.replaceWith(o),
        s ? function(t) {
            e = new Hls,
            function(t) {
                e.on(Hls.Events.ERROR, ((a, n) => {
                    if (n.fatal)
                        if (console.log("handleUnplayableAdvancedStreams", n), n.type === Hls.ErrorTypes.MEDIA_ERROR)
                            e.recoverMediaError();
                        else
                            e.destroy(),
                            f(t);
                    else
                        n.type === Hls.ErrorTypes.NETWORK_ERROR && n.details === Hls.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && ++u >= 3 && (e.destroy(), f(t))
                }))
            }(t),
            e.loadSource(n.streamingData.hlsManifestUrl);
            let a = {
                "2160p": 3840,
                "1440p": 2560,
                "1080p": 1920,
                "720p": 1280,
                "480p": 854,
                "360p": 640,
                "240p": 426,
                "144p": 256
            };
            e.once(Hls.Events.MANIFEST_LOADED, (() => {
                let n = e.audioTracks.find((e => !e.name.endsWith("dubbed-auto")));
                if (e.audioTracks.length > 1) {
                    let t = "system" === l ? navigator.language : l;
                    for (var i = 0; i < e.audioTracks.length; i++) {
                        let a = e.audioTracks[i];
                        if (!a.name.endsWith("dubbed-auto") && t.startsWith(a.lang)) {
                            n = a,
                            e.audioTrack = a.id;
                            break
                        }
                    }
                }
                if ("best" === r)
                    e.currentLevel = e.levels.length - 1;
                else if ("audio" === r)
                    e.loadSource(n.url);
                else
                    for (i = e.levels.length - 1; i >= 0; i--)
                        if (e.levels[i].width === a[r]) {
                            e.currentLevel = i;
                            break
                        }
                e.attachMedia(t),
                p(t)
            }))
        }(o) : function(e) {
            let t = !1,
                n = a.split("\n");
            d.auto = h(n);
            let i = [{
                quality: "1080p",
                resolution: "1920"
            }, {
                quality: "720p",
                resolution: "1280"
            }, {
                quality: "480p",
                resolution: "854"
            }, {
                quality: "360p",
                resolution: "640"
            }, {
                quality: "240p",
                resolution: "426"
            }, {
                quality: "144p",
                resolution: "256"
            }];
            for (let a of i) {
                let i = h(n, a.resolution);
                i && (d[a.quality] = i, r !== a.quality && "best" !== r || t || (e.src = i, t = !0))
            }
            let s = function(e) {
                let t;
                for (let a of e)
                    if (a.startsWith("#EXT-X-MEDIA") && a.includes("TYPE=AUDIO") && !a.includes("dubbed-auto")) {
                        let e = a.match(/URI="(.+?)"/);
                        e && (t = e[1])
                    }
                return t
            }(n);
            s && (d.audio = s, "audio" !== r || t || (e.src = s, t = !0));
            t || (e.src = d.auto, t = !0);
            e.load(),
            p(e)
        }(o)
    }
    function h(e, t) {
        let a = !1,
            n = !1,
            i = [];
        for (let r of e)
            if (n)
                n = !1,
                i.push(r);
            else if (r.startsWith("#EXTM3U") || r.startsWith("#EXT-X-INDEPENDENT-SEGMENTS"))
                i.push(r);
            else if (r.startsWith("#EXT-X-MEDIA") && r.includes("TYPE=AUDIO") && !r.includes("dubbed-auto"))
                i.push(r);
            else if (void 0 === t && r.includes("RESOLUTION=") || r.includes(`RESOLUTION=${t}x`)) {
                let e = r.split("SUBTITLES="),
                    t = e[0];
                n = !0,
                a = !0,
                e.length > 1 ? i.push(`${t}CLOSED-CAPTIONS=NONE`) : i.push(t)
            }
        if (a) {
            let e = i.join("\n");
            return `data:application/vnd.apple.mpegURL;base64,${btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode("0x" + t))))}`
        }
        return !1
    }
    function m(e) {
        if (console.log("handleExtensionError", e), document.querySelector("yt-player-error-message-renderer"))
            return;
        let t = document.querySelector("video");
        E(),
        P(t),
        f(t)
    }
    function p(t) {
        t.play(),
        function(e) {
            let t = y(location);
            t >= 0 && (e.currentTime = t)
        }(t),
        t.setAttribute("vinegared", !0),
        R("\n      (() => {\n        let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n        let video = document.querySelector('video[vinegared]');\n        if (player && video) {\n          player.addEventListener('resize', (e) => {\n            video.style.width = e.width + 'px';\n            video.style.height = e.height + 'px';\n          });\n\n          let size = player.getPlayerSize();\n          video.style.width = size.width + 'px';\n          video.style.height = size.height + 'px';\n        }\n      })();\n      "),
        function(t) {
            t.addEventListener("ended", (a => {
                e && e.playingDate ? t.play() : i && D()
            }))
        }(t),
        E(),
        P(t),
        function(e) {
            let t,
                a=n.captions?.playerCaptionsTracklistRenderer?.captionTracks;
            if (!a)
                return;
            a.forEach((t => {
                let a = document.createElement("track");
                a.label = t.name.runs[0].text,
                a.kind = "subtitles",
                a.srclang = t.languageCode,
                a.src = `${t.baseUrl}&fmt=vtt`,
                e.appendChild(a)
            }));
            let i = "system" === l ? navigator.language : l,
                r = a.filter((e => "en" === e.languageCode));
            t = r.length > 0 ? r[0] : a[0];
            let s = document.createElement("track");
            s.label = `Auto-translated (${g(i)})`,
            s.kind = "subtitles",
            s.srclang = i,
            g(t.languageCode) === g(i) ? s.src = `${t.baseUrl}&fmt=vtt` : s.src = `${t.baseUrl}&fmt=vtt&tlang=${i}`;
            e.appendChild(s)
        }(t),
        R("\n      (() => {\n        let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n        if (player) {\n          player.mute();\n          player.pauseVideo();\n        }\n      })();\n      "),
        function(e) {
            let t = 0;
            e.addEventListener("timeupdate", (a => {
                Math.abs(e.currentTime - t) < 1 || (t = e.currentTime, "" !== navigator.mediaSession.metadata.title && I(e), R(`\n        (() => {\n          let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n          if (player) {\n            player.seekTo(${t});\n            player.mute();\n            player.pauseVideo();\n          }\n        })();\n        `))
            }))
        }(t),
        I(t)
    }
    function f(e) {
        e.addEventListener("error", (t => {
            !function(e) {
                e.remove(),
                v("Vinegar Off", "YouTube returned an error instead of a valid video stream, so Vinegar has temporarily turned itself off to protect your account. This is to ensure your account remains safe and avoids any potential issues. If you have the option to change your IP address (such as turning off iCloud Private Relay or using Cloudflare WARP), you can try that to see if it resolves the issue. Thank you for your understanding and patience."),
                R(`\n      (() => {\n        let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n        if (player) {\n          player.loadVideoById('${b(location)}', ${y(location)}, '${function() {switch (r) {case "144p":return "tiny";case "240p":return "small";case "360p":return "medium";case "480p":return "large";case "720p":return "hd720";case "1080p":return "hd1080";case "1440p":return "hd1440";case "2160p":return "hd2160";default:return "auto"}}()}');\n          player.unMute();\n\n          function showControls() {\n            let video = document.querySelector('video');\n            if (video) {\n              video.setAttribute('vinegar-fallback', true);\n              video.setAttribute('vinegared', true);\n            } else {\n              setTimeout(() => {\n                showControls();\n              }, 1000);\n            }\n          }\n\n          showControls();\n        }\n      })();\n      `)
            }(e)
        }), {
            once: !0
        }),
        v("Fallback", "YouTube returned an error instead of a valid video stream. To keep the video playing, Vinegar switched to an alternate stream."),
        R("\n      (() => {\n        let video = document.querySelector('video[vinegared]');\n        if (video) {\n          video.src = ytInitialPlayerResponse.streamingData?.hlsManifestUrl;\n          video.play();\n        }\n      })();\n      ")
    }
    function v(e, t) {
        let a = document.querySelector("#vinegar-toolbar .left .quality");
        if (!a)
            return;
        let n = a.cloneNode(!0);
        a.replaceWith(n),
        n.textContent = `${r.charAt(0).toUpperCase()}${r.slice(1)} (${e})`,
        n.addEventListener("click", (e => {
            e.stopPropagation(),
            e.preventDefault(),
            alert(t)
        }))
    }
    function y(e) {
        let t = e.search.match(/t=(.+?)(&|$)/);
        if (t) {
            let e = t[1],
                n = e.match(/^(\d+h)?(\d+m)?(\d+s)?$/),
                i = e.match(/^\d+$/);
            if (n) {
                var a = 0;
                return n[1] && (a += 60 * parseInt(n[1]) * 60), n[2] && (a += 60 * parseInt(n[2])), n[3] && (a += parseInt(n[3])), a
            }
            return i ? parseInt(i[0]) : -1
        }
        return -1
    }
    function g(e) {
        return e.startsWith("af") ? "Afrikaans" : e.startsWith("sq") ? "Albanian" : e.startsWith("am") ? "Amharic" : e.startsWith("ar") ? "Arabic" : e.startsWith("hy") ? "Armenian" : e.startsWith("az") ? "Azerbaijani" : e.startsWith("bn") ? "Bangla" : e.startsWith("eu") ? "Basque" : e.startsWith("be") ? "Belarusian" : e.startsWith("bs") ? "Bosnian" : e.startsWith("bg") ? "Bulgarian" : e.startsWith("my") ? "Burmese" : e.startsWith("ca") ? "Catalan" : e.startsWith("ceb") ? "Cebuano" : e.startsWith("zh") ? "Chinese" : e.startsWith("co") ? "Corsican" : e.startsWith("hr") ? "Croatian" : e.startsWith("cs") ? "Czech" : e.startsWith("da") ? "Danish" : e.startsWith("nl") ? "Dutch" : e.startsWith("en") ? "English" : e.startsWith("eo") ? "Esperanto" : e.startsWith("et") ? "Estonian" : e.startsWith("tl") || e.startsWith("fil") ? "Filipino" : e.startsWith("fi") ? "Finnish" : e.startsWith("fr") ? "French" : e.startsWith("gl") ? "Galician" : e.startsWith("ka") ? "Georgian" : e.startsWith("de") ? "German" : e.startsWith("el") ? "Greek" : e.startsWith("gu") ? "Gujarati" : e.startsWith("ht") ? "Haitian Creole" : e.startsWith("haw") ? "Hawaiian" : e.startsWith("ha") ? "Hausa" : e.startsWith("iw") || e.startsWith("he") ? "Hebrew" : e.startsWith("hi") ? "Hindi" : e.startsWith("hmn") ? "Hmong" : e.startsWith("hu") ? "Hungarian" : e.startsWith("is") ? "Icelandic" : e.startsWith("ig") ? "Igbo" : e.startsWith("id") ? "Indonesian" : e.startsWith("ga") ? "Irish" : e.startsWith("it") ? "Italian" : e.startsWith("jp") ? "Japanese" : e.startsWith("jv") ? "Javanese" : e.startsWith("kn") ? "Kannada" : e.startsWith("kk") ? "Kazakh" : e.startsWith("km") ? "Khmer" : e.startsWith("rw") ? "Kinyarwanda" : e.startsWith("ko") ? "Korean" : e.startsWith("ku") ? "Kurdish" : e.startsWith("ky") ? "Kyrgyz" : e.startsWith("lo") ? "Lao" : e.startsWith("la") ? "Latin" : e.startsWith("lv") ? "Latvian" : e.startsWith("lt") ? "Lithuanian" : e.startsWith("lb") ? "Luxembourgish" : e.startsWith("mk") ? "Macedonian" : e.startsWith("mg") ? "Malagasy" : e.startsWith("ms") ? "Malay" : e.startsWith("ml") ? "Malayalam" : e.startsWith("mt") ? "Maltese" : e.startsWith("mi") ? "Maori" : e.startsWith("mr") ? "Marathi" : e.startsWith("mn") ? "Mongolian" : e.startsWith("ne") ? "Nepali" : e.startsWith("nb") || e.startsWith("nn") || e.startsWith("no") ? "Norwegian" : e.startsWith("ny") ? "Nyanja" : e.startsWith("or") ? "Odia" : e.startsWith("ps") ? "Pashto" : e.startsWith("fa") ? "Persian" : e.startsWith("pl") ? "Polish" : e.startsWith("pt") ? "Portuguese" : e.startsWith("pa") ? "Punjabi" : e.startsWith("ro") ? "Romanian" : e.startsWith("ru") ? "Russian" : e.startsWith("sm") ? "Samoan" : e.startsWith("gd") ? "Scottish Gaelic" : e.startsWith("sr") ? "Serbian" : e.startsWith("sn") ? "Shona" : e.startsWith("sd") ? "Sindhi" : e.startsWith("si") ? "Sinhala" : e.startsWith("sk") ? "Slovak" : e.startsWith("sl") ? "Slovenian" : e.startsWith("so") ? "Somali" : e.startsWith("st") ? "Southern Sotho" : e.startsWith("es") ? "Spanish" : e.startsWith("su") ? "Sudanese" : e.startsWith("sw") ? "Swahili" : e.startsWith("sv") ? "Swedish" : e.startsWith("tg") ? "Tajik" : e.startsWith("ta") ? "Tamil" : e.startsWith("tt") ? "Tatar" : e.startsWith("te") ? "Telugu" : e.startsWith("th") ? "Thai" : e.startsWith("tr") ? "Turkish" : e.startsWith("tk") ? "Turkmen" : e.startsWith("uk") ? "Ukrainian" : e.startsWith("ur") ? "Urdu" : e.startsWith("ug") ? "Uyghur" : e.startsWith("uz") ? "Uzbek" : e.startsWith("vi") ? "Vietnamese" : e.startsWith("cy") ? "Welsh" : e.startsWith("fy") ? "Western Frisian" : e.startsWith("xh") ? "Xhosa" : e.startsWith("yi") ? "Yiddish" : e.startsWith("yo") ? "Yoruba" : e.startsWith("zu") ? "Zulu" : "System"
    }
    function b(e) {
        if ("/watch" === e.pathname) {
            let t = e.search.match(/v=(.+?)(&|%|$)/);
            if (t)
                return t[1]
        }
    }
    function W() {
        if (t === location.href)
            return;
        t = location.href,
        n = null,
        async function() {
            try {
                let e = b(location);
                if (!e)
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
                    n = "https://www.youtube.com/youtubei/v1/player?prettyPrint=false",
                    i = await fetch(n, {
                        method: "POST",
                        body: JSON.stringify(t)
                    }),
                    r = await i.json();
                if (t = function(e, t) {
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
                                visitorData: t
                            }
                        },
                        videoId: e,
                        playbackContext: {
                            contentPlaybackContext: {
                                html5Preference: "HTML5_PREF_WANTS"
                            }
                        },
                        contentCheckOk: !0,
                        racyCheckOk: !0
                    }
                }(e, r.responseContext.visitorData), i = await fetch(n, {
                    method: "POST",
                    body: JSON.stringify(t)
                }), r = await i.json(), "OK"===r.playabilityStatus?.status) {
                    if (!s) {
                        let e = await fetch(r.streamingData.hlsManifestUrl);
                        a = await e.text()
                    }
                    c(r)
                } else
                    m("Unable to find playable video stream.")
            } catch (e) {
                m(e.message)
            }
        }();
        let e = document.querySelector("#vinegar-toolbar");
        e && e.remove(),
        document.querySelectorAll("video[vinegared]").forEach((e => {
            e.remove()
        }))
    }
    function E() {
        o || document.querySelectorAll("#primary").forEach((e => {
            e.setAttribute("notoolbar", !0)
        }))
    }
    function k(e, t, a) {
        let n = document.createElement("a");
        return n.classList.add("button", t.toLowerCase()), n.textContent = t, n.addEventListener("click", a), e.appendChild(n), n
    }
    function T(e) {
        r = e,
        safari.extension.dispatchMessage("updateQuality", {
            quality: e
        })
    }
    function S(t, a) {
        s ? function(t, a) {
            let n = {
                    3840: "2160p",
                    2560: "1440p",
                    1920: "1080p",
                    1280: "720p",
                    854: "480p",
                    640: "360p",
                    426: "240p",
                    256: "144p"
                },
                i = function(t, a) {
                    let n = {};
                    for (var i = 0; i < t.length; i++) {
                        let t = a[e.levels[i].width];
                        t && (n[t] = i)
                    }
                    return n
                }(e.levels, n);
            L(t, a, -1, "Auto", "auto");
            for (let [e, n] of Object.entries(i))
                L(t, a, n, e, e);
            !function(t, a) {
                for (var n = 0; n < e.audioTracks.length; n++) {
                    let i = e.audioTracks[n],
                        r = e.audioTracks.length > 1 ? g(i.lang) : "Audio";
                    w(t, a, r, "audio", (e => {
                        e.stopPropagation(),
                        e.preventDefault(),
                        T("audio"),
                        C(t, i.url),
                        A(a, r)
                    }))
                }
            }(t, a)
        }(t, a) : function(e, t) {
            ["auto", "144p", "240p", "360p", "480p", "720p", "1080p", "audio"].forEach((a => {
                if (d[a]) {
                    let n = `${a.charAt(0).toUpperCase()}${a.slice(1)}`;
                    !function(e, t, a, n, i) {
                        w(e, t, n, i, (r => {
                            r.stopPropagation(),
                            r.preventDefault(),
                            T(i),
                            function(e, t) {
                                let a = e.paused,
                                    n = e.currentTime;
                                e.pause(),
                                e.src = t,
                                e.load(),
                                e.addEventListener("canplay", (t => {
                                    e.currentTime = n,
                                    a || e.play()
                                }), {
                                    once: !0
                                })
                            }(e, a),
                            A(t, n)
                        }))
                    }(e, t, d[a], n, a)
                }
            }))
        }(t, a)
    }
    function w(e, t, a, n, i) {
        let s = document.createElement("a");
        s.classList.add("button"),
        s.textContent = a,
        s.setAttribute("data-quality", n),
        r === n && s.classList.add("active"),
        s.addEventListener("click", i),
        t.appendChild(s)
    }
    function L(t, a, i, s, o) {
        w(0, a, s, o, (l => {
            l.stopPropagation(),
            l.preventDefault();
            let d = "audio" === r;
            T(o),
            d ? C(t, n.streamingData.hlsManifestUrl, i) : e.currentLevel = i,
            A(a, s)
        }))
    }
    function A(e, t) {
        e.querySelectorAll("[data-quality]").forEach((e => {
            e.remove()
        })),
        e.querySelector(".quality").textContent = t,
        e.querySelector(".left").classList.remove("hidden"),
        e.querySelector(".right").classList.remove("hidden")
    }
    function C(t, a, n) {
        let i = t.paused,
            r = t.currentTime;
        t.pause(),
        e.loadSource(a),
        e.once(Hls.Events.MANIFEST_LOADED, (() => {
            if (n) {
                if (e.audioTracks.length > 1) {
                    let t = "system" === l ? navigator.language : l;
                    for (var a = 0; a < e.audioTracks.length; a++) {
                        let n = e.audioTracks[a];
                        if (t.startsWith(n.lang)) {
                            e.audioTrack = n.id;
                            break
                        }
                    }
                }
                e.currentLevel = n
            }
            t.currentTime = r,
            i || t.play()
        }))
    }
    function P(e) {
        let t = document.createElement("div");
        t.id = "vinegar-toolbar";
        let a = document.createElement("div");
        a.classList.add("left"),
        t.appendChild(a);
        let n,
            i = document.createElement("div");
        i.classList.add("right"),
        t.appendChild(i),
        k(a, "Quality", (n => {
            n.stopPropagation(),
            n.preventDefault(),
            a.classList.add("hidden"),
            i.classList.add("hidden"),
            S(e, t)
        })).textContent = `${r.charAt(0).toUpperCase()}${r.slice(1)}`,
        k(i, "Loop", (t => {
            t.stopPropagation(),
            t.preventDefault();
            let a = t.target;
            e.loop ? (e.loop = !1, a.classList.remove("active")) : (e.loop = !0, a.classList.add("active"))
        })),
        k(i, "Replay", (t => {
            t.stopPropagation(),
            t.preventDefault(),
            e.currentTime = 0
        })),
        k(i, "Theater", (e => {
            e.stopPropagation(),
            e.preventDefault(),
            O()
        })),
        e.addEventListener("mousemove", (e => {
            clearTimeout(n),
            i.classList.add("showing"),
            i.classList.remove("removing"),
            n = setTimeout((() => {
                i.classList.add("removing")
            }), 3e3)
        })),
        e.addEventListener("mouseleave", (e => {
            clearTimeout(n),
            n = setTimeout((() => {
                i.classList.remove("showing", "removing")
            }), 100)
        })),
        i.addEventListener("mouseenter", (e => {
            clearTimeout(n),
            i.classList.add("showing"),
            i.classList.remove("removing")
        })),
        i.addEventListener("mouseleave", (e => {
            clearTimeout(n),
            n = setTimeout((() => {
                i.classList.remove("showing", "removing")
            }), 100)
        })),
        e.closest("div").insertBefore(t, e)
    }
    function I(e) {
        navigator.mediaSession.metadata = new MediaMetadata,
        navigator.mediaSession.setActionHandler("play", null),
        navigator.mediaSession.setActionHandler("pause", null),
        navigator.mediaSession.setActionHandler("seekbackward", null),
        navigator.mediaSession.setActionHandler("seekforward", null),
        navigator.mediaSession.setActionHandler("previoustrack", null),
        navigator.mediaSession.setActionHandler("nexttrack", null),
        navigator.mediaSession.setActionHandler("play", (async () => {
            await e.play()
        })),
        navigator.mediaSession.setActionHandler("pause", (() => {
            e.pause()
        })),
        navigator.mediaSession.setActionHandler("seekbackward", (() => {
            M(e, 10)
        })),
        navigator.mediaSession.setActionHandler("seekforward", (() => {
            N(e, 10)
        })),
        navigator.mediaSession.setActionHandler("previoustrack", (() => {
            R("\n      (() => {\n        let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n        if (player) {\n          player.previousVideo();\n        }\n      })();\n      ")
        })),
        navigator.mediaSession.setActionHandler("nexttrack", (() => {
            D()
        }))
    }
    function M(e, t) {
        e.currentTime = Math.max(e.currentTime - t, 0)
    }
    function N(e, t) {
        e.currentTime = Math.min(e.currentTime + t, e.duration)
    }
    function O() {
        R("\n      (() => {\n        let hotkeys = document.querySelector('yt-Hotkey-Manager');\n        if (hotkeys) hotkeys.toggleTheaterMode();\n      })();\n      ")
    }
    function q(e, t) {
        e.currentTime = e.duration * t / 100
    }
    function D() {
        R("\n      (() => {\n        let player = document.getElementById('movie_player') || document.getElementsByClassName('html5-video-player')[0];\n        if (player) {\n          player.nextVideo();\n        }\n      })();\n      ")
    }
    function R(e) {
        let t = document.createElement("script");
        t.innerHTML = e,
        (document.head || document.documentElement).prepend(t),
        setTimeout((() => {
            t.remove()
        }), 100)
    }
    if (void 0 === window.injected && (window.injected = !0, R('\n      (()=>{window.addEventListener("keydown",(e=>{if("INPUT"==e.target.tagName||"SELECT"==e.target.tagName||"TEXTAREA"==e.target.tagName||e.target.isContentEditable)return;if(e.altKey||e.ctrlKey||e.metaKey)return;let t=e.key.toLowerCase();"cfijklmt,. <>".includes(t)&&(e.stopImmediatePropagation()," "===t&&e.preventDefault())}),!0);let e=new MutationObserver((e=>{e.forEach((e=>{let t=e.target;t.controls||(t.controls=!0)}))})),t=DOMTokenList.prototype.add;function o(){let t=document.querySelector("video[vinegared]:not([vinegared-once])");if(!t)return;let o=t.closest("div");o&&o.setAttribute("vinegar-container",!0),t.controls=!0,t.hasAttribute("vinegar-fallback")&&e.observe(t,{attributes:!0,attributeFilter:["controls"]}),t.addEventListener("click",(e=>{e.stopPropagation()})),t.addEventListener("dblclick",(e=>{e.stopPropagation()})),t.addEventListener("contextmenu",(e=>{e.stopPropagation()})),t.setAttribute("vinegared-once",!0)}function r(){let t=document.querySelector("video:not([vinegared-once])");if(!t)return;let o=t.closest("div");o&&o.setAttribute("vinegar-container",!0),t.controls=!0,e.observe(t,{attributes:!0,attributeFilter:["controls"]}),t.addEventListener("contextmenu",(e=>{e.stopPropagation()})),t.addEventListener("play",(e=>{let t=document.querySelector(".ytp-chrome-top, .ytwPlayerTopControlsHost");t&&t.classList.remove("paused")})),t.addEventListener("pause",(e=>{let t=document.querySelector(".ytp-chrome-top, .ytwPlayerTopControlsHost");t&&t.classList.add("paused")})),t.addEventListener("ended",(e=>{t.removeAttribute("vinegared")})),t.setAttribute("vinegared",!0),t.setAttribute("vinegared-once",!0)}DOMTokenList.prototype.add=function(...e){if(t.apply(this,e),"ad-created"===e[0]){let e=document.querySelector("#movie_player");if(e){let t=e.getPlayerResponse();t.playerAds&&(t.playerAds=[]),t.adPlacements&&(t.adPlacements=[]),t.adSlots&&(t.adSlots=[])}}},location.pathname.startsWith("/embed/")?(window.addEventListener("click",(e=>{if(e.metaKey)return;let t=e.composedPath();for(let o of t)if(1===o.nodeType&&"A"===o.nodeName&&o.hasAttribute("href")){if(o.isContentEditable)return;e.preventDefault(),window.open(o.href,"_blank")}}),!0),r()):location.pathname.startsWith("/shorts/")||o(),new MutationObserver((e=>{location.pathname.startsWith("/embed/")?r():location.pathname.startsWith("/shorts/")||o()})).observe(document.documentElement,{childList:!0,subtree:!0})})();\n      '), safari.extension.dispatchMessage("refreshSettings"), safari.self.addEventListener("message", (e => {
        if ("settings" === e.name) {
            let t = e.message;
            i = t.autoplay,
            r = t.quality,
            s = t.advanced,
            o = t.showToolbar,
            l = t.subtitles
        }
    }))), void 0 === window.mutationObserved) {
        window.mutationObserved = !0,
        window.addEventListener("click", (e => {
            if (e.metaKey)
                return;
            let t = e.composedPath();
            for (let a of t)
                if (1 === a.nodeType && "A" === a.nodeName && a.hasAttribute("href")) {
                    if (a.isContentEditable)
                        return;
                    let t = new URL(a.href);
                    if ("/watch" === t.pathname)
                        if (e.stopImmediatePropagation(), e.preventDefault(), b(t) === b(location)) {
                            let e = y(t);
                            if (e >= 0) {
                                let t = document.querySelector("video[vinegared]");
                                t && (t.currentTime = e)
                            }
                        } else
                            location.href = a.href;
                    else
                        t.pathname.startsWith("/shorts") && (e.stopImmediatePropagation(), e.preventDefault(), location.href = a.href)
                }
        }), !0),
        new MutationObserver((e => {
            W()
        })).observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }),
        window.addEventListener("keyup", (e => {
            if ("INPUT" == e.target.tagName || "SELECT" == e.target.tagName || "TEXTAREA" == e.target.tagName || e.target.isContentEditable)
                return;
            let t = document.querySelector("video[vinegared]");
            if (t && !(e.altKey || e.ctrlKey || e.metaKey))
                switch (e.stopImmediatePropagation(), e.key.toLowerCase()) {
                case "c":
                    !function(e) {
                        let t,
                            a;
                        Array.from(e.textTracks).forEach((e => {
                            "showing" === e.mode && (t = e),
                            e.label.startsWith("Auto-translated") && (a = e)
                        })),
                        t ? t.mode = "disabled" : a.mode = "showing"
                    }(t);
                    break;
                case "i":
                    !function(e) {
                        document.pictureInPictureElement ? document.exitPictureInPicture() : document.pictureInPictureEnabled && e.requestPictureInPicture()
                    }(t);
                    break;
                case "f":
                    !function(e) {
                        document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : e.requestFullscreen()
                    }(t);
                    break;
                case "j":
                    M(t, 10);
                    break;
                case "l":
                    N(t, 10);
                    break;
                case "arrowleft":
                    M(t, 5);
                    break;
                case "arrowright":
                    N(t, 5);
                    break;
                case ",":
                    t.paused && M(t, 1 / 60);
                    break;
                case ".":
                    t.paused && N(t, 1 / 60);
                    break;
                case "k":
                case " ":
                    !function(e) {
                        e.paused ? (async () => {
                            try {
                                await e.play()
                            } catch (e) {}
                        })() : e.pause()
                    }(t);
                    break;
                case "m":
                    !function(e) {
                        e.muted = !e.muted
                    }(t);
                    break;
                case "t":
                    O();
                    break;
                case "<":
                    !function(e) {
                        e.playbackRate = Math.max(e.playbackRate - .25, .25)
                    }(t);
                    break;
                case ">":
                    !function(e) {
                        e.playbackRate = Math.min(e.playbackRate + .25, 2)
                    }(t)
                }
        }), !0),
        window.addEventListener("keydown", (e => {
            if ("INPUT" == e.target.tagName || "SELECT" == e.target.tagName || "TEXTAREA" == e.target.tagName || e.target.isContentEditable)
                return;
            let t = document.querySelector("video[vinegared]");
            if (!t)
                return;
            if (e.altKey || e.ctrlKey || e.metaKey)
                return;
            let a = e.key.toLowerCase();
            switch ("0123456789".includes(a) && e.stopImmediatePropagation(), a) {
            case "0":
                q(t, 0);
                break;
            case "1":
                q(t, 10);
                break;
            case "2":
                q(t, 20);
                break;
            case "3":
                q(t, 30);
                break;
            case "4":
                q(t, 40);
                break;
            case "5":
                q(t, 50);
                break;
            case "6":
                q(t, 60);
                break;
            case "7":
                q(t, 70);
                break;
            case "8":
                q(t, 80);
                break;
            case "9":
                q(t, 90)
            }
        }), !0)
    }
})();
