(function(Scratch) {
    'use strict';
  
    class lazyAudio{
        constructor(e) {
            this.runtime = e,
            this._bufferedAudios = {}
        }
        _resetAudios() {
            this._bufferedAudios = {}
        }
        getInfo() {
            return {
                id: "lazyAudio",
                name: "LazyAudio",
                menuIconURI: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iLTQxNSAyMTcgMTI4IDEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtNDE1IDIxNyAxMjggMTI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjx0aXRsZT5tdXNpYy1ibG9jay1pY29uPC90aXRsZT4KPHBhdGggc3R5bGU9ImZpbGw6IzEyOTZEQjsiIGQ9Ik0tMzg5LjMsMzI0LjhjLTEzLjksMC0yNS4xLTExLjYtMjUuMS0yNS45YzAtMTQsMTAuOC0yNS41LDI0LjMtMjUuOWMwLjYtMTEsOS41LTE5LjcsMjAuMy0xOS43CgljMS41LDAsMy4xLDAuMiw0LjUsMC41YzYuMy0xMCwxNy4yLTE2LjcsMjkuNi0xNi43YzE5LjQsMCwzNS4xLDE2LjIsMzUuMSwzNi4zYzAsMC45LDAsMS44LTAuMSwyLjdjNy44LDQuNCwxMy4xLDEyLjksMTMuMSwyMi43CgljMCwxNC4zLTExLjIsMjUuOS0yNS4xLDI1LjlMLTM4OS4zLDMyNC44TC0zODkuMywzMjQuOHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0tMzQ1LjQsMzA2LjhjLTEwLjMtNDYuMS04LjQtMzMuMS0wLjYtMzFjNy44LDIuMSwxOS43LTEwLDcuNy04LjFjLTEyLDEuOS0yMi45LTIwLjEtMTguNSw1LjgKCWMzLjYsMjAuOSw1LjcsMjUuNywzLjksMjUuN2MtMC42LTAuMy0xLjMtMC41LTItMC42Yy0xLjMtMC4zLTIuNi0wLjUtNC0wLjVjLTYuNSwwLTEwLjksMy45LTEwLDguN3M2LjksOC43LDEzLjQsOC43CglDLTM0OC45LDMxNS41LTM0NC40LDMxMS44LTM0NS40LDMwNi44TC0zNDUuNCwzMDYuOHoiLz4KPC9zdmc+",
                blockIconURI: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iLTUwMyAyMTcgMTI4IDEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtNTAzIDIxNyAxMjggMTI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5tdXNpYy1ibG9jay1pY29uPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTS00NzcuNCwzMjMuMmMtMTMuOSwwLTI1LjEtMTEuNi0yNS4xLTI1LjljMC0xNCwxMC44LTI1LjUsMjQuMy0yNS45YzAuNi0xMSw5LjUtMTkuNywyMC4zLTE5LjcKCWMxLjUsMCwzLjEsMC4yLDQuNSwwLjVjNi4zLTEwLDE3LjItMTYuNywyOS42LTE2LjdjMTkuNCwwLDM1LjEsMTYuMiwzNS4xLDM2LjNjMCwwLjksMCwxLjgtMC4xLDIuN2M3LjgsNC40LDEzLjEsMTIuOSwxMy4xLDIyLjcKCWMwLDE0LjMtMTEuMiwyNS45LTI1LjEsMjUuOUgtNDc3LjR6IE0tNDMzLjUsMzA1LjJjLTEwLjMtNDYuMS04LjQtMzMuMS0wLjYtMzFjNy44LDIuMSwxOS43LTEwLDcuNy04LjFjLTEyLDEuOS0yMi45LTIwLjEtMTguNSw1LjgKCWMzLjYsMjAuOSw1LjcsMjUuNywzLjksMjUuN2MtMC42LTAuMy0xLjMtMC41LTItMC42Yy0xLjMtMC4zLTIuNi0wLjUtNC0wLjVjLTYuNSwwLTEwLjksMy45LTEwLDguN2MwLjksNC44LDYuOSw4LjcsMTMuNCw4LjcKCUMtNDM3LDMxMy45LTQzMi41LDMxMC4xLTQzMy41LDMwNS4yTC00MzMuNSwzMDUuMnoiLz4KPC9zdmc+",
                color1: "#9C27B0",
                blocks: [{
                    opcode: "load",
                    blockType: r.COMMAND,
                    text: "加载([AUDIO_ID])",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        }
                    }
                }, {
                    opcode: "play",
                    blockType: r.COMMAND,
                    text: "播放([AUDIO_ID])",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        }
                    }
                }, {
                    opcode: "pause",
                    blockType: r.COMMAND,
                    text: "暂停([AUDIO_ID])",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        }
                    }
                }, {
                    opcode: "pauseAll",
                    blockType: r.COMMAND,
                    text: "暂停全部",
                    arguments: {}
                }, {
                    opcode: "cd",
                    blockType: r.REPORTER,
                    text: "获取当前播放秒数([AUDIO_ID])",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        }
                    }
                }, {
                    opcode: "zcd",
                    blockType: r.REPORTER,
                    text: "获取音频总长度(秒)([AUDIO_ID])",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        }
                    }
                }, {
                    opcode: "sz",
                    blockType: r.COMMAND,
                    text: "设置音频([AUDIO_ID])播放秒数[s]",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        },
                        s: {
                            type: n.STRING,
                            defaultValue: "14"
                        }
                    }
                }, {
                    opcode: "bf",
                    blockType: r.REPORTER,
                    text: "获取音频播放速度([AUDIO_ID])",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        }
                    }
                }, {
                    opcode: "bf2",
                    blockType: r.COMMAND,
                    text: "设置音频([AUDIO_ID])播放速度[s]",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        },
                        s: {
                            type: n.STRING,
                            defaultValue: "2"
                        }
                    }
                }, {
                    opcode: "yl",
                    blockType: r.COMMAND,
                    text: "设置音频([AUDIO_ID])音量[s]",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        },
                        s: {
                            type: n.NUMBER,
                            defaultValue: "0.14"
                        }
                    }
                }, {
                    opcode: "hc",
                    blockType: r.REPORTER,
                    text: "获取音频([AUDIO_ID])缓冲片段数",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        },
                        s: {
                            type: n.STRING,
                            defaultValue: "14"
                        }
                    }
                }, {
                    opcode: "hcs",
                    blockType: r.REPORTER,
                    text: "获取音频([AUDIO_ID])[s]片段的开始时间",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        },
                        s: {
                            type: n.NUMBER,
                            defaultValue: "1"
                        }
                    }
                }, {
                    opcode: "hce",
                    blockType: r.REPORTER,
                    text: "获取音频([AUDIO_ID])[s]片段结束时间",
                    arguments: {
                        AUDIO_ID: {
                            type: n.STRING,
                            defaultValue: "http://music.163.com/song/media/outer/url?id=504923885.mp3"
                        },
                        s: {
                            type: n.NUMBER,
                            defaultValue: "1"
                        }
                    }
                }],
                menus: {}
            }
        }
        _ad() {
            temp2.music || (temp2.music = {})
        }
        load(e, t) {
            try {
                const t = e.AUDIO_ID;
                if (this._ad(),
                temp2.music[t])
                    return void (temp2.music[t].currentTime = 0);
                let i = document.createElement("video");
                i.src = t,
                -1 !== t.indexOf(".mp4") && (i.crossOrigin = ""),
                temp2.music[t] = i,
                temp2.music[t].load()
            } catch (e) {}
        }
        play(e, t) {
            try {
                const t = e.AUDIO_ID;
                this._ad(),
                temp2.music[t] && temp2.music[t].play()
            } catch (e) {}
        }
        pause(e, t) {
            try {
                const t = e.AUDIO_ID;
                this._ad(),
                temp2.music[t] && temp2.music[t].pause()
            } catch (e) {}
        }
        pauseAll(e, t) {
            try {
                e.AUDIO_ID;
                this._ad(),
                Object.keys(temp2.music).forEach(e=>{
                    temp2.music[e].pause()
                }
                )
            } catch (e) {}
        }
        cd(e, t) {
            try {
                const t = e.AUDIO_ID;
                return this._ad(),
                temp2.music[t] ? temp2.music[t].currentTime : "-1"
            } catch (e) {}
        }
        bf(e, t) {
            try {
                const t = e.AUDIO_ID;
                return this._ad(),
                temp2.music[t] ? temp2.music[t].playbackRate : "-1"
            } catch (e) {}
        }
        zcd(e, t) {
            try {
                const t = e.AUDIO_ID;
                return this._ad(),
                temp2.music[t] ? temp2.music[t].duration : "-1"
            } catch (e) {}
        }
        hc(e, t) {
            try {
                const t = e.AUDIO_ID;
                return this._ad(),
                temp2.music[t] ? temp2.music[t].buffered.length : "-1"
            } catch (e) {}
        }
        hcs(e, t) {
            try {
                const t = e.AUDIO_ID;
                return this._ad(),
                temp2.music[t] ? temp2.music[t].buffered.start(e.s - 1) : "-1"
            } catch (e) {}
        }
        hce(e, t) {
            try {
                const t = e.AUDIO_ID;
                return this._ad(),
                temp2.music[t] ? temp2.music[t].buffered.end(e.s - 1) : "-1"
            } catch (e) {}
        }
        sz(e, t) {
            try {
                const t = e.AUDIO_ID;
                this._ad(),
                temp2.music[t] && (temp2.music[t].currentTime = e.s)
            } catch (e) {}
        }
        bf2(e, t) {
            try {
                const t = e.AUDIO_ID;
                this._ad(),
                temp2.music[t] && (temp2.music[t].playbackRate = e.s)
            } catch (e) {}
        }
        yl(e, t) {
            try {
                const t = e.AUDIO_ID;
                this._ad(),
                temp2.music[t] && (temp2.music[t].volume = e.s)
            } catch (e) {}
        }
    }
    Scratch.extensions.register(new lazyAudio());
  })(Scratch);
  