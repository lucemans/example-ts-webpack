import { Texture } from 'excalibur';
const sword = require('./images/sword.png');
const button = require('./images/button.png');
const cursor = require('./images/cursor.png');

let Resources = {
    Sword: new Texture(sword),
    Button: new Texture(button),
    Cursor: new Texture(cursor)
};

export { Resources }
