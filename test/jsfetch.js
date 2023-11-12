class jsonfetch{
    constructor(e) {
        this.runtime = e
    }
    getInfo() {
        return {
            id: "jsonfetch",
            name: "js扩展",
            blocks: ["JS变量相关", {
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
                opcode: "setv",
                blockType: r.COMMAND,
                text: "设置局部变量[a]的值为[b]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "i"
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "0"
                    }
                }
            }, {
                opcode: "addv",
                blockType: r.COMMAND,
                text: "将局部变量[a]增加[b]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "i"
                    },
                    b: {
                        type: n.STRING,
                        defaultValue: "1"
                    }
                }
            }, {
                opcode: "getv",
                blockType: r.REPORTER,
                text: "局部变量[a]",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: "i"
                    }
                }
            }, "JS与scratch交互", {
                opcode: "getScratchList",
                blockType: r.REPORTER,
                text: "获取scratch列表[name]",
                arguments: {
                    name: {
                        type: n.STRING,
                        defaultValue: "scratch列表名"
                    }
                }
            }, {
                opcode: "setScratchList",
                blockType: r.COMMAND,
                text: "设置scratch列表[name]，值为[value]",
                arguments: {
                    name: {
                        type: n.STRING,
                        defaultValue: "scratch列表名"
                    },
                    value: {
                        type: n.STRING,
                        defaultValue: "[114,5,1,4]"
                    }
                }
            }, {
                opcode: "getScratchValue",
                blockType: r.REPORTER,
                text: "获取scratch变量[name]",
                arguments: {
                    name: {
                        type: n.STRING,
                        defaultValue: "scratch变量名"
                    }
                }
            }, {
                opcode: "setScratchValue",
                blockType: r.COMMAND,
                text: "设置scratch变量[name]，值为[value]",
                arguments: {
                    name: {
                        type: n.STRING,
                        defaultValue: "scratch变量名"
                    },
                    value: {
                        type: n.STRING,
                        defaultValue: "114514"
                    }
                }
            }, "JSON操作", {
                opcode: "dx2",
                blockType: r.REPORTER,
                text: "json[a]的第[b]项",
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
                text: "数组[a]的长度",
                arguments: {
                    a: {
                        type: n.STRING,
                        defaultValue: '["I","love","40code"]'
                    }
                }
            }, {
                opcode: "dx3",
                blockType: r.REPORTER,
                text: "设置json[a]的第[b]项为[c]并返回",
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
                opcode: "stos",
                blockType: r.REPORTER,
                text: '将[b]中的[a]替换成","',
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
                opcode: "stos_",
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
            }, "fetch请求", {
                opcode: "setHeaders",
                blockType: r.COMMAND,
                text: "设置请求头[headers]",
                arguments: {
                    headers: {
                        type: n.STRING,
                        defaultValue: '{"Content-Type": "application/json"}'
                    }
                }
            }, {
                opcode: "setBody",
                blockType: r.COMMAND,
                text: "设置请求body[body]",
                arguments: {
                    body: {
                        type: n.STRING,
                        defaultValue: "{}"
                    }
                }
            }, {
                opcode: "fetch",
                blockType: r.COMMAND,
                text: "[method]请求[url]",
                arguments: {
                    method: {
                        type: n.STRING,
                        defaultValue: "get",
                        menu: "method"
                    },
                    url: {
                        type: n.STRING,
                        defaultValue: "https://saobby.pythonanywhere.com/api/get_current_time"
                    }
                }
            }, {
                opcode: "fetchAndWait",
                blockType: r.REPORTER,
                text: "[method]请求[url]并等待，返回[type]",
                arguments: {
                    method: {
                        type: n.STRING,
                        defaultValue: "GET",
                        menu: "method"
                    },
                    url: {
                        type: n.STRING,
                        defaultValue: "https://saobby.pythonanywhere.com/api/get_current_time"
                    },
                    type: {
                        type: n.STRING,
                        defaultValue: "原文",
                        menu: "type"
                    }
                }
            }, {
                opcode: "res",
                blockType: r.REPORTER,
                text: "[type]",
                arguments: {
                    type: {
                        type: n.STRING,
                        defaultValue: "error",
                        menu: "m"
                    }
                }
            }, "编码与解码", {
                opcode: "encodeURIComponent",
                blockType: r.REPORTER,
                text: "url编码[text]",
                arguments: {
                    text: {
                        type: n.STRING,
                        defaultValue: "https://40code.com/"
                    }
                }
            }, {
                opcode: "decodeURIComponent",
                blockType: r.REPORTER,
                text: "url解码[text]",
                arguments: {
                    text: {
                        type: n.STRING,
                        defaultValue: "https%3A%2F%2F40code.com%2F"
                    }
                }
            }, {
                opcode: "toForm",
                blockType: r.REPORTER,
                text: "转为URL参数[text]",
                arguments: {
                    text: {
                        type: n.STRING,
                        defaultValue: '{"love":"40code","url":"40code.com"}'
                    }
                }
            }, {
                opcode: "toJSON",
                blockType: r.REPORTER,
                text: "转为JSON[text]",
                arguments: {
                    text: {
                        type: n.STRING,
                        defaultValue: "love=40code&url=40code.com"
                    }
                }
            }],
            menus: {
                method: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT"],
                m: ["error", "result", "status"],
                type: ["原文", "base64", "blob url"]
            }
        }
    }
    len({a: e}) {
        try {
            return JSON.parse(e).length
        } catch (e) {
            console.log(e)
        }
    }
    encodeURIComponent({text: e}) {
        return encodeURIComponent(e)
    }
    decodeURIComponent({text: e}) {
        return decodeURIComponent(e)
    }
    toJSON({text: e}) {
        try {
            return JSON.stringify(Object.fromEntries(new URLSearchParams(decodeURIComponent(e))))
        } catch (e) {
            console.log(e)
        }
    }
    toForm({text: e}) {
        try {
            return function(e) {
                try {
                    var t = [];
                    for (var i in e) {
                        var n = encodeURIComponent(i)
                          , r = encodeURIComponent(e[i]);
                        t.push(n + "=" + r)
                    }
                    return t.join("&")
                } catch (e) {
                    return ""
                }
            }(JSON.parse(e))
        } catch (e) {
            console.log(e)
        }
    }
    _ad(e) {
        temp2.bl || (temp2.bl = {})
    }
    _f(e) {
        temp2.fetch || (temp2.fetch = {})
    }
    setHeaders(e) {
        try {
            this._f(),
            temp2.fetch.Headers = JSON.parse(e.headers)
        } catch (e) {
            console.log(e)
        }
    }
    setBody(e) {
        this._f();
        try {
            temp2.fetch.body = e.body
        } catch (t) {
            temp2.fetch.body = e.body,
            console.log(t)
        }
    }
    fetch(e) {
        this.fetchAndWait(e)
    }
    getScratchList({value: e, name: t}, i) {
        let n = i.target.lookupVariableByNameAndType(t, "list");
        return JSON.stringify(n && n.value)
    }
    setScratchList({value: e, name: t}, i) {
        let n = i.target.lookupVariableByNameAndType(t, "list");
        n && e && (n.value = JSON.parse(e))
    }
    getScratchValue({value: e, name: t}, i) {
        let n = i.target.lookupVariableByNameAndType(t);
        return JSON.stringify(n && n.value)
    }
    setScratchValue({value: e, name: t}, i) {
        let n = i.target.lookupVariableByNameAndType(t);
        n && e && (n.value = JSON.parse(e))
    }
    fetchAndWait(e) {
        this._f();
        var t = this;
        return new Promise(async i=>{
            function n() {
                temp2.fetch.status = "",
                fetch(e.url, {
                    method: e.method,
                    headers: temp2.fetch.Headers,
                    referrerPolicy: "no-referrer",
                    body: "GET" == e.method || "HEAD" == e.method ? void 0 : temp2.fetch.body
                }).then(t=>(temp2.fetch.status = t.status,
                "base64" == e.type || "blob url" == e.type ? t.blob() : t.text())).then(async t=>{
                    temp2.fetch.error = "",
                    "base64" == e.type && (t = await new Promise(e=>{
                        let i = new FileReader;
                        i.onload = function() {
                            e(this.result)
                        }
                        ,
                        i.readAsDataURL(t)
                    }
                    )),
                    "blob url" == e.type && (t = URL.createObjectURL(t)),
                    i(temp2.fetch.res = t)
                }
                ).catch(e=>{
                    console.log(e),
                    temp2.fetch.res = "",
                    temp2.fetch.error = e,
                    i("")
                }
                )
            }
            var r = ()=>{
                try {
                    if ("undefined" != typeof webpackJsonp)
                        return void n();
                    if (this.writeList) {
                        if (-1 == this.writeList.indexOf(new URL(e.url).host) && !e.url.startsWith("blob:"))
                            return temp2.fetch.error = "出于安全性考虑，此接口暂不可请求",
                            void i("错误：详见error模块");
                        n()
                    } else
                        fetch(apihost + "work/urllist").then(e=>e.json()).then(e=>{
                            t.writeList = e,
                            r()
                        }
                        ).catch(e=>{
                            temp2.fetch.res = "",
                            temp2.fetch.status = "",
                            temp2.fetch.error = e,
                            i("错误：详见error模块")
                        }
                        )
                } catch (e) {
                    console.log(e),
                    temp2.fetch.error = "出于安全性考虑，此接口暂不可请求",
                    i("错误：详见error模块")
                }
            }
            ;
            r()
        }
        )
    }
    res(e) {
        return temp2.fetch[e.type] || ""
    }
    sb(e) {
        this._ad();
        let t = o.toString(e.a)
          , i = e.b;
        temp2.bl[t] = i
    }
    gv(e) {
        this._ad();
        let t = o.toString(e.a)
          , i = temp2.bl[t];
        return "object" == typeof i && (i = JSON.stringify(i)),
        i
    }
    dx2(e) {
        let t;
        try {
            t = JSON.parse(e.a)[e.b]
        } catch (i) {
            try {
                t = e.a[e.b]
            } catch (e) {
                t = ""
            }
        }
        return "object" == typeof t && (t = JSON.stringify(t)),
        t
    }
    dx3(e) {
        let t, i = e.c;
        try {
            i = JSON.parse(i)
        } catch (e) {}
        try {
            let n = JSON.parse(e.a);
            n[e.b] = i,
            t = n
        } catch (n) {
            try {
                let n = e.a;
                n[e.b] = i,
                t = n
            } catch (e) {
                t = ""
            }
        }
        return "object" == typeof t && (t = JSON.stringify(t)),
        t
    }
    stos(e) {
        try {
            return e.b.split(e.a)
        } catch (e) {
            return ""
        }
    }
    stos_(e) {
        try {
            return JSON.stringify(e.b.split(e.a))
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
        i.thread.values || (i.thread.values = {}),
        i.thread.values[e] = t
    }
    addv({a: e, b: t}, i) {
        i.thread.values || (i.thread.values = {}),
        i.thread.values[e] += t
    }
    getv({a: e, b: t}, i) {
        return i.thread.values || (i.thread.values = {}),
        i.thread.values[e]
    }
}