import { Item } from '../core/Item.js';
import { Num } from '../core/Config.js';
import { MathTool } from '../core/MathTool.js';


import { Utils, root, map } from './root.js';

// JOLT RAY

export class Ray extends Item {

	constructor () {

		super();

		this.Utils = Utils
		this.type = 'ray';
		this.initRay = false;

	}

	reset () {
		
		super.reset()
		
		if( !this.initRay ) return;
		this.initRay = false;
		Jolt.destroy(this.ray);
		Jolt.destroy(this.bp_filter);
		Jolt.destroy(this.object_filter);
		Jolt.destroy(this.body_filter);
		Jolt.destroy(this.shape_filter);
		this.collector.OnBody = null;
		this.collector.AddHit = null;
		Jolt.destroy(this.collector);

	}

	init () {

		if( this.initRay ) return;

		this.initRay = true;

		this.v1 = new Jolt.Vec3();
		this.v2 = new Jolt.Vec3();

		this.ray = new Jolt.RRayCast();
		this.current = ''

		// Create ray cast settings (e.g. if we want back face culling)
		this.ray_settings = new Jolt.RayCastSettings;
		this.ray_settings.mTreatConvexAsSolid = false;

		// Perform the ray cast as if we were a moving object
		this.bp_filter = new Jolt.DefaultBroadPhaseLayerFilter(root.world.GetObjectVsBroadPhaseLayerFilter(), Jolt.MOVING);
		this.object_filter = new Jolt.DefaultObjectLayerFilter(root.world.GetObjectLayerPairFilter(), Jolt.MOVING);
		this.body_filter = new Jolt.BodyFilter(); // We don't want to filter out any bodies
		this.shape_filter = new Jolt.ShapeFilter(); // We don't want to filter out any shapes

		// Create collector
		this.collector = new Jolt.CastRayCollectorJS;

		this.collector.OnBody = function(inBody) {

			inBody = Jolt.wrapPointer(inBody, Jolt.Body);
			this.current = inBody.name;
			// Called for every body that is visited, we don't need to do anything here
		}.bind(this);

		this.collector.AddHit = function(inRayCastResult){

			inRayCastResult = Jolt.wrapPointer(inRayCastResult, Jolt.RayCastResult);

			let origin = this.ray.mOrigin.toArray();
		    let direction = this.ray.mDirection.toArray();
		    let target = MathTool.addArray( origin, MathTool.mulArray( direction, inRayCastResult.mFraction, 3 ), 3 );
		    let normal = [0,1,0]

		    const n = this.ray.n;
		    const AR = root.Ar;

		    if(AR[n]!==0) return; // block on first hit

		    AR[n] = 1;
		    AR[n+1] = MathTool.distanceArray( origin, target );
		    AR[n+2] = origin[0]
			AR[n+3] = origin[1]
			AR[n+4] = origin[2]

			AR[n+5] = target[0]
			AR[n+6] = target[1]
			AR[n+7] = target[2]

			AR[n+8] = normal[0]
			AR[n+9] = normal[1]
			AR[n+10] = normal[2]

			root.reflow.ray[this.ray.id] = this.current;

		}.bind(this);

	}

	step () {

		const AR = root.Ar;
		const N = root.ArPos[this.type];

		root.reflow.ray = [];

		let i = this.list.length, r, n, b, query, pp, ph
		let queryMembership, queryCollideWith
		let normal, hitData

		while( i-- ){

			n = N + ( i * Num.ray );

			r = this.list[i];
			pp = r.getPoint();

			this.ray.mOrigin.fromArray( pp[0] );
			// direction is not normalized
			this.ray.mDirection.fromArray( MathTool.subArray( pp[1], pp[0] ) );

			this.ray.n = n;
			this.ray.id = i;

			AR[n] = 0;
			this.ray_settings.mTreatConvexAsSolid = r.selfHit;
			root.physicsSystem.GetNarrowPhaseQuery().CastRay( this.ray, this.ray_settings, this.collector, this.bp_filter, this.object_filter, this.body_filter, this.shape_filter );

		}

	}

	///

	add ( o = {} ) {

		let name = this.setName( o );
		let r = new ExtraRay( o ); 

		// apply option
		//this.set( o, r );

		// add to world
		this.addToWorld( r, o.id );

		this.init();

	}

	set ( o = {}, r = null ) {

		if( r === null ) r = this.byName( o.name );
		if( r === null ) return;

		if(o.begin) r.begin = o.begin
		if(o.end) r.end = o.end

	}

}



export class ExtraRay {

	constructor( o = {} ) {

	    this.type = 'ray';
	    this.name = o.name;
	    this.parent = o.parent || '';

	    this.selfHit = o.selfHit || false;

	    this.begin = o.begin || [0,0,0]
	    this.end = o.end || [0,0,1]

	    //this.ray = new Jolt.RayCast();
	    //console.log(this.ray)

	}

	getPoint(){
		if( this.parent ){
			const b = Utils.byName( this.parent );
			if(b){
				const p = b.GetPosition().toArray();
				const q = b.GetRotation().toArray();
				return [
				    MathTool.applyTransformArray( this.begin, p, q ),
				    MathTool.applyTransformArray( this.end, p, q )
				]

			} 
		}
		return [ this.begin, this.end ]
	}

}