// 得分类,分数没有图片,所以不需要继承Sprite

import { DataStore } from "../base/DataStore";

export class Score{
    constructor(){
        this.store = DataStore.getInstance();
        this.ctx = this.store.ctx;
        this.scoreNumber = 0;
        // 限制加分
        this.canAdd = true;
    }
    draw(){
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#de335e'; 
        this.ctx.fillText(
            this.scoreNumber,
            this.store.canvas.width/8,
            this.store.canvas.height/18
        )
    }
}