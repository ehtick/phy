let gina;

demo = () => {

    phy.log('use key WSAD or ZSQD<br>E to fight / C to crouch<br>SPACE to jump / SHIFT to run')

    
    phy.view({ envmap:'basic', ground:false, fog:true, fogDist:0.01 })

	// setting and start oimophysics
	phy.set({ substep:2, gravity:[0,-9.81,0], key:true })


	// add static plane 
	phy.add({ type:'plane', name:'floor', size:[ 300,1,300 ], visible:false, friction: 0.5,  });
	//phy.add({ type:'box', name:'j', size:[0.1,0.01,0.1], pos:[0, 0.005, 0], material:'body' /*filter:[1,-1,[5,9], 0]*/ })

    let n = math.randInt(0,2)
    // create character
    gina = phy.add({ 
        type:'character',
        gender:'eva0'+n,
        name:'gina',
        callback:terrainTest,
        pos:[0,0,0],
        //noMat:true,
        //morph:true,
        //debug:true,
    })

    phy.follow('gina', { direct:true, simple:true, decal:[0.3, 1, -0.3] })
    phy.control( 'gina' )
    hub.addCross()

}


terrainTest = () => {

    let terrain = phy.add({
        type:'terrain',
        name:'terra',
        friction: 0.5, 
        //staticFriction:0.5,
        restitution: 0.0,
        uv:engine==='OIMO' ? 18 : 128,
        pos: engine==='OIMO' ? [ 0, -2, 0 ] :[0,-5,0],
        size: engine==='OIMO' ? [ 20, 6, 20 ] : [512, 20, 512],
        sample: engine==='OIMO' ? [ 32, 32 ] : [512, 512],
        frequency: engine==='OIMO' ? [0.05,0.25,0.75] : [0.016,0.05,0.2],
        level:[ 1, 0.2, 0.05 ],
        expo: 2,
    })

    let py = terrain.getHeight( 0, 0 )+1
    if(py<1) py = 1

    phy.change( { name:'gina', pos:[0,py,0] } )
    phy.remove( 'floor' )

    // update after physic step
    phy.setPostUpdate( update )

}


update = () => {

    let p = gina.position;
    let d = math.distance({ x:p.x, z:p.z });
    if( d > 50 ){
        phy.change([
            { name:'terra', decal:[p.x,0,p.z] },
            { name:'gina', pos:[0,p.y,0] },
        ])
    }


}