import { TextureLoader, SpriteMaterial, Sprite  } from "three";

const map = new TextureLoader().load( 'character/basic/Run_1.png' );
const material = new SpriteMaterial( { map: map } );
const knight = new Sprite( material );

export default knight;
