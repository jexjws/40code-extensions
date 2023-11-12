(function (Scratch) {
    'use strict';
    class Scratch3yunBlocks {
        constructor(runtime) {
          /**
           * The runtime instantiating this block package.
           * @type {Runtime}
           */
          this.runtime = runtime;
        }
        /**
         * @returns {object} metadata for this extension and its blocks.
         */
      
      
        getInfo() {
          return {
            id: 'yun',
            name: 'yun',
            // blockIconURI: blockIconURI,
            color1: '#00BCD4',
            blocks: [{
              opcode: 'yunload',
              blockType: BlockType.REPORTER,
              text: '获取云变量，变量名[TEXT]，来源[m]',
              arguments: {
                TEXT: {
                  type: ArgumentType.STRING,
                  defaultValue: 'a'
                },
                m: {
                  type: ArgumentType.STRING,
                  defaultValue: '此作品',
                  menu: 'm2'
                }
              }
            }, {
              opcode: 'getlist',
              blockType: BlockType.REPORTER,
              text: '获取[TEXT]开头的云变量名，来源[m]',
              arguments: {
                TEXT: {
                  type: ArgumentType.STRING,
                  defaultValue: 'a'
                },
                m: {
                  type: ArgumentType.STRING,
                  defaultValue: '此作品',
                  menu: 'm2'
                }
              }
            }, {
              opcode: 'yunsave',
              blockType: BlockType.REPORTER,
              text: '保存云变量，内容[TEXT]，变量名[TEXT2]，并返回错误值，来源[m]',
              arguments: {
                TEXT: {
                  type: ArgumentType.STRING,
                  defaultValue: 'things'
                },
                TEXT2: {
                  type: ArgumentType.STRING,
                  defaultValue: 'a'
                },
                m: {
                  type: ArgumentType.STRING,
                  defaultValue: '此作品',
                  menu: 'm2'
                }
              }
            }, {
              opcode: 'yunsave2',
              blockType: BlockType.COMMAND,
              text: '保存云变量，内容[TEXT]，变量名[TEXT2]，来源[m]',
              arguments: {
                TEXT: {
                  type: ArgumentType.STRING,
                  defaultValue: 'things'
                },
                TEXT2: {
                  type: ArgumentType.STRING,
                  defaultValue: 'a'
                },
                m: {
                  type: ArgumentType.STRING,
                  defaultValue: '此作品',
                  menu: 'm2'
                }
              }
            }],
            menus: {
              m2: ['此作品', '此作者']
            }
          };
        }
      
        auth(s) {
          let isczy;
          temp2.yunrun || (temp2.yunrun = 0);
          temp2.s || (temp2.s = setInterval(() => {
            temp2.yunrun = 0;
          }, 1000));
      
          if (typeof webpackJsonp !== 'undefined') {
            return;
          }
      
          try {
            try {
              workinfo;
              temp2.isczy = 1;
            } catch (e) {
              temp2.isczy = 0;
            }
      
            if (isczy) {
              if (workinfo.isauthor) {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          } catch (e) {
            return false;
          }
        }
      
        yunload(s) {
          if (!this.auth()) {// mdui.snackbar('创作页不可以使用云变量')
          }
      
          if (typeof webpackJsonp !== 'undefined') {
            return;
          }
      
          if (temp2.yunrun <= 15) {
            temp2.yunrun++;
            return new Promise(resolve => {
              let t = 0;
      
              if (s.m == '此作品') {
                t = 0;
              } else if (s.m == '此作者') {
                t = 1;
              } else {
                resolve('');
              }
      
              $.ajax({
                method: 'GET',
                url: temp2.apihost + "cloud/load",
                dataType: 'json',
                data: {
                  t: t,
                  id: t ? workinfo.author : id,
                  name: s.TEXT,
                  token: getCookie('token')
                },
                success: function success(data) {
                  resolve(data.data);
                },
                Error: function Error() {
                  resolve('');
                }
              }).then(res => {
                console.log(res);
                return res;
              });
            });
          } else {
            mdui.snackbar('请求频率过高');
            return '';
          }
        }
      
        getlist(s) {
          if (!this.auth()) {// mdui.snackbar('创作页不可以使用云变量')
          }
      
          if (typeof webpackJsonp !== 'undefined') {
            return;
          }
      
          if (temp2.yunrun <= 15) {
            temp2.yunrun++;
            return new Promise(resolve => {
              let t = 0;
      
              if (s.m == '此作品') {
                t = 0;
              } else if (s.m == '此作者') {
                t = 1;
              } else {
                resolve('');
              }
      
              $.ajax({
                method: 'GET',
                url: temp2.apihost + "cloud/loadlist",
                dataType: 'json',
                data: {
                  t: t,
                  id: t ? workinfo.author : id,
                  name: s.TEXT,
                  token: getCookie('token')
                },
                success: function success(data) {
                  resolve(data.data);
                },
                Error: function Error() {
                  resolve('');
                }
              }).then(res => {
                console.log(res);
                return res;
              });
            });
          } else {
            mdui.snackbar('请求频率过高');
            return '';
          }
        }
      
        yunsave(s) {
          if (typeof webpackJsonp !== 'undefined') {
            return;
          }
      
          if (!this.auth()) {
            mdui.snackbar('创作页不可以使用云变量保存功能');
            return;
          }
      
          if (temp2.yunrun <= 15) {
            temp2.yunrun++;
            return new Promise(resolve => {
              let t = 0;
      
              if (s.m == '此作品') {
                t = 0;
              } else if (s.m == '此作者') {
                t = 1;
              } else {
                resolve('');
              }
      
              $.ajax({
                method: 'POST',
                url: temp2.apihost + "cloud/save?token=" + getCookie('token'),
                dataType: 'json',
                data: {
                  t: t,
                  id: t ? workinfo.author : id,
                  name: s.TEXT2,
                  data: s.TEXT,
                  token: getCookie('token')
                },
                success: function success(data) {
                  data.msg && resolve(data.msg);
                  resolve();
                },
                Error: function Error() {
                  resolve('保存错误');
                }
              }).then(res => {
                console.log(res);
                return res;
              });
            });
          } else {
            mdui.snackbar('请求频率过高');
            return '';
          }
        }
      
        yunsave2(s) {
          return this.yunsave(s);
        }
      
    }
    Scratch.extensions.register(new Scratch3yunBlocks());
})(Scratch);
