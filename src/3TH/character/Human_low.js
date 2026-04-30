
import { Vector2, Color } from 'three';
import { Pool } from '../Pool.js';

const setting = {

    wireframe:false,
    normal:0.25,
    hair:0x252011,
    
}

export const Human_low = {

	isBreath:false,
	isEyeMove:false,
	haveMorph:true,
    
    skeletonRef:'body_low',
	fullMorph: ['MUSCLE', 'LOW', 'BIG', 'MONSTER'],

	//haveQuality: true,
    //textureQuality:0,
    textureRef:'avatar_c',
    texturePath: 'assets/textures/avatar_1k/',
    textures: ['avatar_c.jpg', 'avatar_n.jpg', 'avatar_arm.jpg', 'hair_man_a.jpg', 'hair.jpg', 'hair_a.jpg'],

    modelPath: 'assets/models/avatar/',
    forceModel: null,

    setting:setting,

    materialRef:'skin_low',
    materials:{
        skin_low:{
            type:'Standard',
            map: 'avatar_c',
            aoMap:'avatar_arm',
            metalnessMap:'avatar_arm',
            roughnessMap:'avatar_arm',
            normalMap: 'avatar_n',

            normalScale: new Vector2( setting.normal, -setting.normal),
            roughness:1.0,
            metalness:1.0,
            vertexColors:false,
            
            
        },
        hair_man_low:{
            //color:0xE24C00,
            type:'Standard',
            color:setting.hair,
           // alphaMap: 'hair_man_a',
            transparent:true,
            //blending:CustomBlending,
            //blendDst:ZeroFactor,
            //blendDstAlpha:SrcAlphaFactor,
            //alphaToCoverage:true,
        },

        hair_wom_low:{
            //color:0xE24C00,
            type:'Standard',
            color:setting.hair,
           // map:'hair',
            //normalMap: 'hair_a'
        },

    },

    changeMaterial:( sx = {}, def = false ) => {

        if( !Pool.getMaterial( Human_low.materialRef ) ) return

            const defMat = Lee.materials;
        let m;

        for(let key in defMat){
            m = Pool.getMaterial( key );
            for(let v in sx){
                if( m[v] !== undefined ){ 
                    if( def && defMat[key][v] ) m[v] = defMat[key][v];
                    else m[v] = sx[v];
                }
            }
            //m.needsUpdate = true
        }

    },

    
    applyMaterial:( root, model ) => {

        // apply Material

        const def = Pool.getMaterial( Human_low.materialRef );

        root.traverse( ( node ) => {

            if ( node.isMesh ){
                switch( node.name ){
                    case 'body_low':
                    //Pool.symetric( node );
                    //node.geometry.deleteAttribute( 'normal' );
                    
                    //node.geometry.deleteAttribute( 'tangent' );
                    //node.geometry.computeVertexNormals()
                    node.material = def;
                    //node.material.normalMapType = ObjectSpaceNormalMap;

                    //node.material.needsUpdate = true

                    //Pool.objectSpaceNormal( node );
                    node.receiveShadow = true;
                    node.castShadow = true;
                    break;
                    case 'hair_man_low':
                    node.material = Pool.getMaterial( 'hair_man_low' ) || def;
                    node.receiveShadow = false;
                    node.castShadow = false;
                    break;
                    case 'hair_wom_low':
                    node.material = Pool.getMaterial( 'hair_wom_low' ) || def;
                    node.receiveShadow = false;
                    node.castShadow = false;
                    break;
                    
                }
            }

        })

    },

    adjustment:() => {

        return [
        {name:'neck', values:[-5,0,0]},
        {name:'chest', values:[5,0,0]},
        {name:'lCollar', values:[0,0,-10]},
        {name:'rCollar', values:[0,0,10]},
        {name:'lShldr', values:[-20,2,0]},
        {name:'rShldr', values:[-20,-2,0]},
        
        ]

    }





}