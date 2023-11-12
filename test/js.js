(function(Scratch) {
    'use strict';


    class Scratch3JsBlocks {
        constructor(runtime) {
          /**
           * The runtime instantiating this block package.
           * @type {Runtime}
           */
          this.runtime = runtime; //this.runtime.on('PROJECT_STOP_ALL', this._init.bind(this));
          //this.runtime.on('PROJECT_START', this._init.bind(this));
        }
        /**
         * @returns {object} metadata for this extension and its blocks.
         */
      
      
        getInfo() {
          return {
            id: 'js',
            name: 'JavaScript',
            // blockIconURI: blockIconURI,
            // menuIconURI: menuIconURI,
            blocks: [{
              opcode: 'sb',
              blockType: BlockType.COMMAND,
              text: '设置JS变量[a]的值是[b]',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'index'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'thing'
                }
              }
            }, {
              opcode: 'gv',
              blockType: BlockType.REPORTER,
              text: '获取JS变量[a]的值',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'index'
                }
              }
            }, {
              opcode: 'dx',
              blockType: BlockType.REPORTER,
              text: '将字符串[a]转换成json对象',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '{"Fruits":["apple","banana"],"app":"scratch"}'
                }
              }
            }, {
              opcode: 'dx2',
              blockType: BlockType.REPORTER,
              text: 'json对象[a]的第[b]项',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '{"Fruits":["apple","banana"],"app":"sccode"}'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'app'
                }
              }
            }, {
              opcode: 'len',
              blockType: BlockType.REPORTER,
              text: '[a]的长度',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '["a","b","c"]'
                }
              }
            }, {
              opcode: 'dx3',
              blockType: BlockType.REPORTER,
              text: '设置json对象[a]的第[b]项为[c]并返回',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '{"Fruits":["apple","banana"],"app":"scratch"}'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'app'
                },
                c: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'sccode'
                }
              }
            }, {
              opcode: 'tos',
              blockType: BlockType.REPORTER,
              text: '将json对象[a]转换成字符串',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ' '
                }
              }
            }, {
              opcode: 'stos',
              blockType: BlockType.REPORTER,
              text: '按[a]拆分[b]',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '_'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'I_want_an_apple'
                }
              }
            }, {
              opcode: 'stos2',
              blockType: BlockType.REPORTER,
              text: '使用[a]连接[b]',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '_'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '["I","want","an","apple"]'
                }
              }
            }, {
              opcode: 'setv',
              blockType: BlockType.COMMAND,
              text: '设置局部变量[a]的值为[b]',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'a'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'b'
                }
              }
            }, {
              opcode: 'getv',
              blockType: BlockType.REPORTER,
              text: '获取局部变量[a]的值',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'a'
                }
              }
            }],
            menus: {
              /*urlNames: {
                  acceptReporters: true,
                  items: [{
                      text: '云空间',
                      value: 'cloudSpace'
                  }]
              },*/
            }
          };
        }
      
        _ad(a) {
          if (!temp2.bl) {
            temp2.bl = {};
          }
        }
      
        sb(a) {
          this._ad();
      
          let v = Cast.toString(a.a);
          let v2 = a.b;
          temp2.bl[v] = v2;
        }
      
        gv(a) {
          this._ad();
      
          let v = Cast.toString(a.a);
          return temp2.bl[v];
        }
      
        dx(a) {
          try {
            return JSON.parse(a.a);
          } catch (e) {
            return '';
          }
        }
      
        len({
          a
        }) {
          try {
            return JSON.parse(a).length;
          } catch (e) {
            return 'NaN';
          }
        }
      
        dx2(a) {
          try {
            return JSON.parse(a.a)[a.b];
          } catch (e) {
            try {
              return a.a[a.b];
            } catch (e) {
              return '';
            }
          }
        }
      
        dx3(a) {
          try {
            let v = JSON.parse(a.a);
            v[a.b] = a.c;
            return v;
          } catch (e) {
            try {
              let v = a.a;
              v[a.b] = a.c;
              return v;
            } catch (e) {
              return '';
            }
          }
        }
      
        tos(a) {
          try {
            return JSON.stringify(a.a);
          } catch (e) {
            return '';
          }
        }
      
        stos(a) {
          try {
            return a.b.split(a.a);
          } catch (e) {
            return '';
          }
        }
      
        stos2(a) {
          try {
            return JSON.parse(a.b).join(a.a);
          } catch (e) {
            return '';
          }
        }
      
        setv({
          a,
          b
        }, util) {
          console.log(util.thread);
          util.thread.values || (util.thread.values = {});
          util.thread.values.a = b;
        }
      
        getv({
          a,
          b
        }, util) {
          console.log(util.thread);
          util.thread.values || (util.thread.values = {});
          return util.thread.values.a;
        }
      
      }

Scratch.extensions.register(new Scratch3JsBlocks());
})(Scratch);