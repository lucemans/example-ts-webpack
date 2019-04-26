import {LScene} from "./scene";
import {Engine} from "excalibur";
import {UICursor} from "../ui/cursor";

export class GameScene extends LScene {

    constructor(engine: Engine) {
        super(engine);

        new UICursor(engine, this);
    }
}