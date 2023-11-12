(function(Scratch) {
    'use strict';
  
class Scratch3LazyAudioBlocks {
    constructor(runtime) {
      /**
       * The runtime instantiating this block package.
       * @type {Runtime}
       */
      this.runtime = runtime;
      this._bufferedAudios = {};
    }
  
    _resetAudios() {
      this._bufferedAudios = {};
    }
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
  
  
    getInfo() {
      return {
        id: 'lazyAudio',
        name: 'LazyAudio',
        menuIconURI: menuIconURI,
        blockIconURI: blockIconURI,
        color1: '#9C27B0',
        blocks: [{
          opcode: 'load',
          blockType: BlockType.COMMAND,
          text: '加载([AUDIO_ID])',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            }
          }
        }, {
          opcode: 'play',
          blockType: BlockType.COMMAND,
          text: '播放([AUDIO_ID])',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            }
          }
        }, {
          opcode: 'pause',
          blockType: BlockType.COMMAND,
          text: '暂停([AUDIO_ID])',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            }
          }
        }, {
          opcode: 'pauseAll',
          blockType: BlockType.COMMAND,
          text: '暂停全部',
          arguments: {}
        }, {
          opcode: 'cd',
          blockType: BlockType.REPORTER,
          text: '获取当前播放秒数([AUDIO_ID])',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            }
          }
        }, {
          opcode: 'zcd',
          blockType: BlockType.REPORTER,
          text: '获取音频总长度(秒)([AUDIO_ID])',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            }
          }
        }, {
          opcode: 'sz',
          blockType: BlockType.COMMAND,
          text: '设置音频([AUDIO_ID])播放秒数[s]',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            },
            s: {
              type: ArgumentType.STRING,
              defaultValue: '14'
            }
          }
        }, {
          opcode: 'bf',
          blockType: BlockType.REPORTER,
          text: '获取音频播放速度([AUDIO_ID])',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            }
          }
        }, {
          opcode: 'bf2',
          blockType: BlockType.COMMAND,
          text: '设置音频([AUDIO_ID])播放速度[s]',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            },
            s: {
              type: ArgumentType.STRING,
              defaultValue: '2'
            }
          }
        }, {
          opcode: 'yl',
          blockType: BlockType.COMMAND,
          text: '设置音频([AUDIO_ID])音量[s]',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            },
            s: {
              type: ArgumentType.NUMBER,
              defaultValue: '0.14'
            }
          }
        }, {
          opcode: 'hc',
          blockType: BlockType.REPORTER,
          text: '获取音频([AUDIO_ID])缓冲片段数',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            },
            s: {
              type: ArgumentType.STRING,
              defaultValue: '14'
            }
          }
        }, {
          opcode: 'hcs',
          blockType: BlockType.REPORTER,
          text: '获取音频([AUDIO_ID])[s]片段的开始时间',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            },
            s: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        }, {
          opcode: 'hce',
          blockType: BlockType.REPORTER,
          text: '获取音频([AUDIO_ID])[s]片段结束时间',
          arguments: {
            AUDIO_ID: {
              type: ArgumentType.STRING,
              defaultValue: 'http://music.163.com/song/media/outer/url?id=504923885.mp3'
            },
            s: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        }],
        menus: {}
      };
    }
  
    _ad() {
      if (!temp2['music']) {
        temp2['music'] = {};
      }
    }
  
    load(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) {
          temp2['music'][mp3].currentTime = 0;
          return;
        }
  
        let l = document.createElement('video');
        l.src = mp3;
        if (mp3.indexOf('.mp4') !== -1) l.crossOrigin = '';
        temp2['music'][mp3] = l;
        temp2['music'][mp3].load();
      } catch (e) {}
    }
  
    play(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) temp2['music'][mp3].play();
      } catch (e) {}
    }
  
    pause(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) temp2['music'][mp3].pause();
      } catch (e) {}
    }
  
    pauseAll(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        Object.keys(temp2['music']).forEach(mp3 => {
          temp2['music'][mp3].pause();
        });
      } catch (e) {}
    }
  
    cd(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) return temp2['music'][mp3].currentTime;else return '-1';
      } catch (e) {}
    }
  
    bf(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) return temp2['music'][mp3].playbackRate;else return '-1';
      } catch (e) {}
    }
  
    zcd(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) return temp2['music'][mp3].duration;else return '-1';
      } catch (e) {}
    }
  
    hc(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) return temp2['music'][mp3].buffered.length;else return '-1';
      } catch (e) {}
    }
  
    hcs(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) return temp2['music'][mp3].buffered.start(args.s - 1);else return '-1';
      } catch (e) {}
    }
  
    hce(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) return temp2['music'][mp3].buffered.end(args.s - 1);else return '-1';
      } catch (e) {}
    }
  
    sz(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) temp2['music'][mp3].currentTime = args.s;
      } catch (e) {}
    }
  
    bf2(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) temp2['music'][mp3].playbackRate = args.s;
      } catch (e) {}
    }
  
    yl(args, util) {
      try {
        const mp3 = args.AUDIO_ID;
  
        this._ad();
  
        if (temp2['music'][mp3]) temp2['music'][mp3].volume = args.s;
      } catch (e) {}
    }
  
  }  
    Scratch.extensions.register(new Scratch3LazyAudioBlocks());
  })(Scratch);
  