(function(Scratch) {
    'use strict';



class js{
    constructor(e) {
        this.runtime = e
    }
    getInfo() {
        return {
            id: "js",
            name: "JavaScript",
            blocks: [{
                opcode: "sb",
                blockType: r.COMMAND,
                text: "设置JS变量[a]的值是[b]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "index"
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "thing"
                    }
                }
            }, {
                opcode: "gv",
                blockType: r.REPORTER,
                text: "获取JS变量[a]的值",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "index"
                    }
                }
            }, {
                opcode: "dx",
                blockType: r.REPORTER,
                text: "将字符串[a]转换成json对象",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: '{"Fruits":["apple","banana"],"app":"scratch"}'
                    }
                }
            }, {
                opcode: "dx2",
                blockType: r.REPORTER,
                text: "json对象[a]的第[b]项",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: '{"Fruits":["apple","banana"],"app":"sccode"}'
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "app"
                    }
                }
            }, {
                opcode: "len",
                blockType: r.REPORTER,
                text: "[a]的长度",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: '["a","b","c"]'
                    }
                }
            }, {
                opcode: "dx3",
                blockType: r.REPORTER,
                text: "设置json对象[a]的第[b]项为[c]并返回",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: '{"Fruits":["apple","banana"],"app":"scratch"}'
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "app"
                    },
                    c: {
                        type: n.STRING,
                        defaultValue: "sccode"
                    }
                }
            }, {
                opcode: "tos",
                blockType: r.REPORTER,
                text: "将json对象[a]转换成字符串",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: " "
                    }
                }
            }, {
                opcode: "stos",
                blockType: r.REPORTER,
                text: "按[a]拆分[b]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "_"
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "I_want_an_apple"
                    }
                }
            }, {
                opcode: "stos2",
                blockType: r.REPORTER,
                text: "使用[a]连接[b]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "_"
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: '["I","want","an","apple"]'
                    }
                }
            }, {
                opcode: "setv",
                blockType: r.COMMAND,
                text: "设置局部变量[a]的值为[b]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "a"
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "b"
                    }
                }
            }, {
                opcode: "getv",
                blockType: r.REPORTER,
                text: "获取局部变量[a]的值",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "a"
                    }
                }
            }],
            menus: {}
        }
    }
    _ad(e) {
        temp2.bl || (temp2.bl = {})
    }
    sb(e) {
        this._ad();
        let t = o.toString(e.a)
          , i = e.b;
        temp2.bl[t] = i
    }
    gv(e) {
        this._ad();
        let t = o.toString(e.a);
        return temp2.bl[t]
    }
    dx(e) {
        try {
            return JSON.parse(e.a)
        } catch (e) {
            return ""
        }
    }
    len({a: e}) {
        try {
            return JSON.parse(e).length
        } catch (e) {
            return "NaN"
        }
    }
    dx2(e) {
        try {
            return JSON.parse(e.a)[e.b]
        } catch (t) {
            try {
                return e.a[e.b]
            } catch (e) {
                return ""
            }
        }
    }
    dx3(e) {
        try {
            let t = JSON.parse(e.a);
            return t[e.b] = e.c,
            t
        } catch (t) {
            try {
                let t = e.a;
                return t[e.b] = e.c,
                t
            } catch (e) {
                return ""
            }
        }
    }
    tos(e) {
        try {
            return JSON.stringify(e.a)
        } catch (e) {
            return ""
        }
    }
    stos(e) {
        try {
            return e.b.split(e.a)
        } catch (e) {
            return ""
        }
    }
    stos2(e) {
        try {
            return JSON.parse(e.b).join(e.a)
        } catch (e) {
            return ""
        }
    }
    setv({a: e, b: t}, i) {
        console.log(i.thread),
        i.thread.values || (i.thread.values = {}),
        i.thread.values.a = t
    }
    getv({a: e, b: t}, i) {
        return console.log(i.thread),
        i.thread.values || (i.thread.values = {}),
        i.thread.values.a
    }
}

Scratch.extensions.register(new canvas());
})(Scratch);