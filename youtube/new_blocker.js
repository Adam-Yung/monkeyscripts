!function t(e) {
    var r,
        i;
    r = this,
    i = function() {
        "use strict";
        function r(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                r.push.apply(r, i)
            }
            return r
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function(e) {
                    s(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, m(i.key), i)
            }
        }
        function a(t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }
        function s(t, e, r) {
            return (e = m(e)) in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }
        function o() {
            return o = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }, o.apply(this, arguments)
        }
        function l(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            h(t, e)
        }
        function u(t) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, u(t)
        }
        function h(t, e) {
            return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            }, h(t, e)
        }
        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }
        function c(t, e, r) {
            return c = d() ? Reflect.construct.bind() : function(t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i));
                return r && h(n, r.prototype), n
            }, c.apply(null, arguments)
        }
        function f(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return f = function(t) {
                if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]")))
                    return t;
                var r;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, i)
                }
                function i() {
                    return c(t, arguments, u(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h(i, t)
            }, f(t)
        }
        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = new Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function v(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (r)
                return (r = r.call(t)).next.bind(r);
            if (Array.isArray(t) || (r = function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return g(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(t, e) : void 0
                }
            }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function m(t) {
            var e = function(t, e) {
                if ("object" != typeof t || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var i = r.call(t, e || "default");
                    if ("object" != typeof i)
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
        }
        function p(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }
        var y = {
            exports: {}
        };
        !function(t, e) {
            var r,
                i,
                n,
                a,
                s;
            r = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
            i = /^(?=([^\/?#]*))\1([^]*)$/,
            n = /(?:\/|^)\.(?=\/)/g,
            a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
            s = {
                buildAbsoluteURL: function(t, e, r) {
                    if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                        if (!r.alwaysNormalize)
                            return t;
                        var n = s.parseURL(t);
                        if (!n)
                            throw new Error("Error trying to parse base URL.");
                        return n.path = s.normalizePath(n.path), s.buildURLFromParts(n)
                    }
                    var a = s.parseURL(e);
                    if (!a)
                        throw new Error("Error trying to parse relative URL.");
                    if (a.scheme)
                        return r.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : e;
                    var o = s.parseURL(t);
                    if (!o)
                        throw new Error("Error trying to parse base URL.");
                    if (!o.netLoc && o.path && "/" !== o.path[0]) {
                        var l = i.exec(o.path);
                        o.netLoc = l[1],
                        o.path = l[2]
                    }
                    o.netLoc && !o.path && (o.path = "/");
                    var u = {
                        scheme: o.scheme,
                        netLoc: a.netLoc,
                        path: null,
                        params: a.params,
                        query: a.query,
                        fragment: a.fragment
                    };
                    if (!a.netLoc && (u.netLoc = o.netLoc, "/" !== a.path[0]))
                        if (a.path) {
                            var h = o.path,
                                d = h.substring(0, h.lastIndexOf("/") + 1) + a.path;
                            u.path = s.normalizePath(d)
                        } else
                            u.path = o.path,
                            a.params || (u.params = o.params, a.query || (u.query = o.query));
                    return null === u.path && (u.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(u)
                },
                parseURL: function(t) {
                    var e = r.exec(t);
                    return e ? {
                        scheme: e[1] || "",
                        netLoc: e[2] || "",
                        path: e[3] || "",
                        params: e[4] || "",
                        query: e[5] || "",
                        fragment: e[6] || ""
                    } : null
                },
                normalizePath: function(t) {
                    for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(a, "")).length;)
                        ;
                    return t.split("").reverse().join("")
                },
                buildURLFromParts: function(t) {
                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                }
            },
            t.exports = s
        }(y);
        var T = y.exports,
            E = Number.isFinite || function(t) {
                return "number" == typeof t && isFinite(t)
            },
            S = function(t) {
                return t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached", t
            }({}),
            L = function(t) {
                return t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError", t
            }({}),
            R = function(t) {
                return t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", t.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", t.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", t.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_PARSING_ERROR = "levelParsingError", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.FRAG_GAP = "fragGap", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown", t
            }({}),
            A = function() {},
            k = {
                trace: A,
                debug: A,
                log: A,
                warn: A,
                info: A,
                error: A
            },
            b = k;
        function D(t) {
            var e = self.console[t];
            return e ? e.bind(self.console, "[" + t + "] >") : A
        }
        function I(t, e) {
            if (self.console && !0 === t || "object" == typeof t) {
                !function(t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i];
                    r.forEach((function(e) {
                        b[e] = t[e] ? t[e].bind(t) : D(e)
                    }))
                }(t, "debug", "log", "info", "warn", "error");
                try {
                    b.log('Debug logs enabled for "' + e + '" in hls.js version 1.4.12')
                } catch (t) {
                    b = k
                }
            } else
                b = k
        }
        var w = b,
            C = /^(\d+)x(\d+)$/,
            _ = /(.+?)=(".*?"|.*?)(?:,|$)/g,
            P = function() {
                function t(e) {
                    for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e)
                        e.hasOwnProperty(r) && ("X-" === r.substring(0, 2) && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(r)), this[r] = e[r])
                }
                var e = t.prototype;
                return e.decimalInteger = function(t) {
                    var e = parseInt(this[t], 10);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, e.hexadecimalInteger = function(t) {
                    if (this[t]) {
                        var e = (this[t] || "0x").slice(2);
                        e = (1 & e.length ? "0" : "") + e;
                        for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++)
                            r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                        return r
                    }
                    return null
                }, e.hexadecimalIntegerAsNumber = function(t) {
                    var e = parseInt(this[t], 16);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, e.decimalFloatingPoint = function(t) {
                    return parseFloat(this[t])
                }, e.optionalFloat = function(t, e) {
                    var r = this[t];
                    return r ? parseFloat(r) : e
                }, e.enumeratedString = function(t) {
                    return this[t]
                }, e.bool = function(t) {
                    return "YES" === this[t]
                }, e.decimalResolution = function(t) {
                    var e = C.exec(this[t]);
                    if (null !== e)
                        return {
                            width: parseInt(e[1], 10),
                            height: parseInt(e[2], 10)
                        }
                }, t.parseAttrList = function(t) {
                    var e,
                        r = {};
                    for (_.lastIndex = 0; null !== (e = _.exec(t));) {
                        var i = e[2];
                        0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)),
                        r[e[1].trim()] = i
                    }
                    return r
                }, t
            }();
        function x(t) {
            return "SCTE35-OUT" === t || "SCTE35-IN" === t
        }
        var F = function() {
                function t(t, e) {
                    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
                        var r = e.attr;
                        for (var i in r)
                            if (Object.prototype.hasOwnProperty.call(t, i) && t[i] !== r[i]) {
                                w.warn('DATERANGE tag attribute: "' + i + '" does not match for tags with ID: "' + t.ID + '"'),
                                this._badValueForSameId = i;
                                break
                            }
                        t = o(new P({}), r, t)
                    }
                    if (this.attr = t, this._startDate = new Date(t["START-DATE"]), "END-DATE" in this.attr) {
                        var n = new Date(this.attr["END-DATE"]);
                        E(n.getTime()) && (this._endDate = n)
                    }
                }
                return a(t, [{
                    key: "id",
                    get: function() {
                        return this.attr.ID
                    }
                }, {
                    key: "class",
                    get: function() {
                        return this.attr.CLASS
                    }
                }, {
                    key: "startDate",
                    get: function() {
                        return this._startDate
                    }
                }, {
                    key: "endDate",
                    get: function() {
                        if (this._endDate)
                            return this._endDate;
                        var t = this.duration;
                        return null !== t ? new Date(this._startDate.getTime() + 1e3 * t) : null
                    }
                }, {
                    key: "duration",
                    get: function() {
                        if ("DURATION" in this.attr) {
                            var t = this.attr.decimalFloatingPoint("DURATION");
                            if (E(t))
                                return t
                        } else if (this._endDate)
                            return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
                        return null
                    }
                }, {
                    key: "plannedDuration",
                    get: function() {
                        return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
                    }
                }, {
                    key: "endOnNext",
                    get: function() {
                        return this.attr.bool("END-ON-NEXT")
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return !!this.id && !this._badValueForSameId && E(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
                    }
                }]), t
            }(),
            M = function() {
                this.aborted = !1,
                this.loaded = 0,
                this.retry = 0,
                this.total = 0,
                this.chunkCount = 0,
                this.bwEstimate = 0,
                this.loading = {
                    start: 0,
                    first: 0,
                    end: 0
                },
                this.parsing = {
                    start: 0,
                    end: 0
                },
                this.buffering = {
                    start: 0,
                    first: 0,
                    end: 0
                }
            },
            O = "audio",
            N = "video",
            U = "audiovideo",
            B = function() {
                function t(t) {
                    var e;
                    this._byteRange = null,
                    this._url = null,
                    this.baseurl = void 0,
                    this.relurl = void 0,
                    this.elementaryStreams = ((e = {})[O] = null, e[N] = null, e[U] = null, e),
                    this.baseurl = t
                }
                return t.prototype.setByteRange = function(t, e) {
                    var r = t.split("@", 2),
                        i = [];
                    1 === r.length ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]),
                    i[1] = parseInt(r[0]) + i[0],
                    this._byteRange = i
                }, a(t, [{
                    key: "byteRange",
                    get: function() {
                        return this._byteRange ? this._byteRange : []
                    }
                }, {
                    key: "byteRangeStartOffset",
                    get: function() {
                        return this.byteRange[0]
                    }
                }, {
                    key: "byteRangeEndOffset",
                    get: function() {
                        return this.byteRange[1]
                    }
                }, {
                    key: "url",
                    get: function() {
                        return !this._url && this.baseurl && this.relurl && (this._url = T.buildAbsoluteURL(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })), this._url || ""
                    },
                    set: function(t) {
                        this._url = t
                    }
                }]), t
            }(),
            G = function(t) {
                function e(e, r) {
                    var i;
                    return (i = t.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkeys = void 0, i.type = void 0, i.loader = null, i.keyLoader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new M, i.urlId = 0, i.data = void 0, i.bitrateTest = !1, i.title = null, i.initSegment = null, i.endList = void 0, i.gap = void 0, i.type = e, i
                }
                l(e, t);
                var r = e.prototype;
                return r.setKeyFormat = function(t) {
                    if (this.levelkeys) {
                        var e = this.levelkeys[t];
                        e && !this._decryptdata && (this._decryptdata = e.getDecryptData(this.sn))
                    }
                }, r.abortRequests = function() {
                    var t,
                        e;
                    null == (t = this.loader) || t.abort(),
                    null == (e = this.keyLoader) || e.abort()
                }, r.setElementaryStreamInfo = function(t, e, r, i, n, a) {
                    void 0 === a && (a = !1);
                    var s = this.elementaryStreams,
                        o = s[t];
                    o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, n)) : s[t] = {
                        startPTS: e,
                        endPTS: r,
                        startDTS: i,
                        endDTS: n,
                        partial: a
                    }
                }, r.clearElementaryStreamInfo = function() {
                    var t = this.elementaryStreams;
                    t[O] = null,
                    t[N] = null,
                    t[U] = null
                }, a(e, [{
                    key: "decryptdata",
                    get: function() {
                        if (!this.levelkeys && !this._decryptdata)
                            return null;
                        if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
                            var t = this.levelkeys.identity;
                            if (t)
                                this._decryptdata = t.getDecryptData(this.sn);
                            else {
                                var e = Object.keys(this.levelkeys);
                                if (1 === e.length)
                                    return this._decryptdata = this.levelkeys[e[0]].getDecryptData(this.sn)
                            }
                        }
                        return this._decryptdata
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.start + this.duration
                    }
                }, {
                    key: "endProgramDateTime",
                    get: function() {
                        if (null === this.programDateTime)
                            return null;
                        if (!E(this.programDateTime))
                            return null;
                        var t = E(this.duration) ? this.duration : 0;
                        return this.programDateTime + 1e3 * t
                    }
                }, {
                    key: "encrypted",
                    get: function() {
                        var t;
                        if (null != (t = this._decryptdata) && t.encrypted)
                            return !0;
                        if (this.levelkeys) {
                            var e = Object.keys(this.levelkeys),
                                r = e.length;
                            if (r > 1 || 1 === r && this.levelkeys[e[0]].encrypted)
                                return !0
                        }
                        return !1
                    }
                }]), e
            }(B),
            K = function(t) {
                function e(e, r, i, n, a) {
                    var s;
                    (s = t.call(this, i) || this).fragOffset = 0,
                    s.duration = 0,
                    s.gap = !1,
                    s.independent = !1,
                    s.relurl = void 0,
                    s.fragment = void 0,
                    s.index = void 0,
                    s.stats = new M,
                    s.duration = e.decimalFloatingPoint("DURATION"),
                    s.gap = e.bool("GAP"),
                    s.independent = e.bool("INDEPENDENT"),
                    s.relurl = e.enumeratedString("URI"),
                    s.fragment = r,
                    s.index = n;
                    var o = e.enumeratedString("BYTERANGE");
                    return o && s.setByteRange(o, a), a && (s.fragOffset = a.fragOffset + a.duration), s
                }
                return l(e, t), a(e, [{
                    key: "start",
                    get: function() {
                        return this.fragment.start + this.fragOffset
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.start + this.duration
                    }
                }, {
                    key: "loaded",
                    get: function() {
                        var t = this.elementaryStreams;
                        return !!(t.audio || t.video || t.audiovideo)
                    }
                }]), e
            }(B),
            H = function() {
                function t(t) {
                    this.PTSKnown = !1,
                    this.alignedSliding = !1,
                    this.averagetargetduration = void 0,
                    this.endCC = 0,
                    this.endSN = 0,
                    this.fragments = void 0,
                    this.fragmentHint = void 0,
                    this.partList = null,
                    this.dateRanges = void 0,
                    this.live = !0,
                    this.ageHeader = 0,
                    this.advancedDateTime = void 0,
                    this.updated = !0,
                    this.advanced = !0,
                    this.availabilityDelay = void 0,
                    this.misses = 0,
                    this.startCC = 0,
                    this.startSN = 0,
                    this.startTimeOffset = null,
                    this.targetduration = 0,
                    this.totalduration = 0,
                    this.type = null,
                    this.url = void 0,
                    this.m3u8 = "",
                    this.version = null,
                    this.canBlockReload = !1,
                    this.canSkipUntil = 0,
                    this.canSkipDateRanges = !1,
                    this.skippedSegments = 0,
                    this.recentlyRemovedDateranges = void 0,
                    this.partHoldBack = 0,
                    this.holdBack = 0,
                    this.partTarget = 0,
                    this.preloadHint = void 0,
                    this.renditionReports = void 0,
                    this.tuneInGoal = 0,
                    this.deltaUpdateFailed = void 0,
                    this.driftStartTime = 0,
                    this.driftEndTime = 0,
                    this.driftStart = 0,
                    this.driftEnd = 0,
                    this.encryptedFragments = void 0,
                    this.playlistParsingError = null,
                    this.variableList = null,
                    this.hasVariableRefs = !1,
                    this.fragments = [],
                    this.encryptedFragments = [],
                    this.dateRanges = {},
                    this.url = t
                }
                return t.prototype.reloaded = function(t) {
                    if (!t)
                        return this.advanced = !0, void (this.updated = !0);
                    var e = this.lastPartSn - t.lastPartSn,
                        r = this.lastPartIndex - t.lastPartIndex;
                    this.updated = this.endSN !== t.endSN || !!r || !!e || !this.live,
                    this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0,
                    this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1,
                    this.availabilityDelay = t.availabilityDelay
                }, a(t, [{
                    key: "hasProgramDateTime",
                    get: function() {
                        return !!this.fragments.length && E(this.fragments[this.fragments.length - 1].programDateTime)
                    }
                }, {
                    key: "levelTargetDuration",
                    get: function() {
                        return this.averagetargetduration || this.targetduration || 10
                    }
                }, {
                    key: "drift",
                    get: function() {
                        var t = this.driftEndTime - this.driftStartTime;
                        return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
                    }
                }, {
                    key: "edge",
                    get: function() {
                        return this.partEnd || this.fragmentEnd
                    }
                }, {
                    key: "partEnd",
                    get: function() {
                        var t;
                        return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                    }
                }, {
                    key: "fragmentEnd",
                    get: function() {
                        var t;
                        return null != (t = this.fragments) && t.length ? this.fragments[this.fragments.length - 1].end : 0
                    }
                }, {
                    key: "age",
                    get: function() {
                        return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                    }
                }, {
                    key: "lastPartIndex",
                    get: function() {
                        var t;
                        return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].index : -1
                    }
                }, {
                    key: "lastPartSn",
                    get: function() {
                        var t;
                        return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                    }
                }]), t
            }();
        function V(t) {
            return Uint8Array.from(atob(t), (function(t) {
                return t.charCodeAt(0)
            }))
        }
        function Y(t) {
            var e,
                r,
                i = t.split(":"),
                n = null;
            if ("data" === i[0] && 2 === i.length) {
                var a = i[1].split(";"),
                    s = a[a.length - 1].split(",");
                if (2 === s.length) {
                    var o = "base64" === s[0],
                        l = s[1];
                    o ? (a.splice(-1, 1), n = V(l)) : (e = W(l).subarray(0, 16), (r = new Uint8Array(16)).set(e, 16 - e.length), n = r)
                }
            }
            return n
        }
        function W(t) {
            return Uint8Array.from(unescape(encodeURIComponent(t)), (function(t) {
                return t.charCodeAt(0)
            }))
        }
        var j = {
                CLEARKEY: "org.w3.clearkey",
                FAIRPLAY: "com.apple.fps",
                PLAYREADY: "com.microsoft.playready",
                WIDEVINE: "com.widevine.alpha"
            },
            q = "org.w3.clearkey",
            X = "com.apple.streamingkeydelivery",
            z = "com.microsoft.playready",
            Q = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
        function $(t) {
            switch (t) {
            case X:
                return j.FAIRPLAY;
            case z:
                return j.PLAYREADY;
            case Q:
                return j.WIDEVINE;
            case q:
                return j.CLEARKEY
            }
        }
        var J = "edef8ba979d64acea3c827dcd51d21ed";
        function Z(t) {
            switch (t) {
            case j.FAIRPLAY:
                return X;
            case j.PLAYREADY:
                return z;
            case j.WIDEVINE:
                return Q;
            case j.CLEARKEY:
                return q
            }
        }
        function tt(t) {
            var e = t.drmSystems,
                r = t.widevineLicenseUrl,
                i = e ? [j.FAIRPLAY, j.WIDEVINE, j.PLAYREADY, j.CLEARKEY].filter((function(t) {
                    return !!e[t]
                })) : [];
            return !i[j.WIDEVINE] && r && i.push(j.WIDEVINE), i
        }
        var et = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        function rt(t, e, r) {
            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
        }
        var it,
            nt = function(t, e) {
                return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
            },
            at = function(t, e) {
                return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
            },
            st = function(t, e) {
                for (var r = e, i = 0; nt(t, e);)
                    i += 10,
                    i += ot(t, e + 6),
                    at(t, e + 10) && (i += 10),
                    e += i;
                if (i > 0)
                    return t.subarray(r, r + i)
            },
            ot = function(t, e) {
                var r = 0;
                return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, r |= (127 & t[e + 2]) << 7, r |= 127 & t[e + 3]
            },
            lt = function(t, e) {
                return nt(t, e) && ot(t, e + 6) + 10 <= t.length - e
            },
            ut = function(t) {
                return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
            },
            ht = function(t) {
                var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                    r = ot(t, 4);
                return {
                    type: e,
                    size: r,
                    data: t.subarray(10, 10 + r)
                }
            },
            dt = function(t) {
                for (var e = 0, r = []; nt(t, e);) {
                    for (var i = ot(t, e + 6), n = (e += 10) + i; e + 8 < n;) {
                        var a = ht(t.subarray(e)),
                            s = ct(a);
                        s && r.push(s),
                        e += a.size + 10
                    }
                    at(t, e) && (e += 10)
                }
                return r
            },
            ct = function(t) {
                return "PRIV" === t.type ? ft(t) : "W" === t.type[0] ? vt(t) : gt(t)
            },
            ft = function(t) {
                if (!(t.size < 2)) {
                    var e = pt(t.data, !0),
                        r = new Uint8Array(t.data.subarray(e.length + 1));
                    return {
                        key: t.type,
                        info: e,
                        data: r.buffer
                    }
                }
            },
            gt = function(t) {
                if (!(t.size < 2)) {
                    if ("TXXX" === t.type) {
                        var e = 1,
                            r = pt(t.data.subarray(e), !0);
                        e += r.length + 1;
                        var i = pt(t.data.subarray(e));
                        return {
                            key: t.type,
                            info: r,
                            data: i
                        }
                    }
                    var n = pt(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: n
                    }
                }
            },
            vt = function(t) {
                if ("WXXX" === t.type) {
                    if (t.size < 2)
                        return;
                    var e = 1,
                        r = pt(t.data.subarray(e), !0);
                    e += r.length + 1;
                    var i = pt(t.data.subarray(e));
                    return {
                        key: t.type,
                        info: r,
                        data: i
                    }
                }
                var n = pt(t.data);
                return {
                    key: t.type,
                    data: n
                }
            },
            mt = function(t) {
                if (8 === t.data.byteLength) {
                    var e = new Uint8Array(t.data),
                        r = 1 & e[3],
                        i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                    return i /= 45, r && (i += 47721858.84), Math.round(i)
                }
            },
            pt = function(t, e) {
                void 0 === e && (e = !1);
                var r = yt();
                if (r) {
                    var i = r.decode(t);
                    if (e) {
                        var n = i.indexOf("\0");
                        return -1 !== n ? i.substring(0, n) : i
                    }
                    return i.replace(/\0/g, "")
                }
                for (var a, s, o, l = t.length, u = "", h = 0; h < l;) {
                    if (0 === (a = t[h++]) && e)
                        return u;
                    if (0 !== a && 3 !== a)
                        switch (a >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            u += String.fromCharCode(a);
                            break;
                        case 12:
                        case 13:
                            s = t[h++],
                            u += String.fromCharCode((31 & a) << 6 | 63 & s);
                            break;
                        case 14:
                            s = t[h++],
                            o = t[h++],
                            u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
                        }
                }
                return u
            };
        function yt() {
            return it || void 0 === self.TextDecoder || (it = new self.TextDecoder("utf-8")), it
        }
        var Tt = function(t) {
                for (var e = "", r = 0; r < t.length; r++) {
                    var i = t[r].toString(16);
                    i.length < 2 && (i = "0" + i),
                    e += i
                }
                return e
            },
            Et = Math.pow(2, 32) - 1,
            St = [].push,
            Lt = {
                video: 1,
                audio: 2,
                id3: 3,
                text: 4
            };
        function Rt(t) {
            return String.fromCharCode.apply(null, t)
        }
        function At(t, e) {
            var r = t[e] << 8 | t[e + 1];
            return r < 0 ? 65536 + r : r
        }
        function kt(t, e) {
            var r = bt(t, e);
            return r < 0 ? 4294967296 + r : r
        }
        function bt(t, e) {
            return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
        }
        function Dt(t, e, r) {
            t[e] = r >> 24,
            t[e + 1] = r >> 16 & 255,
            t[e + 2] = r >> 8 & 255,
            t[e + 3] = 255 & r
        }
        function It(t, e) {
            var r = [];
            if (!e.length)
                return r;
            for (var i = t.byteLength, n = 0; n < i;) {
                var a = kt(t, n),
                    s = a > 1 ? n + a : i;
                if (Rt(t.subarray(n + 4, n + 8)) === e[0])
                    if (1 === e.length)
                        r.push(t.subarray(n + 8, s));
                    else {
                        var o = It(t.subarray(n + 8, s), e.slice(1));
                        o.length && St.apply(r, o)
                    }
                n = s
            }
            return r
        }
        function wt(t) {
            var e = [],
                r = t[0],
                i = 8,
                n = kt(t, i);
            i += 4,
            i += 0 === r ? 8 : 16,
            i += 2;
            var a = t.length + 0,
                s = At(t, i);
            i += 2;
            for (var o = 0; o < s; o++) {
                var l = i,
                    u = kt(t, l);
                l += 4;
                var h = 2147483647 & u;
                if (1 == (2147483648 & u) >>> 31)
                    return w.warn("SIDX has hierarchical references (not supported)"), null;
                var d = kt(t, l);
                l += 4,
                e.push({
                    referenceSize: h,
                    subsegmentDuration: d,
                    info: {
                        duration: d / n,
                        start: a,
                        end: a + h - 1
                    }
                }),
                a += h,
                i = l += 4
            }
            return {
                earliestPresentationTime: 0,
                timescale: n,
                version: r,
                referencesCount: s,
                references: e
            }
        }
        function Ct(t) {
            for (var e = [], r = It(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                var n = r[i],
                    a = It(n, ["tkhd"])[0];
                if (a) {
                    var s = a[0],
                        o = 0 === s ? 12 : 20,
                        l = kt(a, o),
                        u = It(n, ["mdia", "mdhd"])[0];
                    if (u) {
                        var h = kt(u, o = 0 === (s = u[0]) ? 12 : 20),
                            d = It(n, ["mdia", "hdlr"])[0];
                        if (d) {
                            var c = Rt(d.subarray(8, 12)),
                                f = {
                                    soun: O,
                                    vide: N
                                }[c];
                            if (f) {
                                var g = It(n, ["mdia", "minf", "stbl", "stsd"])[0],
                                    v = void 0;
                                g && (v = Rt(g.subarray(12, 16))),
                                e[l] = {
                                    timescale: h,
                                    type: f
                                },
                                e[f] = {
                                    timescale: h,
                                    id: l,
                                    codec: v
                                }
                            }
                        }
                    }
                }
            }
            return It(t, ["moov", "mvex", "trex"]).forEach((function(t) {
                var r = kt(t, 4),
                    i = e[r];
                i && (i.default = {
                    duration: kt(t, 12),
                    flags: kt(t, 20)
                })
            })), e
        }
        function _t(t) {
            var e = It(t, ["schm"])[0];
            if (e) {
                var r = Rt(e.subarray(4, 8));
                if ("cbcs" === r || "cenc" === r)
                    return It(t, ["schi", "tenc"])[0]
            }
            return w.error("[eme] missing 'schm' box"), null
        }
        function Pt(t) {
            var e = kt(t, 0),
                r = 8;
            1 & e && (r += 4),
            4 & e && (r += 4);
            for (var i = 0, n = kt(t, 4), a = 0; a < n; a++)
                256 & e && (i += kt(t, r), r += 4),
                512 & e && (r += 4),
                1024 & e && (r += 4),
                2048 & e && (r += 4);
            return i
        }
        function xt(t, e) {
            var r = new Uint8Array(t.length + e.length);
            return r.set(t), r.set(e, t.length), r
        }
        function Ft(t, e) {
            var r = [],
                i = e.samples,
                n = e.timescale,
                a = e.id,
                s = !1;
            return It(i, ["moof"]).map((function(o) {
                var l = o.byteOffset - 8;
                It(o, ["traf"]).map((function(o) {
                    var u = It(o, ["tfdt"]).map((function(t) {
                        var e = t[0],
                            r = kt(t, 4);
                        return 1 === e && (r *= Math.pow(2, 32), r += kt(t, 8)), r / n
                    }))[0];
                    return void 0 !== u && (t = u), It(o, ["tfhd"]).map((function(u) {
                        var h = kt(u, 4),
                            d = 16777215 & kt(u, 0),
                            c = 0,
                            f = 0 != (16 & d),
                            g = 0,
                            v = 0 != (32 & d),
                            m = 8;
                        h === a && (0 != (1 & d) && (m += 8), 0 != (2 & d) && (m += 4), 0 != (8 & d) && (c = kt(u, m), m += 4), f && (g = kt(u, m), m += 4), v && (m += 4), "video" === e.type && (s = function(t) {
                            if (!t)
                                return !1;
                            var e = t.indexOf("."),
                                r = e < 0 ? t : t.substring(0, e);
                            return "hvc1" === r || "hev1" === r || "dvh1" === r || "dvhe" === r
                        }(e.codec)), It(o, ["trun"]).map((function(a) {
                            var o = a[0],
                                u = 16777215 & kt(a, 0),
                                h = 0 != (1 & u),
                                d = 0,
                                f = 0 != (4 & u),
                                v = 0 != (256 & u),
                                m = 0,
                                p = 0 != (512 & u),
                                y = 0,
                                T = 0 != (1024 & u),
                                E = 0 != (2048 & u),
                                S = 0,
                                L = kt(a, 4),
                                R = 8;
                            h && (d = kt(a, R), R += 4),
                            f && (R += 4);
                            for (var A = d + l, k = 0; k < L; k++) {
                                if (v ? (m = kt(a, R), R += 4) : m = c, p ? (y = kt(a, R), R += 4) : y = g, T && (R += 4), E && (S = 0 === o ? kt(a, R) : bt(a, R), R += 4), e.type === N)
                                    for (var b = 0; b < y;) {
                                        var D = kt(i, A);
                                        Mt(s, i[A += 4]) && Ot(i.subarray(A, A + D), s ? 2 : 1, t + S / n, r),
                                        A += D,
                                        b += D + 4
                                    }
                                t += m / n
                            }
                        })))
                    }))
                }))
            })), r
        }
        function Mt(t, e) {
            if (t) {
                var r = e >> 1 & 63;
                return 39 === r || 40 === r
            }
            return 6 == (31 & e)
        }
        function Ot(t, e, r, i) {
            var n = Nt(t),
                a = 0;
            a += e;
            for (var s = 0, o = 0, l = !1, u = 0; a < n.length;) {
                s = 0;
                do {
                    if (a >= n.length)
                        break;
                    s += u = n[a++]
                } while (255 === u);
                o = 0;
                do {
                    if (a >= n.length)
                        break;
                    o += u = n[a++]
                } while (255 === u);
                var h = n.length - a;
                if (!l && 4 === s && a < n.length) {
                    if (l = !0, 181 === n[a++]) {
                        var d = At(n, a);
                        if (a += 2, 49 === d) {
                            var c = kt(n, a);
                            if (a += 4, 1195456820 === c) {
                                var f = n[a++];
                                if (3 === f) {
                                    var g = n[a++],
                                        v = 64 & g,
                                        m = v ? 2 + 3 * (31 & g) : 0,
                                        p = new Uint8Array(m);
                                    if (v) {
                                        p[0] = g;
                                        for (var y = 1; y < m; y++)
                                            p[y] = n[a++]
                                    }
                                    i.push({
                                        type: f,
                                        payloadType: s,
                                        pts: r,
                                        bytes: p
                                    })
                                }
                            }
                        }
                    }
                } else if (5 === s && o < h) {
                    if (l = !0, o > 16) {
                        for (var T = [], E = 0; E < 16; E++) {
                            var S = n[a++].toString(16);
                            T.push(1 == S.length ? "0" + S : S),
                            3 !== E && 5 !== E && 7 !== E && 9 !== E || T.push("-")
                        }
                        for (var L = o - 16, R = new Uint8Array(L), A = 0; A < L; A++)
                            R[A] = n[a++];
                        i.push({
                            payloadType: s,
                            pts: r,
                            uuid: T.join(""),
                            userData: pt(R),
                            userDataBytes: R
                        })
                    }
                } else if (o < h)
                    a += o;
                else if (o > h)
                    break
            }
        }
        function Nt(t) {
            for (var e = t.byteLength, r = [], i = 1; i < e - 2;)
                0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
            if (0 === r.length)
                return t;
            var n = e - r.length,
                a = new Uint8Array(n),
                s = 0;
            for (i = 0; i < n; s++, i++)
                s === r[0] && (s++, r.shift()),
                a[i] = t[s];
            return a
        }
        function Ut(t, e, r) {
            if (16 !== t.byteLength)
                throw new RangeError("Invalid system id");
            var i,
                n,
                a;
            if (e) {
                i = 1,
                n = new Uint8Array(16 * e.length);
                for (var s = 0; s < e.length; s++) {
                    var o = e[s];
                    if (16 !== o.byteLength)
                        throw new RangeError("Invalid key");
                    n.set(o, 16 * s)
                }
            } else
                i = 0,
                n = new Uint8Array;
            i > 0 ? (a = new Uint8Array(4), e.length > 0 && new DataView(a.buffer).setUint32(0, e.length, !1)) : a = new Uint8Array;
            var l = new Uint8Array(4);
            return r && r.byteLength > 0 && new DataView(l.buffer).setUint32(0, r.byteLength, !1), function(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    r[i - 1] = arguments[i];
                for (var n = r.length, a = 8, s = n; s--;)
                    a += r[s].byteLength;
                var o = new Uint8Array(a);
                for (o[0] = a >> 24 & 255, o[1] = a >> 16 & 255, o[2] = a >> 8 & 255, o[3] = 255 & a, o.set(t, 4), s = 0, a = 8; s < n; s++)
                    o.set(r[s], a),
                    a += r[s].byteLength;
                return o
            }([112, 115, 115, 104], new Uint8Array([i, 0, 0, 0]), t, a, n, l, r || new Uint8Array)
        }
        var Bt = {},
            Gt = function() {
                function t(t, e, r, i, n) {
                    void 0 === i && (i = [1]),
                    void 0 === n && (n = null),
                    this.uri = void 0,
                    this.method = void 0,
                    this.keyFormat = void 0,
                    this.keyFormatVersions = void 0,
                    this.encrypted = void 0,
                    this.isCommonEncryption = void 0,
                    this.iv = null,
                    this.key = null,
                    this.keyId = null,
                    this.pssh = null,
                    this.method = t,
                    this.uri = e,
                    this.keyFormat = r,
                    this.keyFormatVersions = i,
                    this.iv = n,
                    this.encrypted = !!t && "NONE" !== t,
                    this.isCommonEncryption = this.encrypted && "AES-128" !== t
                }
                t.clearKeyUriToKeyIdMap = function() {
                    Bt = {}
                };
                var e = t.prototype;
                return e.isSupported = function() {
                    if (this.method) {
                        if ("AES-128" === this.method || "NONE" === this.method)
                            return !0;
                        if ("identity" === this.keyFormat)
                            return "SAMPLE-AES" === this.method;
                        switch (this.keyFormat) {
                        case X:
                        case Q:
                        case z:
                        case q:
                            return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method)
                        }
                    }
                    return !1
                }, e.getDecryptData = function(e) {
                    if (!this.encrypted || !this.uri)
                        return null;
                    if ("AES-128" === this.method && this.uri && !this.iv) {
                        "number" != typeof e && ("AES-128" !== this.method || this.iv || w.warn('missing IV for initialization segment with method="' + this.method + '" - compliance issue'), e = 0);
                        var r = function(t) {
                            for (var e = new Uint8Array(16), r = 12; r < 16; r++)
                                e[r] = t >> 8 * (15 - r) & 255;
                            return e
                        }(e);
                        return new t(this.method, this.uri, "identity", this.keyFormatVersions, r)
                    }
                    var i = Y(this.uri);
                    if (i)
                        switch (this.keyFormat) {
                        case Q:
                            this.pssh = i,
                            i.length >= 22 && (this.keyId = i.subarray(i.length - 22, i.length - 6));
                            break;
                        case z:
                            var n = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                            this.pssh = Ut(n, null, i);
                            var a = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2),
                                s = String.fromCharCode.apply(null, Array.from(a)),
                                o = s.substring(s.indexOf("<"), s.length),
                                l = (new DOMParser).parseFromString(o, "text/xml").getElementsByTagName("KID")[0];
                            if (l) {
                                var u = l.childNodes[0] ? l.childNodes[0].nodeValue : l.getAttribute("VALUE");
                                if (u) {
                                    var h = V(u).subarray(0, 16);
                                    !function(t) {
                                        var e = function(t, e, r) {
                                            var i = t[e];
                                            t[e] = t[r],
                                            t[r] = i
                                        };
                                        e(t, 0, 3),
                                        e(t, 1, 2),
                                        e(t, 4, 5),
                                        e(t, 6, 7)
                                    }(h),
                                    this.keyId = h
                                }
                            }
                            break;
                        default:
                            var d = i.subarray(0, 16);
                            if (16 !== d.length) {
                                var c = new Uint8Array(16);
                                c.set(d, 16 - d.length),
                                d = c
                            }
                            this.keyId = d
                        }
                    if (!this.keyId || 16 !== this.keyId.byteLength) {
                        var f = Bt[this.uri];
                        if (!f) {
                            var g = Object.keys(Bt).length % Number.MAX_SAFE_INTEGER;
                            f = new Uint8Array(16),
                            new DataView(f.buffer, 12, 4).setUint32(0, g),
                            Bt[this.uri] = f
                        }
                        this.keyId = f
                    }
                    return this
                }, t
            }(),
            Kt = /\{\$([a-zA-Z0-9-_]+)\}/g;
        function Ht(t) {
            return Kt.test(t)
        }
        function Vt(t, e, r) {
            if (null !== t.variableList || t.hasVariableRefs)
                for (var i = r.length; i--;) {
                    var n = r[i],
                        a = e[n];
                    a && (e[n] = Yt(t, a))
                }
        }
        function Yt(t, e) {
            if (null !== t.variableList || t.hasVariableRefs) {
                var r = t.variableList;
                return e.replace(Kt, (function(e) {
                    var i = e.substring(2, e.length - 1),
                        n = null == r ? void 0 : r[i];
                    return void 0 === n ? (t.playlistParsingError || (t.playlistParsingError = new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "' + i + '"')), e) : n
                }))
            }
            return e
        }
        function Wt(t, e, r) {
            var i,
                n,
                a = t.variableList;
            if (a || (t.variableList = a = {}), "QUERYPARAM" in e) {
                i = e.QUERYPARAM;
                try {
                    var s = new self.URL(r).searchParams;
                    if (!s.has(i))
                        throw new Error('"' + i + '" does not match any query parameter in URI: "' + r + '"');
                    n = s.get(i)
                } catch (e) {
                    t.playlistParsingError || (t.playlistParsingError = new Error("EXT-X-DEFINE QUERYPARAM: " + e.message))
                }
            } else
                i = e.NAME,
                n = e.VALUE;
            i in a ? t.playlistParsingError || (t.playlistParsingError = new Error('EXT-X-DEFINE duplicate Variable Name declarations: "' + i + '"')) : a[i] = n || ""
        }
        function jt(t, e, r) {
            var i = e.IMPORT;
            if (r && i in r) {
                var n = t.variableList;
                n || (t.variableList = n = {}),
                n[i] = r[i]
            } else
                t.playlistParsingError || (t.playlistParsingError = new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "' + i + '"'))
        }
        function qt() {
            if ("undefined" != typeof self)
                return self.MediaSource || self.WebKitMediaSource
        }
        var Xt = {
                audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0
                },
                video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    av01: !0,
                    drac: !0,
                    dva1: !0,
                    dvav: !0,
                    dvh1: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0
                },
                text: {
                    stpp: !0,
                    wvtt: !0
                }
            },
            zt = qt();
        function Qt(t, e) {
            var r;
            return null != (r = null == zt ? void 0 : zt.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')) && r
        }
        var $t = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
            Jt = /#EXT-X-MEDIA:(.*)/g,
            Zt = /^#EXT(?:INF|-X-TARGETDURATION):/m,
            te = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
            ee = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
            re = function() {
                function t() {}
                return t.findGroup = function(t, e) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.id === e)
                            return i
                    }
                }, t.convertAVC1ToAVCOTI = function(t) {
                    var e = t.split(".");
                    if (e.length > 2) {
                        var r = e.shift() + ".";
                        return r += parseInt(e.shift()).toString(16), r += ("000" + parseInt(e.shift()).toString(16)).slice(-4)
                    }
                    return t
                }, t.resolve = function(t, e) {
                    return T.buildAbsoluteURL(e, t, {
                        alwaysNormalize: !0
                    })
                }, t.isMediaPlaylist = function(t) {
                    return Zt.test(t)
                }, t.parseMasterPlaylist = function(e, r) {
                    var i,
                        n = {
                            contentSteering: null,
                            levels: [],
                            playlistParsingError: null,
                            sessionData: null,
                            sessionKeys: null,
                            startTimeOffset: null,
                            variableList: null,
                            hasVariableRefs: Ht(e)
                        },
                        a = [];
                    for ($t.lastIndex = 0; null != (i = $t.exec(e));)
                        if (i[1]) {
                            var s,
                                o = new P(i[1]);
                            Vt(n, o, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
                            var l = Yt(n, i[2]),
                                u = {
                                    attrs: o,
                                    bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                                    name: o.NAME,
                                    url: t.resolve(l, r)
                                },
                                h = o.decimalResolution("RESOLUTION");
                            h && (u.width = h.width, u.height = h.height),
                            ae((o.CODECS || "").split(/[ ,]+/).filter((function(t) {
                                return t
                            })), u),
                            u.videoCodec && -1 !== u.videoCodec.indexOf("avc1") && (u.videoCodec = t.convertAVC1ToAVCOTI(u.videoCodec)),
                            null != (s = u.unknownCodecs) && s.length || a.push(u),
                            n.levels.push(u)
                        } else if (i[3]) {
                            var d = i[3],
                                c = i[4];
                            switch (d) {
                            case "SESSION-DATA":
                                var f = new P(c);
                                Vt(n, f, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                                var g = f["DATA-ID"];
                                g && (null === n.sessionData && (n.sessionData = {}), n.sessionData[g] = f);
                                break;
                            case "SESSION-KEY":
                                var v = ie(c, r, n);
                                v.encrypted && v.isSupported() ? (null === n.sessionKeys && (n.sessionKeys = []), n.sessionKeys.push(v)) : w.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + c + '"');
                                break;
                            case "DEFINE":
                                var m = new P(c);
                                Vt(n, m, ["NAME", "VALUE", "QUERYPARAM"]),
                                Wt(n, m, r);
                                break;
                            case "CONTENT-STEERING":
                                var p = new P(c);
                                Vt(n, p, ["SERVER-URI", "PATHWAY-ID"]),
                                n.contentSteering = {
                                    uri: t.resolve(p["SERVER-URI"], r),
                                    pathwayId: p["PATHWAY-ID"] || "."
                                };
                                break;
                            case "START":
                                n.startTimeOffset = ne(c)
                            }
                        }
                    var y = a.length > 0 && a.length < n.levels.length;
                    return n.levels = y ? a : n.levels, 0 === n.levels.length && (n.playlistParsingError = new Error("no levels found in manifest")), n
                }, t.parseMasterPlaylistMedia = function(e, r, i) {
                    var n,
                        a = {},
                        s = i.levels,
                        o = {
                            AUDIO: s.map((function(t) {
                                return {
                                    id: t.attrs.AUDIO,
                                    audioCodec: t.audioCodec
                                }
                            })),
                            SUBTITLES: s.map((function(t) {
                                return {
                                    id: t.attrs.SUBTITLES,
                                    textCodec: t.textCodec
                                }
                            })),
                            "CLOSED-CAPTIONS": []
                        },
                        l = 0;
                    for (Jt.lastIndex = 0; null !== (n = Jt.exec(e));) {
                        var u = new P(n[1]),
                            h = u.TYPE;
                        if (h) {
                            var d = o[h],
                                c = a[h] || [];
                            a[h] = c,
                            Vt(i, u, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                            var f = {
                                attrs: u,
                                bitrate: 0,
                                id: l++,
                                groupId: u["GROUP-ID"] || "",
                                instreamId: u["INSTREAM-ID"],
                                name: u.NAME || u.LANGUAGE || "",
                                type: h,
                                default: u.bool("DEFAULT"),
                                autoselect: u.bool("AUTOSELECT"),
                                forced: u.bool("FORCED"),
                                lang: u.LANGUAGE,
                                url: u.URI ? t.resolve(u.URI, r) : ""
                            };
                            if (null != d && d.length) {
                                var g = t.findGroup(d, f.groupId) || d[0];
                                se(f, g, "audioCodec"),
                                se(f, g, "textCodec")
                            }
                            c.push(f)
                        }
                    }
                    return a
                }, t.parseLevelPlaylist = function(t, e, r, i, n, a) {
                    var s,
                        l,
                        u,
                        h = new H(e),
                        d = h.fragments,
                        c = null,
                        f = 0,
                        g = 0,
                        v = 0,
                        m = 0,
                        p = null,
                        y = new G(i, e),
                        T = -1,
                        S = !1;
                    for (te.lastIndex = 0, h.m3u8 = t, h.hasVariableRefs = Ht(t); null !== (s = te.exec(t));) {
                        S && (S = !1, (y = new G(i, e)).start = v, y.sn = f, y.cc = m, y.level = r, c && (y.initSegment = c, y.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null));
                        var L = s[1];
                        if (L) {
                            y.duration = parseFloat(L);
                            var R = (" " + s[2]).slice(1);
                            y.title = R || null,
                            y.tagList.push(R ? ["INF", L, R] : ["INF", L])
                        } else if (s[3]) {
                            if (E(y.duration)) {
                                y.start = v,
                                u && ue(y, u, h),
                                y.sn = f,
                                y.level = r,
                                y.cc = m,
                                y.urlId = n,
                                d.push(y);
                                var A = (" " + s[3]).slice(1);
                                y.relurl = Yt(h, A),
                                oe(y, p),
                                p = y,
                                v += y.duration,
                                f++,
                                g = 0,
                                S = !0
                            }
                        } else if (s[4]) {
                            var k = (" " + s[4]).slice(1);
                            p ? y.setByteRange(k, p) : y.setByteRange(k)
                        } else if (s[5])
                            y.rawProgramDateTime = (" " + s[5]).slice(1),
                            y.tagList.push(["PROGRAM-DATE-TIME", y.rawProgramDateTime]),
                            -1 === T && (T = d.length);
                        else {
                            if (!(s = s[0].match(ee))) {
                                w.warn("No matches on slow regex match for level playlist!");
                                continue
                            }
                            for (l = 1; l < s.length && void 0 === s[l]; l++)
                                ;
                            var b = (" " + s[l]).slice(1),
                                D = (" " + s[l + 1]).slice(1),
                                I = s[l + 2] ? (" " + s[l + 2]).slice(1) : "";
                            switch (b) {
                            case "PLAYLIST-TYPE":
                                h.type = D.toUpperCase();
                                break;
                            case "MEDIA-SEQUENCE":
                                f = h.startSN = parseInt(D);
                                break;
                            case "SKIP":
                                var C = new P(D);
                                Vt(h, C, ["RECENTLY-REMOVED-DATERANGES"]);
                                var _ = C.decimalInteger("SKIPPED-SEGMENTS");
                                if (E(_)) {
                                    h.skippedSegments = _;
                                    for (var x = _; x--;)
                                        d.unshift(null);
                                    f += _
                                }
                                var M = C.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                M && (h.recentlyRemovedDateranges = M.split("\t"));
                                break;
                            case "TARGETDURATION":
                                h.targetduration = Math.max(parseInt(D), 1);
                                break;
                            case "VERSION":
                                h.version = parseInt(D);
                                break;
                            case "EXTM3U":
                                break;
                            case "ENDLIST":
                                h.live = !1;
                                break;
                            case "#":
                                (D || I) && y.tagList.push(I ? [D, I] : [D]);
                                break;
                            case "DISCONTINUITY":
                                m++,
                                y.tagList.push(["DIS"]);
                                break;
                            case "GAP":
                                y.gap = !0,
                                y.tagList.push([b]);
                                break;
                            case "BITRATE":
                                y.tagList.push([b, D]);
                                break;
                            case "DATERANGE":
                                var O = new P(D);
                                Vt(h, O, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]),
                                Vt(h, O, O.clientAttrs);
                                var N = new F(O, h.dateRanges[O.ID]);
                                N.isValid || h.skippedSegments ? h.dateRanges[N.id] = N : w.warn('Ignoring invalid DATERANGE tag: "' + D + '"'),
                                y.tagList.push(["EXT-X-DATERANGE", D]);
                                break;
                            case "DEFINE":
                                var U = new P(D);
                                Vt(h, U, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]),
                                "IMPORT" in U ? jt(h, U, a) : Wt(h, U, e);
                                break;
                            case "DISCONTINUITY-SEQUENCE":
                                m = parseInt(D);
                                break;
                            case "KEY":
                                var B = ie(D, e, h);
                                if (B.isSupported()) {
                                    if ("NONE" === B.method) {
                                        u = void 0;
                                        break
                                    }
                                    u || (u = {}),
                                    u[B.keyFormat] && (u = o({}, u)),
                                    u[B.keyFormat] = B
                                } else
                                    w.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + D + '"');
                                break;
                            case "START":
                                h.startTimeOffset = ne(D);
                                break;
                            case "MAP":
                                var V = new P(D);
                                if (Vt(h, V, ["BYTERANGE", "URI"]), y.duration) {
                                    var Y = new G(i, e);
                                    le(Y, V, r, u),
                                    c = Y,
                                    y.initSegment = c,
                                    c.rawProgramDateTime && !y.rawProgramDateTime && (y.rawProgramDateTime = c.rawProgramDateTime)
                                } else
                                    le(y, V, r, u),
                                    c = y,
                                    S = !0;
                                break;
                            case "SERVER-CONTROL":
                                var W = new P(D);
                                h.canBlockReload = W.bool("CAN-BLOCK-RELOAD"),
                                h.canSkipUntil = W.optionalFloat("CAN-SKIP-UNTIL", 0),
                                h.canSkipDateRanges = h.canSkipUntil > 0 && W.bool("CAN-SKIP-DATERANGES"),
                                h.partHoldBack = W.optionalFloat("PART-HOLD-BACK", 0),
                                h.holdBack = W.optionalFloat("HOLD-BACK", 0);
                                break;
                            case "PART-INF":
                                var j = new P(D);
                                h.partTarget = j.decimalFloatingPoint("PART-TARGET");
                                break;
                            case "PART":
                                var q = h.partList;
                                q || (q = h.partList = []);
                                var X = g > 0 ? q[q.length - 1] : void 0,
                                    z = g++,
                                    Q = new P(D);
                                Vt(h, Q, ["BYTERANGE", "URI"]);
                                var $ = new K(Q, y, e, z, X);
                                q.push($),
                                y.duration += $.duration;
                                break;
                            case "PRELOAD-HINT":
                                var J = new P(D);
                                Vt(h, J, ["URI"]),
                                h.preloadHint = J;
                                break;
                            case "RENDITION-REPORT":
                                var Z = new P(D);
                                Vt(h, Z, ["URI"]),
                                h.renditionReports = h.renditionReports || [],
                                h.renditionReports.push(Z);
                                break;
                            default:
                                w.warn("line parsed but not handled: " + s)
                            }
                        }
                    }
                    p && !p.relurl ? (d.pop(), v -= p.duration, h.partList && (h.fragmentHint = p)) : h.partList && (oe(y, p), y.cc = m, h.fragmentHint = y, u && ue(y, u, h));
                    var tt = d.length,
                        et = d[0],
                        rt = d[tt - 1];
                    if ((v += h.skippedSegments * h.targetduration) > 0 && tt && rt) {
                        h.averagetargetduration = v / tt;
                        var it = rt.sn;
                        h.endSN = "initSegment" !== it ? it : 0,
                        h.live || (rt.endList = !0),
                        et && (h.startCC = et.cc)
                    } else
                        h.endSN = 0,
                        h.startCC = 0;
                    return h.fragmentHint && (v += h.fragmentHint.duration), h.totalduration = v, h.endCC = m, T > 0 && function(t, e) {
                        for (var r = t[e], i = e; i--;) {
                            var n = t[i];
                            if (!n)
                                return;
                            n.programDateTime = r.programDateTime - 1e3 * n.duration,
                            r = n
                        }
                    }(d, T), h
                }, t
            }();
        function ie(t, e, r) {
            var i,
                n,
                a = new P(t);
            Vt(r, a, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
            var s = null != (i = a.METHOD) ? i : "",
                o = a.URI,
                l = a.hexadecimalInteger("IV"),
                u = a.KEYFORMATVERSIONS,
                h = null != (n = a.KEYFORMAT) ? n : "identity";
            o && a.IV && !l && w.error("Invalid IV: " + a.IV);
            var d = o ? re.resolve(o, e) : "",
                c = (u || "1").split("/").map(Number).filter(Number.isFinite);
            return new Gt(s, d, h, c, l)
        }
        function ne(t) {
            var e = new P(t).decimalFloatingPoint("TIME-OFFSET");
            return E(e) ? e : null
        }
        function ae(t, e) {
            ["video", "audio", "text"].forEach((function(r) {
                var i = t.filter((function(t) {
                    return function(t, e) {
                        var r = Xt[e];
                        return !!r && !0 === r[t.slice(0, 4)]
                    }(t, r)
                }));
                if (i.length) {
                    var n = i.filter((function(t) {
                        return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                    }));
                    e[r + "Codec"] = n.length > 0 ? n[0] : i[0],
                    t = t.filter((function(t) {
                        return -1 === i.indexOf(t)
                    }))
                }
            })),
            e.unknownCodecs = t
        }
        function se(t, e, r) {
            var i = e[r];
            i && (t[r] = i)
        }
        function oe(t, e) {
            t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime),
            E(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
        }
        function le(t, e, r, i) {
            t.relurl = e.URI,
            e.BYTERANGE && t.setByteRange(e.BYTERANGE),
            t.level = r,
            t.sn = "initSegment",
            i && (t.levelkeys = i),
            t.initSegment = null
        }
        function ue(t, e, r) {
            t.levelkeys = e;
            var i = r.encryptedFragments;
            i.length && i[i.length - 1].levelkeys === e || !Object.keys(e).some((function(t) {
                return e[t].isCommonEncryption
            })) || i.push(t)
        }
        var he = "manifest",
            de = "level",
            ce = "audioTrack",
            fe = "subtitleTrack",
            ge = "main",
            ve = "audio",
            me = "subtitle";
        function pe(t) {
            switch (t.type) {
            case ce:
                return ve;
            case fe:
                return me;
            default:
                return ge
            }
        }
        function ye(t, e) {
            var r = t.url;
            return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
        }
        var Te = function() {
            function t(t) {
                this.hls = void 0,
                this.loaders = Object.create(null),
                this.variableList = null,
                this.hls = t,
                this.registerListeners()
            }
            var e = t.prototype;
            return e.startLoad = function(t) {}, e.stopLoad = function() {
                this.destroyInternalLoaders()
            }, e.registerListeners = function() {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(S.LEVEL_LOADING, this.onLevelLoading, this),
                t.on(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                t.on(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
            }, e.unregisterListeners = function() {
                var t = this.hls;
                t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(S.LEVEL_LOADING, this.onLevelLoading, this),
                t.off(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                t.off(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
            }, e.createInternalLoader = function(t) {
                var e = this.hls.config,
                    r = e.pLoader,
                    i = e.loader,
                    n = new (r || i)(e);
                return this.loaders[t.type] = n, n
            }, e.getInternalLoader = function(t) {
                return this.loaders[t.type]
            }, e.resetInternalLoader = function(t) {
                this.loaders[t] && delete this.loaders[t]
            }, e.destroyInternalLoaders = function() {
                for (var t in this.loaders) {
                    var e = this.loaders[t];
                    e && e.destroy(),
                    this.resetInternalLoader(t)
                }
            }, e.destroy = function() {
                this.variableList = null,
                this.unregisterListeners(),
                this.destroyInternalLoaders()
            }, e.onManifestLoading = function(t, e) {
                var r = e.url;
                this.variableList = null,
                this.load({
                    id: null,
                    level: 0,
                    responseType: "text",
                    type: he,
                    url: r,
                    deliveryDirectives: null
                })
            }, e.onLevelLoading = function(t, e) {
                var r = e.id,
                    i = e.level,
                    n = e.url,
                    a = e.deliveryDirectives;
                this.load({
                    id: r,
                    level: i,
                    responseType: "text",
                    type: de,
                    url: n,
                    deliveryDirectives: a
                })
            }, e.onAudioTrackLoading = function(t, e) {
                var r = e.id,
                    i = e.groupId,
                    n = e.url,
                    a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: ce,
                    url: n,
                    deliveryDirectives: a
                })
            }, e.onSubtitleTrackLoading = function(t, e) {
                var r = e.id,
                    i = e.groupId,
                    n = e.url,
                    a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: fe,
                    url: n,
                    deliveryDirectives: a
                })
            }, e.load = function(t) {
                var e,
                    r,
                    i,
                    n = this,
                    a = this.hls.config,
                    s = this.getInternalLoader(t);
                if (s) {
                    var l = s.context;
                    if (l && l.url === t.url)
                        return void w.trace("[playlist-loader]: playlist request ongoing");
                    w.log("[playlist-loader]: aborting previous loader for type: " + t.type),
                    s.abort()
                }
                if (r = t.type === he ? a.manifestLoadPolicy.default : o({}, a.playlistLoadPolicy.default, {
                    timeoutRetry: null,
                    errorRetry: null
                }), s = this.createInternalLoader(t), null != (e = t.deliveryDirectives) && e.part && (t.type === de && null !== t.level ? i = this.hls.levels[t.level].details : t.type === ce && null !== t.id ? i = this.hls.audioTracks[t.id].details : t.type === fe && null !== t.id && (i = this.hls.subtitleTracks[t.id].details), i)) {
                    var u = i.partTarget,
                        h = i.targetduration;
                    if (u && h) {
                        var d = 1e3 * Math.max(3 * u, .8 * h);
                        r = o({}, r, {
                            maxTimeToFirstByteMs: Math.min(d, r.maxTimeToFirstByteMs),
                            maxLoadTimeMs: Math.min(d, r.maxTimeToFirstByteMs)
                        })
                    }
                }
                var c = r.errorRetry || r.timeoutRetry || {},
                    f = {
                        loadPolicy: r,
                        timeout: r.maxLoadTimeMs,
                        maxRetry: c.maxNumRetry || 0,
                        retryDelay: c.retryDelayMs || 0,
                        maxRetryDelay: c.maxRetryDelayMs || 0
                    },
                    g = {
                        onSuccess: function(t, e, r, i) {
                            var a = n.getInternalLoader(r);
                            n.resetInternalLoader(r.type);
                            var s = t.data;
                            0 === s.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), re.isMediaPlaylist(s) ? n.handleTrackOrLevelPlaylist(t, e, r, i || null, a) : n.handleMasterPlaylist(t, e, r, i)) : n.handleManifestParsingError(t, r, new Error("no EXTM3U delimiter"), i || null, e)
                        },
                        onError: function(t, e, r, i) {
                            n.handleNetworkError(e, r, !1, t, i)
                        },
                        onTimeout: function(t, e, r) {
                            n.handleNetworkError(e, r, !0, void 0, t)
                        }
                    };
                s.load(t, f, g)
            }, e.handleMasterPlaylist = function(t, e, r, i) {
                var n = this.hls,
                    a = t.data,
                    s = ye(t, r),
                    o = re.parseMasterPlaylist(a, s);
                if (o.playlistParsingError)
                    this.handleManifestParsingError(t, r, o.playlistParsingError, i, e);
                else {
                    var l = o.contentSteering,
                        u = o.levels,
                        h = o.sessionData,
                        d = o.sessionKeys,
                        c = o.startTimeOffset,
                        f = o.variableList;
                    this.variableList = f;
                    var g = re.parseMasterPlaylistMedia(a, s, o),
                        v = g.AUDIO,
                        m = void 0 === v ? [] : v,
                        p = g.SUBTITLES,
                        y = g["CLOSED-CAPTIONS"];
                    m.length && (m.some((function(t) {
                        return !t.url
                    })) || !u[0].audioCodec || u[0].attrs.AUDIO || (w.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
                        type: "main",
                        name: "main",
                        groupId: "main",
                        default: !1,
                        autoselect: !1,
                        forced: !1,
                        id: -1,
                        attrs: new P({}),
                        bitrate: 0,
                        url: ""
                    }))),
                    n.trigger(S.MANIFEST_LOADED, {
                        levels: u,
                        audioTracks: m,
                        subtitles: p,
                        captions: y,
                        contentSteering: l,
                        url: s,
                        stats: e,
                        networkDetails: i,
                        sessionData: h,
                        sessionKeys: d,
                        startTimeOffset: c,
                        variableList: f
                    })
                }
            }, e.handleTrackOrLevelPlaylist = function(t, e, r, i, n) {
                var a = this.hls,
                    s = r.id,
                    o = r.level,
                    l = r.type,
                    u = ye(t, r),
                    h = E(s) ? s : 0,
                    d = E(o) ? o : h,
                    c = pe(r),
                    f = re.parseLevelPlaylist(t.data, u, d, c, h, this.variableList);
                if (l === he) {
                    var g = {
                        attrs: new P({}),
                        bitrate: 0,
                        details: f,
                        name: "",
                        url: u
                    };
                    a.trigger(S.MANIFEST_LOADED, {
                        levels: [g],
                        audioTracks: [],
                        url: u,
                        stats: e,
                        networkDetails: i,
                        sessionData: null,
                        sessionKeys: null,
                        contentSteering: null,
                        startTimeOffset: null,
                        variableList: null
                    })
                }
                e.parsing.end = performance.now(),
                r.levelDetails = f,
                this.handlePlaylistLoaded(f, t, e, r, i, n)
            }, e.handleManifestParsingError = function(t, e, r, i, n) {
                this.hls.trigger(S.ERROR, {
                    type: L.NETWORK_ERROR,
                    details: R.MANIFEST_PARSING_ERROR,
                    fatal: e.type === he,
                    url: t.url,
                    err: r,
                    error: r,
                    reason: r.message,
                    response: t,
                    context: e,
                    networkDetails: i,
                    stats: n
                })
            }, e.handleNetworkError = function(t, e, r, n, a) {
                void 0 === r && (r = !1);
                var s = "A network " + (r ? "timeout" : "error" + (n ? " (status " + n.code + ")" : "")) + " occurred while loading " + t.type;
                t.type === de ? s += ": " + t.level + " id: " + t.id : t.type !== ce && t.type !== fe || (s += " id: " + t.id + ' group-id: "' + t.groupId + '"');
                var o = new Error(s);
                w.warn("[playlist-loader]: " + s);
                var l = R.UNKNOWN,
                    u = !1,
                    h = this.getInternalLoader(t);
                switch (t.type) {
                case he:
                    l = r ? R.MANIFEST_LOAD_TIMEOUT : R.MANIFEST_LOAD_ERROR,
                    u = !0;
                    break;
                case de:
                    l = r ? R.LEVEL_LOAD_TIMEOUT : R.LEVEL_LOAD_ERROR,
                    u = !1;
                    break;
                case ce:
                    l = r ? R.AUDIO_TRACK_LOAD_TIMEOUT : R.AUDIO_TRACK_LOAD_ERROR,
                    u = !1;
                    break;
                case fe:
                    l = r ? R.SUBTITLE_TRACK_LOAD_TIMEOUT : R.SUBTITLE_LOAD_ERROR,
                    u = !1
                }
                h && this.resetInternalLoader(t.type);
                var d = {
                    type: L.NETWORK_ERROR,
                    details: l,
                    fatal: u,
                    url: t.url,
                    loader: h,
                    context: t,
                    error: o,
                    networkDetails: e,
                    stats: a
                };
                if (n) {
                    var c = (null == e ? void 0 : e.url) || t.url;
                    d.response = i({
                        url: c,
                        data: void 0
                    }, n)
                }
                this.hls.trigger(S.ERROR, d)
            }, e.handlePlaylistLoaded = function(t, e, r, i, n, a) {
                var s = this.hls,
                    o = i.type,
                    l = i.level,
                    u = i.id,
                    h = i.groupId,
                    d = i.deliveryDirectives,
                    c = ye(e, i),
                    f = pe(i),
                    g = "number" == typeof i.level && f === ge ? l : void 0;
                if (t.fragments.length) {
                    t.targetduration || (t.playlistParsingError = new Error("Missing Target Duration"));
                    var v = t.playlistParsingError;
                    if (v)
                        s.trigger(S.ERROR, {
                            type: L.NETWORK_ERROR,
                            details: R.LEVEL_PARSING_ERROR,
                            fatal: !1,
                            url: c,
                            error: v,
                            reason: v.message,
                            response: e,
                            context: i,
                            level: g,
                            parent: f,
                            networkDetails: n,
                            stats: r
                        });
                    else
                        switch (t.live && a && (a.getCacheAge && (t.ageHeader = a.getCacheAge() || 0), a.getCacheAge && !isNaN(t.ageHeader) || (t.ageHeader = 0)), o) {
                        case he:
                        case de:
                            s.trigger(S.LEVEL_LOADED, {
                                details: t,
                                level: g || 0,
                                id: u || 0,
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            });
                            break;
                        case ce:
                            s.trigger(S.AUDIO_TRACK_LOADED, {
                                details: t,
                                id: u || 0,
                                groupId: h || "",
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            });
                            break;
                        case fe:
                            s.trigger(S.SUBTITLE_TRACK_LOADED, {
                                details: t,
                                id: u || 0,
                                groupId: h || "",
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            })
                        }
                } else {
                    var m = new Error("No Segments found in Playlist");
                    s.trigger(S.ERROR, {
                        type: L.NETWORK_ERROR,
                        details: R.LEVEL_EMPTY_ERROR,
                        fatal: !1,
                        url: c,
                        error: m,
                        reason: m.message,
                        response: e,
                        context: i,
                        level: g,
                        parent: f,
                        networkDetails: n,
                        stats: r
                    })
                }
            }, t
        }();
        function Ee(t, e) {
            var r;
            try {
                r = new Event("addtrack")
            } catch (t) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = t,
            e.dispatchEvent(r)
        }
        function Se(t, e) {
            var r = t.mode;
            if ("disabled" === r && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id))
                try {
                    if (t.addCue(e), !t.cues.getCueById(e.id))
                        throw new Error("addCue is failed for: " + e)
                } catch (r) {
                    w.debug("[texttrack-utils]: " + r);
                    try {
                        var i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                        i.id = e.id,
                        t.addCue(i)
                    } catch (t) {
                        w.debug("[texttrack-utils]: Legacy TextTrackCue fallback failed: " + t)
                    }
                }
            "disabled" === r && (t.mode = r)
        }
        function Le(t) {
            var e = t.mode;
            if ("disabled" === e && (t.mode = "hidden"), t.cues)
                for (var r = t.cues.length; r--;)
                    t.removeCue(t.cues[r]);
            "disabled" === e && (t.mode = e)
        }
        function Re(t, e, r, i) {
            var n = t.mode;
            if ("disabled" === n && (t.mode = "hidden"), t.cues && t.cues.length > 0)
                for (var a = function(t, e, r) {
                        var i = [],
                            n = function(t, e) {
                                if (e < t[0].startTime)
                                    return 0;
                                var r = t.length - 1;
                                if (e > t[r].endTime)
                                    return -1;
                                for (var i = 0, n = r; i <= n;) {
                                    var a = Math.floor((n + i) / 2);
                                    if (e < t[a].startTime)
                                        n = a - 1;
                                    else {
                                        if (!(e > t[a].startTime && i < r))
                                            return a;
                                        i = a + 1
                                    }
                                }
                                return t[i].startTime - e < e - t[n].startTime ? i : n
                            }(t, e);
                        if (n > -1)
                            for (var a = n, s = t.length; a < s; a++) {
                                var o = t[a];
                                if (o.startTime >= e && o.endTime <= r)
                                    i.push(o);
                                else if (o.startTime > r)
                                    return i
                            }
                        return i
                    }(t.cues, e, r), s = 0; s < a.length; s++)
                    i && !i(a[s]) || t.removeCue(a[s]);
            "disabled" === n && (t.mode = n)
        }
        var Ae = "org.id3",
            ke = "com.apple.quicktime.HLS",
            be = "https://aomedia.org/emsg/ID3";
        function De() {
            if ("undefined" != typeof self)
                return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
        }
        var Ie = function() {
            var t = De();
            try {
                new t(0, Number.POSITIVE_INFINITY, "")
            } catch (t) {
                return Number.MAX_VALUE
            }
            return Number.POSITIVE_INFINITY
        }();
        function we(t, e) {
            return t.getTime() / 1e3 - e
        }
        var Ce = function() {
                function t(t) {
                    this.hls = void 0,
                    this.id3Track = null,
                    this.media = null,
                    this.dateRangeCuesAppended = {},
                    this.hls = t,
                    this._registerListeners()
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this._unregisterListeners(),
                    this.id3Track = null,
                    this.media = null,
                    this.dateRangeCuesAppended = {},
                    this.hls = null
                }, e._registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                    t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this)
                }, e._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                    t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this)
                }, e.onMediaAttached = function(t, e) {
                    this.media = e.media
                }, e.onMediaDetaching = function() {
                    this.id3Track && (Le(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
                }, e.onManifestLoading = function() {
                    this.dateRangeCuesAppended = {}
                }, e.createTrack = function(t) {
                    var e = this.getID3Track(t.textTracks);
                    return e.mode = "hidden", e
                }, e.getID3Track = function(t) {
                    if (this.media) {
                        for (var e = 0; e < t.length; e++) {
                            var r = t[e];
                            if ("metadata" === r.kind && "id3" === r.label)
                                return Ee(r, this.media), r
                        }
                        return this.media.addTextTrack("metadata", "id3")
                    }
                }, e.onFragParsingMetadata = function(t, e) {
                    if (this.media) {
                        var r = this.hls.config,
                            i = r.enableEmsgMetadataCues,
                            n = r.enableID3MetadataCues;
                        if (i || n) {
                            var a = e.samples;
                            this.id3Track || (this.id3Track = this.createTrack(this.media));
                            for (var s = De(), o = 0; o < a.length; o++) {
                                var l = a[o].type;
                                if ((l !== be || i) && n) {
                                    var u = dt(a[o].data);
                                    if (u) {
                                        var h = a[o].pts,
                                            d = h + a[o].duration;
                                        d > Ie && (d = Ie),
                                        d - h <= 0 && (d = h + .25);
                                        for (var c = 0; c < u.length; c++) {
                                            var f = u[c];
                                            if (!ut(f)) {
                                                this.updateId3CueEnds(h, l);
                                                var g = new s(h, d, "");
                                                g.value = f,
                                                l && (g.type = l),
                                                this.id3Track.addCue(g)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, e.updateId3CueEnds = function(t, e) {
                    var r,
                        i = null == (r = this.id3Track) ? void 0 : r.cues;
                    if (i)
                        for (var n = i.length; n--;) {
                            var a = i[n];
                            a.type === e && a.startTime < t && a.endTime === Ie && (a.endTime = t)
                        }
                }, e.onBufferFlushing = function(t, e) {
                    var r = e.startOffset,
                        i = e.endOffset,
                        n = e.type,
                        a = this.id3Track,
                        s = this.hls;
                    if (s) {
                        var o = s.config,
                            l = o.enableEmsgMetadataCues,
                            u = o.enableID3MetadataCues;
                        a && (l || u) && Re(a, r, i, "audio" === n ? function(t) {
                            return t.type === Ae && u
                        } : "video" === n ? function(t) {
                            return t.type === be && l
                        } : function(t) {
                            return t.type === Ae && u || t.type === be && l
                        })
                    }
                }, e.onLevelUpdated = function(t, e) {
                    var r = this,
                        i = e.details;
                    if (this.media && i.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
                        var n = this.dateRangeCuesAppended,
                            a = this.id3Track,
                            s = i.dateRanges,
                            o = Object.keys(s);
                        if (a)
                            for (var l = Object.keys(n).filter((function(t) {
                                    return !o.includes(t)
                                })), u = function() {
                                    var t = l[h];
                                    Object.keys(n[t].cues).forEach((function(e) {
                                        a.removeCue(n[t].cues[e])
                                    })),
                                    delete n[t]
                                }, h = l.length; h--;)
                                u();
                        var d = i.fragments[i.fragments.length - 1];
                        if (0 !== o.length && E(null == d ? void 0 : d.programDateTime)) {
                            this.id3Track || (this.id3Track = this.createTrack(this.media));
                            for (var c = d.programDateTime / 1e3 - d.start, f = De(), g = function() {
                                    var t = o[v],
                                        e = s[t],
                                        i = n[t],
                                        a = (null == i ? void 0 : i.cues) || {},
                                        l = (null == i ? void 0 : i.durationKnown) || !1,
                                        u = we(e.startDate, c),
                                        h = Ie,
                                        d = e.endDate;
                                    if (d)
                                        h = we(d, c),
                                        l = !0;
                                    else if (e.endOnNext && !l) {
                                        var g = o.reduce((function(t, r) {
                                            var i = s[r];
                                            return i.class === e.class && i.id !== r && i.startDate > e.startDate && t.push(i), t
                                        }), []).sort((function(t, e) {
                                            return t.startDate.getTime() - e.startDate.getTime()
                                        }))[0];
                                        g && (h = we(g.startDate, c), l = !0)
                                    }
                                    for (var m, p, y = Object.keys(e.attr), T = 0; T < y.length; T++) {
                                        var E = y[T];
                                        if ("ID" !== (p = E) && "CLASS" !== p && "START-DATE" !== p && "DURATION" !== p && "END-DATE" !== p && "END-ON-NEXT" !== p) {
                                            var S = a[E];
                                            if (S)
                                                l && !i.durationKnown && (S.endTime = h);
                                            else {
                                                var L = e.attr[E];
                                                S = new f(u, h, ""),
                                                x(E) && (m = L, L = Uint8Array.from(m.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer),
                                                S.value = {
                                                    key: E,
                                                    data: L
                                                },
                                                S.type = ke,
                                                S.id = t,
                                                r.id3Track.addCue(S),
                                                a[E] = S
                                            }
                                        }
                                    }
                                    n[t] = {
                                        cues: a,
                                        dateRange: e,
                                        durationKnown: l
                                    }
                                }, v = 0; v < o.length; v++)
                                g()
                        }
                    }
                }, t
            }(),
            _e = function() {
                function t(t) {
                    var e = this;
                    this.hls = void 0,
                    this.config = void 0,
                    this.media = null,
                    this.levelDetails = null,
                    this.currentTime = 0,
                    this.stallCount = 0,
                    this._latency = null,
                    this.timeupdateHandler = function() {
                        return e.timeupdate()
                    },
                    this.hls = t,
                    this.config = t.config,
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.unregisterListeners(),
                    this.onMediaDetaching(),
                    this.levelDetails = null,
                    this.hls = this.timeupdateHandler = null
                }, e.registerListeners = function() {
                    this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    this.hls.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    this.hls.on(S.LEVEL_UPDATED, this.onLevelUpdated, this),
                    this.hls.on(S.ERROR, this.onError, this)
                }, e.unregisterListeners = function() {
                    this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    this.hls.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    this.hls.off(S.LEVEL_UPDATED, this.onLevelUpdated, this),
                    this.hls.off(S.ERROR, this.onError, this)
                }, e.onMediaAttached = function(t, e) {
                    this.media = e.media,
                    this.media.addEventListener("timeupdate", this.timeupdateHandler)
                }, e.onMediaDetaching = function() {
                    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
                }, e.onManifestLoading = function() {
                    this.levelDetails = null,
                    this._latency = null,
                    this.stallCount = 0
                }, e.onLevelUpdated = function(t, e) {
                    var r = e.details;
                    this.levelDetails = r,
                    r.advanced && this.timeupdate(),
                    !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
                }, e.onError = function(t, e) {
                    var r;
                    e.details === R.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r = this.levelDetails) && r.live && w.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
                }, e.timeupdate = function() {
                    var t = this.media,
                        e = this.levelDetails;
                    if (t && e) {
                        this.currentTime = t.currentTime;
                        var r = this.computeLatency();
                        if (null !== r) {
                            this._latency = r;
                            var i = this.config,
                                n = i.lowLatencyMode,
                                a = i.maxLiveSyncPlaybackRate;
                            if (n && 1 !== a) {
                                var s = this.targetLatency;
                                if (null !== s) {
                                    var o = r - s,
                                        l = o < Math.min(this.maxLatency, s + e.targetduration);
                                    if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
                                        var u = Math.min(2, Math.max(1, a)),
                                            h = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                        t.playbackRate = Math.min(u, Math.max(1, h))
                                    } else
                                        1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                                }
                            }
                        }
                    }
                }, e.estimateLiveEdge = function() {
                    var t = this.levelDetails;
                    return null === t ? null : t.edge + t.age
                }, e.computeLatency = function() {
                    var t = this.estimateLiveEdge();
                    return null === t ? null : t - this.currentTime
                }, a(t, [{
                    key: "latency",
                    get: function() {
                        return this._latency || 0
                    }
                }, {
                    key: "maxLatency",
                    get: function() {
                        var t = this.config,
                            e = this.levelDetails;
                        return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                    }
                }, {
                    key: "targetLatency",
                    get: function() {
                        var t = this.levelDetails;
                        if (null === t)
                            return null;
                        var e = t.holdBack,
                            r = t.partHoldBack,
                            i = t.targetduration,
                            n = this.config,
                            a = n.liveSyncDuration,
                            s = n.liveSyncDurationCount,
                            o = n.lowLatencyMode,
                            l = this.hls.userConfig,
                            u = o && r || e;
                        (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== a ? a : s * i);
                        var h = i;
                        return u + Math.min(1 * this.stallCount, h)
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function() {
                        var t = this.estimateLiveEdge(),
                            e = this.targetLatency,
                            r = this.levelDetails;
                        if (null === t || null === e || null === r)
                            return null;
                        var i = r.edge,
                            n = t - e - this.edgeStalled,
                            a = i - r.totalduration,
                            s = i - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
                        return Math.min(Math.max(a, n), s)
                    }
                }, {
                    key: "drift",
                    get: function() {
                        var t = this.levelDetails;
                        return null === t ? 1 : t.drift
                    }
                }, {
                    key: "edgeStalled",
                    get: function() {
                        var t = this.levelDetails;
                        if (null === t)
                            return 0;
                        var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                        return Math.max(t.age - e, 0)
                    }
                }, {
                    key: "forwardBufferLength",
                    get: function() {
                        var t = this.media,
                            e = this.levelDetails;
                        if (!t || !e)
                            return 0;
                        var r = t.buffered.length;
                        return (r ? t.buffered.end(r - 1) : e.edge) - this.currentTime
                    }
                }]), t
            }(),
            Pe = ["NONE", "TYPE-0", "TYPE-1", null],
            xe = "",
            Fe = "YES",
            Me = "v2",
            Oe = function() {
                function t(t, e, r) {
                    this.msn = void 0,
                    this.part = void 0,
                    this.skip = void 0,
                    this.msn = t,
                    this.part = e,
                    this.skip = r
                }
                return t.prototype.addDirectives = function(t) {
                    var e = new self.URL(t);
                    return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.href
                }, t
            }(),
            Ne = function() {
                function t(t) {
                    this._attrs = void 0,
                    this.audioCodec = void 0,
                    this.bitrate = void 0,
                    this.codecSet = void 0,
                    this.height = void 0,
                    this.id = void 0,
                    this.name = void 0,
                    this.videoCodec = void 0,
                    this.width = void 0,
                    this.unknownCodecs = void 0,
                    this.audioGroupIds = void 0,
                    this.details = void 0,
                    this.fragmentError = 0,
                    this.loadError = 0,
                    this.loaded = void 0,
                    this.realBitrate = 0,
                    this.textGroupIds = void 0,
                    this.url = void 0,
                    this._urlId = 0,
                    this.url = [t.url],
                    this._attrs = [t.attrs],
                    this.bitrate = t.bitrate,
                    t.details && (this.details = t.details),
                    this.id = t.id || 0,
                    this.name = t.name,
                    this.width = t.width || 0,
                    this.height = t.height || 0,
                    this.audioCodec = t.audioCodec,
                    this.videoCodec = t.videoCodec,
                    this.unknownCodecs = t.unknownCodecs,
                    this.codecSet = [t.videoCodec, t.audioCodec].filter((function(t) {
                        return t
                    })).join(",").replace(/\.[^.,]+/g, "")
                }
                return t.prototype.addFallback = function(t) {
                    this.url.push(t.url),
                    this._attrs.push(t.attrs)
                }, a(t, [{
                    key: "maxBitrate",
                    get: function() {
                        return Math.max(this.realBitrate, this.bitrate)
                    }
                }, {
                    key: "attrs",
                    get: function() {
                        return this._attrs[this._urlId]
                    }
                }, {
                    key: "pathwayId",
                    get: function() {
                        return this.attrs["PATHWAY-ID"] || "."
                    }
                }, {
                    key: "uri",
                    get: function() {
                        return this.url[this._urlId] || ""
                    }
                }, {
                    key: "urlId",
                    get: function() {
                        return this._urlId
                    },
                    set: function(t) {
                        var e = t % this.url.length;
                        this._urlId !== e && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = e)
                    }
                }, {
                    key: "audioGroupId",
                    get: function() {
                        var t;
                        return null == (t = this.audioGroupIds) ? void 0 : t[this.urlId]
                    }
                }, {
                    key: "textGroupId",
                    get: function() {
                        var t;
                        return null == (t = this.textGroupIds) ? void 0 : t[this.urlId]
                    }
                }]), t
            }();
        function Ue(t, e) {
            var r = e.startPTS;
            if (E(r)) {
                var i,
                    n = 0;
                e.sn > t.sn ? (n = r - t.start, i = t) : (n = t.start - r, i = e),
                i.duration !== n && (i.duration = n)
            } else
                e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
        }
        function Be(t, e, r, i, n, a) {
            i - r <= 0 && (w.warn("Fragment should have a positive duration", e), i = r + e.duration, a = n + e.duration);
            var s = r,
                o = i,
                l = e.startPTS,
                u = e.endPTS;
            if (E(l)) {
                var h = Math.abs(l - r);
                E(e.deltaPTS) ? e.deltaPTS = Math.max(h, e.deltaPTS) : e.deltaPTS = h,
                s = Math.max(r, l),
                r = Math.min(r, l),
                n = Math.min(n, e.startDTS),
                o = Math.min(i, u),
                i = Math.max(i, u),
                a = Math.max(a, e.endDTS)
            }
            var d = r - e.start;
            0 !== e.start && (e.start = r),
            e.duration = i - e.start,
            e.startPTS = r,
            e.maxStartPTS = s,
            e.startDTS = n,
            e.endPTS = i,
            e.minEndPTS = o,
            e.endDTS = a;
            var c,
                f = e.sn;
            if (!t || f < t.startSN || f > t.endSN)
                return 0;
            var g = f - t.startSN,
                v = t.fragments;
            for (v[g] = e, c = g; c > 0; c--)
                Ue(v[c], v[c - 1]);
            for (c = g; c < v.length - 1; c++)
                Ue(v[c], v[c + 1]);
            return t.fragmentHint && Ue(v[v.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, d
        }
        function Ge(t, e) {
            for (var r = null, i = t.fragments, n = i.length - 1; n >= 0; n--) {
                var a = i[n].initSegment;
                if (a) {
                    r = a;
                    break
                }
            }
            t.fragmentHint && delete t.fragmentHint.endPTS;
            var s,
                l,
                u,
                h,
                d,
                c = 0;
            if (function(t, e, r) {
                for (var i = e.skippedSegments, n = Math.max(t.startSN, e.startSN) - e.startSN, a = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = n; u <= a; u++) {
                    var h = l[s + u],
                        d = o[u];
                    i && !d && u < i && (d = e.fragments[u] = h),
                    h && d && r(h, d)
                }
            }(t, e, (function(t, i) {
                t.relurl && (c = t.cc - i.cc),
                E(t.startPTS) && E(t.endPTS) && (i.start = i.startPTS = t.startPTS, i.startDTS = t.startDTS, i.maxStartPTS = t.maxStartPTS, i.endPTS = t.endPTS, i.endDTS = t.endDTS, i.minEndPTS = t.minEndPTS, i.duration = t.endPTS - t.startPTS, i.duration && (s = i), e.PTSKnown = e.alignedSliding = !0),
                i.elementaryStreams = t.elementaryStreams,
                i.loader = t.loader,
                i.stats = t.stats,
                i.urlId = t.urlId,
                t.initSegment && (i.initSegment = t.initSegment, r = t.initSegment)
            })), r && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function(t) {
                var e;
                t.initSegment && t.initSegment.relurl !== (null == (e = r) ? void 0 : e.relurl) || (t.initSegment = r)
            })), e.skippedSegments)
                if (e.deltaUpdateFailed = e.fragments.some((function(t) {
                    return !t
                })), e.deltaUpdateFailed) {
                    w.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                    for (var f = e.skippedSegments; f--;)
                        e.fragments.shift();
                    e.startSN = e.fragments[0].sn,
                    e.startCC = e.fragments[0].cc
                } else
                    e.canSkipDateRanges && (e.dateRanges = (l = t.dateRanges, u = e.dateRanges, h = e.recentlyRemovedDateranges, d = o({}, l), h && h.forEach((function(t) {
                        delete d[t]
                    })), Object.keys(u).forEach((function(t) {
                        var e = new F(u[t].attr, d[t]);
                        e.isValid ? d[t] = e : w.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(u[t].attr) + '"')
                    })), d));
            var g = e.fragments;
            if (c) {
                w.warn("discontinuity sliding from playlist, take drift into account");
                for (var v = 0; v < g.length; v++)
                    g[v].cc += c
            }
            e.skippedSegments && (e.startCC = e.fragments[0].cc),
            function(t, e, r) {
                if (t && e)
                    for (var i = 0, n = 0, a = t.length; n <= a; n++) {
                        var s = t[n],
                            o = e[n + i];
                        s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? r(s, o) : i--
                    }
            }(t.partList, e.partList, (function(t, e) {
                e.elementaryStreams = t.elementaryStreams,
                e.stats = t.stats
            })),
            s ? Be(e, s, s.startPTS, s.endPTS, s.startDTS, s.endDTS) : Ke(t, e),
            g.length && (e.totalduration = e.edge - g[0].start),
            e.driftStartTime = t.driftStartTime,
            e.driftStart = t.driftStart;
            var m = e.advancedDateTime;
            if (e.advanced && m) {
                var p = e.edge;
                e.driftStart || (e.driftStartTime = m, e.driftStart = p),
                e.driftEndTime = m,
                e.driftEnd = p
            } else
                e.driftEndTime = t.driftEndTime,
                e.driftEnd = t.driftEnd,
                e.advancedDateTime = t.advancedDateTime
        }
        function Ke(t, e) {
            var r = e.startSN + e.skippedSegments - t.startSN,
                i = t.fragments;
            r < 0 || r >= i.length || He(e, i[r].start)
        }
        function He(t, e) {
            if (e) {
                for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++)
                    r[i].start += e;
                t.fragmentHint && (t.fragmentHint.start += e)
            }
        }
        function Ve(t, e, r) {
            var i;
            return null != t && t.details ? Ye(null == (i = t.details) ? void 0 : i.partList, e, r) : null
        }
        function Ye(t, e, r) {
            if (t)
                for (var i = t.length; i--;) {
                    var n = t[i];
                    if (n.index === r && n.fragment.sn === e)
                        return n
                }
            return null
        }
        function We(t) {
            switch (t.details) {
            case R.FRAG_LOAD_TIMEOUT:
            case R.KEY_LOAD_TIMEOUT:
            case R.LEVEL_LOAD_TIMEOUT:
            case R.MANIFEST_LOAD_TIMEOUT:
                return !0
            }
            return !1
        }
        function je(t, e) {
            var r = We(e);
            return t.default[(r ? "timeout" : "error") + "Retry"]
        }
        function qe(t, e) {
            var r = "linear" === t.backoff ? 1 : Math.pow(2, e);
            return Math.min(r * t.retryDelayMs, t.maxRetryDelayMs)
        }
        function Xe(t) {
            return i(i({}, t), {
                errorRetry: null,
                timeoutRetry: null
            })
        }
        function ze(t, e, r, i) {
            return !!t && e < t.maxNumRetry && (function(t) {
                    return 0 === t && !1 === navigator.onLine || !!t && (t < 400 || t > 499)
                }(i) || !!r)
        }
        var Qe = function(t, e) {
            for (var r = 0, i = t.length - 1, n = null, a = null; r <= i;) {
                var s = e(a = t[n = (r + i) / 2 | 0]);
                if (s > 0)
                    r = n + 1;
                else {
                    if (!(s < 0))
                        return a;
                    i = n - 1
                }
            }
            return null
        };
        function $e(t, e, r, i) {
            void 0 === r && (r = 0),
            void 0 === i && (i = 0);
            var n = null;
            if (t ? n = e[t.sn - e[0].sn + 1] || null : 0 === r && 0 === e[0].start && (n = e[0]), n && 0 === Je(r, i, n))
                return n;
            var a = Qe(e, Je.bind(null, r, i));
            return !a || a === t && n ? n : a
        }
        function Je(t, e, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), r.start <= t && r.start + r.duration > t)
                return 0;
            var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
        }
        function Ze(t, e, r) {
            var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return (r.endProgramDateTime || 0) - i > t
        }
        var tr,
            er = 3e5,
            rr = 0,
            ir = 2,
            nr = 5,
            ar = 0,
            sr = 1,
            or = 2,
            lr = function() {
                function t(t) {
                    this.hls = void 0,
                    this.playlistError = 0,
                    this.penalizedRenditions = {},
                    this.log = void 0,
                    this.warn = void 0,
                    this.error = void 0,
                    this.hls = t,
                    this.log = w.log.bind(w, "[info]:"),
                    this.warn = w.warn.bind(w, "[warning]:"),
                    this.error = w.error.bind(w, "[error]:"),
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.ERROR, this.onError, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t && (t.off(S.ERROR, this.onError, this), t.off(S.ERROR, this.onErrorOut, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this))
                }, e.destroy = function() {
                    this.unregisterListeners(),
                    this.hls = null,
                    this.penalizedRenditions = {}
                }, e.startLoad = function(t) {
                    this.playlistError = 0
                }, e.stopLoad = function() {}, e.getVariantLevelIndex = function(t) {
                    return (null == t ? void 0 : t.type) === ge ? t.level : this.hls.loadLevel
                }, e.onManifestLoading = function() {
                    this.playlistError = 0,
                    this.penalizedRenditions = {}
                }, e.onLevelUpdated = function() {
                    this.playlistError = 0
                }, e.onError = function(t, e) {
                    var r,
                        i;
                    if (!e.fatal) {
                        var n = this.hls,
                            a = e.context;
                        switch (e.details) {
                        case R.FRAG_LOAD_ERROR:
                        case R.FRAG_LOAD_TIMEOUT:
                        case R.KEY_LOAD_ERROR:
                        case R.KEY_LOAD_TIMEOUT:
                            return void (e.errorAction = this.getFragRetryOrSwitchAction(e));
                        case R.FRAG_PARSING_ERROR:
                            if (null != (r = e.frag) && r.gap)
                                return void (e.errorAction = {
                                    action: rr,
                                    flags: ar
                                });
                        case R.FRAG_GAP:
                        case R.FRAG_DECRYPT_ERROR:
                            return e.errorAction = this.getFragRetryOrSwitchAction(e), void (e.errorAction.action = ir);
                        case R.LEVEL_EMPTY_ERROR:
                        case R.LEVEL_PARSING_ERROR:
                            var s,
                                o,
                                l = e.parent === ge ? e.level : n.loadLevel;
                            return void (e.details === R.LEVEL_EMPTY_ERROR && null != (s = e.context) && null != (o = s.levelDetails) && o.live ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, l) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, l)));
                        case R.LEVEL_LOAD_ERROR:
                        case R.LEVEL_LOAD_TIMEOUT:
                            return void ("number" == typeof (null == a ? void 0 : a.level) && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, a.level)));
                        case R.AUDIO_TRACK_LOAD_ERROR:
                        case R.AUDIO_TRACK_LOAD_TIMEOUT:
                        case R.SUBTITLE_LOAD_ERROR:
                        case R.SUBTITLE_TRACK_LOAD_TIMEOUT:
                            if (a) {
                                var u = n.levels[n.loadLevel];
                                if (u && (a.type === ce && a.groupId === u.audioGroupId || a.type === fe && a.groupId === u.textGroupId))
                                    return e.errorAction = this.getPlaylistRetryOrSwitchAction(e, n.loadLevel), e.errorAction.action = ir, void (e.errorAction.flags = sr)
                            }
                            return;
                        case R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                            var h = n.levels[n.loadLevel],
                                d = null == h ? void 0 : h.attrs["HDCP-LEVEL"];
                            return void (d && (e.errorAction = {
                                action: ir,
                                flags: or,
                                hdcpLevel: d
                            }));
                        case R.BUFFER_ADD_CODEC_ERROR:
                        case R.REMUX_ALLOC_ERROR:
                            return void (e.errorAction = this.getLevelSwitchAction(e, null != (i = e.level) ? i : n.loadLevel));
                        case R.INTERNAL_EXCEPTION:
                        case R.BUFFER_APPENDING_ERROR:
                        case R.BUFFER_APPEND_ERROR:
                        case R.BUFFER_FULL_ERROR:
                        case R.LEVEL_SWITCH_ERROR:
                        case R.BUFFER_STALLED_ERROR:
                        case R.BUFFER_SEEK_OVER_HOLE:
                        case R.BUFFER_NUDGE_ON_STALL:
                            return void (e.errorAction = {
                                action: rr,
                                flags: ar
                            })
                        }
                        if (e.type === L.KEY_SYSTEM_ERROR) {
                            var c = this.getVariantLevelIndex(e.frag);
                            return e.levelRetry = !1, void (e.errorAction = this.getLevelSwitchAction(e, c))
                        }
                    }
                }, e.getPlaylistRetryOrSwitchAction = function(t, e) {
                    var r,
                        i = je(this.hls.config.playlistLoadPolicy, t),
                        n = this.playlistError++,
                        a = null == (r = t.response) ? void 0 : r.code;
                    if (ze(i, n, We(t), a))
                        return {
                            action: nr,
                            flags: ar,
                            retryConfig: i,
                            retryCount: n
                        };
                    var s = this.getLevelSwitchAction(t, e);
                    return i && (s.retryConfig = i, s.retryCount = n), s
                }, e.getFragRetryOrSwitchAction = function(t) {
                    var e = this.hls,
                        r = this.getVariantLevelIndex(t.frag),
                        i = e.levels[r],
                        n = e.config,
                        a = n.fragLoadPolicy,
                        s = n.keyLoadPolicy,
                        o = je(t.details.startsWith("key") ? s : a, t),
                        l = e.levels.reduce((function(t, e) {
                            return t + e.fragmentError
                        }), 0);
                    if (i) {
                        var u;
                        t.details !== R.FRAG_GAP && i.fragmentError++;
                        var h = null == (u = t.response) ? void 0 : u.code;
                        if (ze(o, l, We(t), h))
                            return {
                                action: nr,
                                flags: ar,
                                retryConfig: o,
                                retryCount: l
                            }
                    }
                    var d = this.getLevelSwitchAction(t, r);
                    return o && (d.retryConfig = o, d.retryCount = l), d
                }, e.getLevelSwitchAction = function(t, e) {
                    var r = this.hls;
                    null == e && (e = r.loadLevel);
                    var i = this.hls.levels[e];
                    if (i && (i.loadError++, r.autoLevelEnabled)) {
                        for (var n, a, s = -1, o = r.levels, l = r.loadLevel, u = r.minAutoLevel, h = r.maxAutoLevel, d = null == (n = t.frag) ? void 0 : n.type, c = null != (a = t.context) ? a : {}, f = c.type, g = c.groupId, v = o.length; v--;) {
                            var m = (v + l) % o.length;
                            if (m !== l && m >= u && m <= h && 0 === o[m].loadError) {
                                var p = o[m];
                                if (t.details === R.FRAG_GAP && t.frag) {
                                    var y = o[m].details;
                                    if (y) {
                                        var T = $e(t.frag, y.fragments, t.frag.start);
                                        if (null != T && T.gap)
                                            continue
                                    }
                                } else {
                                    if (f === ce && g === p.audioGroupId || f === fe && g === p.textGroupId)
                                        continue;
                                    if (d === ve && i.audioGroupId === p.audioGroupId || d === me && i.textGroupId === p.textGroupId)
                                        continue
                                }
                                s = m;
                                break
                            }
                        }
                        if (s > -1 && r.loadLevel !== s)
                            return t.levelRetry = !0, this.playlistError = 0, {
                                action: ir,
                                flags: ar,
                                nextAutoLevel: s
                            }
                    }
                    return {
                        action: ir,
                        flags: sr
                    }
                }, e.onErrorOut = function(t, e) {
                    var r;
                    switch (null == (r = e.errorAction) ? void 0 : r.action) {
                    case rr:
                        break;
                    case ir:
                        this.sendAlternateToPenaltyBox(e),
                        e.errorAction.resolved || e.details === R.FRAG_GAP || (e.fatal = !0)
                    }
                    e.fatal && this.hls.stopLoad()
                }, e.sendAlternateToPenaltyBox = function(t) {
                    var e = this.hls,
                        r = t.errorAction;
                    if (r) {
                        var i = r.flags,
                            n = r.hdcpLevel,
                            a = r.nextAutoLevel;
                        switch (i) {
                        case ar:
                            this.switchLevel(t, a);
                            break;
                        case sr:
                            r.resolved || (r.resolved = this.redundantFailover(t));
                            break;
                        case or:
                            n && (e.maxHdcpLevel = Pe[Pe.indexOf(n) - 1], r.resolved = !0),
                            this.warn('Restricting playback to HDCP-LEVEL of "' + e.maxHdcpLevel + '" or lower')
                        }
                        r.resolved || this.switchLevel(t, a)
                    }
                }, e.switchLevel = function(t, e) {
                    void 0 !== e && t.errorAction && (this.warn("switching to level " + e + " after " + t.details), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
                }, e.redundantFailover = function(t) {
                    var e = this,
                        r = this.hls,
                        i = this.penalizedRenditions,
                        n = t.parent === ge ? t.level : r.loadLevel,
                        a = r.levels[n],
                        s = a.url.length,
                        o = t.frag ? t.frag.urlId : a.urlId;
                    a.urlId !== o || t.frag && !a.details || this.penalizeRendition(a, t);
                    for (var l = function() {
                            var l = (o + u) % s,
                                h = i[l];
                            if (!h || function(t, e, r) {
                                if (performance.now() - t.lastErrorPerfMs > er)
                                    return !0;
                                var i = t.details;
                                if (e.details === R.FRAG_GAP && i && e.frag) {
                                    var n = e.frag.start,
                                        a = $e(null, i.fragments, n);
                                    if (a && !a.gap)
                                        return !0
                                }
                                if (r && t.errors.length < r.errors.length) {
                                    var s = t.errors[t.errors.length - 1];
                                    if (i && s.frag && e.frag && Math.abs(s.frag.start - e.frag.start) > 3 * i.targetduration)
                                        return !0
                                }
                                return !1
                            }(h, t, i[o]))
                                return e.warn("Switching to Redundant Stream " + (l + 1) + "/" + s + ': "' + a.url[l] + '" after ' + t.details), e.playlistError = 0, r.levels.forEach((function(t) {
                                    t.urlId = l
                                })), r.nextLoadLevel = n, {
                                    v: !0
                                }
                        }, u = 1; u < s; u++) {
                        var h = l();
                        if ("object" == typeof h)
                            return h.v
                    }
                    return !1
                }, e.penalizeRendition = function(t, e) {
                    var r = this.penalizedRenditions,
                        i = r[t.urlId] || {
                            lastErrorPerfMs: 0,
                            errors: [],
                            details: void 0
                        };
                    i.lastErrorPerfMs = performance.now(),
                    i.errors.push(e),
                    i.details = t.details,
                    r[t.urlId] = i
                }, t
            }(),
            ur = function() {
                function t(t, e) {
                    this.hls = void 0,
                    this.timer = -1,
                    this.requestScheduled = -1,
                    this.canLoad = !1,
                    this.log = void 0,
                    this.warn = void 0,
                    this.log = w.log.bind(w, e + ":"),
                    this.warn = w.warn.bind(w, e + ":"),
                    this.hls = t
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.clearTimer(),
                    this.hls = this.log = this.warn = null
                }, e.clearTimer = function() {
                    clearTimeout(this.timer),
                    this.timer = -1
                }, e.startLoad = function() {
                    this.canLoad = !0,
                    this.requestScheduled = -1,
                    this.loadPlaylist()
                }, e.stopLoad = function() {
                    this.canLoad = !1,
                    this.clearTimer()
                }, e.switchParams = function(t, e) {
                    var r = null == e ? void 0 : e.renditionReports;
                    if (r) {
                        for (var i = -1, n = 0; n < r.length; n++) {
                            var a = r[n],
                                s = void 0;
                            try {
                                s = new self.URL(a.URI, e.url).href
                            } catch (t) {
                                w.warn("Could not construct new URL for Rendition Report: " + t),
                                s = a.URI || ""
                            }
                            if (s === t) {
                                i = n;
                                break
                            }
                            s === t.substring(0, s.length) && (i = n)
                        }
                        if (-1 !== i) {
                            var o = r[i],
                                l = parseInt(o["LAST-MSN"]) || (null == e ? void 0 : e.lastPartSn),
                                u = parseInt(o["LAST-PART"]) || (null == e ? void 0 : e.lastPartIndex);
                            if (this.hls.config.lowLatencyMode) {
                                var h = Math.min(e.age - e.partTarget, e.targetduration);
                                u >= 0 && h > e.partTarget && (u += 1)
                            }
                            return new Oe(l, u >= 0 ? u : void 0, xe)
                        }
                    }
                }, e.loadPlaylist = function(t) {
                    -1 === this.requestScheduled && (this.requestScheduled = self.performance.now())
                }, e.shouldLoadPlaylist = function(t) {
                    return this.canLoad && !!t && !!t.url && (!t.details || t.details.live)
                }, e.shouldReloadPlaylist = function(t) {
                    return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(t)
                }, e.playlistLoaded = function(t, e, r) {
                    var i = this,
                        n = e.details,
                        a = e.stats,
                        s = self.performance.now(),
                        o = a.loading.first ? Math.max(0, s - a.loading.first) : 0;
                    if (n.advancedDateTime = Date.now() - o, n.live || null != r && r.live) {
                        if (n.reloaded(r), r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : n.updated ? "UPDATED" : "MISSED")), r && n.fragments.length > 0 && Ge(r, n), !this.canLoad || !n.live)
                            return;
                        var l,
                            u = void 0,
                            h = void 0;
                        if (n.canBlockReload && n.endSN && n.advanced) {
                            var d = this.hls.config.lowLatencyMode,
                                c = n.lastPartSn,
                                f = n.endSN,
                                g = n.lastPartIndex,
                                v = c === f;
                            -1 !== g ? (u = v ? f + 1 : c, h = v ? d ? 0 : g : g + 1) : u = f + 1;
                            var m = n.age,
                                p = m + n.ageHeader,
                                y = Math.min(p - n.partTarget, 1.5 * n.targetduration);
                            if (y > 0) {
                                if (r && y > r.tuneInGoal)
                                    this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + y + " with playlist age: " + n.age),
                                    y = 0;
                                else {
                                    var T = Math.floor(y / n.targetduration);
                                    u += T,
                                    void 0 !== h && (h += Math.round(y % n.targetduration / n.partTarget)),
                                    this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + m.toFixed(2) + "s goal: " + y + " skip sn " + T + " to part " + h)
                                }
                                n.tuneInGoal = y
                            }
                            if (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, h), d || !v)
                                return void this.loadPlaylist(l)
                        } else
                            (n.canBlockReload || n.canSkipUntil) && (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, h));
                        var E = this.hls.mainForwardBufferInfo,
                            S = E ? E.end - E.len : 0,
                            L = function(t, e) {
                                void 0 === e && (e = 1 / 0);
                                var r = 1e3 * t.targetduration;
                                if (t.updated) {
                                    var i = t.fragments;
                                    if (i.length && 4 * r > e) {
                                        var n = 1e3 * i[i.length - 1].duration;
                                        n < r && (r = n)
                                    }
                                } else
                                    r /= 2;
                                return Math.round(r)
                            }(n, 1e3 * (n.edge - S));
                        n.updated && s > this.requestScheduled + L && (this.requestScheduled = a.loading.start),
                        void 0 !== u && n.canBlockReload ? this.requestScheduled = a.loading.first + L - (1e3 * n.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + L < s ? this.requestScheduled = s : this.requestScheduled - s <= 0 && (this.requestScheduled += L);
                        var R = this.requestScheduled - s;
                        R = Math.max(0, R),
                        this.log("reload live playlist " + t + " in " + Math.round(R) + " ms"),
                        this.timer = self.setTimeout((function() {
                            return i.loadPlaylist(l)
                        }), R)
                    } else
                        this.clearTimer()
                }, e.getDeliveryDirectives = function(t, e, r, i) {
                    var n = function(t, e) {
                        var r = t.canSkipUntil,
                            i = t.canSkipDateRanges,
                            n = t.endSN;
                        return r && (void 0 !== e ? e - n : 0) < r ? i ? Me : Fe : xe
                    }(t, r);
                    return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn, i = e.part, n = xe), new Oe(r, i, n)
                }, e.checkRetry = function(t) {
                    var e = this,
                        r = t.details,
                        i = We(t),
                        n = t.errorAction,
                        a = n || {},
                        s = a.action,
                        o = a.retryCount,
                        l = void 0 === o ? 0 : o,
                        u = a.retryConfig,
                        h = !!n && !!u && (s === nr || !n.resolved && s === ir);
                    if (h) {
                        var d;
                        if (this.requestScheduled = -1, l >= u.maxNumRetry)
                            return !1;
                        if (i && null != (d = t.context) && d.deliveryDirectives)
                            this.warn("Retrying playlist loading " + (l + 1) + "/" + u.maxNumRetry + ' after "' + r + '" without delivery-directives'),
                            this.loadPlaylist();
                        else {
                            var c = qe(u, l);
                            this.timer = self.setTimeout((function() {
                                return e.loadPlaylist()
                            }), c),
                            this.warn("Retrying playlist loading " + (l + 1) + "/" + u.maxNumRetry + ' after "' + r + '" in ' + c + "ms")
                        }
                        t.levelRetry = !0,
                        n.resolved = !0
                    }
                    return h
                }, t
            }(),
            hr = function(t) {
                function e(e, r) {
                    var i;
                    return (i = t.call(this, e, "[level-controller]") || this)._levels = [], i._firstLevel = -1, i._startLevel = void 0, i.currentLevel = null, i.currentLevelIndex = -1, i.manualLevelIndex = -1, i.steering = void 0, i.onParsedComplete = void 0, i.steering = r, i._registerListeners(), i
                }
                l(e, t);
                var r = e.prototype;
                return r._registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this),
                    t.on(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this),
                    t.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                    t.on(S.FRAG_LOADED, this.onFragLoaded, this),
                    t.on(S.ERROR, this.onError, this)
                }, r._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this),
                    t.off(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this),
                    t.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                    t.off(S.FRAG_LOADED, this.onFragLoaded, this),
                    t.off(S.ERROR, this.onError, this)
                }, r.destroy = function() {
                    this._unregisterListeners(),
                    this.steering = null,
                    this.resetLevels(),
                    t.prototype.destroy.call(this)
                }, r.startLoad = function() {
                    this._levels.forEach((function(t) {
                        t.loadError = 0,
                        t.fragmentError = 0
                    })),
                    t.prototype.startLoad.call(this)
                }, r.resetLevels = function() {
                    this._startLevel = void 0,
                    this.manualLevelIndex = -1,
                    this.currentLevelIndex = -1,
                    this.currentLevel = null,
                    this._levels = []
                }, r.onManifestLoading = function(t, e) {
                    this.resetLevels()
                }, r.onManifestLoaded = function(t, e) {
                    var r,
                        i = [],
                        n = {};
                    e.levels.forEach((function(t) {
                        var e,
                            a = t.attrs;
                        -1 !== (null == (e = t.audioCodec) ? void 0 : e.indexOf("mp4a.40.34")) && (tr || (tr = /chrome|firefox/i.test(navigator.userAgent)), tr && (t.audioCodec = void 0));
                        var s = a.AUDIO,
                            o = a.CODECS,
                            l = a["FRAME-RATE"],
                            u = a["PATHWAY-ID"],
                            h = a.RESOLUTION,
                            d = a.SUBTITLES,
                            c = (u || ".") + "-" + t.bitrate + "-" + h + "-" + l + "-" + o;
                        (r = n[c]) ? r.addFallback(t) : (r = new Ne(t), n[c] = r, i.push(r)),
                        dr(r, "audio", s),
                        dr(r, "text", d)
                    })),
                    this.filterAndSortMediaOptions(i, e)
                }, r.filterAndSortMediaOptions = function(t, e) {
                    var r = this,
                        i = [],
                        n = [],
                        a = !1,
                        s = !1,
                        o = !1,
                        l = t.filter((function(t) {
                            var e = t.audioCodec,
                                r = t.videoCodec,
                                i = t.width,
                                n = t.height,
                                l = t.unknownCodecs;
                            return a || (a = !(!i || !n)), s || (s = !!r), o || (o = !!e), !(null != l && l.length) && (!e || Qt(e, "audio")) && (!r || Qt(r, "video"))
                        }));
                    if ((a || s) && o && (l = l.filter((function(t) {
                        var e = t.videoCodec,
                            r = t.width,
                            i = t.height;
                        return !!e || !(!r || !i)
                    }))), 0 !== l.length) {
                        e.audioTracks && cr(i = e.audioTracks.filter((function(t) {
                            return !t.audioCodec || Qt(t.audioCodec, "audio")
                        }))),
                        e.subtitles && cr(n = e.subtitles);
                        var u = l.slice(0);
                        l.sort((function(t, e) {
                            return t.attrs["HDCP-LEVEL"] !== e.attrs["HDCP-LEVEL"] ? (t.attrs["HDCP-LEVEL"] || "") > (e.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : t.bitrate !== e.bitrate ? t.bitrate - e.bitrate : t.attrs["FRAME-RATE"] !== e.attrs["FRAME-RATE"] ? t.attrs.decimalFloatingPoint("FRAME-RATE") - e.attrs.decimalFloatingPoint("FRAME-RATE") : t.attrs.SCORE !== e.attrs.SCORE ? t.attrs.decimalFloatingPoint("SCORE") - e.attrs.decimalFloatingPoint("SCORE") : a && t.height !== e.height ? t.height - e.height : 0
                        }));
                        var h = u[0];
                        if (this.steering && (l = this.steering.filterParsedLevels(l)).length !== u.length)
                            for (var d = 0; d < u.length; d++)
                                if (u[d].pathwayId === l[0].pathwayId) {
                                    h = u[d];
                                    break
                                }
                        this._levels = l;
                        for (var c = 0; c < l.length; c++)
                            if (l[c] === h) {
                                this._firstLevel = c,
                                this.log("manifest loaded, " + l.length + " level(s) found, first bitrate: " + h.bitrate);
                                break
                            }
                        var f = o && !s,
                            g = {
                                levels: l,
                                audioTracks: i,
                                subtitleTracks: n,
                                sessionData: e.sessionData,
                                sessionKeys: e.sessionKeys,
                                firstLevel: this._firstLevel,
                                stats: e.stats,
                                audio: o,
                                video: s,
                                altAudio: !f && i.some((function(t) {
                                    return !!t.url
                                }))
                            };
                        this.hls.trigger(S.MANIFEST_PARSED, g),
                        (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                    } else
                        Promise.resolve().then((function() {
                            if (r.hls) {
                                var t = new Error("no level with compatible codecs found in manifest");
                                r.hls.trigger(S.ERROR, {
                                    type: L.MEDIA_ERROR,
                                    details: R.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                    fatal: !0,
                                    url: e.url,
                                    error: t,
                                    reason: t.message
                                })
                            }
                        }))
                }, r.onError = function(t, e) {
                    !e.fatal && e.context && e.context.type === de && e.context.level === this.level && this.checkRetry(e)
                }, r.onFragLoaded = function(t, e) {
                    var r = e.frag;
                    if (void 0 !== r && r.type === ge) {
                        var i = this._levels[r.level];
                        void 0 !== i && (i.loadError = 0)
                    }
                }, r.onLevelLoaded = function(t, e) {
                    var r,
                        i,
                        n = e.level,
                        a = e.details,
                        s = this._levels[n];
                    if (!s)
                        return this.warn("Invalid level index " + n), void (null != (i = e.deliveryDirectives) && i.skip && (a.deltaUpdateFailed = !0));
                    n === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0), this.playlistLoaded(n, e, s.details)) : null != (r = e.deliveryDirectives) && r.skip && (a.deltaUpdateFailed = !0)
                }, r.onAudioTrackSwitched = function(t, e) {
                    var r = this.currentLevel;
                    if (r) {
                        var i = this.hls.audioTracks[e.id].groupId;
                        if (r.audioGroupIds && r.audioGroupId !== i) {
                            for (var n = -1, a = 0; a < r.audioGroupIds.length; a++)
                                if (r.audioGroupIds[a] === i) {
                                    n = a;
                                    break
                                }
                            -1 !== n && n !== r.urlId && (r.urlId = n, this.canLoad && this.startLoad())
                        }
                    }
                }, r.loadPlaylist = function(e) {
                    t.prototype.loadPlaylist.call(this);
                    var r = this.currentLevelIndex,
                        i = this.currentLevel;
                    if (i && this.shouldLoadPlaylist(i)) {
                        var n = i.urlId,
                            a = i.uri;
                        if (e)
                            try {
                                a = e.addDirectives(a)
                            } catch (t) {
                                this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                            }
                        var s = i.attrs["PATHWAY-ID"];
                        this.log("Loading level index " + r + (void 0 !== (null == e ? void 0 : e.msn) ? " at sn " + e.msn + " part " + e.part : "") + " with" + (s ? " Pathway " + s : "") + " URI " + (n + 1) + "/" + i.url.length + " " + a),
                        this.clearTimer(),
                        this.hls.trigger(S.LEVEL_LOADING, {
                            url: a,
                            level: r,
                            id: n,
                            deliveryDirectives: e || null
                        })
                    }
                }, r.removeLevel = function(t, e) {
                    var r = this,
                        i = function(t, r) {
                            return r !== e
                        },
                        n = this._levels.filter((function(n, a) {
                            return a !== t || (n.url.length > 1 && void 0 !== e ? (n.url = n.url.filter(i), n.audioGroupIds && (n.audioGroupIds = n.audioGroupIds.filter(i)), n.textGroupIds && (n.textGroupIds = n.textGroupIds.filter(i)), n.urlId = 0, !0) : (r.steering && r.steering.removeLevel(n), !1))
                        }));
                    this.hls.trigger(S.LEVELS_UPDATED, {
                        levels: n
                    })
                }, r.onLevelsUpdated = function(t, e) {
                    var r = e.levels;
                    r.forEach((function(t, e) {
                        var r = t.details;
                        null != r && r.fragments && r.fragments.forEach((function(t) {
                            t.level = e
                        }))
                    })),
                    this._levels = r
                }, a(e, [{
                    key: "levels",
                    get: function() {
                        return 0 === this._levels.length ? null : this._levels
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this.currentLevelIndex
                    },
                    set: function(t) {
                        var e = this._levels;
                        if (0 !== e.length) {
                            if (t < 0 || t >= e.length) {
                                var r = new Error("invalid level idx"),
                                    i = t < 0;
                                if (this.hls.trigger(S.ERROR, {
                                    type: L.OTHER_ERROR,
                                    details: R.LEVEL_SWITCH_ERROR,
                                    level: t,
                                    fatal: i,
                                    error: r,
                                    reason: r.message
                                }), i)
                                    return;
                                t = Math.min(t, e.length - 1)
                            }
                            var n = this.currentLevelIndex,
                                a = this.currentLevel,
                                s = a ? a.attrs["PATHWAY-ID"] : void 0,
                                l = e[t],
                                u = l.attrs["PATHWAY-ID"];
                            if (this.currentLevelIndex = t, this.currentLevel = l, n !== t || !l.details || !a || s !== u) {
                                this.log("Switching to level " + t + (u ? " with Pathway " + u : "") + " from level " + n + (s ? " with Pathway " + s : ""));
                                var h = o({}, l, {
                                    level: t,
                                    maxBitrate: l.maxBitrate,
                                    attrs: l.attrs,
                                    uri: l.uri,
                                    urlId: l.urlId
                                });
                                delete h._attrs,
                                delete h._urlId,
                                this.hls.trigger(S.LEVEL_SWITCHING, h);
                                var d = l.details;
                                if (!d || d.live) {
                                    var c = this.switchParams(l.uri, null == a ? void 0 : a.details);
                                    this.loadPlaylist(c)
                                }
                            }
                        }
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this.manualLevelIndex
                    },
                    set: function(t) {
                        this.manualLevelIndex = t,
                        void 0 === this._startLevel && (this._startLevel = t),
                        -1 !== t && (this.level = t)
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return this._firstLevel
                    },
                    set: function(t) {
                        this._firstLevel = t
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        if (void 0 === this._startLevel) {
                            var t = this.hls.config.startLevel;
                            return void 0 !== t ? t : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function(t) {
                        this._startLevel = t
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                    },
                    set: function(t) {
                        this.level = t,
                        -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                    }
                }]), e
            }(ur);
        function dr(t, e, r) {
            r && ("audio" === e ? (t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds[t.url.length - 1] = r) : "text" === e && (t.textGroupIds || (t.textGroupIds = []), t.textGroupIds[t.url.length - 1] = r))
        }
        function cr(t) {
            var e = {};
            t.forEach((function(t) {
                var r = t.groupId || "";
                t.id = e[r] = e[r] || 0,
                e[r]++
            }))
        }
        var fr = "NOT_LOADED",
            gr = "APPENDING",
            vr = "PARTIAL",
            mr = "OK",
            pr = function() {
                function t(t) {
                    this.activePartLists = Object.create(null),
                    this.endListFragments = Object.create(null),
                    this.fragments = Object.create(null),
                    this.timeRanges = Object.create(null),
                    this.bufferPadding = .2,
                    this.hls = void 0,
                    this.hasGaps = !1,
                    this.hls = t,
                    this._registerListeners()
                }
                var e = t.prototype;
                return e._registerListeners = function() {
                    var t = this.hls;
                    t.on(S.BUFFER_APPENDED, this.onBufferAppended, this),
                    t.on(S.FRAG_BUFFERED, this.onFragBuffered, this),
                    t.on(S.FRAG_LOADED, this.onFragLoaded, this)
                }, e._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.BUFFER_APPENDED, this.onBufferAppended, this),
                    t.off(S.FRAG_BUFFERED, this.onFragBuffered, this),
                    t.off(S.FRAG_LOADED, this.onFragLoaded, this)
                }, e.destroy = function() {
                    this._unregisterListeners(),
                    this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
                }, e.getAppendedFrag = function(t, e) {
                    var r = this.activePartLists[e];
                    if (r)
                        for (var i = r.length; i--;) {
                            var n = r[i];
                            if (!n)
                                break;
                            var a = n.end;
                            if (n.start <= t && null !== a && t <= a)
                                return n
                        }
                    return this.getBufferedFrag(t, e)
                }, e.getBufferedFrag = function(t, e) {
                    for (var r = this.fragments, i = Object.keys(r), n = i.length; n--;) {
                        var a = r[i[n]];
                        if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                            var s = a.body;
                            if (s.start <= t && t <= s.end)
                                return s
                        }
                    }
                    return null
                }, e.detectEvictedFragments = function(t, e, r, i) {
                    var n = this;
                    this.timeRanges && (this.timeRanges[t] = e);
                    var a = (null == i ? void 0 : i.fragment.sn) || -1;
                    Object.keys(this.fragments).forEach((function(i) {
                        var s = n.fragments[i];
                        if (s && !(a >= s.body.sn))
                            if (s.buffered || s.loaded) {
                                var o = s.range[t];
                                o && o.time.some((function(t) {
                                    var r = !n.isTimeBuffered(t.startPTS, t.endPTS, e);
                                    return r && n.removeFragment(s.body), r
                                }))
                            } else
                                s.body.type === r && n.removeFragment(s.body)
                    }))
                }, e.detectPartialFragments = function(t) {
                    var e = this,
                        r = this.timeRanges,
                        i = t.frag,
                        n = t.part;
                    if (r && "initSegment" !== i.sn) {
                        var a = Tr(i),
                            s = this.fragments[a];
                        if (!(!s || s.buffered && i.gap)) {
                            var o = !i.relurl;
                            Object.keys(r).forEach((function(t) {
                                var a = i.elementaryStreams[t];
                                if (a) {
                                    var l = r[t],
                                        u = o || !0 === a.partial;
                                    s.range[t] = e.getBufferedTimes(i, n, u, l)
                                }
                            })),
                            s.loaded = null,
                            Object.keys(s.range).length ? (s.buffered = !0, (s.body.endList = i.endList || s.body.endList) && (this.endListFragments[s.body.type] = s), yr(s) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(s.body)
                        }
                    }
                }, e.removeParts = function(t, e) {
                    var r = this.activePartLists[e];
                    r && (this.activePartLists[e] = r.filter((function(e) {
                        return e.fragment.sn >= t
                    })))
                }, e.fragBuffered = function(t, e) {
                    var r = Tr(t),
                        i = this.fragments[r];
                    !i && e && (i = this.fragments[r] = {
                        body: t,
                        appendedPTS: null,
                        loaded: null,
                        buffered: !1,
                        range: Object.create(null)
                    }, t.gap && (this.hasGaps = !0)),
                    i && (i.loaded = null, i.buffered = !0)
                }, e.getBufferedTimes = function(t, e, r, i) {
                    for (var n = {
                            time: [],
                            partial: r
                        }, a = t.start, s = t.end, o = t.minEndPTS || s, l = t.maxStartPTS || a, u = 0; u < i.length; u++) {
                        var h = i.start(u) - this.bufferPadding,
                            d = i.end(u) + this.bufferPadding;
                        if (l >= h && o <= d) {
                            n.time.push({
                                startPTS: Math.max(a, i.start(u)),
                                endPTS: Math.min(s, i.end(u))
                            });
                            break
                        }
                        if (a < d && s > h)
                            n.partial = !0,
                            n.time.push({
                                startPTS: Math.max(a, i.start(u)),
                                endPTS: Math.min(s, i.end(u))
                            });
                        else if (s <= h)
                            break
                    }
                    return n
                }, e.getPartialFragment = function(t) {
                    var e,
                        r,
                        i,
                        n = null,
                        a = 0,
                        s = this.bufferPadding,
                        o = this.fragments;
                    return Object.keys(o).forEach((function(l) {
                        var u = o[l];
                        u && yr(u) && (r = u.body.start - s, i = u.body.end + s, t >= r && t <= i && (e = Math.min(t - r, i - t), a <= e && (n = u.body, a = e)))
                    })), n
                }, e.isEndListAppended = function(t) {
                    var e = this.endListFragments[t];
                    return void 0 !== e && (e.buffered || yr(e))
                }, e.getState = function(t) {
                    var e = Tr(t),
                        r = this.fragments[e];
                    return r ? r.buffered ? yr(r) ? vr : mr : gr : fr
                }, e.isTimeBuffered = function(t, e, r) {
                    for (var i, n, a = 0; a < r.length; a++) {
                        if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, t >= i && e <= n)
                            return !0;
                        if (e <= i)
                            return !1
                    }
                    return !1
                }, e.onFragLoaded = function(t, e) {
                    var r = e.frag,
                        i = e.part;
                    if ("initSegment" !== r.sn && !r.bitrateTest) {
                        var n = i ? null : e,
                            a = Tr(r);
                        this.fragments[a] = {
                            body: r,
                            appendedPTS: null,
                            loaded: n,
                            buffered: !1,
                            range: Object.create(null)
                        }
                    }
                }, e.onBufferAppended = function(t, e) {
                    var r = this,
                        i = e.frag,
                        n = e.part,
                        a = e.timeRanges;
                    if ("initSegment" !== i.sn) {
                        var s = i.type;
                        if (n) {
                            var o = this.activePartLists[s];
                            o || (this.activePartLists[s] = o = []),
                            o.push(n)
                        }
                        this.timeRanges = a,
                        Object.keys(a).forEach((function(t) {
                            var e = a[t];
                            r.detectEvictedFragments(t, e, s, n)
                        }))
                    }
                }, e.onFragBuffered = function(t, e) {
                    this.detectPartialFragments(e)
                }, e.hasFragment = function(t) {
                    var e = Tr(t);
                    return !!this.fragments[e]
                }, e.hasParts = function(t) {
                    var e;
                    return !(null == (e = this.activePartLists[t]) || !e.length)
                }, e.removeFragmentsInRange = function(t, e, r, i, n) {
                    var a = this;
                    i && !this.hasGaps || Object.keys(this.fragments).forEach((function(s) {
                        var o = a.fragments[s];
                        if (o) {
                            var l = o.body;
                            l.type !== r || i && !l.gap || l.start < e && l.end > t && (o.buffered || n) && a.removeFragment(l)
                        }
                    }))
                }, e.removeFragment = function(t) {
                    var e = Tr(t);
                    t.stats.loaded = 0,
                    t.clearElementaryStreamInfo();
                    var r = this.activePartLists[t.type];
                    if (r) {
                        var i = t.sn;
                        this.activePartLists[t.type] = r.filter((function(t) {
                            return t.fragment.sn !== i
                        }))
                    }
                    delete this.fragments[e],
                    t.endList && delete this.endListFragments[t.type]
                }, e.removeAllFragments = function() {
                    this.fragments = Object.create(null),
                    this.endListFragments = Object.create(null),
                    this.activePartLists = Object.create(null),
                    this.hasGaps = !1
                }, t
            }();
        function yr(t) {
            var e,
                r,
                i;
            return t.buffered && (t.body.gap || (null == (e = t.range.video) ? void 0 : e.partial) || (null == (r = t.range.audio) ? void 0 : r.partial) || (null == (i = t.range.audiovideo) ? void 0 : i.partial))
        }
        function Tr(t) {
            return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
        }
        var Er = Math.pow(2, 17),
            Sr = function() {
                function t(t) {
                    this.config = void 0,
                    this.loader = null,
                    this.partLoadTimeout = -1,
                    this.config = t
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.loader && (this.loader.destroy(), this.loader = null)
                }, e.abort = function() {
                    this.loader && this.loader.abort()
                }, e.load = function(t, e) {
                    var r = this,
                        n = t.url;
                    if (!n)
                        return Promise.reject(new Ar({
                            type: L.NETWORK_ERROR,
                            details: R.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t,
                            error: new Error("Fragment does not have a " + (n ? "part list" : "url")),
                            networkDetails: null
                        }));
                    this.abort();
                    var a = this.config,
                        s = a.fLoader,
                        o = a.loader;
                    return new Promise((function(l, u) {
                        if (r.loader && r.loader.destroy(), t.gap) {
                            if (t.tagList.some((function(t) {
                                return "GAP" === t[0]
                            })))
                                return void u(Rr(t));
                            t.gap = !1
                        }
                        var h = r.loader = t.loader = s ? new s(a) : new o(a),
                            d = Lr(t),
                            c = Xe(a.fragLoadPolicy.default),
                            f = {
                                loadPolicy: c,
                                timeout: c.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0,
                                highWaterMark: "initSegment" === t.sn ? 1 / 0 : Er
                            };
                        t.stats = h.stats,
                        h.load(d, f, {
                            onSuccess: function(e, i, n, a) {
                                r.resetLoader(t, h);
                                var s = e.data;
                                n.resetIV && t.decryptdata && (t.decryptdata.iv = new Uint8Array(s.slice(0, 16)), s = s.slice(16)),
                                l({
                                    frag: t,
                                    part: null,
                                    payload: s,
                                    networkDetails: a
                                })
                            },
                            onError: function(e, a, s, o) {
                                r.resetLoader(t, h),
                                u(new Ar({
                                    type: L.NETWORK_ERROR,
                                    details: R.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    response: i({
                                        url: n,
                                        data: void 0
                                    }, e),
                                    error: new Error("HTTP Error " + e.code + " " + e.text),
                                    networkDetails: s,
                                    stats: o
                                }))
                            },
                            onAbort: function(e, i, n) {
                                r.resetLoader(t, h),
                                u(new Ar({
                                    type: L.NETWORK_ERROR,
                                    details: R.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: t,
                                    error: new Error("Aborted"),
                                    networkDetails: n,
                                    stats: e
                                }))
                            },
                            onTimeout: function(e, i, n) {
                                r.resetLoader(t, h),
                                u(new Ar({
                                    type: L.NETWORK_ERROR,
                                    details: R.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: t,
                                    error: new Error("Timeout after " + f.timeout + "ms"),
                                    networkDetails: n,
                                    stats: e
                                }))
                            },
                            onProgress: function(r, i, n, a) {
                                e && e({
                                    frag: t,
                                    part: null,
                                    payload: n,
                                    networkDetails: a
                                })
                            }
                        })
                    }))
                }, e.loadPart = function(t, e, r) {
                    var n = this;
                    this.abort();
                    var a = this.config,
                        s = a.fLoader,
                        o = a.loader;
                    return new Promise((function(l, u) {
                        if (n.loader && n.loader.destroy(), t.gap || e.gap)
                            u(Rr(t, e));
                        else {
                            var h = n.loader = t.loader = s ? new s(a) : new o(a),
                                d = Lr(t, e),
                                c = Xe(a.fragLoadPolicy.default),
                                f = {
                                    loadPolicy: c,
                                    timeout: c.maxLoadTimeMs,
                                    maxRetry: 0,
                                    retryDelay: 0,
                                    maxRetryDelay: 0,
                                    highWaterMark: Er
                                };
                            e.stats = h.stats,
                            h.load(d, f, {
                                onSuccess: function(i, a, s, o) {
                                    n.resetLoader(t, h),
                                    n.updateStatsFromPart(t, e);
                                    var u = {
                                        frag: t,
                                        part: e,
                                        payload: i.data,
                                        networkDetails: o
                                    };
                                    r(u),
                                    l(u)
                                },
                                onError: function(r, a, s, o) {
                                    n.resetLoader(t, h),
                                    u(new Ar({
                                        type: L.NETWORK_ERROR,
                                        details: R.FRAG_LOAD_ERROR,
                                        fatal: !1,
                                        frag: t,
                                        part: e,
                                        response: i({
                                            url: d.url,
                                            data: void 0
                                        }, r),
                                        error: new Error("HTTP Error " + r.code + " " + r.text),
                                        networkDetails: s,
                                        stats: o
                                    }))
                                },
                                onAbort: function(r, i, a) {
                                    t.stats.aborted = e.stats.aborted,
                                    n.resetLoader(t, h),
                                    u(new Ar({
                                        type: L.NETWORK_ERROR,
                                        details: R.INTERNAL_ABORTED,
                                        fatal: !1,
                                        frag: t,
                                        part: e,
                                        error: new Error("Aborted"),
                                        networkDetails: a,
                                        stats: r
                                    }))
                                },
                                onTimeout: function(r, i, a) {
                                    n.resetLoader(t, h),
                                    u(new Ar({
                                        type: L.NETWORK_ERROR,
                                        details: R.FRAG_LOAD_TIMEOUT,
                                        fatal: !1,
                                        frag: t,
                                        part: e,
                                        error: new Error("Timeout after " + f.timeout + "ms"),
                                        networkDetails: a,
                                        stats: r
                                    }))
                                }
                            })
                        }
                    }))
                }, e.updateStatsFromPart = function(t, e) {
                    var r = t.stats,
                        i = e.stats,
                        n = i.total;
                    if (r.loaded += i.loaded, n) {
                        var a = Math.round(t.duration / e.duration),
                            s = Math.min(Math.round(r.loaded / n), a),
                            o = (a - s) * Math.round(r.loaded / s);
                        r.total = r.loaded + o
                    } else
                        r.total = Math.max(r.loaded, r.total);
                    var l = r.loading,
                        u = i.loading;
                    l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first),
                    l.end = u.end
                }, e.resetLoader = function(t, e) {
                    t.loader = null,
                    this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null),
                    e.destroy()
                }, t
            }();
        function Lr(t, e) {
            void 0 === e && (e = null);
            var r = e || t,
                i = {
                    frag: t,
                    part: e,
                    responseType: "arraybuffer",
                    url: r.url,
                    headers: {},
                    rangeStart: 0,
                    rangeEnd: 0
                },
                n = r.byteRangeStartOffset,
                a = r.byteRangeEndOffset;
            if (E(n) && E(a)) {
                var s,
                    o = n,
                    l = a;
                if ("initSegment" === t.sn && "AES-128" === (null == (s = t.decryptdata) ? void 0 : s.method)) {
                    var u = a - n;
                    u % 16 && (l = a + (16 - u % 16)),
                    0 !== n && (i.resetIV = !0, o = n - 16)
                }
                i.rangeStart = o,
                i.rangeEnd = l
            }
            return i
        }
        function Rr(t, e) {
            var r = new Error("GAP " + (t.gap ? "tag" : "attribute") + " found"),
                i = {
                    type: L.MEDIA_ERROR,
                    details: R.FRAG_GAP,
                    fatal: !1,
                    frag: t,
                    error: r,
                    networkDetails: null
                };
            return e && (i.part = e), (e || t).stats.aborted = !0, new Ar(i)
        }
        var Ar = function(t) {
                function e(e) {
                    var r;
                    return (r = t.call(this, e.error.message) || this).data = void 0, r.data = e, r
                }
                return l(e, t), e
            }(f(Error)),
            kr = function() {
                function t(t) {
                    this.config = void 0,
                    this.keyUriToKeyInfo = {},
                    this.emeController = null,
                    this.config = t
                }
                var e = t.prototype;
                return e.abort = function(t) {
                    for (var e in this.keyUriToKeyInfo) {
                        var r = this.keyUriToKeyInfo[e].loader;
                        if (r) {
                            if (t && t !== r.context.frag.type)
                                return;
                            r.abort()
                        }
                    }
                }, e.detach = function() {
                    for (var t in this.keyUriToKeyInfo) {
                        var e = this.keyUriToKeyInfo[t];
                        (e.mediaKeySessionContext || e.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t]
                    }
                }, e.destroy = function() {
                    for (var t in this.detach(), this.keyUriToKeyInfo) {
                        var e = this.keyUriToKeyInfo[t].loader;
                        e && e.destroy()
                    }
                    this.keyUriToKeyInfo = {}
                }, e.createKeyLoadError = function(t, e, r, i, n) {
                    return void 0 === e && (e = R.KEY_LOAD_ERROR), new Ar({
                        type: L.NETWORK_ERROR,
                        details: e,
                        fatal: !1,
                        frag: t,
                        response: n,
                        error: r,
                        networkDetails: i
                    })
                }, e.loadClear = function(t, e) {
                    var r = this;
                    if (this.emeController && this.config.emeEnabled)
                        for (var i = t.sn, n = t.cc, a = function() {
                                var t = e[s];
                                if (n <= t.cc && ("initSegment" === i || "initSegment" === t.sn || i < t.sn))
                                    return r.emeController.selectKeySystemFormat(t).then((function(e) {
                                        t.setKeyFormat(e)
                                    })), "break"
                            }, s = 0; s < e.length && "break" !== a(); s++)
                            ;
                }, e.load = function(t) {
                    var e = this;
                    return !t.decryptdata && t.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t).then((function(r) {
                        return e.loadInternal(t, r)
                    })) : this.loadInternal(t)
                }, e.loadInternal = function(t, e) {
                    var r,
                        i;
                    e && t.setKeyFormat(e);
                    var n = t.decryptdata;
                    if (!n) {
                        var a = new Error(e ? "Expected frag.decryptdata to be defined after setting format " + e : "Missing decryption data on fragment in onKeyLoading");
                        return Promise.reject(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, a))
                    }
                    var s = n.uri;
                    if (!s)
                        return Promise.reject(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + s + '"')));
                    var o,
                        l = this.keyUriToKeyInfo[s];
                    if (null != (r = l) && r.decryptdata.key)
                        return n.key = l.decryptdata.key, Promise.resolve({
                            frag: t,
                            keyInfo: l
                        });
                    if (null != (i = l) && i.keyLoadPromise)
                        switch (null == (o = l.mediaKeySessionContext) ? void 0 : o.keyStatus) {
                        case void 0:
                        case "status-pending":
                        case "usable":
                        case "usable-in-future":
                            return l.keyLoadPromise.then((function(e) {
                                return n.key = e.keyInfo.decryptdata.key, {
                                    frag: t,
                                    keyInfo: l
                                }
                            }))
                        }
                    switch (l = this.keyUriToKeyInfo[s] = {
                        decryptdata: n,
                        keyLoadPromise: null,
                        loader: null,
                        mediaKeySessionContext: null
                    }, n.method) {
                    case "ISO-23001-7":
                    case "SAMPLE-AES":
                    case "SAMPLE-AES-CENC":
                    case "SAMPLE-AES-CTR":
                        return "identity" === n.keyFormat ? this.loadKeyHTTP(l, t) : this.loadKeyEME(l, t);
                    case "AES-128":
                        return this.loadKeyHTTP(l, t);
                    default:
                        return Promise.reject(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + n.method + '"')))
                    }
                }, e.loadKeyEME = function(t, e) {
                    var r = {
                        frag: e,
                        keyInfo: t
                    };
                    if (this.emeController && this.config.emeEnabled) {
                        var i = this.emeController.loadKey(r);
                        if (i)
                            return (t.keyLoadPromise = i.then((function(e) {
                                return t.mediaKeySessionContext = e, r
                            }))).catch((function(e) {
                                throw t.keyLoadPromise = null, e
                            }))
                    }
                    return Promise.resolve(r)
                }, e.loadKeyHTTP = function(t, e) {
                    var r = this,
                        n = this.config,
                        a = new (0, n.loader)(n);
                    return e.keyLoader = t.loader = a, t.keyLoadPromise = new Promise((function(s, o) {
                        var l = {
                                keyInfo: t,
                                frag: e,
                                responseType: "arraybuffer",
                                url: t.decryptdata.uri
                            },
                            u = n.keyLoadPolicy.default,
                            h = {
                                loadPolicy: u,
                                timeout: u.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0
                            },
                            d = {
                                onSuccess: function(t, e, i, n) {
                                    var a = i.frag,
                                        l = i.keyInfo,
                                        u = i.url;
                                    if (!a.decryptdata || l !== r.keyUriToKeyInfo[u])
                                        return o(r.createKeyLoadError(a, R.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), n));
                                    l.decryptdata.key = a.decryptdata.key = new Uint8Array(t.data),
                                    a.keyLoader = null,
                                    l.loader = null,
                                    s({
                                        frag: a,
                                        keyInfo: l
                                    })
                                },
                                onError: function(t, n, a, s) {
                                    r.resetLoader(n),
                                    o(r.createKeyLoadError(e, R.KEY_LOAD_ERROR, new Error("HTTP Error " + t.code + " loading key " + t.text), a, i({
                                        url: l.url,
                                        data: void 0
                                    }, t)))
                                },
                                onTimeout: function(t, i, n) {
                                    r.resetLoader(i),
                                    o(r.createKeyLoadError(e, R.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), n))
                                },
                                onAbort: function(t, i, n) {
                                    r.resetLoader(i),
                                    o(r.createKeyLoadError(e, R.INTERNAL_ABORTED, new Error("key loading aborted"), n))
                                }
                            };
                        a.load(l, h, d)
                    }))
                }, e.resetLoader = function(t) {
                    var e = t.frag,
                        r = t.keyInfo,
                        i = t.url,
                        n = r.loader;
                    e.keyLoader === n && (e.keyLoader = null, r.loader = null),
                    delete this.keyUriToKeyInfo[i],
                    n && n.destroy()
                }, t
            }(),
            br = function() {
                function t() {
                    this._boundTick = void 0,
                    this._tickTimer = null,
                    this._tickInterval = null,
                    this._tickCallCount = 0,
                    this._boundTick = this.tick.bind(this)
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.onHandlerDestroying(),
                    this.onHandlerDestroyed()
                }, e.onHandlerDestroying = function() {
                    this.clearNextTick(),
                    this.clearInterval()
                }, e.onHandlerDestroyed = function() {}, e.hasInterval = function() {
                    return !!this._tickInterval
                }, e.hasNextTick = function() {
                    return !!this._tickTimer
                }, e.setInterval = function(t) {
                    return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t), !0)
                }, e.clearInterval = function() {
                    return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                }, e.clearNextTick = function() {
                    return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                }, e.tick = function() {
                    this._tickCallCount++,
                    1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
                }, e.tickImmediate = function() {
                    this.clearNextTick(),
                    this._tickTimer = self.setTimeout(this._boundTick, 0)
                }, e.doTick = function() {}, t
            }(),
            Dr = {
                length: 0,
                start: function() {
                    return 0
                },
                end: function() {
                    return 0
                }
            },
            Ir = function() {
                function t() {}
                return t.isBuffered = function(e, r) {
                    try {
                        if (e)
                            for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                                if (r >= i.start(n) && r <= i.end(n))
                                    return !0
                    } catch (t) {}
                    return !1
                }, t.bufferInfo = function(e, r, i) {
                    try {
                        if (e) {
                            var n,
                                a = t.getBuffered(e),
                                s = [];
                            for (n = 0; n < a.length; n++)
                                s.push({
                                    start: a.start(n),
                                    end: a.end(n)
                                });
                            return this.bufferedInfo(s, r, i)
                        }
                    } catch (t) {}
                    return {
                        len: 0,
                        start: r,
                        end: r,
                        nextStart: void 0
                    }
                }, t.bufferedInfo = function(t, e, r) {
                    e = Math.max(0, e),
                    t.sort((function(t, e) {
                        var r = t.start - e.start;
                        return r || e.end - t.end
                    }));
                    var i = [];
                    if (r)
                        for (var n = 0; n < t.length; n++) {
                            var a = i.length;
                            if (a) {
                                var s = i[a - 1].end;
                                t[n].start - s < r ? t[n].end > s && (i[a - 1].end = t[n].end) : i.push(t[n])
                            } else
                                i.push(t[n])
                        }
                    else
                        i = t;
                    for (var o, l = 0, u = e, h = e, d = 0; d < i.length; d++) {
                        var c = i[d].start,
                            f = i[d].end;
                        if (e + r >= c && e < f)
                            u = c,
                            l = (h = f) - e;
                        else if (e + r < c) {
                            o = c;
                            break
                        }
                    }
                    return {
                        len: l,
                        start: u || 0,
                        end: h || 0,
                        nextStart: o
                    }
                }, t.getBuffered = function(t) {
                    try {
                        return t.buffered
                    } catch (t) {
                        return w.log("failed to get media.buffered", t), Dr
                    }
                }, t
            }(),
            wr = function(t, e, r, i, n, a) {
                void 0 === i && (i = 0),
                void 0 === n && (n = -1),
                void 0 === a && (a = !1),
                this.level = void 0,
                this.sn = void 0,
                this.part = void 0,
                this.id = void 0,
                this.size = void 0,
                this.partial = void 0,
                this.transmuxing = {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                this.buffering = {
                    audio: {
                        start: 0,
                        executeStart: 0,
                        executeEnd: 0,
                        end: 0
                    },
                    video: {
                        start: 0,
                        executeStart: 0,
                        executeEnd: 0,
                        end: 0
                    },
                    audiovideo: {
                        start: 0,
                        executeStart: 0,
                        executeEnd: 0,
                        end: 0
                    }
                },
                this.level = t,
                this.sn = e,
                this.id = r,
                this.size = i,
                this.part = n,
                this.partial = a
            };
        function Cr(t, e) {
            for (var r = null, i = 0, n = t.length; i < n; i++) {
                var a = t[i];
                if (a && a.cc === e) {
                    r = a;
                    break
                }
            }
            return r
        }
        function _r(t, e) {
            if (t) {
                var r = t.start + e;
                t.start = t.startPTS = r,
                t.endPTS = r + t.duration
            }
        }
        function Pr(t, e) {
            for (var r = e.fragments, i = 0, n = r.length; i < n; i++)
                _r(r[i], t);
            e.fragmentHint && _r(e.fragmentHint, t),
            e.alignedSliding = !0
        }
        function xr(t, e, r) {
            e && (function(t, e, r) {
                if (function(t, e, r) {
                    return !(!e.details || !(r.endCC > r.startCC || t && t.cc < r.startCC))
                }(t, r, e)) {
                    var i = function(t, e, r) {
                        var i = t.fragments,
                            n = e.fragments;
                        if (n.length && i.length) {
                            var a = Cr(i, n[0].cc);
                            if (a && (!a || a.startPTS))
                                return a;
                            w.log("No frag in previous level to align on")
                        } else
                            w.log("No fragments to align")
                    }(r.details, e);
                    i && E(i.start) && (w.log("Adjusting PTS using last level due to CC increase within current level " + e.url), Pr(i.start, e))
                }
            }(t, r, e), !r.alignedSliding && e.details && function(t, e) {
                if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                    var r = e.fragments[0].programDateTime,
                        i = t.fragments[0].programDateTime,
                        n = (i - r) / 1e3 + e.fragments[0].start;
                    n && E(n) && (w.log("Adjusting PTS using programDateTime delta " + (i - r) + "ms, sliding:" + n.toFixed(3) + " " + t.url + " "), Pr(n, t))
                }
            }(r, e.details), r.alignedSliding || !e.details || r.skippedSegments || Ke(e.details, r))
        }
        function Fr(t, e) {
            if (t.hasProgramDateTime && e.hasProgramDateTime) {
                var r = t.fragments,
                    i = e.fragments;
                if (r.length && i.length) {
                    var n = i[Math.round(i.length / 2) - 1],
                        a = Cr(r, n.cc) || r[Math.round(r.length / 2) - 1],
                        s = n.programDateTime,
                        o = a.programDateTime;
                    null !== s && null !== o && Pr((o - s) / 1e3 - (a.start - n.start), t)
                }
            }
        }
        var Mr = function() {
                function t(t, e) {
                    this.subtle = void 0,
                    this.aesIV = void 0,
                    this.subtle = t,
                    this.aesIV = e
                }
                return t.prototype.decrypt = function(t, e) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, e, t)
                }, t
            }(),
            Or = function() {
                function t(t, e) {
                    this.subtle = void 0,
                    this.key = void 0,
                    this.subtle = t,
                    this.key = e
                }
                return t.prototype.expandKey = function() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, ["encrypt", "decrypt"])
                }, t
            }(),
            Nr = function() {
                function t() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.sBox = new Uint32Array(256),
                    this.invSBox = new Uint32Array(256),
                    this.key = new Uint32Array(0),
                    this.ksRows = 0,
                    this.keySize = 0,
                    this.keySchedule = void 0,
                    this.invKeySchedule = void 0,
                    this.initTable()
                }
                var e = t.prototype;
                return e.uint8ArrayToUint32Array_ = function(t) {
                    for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++)
                        r[i] = e.getUint32(4 * i);
                    return r
                }, e.initTable = function() {
                    var t = this.sBox,
                        e = this.invSBox,
                        r = this.subMix,
                        i = r[0],
                        n = r[1],
                        a = r[2],
                        s = r[3],
                        o = this.invSubMix,
                        l = o[0],
                        u = o[1],
                        h = o[2],
                        d = o[3],
                        c = new Uint32Array(256),
                        f = 0,
                        g = 0,
                        v = 0;
                    for (v = 0; v < 256; v++)
                        c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                    for (v = 0; v < 256; v++) {
                        var m = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                        m = m >>> 8 ^ 255 & m ^ 99,
                        t[f] = m,
                        e[m] = f;
                        var p = c[f],
                            y = c[p],
                            T = c[y],
                            E = 257 * c[m] ^ 16843008 * m;
                        i[f] = E << 24 | E >>> 8,
                        n[f] = E << 16 | E >>> 16,
                        a[f] = E << 8 | E >>> 24,
                        s[f] = E,
                        E = 16843009 * T ^ 65537 * y ^ 257 * p ^ 16843008 * f,
                        l[m] = E << 24 | E >>> 8,
                        u[m] = E << 16 | E >>> 16,
                        h[m] = E << 8 | E >>> 24,
                        d[m] = E,
                        f ? (f = p ^ c[c[c[T ^ p]]], g ^= c[c[g]]) : f = g = 1
                    }
                }, e.expandKey = function(t) {
                    for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;)
                        r = e[i] === this.key[i],
                        i++;
                    if (!r) {
                        this.key = e;
                        var n = this.keySize = e.length;
                        if (4 !== n && 6 !== n && 8 !== n)
                            throw new Error("Invalid aes key size=" + n);
                        var a,
                            s,
                            o,
                            l,
                            u = this.ksRows = 4 * (n + 6 + 1),
                            h = this.keySchedule = new Uint32Array(u),
                            d = this.invKeySchedule = new Uint32Array(u),
                            c = this.sBox,
                            f = this.rcon,
                            g = this.invSubMix,
                            v = g[0],
                            m = g[1],
                            p = g[2],
                            y = g[3];
                        for (a = 0; a < u; a++)
                            a < n ? o = h[a] = e[a] : (l = o, a % n == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), h[a] = o = (h[a - n] ^ l) >>> 0);
                        for (s = 0; s < u; s++)
                            a = u - s,
                            l = 3 & s ? h[a] : h[a - 4],
                            d[s] = s < 4 || a <= 4 ? l : v[c[l >>> 24]] ^ m[c[l >>> 16 & 255]] ^ p[c[l >>> 8 & 255]] ^ y[c[255 & l]],
                            d[s] = d[s] >>> 0
                    }
                }, e.networkToHostOrderSwap = function(t) {
                    return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                }, e.decrypt = function(t, e, r) {
                    for (var i, n, a, s, o, l, u, h, d, c, f, g, v, m, p = this.keySize + 6, y = this.invKeySchedule, T = this.invSBox, E = this.invSubMix, S = E[0], L = E[1], R = E[2], A = E[3], k = this.uint8ArrayToUint32Array_(r), b = k[0], D = k[1], I = k[2], w = k[3], C = new Int32Array(t), _ = new Int32Array(C.length), P = this.networkToHostOrderSwap; e < C.length;) {
                        for (d = P(C[e]), c = P(C[e + 1]), f = P(C[e + 2]), g = P(C[e + 3]), o = d ^ y[0], l = g ^ y[1], u = f ^ y[2], h = c ^ y[3], v = 4, m = 1; m < p; m++)
                            i = S[o >>> 24] ^ L[l >> 16 & 255] ^ R[u >> 8 & 255] ^ A[255 & h] ^ y[v],
                            n = S[l >>> 24] ^ L[u >> 16 & 255] ^ R[h >> 8 & 255] ^ A[255 & o] ^ y[v + 1],
                            a = S[u >>> 24] ^ L[h >> 16 & 255] ^ R[o >> 8 & 255] ^ A[255 & l] ^ y[v + 2],
                            s = S[h >>> 24] ^ L[o >> 16 & 255] ^ R[l >> 8 & 255] ^ A[255 & u] ^ y[v + 3],
                            o = i,
                            l = n,
                            u = a,
                            h = s,
                            v += 4;
                        i = T[o >>> 24] << 24 ^ T[l >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & h] ^ y[v],
                        n = T[l >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[h >> 8 & 255] << 8 ^ T[255 & o] ^ y[v + 1],
                        a = T[u >>> 24] << 24 ^ T[h >> 16 & 255] << 16 ^ T[o >> 8 & 255] << 8 ^ T[255 & l] ^ y[v + 2],
                        s = T[h >>> 24] << 24 ^ T[o >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & u] ^ y[v + 3],
                        _[e] = P(i ^ b),
                        _[e + 1] = P(s ^ D),
                        _[e + 2] = P(a ^ I),
                        _[e + 3] = P(n ^ w),
                        b = d,
                        D = c,
                        I = f,
                        w = g,
                        e += 4
                    }
                    return _.buffer
                }, t
            }(),
            Ur = function() {
                function t(t, e) {
                    var r = (void 0 === e ? {} : e).removePKCS7Padding,
                        i = void 0 === r || r;
                    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t.enableSoftwareAES, this.removePKCS7Padding = i, i)
                        try {
                            var n = self.crypto;
                            n && (this.subtle = n.subtle || n.webkitSubtle)
                        } catch (t) {}
                    null === this.subtle && (this.useSoftware = !0)
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.subtle = null,
                    this.softwareDecrypter = null,
                    this.key = null,
                    this.fastAesKey = null,
                    this.remainderData = null,
                    this.currentIV = null,
                    this.currentResult = null
                }, e.isSync = function() {
                    return this.useSoftware
                }, e.flush = function() {
                    var t = this.currentResult,
                        e = this.remainderData;
                    if (!t || e)
                        return this.reset(), null;
                    var r,
                        i,
                        n,
                        a = new Uint8Array(t);
                    return this.reset(), this.removePKCS7Padding ? (i = (r = a).byteLength, (n = i && new DataView(r.buffer).getUint8(i - 1)) ? rt(r, 0, i - n) : r) : a
                }, e.reset = function() {
                    this.currentResult = null,
                    this.currentIV = null,
                    this.remainderData = null,
                    this.softwareDecrypter && (this.softwareDecrypter = null)
                }, e.decrypt = function(t, e, r) {
                    var i = this;
                    return this.useSoftware ? new Promise((function(n, a) {
                        i.softwareDecrypt(new Uint8Array(t), e, r);
                        var s = i.flush();
                        s ? n(s.buffer) : a(new Error("[softwareDecrypt] Failed to decrypt data"))
                    })) : this.webCryptoDecrypt(new Uint8Array(t), e, r)
                }, e.softwareDecrypt = function(t, e, r) {
                    var i = this.currentIV,
                        n = this.currentResult,
                        a = this.remainderData;
                    this.logOnce("JS AES decrypt"),
                    a && (t = xt(a, t), this.remainderData = null);
                    var s = this.getValidChunk(t);
                    if (!s.length)
                        return null;
                    i && (r = i);
                    var o = this.softwareDecrypter;
                    o || (o = this.softwareDecrypter = new Nr),
                    o.expandKey(e);
                    var l = n;
                    return this.currentResult = o.decrypt(s.buffer, 0, r), this.currentIV = rt(s, -16).buffer, l || null
                }, e.webCryptoDecrypt = function(t, e, r) {
                    var i = this,
                        n = this.subtle;
                    return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new Or(n, e)), this.fastAesKey.expandKey().then((function(e) {
                        return n ? (i.logOnce("WebCrypto AES decrypt"), new Mr(n, new Uint8Array(r)).decrypt(t.buffer, e)) : Promise.reject(new Error("web crypto not initialized"))
                    })).catch((function(n) {
                        return w.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + n.name + ": " + n.message), i.onWebCryptoError(t, e, r)
                    }))
                }, e.onWebCryptoError = function(t, e, r) {
                    this.useSoftware = !0,
                    this.logEnabled = !0,
                    this.softwareDecrypt(t, e, r);
                    var i = this.flush();
                    if (i)
                        return i.buffer;
                    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")
                }, e.getValidChunk = function(t) {
                    var e = t,
                        r = t.length - t.length % 16;
                    return r !== t.length && (e = rt(t, 0, r), this.remainderData = rt(t, r)), e
                }, e.logOnce = function(t) {
                    this.logEnabled && (w.log("[decrypter]: " + t), this.logEnabled = !1)
                }, t
            }(),
            Br = function(t) {
                for (var e = "", r = t.length, i = 0; i < r; i++)
                    e += "[" + t.start(i).toFixed(3) + "-" + t.end(i).toFixed(3) + "]";
                return e
            },
            Gr = "STOPPED",
            Kr = "IDLE",
            Hr = "KEY_LOADING",
            Vr = "FRAG_LOADING",
            Yr = "FRAG_LOADING_WAITING_RETRY",
            Wr = "WAITING_TRACK",
            jr = "PARSING",
            qr = "PARSED",
            Xr = "ENDED",
            zr = "ERROR",
            Qr = "WAITING_INIT_PTS",
            $r = "WAITING_LEVEL",
            Jr = function(t) {
                function e(e, r, i, n, a) {
                    var s;
                    return (s = t.call(this) || this).hls = void 0, s.fragPrevious = null, s.fragCurrent = null, s.fragmentTracker = void 0, s.transmuxer = null, s._state = Gr, s.playlistType = void 0, s.media = null, s.mediaBuffer = null, s.config = void 0, s.bitrateTest = !1, s.lastCurrentTime = 0, s.nextLoadPosition = 0, s.startPosition = 0, s.startTimeOffset = null, s.loadedmetadata = !1, s.retryDate = 0, s.levels = null, s.fragmentLoader = void 0, s.keyLoader = void 0, s.levelLastLoaded = null, s.startFragRequested = !1, s.decrypter = void 0, s.initPTS = [], s.onvseeking = null, s.onvended = null, s.logPrefix = "", s.log = void 0, s.warn = void 0, s.playlistType = a, s.logPrefix = n, s.log = w.log.bind(w, n + ":"), s.warn = w.warn.bind(w, n + ":"), s.hls = e, s.fragmentLoader = new Sr(e.config), s.keyLoader = i, s.fragmentTracker = r, s.config = e.config, s.decrypter = new Ur(e.config), e.on(S.MANIFEST_LOADED, s.onManifestLoaded, function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(s)), s
                }
                l(e, t);
                var r = e.prototype;
                return r.doTick = function() {
                    this.onTickEnd()
                }, r.onTickEnd = function() {}, r.startLoad = function(t) {}, r.stopLoad = function() {
                    this.fragmentLoader.abort(),
                    this.keyLoader.abort(this.playlistType);
                    var t = this.fragCurrent;
                    null != t && t.loader && (t.abortRequests(), this.fragmentTracker.removeFragment(t)),
                    this.resetTransmuxer(),
                    this.fragCurrent = null,
                    this.fragPrevious = null,
                    this.clearInterval(),
                    this.clearNextTick(),
                    this.state = Gr
                }, r._streamEnded = function(t, e) {
                    if (e.live || t.nextStart || !t.end || !this.media)
                        return !1;
                    var r = e.partList;
                    if (null != r && r.length) {
                        var i = r[r.length - 1];
                        return Ir.isBuffered(this.media, i.start + i.duration / 2)
                    }
                    var n = e.fragments[e.fragments.length - 1].type;
                    return this.fragmentTracker.isEndListAppended(n)
                }, r.getLevelDetails = function() {
                    var t;
                    if (this.levels && null !== this.levelLastLoaded)
                        return null == (t = this.levels[this.levelLastLoaded]) ? void 0 : t.details
                }, r.onMediaAttached = function(t, e) {
                    var r = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this),
                    this.onvended = this.onMediaEnded.bind(this),
                    r.addEventListener("seeking", this.onvseeking),
                    r.addEventListener("ended", this.onvended);
                    var i = this.config;
                    this.levels && i.autoStartLoad && this.state === Gr && this.startLoad(i.startPosition)
                }, r.onMediaDetaching = function() {
                    var t = this.media;
                    null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0),
                    t && this.onvseeking && this.onvended && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null),
                    this.keyLoader && this.keyLoader.detach(),
                    this.media = this.mediaBuffer = null,
                    this.loadedmetadata = !1,
                    this.fragmentTracker.removeAllFragments(),
                    this.stopLoad()
                }, r.onMediaSeeking = function() {
                    var t = this.config,
                        e = this.fragCurrent,
                        r = this.media,
                        i = this.mediaBuffer,
                        n = this.state,
                        a = r ? r.currentTime : 0,
                        s = Ir.bufferInfo(i || r, a, t.maxBufferHole);
                    if (this.log("media seeking to " + (E(a) ? a.toFixed(3) : a) + ", state: " + n), this.state === Xr)
                        this.resetLoadingState();
                    else if (e) {
                        var o = t.maxFragLookUpTolerance,
                            l = e.start - o,
                            u = e.start + e.duration + o;
                        if (!s.len || u < s.start || l > s.end) {
                            var h = a > u;
                            (a < l || h) && (h && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
                        }
                    }
                    r && (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0), this.lastCurrentTime = a),
                    this.loadedmetadata || s.len || (this.nextLoadPosition = this.startPosition = a),
                    this.tickImmediate()
                }, r.onMediaEnded = function() {
                    this.startPosition = this.lastCurrentTime = 0
                }, r.onManifestLoaded = function(t, e) {
                    this.startTimeOffset = e.startTimeOffset,
                    this.initPTS = []
                }, r.onHandlerDestroying = function() {
                    this.stopLoad(),
                    t.prototype.onHandlerDestroying.call(this)
                }, r.onHandlerDestroyed = function() {
                    this.state = Gr,
                    this.fragmentLoader && this.fragmentLoader.destroy(),
                    this.keyLoader && this.keyLoader.destroy(),
                    this.decrypter && this.decrypter.destroy(),
                    this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null,
                    t.prototype.onHandlerDestroyed.call(this)
                }, r.loadFragment = function(t, e, r) {
                    this._loadFragForPlayback(t, e, r)
                }, r._loadFragForPlayback = function(t, e, r) {
                    var i = this;
                    this._doFragLoad(t, e, r, (function(e) {
                        if (i.fragContextChanged(t))
                            return i.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), void i.fragmentTracker.removeFragment(t);
                        t.stats.chunkCount++,
                        i._handleFragmentLoadProgress(e)
                    })).then((function(e) {
                        if (e) {
                            var r = i.state;
                            i.fragContextChanged(t) ? (r === Vr || !i.fragCurrent && r === jr) && (i.fragmentTracker.removeFragment(t), i.state = Kr) : ("payload" in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level), i.hls.trigger(S.FRAG_LOADED, e)), i._handleFragmentLoadComplete(e))
                        }
                    })).catch((function(e) {
                        i.state !== Gr && i.state !== zr && (i.warn(e), i.resetFragmentLoading(t))
                    }))
                }, r.clearTrackerIfNeeded = function(t) {
                    var e,
                        r = this.fragmentTracker;
                    if (r.getState(t) === gr) {
                        var i = t.type,
                            n = this.getFwdBufferInfo(this.mediaBuffer, i),
                            a = Math.max(t.duration, n ? n.len : this.config.maxBufferLength);
                        this.reduceMaxBufferLength(a) && r.removeFragment(t)
                    } else
                        0 === (null == (e = this.mediaBuffer) ? void 0 : e.buffered.length) ? r.removeAllFragments() : r.hasParts(t.type) && (r.detectPartialFragments({
                            frag: t,
                            part: null,
                            stats: t.stats,
                            id: t.type
                        }), r.getState(t) === vr && r.removeFragment(t))
                }, r.checkLiveUpdate = function(t) {
                    if (t.updated && !t.live) {
                        var e = t.fragments[t.fragments.length - 1];
                        this.fragmentTracker.detectPartialFragments({
                            frag: e,
                            part: null,
                            stats: e.stats,
                            id: e.type
                        })
                    }
                    t.fragments[0] || (t.deltaUpdateFailed = !0)
                }, r.flushMainBuffer = function(t, e, r) {
                    if (void 0 === r && (r = null), t - e) {
                        var i = {
                            startOffset: t,
                            endOffset: e,
                            type: r
                        };
                        this.hls.trigger(S.BUFFER_FLUSHING, i)
                    }
                }, r._loadInitSegment = function(t, e) {
                    var r = this;
                    this._doFragLoad(t, e).then((function(e) {
                        if (!e || r.fragContextChanged(t) || !r.levels)
                            throw new Error("init load aborted");
                        return e
                    })).then((function(e) {
                        var i = r.hls,
                            n = e.payload,
                            a = t.decryptdata;
                        if (n && n.byteLength > 0 && a && a.key && a.iv && "AES-128" === a.method) {
                            var s = self.performance.now();
                            return r.decrypter.decrypt(new Uint8Array(n), a.key.buffer, a.iv.buffer).catch((function(e) {
                                throw i.trigger(S.ERROR, {
                                    type: L.MEDIA_ERROR,
                                    details: R.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: e,
                                    reason: e.message,
                                    frag: t
                                }), e
                            })).then((function(r) {
                                var n = self.performance.now();
                                return i.trigger(S.FRAG_DECRYPTED, {
                                    frag: t,
                                    payload: r,
                                    stats: {
                                        tstart: s,
                                        tdecrypt: n
                                    }
                                }), e.payload = r, e
                            }))
                        }
                        return e
                    })).then((function(i) {
                        var n = r.fragCurrent,
                            a = r.hls;
                        if (!r.levels)
                            throw new Error("init load aborted, missing levels");
                        var s = t.stats;
                        r.state = Kr,
                        e.fragmentError = 0,
                        t.data = new Uint8Array(i.payload),
                        s.parsing.start = s.buffering.start = self.performance.now(),
                        s.parsing.end = s.buffering.end = self.performance.now(),
                        i.frag === n && a.trigger(S.FRAG_BUFFERED, {
                            stats: s,
                            frag: n,
                            part: null,
                            id: t.type
                        }),
                        r.tick()
                    })).catch((function(e) {
                        r.state !== Gr && r.state !== zr && (r.warn(e), r.resetFragmentLoading(t))
                    }))
                }, r.fragContextChanged = function(t) {
                    var e = this.fragCurrent;
                    return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                }, r.fragBufferedComplete = function(t, e) {
                    var r,
                        i,
                        n,
                        a,
                        s = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + (this.playlistType === ge ? "level" : "track") + " " + t.level + " (frag:[" + (null != (r = t.startPTS) ? r : NaN).toFixed(3) + "-" + (null != (i = t.endPTS) ? i : NaN).toFixed(3) + "] > buffer:" + (s ? Br(Ir.getBuffered(s)) : "(detached)") + ")"),
                    this.state = Kr,
                    s && (!this.loadedmetadata && t.type == ge && s.buffered.length && (null == (n = this.fragCurrent) ? void 0 : n.sn) === (null == (a = this.fragPrevious) ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
                }, r.seekToStartPos = function() {}, r._handleFragmentLoadComplete = function(t) {
                    var e = this.transmuxer;
                    if (e) {
                        var r = t.frag,
                            i = t.part,
                            n = t.partsLoaded,
                            a = !n || 0 === n.length || n.some((function(t) {
                                return !t
                            })),
                            s = new wr(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
                        e.flush(s)
                    }
                }, r._handleFragmentLoadProgress = function(t) {}, r._doFragLoad = function(t, e, r, i) {
                    var n,
                        a = this;
                    void 0 === r && (r = null);
                    var s = null == e ? void 0 : e.details;
                    if (!this.levels || !s)
                        throw new Error("frag load aborted, missing level" + (s ? "" : " detail") + "s");
                    var o = null;
                    if (!t.encrypted || null != (n = t.decryptdata) && n.key ? !t.encrypted && s.encryptedFragments.length && this.keyLoader.loadClear(t, s.encryptedFragments) : (this.log("Loading key for " + t.sn + " of [" + s.startSN + "-" + s.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = Hr, this.fragCurrent = t, o = this.keyLoader.load(t).then((function(t) {
                        if (!a.fragContextChanged(t.frag))
                            return a.hls.trigger(S.KEY_LOADED, t), a.state === Hr && (a.state = Kr), t
                    })), this.hls.trigger(S.KEY_LOADING, {
                        frag: t
                    }), null === this.fragCurrent && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), r = Math.max(t.start, r || 0), this.config.lowLatencyMode && "initSegment" !== t.sn) {
                        var l = s.partList;
                        if (l && i) {
                            r > t.end && s.fragmentHint && (t = s.fragmentHint);
                            var u = this.getNextPart(l, t, r);
                            if (u > -1) {
                                var h,
                                    d = l[u];
                                return this.log("Loading part sn: " + t.sn + " p: " + d.index + " cc: " + t.cc + " of playlist [" + s.startSN + "-" + s.endSN + "] parts [0-" + u + "-" + (l.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.nextLoadPosition = d.start + d.duration, this.state = Vr, h = o ? o.then((function(r) {
                                    return !r || a.fragContextChanged(r.frag) ? null : a.doFragPartsLoad(t, d, e, i)
                                })).catch((function(t) {
                                    return a.handleFragLoadError(t)
                                })) : this.doFragPartsLoad(t, d, e, i).catch((function(t) {
                                    return a.handleFragLoadError(t)
                                })), this.hls.trigger(S.FRAG_LOADING, {
                                    frag: t,
                                    part: d,
                                    targetBufferTime: r
                                }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : h
                            }
                            if (!t.url || this.loadedEndOfParts(l, r))
                                return Promise.resolve(null)
                        }
                    }
                    this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (s ? "of [" + s.startSN + "-" + s.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))),
                    E(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration),
                    this.state = Vr;
                    var c,
                        f = this.config.progressive;
                    return c = f && o ? o.then((function(e) {
                        return !e || a.fragContextChanged(null == e ? void 0 : e.frag) ? null : a.fragmentLoader.load(t, i)
                    })).catch((function(t) {
                        return a.handleFragLoadError(t)
                    })) : Promise.all([this.fragmentLoader.load(t, f ? i : void 0), o]).then((function(t) {
                        var e = t[0];
                        return !f && e && i && i(e), e
                    })).catch((function(t) {
                        return a.handleFragLoadError(t)
                    })), this.hls.trigger(S.FRAG_LOADING, {
                        frag: t,
                        targetBufferTime: r
                    }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c
                }, r.doFragPartsLoad = function(t, e, r, i) {
                    var n = this;
                    return new Promise((function(a, s) {
                        var o,
                            l = [],
                            u = null == (o = r.details) ? void 0 : o.partList;
                        !function e(o) {
                            n.fragmentLoader.loadPart(t, o, i).then((function(i) {
                                l[o.index] = i;
                                var s = i.part;
                                n.hls.trigger(S.FRAG_LOADED, i);
                                var h = Ve(r, t.sn, o.index + 1) || Ye(u, t.sn, o.index + 1);
                                if (!h)
                                    return a({
                                        frag: t,
                                        part: s,
                                        partsLoaded: l
                                    });
                                e(h)
                            })).catch(s)
                        }(e)
                    }))
                }, r.handleFragLoadError = function(t) {
                    if ("data" in t) {
                        var e = t.data;
                        t.data && e.details === R.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(S.ERROR, e)
                    } else
                        this.hls.trigger(S.ERROR, {
                            type: L.OTHER_ERROR,
                            details: R.INTERNAL_EXCEPTION,
                            err: t,
                            error: t,
                            fatal: !0
                        });
                    return null
                }, r._handleTransmuxerFlush = function(t) {
                    var e = this.getCurrentContext(t);
                    if (e && this.state === jr) {
                        var r = e.frag,
                            i = e.part,
                            n = e.level,
                            a = self.performance.now();
                        r.stats.parsing.end = a,
                        i && (i.stats.parsing.end = a),
                        this.updateLevelTiming(r, i, n, t.partial)
                    } else
                        this.fragCurrent || this.state === Gr || this.state === zr || (this.state = Kr)
                }, r.getCurrentContext = function(t) {
                    var e = this.levels,
                        r = this.fragCurrent,
                        i = t.level,
                        n = t.sn,
                        a = t.part;
                    if (null == e || !e[i])
                        return this.warn("Levels object was unset while buffering fragment " + n + " of level " + i + ". The current chunk will not be buffered."), null;
                    var s = e[i],
                        o = a > -1 ? Ve(s, n, a) : null,
                        l = o ? o.fragment : function(t, e, r) {
                            if (null == t || !t.details)
                                return null;
                            var i = t.details,
                                n = i.fragments[e - i.startSN];
                            return n || ((n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null)
                        }(s, n, r);
                    return l ? (r && r !== l && (l.stats = r.stats), {
                        frag: l,
                        part: o,
                        level: s
                    }) : null
                }, r.bufferFragmentData = function(t, e, r, i, n) {
                    var a;
                    if (t && this.state === jr) {
                        var s = t.data1,
                            o = t.data2,
                            l = s;
                        if (s && o && (l = xt(s, o)), null != (a = l) && a.length) {
                            var u = {
                                type: t.type,
                                frag: e,
                                part: r,
                                chunkMeta: i,
                                parent: e.type,
                                data: l
                            };
                            if (this.hls.trigger(S.BUFFER_APPENDING, u), t.dropped && t.independent && !r) {
                                if (n)
                                    return;
                                this.flushBufferGap(e)
                            }
                        }
                    }
                }, r.flushBufferGap = function(t) {
                    var e = this.media;
                    if (e)
                        if (Ir.isBuffered(e, e.currentTime)) {
                            var r = e.currentTime,
                                i = Ir.bufferInfo(e, r, 0),
                                n = t.duration,
                                a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n),
                                s = Math.max(Math.min(t.start - a, i.end - a), r + a);
                            t.start - s > a && this.flushMainBuffer(s, t.start)
                        } else
                            this.flushMainBuffer(0, t.start)
                }, r.getFwdBufferInfo = function(t, e) {
                    var r = this.getLoadPosition();
                    return E(r) ? this.getFwdBufferInfoAtPos(t, r, e) : null
                }, r.getFwdBufferInfoAtPos = function(t, e, r) {
                    var i = this.config.maxBufferHole,
                        n = Ir.bufferInfo(t, e, i);
                    if (0 === n.len && void 0 !== n.nextStart) {
                        var a = this.fragmentTracker.getBufferedFrag(e, r);
                        if (a && n.nextStart < a.end)
                            return Ir.bufferInfo(t, e, Math.max(n.nextStart, i))
                    }
                    return n
                }, r.getMaxBufferLength = function(t) {
                    var e,
                        r = this.config;
                    return e = t ? Math.max(8 * r.maxBufferSize / t, r.maxBufferLength) : r.maxBufferLength, Math.min(e, r.maxMaxBufferLength)
                }, r.reduceMaxBufferLength = function(t) {
                    var e = this.config,
                        r = t || e.maxBufferLength;
                    return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                }, r.getAppendedFrag = function(t, e) {
                    var r = this.fragmentTracker.getAppendedFrag(t, ge);
                    return r && "fragment" in r ? r.fragment : r
                }, r.getNextFragment = function(t, e) {
                    var r = e.fragments,
                        i = r.length;
                    if (!i)
                        return null;
                    var n,
                        a = this.config,
                        s = r[0].start;
                    if (e.live) {
                        var o = a.initialLiveManifestSize;
                        if (i < o)
                            return this.warn("Not enough fragments to start playback (have: " + i + ", need: " + o + ")"), null;
                        e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (n = this.getInitialLiveFragment(e, r), this.startPosition = n ? this.hls.liveSyncPosition || n.start : t)
                    } else
                        t <= s && (n = r[0]);
                    if (!n) {
                        var l = a.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                        n = this.getFragmentAtPosition(t, l, e)
                    }
                    return this.mapToInitFragWhenRequired(n)
                }, r.isLoopLoading = function(t, e) {
                    var r = this.fragmentTracker.getState(t);
                    return (r === mr || r === vr && !!t.gap) && this.nextLoadPosition > e
                }, r.getNextFragmentLoopLoading = function(t, e, r, i, n) {
                    var a = t.gap,
                        s = this.getNextFragment(this.nextLoadPosition, e);
                    if (null === s)
                        return s;
                    if (t = s, a && t && !t.gap && r.nextStart) {
                        var o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, r.nextStart, i);
                        if (null !== o && r.len + o.len >= n)
                            return this.log('buffer full after gaps in "' + i + '" playlist starting at sn: ' + t.sn), null
                    }
                    return t
                }, r.mapToInitFragWhenRequired = function(t) {
                    return null == t || !t.initSegment || null != t && t.initSegment.data || this.bitrateTest ? t : t.initSegment
                }, r.getNextPart = function(t, e, r) {
                    for (var i = -1, n = !1, a = !0, s = 0, o = t.length; s < o; s++) {
                        var l = t[s];
                        if (a = a && !l.independent, i > -1 && r < l.start)
                            break;
                        var u = l.loaded;
                        u ? i = -1 : (n || l.independent || a) && l.fragment === e && (i = s),
                        n = u
                    }
                    return i
                }, r.loadedEndOfParts = function(t, e) {
                    var r = t[t.length - 1];
                    return r && e > r.start && r.loaded
                }, r.getInitialLiveFragment = function(t, e) {
                    var r = this.fragPrevious,
                        i = null;
                    if (r) {
                        if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime), i = function(t, e, r) {
                            if (null === e || !Array.isArray(t) || !t.length || !E(e))
                                return null;
                            if (e < (t[0].programDateTime || 0))
                                return null;
                            if (e >= (t[t.length - 1].endProgramDateTime || 0))
                                return null;
                            r = r || 0;
                            for (var i = 0; i < t.length; ++i) {
                                var n = t[i];
                                if (Ze(e, r, n))
                                    return n
                            }
                            return null
                        }(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                            var n = r.sn + 1;
                            if (n >= t.startSN && n <= t.endSN) {
                                var a = e[n - t.startSN];
                                r.cc === a.cc && (i = a, this.log("Live playlist, switching playlist, load frag with next SN: " + i.sn))
                            }
                            i || (i = function(t, e) {
                                return Qe(t, (function(t) {
                                    return t.cc < e ? 1 : t.cc > e ? -1 : 0
                                }))
                            }(e, r.cc), i && this.log("Live playlist, switching playlist, load frag with same CC: " + i.sn))
                        }
                    } else {
                        var s = this.hls.liveSyncPosition;
                        null !== s && (i = this.getFragmentAtPosition(s, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                    }
                    return i
                }, r.getFragmentAtPosition = function(t, e, r) {
                    var i,
                        n = this.config,
                        a = this.fragPrevious,
                        s = r.fragments,
                        o = r.endSN,
                        l = r.fragmentHint,
                        u = n.maxFragLookUpTolerance,
                        h = r.partList,
                        d = !!(n.lowLatencyMode && null != h && h.length && l);
                    if (d && l && !this.bitrateTest && (s = s.concat(l), o = l.sn), i = t < e ? $e(a, s, t, t > e - u ? 0 : u) : s[s.length - 1]) {
                        var c = i.sn - r.startSN,
                            f = this.fragmentTracker.getState(i);
                        if ((f === mr || f === vr && i.gap) && (a = i), a && i.sn === a.sn && (!d || h[0].fragment.sn > i.sn) && a && i.level === a.level) {
                            var g = s[c + 1];
                            i = i.sn < o && this.fragmentTracker.getState(g) !== mr ? g : null
                        }
                    }
                    return i
                }, r.synchronizeToLiveEdge = function(t) {
                    var e = this.config,
                        r = this.media;
                    if (r) {
                        var i = this.hls.liveSyncPosition,
                            n = r.currentTime,
                            a = t.fragments[0].start,
                            s = t.edge,
                            o = n >= a - e.maxFragLookUpTolerance && n <= s;
                        if (null !== i && r.duration > i && (n < i || !o)) {
                            var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                            (!o && r.readyState < 4 || n < s - l) && (this.loadedmetadata || (this.nextLoadPosition = i), r.readyState && (this.warn("Playback: " + n.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + i.toFixed(3)), r.currentTime = i))
                        }
                    }
                }, r.alignPlaylists = function(t, e) {
                    var r = this.levels,
                        i = this.levelLastLoaded,
                        n = this.fragPrevious,
                        a = null !== i ? r[i] : null,
                        s = t.fragments.length;
                    if (!s)
                        return this.warn("No fragments in live playlist"), 0;
                    var o = t.fragments[0].start,
                        l = !e,
                        u = t.alignedSliding && E(o);
                    if (l || !u && !o) {
                        xr(n, a, t);
                        var h = t.fragments[0].start;
                        return this.log("Live playlist sliding: " + h.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (n ? n.sn : "na") + " fragments: " + s), h
                    }
                    return o
                }, r.waitForCdnTuneIn = function(t) {
                    return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                }, r.setStartPosition = function(t, e) {
                    var r = this.startPosition;
                    if (r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
                        var i = null !== this.startTimeOffset,
                            n = i ? this.startTimeOffset : t.startTimeOffset;
                        null !== n && E(n) ? (r = e + n, n < 0 && (r += t.totalduration), r = Math.min(Math.max(e, r), e + t.totalduration), this.log("Start time offset " + n + " found in " + (i ? "multivariant" : "media") + " playlist, adjust startPosition to " + r), this.startPosition = r) : t.live ? r = this.hls.liveSyncPosition || e : this.startPosition = r = 0,
                        this.lastCurrentTime = r
                    }
                    this.nextLoadPosition = r
                }, r.getLoadPosition = function() {
                    var t = this.media,
                        e = 0;
                    return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                }, r.handleFragLoadAborted = function(t, e) {
                    this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
                }, r.resetFragmentLoading = function(t) {
                    this.fragCurrent && (this.fragContextChanged(t) || this.state === Yr) || (this.state = Kr)
                }, r.onFragmentOrKeyLoadError = function(t, e) {
                    if (e.chunkMeta && !e.frag) {
                        var r = this.getCurrentContext(e.chunkMeta);
                        r && (e.frag = r.frag)
                    }
                    var i = e.frag;
                    if (i && i.type === t && this.levels)
                        if (this.fragContextChanged(i)) {
                            var n;
                            this.warn("Frag load error must match current frag to retry " + i.url + " > " + (null == (n = this.fragCurrent) ? void 0 : n.url))
                        } else {
                            var a = e.details === R.FRAG_GAP;
                            a && this.fragmentTracker.fragBuffered(i, !0);
                            var s = e.errorAction,
                                o = s || {},
                                l = o.action,
                                u = o.retryCount,
                                h = void 0 === u ? 0 : u,
                                d = o.retryConfig;
                            if (s && l === nr && d) {
                                var c;
                                this.resetStartWhenNotLoaded(null != (c = this.levelLastLoaded) ? c : i.level);
                                var f = qe(d, h);
                                this.warn("Fragment " + i.sn + " of " + t + " " + i.level + " errored with " + e.details + ", retrying loading " + (h + 1) + "/" + d.maxNumRetry + " in " + f + "ms"),
                                s.resolved = !0,
                                this.retryDate = self.performance.now() + f,
                                this.state = Yr
                            } else
                                d && s ? (this.resetFragmentErrors(t), h < d.maxNumRetry ? a || (s.resolved = !0) : w.warn(e.details + " reached or exceeded max retry (" + h + ")")) : (null == s ? void 0 : s.action) === ir ? this.state = $r : this.state = zr;
                            this.tickImmediate()
                        }
                }, r.reduceLengthAndFlushBuffer = function(t) {
                    if (this.state === jr || this.state === qr) {
                        var e = t.parent,
                            r = this.getFwdBufferInfo(this.mediaBuffer, e),
                            i = r && r.len > .5;
                        i && this.reduceMaxBufferLength(r.len);
                        var n = !i;
                        return n && this.warn("Buffer full error while media.currentTime is not buffered, flush " + e + " buffer"), t.frag && (this.fragmentTracker.removeFragment(t.frag), this.nextLoadPosition = t.frag.start), this.resetLoadingState(), n
                    }
                    return !1
                }, r.resetFragmentErrors = function(t) {
                    t === ve && (this.fragCurrent = null),
                    this.loadedmetadata || (this.startFragRequested = !1),
                    this.state !== Gr && (this.state = Kr)
                }, r.afterBufferFlushed = function(t, e, r) {
                    if (t) {
                        var i = Ir.getBuffered(t);
                        this.fragmentTracker.detectEvictedFragments(e, i, r),
                        this.state === Xr && this.resetLoadingState()
                    }
                }, r.resetLoadingState = function() {
                    this.log("Reset loading state"),
                    this.fragCurrent = null,
                    this.fragPrevious = null,
                    this.state = Kr
                }, r.resetStartWhenNotLoaded = function(t) {
                    if (!this.loadedmetadata) {
                        this.startFragRequested = !1;
                        var e = this.levels ? this.levels[t].details : null;
                        null != e && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
                    }
                }, r.resetWhenMissingContext = function(t) {
                    var e;
                    this.warn("The loading context changed while buffering fragment " + t.sn + " of level " + t.level + ". This chunk will not be buffered."),
                    this.removeUnbufferedFrags(),
                    this.resetStartWhenNotLoaded(null != (e = this.levelLastLoaded) ? e : t.level),
                    this.resetLoadingState()
                }, r.removeUnbufferedFrags = function(t) {
                    void 0 === t && (t = 0),
                    this.fragmentTracker.removeFragmentsInRange(t, 1 / 0, this.playlistType, !1, !0)
                }, r.updateLevelTiming = function(t, e, r, i) {
                    var n,
                        a = this,
                        s = r.details;
                    if (s) {
                        if (Object.keys(t.elementaryStreams).reduce((function(e, n) {
                            var o = t.elementaryStreams[n];
                            if (o) {
                                var l = o.endPTS - o.startPTS;
                                if (l <= 0)
                                    return a.warn("Could not parse fragment " + t.sn + " " + n + " duration reliably (" + l + ")"), e || !1;
                                var u = i ? 0 : Be(s, t, o.startPTS, o.endPTS, o.startDTS, o.endDTS);
                                return a.hls.trigger(S.LEVEL_PTS_UPDATED, {
                                    details: s,
                                    level: r,
                                    drift: u,
                                    type: n,
                                    frag: t,
                                    start: o.startPTS,
                                    end: o.endPTS
                                }), !0
                            }
                            return e
                        }), !1))
                            r.fragmentError = 0;
                        else if (null === (null == (n = this.transmuxer) ? void 0 : n.error)) {
                            var o = new Error("Found no media in fragment " + t.sn + " of level " + t.level + " resetting transmuxer to fallback to playlist timing");
                            if (0 === r.fragmentError && (r.fragmentError++, t.gap = !0, this.fragmentTracker.removeFragment(t), this.fragmentTracker.fragBuffered(t, !0)), this.warn(o.message), this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.FRAG_PARSING_ERROR,
                                fatal: !1,
                                error: o,
                                frag: t,
                                reason: "Found no media in msn " + t.sn + ' of level "' + r.url + '"'
                            }), !this.hls)
                                return;
                            this.resetTransmuxer()
                        }
                        this.state = qr,
                        this.hls.trigger(S.FRAG_PARSED, {
                            frag: t,
                            part: e
                        })
                    } else
                        this.warn("level.details undefined")
                }, r.resetTransmuxer = function() {
                    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                }, r.recoverWorkerError = function(t) {
                    var e,
                        r,
                        i;
                    "demuxerWorker" === t.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(null != (e = null != (r = this.levelLastLoaded) ? r : null == (i = this.fragCurrent) ? void 0 : i.level) ? e : 0), this.resetLoadingState())
                }, a(e, [{
                    key: "state",
                    get: function() {
                        return this._state
                    },
                    set: function(t) {
                        var e = this._state;
                        e !== t && (this._state = t, this.log(e + "->" + t))
                    }
                }]), e
            }(br);
        function Zr() {
            return self.SourceBuffer || self.WebKitSourceBuffer
        }
        function ti(t, e) {
            return void 0 === t && (t = ""), void 0 === e && (e = 9e4), {
                type: t,
                id: -1,
                pid: -1,
                inputTimeScale: e,
                sequenceNumber: -1,
                samples: [],
                dropped: 0
            }
        }
        var ei = function() {
                function t() {
                    this._audioTrack = void 0,
                    this._id3Track = void 0,
                    this.frameIndex = 0,
                    this.cachedData = null,
                    this.basePTS = null,
                    this.initPTS = null,
                    this.lastPTS = null
                }
                var e = t.prototype;
                return e.resetInitSegment = function(t, e, r, i) {
                    this._id3Track = {
                        type: "id3",
                        id: 3,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0
                    }
                }, e.resetTimeStamp = function(t) {
                    this.initPTS = t,
                    this.resetContiguity()
                }, e.resetContiguity = function() {
                    this.basePTS = null,
                    this.lastPTS = null,
                    this.frameIndex = 0
                }, e.canParse = function(t, e) {
                    return !1
                }, e.appendFrame = function(t, e, r) {}, e.demux = function(t, e) {
                    this.cachedData && (t = xt(this.cachedData, t), this.cachedData = null);
                    var r,
                        i = st(t, 0),
                        n = i ? i.length : 0,
                        a = this._audioTrack,
                        s = this._id3Track,
                        o = i ? function(t) {
                            for (var e = dt(t), r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (ut(i))
                                    return mt(i)
                            }
                        }(i) : void 0,
                        l = t.length;
                    for ((null === this.basePTS || 0 === this.frameIndex && E(o)) && (this.basePTS = ri(o, e, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && s.samples.push({
                        pts: this.lastPTS,
                        dts: this.lastPTS,
                        data: i,
                        type: Ae,
                        duration: Number.POSITIVE_INFINITY
                    }); n < l;) {
                        if (this.canParse(t, n)) {
                            var u = this.appendFrame(a, t, n);
                            u ? (this.frameIndex++, this.lastPTS = u.sample.pts, r = n += u.length) : n = l
                        } else
                            lt(t, n) ? (i = st(t, n), s.samples.push({
                                pts: this.lastPTS,
                                dts: this.lastPTS,
                                data: i,
                                type: Ae,
                                duration: Number.POSITIVE_INFINITY
                            }), r = n += i.length) : n++;
                        if (n === l && r !== l) {
                            var h = rt(t, r);
                            this.cachedData ? this.cachedData = xt(this.cachedData, h) : this.cachedData = h
                        }
                    }
                    return {
                        audioTrack: a,
                        videoTrack: ti(),
                        id3Track: s,
                        textTrack: ti()
                    }
                }, e.demuxSampleAes = function(t, e, r) {
                    return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
                }, e.flush = function(t) {
                    var e = this.cachedData;
                    return e && (this.cachedData = null, this.demux(e, 0)), {
                        audioTrack: this._audioTrack,
                        videoTrack: ti(),
                        id3Track: this._id3Track,
                        textTrack: ti()
                    }
                }, e.destroy = function() {}, t
            }(),
            ri = function(t, e, r) {
                return E(t) ? 90 * t : 9e4 * e + (r ? 9e4 * r.baseTime / r.timescale : 0)
            };
        function ii(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }
        function ni(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }
        function ai(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }
        function si(t, e) {
            return e + 1 < t.length && ii(t, e)
        }
        function oi(t, e) {
            if (si(t, e)) {
                var r = ni(t, e);
                if (e + r >= t.length)
                    return !1;
                var i = ai(t, e);
                if (i <= r)
                    return !1;
                var n = e + i;
                return n === t.length || si(t, n)
            }
            return !1
        }
        function li(t, e, r, i, n) {
            if (!t.samplerate) {
                var a = function(t, e, r, i) {
                    var n,
                        a,
                        s,
                        o,
                        l = navigator.userAgent.toLowerCase(),
                        u = i,
                        h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    n = 1 + ((192 & e[r + 2]) >>> 6);
                    var d = (60 & e[r + 2]) >>> 2;
                    if (!(d > h.length - 1))
                        return s = (1 & e[r + 2]) << 2, s |= (192 & e[r + 3]) >>> 6, w.log("manifest codec:" + i + ", ADTS type:" + n + ", samplingIndex:" + d), /firefox/i.test(l) ? d >= 6 ? (n = 5, o = new Array(4), a = d - 3) : (n = 2, o = new Array(2), a = d) : -1 !== l.indexOf("android") ? (n = 2, o = new Array(2), a = d) : (n = 5, o = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && d >= 6 ? a = d - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (d >= 6 && 1 === s || /vivaldi/i.test(l)) || !i && 1 === s) && (n = 2, o = new Array(2)), a = d)), o[0] = n << 3, o[0] |= (14 & d) >> 1, o[1] |= (1 & d) << 7, o[1] |= s << 3, 5 === n && (o[1] |= (14 & a) >> 1, o[2] = (1 & a) << 7, o[2] |= 8, o[3] = 0), {
                            config: o,
                            samplerate: h[d],
                            channelCount: s,
                            codec: "mp4a.40." + n,
                            manifestCodec: u
                        };
                    t.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + d
                    })
                }(e, r, i, n);
                if (!a)
                    return;
                t.config = a.config,
                t.samplerate = a.samplerate,
                t.channelCount = a.channelCount,
                t.codec = a.codec,
                t.manifestCodec = a.manifestCodec,
                w.log("parsed codec:" + t.codec + ", rate:" + a.samplerate + ", channels:" + a.channelCount)
            }
        }
        function ui(t) {
            return 9216e4 / t
        }
        function hi(t, e, r, i, n) {
            var a,
                s = i + n * ui(t.samplerate),
                o = function(t, e) {
                    var r = ni(t, e);
                    if (e + r <= t.length) {
                        var i = ai(t, e) - r;
                        if (i > 0)
                            return {
                                headerLength: r,
                                frameLength: i
                            }
                    }
                }(e, r);
            if (o) {
                var l = o.frameLength,
                    u = o.headerLength,
                    h = u + l,
                    d = Math.max(0, r + h - e.length);
                d ? (a = new Uint8Array(h - u)).set(e.subarray(r + u, e.length), 0) : a = e.subarray(r + u, r + h);
                var c = {
                    unit: a,
                    pts: s
                };
                return d || t.samples.push(c), {
                    sample: c,
                    length: h,
                    missing: d
                }
            }
            var f = e.length - r;
            return (a = new Uint8Array(f)).set(e.subarray(r, e.length), 0), {
                sample: {
                    unit: a,
                    pts: s
                },
                length: f,
                missing: -1
            }
        }
        var di = function(t) {
                function e(e, r) {
                    var i;
                    return (i = t.call(this) || this).observer = void 0, i.config = void 0, i.observer = e, i.config = r, i
                }
                l(e, t);
                var r = e.prototype;
                return r.resetInitSegment = function(e, r, i, n) {
                    t.prototype.resetInitSegment.call(this, e, r, i, n),
                    this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 2,
                        pid: -1,
                        sequenceNumber: 0,
                        segmentCodec: "aac",
                        samples: [],
                        manifestCodec: r,
                        duration: n,
                        inputTimeScale: 9e4,
                        dropped: 0
                    }
                }, e.probe = function(t) {
                    if (!t)
                        return !1;
                    for (var e = (st(t, 0) || []).length, r = t.length; e < r; e++)
                        if (oi(t, e))
                            return w.log("ADTS sync word found !"), !0;
                    return !1
                }, r.canParse = function(t, e) {
                    return function(t, e) {
                        return function(t, e) {
                                return e + 5 < t.length
                            }(t, e) && ii(t, e) && ai(t, e) <= t.length - e
                    }(t, e)
                }, r.appendFrame = function(t, e, r) {
                    li(t, this.observer, e, r, t.manifestCodec);
                    var i = hi(t, e, r, this.basePTS, this.frameIndex);
                    if (i && 0 === i.missing)
                        return i
                }, e
            }(ei),
            ci = /\/emsg[-/]ID3/i,
            fi = function() {
                function t(t, e) {
                    this.remainderData = null,
                    this.timeOffset = 0,
                    this.config = void 0,
                    this.videoTrack = void 0,
                    this.audioTrack = void 0,
                    this.id3Track = void 0,
                    this.txtTrack = void 0,
                    this.config = e
                }
                var e = t.prototype;
                return e.resetTimeStamp = function() {}, e.resetInitSegment = function(t, e, r, i) {
                    var n = this.videoTrack = ti("video", 1),
                        a = this.audioTrack = ti("audio", 1),
                        s = this.txtTrack = ti("text", 1);
                    if (this.id3Track = ti("id3", 1), this.timeOffset = 0, null != t && t.byteLength) {
                        var o = Ct(t);
                        if (o.video) {
                            var l = o.video,
                                u = l.id,
                                h = l.timescale,
                                d = l.codec;
                            n.id = u,
                            n.timescale = s.timescale = h,
                            n.codec = d
                        }
                        if (o.audio) {
                            var c = o.audio,
                                f = c.id,
                                g = c.timescale,
                                v = c.codec;
                            a.id = f,
                            a.timescale = g,
                            a.codec = v
                        }
                        s.id = Lt.text,
                        n.sampleDuration = 0,
                        n.duration = a.duration = i
                    }
                }, e.resetContiguity = function() {
                    this.remainderData = null
                }, t.probe = function(t) {
                    return It(t = t.length > 16384 ? t.subarray(0, 16384) : t, ["moof"]).length > 0
                }, e.demux = function(t, e) {
                    this.timeOffset = e;
                    var r = t,
                        i = this.videoTrack,
                        n = this.txtTrack;
                    if (this.config.progressive) {
                        this.remainderData && (r = xt(this.remainderData, t));
                        var a = function(t) {
                            var e = {
                                    valid: null,
                                    remainder: null
                                },
                                r = It(t, ["moof"]);
                            if (!r)
                                return e;
                            if (r.length < 2)
                                return e.remainder = t, e;
                            var i = r[r.length - 1];
                            return e.valid = rt(t, 0, i.byteOffset - 8), e.remainder = rt(t, i.byteOffset - 8), e
                        }(r);
                        this.remainderData = a.remainder,
                        i.samples = a.valid || new Uint8Array
                    } else
                        i.samples = r;
                    var s = this.extractID3Track(i, e);
                    return n.samples = Ft(e, i), {
                        videoTrack: i,
                        audioTrack: this.audioTrack,
                        id3Track: s,
                        textTrack: this.txtTrack
                    }
                }, e.flush = function() {
                    var t = this.timeOffset,
                        e = this.videoTrack,
                        r = this.txtTrack;
                    e.samples = this.remainderData || new Uint8Array,
                    this.remainderData = null;
                    var i = this.extractID3Track(e, this.timeOffset);
                    return r.samples = Ft(t, e), {
                        videoTrack: e,
                        audioTrack: ti(),
                        id3Track: i,
                        textTrack: ti()
                    }
                }, e.extractID3Track = function(t, e) {
                    var r = this.id3Track;
                    if (t.samples.length) {
                        var i = It(t.samples, ["emsg"]);
                        i && i.forEach((function(t) {
                            var i = function(t) {
                                var e = t[0],
                                    r = "",
                                    i = "",
                                    n = 0,
                                    a = 0,
                                    s = 0,
                                    o = 0,
                                    l = 0,
                                    u = 0;
                                if (0 === e) {
                                    for (; "\0" !== Rt(t.subarray(u, u + 1));)
                                        r += Rt(t.subarray(u, u + 1)),
                                        u += 1;
                                    for (r += Rt(t.subarray(u, u + 1)), u += 1; "\0" !== Rt(t.subarray(u, u + 1));)
                                        i += Rt(t.subarray(u, u + 1)),
                                        u += 1;
                                    i += Rt(t.subarray(u, u + 1)),
                                    u += 1,
                                    n = kt(t, 12),
                                    a = kt(t, 16),
                                    o = kt(t, 20),
                                    l = kt(t, 24),
                                    u = 28
                                } else if (1 === e) {
                                    n = kt(t, u += 4);
                                    var h = kt(t, u += 4),
                                        d = kt(t, u += 4);
                                    for (u += 4, s = Math.pow(2, 32) * h + d, Number.isSafeInteger(s) || (s = Number.MAX_SAFE_INTEGER, w.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = kt(t, u), l = kt(t, u += 4), u += 4; "\0" !== Rt(t.subarray(u, u + 1));)
                                        r += Rt(t.subarray(u, u + 1)),
                                        u += 1;
                                    for (r += Rt(t.subarray(u, u + 1)), u += 1; "\0" !== Rt(t.subarray(u, u + 1));)
                                        i += Rt(t.subarray(u, u + 1)),
                                        u += 1;
                                    i += Rt(t.subarray(u, u + 1)),
                                    u += 1
                                }
                                return {
                                    schemeIdUri: r,
                                    value: i,
                                    timeScale: n,
                                    presentationTime: s,
                                    presentationTimeDelta: a,
                                    eventDuration: o,
                                    id: l,
                                    payload: t.subarray(u, t.byteLength)
                                }
                            }(t);
                            if (ci.test(i.schemeIdUri)) {
                                var n = E(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale,
                                    a = 4294967295 === i.eventDuration ? Number.POSITIVE_INFINITY : i.eventDuration / i.timeScale;
                                a <= .001 && (a = Number.POSITIVE_INFINITY);
                                var s = i.payload;
                                r.samples.push({
                                    data: s,
                                    len: s.byteLength,
                                    dts: n,
                                    pts: n,
                                    type: be,
                                    duration: a
                                })
                            }
                        }))
                    }
                    return r
                }, e.demuxSampleAes = function(t, e, r) {
                    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                }, e.destroy = function() {}, t
            }(),
            gi = null,
            vi = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            mi = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            pi = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
            yi = [0, 1, 1, 4];
        function Ti(t, e, r, i, n) {
            if (!(r + 24 > e.length)) {
                var a = Ei(e, r);
                if (a && r + a.frameLength <= e.length) {
                    var s = i + n * (9e4 * a.samplesPerFrame / a.sampleRate),
                        o = {
                            unit: e.subarray(r, r + a.frameLength),
                            pts: s,
                            dts: s
                        };
                    return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(o), {
                        sample: o,
                        length: a.frameLength,
                        missing: 0
                    }
                }
            }
        }
        function Ei(t, e) {
            var r = t[e + 1] >> 3 & 3,
                i = t[e + 1] >> 1 & 3,
                n = t[e + 2] >> 4 & 15,
                a = t[e + 2] >> 2 & 3;
            if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
                var s = t[e + 2] >> 1 & 1,
                    o = t[e + 3] >> 6,
                    l = 1e3 * vi[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + n - 1],
                    u = mi[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a],
                    h = 3 === o ? 1 : 2,
                    d = pi[r][i],
                    c = yi[i],
                    f = 8 * d * c,
                    g = Math.floor(d * l / u + s) * c;
                if (null === gi) {
                    var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    gi = v ? parseInt(v[1]) : 0
                }
                return !!gi && gi <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                    sampleRate: u,
                    channelCount: h,
                    frameLength: g,
                    samplesPerFrame: f
                }
            }
        }
        function Si(t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
        }
        function Li(t, e) {
            return e + 1 < t.length && Si(t, e)
        }
        function Ri(t, e) {
            if (e + 1 < t.length && Si(t, e)) {
                var r = Ei(t, e),
                    i = 4;
                null != r && r.frameLength && (i = r.frameLength);
                var n = e + i;
                return n === t.length || Li(t, n)
            }
            return !1
        }
        var Ai = function() {
                function t(t) {
                    this.data = void 0,
                    this.bytesAvailable = void 0,
                    this.word = void 0,
                    this.bitsAvailable = void 0,
                    this.data = t,
                    this.bytesAvailable = t.byteLength,
                    this.word = 0,
                    this.bitsAvailable = 0
                }
                var e = t.prototype;
                return e.loadWord = function() {
                    var t = this.data,
                        e = this.bytesAvailable,
                        r = t.byteLength - e,
                        i = new Uint8Array(4),
                        n = Math.min(4, e);
                    if (0 === n)
                        throw new Error("no bytes available");
                    i.set(t.subarray(r, r + n)),
                    this.word = new DataView(i.buffer).getUint32(0),
                    this.bitsAvailable = 8 * n,
                    this.bytesAvailable -= n
                }, e.skipBits = function(t) {
                    var e;
                    t = Math.min(t, 8 * this.bytesAvailable + this.bitsAvailable),
                    this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                }, e.readBits = function(t) {
                    var e = Math.min(this.bitsAvailable, t),
                        r = this.word >>> 32 - e;
                    if (t > 32 && w.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0)
                        this.word <<= e;
                    else {
                        if (!(this.bytesAvailable > 0))
                            throw new Error("no bits available");
                        this.loadWord()
                    }
                    return (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
                }, e.skipLZ = function() {
                    var t;
                    for (t = 0; t < this.bitsAvailable; ++t)
                        if (0 != (this.word & 2147483648 >>> t))
                            return this.word <<= t, this.bitsAvailable -= t, t;
                    return this.loadWord(), t + this.skipLZ()
                }, e.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, e.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, e.readUEG = function() {
                    var t = this.skipLZ();
                    return this.readBits(t + 1) - 1
                }, e.readEG = function() {
                    var t = this.readUEG();
                    return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                }, e.readBoolean = function() {
                    return 1 === this.readBits(1)
                }, e.readUByte = function() {
                    return this.readBits(8)
                }, e.readUShort = function() {
                    return this.readBits(16)
                }, e.readUInt = function() {
                    return this.readBits(32)
                }, e.skipScalingList = function(t) {
                    for (var e = 8, r = 8, i = 0; i < t; i++)
                        0 !== r && (r = (e + this.readEG() + 256) % 256),
                        e = 0 === r ? e : r
                }, e.readSPS = function() {
                    var t,
                        e,
                        r,
                        i = 0,
                        n = 0,
                        a = 0,
                        s = 0,
                        o = this.readUByte.bind(this),
                        l = this.readBits.bind(this),
                        u = this.readUEG.bind(this),
                        h = this.readBoolean.bind(this),
                        d = this.skipBits.bind(this),
                        c = this.skipEG.bind(this),
                        f = this.skipUEG.bind(this),
                        g = this.skipScalingList.bind(this);
                    o();
                    var v = o();
                    if (l(5), d(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                        var m = u();
                        if (3 === m && d(1), f(), f(), d(1), h())
                            for (e = 3 !== m ? 8 : 12, r = 0; r < e; r++)
                                h() && g(r < 6 ? 16 : 64)
                    }
                    f();
                    var p = u();
                    if (0 === p)
                        u();
                    else if (1 === p)
                        for (d(1), c(), c(), t = u(), r = 0; r < t; r++)
                            c();
                    f(),
                    d(1);
                    var y = u(),
                        T = u(),
                        E = l(1);
                    0 === E && d(1),
                    d(1),
                    h() && (i = u(), n = u(), a = u(), s = u());
                    var S = [1, 1];
                    if (h() && h())
                        switch (o()) {
                        case 1:
                            S = [1, 1];
                            break;
                        case 2:
                            S = [12, 11];
                            break;
                        case 3:
                            S = [10, 11];
                            break;
                        case 4:
                            S = [16, 11];
                            break;
                        case 5:
                            S = [40, 33];
                            break;
                        case 6:
                            S = [24, 11];
                            break;
                        case 7:
                            S = [20, 11];
                            break;
                        case 8:
                            S = [32, 11];
                            break;
                        case 9:
                            S = [80, 33];
                            break;
                        case 10:
                            S = [18, 11];
                            break;
                        case 11:
                            S = [15, 11];
                            break;
                        case 12:
                            S = [64, 33];
                            break;
                        case 13:
                            S = [160, 99];
                            break;
                        case 14:
                            S = [4, 3];
                            break;
                        case 15:
                            S = [3, 2];
                            break;
                        case 16:
                            S = [2, 1];
                            break;
                        case 255:
                            S = [o() << 8 | o(), o() << 8 | o()]
                        }
                    return {
                        width: Math.ceil(16 * (y + 1) - 2 * i - 2 * n),
                        height: (2 - E) * (T + 1) * 16 - (E ? 2 : 4) * (a + s),
                        pixelRatio: S
                    }
                }, e.readSliceType = function() {
                    return this.readUByte(), this.readUEG(), this.readUEG()
                }, t
            }(),
            ki = function() {
                function t(t, e, r) {
                    this.keyData = void 0,
                    this.decrypter = void 0,
                    this.keyData = r,
                    this.decrypter = new Ur(e, {
                        removePKCS7Padding: !1
                    })
                }
                var e = t.prototype;
                return e.decryptBuffer = function(t) {
                    return this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer)
                }, e.decryptAacSample = function(t, e, r) {
                    var i = this,
                        n = t[e].unit;
                    if (!(n.length <= 16)) {
                        var a = n.subarray(16, n.length - n.length % 16),
                            s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length);
                        this.decryptBuffer(s).then((function(a) {
                            var s = new Uint8Array(a);
                            n.set(s, 16),
                            i.decrypter.isSync() || i.decryptAacSamples(t, e + 1, r)
                        }))
                    }
                }, e.decryptAacSamples = function(t, e, r) {
                    for (;; e++) {
                        if (e >= t.length)
                            return void r();
                        if (!(t[e].unit.length < 32 || (this.decryptAacSample(t, e, r), this.decrypter.isSync())))
                            return
                    }
                }, e.getAvcEncryptedData = function(t) {
                    for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16)
                        r.set(t.subarray(n, n + 16), i);
                    return r
                }, e.getAvcDecryptedUnit = function(t, e) {
                    for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16)
                        t.set(r.subarray(i, i + 16), n);
                    return t
                }, e.decryptAvcSample = function(t, e, r, i, n) {
                    var a = this,
                        s = Nt(n.data),
                        o = this.getAvcEncryptedData(s);
                    this.decryptBuffer(o.buffer).then((function(o) {
                        n.data = a.getAvcDecryptedUnit(s, o),
                        a.decrypter.isSync() || a.decryptAvcSamples(t, e, r + 1, i)
                    }))
                }, e.decryptAvcSamples = function(t, e, r, i) {
                    if (t instanceof Uint8Array)
                        throw new Error("Cannot decrypt samples of type Uint8Array");
                    for (;; e++, r = 0) {
                        if (e >= t.length)
                            return void i();
                        for (var n = t[e].units; !(r >= n.length); r++) {
                            var a = n[r];
                            if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type || (this.decryptAvcSample(t, e, r, i, a), this.decrypter.isSync())))
                                return
                        }
                    }
                }, t
            }(),
            bi = 188,
            Di = function() {
                function t(t, e, r) {
                    this.observer = void 0,
                    this.config = void 0,
                    this.typeSupported = void 0,
                    this.sampleAes = null,
                    this.pmtParsed = !1,
                    this.audioCodec = void 0,
                    this.videoCodec = void 0,
                    this._duration = 0,
                    this._pmtId = -1,
                    this._avcTrack = void 0,
                    this._audioTrack = void 0,
                    this._id3Track = void 0,
                    this._txtTrack = void 0,
                    this.aacOverFlow = null,
                    this.avcSample = null,
                    this.remainderData = null,
                    this.observer = t,
                    this.config = e,
                    this.typeSupported = r
                }
                t.probe = function(e) {
                    var r = t.syncOffset(e);
                    return r > 0 && w.warn("MPEG2-TS detected but first sync word found @ offset " + r), -1 !== r
                },
                t.syncOffset = function(t) {
                    for (var e = t.length, r = Math.min(940, t.length - bi) + 1, i = 0; i < r;) {
                        for (var n = !1, a = -1, s = 0, o = i; o < e; o += bi) {
                            if (71 !== t[o]) {
                                if (s)
                                    return -1;
                                break
                            }
                            if (s++, -1 === a && 0 !== (a = o) && (r = Math.min(a + 18612, t.length - bi) + 1), n || (n = 0 === wi(t, o)), n && s > 1 && (0 === a && s > 2 || o + bi > r))
                                return a
                        }
                        i++
                    }
                    return -1
                },
                t.createTrack = function(t, e) {
                    return {
                        container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                        type: t,
                        id: Lt[t],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0,
                        duration: "audio" === t ? e : void 0
                    }
                };
                var e = t.prototype;
                return e.resetInitSegment = function(e, r, i, n) {
                    this.pmtParsed = !1,
                    this._pmtId = -1,
                    this._avcTrack = t.createTrack("video"),
                    this._audioTrack = t.createTrack("audio", n),
                    this._id3Track = t.createTrack("id3"),
                    this._txtTrack = t.createTrack("text"),
                    this._audioTrack.segmentCodec = "aac",
                    this.aacOverFlow = null,
                    this.avcSample = null,
                    this.remainderData = null,
                    this.audioCodec = r,
                    this.videoCodec = i,
                    this._duration = n
                }, e.resetTimeStamp = function() {}, e.resetContiguity = function() {
                    var t = this._audioTrack,
                        e = this._avcTrack,
                        r = this._id3Track;
                    t && (t.pesData = null),
                    e && (e.pesData = null),
                    r && (r.pesData = null),
                    this.aacOverFlow = null,
                    this.avcSample = null,
                    this.remainderData = null
                }, e.demux = function(e, r, i, n) {
                    var a;
                    void 0 === i && (i = !1),
                    void 0 === n && (n = !1),
                    i || (this.sampleAes = null);
                    var s = this._avcTrack,
                        o = this._audioTrack,
                        l = this._id3Track,
                        u = this._txtTrack,
                        h = s.pid,
                        d = s.pesData,
                        c = o.pid,
                        f = l.pid,
                        g = o.pesData,
                        v = l.pesData,
                        m = null,
                        p = this.pmtParsed,
                        y = this._pmtId,
                        T = e.length;
                    if (this.remainderData && (T = (e = xt(this.remainderData, e)).length, this.remainderData = null), T < bi && !n)
                        return this.remainderData = e, {
                            audioTrack: o,
                            videoTrack: s,
                            id3Track: l,
                            textTrack: u
                        };
                    var E = Math.max(0, t.syncOffset(e));
                    (T -= (T - E) % bi) < e.byteLength && !n && (this.remainderData = new Uint8Array(e.buffer, T, e.buffer.byteLength - T));
                    for (var A = 0, k = E; k < T; k += bi)
                        if (71 === e[k]) {
                            var b = !!(64 & e[k + 1]),
                                D = wi(e, k),
                                I = void 0;
                            if ((48 & e[k + 3]) >> 4 > 1) {
                                if ((I = k + 5 + e[k + 4]) === k + bi)
                                    continue
                            } else
                                I = k + 4;
                            switch (D) {
                            case h:
                                b && (d && (a = Pi(d)) && this.parseAVCPES(s, u, a, !1), d = {
                                    data: [],
                                    size: 0
                                }),
                                d && (d.data.push(e.subarray(I, k + bi)), d.size += k + bi - I);
                                break;
                            case c:
                                if (b) {
                                    if (g && (a = Pi(g)))
                                        switch (o.segmentCodec) {
                                        case "aac":
                                            this.parseAACPES(o, a);
                                            break;
                                        case "mp3":
                                            this.parseMPEGPES(o, a)
                                        }
                                    g = {
                                        data: [],
                                        size: 0
                                    }
                                }
                                g && (g.data.push(e.subarray(I, k + bi)), g.size += k + bi - I);
                                break;
                            case f:
                                b && (v && (a = Pi(v)) && this.parseID3PES(l, a), v = {
                                    data: [],
                                    size: 0
                                }),
                                v && (v.data.push(e.subarray(I, k + bi)), v.size += k + bi - I);
                                break;
                            case 0:
                                b && (I += e[I] + 1),
                                y = this._pmtId = Ci(e, I);
                                break;
                            case y:
                                b && (I += e[I] + 1);
                                var C = _i(e, I, this.typeSupported, i);
                                (h = C.avc) > 0 && (s.pid = h),
                                (c = C.audio) > 0 && (o.pid = c, o.segmentCodec = C.segmentCodec),
                                (f = C.id3) > 0 && (l.pid = f),
                                null === m || p || (w.warn("MPEG-TS PMT found at " + k + " after unknown PID '" + m + "'. Backtracking to sync byte @" + E + " to parse all TS packets."), m = null, k = E - 188),
                                p = this.pmtParsed = !0;
                                break;
                            case 17:
                            case 8191:
                                break;
                            default:
                                m = D
                            }
                        } else
                            A++;
                    if (A > 0) {
                        var _ = new Error("Found " + A + " TS packet/s that do not start with 0x47");
                        this.observer.emit(S.ERROR, S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.FRAG_PARSING_ERROR,
                            fatal: !1,
                            error: _,
                            reason: _.message
                        })
                    }
                    s.pesData = d,
                    o.pesData = g,
                    l.pesData = v;
                    var P = {
                        audioTrack: o,
                        videoTrack: s,
                        id3Track: l,
                        textTrack: u
                    };
                    return n && this.extractRemainingSamples(P), P
                }, e.flush = function() {
                    var t,
                        e = this.remainderData;
                    return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                        videoTrack: this._avcTrack,
                        audioTrack: this._audioTrack,
                        id3Track: this._id3Track,
                        textTrack: this._txtTrack
                    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
                }, e.extractRemainingSamples = function(t) {
                    var e,
                        r = t.audioTrack,
                        i = t.videoTrack,
                        n = t.id3Track,
                        a = t.textTrack,
                        s = i.pesData,
                        o = r.pesData,
                        l = n.pesData;
                    if (s && (e = Pi(s)) ? (this.parseAVCPES(i, a, e, !0), i.pesData = null) : i.pesData = s, o && (e = Pi(o))) {
                        switch (r.segmentCodec) {
                        case "aac":
                            this.parseAACPES(r, e);
                            break;
                        case "mp3":
                            this.parseMPEGPES(r, e)
                        }
                        r.pesData = null
                    } else
                        null != o && o.size && w.log("last AAC PES packet truncated,might overlap between fragments"),
                        r.pesData = o;
                    l && (e = Pi(l)) ? (this.parseID3PES(n, e), n.pesData = null) : n.pesData = l
                }, e.demuxSampleAes = function(t, e, r) {
                    var i = this.demux(t, r, !0, !this.config.progressive),
                        n = this.sampleAes = new ki(this.observer, this.config, e);
                    return this.decrypt(i, n)
                }, e.decrypt = function(t, e) {
                    return new Promise((function(r) {
                        var i = t.audioTrack,
                            n = t.videoTrack;
                        i.samples && "aac" === i.segmentCodec ? e.decryptAacSamples(i.samples, 0, (function() {
                            n.samples ? e.decryptAvcSamples(n.samples, 0, 0, (function() {
                                r(t)
                            })) : r(t)
                        })) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, (function() {
                            r(t)
                        }))
                    }))
                }, e.destroy = function() {
                    this._duration = 0
                }, e.parseAVCPES = function(t, e, r, i) {
                    var n,
                        a = this,
                        s = this.parseAVCNALu(t, r.data),
                        o = this.avcSample,
                        l = !1;
                    r.data = null,
                    o && s.length && !t.audFound && (xi(o, t), o = this.avcSample = Ii(!1, r.pts, r.dts, "")),
                    s.forEach((function(i) {
                        var s;
                        switch (i.type) {
                        case 1:
                            var u = !1;
                            n = !0;
                            var h,
                                d = i.data;
                            if (l && d.length > 4) {
                                var c = new Ai(d).readSliceType();
                                2 !== c && 4 !== c && 7 !== c && 9 !== c || (u = !0)
                            }
                            u && null != (h = o) && h.frame && !o.key && (xi(o, t), o = a.avcSample = null),
                            o || (o = a.avcSample = Ii(!0, r.pts, r.dts, "")),
                            o.frame = !0,
                            o.key = u;
                            break;
                        case 5:
                            n = !0,
                            null != (s = o) && s.frame && !o.key && (xi(o, t), o = a.avcSample = null),
                            o || (o = a.avcSample = Ii(!0, r.pts, r.dts, "")),
                            o.key = !0,
                            o.frame = !0;
                            break;
                        case 6:
                            n = !0,
                            Ot(i.data, 1, r.pts, e.samples);
                            break;
                        case 7:
                            if (n = !0, l = !0, !t.sps) {
                                var f = i.data,
                                    g = new Ai(f).readSPS();
                                t.width = g.width,
                                t.height = g.height,
                                t.pixelRatio = g.pixelRatio,
                                t.sps = [f],
                                t.duration = a._duration;
                                for (var v = f.subarray(1, 4), m = "avc1.", p = 0; p < 3; p++) {
                                    var y = v[p].toString(16);
                                    y.length < 2 && (y = "0" + y),
                                    m += y
                                }
                                t.codec = m
                            }
                            break;
                        case 8:
                            n = !0,
                            t.pps || (t.pps = [i.data]);
                            break;
                        case 9:
                            n = !1,
                            t.audFound = !0,
                            o && xi(o, t),
                            o = a.avcSample = Ii(!1, r.pts, r.dts, "");
                            break;
                        case 12:
                            n = !0;
                            break;
                        default:
                            n = !1,
                            o && (o.debug += "unknown NAL " + i.type + " ")
                        }
                        o && n && o.units.push(i)
                    })),
                    i && o && (xi(o, t), this.avcSample = null)
                }, e.getLastNalUnit = function(t) {
                    var e,
                        r,
                        i = this.avcSample;
                    if (i && 0 !== i.units.length || (i = t[t.length - 1]), null != (e = i) && e.units) {
                        var n = i.units;
                        r = n[n.length - 1]
                    }
                    return r
                }, e.parseAVCNALu = function(t, e) {
                    var r,
                        i,
                        n = e.byteLength,
                        a = t.naluState || 0,
                        s = a,
                        o = [],
                        l = 0,
                        u = -1,
                        h = 0;
                    for (-1 === a && (u = 0, h = 31 & e[0], a = 0, l = 1); l < n;)
                        if (r = e[l++], a)
                            if (1 !== a)
                                if (r)
                                    if (1 === r) {
                                        if (u >= 0) {
                                            var d = {
                                                data: e.subarray(u, l - a - 1),
                                                type: h
                                            };
                                            o.push(d)
                                        } else {
                                            var c = this.getLastNalUnit(t.samples);
                                            if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (i = l - a - 1) > 0)) {
                                                var f = new Uint8Array(c.data.byteLength + i);
                                                f.set(c.data, 0),
                                                f.set(e.subarray(0, i), c.data.byteLength),
                                                c.data = f,
                                                c.state = 0
                                            }
                                        }
                                        l < n ? (u = l, h = 31 & e[l], a = 0) : a = -1
                                    } else
                                        a = 0;
                                else
                                    a = 3;
                            else
                                a = r ? 0 : 2;
                        else
                            a = r ? 0 : 1;
                    if (u >= 0 && a >= 0) {
                        var g = {
                            data: e.subarray(u, n),
                            type: h,
                            state: a
                        };
                        o.push(g)
                    }
                    if (0 === o.length) {
                        var v = this.getLastNalUnit(t.samples);
                        if (v) {
                            var m = new Uint8Array(v.data.byteLength + e.byteLength);
                            m.set(v.data, 0),
                            m.set(e, v.data.byteLength),
                            v.data = m
                        }
                    }
                    return t.naluState = a, o
                }, e.parseAACPES = function(t, e) {
                    var r,
                        i,
                        n,
                        a = 0,
                        s = this.aacOverFlow,
                        o = e.data;
                    if (s) {
                        this.aacOverFlow = null;
                        var l = s.missing,
                            u = s.sample.unit.byteLength;
                        if (-1 === l) {
                            var h = new Uint8Array(u + o.byteLength);
                            h.set(s.sample.unit, 0),
                            h.set(o, u),
                            o = h
                        } else {
                            var d = u - l;
                            s.sample.unit.set(o.subarray(0, l), d),
                            t.samples.push(s.sample),
                            a = s.missing
                        }
                    }
                    for (r = a, i = o.length; r < i - 1 && !si(o, r); r++)
                        ;
                    if (r !== a) {
                        var c,
                            f = r < i - 1;
                        c = f ? "AAC PES did not start with ADTS header,offset:" + r : "No ADTS header found in AAC PES";
                        var g = new Error(c);
                        if (w.warn("parsing error: " + c), this.observer.emit(S.ERROR, S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.FRAG_PARSING_ERROR,
                            fatal: !1,
                            levelRetry: f,
                            error: g,
                            reason: c
                        }), !f)
                            return
                    }
                    if (li(t, this.observer, o, r, this.audioCodec), void 0 !== e.pts)
                        n = e.pts;
                    else {
                        if (!s)
                            return void w.warn("[tsdemuxer]: AAC PES unknown PTS");
                        var v = ui(t.samplerate);
                        n = s.sample.pts + v
                    }
                    for (var m, p = 0; r < i;) {
                        if (r += (m = hi(t, o, r, n, p)).length, m.missing) {
                            this.aacOverFlow = m;
                            break
                        }
                        for (p++; r < i - 1 && !si(o, r); r++)
                            ;
                    }
                }, e.parseMPEGPES = function(t, e) {
                    var r = e.data,
                        i = r.length,
                        n = 0,
                        a = 0,
                        s = e.pts;
                    if (void 0 !== s)
                        for (; a < i;)
                            if (Li(r, a)) {
                                var o = Ti(t, r, a, s, n);
                                if (!o)
                                    break;
                                a += o.length,
                                n++
                            } else
                                a++;
                    else
                        w.warn("[tsdemuxer]: MPEG PES unknown PTS")
                }, e.parseID3PES = function(t, e) {
                    if (void 0 !== e.pts) {
                        var r = o({}, e, {
                            type: this._avcTrack ? be : Ae,
                            duration: Number.POSITIVE_INFINITY
                        });
                        t.samples.push(r)
                    } else
                        w.warn("[tsdemuxer]: ID3 PES unknown PTS")
                }, t
            }();
        function Ii(t, e, r, i) {
            return {
                key: t,
                frame: !1,
                pts: e,
                dts: r,
                units: [],
                debug: i,
                length: 0
            }
        }
        function wi(t, e) {
            return ((31 & t[e + 1]) << 8) + t[e + 2]
        }
        function Ci(t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11]
        }
        function _i(t, e, r, i) {
            var n = {
                    audio: -1,
                    avc: -1,
                    id3: -1,
                    segmentCodec: "aac"
                },
                a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
            for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a;) {
                var s = wi(t, e);
                switch (t[e]) {
                case 207:
                    if (!i) {
                        w.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                        break
                    }
                case 15:
                    -1 === n.audio && (n.audio = s);
                    break;
                case 21:
                    -1 === n.id3 && (n.id3 = s);
                    break;
                case 219:
                    if (!i) {
                        w.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                        break
                    }
                case 27:
                    -1 === n.avc && (n.avc = s);
                    break;
                case 3:
                case 4:
                    !0 !== r.mpeg && !0 !== r.mp3 ? w.log("MPEG audio found, not supported in this browser") : -1 === n.audio && (n.audio = s, n.segmentCodec = "mp3");
                    break;
                case 36:
                    w.warn("Unsupported HEVC stream type found")
                }
                e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
            }
            return n
        }
        function Pi(t) {
            var e,
                r,
                i,
                n,
                a,
                s = 0,
                o = t.data;
            if (!t || 0 === t.size)
                return null;
            for (; o[0].length < 19 && o.length > 1;) {
                var l = new Uint8Array(o[0].length + o[1].length);
                l.set(o[0]),
                l.set(o[1], o[0].length),
                o[0] = l,
                o.splice(1, 1)
            }
            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6)
                    return null;
                var u = e[7];
                192 & u && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (w.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a) : a = n);
                var h = (i = e[8]) + 9;
                if (t.size <= h)
                    return null;
                t.size -= h;
                for (var d = new Uint8Array(t.size), c = 0, f = o.length; c < f; c++) {
                    var g = (e = o[c]).byteLength;
                    if (h) {
                        if (h > g) {
                            h -= g;
                            continue
                        }
                        e = e.subarray(h),
                        g -= h,
                        h = 0
                    }
                    d.set(e, s),
                    s += g
                }
                return r && (r -= i + 3), {
                    data: d,
                    pts: n,
                    dts: a,
                    len: r
                }
            }
            return null
        }
        function xi(t, e) {
            if (t.units.length && t.frame) {
                if (void 0 === t.pts) {
                    var r = e.samples,
                        i = r.length;
                    if (!i)
                        return void e.dropped++;
                    var n = r[i - 1];
                    t.pts = n.pts,
                    t.dts = n.dts
                }
                e.samples.push(t)
            }
            t.debug.length && w.log(t.pts + "/" + t.dts + ":" + t.debug)
        }
        var Fi = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                l(e, t);
                var r = e.prototype;
                return r.resetInitSegment = function(e, r, i, n) {
                    t.prototype.resetInitSegment.call(this, e, r, i, n),
                    this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: 2,
                        pid: -1,
                        sequenceNumber: 0,
                        segmentCodec: "mp3",
                        samples: [],
                        manifestCodec: r,
                        duration: n,
                        inputTimeScale: 9e4,
                        dropped: 0
                    }
                }, e.probe = function(t) {
                    if (!t)
                        return !1;
                    for (var e = (st(t, 0) || []).length, r = t.length; e < r; e++)
                        if (Ri(t, e))
                            return w.log("MPEG Audio sync word found !"), !0;
                    return !1
                }, r.canParse = function(t, e) {
                    return function(t, e) {
                        return Si(t, e) && 4 <= t.length - e
                    }(t, e)
                }, r.appendFrame = function(t, e, r) {
                    if (null !== this.basePTS)
                        return Ti(t, e, r, this.basePTS, this.frameIndex)
                }, e
            }(ei),
            Mi = function() {
                function t() {}
                return t.getSilentFrame = function(t, e) {
                    if ("mp4a.40.2" === t) {
                        if (1 === e)
                            return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === e)
                            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === e)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === e)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === e)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        if (6 === e)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                    } else {
                        if (1 === e)
                            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === e)
                            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (3 === e)
                            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                }, t
            }(),
            Oi = Math.pow(2, 32) - 1,
            Ni = function() {
                function t() {}
                return t.init = function() {
                    var e;
                    for (e in t.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: []
                    }, t.types)
                        t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    t.HDLR_TYPES = {
                        video: r,
                        audio: i
                    };
                    var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    t.STTS = t.STSC = t.STCO = a,
                    t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                    t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var s = new Uint8Array([105, 115, 111, 109]),
                        o = new Uint8Array([97, 118, 99, 49]),
                        l = new Uint8Array([0, 0, 0, 1]);
                    t.FTYP = t.box(t.types.ftyp, s, l, s, o),
                    t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
                }, t.box = function(t) {
                    for (var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                        i[n - 1] = arguments[n];
                    for (var a = i.length, s = a; a--;)
                        e += i[a].byteLength;
                    var o = new Uint8Array(e);
                    for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), a = 0, e = 8; a < s; a++)
                        o.set(i[a], e),
                        e += i[a].byteLength;
                    return o
                }, t.hdlr = function(e) {
                    return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                }, t.mdat = function(e) {
                    return t.box(t.types.mdat, e)
                }, t.mdhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (Oi + 1)),
                        n = Math.floor(r % (Oi + 1));
                    return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                }, t.mdia = function(e) {
                    return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                }, t.mfhd = function(e) {
                    return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                }, t.minf = function(e) {
                    return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                }, t.moof = function(e, r, i) {
                    return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                }, t.moov = function(e) {
                    for (var r = e.length, i = []; r--;)
                        i[r] = t.trak(e[r]);
                    return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
                }, t.mvex = function(e) {
                    for (var r = e.length, i = []; r--;)
                        i[r] = t.trex(e[r]);
                    return t.box.apply(null, [t.types.mvex].concat(i))
                }, t.mvhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (Oi + 1)),
                        n = Math.floor(r % (Oi + 1)),
                        a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return t.box(t.types.mvhd, a)
                }, t.sdtp = function(e) {
                    var r,
                        i,
                        n = e.samples || [],
                        a = new Uint8Array(4 + n.length);
                    for (r = 0; r < n.length; r++)
                        i = n[r].flags,
                        a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                    return t.box(t.types.sdtp, a)
                }, t.stbl = function(e) {
                    return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                }, t.avc1 = function(e) {
                    var r,
                        i,
                        n,
                        a = [],
                        s = [];
                    for (r = 0; r < e.sps.length; r++)
                        n = (i = e.sps[r]).byteLength,
                        a.push(n >>> 8 & 255),
                        a.push(255 & n),
                        a = a.concat(Array.prototype.slice.call(i));
                    for (r = 0; r < e.pps.length; r++)
                        n = (i = e.pps[r]).byteLength,
                        s.push(n >>> 8 & 255),
                        s.push(255 & n),
                        s = s.concat(Array.prototype.slice.call(i));
                    var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s))),
                        l = e.width,
                        u = e.height,
                        h = e.pixelRatio[0],
                        d = e.pixelRatio[1];
                    return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                }, t.esds = function(t) {
                    var e = t.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                }, t.mp4a = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                }, t.mp3 = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                }, t.stsd = function(e) {
                    return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                }, t.tkhd = function(e) {
                    var r = e.id,
                        i = e.duration * e.timescale,
                        n = e.width,
                        a = e.height,
                        s = Math.floor(i / (Oi + 1)),
                        o = Math.floor(i % (Oi + 1));
                    return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
                }, t.traf = function(e, r) {
                    var i = t.sdtp(e),
                        n = e.id,
                        a = Math.floor(r / (Oi + 1)),
                        s = Math.floor(r % (Oi + 1));
                    return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                }, t.trak = function(e) {
                    return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                }, t.trex = function(e) {
                    var r = e.id;
                    return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }, t.trun = function(e, r) {
                    var i,
                        n,
                        a,
                        s,
                        o,
                        l,
                        u = e.samples || [],
                        h = u.length,
                        d = 12 + 16 * h,
                        c = new Uint8Array(d);
                    for (r += 8 + d, c.set(["video" === e.type ? 1 : 0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < h; i++)
                        a = (n = u[i]).duration,
                        s = n.size,
                        o = n.flags,
                        l = n.cts,
                        c.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                    return t.box(t.types.trun, c)
                }, t.initSegment = function(e) {
                    t.types || t.init();
                    var r = t.moov(e),
                        i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                    return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
                }, t
            }();
        function Ui(t, e, r, i) {
            void 0 === r && (r = 1),
            void 0 === i && (i = !1);
            var n = t * e * r;
            return i ? Math.round(n) : n
        }
        function Bi(t, e) {
            return void 0 === e && (e = !1), Ui(t, 1e3, 1 / 9e4, e)
        }
        Ni.types = void 0,
        Ni.HDLR_TYPES = void 0,
        Ni.STTS = void 0,
        Ni.STSC = void 0,
        Ni.STCO = void 0,
        Ni.STSZ = void 0,
        Ni.VMHD = void 0,
        Ni.SMHD = void 0,
        Ni.STSD = void 0,
        Ni.FTYP = void 0,
        Ni.DINF = void 0;
        var Gi = null,
            Ki = null,
            Hi = function() {
                function t(t, e, r, i) {
                    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === Gi) {
                        var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                        Gi = n ? parseInt(n[1]) : 0
                    }
                    if (null === Ki) {
                        var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                        Ki = a ? parseInt(a[1]) : 0
                    }
                }
                var e = t.prototype;
                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                    w.log("[mp4-remuxer]: initPTS & initDTS reset"),
                    this._initPTS = this._initDTS = t
                }, e.resetNextTimestamp = function() {
                    w.log("[mp4-remuxer]: reset next timestamp"),
                    this.isVideoContiguous = !1,
                    this.isAudioContiguous = !1
                }, e.resetInitSegment = function() {
                    w.log("[mp4-remuxer]: ISGenerated flag reset"),
                    this.ISGenerated = !1
                }, e.getVideoStartPts = function(t) {
                    var e = !1,
                        r = t.reduce((function(t, r) {
                            var i = r.pts - t;
                            return i < -4294967296 ? (e = !0, Vi(t, r.pts)) : i > 0 ? t : r.pts
                        }), t[0].pts);
                    return e && w.debug("PTS rollover detected"), r
                }, e.remux = function(t, e, r, i, n, a, s, o) {
                    var l,
                        u,
                        h,
                        d,
                        c,
                        f,
                        g = n,
                        v = n,
                        m = t.pid > -1,
                        p = e.pid > -1,
                        y = e.samples.length,
                        T = t.samples.length > 0,
                        E = s && y > 0 || y > 1;
                    if ((!m || T) && (!p || E) || this.ISGenerated || s) {
                        this.ISGenerated || (h = this.generateIS(t, e, n, a));
                        var S,
                            L = this.isVideoContiguous,
                            R = -1;
                        if (E && (R = function(t) {
                            for (var e = 0; e < t.length; e++)
                                if (t[e].key)
                                    return e;
                            return -1
                        }(e.samples), !L && this.config.forceKeyFrameOnDiscontinuity))
                            if (f = !0, R > 0) {
                                w.warn("[mp4-remuxer]: Dropped " + R + " out of " + y + " video samples due to a missing keyframe");
                                var A = this.getVideoStartPts(e.samples);
                                e.samples = e.samples.slice(R),
                                e.dropped += R,
                                S = v += (e.samples[0].pts - A) / e.inputTimeScale
                            } else
                                -1 === R && (w.warn("[mp4-remuxer]: No keyframe found out of " + y + " video samples"), f = !1);
                        if (this.ISGenerated) {
                            if (T && E) {
                                var k = this.getVideoStartPts(e.samples),
                                    b = (Vi(t.samples[0].pts, k) - k) / e.inputTimeScale;
                                g += Math.max(0, b),
                                v += Math.max(0, -b)
                            }
                            if (T) {
                                if (t.samplerate || (w.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(t, e, n, a)), u = this.remuxAudio(t, g, this.isAudioContiguous, a, p || E || o === ve ? v : void 0), E) {
                                    var D = u ? u.endPTS - u.startPTS : 0;
                                    e.inputTimeScale || (w.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(t, e, n, a)),
                                    l = this.remuxVideo(e, v, L, D)
                                }
                            } else
                                E && (l = this.remuxVideo(e, v, L, 0));
                            l && (l.firstKeyFrame = R, l.independent = -1 !== R, l.firstKeyFramePTS = S)
                        }
                    }
                    return this.ISGenerated && this._initPTS && this._initDTS && (r.samples.length && (c = Yi(r, n, this._initPTS, this._initDTS)), i.samples.length && (d = Wi(i, n, this._initPTS))), {
                        audio: u,
                        video: l,
                        initSegment: h,
                        independent: f,
                        text: d,
                        id3: c
                    }
                }, e.generateIS = function(t, e, r, i) {
                    var n,
                        a,
                        s,
                        o = t.samples,
                        l = e.samples,
                        u = this.typeSupported,
                        h = {},
                        d = this._initPTS,
                        c = !d || i,
                        f = "audio/mp4";
                    if (c && (n = a = 1 / 0), t.config && o.length && (t.timescale = t.samplerate, "mp3" === t.segmentCodec && (u.mpeg ? (f = "audio/mpeg", t.codec = "") : u.mp3 && (t.codec = "mp3")), h.audio = {
                        id: "audio",
                        container: f,
                        codec: t.codec,
                        initSegment: "mp3" === t.segmentCodec && u.mpeg ? new Uint8Array(0) : Ni.initSegment([t]),
                        metadata: {
                            channelCount: t.channelCount
                        }
                    }, c && (s = t.inputTimeScale, d && s === d.timescale ? c = !1 : n = a = o[0].pts - Math.round(s * r))), e.sps && e.pps && l.length && (e.timescale = e.inputTimeScale, h.video = {
                        id: "main",
                        container: "video/mp4",
                        codec: e.codec,
                        initSegment: Ni.initSegment([e]),
                        metadata: {
                            width: e.width,
                            height: e.height
                        }
                    }, c))
                        if (s = e.inputTimeScale, d && s === d.timescale)
                            c = !1;
                        else {
                            var g = this.getVideoStartPts(l),
                                v = Math.round(s * r);
                            a = Math.min(a, Vi(l[0].dts, g) - v),
                            n = Math.min(n, g - v)
                        }
                    if (Object.keys(h).length)
                        return this.ISGenerated = !0, c ? (this._initPTS = {
                            baseTime: n,
                            timescale: s
                        }, this._initDTS = {
                            baseTime: a,
                            timescale: s
                        }) : n = s = void 0, {
                            tracks: h,
                            initPTS: n,
                            timescale: s
                        }
                }, e.remuxVideo = function(t, e, r, i) {
                    var n,
                        a,
                        s = t.inputTimeScale,
                        l = t.samples,
                        u = [],
                        h = l.length,
                        d = this._initPTS,
                        c = this.nextAvcDts,
                        f = 8,
                        g = this.videoSampleDuration,
                        v = Number.POSITIVE_INFINITY,
                        m = Number.NEGATIVE_INFINITY,
                        p = !1;
                    r && null !== c || (c = e * s - (l[0].pts - Vi(l[0].dts, l[0].pts)));
                    for (var y = d.baseTime * s / d.timescale, T = 0; T < h; T++) {
                        var E = l[T];
                        E.pts = Vi(E.pts - y, c),
                        E.dts = Vi(E.dts - y, c),
                        E.dts < l[T > 0 ? T - 1 : T].dts && (p = !0)
                    }
                    p && l.sort((function(t, e) {
                        var r = t.dts - e.dts,
                            i = t.pts - e.pts;
                        return r || i
                    })),
                    n = l[0].dts;
                    var A = (a = l[l.length - 1].dts) - n,
                        k = A ? Math.round(A / (h - 1)) : g || t.inputTimeScale / 30;
                    if (r) {
                        var b = n - c,
                            D = b > k,
                            I = b < -1;
                        if ((D || I) && (D ? w.warn("AVC: " + Bi(b, !0) + " ms (" + b + "dts) hole between fragments detected, filling it") : w.warn("AVC: " + Bi(-b, !0) + " ms (" + b + "dts) overlapping between fragments detected"), !I || c >= l[0].pts)) {
                            n = c;
                            var C = l[0].pts - b;
                            l[0].dts = n,
                            l[0].pts = C,
                            w.log("Video: First PTS/DTS adjusted: " + Bi(C, !0) + "/" + Bi(n, !0) + ", delta: " + Bi(b, !0) + " ms")
                        }
                    }
                    n = Math.max(0, n);
                    for (var _ = 0, P = 0, x = 0; x < h; x++) {
                        for (var F = l[x], M = F.units, O = M.length, N = 0, U = 0; U < O; U++)
                            N += M[U].data.length;
                        P += N,
                        _ += O,
                        F.length = N,
                        F.dts = Math.max(F.dts, n),
                        v = Math.min(F.pts, v),
                        m = Math.max(F.pts, m)
                    }
                    a = l[h - 1].dts;
                    var B,
                        G = P + 4 * _ + 8;
                    try {
                        B = new Uint8Array(G)
                    } catch (t) {
                        return void this.observer.emit(S.ERROR, S.ERROR, {
                            type: L.MUX_ERROR,
                            details: R.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            error: t,
                            bytes: G,
                            reason: "fail allocating video mdat " + G
                        })
                    }
                    var K = new DataView(B.buffer);
                    K.setUint32(0, G),
                    B.set(Ni.types.mdat, 4);
                    for (var H = !1, V = Number.POSITIVE_INFINITY, Y = Number.POSITIVE_INFINITY, W = Number.NEGATIVE_INFINITY, j = Number.NEGATIVE_INFINITY, q = 0; q < h; q++) {
                        for (var X = l[q], z = X.units, Q = 0, $ = 0, J = z.length; $ < J; $++) {
                            var Z = z[$],
                                tt = Z.data,
                                et = Z.data.byteLength;
                            K.setUint32(f, et),
                            f += 4,
                            B.set(tt, f),
                            f += et,
                            Q += 4 + et
                        }
                        var rt = void 0;
                        if (q < h - 1)
                            g = l[q + 1].dts - X.dts,
                            rt = l[q + 1].pts - X.pts;
                        else {
                            var it = this.config,
                                nt = q > 0 ? X.dts - l[q - 1].dts : k;
                            if (rt = q > 0 ? X.pts - l[q - 1].pts : k, it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                var at = Math.floor(it.maxBufferHole * s),
                                    st = (i ? v + i * s : this.nextAudioPts) - X.pts;
                                st > at ? ((g = st - nt) < 0 ? g = nt : H = !0, w.log("[mp4-remuxer]: It is approximately " + st / 90 + " ms to the next segment; using duration " + g / 90 + " ms for the last video frame.")) : g = nt
                            } else
                                g = nt
                        }
                        var ot = Math.round(X.pts - X.dts);
                        V = Math.min(V, g),
                        W = Math.max(W, g),
                        Y = Math.min(Y, rt),
                        j = Math.max(j, rt),
                        u.push(new qi(X.key, g, Q, ot))
                    }
                    if (u.length)
                        if (Gi) {
                            if (Gi < 70) {
                                var lt = u[0].flags;
                                lt.dependsOn = 2,
                                lt.isNonSync = 0
                            }
                        } else if (Ki && j - Y < W - V && k / W < .025 && 0 === u[0].cts) {
                            w.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                            for (var ut = n, ht = 0, dt = u.length; ht < dt; ht++) {
                                var ct = ut + u[ht].duration,
                                    ft = ut + u[ht].cts;
                                if (ht < dt - 1) {
                                    var gt = ct + u[ht + 1].cts;
                                    u[ht].duration = gt - ft
                                } else
                                    u[ht].duration = ht ? u[ht - 1].duration : k;
                                u[ht].cts = 0,
                                ut = ct
                            }
                        }
                    g = H || !g ? k : g,
                    this.nextAvcDts = c = a + g,
                    this.videoSampleDuration = g,
                    this.isVideoContiguous = !0;
                    var vt = {
                        data1: Ni.moof(t.sequenceNumber++, n, o({}, t, {
                            samples: u
                        })),
                        data2: B,
                        startPTS: v / s,
                        endPTS: (m + g) / s,
                        startDTS: n / s,
                        endDTS: c / s,
                        type: "video",
                        hasAudio: !1,
                        hasVideo: !0,
                        nb: u.length,
                        dropped: t.dropped
                    };
                    return t.samples = [], t.dropped = 0, vt
                }, e.remuxAudio = function(t, e, r, i, n) {
                    var a = t.inputTimeScale,
                        s = a / (t.samplerate ? t.samplerate : a),
                        l = "aac" === t.segmentCodec ? 1024 : 1152,
                        u = l * s,
                        h = this._initPTS,
                        d = "mp3" === t.segmentCodec && this.typeSupported.mpeg,
                        c = [],
                        f = void 0 !== n,
                        g = t.samples,
                        v = d ? 0 : 8,
                        m = this.nextAudioPts || -1,
                        p = e * a,
                        y = h.baseTime * a / h.timescale;
                    if (this.isAudioContiguous = r = r || g.length && m > 0 && (i && Math.abs(p - m) < 9e3 || Math.abs(Vi(g[0].pts - y, p) - m) < 20 * u), g.forEach((function(t) {
                        t.pts = Vi(t.pts - y, p)
                    })), !r || m < 0) {
                        if (g = g.filter((function(t) {
                            return t.pts >= 0
                        })), !g.length)
                            return;
                        m = 0 === n ? 0 : i && !f ? Math.max(0, p) : g[0].pts
                    }
                    if ("aac" === t.segmentCodec)
                        for (var T = this.config.maxAudioFramesDrift, E = 0, A = m; E < g.length; E++) {
                            var k = g[E],
                                b = k.pts,
                                D = b - A,
                                I = Math.abs(1e3 * D / a);
                            if (D <= -T * u && f)
                                0 === E && (w.warn("Audio frame @ " + (b / a).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * D / a) + " ms."), this.nextAudioPts = m = A = b);
                            else if (D >= T * u && I < 1e4 && f) {
                                var C = Math.round(D / u);
                                (A = b - C * u) < 0 && (C--, A += u),
                                0 === E && (this.nextAudioPts = m = A),
                                w.warn("[mp4-remuxer]: Injecting " + C + " audio frame @ " + (A / a).toFixed(3) + "s due to " + Math.round(1e3 * D / a) + " ms gap.");
                                for (var _ = 0; _ < C; _++) {
                                    var P = Math.max(A, 0),
                                        x = Mi.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                    x || (w.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), x = k.unit.subarray()),
                                    g.splice(E, 0, {
                                        unit: x,
                                        pts: P
                                    }),
                                    A += u,
                                    E++
                                }
                            }
                            k.pts = A,
                            A += u
                        }
                    for (var F, M = null, O = null, N = 0, U = g.length; U--;)
                        N += g[U].unit.byteLength;
                    for (var B = 0, G = g.length; B < G; B++) {
                        var K = g[B],
                            H = K.unit,
                            V = K.pts;
                        if (null !== O)
                            c[B - 1].duration = Math.round((V - O) / s);
                        else {
                            if (r && "aac" === t.segmentCodec && (V = m), M = V, !(N > 0))
                                return;
                            N += v;
                            try {
                                F = new Uint8Array(N)
                            } catch (t) {
                                return void this.observer.emit(S.ERROR, S.ERROR, {
                                    type: L.MUX_ERROR,
                                    details: R.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    error: t,
                                    bytes: N,
                                    reason: "fail allocating audio mdat " + N
                                })
                            }
                            d || (new DataView(F.buffer).setUint32(0, N), F.set(Ni.types.mdat, 4))
                        }
                        F.set(H, v);
                        var Y = H.byteLength;
                        v += Y,
                        c.push(new qi(!0, l, Y, 0)),
                        O = V
                    }
                    var W = c.length;
                    if (W) {
                        var j = c[c.length - 1];
                        this.nextAudioPts = m = O + s * j.duration;
                        var q = d ? new Uint8Array(0) : Ni.moof(t.sequenceNumber++, M / s, o({}, t, {
                            samples: c
                        }));
                        t.samples = [];
                        var X = M / a,
                            z = m / a,
                            Q = {
                                data1: q,
                                data2: F,
                                startPTS: X,
                                endPTS: z,
                                startDTS: X,
                                endDTS: z,
                                type: "audio",
                                hasAudio: !0,
                                hasVideo: !1,
                                nb: W
                            };
                        return this.isAudioContiguous = !0, Q
                    }
                }, e.remuxEmptyAudio = function(t, e, r, i) {
                    var n = t.inputTimeScale,
                        a = n / (t.samplerate ? t.samplerate : n),
                        s = this.nextAudioPts,
                        o = this._initDTS,
                        l = 9e4 * o.baseTime / o.timescale,
                        u = (null !== s ? s : i.startDTS * n) + l,
                        h = i.endDTS * n + l,
                        d = 1024 * a,
                        c = Math.ceil((h - u) / d),
                        f = Mi.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                    if (w.warn("[mp4-remuxer]: remux empty Audio"), f) {
                        for (var g = [], v = 0; v < c; v++) {
                            var m = u + v * d;
                            g.push({
                                unit: f,
                                pts: m,
                                dts: m
                            })
                        }
                        return t.samples = g, this.remuxAudio(t, e, r, !1)
                    }
                    w.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
                }, t
            }();
        function Vi(t, e) {
            var r;
            if (null === e)
                return t;
            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;)
                t += r;
            return t
        }
        function Yi(t, e, r, i) {
            var n = t.samples.length;
            if (n) {
                for (var a = t.inputTimeScale, s = 0; s < n; s++) {
                    var o = t.samples[s];
                    o.pts = Vi(o.pts - r.baseTime * a / r.timescale, e * a) / a,
                    o.dts = Vi(o.dts - i.baseTime * a / i.timescale, e * a) / a
                }
                var l = t.samples;
                return t.samples = [], {
                    samples: l
                }
            }
        }
        function Wi(t, e, r) {
            var i = t.samples.length;
            if (i) {
                for (var n = t.inputTimeScale, a = 0; a < i; a++) {
                    var s = t.samples[a];
                    s.pts = Vi(s.pts - r.baseTime * n / r.timescale, e * n) / n
                }
                t.samples.sort((function(t, e) {
                    return t.pts - e.pts
                }));
                var o = t.samples;
                return t.samples = [], {
                    samples: o
                }
            }
        }
        var ji,
            qi = function(t, e, r, i) {
                this.size = void 0,
                this.duration = void 0,
                this.cts = void 0,
                this.flags = void 0,
                this.duration = e,
                this.size = r,
                this.cts = i,
                this.flags = new Xi(t)
            },
            Xi = function(t) {
                this.isLeading = 0,
                this.isDependedOn = 0,
                this.hasRedundancy = 0,
                this.degradPrio = 0,
                this.dependsOn = 1,
                this.isNonSync = 1,
                this.dependsOn = t ? 2 : 1,
                this.isNonSync = t ? 0 : 1
            },
            zi = function() {
                function t() {
                    this.emitInitSegment = !1,
                    this.audioCodec = void 0,
                    this.videoCodec = void 0,
                    this.initData = void 0,
                    this.initPTS = null,
                    this.initTracks = void 0,
                    this.lastEndTime = null
                }
                var e = t.prototype;
                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                    this.initPTS = t,
                    this.lastEndTime = null
                }, e.resetNextTimestamp = function() {
                    this.lastEndTime = null
                }, e.resetInitSegment = function(t, e, r, i) {
                    this.audioCodec = e,
                    this.videoCodec = r,
                    this.generateInitSegment(function(t, e) {
                        if (!t || !e)
                            return t;
                        var r = e.keyId;
                        return r && e.isCommonEncryption && It(t, ["moov", "trak"]).forEach((function(t) {
                            var e = It(t, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8),
                                i = It(e, ["enca"]),
                                n = i.length > 0;
                            n || (i = It(e, ["encv"])),
                            i.forEach((function(t) {
                                It(n ? t.subarray(28) : t.subarray(78), ["sinf"]).forEach((function(t) {
                                    var e = _t(t);
                                    if (e) {
                                        var i = e.subarray(8, 24);
                                        i.some((function(t) {
                                            return 0 !== t
                                        })) || (w.log("[eme] Patching keyId in 'enc" + (n ? "a" : "v") + ">sinf>>tenc' box: " + Tt(i) + " -> " + Tt(r)), e.set(r, 8))
                                    }
                                }))
                            }))
                        })), t
                    }(t, i)),
                    this.emitInitSegment = !0
                }, e.generateInitSegment = function(t) {
                    var e = this.audioCodec,
                        r = this.videoCodec;
                    if (null == t || !t.byteLength)
                        return this.initTracks = void 0, void (this.initData = void 0);
                    var i = this.initData = Ct(t);
                    e || (e = Qi(i.audio, O)),
                    r || (r = Qi(i.video, N));
                    var n = {};
                    i.audio && i.video ? n.audiovideo = {
                        container: "video/mp4",
                        codec: e + "," + r,
                        initSegment: t,
                        id: "main"
                    } : i.audio ? n.audio = {
                        container: "audio/mp4",
                        codec: e,
                        initSegment: t,
                        id: "audio"
                    } : i.video ? n.video = {
                        container: "video/mp4",
                        codec: r,
                        initSegment: t,
                        id: "main"
                    } : w.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),
                    this.initTracks = n
                }, e.remux = function(t, e, r, i, n, a) {
                    var s,
                        o,
                        l = this.initPTS,
                        u = this.lastEndTime,
                        h = {
                            audio: void 0,
                            video: void 0,
                            text: i,
                            id3: r,
                            initSegment: void 0
                        };
                    E(u) || (u = this.lastEndTime = n || 0);
                    var d = e.samples;
                    if (null == d || !d.length)
                        return h;
                    var c = {
                            initPTS: void 0,
                            timescale: 1
                        },
                        f = this.initData;
                    if (null != (s = f) && s.length || (this.generateInitSegment(d), f = this.initData), null == (o = f) || !o.length)
                        return w.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
                    this.emitInitSegment && (c.tracks = this.initTracks, this.emitInitSegment = !1);
                    var g = function(t, e) {
                            for (var r = 0, i = 0, n = 0, a = It(t, ["moof", "traf"]), s = 0; s < a.length; s++) {
                                var o = a[s],
                                    l = It(o, ["tfhd"])[0],
                                    u = e[kt(l, 4)];
                                if (u) {
                                    var h = u.default,
                                        d = kt(l, 0) | (null == h ? void 0 : h.flags),
                                        c = null == h ? void 0 : h.duration;
                                    8 & d && (c = kt(l, 2 & d ? 12 : 8));
                                    for (var f = u.timescale || 9e4, g = It(o, ["trun"]), v = 0; v < g.length; v++)
                                        !(r = Pt(g[v])) && c && (r = c * kt(g[v], 4)),
                                        u.type === N ? i += r / f : u.type === O && (n += r / f)
                                }
                            }
                            if (0 === i && 0 === n) {
                                for (var m = 0, p = It(t, ["sidx"]), y = 0; y < p.length; y++) {
                                    var T = wt(p[y]);
                                    null != T && T.references && (m += T.references.reduce((function(t, e) {
                                        return t + e.info.duration || 0
                                    }), 0))
                                }
                                return m
                            }
                            return i || n
                        }(d, f),
                        v = function(t, e) {
                            return It(e, ["moof", "traf"]).reduce((function(e, r) {
                                var i = It(r, ["tfdt"])[0],
                                    n = i[0],
                                    a = It(r, ["tfhd"]).reduce((function(e, r) {
                                        var a = kt(r, 4),
                                            s = t[a];
                                        if (s) {
                                            var o = kt(i, 4);
                                            if (1 === n) {
                                                if (o === Et)
                                                    return w.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e;
                                                o *= Et + 1,
                                                o += kt(i, 8)
                                            }
                                            var l = o / (s.timescale || 9e4);
                                            if (isFinite(l) && (null === e || l < e))
                                                return l
                                        }
                                        return e
                                    }), null);
                                return null !== a && isFinite(a) && (null === e || a < e) ? a : e
                            }), null)
                        }(f, d),
                        m = null === v ? n : v;
                    (function(t, e, r, i) {
                        if (null === t)
                            return !0;
                        var n = Math.max(i, 1),
                            a = e - t.baseTime / t.timescale;
                        return Math.abs(a - r) > n
                    }(l, m, n, g) || c.timescale !== l.timescale && a) && (c.initPTS = m - n, l && 1 === l.timescale && w.warn("Adjusting initPTS by " + (c.initPTS - l.baseTime)), this.initPTS = l = {
                        baseTime: c.initPTS,
                        timescale: 1
                    });
                    var p = t ? m - l.baseTime / l.timescale : u,
                        y = p + g;
                    !function(t, e, r) {
                        It(e, ["moof", "traf"]).forEach((function(e) {
                            It(e, ["tfhd"]).forEach((function(i) {
                                var n = kt(i, 4),
                                    a = t[n];
                                if (a) {
                                    var s = a.timescale || 9e4;
                                    It(e, ["tfdt"]).forEach((function(t) {
                                        var e = t[0],
                                            i = kt(t, 4);
                                        if (0 === e)
                                            i -= r * s,
                                            Dt(t, 4, i = Math.max(i, 0));
                                        else {
                                            i *= Math.pow(2, 32),
                                            i += kt(t, 8),
                                            i -= r * s,
                                            i = Math.max(i, 0);
                                            var n = Math.floor(i / (Et + 1)),
                                                a = Math.floor(i % (Et + 1));
                                            Dt(t, 4, n),
                                            Dt(t, 8, a)
                                        }
                                    }))
                                }
                            }))
                        }))
                    }(f, d, l.baseTime / l.timescale),
                    g > 0 ? this.lastEndTime = y : (w.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                    var T = !!f.audio,
                        S = !!f.video,
                        L = "";
                    T && (L += "audio"),
                    S && (L += "video");
                    var R = {
                        data1: d,
                        startPTS: p,
                        startDTS: p,
                        endPTS: y,
                        endDTS: y,
                        type: L,
                        hasAudio: T,
                        hasVideo: S,
                        nb: 1,
                        dropped: 0
                    };
                    return h.audio = "audio" === R.type ? R : void 0, h.video = "audio" !== R.type ? R : void 0, h.initSegment = c, h.id3 = Yi(r, n, l, l), i.samples.length && (h.text = Wi(i, n, l)), h
                }, t
            }();
        function Qi(t, e) {
            var r = null == t ? void 0 : t.codec;
            return r && r.length > 4 ? r : "hvc1" === r || "hev1" === r ? "hvc1.1.6.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || e === N ? "avc1.42e01e" : "mp4a.40.5"
        }
        try {
            ji = self.performance.now.bind(self.performance)
        } catch (t) {
            w.debug("Unable to use Performance API on this environment"),
            ji = "undefined" != typeof self && self.Date.now
        }
        var $i = [{
                demux: fi,
                remux: zi
            }, {
                demux: Di,
                remux: Hi
            }, {
                demux: di,
                remux: Hi
            }, {
                demux: Fi,
                remux: Hi
            }],
            Ji = function() {
                function t(t, e, r, i, n) {
                    this.async = !1,
                    this.observer = void 0,
                    this.typeSupported = void 0,
                    this.config = void 0,
                    this.vendor = void 0,
                    this.id = void 0,
                    this.demuxer = void 0,
                    this.remuxer = void 0,
                    this.decrypter = void 0,
                    this.probe = void 0,
                    this.decryptionPromise = null,
                    this.transmuxConfig = void 0,
                    this.currentTransmuxState = void 0,
                    this.observer = t,
                    this.typeSupported = e,
                    this.config = r,
                    this.vendor = i,
                    this.id = n
                }
                var e = t.prototype;
                return e.configure = function(t) {
                    this.transmuxConfig = t,
                    this.decrypter && this.decrypter.reset()
                }, e.push = function(t, e, r, i) {
                    var n = this,
                        a = r.transmuxing;
                    a.executeStart = ji();
                    var s = new Uint8Array(t),
                        o = this.currentTransmuxState,
                        l = this.transmuxConfig;
                    i && (this.currentTransmuxState = i);
                    var u = i || o,
                        h = u.contiguous,
                        d = u.discontinuity,
                        c = u.trackSwitch,
                        f = u.accurateTimeOffset,
                        g = u.timeOffset,
                        v = u.initSegmentChange,
                        m = l.audioCodec,
                        p = l.videoCodec,
                        y = l.defaultInitPts,
                        T = l.duration,
                        E = l.initSegmentData,
                        A = function(t, e) {
                            var r = null;
                            return t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (r = e), r
                        }(s, e);
                    if (A && "AES-128" === A.method) {
                        var k = this.getDecrypter();
                        if (!k.isSync())
                            return this.decryptionPromise = k.webCryptoDecrypt(s, A.key.buffer, A.iv.buffer).then((function(t) {
                                var e = n.push(t, null, r);
                                return n.decryptionPromise = null, e
                            })), this.decryptionPromise;
                        var b = k.softwareDecrypt(s, A.key.buffer, A.iv.buffer);
                        if (r.part > -1 && (b = k.flush()), !b)
                            return a.executeEnd = ji(), Zi(r);
                        s = new Uint8Array(b)
                    }
                    var D = this.needsProbing(d, c);
                    if (D) {
                        var I = this.configureTransmuxer(s);
                        if (I)
                            return w.warn("[transmuxer] " + I.message), this.observer.emit(S.ERROR, S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.FRAG_PARSING_ERROR,
                                fatal: !1,
                                error: I,
                                reason: I.message
                            }), a.executeEnd = ji(), Zi(r)
                    }
                    (d || c || v || D) && this.resetInitSegment(E, m, p, T, e),
                    (d || v || D) && this.resetInitialTimestamp(y),
                    h || this.resetContiguity();
                    var C = this.transmux(s, A, g, f, r),
                        _ = this.currentTransmuxState;
                    return _.contiguous = !0, _.discontinuity = !1, _.trackSwitch = !1, a.executeEnd = ji(), C
                }, e.flush = function(t) {
                    var e = this,
                        r = t.transmuxing;
                    r.executeStart = ji();
                    var i = this.decrypter,
                        n = this.currentTransmuxState,
                        a = this.decryptionPromise;
                    if (a)
                        return a.then((function() {
                            return e.flush(t)
                        }));
                    var s = [],
                        o = n.timeOffset;
                    if (i) {
                        var l = i.flush();
                        l && s.push(this.push(l, null, t))
                    }
                    var u = this.demuxer,
                        h = this.remuxer;
                    if (!u || !h)
                        return r.executeEnd = ji(), [Zi(t)];
                    var d = u.flush(o);
                    return tn(d) ? d.then((function(r) {
                        return e.flushRemux(s, r, t), s
                    })) : (this.flushRemux(s, d, t), s)
                }, e.flushRemux = function(t, e, r) {
                    var i = e.audioTrack,
                        n = e.videoTrack,
                        a = e.id3Track,
                        s = e.textTrack,
                        o = this.currentTransmuxState,
                        l = o.accurateTimeOffset,
                        u = o.timeOffset;
                    w.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                    var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
                    t.push({
                        remuxResult: h,
                        chunkMeta: r
                    }),
                    r.transmuxing.executeEnd = ji()
                }, e.resetInitialTimestamp = function(t) {
                    var e = this.demuxer,
                        r = this.remuxer;
                    e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
                }, e.resetContiguity = function() {
                    var t = this.demuxer,
                        e = this.remuxer;
                    t && e && (t.resetContiguity(), e.resetNextTimestamp())
                }, e.resetInitSegment = function(t, e, r, i, n) {
                    var a = this.demuxer,
                        s = this.remuxer;
                    a && s && (a.resetInitSegment(t, e, r, i), s.resetInitSegment(t, e, r, n))
                }, e.destroy = function() {
                    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0),
                    this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
                }, e.transmux = function(t, e, r, i, n) {
                    return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n)
                }, e.transmuxUnencrypted = function(t, e, r, i) {
                    var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                        a = n.audioTrack,
                        s = n.videoTrack,
                        o = n.id3Track,
                        l = n.textTrack;
                    return {
                        remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id),
                        chunkMeta: i
                    }
                }, e.transmuxSampleAes = function(t, e, r, i, n) {
                    var a = this;
                    return this.demuxer.demuxSampleAes(t, e, r).then((function(t) {
                        return {
                            remuxResult: a.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, r, i, !1, a.id),
                            chunkMeta: n
                        }
                    }))
                }, e.configureTransmuxer = function(t) {
                    for (var e, r = this.config, i = this.observer, n = this.typeSupported, a = this.vendor, s = 0, o = $i.length; s < o; s++)
                        if ($i[s].demux.probe(t)) {
                            e = $i[s];
                            break
                        }
                    if (!e)
                        return new Error("Failed to find demuxer by probing fragment data");
                    var l = this.demuxer,
                        u = this.remuxer,
                        h = e.remux,
                        d = e.demux;
                    u && u instanceof h || (this.remuxer = new h(i, r, n, a)),
                    l && l instanceof d || (this.demuxer = new d(i, r, n), this.probe = d.probe)
                }, e.needsProbing = function(t, e) {
                    return !this.demuxer || !this.remuxer || t || e
                }, e.getDecrypter = function() {
                    var t = this.decrypter;
                    return t || (t = this.decrypter = new Ur(this.config)), t
                }, t
            }(),
            Zi = function(t) {
                return {
                    remuxResult: {},
                    chunkMeta: t
                }
            };
        function tn(t) {
            return "then" in t && t.then instanceof Function
        }
        var en = function(t, e, r, i, n) {
                this.audioCodec = void 0,
                this.videoCodec = void 0,
                this.initSegmentData = void 0,
                this.duration = void 0,
                this.defaultInitPts = void 0,
                this.audioCodec = t,
                this.videoCodec = e,
                this.initSegmentData = r,
                this.duration = i,
                this.defaultInitPts = n || null
            },
            rn = function(t, e, r, i, n, a) {
                this.discontinuity = void 0,
                this.contiguous = void 0,
                this.accurateTimeOffset = void 0,
                this.trackSwitch = void 0,
                this.timeOffset = void 0,
                this.initSegmentChange = void 0,
                this.discontinuity = t,
                this.contiguous = e,
                this.accurateTimeOffset = r,
                this.trackSwitch = i,
                this.timeOffset = n,
                this.initSegmentChange = a
            },
            nn = {
                exports: {}
            };
        !function(t) {
            var e = Object.prototype.hasOwnProperty,
                r = "~";
            function i() {}
            function n(t, e, r) {
                this.fn = t,
                this.context = e,
                this.once = r || !1
            }
            function a(t, e, i, a, s) {
                if ("function" != typeof i)
                    throw new TypeError("The listener must be a function");
                var o = new n(i, a || t, s),
                    l = r ? r + e : e;
                return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
            }
            function s(t, e) {
                0 == --t._eventsCount ? t._events = new i : delete t._events[e]
            }
            function o() {
                this._events = new i,
                this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)),
            o.prototype.eventNames = function() {
                var t,
                    i,
                    n = [];
                if (0 === this._eventsCount)
                    return n;
                for (i in t = this._events)
                    e.call(t, i) && n.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            },
            o.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    i = this._events[e];
                if (!i)
                    return [];
                if (i.fn)
                    return [i.fn];
                for (var n = 0, a = i.length, s = new Array(a); n < a; n++)
                    s[n] = i[n].fn;
                return s
            },
            o.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0
            },
            o.prototype.emit = function(t, e, i, n, a, s) {
                var o = r ? r + t : t;
                if (!this._events[o])
                    return !1;
                var l,
                    u,
                    h = this._events[o],
                    d = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), d) {
                    case 1:
                        return h.fn.call(h.context), !0;
                    case 2:
                        return h.fn.call(h.context, e), !0;
                    case 3:
                        return h.fn.call(h.context, e, i), !0;
                    case 4:
                        return h.fn.call(h.context, e, i, n), !0;
                    case 5:
                        return h.fn.call(h.context, e, i, n, a), !0;
                    case 6:
                        return h.fn.call(h.context, e, i, n, a, s), !0
                    }
                    for (u = 1, l = new Array(d - 1); u < d; u++)
                        l[u - 1] = arguments[u];
                    h.fn.apply(h.context, l)
                } else {
                    var c,
                        f = h.length;
                    for (u = 0; u < f; u++)
                        switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d) {
                        case 1:
                            h[u].fn.call(h[u].context);
                            break;
                        case 2:
                            h[u].fn.call(h[u].context, e);
                            break;
                        case 3:
                            h[u].fn.call(h[u].context, e, i);
                            break;
                        case 4:
                            h[u].fn.call(h[u].context, e, i, n);
                            break;
                        default:
                            if (!l)
                                for (c = 1, l = new Array(d - 1); c < d; c++)
                                    l[c - 1] = arguments[c];
                            h[u].fn.apply(h[u].context, l)
                        }
                }
                return !0
            },
            o.prototype.on = function(t, e, r) {
                return a(this, t, e, r, !1)
            },
            o.prototype.once = function(t, e, r) {
                return a(this, t, e, r, !0)
            },
            o.prototype.removeListener = function(t, e, i, n) {
                var a = r ? r + t : t;
                if (!this._events[a])
                    return this;
                if (!e)
                    return s(this, a), this;
                var o = this._events[a];
                if (o.fn)
                    o.fn !== e || n && !o.once || i && o.context !== i || s(this, a);
                else {
                    for (var l = 0, u = [], h = o.length; l < h; l++)
                        (o[l].fn !== e || n && !o[l].once || i && o[l].context !== i) && u.push(o[l]);
                    u.length ? this._events[a] = 1 === u.length ? u[0] : u : s(this, a)
                }
                return this
            },
            o.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new i, this._eventsCount = 0), this
            },
            o.prototype.off = o.prototype.removeListener,
            o.prototype.addListener = o.prototype.on,
            o.prefixed = r,
            o.EventEmitter = o,
            t.exports = o
        }(nn);
        var an = p(nn.exports);
        function sn(t, e) {
            if (!((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment))
                return !1;
            var r,
                i = [],
                n = e.remuxResult,
                a = n.audio,
                s = n.video;
            return a && on(i, a), s && on(i, s), t.postMessage({
                event: "transmuxComplete",
                data: e
            }, i), !0
        }
        function on(t, e) {
            e.data1 && t.push(e.data1.buffer),
            e.data2 && t.push(e.data2.buffer)
        }
        function ln(t, e, r) {
            e.reduce((function(e, r) {
                return sn(t, r) || e
            }), !1) || t.postMessage({
                event: "transmuxComplete",
                data: e[0]
            }),
            t.postMessage({
                event: "flush",
                data: r
            })
        }
        void 0 !== e && e && function(t) {
            var e = new an,
                r = function(e, r) {
                    t.postMessage({
                        event: e,
                        data: r
                    })
                };
            e.on(S.FRAG_DECRYPTED, r),
            e.on(S.ERROR, r);
            var i = function() {
                var t = function(t) {
                    var e = function(e) {
                        r("workerLog", {
                            logType: t,
                            message: e
                        })
                    };
                    w[t] = e
                };
                for (var e in w)
                    t(e)
            };
            t.addEventListener("message", (function(n) {
                var a = n.data;
                switch (a.cmd) {
                case "init":
                    var s = JSON.parse(a.config);
                    t.transmuxer = new Ji(e, a.typeSupported, s, a.vendor, a.id),
                    I(s.debug, a.id),
                    i(),
                    r("init", null);
                    break;
                case "configure":
                    t.transmuxer.configure(a.config);
                    break;
                case "demux":
                    var o = t.transmuxer.push(a.data, a.decryptdata, a.chunkMeta, a.state);
                    tn(o) ? (t.transmuxer.async = !0, o.then((function(e) {
                        sn(t, e)
                    })).catch((function(t) {
                        r(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.FRAG_PARSING_ERROR,
                            chunkMeta: a.chunkMeta,
                            fatal: !1,
                            error: t,
                            err: t,
                            reason: "transmuxer-worker push error"
                        })
                    }))) : (t.transmuxer.async = !1, sn(t, o));
                    break;
                case "flush":
                    var l = a.chunkMeta,
                        u = t.transmuxer.flush(l);
                    tn(u) || t.transmuxer.async ? (tn(u) || (u = Promise.resolve(u)), u.then((function(e) {
                        ln(t, e, l)
                    })).catch((function(t) {
                        r(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.FRAG_PARSING_ERROR,
                            chunkMeta: a.chunkMeta,
                            fatal: !1,
                            error: t,
                            err: t,
                            reason: "transmuxer-worker flush error"
                        })
                    }))) : ln(t, u, l)
                }
            }))
        }(self);
        var un = qt() || {
                isTypeSupported: function() {
                    return !1
                }
            },
            hn = function() {
                function e(e, r, i, n) {
                    var a = this;
                    this.error = null,
                    this.hls = void 0,
                    this.id = void 0,
                    this.observer = void 0,
                    this.frag = null,
                    this.part = null,
                    this.useWorker = void 0,
                    this.workerContext = null,
                    this.onwmsg = void 0,
                    this.transmuxer = null,
                    this.onTransmuxComplete = void 0,
                    this.onFlush = void 0;
                    var s = e.config;
                    this.hls = e,
                    this.id = r,
                    this.useWorker = !!s.enableWorker,
                    this.onTransmuxComplete = i,
                    this.onFlush = n;
                    var o = function(t, e) {
                        (e = e || {}).frag = a.frag,
                        e.id = a.id,
                        t === S.ERROR && (a.error = e.error),
                        a.hls.trigger(t, e)
                    };
                    this.observer = new an,
                    this.observer.on(S.FRAG_DECRYPTED, o),
                    this.observer.on(S.ERROR, o);
                    var l,
                        u,
                        h,
                        d,
                        c = {
                            mp4: un.isTypeSupported("video/mp4"),
                            mpeg: un.isTypeSupported("audio/mpeg"),
                            mp3: un.isTypeSupported('audio/mp4; codecs="mp3"')
                        },
                        f = navigator.vendor;
                    if (!this.useWorker || "undefined" == typeof Worker || (s.workerPath, 0))
                        this.transmuxer = new Ji(this.observer, c, s, f, r);
                    else
                        try {
                            s.workerPath ? (w.log("loading Web Worker " + s.workerPath + ' for "' + r + '"'), this.workerContext = (h = s.workerPath, d = new self.URL(h, self.location.href).href, {
                                worker: new self.Worker(d),
                                scriptURL: d
                            })) : (w.log('injecting Web Worker for "' + r + '"'), this.workerContext = (l = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + t.toString() + ")(true);"], {
                                type: "text/javascript"
                            }), u = self.URL.createObjectURL(l), {
                                worker: new self.Worker(u),
                                objectURL: u
                            })),
                            this.onwmsg = function(t) {
                                return a.onWorkerMessage(t)
                            };
                            var g = this.workerContext.worker;
                            g.addEventListener("message", this.onwmsg),
                            g.onerror = function(t) {
                                var e = new Error(t.message + "  (" + t.filename + ":" + t.lineno + ")");
                                s.enableWorker = !1,
                                w.warn('Error in "' + r + '" Web Worker, fallback to inline'),
                                a.hls.trigger(S.ERROR, {
                                    type: L.OTHER_ERROR,
                                    details: R.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: "demuxerWorker",
                                    error: e
                                })
                            },
                            g.postMessage({
                                cmd: "init",
                                typeSupported: c,
                                vendor: f,
                                id: r,
                                config: JSON.stringify(s)
                            })
                        } catch (t) {
                            w.warn('Error setting up "' + r + '" Web Worker, fallback to inline', t),
                            this.resetWorker(),
                            this.error = null,
                            this.transmuxer = new Ji(this.observer, c, s, f, r)
                        }
                }
                var r = e.prototype;
                return r.resetWorker = function() {
                    if (this.workerContext) {
                        var t = this.workerContext,
                            e = t.worker,
                            r = t.objectURL;
                        r && self.URL.revokeObjectURL(r),
                        e.removeEventListener("message", this.onwmsg),
                        e.onerror = null,
                        e.terminate(),
                        this.workerContext = null
                    }
                }, r.destroy = function() {
                    if (this.workerContext)
                        this.resetWorker(),
                        this.onwmsg = void 0;
                    else {
                        var t = this.transmuxer;
                        t && (t.destroy(), this.transmuxer = null)
                    }
                    var e = this.observer;
                    e && e.removeAllListeners(),
                    this.frag = null,
                    this.observer = null,
                    this.hls = null
                }, r.push = function(t, e, r, i, n, a, s, o, l, u) {
                    var h,
                        d,
                        c = this;
                    l.transmuxing.start = self.performance.now();
                    var f = this.transmuxer,
                        g = a ? a.start : n.start,
                        v = n.decryptdata,
                        m = this.frag,
                        p = !(m && n.cc === m.cc),
                        y = !(m && l.level === m.level),
                        T = m ? l.sn - m.sn : -1,
                        E = this.part ? l.part - this.part.index : -1,
                        S = 0 === T && l.id > 1 && l.id === (null == m ? void 0 : m.stats.chunkCount),
                        L = !y && (1 === T || 0 === T && (1 === E || S && E <= 0)),
                        R = self.performance.now();
                    (y || T || 0 === n.stats.parsing.start) && (n.stats.parsing.start = R),
                    !a || !E && L || (a.stats.parsing.start = R);
                    var A = !(m && (null == (h = n.initSegment) ? void 0 : h.url) === (null == (d = m.initSegment) ? void 0 : d.url)),
                        k = new rn(p, L, o, y, g, A);
                    if (!L || p || A) {
                        w.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + l.sn + " p: " + l.part + " level: " + l.level + " id: " + l.id + "\n        discontinuity: " + p + "\n        trackSwitch: " + y + "\n        contiguous: " + L + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + g + "\n        initSegmentChange: " + A);
                        var b = new en(r, i, e, s, u);
                        this.configureTransmuxer(b)
                    }
                    if (this.frag = n, this.part = a, this.workerContext)
                        this.workerContext.worker.postMessage({
                            cmd: "demux",
                            data: t,
                            decryptdata: v,
                            chunkMeta: l,
                            state: k
                        }, t instanceof ArrayBuffer ? [t] : []);
                    else if (f) {
                        var D = f.push(t, v, l, k);
                        tn(D) ? (f.async = !0, D.then((function(t) {
                            c.handleTransmuxComplete(t)
                        })).catch((function(t) {
                            c.transmuxerError(t, l, "transmuxer-interface push error")
                        }))) : (f.async = !1, this.handleTransmuxComplete(D))
                    }
                }, r.flush = function(t) {
                    var e = this;
                    t.transmuxing.start = self.performance.now();
                    var r = this.transmuxer;
                    if (this.workerContext)
                        this.workerContext.worker.postMessage({
                            cmd: "flush",
                            chunkMeta: t
                        });
                    else if (r) {
                        var i = r.flush(t);
                        tn(i) || r.async ? (tn(i) || (i = Promise.resolve(i)), i.then((function(r) {
                            e.handleFlushResult(r, t)
                        })).catch((function(r) {
                            e.transmuxerError(r, t, "transmuxer-interface flush error")
                        }))) : this.handleFlushResult(i, t)
                    }
                }, r.transmuxerError = function(t, e, r) {
                    this.hls && (this.error = t, this.hls.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.FRAG_PARSING_ERROR,
                        chunkMeta: e,
                        fatal: !1,
                        error: t,
                        err: t,
                        reason: r
                    }))
                }, r.handleFlushResult = function(t, e) {
                    var r = this;
                    t.forEach((function(t) {
                        r.handleTransmuxComplete(t)
                    })),
                    this.onFlush(e)
                }, r.onWorkerMessage = function(t) {
                    var e = t.data,
                        r = this.hls;
                    switch (e.event) {
                    case "init":
                        var i,
                            n = null == (i = this.workerContext) ? void 0 : i.objectURL;
                        n && self.URL.revokeObjectURL(n);
                        break;
                    case "transmuxComplete":
                        this.handleTransmuxComplete(e.data);
                        break;
                    case "flush":
                        this.onFlush(e.data);
                        break;
                    case "workerLog":
                        w[e.data.logType] && w[e.data.logType](e.data.message);
                        break;
                    default:
                        e.data = e.data || {},
                        e.data.frag = this.frag,
                        e.data.id = this.id,
                        r.trigger(e.event, e.data)
                    }
                }, r.configureTransmuxer = function(t) {
                    var e = this.transmuxer;
                    this.workerContext ? this.workerContext.worker.postMessage({
                        cmd: "configure",
                        config: t
                    }) : e && e.configure(t)
                }, r.handleTransmuxComplete = function(t) {
                    t.chunkMeta.transmuxing.end = self.performance.now(),
                    this.onTransmuxComplete(t)
                }, e
            }(),
            dn = function() {
                function t(t, e, r, i) {
                    this.config = void 0,
                    this.media = null,
                    this.fragmentTracker = void 0,
                    this.hls = void 0,
                    this.nudgeRetry = 0,
                    this.stallReported = !1,
                    this.stalled = null,
                    this.moved = !1,
                    this.seeking = !1,
                    this.config = t,
                    this.media = e,
                    this.fragmentTracker = r,
                    this.hls = i
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.media = null,
                    this.hls = this.fragmentTracker = null
                }, e.poll = function(t, e) {
                    var r = this.config,
                        i = this.media,
                        n = this.stalled;
                    if (null !== i) {
                        var a = i.currentTime,
                            s = i.seeking,
                            o = this.seeking && !s,
                            l = !this.seeking && s;
                        if (this.seeking = s, a === t) {
                            if (l || o)
                                this.stalled = null;
                            else if (!(i.paused && !s || i.ended || 0 === i.playbackRate) && Ir.getBuffered(i).length) {
                                var u = Ir.bufferInfo(i, a, 0),
                                    h = u.len > 0,
                                    d = u.nextStart || 0;
                                if (h || d) {
                                    if (s) {
                                        var c = u.len > 2,
                                            f = !d || e && e.start <= a || d - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                                        if (c || f)
                                            return;
                                        this.moved = !1
                                    }
                                    if (!this.moved && null !== this.stalled) {
                                        var g,
                                            v = Math.max(d, u.start || 0) - a,
                                            m = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                            p = (null == m || null == (g = m.details) ? void 0 : g.live) ? 2 * m.details.targetduration : 2,
                                            y = this.fragmentTracker.getPartialFragment(a);
                                        if (v > 0 && (v <= p || y))
                                            return void this._trySkipBufferHole(y)
                                    }
                                    var T = self.performance.now();
                                    if (null !== n) {
                                        var E = T - n;
                                        if (s || !(E >= 250) || (this._reportStall(u), this.media)) {
                                            var S = Ir.bufferInfo(i, a, r.maxBufferHole);
                                            this._tryFixBufferStall(S, E)
                                        }
                                    } else
                                        this.stalled = T
                                }
                            }
                        } else if (this.moved = !0, null !== n) {
                            if (this.stallReported) {
                                var L = self.performance.now() - n;
                                w.warn("playback not stuck anymore @" + a + ", after " + Math.round(L) + "ms"),
                                this.stallReported = !1
                            }
                            this.stalled = null,
                            this.nudgeRetry = 0
                        }
                    }
                }, e._tryFixBufferStall = function(t, e) {
                    var r = this.config,
                        i = this.fragmentTracker,
                        n = this.media;
                    if (null !== n) {
                        var a = n.currentTime,
                            s = i.getPartialFragment(a);
                        if (s && (this._trySkipBufferHole(s) || !this.media))
                            return;
                        (t.len > r.maxBufferHole || t.nextStart && t.nextStart - a < r.maxBufferHole) && e > 1e3 * r.highBufferWatchdogPeriod && (w.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                    }
                }, e._reportStall = function(t) {
                    var e = this.hls,
                        r = this.media;
                    if (!this.stallReported && r) {
                        this.stallReported = !0;
                        var i = new Error("Playback stalling at @" + r.currentTime + " due to low buffer (" + JSON.stringify(t) + ")");
                        w.warn(i.message),
                        e.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.BUFFER_STALLED_ERROR,
                            fatal: !1,
                            error: i,
                            buffer: t.len
                        })
                    }
                }, e._trySkipBufferHole = function(t) {
                    var e = this.config,
                        r = this.hls,
                        i = this.media;
                    if (null === i)
                        return 0;
                    var n = i.currentTime,
                        a = Ir.bufferInfo(i, n, 0),
                        s = n < a.start ? a.start : a.nextStart;
                    if (s) {
                        var o = a.len <= e.maxBufferHole,
                            l = a.len > 0 && a.len < 1 && i.readyState < 3,
                            u = s - n;
                        if (u > 0 && (o || l)) {
                            if (u > e.maxBufferHole) {
                                var h = this.fragmentTracker,
                                    d = !1;
                                if (0 === n) {
                                    var c = h.getAppendedFrag(0, ge);
                                    c && s < c.end && (d = !0)
                                }
                                if (!d) {
                                    var f = t || h.getAppendedFrag(n, ge);
                                    if (f) {
                                        for (var g = !1, v = f.end; v < s;) {
                                            var m = h.getPartialFragment(v);
                                            if (!m) {
                                                g = !0;
                                                break
                                            }
                                            v += m.duration
                                        }
                                        if (g)
                                            return 0
                                    }
                                }
                            }
                            var p = Math.max(s + .05, n + .1);
                            if (w.warn("skipping hole, adjusting currentTime from " + n + " to " + p), this.moved = !0, this.stalled = null, i.currentTime = p, t && !t.gap) {
                                var y = new Error("fragment loaded with buffer holes, seeking from " + n + " to " + p);
                                r.trigger(S.ERROR, {
                                    type: L.MEDIA_ERROR,
                                    details: R.BUFFER_SEEK_OVER_HOLE,
                                    fatal: !1,
                                    error: y,
                                    reason: y.message,
                                    frag: t
                                })
                            }
                            return p
                        }
                    }
                    return 0
                }, e._tryNudgeBuffer = function() {
                    var t = this.config,
                        e = this.hls,
                        r = this.media,
                        i = this.nudgeRetry;
                    if (null !== r) {
                        var n = r.currentTime;
                        if (this.nudgeRetry++, i < t.nudgeMaxRetry) {
                            var a = n + (i + 1) * t.nudgeOffset,
                                s = new Error("Nudging 'currentTime' from " + n + " to " + a);
                            w.warn(s.message),
                            r.currentTime = a,
                            e.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.BUFFER_NUDGE_ON_STALL,
                                error: s,
                                fatal: !1
                            })
                        } else {
                            var o = new Error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges");
                            w.error(o.message),
                            e.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.BUFFER_STALLED_ERROR,
                                error: o,
                                fatal: !0
                            })
                        }
                    }
                }, t
            }(),
            cn = function(t) {
                function e(e, r, i) {
                    var n;
                    return (n = t.call(this, e, r, i, "[stream-controller]", ge) || this).audioCodecSwap = !1, n.gapController = null, n.level = -1, n._forceStartLoad = !1, n.altAudio = !1, n.audioOnly = !1, n.fragPlaying = null, n.onvplaying = null, n.onvseeked = null, n.fragLastKbps = 0, n.couldBacktrack = !1, n.backtrackFragment = null, n.audioCodecSwitch = !1, n.videoBuffer = null, n._registerListeners(), n
                }
                l(e, t);
                var r = e.prototype;
                return r._registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(S.LEVEL_LOADING, this.onLevelLoading, this),
                    t.on(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.on(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                    t.on(S.ERROR, this.onError, this),
                    t.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    t.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                    t.on(S.BUFFER_CREATED, this.onBufferCreated, this),
                    t.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this),
                    t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
                }, r._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.off(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.off(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                    t.off(S.ERROR, this.onError, this),
                    t.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    t.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                    t.off(S.BUFFER_CREATED, this.onBufferCreated, this),
                    t.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this),
                    t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
                }, r.onHandlerDestroying = function() {
                    this._unregisterListeners(),
                    this.onMediaDetaching()
                }, r.startLoad = function(t) {
                    if (this.levels) {
                        var e = this.lastCurrentTime,
                            r = this.hls;
                        if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                            var i = r.startLevel;
                            -1 === i && (r.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel),
                            this.level = r.nextLoadLevel = i,
                            this.loadedmetadata = !1
                        }
                        e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e),
                        this.state = Kr,
                        this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t,
                        this.tick()
                    } else
                        this._forceStartLoad = !0,
                        this.state = Gr
                }, r.stopLoad = function() {
                    this._forceStartLoad = !1,
                    t.prototype.stopLoad.call(this)
                }, r.doTick = function() {
                    switch (this.state) {
                    case $r:
                        var t,
                            e = this.levels,
                            r = this.level,
                            i = null == e || null == (t = e[r]) ? void 0 : t.details;
                        if (i && (!i.live || this.levelLastLoaded === this.level)) {
                            if (this.waitForCdnTuneIn(i))
                                break;
                            this.state = Kr;
                            break
                        }
                        if (this.hls.nextLoadLevel !== this.level) {
                            this.state = Kr;
                            break
                        }
                        break;
                    case Yr:
                        var n,
                            a = self.performance.now(),
                            s = this.retryDate;
                        (!s || a >= s || null != (n = this.media) && n.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = Kr)
                    }
                    this.state === Kr && this.doTickIdle(),
                    this.onTickEnd()
                }, r.onTickEnd = function() {
                    t.prototype.onTickEnd.call(this),
                    this.checkBuffer(),
                    this.checkFragmentChanged()
                }, r.doTickIdle = function() {
                    var t = this.hls,
                        e = this.levelLastLoaded,
                        r = this.levels,
                        i = this.media,
                        n = t.config,
                        a = t.nextLoadLevel;
                    if (null !== e && (i || !this.startFragRequested && n.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && null != r && r[a]) {
                        var s = r[a],
                            o = this.getMainFwdBufferInfo();
                        if (null !== o) {
                            var l = this.getLevelDetails();
                            if (l && this._streamEnded(o, l)) {
                                var u = {};
                                return this.altAudio && (u.type = "video"), this.hls.trigger(S.BUFFER_EOS, u), void (this.state = Xr)
                            }
                            t.loadLevel !== a && -1 === t.manualLevel && this.log("Adapting to level " + a + " from level " + this.level),
                            this.level = t.nextLoadLevel = a;
                            var h = s.details;
                            if (!h || this.state === $r || h.live && this.levelLastLoaded !== a)
                                return this.level = a, void (this.state = $r);
                            var d = o.len,
                                c = this.getMaxBufferLength(s.maxBitrate);
                            if (!(d >= c)) {
                                this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
                                var f = this.backtrackFragment ? this.backtrackFragment.start : o.end,
                                    g = this.getNextFragment(f, h);
                                if (this.couldBacktrack && !this.fragPrevious && g && "initSegment" !== g.sn && this.fragmentTracker.getState(g) !== mr) {
                                    var v,
                                        m = (null != (v = this.backtrackFragment) ? v : g).sn - h.startSN,
                                        p = h.fragments[m - 1];
                                    p && g.cc === p.cc && (g = p, this.fragmentTracker.removeFragment(p))
                                } else
                                    this.backtrackFragment && o.len && (this.backtrackFragment = null);
                                if (g && this.isLoopLoading(g, f)) {
                                    if (!g.gap) {
                                        var y = this.audioOnly && !this.altAudio ? O : N,
                                            T = (y === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                                        T && this.afterBufferFlushed(T, y, ge)
                                    }
                                    g = this.getNextFragmentLoopLoading(g, h, o, ge, c)
                                }
                                g && (!g.initSegment || g.initSegment.data || this.bitrateTest || (g = g.initSegment), this.loadFragment(g, s, f))
                            }
                        }
                    }
                }, r.loadFragment = function(e, r, i) {
                    var n = this.fragmentTracker.getState(e);
                    this.fragCurrent = e,
                    n === fr || n === vr ? "initSegment" === e.sn ? this._loadInitSegment(e, r) : this.bitrateTest ? (this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e, r)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : this.clearTrackerIfNeeded(e)
                }, r.getBufferedFrag = function(t) {
                    return this.fragmentTracker.getBufferedFrag(t, ge)
                }, r.followingBufferedFrag = function(t) {
                    return t ? this.getBufferedFrag(t.end + .5) : null
                }, r.immediateLevelSwitch = function() {
                    this.abortCurrentFrag(),
                    this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                }, r.nextLevelSwitch = function() {
                    var t = this.levels,
                        e = this.media;
                    if (null != e && e.readyState) {
                        var r,
                            i = this.getAppendedFrag(e.currentTime);
                        i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
                        var n = this.getLevelDetails();
                        if (null != n && n.live) {
                            var a = this.getMainFwdBufferInfo();
                            if (!a || a.len < 2 * n.targetduration)
                                return
                        }
                        if (!e.paused && t) {
                            var s = t[this.hls.nextLoadLevel],
                                o = this.fragLastKbps;
                            r = o && this.fragCurrent ? this.fragCurrent.duration * s.maxBitrate / (1e3 * o) + 1 : 0
                        } else
                            r = 0;
                        var l = this.getBufferedFrag(e.currentTime + r);
                        if (l) {
                            var u = this.followingBufferedFrag(l);
                            if (u) {
                                this.abortCurrentFrag();
                                var h = u.maxStartPTS ? u.maxStartPTS : u.start,
                                    d = u.duration,
                                    c = Math.max(l.end, h + Math.min(Math.max(d - this.config.maxFragLookUpTolerance, .5 * d), .75 * d));
                                this.flushMainBuffer(c, Number.POSITIVE_INFINITY)
                            }
                        }
                    }
                }, r.abortCurrentFrag = function() {
                    var t = this.fragCurrent;
                    switch (this.fragCurrent = null, this.backtrackFragment = null, t && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.state) {
                    case Hr:
                    case Vr:
                    case Yr:
                    case jr:
                    case qr:
                        this.state = Kr
                    }
                    this.nextLoadPosition = this.getLoadPosition()
                }, r.flushMainBuffer = function(e, r) {
                    t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
                }, r.onMediaAttached = function(e, r) {
                    t.prototype.onMediaAttached.call(this, e, r);
                    var i = r.media;
                    this.onvplaying = this.onMediaPlaying.bind(this),
                    this.onvseeked = this.onMediaSeeked.bind(this),
                    i.addEventListener("playing", this.onvplaying),
                    i.addEventListener("seeked", this.onvseeked),
                    this.gapController = new dn(this.config, i, this.fragmentTracker, this.hls)
                }, r.onMediaDetaching = function() {
                    var e = this.media;
                    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null),
                    this.fragPlaying = null,
                    this.gapController && (this.gapController.destroy(), this.gapController = null),
                    t.prototype.onMediaDetaching.call(this)
                }, r.onMediaPlaying = function() {
                    this.tick()
                }, r.onMediaSeeked = function() {
                    var t = this.media,
                        e = t ? t.currentTime : null;
                    E(e) && this.log("Media seeked to " + e.toFixed(3));
                    var r = this.getMainFwdBufferInfo();
                    null !== r && 0 !== r.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (r ? r.len : "empty") + ")")
                }, r.onManifestLoading = function() {
                    this.log("Trigger BUFFER_RESET"),
                    this.hls.trigger(S.BUFFER_RESET, void 0),
                    this.fragmentTracker.removeAllFragments(),
                    this.couldBacktrack = !1,
                    this.startPosition = this.lastCurrentTime = 0,
                    this.levels = this.fragPlaying = this.backtrackFragment = null,
                    this.altAudio = this.audioOnly = !1
                }, r.onManifestParsed = function(t, e) {
                    var r,
                        i,
                        n,
                        a = !1,
                        s = !1;
                    e.levels.forEach((function(t) {
                        (r = t.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (a = !0), -1 !== r.indexOf("mp4a.40.5") && (s = !0))
                    })),
                    this.audioCodecSwitch = a && s && !("function" == typeof (null == (n = Zr()) || null == (i = n.prototype) ? void 0 : i.changeType)),
                    this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                    this.levels = e.levels,
                    this.startFragRequested = !1
                }, r.onLevelLoading = function(t, e) {
                    var r = this.levels;
                    if (r && this.state === Kr) {
                        var i = r[e.level];
                        (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = $r)
                    }
                }, r.onLevelLoaded = function(t, e) {
                    var r,
                        i = this.levels,
                        n = e.level,
                        a = e.details,
                        s = a.totalduration;
                    if (i) {
                        this.log("Level " + n + " loaded [" + a.startSN + "," + a.endSN + "]" + (a.lastPartSn ? "[part-" + a.lastPartSn + "-" + a.lastPartIndex + "]" : "") + ", cc [" + a.startCC + ", " + a.endCC + "] duration:" + s);
                        var o = i[n],
                            l = this.fragCurrent;
                        !l || this.state !== Vr && this.state !== Yr || l.level === e.level && l.urlId === o.urlId || !l.loader || this.abortCurrentFrag();
                        var u = 0;
                        if (a.live || null != (r = o.details) && r.live) {
                            if (this.checkLiveUpdate(a), a.deltaUpdateFailed)
                                return;
                            u = this.alignPlaylists(a, o.details)
                        }
                        if (o.details = a, this.levelLastLoaded = n, this.hls.trigger(S.LEVEL_UPDATED, {
                            details: a,
                            level: n
                        }), this.state === $r) {
                            if (this.waitForCdnTuneIn(a))
                                return;
                            this.state = Kr
                        }
                        this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, u),
                        this.tick()
                    } else
                        this.warn("Levels were reset while loading level " + n)
                }, r._handleFragmentLoadProgress = function(t) {
                    var e,
                        r = t.frag,
                        i = t.part,
                        n = t.payload,
                        a = this.levels;
                    if (a) {
                        var s = a[r.level],
                            o = s.details;
                        if (!o)
                            return this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset"), void this.fragmentTracker.removeFragment(r);
                        var l = s.videoCodec,
                            u = o.PTSKnown || !o.live,
                            h = null == (e = r.initSegment) ? void 0 : e.data,
                            d = this._getAudioCodec(s),
                            c = this.transmuxer = this.transmuxer || new hn(this.hls, ge, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                            f = i ? i.index : -1,
                            g = -1 !== f,
                            v = new wr(r.level, r.sn, r.stats.chunkCount, n.byteLength, f, g),
                            m = this.initPTS[r.cc];
                        c.push(n, h, d, l, r, i, o.totalduration, u, v, m)
                    } else
                        this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
                }, r.onAudioTrackSwitching = function(t, e) {
                    var r = this.altAudio;
                    if (!e.url) {
                        if (this.mediaBuffer !== this.media) {
                            this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),
                            this.mediaBuffer = this.media;
                            var i = this.fragCurrent;
                            i && (this.log("Switching to main audio track, cancel main fragment load"), i.abortRequests(), this.fragmentTracker.removeFragment(i)),
                            this.resetTransmuxer(),
                            this.resetLoadingState()
                        } else
                            this.audioOnly && this.resetTransmuxer();
                        var n = this.hls;
                        r && (n.trigger(S.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: null
                        }), this.fragmentTracker.removeAllFragments()),
                        n.trigger(S.AUDIO_TRACK_SWITCHED, e)
                    }
                }, r.onAudioTrackSwitched = function(t, e) {
                    var r = e.id,
                        i = !!this.hls.audioTracks[r].url;
                    if (i) {
                        var n = this.videoBuffer;
                        n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                    }
                    this.altAudio = i,
                    this.tick()
                }, r.onBufferCreated = function(t, e) {
                    var r,
                        i,
                        n = e.tracks,
                        a = !1;
                    for (var s in n) {
                        var o = n[s];
                        if ("main" === o.id) {
                            if (i = s, r = o, "video" === s) {
                                var l = n[s];
                                l && (this.videoBuffer = l.buffer)
                            }
                        } else
                            a = !0
                    }
                    a && r ? (this.log("Alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                }, r.onFragBuffered = function(t, e) {
                    var r = e.frag,
                        i = e.part;
                    if (!r || r.type === ge) {
                        if (this.fragContextChanged(r))
                            return this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === qr && (this.state = Kr));
                        var n = i ? i.stats : r.stats;
                        this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)),
                        "initSegment" !== r.sn && (this.fragPrevious = r),
                        this.fragBufferedComplete(r, i)
                    }
                }, r.onError = function(t, e) {
                    var r;
                    if (e.fatal)
                        this.state = zr;
                    else
                        switch (e.details) {
                        case R.FRAG_GAP:
                        case R.FRAG_PARSING_ERROR:
                        case R.FRAG_DECRYPT_ERROR:
                        case R.FRAG_LOAD_ERROR:
                        case R.FRAG_LOAD_TIMEOUT:
                        case R.KEY_LOAD_ERROR:
                        case R.KEY_LOAD_TIMEOUT:
                            this.onFragmentOrKeyLoadError(ge, e);
                            break;
                        case R.LEVEL_LOAD_ERROR:
                        case R.LEVEL_LOAD_TIMEOUT:
                        case R.LEVEL_PARSING_ERROR:
                            e.levelRetry || this.state !== $r || (null == (r = e.context) ? void 0 : r.type) !== de || (this.state = Kr);
                            break;
                        case R.BUFFER_FULL_ERROR:
                            if (!e.parent || "main" !== e.parent)
                                return;
                            this.reduceLengthAndFlushBuffer(e) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                            break;
                        case R.INTERNAL_EXCEPTION:
                            this.recoverWorkerError(e)
                        }
                }, r.checkBuffer = function() {
                    var t = this.media,
                        e = this.gapController;
                    if (t && e && t.readyState) {
                        if (this.loadedmetadata || !Ir.getBuffered(t).length) {
                            var r = this.state !== Kr ? this.fragCurrent : null;
                            e.poll(this.lastCurrentTime, r)
                        }
                        this.lastCurrentTime = t.currentTime
                    }
                }, r.onFragLoadEmergencyAborted = function() {
                    this.state = Kr,
                    this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
                    this.tickImmediate()
                }, r.onBufferFlushed = function(t, e) {
                    var r = e.type;
                    if (r !== O || this.audioOnly && !this.altAudio) {
                        var i = (r === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                        this.afterBufferFlushed(i, r, ge)
                    }
                }, r.onLevelsUpdated = function(t, e) {
                    this.levels = e.levels
                }, r.swapAudioCodec = function() {
                    this.audioCodecSwap = !this.audioCodecSwap
                }, r.seekToStartPos = function() {
                    var t = this.media;
                    if (t) {
                        var e = t.currentTime,
                            r = this.startPosition;
                        if (r >= 0 && e < r) {
                            if (t.seeking)
                                return void this.log("could not seek to " + r + ", already seeking at " + e);
                            var i = Ir.getBuffered(t),
                                n = (i.length ? i.start(0) : 0) - r;
                            n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + n + " to match buffer start"), r += n, this.startPosition = r),
                            this.log("seek to target start position " + r + " from current time " + e),
                            t.currentTime = r
                        }
                    }
                }, r._getAudioCodec = function(t) {
                    var e = this.config.defaultAudioCodec || t.audioCodec;
                    return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
                }, r._loadBitrateTestFrag = function(t, e) {
                    var r = this;
                    t.bitrateTest = !0,
                    this._doFragLoad(t, e).then((function(i) {
                        var n = r.hls;
                        if (i && !r.fragContextChanged(t)) {
                            e.fragmentError = 0,
                            r.state = Kr,
                            r.startFragRequested = !1,
                            r.bitrateTest = !1;
                            var a = t.stats;
                            a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(),
                            n.trigger(S.FRAG_LOADED, i),
                            t.bitrateTest = !1
                        }
                    }))
                }, r._handleTransmuxComplete = function(t) {
                    var e,
                        r = "main",
                        i = this.hls,
                        n = t.remuxResult,
                        a = t.chunkMeta,
                        s = this.getCurrentContext(a);
                    if (s) {
                        var o = s.frag,
                            l = s.part,
                            u = s.level,
                            h = n.video,
                            d = n.text,
                            c = n.id3,
                            f = n.initSegment,
                            g = u.details,
                            v = this.altAudio ? void 0 : n.audio;
                        if (this.fragContextChanged(o))
                            this.fragmentTracker.removeFragment(o);
                        else {
                            if (this.state = jr, f) {
                                if (null != f && f.tracks) {
                                    var m = o.initSegment || o;
                                    this._bufferInitSegment(u, f.tracks, m, a),
                                    i.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
                                        frag: m,
                                        id: r,
                                        tracks: f.tracks
                                    })
                                }
                                var p = f.initPTS,
                                    y = f.timescale;
                                E(p) && (this.initPTS[o.cc] = {
                                    baseTime: p,
                                    timescale: y
                                }, i.trigger(S.INIT_PTS_FOUND, {
                                    frag: o,
                                    id: r,
                                    initPTS: p,
                                    timescale: y
                                }))
                            }
                            if (h && g && "initSegment" !== o.sn) {
                                var T = g.fragments[o.sn - 1 - g.startSN],
                                    L = o.sn === g.startSN,
                                    R = !T || o.cc > T.cc;
                                if (!1 !== n.independent) {
                                    var A = h.startPTS,
                                        k = h.endPTS,
                                        b = h.startDTS,
                                        D = h.endDTS;
                                    if (l)
                                        l.elementaryStreams[h.type] = {
                                            startPTS: A,
                                            endPTS: k,
                                            startDTS: b,
                                            endDTS: D
                                        };
                                    else if (h.firstKeyFrame && h.independent && 1 === a.id && !R && (this.couldBacktrack = !0), h.dropped && h.independent) {
                                        var I = this.getMainFwdBufferInfo(),
                                            w = (I ? I.end : this.getLoadPosition()) + this.config.maxBufferHole,
                                            C = h.firstKeyFramePTS ? h.firstKeyFramePTS : A;
                                        if (!L && w < C - this.config.maxBufferHole && !R)
                                            return void this.backtrack(o);
                                        R && (o.gap = !0),
                                        o.setElementaryStreamInfo(h.type, o.start, k, o.start, D, !0)
                                    }
                                    o.setElementaryStreamInfo(h.type, A, k, b, D),
                                    this.backtrackFragment && (this.backtrackFragment = o),
                                    this.bufferFragmentData(h, o, l, a, L || R)
                                } else {
                                    if (!L && !R)
                                        return void this.backtrack(o);
                                    o.gap = !0
                                }
                            }
                            if (v) {
                                var _ = v.startPTS,
                                    P = v.endPTS,
                                    x = v.startDTS,
                                    F = v.endDTS;
                                l && (l.elementaryStreams[O] = {
                                    startPTS: _,
                                    endPTS: P,
                                    startDTS: x,
                                    endDTS: F
                                }),
                                o.setElementaryStreamInfo(O, _, P, x, F),
                                this.bufferFragmentData(v, o, l, a)
                            }
                            if (g && null != c && null != (e = c.samples) && e.length) {
                                var M = {
                                    id: r,
                                    frag: o,
                                    details: g,
                                    samples: c.samples
                                };
                                i.trigger(S.FRAG_PARSING_METADATA, M)
                            }
                            if (g && d) {
                                var N = {
                                    id: r,
                                    frag: o,
                                    details: g,
                                    samples: d.samples
                                };
                                i.trigger(S.FRAG_PARSING_USERDATA, N)
                            }
                        }
                    } else
                        this.resetWhenMissingContext(a)
                }, r._bufferInitSegment = function(t, e, r, i) {
                    var n = this;
                    if (this.state === jr) {
                        this.audioOnly = !!e.audio && !e.video,
                        this.altAudio && !this.audioOnly && delete e.audio;
                        var a = e.audio,
                            s = e.video,
                            o = e.audiovideo;
                        if (a) {
                            var l = t.audioCodec,
                                u = navigator.userAgent.toLowerCase();
                            this.audioCodecSwitch && (l && (l = -1 !== l.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a.metadata.channelCount && -1 === u.indexOf("firefox") && (l = "mp4a.40.5")),
                            -1 !== u.indexOf("android") && "audio/mpeg" !== a.container && (l = "mp4a.40.2", this.log("Android: force audio codec to " + l)),
                            t.audioCodec && t.audioCodec !== l && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + l + '"'),
                            a.levelCodec = l,
                            a.id = "main",
                            this.log("Init audio buffer, container:" + a.container + ", codecs[selected/level/parsed]=[" + (l || "") + "/" + (t.audioCodec || "") + "/" + a.codec + "]")
                        }
                        s && (s.levelCodec = t.videoCodec, s.id = "main", this.log("Init video buffer, container:" + s.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + s.codec + "]")),
                        o && this.log("Init audiovideo buffer, container:" + o.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + o.codec + "]"),
                        this.hls.trigger(S.BUFFER_CODECS, e),
                        Object.keys(e).forEach((function(t) {
                            var a = e[t].initSegment;
                            null != a && a.byteLength && n.hls.trigger(S.BUFFER_APPENDING, {
                                type: t,
                                data: a,
                                frag: r,
                                part: null,
                                chunkMeta: i,
                                parent: r.type
                            })
                        })),
                        this.tick()
                    }
                }, r.getMainFwdBufferInfo = function() {
                    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, ge)
                }, r.backtrack = function(t) {
                    this.couldBacktrack = !0,
                    this.backtrackFragment = t,
                    this.resetTransmuxer(),
                    this.flushBufferGap(t),
                    this.fragmentTracker.removeFragment(t),
                    this.fragPrevious = null,
                    this.nextLoadPosition = t.start,
                    this.state = Kr
                }, r.checkFragmentChanged = function() {
                    var t = this.media,
                        e = null;
                    if (t && t.readyState > 1 && !1 === t.seeking) {
                        var r = t.currentTime;
                        if (Ir.isBuffered(t, r) ? e = this.getAppendedFrag(r) : Ir.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)), e) {
                            this.backtrackFragment = null;
                            var i = this.fragPlaying,
                                n = e.level;
                            i && e.sn === i.sn && i.level === n && e.urlId === i.urlId || (this.fragPlaying = e, this.hls.trigger(S.FRAG_CHANGED, {
                                frag: e
                            }), i && i.level === n || this.hls.trigger(S.LEVEL_SWITCHED, {
                                level: n
                            }))
                        }
                    }
                }, a(e, [{
                    key: "nextLevel",
                    get: function() {
                        var t = this.nextBufferedFrag;
                        return t ? t.level : -1
                    }
                }, {
                    key: "currentFrag",
                    get: function() {
                        var t = this.media;
                        return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
                    }
                }, {
                    key: "currentProgramDateTime",
                    get: function() {
                        var t = this.media;
                        if (t) {
                            var e = t.currentTime,
                                r = this.currentFrag;
                            if (r && E(e) && E(r.programDateTime)) {
                                var i = r.programDateTime + 1e3 * (e - r.start);
                                return new Date(i)
                            }
                        }
                        return null
                    }
                }, {
                    key: "currentLevel",
                    get: function() {
                        var t = this.currentFrag;
                        return t ? t.level : -1
                    }
                }, {
                    key: "nextBufferedFrag",
                    get: function() {
                        var t = this.currentFrag;
                        return t ? this.followingBufferedFrag(t) : null
                    }
                }, {
                    key: "forceStartLoad",
                    get: function() {
                        return this._forceStartLoad
                    }
                }]), e
            }(Jr),
            fn = function() {
                function t(t, e, r) {
                    void 0 === e && (e = 0),
                    void 0 === r && (r = 0),
                    this.halfLife = void 0,
                    this.alpha_ = void 0,
                    this.estimate_ = void 0,
                    this.totalWeight_ = void 0,
                    this.halfLife = t,
                    this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0,
                    this.estimate_ = e,
                    this.totalWeight_ = r
                }
                var e = t.prototype;
                return e.sample = function(t, e) {
                    var r = Math.pow(this.alpha_, t);
                    this.estimate_ = e * (1 - r) + r * this.estimate_,
                    this.totalWeight_ += t
                }, e.getTotalWeight = function() {
                    return this.totalWeight_
                }, e.getEstimate = function() {
                    if (this.alpha_) {
                        var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        if (t)
                            return this.estimate_ / t
                    }
                    return this.estimate_
                }, t
            }(),
            gn = function() {
                function t(t, e, r, i) {
                    void 0 === i && (i = 100),
                    this.defaultEstimate_ = void 0,
                    this.minWeight_ = void 0,
                    this.minDelayMs_ = void 0,
                    this.slow_ = void 0,
                    this.fast_ = void 0,
                    this.defaultTTFB_ = void 0,
                    this.ttfb_ = void 0,
                    this.defaultEstimate_ = r,
                    this.minWeight_ = .001,
                    this.minDelayMs_ = 50,
                    this.slow_ = new fn(t),
                    this.fast_ = new fn(e),
                    this.defaultTTFB_ = i,
                    this.ttfb_ = new fn(t)
                }
                var e = t.prototype;
                return e.update = function(t, e) {
                    var r = this.slow_,
                        i = this.fast_,
                        n = this.ttfb_;
                    r.halfLife !== t && (this.slow_ = new fn(t, r.getEstimate(), r.getTotalWeight())),
                    i.halfLife !== e && (this.fast_ = new fn(e, i.getEstimate(), i.getTotalWeight())),
                    n.halfLife !== t && (this.ttfb_ = new fn(t, n.getEstimate(), n.getTotalWeight()))
                }, e.sample = function(t, e) {
                    var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                        i = 8 * e / r;
                    this.fast_.sample(r, i),
                    this.slow_.sample(r, i)
                }, e.sampleTTFB = function(t) {
                    var e = t / 1e3,
                        r = Math.sqrt(2) * Math.exp(-Math.pow(e, 2) / 2);
                    this.ttfb_.sample(r, Math.max(t, 5))
                }, e.canEstimate = function() {
                    return this.fast_.getTotalWeight() >= this.minWeight_
                }, e.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }, e.getEstimateTTFB = function() {
                    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
                }, e.destroy = function() {}, t
            }(),
            vn = function() {
                function t(t) {
                    this.hls = void 0,
                    this.lastLevelLoadSec = 0,
                    this.lastLoadedFragLevel = 0,
                    this._nextAutoLevel = -1,
                    this.timer = -1,
                    this.onCheck = this._abandonRulesCheck.bind(this),
                    this.fragCurrent = null,
                    this.partCurrent = null,
                    this.bitrateTestDelay = 0,
                    this.bwEstimator = void 0,
                    this.hls = t;
                    var e = t.config;
                    this.bwEstimator = new gn(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate),
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.FRAG_LOADING, this.onFragLoading, this),
                    t.on(S.FRAG_LOADED, this.onFragLoaded, this),
                    t.on(S.FRAG_BUFFERED, this.onFragBuffered, this),
                    t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    t.on(S.LEVEL_LOADED, this.onLevelLoaded, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.FRAG_LOADING, this.onFragLoading, this),
                    t.off(S.FRAG_LOADED, this.onFragLoaded, this),
                    t.off(S.FRAG_BUFFERED, this.onFragBuffered, this),
                    t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    t.off(S.LEVEL_LOADED, this.onLevelLoaded, this)
                }, e.destroy = function() {
                    this.unregisterListeners(),
                    this.clearTimer(),
                    this.hls = this.onCheck = null,
                    this.fragCurrent = this.partCurrent = null
                }, e.onFragLoading = function(t, e) {
                    var r,
                        i = e.frag;
                    this.ignoreFragment(i) || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100))
                }, e.onLevelSwitching = function(t, e) {
                    this.clearTimer()
                }, e.getTimeToLoadFrag = function(t, e, r, i) {
                    return t + r / e + (i ? this.lastLevelLoadSec : 0)
                }, e.onLevelLoaded = function(t, e) {
                    var r = this.hls.config,
                        i = e.stats,
                        n = i.total,
                        a = i.bwEstimate;
                    E(n) && E(a) && (this.lastLevelLoadSec = 8 * n / a),
                    e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
                }, e._abandonRulesCheck = function() {
                    var t = this.fragCurrent,
                        e = this.partCurrent,
                        r = this.hls,
                        i = r.autoLevelEnabled,
                        n = r.media;
                    if (t && n) {
                        var a = performance.now(),
                            s = e ? e.stats : t.stats,
                            o = e ? e.duration : t.duration,
                            l = a - s.loading.start;
                        if (s.aborted || s.loaded && s.loaded === s.total || 0 === t.level)
                            return this.clearTimer(), void (this._nextAutoLevel = -1);
                        if (i && !n.paused && n.playbackRate && n.readyState) {
                            var u = r.mainForwardBufferInfo;
                            if (null !== u) {
                                var h = this.bwEstimator.getEstimateTTFB(),
                                    d = Math.abs(n.playbackRate);
                                if (!(l <= Math.max(h, o / (2 * d) * 1e3))) {
                                    var c = u.len / d;
                                    if (!(c >= 2 * o / d)) {
                                        var f = s.loading.first ? s.loading.first - s.loading.start : -1,
                                            g = s.loaded && f > -1,
                                            v = this.bwEstimator.getEstimate(),
                                            m = r.levels,
                                            p = r.minAutoLevel,
                                            y = m[t.level],
                                            T = s.total || Math.max(s.loaded, Math.round(o * y.maxBitrate / 8)),
                                            L = l - f;
                                        L < 1 && g && (L = Math.min(l, 8 * s.loaded / v));
                                        var R = g ? 1e3 * s.loaded / L : 0,
                                            A = R ? (T - s.loaded) / R : 8 * T / v + h / 1e3;
                                        if (!(A <= c)) {
                                            var k,
                                                b = R ? 8 * R : v,
                                                D = Number.POSITIVE_INFINITY;
                                            for (k = t.level - 1; k > p; k--) {
                                                var I = m[k].maxBitrate;
                                                if ((D = this.getTimeToLoadFrag(h / 1e3, b, o * I, !m[k].details)) < c)
                                                    break
                                            }
                                            D >= A || D > 10 * o || (r.nextLoadLevel = k, g ? this.bwEstimator.sample(l - Math.min(h, f), s.loaded) : this.bwEstimator.sampleTTFB(l), this.clearTimer(), w.warn("[abr] Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly;\n      Time to underbuffer: " + c.toFixed(3) + " s\n      Estimated load time for current fragment: " + A.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + D.toFixed(3) + " s\n      TTFB estimate: " + f + "\n      Current BW estimate: " + (E(v) ? (v / 1024).toFixed(3) : "Unknown") + " Kb/s\n      New BW estimate: " + (this.bwEstimator.getEstimate() / 1024).toFixed(3) + " Kb/s\n      Aborting and switching to level " + k), t.loader && (this.fragCurrent = this.partCurrent = null, t.abortRequests()), r.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                frag: t,
                                                part: e,
                                                stats: s
                                            }))
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, e.onFragLoaded = function(t, e) {
                    var r = e.frag,
                        i = e.part,
                        n = i ? i.stats : r.stats;
                    if (r.type === ge && this.bwEstimator.sampleTTFB(n.loading.first - n.loading.start), !this.ignoreFragment(r)) {
                        if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var a = i ? i.duration : r.duration,
                                s = this.hls.levels[r.level],
                                o = (s.loaded ? s.loaded.bytes : 0) + n.loaded,
                                l = (s.loaded ? s.loaded.duration : 0) + a;
                            s.loaded = {
                                bytes: o,
                                duration: l
                            },
                            s.realBitrate = Math.round(8 * o / l)
                        }
                        if (r.bitrateTest) {
                            var u = {
                                stats: n,
                                frag: r,
                                part: i,
                                id: r.type
                            };
                            this.onFragBuffered(S.FRAG_BUFFERED, u),
                            r.bitrateTest = !1
                        }
                    }
                }, e.onFragBuffered = function(t, e) {
                    var r = e.frag,
                        i = e.part,
                        n = null != i && i.stats.loaded ? i.stats : r.stats;
                    if (!n.aborted && !this.ignoreFragment(r)) {
                        var a = n.parsing.end - n.loading.start - Math.min(n.loading.first - n.loading.start, this.bwEstimator.getEstimateTTFB());
                        this.bwEstimator.sample(a, n.loaded),
                        n.bwEstimate = this.bwEstimator.getEstimate(),
                        r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                    }
                }, e.ignoreFragment = function(t) {
                    return t.type !== ge || "initSegment" === t.sn
                }, e.clearTimer = function() {
                    self.clearInterval(this.timer)
                }, e.getNextABRAutoLevel = function() {
                    var t = this.fragCurrent,
                        e = this.partCurrent,
                        r = this.hls,
                        i = r.maxAutoLevel,
                        n = r.config,
                        a = r.minAutoLevel,
                        s = r.media,
                        o = e ? e.duration : t ? t.duration : 0,
                        l = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
                        u = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                        h = r.mainForwardBufferInfo,
                        d = (h ? h.len : 0) / l,
                        c = this.findBestLevel(u, a, i, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                    if (c >= 0)
                        return c;
                    w.trace("[abr] " + (d ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                    var f = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay,
                        g = n.abrBandWidthFactor,
                        v = n.abrBandWidthUpFactor;
                    if (!d) {
                        var m = this.bitrateTestDelay;
                        m && (f = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - m, w.trace("[abr] bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * f) + " ms"), g = v = 1)
                    }
                    return c = this.findBestLevel(u, a, i, d + f, g, v), Math.max(c, 0)
                }, e.findBestLevel = function(t, e, r, i, n, a) {
                    for (var s, o = this.fragCurrent, l = this.partCurrent, u = this.lastLoadedFragLevel, h = this.hls.levels, d = h[u], c = !(null == d || null == (s = d.details) || !s.live), f = null == d ? void 0 : d.codecSet, g = l ? l.duration : o ? o.duration : 0, v = this.bwEstimator.getEstimateTTFB() / 1e3, m = e, p = -1, y = r; y >= e; y--) {
                        var T = h[y];
                        if (!T || f && T.codecSet !== f)
                            T && (m = Math.min(y, m), p = Math.max(y, p));
                        else {
                            -1 !== p && w.trace("[abr] Skipped level(s) " + m + "-" + p + ' with CODECS:"' + h[p].attrs.CODECS + '"; not compatible with "' + d.attrs.CODECS + '"');
                            var S = T.details,
                                L = (l ? null == S ? void 0 : S.partTarget : null == S ? void 0 : S.averagetargetduration) || g,
                                R = void 0;
                            R = y <= u ? n * t : a * t;
                            var A = h[y].maxBitrate,
                                k = this.getTimeToLoadFrag(v, R, A * L, void 0 === S);
                            if (w.trace("[abr] level:" + y + " adjustedbw-bitrate:" + Math.round(R - A) + " avgDuration:" + L.toFixed(1) + " maxFetchDuration:" + i.toFixed(1) + " fetchDuration:" + k.toFixed(1)), R > A && (0 === k || !E(k) || c && !this.bitrateTestDelay || k < i))
                                return y
                        }
                    }
                    return -1
                }, a(t, [{
                    key: "nextAutoLevel",
                    get: function() {
                        var t = this._nextAutoLevel,
                            e = this.bwEstimator;
                        if (-1 !== t && !e.canEstimate())
                            return t;
                        var r = this.getNextABRAutoLevel();
                        if (-1 !== t) {
                            var i = this.hls.levels;
                            if (i.length > Math.max(t, r) && i[t].loadError <= i[r].loadError)
                                return t
                        }
                        return -1 !== t && (r = Math.min(t, r)), r
                    },
                    set: function(t) {
                        this._nextAutoLevel = t
                    }
                }]), t
            }(),
            mn = function() {
                function t() {
                    this.chunks = [],
                    this.dataLength = 0
                }
                var e = t.prototype;
                return e.push = function(t) {
                    this.chunks.push(t),
                    this.dataLength += t.length
                }, e.flush = function() {
                    var t,
                        e = this.chunks,
                        r = this.dataLength;
                    return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
                        for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                            var a = t[n];
                            r.set(a, i),
                            i += a.length
                        }
                        return r
                    }(e, r), this.reset(), t) : new Uint8Array(0)
                }, e.reset = function() {
                    this.chunks.length = 0,
                    this.dataLength = 0
                }, t
            }(),
            pn = function(t) {
                function e(e, r, i) {
                    var n;
                    return (n = t.call(this, e, r, i, "[audio-stream-controller]", ve) || this).videoBuffer = null, n.videoTrackCC = -1, n.waitingVideoCC = -1, n.bufferedTrack = null, n.switchingTrack = null, n.trackId = -1, n.waitingData = null, n.mainDetails = null, n.bufferFlushed = !1, n.cachedTrackLoadedData = null, n._registerListeners(), n
                }
                l(e, t);
                var r = e.prototype;
                return r.onHandlerDestroying = function() {
                    this._unregisterListeners(),
                    this.mainDetails = null,
                    this.bufferedTrack = null,
                    this.switchingTrack = null
                }, r._registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                    t.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    t.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    t.on(S.ERROR, this.onError, this),
                    t.on(S.BUFFER_RESET, this.onBufferReset, this),
                    t.on(S.BUFFER_CREATED, this.onBufferCreated, this),
                    t.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    t.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
                }, r._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                    t.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    t.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    t.off(S.ERROR, this.onError, this),
                    t.off(S.BUFFER_RESET, this.onBufferReset, this),
                    t.off(S.BUFFER_CREATED, this.onBufferCreated, this),
                    t.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    t.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
                }, r.onInitPtsFound = function(t, e) {
                    var r = e.frag,
                        i = e.id,
                        n = e.initPTS,
                        a = e.timescale;
                    if ("main" === i) {
                        var s = r.cc;
                        this.initPTS[r.cc] = {
                            baseTime: n,
                            timescale: a
                        },
                        this.log("InitPTS for cc: " + s + " found from main: " + n),
                        this.videoTrackCC = s,
                        this.state === Qr && this.tick()
                    }
                }, r.startLoad = function(t) {
                    if (!this.levels)
                        return this.startPosition = t, void (this.state = Gr);
                    var e = this.lastCurrentTime;
                    this.stopLoad(),
                    this.setInterval(100),
                    e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e, this.state = Kr) : (this.loadedmetadata = !1, this.state = Wr),
                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t,
                    this.tick()
                }, r.doTick = function() {
                    switch (this.state) {
                    case Kr:
                        this.doTickIdle();
                        break;
                    case Wr:
                        var e,
                            r = this.levels,
                            i = this.trackId,
                            n = null == r || null == (e = r[i]) ? void 0 : e.details;
                        if (n) {
                            if (this.waitForCdnTuneIn(n))
                                break;
                            this.state = Qr
                        }
                        break;
                    case Yr:
                        var a,
                            s = performance.now(),
                            o = this.retryDate;
                        (!o || s >= o || null != (a = this.media) && a.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = Kr);
                        break;
                    case Qr:
                        var l = this.waitingData;
                        if (l) {
                            var u = l.frag,
                                h = l.part,
                                d = l.cache,
                                c = l.complete;
                            if (void 0 !== this.initPTS[u.cc]) {
                                this.waitingData = null,
                                this.waitingVideoCC = -1,
                                this.state = Vr;
                                var f = {
                                    frag: u,
                                    part: h,
                                    payload: d.flush(),
                                    networkDetails: null
                                };
                                this._handleFragmentLoadProgress(f),
                                c && t.prototype._handleFragmentLoadComplete.call(this, f)
                            } else if (this.videoTrackCC !== this.waitingVideoCC)
                                this.log("Waiting fragment cc (" + u.cc + ") cancelled because video is at cc " + this.videoTrackCC),
                                this.clearWaitingFragment();
                            else {
                                var g = this.getLoadPosition(),
                                    v = Ir.bufferInfo(this.mediaBuffer, g, this.config.maxBufferHole);
                                Je(v.end, this.config.maxFragLookUpTolerance, u) < 0 && (this.log("Waiting fragment cc (" + u.cc + ") @ " + u.start + " cancelled because another fragment at " + v.end + " is needed"), this.clearWaitingFragment())
                            }
                        } else
                            this.state = Kr
                    }
                    this.onTickEnd()
                }, r.clearWaitingFragment = function() {
                    var t = this.waitingData;
                    t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Kr)
                }, r.resetLoadingState = function() {
                    this.clearWaitingFragment(),
                    t.prototype.resetLoadingState.call(this)
                }, r.onTickEnd = function() {
                    var t = this.media;
                    null != t && t.readyState && (this.lastCurrentTime = t.currentTime)
                }, r.doTickIdle = function() {
                    var t = this.hls,
                        e = this.levels,
                        r = this.media,
                        i = this.trackId,
                        n = t.config;
                    if (null != e && e[i] && (r || !this.startFragRequested && n.startFragPrefetch)) {
                        var a = e[i],
                            s = a.details;
                        if (!s || s.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(s))
                            this.state = Wr;
                        else {
                            var o = this.mediaBuffer ? this.mediaBuffer : this.media;
                            this.bufferFlushed && o && (this.bufferFlushed = !1, this.afterBufferFlushed(o, O, ve));
                            var l = this.getFwdBufferInfo(o, ve);
                            if (null !== l) {
                                var u = this.bufferedTrack,
                                    h = this.switchingTrack;
                                if (!h && this._streamEnded(l, s))
                                    return t.trigger(S.BUFFER_EOS, {
                                        type: "audio"
                                    }), void (this.state = Xr);
                                var d = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, ge),
                                    c = l.len,
                                    f = this.getMaxBufferLength(null == d ? void 0 : d.len);
                                if (!(c >= f) || h) {
                                    var g = s.fragments[0].start,
                                        v = l.end;
                                    if (h && r) {
                                        var m = this.getLoadPosition();
                                        u && h.attrs !== u.attrs && (v = m),
                                        s.PTSKnown && m < g && (l.end > g || l.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r.currentTime = g + .05)
                                    }
                                    var p = this.getNextFragment(v, s),
                                        y = !1;
                                    if (p && this.isLoopLoading(p, v) && (y = !!p.gap, p = this.getNextFragmentLoopLoading(p, s, l, ge, f)), p) {
                                        var T = d && p.start > d.end + s.targetduration;
                                        if (T || (null == d || !d.len) && l.len) {
                                            var E = this.getAppendedFrag(p.start, ge);
                                            if (null === E)
                                                return;
                                            if (y || (y = !!E.gap || !!T && 0 === d.len), T && !y || y && l.nextStart && l.nextStart < E.end)
                                                return
                                        }
                                        this.loadFragment(p, a, v)
                                    } else
                                        this.bufferFlushed = !0
                                }
                            }
                        }
                    }
                }, r.getMaxBufferLength = function(e) {
                    var r = t.prototype.getMaxBufferLength.call(this);
                    return e ? Math.min(Math.max(r, e), this.config.maxMaxBufferLength) : r
                }, r.onMediaDetaching = function() {
                    this.videoBuffer = null,
                    t.prototype.onMediaDetaching.call(this)
                }, r.onAudioTracksUpdated = function(t, e) {
                    var r = e.audioTracks;
                    this.resetTransmuxer(),
                    this.levels = r.map((function(t) {
                        return new Ne(t)
                    }))
                }, r.onAudioTrackSwitching = function(t, e) {
                    var r = !!e.url;
                    this.trackId = e.id;
                    var i = this.fragCurrent;
                    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)),
                    this.resetLoadingState(),
                    r ? this.setInterval(100) : this.resetTransmuxer(),
                    r ? (this.switchingTrack = e, this.state = Kr) : (this.switchingTrack = null, this.bufferedTrack = e, this.state = Gr),
                    this.tick()
                }, r.onManifestLoading = function() {
                    this.fragmentTracker.removeAllFragments(),
                    this.startPosition = this.lastCurrentTime = 0,
                    this.bufferFlushed = !1,
                    this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null,
                    this.startFragRequested = !1,
                    this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
                }, r.onLevelLoaded = function(t, e) {
                    this.mainDetails = e.details,
                    null !== this.cachedTrackLoadedData && (this.hls.trigger(S.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
                }, r.onAudioTrackLoaded = function(t, e) {
                    var r;
                    if (null != this.mainDetails) {
                        var i = this.levels,
                            n = e.details,
                            a = e.id;
                        if (i) {
                            this.log("Track " + a + " loaded [" + n.startSN + "," + n.endSN + "]" + (n.lastPartSn ? "[part-" + n.lastPartSn + "-" + n.lastPartIndex + "]" : "") + ",duration:" + n.totalduration);
                            var s = i[a],
                                o = 0;
                            if (n.live || null != (r = s.details) && r.live) {
                                this.checkLiveUpdate(n);
                                var l = this.mainDetails;
                                if (n.deltaUpdateFailed || !l)
                                    return;
                                !s.details && n.hasProgramDateTime && l.hasProgramDateTime ? (Fr(n, l), o = n.fragments[0].start) : o = this.alignPlaylists(n, s.details)
                            }
                            s.details = n,
                            this.levelLastLoaded = a,
                            this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(s.details, o),
                            this.state !== Wr || this.waitForCdnTuneIn(n) || (this.state = Kr),
                            this.tick()
                        } else
                            this.warn("Audio tracks were reset while loading level " + a)
                    } else
                        this.cachedTrackLoadedData = e
                }, r._handleFragmentLoadProgress = function(t) {
                    var e,
                        r = t.frag,
                        i = t.part,
                        n = t.payload,
                        a = this.config,
                        s = this.trackId,
                        o = this.levels;
                    if (o) {
                        var l = o[s];
                        if (l) {
                            var u = l.details;
                            if (!u)
                                return this.warn("Audio track details undefined on fragment load progress"), void this.removeUnbufferedFrags(r.start);
                            var h = a.defaultAudioCodec || l.audioCodec || "mp4a.40.2",
                                d = this.transmuxer;
                            d || (d = this.transmuxer = new hn(this.hls, ve, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                            var c = this.initPTS[r.cc],
                                f = null == (e = r.initSegment) ? void 0 : e.data;
                            if (void 0 !== c) {
                                var g = i ? i.index : -1,
                                    v = -1 !== g,
                                    m = new wr(r.level, r.sn, r.stats.chunkCount, n.byteLength, g, v);
                                d.push(n, f, h, "", r, i, u.totalduration, !1, m, c)
                            } else
                                this.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + u.startSN + " ," + u.endSN + "],track " + s),
                                (this.waitingData = this.waitingData || {
                                    frag: r,
                                    part: i,
                                    cache: new mn,
                                    complete: !1
                                }).cache.push(new Uint8Array(n)),
                                this.waitingVideoCC = this.videoTrackCC,
                                this.state = Qr
                        } else
                            this.warn("Audio track is undefined on fragment load progress")
                    } else
                        this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
                }, r._handleFragmentLoadComplete = function(e) {
                    this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
                }, r.onBufferReset = function() {
                    this.mediaBuffer = this.videoBuffer = null,
                    this.loadedmetadata = !1
                }, r.onBufferCreated = function(t, e) {
                    var r = e.tracks.audio;
                    r && (this.mediaBuffer = r.buffer || null),
                    e.tracks.video && (this.videoBuffer = e.tracks.video.buffer || null)
                }, r.onFragBuffered = function(t, e) {
                    var r = e.frag,
                        n = e.part;
                    if (r.type === ve)
                        if (this.fragContextChanged(r))
                            this.warn("Fragment " + r.sn + (n ? " p: " + n.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + (this.switchingTrack ? this.switchingTrack.name : "false"));
                        else {
                            if ("initSegment" !== r.sn) {
                                this.fragPrevious = r;
                                var a = this.switchingTrack;
                                a && (this.bufferedTrack = a, this.switchingTrack = null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, i({}, a)))
                            }
                            this.fragBufferedComplete(r, n)
                        }
                    else if (!this.loadedmetadata && r.type === ge) {
                        var s = this.videoBuffer || this.media;
                        s && Ir.getBuffered(s).length && (this.loadedmetadata = !0)
                    }
                }, r.onError = function(e, r) {
                    var i;
                    if (r.fatal)
                        this.state = zr;
                    else
                        switch (r.details) {
                        case R.FRAG_GAP:
                        case R.FRAG_PARSING_ERROR:
                        case R.FRAG_DECRYPT_ERROR:
                        case R.FRAG_LOAD_ERROR:
                        case R.FRAG_LOAD_TIMEOUT:
                        case R.KEY_LOAD_ERROR:
                        case R.KEY_LOAD_TIMEOUT:
                            this.onFragmentOrKeyLoadError(ve, r);
                            break;
                        case R.AUDIO_TRACK_LOAD_ERROR:
                        case R.AUDIO_TRACK_LOAD_TIMEOUT:
                        case R.LEVEL_PARSING_ERROR:
                            r.levelRetry || this.state !== Wr || (null == (i = r.context) ? void 0 : i.type) !== ce || (this.state = Kr);
                            break;
                        case R.BUFFER_FULL_ERROR:
                            if (!r.parent || "audio" !== r.parent)
                                return;
                            this.reduceLengthAndFlushBuffer(r) && (this.bufferedTrack = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"));
                            break;
                        case R.INTERNAL_EXCEPTION:
                            this.recoverWorkerError(r)
                        }
                }, r.onBufferFlushed = function(t, e) {
                    e.type === O && (this.bufferFlushed = !0, this.state === Xr && (this.state = Kr))
                }, r._handleTransmuxComplete = function(t) {
                    var e,
                        r = "audio",
                        i = this.hls,
                        n = t.remuxResult,
                        a = t.chunkMeta,
                        s = this.getCurrentContext(a);
                    if (s) {
                        var l = s.frag,
                            u = s.part,
                            h = s.level.details,
                            d = n.audio,
                            c = n.text,
                            f = n.id3,
                            g = n.initSegment;
                        if (!this.fragContextChanged(l) && h) {
                            if (this.state = jr, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), null != g && g.tracks) {
                                var v = l.initSegment || l;
                                this._bufferInitSegment(g.tracks, v, a),
                                i.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
                                    frag: v,
                                    id: r,
                                    tracks: g.tracks
                                })
                            }
                            if (d) {
                                var m = d.startPTS,
                                    p = d.endPTS,
                                    y = d.startDTS,
                                    T = d.endDTS;
                                u && (u.elementaryStreams[O] = {
                                    startPTS: m,
                                    endPTS: p,
                                    startDTS: y,
                                    endDTS: T
                                }),
                                l.setElementaryStreamInfo(O, m, p, y, T),
                                this.bufferFragmentData(d, l, u, a)
                            }
                            if (null != f && null != (e = f.samples) && e.length) {
                                var E = o({
                                    id: r,
                                    frag: l,
                                    details: h
                                }, f);
                                i.trigger(S.FRAG_PARSING_METADATA, E)
                            }
                            if (c) {
                                var L = o({
                                    id: r,
                                    frag: l,
                                    details: h
                                }, c);
                                i.trigger(S.FRAG_PARSING_USERDATA, L)
                            }
                        } else
                            this.fragmentTracker.removeFragment(l)
                    } else
                        this.resetWhenMissingContext(a)
                }, r._bufferInitSegment = function(t, e, r) {
                    if (this.state === jr) {
                        t.video && delete t.video;
                        var i = t.audio;
                        if (i) {
                            i.levelCodec = i.codec,
                            i.id = "audio",
                            this.log("Init audio buffer, container:" + i.container + ", codecs[parsed]=[" + i.codec + "]"),
                            this.hls.trigger(S.BUFFER_CODECS, t);
                            var n = i.initSegment;
                            if (null != n && n.byteLength) {
                                var a = {
                                    type: "audio",
                                    frag: e,
                                    part: null,
                                    chunkMeta: r,
                                    parent: e.type,
                                    data: n
                                };
                                this.hls.trigger(S.BUFFER_APPENDING, a)
                            }
                            this.tick()
                        }
                    }
                }, r.loadFragment = function(e, r, i) {
                    var n,
                        a = this.fragmentTracker.getState(e);
                    this.fragCurrent = e,
                    this.switchingTrack || a === fr || a === vr ? "initSegment" === e.sn ? this._loadInitSegment(e, r) : null != (n = r.details) && n.live && !this.initPTS[e.cc] ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = Qr) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : this.clearTrackerIfNeeded(e)
                }, r.completeAudioSwitch = function(e) {
                    var r = this.hls,
                        n = this.media,
                        a = this.bufferedTrack,
                        s = null == a ? void 0 : a.attrs,
                        o = e.attrs;
                    n && s && (s.CHANNELS !== o.CHANNELS || s.NAME !== o.NAME || s.LANGUAGE !== o.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")),
                    this.bufferedTrack = e,
                    this.switchingTrack = null,
                    r.trigger(S.AUDIO_TRACK_SWITCHED, i({}, e))
                }, e
            }(Jr),
            yn = function(t) {
                function e(e) {
                    var r;
                    return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.currentTrack = null, r.selectDefaultTrack = !0, r.registerListeners(), r
                }
                l(e, t);
                var r = e.prototype;
                return r.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(S.LEVEL_LOADING, this.onLevelLoading, this),
                    t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    t.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    t.on(S.ERROR, this.onError, this)
                }, r.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.off(S.LEVEL_LOADING, this.onLevelLoading, this),
                    t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    t.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    t.off(S.ERROR, this.onError, this)
                }, r.destroy = function() {
                    this.unregisterListeners(),
                    this.tracks.length = 0,
                    this.tracksInGroup.length = 0,
                    this.currentTrack = null,
                    t.prototype.destroy.call(this)
                }, r.onManifestLoading = function() {
                    this.tracks = [],
                    this.groupId = null,
                    this.tracksInGroup = [],
                    this.trackId = -1,
                    this.currentTrack = null,
                    this.selectDefaultTrack = !0
                }, r.onManifestParsed = function(t, e) {
                    this.tracks = e.audioTracks || []
                }, r.onAudioTrackLoaded = function(t, e) {
                    var r = e.id,
                        i = e.groupId,
                        n = e.details,
                        a = this.tracksInGroup[r];
                    if (a && a.groupId === i) {
                        var s = a.details;
                        a.details = e.details,
                        this.log("audio-track " + r + ' "' + a.name + '" lang:' + a.lang + " group:" + i + " loaded [" + n.startSN + "-" + n.endSN + "]"),
                        r === this.trackId && this.playlistLoaded(r, e, s)
                    } else
                        this.warn("Track with id:" + r + " and group:" + i + " not found in active group " + a.groupId)
                }, r.onLevelLoading = function(t, e) {
                    this.switchLevel(e.level)
                }, r.onLevelSwitching = function(t, e) {
                    this.switchLevel(e.level)
                }, r.switchLevel = function(t) {
                    var e = this.hls.levels[t];
                    if (null != e && e.audioGroupIds) {
                        var r = e.audioGroupIds[e.urlId];
                        if (this.groupId !== r) {
                            this.groupId = r || null;
                            var i = this.tracks.filter((function(t) {
                                return !r || t.groupId === r
                            }));
                            this.selectDefaultTrack && !i.some((function(t) {
                                return t.default
                            })) && (this.selectDefaultTrack = !1),
                            this.tracksInGroup = i;
                            var n = {
                                audioTracks: i
                            };
                            this.log("Updating audio tracks, " + i.length + " track(s) found in group:" + r),
                            this.hls.trigger(S.AUDIO_TRACKS_UPDATED, n),
                            this.selectInitialTrack()
                        } else
                            this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId)
                    }
                }, r.onError = function(t, e) {
                    !e.fatal && e.context && e.context.type === ce && e.context.id === this.trackId && e.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(e))
                }, r.setAudioTrack = function(t) {
                    var e = this.tracksInGroup;
                    if (t < 0 || t >= e.length)
                        this.warn("Invalid id passed to audio-track controller");
                    else {
                        this.clearTimer();
                        var r = this.currentTrack;
                        e[this.trackId];
                        var n = e[t],
                            a = n.groupId,
                            s = n.name;
                        if (this.log("Switching to audio-track " + t + ' "' + s + '" lang:' + n.lang + " group:" + a), this.trackId = t, this.currentTrack = n, this.selectDefaultTrack = !1, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, i({}, n)), !n.details || n.details.live) {
                            var o = this.switchParams(n.url, null == r ? void 0 : r.details);
                            this.loadPlaylist(o)
                        }
                    }
                }, r.selectInitialTrack = function() {
                    var t = this.tracksInGroup,
                        e = this.findTrackId(this.currentTrack) | this.findTrackId(null);
                    if (-1 !== e)
                        this.setAudioTrack(e);
                    else {
                        var r = new Error("No track found for running audio group-ID: " + this.groupId + " track count: " + t.length);
                        this.warn(r.message),
                        this.hls.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.AUDIO_TRACK_LOAD_ERROR,
                            fatal: !0,
                            error: r
                        })
                    }
                }, r.findTrackId = function(t) {
                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                        var i = e[r];
                        if (!this.selectDefaultTrack || i.default) {
                            if (!t || void 0 !== t.attrs["STABLE-RENDITION-ID"] && t.attrs["STABLE-RENDITION-ID"] === i.attrs["STABLE-RENDITION-ID"])
                                return i.id;
                            if (t.name === i.name && t.lang === i.lang)
                                return i.id
                        }
                    }
                    return -1
                }, r.loadPlaylist = function(e) {
                    t.prototype.loadPlaylist.call(this);
                    var r = this.tracksInGroup[this.trackId];
                    if (this.shouldLoadPlaylist(r)) {
                        var i = r.id,
                            n = r.groupId,
                            a = r.url;
                        if (e)
                            try {
                                a = e.addDirectives(a)
                            } catch (t) {
                                this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                            }
                        this.log("loading audio-track playlist " + i + ' "' + r.name + '" lang:' + r.lang + " group:" + n),
                        this.clearTimer(),
                        this.hls.trigger(S.AUDIO_TRACK_LOADING, {
                            url: a,
                            id: i,
                            groupId: n,
                            deliveryDirectives: e || null
                        })
                    }
                }, a(e, [{
                    key: "audioTracks",
                    get: function() {
                        return this.tracksInGroup
                    }
                }, {
                    key: "audioTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.selectDefaultTrack = !1,
                        this.setAudioTrack(t)
                    }
                }]), e
            }(ur);
        function Tn(t, e) {
            if (t.length !== e.length)
                return !1;
            for (var r = 0; r < t.length; r++)
                if (!En(t[r].attrs, e[r].attrs))
                    return !1;
            return !0
        }
        function En(t, e) {
            var r = t["STABLE-RENDITION-ID"];
            return r ? r === e["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some((function(r) {
                return t[r] !== e[r]
            }))
        }
        var Sn = function(t) {
                function e(e, r, i) {
                    var n;
                    return (n = t.call(this, e, r, i, "[subtitle-stream-controller]", me) || this).levels = [], n.currentTrackId = -1, n.tracksBuffered = [], n.mainDetails = null, n._registerListeners(), n
                }
                l(e, t);
                var r = e.prototype;
                return r.onHandlerDestroying = function() {
                    this._unregisterListeners(),
                    this.mainDetails = null
                }, r._registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.on(S.ERROR, this.onError, this),
                    t.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                    t.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                    t.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    t.on(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                    t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
                }, r._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.LEVEL_LOADED, this.onLevelLoaded, this),
                    t.off(S.ERROR, this.onError, this),
                    t.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                    t.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                    t.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    t.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                    t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
                }, r.startLoad = function(t) {
                    this.stopLoad(),
                    this.state = Kr,
                    this.setInterval(500),
                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t,
                    this.tick()
                }, r.onManifestLoading = function() {
                    this.mainDetails = null,
                    this.fragmentTracker.removeAllFragments()
                }, r.onMediaDetaching = function() {
                    this.tracksBuffered = [],
                    t.prototype.onMediaDetaching.call(this)
                }, r.onLevelLoaded = function(t, e) {
                    this.mainDetails = e.details
                }, r.onSubtitleFragProcessed = function(t, e) {
                    var r = e.frag,
                        i = e.success;
                    if (this.fragPrevious = r, this.state = Kr, i) {
                        var n = this.tracksBuffered[this.currentTrackId];
                        if (n) {
                            for (var a, s = r.start, o = 0; o < n.length; o++)
                                if (s >= n[o].start && s <= n[o].end) {
                                    a = n[o];
                                    break
                                }
                            var l = r.start + r.duration;
                            a ? a.end = l : (a = {
                                start: s,
                                end: l
                            }, n.push(a)),
                            this.fragmentTracker.fragBuffered(r)
                        }
                    }
                }, r.onBufferFlushing = function(t, e) {
                    var r = e.startOffset,
                        i = e.endOffset;
                    if (0 === r && i !== Number.POSITIVE_INFINITY) {
                        var n = i - 1;
                        if (n <= 0)
                            return;
                        e.endOffsetSubtitles = Math.max(0, n),
                        this.tracksBuffered.forEach((function(t) {
                            for (var e = 0; e < t.length;)
                                if (t[e].end <= n)
                                    t.shift();
                                else {
                                    if (!(t[e].start < n))
                                        break;
                                    t[e].start = n,
                                    e++
                                }
                        })),
                        this.fragmentTracker.removeFragmentsInRange(r, n, me)
                    }
                }, r.onFragBuffered = function(t, e) {
                    var r;
                    this.loadedmetadata || e.frag.type !== ge || null != (r = this.media) && r.buffered.length && (this.loadedmetadata = !0)
                }, r.onError = function(t, e) {
                    var r = e.frag;
                    (null == r ? void 0 : r.type) === me && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== Gr && (this.state = Kr))
                }, r.onSubtitleTracksUpdated = function(t, e) {
                    var r = this,
                        i = e.subtitleTracks;
                    Tn(this.levels, i) ? this.levels = i.map((function(t) {
                        return new Ne(t)
                    })) : (this.tracksBuffered = [], this.levels = i.map((function(t) {
                        var e = new Ne(t);
                        return r.tracksBuffered[e.id] = [], e
                    })), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, me), this.fragPrevious = null, this.mediaBuffer = null)
                }, r.onSubtitleTrackSwitch = function(t, e) {
                    if (this.currentTrackId = e.id, this.levels.length && -1 !== this.currentTrackId) {
                        var r = this.levels[this.currentTrackId];
                        null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null,
                        r && this.setInterval(500)
                    } else
                        this.clearInterval()
                }, r.onSubtitleTrackLoaded = function(t, e) {
                    var r,
                        i = e.details,
                        n = e.id,
                        a = this.currentTrackId,
                        s = this.levels;
                    if (s.length) {
                        var o = s[a];
                        if (!(n >= s.length || n !== a) && o) {
                            this.mediaBuffer = this.mediaBufferTimeRanges;
                            var l = 0;
                            if (i.live || null != (r = o.details) && r.live) {
                                var u = this.mainDetails;
                                if (i.deltaUpdateFailed || !u)
                                    return;
                                var h = u.fragments[0];
                                o.details ? 0 === (l = this.alignPlaylists(i, o.details)) && h && He(i, l = h.start) : i.hasProgramDateTime && u.hasProgramDateTime ? (Fr(i, u), l = i.fragments[0].start) : h && He(i, l = h.start)
                            }
                            o.details = i,
                            this.levelLastLoaded = n,
                            this.startFragRequested || !this.mainDetails && i.live || this.setStartPosition(o.details, l),
                            this.tick(),
                            i.live && !this.fragCurrent && this.media && this.state === Kr && ($e(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0))
                        }
                    }
                }, r._handleFragmentLoadComplete = function(t) {
                    var e = this,
                        r = t.frag,
                        i = t.payload,
                        n = r.decryptdata,
                        a = this.hls;
                    if (!this.fragContextChanged(r) && i && i.byteLength > 0 && n && n.key && n.iv && "AES-128" === n.method) {
                        var s = performance.now();
                        this.decrypter.decrypt(new Uint8Array(i), n.key.buffer, n.iv.buffer).catch((function(t) {
                            throw a.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.FRAG_DECRYPT_ERROR,
                                fatal: !1,
                                error: t,
                                reason: t.message,
                                frag: r
                            }), t
                        })).then((function(t) {
                            var e = performance.now();
                            a.trigger(S.FRAG_DECRYPTED, {
                                frag: r,
                                payload: t,
                                stats: {
                                    tstart: s,
                                    tdecrypt: e
                                }
                            })
                        })).catch((function(t) {
                            e.warn(t.name + ": " + t.message),
                            e.state = Kr
                        }))
                    }
                }, r.doTick = function() {
                    if (this.media) {
                        if (this.state === Kr) {
                            var t = this.currentTrackId,
                                e = this.levels,
                                r = e[t];
                            if (!e.length || !r || !r.details)
                                return;
                            var i = this.config,
                                n = this.getLoadPosition(),
                                a = Ir.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], n, i.maxBufferHole),
                                s = a.end,
                                o = a.len,
                                l = this.getFwdBufferInfo(this.media, ge),
                                u = r.details;
                            if (o > this.getMaxBufferLength(null == l ? void 0 : l.len) + u.levelTargetDuration)
                                return;
                            var h = u.fragments,
                                d = h.length,
                                c = u.edge,
                                f = null,
                                g = this.fragPrevious;
                            if (s < c) {
                                var v = i.maxFragLookUpTolerance,
                                    m = s > c - v ? 0 : v;
                                !(f = $e(g, h, Math.max(h[0].start, s), m)) && g && g.start < h[0].start && (f = h[0])
                            } else
                                f = h[d - 1];
                            if (!f)
                                return;
                            if ("initSegment" !== (f = this.mapToInitFragWhenRequired(f)).sn) {
                                var p = h[f.sn - u.startSN - 1];
                                p && p.cc === f.cc && this.fragmentTracker.getState(p) === fr && (f = p)
                            }
                            this.fragmentTracker.getState(f) === fr && this.loadFragment(f, r, s)
                        }
                    } else
                        this.state = Kr
                }, r.getMaxBufferLength = function(e) {
                    var r = t.prototype.getMaxBufferLength.call(this);
                    return e ? Math.max(r, e) : r
                }, r.loadFragment = function(e, r, i) {
                    this.fragCurrent = e,
                    "initSegment" === e.sn ? this._loadInitSegment(e, r) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i))
                }, a(e, [{
                    key: "mediaBufferTimeRanges",
                    get: function() {
                        return new Ln(this.tracksBuffered[this.currentTrackId] || [])
                    }
                }]), e
            }(Jr),
            Ln = function(t) {
                this.buffered = void 0;
                var e = function(e, r, i) {
                    if ((r >>>= 0) > i - 1)
                        throw new DOMException("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + r + ") is greater than the maximum bound (" + i + ")");
                    return t[r][e]
                };
                this.buffered = {
                    get length() {
                        return t.length
                    },
                    end: function(r) {
                        return e("end", r, t.length)
                    },
                    start: function(r) {
                        return e("start", r, t.length)
                    }
                }
            },
            Rn = function(t) {
                function e(e) {
                    var r;
                    return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.trackChangeListener = function() {
                        return r.onTextTracksChanged()
                    }, r.asyncPollTrackChange = function() {
                        return r.pollTrackChange(0)
                    }, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r._subtitleDisplay = !0, r.registerListeners(), r
                }
                l(e, t);
                var r = e.prototype;
                return r.destroy = function() {
                    this.unregisterListeners(),
                    this.tracks.length = 0,
                    this.tracksInGroup.length = 0,
                    this.trackChangeListener = this.asyncPollTrackChange = null,
                    t.prototype.destroy.call(this)
                }, r.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(S.LEVEL_LOADING, this.onLevelLoading, this),
                    t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    t.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    t.on(S.ERROR, this.onError, this)
                }, r.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.off(S.LEVEL_LOADING, this.onLevelLoading, this),
                    t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    t.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    t.off(S.ERROR, this.onError, this)
                }, r.onMediaAttached = function(t, e) {
                    this.media = e.media,
                    this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
                }, r.pollTrackChange = function(t) {
                    self.clearInterval(this.subtitlePollingInterval),
                    this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
                }, r.onMediaDetaching = function() {
                    this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), An(this.media.textTracks).forEach((function(t) {
                        Le(t)
                    })), this.subtitleTrack = -1, this.media = null)
                }, r.onManifestLoading = function() {
                    this.tracks = [],
                    this.groupId = null,
                    this.tracksInGroup = [],
                    this.trackId = -1,
                    this.selectDefaultTrack = !0
                }, r.onManifestParsed = function(t, e) {
                    this.tracks = e.subtitleTracks
                }, r.onSubtitleTrackLoaded = function(t, e) {
                    var r = e.id,
                        i = e.details,
                        n = this.trackId,
                        a = this.tracksInGroup[n];
                    if (a) {
                        var s = a.details;
                        a.details = e.details,
                        this.log("subtitle track " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"),
                        r === this.trackId && this.playlistLoaded(r, e, s)
                    } else
                        this.warn("Invalid subtitle track id " + r)
                }, r.onLevelLoading = function(t, e) {
                    this.switchLevel(e.level)
                }, r.onLevelSwitching = function(t, e) {
                    this.switchLevel(e.level)
                }, r.switchLevel = function(t) {
                    var e = this.hls.levels[t];
                    if (null != e && e.textGroupIds) {
                        var r = e.textGroupIds[e.urlId],
                            i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                        if (this.groupId !== r) {
                            var n = this.tracks.filter((function(t) {
                                return !r || t.groupId === r
                            }));
                            this.tracksInGroup = n;
                            var a = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
                            this.groupId = r || null;
                            var s = {
                                subtitleTracks: n
                            };
                            this.log("Updating subtitle tracks, " + n.length + ' track(s) found in "' + r + '" group-id'),
                            this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED, s),
                            -1 !== a && this.setSubtitleTrack(a, i)
                        } else
                            this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId, i)
                    }
                }, r.findTrackId = function(t) {
                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                        var i = e[r];
                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name))
                            return i.id
                    }
                    return -1
                }, r.onError = function(t, e) {
                    !e.fatal && e.context && e.context.type === fe && e.context.id === this.trackId && e.context.groupId === this.groupId && this.checkRetry(e)
                }, r.loadPlaylist = function(e) {
                    t.prototype.loadPlaylist.call(this);
                    var r = this.tracksInGroup[this.trackId];
                    if (this.shouldLoadPlaylist(r)) {
                        var i = r.id,
                            n = r.groupId,
                            a = r.url;
                        if (e)
                            try {
                                a = e.addDirectives(a)
                            } catch (t) {
                                this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                            }
                        this.log("Loading subtitle playlist for id " + i),
                        this.hls.trigger(S.SUBTITLE_TRACK_LOADING, {
                            url: a,
                            id: i,
                            groupId: n,
                            deliveryDirectives: e || null
                        })
                    }
                }, r.toggleTrackModes = function(t) {
                    var e = this,
                        r = this.media,
                        i = this.trackId;
                    if (r) {
                        var n = An(r.textTracks),
                            a = n.filter((function(t) {
                                return t.groupId === e.groupId
                            }));
                        if (-1 === t)
                            [].slice.call(n).forEach((function(t) {
                                t.mode = "disabled"
                            }));
                        else {
                            var s = a[i];
                            s && (s.mode = "disabled")
                        }
                        var o = a[t];
                        o && (o.mode = this.subtitleDisplay ? "showing" : "hidden")
                    }
                }, r.setSubtitleTrack = function(t, e) {
                    var r,
                        i = this.tracksInGroup;
                    if (this.media) {
                        if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (-1 === t || null != (r = i[t]) && r.details) || t < -1 || t >= i.length)) {
                            this.clearTimer();
                            var n = i[t];
                            if (this.log("Switching to subtitle-track " + t + (n ? ' "' + n.name + '" lang:' + n.lang + " group:" + n.groupId : "")), this.trackId = t, n) {
                                var a = n.id,
                                    s = n.groupId,
                                    o = void 0 === s ? "" : s,
                                    l = n.name,
                                    u = n.type,
                                    h = n.url;
                                this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {
                                    id: a,
                                    groupId: o,
                                    name: l,
                                    type: u,
                                    url: h
                                });
                                var d = this.switchParams(n.url, null == e ? void 0 : e.details);
                                this.loadPlaylist(d)
                            } else
                                this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {
                                    id: t
                                })
                        }
                    } else
                        this.queuedDefaultTrack = t
                }, r.onTextTracksChanged = function() {
                    if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
                        for (var t = -1, e = An(this.media.textTracks), r = 0; r < e.length; r++)
                            if ("hidden" === e[r].mode)
                                t = r;
                            else if ("showing" === e[r].mode) {
                                t = r;
                                break
                            }
                        this.subtitleTrack !== t && (this.subtitleTrack = t)
                    }
                }, a(e, [{
                    key: "subtitleDisplay",
                    get: function() {
                        return this._subtitleDisplay
                    },
                    set: function(t) {
                        this._subtitleDisplay = t,
                        this.trackId > -1 && this.toggleTrackModes(this.trackId)
                    }
                }, {
                    key: "subtitleTracks",
                    get: function() {
                        return this.tracksInGroup
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.selectDefaultTrack = !1;
                        var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                        this.setSubtitleTrack(t, e)
                    }
                }]), e
            }(ur);
        function An(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = t[r];
                "subtitles" !== i.kind && "captions" !== i.kind || !i.label || e.push(t[r])
            }
            return e
        }
        var kn = function() {
                function t(t) {
                    this.buffers = void 0,
                    this.queues = {
                        video: [],
                        audio: [],
                        audiovideo: []
                    },
                    this.buffers = t
                }
                var e = t.prototype;
                return e.append = function(t, e) {
                    var r = this.queues[e];
                    r.push(t),
                    1 === r.length && this.buffers[e] && this.executeNext(e)
                }, e.insertAbort = function(t, e) {
                    this.queues[e].unshift(t),
                    this.executeNext(e)
                }, e.appendBlocker = function(t) {
                    var e,
                        r = new Promise((function(t) {
                            e = t
                        })),
                        i = {
                            execute: e,
                            onStart: function() {},
                            onComplete: function() {},
                            onError: function() {}
                        };
                    return this.append(i, t), r
                }, e.executeNext = function(t) {
                    var e = this.buffers,
                        r = this.queues,
                        i = e[t],
                        n = r[t];
                    if (n.length) {
                        var a = n[0];
                        try {
                            a.execute()
                        } catch (e) {
                            w.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),
                            a.onError(e),
                            null != i && i.updating || (n.shift(), this.executeNext(t))
                        }
                    }
                }, e.shiftAndExecuteNext = function(t) {
                    this.queues[t].shift(),
                    this.executeNext(t)
                }, e.current = function(t) {
                    return this.queues[t][0]
                }, t
            }(),
            bn = qt(),
            Dn = /([ha]vc.)(?:\.[^.,]+)+/,
            In = function() {
                function t(t) {
                    var e = this;
                    this.details = null,
                    this._objectUrl = null,
                    this.operationQueue = void 0,
                    this.listeners = void 0,
                    this.hls = void 0,
                    this.bufferCodecEventsExpected = 0,
                    this._bufferCodecEventsTotal = 0,
                    this.media = null,
                    this.mediaSource = null,
                    this.lastMpegAudioChunk = null,
                    this.appendError = 0,
                    this.tracks = {},
                    this.pendingTracks = {},
                    this.sourceBuffer = void 0,
                    this._onMediaSourceOpen = function() {
                        var t = e.media,
                            r = e.mediaSource;
                        w.log("[buffer-controller]: Media source opened"),
                        t && (t.removeEventListener("emptied", e._onMediaEmptied), e.updateMediaElementDuration(), e.hls.trigger(S.MEDIA_ATTACHED, {
                            media: t
                        })),
                        r && r.removeEventListener("sourceopen", e._onMediaSourceOpen),
                        e.checkPendingTracks()
                    },
                    this._onMediaSourceClose = function() {
                        w.log("[buffer-controller]: Media source closed")
                    },
                    this._onMediaSourceEnded = function() {
                        w.log("[buffer-controller]: Media source ended")
                    },
                    this._onMediaEmptied = function() {
                        var t = e.media,
                            r = e._objectUrl;
                        t && t.src !== r && w.error("Media element src was set while attaching MediaSource (" + r + " > " + t.src + ")")
                    },
                    this.hls = t,
                    this._initSourceBuffer(),
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.hasSourceTypes = function() {
                    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                }, e.destroy = function() {
                    this.unregisterListeners(),
                    this.details = null,
                    this.lastMpegAudioChunk = null
                }, e.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(S.BUFFER_RESET, this.onBufferReset, this),
                    t.on(S.BUFFER_APPENDING, this.onBufferAppending, this),
                    t.on(S.BUFFER_CODECS, this.onBufferCodecs, this),
                    t.on(S.BUFFER_EOS, this.onBufferEos, this),
                    t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this),
                    t.on(S.FRAG_PARSED, this.onFragParsed, this),
                    t.on(S.FRAG_CHANGED, this.onFragChanged, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.off(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.off(S.BUFFER_RESET, this.onBufferReset, this),
                    t.off(S.BUFFER_APPENDING, this.onBufferAppending, this),
                    t.off(S.BUFFER_CODECS, this.onBufferCodecs, this),
                    t.off(S.BUFFER_EOS, this.onBufferEos, this),
                    t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this),
                    t.off(S.FRAG_PARSED, this.onFragParsed, this),
                    t.off(S.FRAG_CHANGED, this.onFragChanged, this)
                }, e._initSourceBuffer = function() {
                    this.sourceBuffer = {},
                    this.operationQueue = new kn(this.sourceBuffer),
                    this.listeners = {
                        audio: [],
                        video: [],
                        audiovideo: []
                    },
                    this.lastMpegAudioChunk = null
                }, e.onManifestLoading = function() {
                    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0,
                    this.details = null
                }, e.onManifestParsed = function(t, e) {
                    var r = 2;
                    (e.audio && !e.video || !e.altAudio) && (r = 1),
                    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r,
                    w.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                }, e.onMediaAttaching = function(t, e) {
                    var r = this.media = e.media;
                    if (r && bn) {
                        var i = this.mediaSource = new bn;
                        i.addEventListener("sourceopen", this._onMediaSourceOpen),
                        i.addEventListener("sourceended", this._onMediaSourceEnded),
                        i.addEventListener("sourceclose", this._onMediaSourceClose),
                        r.src = self.URL.createObjectURL(i),
                        this._objectUrl = r.src,
                        r.addEventListener("emptied", this._onMediaEmptied)
                    }
                }, e.onMediaDetaching = function() {
                    var t = this.media,
                        e = this.mediaSource,
                        r = this._objectUrl;
                    if (e) {
                        if (w.log("[buffer-controller]: media source detaching"), "open" === e.readyState)
                            try {
                                e.endOfStream()
                            } catch (t) {
                                w.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                            }
                        this.onBufferReset(),
                        e.removeEventListener("sourceopen", this._onMediaSourceOpen),
                        e.removeEventListener("sourceended", this._onMediaSourceEnded),
                        e.removeEventListener("sourceclose", this._onMediaSourceClose),
                        t && (t.removeEventListener("emptied", this._onMediaEmptied), r && self.URL.revokeObjectURL(r), t.src === r ? (t.removeAttribute("src"), t.load()) : w.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),
                        this.mediaSource = null,
                        this.media = null,
                        this._objectUrl = null,
                        this.bufferCodecEventsExpected = this._bufferCodecEventsTotal,
                        this.pendingTracks = {},
                        this.tracks = {}
                    }
                    this.hls.trigger(S.MEDIA_DETACHED, void 0)
                }, e.onBufferReset = function() {
                    var t = this;
                    this.getSourceBufferTypes().forEach((function(e) {
                        var r = t.sourceBuffer[e];
                        try {
                            r && (t.removeBufferListeners(e), t.mediaSource && t.mediaSource.removeSourceBuffer(r), t.sourceBuffer[e] = void 0)
                        } catch (t) {
                            w.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
                        }
                    })),
                    this._initSourceBuffer()
                }, e.onBufferCodecs = function(t, e) {
                    var r = this,
                        i = this.getSourceBufferTypes().length;
                    Object.keys(e).forEach((function(t) {
                        if (i) {
                            var n = r.tracks[t];
                            if (n && "function" == typeof n.buffer.changeType) {
                                var a = e[t],
                                    s = a.id,
                                    o = a.codec,
                                    l = a.levelCodec,
                                    u = a.container,
                                    h = a.metadata,
                                    d = (n.levelCodec || n.codec).replace(Dn, "$1"),
                                    c = (l || o).replace(Dn, "$1");
                                if (d !== c) {
                                    var f = u + ";codecs=" + (l || o);
                                    r.appendChangeType(t, f),
                                    w.log("[buffer-controller]: switching codec " + d + " to " + c),
                                    r.tracks[t] = {
                                        buffer: n.buffer,
                                        codec: o,
                                        container: u,
                                        levelCodec: l,
                                        metadata: h,
                                        id: s
                                    }
                                }
                            }
                        } else
                            r.pendingTracks[t] = e[t]
                    })),
                    i || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                }, e.appendChangeType = function(t, e) {
                    var r = this,
                        i = this.operationQueue,
                        n = {
                            execute: function() {
                                var n = r.sourceBuffer[t];
                                n && (w.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), n.changeType(e)),
                                i.shiftAndExecuteNext(t)
                            },
                            onStart: function() {},
                            onComplete: function() {},
                            onError: function(e) {
                                w.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                            }
                        };
                    i.append(n, t)
                }, e.onBufferAppending = function(t, e) {
                    var r = this,
                        i = this.hls,
                        n = this.operationQueue,
                        a = this.tracks,
                        s = e.data,
                        o = e.type,
                        l = e.frag,
                        u = e.part,
                        h = e.chunkMeta,
                        d = h.buffering[o],
                        c = self.performance.now();
                    d.start = c;
                    var f = l.stats.buffering,
                        g = u ? u.stats.buffering : null;
                    0 === f.start && (f.start = c),
                    g && 0 === g.start && (g.start = c);
                    var v = a.audio,
                        m = !1;
                    "audio" === o && "audio/mpeg" === (null == v ? void 0 : v.container) && (m = !this.lastMpegAudioChunk || 1 === h.id || this.lastMpegAudioChunk.sn !== h.sn, this.lastMpegAudioChunk = h);
                    var p = l.start,
                        y = {
                            execute: function() {
                                if (d.executeStart = self.performance.now(), m) {
                                    var t = r.sourceBuffer[o];
                                    if (t) {
                                        var e = p - t.timestampOffset;
                                        Math.abs(e) >= .1 && (w.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + p + " (delta: " + e + ") sn: " + l.sn + ")"), t.timestampOffset = p)
                                    }
                                }
                                r.appendExecutor(s, o)
                            },
                            onStart: function() {},
                            onComplete: function() {
                                var t = self.performance.now();
                                d.executeEnd = d.end = t,
                                0 === f.first && (f.first = t),
                                g && 0 === g.first && (g.first = t);
                                var e = r.sourceBuffer,
                                    i = {};
                                for (var n in e)
                                    i[n] = Ir.getBuffered(e[n]);
                                r.appendError = 0,
                                r.hls.trigger(S.BUFFER_APPENDED, {
                                    type: o,
                                    frag: l,
                                    part: u,
                                    chunkMeta: h,
                                    parent: l.type,
                                    timeRanges: i
                                })
                            },
                            onError: function(t) {
                                w.error("[buffer-controller]: Error encountered while trying to append to the " + o + " SourceBuffer", t);
                                var e = {
                                    type: L.MEDIA_ERROR,
                                    parent: l.type,
                                    details: R.BUFFER_APPEND_ERROR,
                                    frag: l,
                                    part: u,
                                    chunkMeta: h,
                                    error: t,
                                    err: t,
                                    fatal: !1
                                };
                                t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = R.BUFFER_FULL_ERROR : (r.appendError++, e.details = R.BUFFER_APPEND_ERROR, r.appendError > i.config.appendErrorMaxRetry && (w.error("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0)),
                                i.trigger(S.ERROR, e)
                            }
                        };
                    n.append(y, o)
                }, e.onBufferFlushing = function(t, e) {
                    var r = this,
                        i = this.operationQueue,
                        n = function(t) {
                            return {
                                execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                                onStart: function() {},
                                onComplete: function() {
                                    r.hls.trigger(S.BUFFER_FLUSHED, {
                                        type: t
                                    })
                                },
                                onError: function(e) {
                                    w.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                                }
                            }
                        };
                    e.type ? i.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach((function(t) {
                        i.append(n(t), t)
                    }))
                }, e.onFragParsed = function(t, e) {
                    var r = this,
                        i = e.frag,
                        n = e.part,
                        a = [],
                        s = n ? n.elementaryStreams : i.elementaryStreams;
                    s[U] ? a.push("audiovideo") : (s[O] && a.push("audio"), s[N] && a.push("video")),
                    0 === a.length && w.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn),
                    this.blockBuffers((function() {
                        var t = self.performance.now();
                        i.stats.buffering.end = t,
                        n && (n.stats.buffering.end = t);
                        var e = n ? n.stats : i.stats;
                        r.hls.trigger(S.FRAG_BUFFERED, {
                            frag: i,
                            part: n,
                            stats: e,
                            id: i.type
                        })
                    }), a)
                }, e.onFragChanged = function(t, e) {
                    this.flushBackBuffer()
                }, e.onBufferEos = function(t, e) {
                    var r = this;
                    this.getSourceBufferTypes().reduce((function(t, i) {
                        var n = r.sourceBuffer[i];
                        return !n || e.type && e.type !== i || (n.ending = !0, n.ended || (n.ended = !0, w.log("[buffer-controller]: " + i + " sourceBuffer now EOS"))), t && !(n && !n.ended)
                    }), !0) && (w.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers((function() {
                        r.getSourceBufferTypes().forEach((function(t) {
                            var e = r.sourceBuffer[t];
                            e && (e.ending = !1)
                        }));
                        var t = r.mediaSource;
                        t && "open" === t.readyState ? (w.log("[buffer-controller]: Calling mediaSource.endOfStream()"), t.endOfStream()) : t && w.info("[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: " + t.readyState)
                    })))
                }, e.onLevelUpdated = function(t, e) {
                    var r = e.details;
                    r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                }, e.flushBackBuffer = function() {
                    var t = this.hls,
                        e = this.details,
                        r = this.media,
                        i = this.sourceBuffer;
                    if (r && null !== e) {
                        var n = this.getSourceBufferTypes();
                        if (n.length) {
                            var a = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
                            if (E(a) && !(a < 0)) {
                                var s = r.currentTime,
                                    o = e.levelTargetDuration,
                                    l = Math.max(a, o),
                                    u = Math.floor(s / o) * o - l;
                                n.forEach((function(r) {
                                    var n = i[r];
                                    if (n) {
                                        var a = Ir.getBuffered(n);
                                        if (a.length > 0 && u > a.start(0)) {
                                            if (t.trigger(S.BACK_BUFFER_REACHED, {
                                                bufferEnd: u
                                            }), e.live)
                                                t.trigger(S.LIVE_BACK_BUFFER_REACHED, {
                                                    bufferEnd: u
                                                });
                                            else if (n.ended && a.end(a.length - 1) - s < 2 * o)
                                                return void w.info("[buffer-controller]: Cannot flush " + r + " back buffer while SourceBuffer is in ended state");
                                            t.trigger(S.BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: u,
                                                type: r
                                            })
                                        }
                                    }
                                }))
                            }
                        }
                    }
                }, e.updateMediaElementDuration = function() {
                    if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                        var t = this.details,
                            e = this.hls,
                            r = this.media,
                            i = this.mediaSource,
                            n = t.fragments[0].start + t.totalduration,
                            a = r.duration,
                            s = E(i.duration) ? i.duration : 0;
                        t.live && e.config.liveDurationInfinity ? (w.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(t)) : (n > s && n > a || !E(a)) && (w.log("[buffer-controller]: Updating Media Source duration to " + n.toFixed(3)), i.duration = n)
                    }
                }, e.updateSeekableRange = function(t) {
                    var e = this.mediaSource,
                        r = t.fragments;
                    if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                        var i = Math.max(0, r[0].start),
                            n = Math.max(i, i + t.totalduration);
                        e.setLiveSeekableRange(i, n)
                    }
                }, e.checkPendingTracks = function() {
                    var t = this.bufferCodecEventsExpected,
                        e = this.operationQueue,
                        r = this.pendingTracks,
                        i = Object.keys(r).length;
                    if (i && !t || 2 === i) {
                        this.createSourceBuffers(r),
                        this.pendingTracks = {};
                        var n = this.getSourceBufferTypes();
                        if (n.length)
                            this.hls.trigger(S.BUFFER_CREATED, {
                                tracks: this.tracks
                            }),
                            n.forEach((function(t) {
                                e.executeNext(t)
                            }));
                        else {
                            var a = new Error("could not create source buffer for media codec(s)");
                            this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                error: a,
                                reason: a.message
                            })
                        }
                    }
                }, e.createSourceBuffers = function(t) {
                    var e = this.sourceBuffer,
                        r = this.mediaSource;
                    if (!r)
                        throw Error("createSourceBuffers called when mediaSource was null");
                    for (var i in t)
                        if (!e[i]) {
                            var n = t[i];
                            if (!n)
                                throw Error("source buffer exists for track " + i + ", however track does not");
                            var a = n.levelCodec || n.codec,
                                s = n.container + ";codecs=" + a;
                            w.log("[buffer-controller]: creating sourceBuffer(" + s + ")");
                            try {
                                var o = e[i] = r.addSourceBuffer(s),
                                    l = i;
                                this.addBufferListener(l, "updatestart", this._onSBUpdateStart),
                                this.addBufferListener(l, "updateend", this._onSBUpdateEnd),
                                this.addBufferListener(l, "error", this._onSBUpdateError),
                                this.tracks[i] = {
                                    buffer: o,
                                    codec: a,
                                    container: n.container,
                                    levelCodec: n.levelCodec,
                                    metadata: n.metadata,
                                    id: n.id
                                }
                            } catch (t) {
                                w.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message),
                                this.hls.trigger(S.ERROR, {
                                    type: L.MEDIA_ERROR,
                                    details: R.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    error: t,
                                    mimeType: s
                                })
                            }
                        }
                }, e._onSBUpdateStart = function(t) {
                    this.operationQueue.current(t).onStart()
                }, e._onSBUpdateEnd = function(t) {
                    var e = this.operationQueue;
                    e.current(t).onComplete(),
                    e.shiftAndExecuteNext(t)
                }, e._onSBUpdateError = function(t, e) {
                    var r = new Error(t + " SourceBuffer error");
                    w.error("[buffer-controller]: " + r, e),
                    this.hls.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.BUFFER_APPENDING_ERROR,
                        error: r,
                        fatal: !1
                    });
                    var i = this.operationQueue.current(t);
                    i && i.onError(e)
                }, e.removeExecutor = function(t, e, r) {
                    var i = this.media,
                        n = this.mediaSource,
                        a = this.operationQueue,
                        s = this.sourceBuffer[t];
                    if (!i || !n || !s)
                        return w.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void a.shiftAndExecuteNext(t);
                    var o = E(i.duration) ? i.duration : 1 / 0,
                        l = E(n.duration) ? n.duration : 1 / 0,
                        u = Math.max(0, e),
                        h = Math.min(r, o, l);
                    h > u && !s.ending ? (s.ended = !1, w.log("[buffer-controller]: Removing [" + u + "," + h + "] from the " + t + " SourceBuffer"), s.remove(u, h)) : a.shiftAndExecuteNext(t)
                }, e.appendExecutor = function(t, e) {
                    var r = this.operationQueue,
                        i = this.sourceBuffer[e];
                    if (!i)
                        return w.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), void r.shiftAndExecuteNext(e);
                    i.ended = !1,
                    i.appendBuffer(t)
                }, e.blockBuffers = function(t, e) {
                    var r = this;
                    if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length)
                        return w.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
                    var i = this.operationQueue,
                        n = e.map((function(t) {
                            return i.appendBlocker(t)
                        }));
                    Promise.all(n).then((function() {
                        t(),
                        e.forEach((function(t) {
                            var e = r.sourceBuffer[t];
                            null != e && e.updating || i.shiftAndExecuteNext(t)
                        }))
                    }))
                }, e.getSourceBufferTypes = function() {
                    return Object.keys(this.sourceBuffer)
                }, e.addBufferListener = function(t, e, r) {
                    var i = this.sourceBuffer[t];
                    if (i) {
                        var n = r.bind(this, t);
                        this.listeners[t].push({
                            event: e,
                            listener: n
                        }),
                        i.addEventListener(e, n)
                    }
                }, e.removeBufferListeners = function(t) {
                    var e = this.sourceBuffer[t];
                    e && this.listeners[t].forEach((function(t) {
                        e.removeEventListener(t.event, t.listener)
                    }))
                }, t
            }(),
            wn = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            },
            Cn = function(t) {
                var e = t;
                return wn.hasOwnProperty(t) && (e = wn[t]), String.fromCharCode(e)
            },
            _n = 15,
            Pn = 100,
            xn = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            },
            Fn = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            },
            Mn = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            },
            On = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            },
            Nn = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
            Un = function() {
                function t() {
                    this.time = null,
                    this.verboseLevel = 0
                }
                return t.prototype.log = function(t, e) {
                    if (this.verboseLevel >= t) {
                        var r = "function" == typeof e ? e() : e;
                        w.log(this.time + " [" + t + "] " + r)
                    }
                }, t
            }(),
            Bn = function(t) {
                for (var e = [], r = 0; r < t.length; r++)
                    e.push(t[r].toString(16));
                return e
            },
            Gn = function() {
                function t(t, e, r, i, n) {
                    this.foreground = void 0,
                    this.underline = void 0,
                    this.italics = void 0,
                    this.background = void 0,
                    this.flash = void 0,
                    this.foreground = t || "white",
                    this.underline = e || !1,
                    this.italics = r || !1,
                    this.background = i || "black",
                    this.flash = n || !1
                }
                var e = t.prototype;
                return e.reset = function() {
                    this.foreground = "white",
                    this.underline = !1,
                    this.italics = !1,
                    this.background = "black",
                    this.flash = !1
                }, e.setStyles = function(t) {
                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                        var i = e[r];
                        t.hasOwnProperty(i) && (this[i] = t[i])
                    }
                }, e.isDefault = function() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, e.equals = function(t) {
                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                }, e.copy = function(t) {
                    this.foreground = t.foreground,
                    this.underline = t.underline,
                    this.italics = t.italics,
                    this.background = t.background,
                    this.flash = t.flash
                }, e.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }, t
            }(),
            Kn = function() {
                function t(t, e, r, i, n, a) {
                    this.uchar = void 0,
                    this.penState = void 0,
                    this.uchar = t || " ",
                    this.penState = new Gn(e, r, i, n, a)
                }
                var e = t.prototype;
                return e.reset = function() {
                    this.uchar = " ",
                    this.penState.reset()
                }, e.setChar = function(t, e) {
                    this.uchar = t,
                    this.penState.copy(e)
                }, e.setPenState = function(t) {
                    this.penState.copy(t)
                }, e.equals = function(t) {
                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                }, e.copy = function(t) {
                    this.uchar = t.uchar,
                    this.penState.copy(t.penState)
                }, e.isEmpty = function() {
                    return " " === this.uchar && this.penState.isDefault()
                }, t
            }(),
            Hn = function() {
                function t(t) {
                    this.chars = void 0,
                    this.pos = void 0,
                    this.currPenState = void 0,
                    this.cueStartTime = void 0,
                    this.logger = void 0,
                    this.chars = [];
                    for (var e = 0; e < Pn; e++)
                        this.chars.push(new Kn);
                    this.logger = t,
                    this.pos = 0,
                    this.currPenState = new Gn
                }
                var e = t.prototype;
                return e.equals = function(t) {
                    for (var e = !0, r = 0; r < Pn; r++)
                        if (!this.chars[r].equals(t.chars[r])) {
                            e = !1;
                            break
                        }
                    return e
                }, e.copy = function(t) {
                    for (var e = 0; e < Pn; e++)
                        this.chars[e].copy(t.chars[e])
                }, e.isEmpty = function() {
                    for (var t = !0, e = 0; e < Pn; e++)
                        if (!this.chars[e].isEmpty()) {
                            t = !1;
                            break
                        }
                    return t
                }, e.setCursor = function(t) {
                    this.pos !== t && (this.pos = t),
                    this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Pn && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Pn)
                }, e.moveCursor = function(t) {
                    var e = this.pos + t;
                    if (t > 1)
                        for (var r = this.pos + 1; r < e + 1; r++)
                            this.chars[r].setPenState(this.currPenState);
                    this.setCursor(e)
                }, e.backSpace = function() {
                    this.moveCursor(-1),
                    this.chars[this.pos].setChar(" ", this.currPenState)
                }, e.insertChar = function(t) {
                    var e = this;
                    t >= 144 && this.backSpace();
                    var r = Cn(t);
                    this.pos >= Pn ? this.logger.log(0, (function() {
                        return "Cannot insert " + t.toString(16) + " (" + r + ") at position " + e.pos + ". Skipping it!"
                    })) : (this.chars[this.pos].setChar(r, this.currPenState), this.moveCursor(1))
                }, e.clearFromPos = function(t) {
                    var e;
                    for (e = t; e < Pn; e++)
                        this.chars[e].reset()
                }, e.clear = function() {
                    this.clearFromPos(0),
                    this.pos = 0,
                    this.currPenState.reset()
                }, e.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos)
                }, e.getTextString = function() {
                    for (var t = [], e = !0, r = 0; r < Pn; r++) {
                        var i = this.chars[r].uchar;
                        " " !== i && (e = !1),
                        t.push(i)
                    }
                    return e ? "" : t.join("")
                }, e.setPenStyles = function(t) {
                    this.currPenState.setStyles(t),
                    this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(),
            Vn = function() {
                function t(t) {
                    this.rows = void 0,
                    this.currRow = void 0,
                    this.nrRollUpRows = void 0,
                    this.lastOutputScreen = void 0,
                    this.logger = void 0,
                    this.rows = [];
                    for (var e = 0; e < _n; e++)
                        this.rows.push(new Hn(t));
                    this.logger = t,
                    this.currRow = 14,
                    this.nrRollUpRows = null,
                    this.lastOutputScreen = null,
                    this.reset()
                }
                var e = t.prototype;
                return e.reset = function() {
                    for (var t = 0; t < _n; t++)
                        this.rows[t].clear();
                    this.currRow = 14
                }, e.equals = function(t) {
                    for (var e = !0, r = 0; r < _n; r++)
                        if (!this.rows[r].equals(t.rows[r])) {
                            e = !1;
                            break
                        }
                    return e
                }, e.copy = function(t) {
                    for (var e = 0; e < _n; e++)
                        this.rows[e].copy(t.rows[e])
                }, e.isEmpty = function() {
                    for (var t = !0, e = 0; e < _n; e++)
                        if (!this.rows[e].isEmpty()) {
                            t = !1;
                            break
                        }
                    return t
                }, e.backSpace = function() {
                    this.rows[this.currRow].backSpace()
                }, e.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow()
                }, e.insertChar = function(t) {
                    this.rows[this.currRow].insertChar(t)
                }, e.setPen = function(t) {
                    this.rows[this.currRow].setPenStyles(t)
                }, e.moveCursor = function(t) {
                    this.rows[this.currRow].moveCursor(t)
                }, e.setCursor = function(t) {
                    this.logger.log(2, "setCursor: " + t),
                    this.rows[this.currRow].setCursor(t)
                }, e.setPAC = function(t) {
                    this.logger.log(2, (function() {
                        return "pacData = " + JSON.stringify(t)
                    }));
                    var e = t.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                        for (var r = 0; r < _n; r++)
                            this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows,
                            n = this.lastOutputScreen;
                        if (n) {
                            var a = n.rows[i].cueStartTime,
                                s = this.logger.time;
                            if (a && null !== s && a < s)
                                for (var o = 0; o < this.nrRollUpRows; o++)
                                    this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[i + o])
                        }
                    }
                    this.currRow = e;
                    var l = this.rows[this.currRow];
                    if (null !== t.indent) {
                        var u = t.indent,
                            h = Math.max(u - 1, 0);
                        l.setCursor(t.indent),
                        t.color = l.chars[h].penState.foreground
                    }
                    var d = {
                        foreground: t.color,
                        underline: t.underline,
                        italics: t.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(d)
                }, e.setBkgData = function(t) {
                    this.logger.log(2, (function() {
                        return "bkgData = " + JSON.stringify(t)
                    })),
                    this.backSpace(),
                    this.setPen(t),
                    this.insertChar(32)
                }, e.setRollUpRows = function(t) {
                    this.nrRollUpRows = t
                }, e.rollUp = function() {
                    var t = this;
                    if (null !== this.nrRollUpRows) {
                        this.logger.log(1, (function() {
                            return t.getDisplayText()
                        }));
                        var e = this.currRow + 1 - this.nrRollUpRows,
                            r = this.rows.splice(e, 1)[0];
                        r.clear(),
                        this.rows.splice(this.currRow, 0, r),
                        this.logger.log(2, "Rolling up")
                    } else
                        this.logger.log(3, "roll_up but nrRollUpRows not set yet")
                }, e.getDisplayText = function(t) {
                    t = t || !1;
                    for (var e = [], r = "", i = -1, n = 0; n < _n; n++) {
                        var a = this.rows[n].getTextString();
                        a && (i = n + 1, t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, e.getTextAndFormat = function() {
                    return this.rows
                }, t
            }(),
            Yn = function() {
                function t(t, e, r) {
                    this.chNr = void 0,
                    this.outputFilter = void 0,
                    this.mode = void 0,
                    this.verbose = void 0,
                    this.displayedMemory = void 0,
                    this.nonDisplayedMemory = void 0,
                    this.lastOutputScreen = void 0,
                    this.currRollUpRow = void 0,
                    this.writeScreen = void 0,
                    this.cueStartTime = void 0,
                    this.logger = void 0,
                    this.chNr = t,
                    this.outputFilter = e,
                    this.mode = null,
                    this.verbose = 0,
                    this.displayedMemory = new Vn(r),
                    this.nonDisplayedMemory = new Vn(r),
                    this.lastOutputScreen = new Vn(r),
                    this.currRollUpRow = this.displayedMemory.rows[14],
                    this.writeScreen = this.displayedMemory,
                    this.mode = null,
                    this.cueStartTime = null,
                    this.logger = r
                }
                var e = t.prototype;
                return e.reset = function() {
                    this.mode = null,
                    this.displayedMemory.reset(),
                    this.nonDisplayedMemory.reset(),
                    this.lastOutputScreen.reset(),
                    this.outputFilter.reset(),
                    this.currRollUpRow = this.displayedMemory.rows[14],
                    this.writeScreen = this.displayedMemory,
                    this.mode = null,
                    this.cueStartTime = null
                }, e.getHandler = function() {
                    return this.outputFilter
                }, e.setHandler = function(t) {
                    this.outputFilter = t
                }, e.setPAC = function(t) {
                    this.writeScreen.setPAC(t)
                }, e.setBkgData = function(t) {
                    this.writeScreen.setBkgData(t)
                }, e.setMode = function(t) {
                    t !== this.mode && (this.mode = t, this.logger.log(2, (function() {
                        return "MODE=" + t
                    })), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                }, e.insertChars = function(t) {
                    for (var e = this, r = 0; r < t.length; r++)
                        this.writeScreen.insertChar(t[r]);
                    var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    this.logger.log(2, (function() {
                        return i + ": " + e.writeScreen.getDisplayText(!0)
                    })),
                    "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(1, (function() {
                        return "DISPLAYED: " + e.displayedMemory.getDisplayText(!0)
                    })), this.outputDataUpdate())
                }, e.ccRCL = function() {
                    this.logger.log(2, "RCL - Resume Caption Loading"),
                    this.setMode("MODE_POP-ON")
                }, e.ccBS = function() {
                    this.logger.log(2, "BS - BackSpace"),
                    "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, e.ccAOF = function() {}, e.ccAON = function() {}, e.ccDER = function() {
                    this.logger.log(2, "DER- Delete to End of Row"),
                    this.writeScreen.clearToEndOfRow(),
                    this.outputDataUpdate()
                }, e.ccRU = function(t) {
                    this.logger.log(2, "RU(" + t + ") - Roll Up"),
                    this.writeScreen = this.displayedMemory,
                    this.setMode("MODE_ROLL-UP"),
                    this.writeScreen.setRollUpRows(t)
                }, e.ccFON = function() {
                    this.logger.log(2, "FON - Flash On"),
                    this.writeScreen.setPen({
                        flash: !0
                    })
                }, e.ccRDC = function() {
                    this.logger.log(2, "RDC - Resume Direct Captioning"),
                    this.setMode("MODE_PAINT-ON")
                }, e.ccTR = function() {
                    this.logger.log(2, "TR"),
                    this.setMode("MODE_TEXT")
                }, e.ccRTD = function() {
                    this.logger.log(2, "RTD"),
                    this.setMode("MODE_TEXT")
                }, e.ccEDM = function() {
                    this.logger.log(2, "EDM - Erase Displayed Memory"),
                    this.displayedMemory.reset(),
                    this.outputDataUpdate(!0)
                }, e.ccCR = function() {
                    this.logger.log(2, "CR - Carriage Return"),
                    this.writeScreen.rollUp(),
                    this.outputDataUpdate(!0)
                }, e.ccENM = function() {
                    this.logger.log(2, "ENM - Erase Non-displayed Memory"),
                    this.nonDisplayedMemory.reset()
                }, e.ccEOC = function() {
                    var t = this;
                    if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var e = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory,
                        this.nonDisplayedMemory = e,
                        this.writeScreen = this.nonDisplayedMemory,
                        this.logger.log(1, (function() {
                            return "DISP: " + t.displayedMemory.getDisplayText()
                        }))
                    }
                    this.outputDataUpdate(!0)
                }, e.ccTO = function(t) {
                    this.logger.log(2, "TO(" + t + ") - Tab Offset"),
                    this.writeScreen.moveCursor(t)
                }, e.ccMIDROW = function(t) {
                    var e = {
                        flash: !1
                    };
                    if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics)
                        e.foreground = "white";
                    else {
                        var r = Math.floor(t / 2) - 16;
                        e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                    }
                    this.logger.log(2, "MIDROW: " + JSON.stringify(e)),
                    this.writeScreen.setPen(e)
                }, e.outputDataUpdate = function(t) {
                    void 0 === t && (t = !1);
                    var e = this.logger.time;
                    null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                }, e.cueSplitAtTime = function(t) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                }, t
            }(),
            Wn = function() {
                function t(t, e, r) {
                    this.channels = void 0,
                    this.currentChannel = 0,
                    this.cmdHistory = void 0,
                    this.logger = void 0;
                    var i = new Un;
                    this.channels = [null, new Yn(t, e, i), new Yn(t + 1, r, i)],
                    this.cmdHistory = {
                        a: null,
                        b: null
                    },
                    this.logger = i
                }
                var e = t.prototype;
                return e.getHandler = function(t) {
                    return this.channels[t].getHandler()
                }, e.setHandler = function(t, e) {
                    this.channels[t].setHandler(e)
                }, e.addData = function(t, e) {
                    var r,
                        i,
                        n,
                        a = !1;
                    this.logger.time = t;
                    for (var s = 0; s < e.length; s += 2)
                        if (i = 127 & e[s], n = 127 & e[s + 1], 0 !== i || 0 !== n) {
                            if (this.logger.log(3, "[" + Bn([e[s], e[s + 1]]) + "] -> (" + Bn([i, n]) + ")"), (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) {
                                var o = this.currentChannel;
                                o && o > 0 ? this.channels[o].insertChars(a) : this.logger.log(2, "No channel found yet. TEXT-MODE?")
                            }
                            r || a || this.logger.log(2, "Couldn't parse cleaned data " + Bn([i, n]) + " orig: " + Bn([e[s], e[s + 1]]))
                        }
                }, e.parseCmd = function(t, e) {
                    var r = this.cmdHistory;
                    if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35))
                        return !1;
                    if (qn(t, e, r))
                        return jn(null, null, r), this.logger.log(3, "Repeated command (" + Bn([t, e]) + ") is dropped"), !0;
                    var i = 20 === t || 21 === t || 23 === t ? 1 : 2,
                        n = this.channels[i];
                    return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), jn(t, e, r), this.currentChannel = i, !0
                }, e.parseMidrow = function(t, e) {
                    var r = 0;
                    if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                        if ((r = 17 === t ? 1 : 2) !== this.currentChannel)
                            return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
                        var i = this.channels[r];
                        return !!i && (i.ccMIDROW(e), this.logger.log(3, "MIDROW (" + Bn([t, e]) + ")"), !0)
                    }
                    return !1
                }, e.parsePAC = function(t, e) {
                    var r,
                        i = this.cmdHistory;
                    if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95))
                        return !1;
                    if (qn(t, e, i))
                        return jn(null, null, i), !0;
                    var n = t <= 23 ? 1 : 2;
                    r = e >= 64 && e <= 95 ? 1 === n ? xn[t] : Mn[t] : 1 === n ? Fn[t] : On[t];
                    var a = this.channels[n];
                    return !!a && (a.setPAC(this.interpretPAC(r, e)), jn(t, e, i), this.currentChannel = n, !0)
                }, e.interpretPAC = function(t, e) {
                    var r,
                        i = {
                            color: null,
                            italics: !1,
                            indent: null,
                            underline: !1,
                            row: t
                        };
                    return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }, e.parseChars = function(t, e) {
                    var r,
                        i,
                        n = null,
                        a = null;
                    if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), a >= 17 && a <= 19 ? (i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(2, "Special char '" + Cn(i) + "' in channel " + r), n = [i]) : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]), n) {
                        var s = Bn(n);
                        this.logger.log(3, "Char codes =  " + s.join(",")),
                        jn(t, e, this.cmdHistory)
                    }
                    return n
                }, e.parseBackgroundAttributes = function(t, e) {
                    var r;
                    if (!((16 === t || 24 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 45 && e <= 47))
                        return !1;
                    var i = {};
                    16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = Nn[r], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0));
                    var n = t <= 23 ? 1 : 2;
                    return this.channels[n].setBkgData(i), jn(t, e, this.cmdHistory), !0
                }, e.reset = function() {
                    for (var t = 0; t < Object.keys(this.channels).length; t++) {
                        var e = this.channels[t];
                        e && e.reset()
                    }
                    this.cmdHistory = {
                        a: null,
                        b: null
                    }
                }, e.cueSplitAtTime = function(t) {
                    for (var e = 0; e < this.channels.length; e++) {
                        var r = this.channels[e];
                        r && r.cueSplitAtTime(t)
                    }
                }, t
            }();
        function jn(t, e, r) {
            r.a = t,
            r.b = e
        }
        function qn(t, e, r) {
            return r.a === t && r.b === e
        }
        var Xn = function() {
                function t(t, e) {
                    this.timelineController = void 0,
                    this.cueRanges = [],
                    this.trackName = void 0,
                    this.startTime = null,
                    this.endTime = null,
                    this.screen = null,
                    this.timelineController = t,
                    this.trackName = e
                }
                var e = t.prototype;
                return e.dispatchCue = function() {
                    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
                }, e.newCue = function(t, e, r) {
                    (null === this.startTime || this.startTime > t) && (this.startTime = t),
                    this.endTime = e,
                    this.screen = r,
                    this.timelineController.createCaptionsTrack(this.trackName)
                }, e.reset = function() {
                    this.cueRanges = [],
                    this.startTime = null
                }, t
            }(),
            zn = function() {
                if ("undefined" != typeof self && self.VTTCue)
                    return self.VTTCue;
                var t = ["", "lr", "rl"],
                    e = ["start", "middle", "end", "left", "right"];
                function r(t, e) {
                    if ("string" != typeof e)
                        return !1;
                    if (!Array.isArray(t))
                        return !1;
                    var r = e.toLowerCase();
                    return !!~t.indexOf(r) && r
                }
                function i(t) {
                    return r(e, t)
                }
                function n(t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i];
                    for (var n = 1; n < arguments.length; n++) {
                        var a = arguments[n];
                        for (var s in a)
                            t[s] = a[s]
                    }
                    return t
                }
                function a(e, a, s) {
                    var o = this,
                        l = {
                            enumerable: !0
                        };
                    o.hasBeenReset = !1;
                    var u = "",
                        h = !1,
                        d = e,
                        c = a,
                        f = s,
                        g = null,
                        v = "",
                        m = !0,
                        p = "auto",
                        y = "start",
                        T = 50,
                        E = "middle",
                        S = 50,
                        L = "middle";
                    Object.defineProperty(o, "id", n({}, l, {
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            u = "" + t
                        }
                    })),
                    Object.defineProperty(o, "pauseOnExit", n({}, l, {
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            h = !!t
                        }
                    })),
                    Object.defineProperty(o, "startTime", n({}, l, {
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            if ("number" != typeof t)
                                throw new TypeError("Start time must be set to a number.");
                            d = t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "endTime", n({}, l, {
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            if ("number" != typeof t)
                                throw new TypeError("End time must be set to a number.");
                            c = t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "text", n({}, l, {
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            f = "" + t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "region", n({}, l, {
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            g = t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "vertical", n({}, l, {
                        get: function() {
                            return v
                        },
                        set: function(e) {
                            var i = function(e) {
                                return r(t, e)
                            }(e);
                            if (!1 === i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            v = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "snapToLines", n({}, l, {
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            m = !!t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "line", n({}, l, {
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            if ("number" != typeof t && "auto" !== t)
                                throw new SyntaxError("An invalid number or illegal string was specified.");
                            p = t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "lineAlign", n({}, l, {
                        get: function() {
                            return y
                        },
                        set: function(t) {
                            var e = i(t);
                            if (!e)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            y = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "position", n({}, l, {
                        get: function() {
                            return T
                        },
                        set: function(t) {
                            if (t < 0 || t > 100)
                                throw new Error("Position must be between 0 and 100.");
                            T = t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "positionAlign", n({}, l, {
                        get: function() {
                            return E
                        },
                        set: function(t) {
                            var e = i(t);
                            if (!e)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            E = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "size", n({}, l, {
                        get: function() {
                            return S
                        },
                        set: function(t) {
                            if (t < 0 || t > 100)
                                throw new Error("Size must be between 0 and 100.");
                            S = t,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(o, "align", n({}, l, {
                        get: function() {
                            return L
                        },
                        set: function(t) {
                            var e = i(t);
                            if (!e)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            L = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    o.displayState = void 0
                }
                return a.prototype.getCueAsHTML = function() {
                    return self.WebVTT.convertCueToDOMTree(self, this.text)
                }, a
            }(),
            Qn = function() {
                function t() {}
                return t.prototype.decode = function(t, e) {
                    if (!t)
                        return "";
                    if ("string" != typeof t)
                        throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }, t
            }();
        function $n(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
            }
            var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
            return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
        }
        var Jn = function() {
            function t() {
                this.values = Object.create(null)
            }
            var e = t.prototype;
            return e.set = function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            }, e.get = function(t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            }, e.has = function(t) {
                return t in this.values
            }, e.alt = function(t, e, r) {
                for (var i = 0; i < r.length; ++i)
                    if (e === r[i]) {
                        this.set(t, e);
                        break
                    }
            }, e.integer = function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }, e.percent = function(t, e) {
                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                    var r = parseFloat(e);
                    if (r >= 0 && r <= 100)
                        return this.set(t, r), !0
                }
                return !1
            }, t
        }();
        function Zn(t, e, r, i) {
            var n = i ? t.split(i) : [t];
            for (var a in n)
                if ("string" == typeof n[a]) {
                    var s = n[a].split(r);
                    2 === s.length && e(s[0], s[1])
                }
        }
        var ta = new zn(0, 0, ""),
            ea = "middle" === ta.align ? "middle" : "center";
        function ra(t, e, r) {
            var i = t;
            function n() {
                var e = $n(t);
                if (null === e)
                    throw new Error("Malformed timestamp: " + i);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }
            function a() {
                t = t.replace(/^\s+/, "")
            }
            if (a(), e.startTime = n(), a(), "--\x3e" !== t.slice(0, 3))
                throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            t = t.slice(3),
            a(),
            e.endTime = n(),
            a(),
            function(t, e) {
                var i = new Jn;
                Zn(t, (function(t, e) {
                    var n;
                    switch (t) {
                    case "region":
                        for (var a = r.length - 1; a >= 0; a--)
                            if (r[a].id === e) {
                                i.set(t, r[a].region);
                                break
                            }
                        break;
                    case "vertical":
                        i.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        n = e.split(","),
                        i.integer(t, n[0]),
                        i.percent(t, n[0]) && i.set("snapToLines", !1),
                        i.alt(t, n[0], ["auto"]),
                        2 === n.length && i.alt("lineAlign", n[1], ["start", ea, "end"]);
                        break;
                    case "position":
                        n = e.split(","),
                        i.percent(t, n[0]),
                        2 === n.length && i.alt("positionAlign", n[1], ["start", ea, "end", "line-left", "line-right", "auto"]);
                        break;
                    case "size":
                        i.percent(t, e);
                        break;
                    case "align":
                        i.alt(t, e, ["start", ea, "end", "left", "right"])
                    }
                }), /:/, /\s/),
                e.region = i.get("region", null),
                e.vertical = i.get("vertical", "");
                var n = i.get("line", "auto");
                "auto" === n && -1 === ta.line && (n = -1),
                e.line = n,
                e.lineAlign = i.get("lineAlign", "start"),
                e.snapToLines = i.get("snapToLines", !0),
                e.size = i.get("size", 100),
                e.align = i.get("align", ea);
                var a = i.get("position", "auto");
                "auto" === a && 50 === ta.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50),
                e.position = a
            }(t, e)
        }
        function ia(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }
        var na = function() {
                function t() {
                    this.state = "INITIAL",
                    this.buffer = "",
                    this.decoder = new Qn,
                    this.regionList = [],
                    this.cue = null,
                    this.oncue = void 0,
                    this.onparsingerror = void 0,
                    this.onflush = void 0
                }
                var e = t.prototype;
                return e.parse = function(t) {
                    var e = this;
                    function r() {
                        var t = e.buffer,
                            r = 0;
                        for (t = ia(t); r < t.length && "\r" !== t[r] && "\n" !== t[r];)
                            ++r;
                        var i = t.slice(0, r);
                        return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.slice(r), i
                    }
                    t && (e.buffer += e.decoder.decode(t, {
                        stream: !0
                    }));
                    try {
                        var i = "";
                        if ("INITIAL" === e.state) {
                            if (!/\r\n|\n/.test(e.buffer))
                                return this;
                            var n = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (null == n || !n[0])
                                throw new Error("Malformed WebVTT signature.");
                            e.state = "HEADER"
                        }
                        for (var a = !1; e.buffer;) {
                            if (!/\r\n|\n/.test(e.buffer))
                                return this;
                            switch (a ? a = !1 : i = r(), e.state) {
                            case "HEADER":
                                /:/.test(i) ? Zn(i, (function(t, e) {}), /:/) : i || (e.state = "ID");
                                continue;
                            case "NOTE":
                                i || (e.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(i)) {
                                    e.state = "NOTE";
                                    break
                                }
                                if (!i)
                                    continue;
                                if (e.cue = new zn(0, 0, ""), e.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                    e.cue.id = i;
                                    continue
                                }
                            case "CUE":
                                if (!e.cue) {
                                    e.state = "BADCUE";
                                    continue
                                }
                                try {
                                    ra(i, e.cue, e.regionList)
                                } catch (t) {
                                    e.cue = null,
                                    e.state = "BADCUE";
                                    continue
                                }
                                e.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var s = -1 !== i.indexOf("--\x3e");
                                if (!i || s && (a = !0)) {
                                    e.oncue && e.cue && e.oncue(e.cue),
                                    e.cue = null,
                                    e.state = "ID";
                                    continue
                                }
                                if (null === e.cue)
                                    continue;
                                e.cue.text && (e.cue.text += "\n"),
                                e.cue.text += i;
                                continue;
                            case "BADCUE":
                                i || (e.state = "ID")
                            }
                        }
                    } catch (t) {
                        "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue),
                        e.cue = null,
                        e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                }, e.flush = function() {
                    var t = this;
                    try {
                        if ((t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state || "BADWEBVTT" === t.state)
                            throw new Error("Malformed WebVTT signature.")
                    } catch (e) {
                        t.onparsingerror && t.onparsingerror(e)
                    }
                    return t.onflush && t.onflush(), this
                }, t
            }(),
            aa = /\r\n|\n\r|\n|\r/g,
            sa = function(t, e, r) {
                return void 0 === r && (r = 0), t.slice(r, r + e.length) === e
            },
            oa = function(t) {
                for (var e = 5381, r = t.length; r;)
                    e = 33 * e ^ t.charCodeAt(--r);
                return (e >>> 0).toString()
            };
        function la(t, e, r) {
            return oa(t.toString()) + oa(e.toString()) + oa(r)
        }
        function ua(t, e, r, i, n, a, s) {
            var o,
                l,
                u,
                h = new na,
                d = pt(new Uint8Array(t)).trim().replace(aa, "\n").split("\n"),
                c = [],
                f = e ? (o = e.baseTime, void 0 === (l = e.timescale) && (l = 1), Ui(o, 9e4, 1 / l)) : 0,
                g = "00:00.000",
                v = 0,
                m = 0,
                p = !0;
            h.oncue = function(t) {
                var a = r[i],
                    s = r.ccOffset,
                    o = (v - f) / 9e4;
                if (null != a && a.new && (void 0 !== m ? s = r.ccOffset = a.start : function(t, e, r) {
                    var i = t[e],
                        n = t[i.prevCC];
                    if (!n || !n.new && i.new)
                        return t.ccOffset = t.presentationOffset = i.start, void (i.new = !1);
                    for (; null != (a = n) && a.new;) {
                        var a;
                        t.ccOffset += i.start - n.start,
                        i.new = !1,
                        n = t[(i = n).prevCC]
                    }
                    t.presentationOffset = r
                }(r, i, o)), o) {
                    if (!e)
                        return void (u = new Error("Missing initPTS for VTT MPEGTS"));
                    s = o - r.presentationOffset
                }
                var l = t.endTime - t.startTime,
                    h = Vi(9e4 * (t.startTime + s - m), 9e4 * n) / 9e4;
                t.startTime = Math.max(h, 0),
                t.endTime = Math.max(h + l, 0);
                var d = t.text.trim();
                t.text = decodeURIComponent(encodeURIComponent(d)),
                t.id || (t.id = la(t.startTime, t.endTime, d)),
                t.endTime > 0 && c.push(t)
            },
            h.onparsingerror = function(t) {
                u = t
            },
            h.onflush = function() {
                u ? s(u) : a(c)
            },
            d.forEach((function(t) {
                if (p) {
                    if (sa(t, "X-TIMESTAMP-MAP=")) {
                        p = !1,
                        t.slice(16).split(",").forEach((function(t) {
                            sa(t, "LOCAL:") ? g = t.slice(6) : sa(t, "MPEGTS:") && (v = parseInt(t.slice(7)))
                        }));
                        try {
                            m = function(t) {
                                var e = parseInt(t.slice(-3)),
                                    r = parseInt(t.slice(-6, -4)),
                                    i = parseInt(t.slice(-9, -7)),
                                    n = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
                                if (!(E(e) && E(r) && E(i) && E(n)))
                                    throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                return e += 1e3 * r, (e += 6e4 * i) + 36e5 * n
                            }(g) / 1e3
                        } catch (t) {
                            u = t
                        }
                        return
                    }
                    "" === t && (p = !1)
                }
                h.parse(t + "\n")
            })),
            h.flush()
        }
        var ha = "stpp.ttml.im1t",
            da = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
            ca = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
            fa = {
                left: "start",
                center: "center",
                right: "end",
                start: "start",
                end: "end"
            };
        function ga(t, e, r, i) {
            var n = It(new Uint8Array(t), ["mdat"]);
            if (0 !== n.length) {
                var a,
                    s,
                    l,
                    u,
                    h = n.map((function(t) {
                        return pt(t)
                    })),
                    d = (a = e.baseTime, s = 1, void 0 === (l = e.timescale) && (l = 1), void 0 === u && (u = !1), Ui(a, s, 1 / l, u));
                try {
                    h.forEach((function(t) {
                        return r(function(t, e) {
                            var r = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                            if (!r)
                                throw new Error("Invalid ttml");
                            var i = {
                                    frameRate: 30,
                                    subFrameRate: 1,
                                    frameRateMultiplier: 0,
                                    tickRate: 0
                                },
                                n = Object.keys(i).reduce((function(t, e) {
                                    return t[e] = r.getAttribute("ttp:" + e) || i[e], t
                                }), {}),
                                a = "preserve" !== r.getAttribute("xml:space"),
                                s = ma(va(r, "styling", "style")),
                                l = ma(va(r, "layout", "region")),
                                u = va(r, "body", "[begin]");
                            return [].map.call(u, (function(t) {
                                var r = pa(t, a);
                                if (!r || !t.hasAttribute("begin"))
                                    return null;
                                var i = Ea(t.getAttribute("begin"), n),
                                    u = Ea(t.getAttribute("dur"), n),
                                    h = Ea(t.getAttribute("end"), n);
                                if (null === i)
                                    throw Ta(t);
                                if (null === h) {
                                    if (null === u)
                                        throw Ta(t);
                                    h = i + u
                                }
                                var d = new zn(i - e, h - e, r);
                                d.id = la(d.startTime, d.endTime, d.text);
                                var c = function(t, e, r) {
                                        var i = "http://www.w3.org/ns/ttml#styling",
                                            n = null,
                                            a = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"],
                                            s = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
                                        return s && r.hasOwnProperty(s) && (n = r[s]), a.reduce((function(r, a) {
                                            var s = ya(e, i, a) || ya(t, i, a) || ya(n, i, a);
                                            return s && (r[a] = s), r
                                        }), {})
                                    }(l[t.getAttribute("region")], s[t.getAttribute("style")], s),
                                    f = c.textAlign;
                                if (f) {
                                    var g = fa[f];
                                    g && (d.lineAlign = g),
                                    d.align = f
                                }
                                return o(d, c), d
                            })).filter((function(t) {
                                return null !== t
                            }))
                        }(t, d))
                    }))
                } catch (t) {
                    i(t)
                }
            } else
                i(new Error("Could not parse IMSC1 mdat"))
        }
        function va(t, e, r) {
            var i = t.getElementsByTagName(e)[0];
            return i ? [].slice.call(i.querySelectorAll(r)) : []
        }
        function ma(t) {
            return t.reduce((function(t, e) {
                var r = e.getAttribute("xml:id");
                return r && (t[r] = e), t
            }), {})
        }
        function pa(t, e) {
            return [].slice.call(t.childNodes).reduce((function(t, r, i) {
                var n;
                return "br" === r.nodeName && i ? t + "\n" : null != (n = r.childNodes) && n.length ? pa(r, e) : e ? t + r.textContent.trim().replace(/\s+/g, " ") : t + r.textContent
            }), "")
        }
        function ya(t, e, r) {
            return t && t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
        }
        function Ta(t) {
            return new Error("Could not parse ttml timestamp " + t)
        }
        function Ea(t, e) {
            if (!t)
                return null;
            var r = $n(t);
            return null === r && (da.test(t) ? r = function(t, e) {
                var r = da.exec(t),
                    i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
            }(t, e) : ca.test(t) && (r = function(t, e) {
                var r = ca.exec(t),
                    i = Number(r[1]);
                switch (r[2]) {
                case "h":
                    return 3600 * i;
                case "m":
                    return 60 * i;
                case "ms":
                    return 1e3 * i;
                case "f":
                    return i / e.frameRate;
                case "t":
                    return i / e.tickRate
                }
                return i
            }(t, e))), r
        }
        var Sa = function() {
            function t(t) {
                if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !0
                    }
                }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                    textTrack1: {
                        label: this.config.captionsTextTrack1Label,
                        languageCode: this.config.captionsTextTrack1LanguageCode
                    },
                    textTrack2: {
                        label: this.config.captionsTextTrack2Label,
                        languageCode: this.config.captionsTextTrack2LanguageCode
                    },
                    textTrack3: {
                        label: this.config.captionsTextTrack3Label,
                        languageCode: this.config.captionsTextTrack3LanguageCode
                    },
                    textTrack4: {
                        label: this.config.captionsTextTrack4Label,
                        languageCode: this.config.captionsTextTrack4LanguageCode
                    }
                }, this.config.enableCEA708Captions) {
                    var e = new Xn(this, "textTrack1"),
                        r = new Xn(this, "textTrack2"),
                        i = new Xn(this, "textTrack3"),
                        n = new Xn(this, "textTrack4");
                    this.cea608Parser1 = new Wn(1, e, r),
                    this.cea608Parser2 = new Wn(3, i, n)
                }
                t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.on(S.FRAG_LOADING, this.onFragLoading, this),
                t.on(S.FRAG_LOADED, this.onFragLoaded, this),
                t.on(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                t.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this),
                t.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }
            var e = t.prototype;
            return e.destroy = function() {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.off(S.FRAG_LOADING, this.onFragLoading, this),
                t.off(S.FRAG_LOADED, this.onFragLoaded, this),
                t.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                t.off(S.FRAG_DECRYPTED, this.onFragDecrypted, this),
                t.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this),
                this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
            }, e.addCues = function(t, e, r, i, n) {
                for (var a, s, o, l, u = !1, h = n.length; h--;) {
                    var d = n[h],
                        c = (a = d[0], s = d[1], o = e, l = r, Math.min(s, l) - Math.max(a, o));
                    if (c >= 0 && (d[0] = Math.min(d[0], e), d[1] = Math.max(d[1], r), u = !0, c / (r - e) > .5))
                        return
                }
                if (u || n.push([e, r]), this.config.renderTextTracksNatively) {
                    var f = this.captionsTracks[t];
                    this.Cues.newCue(f, e, r, i)
                } else {
                    var g = this.Cues.newCue(null, e, r, i);
                    this.hls.trigger(S.CUES_PARSED, {
                        type: "captions",
                        cues: g,
                        track: t
                    })
                }
            }, e.onInitPtsFound = function(t, e) {
                var r = this,
                    i = e.frag,
                    n = e.id,
                    a = e.initPTS,
                    s = e.timescale,
                    o = this.unparsedVttFrags;
                "main" === n && (this.initPTS[i.cc] = {
                    baseTime: a,
                    timescale: s
                }),
                o.length && (this.unparsedVttFrags = [], o.forEach((function(t) {
                    r.onFragLoaded(S.FRAG_LOADED, t)
                })))
            }, e.getExistingTrack = function(t) {
                var e = this.media;
                if (e)
                    for (var r = 0; r < e.textTracks.length; r++) {
                        var i = e.textTracks[r];
                        if (i[t])
                            return i
                    }
                return null
            }, e.createCaptionsTrack = function(t) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
            }, e.createNativeTrack = function(t) {
                if (!this.captionsTracks[t]) {
                    var e = this.captionsProperties,
                        r = this.captionsTracks,
                        i = this.media,
                        n = e[t],
                        a = n.label,
                        s = n.languageCode,
                        o = this.getExistingTrack(t);
                    if (o)
                        r[t] = o,
                        Le(r[t]),
                        Ee(r[t], i);
                    else {
                        var l = this.createTextTrack("captions", a, s);
                        l && (l[t] = !0, r[t] = l)
                    }
                }
            }, e.createNonNativeTrack = function(t) {
                if (!this.nonNativeCaptionsTracks[t]) {
                    var e = this.captionsProperties[t];
                    if (e) {
                        var r = {
                            _id: t,
                            label: e.label,
                            kind: "captions",
                            default: !!e.media && !!e.media.default,
                            closedCaptions: e.media
                        };
                        this.nonNativeCaptionsTracks[t] = r,
                        this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {
                            tracks: [r]
                        })
                    }
                }
            }, e.createTextTrack = function(t, e, r) {
                var i = this.media;
                if (i)
                    return i.addTextTrack(t, e, r)
            }, e.onMediaAttaching = function(t, e) {
                this.media = e.media,
                this._cleanTracks()
            }, e.onMediaDetaching = function() {
                var t = this.captionsTracks;
                Object.keys(t).forEach((function(e) {
                    Le(t[e]),
                    delete t[e]
                })),
                this.nonNativeCaptionsTracks = {}
            }, e.onManifestLoading = function() {
                this.lastSn = -1,
                this.lastPartIndex = -1,
                this.prevCC = -1,
                this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !0
                    }
                },
                this._cleanTracks(),
                this.tracks = [],
                this.captionsTracks = {},
                this.nonNativeCaptionsTracks = {},
                this.textTracks = [],
                this.unparsedVttFrags = [],
                this.initPTS = [],
                this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
            }, e._cleanTracks = function() {
                var t = this.media;
                if (t) {
                    var e = t.textTracks;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            Le(e[r])
                }
            }, e.onSubtitleTracksUpdated = function(t, e) {
                var r = this,
                    i = e.subtitleTracks || [],
                    n = i.some((function(t) {
                        return t.textCodec === ha
                    }));
                if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
                    if (Tn(this.tracks, i))
                        return void (this.tracks = i);
                    if (this.textTracks = [], this.tracks = i, this.config.renderTextTracksNatively) {
                        var a = this.media ? this.media.textTracks : null;
                        this.tracks.forEach((function(t, e) {
                            var i;
                            if (a && e < a.length) {
                                for (var n = null, s = 0; s < a.length; s++)
                                    if (La(a[s], t)) {
                                        n = a[s];
                                        break
                                    }
                                n && (i = n)
                            }
                            if (i)
                                Le(i);
                            else {
                                var o = r._captionsOrSubtitlesFromCharacteristics(t);
                                (i = r.createTextTrack(o, t.name, t.lang)) && (i.mode = "disabled")
                            }
                            i && (i.groupId = t.groupId, r.textTracks.push(i))
                        }))
                    } else if (this.tracks.length) {
                        var s = this.tracks.map((function(t) {
                            return {
                                label: t.name,
                                kind: t.type.toLowerCase(),
                                default: t.default,
                                subtitleTrack: t
                            }
                        }));
                        this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {
                            tracks: s
                        })
                    }
                }
            }, e._captionsOrSubtitlesFromCharacteristics = function(t) {
                if (t.attrs.CHARACTERISTICS) {
                    var e = /transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),
                        r = /describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);
                    if (e && r)
                        return "captions"
                }
                return "subtitles"
            }, e.onManifestLoaded = function(t, e) {
                var r = this;
                this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(t) {
                    var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                    if (e) {
                        var i = "textTrack" + e[1],
                            n = r.captionsProperties[i];
                        n && (n.label = t.name, t.lang && (n.languageCode = t.lang), n.media = t)
                    }
                }))
            }, e.closedCaptionsForLevel = function(t) {
                var e = this.hls.levels[t.level];
                return null == e ? void 0 : e.attrs["CLOSED-CAPTIONS"]
            }, e.onFragLoading = function(t, e) {
                var r = this.cea608Parser1,
                    i = this.cea608Parser2,
                    n = this.lastSn,
                    a = this.lastPartIndex;
                if (this.enabled && r && i && e.frag.type === ge) {
                    var s,
                        o,
                        l = e.frag.sn,
                        u = null != (s = null == e || null == (o = e.part) ? void 0 : o.index) ? s : -1;
                    l === n + 1 || l === n && u === a + 1 || (r.reset(), i.reset()),
                    this.lastSn = l,
                    this.lastPartIndex = u
                }
            }, e.onFragLoaded = function(t, e) {
                var r = e.frag,
                    i = e.payload;
                if (r.type === me)
                    if (i.byteLength) {
                        var n = r.decryptdata,
                            a = "stats" in e;
                        if (null == n || !n.encrypted || a) {
                            var s = this.tracks[r.level],
                                o = this.vttCCs;
                            o[r.cc] || (o[r.cc] = {
                                start: r.start,
                                prevCC: this.prevCC,
                                new: !0
                            }, this.prevCC = r.cc),
                            s && s.textCodec === ha ? this._parseIMSC1(r, i) : this._parseVTTs(e)
                        }
                    } else
                        this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: r,
                            error: new Error("Empty subtitle payload")
                        })
            }, e._parseIMSC1 = function(t, e) {
                var r = this,
                    i = this.hls;
                ga(e, this.initPTS[t.cc], (function(e) {
                    r._appendCues(e, t.level),
                    i.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: t
                    })
                }), (function(e) {
                    w.log("Failed to parse IMSC1: " + e),
                    i.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: t,
                        error: e
                    })
                }))
            }, e._parseVTTs = function(t) {
                var e,
                    r = this,
                    i = t.frag,
                    n = t.payload,
                    a = this.initPTS,
                    s = this.unparsedVttFrags,
                    o = a.length - 1;
                if (a[i.cc] || -1 !== o) {
                    var l = this.hls;
                    ua(null != (e = i.initSegment) && e.data ? xt(i.initSegment.data, new Uint8Array(n)) : n, this.initPTS[i.cc], this.vttCCs, i.cc, i.start, (function(t) {
                        r._appendCues(t, i.level),
                        l.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: i
                        })
                    }), (function(e) {
                        var a = "Missing initPTS for VTT MPEGTS" === e.message;
                        a ? s.push(t) : r._fallbackToIMSC1(i, n),
                        w.log("Failed to parse VTT cue: " + e),
                        a && o > i.cc || l.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: i,
                            error: e
                        })
                    }))
                } else
                    s.push(t)
            }, e._fallbackToIMSC1 = function(t, e) {
                var r = this,
                    i = this.tracks[t.level];
                i.textCodec || ga(e, this.initPTS[t.cc], (function() {
                    i.textCodec = ha,
                    r._parseIMSC1(t, e)
                }), (function() {
                    i.textCodec = "wvtt"
                }))
            }, e._appendCues = function(t, e) {
                var r = this.hls;
                if (this.config.renderTextTracksNatively) {
                    var i = this.textTracks[e];
                    if (!i || "disabled" === i.mode)
                        return;
                    t.forEach((function(t) {
                        return Se(i, t)
                    }))
                } else {
                    var n = this.tracks[e];
                    if (!n)
                        return;
                    var a = n.default ? "default" : "subtitles" + e;
                    r.trigger(S.CUES_PARSED, {
                        type: "subtitles",
                        cues: t,
                        track: a
                    })
                }
            }, e.onFragDecrypted = function(t, e) {
                e.frag.type === me && this.onFragLoaded(S.FRAG_LOADED, e)
            }, e.onSubtitleTracksCleared = function() {
                this.tracks = [],
                this.captionsTracks = {}
            }, e.onFragParsingUserdata = function(t, e) {
                var r = this.cea608Parser1,
                    i = this.cea608Parser2;
                if (this.enabled && r && i) {
                    var n = e.frag,
                        a = e.samples;
                    if (n.type !== ge || "NONE" !== this.closedCaptionsForLevel(n))
                        for (var s = 0; s < a.length; s++) {
                            var o = a[s].bytes;
                            if (o) {
                                var l = this.extractCea608Data(o);
                                r.addData(a[s].pts, l[0]),
                                i.addData(a[s].pts, l[1])
                            }
                        }
                }
            }, e.onBufferFlushing = function(t, e) {
                var r = e.startOffset,
                    i = e.endOffset,
                    n = e.endOffsetSubtitles,
                    a = e.type,
                    s = this.media;
                if (s && !(s.currentTime < i)) {
                    if (!a || "video" === a) {
                        var o = this.captionsTracks;
                        Object.keys(o).forEach((function(t) {
                            return Re(o[t], r, i)
                        }))
                    }
                    if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                        var l = this.textTracks;
                        Object.keys(l).forEach((function(t) {
                            return Re(l[t], r, n)
                        }))
                    }
                }
            }, e.extractCea608Data = function(t) {
                for (var e = [[], []], r = 31 & t[0], i = 2, n = 0; n < r; n++) {
                    var a = t[i++],
                        s = 127 & t[i++],
                        o = 127 & t[i++];
                    if ((0 !== s || 0 !== o) && 0 != (4 & a)) {
                        var l = 3 & a;
                        0 !== l && 1 !== l || (e[l].push(s), e[l].push(o))
                    }
                }
                return e
            }, t
        }();
        function La(t, e) {
            return !!t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
        }
        var Ra = function() {
                function t(t) {
                    this.hls = void 0,
                    this.autoLevelCapping = void 0,
                    this.firstLevel = void 0,
                    this.media = void 0,
                    this.restrictedLevels = void 0,
                    this.timer = void 0,
                    this.clientRect = void 0,
                    this.streamController = void 0,
                    this.hls = t,
                    this.autoLevelCapping = Number.POSITIVE_INFINITY,
                    this.firstLevel = -1,
                    this.media = null,
                    this.restrictedLevels = [],
                    this.timer = void 0,
                    this.clientRect = null,
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.setStreamController = function(t) {
                    this.streamController = t
                }, e.destroy = function() {
                    this.unregisterListener(),
                    this.hls.config.capLevelToPlayerSize && this.stopCapping(),
                    this.media = null,
                    this.clientRect = null,
                    this.hls = this.streamController = null
                }, e.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                    t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    t.on(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(S.BUFFER_CODECS, this.onBufferCodecs, this),
                    t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this)
                }, e.unregisterListener = function() {
                    var t = this.hls;
                    t.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                    t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    t.off(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.off(S.BUFFER_CODECS, this.onBufferCodecs, this),
                    t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this)
                }, e.onFpsDropLevelCapping = function(t, e) {
                    var r = this.hls.levels[e.droppedLevel];
                    this.isLevelAllowed(r) && this.restrictedLevels.push({
                        bitrate: r.bitrate,
                        height: r.height,
                        width: r.width
                    })
                }, e.onMediaAttaching = function(t, e) {
                    this.media = e.media instanceof HTMLVideoElement ? e.media : null,
                    this.clientRect = null
                }, e.onManifestParsed = function(t, e) {
                    var r = this.hls;
                    this.restrictedLevels = [],
                    this.firstLevel = e.firstLevel,
                    r.config.capLevelToPlayerSize && e.video && this.startCapping()
                }, e.onBufferCodecs = function(t, e) {
                    this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                }, e.onMediaDetaching = function() {
                    this.stopCapping()
                }, e.detectPlayerSize = function() {
                    if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                        var t = this.hls.levels;
                        if (t.length) {
                            var e = this.hls;
                            e.autoLevelCapping = this.getMaxLevel(t.length - 1),
                            e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(),
                            this.autoLevelCapping = e.autoLevelCapping
                        }
                    }
                }, e.getMaxLevel = function(e) {
                    var r = this,
                        i = this.hls.levels;
                    if (!i.length)
                        return -1;
                    var n = i.filter((function(t, i) {
                        return r.isLevelAllowed(t) && i <= e
                    }));
                    return this.clientRect = null, t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                }, e.startCapping = function() {
                    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                }, e.stopCapping = function() {
                    this.restrictedLevels = [],
                    this.firstLevel = -1,
                    this.autoLevelCapping = Number.POSITIVE_INFINITY,
                    this.timer && (self.clearInterval(this.timer), this.timer = void 0)
                }, e.getDimensions = function() {
                    if (this.clientRect)
                        return this.clientRect;
                    var t = this.media,
                        e = {
                            width: 0,
                            height: 0
                        };
                    if (t) {
                        var r = t.getBoundingClientRect();
                        e.width = r.width,
                        e.height = r.height,
                        e.width || e.height || (e.width = r.right - r.left || t.width || 0, e.height = r.bottom - r.top || t.height || 0)
                    }
                    return this.clientRect = e, e
                }, e.isLevelAllowed = function(t) {
                    return !this.restrictedLevels.some((function(e) {
                        return t.bitrate === e.bitrate && t.width === e.width && t.height === e.height
                    }))
                }, t.getMaxLevelByMediaSize = function(t, e, r) {
                    if (null == t || !t.length)
                        return -1;
                    for (var i, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
                        var o = t[s];
                        if ((o.width >= e || o.height >= r) && (i = o, !(n = t[s + 1]) || i.width !== n.width || i.height !== n.height)) {
                            a = s;
                            break
                        }
                    }
                    return a
                }, a(t, [{
                    key: "mediaWidth",
                    get: function() {
                        return this.getDimensions().width * this.contentScaleFactor
                    }
                }, {
                    key: "mediaHeight",
                    get: function() {
                        return this.getDimensions().height * this.contentScaleFactor
                    }
                }, {
                    key: "contentScaleFactor",
                    get: function() {
                        var t = 1;
                        if (!this.hls.config.ignoreDevicePixelRatio)
                            try {
                                t = self.devicePixelRatio
                            } catch (t) {}
                        return t
                    }
                }]), t
            }(),
            Aa = function() {
                function t(t) {
                    this.hls = void 0,
                    this.isVideoPlaybackQualityAvailable = !1,
                    this.timer = void 0,
                    this.media = null,
                    this.lastTime = void 0,
                    this.lastDroppedFrames = 0,
                    this.lastDecodedFrames = 0,
                    this.streamController = void 0,
                    this.hls = t,
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.setStreamController = function(t) {
                    this.streamController = t
                }, e.registerListeners = function() {
                    this.hls.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this)
                }, e.unregisterListeners = function() {
                    this.hls.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this)
                }, e.destroy = function() {
                    this.timer && clearInterval(this.timer),
                    this.unregisterListeners(),
                    this.isVideoPlaybackQualityAvailable = !1,
                    this.media = null
                }, e.onMediaAttaching = function(t, e) {
                    var r = this.hls.config;
                    if (r.capLevelOnFPSDrop) {
                        var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                        this.media = i,
                        i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                        self.clearInterval(this.timer),
                        this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                    }
                }, e.checkFPS = function(t, e, r) {
                    var i = performance.now();
                    if (e) {
                        if (this.lastTime) {
                            var n = i - this.lastTime,
                                a = r - this.lastDroppedFrames,
                                s = e - this.lastDecodedFrames,
                                o = 1e3 * a / n,
                                l = this.hls;
                            if (l.trigger(S.FPS_DROP, {
                                currentDropped: a,
                                currentDecoded: s,
                                totalDroppedFrames: r
                            }), o > 0 && a > l.config.fpsDroppedMonitoringThreshold * s) {
                                var u = l.currentLevel;
                                w.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u),
                                u > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger(S.FPS_DROP_LEVEL_CAPPING, {
                                    level: u,
                                    droppedLevel: l.currentLevel
                                }), l.autoLevelCapping = u, this.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = i,
                        this.lastDroppedFrames = r,
                        this.lastDecodedFrames = e
                    }
                }, e.checkFPSInterval = function() {
                    var t = this.media;
                    if (t)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var e = t.getVideoPlaybackQuality();
                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                        } else
                            this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                }, t
            }(),
            ka = "[eme]",
            ba = function() {
                function t(e) {
                    this.hls = void 0,
                    this.config = void 0,
                    this.media = null,
                    this.keyFormatPromise = null,
                    this.keySystemAccessPromises = {},
                    this._requestLicenseFailureCount = 0,
                    this.mediaKeySessions = [],
                    this.keyIdToKeySessionPromise = {},
                    this.setMediaKeysQueue = t.CDMCleanupPromise ? [t.CDMCleanupPromise] : [],
                    this.onMediaEncrypted = this._onMediaEncrypted.bind(this),
                    this.onWaitingForKey = this._onWaitingForKey.bind(this),
                    this.debug = w.debug.bind(w, ka),
                    this.log = w.log.bind(w, ka),
                    this.warn = w.warn.bind(w, ka),
                    this.error = w.error.bind(w, ka),
                    this.hls = e,
                    this.config = e.config,
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.unregisterListeners(),
                    this.onMediaDetached();
                    var t = this.config;
                    t.requestMediaKeySystemAccessFunc = null,
                    t.licenseXhrSetup = t.licenseResponseCallback = void 0,
                    t.drmSystems = t.drmSystemOptions = {},
                    this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null,
                    this.config = null
                }, e.registerListeners = function() {
                    this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    this.hls.on(S.MEDIA_DETACHED, this.onMediaDetached, this),
                    this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    this.hls.on(S.MANIFEST_LOADED, this.onManifestLoaded, this)
                }, e.unregisterListeners = function() {
                    this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    this.hls.off(S.MEDIA_DETACHED, this.onMediaDetached, this),
                    this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this)
                }, e.getLicenseServerUrl = function(t) {
                    var e = this.config,
                        r = e.drmSystems,
                        i = e.widevineLicenseUrl,
                        n = r[t];
                    if (n)
                        return n.licenseUrl;
                    if (t === j.WIDEVINE && i)
                        return i;
                    throw new Error('no license server URL configured for key-system "' + t + '"')
                }, e.getServerCertificateUrl = function(t) {
                    var e = this.config.drmSystems[t];
                    if (e)
                        return e.serverCertificateUrl;
                    this.log('No Server Certificate in config.drmSystems["' + t + '"]')
                }, e.attemptKeySystemAccess = function(t) {
                    var e = this,
                        r = this.hls.levels,
                        i = function(t, e, r) {
                            return !!t && r.indexOf(t) === e
                        },
                        n = r.map((function(t) {
                            return t.audioCodec
                        })).filter(i),
                        a = r.map((function(t) {
                            return t.videoCodec
                        })).filter(i);
                    return n.length + a.length === 0 && a.push("avc1.42e01e"), new Promise((function(r, i) {
                        !function t(s) {
                            var o = s.shift();
                            e.getMediaKeysPromise(o, n, a).then((function(t) {
                                return r({
                                    keySystem: o,
                                    mediaKeys: t
                                })
                            })).catch((function(e) {
                                s.length ? t(s) : i(e instanceof Da ? e : new Da({
                                    type: L.KEY_SYSTEM_ERROR,
                                    details: R.KEY_SYSTEM_NO_ACCESS,
                                    error: e,
                                    fatal: !0
                                }, e.message))
                            }))
                        }(t)
                    }))
                }, e.requestMediaKeySystemAccess = function(t, e) {
                    var r = this.config.requestMediaKeySystemAccessFunc;
                    if ("function" != typeof r) {
                        var i = "Configured requestMediaKeySystemAccess is not a function " + r;
                        return null === et && "http:" === self.location.protocol && (i = "navigator.requestMediaKeySystemAccess is not available over insecure protocol " + location.protocol), Promise.reject(new Error(i))
                    }
                    return r(t, e)
                }, e.getMediaKeysPromise = function(t, e, r) {
                    var i = this,
                        n = function(t, e, r, i) {
                            var n;
                            switch (t) {
                            case j.FAIRPLAY:
                                n = ["cenc", "sinf"];
                                break;
                            case j.WIDEVINE:
                            case j.PLAYREADY:
                                n = ["cenc"];
                                break;
                            case j.CLEARKEY:
                                n = ["cenc", "keyids"];
                                break;
                            default:
                                throw new Error("Unknown key-system: " + t)
                            }
                            return function(t, e, r, i) {
                                return [{
                                    initDataTypes: t,
                                    persistentState: i.persistentState || "not-allowed",
                                    distinctiveIdentifier: i.distinctiveIdentifier || "not-allowed",
                                    sessionTypes: i.sessionTypes || [i.sessionType || "temporary"],
                                    audioCapabilities: e.map((function(t) {
                                        return {
                                            contentType: 'audio/mp4; codecs="' + t + '"',
                                            robustness: i.audioRobustness || "",
                                            encryptionScheme: i.audioEncryptionScheme || null
                                        }
                                    })),
                                    videoCapabilities: r.map((function(t) {
                                        return {
                                            contentType: 'video/mp4; codecs="' + t + '"',
                                            robustness: i.videoRobustness || "",
                                            encryptionScheme: i.videoEncryptionScheme || null
                                        }
                                    }))
                                }]
                            }(n, e, r, i)
                        }(t, e, r, this.config.drmSystemOptions),
                        a = this.keySystemAccessPromises[t],
                        s = null == a ? void 0 : a.keySystemAccess;
                    if (!s) {
                        this.log('Requesting encrypted media "' + t + '" key-system access with config: ' + JSON.stringify(n)),
                        s = this.requestMediaKeySystemAccess(t, n);
                        var o = this.keySystemAccessPromises[t] = {
                            keySystemAccess: s
                        };
                        return s.catch((function(e) {
                            i.log('Failed to obtain access to key-system "' + t + '": ' + e)
                        })), s.then((function(e) {
                            i.log('Access for key-system "' + e.keySystem + '" obtained');
                            var r = i.fetchServerCertificate(t);
                            return i.log('Create media-keys for "' + t + '"'), o.mediaKeys = e.createMediaKeys().then((function(e) {
                                return i.log('Media-keys created for "' + t + '"'), r.then((function(r) {
                                    return r ? i.setMediaKeysServerCertificate(e, t, r) : e
                                }))
                            })), o.mediaKeys.catch((function(e) {
                                i.error('Failed to create media-keys for "' + t + '"}: ' + e)
                            })), o.mediaKeys
                        }))
                    }
                    return s.then((function() {
                        return a.mediaKeys
                    }))
                }, e.createMediaKeySessionContext = function(t) {
                    var e = t.decryptdata,
                        r = t.keySystem,
                        i = t.mediaKeys;
                    this.log('Creating key-system session "' + r + '" keyId: ' + Tt(e.keyId || []));
                    var n = i.createSession(),
                        a = {
                            decryptdata: e,
                            keySystem: r,
                            mediaKeys: i,
                            mediaKeysSession: n,
                            keyStatus: "status-pending"
                        };
                    return this.mediaKeySessions.push(a), a
                }, e.renewKeySession = function(t) {
                    var e = t.decryptdata;
                    if (e.pssh) {
                        var r = this.createMediaKeySessionContext(t),
                            i = this.getKeyIdString(e);
                        this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(r, "cenc", e.pssh, "expired")
                    } else
                        this.warn("Could not renew expired session. Missing pssh initData.");
                    this.removeSession(t)
                }, e.getKeyIdString = function(t) {
                    if (!t)
                        throw new Error("Could not read keyId of undefined decryptdata");
                    if (null === t.keyId)
                        throw new Error("keyId is null");
                    return Tt(t.keyId)
                }, e.updateKeySession = function(t, e) {
                    var r,
                        i = t.mediaKeysSession;
                    return this.log('Updating key-session "' + i.sessionId + '" for keyID ' + Tt((null == (r = t.decryptdata) ? void 0 : r.keyId) || []) + "\n      } (data length: " + (e ? e.byteLength : e) + ")"), i.update(e)
                }, e.selectKeySystemFormat = function(t) {
                    var e = Object.keys(t.levelkeys || {});
                    return this.keyFormatPromise || (this.log("Selecting key-system from fragment (sn: " + t.sn + " " + t.type + ": " + t.level + ") key formats " + e.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(e)), this.keyFormatPromise
                }, e.getKeyFormatPromise = function(t) {
                    var e = this;
                    return new Promise((function(r, i) {
                        var n = tt(e.config),
                            a = t.map($).filter((function(t) {
                                return !!t && -1 !== n.indexOf(t)
                            }));
                        return e.getKeySystemSelectionPromise(a).then((function(t) {
                            var e = t.keySystem,
                                n = Z(e);
                            n ? r(n) : i(new Error('Unable to find format for key-system "' + e + '"'))
                        })).catch(i)
                    }))
                }, e.loadKey = function(t) {
                    var e = this,
                        r = t.keyInfo.decryptdata,
                        i = this.getKeyIdString(r),
                        n = "(keyId: " + i + ' format: "' + r.keyFormat + '" method: ' + r.method + " uri: " + r.uri + ")";
                    this.log("Starting session for key " + n);
                    var a = this.keyIdToKeySessionPromise[i];
                    return a || (a = this.keyIdToKeySessionPromise[i] = this.getKeySystemForKeyPromise(r).then((function(i) {
                        var a = i.keySystem,
                            s = i.mediaKeys;
                        return e.throwIfDestroyed(), e.log("Handle encrypted media sn: " + t.frag.sn + " " + t.frag.type + ": " + t.frag.level + " using key " + n), e.attemptSetMediaKeys(a, s).then((function() {
                            e.throwIfDestroyed();
                            var t = e.createMediaKeySessionContext({
                                keySystem: a,
                                mediaKeys: s,
                                decryptdata: r
                            });
                            return e.generateRequestWithPreferredKeySession(t, "cenc", r.pssh, "playlist-key")
                        }))
                    }))).catch((function(t) {
                        return e.handleError(t)
                    })), a
                }, e.throwIfDestroyed = function(t) {
                    if (!this.hls)
                        throw new Error("invalid state")
                }, e.handleError = function(t) {
                    this.hls && (this.error(t.message), t instanceof Da ? this.hls.trigger(S.ERROR, t.data) : this.hls.trigger(S.ERROR, {
                        type: L.KEY_SYSTEM_ERROR,
                        details: R.KEY_SYSTEM_NO_KEYS,
                        error: t,
                        fatal: !0
                    }))
                }, e.getKeySystemForKeyPromise = function(t) {
                    var e = this.getKeyIdString(t),
                        r = this.keyIdToKeySessionPromise[e];
                    if (!r) {
                        var i = $(t.keyFormat),
                            n = i ? [i] : tt(this.config);
                        return this.attemptKeySystemAccess(n)
                    }
                    return r
                }, e.getKeySystemSelectionPromise = function(t) {
                    if (t.length || (t = tt(this.config)), 0 === t.length)
                        throw new Da({
                            type: L.KEY_SYSTEM_ERROR,
                            details: R.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
                            fatal: !0
                        }, "Missing key-system license configuration options " + JSON.stringify({
                            drmSystems: this.config.drmSystems
                        }));
                    return this.attemptKeySystemAccess(t)
                }, e._onMediaEncrypted = function(t) {
                    var e = this,
                        r = t.initDataType,
                        i = t.initData;
                    if (this.debug('"' + t.type + '" event: init data type: "' + r + '"'), null !== i) {
                        var n,
                            a;
                        if ("sinf" === r && this.config.drmSystems[j.FAIRPLAY]) {
                            var s = Rt(new Uint8Array(i));
                            try {
                                var o = V(JSON.parse(s).sinf),
                                    l = _t(new Uint8Array(o));
                                if (!l)
                                    return;
                                n = l.subarray(8, 24),
                                a = j.FAIRPLAY
                            } catch (t) {
                                return void this.warn('Failed to parse sinf "encrypted" event message initData')
                            }
                        } else {
                            var u = function(t) {
                                if (!(t instanceof ArrayBuffer) || t.byteLength < 32)
                                    return null;
                                var e = {
                                        version: 0,
                                        systemId: "",
                                        kids: null,
                                        data: null
                                    },
                                    r = new DataView(t),
                                    i = r.getUint32(0);
                                if (t.byteLength !== i && i > 44)
                                    return null;
                                if (1886614376 !== r.getUint32(4))
                                    return null;
                                if (e.version = r.getUint32(8) >>> 24, e.version > 1)
                                    return null;
                                e.systemId = Tt(new Uint8Array(t, 12, 16));
                                var n = r.getUint32(28);
                                if (0 === e.version) {
                                    if (i - 32 < n)
                                        return null;
                                    e.data = new Uint8Array(t, 32, n)
                                } else if (1 === e.version) {
                                    e.kids = [];
                                    for (var a = 0; a < n; a++)
                                        e.kids.push(new Uint8Array(t, 32 + 16 * a, 16))
                                }
                                return e
                            }(i);
                            if (null === u)
                                return;
                            0 === u.version && u.systemId === J && u.data && (n = u.data.subarray(8, 24)),
                            a = function(t) {
                                if (t === J)
                                    return j.WIDEVINE
                            }(u.systemId)
                        }
                        if (a && n) {
                            for (var h = Tt(n), d = this.keyIdToKeySessionPromise, c = this.mediaKeySessions, f = d[h], g = function() {
                                    var t = c[v],
                                        a = t.decryptdata;
                                    if (a.pssh || !a.keyId)
                                        return "continue";
                                    var s = Tt(a.keyId);
                                    return h === s || -1 !== a.uri.replace(/-/g, "").indexOf(h) ? (f = d[s], delete d[s], a.pssh = new Uint8Array(i), a.keyId = n, f = d[h] = f.then((function() {
                                        return e.generateRequestWithPreferredKeySession(t, r, i, "encrypted-event-key-match")
                                    })), "break") : void 0
                                }, v = 0; v < c.length; v++) {
                                var m = g();
                                if ("continue" !== m && "break" === m)
                                    break
                            }
                            f || (f = d[h] = this.getKeySystemSelectionPromise([a]).then((function(t) {
                                var a,
                                    s = t.keySystem,
                                    o = t.mediaKeys;
                                e.throwIfDestroyed();
                                var l = new Gt("ISO-23001-7", h, null != (a = Z(s)) ? a : "");
                                return l.pssh = new Uint8Array(i), l.keyId = n, e.attemptSetMediaKeys(s, o).then((function() {
                                    e.throwIfDestroyed();
                                    var t = e.createMediaKeySessionContext({
                                        decryptdata: l,
                                        keySystem: s,
                                        mediaKeys: o
                                    });
                                    return e.generateRequestWithPreferredKeySession(t, r, i, "encrypted-event-no-match")
                                }))
                            }))),
                            f.catch((function(t) {
                                return e.handleError(t)
                            }))
                        }
                    }
                }, e._onWaitingForKey = function(t) {
                    this.log('"' + t.type + '" event')
                }, e.attemptSetMediaKeys = function(t, e) {
                    var r = this,
                        i = this.setMediaKeysQueue.slice();
                    this.log('Setting media-keys for "' + t + '"');
                    var n = Promise.all(i).then((function() {
                        if (!r.media)
                            throw new Error("Attempted to set mediaKeys without media element attached");
                        return r.media.setMediaKeys(e)
                    }));
                    return this.setMediaKeysQueue.push(n), n.then((function() {
                        r.log('Media-keys set for "' + t + '"'),
                        i.push(n),
                        r.setMediaKeysQueue = r.setMediaKeysQueue.filter((function(t) {
                            return -1 === i.indexOf(t)
                        }))
                    }))
                }, e.generateRequestWithPreferredKeySession = function(t, e, r, i) {
                    var n,
                        a,
                        s = this,
                        o = null == (n = this.config.drmSystems) || null == (a = n[t.keySystem]) ? void 0 : a.generateRequest;
                    if (o)
                        try {
                            var l = o.call(this.hls, e, r, t);
                            if (!l)
                                throw new Error("Invalid response from configured generateRequest filter");
                            e = l.initDataType,
                            r = t.decryptdata.pssh = l.initData ? new Uint8Array(l.initData) : null
                        } catch (t) {
                            var u;
                            if (this.warn(t.message), null != (u = this.hls) && u.config.debug)
                                throw t
                        }
                    if (null === r)
                        return this.log('Skipping key-session request for "' + i + '" (no initData)'), Promise.resolve(t);
                    var h = this.getKeyIdString(t.decryptdata);
                    this.log('Generating key-session request for "' + i + '": ' + h + " (init data type: " + e + " length: " + (r ? r.byteLength : null) + ")");
                    var d = new an;
                    t.mediaKeysSession.onmessage = function(e) {
                        var r = t.mediaKeysSession;
                        if (r) {
                            var i = e.messageType,
                                n = e.message;
                            s.log('"' + i + '" message event for session "' + r.sessionId + '" message size: ' + n.byteLength),
                            "license-request" === i || "license-renewal" === i ? s.renewLicense(t, n).catch((function(t) {
                                s.handleError(t),
                                d.emit("error", t)
                            })) : "license-release" === i ? t.keySystem === j.FAIRPLAY && (s.updateKeySession(t, W("acknowledged")), s.removeSession(t)) : s.warn('unhandled media key message type "' + i + '"')
                        } else
                            d.emit("error", new Error("invalid state"))
                    },
                    t.mediaKeysSession.onkeystatuseschange = function(e) {
                        if (t.mediaKeysSession) {
                            s.onKeyStatusChange(t);
                            var r = t.keyStatus;
                            d.emit("keyStatus", r),
                            "expired" === r && (s.warn(t.keySystem + " expired for key " + h), s.renewKeySession(t))
                        } else
                            d.emit("error", new Error("invalid state"))
                    };
                    var c = new Promise((function(t, e) {
                        d.on("error", e),
                        d.on("keyStatus", (function(r) {
                            r.startsWith("usable") ? t() : "output-restricted" === r ? e(new Da({
                                type: L.KEY_SYSTEM_ERROR,
                                details: R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                                fatal: !1
                            }, "HDCP level output restricted")) : "internal-error" === r ? e(new Da({
                                type: L.KEY_SYSTEM_ERROR,
                                details: R.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                                fatal: !0
                            }, 'key status changed to "' + r + '"')) : "expired" === r ? e(new Error("key expired while generating request")) : s.warn('unhandled key status change "' + r + '"')
                        }))
                    }));
                    return t.mediaKeysSession.generateRequest(e, r).then((function() {
                        var e;
                        s.log('Request generated for key-session "' + (null == (e = t.mediaKeysSession) ? void 0 : e.sessionId) + '" keyId: ' + h)
                    })).catch((function(t) {
                        throw new Da({
                            type: L.KEY_SYSTEM_ERROR,
                            details: R.KEY_SYSTEM_NO_SESSION,
                            error: t,
                            fatal: !1
                        }, "Error generating key-session request: " + t)
                    })).then((function() {
                        return c
                    })).catch((function(e) {
                        throw d.removeAllListeners(), s.removeSession(t), e
                    })).then((function() {
                        return d.removeAllListeners(), t
                    }))
                }, e.onKeyStatusChange = function(t) {
                    var e = this;
                    t.mediaKeysSession.keyStatuses.forEach((function(r, i) {
                        e.log('key status change "' + r + '" for keyStatuses keyId: ' + Tt("buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i)) + " session keyId: " + Tt(new Uint8Array(t.decryptdata.keyId || [])) + " uri: " + t.decryptdata.uri),
                        t.keyStatus = r
                    }))
                }, e.fetchServerCertificate = function(t) {
                    var e = this.config,
                        r = new (0, e.loader)(e),
                        n = this.getServerCertificateUrl(t);
                    return n ? (this.log('Fetching serverCertificate for "' + t + '"'), new Promise((function(a, s) {
                        var o = {
                                responseType: "arraybuffer",
                                url: n
                            },
                            l = e.certLoadPolicy.default,
                            u = {
                                loadPolicy: l,
                                timeout: l.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0
                            },
                            h = {
                                onSuccess: function(t, e, r, i) {
                                    a(t.data)
                                },
                                onError: function(e, r, a, l) {
                                    s(new Da({
                                        type: L.KEY_SYSTEM_ERROR,
                                        details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                        fatal: !0,
                                        networkDetails: a,
                                        response: i({
                                            url: o.url,
                                            data: void 0
                                        }, e)
                                    }, '"' + t + '" certificate request failed (' + n + "). Status: " + e.code + " (" + e.text + ")"))
                                },
                                onTimeout: function(e, r, i) {
                                    s(new Da({
                                        type: L.KEY_SYSTEM_ERROR,
                                        details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                        fatal: !0,
                                        networkDetails: i,
                                        response: {
                                            url: o.url,
                                            data: void 0
                                        }
                                    }, '"' + t + '" certificate request timed out (' + n + ")"))
                                },
                                onAbort: function(t, e, r) {
                                    s(new Error("aborted"))
                                }
                            };
                        r.load(o, u, h)
                    }))) : Promise.resolve()
                }, e.setMediaKeysServerCertificate = function(t, e, r) {
                    var i = this;
                    return new Promise((function(n, a) {
                        t.setServerCertificate(r).then((function(a) {
                            i.log("setServerCertificate " + (a ? "success" : "not supported by CDM") + " (" + (null == r ? void 0 : r.byteLength) + ') on "' + e + '"'),
                            n(t)
                        })).catch((function(t) {
                            a(new Da({
                                type: L.KEY_SYSTEM_ERROR,
                                details: R.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                                error: t,
                                fatal: !0
                            }, t.message))
                        }))
                    }))
                }, e.renewLicense = function(t, e) {
                    var r = this;
                    return this.requestLicense(t, new Uint8Array(e)).then((function(e) {
                        return r.updateKeySession(t, new Uint8Array(e)).catch((function(t) {
                            throw new Da({
                                type: L.KEY_SYSTEM_ERROR,
                                details: R.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                                error: t,
                                fatal: !0
                            }, t.message)
                        }))
                    }))
                }, e.setupLicenseXHR = function(t, e, r, i) {
                    var n = this,
                        a = this.config.licenseXhrSetup;
                    return a ? Promise.resolve().then((function() {
                        if (!r.decryptdata)
                            throw new Error("Key removed");
                        return a.call(n.hls, t, e, r, i)
                    })).catch((function(s) {
                        if (!r.decryptdata)
                            throw s;
                        return t.open("POST", e, !0), a.call(n.hls, t, e, r, i)
                    })).then((function(r) {
                        return t.readyState || t.open("POST", e, !0), {
                            xhr: t,
                            licenseChallenge: r || i
                        }
                    })) : (t.open("POST", e, !0), Promise.resolve({
                        xhr: t,
                        licenseChallenge: i
                    }))
                }, e.requestLicense = function(t, e) {
                    var r = this,
                        i = this.config.keyLoadPolicy.default;
                    return new Promise((function(n, a) {
                        var s = r.getLicenseServerUrl(t.keySystem);
                        r.log("Sending license request to URL: " + s);
                        var o = new XMLHttpRequest;
                        o.responseType = "arraybuffer",
                        o.onreadystatechange = function() {
                            if (!r.hls || !t.mediaKeysSession)
                                return a(new Error("invalid state"));
                            if (4 === o.readyState)
                                if (200 === o.status) {
                                    r._requestLicenseFailureCount = 0;
                                    var l = o.response;
                                    r.log("License received " + (l instanceof ArrayBuffer ? l.byteLength : l));
                                    var u = r.config.licenseResponseCallback;
                                    if (u)
                                        try {
                                            l = u.call(r.hls, o, s, t)
                                        } catch (t) {
                                            r.error(t)
                                        }
                                    n(l)
                                } else {
                                    var h = i.errorRetry,
                                        d = h ? h.maxNumRetry : 0;
                                    if (r._requestLicenseFailureCount++, r._requestLicenseFailureCount > d || o.status >= 400 && o.status < 500)
                                        a(new Da({
                                            type: L.KEY_SYSTEM_ERROR,
                                            details: R.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            fatal: !0,
                                            networkDetails: o,
                                            response: {
                                                url: s,
                                                data: void 0,
                                                code: o.status,
                                                text: o.statusText
                                            }
                                        }, "License Request XHR failed (" + s + "). Status: " + o.status + " (" + o.statusText + ")"));
                                    else {
                                        var c = d - r._requestLicenseFailureCount + 1;
                                        r.warn("Retrying license request, " + c + " attempts left"),
                                        r.requestLicense(t, e).then(n, a)
                                    }
                                }
                        },
                        t.licenseXhr && t.licenseXhr.readyState !== XMLHttpRequest.DONE && t.licenseXhr.abort(),
                        t.licenseXhr = o,
                        r.setupLicenseXHR(o, s, t, e).then((function(t) {
                            var e = t.xhr,
                                r = t.licenseChallenge;
                            e.send(r)
                        }))
                    }))
                }, e.onMediaAttached = function(t, e) {
                    if (this.config.emeEnabled) {
                        var r = e.media;
                        this.media = r,
                        r.addEventListener("encrypted", this.onMediaEncrypted),
                        r.addEventListener("waitingforkey", this.onWaitingForKey)
                    }
                }, e.onMediaDetached = function() {
                    var e = this,
                        r = this.media,
                        i = this.mediaKeySessions;
                    r && (r.removeEventListener("encrypted", this.onMediaEncrypted), r.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null),
                    this._requestLicenseFailureCount = 0,
                    this.setMediaKeysQueue = [],
                    this.mediaKeySessions = [],
                    this.keyIdToKeySessionPromise = {},
                    Gt.clearKeyUriToKeyIdMap();
                    var n = i.length;
                    t.CDMCleanupPromise = Promise.all(i.map((function(t) {
                        return e.removeSession(t)
                    })).concat(null == r ? void 0 : r.setMediaKeys(null).catch((function(t) {
                        e.log("Could not clear media keys: " + t + ". media.src: " + (null == r ? void 0 : r.src))
                    })))).then((function() {
                        n && (e.log("finished closing key sessions and clearing media keys"), i.length = 0)
                    })).catch((function(t) {
                        e.log("Could not close sessions and clear media keys: " + t + ". media.src: " + (null == r ? void 0 : r.src))
                    }))
                }, e.onManifestLoading = function() {
                    this.keyFormatPromise = null
                }, e.onManifestLoaded = function(t, e) {
                    var r = e.sessionKeys;
                    if (r && this.config.emeEnabled && !this.keyFormatPromise) {
                        var i = r.reduce((function(t, e) {
                            return -1 === t.indexOf(e.keyFormat) && t.push(e.keyFormat), t
                        }), []);
                        this.log("Selecting key-system from session-keys " + i.join(", ")),
                        this.keyFormatPromise = this.getKeyFormatPromise(i)
                    }
                }, e.removeSession = function(t) {
                    var e = this,
                        r = t.mediaKeysSession,
                        i = t.licenseXhr;
                    if (r) {
                        this.log("Remove licenses and keys and close session " + r.sessionId),
                        r.onmessage = null,
                        r.onkeystatuseschange = null,
                        i && i.readyState !== XMLHttpRequest.DONE && i.abort(),
                        t.mediaKeysSession = t.decryptdata = t.licenseXhr = void 0;
                        var n = this.mediaKeySessions.indexOf(t);
                        return n > -1 && this.mediaKeySessions.splice(n, 1), r.remove().catch((function(t) {
                            e.log("Could not remove session: " + t)
                        })).then((function() {
                            return r.close()
                        })).catch((function(t) {
                            e.log("Could not close session: " + t)
                        }))
                    }
                }, t
            }();
        ba.CDMCleanupPromise = void 0;
        var Da = function(t) {
                function e(e, r) {
                    var i;
                    return (i = t.call(this, r) || this).data = void 0, e.error || (e.error = new Error(r)), i.data = e, e.err = e.error, i
                }
                return l(e, t), e
            }(f(Error)),
            Ia = "m",
            wa = "a",
            Ca = "v",
            _a = "av",
            Pa = "i",
            xa = "tt",
            Fa = function() {
                function t(e) {
                    var r = this;
                    this.hls = void 0,
                    this.config = void 0,
                    this.media = void 0,
                    this.sid = void 0,
                    this.cid = void 0,
                    this.useHeaders = !1,
                    this.initialized = !1,
                    this.starved = !1,
                    this.buffering = !0,
                    this.audioBuffer = void 0,
                    this.videoBuffer = void 0,
                    this.onWaiting = function() {
                        r.initialized && (r.starved = !0),
                        r.buffering = !0
                    },
                    this.onPlaying = function() {
                        r.initialized || (r.initialized = !0),
                        r.buffering = !1
                    },
                    this.applyPlaylistData = function(t) {
                        try {
                            r.apply(t, {
                                ot: Ia,
                                su: !r.initialized
                            })
                        } catch (t) {
                            w.warn("Could not generate manifest CMCD data.", t)
                        }
                    },
                    this.applyFragmentData = function(t) {
                        try {
                            var e = t.frag,
                                i = r.hls.levels[e.level],
                                n = r.getObjectType(e),
                                a = {
                                    d: 1e3 * e.duration,
                                    ot: n
                                };
                            n !== Ca && n !== wa && n != _a || (a.br = i.bitrate / 1e3, a.tb = r.getTopBandwidth(n) / 1e3, a.bl = r.getBufferLength(n)),
                            r.apply(t, a)
                        } catch (t) {
                            w.warn("Could not generate segment CMCD data.", t)
                        }
                    },
                    this.hls = e;
                    var i = this.config = e.config,
                        n = i.cmcd;
                    null != n && (i.pLoader = this.createPlaylistLoader(), i.fLoader = this.createFragmentLoader(), this.sid = n.sessionId || t.uuid(), this.cid = n.contentId, this.useHeaders = !0 === n.useHeaders, this.registerListeners())
                }
                var e = t.prototype;
                return e.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.on(S.MEDIA_DETACHED, this.onMediaDetached, this),
                    t.on(S.BUFFER_CREATED, this.onBufferCreated, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this),
                    t.off(S.MEDIA_DETACHED, this.onMediaDetached, this),
                    t.off(S.BUFFER_CREATED, this.onBufferCreated, this)
                }, e.destroy = function() {
                    this.unregisterListeners(),
                    this.onMediaDetached(),
                    this.hls = this.config = this.audioBuffer = this.videoBuffer = null
                }, e.onMediaAttached = function(t, e) {
                    this.media = e.media,
                    this.media.addEventListener("waiting", this.onWaiting),
                    this.media.addEventListener("playing", this.onPlaying)
                }, e.onMediaDetached = function() {
                    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
                }, e.onBufferCreated = function(t, e) {
                    var r,
                        i;
                    this.audioBuffer = null == (r = e.tracks.audio) ? void 0 : r.buffer,
                    this.videoBuffer = null == (i = e.tracks.video) ? void 0 : i.buffer
                }, e.createData = function() {
                    var t;
                    return {
                        v: 1,
                        sf: "h",
                        sid: this.sid,
                        cid: this.cid,
                        pr: null == (t = this.media) ? void 0 : t.playbackRate,
                        mtp: this.hls.bandwidthEstimate / 1e3
                    }
                }, e.apply = function(e, r) {
                    void 0 === r && (r = {}),
                    o(r, this.createData());
                    var i = r.ot === Pa || r.ot === Ca || r.ot === _a;
                    if (this.starved && i && (r.bs = !0, r.su = !0, this.starved = !1), null == r.su && (r.su = this.buffering), this.useHeaders) {
                        var n = t.toHeaders(r);
                        if (!Object.keys(n).length)
                            return;
                        e.headers || (e.headers = {}),
                        o(e.headers, n)
                    } else {
                        var a = t.toQuery(r);
                        if (!a)
                            return;
                        e.url = t.appendQueryToUri(e.url, a)
                    }
                }, e.getObjectType = function(t) {
                    var e = t.type;
                    return "subtitle" === e ? xa : "initSegment" === t.sn ? Pa : "audio" === e ? wa : "main" === e ? this.hls.audioTracks.length ? Ca : _a : void 0
                }, e.getTopBandwidth = function(t) {
                    var e,
                        r = 0,
                        i = this.hls;
                    if (t === wa)
                        e = i.audioTracks;
                    else {
                        var n = i.maxAutoLevel,
                            a = n > -1 ? n + 1 : i.levels.length;
                        e = i.levels.slice(0, a)
                    }
                    for (var s, o = v(e); !(s = o()).done;) {
                        var l = s.value;
                        l.bitrate > r && (r = l.bitrate)
                    }
                    return r > 0 ? r : NaN
                }, e.getBufferLength = function(t) {
                    var e = this.hls.media,
                        r = t === wa ? this.audioBuffer : this.videoBuffer;
                    return r && e ? 1e3 * Ir.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len : NaN
                }, e.createPlaylistLoader = function() {
                    var t = this.config.pLoader,
                        e = this.applyPlaylistData,
                        r = t || this.config.loader;
                    return function() {
                        function t(t) {
                            this.loader = void 0,
                            this.loader = new r(t)
                        }
                        var i = t.prototype;
                        return i.destroy = function() {
                            this.loader.destroy()
                        }, i.abort = function() {
                            this.loader.abort()
                        }, i.load = function(t, r, i) {
                            e(t),
                            this.loader.load(t, r, i)
                        }, a(t, [{
                            key: "stats",
                            get: function() {
                                return this.loader.stats
                            }
                        }, {
                            key: "context",
                            get: function() {
                                return this.loader.context
                            }
                        }]), t
                    }()
                }, e.createFragmentLoader = function() {
                    var t = this.config.fLoader,
                        e = this.applyFragmentData,
                        r = t || this.config.loader;
                    return function() {
                        function t(t) {
                            this.loader = void 0,
                            this.loader = new r(t)
                        }
                        var i = t.prototype;
                        return i.destroy = function() {
                            this.loader.destroy()
                        }, i.abort = function() {
                            this.loader.abort()
                        }, i.load = function(t, r, i) {
                            e(t),
                            this.loader.load(t, r, i)
                        }, a(t, [{
                            key: "stats",
                            get: function() {
                                return this.loader.stats
                            }
                        }, {
                            key: "context",
                            get: function() {
                                return this.loader.context
                            }
                        }]), t
                    }()
                }, t.uuid = function() {
                    var t = URL.createObjectURL(new Blob),
                        e = t.toString();
                    return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
                }, t.serialize = function(t) {
                    for (var e, r = [], i = function(t) {
                            return !Number.isNaN(t) && null != t && "" !== t && !1 !== t
                        }, n = function(t) {
                            return Math.round(t)
                        }, a = function(t) {
                            return 100 * n(t / 100)
                        }, s = {
                            br: n,
                            d: n,
                            bl: a,
                            dl: a,
                            mtp: a,
                            nor: function(t) {
                                return encodeURIComponent(t)
                            },
                            rtp: a,
                            tb: n
                        }, o = v(Object.keys(t || {}).sort()); !(e = o()).done;) {
                        var l = e.value,
                            u = t[l];
                        if (i(u) && !("v" === l && 1 === u || "pr" == l && 1 === u)) {
                            var h = s[l];
                            h && (u = h(u));
                            var d = typeof u,
                                c = void 0;
                            c = "ot" === l || "sf" === l || "st" === l ? l + "=" + u : "boolean" === d ? l : "number" === d ? l + "=" + u : l + "=" + JSON.stringify(u),
                            r.push(c)
                        }
                    }
                    return r.join(",")
                }, t.toHeaders = function(e) {
                    for (var r = {}, i = ["Object", "Request", "Session", "Status"], n = [{}, {}, {}, {}], a = {
                            br: 0,
                            d: 0,
                            ot: 0,
                            tb: 0,
                            bl: 1,
                            dl: 1,
                            mtp: 1,
                            nor: 1,
                            nrr: 1,
                            su: 1,
                            cid: 2,
                            pr: 2,
                            sf: 2,
                            sid: 2,
                            st: 2,
                            v: 2,
                            bs: 3,
                            rtp: 3
                        }, s = 0, o = Object.keys(e); s < o.length; s++) {
                        var l = o[s];
                        n[null != a[l] ? a[l] : 1][l] = e[l]
                    }
                    for (var u = 0; u < n.length; u++) {
                        var h = t.serialize(n[u]);
                        h && (r["CMCD-" + i[u]] = h)
                    }
                    return r
                }, t.toQuery = function(e) {
                    return "CMCD=" + encodeURIComponent(t.serialize(e))
                }, t.appendQueryToUri = function(t, e) {
                    if (!e)
                        return t;
                    var r = t.includes("?") ? "&" : "?";
                    return "" + t + r + e
                }, t
            }(),
            Ma = function() {
                function t(t) {
                    this.hls = void 0,
                    this.log = void 0,
                    this.loader = null,
                    this.uri = null,
                    this.pathwayId = ".",
                    this.pathwayPriority = null,
                    this.timeToLoad = 300,
                    this.reloadTimer = -1,
                    this.updated = 0,
                    this.started = !1,
                    this.enabled = !0,
                    this.levels = null,
                    this.audioTracks = null,
                    this.subtitleTracks = null,
                    this.penalizedPathways = {},
                    this.hls = t,
                    this.log = w.log.bind(w, "[content-steering]:"),
                    this.registerListeners()
                }
                var e = t.prototype;
                return e.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.MANIFEST_LOADING, this.onManifestLoading, this),
                    t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this),
                    t.on(S.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(S.ERROR, this.onError, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t && (t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.ERROR, this.onError, this))
                }, e.startLoad = function() {
                    if (this.started = !0, self.clearTimeout(this.reloadTimer), this.enabled && this.uri)
                        if (this.updated) {
                            var t = Math.max(1e3 * this.timeToLoad - (performance.now() - this.updated), 0);
                            this.scheduleRefresh(this.uri, t)
                        } else
                            this.loadSteeringManifest(this.uri)
                }, e.stopLoad = function() {
                    this.started = !1,
                    this.loader && (this.loader.destroy(), this.loader = null),
                    self.clearTimeout(this.reloadTimer)
                }, e.destroy = function() {
                    this.unregisterListeners(),
                    this.stopLoad(),
                    this.hls = null,
                    this.levels = this.audioTracks = this.subtitleTracks = null
                }, e.removeLevel = function(t) {
                    var e = this.levels;
                    e && (this.levels = e.filter((function(e) {
                        return e !== t
                    })))
                }, e.onManifestLoading = function() {
                    this.stopLoad(),
                    this.enabled = !0,
                    this.timeToLoad = 300,
                    this.updated = 0,
                    this.uri = null,
                    this.pathwayId = ".",
                    this.levels = this.audioTracks = this.subtitleTracks = null
                }, e.onManifestLoaded = function(t, e) {
                    var r = e.contentSteering;
                    null !== r && (this.pathwayId = r.pathwayId, this.uri = r.uri, this.started && this.startLoad())
                }, e.onManifestParsed = function(t, e) {
                    this.audioTracks = e.audioTracks,
                    this.subtitleTracks = e.subtitleTracks
                }, e.onError = function(t, e) {
                    var r = e.errorAction;
                    if ((null == r ? void 0 : r.action) === ir && r.flags === sr) {
                        var i = this.pathwayPriority,
                            n = this.pathwayId;
                        this.penalizedPathways[n] || (this.penalizedPathways[n] = performance.now()),
                        !i && this.levels && (i = this.levels.reduce((function(t, e) {
                            return -1 === t.indexOf(e.pathwayId) && t.push(e.pathwayId), t
                        }), [])),
                        i && i.length > 1 && (this.updatePathwayPriority(i), r.resolved = this.pathwayId !== n)
                    }
                }, e.filterParsedLevels = function(t) {
                    this.levels = t;
                    var e = this.getLevelsForPathway(this.pathwayId);
                    if (0 === e.length) {
                        var r = t[0].pathwayId;
                        this.log("No levels found in Pathway " + this.pathwayId + '. Setting initial Pathway to "' + r + '"'),
                        e = this.getLevelsForPathway(r),
                        this.pathwayId = r
                    }
                    return e.length !== t.length ? (this.log("Found " + e.length + "/" + t.length + ' levels in Pathway "' + this.pathwayId + '"'), e) : t
                }, e.getLevelsForPathway = function(t) {
                    return null === this.levels ? [] : this.levels.filter((function(e) {
                        return t === e.pathwayId
                    }))
                }, e.updatePathwayPriority = function(t) {
                    var e;
                    this.pathwayPriority = t;
                    var r = this.penalizedPathways,
                        i = performance.now();
                    Object.keys(r).forEach((function(t) {
                        i - r[t] > 3e5 && delete r[t]
                    }));
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        if (!r[a]) {
                            if (a === this.pathwayId)
                                return;
                            var s = this.hls.nextLoadLevel,
                                o = this.hls.levels[s];
                            if ((e = this.getLevelsForPathway(a)).length > 0) {
                                this.log('Setting Pathway to "' + a + '"'),
                                this.pathwayId = a,
                                this.hls.trigger(S.LEVELS_UPDATED, {
                                    levels: e
                                });
                                var l = this.hls.levels[s];
                                o && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== o.attrs["STABLE-VARIANT-ID"] && l.bitrate !== o.bitrate && this.log("Unstable Pathways change from bitrate " + o.bitrate + " to " + l.bitrate), this.hls.nextLoadLevel = s);
                                break
                            }
                        }
                    }
                }, e.clonePathways = function(t) {
                    var e = this,
                        r = this.levels;
                    if (r) {
                        var i = {},
                            n = {};
                        t.forEach((function(t) {
                            var a = t.ID,
                                s = t["BASE-ID"],
                                l = t["URI-REPLACEMENT"];
                            if (!r.some((function(t) {
                                return t.pathwayId === a
                            }))) {
                                var u = e.getLevelsForPathway(s).map((function(t) {
                                    var e = o({}, t);
                                    e.details = void 0,
                                    e.url = Na(t.uri, t.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l);
                                    var r = new P(t.attrs);
                                    r["PATHWAY-ID"] = a;
                                    var s = r.AUDIO && r.AUDIO + "_clone_" + a,
                                        u = r.SUBTITLES && r.SUBTITLES + "_clone_" + a;
                                    s && (i[r.AUDIO] = s, r.AUDIO = s),
                                    u && (n[r.SUBTITLES] = u, r.SUBTITLES = u),
                                    e.attrs = r;
                                    var h = new Ne(e);
                                    return dr(h, "audio", s), dr(h, "text", u), h
                                }));
                                r.push.apply(r, u),
                                Oa(e.audioTracks, i, l, a),
                                Oa(e.subtitleTracks, n, l, a)
                            }
                        }))
                    }
                }, e.loadSteeringManifest = function(t) {
                    var e,
                        r = this,
                        i = this.hls.config,
                        n = i.loader;
                    this.loader && this.loader.destroy(),
                    this.loader = new n(i);
                    try {
                        e = new self.URL(t)
                    } catch (e) {
                        return this.enabled = !1, void this.log("Failed to parse Steering Manifest URI: " + t)
                    }
                    if ("data:" !== e.protocol) {
                        var a = 0 | (this.hls.bandwidthEstimate || i.abrEwmaDefaultEstimate);
                        e.searchParams.set("_HLS_pathway", this.pathwayId),
                        e.searchParams.set("_HLS_throughput", "" + a)
                    }
                    var s = {
                            responseType: "json",
                            url: e.href
                        },
                        o = i.steeringManifestLoadPolicy.default,
                        l = o.errorRetry || o.timeoutRetry || {},
                        u = {
                            loadPolicy: o,
                            timeout: o.maxLoadTimeMs,
                            maxRetry: l.maxNumRetry || 0,
                            retryDelay: l.retryDelayMs || 0,
                            maxRetryDelay: l.maxRetryDelayMs || 0
                        },
                        h = {
                            onSuccess: function(t, i, n, a) {
                                r.log('Loaded steering manifest: "' + e + '"');
                                var s = t.data;
                                if (1 === s.VERSION) {
                                    r.updated = performance.now(),
                                    r.timeToLoad = s.TTL;
                                    var o = s["RELOAD-URI"],
                                        l = s["PATHWAY-CLONES"],
                                        u = s["PATHWAY-PRIORITY"];
                                    if (o)
                                        try {
                                            r.uri = new self.URL(o, e).href
                                        } catch (t) {
                                            return r.enabled = !1, void r.log("Failed to parse Steering Manifest RELOAD-URI: " + o)
                                        }
                                    r.scheduleRefresh(r.uri || n.url),
                                    l && r.clonePathways(l),
                                    u && r.updatePathwayPriority(u)
                                } else
                                    r.log("Steering VERSION " + s.VERSION + " not supported!")
                            },
                            onError: function(t, e, i, n) {
                                if (r.log("Error loading steering manifest: " + t.code + " " + t.text + " (" + e.url + ")"), r.stopLoad(), 410 === t.code)
                                    return r.enabled = !1, void r.log("Steering manifest " + e.url + " no longer available");
                                var a = 1e3 * r.timeToLoad;
                                if (429 !== t.code)
                                    r.scheduleRefresh(r.uri || e.url, a);
                                else {
                                    var s = r.loader;
                                    if ("function" == typeof (null == s ? void 0 : s.getResponseHeader)) {
                                        var o = s.getResponseHeader("Retry-After");
                                        o && (a = 1e3 * parseFloat(o))
                                    }
                                    r.log("Steering manifest " + e.url + " rate limited")
                                }
                            },
                            onTimeout: function(t, e, i) {
                                r.log("Timeout loading steering manifest (" + e.url + ")"),
                                r.scheduleRefresh(r.uri || e.url)
                            }
                        };
                    this.log("Requesting steering manifest: " + e),
                    this.loader.load(s, u, h)
                }, e.scheduleRefresh = function(t, e) {
                    var r = this;
                    void 0 === e && (e = 1e3 * this.timeToLoad),
                    self.clearTimeout(this.reloadTimer),
                    this.reloadTimer = self.setTimeout((function() {
                        r.loadSteeringManifest(t)
                    }), e)
                }, t
            }();
        function Oa(t, e, r, i) {
            t && Object.keys(e).forEach((function(n) {
                var a = t.filter((function(t) {
                    return t.groupId === n
                })).map((function(t) {
                    var a = o({}, t);
                    return a.details = void 0, a.attrs = new P(a.attrs), a.url = a.attrs.URI = Na(t.url, t.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r), a.groupId = a.attrs["GROUP-ID"] = e[n], a.attrs["PATHWAY-ID"] = i, a
                }));
                t.push.apply(t, a)
            }))
        }
        function Na(t, e, r, i) {
            var n,
                a = i.HOST,
                s = i.PARAMS,
                o = i[r];
            e && (n = null == o ? void 0 : o[e]) && (t = n);
            var l = new self.URL(t);
            return a && !n && (l.host = a), s && Object.keys(s).sort().forEach((function(t) {
                t && l.searchParams.set(t, s[t])
            })), l.href
        }
        var Ua = /^age:\s*[\d.]+\s*$/im,
            Ba = function() {
                function t(t) {
                    this.xhrSetup = void 0,
                    this.requestTimeout = void 0,
                    this.retryTimeout = void 0,
                    this.retryDelay = void 0,
                    this.config = null,
                    this.callbacks = null,
                    this.context = void 0,
                    this.loader = null,
                    this.stats = void 0,
                    this.xhrSetup = t && t.xhrSetup || null,
                    this.stats = new M,
                    this.retryDelay = 0
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.callbacks = null,
                    this.abortInternal(),
                    this.loader = null,
                    this.config = null
                }, e.abortInternal = function() {
                    var t = this.loader;
                    self.clearTimeout(this.requestTimeout),
                    self.clearTimeout(this.retryTimeout),
                    t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
                }, e.abort = function() {
                    var t;
                    this.abortInternal(),
                    null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
                }, e.load = function(t, e, r) {
                    if (this.stats.loading.start)
                        throw new Error("Loader can only be used once.");
                    this.stats.loading.start = self.performance.now(),
                    this.context = t,
                    this.config = e,
                    this.callbacks = r,
                    this.loadInternal()
                }, e.loadInternal = function() {
                    var t = this,
                        e = this.config,
                        r = this.context;
                    if (e) {
                        var i = this.loader = new self.XMLHttpRequest,
                            n = this.stats;
                        n.loading.first = 0,
                        n.loaded = 0,
                        n.aborted = !1;
                        var a = this.xhrSetup;
                        a ? Promise.resolve().then((function() {
                            if (!t.stats.aborted)
                                return a(i, r.url)
                        })).catch((function(t) {
                            return i.open("GET", r.url, !0), a(i, r.url)
                        })).then((function() {
                            t.stats.aborted || t.openAndSendXhr(i, r, e)
                        })).catch((function(e) {
                            t.callbacks.onError({
                                code: i.status,
                                text: e.message
                            }, r, i, n)
                        })) : this.openAndSendXhr(i, r, e)
                    }
                }, e.openAndSendXhr = function(t, e, r) {
                    t.readyState || t.open("GET", e.url, !0);
                    var i = this.context.headers,
                        n = r.loadPolicy,
                        a = n.maxTimeToFirstByteMs,
                        s = n.maxLoadTimeMs;
                    if (i)
                        for (var o in i)
                            t.setRequestHeader(o, i[o]);
                    e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)),
                    t.onreadystatechange = this.readystatechange.bind(this),
                    t.onprogress = this.loadprogress.bind(this),
                    t.responseType = e.responseType,
                    self.clearTimeout(this.requestTimeout),
                    r.timeout = a && E(a) ? a : s,
                    this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.timeout),
                    t.send()
                }, e.readystatechange = function() {
                    var t = this.context,
                        e = this.loader,
                        r = this.stats;
                    if (t && e) {
                        var i = e.readyState,
                            n = this.config;
                        if (!r.aborted && i >= 2 && (0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start), n.timeout !== n.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n.timeout = n.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.loadPolicy.maxLoadTimeMs - (r.loading.first - r.loading.start)))), 4 === i)) {
                            self.clearTimeout(this.requestTimeout),
                            e.onreadystatechange = null,
                            e.onprogress = null;
                            var a = e.status,
                                s = "text" !== e.responseType;
                            if (a >= 200 && a < 300 && (s && e.response || null !== e.responseText)) {
                                r.loading.end = Math.max(self.performance.now(), r.loading.first);
                                var o = s ? e.response : e.responseText,
                                    l = "arraybuffer" === e.responseType ? o.byteLength : o.length;
                                if (r.loaded = r.total = l, r.bwEstimate = 8e3 * r.total / (r.loading.end - r.loading.first), !this.callbacks)
                                    return;
                                var u = this.callbacks.onProgress;
                                if (u && u(r, t, o, e), !this.callbacks)
                                    return;
                                var h = {
                                    url: e.responseURL,
                                    data: o,
                                    code: a
                                };
                                this.callbacks.onSuccess(h, r, t, e)
                            } else {
                                var d = n.loadPolicy.errorRetry;
                                ze(d, r.retry, !1, a) ? this.retry(d) : (w.error(a + " while loading " + t.url), this.callbacks.onError({
                                    code: a,
                                    text: e.statusText
                                }, t, e, r))
                            }
                        }
                    }
                }, e.loadtimeout = function() {
                    var t,
                        e = null == (t = this.config) ? void 0 : t.loadPolicy.timeoutRetry;
                    if (ze(e, this.stats.retry, !0))
                        this.retry(e);
                    else {
                        w.warn("timeout while loading " + this.context.url);
                        var r = this.callbacks;
                        r && (this.abortInternal(), r.onTimeout(this.stats, this.context, this.loader))
                    }
                }, e.retry = function(t) {
                    var e = this.context,
                        r = this.stats;
                    this.retryDelay = qe(t, r.retry),
                    r.retry++,
                    w.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + e.url + ", retrying " + r.retry + "/" + t.maxNumRetry + " in " + this.retryDelay + "ms"),
                    this.abortInternal(),
                    this.loader = null,
                    self.clearTimeout(this.retryTimeout),
                    this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
                }, e.loadprogress = function(t) {
                    var e = this.stats;
                    e.loaded = t.loaded,
                    t.lengthComputable && (e.total = t.total)
                }, e.getCacheAge = function() {
                    var t = null;
                    if (this.loader && Ua.test(this.loader.getAllResponseHeaders())) {
                        var e = this.loader.getResponseHeader("age");
                        t = e ? parseFloat(e) : null
                    }
                    return t
                }, e.getResponseHeader = function(t) {
                    return this.loader && new RegExp("^" + t + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null
                }, t
            }(),
            Ga = /(\d+)-(\d+)\/(\d+)/,
            Ka = function() {
                function t(t) {
                    this.fetchSetup = void 0,
                    this.requestTimeout = void 0,
                    this.request = void 0,
                    this.response = void 0,
                    this.controller = void 0,
                    this.context = void 0,
                    this.config = null,
                    this.callbacks = null,
                    this.stats = void 0,
                    this.loader = null,
                    this.fetchSetup = t.fetchSetup || Ha,
                    this.controller = new self.AbortController,
                    this.stats = new M
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.loader = this.callbacks = null,
                    this.abortInternal()
                }, e.abortInternal = function() {
                    var t = this.response;
                    null != t && t.ok || (this.stats.aborted = !0, this.controller.abort())
                }, e.abort = function() {
                    var t;
                    this.abortInternal(),
                    null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
                }, e.load = function(t, e, r) {
                    var i = this,
                        n = this.stats;
                    if (n.loading.start)
                        throw new Error("Loader can only be used once.");
                    n.loading.start = self.performance.now();
                    var a = function(t, e) {
                            var r = {
                                method: "GET",
                                mode: "cors",
                                credentials: "same-origin",
                                signal: e,
                                headers: new self.Headers(o({}, t.headers))
                            };
                            return t.rangeEnd && r.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)), r
                        }(t, this.controller.signal),
                        s = r.onProgress,
                        l = "arraybuffer" === t.responseType,
                        u = l ? "byteLength" : "length",
                        h = e.loadPolicy,
                        d = h.maxTimeToFirstByteMs,
                        c = h.maxLoadTimeMs;
                    this.context = t,
                    this.config = e,
                    this.callbacks = r,
                    this.request = this.fetchSetup(t, a),
                    self.clearTimeout(this.requestTimeout),
                    e.timeout = d && E(d) ? d : c,
                    this.requestTimeout = self.setTimeout((function() {
                        i.abortInternal(),
                        r.onTimeout(n, t, i.response)
                    }), e.timeout),
                    self.fetch(this.request).then((function(a) {
                        i.response = i.loader = a;
                        var o = Math.max(self.performance.now(), n.loading.start);
                        if (self.clearTimeout(i.requestTimeout), e.timeout = c, i.requestTimeout = self.setTimeout((function() {
                            i.abortInternal(),
                            r.onTimeout(n, t, i.response)
                        }), c - (o - n.loading.start)), !a.ok) {
                            var u = a.status,
                                h = a.statusText;
                            throw new Va(h || "fetch, bad network response", u, a)
                        }
                        return n.loading.first = o, n.total = function(t) {
                            var e = t.get("Content-Range");
                            if (e) {
                                var r = function(t) {
                                    var e = Ga.exec(t);
                                    if (e)
                                        return parseInt(e[2]) - parseInt(e[1]) + 1
                                }(e);
                                if (E(r))
                                    return r
                            }
                            var i = t.get("Content-Length");
                            if (i)
                                return parseInt(i)
                        }(a.headers) || n.total, s && E(e.highWaterMark) ? i.loadProgressively(a, n, t, e.highWaterMark, s) : l ? a.arrayBuffer() : "json" === t.responseType ? a.json() : a.text()
                    })).then((function(a) {
                        var o = i.response;
                        self.clearTimeout(i.requestTimeout),
                        n.loading.end = Math.max(self.performance.now(), n.loading.first);
                        var l = a[u];
                        l && (n.loaded = n.total = l);
                        var h = {
                            url: o.url,
                            data: a,
                            code: o.status
                        };
                        s && !E(e.highWaterMark) && s(n, t, a, o),
                        r.onSuccess(h, n, t, o)
                    })).catch((function(e) {
                        if (self.clearTimeout(i.requestTimeout), !n.aborted) {
                            var a = e && e.code || 0,
                                s = e ? e.message : null;
                            r.onError({
                                code: a,
                                text: s
                            }, t, e ? e.details : null, n)
                        }
                    }))
                }, e.getCacheAge = function() {
                    var t = null;
                    if (this.response) {
                        var e = this.response.headers.get("age");
                        t = e ? parseFloat(e) : null
                    }
                    return t
                }, e.getResponseHeader = function(t) {
                    return this.response ? this.response.headers.get(t) : null
                }, e.loadProgressively = function(t, e, r, i, n) {
                    void 0 === i && (i = 0);
                    var a = new mn,
                        s = t.body.getReader();
                    return function o() {
                        return s.read().then((function(s) {
                            if (s.done)
                                return a.dataLength && n(e, r, a.flush(), t), Promise.resolve(new ArrayBuffer(0));
                            var l = s.value,
                                u = l.length;
                            return e.loaded += u, u < i || a.dataLength ? (a.push(l), a.dataLength >= i && n(e, r, a.flush(), t)) : n(e, r, l, t), o()
                        })).catch((function() {
                            return Promise.reject()
                        }))
                    }()
                }, t
            }();
        function Ha(t, e) {
            return new self.Request(t.url, e)
        }
        var Va = function(t) {
                function e(e, r, i) {
                    var n;
                    return (n = t.call(this, e) || this).code = void 0, n.details = void 0, n.code = r, n.details = i, n
                }
                return l(e, t), e
            }(f(Error)),
            Ya = /\s/,
            Wa = i(i({
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: void 0,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                ignoreDevicePixelRatio: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                backBufferLength: 1 / 0,
                maxBufferSize: 6e7,
                maxBufferHole: .1,
                highBufferWatchdogPeriod: 2,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 1 / 0,
                liveSyncDuration: void 0,
                liveMaxLatencyDuration: void 0,
                maxLiveSyncPlaybackRate: 1,
                liveDurationInfinity: !1,
                liveBackBufferLength: null,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                workerPath: null,
                enableSoftwareAES: !0,
                startLevel: void 0,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: Ba,
                fLoader: void 0,
                pLoader: void 0,
                xhrSetup: void 0,
                licenseXhrSetup: void 0,
                licenseResponseCallback: void 0,
                abrController: vn,
                bufferController: In,
                capLevelController: Ra,
                errorController: lr,
                fpsController: Aa,
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: void 0,
                drmSystems: {},
                drmSystemOptions: {},
                requestMediaKeySystemAccessFunc: et,
                testBandwidth: !0,
                progressive: !1,
                lowLatencyMode: !0,
                cmcd: void 0,
                enableDateRangeMetadataCues: !0,
                enableEmsgMetadataCues: !0,
                enableID3MetadataCues: !0,
                certLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 8e3,
                        maxLoadTimeMs: 2e4,
                        timeoutRetry: null,
                        errorRetry: null
                    }
                },
                keyLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 8e3,
                        maxLoadTimeMs: 2e4,
                        timeoutRetry: {
                            maxNumRetry: 1,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 2e4,
                            backoff: "linear"
                        },
                        errorRetry: {
                            maxNumRetry: 8,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 2e4,
                            backoff: "linear"
                        }
                    }
                },
                manifestLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 1 / 0,
                        maxLoadTimeMs: 2e4,
                        timeoutRetry: {
                            maxNumRetry: 2,
                            retryDelayMs: 0,
                            maxRetryDelayMs: 0
                        },
                        errorRetry: {
                            maxNumRetry: 1,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 8e3
                        }
                    }
                },
                playlistLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 1e4,
                        maxLoadTimeMs: 2e4,
                        timeoutRetry: {
                            maxNumRetry: 2,
                            retryDelayMs: 0,
                            maxRetryDelayMs: 0
                        },
                        errorRetry: {
                            maxNumRetry: 2,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 8e3
                        }
                    }
                },
                fragLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 1e4,
                        maxLoadTimeMs: 12e4,
                        timeoutRetry: {
                            maxNumRetry: 4,
                            retryDelayMs: 0,
                            maxRetryDelayMs: 0
                        },
                        errorRetry: {
                            maxNumRetry: 6,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 8e3
                        }
                    }
                },
                steeringManifestLoadPolicy: {
                    default: {
                        maxTimeToFirstByteMs: 1e4,
                        maxLoadTimeMs: 2e4,
                        timeoutRetry: {
                            maxNumRetry: 2,
                            retryDelayMs: 0,
                            maxRetryDelayMs: 0
                        },
                        errorRetry: {
                            maxNumRetry: 1,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 8e3
                        }
                    }
                },
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3
            }, {
                cueHandler: {
                    newCue: function(t, e, r, i) {
                        for (var n, a, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0; d < i.rows.length; d++)
                            if (s = !0, o = 0, l = "", !(n = i.rows[d]).isEmpty()) {
                                for (var c, f = 0; f < n.chars.length; f++)
                                    Ya.test(n.chars[f].uchar) && s ? o++ : (l += n.chars[f].uchar, s = !1);
                                n.cueStartTime = e,
                                e === r && (r += 1e-4),
                                o >= 16 ? o-- : o++;
                                var g = ia(l.trim()),
                                    v = la(e, r, g);
                                null != t && null != (c = t.cues) && c.getCueById(v) || ((a = new h(e, r, g)).id = v, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(a))
                            }
                        return t && u.length && (u.sort((function(t, e) {
                            return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                        })), u.forEach((function(e) {
                            return Se(t, e)
                        }))), u
                    }
                },
                enableWebVTT: !0,
                enableIMSC1: !0,
                enableCEA708Captions: !0,
                captionsTextTrack1Label: "English",
                captionsTextTrack1LanguageCode: "en",
                captionsTextTrack2Label: "Spanish",
                captionsTextTrack2LanguageCode: "es",
                captionsTextTrack3Label: "Unknown CC",
                captionsTextTrack3LanguageCode: "",
                captionsTextTrack4Label: "Unknown CC",
                captionsTextTrack4LanguageCode: "",
                renderTextTracksNatively: !0
            }), {}, {
                subtitleStreamController: Sn,
                subtitleTrackController: Rn,
                timelineController: Sa,
                audioStreamController: pn,
                audioTrackController: yn,
                emeController: ba,
                cmcdController: Fa,
                contentSteeringController: Ma
            });
        function ja(t) {
            return t && "object" == typeof t ? Array.isArray(t) ? t.map(ja) : Object.keys(t).reduce((function(e, r) {
                return e[r] = ja(t[r]), e
            }), {}) : t
        }
        function qa(t) {
            var e = t.loader;
            e !== Ka && e !== Ba ? (w.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function() {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                    try {
                        return new self.ReadableStream({}), !0
                    } catch (t) {}
                return !1
            }() && (t.loader = Ka, t.progressive = !0, t.enableSoftwareAES = !0, w.log("[config]: Progressive streaming enabled, using FetchLoader"))
        }
        var Xa = function() {
            function t(e) {
                void 0 === e && (e = {}),
                this.config = void 0,
                this.userConfig = void 0,
                this.coreComponents = void 0,
                this.networkControllers = void 0,
                this._emitter = new an,
                this._autoLevelCapping = void 0,
                this._maxHdcpLevel = null,
                this.abrController = void 0,
                this.bufferController = void 0,
                this.capLevelController = void 0,
                this.latencyController = void 0,
                this.levelController = void 0,
                this.streamController = void 0,
                this.audioTrackController = void 0,
                this.subtitleTrackController = void 0,
                this.emeController = void 0,
                this.cmcdController = void 0,
                this._media = null,
                this.url = null,
                I(e.debug || !1, "Hls instance");
                var r = this.config = function(t, e) {
                    if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
                        throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                    if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                    var r = ja(t),
                        n = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
                    return ["manifest", "level", "frag"].forEach((function(t) {
                        var i = ("level" === t ? "playlist" : t) + "LoadPolicy",
                            a = void 0 === e[i],
                            s = [];
                        n.forEach((function(n) {
                            var o = t + "Loading" + n,
                                l = e[o];
                            if (void 0 !== l && a) {
                                s.push(o);
                                var u = r[i].default;
                                switch (e[i] = {
                                    default: u
                                }, n) {
                                case "TimeOut":
                                    u.maxLoadTimeMs = l,
                                    u.maxTimeToFirstByteMs = l;
                                    break;
                                case "MaxRetry":
                                    u.errorRetry.maxNumRetry = l,
                                    u.timeoutRetry.maxNumRetry = l;
                                    break;
                                case "RetryDelay":
                                    u.errorRetry.retryDelayMs = l,
                                    u.timeoutRetry.retryDelayMs = l;
                                    break;
                                case "MaxRetryTimeout":
                                    u.errorRetry.maxRetryDelayMs = l,
                                    u.timeoutRetry.maxRetryDelayMs = l
                                }
                            }
                        })),
                        s.length && w.warn('hls.js config: "' + s.join('", "') + '" setting(s) are deprecated, use "' + i + '": ' + JSON.stringify(e[i]))
                    })), i(i({}, r), e)
                }(t.DefaultConfig, e);
                this.userConfig = e,
                this._autoLevelCapping = -1,
                r.progressive && qa(r);
                var n = r.abrController,
                    a = r.bufferController,
                    s = r.capLevelController,
                    o = r.errorController,
                    l = r.fpsController,
                    u = new o(this),
                    h = this.abrController = new n(this),
                    d = this.bufferController = new a(this),
                    c = this.capLevelController = new s(this),
                    f = new l(this),
                    g = new Te(this),
                    v = new Ce(this),
                    m = r.contentSteeringController,
                    p = m ? new m(this) : null,
                    y = this.levelController = new hr(this, p),
                    T = new pr(this),
                    E = new kr(this.config),
                    L = this.streamController = new cn(this, T, E);
                c.setStreamController(L),
                f.setStreamController(L);
                var R = [g, y, L];
                p && R.splice(1, 0, p),
                this.networkControllers = R;
                var A = [h, d, c, f, v, T];
                this.audioTrackController = this.createController(r.audioTrackController, R);
                var k = r.audioStreamController;
                k && R.push(new k(this, T, E)),
                this.subtitleTrackController = this.createController(r.subtitleTrackController, R);
                var b = r.subtitleStreamController;
                b && R.push(new b(this, T, E)),
                this.createController(r.timelineController, A),
                E.emeController = this.emeController = this.createController(r.emeController, A),
                this.cmcdController = this.createController(r.cmcdController, A),
                this.latencyController = this.createController(_e, A),
                this.coreComponents = A,
                R.push(u);
                var D = u.onErrorOut;
                "function" == typeof D && this.on(S.ERROR, D, u)
            }
            t.isSupported = function() {
                return function() {
                    var t = qt();
                    if (!t)
                        return !1;
                    var e = Zr(),
                        r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                    return !!r && !!i
                }()
            };
            var e = t.prototype;
            return e.createController = function(t, e) {
                if (t) {
                    var r = new t(this);
                    return e && e.push(r), r
                }
                return null
            }, e.on = function(t, e, r) {
                void 0 === r && (r = this),
                this._emitter.on(t, e, r)
            }, e.once = function(t, e, r) {
                void 0 === r && (r = this),
                this._emitter.once(t, e, r)
            }, e.removeAllListeners = function(t) {
                this._emitter.removeAllListeners(t)
            }, e.off = function(t, e, r, i) {
                void 0 === r && (r = this),
                this._emitter.off(t, e, r, i)
            }, e.listeners = function(t) {
                return this._emitter.listeners(t)
            }, e.emit = function(t, e, r) {
                return this._emitter.emit(t, e, r)
            }, e.trigger = function(t, e) {
                if (this.config.debug)
                    return this.emit(t, t, e);
                try {
                    return this.emit(t, t, e)
                } catch (e) {
                    w.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e),
                    this.trigger(S.ERROR, {
                        type: L.OTHER_ERROR,
                        details: R.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: t,
                        error: e
                    })
                }
                return !1
            }, e.listenerCount = function(t) {
                return this._emitter.listenerCount(t)
            }, e.destroy = function() {
                w.log("destroy"),
                this.trigger(S.DESTROYING, void 0),
                this.detachMedia(),
                this.removeAllListeners(),
                this._autoLevelCapping = -1,
                this.url = null,
                this.networkControllers.forEach((function(t) {
                    return t.destroy()
                })),
                this.networkControllers.length = 0,
                this.coreComponents.forEach((function(t) {
                    return t.destroy()
                })),
                this.coreComponents.length = 0;
                var t = this.config;
                t.xhrSetup = t.fetchSetup = void 0,
                this.userConfig = null
            }, e.attachMedia = function(t) {
                w.log("attachMedia"),
                this._media = t,
                this.trigger(S.MEDIA_ATTACHING, {
                    media: t
                })
            }, e.detachMedia = function() {
                w.log("detachMedia"),
                this.trigger(S.MEDIA_DETACHING, void 0),
                this._media = null
            }, e.loadSource = function(t) {
                this.stopLoad();
                var e = this.media,
                    r = this.url,
                    i = this.url = T.buildAbsoluteURL(self.location.href, t, {
                        alwaysNormalize: !0
                    });
                w.log("loadSource:" + i),
                e && r && (r !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)),
                this.trigger(S.MANIFEST_LOADING, {
                    url: t
                })
            }, e.startLoad = function(t) {
                void 0 === t && (t = -1),
                w.log("startLoad(" + t + ")"),
                this.networkControllers.forEach((function(e) {
                    e.startLoad(t)
                }))
            }, e.stopLoad = function() {
                w.log("stopLoad"),
                this.networkControllers.forEach((function(t) {
                    t.stopLoad()
                }))
            }, e.swapAudioCodec = function() {
                w.log("swapAudioCodec"),
                this.streamController.swapAudioCodec()
            }, e.recoverMediaError = function() {
                w.log("recoverMediaError");
                var t = this._media;
                this.detachMedia(),
                t && this.attachMedia(t)
            }, e.removeLevel = function(t, e) {
                void 0 === e && (e = 0),
                this.levelController.removeLevel(t, e)
            }, a(t, [{
                key: "levels",
                get: function() {
                    var t = this.levelController.levels;
                    return t || []
                }
            }, {
                key: "currentLevel",
                get: function() {
                    return this.streamController.currentLevel
                },
                set: function(t) {
                    w.log("set currentLevel:" + t),
                    this.loadLevel = t,
                    this.abrController.clearTimer(),
                    this.streamController.immediateLevelSwitch()
                }
            }, {
                key: "nextLevel",
                get: function() {
                    return this.streamController.nextLevel
                },
                set: function(t) {
                    w.log("set nextLevel:" + t),
                    this.levelController.manualLevel = t,
                    this.streamController.nextLevelSwitch()
                }
            }, {
                key: "loadLevel",
                get: function() {
                    return this.levelController.level
                },
                set: function(t) {
                    w.log("set loadLevel:" + t),
                    this.levelController.manualLevel = t
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return this.levelController.nextLoadLevel
                },
                set: function(t) {
                    this.levelController.nextLoadLevel = t
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                },
                set: function(t) {
                    w.log("set firstLevel:" + t),
                    this.levelController.firstLevel = t
                }
            }, {
                key: "startLevel",
                get: function() {
                    return this.levelController.startLevel
                },
                set: function(t) {
                    w.log("set startLevel:" + t),
                    -1 !== t && (t = Math.max(t, this.minAutoLevel)),
                    this.levelController.startLevel = t
                }
            }, {
                key: "capLevelToPlayerSize",
                get: function() {
                    return this.config.capLevelToPlayerSize
                },
                set: function(t) {
                    var e = !!t;
                    e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
                }
            }, {
                key: "autoLevelCapping",
                get: function() {
                    return this._autoLevelCapping
                },
                set: function(t) {
                    this._autoLevelCapping !== t && (w.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
                }
            }, {
                key: "bandwidthEstimate",
                get: function() {
                    var t = this.abrController.bwEstimator;
                    return t ? t.getEstimate() : NaN
                }
            }, {
                key: "ttfbEstimate",
                get: function() {
                    var t = this.abrController.bwEstimator;
                    return t ? t.getEstimateTTFB() : NaN
                }
            }, {
                key: "maxHdcpLevel",
                get: function() {
                    return this._maxHdcpLevel
                },
                set: function(t) {
                    Pe.indexOf(t) > -1 && (this._maxHdcpLevel = t)
                }
            }, {
                key: "autoLevelEnabled",
                get: function() {
                    return -1 === this.levelController.manualLevel
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.levelController.manualLevel
                }
            }, {
                key: "minAutoLevel",
                get: function() {
                    var t = this.levels,
                        e = this.config.minAutoBitrate;
                    if (!t)
                        return 0;
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i].maxBitrate >= e)
                            return i;
                    return 0
                }
            }, {
                key: "maxAutoLevel",
                get: function() {
                    var t,
                        e = this.levels,
                        r = this.autoLevelCapping,
                        i = this.maxHdcpLevel;
                    if (t = -1 === r && e && e.length ? e.length - 1 : r, i)
                        for (var n = t; n--;) {
                            var a = e[n].attrs["HDCP-LEVEL"];
                            if (a && a <= i)
                                return n
                        }
                    return t
                }
            }, {
                key: "nextAutoLevel",
                get: function() {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                },
                set: function(t) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                }
            }, {
                key: "playingDate",
                get: function() {
                    return this.streamController.currentProgramDateTime
                }
            }, {
                key: "mainForwardBufferInfo",
                get: function() {
                    return this.streamController.getMainFwdBufferInfo()
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTracks : []
                }
            }, {
                key: "audioTrack",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTrack : -1
                },
                set: function(t) {
                    var e = this.audioTrackController;
                    e && (e.audioTrack = t)
                }
            }, {
                key: "subtitleTracks",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTracks : []
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTrack : -1
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleTrack = t)
                }
            }, {
                key: "media",
                get: function() {
                    return this._media
                }
            }, {
                key: "subtitleDisplay",
                get: function() {
                    var t = this.subtitleTrackController;
                    return !!t && t.subtitleDisplay
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleDisplay = t)
                }
            }, {
                key: "lowLatencyMode",
                get: function() {
                    return this.config.lowLatencyMode
                },
                set: function(t) {
                    this.config.lowLatencyMode = t
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    return this.latencyController.liveSyncPosition
                }
            }, {
                key: "latency",
                get: function() {
                    return this.latencyController.latency
                }
            }, {
                key: "maxLatency",
                get: function() {
                    return this.latencyController.maxLatency
                }
            }, {
                key: "targetLatency",
                get: function() {
                    return this.latencyController.targetLatency
                }
            }, {
                key: "drift",
                get: function() {
                    return this.latencyController.drift
                }
            }, {
                key: "forceStartLoad",
                get: function() {
                    return this.streamController.forceStartLoad
                }
            }], [{
                key: "version",
                get: function() {
                    return "1.4.12"
                }
            }, {
                key: "Events",
                get: function() {
                    return S
                }
            }, {
                key: "ErrorTypes",
                get: function() {
                    return L
                }
            }, {
                key: "ErrorDetails",
                get: function() {
                    return R
                }
            }, {
                key: "DefaultConfig",
                get: function() {
                    return t.defaultConfig ? t.defaultConfig : Wa
                },
                set: function(e) {
                    t.defaultConfig = e
                }
            }]), t
        }();
        return Xa.defaultConfig = void 0, Xa
    },
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (r = "undefined" != typeof globalThis ? globalThis : r || self).Hls = i()
}(!1);
