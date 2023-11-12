(function (Scratch) {
    'use strict';
    class yun{
        constructor(e) {
            this.runtime = e
        }
        getInfo() {
            return {
                id: "yun",
                name: "yun",
                color1: "#00BCD4",
                blocks: [{
                    opcode: "yunload",
                    blockType: r.REPORTER,
                    text: "获取云变量，变量名[TEXT]，来源[m]",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "a"
                        },
                        m: {
                            type: n.STRING,
                            defaultValue: "此作品",
                            menu: "m2"
                        }
                    }
                }, {
                    opcode: "getlist",
                    blockType: r.REPORTER,
                    text: "获取[TEXT]开头的云变量名，来源[m]",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "a"
                        },
                        m: {
                            type: n.STRING,
                            defaultValue: "此作品",
                            menu: "m2"
                        }
                    }
                }, {
                    opcode: "yunsave",
                    blockType: r.REPORTER,
                    text: "保存云变量，内容[TEXT]，变量名[TEXT2]，并返回错误值，来源[m]",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "things"
                        },
                        TEXT2: {
                            type: n.STRING,
                            defaultValue: "a"
                        },
                        m: {
                            type: n.STRING,
                            defaultValue: "此作品",
                            menu: "m2"
                        }
                    }
                }, {
                    opcode: "yunsave2",
                    blockType: r.COMMAND,
                    text: "保存云变量，内容[TEXT]，变量名[TEXT2]，来源[m]",
                    arguments: {
                        TEXT: {
                            type: n.STRING,
                            defaultValue: "things"
                        },
                        TEXT2: {
                            type: n.STRING,
                            defaultValue: "a"
                        },
                        m: {
                            type: n.STRING,
                            defaultValue: "此作品",
                            menu: "m2"
                        }
                    }
                }],
                menus: {
                    m2: ["此作品", "此作者"]
                }
            }
        }
        auth(e) {
            if (temp2.yunrun || (temp2.yunrun = 0),
                temp2.s || (temp2.s = setInterval(() => {
                    temp2.yunrun = 0
                }
                    , 1e3)),
                "undefined" == typeof webpackJsonp)
                try {
                    try {
                        workinfo,
                            temp2.isczy = 1
                    } catch (e) {
                        temp2.isczy = 0
                    }
                    return !0
                } catch (e) {
                    return !1
                }
        }
        yunload(e) {
            if (this.auth(),
                "undefined" == typeof webpackJsonp)
                return temp2.yunrun <= 15 ? (temp2.yunrun++,
                    new Promise(t => {
                        let i = 0;
                        "此作品" == e.m ? i = 0 : "此作者" == e.m ? i = 1 : t(""),
                            $.ajax({
                                method: "GET",
                                url: temp2.apihost + "cloud/load",
                                dataType: "json",
                                data: {
                                    t: i,
                                    id: i ? workinfo.author : id,
                                    name: e.TEXT,
                                    token: getCookie("token")
                                },
                                success: function (e) {
                                    t(e.data)
                                },
                                Error: function () {
                                    t("")
                                }
                            }).then(e => (console.log(e),
                                e))
                    }
                    )) : (mdui.snackbar("请求频率过高"),
                        "")
        }
        getlist(e) {
            if (this.auth(),
                "undefined" == typeof webpackJsonp)
                return temp2.yunrun <= 15 ? (temp2.yunrun++,
                    new Promise(t => {
                        let i = 0;
                        "此作品" == e.m ? i = 0 : "此作者" == e.m ? i = 1 : t(""),
                            $.ajax({
                                method: "GET",
                                url: temp2.apihost + "cloud/loadlist",
                                dataType: "json",
                                data: {
                                    t: i,
                                    id: i ? workinfo.author : id,
                                    name: e.TEXT,
                                    token: getCookie("token")
                                },
                                success: function (e) {
                                    t(e.data)
                                },
                                Error: function () {
                                    t("")
                                }
                            }).then(e => (console.log(e),
                                e))
                    }
                    )) : (mdui.snackbar("请求频率过高"),
                        "")
        }
        yunsave(e) {
            if ("undefined" == typeof webpackJsonp) {
                if (this.auth())
                    return temp2.yunrun <= 15 ? (temp2.yunrun++,
                        new Promise(t => {
                            let i = 0;
                            "此作品" == e.m ? i = 0 : "此作者" == e.m ? i = 1 : t(""),
                                $.ajax({
                                    method: "POST",
                                    url: temp2.apihost + "cloud/save?token=" + getCookie("token"),
                                    dataType: "json",
                                    data: {
                                        t: i,
                                        id: i ? workinfo.author : id,
                                        name: e.TEXT2,
                                        data: e.TEXT,
                                        token: getCookie("token")
                                    },
                                    success: function (e) {
                                        e.msg && t(e.msg),
                                            t()
                                    },
                                    Error: function () {
                                        t("保存错误")
                                    }
                                }).then(e => (console.log(e),
                                    e))
                        }
                        )) : (mdui.snackbar("请求频率过高"),
                            "");
                mdui.snackbar("创作页不可以使用云变量保存功能")
            }
        }
        yunsave2(e) {
            return this.yunsave(e)
        }
    }
    Scratch.extensions.register(new yun());
})(Scratch);
