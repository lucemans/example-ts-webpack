import {Actor, Color, Engine, FontUnit, Label, Scene, Sprite, TextAlign, Vector} from "excalibur";
import {Resources} from "../resources";
import {LLabel} from "./llabel";

export class UIButton {

    private scene: Scene;
    private label: LLabel;
    private actor: Actor;
    private scaleFactor = 0.2;

    private cwidth = 0;
    private cheight = 0;

    constructor(name: string, x: number, y:number, width: number, scene: Scene, game: Engine) {
        const uibutton = this;
        let height = 290*this.scaleFactor;
        this.scene = scene;

        this.label = new LLabel(name, x, y);
        this.label.fontSize = 24;
        this.label.color = Color.White;
        this.label.textAlign = TextAlign.Center;

        this.label.y =  y + 24/2;
        this.label.x = x;

        // Buton setup
        this.actor = new Actor(x, y);

        let spriteButton1 = new Sprite(Resources.Button, 0, 0, 145, 145);
        let spriteButton2 = new Sprite(Resources.Button, 0, 145, 145, 145);
        let spriteButton3 = new Sprite(Resources.Button, 910 - 145, 0, 145, 145);
        let spriteButton4 = new Sprite(Resources.Button, 910 - 145, 145, 145, 145);
        let spriteButton5 = new Sprite(Resources.Button, 145, 0, 145, 145);
        let spriteButton6 = new Sprite(Resources.Button, 145, 145, 145, 145);

        spriteButton1.scale = new Vector(this.scaleFactor, this.scaleFactor);
        spriteButton2.scale = new Vector(this.scaleFactor, this.scaleFactor);
        spriteButton3.scale = new Vector(this.scaleFactor, this.scaleFactor);
        spriteButton4.scale = new Vector(this.scaleFactor, this.scaleFactor);
        spriteButton5.scale = new Vector(this.scaleFactor, this.scaleFactor);
        spriteButton6.scale = new Vector(this.scaleFactor, this.scaleFactor);

        this.actor.draw = ctx => {
            spriteButton1.draw(ctx, x - width / 2, y - height / 2);
            spriteButton2.draw(ctx, x - width / 2, y - height / 2 + 145 * this.scaleFactor);
            spriteButton3.draw(ctx, x + width / 2 - 145 * this.scaleFactor, y - height / 2);
            spriteButton4.draw(ctx, x + width / 2 - 145 * this.scaleFactor, y - height / 2 + 145 * this.scaleFactor);
            let i = 0;
            while (i * 145 * this.scaleFactor < (width - 145*this.scaleFactor*2)) {
                spriteButton5.draw(ctx, x - width / 2 + 145*this.scaleFactor + i*145*this.scaleFactor, y - height / 2);
                spriteButton6.draw(ctx, x - width / 2 + 145*this.scaleFactor + i*145*this.scaleFactor, y);
                i++;
            }
        };

        this.actor.setHeight(width);
        this.actor.setWidth(height);

        // Click Event
        game.input.pointers.primary.on('down', function(ev) {
            //console.log(uibutton.isOnChar(ev['worldPos'].x, ev['worldPos'].y));
        });

        // Add To Scene
        this.scene.add(this.actor);
        this.scene.add(this.label);
    }

    isOnChar(x: number, y:number) {
        let xx = this.actor.x - this.actor.getWidth()*this.scaleFactor/2;
        let yy = this.actor.y - this.actor.getHeight()*this.scaleFactor/2;
        let w = this.actor.getWidth() * this.scaleFactor;
        let h = this.actor.getHeight() * this.scaleFactor;

        return (xx < x && xx + w > x &&
        yy < y && yy + h > yy);
    }

    clicked() {
        console.log('CLICKED');
    }
}