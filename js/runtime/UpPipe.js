// 上边水管
import { Pipe } from './Pipe';
import { Sprite } from '../base/Sprite';

export class UpPiPe extends Pipe{
    constructor(top){
        // top表示创建水管实例时,水管的实际高度
        // 获取上水管的图片
        const img = Sprite.getImg('pipeUp');
        super(img,top);
    }

    draw(){
        this.y = this.top - this.height;
        super.draw();
    }
}