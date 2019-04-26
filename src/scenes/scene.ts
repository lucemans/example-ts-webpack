import {Engine, Scene} from "excalibur";
import {UIButton} from "../ui/uibutton";
import {UICursor} from "../ui/cursor";

export class LScene extends Scene {

    engine: Engine;

    constructor(engine: Engine) {
        super(engine);
        this.engine = engine;
    }
}