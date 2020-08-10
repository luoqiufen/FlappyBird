// 下水管

import { Pipe } from "./Pipe";
import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";

export class DownPipe extends Pipe{
    constructor(top) {
        const img = Sprite.getImg('pipeDown');
        super(img,top);
    }
    draw(){
        // 上下水管之间的间隙
        let gap = DataStore.getInstance().canvas.height/6;
        // 下水管实际y坐标
        this.y = this.top + gap;
        super.draw()
    }

}