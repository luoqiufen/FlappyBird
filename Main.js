// 小游戏主程序,初始化小游戏过程中的数据

import { ResourceLoader } from "./js/base/ResourcesLoader";
import { DataStore } from "./js/base/DataStore";
import { Background } from "./js/runtime/background";

export class Main{
    constructor(){ //构造方法,在创建对象时会自动执行
        console.log('游戏开始');
        // 获取资源加载器
        this.loader = new ResourceLoader;
        // 获取变量池
        this.store = DataStore.getInstance();
        // 获取canvas
        this.canvas = wx.createCanvas();
        // 获取ctx
        this.ctx = this.canvas.getContext('2d');
        // 当图片加载完成时执行后续代码
        this.loader.onloaded(map => this.onResourceLoaded(map));
    } 
    // 当图片资源加载完成后执行
    onResourceLoaded(map){
        // 将游戏中的数据保存进变量池中
        this.store.canvas = this.canvas;
        this.store.ctx = this.ctx;
        this.store.res = map;
        let bg = new Background();
        bg.draw();
    }
} 