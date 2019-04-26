import {FontUnit, Label} from "excalibur";

export class LLabel extends Label {

    center = false;
    kx = 0;
    ky = 0;

    constructor(text, kx, ky: number) {
        super(text);
        this.fontUnit = FontUnit.Px;
    }

    updatePos() {
        this.x = this.kx;
        this.y = this.ky;
    }

    getHeight(): number {
        return this.fontSize;
    }

}