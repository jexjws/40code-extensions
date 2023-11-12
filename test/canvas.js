(function(Scratch) {
    'use strict';
    class canvas{
        constructor(e) {
            this.runtime = e,
            this._penSkinId = -2
        }
        getInfo() {
            return {
                id: "canvas",
                name: "Canvas",
                color1: "#2196F3",
                blocks: [{
                    opcode: "reset",
                    blockType: r.COMMAND,
                    text: "以宽[w]，高[h]重置canvas",
                    arguments: {
                        w: {
                            type: n.NUMBER,
                            defaultValue: "480"
                        },
                        h: {
                            type: n.NUMBER,
                            defaultValue: "360"
                        }
                    }
                }, {
                    opcode: "beginPath",
                    blockType: r.COMMAND,
                    text: "beginPath(绘制路径)",
                    arguments: {}
                }, {
                    opcode: "closePath",
                    blockType: r.COMMAND,
                    text: "closePath(结束路径)",
                    arguments: {}
                }, {
                    opcode: "moveTo",
                    blockType: r.COMMAND,
                    text: "moveTo(移到)([X],[Y])",
                    arguments: {
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "lineTo",
                    blockType: r.COMMAND,
                    text: "lineTo([X],[Y])",
                    arguments: {
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "arc",
                    blockType: r.COMMAND,
                    text: "arc(画弧)([X],[Y],[RADIUS],[START_ANGLE],[END_ANGLE])",
                    arguments: {
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        RADIUS: {
                            type: n.NUMBER,
                            defaultValue: "100"
                        },
                        START_ANGLE: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        END_ANGLE: {
                            type: n.NUMBER,
                            defaultValue: "3.1415926"
                        }
                    }
                }, {
                    opcode: "rect",
                    blockType: r.COMMAND,
                    text: "rect(矩形)([X],[Y],[W],[H])",
                    arguments: {
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        W: {
                            type: n.NUMBER,
                            defaultValue: "100"
                        },
                        H: {
                            type: n.NUMBER,
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "clip",
                    blockType: r.COMMAND,
                    text: "clip(裁剪)"
                }, {
                    opcode: "setLineWidth",
                    blockType: r.COMMAND,
                    text: "setLineWidth(设置线宽)([LINE_WIDTH])",
                    arguments: {
                        LINE_WIDTH: {
                            type: n.NUMBER,
                            defaultValue: "1"
                        }
                    }
                }, {
                    opcode: "setLineCap",
                    blockType: r.COMMAND,
                    text: "setLineCap(设置线条端点样式)([LINE_CAP])",
                    arguments: {
                        LINE_CAP: {
                            type: n.STRING,
                            defaultValue: "round"
                        }
                    }
                }, {
                    opcode: "setStrokeStyle",
                    blockType: r.COMMAND,
                    text: "setStrokeStyle(设置边框样式)([STROKE_STYLE])",
                    arguments: {
                        STROKE_STYLE: {
                            type: n.STRING,
                            defaultValue: "#000000"
                        }
                    }
                }, {
                    opcode: "setFillStyle",
                    blockType: r.COMMAND,
                    text: "setFillStyle(设置填充样式)([FILL_STYLE])",
                    arguments: {
                        FILL_STYLE: {
                            type: n.STRING,
                            defaultValue: "#000000"
                        }
                    }
                }, {
                    opcode: "stroke",
                    blockType: r.COMMAND,
                    text: "stroke(边框)"
                }, {
                    opcode: "fill",
                    blockType: r.COMMAND,
                    text: "fill(填充)"
                }, {
                    opcode: "clearRect",
                    blockType: r.COMMAND,
                    text: "clearRect(清除矩形)([X],[Y],[W],[H])",
                    arguments: {
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        W: {
                            type: n.NUMBER,
                            defaultValue: "480"
                        },
                        H: {
                            type: n.NUMBER,
                            defaultValue: "360"
                        }
                    }
                }, {
                    opcode: "setFont",
                    blockType: r.COMMAND,
                    text: "setFont(设置字体)([FONT])",
                    arguments: {
                        FONT: {
                            type: n.STRING,
                            defaultValue: "30px Arial"
                        }
                    }
                }, {
                    opcode: "strokeText",
                    blockType: r.COMMAND,
                    text: "strokeText(字体边框)([TEXT],[X],[Y])",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "hello world"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "fillText",
                    blockType: r.COMMAND,
                    text: "fillText(字体填充)([TEXT],[X],[Y])",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "hello world"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "measureText",
                    blockType: r.REPORTER,
                    text: "measureText([TEXT])",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "hello world"
                        }
                    }
                }, {
                    opcode: "loadImage",
                    blockType: r.COMMAND,
                    text: "加载图片([IMAGE_ID])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        }
                    }
                }, {
                    opcode: "drawImage",
                    blockType: r.COMMAND,
                    text: "绘制图片([IMAGE_ID],[X],[Y])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "drawImage2",
                    blockType: r.COMMAND,
                    text: "绘制图片([IMAGE_ID] X[X] Y[Y] 宽度[w] 高度[h])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        w: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        h: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "drawImage3",
                    blockType: r.COMMAND,
                    text: "绘制图片([IMAGE_ID] 起始X[SX] Y[SY] 宽度[sw] 高度[sh]；结束X[X] Y[Y] 宽度[w] 高度[h])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        },
                        SX: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        SY: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        sw: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        sh: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        w: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        h: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "iw",
                    blockType: r.REPORTER,
                    text: "图片([IMAGE_ID])宽度",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        }
                    }
                }, {
                    opcode: "ih",
                    blockType: r.REPORTER,
                    text: "图片([IMAGE_ID])高度",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        }
                    }
                }, , {
                    opcode: "drawv",
                    blockType: r.COMMAND,
                    text: "绘制视频当前帧([IMAGE_ID],[X],[Y])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://sccode.52msr.cn/vedio/sea.mp4"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "drawv2",
                    blockType: r.COMMAND,
                    text: "绘制视频当前帧([IMAGE_ID] X[X] Y[Y] 宽度[w] 高度[h])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        w: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        h: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "drawv3",
                    blockType: r.COMMAND,
                    text: "绘制视频当前帧([IMAGE_ID] 起始X[SX] Y[SY] 宽度[sw] 高度[sh]；结束X[X] Y[Y] 宽度[w] 高度[h])",
                    arguments: {
                        IMAGE_ID: {
                            type: n.STRING,
                            defaultValue: "https://40code-cdn.zq990.com/static/internalapi/asset/0214ed33dab7c5614594feecd44e5e4f.jpg"
                        },
                        SX: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        SY: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        sw: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        sh: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        w: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        h: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "scale",
                    blockType: r.COMMAND,
                    text: "scale([SCALE_W],[SCALE_H])",
                    arguments: {
                        SCALE_W: {
                            type: n.NUMBER,
                            defaultValue: "1.0"
                        },
                        SCALE_H: {
                            type: n.NUMBER,
                            defaultValue: "1.0"
                        }
                    }
                }, {
                    opcode: "rotate",
                    blockType: r.COMMAND,
                    text: "rotate([ANGLE])",
                    arguments: {
                        ANGLE: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "translate",
                    blockType: r.COMMAND,
                    text: "translate([X],[Y])",
                    arguments: {
                        X: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        Y: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "transform",
                    blockType: r.COMMAND,
                    text: "transform([A],[B],[C],[D],[E],[F])",
                    arguments: {
                        A: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        B: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        C: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        D: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        E: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        F: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "clearTransform",
                    blockType: r.COMMAND,
                    text: "clearTransform"
                }, {
                    opcode: "save",
                    blockType: r.COMMAND,
                    text: "save"
                }, {
                    opcode: "restore",
                    blockType: r.COMMAND,
                    text: "restore"
                }, {
                    opcode: "setGlobalAlpha",
                    blockType: r.COMMAND,
                    text: "setGlobalAlpha([ALPHA])",
                    arguments: {
                        ALPHA: {
                            type: n.NUMBER,
                            defaultValue: "1.0"
                        }
                    }
                }, {
                    opcode: "setGlobalCompositeOperation",
                    blockType: r.COMMAND,
                    text: "setGlobalCompositeOperation([CompositeOperation])",
                    arguments: {
                        CompositeOperation: {
                            type: n.STRING,
                            defaultValue: "source-over"
                        }
                    }
                }, {
                    opcode: "switchCanvas",
                    blockType: r.COMMAND,
                    text: "switchCanvas([NUMBER])",
                    arguments: {
                        NUMBER: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "stampOnStage",
                    blockType: r.COMMAND,
                    text: "显示canvas内容"
                }, {
                    opcode: "stampOnStageDev",
                    blockType: r.COMMAND,
                    text: "显示canvas内容([ox],[oy],[ox2],[oy2])",
                    arguments: {
                        ox: {
                            type: n.STRING,
                            defaultValue: "0"
                        },
                        oy: {
                            type: n.STRING,
                            defaultValue: "0"
                        },
                        ox2: {
                            type: n.STRING,
                            defaultValue: "480"
                        },
                        oy2: {
                            type: n.STRING,
                            defaultValue: "360"
                        }
                    }
                }, {
                    opcode: "stampTo",
                    blockType: r.REPORTER,
                    text: "将canvas转换为base64",
                    disableMonitor: !0,
                    arguments: {
                        ox: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        oy: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        ox2: {
                            type: n.NUMBER,
                            defaultValue: "480"
                        },
                        oy2: {
                            type: n.NUMBER,
                            defaultValue: "360"
                        }
                    }
                }, {
                    opcode: "setLineDash",
                    blockType: r.COMMAND,
                    text: "setLineDash([c1],[c])",
                    arguments: {
                        c1: {
                            type: n.STRING,
                            defaultValue: "20"
                        },
                        c: {
                            type: n.STRING,
                            defaultValue: "5"
                        }
                    }
                }, {
                    opcode: "lineDashOffset",
                    blockType: r.COMMAND,
                    text: "setlineDashOffset[c]",
                    arguments: {
                        c: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "strokeRect",
                    blockType: r.COMMAND,
                    text: "setstrokeRect([c1],[c2],[c3],[c4])",
                    arguments: {
                        c1: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        c2: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        c3: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        c4: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "fillRect",
                    blockType: r.COMMAND,
                    text: "fillRect([c1],[c2],[c3],[c4])",
                    arguments: {
                        c1: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        c2: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        c3: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        },
                        c4: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "shadowBlur",
                    blockType: r.COMMAND,
                    text: "setshadowBlur[c1]",
                    arguments: {
                        c1: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "shadowColor",
                    blockType: r.COMMAND,
                    text: "setshadowColor[c1]",
                    arguments: {
                        c1: {
                            type: n.STRING,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "shadowOffsetX",
                    blockType: r.COMMAND,
                    text: "setshadowOffsetX[c1]",
                    arguments: {
                        c1: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "shadowOffsetY",
                    blockType: r.COMMAND,
                    text: "setshadowOffsetY[c1]",
                    arguments: {
                        c1: {
                            type: n.NUMBER,
                            defaultValue: "0"
                        }
                    }
                }, {
                    opcode: "textAlign",
                    blockType: r.COMMAND,
                    text: "settextAlign[c1]",
                    arguments: {
                        c1: {
                            type: n.STRING,
                            defaultValue: "left"
                        }
                    }
                }, {
                    opcode: "getcolor",
                    blockType: r.REPORTER,
                    text: "获取canvas第[c]个像素点颜色[color]",
                    arguments: {
                        color: {
                            type: n.STRING,
                            menu: "color",
                            defaultValue: "red"
                        },
                        c: {
                            type: n.NUMBER,
                            defaultValue: "1"
                        }
                    }
                }, {
                    opcode: "saveccolor",
                    blockType: r.COMMAND,
                    text: "保存canvas颜色"
                }, {
                    opcode: "setccolor",
                    blockType: r.COMMAND,
                    text: "设置canvas第[c]个像素点颜色[color][c2]",
                    arguments: {
                        color: {
                            type: n.STRING,
                            menu: "color2",
                            defaultValue: "red"
                        },
                        c: {
                            type: n.NUMBER,
                            defaultValue: "1"
                        },
                        c2: {
                            type: n.NUMBER,
                            defaultValue: "144"
                        }
                    }
                }, {
                    opcode: "isin",
                    blockType: r.BOOLEAN,
                    text: "x[x],[y]在当前路径上吗",
                    arguments: {
                        x: {
                            type: n.NUMBER,
                            defaultValue: "1"
                        },
                        y: {
                            type: n.NUMBER,
                            defaultValue: "144"
                        }
                    }
                }, {
                    opcode: "showccolor",
                    blockType: r.COMMAND,
                    text: "显示保存的颜色"
                }],
                menus: {
                    color: ["red", "green", "blue", "alpha", "全部"],
                    color2: ["red", "green", "blue", "alpha"]
                }
            }
        }
        _createCanvas(e, t) {
            if (vm.runtime.ext_pen && vm.runtime.ext_pen._penSkinId >= 0 && (this._penSkinId = vm.runtime.ext_pen._penSkinId,
            this._penDrawableId = vm.runtime.ext_pen._penDrawableId),
            this._penSkinId < 0 && this.runtime.renderer && (this._penSkinId = this.runtime.renderer.createPenSkin(),
            this._penDrawableId = this.runtime.renderer.createDrawable(a.PEN_LAYER),
            this.runtime.renderer.updateDrawableSkinId(this._penDrawableId, this._penSkinId)),
            this._penSkinId)
                var i = this._penSkinId;
            if (this.runtime.penSkinId = i,
            null == i)
                return null;
            var n = this.runtime.renderer._allSkins[i].size
              , r = (e = e || n[0],
            t = t || n[1],
            document.createElement("canvas"));
            r.width = e,
            r.height = t;
            var o = r.getContext("2d");
            return {
                canvas: r,
                ctx: o
            }
        }
        _getContext(e, t, i) {
            if (!this._ctx || t || i) {
                this._canvasList = [];
                for (var n = 0; n < 8; n++)
                    this._canvasList.push(null);
                if (!(r = this._createCanvas(t, i)))
                    return null;
                try {
                    this._canvasList[0].remove()
                } catch (e) {
                    console.log(e)
                }
                this._canvasList[0] = r,
                this._canvas = r.canvas,
                this._ctx = r.ctx,
                this._bufferedImages = {},
                this._skinId = this.runtime.renderer.createBitmapSkin(this._createCanvas().canvas, 1),
                this._drawableId = this.runtime.renderer.createDrawable(a.PEN_LAYER),
                this.runtime.renderer.updateDrawableSkinId(this._drawableId, this._skinId),
                this.runtime.renderer.updateDrawableVisible(this._drawableId, !1)
            }
            var r;
            null != e && ((r = this._canvasList[e]) || (r = this._createCanvas(),
            this._canvasList[e] = r),
            this._canvas = r.canvas,
            this._ctx = r.ctx);
            return this._ctx
        }
        reset({w: e, h: t}) {
            this._getContext(e, t)
        }
        beginPath() {
            const e = this._getContext();
            e && e.beginPath()
        }
        closePath() {
            const e = this._getContext();
            e && e.closePath()
        }
        moveTo(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.X)
              , r = o.toNumber(e.Y);
            i.moveTo(n, r)
        }
        lineTo(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.X)
              , r = o.toNumber(e.Y);
            i.lineTo(n, r)
        }
        rect(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.X)
              , r = o.toNumber(e.Y)
              , a = o.toNumber(e.W)
              , s = o.toNumber(e.H);
            i.rect(n, r, a, s)
        }
        arc(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.X)
              , r = o.toNumber(e.Y)
              , a = o.toNumber(e.RADIUS)
              , s = o.toNumber(e.START_ANGLE)
              , u = o.toNumber(e.END_ANGLE);
            i.arc(n, r, a, s, u)
        }
        clip() {
            const e = this._getContext();
            e && e.clip()
        }
        setLineWidth(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.LINE_WIDTH;
            i.lineWidth = n
        }
        setLineCap(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.LINE_CAP;
            i.lineCap = n
        }
        setStrokeStyle(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.STROKE_STYLE;
            i.strokeStyle = n
        }
        setFillStyle(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.FILL_STYLE;
            i.fillStyle = n
        }
        stroke() {
            const e = this._getContext();
            e && e.stroke()
        }
        fill() {
            const e = this._getContext();
            e && e.fill()
        }
        setFont(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.FONT;
            i.font = n
        }
        strokeText(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.TEXT
              , r = o.toNumber(e.X)
              , a = o.toNumber(e.Y);
            i.strokeText(n, r, a)
        }
        fillText(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.TEXT
              , r = o.toNumber(e.X)
              , a = o.toNumber(e.Y);
            i.fillText(n, r, a)
        }
        measureText(e, t) {
            try {
                const t = this._getContext();
                if (!t)
                    return;
                const i = e.TEXT;
                return t.measureText(i).width
            } catch (e) {
                console.log(e)
            }
        }
        clearRect(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.X)
              , r = o.toNumber(e.Y)
              , a = o.toNumber(e.W)
              , s = o.toNumber(e.H);
            i.clearRect(n, r, a, s)
        }
        loadImage(e, t) {
            if (!this._getContext())
                return;
            const i = e.IMAGE_ID;
            return this._bufferedImages[i] ? void 0 : new Promise(e=>{
                const t = new Image;
                t.crossOrigin = "anonymous",
                t.onload = ()=>{
                    this._bufferedImages[i] = t,
                    e()
                }
                ,
                t.onerror = ()=>{
                    e()
                }
                ;
                this.runtime.extUtils;
                t.src = i
            }
            )
        }
        drawImage(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toString(e.IMAGE_ID)
              , r = o.toNumber(e.X)
              , a = o.toNumber(e.Y);
            if (n.length > 10) {
                const e = this._bufferedImages[n];
                if (!e)
                    return;
                i.drawImage(e, r, a)
            } else {
                var s = Math.min(Math.max(0, o.toNumber(e.IMAGE_ID)), 7)
                  , u = this._canvasList[s];
                u && i.drawImage(u.canvas, r, a)
            }
        }
        drawImage2(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toString(e.IMAGE_ID)
              , r = o.toNumber(e.X)
              , a = o.toNumber(e.Y)
              , s = o.toNumber(e.w)
              , u = o.toNumber(e.h);
            if (n.length > 10) {
                const e = this._bufferedImages[n];
                if (!e)
                    return;
                i.drawImage(e, r, a, s, u)
            } else {
                var l = Math.min(Math.max(0, o.toNumber(e.IMAGE_ID)), 7)
                  , c = this._canvasList[l];
                c && i.drawImage(c.canvas, r, a, s, u)
            }
        }
        drawImage3(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toString(e.IMAGE_ID)
              , r = o.toNumber(e.SX)
              , a = o.toNumber(e.SY)
              , s = o.toNumber(e.sw)
              , u = o.toNumber(e.sh)
              , l = o.toNumber(e.X)
              , c = o.toNumber(e.Y)
              , d = o.toNumber(e.w)
              , p = o.toNumber(e.h);
            if (n.length > 10) {
                const e = this._bufferedImages[n];
                if (!e)
                    return;
                i.drawImage(e, r, a, s, u, l, c, d, p)
            } else {
                var h = Math.min(Math.max(0, o.toNumber(e.IMAGE_ID)), 7)
                  , m = this._canvasList[h];
                m && i.drawImage(m.canvas, r, a, s, u, l, c, d, p)
            }
        }
        iw(e) {
            if (!this._getContext())
                return;
            const t = o.toString(e.IMAGE_ID);
            if (t.length > 10) {
                const e = this._bufferedImages[t];
                if (!e)
                    return;
                return e.width
            }
            var i = Math.min(Math.max(0, o.toNumber(e.IMAGE_ID)), 7)
              , n = this._canvasList[i];
            return n ? n.canvas.width : void 0
        }
        ih(e) {
            if (!this._getContext())
                return;
            const t = o.toString(e.IMAGE_ID);
            if (t.length > 10) {
                const e = this._bufferedImages[t];
                if (!e)
                    return;
                return e.height
            }
            var i = Math.min(Math.max(0, o.toNumber(e.IMAGE_ID)), 7)
              , n = this._canvasList[i];
            return n ? n.canvas.height : void 0
        }
        _ad() {
            temp2.music || (temp2.music = {})
        }
        drawv(e, t) {
            try {
                const t = this._getContext();
                if (!t)
                    return;
                const i = o.toString(e.IMAGE_ID)
                  , n = o.toNumber(e.X)
                  , r = o.toNumber(e.Y);
                this._ad(),
                temp2.music[i] && t.drawImage(temp2.music[i], n, r)
            } catch (e) {
                console.log(e)
            }
        }
        drawv2(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toString(e.IMAGE_ID)
              , r = o.toNumber(e.X)
              , a = o.toNumber(e.Y)
              , s = o.toNumber(e.w)
              , u = o.toNumber(e.h);
            this._ad(),
            temp2.music[n] && i.drawImage(temp2.music[n], r, a, s, u)
        }
        drawv3(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toString(e.IMAGE_ID)
              , r = o.toNumber(e.SX)
              , a = o.toNumber(e.SY)
              , s = o.toNumber(e.sw)
              , u = o.toNumber(e.sh)
              , l = o.toNumber(e.X)
              , c = o.toNumber(e.Y)
              , d = o.toNumber(e.w)
              , p = o.toNumber(e.h);
            this._ad(),
            temp2.music[n] && i.drawImage(temp2.music[n], r, a, s, u, l, c, d, p)
        }
        scale(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.SCALE_W)
              , r = o.toNumber(e.SCALE_H);
            i.scale(n, r)
        }
        rotate(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.ANGLE);
            i.rotate(n)
        }
        translate(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.X)
              , r = o.toNumber(e.Y);
            i.translate(n, r)
        }
        transform(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.A)
              , r = o.toNumber(e.B)
              , a = o.toNumber(e.C)
              , s = o.toNumber(e.D)
              , u = o.toNumber(e.E)
              , l = o.toNumber(e.F);
            i.transform(n, r, a, s, u, l)
        }
        clearTransform(e, t) {
            const i = this._getContext();
            i && i.setTransform(1, 0, 0, 1, 0, 0)
        }
        save() {
            const e = this._getContext();
            e && e.save()
        }
        restore() {
            const e = this._getContext();
            e && e.restore()
        }
        setGlobalAlpha(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = o.toNumber(e.ALPHA);
            i.globalAlpha = n
        }
        setGlobalCompositeOperation(e, t) {
            const i = this._getContext();
            if (!i)
                return;
            const n = e.CompositeOperation;
            i.globalCompositeOperation = n
        }
        switchCanvas(e, t) {
            const i = Math.min(Math.max(0, o.toNumber(e.NUMBER)), 7);
            this._getContext(i)
        }
        stampOnStage() {
            const e = this._getContext();
            if (e) {
                var t = e.getImageData(0, 0, 480, 360);
                this.runtime.renderer._allSkins[this._skinId]._setTexture(t),
                this.runtime.renderer.penStamp(this.runtime.penSkinId, this._drawableId),
                this.runtime.requestRedraw()
            }
        }
        stampOnStageDev({ox: e, oy: t, ox2: i, oy2: n}) {
            const r = this._getContext();
            if (r) {
                var o = r.getImageData(e, t, i, n);
                this.runtime.renderer._allSkins[this._skinId]._setTexture(o),
                this.runtime.renderer.penStamp(this.runtime.penSkinId, this._drawableId),
                this.runtime.requestRedraw()
            }
        }
        stampTo({ox: e, oy: t, ox2: i, oy2: n}) {
            if (this._getContext())
                return this._canvas && this._canvas.toDataURL("image/png", 1)
        }
        setLineDash(e) {
            const t = this._getContext();
            t && t.setLineDash([e.c1, e.c])
        }
        lineDashOffset(e) {
            const t = this._getContext();
            t && (t.lineDashOffset = e.c)
        }
        strokeRect(e) {
            const t = this._getContext();
            t && t.strokeRect(e.c1, e.c2, e.c3, e.c4)
        }
        createLinearGradient(e) {
            const t = this._getContext();
            t && (grd = t.createLinearGradient(e.c1, e.c2, e.c3, e.c4))
        }
        addColorStop(e) {
            if (this._getContext())
                try {
                    grd.addColorStop(e.c1, e.c2)
                } catch (e) {}
        }
        fillss(e) {
            if (this._getContext())
                try {
                    cxt.fillStyle = grd
                } catch (e) {}
        }
        fillRect(e) {
            const t = this._getContext();
            t && t.fillRect(e.c1, e.c2, e.c3, e.c4)
        }
        shadowBlur(e) {
            const t = this._getContext();
            t && (t.shadowBlur = e.c1)
        }
        shadowColor(e) {
            const t = this._getContext();
            t && (t.shadowColor = e.c1)
        }
        shadowOffsetX(e) {
            const t = this._getContext();
            t && (t.shadowOffsetX = e.c1)
        }
        shadowOffsetY(e) {
            const t = this._getContext();
            t && (t.shadowOffsetY = e.c1)
        }
        textAlign(e) {
            const t = this._getContext();
            t && (t.textAlign = e.c1)
        }
        getcolor(e) {
            const t = this._getContext();
            if (t) {
                var i = t.getImageData(0, 0, 480, 360).data;
                if ("全部" == e.color) {
                    var n, r = "rgba(" + i[n = 4 * e.c] + "," + i[n + 1] + "," + i[n + 2] + "," + i[n + 3] + ")";
                    return console.log(r),
                    r
                }
                return i[n = 4 * e.c + {
                    red: 0,
                    green: 1,
                    blue: 2,
                    alpha: 3
                }[e.color]]
            }
        }
        setccolor(e) {
            if (this._getContext() && temp2.color) {
                var t = temp2.color;
                console.log(t);
                var i = 4 * e.c + {
                    red: 0,
                    green: 1,
                    blue: 2,
                    alpha: 3
                }[e.color];
                temp2.color.data[i] = e.c2
            }
        }
        saveccolor(e) {
            const t = this._getContext();
            t && (temp2.color = t.getImageData(0, 0, 480, 360))
        }
        showccolor(e) {
            const t = this._getContext();
            t && temp2.color && t.putImageData(temp2.color, 0, 0)
        }
        isin(e) {
            try {
                return isPointInPath(e.x, e.y)
            } catch (e) {
                return ""
            }
        }
    }
    Scratch.extensions.register(new canvas());
  })(Scratch);