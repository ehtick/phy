let A;
const I = new Array(32).fill(void 0);
function g(A2) {
  return I[A2];
}
I.push(void 0, null, true, false);
let C = I.length;
function B(A2) {
  const B2 = g(A2);
  return function(A3) {
    A3 < 36 || (I[A3] = C, C = A3);
  }(A2), B2;
}
function Q(A2) {
  C === I.length && I.push(I.length + 1);
  const g2 = C;
  return C = I[g2], I[g2] = A2, g2;
}
function E(A2) {
  return A2 == null;
}
let i = new Float64Array();
function D() {
  return i.byteLength === 0 && (i = new Float64Array(A.memory.buffer)), i;
}
let o = new Int32Array();
function G() {
  return o.byteLength === 0 && (o = new Int32Array(A.memory.buffer)), o;
}
const w = new TextDecoder("utf-8", {ignoreBOM: true, fatal: true});
w.decode();
let S = new Uint8Array();
function k(I2, g2) {
  return w.decode((S.byteLength === 0 && (S = new Uint8Array(A.memory.buffer)), S).subarray(I2, I2 + g2));
}
function K(A2, I2) {
  if (!(A2 instanceof I2))
    throw new Error(`expected instance of ${I2.name}`);
  return A2.ptr;
}
let a = new Float32Array();
function U() {
  return a.byteLength === 0 && (a = new Float32Array(A.memory.buffer)), a;
}
let y = 32;
function J(A2) {
  if (y == 1)
    throw new Error("out of js stack");
  return I[--y] = A2, y;
}
function h(A2, I2) {
  return U().subarray(A2 / 4, A2 / 4 + I2);
}
let M = new Uint32Array();
function N() {
  return M.byteLength === 0 && (M = new Uint32Array(A.memory.buffer)), M;
}
let F = 0;
function q(A2, I2) {
  const g2 = I2(4 * A2.length);
  return U().set(A2, g2 / 4), F = A2.length, g2;
}
function R(A2, I2) {
  const g2 = I2(4 * A2.length);
  return N().set(A2, g2 / 4), F = A2.length, g2;
}
function s(I2, g2) {
  try {
    return I2.apply(this, g2);
  } catch (I3) {
    A.__wbindgen_exn_store(Q(I3));
  }
}
Object.freeze({Revolute: 0, 0: "Revolute", Fixed: 1, 1: "Fixed", Prismatic: 2, 2: "Prismatic", Spherical: 3, 3: "Spherical", Generic: 4, 4: "Generic"}), Object.freeze({AccelerationBased: 0, 0: "AccelerationBased", ForceBased: 1, 1: "ForceBased"});
const c = Object.freeze({X: 0, 0: "X", Y: 1, 1: "Y", Z: 2, 2: "Z", AngX: 3, 3: "AngX", AngY: 4, 4: "AngY", AngZ: 5, 5: "AngZ"});
Object.freeze({Dynamic: 0, 0: "Dynamic", Fixed: 1, 1: "Fixed", KinematicPositionBased: 2, 2: "KinematicPositionBased", KinematicVelocityBased: 3, 3: "KinematicVelocityBased"}), Object.freeze({Vertex: 0, 0: "Vertex", Edge: 1, 1: "Edge", Face: 2, 2: "Face", Unknown: 3, 3: "Unknown"}), Object.freeze({Ball: 0, 0: "Ball", Cuboid: 1, 1: "Cuboid", Capsule: 2, 2: "Capsule", Segment: 3, 3: "Segment", Polyline: 4, 4: "Polyline", Triangle: 5, 5: "Triangle", TriMesh: 6, 6: "TriMesh", HeightField: 7, 7: "HeightField", Compound: 8, 8: "Compound", ConvexPolyhedron: 9, 9: "ConvexPolyhedron", Cylinder: 10, 10: "Cylinder", Cone: 11, 11: "Cone", RoundCuboid: 12, 12: "RoundCuboid", RoundTriangle: 13, 13: "RoundTriangle", RoundCylinder: 14, 14: "RoundCylinder", RoundCone: 15, 15: "RoundCone", RoundConvexPolyhedron: 16, 16: "RoundConvexPolyhedron", HalfSpace: 17, 17: "HalfSpace"});
class Y {
  static __wrap(A2) {
    const I2 = Object.create(Y.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawbroadphase_free(I2);
  }
  constructor() {
    const I2 = A.rawbroadphase_new();
    return Y.__wrap(I2);
  }
}
class L {
  static __wrap(A2) {
    const I2 = Object.create(L.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawccdsolver_free(I2);
  }
  constructor() {
    const I2 = A.rawccdsolver_new();
    return L.__wrap(I2);
  }
}
class H {
  static __wrap(A2) {
    const I2 = Object.create(H.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcharactercollision_free(I2);
  }
  constructor() {
    const I2 = A.rawcharactercollision_new();
    return H.__wrap(I2);
  }
  handle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  translationApplied() {
    const I2 = A.rawcharactercollision_translationApplied(this.ptr);
    return BA.__wrap(I2);
  }
  translationRemaining() {
    const I2 = A.rawcharactercollision_translationRemaining(this.ptr);
    return BA.__wrap(I2);
  }
  toi() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  worldWitness1() {
    const I2 = A.rawcharactercollision_worldWitness1(this.ptr);
    return BA.__wrap(I2);
  }
  worldWitness2() {
    const I2 = A.rawcharactercollision_worldWitness2(this.ptr);
    return BA.__wrap(I2);
  }
  worldNormal1() {
    const I2 = A.rawcharactercollision_worldNormal1(this.ptr);
    return BA.__wrap(I2);
  }
  worldNormal2() {
    const I2 = A.rawcharactercollision_worldNormal2(this.ptr);
    return BA.__wrap(I2);
  }
}
class l {
  static __wrap(A2) {
    const I2 = Object.create(l.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcolliderset_free(I2);
  }
  coTranslation(I2) {
    const g2 = A.rawcolliderset_coTranslation(this.ptr, I2);
    return BA.__wrap(g2);
  }
  coRotation(I2) {
    const g2 = A.rawcolliderset_coRotation(this.ptr, I2);
    return _.__wrap(g2);
  }
  coSetTranslation(I2, g2, C2, B2) {
    A.rawcolliderset_coSetTranslation(this.ptr, I2, g2, C2, B2);
  }
  coSetTranslationWrtParent(I2, g2, C2, B2) {
    A.rawcolliderset_coSetTranslationWrtParent(this.ptr, I2, g2, C2, B2);
  }
  coSetRotation(I2, g2, C2, B2, Q2) {
    A.rawcolliderset_coSetRotation(this.ptr, I2, g2, C2, B2, Q2);
  }
  coSetRotationWrtParent(I2, g2, C2, B2, Q2) {
    A.rawcolliderset_coSetRotationWrtParent(this.ptr, I2, g2, C2, B2, Q2);
  }
  coIsSensor(I2) {
    return A.rawcolliderset_coIsSensor(this.ptr, I2) !== 0;
  }
  coShapeType(I2) {
    return A.rawcolliderset_coShapeType(this.ptr, I2) >>> 0;
  }
  coHalfspaceNormal(I2) {
    const g2 = A.rawcolliderset_coHalfspaceNormal(this.ptr, I2);
    return g2 === 0 ? void 0 : BA.__wrap(g2);
  }
  coHalfExtents(I2) {
    const g2 = A.rawcolliderset_coHalfExtents(this.ptr, I2);
    return g2 === 0 ? void 0 : BA.__wrap(g2);
  }
  coRadius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coRadius(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = U()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHalfHeight(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHalfHeight(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = U()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coRoundRadius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coRoundRadius(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = U()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coVertices(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coVertices(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return g2 !== 0 && (Q2 = h(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coIndices(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coIndices(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return g2 !== 0 && (Q2 = function(A2, I3) {
        return N().subarray(A2 / 4, A2 / 4 + I3);
      }(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldHeights(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldHeights(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return g2 !== 0 && (Q2 = h(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldScale(I2) {
    const g2 = A.rawcolliderset_coHeightfieldScale(this.ptr, I2);
    return g2 === 0 ? void 0 : BA.__wrap(g2);
  }
  coHeightfieldNRows(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldNRows(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldNCols(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldNCols(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coParent(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coParent(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = D()[B2 / 8 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coFriction(I2) {
    return A.rawcolliderset_coFriction(this.ptr, I2);
  }
  coRestitution(I2) {
    return A.rawcolliderset_coRestitution(this.ptr, I2);
  }
  coDensity(I2) {
    return A.rawcolliderset_coDensity(this.ptr, I2);
  }
  coMass(I2) {
    return A.rawcolliderset_coMass(this.ptr, I2);
  }
  coVolume(I2) {
    return A.rawcolliderset_coVolume(this.ptr, I2);
  }
  coCollisionGroups(I2) {
    return A.rawcolliderset_coCollisionGroups(this.ptr, I2) >>> 0;
  }
  coSolverGroups(I2) {
    return A.rawcolliderset_coSolverGroups(this.ptr, I2) >>> 0;
  }
  coActiveHooks(I2) {
    return A.rawcolliderset_coActiveHooks(this.ptr, I2) >>> 0;
  }
  coActiveCollisionTypes(I2) {
    return A.rawcolliderset_coActiveCollisionTypes(this.ptr, I2);
  }
  coActiveEvents(I2) {
    return A.rawcolliderset_coActiveEvents(this.ptr, I2) >>> 0;
  }
  coContactForceEventThreshold(I2) {
    return A.rawcolliderset_coContactForceEventThreshold(this.ptr, I2);
  }
  coContainsPoint(I2, g2) {
    K(g2, BA);
    return A.rawcolliderset_coContainsPoint(this.ptr, I2, g2.ptr) !== 0;
  }
  coCastShape(I2, g2, C2, B2, Q2, E2, i2, D2) {
    K(g2, BA), K(C2, AA), K(B2, BA), K(Q2, _), K(E2, BA);
    const o2 = A.rawcolliderset_coCastShape(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2.ptr, i2, D2);
    return o2 === 0 ? void 0 : CA.__wrap(o2);
  }
  coCastCollider(I2, g2, C2, B2, Q2, E2) {
    K(g2, BA), K(B2, BA);
    const i2 = A.rawcolliderset_coCastCollider(this.ptr, I2, g2.ptr, C2, B2.ptr, Q2, E2);
    return i2 === 0 ? void 0 : IA.__wrap(i2);
  }
  coIntersectsShape(I2, g2, C2, B2) {
    K(g2, AA), K(C2, BA), K(B2, _);
    return A.rawcolliderset_coIntersectsShape(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr) !== 0;
  }
  coContactShape(I2, g2, C2, B2, Q2) {
    K(g2, AA), K(C2, BA), K(B2, _);
    const E2 = A.rawcolliderset_coContactShape(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2);
    return E2 === 0 ? void 0 : gA.__wrap(E2);
  }
  coContactCollider(I2, g2, C2) {
    const B2 = A.rawcolliderset_coContactCollider(this.ptr, I2, g2, C2);
    return B2 === 0 ? void 0 : gA.__wrap(B2);
  }
  coProjectPoint(I2, g2, C2) {
    K(g2, BA);
    const B2 = A.rawcolliderset_coProjectPoint(this.ptr, I2, g2.ptr, C2);
    return P.__wrap(B2);
  }
  coIntersectsRay(I2, g2, C2, B2) {
    K(g2, BA), K(C2, BA);
    return A.rawcolliderset_coIntersectsRay(this.ptr, I2, g2.ptr, C2.ptr, B2) !== 0;
  }
  coCastRay(I2, g2, C2, B2, Q2) {
    K(g2, BA), K(C2, BA);
    return A.rawcolliderset_coCastRay(this.ptr, I2, g2.ptr, C2.ptr, B2, Q2);
  }
  coCastRayAndGetNormal(I2, g2, C2, B2, Q2) {
    K(g2, BA), K(C2, BA);
    const E2 = A.rawcolliderset_coCastRayAndGetNormal(this.ptr, I2, g2.ptr, C2.ptr, B2, Q2);
    return E2 === 0 ? void 0 : z.__wrap(E2);
  }
  coSetSensor(I2, g2) {
    A.rawcolliderset_coSetSensor(this.ptr, I2, g2);
  }
  coSetRestitution(I2, g2) {
    A.rawcolliderset_coSetRestitution(this.ptr, I2, g2);
  }
  coSetFriction(I2, g2) {
    A.rawcolliderset_coSetFriction(this.ptr, I2, g2);
  }
  coFrictionCombineRule(I2) {
    return A.rawcolliderset_coFrictionCombineRule(this.ptr, I2) >>> 0;
  }
  coSetFrictionCombineRule(I2, g2) {
    A.rawcolliderset_coSetFrictionCombineRule(this.ptr, I2, g2);
  }
  coRestitutionCombineRule(I2) {
    return A.rawcolliderset_coRestitutionCombineRule(this.ptr, I2) >>> 0;
  }
  coSetRestitutionCombineRule(I2, g2) {
    A.rawcolliderset_coSetRestitutionCombineRule(this.ptr, I2, g2);
  }
  coSetCollisionGroups(I2, g2) {
    A.rawcolliderset_coSetCollisionGroups(this.ptr, I2, g2);
  }
  coSetSolverGroups(I2, g2) {
    A.rawcolliderset_coSetSolverGroups(this.ptr, I2, g2);
  }
  coSetActiveHooks(I2, g2) {
    A.rawcolliderset_coSetActiveHooks(this.ptr, I2, g2);
  }
  coSetActiveEvents(I2, g2) {
    A.rawcolliderset_coSetActiveEvents(this.ptr, I2, g2);
  }
  coSetActiveCollisionTypes(I2, g2) {
    A.rawcolliderset_coSetActiveCollisionTypes(this.ptr, I2, g2);
  }
  coSetShape(I2, g2) {
    K(g2, AA), A.rawcolliderset_coSetShape(this.ptr, I2, g2.ptr);
  }
  coSetContactForceEventThreshold(I2, g2) {
    A.rawcolliderset_coSetContactForceEventThreshold(this.ptr, I2, g2);
  }
  coSetDensity(I2, g2) {
    A.rawcolliderset_coSetDensity(this.ptr, I2, g2);
  }
  coSetMass(I2, g2) {
    A.rawcolliderset_coSetMass(this.ptr, I2, g2);
  }
  coSetMassProperties(I2, g2, C2, B2, Q2) {
    K(C2, BA), K(B2, BA), K(Q2, _), A.rawcolliderset_coSetMassProperties(this.ptr, I2, g2, C2.ptr, B2.ptr, Q2.ptr);
  }
  constructor() {
    const I2 = A.rawcolliderset_new();
    return l.__wrap(I2);
  }
  len() {
    return A.rawcolliderset_len(this.ptr) >>> 0;
  }
  contains(I2) {
    return A.rawcolliderset_contains(this.ptr, I2) !== 0;
  }
  createCollider(I2, g2, C2, B2, Q2, E2, i2, o2, w2, S2, k2, a2, U2, y2, J2, h2, M2, N2, F2, q2, R2, s2, c2) {
    try {
      const H2 = A.__wbindgen_add_to_stack_pointer(-16);
      K(I2, AA), K(g2, BA), K(C2, _), K(E2, BA), K(i2, BA), K(o2, _), K(c2, v), A.rawcolliderset_createCollider(H2, this.ptr, I2.ptr, g2.ptr, C2.ptr, B2, Q2, E2.ptr, i2.ptr, o2.ptr, w2, S2, k2, a2, U2, y2, J2, h2, M2, N2, F2, q2, R2, s2, c2.ptr);
      var Y2 = G()[H2 / 4 + 0], L2 = D()[H2 / 8 + 1];
      return Y2 === 0 ? void 0 : L2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  remove(I2, g2, C2, B2) {
    K(g2, x), K(C2, v), A.rawcolliderset_remove(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  isHandleValid(I2) {
    return A.rawcolliderset_contains(this.ptr, I2) !== 0;
  }
  forEachColliderHandle(g2) {
    try {
      A.rawcolliderset_forEachColliderHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
}
class t {
  static __wrap(A2) {
    const I2 = Object.create(t.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactforceevent_free(I2);
  }
  collider1() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  collider2() {
    return A.rawcontactforceevent_collider2(this.ptr);
  }
  total_force() {
    const I2 = A.rawcontactforceevent_total_force(this.ptr);
    return BA.__wrap(I2);
  }
  total_force_magnitude() {
    return A.rawcontactforceevent_total_force_magnitude(this.ptr);
  }
  max_force_direction() {
    const I2 = A.rawcontactforceevent_max_force_direction(this.ptr);
    return BA.__wrap(I2);
  }
  max_force_magnitude() {
    return A.rawcontactforceevent_max_force_magnitude(this.ptr);
  }
}
class p {
  static __wrap(A2) {
    const I2 = Object.create(p.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactmanifold_free(I2);
  }
  normal() {
    const I2 = A.rawcontactmanifold_normal(this.ptr);
    return BA.__wrap(I2);
  }
  local_n1() {
    const I2 = A.rawcontactmanifold_local_n1(this.ptr);
    return BA.__wrap(I2);
  }
  local_n2() {
    const I2 = A.rawcontactmanifold_local_n2(this.ptr);
    return BA.__wrap(I2);
  }
  subshape1() {
    return A.rawcontactmanifold_subshape1(this.ptr) >>> 0;
  }
  subshape2() {
    return A.rawcontactmanifold_subshape2(this.ptr) >>> 0;
  }
  num_contacts() {
    return A.rawcontactmanifold_num_contacts(this.ptr) >>> 0;
  }
  contact_local_p1(I2) {
    const g2 = A.rawcontactmanifold_contact_local_p1(this.ptr, I2);
    return g2 === 0 ? void 0 : BA.__wrap(g2);
  }
  contact_local_p2(I2) {
    const g2 = A.rawcontactmanifold_contact_local_p2(this.ptr, I2);
    return g2 === 0 ? void 0 : BA.__wrap(g2);
  }
  contact_dist(I2) {
    return A.rawcontactmanifold_contact_dist(this.ptr, I2);
  }
  contact_fid1(I2) {
    return A.rawcontactmanifold_contact_fid1(this.ptr, I2) >>> 0;
  }
  contact_fid2(I2) {
    return A.rawcontactmanifold_contact_fid2(this.ptr, I2) >>> 0;
  }
  contact_impulse(I2) {
    return A.rawcontactmanifold_contact_impulse(this.ptr, I2);
  }
  contact_tangent_impulse_x(I2) {
    return A.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, I2);
  }
  contact_tangent_impulse_y(I2) {
    return A.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, I2);
  }
  num_solver_contacts() {
    return A.rawcontactmanifold_num_solver_contacts(this.ptr) >>> 0;
  }
  solver_contact_point(I2) {
    const g2 = A.rawcontactmanifold_solver_contact_point(this.ptr, I2);
    return g2 === 0 ? void 0 : BA.__wrap(g2);
  }
  solver_contact_dist(I2) {
    return A.rawcontactmanifold_solver_contact_dist(this.ptr, I2);
  }
  solver_contact_friction(I2) {
    return A.rawcontactmanifold_solver_contact_friction(this.ptr, I2);
  }
  solver_contact_restitution(I2) {
    return A.rawcontactmanifold_solver_contact_restitution(this.ptr, I2);
  }
  solver_contact_tangent_velocity(I2) {
    const g2 = A.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, I2);
    return BA.__wrap(g2);
  }
}
class r {
  static __wrap(A2) {
    const I2 = Object.create(r.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactpair_free(I2);
  }
  collider1() {
    return A.rawcontactpair_collider1(this.ptr);
  }
  collider2() {
    return A.rawcontactpair_collider2(this.ptr);
  }
  numContactManifolds() {
    return A.rawcontactpair_numContactManifolds(this.ptr) >>> 0;
  }
  contactManifold(I2) {
    const g2 = A.rawcontactpair_contactManifold(this.ptr, I2);
    return g2 === 0 ? void 0 : p.__wrap(g2);
  }
}
class e {
  static __wrap(A2) {
    const I2 = Object.create(e.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdebugrenderpipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawdebugrenderpipeline_new();
    return e.__wrap(I2);
  }
  vertices() {
    return B(A.rawdebugrenderpipeline_vertices(this.ptr));
  }
  colors() {
    return B(A.rawdebugrenderpipeline_colors(this.ptr));
  }
  render(I2, g2, C2, B2, Q2) {
    K(I2, v), K(g2, l), K(C2, n), K(B2, b), K(Q2, j), A.rawdebugrenderpipeline_render(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr);
  }
}
class T {
  static __wrap(A2) {
    const I2 = Object.create(T.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdeserializedworld_free(I2);
  }
  takeGravity() {
    const I2 = A.rawdeserializedworld_takeGravity(this.ptr);
    return I2 === 0 ? void 0 : BA.__wrap(I2);
  }
  takeIntegrationParameters() {
    const I2 = A.rawdeserializedworld_takeIntegrationParameters(this.ptr);
    return I2 === 0 ? void 0 : Z.__wrap(I2);
  }
  takeIslandManager() {
    const I2 = A.rawdeserializedworld_takeIslandManager(this.ptr);
    return I2 === 0 ? void 0 : x.__wrap(I2);
  }
  takeBroadPhase() {
    const I2 = A.rawdeserializedworld_takeBroadPhase(this.ptr);
    return I2 === 0 ? void 0 : Y.__wrap(I2);
  }
  takeNarrowPhase() {
    const I2 = A.rawdeserializedworld_takeNarrowPhase(this.ptr);
    return I2 === 0 ? void 0 : j.__wrap(I2);
  }
  takeBodies() {
    const I2 = A.rawdeserializedworld_takeBodies(this.ptr);
    return I2 === 0 ? void 0 : v.__wrap(I2);
  }
  takeColliders() {
    const I2 = A.rawdeserializedworld_takeColliders(this.ptr);
    return I2 === 0 ? void 0 : l.__wrap(I2);
  }
  takeImpulseJoints() {
    const I2 = A.rawdeserializedworld_takeImpulseJoints(this.ptr);
    return I2 === 0 ? void 0 : n.__wrap(I2);
  }
  takeMultibodyJoints() {
    const I2 = A.rawdeserializedworld_takeMultibodyJoints(this.ptr);
    return I2 === 0 ? void 0 : b.__wrap(I2);
  }
}
class d {
  static __wrap(A2) {
    const I2 = Object.create(d.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_raweventqueue_free(I2);
  }
  constructor(I2) {
    const g2 = A.raweventqueue_new(I2);
    return d.__wrap(g2);
  }
  drainCollisionEvents(g2) {
    try {
      A.raweventqueue_drainCollisionEvents(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  drainContactForceEvents(g2) {
    try {
      A.raweventqueue_drainContactForceEvents(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  clear() {
    A.raweventqueue_clear(this.ptr);
  }
}
class O {
  static __wrap(A2) {
    const I2 = Object.create(O.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawgenericjoint_free(I2);
  }
  static spherical(I2, g2) {
    K(I2, BA), K(g2, BA);
    const C2 = A.rawgenericjoint_spherical(I2.ptr, g2.ptr);
    return O.__wrap(C2);
  }
  static prismatic(I2, g2, C2, B2, Q2, E2) {
    K(I2, BA), K(g2, BA), K(C2, BA);
    const i2 = A.rawgenericjoint_prismatic(I2.ptr, g2.ptr, C2.ptr, B2, Q2, E2);
    return i2 === 0 ? void 0 : O.__wrap(i2);
  }
  static fixed(I2, g2, C2, B2) {
    K(I2, BA), K(g2, _), K(C2, BA), K(B2, _);
    const Q2 = A.rawgenericjoint_fixed(I2.ptr, g2.ptr, C2.ptr, B2.ptr);
    return O.__wrap(Q2);
  }
  static revolute(I2, g2, C2) {
    K(I2, BA), K(g2, BA), K(C2, BA);
    const B2 = A.rawgenericjoint_revolute(I2.ptr, g2.ptr, C2.ptr);
    return B2 === 0 ? void 0 : O.__wrap(B2);
  }
}
class n {
  static __wrap(A2) {
    const I2 = Object.create(n.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawimpulsejointset_free(I2);
  }
  jointType(I2) {
    return A.rawimpulsejointset_jointType(this.ptr, I2) >>> 0;
  }
  jointBodyHandle1(I2) {
    return A.rawimpulsejointset_jointBodyHandle1(this.ptr, I2);
  }
  jointBodyHandle2(I2) {
    return A.rawimpulsejointset_jointBodyHandle2(this.ptr, I2);
  }
  jointFrameX1(I2) {
    const g2 = A.rawimpulsejointset_jointFrameX1(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointFrameX2(I2) {
    const g2 = A.rawimpulsejointset_jointFrameX2(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointAnchor1(I2) {
    const g2 = A.rawimpulsejointset_jointAnchor1(this.ptr, I2);
    return BA.__wrap(g2);
  }
  jointAnchor2(I2) {
    const g2 = A.rawimpulsejointset_jointAnchor2(this.ptr, I2);
    return BA.__wrap(g2);
  }
  jointSetAnchor1(I2, g2) {
    K(g2, BA), A.rawimpulsejointset_jointSetAnchor1(this.ptr, I2, g2.ptr);
  }
  jointSetAnchor2(I2, g2) {
    K(g2, BA), A.rawimpulsejointset_jointSetAnchor2(this.ptr, I2, g2.ptr);
  }
  jointContactsEnabled(I2) {
    return A.rawimpulsejointset_jointContactsEnabled(this.ptr, I2) !== 0;
  }
  jointSetContactsEnabled(I2, g2) {
    A.rawimpulsejointset_jointSetContactsEnabled(this.ptr, I2, g2);
  }
  jointLimitsEnabled(I2, g2) {
    return A.rawimpulsejointset_jointLimitsEnabled(this.ptr, I2, g2) !== 0;
  }
  jointLimitsMin(I2, g2) {
    return A.rawimpulsejointset_jointLimitsMin(this.ptr, I2, g2);
  }
  jointLimitsMax(I2, g2) {
    return A.rawimpulsejointset_jointLimitsMax(this.ptr, I2, g2);
  }
  jointSetLimits(I2, g2, C2, B2) {
    A.rawimpulsejointset_jointSetLimits(this.ptr, I2, g2, C2, B2);
  }
  jointConfigureMotorModel(I2, g2, C2) {
    A.rawimpulsejointset_jointConfigureMotorModel(this.ptr, I2, g2, C2);
  }
  jointConfigureMotorVelocity(I2, g2, C2, B2) {
    A.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, I2, g2, C2, B2);
  }
  jointConfigureMotorPosition(I2, g2, C2, B2, Q2) {
    A.rawimpulsejointset_jointConfigureMotorPosition(this.ptr, I2, g2, C2, B2, Q2);
  }
  jointConfigureMotor(I2, g2, C2, B2, Q2, E2) {
    A.rawimpulsejointset_jointConfigureMotor(this.ptr, I2, g2, C2, B2, Q2, E2);
  }
  constructor() {
    const I2 = A.rawimpulsejointset_new();
    return n.__wrap(I2);
  }
  createJoint(I2, g2, C2, B2) {
    K(I2, O);
    return A.rawimpulsejointset_createJoint(this.ptr, I2.ptr, g2, C2, B2);
  }
  remove(I2, g2) {
    A.rawimpulsejointset_remove(this.ptr, I2, g2);
  }
  len() {
    return A.rawimpulsejointset_len(this.ptr) >>> 0;
  }
  contains(I2) {
    return A.rawimpulsejointset_contains(this.ptr, I2) !== 0;
  }
  forEachJointHandle(g2) {
    try {
      A.rawimpulsejointset_forEachJointHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(g2, C2) {
    try {
      A.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, g2, J(C2));
    } finally {
      I[y++] = void 0;
    }
  }
}
class Z {
  static __wrap(A2) {
    const I2 = Object.create(Z.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawintegrationparameters_free(I2);
  }
  constructor() {
    const I2 = A.rawintegrationparameters_new();
    return Z.__wrap(I2);
  }
  get dt() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  get erp() {
    return A.rawintegrationparameters_erp(this.ptr);
  }
  get allowedLinearError() {
    return A.rawintegrationparameters_allowedLinearError(this.ptr);
  }
  get predictionDistance() {
    return A.rawintegrationparameters_predictionDistance(this.ptr);
  }
  get maxVelocityIterations() {
    return A.rawintegrationparameters_maxVelocityIterations(this.ptr) >>> 0;
  }
  get maxVelocityFrictionIterations() {
    return A.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr) >>> 0;
  }
  get maxStabilizationIterations() {
    return A.rawintegrationparameters_maxStabilizationIterations(this.ptr) >>> 0;
  }
  get minIslandSize() {
    return A.rawintegrationparameters_minIslandSize(this.ptr) >>> 0;
  }
  get maxCcdSubsteps() {
    return A.rawintegrationparameters_maxCcdSubsteps(this.ptr) >>> 0;
  }
  set dt(I2) {
    A.rawintegrationparameters_set_dt(this.ptr, I2);
  }
  set erp(I2) {
    A.rawintegrationparameters_set_erp(this.ptr, I2);
  }
  set allowedLinearError(I2) {
    A.rawintegrationparameters_set_allowedLinearError(this.ptr, I2);
  }
  set predictionDistance(I2) {
    A.rawintegrationparameters_set_predictionDistance(this.ptr, I2);
  }
  set maxVelocityIterations(I2) {
    A.rawintegrationparameters_set_maxVelocityIterations(this.ptr, I2);
  }
  set maxVelocityFrictionIterations(I2) {
    A.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, I2);
  }
  set maxStabilizationIterations(I2) {
    A.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, I2);
  }
  set minIslandSize(I2) {
    A.rawintegrationparameters_set_minIslandSize(this.ptr, I2);
  }
  set maxCcdSubsteps(I2) {
    A.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, I2);
  }
}
class x {
  static __wrap(A2) {
    const I2 = Object.create(x.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawislandmanager_free(I2);
  }
  constructor() {
    const I2 = A.rawislandmanager_new();
    return x.__wrap(I2);
  }
  forEachActiveRigidBodyHandle(g2) {
    try {
      A.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
}
class W {
  static __wrap(A2) {
    const I2 = Object.create(W.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawkinematiccharactercontroller_free(I2);
  }
  constructor(I2) {
    const g2 = A.rawkinematiccharactercontroller_new(I2);
    return W.__wrap(g2);
  }
  up() {
    const I2 = A.rawkinematiccharactercontroller_up(this.ptr);
    return BA.__wrap(I2);
  }
  setUp(I2) {
    K(I2, BA), A.rawkinematiccharactercontroller_setUp(this.ptr, I2.ptr);
  }
  offset() {
    return A.rawkinematiccharactercontroller_offset(this.ptr);
  }
  setOffset(I2) {
    A.rawkinematiccharactercontroller_setOffset(this.ptr, I2);
  }
  slideEnabled() {
    return A.rawkinematiccharactercontroller_slideEnabled(this.ptr) !== 0;
  }
  setSlideEnabled(I2) {
    A.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, I2);
  }
  autostepMaxHeight() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_autostepMaxHeight(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = U()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepMinWidth() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_autostepMinWidth(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = U()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepIncludesDynamicBodies() {
    const I2 = A.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.ptr);
    return I2 === 16777215 ? void 0 : I2 !== 0;
  }
  autostepEnabled() {
    return A.rawkinematiccharactercontroller_autostepEnabled(this.ptr) !== 0;
  }
  enableAutostep(I2, g2, C2) {
    A.rawkinematiccharactercontroller_enableAutostep(this.ptr, I2, g2, C2);
  }
  disableAutostep() {
    A.rawkinematiccharactercontroller_disableAutostep(this.ptr);
  }
  maxSlopeClimbAngle() {
    return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
  }
  setMaxSlopeClimbAngle(I2) {
    A.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, I2);
  }
  minSlopeSlideAngle() {
    return A.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
  }
  setMinSlopeSlideAngle(I2) {
    A.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, I2);
  }
  snapToGroundDistance() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_snapToGroundDistance(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = U()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  enableSnapToGround(I2) {
    A.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, I2);
  }
  disableSnapToGround() {
    A.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
  }
  snapToGroundEnabled() {
    return A.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr) !== 0;
  }
  computeColliderMovement(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      K(C2, v), K(B2, l), K(Q2, m), K(D2, BA), A.rawkinematiccharactercontroller_computeColliderMovement(this.ptr, g2, C2.ptr, B2.ptr, Q2.ptr, i2, D2.ptr, o2, !E(G2), E(G2) ? 0 : G2, w2, !E(S2), E(S2) ? 0 : S2, J(k2));
    } finally {
      I[y++] = void 0;
    }
  }
  computedMovement() {
    const I2 = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return BA.__wrap(I2);
  }
  computedGrounded() {
    return A.rawkinematiccharactercontroller_computedGrounded(this.ptr) !== 0;
  }
  numComputedCollisions() {
    return A.rawkinematiccharactercontroller_numComputedCollisions(this.ptr) >>> 0;
  }
  computedCollision(I2, g2) {
    K(g2, H);
    return A.rawkinematiccharactercontroller_computedCollision(this.ptr, I2, g2.ptr) !== 0;
  }
}
class b {
  static __wrap(A2) {
    const I2 = Object.create(b.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawmultibodyjointset_free(I2);
  }
  jointType(I2) {
    return A.rawmultibodyjointset_jointType(this.ptr, I2) >>> 0;
  }
  jointFrameX1(I2) {
    const g2 = A.rawmultibodyjointset_jointFrameX1(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointFrameX2(I2) {
    const g2 = A.rawmultibodyjointset_jointFrameX2(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointAnchor1(I2) {
    const g2 = A.rawmultibodyjointset_jointAnchor1(this.ptr, I2);
    return BA.__wrap(g2);
  }
  jointAnchor2(I2) {
    const g2 = A.rawmultibodyjointset_jointAnchor2(this.ptr, I2);
    return BA.__wrap(g2);
  }
  jointContactsEnabled(I2) {
    return A.rawmultibodyjointset_jointContactsEnabled(this.ptr, I2) !== 0;
  }
  jointSetContactsEnabled(I2, g2) {
    A.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, I2, g2);
  }
  jointLimitsEnabled(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsEnabled(this.ptr, I2, g2) !== 0;
  }
  jointLimitsMin(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsMin(this.ptr, I2, g2);
  }
  jointLimitsMax(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsMax(this.ptr, I2, g2);
  }
  constructor() {
    const I2 = A.rawmultibodyjointset_new();
    return b.__wrap(I2);
  }
  createJoint(I2, g2, C2, B2) {
    K(I2, O);
    return A.rawmultibodyjointset_createJoint(this.ptr, I2.ptr, g2, C2, B2);
  }
  remove(I2, g2) {
    A.rawmultibodyjointset_remove(this.ptr, I2, g2);
  }
  contains(I2) {
    return A.rawmultibodyjointset_contains(this.ptr, I2) !== 0;
  }
  forEachJointHandle(g2) {
    try {
      A.rawmultibodyjointset_forEachJointHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(g2, C2) {
    try {
      A.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, g2, J(C2));
    } finally {
      I[y++] = void 0;
    }
  }
}
class j {
  static __wrap(A2) {
    const I2 = Object.create(j.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawnarrowphase_free(I2);
  }
  constructor() {
    const I2 = A.rawnarrowphase_new();
    return j.__wrap(I2);
  }
  contacts_with(I2, g2) {
    A.rawnarrowphase_contacts_with(this.ptr, I2, Q(g2));
  }
  contact_pair(I2, g2) {
    const C2 = A.rawnarrowphase_contact_pair(this.ptr, I2, g2);
    return C2 === 0 ? void 0 : r.__wrap(C2);
  }
  intersections_with(I2, g2) {
    A.rawnarrowphase_intersections_with(this.ptr, I2, Q(g2));
  }
  intersection_pair(I2, g2) {
    return A.rawnarrowphase_intersection_pair(this.ptr, I2, g2) !== 0;
  }
}
class f {
  static __wrap(A2) {
    const I2 = Object.create(f.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawphysicspipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawphysicspipeline_new();
    return f.__wrap(I2);
  }
  step(I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    K(I2, BA), K(g2, Z), K(C2, x), K(B2, Y), K(Q2, j), K(E2, v), K(i2, l), K(D2, n), K(o2, b), K(G2, L), A.rawphysicspipeline_step(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr);
  }
  stepWithEvents(I2, g2, C2, B2, E2, i2, D2, o2, G2, w2, S2, k2, a2, U2) {
    K(I2, BA), K(g2, Z), K(C2, x), K(B2, Y), K(E2, j), K(i2, v), K(D2, l), K(o2, n), K(G2, b), K(w2, L), K(S2, d), A.rawphysicspipeline_stepWithEvents(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr, w2.ptr, S2.ptr, Q(k2), Q(a2), Q(U2));
  }
}
class V {
  static __wrap(A2) {
    const I2 = Object.create(V.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawpointcolliderprojection_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  point() {
    const I2 = A.rawpointcolliderprojection_point(this.ptr);
    return BA.__wrap(I2);
  }
  isInside() {
    return A.rawpointcolliderprojection_isInside(this.ptr) !== 0;
  }
  featureType() {
    return A.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawpointcolliderprojection_featureId(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class P {
  static __wrap(A2) {
    const I2 = Object.create(P.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawpointprojection_free(I2);
  }
  point() {
    const I2 = A.rawkinematiccharactercontroller_up(this.ptr);
    return BA.__wrap(I2);
  }
  isInside() {
    return A.rawpointprojection_isInside(this.ptr) !== 0;
  }
}
class m {
  static __wrap(A2) {
    const I2 = Object.create(m.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawquerypipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawquerypipeline_new();
    return m.__wrap(I2);
  }
  update(I2, g2, C2) {
    K(I2, x), K(g2, v), K(C2, l), A.rawquerypipeline_update(this.ptr, I2.ptr, g2.ptr, C2.ptr);
  }
  castRay(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA), K(Q2, BA);
      const a2 = A.rawquerypipeline_castRay(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2, D2, o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, J(k2));
      return a2 === 0 ? void 0 : u.__wrap(a2);
    } finally {
      I[y++] = void 0;
    }
  }
  castRayAndGetNormal(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA), K(Q2, BA);
      const a2 = A.rawquerypipeline_castRayAndGetNormal(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2, D2, o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, J(k2));
      return a2 === 0 ? void 0 : X.__wrap(a2);
    } finally {
      I[y++] = void 0;
    }
  }
  intersectionsWithRay(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2, a2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA), K(Q2, BA), A.rawquerypipeline_intersectionsWithRay(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2, D2, J(o2), G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, !E(k2), E(k2) ? 0 : k2, J(a2));
    } finally {
      I[y++] = void 0, I[y++] = void 0;
    }
  }
  intersectionWithShape(g2, C2, B2, Q2, i2, o2, w2, S2, k2, a2) {
    try {
      const M2 = A.__wbindgen_add_to_stack_pointer(-16);
      K(g2, v), K(C2, l), K(B2, BA), K(Q2, _), K(i2, AA), A.rawquerypipeline_intersectionWithShape(M2, this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2.ptr, o2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, !E(k2), E(k2) ? 0 : k2, J(a2));
      var U2 = G()[M2 / 4 + 0], h2 = D()[M2 / 8 + 1];
      return U2 === 0 ? void 0 : h2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16), I[y++] = void 0;
    }
  }
  projectPoint(g2, C2, B2, Q2, i2, D2, o2, G2, w2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA);
      const S2 = A.rawquerypipeline_projectPoint(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, !E(G2), E(G2) ? 0 : G2, J(w2));
      return S2 === 0 ? void 0 : V.__wrap(S2);
    } finally {
      I[y++] = void 0;
    }
  }
  projectPointAndGetFeature(g2, C2, B2, Q2, i2, D2, o2, G2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA);
      const w2 = A.rawquerypipeline_projectPointAndGetFeature(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, !E(i2), E(i2) ? 0 : i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, J(G2));
      return w2 === 0 ? void 0 : V.__wrap(w2);
    } finally {
      I[y++] = void 0;
    }
  }
  intersectionsWithPoint(g2, C2, B2, Q2, i2, D2, o2, G2, w2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA), A.rawquerypipeline_intersectionsWithPoint(this.ptr, g2.ptr, C2.ptr, B2.ptr, J(Q2), i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, !E(G2), E(G2) ? 0 : G2, J(w2));
    } finally {
      I[y++] = void 0, I[y++] = void 0;
    }
  }
  castShape(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2, a2, U2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA), K(Q2, _), K(i2, BA), K(D2, AA);
      const h2 = A.rawquerypipeline_castShape(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2.ptr, D2.ptr, o2, G2, w2, !E(S2), E(S2) ? 0 : S2, !E(k2), E(k2) ? 0 : k2, !E(a2), E(a2) ? 0 : a2, J(U2));
      return h2 === 0 ? void 0 : IA.__wrap(h2);
    } finally {
      I[y++] = void 0;
    }
  }
  intersectionsWithShape(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      K(g2, v), K(C2, l), K(B2, BA), K(Q2, _), K(i2, AA), A.rawquerypipeline_intersectionsWithShape(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2.ptr, J(D2), o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, J(k2));
    } finally {
      I[y++] = void 0, I[y++] = void 0;
    }
  }
  collidersWithAabbIntersectingAabb(g2, C2, B2) {
    try {
      K(g2, BA), K(C2, BA), A.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, g2.ptr, C2.ptr, J(B2));
    } finally {
      I[y++] = void 0;
    }
  }
}
class X {
  static __wrap(A2) {
    const I2 = Object.create(X.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawraycolliderintersection_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  normal() {
    const I2 = A.rawraycolliderintersection_normal(this.ptr);
    return BA.__wrap(I2);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.ptr);
  }
  featureType() {
    return A.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawpointcolliderprojection_featureId(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class u {
  static __wrap(A2) {
    const I2 = Object.create(u.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawraycollidertoi_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.ptr);
  }
}
class z {
  static __wrap(A2) {
    const I2 = Object.create(z.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrayintersection_free(I2);
  }
  normal() {
    const I2 = A.rawrayintersection_normal(this.ptr);
    return BA.__wrap(I2);
  }
  toi() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  featureType() {
    return A.rawrayintersection_featureType(this.ptr) >>> 0;
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawrayintersection_featureId(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class v {
  static __wrap(A2) {
    const I2 = Object.create(v.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrigidbodyset_free(I2);
  }
  rbTranslation(I2) {
    const g2 = A.rawrigidbodyset_rbTranslation(this.ptr, I2);
    return BA.__wrap(g2);
  }
  rbRotation(I2) {
    const g2 = A.rawrigidbodyset_rbRotation(this.ptr, I2);
    return _.__wrap(g2);
  }
  rbSleep(I2) {
    A.rawrigidbodyset_rbSleep(this.ptr, I2);
  }
  rbIsSleeping(I2) {
    return A.rawrigidbodyset_rbIsSleeping(this.ptr, I2) !== 0;
  }
  rbIsMoving(I2) {
    return A.rawrigidbodyset_rbIsMoving(this.ptr, I2) !== 0;
  }
  rbNextTranslation(I2) {
    const g2 = A.rawrigidbodyset_rbNextTranslation(this.ptr, I2);
    return BA.__wrap(g2);
  }
  rbNextRotation(I2) {
    const g2 = A.rawrigidbodyset_rbNextRotation(this.ptr, I2);
    return _.__wrap(g2);
  }
  rbSetTranslation(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetTranslation(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbSetRotation(I2, g2, C2, B2, Q2, E2) {
    A.rawrigidbodyset_rbSetRotation(this.ptr, I2, g2, C2, B2, Q2, E2);
  }
  rbSetLinvel(I2, g2, C2) {
    K(g2, BA), A.rawrigidbodyset_rbSetLinvel(this.ptr, I2, g2.ptr, C2);
  }
  rbSetAngvel(I2, g2, C2) {
    K(g2, BA), A.rawrigidbodyset_rbSetAngvel(this.ptr, I2, g2.ptr, C2);
  }
  rbSetNextKinematicTranslation(I2, g2, C2, B2) {
    A.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, I2, g2, C2, B2);
  }
  rbSetNextKinematicRotation(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbRecomputeMassPropertiesFromColliders(I2, g2) {
    K(g2, l), A.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr, I2, g2.ptr);
  }
  rbSetAdditionalMass(I2, g2, C2) {
    A.rawrigidbodyset_rbSetAdditionalMass(this.ptr, I2, g2, C2);
  }
  rbSetAdditionalMassProperties(I2, g2, C2, B2, Q2, E2) {
    K(C2, BA), K(B2, BA), K(Q2, _), A.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr, I2, g2, C2.ptr, B2.ptr, Q2.ptr, E2);
  }
  rbLinvel(I2) {
    const g2 = A.rawrigidbodyset_rbLinvel(this.ptr, I2);
    return BA.__wrap(g2);
  }
  rbAngvel(I2) {
    const g2 = A.rawrigidbodyset_rbAngvel(this.ptr, I2);
    return BA.__wrap(g2);
  }
  rbLockTranslations(I2, g2, C2) {
    A.rawrigidbodyset_rbLockTranslations(this.ptr, I2, g2, C2);
  }
  rbSetEnabledTranslations(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbLockRotations(I2, g2, C2) {
    A.rawrigidbodyset_rbLockRotations(this.ptr, I2, g2, C2);
  }
  rbSetEnabledRotations(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetEnabledRotations(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbDominanceGroup(I2) {
    return A.rawrigidbodyset_rbDominanceGroup(this.ptr, I2);
  }
  rbSetDominanceGroup(I2, g2) {
    A.rawrigidbodyset_rbSetDominanceGroup(this.ptr, I2, g2);
  }
  rbEnableCcd(I2, g2) {
    A.rawrigidbodyset_rbEnableCcd(this.ptr, I2, g2);
  }
  rbMass(I2) {
    return A.rawrigidbodyset_rbMass(this.ptr, I2);
  }
  rbWakeUp(I2) {
    A.rawrigidbodyset_rbWakeUp(this.ptr, I2);
  }
  rbIsCcdEnabled(I2) {
    return A.rawrigidbodyset_rbIsCcdEnabled(this.ptr, I2) !== 0;
  }
  rbNumColliders(I2) {
    return A.rawrigidbodyset_rbNumColliders(this.ptr, I2) >>> 0;
  }
  rbCollider(I2, g2) {
    return A.rawrigidbodyset_rbCollider(this.ptr, I2, g2);
  }
  rbBodyType(I2) {
    return A.rawrigidbodyset_rbBodyType(this.ptr, I2) >>> 0;
  }
  rbSetBodyType(I2, g2) {
    A.rawrigidbodyset_rbSetBodyType(this.ptr, I2, g2);
  }
  rbIsFixed(I2) {
    return A.rawrigidbodyset_rbIsFixed(this.ptr, I2) !== 0;
  }
  rbIsKinematic(I2) {
    return A.rawrigidbodyset_rbIsKinematic(this.ptr, I2) !== 0;
  }
  rbIsDynamic(I2) {
    return A.rawrigidbodyset_rbIsDynamic(this.ptr, I2) !== 0;
  }
  rbLinearDamping(I2) {
    return A.rawrigidbodyset_rbLinearDamping(this.ptr, I2);
  }
  rbAngularDamping(I2) {
    return A.rawrigidbodyset_rbAngularDamping(this.ptr, I2);
  }
  rbSetLinearDamping(I2, g2) {
    A.rawrigidbodyset_rbSetLinearDamping(this.ptr, I2, g2);
  }
  rbSetAngularDamping(I2, g2) {
    A.rawrigidbodyset_rbSetAngularDamping(this.ptr, I2, g2);
  }
  rbGravityScale(I2) {
    return A.rawrigidbodyset_rbGravityScale(this.ptr, I2);
  }
  rbSetGravityScale(I2, g2, C2) {
    A.rawrigidbodyset_rbSetGravityScale(this.ptr, I2, g2, C2);
  }
  rbResetForces(I2, g2) {
    A.rawrigidbodyset_rbResetForces(this.ptr, I2, g2);
  }
  rbResetTorques(I2, g2) {
    A.rawrigidbodyset_rbResetTorques(this.ptr, I2, g2);
  }
  rbAddForce(I2, g2, C2) {
    K(g2, BA), A.rawrigidbodyset_rbAddForce(this.ptr, I2, g2.ptr, C2);
  }
  rbApplyImpulse(I2, g2, C2) {
    K(g2, BA), A.rawrigidbodyset_rbApplyImpulse(this.ptr, I2, g2.ptr, C2);
  }
  rbAddTorque(I2, g2, C2) {
    K(g2, BA), A.rawrigidbodyset_rbAddTorque(this.ptr, I2, g2.ptr, C2);
  }
  rbApplyTorqueImpulse(I2, g2, C2) {
    K(g2, BA), A.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, I2, g2.ptr, C2);
  }
  rbAddForceAtPoint(I2, g2, C2, B2) {
    K(g2, BA), K(C2, BA), A.rawrigidbodyset_rbAddForceAtPoint(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  rbApplyImpulseAtPoint(I2, g2, C2, B2) {
    K(g2, BA), K(C2, BA), A.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  rbUserData(I2) {
    return A.rawrigidbodyset_rbUserData(this.ptr, I2) >>> 0;
  }
  rbSetUserData(I2, g2) {
    A.rawrigidbodyset_rbSetUserData(this.ptr, I2, g2);
  }
  constructor() {
    const I2 = A.rawrigidbodyset_new();
    return v.__wrap(I2);
  }
  createRigidBody(I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, S2, k2, a2, U2, y2, J2, h2, M2, N2, F2, q2, R2) {
    K(I2, BA), K(g2, _), K(E2, BA), K(i2, BA), K(D2, BA), K(o2, BA), K(G2, _);
    return A.rawrigidbodyset_createRigidBody(this.ptr, I2.ptr, g2.ptr, C2, B2, Q2, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr, w2, S2, k2, a2, U2, y2, J2, h2, M2, N2, F2, q2, R2);
  }
  remove(I2, g2, C2, B2, Q2) {
    K(g2, x), K(C2, l), K(B2, n), K(Q2, b), A.rawrigidbodyset_remove(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2.ptr);
  }
  len() {
    return A.rawrigidbodyset_len(this.ptr) >>> 0;
  }
  contains(I2) {
    return A.rawrigidbodyset_contains(this.ptr, I2) !== 0;
  }
  forEachRigidBodyHandle(g2) {
    try {
      A.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
}
class _ {
  static __wrap(A2) {
    const I2 = Object.create(_.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrotation_free(I2);
  }
  constructor(I2, g2, C2, B2) {
    const Q2 = A.rawrotation_new(I2, g2, C2, B2);
    return _.__wrap(Q2);
  }
  static identity() {
    const I2 = A.rawrotation_identity();
    return _.__wrap(I2);
  }
  get x() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  get y() {
    return A.rawrotation_y(this.ptr);
  }
  get z() {
    return A.rawintegrationparameters_erp(this.ptr);
  }
  get w() {
    return A.rawrotation_w(this.ptr);
  }
}
class $ {
  static __wrap(A2) {
    const I2 = Object.create($.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawserializationpipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawserializationpipeline_new();
    return $.__wrap(I2);
  }
  serializeAll(I2, g2, C2, Q2, E2, i2, D2, o2, G2) {
    K(I2, BA), K(g2, Z), K(C2, x), K(Q2, Y), K(E2, j), K(i2, v), K(D2, l), K(o2, n), K(G2, b);
    return B(A.rawserializationpipeline_serializeAll(this.ptr, I2.ptr, g2.ptr, C2.ptr, Q2.ptr, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr));
  }
  deserializeAll(I2) {
    const g2 = A.rawserializationpipeline_deserializeAll(this.ptr, Q(I2));
    return g2 === 0 ? void 0 : T.__wrap(g2);
  }
}
class AA {
  static __wrap(A2) {
    const I2 = Object.create(AA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshape_free(I2);
  }
  static cuboid(I2, g2, C2) {
    const B2 = A.rawshape_cuboid(I2, g2, C2);
    return AA.__wrap(B2);
  }
  static roundCuboid(I2, g2, C2, B2) {
    const Q2 = A.rawshape_roundCuboid(I2, g2, C2, B2);
    return AA.__wrap(Q2);
  }
  static ball(I2) {
    const g2 = A.rawshape_ball(I2);
    return AA.__wrap(g2);
  }
  static halfspace(I2) {
    K(I2, BA);
    const g2 = A.rawshape_halfspace(I2.ptr);
    return AA.__wrap(g2);
  }
  static capsule(I2, g2) {
    const C2 = A.rawshape_capsule(I2, g2);
    return AA.__wrap(C2);
  }
  static cylinder(I2, g2) {
    const C2 = A.rawshape_cylinder(I2, g2);
    return AA.__wrap(C2);
  }
  static roundCylinder(I2, g2, C2) {
    const B2 = A.rawshape_roundCylinder(I2, g2, C2);
    return AA.__wrap(B2);
  }
  static cone(I2, g2) {
    const C2 = A.rawshape_cone(I2, g2);
    return AA.__wrap(C2);
  }
  static roundCone(I2, g2, C2) {
    const B2 = A.rawshape_roundCone(I2, g2, C2);
    return AA.__wrap(B2);
  }
  static polyline(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_polyline(C2, B2, Q2, E2);
    return AA.__wrap(i2);
  }
  static trimesh(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_trimesh(C2, B2, Q2, E2);
    return AA.__wrap(i2);
  }
  static heightfield(I2, g2, C2, B2) {
    const Q2 = q(C2, A.__wbindgen_malloc), E2 = F;
    K(B2, BA);
    const i2 = A.rawshape_heightfield(I2, g2, Q2, E2, B2.ptr);
    return AA.__wrap(i2);
  }
  static segment(I2, g2) {
    K(I2, BA), K(g2, BA);
    const C2 = A.rawshape_segment(I2.ptr, g2.ptr);
    return AA.__wrap(C2);
  }
  static triangle(I2, g2, C2) {
    K(I2, BA), K(g2, BA), K(C2, BA);
    const B2 = A.rawshape_triangle(I2.ptr, g2.ptr, C2.ptr);
    return AA.__wrap(B2);
  }
  static roundTriangle(I2, g2, C2, B2) {
    K(I2, BA), K(g2, BA), K(C2, BA);
    const Q2 = A.rawshape_roundTriangle(I2.ptr, g2.ptr, C2.ptr, B2);
    return AA.__wrap(Q2);
  }
  static convexHull(I2) {
    const g2 = q(I2, A.__wbindgen_malloc), C2 = F, B2 = A.rawshape_convexHull(g2, C2);
    return B2 === 0 ? void 0 : AA.__wrap(B2);
  }
  static roundConvexHull(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = A.rawshape_roundConvexHull(C2, B2, g2);
    return Q2 === 0 ? void 0 : AA.__wrap(Q2);
  }
  static convexMesh(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_convexMesh(C2, B2, Q2, E2);
    return i2 === 0 ? void 0 : AA.__wrap(i2);
  }
  static roundConvexMesh(I2, g2, C2) {
    const B2 = q(I2, A.__wbindgen_malloc), Q2 = F, E2 = R(g2, A.__wbindgen_malloc), i2 = F, D2 = A.rawshape_roundConvexMesh(B2, Q2, E2, i2, C2);
    return D2 === 0 ? void 0 : AA.__wrap(D2);
  }
  castShape(I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    K(I2, BA), K(g2, _), K(C2, BA), K(B2, AA), K(Q2, BA), K(E2, _), K(i2, BA);
    const G2 = A.rawshape_castShape(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2.ptr, i2.ptr, D2, o2);
    return G2 === 0 ? void 0 : CA.__wrap(G2);
  }
  intersectsShape(I2, g2, C2, B2, Q2) {
    K(I2, BA), K(g2, _), K(C2, AA), K(B2, BA), K(Q2, _);
    return A.rawshape_intersectsShape(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr) !== 0;
  }
  contactShape(I2, g2, C2, B2, Q2, E2) {
    K(I2, BA), K(g2, _), K(C2, AA), K(B2, BA), K(Q2, _);
    const i2 = A.rawshape_contactShape(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2);
    return i2 === 0 ? void 0 : gA.__wrap(i2);
  }
  containsPoint(I2, g2, C2) {
    K(I2, BA), K(g2, _), K(C2, BA);
    return A.rawshape_containsPoint(this.ptr, I2.ptr, g2.ptr, C2.ptr) !== 0;
  }
  projectPoint(I2, g2, C2, B2) {
    K(I2, BA), K(g2, _), K(C2, BA);
    const Q2 = A.rawshape_projectPoint(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2);
    return P.__wrap(Q2);
  }
  intersectsRay(I2, g2, C2, B2, Q2) {
    K(I2, BA), K(g2, _), K(C2, BA), K(B2, BA);
    return A.rawshape_intersectsRay(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2) !== 0;
  }
  castRay(I2, g2, C2, B2, Q2, E2) {
    K(I2, BA), K(g2, _), K(C2, BA), K(B2, BA);
    return A.rawshape_castRay(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, E2);
  }
  castRayAndGetNormal(I2, g2, C2, B2, Q2, E2) {
    K(I2, BA), K(g2, _), K(C2, BA), K(B2, BA);
    const i2 = A.rawshape_castRayAndGetNormal(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, E2);
    return i2 === 0 ? void 0 : z.__wrap(i2);
  }
}
class IA {
  static __wrap(A2) {
    const I2 = Object.create(IA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapecollidertoi_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.ptr);
  }
  witness1() {
    const I2 = A.rawraycolliderintersection_normal(this.ptr);
    return BA.__wrap(I2);
  }
  witness2() {
    const I2 = A.rawshapecollidertoi_witness2(this.ptr);
    return BA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawcharactercollision_translationApplied(this.ptr);
    return BA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawcharactercollision_translationRemaining(this.ptr);
    return BA.__wrap(I2);
  }
}
class gA {
  static __wrap(A2) {
    const I2 = Object.create(gA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapecontact_free(I2);
  }
  distance() {
    return A.rawshapecontact_distance(this.ptr);
  }
  point1() {
    const I2 = A.rawkinematiccharactercontroller_up(this.ptr);
    return BA.__wrap(I2);
  }
  point2() {
    const I2 = A.rawshapecontact_point2(this.ptr);
    return BA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawshapecontact_normal1(this.ptr);
    return BA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawshapecontact_normal2(this.ptr);
    return BA.__wrap(I2);
  }
}
class CA {
  static __wrap(A2) {
    const I2 = Object.create(CA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapetoi_free(I2);
  }
  toi() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  witness1() {
    const I2 = A.rawrayintersection_normal(this.ptr);
    return BA.__wrap(I2);
  }
  witness2() {
    const I2 = A.rawshapetoi_witness2(this.ptr);
    return BA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawshapetoi_normal1(this.ptr);
    return BA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawshapetoi_normal2(this.ptr);
    return BA.__wrap(I2);
  }
}
class BA {
  static __wrap(A2) {
    const I2 = Object.create(BA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawvector_free(I2);
  }
  static zero() {
    const I2 = A.rawvector_zero();
    return BA.__wrap(I2);
  }
  constructor(I2, g2, C2) {
    const B2 = A.rawvector_new(I2, g2, C2);
    return BA.__wrap(B2);
  }
  get x() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  set x(I2) {
    A.rawintegrationparameters_set_dt(this.ptr, I2);
  }
  get y() {
    return A.rawrotation_y(this.ptr);
  }
  set y(I2) {
    A.rawvector_set_y(this.ptr, I2);
  }
  get z() {
    return A.rawintegrationparameters_erp(this.ptr);
  }
  set z(I2) {
    A.rawintegrationparameters_set_erp(this.ptr, I2);
  }
  xyz() {
    const I2 = A.rawvector_xyz(this.ptr);
    return BA.__wrap(I2);
  }
  yxz() {
    const I2 = A.rawvector_yxz(this.ptr);
    return BA.__wrap(I2);
  }
  zxy() {
    const I2 = A.rawvector_zxy(this.ptr);
    return BA.__wrap(I2);
  }
  xzy() {
    const I2 = A.rawvector_xzy(this.ptr);
    return BA.__wrap(I2);
  }
  yzx() {
    const I2 = A.rawvector_yzx(this.ptr);
    return BA.__wrap(I2);
  }
  zyx() {
    const I2 = A.rawvector_zyx(this.ptr);
    return BA.__wrap(I2);
  }
}
async function QA(I2) {
  I2 === void 0 && (I2 = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
  const C2 = function() {
    const I3 = {wbg: {}};
    return I3.wbg.__wbindgen_object_drop_ref = function(A2) {
      B(A2);
    }, I3.wbg.__wbindgen_number_new = function(A2) {
      return Q(A2);
    }, I3.wbg.__wbindgen_number_get = function(A2, I4) {
      const C3 = g(I4), B2 = typeof C3 == "number" ? C3 : void 0;
      D()[A2 / 8 + 1] = E(B2) ? 0 : B2, G()[A2 / 4 + 0] = !E(B2);
    }, I3.wbg.__wbindgen_boolean_get = function(A2) {
      const I4 = g(A2);
      return typeof I4 == "boolean" ? I4 ? 1 : 0 : 2;
    }, I3.wbg.__wbindgen_is_function = function(A2) {
      return typeof g(A2) == "function";
    }, I3.wbg.__wbg_rawraycolliderintersection_new = function(A2) {
      return Q(X.__wrap(A2));
    }, I3.wbg.__wbg_rawcontactforceevent_new = function(A2) {
      return Q(t.__wrap(A2));
    }, I3.wbg.__wbg_call_168da88779e35f61 = function() {
      return s(function(A2, I4, C3) {
        return Q(g(A2).call(g(I4), g(C3)));
      }, arguments);
    }, I3.wbg.__wbg_call_3999bee59e9f7719 = function() {
      return s(function(A2, I4, C3, B2) {
        return Q(g(A2).call(g(I4), g(C3), g(B2)));
      }, arguments);
    }, I3.wbg.__wbg_call_e1f72c051cdab859 = function() {
      return s(function(A2, I4, C3, B2, E2) {
        return Q(g(A2).call(g(I4), g(C3), g(B2), g(E2)));
      }, arguments);
    }, I3.wbg.__wbg_bind_10dfe70e95d2a480 = function(A2, I4, C3, B2) {
      return Q(g(A2).bind(g(I4), g(C3), g(B2)));
    }, I3.wbg.__wbg_buffer_3f3d764d4747d564 = function(A2) {
      return Q(g(A2).buffer);
    }, I3.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(A2, I4, C3) {
      return Q(new Uint8Array(g(A2), I4 >>> 0, C3 >>> 0));
    }, I3.wbg.__wbg_new_8c3f0052272a457a = function(A2) {
      return Q(new Uint8Array(g(A2)));
    }, I3.wbg.__wbg_set_83db9690f9353e79 = function(A2, I4, C3) {
      g(A2).set(g(I4), C3 >>> 0);
    }, I3.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(A2) {
      return g(A2).length;
    }, I3.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4 = function(A2, I4, C3) {
      return Q(new Float32Array(g(A2), I4 >>> 0, C3 >>> 0));
    }, I3.wbg.__wbg_set_0e0314cf6675c1b9 = function(A2, I4, C3) {
      g(A2).set(g(I4), C3 >>> 0);
    }, I3.wbg.__wbg_length_9a2deed95d22668d = function(A2) {
      return g(A2).length;
    }, I3.wbg.__wbg_newwithlength_a7168e4a1e8f5e12 = function(A2) {
      return Q(new Float32Array(A2 >>> 0));
    }, I3.wbg.__wbindgen_throw = function(A2, I4) {
      throw new Error(k(A2, I4));
    }, I3.wbg.__wbindgen_memory = function() {
      return Q(A.memory);
    }, I3;
  }();
  (typeof I2 == "string" || typeof Request == "function" && I2 instanceof Request || typeof URL == "function" && I2 instanceof URL) && (I2 = fetch(I2));
  const {instance: w2, module: K2} = await async function(A2, I3) {
    if (typeof Response == "function" && A2 instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function")
        try {
          return await WebAssembly.instantiateStreaming(A2, I3);
        } catch (I4) {
          if (A2.headers.get("Content-Type") == "application/wasm")
            throw I4;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", I4);
        }
      const g2 = await A2.arrayBuffer();
      return await WebAssembly.instantiate(g2, I3);
    }
    {
      const g2 = await WebAssembly.instantiate(A2, I3);
      return g2 instanceof WebAssembly.Instance ? {instance: g2, module: A2} : g2;
    }
  }(await I2, C2);
  return function(I3, g2) {
    return A = I3.exports, QA.__wbindgen_wasm_module = g2, a = new Float32Array(), i = new Float64Array(), o = new Int32Array(), M = new Uint32Array(), S = new Uint8Array(), A;
  }(w2, K2);
}
class EA {
  constructor(A2, I2, g2) {
    this.x = A2, this.y = I2, this.z = g2;
  }
}
class iA {
  static new(A2, I2, g2) {
    return new EA(A2, I2, g2);
  }
  static intoRaw(A2) {
    return new BA(A2.x, A2.y, A2.z);
  }
  static zeros() {
    return iA.new(0, 0, 0);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    let I2 = iA.new(A2.x, A2.y, A2.z);
    return A2.free(), I2;
  }
  static copy(A2, I2) {
    A2.x = I2.x, A2.y = I2.y, A2.z = I2.z;
  }
}
class DA {
  constructor(A2, I2, g2, C2) {
    this.x = A2, this.y = I2, this.z = g2, this.w = C2;
  }
}
class oA {
  static identity() {
    return new DA(0, 0, 0, 1);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    let I2 = new DA(A2.x, A2.y, A2.z, A2.w);
    return A2.free(), I2;
  }
  static intoRaw(A2) {
    return new _(A2.x, A2.y, A2.z, A2.w);
  }
  static copy(A2, I2) {
    A2.x = I2.x, A2.y = I2.y, A2.z = I2.z, A2.w = I2.w;
  }
}
var GA, wA, SA, kA, KA, aA, UA, yA, JA, hA, MA, NA;
!function(A2) {
  A2[A2.Dynamic = 0] = "Dynamic", A2[A2.Fixed = 1] = "Fixed", A2[A2.KinematicPositionBased = 2] = "KinematicPositionBased", A2[A2.KinematicVelocityBased = 3] = "KinematicVelocityBased";
}(GA || (GA = {}));
class FA {
  constructor(A2, I2, g2) {
    this.rawSet = A2, this.colliderSet = I2, this.handle = g2;
  }
  finalizeDeserialization(A2) {
    this.colliderSet = A2;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  lockTranslations(A2, I2) {
    return this.rawSet.rbLockTranslations(this.handle, A2, I2);
  }
  lockRotations(A2, I2) {
    return this.rawSet.rbLockRotations(this.handle, A2, I2);
  }
  setEnabledTranslations(A2, I2, g2, C2) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, A2, I2, g2, C2);
  }
  restrictTranslations(A2, I2, g2, C2) {
    this.setEnabledTranslations(A2, I2, g2, C2);
  }
  setEnabledRotations(A2, I2, g2, C2) {
    return this.rawSet.rbSetEnabledRotations(this.handle, A2, I2, g2, C2);
  }
  restrictRotations(A2, I2, g2, C2) {
    this.setEnabledRotations(A2, I2, g2, C2);
  }
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  setDominanceGroup(A2) {
    this.rawSet.rbSetDominanceGroup(this.handle, A2);
  }
  enableCcd(A2) {
    this.rawSet.rbEnableCcd(this.handle, A2);
  }
  translation() {
    let A2 = this.rawSet.rbTranslation(this.handle);
    return iA.fromRaw(A2);
  }
  rotation() {
    let A2 = this.rawSet.rbRotation(this.handle);
    return oA.fromRaw(A2);
  }
  nextTranslation() {
    let A2 = this.rawSet.rbNextTranslation(this.handle);
    return iA.fromRaw(A2);
  }
  nextRotation() {
    let A2 = this.rawSet.rbNextRotation(this.handle);
    return oA.fromRaw(A2);
  }
  setTranslation(A2, I2) {
    this.rawSet.rbSetTranslation(this.handle, A2.x, A2.y, A2.z, I2);
  }
  setLinvel(A2, I2) {
    let g2 = iA.intoRaw(A2);
    this.rawSet.rbSetLinvel(this.handle, g2, I2), g2.free();
  }
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  setGravityScale(A2, I2) {
    this.rawSet.rbSetGravityScale(this.handle, A2, I2);
  }
  setRotation(A2, I2) {
    this.rawSet.rbSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w, I2);
  }
  setAngvel(A2, I2) {
    let g2 = iA.intoRaw(A2);
    this.rawSet.rbSetAngvel(this.handle, g2, I2), g2.free();
  }
  setNextKinematicTranslation(A2) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, A2.x, A2.y, A2.z);
  }
  setNextKinematicRotation(A2) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  linvel() {
    return iA.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  angvel() {
    return iA.fromRaw(this.rawSet.rbAngvel(this.handle));
  }
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  collider(A2) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, A2));
  }
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  setBodyType(A2) {
    return this.rawSet.rbSetBodyType(this.handle, A2);
  }
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  setLinearDamping(A2) {
    this.rawSet.rbSetLinearDamping(this.handle, A2);
  }
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  setAdditionalMass(A2, I2) {
    this.rawSet.rbSetAdditionalMass(this.handle, A2, I2);
  }
  setAdditionalMassProperties(A2, I2, g2, C2, B2) {
    let Q2 = iA.intoRaw(I2), E2 = iA.intoRaw(g2), i2 = oA.intoRaw(C2);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, A2, Q2, E2, i2, B2), Q2.free(), E2.free(), i2.free();
  }
  setAngularDamping(A2) {
    this.rawSet.rbSetAngularDamping(this.handle, A2);
  }
  resetForces(A2) {
    this.rawSet.rbResetForces(this.handle, A2);
  }
  resetTorques(A2) {
    this.rawSet.rbResetTorques(this.handle, A2);
  }
  addForce(A2, I2) {
    const g2 = iA.intoRaw(A2);
    this.rawSet.rbAddForce(this.handle, g2, I2), g2.free();
  }
  applyImpulse(A2, I2) {
    const g2 = iA.intoRaw(A2);
    this.rawSet.rbApplyImpulse(this.handle, g2, I2), g2.free();
  }
  addTorque(A2, I2) {
    const g2 = iA.intoRaw(A2);
    this.rawSet.rbAddTorque(this.handle, g2, I2), g2.free();
  }
  applyTorqueImpulse(A2, I2) {
    const g2 = iA.intoRaw(A2);
    this.rawSet.rbApplyTorqueImpulse(this.handle, g2, I2), g2.free();
  }
  addForceAtPoint(A2, I2, g2) {
    const C2 = iA.intoRaw(A2), B2 = iA.intoRaw(I2);
    this.rawSet.rbAddForceAtPoint(this.handle, C2, B2, g2), C2.free(), B2.free();
  }
  applyImpulseAtPoint(A2, I2, g2) {
    const C2 = iA.intoRaw(A2), B2 = iA.intoRaw(I2);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, C2, B2, g2), C2.free(), B2.free();
  }
}
class qA {
  constructor(A2) {
    this.status = A2, this.translation = iA.zeros(), this.rotation = oA.identity(), this.gravityScale = 1, this.linvel = iA.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = iA.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = iA.zeros(), this.principalAngularInertia = iA.zeros(), this.angularInertiaLocalFrame = oA.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.dominanceGroup = 0;
  }
  static dynamic() {
    return new qA(GA.Dynamic);
  }
  static kinematicPositionBased() {
    return new qA(GA.KinematicPositionBased);
  }
  static kinematicVelocityBased() {
    return new qA(GA.KinematicVelocityBased);
  }
  static fixed() {
    return new qA(GA.Fixed);
  }
  static newDynamic() {
    return new qA(GA.Dynamic);
  }
  static newKinematicPositionBased() {
    return new qA(GA.KinematicPositionBased);
  }
  static newKinematicVelocityBased() {
    return new qA(GA.KinematicVelocityBased);
  }
  static newStatic() {
    return new qA(GA.Fixed);
  }
  setDominanceGroup(A2) {
    return this.dominanceGroup = A2, this;
  }
  setTranslation(A2, I2, g2) {
    if (typeof A2 != "number" || typeof I2 != "number" || typeof g2 != "number")
      throw TypeError("The translation components must be numbers.");
    return this.translation = {x: A2, y: I2, z: g2}, this;
  }
  setRotation(A2) {
    return oA.copy(this.rotation, A2), this;
  }
  setGravityScale(A2) {
    return this.gravityScale = A2, this;
  }
  setAdditionalMass(A2) {
    return this.mass = A2, this.massOnly = true, this;
  }
  setLinvel(A2, I2, g2) {
    if (typeof A2 != "number" || typeof I2 != "number" || typeof g2 != "number")
      throw TypeError("The linvel components must be numbers.");
    return this.linvel = {x: A2, y: I2, z: g2}, this;
  }
  setAngvel(A2) {
    return iA.copy(this.angvel, A2), this;
  }
  setAdditionalMassProperties(A2, I2, g2, C2) {
    return this.mass = A2, iA.copy(this.centerOfMass, I2), iA.copy(this.principalAngularInertia, g2), oA.copy(this.angularInertiaLocalFrame, C2), this.massOnly = false, this;
  }
  enabledTranslations(A2, I2, g2) {
    return this.translationsEnabledX = A2, this.translationsEnabledY = I2, this.translationsEnabledZ = g2, this;
  }
  restrictTranslations(A2, I2, g2) {
    return this.enabledTranslations(A2, I2, g2);
  }
  lockTranslations() {
    return this.enabledTranslations(false, false, false);
  }
  enabledRotations(A2, I2, g2) {
    return this.rotationsEnabledX = A2, this.rotationsEnabledY = I2, this.rotationsEnabledZ = g2, this;
  }
  restrictRotations(A2, I2, g2) {
    return this.enabledRotations(A2, I2, g2);
  }
  lockRotations() {
    return this.restrictRotations(false, false, false);
  }
  setLinearDamping(A2) {
    return this.linearDamping = A2, this;
  }
  setAngularDamping(A2) {
    return this.angularDamping = A2, this;
  }
  setCanSleep(A2) {
    return this.canSleep = A2, this;
  }
  setSleeping(A2) {
    return this.sleeping = A2, this;
  }
  setCcdEnabled(A2) {
    return this.ccdEnabled = A2, this;
  }
  setUserData(A2) {
    return this.userData = A2, this;
  }
}
class RA {
  constructor() {
    this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
  }
  set(A2, I2) {
    let g2 = this.index(A2);
    for (; this.data.length <= g2; )
      this.data.push(null);
    this.data[g2] == null && (this.size += 1), this.data[g2] = I2;
  }
  len() {
    return this.size;
  }
  delete(A2) {
    let I2 = this.index(A2);
    I2 < this.data.length && (this.data[I2] != null && (this.size -= 1), this.data[I2] = null);
  }
  clear() {
    this.data = new Array();
  }
  get(A2) {
    let I2 = this.index(A2);
    return I2 < this.data.length ? this.data[I2] : null;
  }
  forEach(A2) {
    for (const I2 of this.data)
      I2 != null && A2(I2);
  }
  getAll() {
    return this.data.filter((A2) => A2 != null);
  }
  index(A2) {
    return this.fconv[0] = A2, this.uconv[0];
  }
}
class sA {
  constructor(A2) {
    this.raw = A2 || new v(), this.map = new RA(), A2 && A2.forEachRigidBodyHandle((I2) => {
      this.map.set(I2, new FA(A2, null, I2));
    });
  }
  free() {
    this.raw.free(), this.raw = void 0, this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createRigidBody(A2, I2) {
    let g2 = iA.intoRaw(I2.translation), C2 = oA.intoRaw(I2.rotation), B2 = iA.intoRaw(I2.linvel), Q2 = iA.intoRaw(I2.centerOfMass), E2 = iA.intoRaw(I2.angvel), i2 = iA.intoRaw(I2.principalAngularInertia), D2 = oA.intoRaw(I2.angularInertiaLocalFrame), o2 = this.raw.createRigidBody(g2, C2, I2.gravityScale, I2.mass, I2.massOnly, Q2, B2, E2, i2, D2, I2.translationsEnabledX, I2.translationsEnabledY, I2.translationsEnabledZ, I2.rotationsEnabledX, I2.rotationsEnabledY, I2.rotationsEnabledZ, I2.linearDamping, I2.angularDamping, I2.status, I2.canSleep, I2.sleeping, I2.ccdEnabled, I2.dominanceGroup);
    g2.free(), C2.free(), B2.free(), Q2.free(), E2.free(), i2.free(), D2.free();
    const G2 = new FA(this.raw, A2, o2);
    return G2.userData = I2.userData, this.map.set(o2, G2), G2;
  }
  remove(A2, I2, g2, C2, B2) {
    for (let I3 = 0; I3 < this.raw.rbNumColliders(A2); I3 += 1)
      g2.unmap(this.raw.rbCollider(A2, I3));
    C2.forEachJointHandleAttachedToRigidBody(A2, (A3) => C2.unmap(A3)), B2.forEachJointHandleAttachedToRigidBody(A2, (A3) => B2.unmap(A3)), this.raw.remove(A2, I2.raw, g2.raw, C2.raw, B2.raw), this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  forEachActiveRigidBody(A2, I2) {
    A2.forEachActiveRigidBodyHandle((A3) => {
      I2(this.get(A3));
    });
  }
  getAll() {
    return this.map.getAll();
  }
}
class cA {
  constructor(A2) {
    this.raw = A2 || new Z();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  get dt() {
    return this.raw.dt;
  }
  get erp() {
    return this.raw.erp;
  }
  get allowedLinearError() {
    return this.raw.allowedLinearError;
  }
  get predictionDistance() {
    return this.raw.predictionDistance;
  }
  get maxVelocityIterations() {
    return this.raw.maxVelocityIterations;
  }
  get maxVelocityFrictionIterations() {
    return this.raw.maxVelocityFrictionIterations;
  }
  get maxStabilizationIterations() {
    return this.raw.maxStabilizationIterations;
  }
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(A2) {
    this.raw.dt = A2;
  }
  set erp(A2) {
    this.raw.erp = A2;
  }
  set allowedLinearError(A2) {
    this.raw.allowedLinearError = A2;
  }
  set predictionDistance(A2) {
    this.raw.predictionDistance = A2;
  }
  set maxVelocityIterations(A2) {
    this.raw.maxVelocityIterations = A2;
  }
  set maxVelocityFrictionIterations(A2) {
    this.raw.maxVelocityFrictionIterations = A2;
  }
  set maxStabilizationIterations(A2) {
    this.raw.maxStabilizationIterations = A2;
  }
  set minIslandSize(A2) {
    this.raw.minIslandSize = A2;
  }
  set maxCcdSubsteps(A2) {
    this.raw.maxCcdSubsteps = A2;
  }
}
!function(A2) {
  A2[A2.Revolute = 0] = "Revolute", A2[A2.Fixed = 1] = "Fixed", A2[A2.Prismatic = 2] = "Prismatic", A2[A2.Spherical = 3] = "Spherical";
}(wA || (wA = {})), function(A2) {
  A2[A2.AccelerationBased = 0] = "AccelerationBased", A2[A2.ForceBased = 1] = "ForceBased";
}(SA || (SA = {}));
class YA {
  constructor(A2, I2, g2) {
    this.rawSet = A2, this.bodySet = I2, this.handle = g2;
  }
  static newTyped(A2, I2, g2) {
    switch (A2.jointType(g2)) {
      case wA.Revolute:
        return new tA(A2, I2, g2);
      case wA.Prismatic:
        return new lA(A2, I2, g2);
      case wA.Fixed:
        return new HA(A2, I2, g2);
      case wA.Spherical:
        return new pA(A2, I2, g2);
      default:
        return new YA(A2, I2, g2);
    }
  }
  finalizeDeserialization(A2) {
    this.bodySet = A2;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  type() {
    return this.rawSet.jointType(this.handle);
  }
  frameX1() {
    return oA.fromRaw(this.rawSet.jointFrameX1(this.handle));
  }
  frameX2() {
    return oA.fromRaw(this.rawSet.jointFrameX2(this.handle));
  }
  anchor1() {
    return iA.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  anchor2() {
    return iA.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  setAnchor1(A2) {
    const I2 = iA.intoRaw(A2);
    this.rawSet.jointSetAnchor1(this.handle, I2), I2.free();
  }
  setAnchor2(A2) {
    const I2 = iA.intoRaw(A2);
    this.rawSet.jointSetAnchor2(this.handle, I2), I2.free();
  }
  setContactsEnabled(A2) {
    this.rawSet.jointSetContactsEnabled(this.handle, A2);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
}
class LA extends YA {
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  setLimits(A2, I2) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), A2, I2);
  }
  configureMotorModel(A2) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), A2);
  }
  configureMotorVelocity(A2, I2) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), A2, I2);
  }
  configureMotorPosition(A2, I2, g2) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), A2, I2, g2);
  }
  configureMotor(A2, I2, g2, C2) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), A2, I2, g2, C2);
  }
}
class HA extends YA {
}
class lA extends LA {
  rawAxis() {
    return c.X;
  }
}
class tA extends LA {
  rawAxis() {
    return c.AngX;
  }
}
class pA extends YA {
}
class rA {
  constructor() {
  }
  static fixed(A2, I2, g2, C2) {
    let B2 = new rA();
    return B2.anchor1 = A2, B2.anchor2 = g2, B2.frame1 = I2, B2.frame2 = C2, B2.jointType = wA.Fixed, B2;
  }
  static spherical(A2, I2) {
    let g2 = new rA();
    return g2.anchor1 = A2, g2.anchor2 = I2, g2.jointType = wA.Spherical, g2;
  }
  static prismatic(A2, I2, g2) {
    let C2 = new rA();
    return C2.anchor1 = A2, C2.anchor2 = I2, C2.axis = g2, C2.jointType = wA.Prismatic, C2;
  }
  static revolute(A2, I2, g2) {
    let C2 = new rA();
    return C2.anchor1 = A2, C2.anchor2 = I2, C2.axis = g2, C2.jointType = wA.Revolute, C2;
  }
  intoRaw() {
    let A2, I2, g2 = iA.intoRaw(this.anchor1), C2 = iA.intoRaw(this.anchor2), B2 = false, Q2 = 0, E2 = 0;
    switch (this.jointType) {
      case wA.Fixed:
        let i2 = oA.intoRaw(this.frame1), D2 = oA.intoRaw(this.frame2);
        I2 = O.fixed(g2, i2, C2, D2), i2.free(), D2.free();
        break;
      case wA.Prismatic:
        A2 = iA.intoRaw(this.axis), this.limitsEnabled && (B2 = true, Q2 = this.limits[0], E2 = this.limits[1]), I2 = O.prismatic(g2, C2, A2, B2, Q2, E2), A2.free();
        break;
      case wA.Spherical:
        I2 = O.spherical(g2, C2);
        break;
      case wA.Revolute:
        A2 = iA.intoRaw(this.axis), I2 = O.revolute(g2, C2, A2), A2.free();
    }
    return g2.free(), C2.free(), I2;
  }
}
class eA {
  constructor(A2) {
    this.raw = A2 || new n(), this.map = new RA(), A2 && A2.forEachJointHandle((I2) => {
      this.map.set(I2, YA.newTyped(A2, null, I2));
    });
  }
  free() {
    this.raw.free(), this.raw = void 0, this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createJoint(A2, I2, g2, C2, B2) {
    const Q2 = I2.intoRaw(), E2 = this.raw.createJoint(Q2, g2, C2, B2);
    Q2.free();
    let i2 = YA.newTyped(this.raw, A2, E2);
    return this.map.set(E2, i2), i2;
  }
  remove(A2, I2) {
    this.raw.remove(A2, I2), this.unmap(A2);
  }
  forEachJointHandleAttachedToRigidBody(A2, I2) {
    this.raw.forEachJointAttachedToRigidBody(A2, I2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  getAll() {
    return this.map.getAll();
  }
}
class TA {
  constructor(A2, I2) {
    this.rawSet = A2, this.handle = I2;
  }
  static newTyped(A2, I2) {
    switch (A2.jointType(I2)) {
      case wA.Revolute:
        return new ZA(A2, I2);
      case wA.Prismatic:
        return new nA(A2, I2);
      case wA.Fixed:
        return new OA(A2, I2);
      case wA.Spherical:
        return new xA(A2, I2);
      default:
        return new TA(A2, I2);
    }
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  setContactsEnabled(A2) {
    this.rawSet.jointSetContactsEnabled(this.handle, A2);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
}
class dA extends TA {
}
class OA extends TA {
}
class nA extends dA {
  rawAxis() {
    return c.X;
  }
}
class ZA extends dA {
  rawAxis() {
    return c.AngX;
  }
}
class xA extends TA {
}
class WA {
  constructor(A2) {
    this.raw = A2 || new b(), this.map = new RA(), A2 && A2.forEachJointHandle((A3) => {
      this.map.set(A3, TA.newTyped(this.raw, A3));
    });
  }
  free() {
    this.raw.free(), this.raw = void 0, this.map.clear(), this.map = void 0;
  }
  createJoint(A2, I2, g2, C2) {
    const B2 = A2.intoRaw(), Q2 = this.raw.createJoint(B2, I2, g2, C2);
    B2.free();
    let E2 = TA.newTyped(this.raw, Q2);
    return this.map.set(Q2, E2), E2;
  }
  remove(A2, I2) {
    this.raw.remove(A2, I2), this.map.delete(A2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  forEachJointHandleAttachedToRigidBody(A2, I2) {
    this.raw.forEachJointAttachedToRigidBody(A2, I2);
  }
  getAll() {
    return this.map.getAll();
  }
}
!function(A2) {
  A2[A2.Average = 0] = "Average", A2[A2.Min = 1] = "Min", A2[A2.Multiply = 2] = "Multiply", A2[A2.Max = 3] = "Max";
}(kA || (kA = {}));
class bA {
  constructor(A2) {
    this.raw = A2 || new L();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
}
class jA {
  constructor(A2) {
    this.raw = A2 || new x();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  forEachActiveRigidBodyHandle(A2) {
    this.raw.forEachActiveRigidBodyHandle(A2);
  }
}
class fA {
  constructor(A2) {
    this.raw = A2 || new Y();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
}
class VA {
  constructor(A2) {
    this.raw = A2 || new j(), this.tempManifold = new PA(null);
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  contactsWith(A2, I2) {
    this.raw.contacts_with(A2, I2);
  }
  intersectionsWith(A2, I2) {
    this.raw.intersections_with(A2, I2);
  }
  contactPair(A2, I2, g2) {
    const C2 = this.raw.contact_pair(A2, I2);
    if (C2) {
      const I3 = C2.collider1() != A2;
      let B2;
      for (B2 = 0; B2 < C2.numContactManifolds(); ++B2)
        this.tempManifold.raw = C2.contactManifold(B2), this.tempManifold.raw && g2(this.tempManifold, I3), this.tempManifold.free();
      C2.free();
    }
  }
  intersectionPair(A2, I2) {
    return this.raw.intersection_pair(A2, I2);
  }
}
class PA {
  constructor(A2) {
    this.raw = A2;
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  normal() {
    return iA.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return iA.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return iA.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(A2) {
    return iA.fromRaw(this.raw.contact_local_p1(A2));
  }
  localContactPoint2(A2) {
    return iA.fromRaw(this.raw.contact_local_p2(A2));
  }
  contactDist(A2) {
    return this.raw.contact_dist(A2);
  }
  contactFid1(A2) {
    return this.raw.contact_fid1(A2);
  }
  contactFid2(A2) {
    return this.raw.contact_fid2(A2);
  }
  contactImpulse(A2) {
    return this.raw.contact_impulse(A2);
  }
  contactTangentImpulseX(A2) {
    return this.raw.contact_tangent_impulse_x(A2);
  }
  contactTangentImpulseY(A2) {
    return this.raw.contact_tangent_impulse_y(A2);
  }
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(A2) {
    return iA.fromRaw(this.raw.solver_contact_point(A2));
  }
  solverContactDist(A2) {
    return this.raw.solver_contact_dist(A2);
  }
  solverContactFriction(A2) {
    return this.raw.solver_contact_friction(A2);
  }
  solverContactRestitution(A2) {
    return this.raw.solver_contact_restitution(A2);
  }
  solverContactTangentVelocity(A2) {
    return iA.fromRaw(this.raw.solver_contact_tangent_velocity(A2));
  }
}
class mA {
  constructor(A2, I2, g2, C2, B2) {
    this.distance = A2, this.point1 = I2, this.point2 = g2, this.normal1 = C2, this.normal2 = B2;
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new mA(A2.distance(), iA.fromRaw(A2.point1()), iA.fromRaw(A2.point2()), iA.fromRaw(A2.normal1()), iA.fromRaw(A2.normal2()));
    return A2.free(), I2;
  }
}
!function(A2) {
  A2[A2.Vertex = 0] = "Vertex", A2[A2.Edge = 1] = "Edge", A2[A2.Face = 2] = "Face", A2[A2.Unknown = 3] = "Unknown";
}(KA || (KA = {}));
class XA {
  constructor(A2, I2) {
    this.point = A2, this.isInside = I2;
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new XA(iA.fromRaw(A2.point()), A2.isInside());
    return A2.free(), I2;
  }
}
class uA {
  constructor(A2, I2, g2, C2, B2) {
    this.featureType = KA.Unknown, this.featureId = void 0, this.collider = A2, this.point = I2, this.isInside = g2, B2 !== void 0 && (this.featureId = B2), C2 !== void 0 && (this.featureType = C2);
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new uA(A2.get(I2.colliderHandle()), iA.fromRaw(I2.point()), I2.isInside(), I2.featureType(), I2.featureId());
    return I2.free(), g2;
  }
}
class zA {
  constructor(A2, I2) {
    this.origin = A2, this.dir = I2;
  }
  pointAt(A2) {
    return {x: this.origin.x + this.dir.x * A2, y: this.origin.y + this.dir.y * A2, z: this.origin.z + this.dir.z * A2};
  }
}
class vA {
  constructor(A2, I2, g2, C2) {
    this.featureType = KA.Unknown, this.featureId = void 0, this.toi = A2, this.normal = I2, C2 !== void 0 && (this.featureId = C2), g2 !== void 0 && (this.featureType = g2);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new vA(A2.toi(), iA.fromRaw(A2.normal()), A2.featureType(), A2.featureId());
    return A2.free(), I2;
  }
}
class _A {
  constructor(A2, I2, g2, C2, B2) {
    this.featureType = KA.Unknown, this.featureId = void 0, this.collider = A2, this.toi = I2, this.normal = g2, B2 !== void 0 && (this.featureId = B2), C2 !== void 0 && (this.featureType = C2);
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new _A(A2.get(I2.colliderHandle()), I2.toi(), iA.fromRaw(I2.normal()), I2.featureType(), I2.featureId());
    return I2.free(), g2;
  }
}
class $A {
  constructor(A2, I2) {
    this.collider = A2, this.toi = I2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new $A(A2.get(I2.colliderHandle()), I2.toi());
    return I2.free(), g2;
  }
}
class AI {
  constructor(A2, I2, g2, C2, B2) {
    this.toi = A2, this.witness1 = I2, this.witness2 = g2, this.normal1 = C2, this.normal2 = B2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new AI(I2.toi(), iA.fromRaw(I2.witness1()), iA.fromRaw(I2.witness2()), iA.fromRaw(I2.normal1()), iA.fromRaw(I2.normal2()));
    return I2.free(), g2;
  }
}
class II extends AI {
  constructor(A2, I2, g2, C2, B2, Q2) {
    super(I2, g2, C2, B2, Q2), this.collider = A2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new II(A2.get(I2.colliderHandle()), I2.toi(), iA.fromRaw(I2.witness1()), iA.fromRaw(I2.witness2()), iA.fromRaw(I2.normal1()), iA.fromRaw(I2.normal2()));
    return I2.free(), g2;
  }
}
class gI {
  static fromRaw(A2, I2) {
    const g2 = A2.coShapeType(I2);
    let C2, B2, Q2, E2, i2, D2, o2;
    switch (g2) {
      case aA.Ball:
        return new CI(A2.coRadius(I2));
      case aA.Cuboid:
        return C2 = A2.coHalfExtents(I2), new QI(C2.x, C2.y, C2.z);
      case aA.RoundCuboid:
        return C2 = A2.coHalfExtents(I2), B2 = A2.coRoundRadius(I2), new EI(C2.x, C2.y, C2.z, B2);
      case aA.Capsule:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new iI(i2, D2);
      case aA.Segment:
        return Q2 = A2.coVertices(I2), new DI(iA.new(Q2[0], Q2[1], Q2[2]), iA.new(Q2[3], Q2[4], Q2[5]));
      case aA.Polyline:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new wI(Q2, E2);
      case aA.Triangle:
        return Q2 = A2.coVertices(I2), new oI(iA.new(Q2[0], Q2[1], Q2[2]), iA.new(Q2[3], Q2[4], Q2[5]), iA.new(Q2[6], Q2[7], Q2[8]));
      case aA.RoundTriangle:
        return Q2 = A2.coVertices(I2), B2 = A2.coRoundRadius(I2), new GI(iA.new(Q2[0], Q2[1], Q2[2]), iA.new(Q2[3], Q2[4], Q2[5]), iA.new(Q2[6], Q2[7], Q2[8]), B2);
      case aA.HalfSpace:
        return o2 = iA.fromRaw(A2.coHalfspaceNormal(I2)), new BI(o2);
      case aA.TriMesh:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new SI(Q2, E2);
      case aA.HeightField:
        const G2 = A2.coHeightfieldScale(I2), w2 = A2.coHeightfieldHeights(I2), S2 = A2.coHeightfieldNRows(I2), k2 = A2.coHeightfieldNCols(I2);
        return new aI(S2, k2, w2, G2);
      case aA.ConvexPolyhedron:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new kI(Q2, E2);
      case aA.RoundConvexPolyhedron:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), B2 = A2.coRoundRadius(I2), new KI(Q2, E2, B2);
      case aA.Cylinder:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new UI(i2, D2);
      case aA.RoundCylinder:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), B2 = A2.coRoundRadius(I2), new yI(i2, D2, B2);
      case aA.Cone:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new JI(i2, D2);
      case aA.RoundCone:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), B2 = A2.coRoundRadius(I2), new hI(i2, D2, B2);
      default:
        throw new Error("unknown shape type: " + g2);
    }
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = iA.intoRaw(A2), G2 = oA.intoRaw(I2), w2 = iA.intoRaw(g2), S2 = iA.intoRaw(B2), k2 = oA.intoRaw(Q2), K2 = iA.intoRaw(E2), a2 = this.intoRaw(), U2 = C2.intoRaw(), y2 = AI.fromRaw(null, a2.castShape(o2, G2, w2, U2, S2, k2, K2, i2, D2));
    return o2.free(), G2.free(), w2.free(), S2.free(), k2.free(), K2.free(), a2.free(), U2.free(), y2;
  }
  intersectsShape(A2, I2, g2, C2, B2) {
    let Q2 = iA.intoRaw(A2), E2 = oA.intoRaw(I2), i2 = iA.intoRaw(C2), D2 = oA.intoRaw(B2), o2 = this.intoRaw(), G2 = g2.intoRaw(), w2 = o2.intersectsShape(Q2, E2, G2, i2, D2);
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2.free(), w2;
  }
  contactShape(A2, I2, g2, C2, B2, Q2) {
    let E2 = iA.intoRaw(A2), i2 = oA.intoRaw(I2), D2 = iA.intoRaw(C2), o2 = oA.intoRaw(B2), G2 = this.intoRaw(), w2 = g2.intoRaw(), S2 = mA.fromRaw(G2.contactShape(E2, i2, w2, D2, o2, Q2));
    return E2.free(), i2.free(), D2.free(), o2.free(), G2.free(), w2.free(), S2;
  }
  containsPoint(A2, I2, g2) {
    let C2 = iA.intoRaw(A2), B2 = oA.intoRaw(I2), Q2 = iA.intoRaw(g2), E2 = this.intoRaw(), i2 = E2.containsPoint(C2, B2, Q2);
    return C2.free(), B2.free(), Q2.free(), E2.free(), i2;
  }
  projectPoint(A2, I2, g2, C2) {
    let B2 = iA.intoRaw(A2), Q2 = oA.intoRaw(I2), E2 = iA.intoRaw(g2), i2 = this.intoRaw(), D2 = XA.fromRaw(i2.projectPoint(B2, Q2, E2, C2));
    return B2.free(), Q2.free(), E2.free(), i2.free(), D2;
  }
  intersectsRay(A2, I2, g2, C2) {
    let B2 = iA.intoRaw(I2), Q2 = oA.intoRaw(g2), E2 = iA.intoRaw(A2.origin), i2 = iA.intoRaw(A2.dir), D2 = this.intoRaw(), o2 = D2.intersectsRay(B2, Q2, E2, i2, C2);
    return B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2;
  }
  castRay(A2, I2, g2, C2, B2) {
    let Q2 = iA.intoRaw(I2), E2 = oA.intoRaw(g2), i2 = iA.intoRaw(A2.origin), D2 = iA.intoRaw(A2.dir), o2 = this.intoRaw(), G2 = o2.castRay(Q2, E2, i2, D2, C2, B2);
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2;
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2) {
    let Q2 = iA.intoRaw(I2), E2 = oA.intoRaw(g2), i2 = iA.intoRaw(A2.origin), D2 = iA.intoRaw(A2.dir), o2 = this.intoRaw(), G2 = vA.fromRaw(o2.castRayAndGetNormal(Q2, E2, i2, D2, C2, B2));
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2;
  }
}
!function(A2) {
  A2[A2.Ball = 0] = "Ball", A2[A2.Cuboid = 1] = "Cuboid", A2[A2.Capsule = 2] = "Capsule", A2[A2.Segment = 3] = "Segment", A2[A2.Polyline = 4] = "Polyline", A2[A2.Triangle = 5] = "Triangle", A2[A2.TriMesh = 6] = "TriMesh", A2[A2.HeightField = 7] = "HeightField", A2[A2.ConvexPolyhedron = 9] = "ConvexPolyhedron", A2[A2.Cylinder = 10] = "Cylinder", A2[A2.Cone = 11] = "Cone", A2[A2.RoundCuboid = 12] = "RoundCuboid", A2[A2.RoundTriangle = 13] = "RoundTriangle", A2[A2.RoundCylinder = 14] = "RoundCylinder", A2[A2.RoundCone = 15] = "RoundCone", A2[A2.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", A2[A2.HalfSpace = 17] = "HalfSpace";
}(aA || (aA = {}));
class CI extends gI {
  constructor(A2) {
    super(), this.type = aA.Ball, this.radius = A2;
  }
  intoRaw() {
    return AA.ball(this.radius);
  }
}
class BI extends gI {
  constructor(A2) {
    super(), this.type = aA.HalfSpace, this.normal = A2;
  }
  intoRaw() {
    let A2 = iA.intoRaw(this.normal), I2 = AA.halfspace(A2);
    return A2.free(), I2;
  }
}
class QI extends gI {
  constructor(A2, I2, g2) {
    super(), this.type = aA.Cuboid, this.halfExtents = iA.new(A2, I2, g2);
  }
  intoRaw() {
    return AA.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
  }
}
class EI extends gI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = aA.RoundCuboid, this.halfExtents = iA.new(A2, I2, g2), this.borderRadius = C2;
  }
  intoRaw() {
    return AA.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
  }
}
class iI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.Capsule, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return AA.capsule(this.halfHeight, this.radius);
  }
}
class DI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.Segment, this.a = A2, this.b = I2;
  }
  intoRaw() {
    let A2 = iA.intoRaw(this.a), I2 = iA.intoRaw(this.b), g2 = AA.segment(A2, I2);
    return A2.free(), I2.free(), g2;
  }
}
class oI extends gI {
  constructor(A2, I2, g2) {
    super(), this.type = aA.Triangle, this.a = A2, this.b = I2, this.c = g2;
  }
  intoRaw() {
    let A2 = iA.intoRaw(this.a), I2 = iA.intoRaw(this.b), g2 = iA.intoRaw(this.c), C2 = AA.triangle(A2, I2, g2);
    return A2.free(), I2.free(), g2.free(), C2;
  }
}
class GI extends gI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = aA.RoundTriangle, this.a = A2, this.b = I2, this.c = g2, this.borderRadius = C2;
  }
  intoRaw() {
    let A2 = iA.intoRaw(this.a), I2 = iA.intoRaw(this.b), g2 = iA.intoRaw(this.c), C2 = AA.roundTriangle(A2, I2, g2, this.borderRadius);
    return A2.free(), I2.free(), g2.free(), C2;
  }
}
class wI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.Polyline, this.vertices = A2, this.indices = I2 != null ? I2 : new Uint32Array(0);
  }
  intoRaw() {
    return AA.polyline(this.vertices, this.indices);
  }
}
class SI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.TriMesh, this.vertices = A2, this.indices = I2;
  }
  intoRaw() {
    return AA.trimesh(this.vertices, this.indices);
  }
}
class kI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.ConvexPolyhedron, this.vertices = A2, this.indices = I2;
  }
  intoRaw() {
    return this.indices ? AA.convexMesh(this.vertices, this.indices) : AA.convexHull(this.vertices);
  }
}
class KI extends gI {
  constructor(A2, I2, g2) {
    super(), this.type = aA.RoundConvexPolyhedron, this.vertices = A2, this.indices = I2, this.borderRadius = g2;
  }
  intoRaw() {
    return this.indices ? AA.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : AA.roundConvexHull(this.vertices, this.borderRadius);
  }
}
class aI extends gI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = aA.HeightField, this.nrows = A2, this.ncols = I2, this.heights = g2, this.scale = C2;
  }
  intoRaw() {
    let A2 = iA.intoRaw(this.scale), I2 = AA.heightfield(this.nrows, this.ncols, this.heights, A2);
    return A2.free(), I2;
  }
}
class UI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.Cylinder, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return AA.cylinder(this.halfHeight, this.radius);
  }
}
class yI extends gI {
  constructor(A2, I2, g2) {
    super(), this.type = aA.RoundCylinder, this.borderRadius = g2, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return AA.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
  }
}
class JI extends gI {
  constructor(A2, I2) {
    super(), this.type = aA.Cone, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return AA.cone(this.halfHeight, this.radius);
  }
}
class hI extends gI {
  constructor(A2, I2, g2) {
    super(), this.type = aA.RoundCone, this.halfHeight = A2, this.radius = I2, this.borderRadius = g2;
  }
  intoRaw() {
    return AA.roundCone(this.halfHeight, this.radius, this.borderRadius);
  }
}
!function(A2) {
  A2[A2.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", A2[A2.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", A2[A2.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", A2[A2.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", A2[A2.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", A2[A2.FIXED_FIXED = 32] = "FIXED_FIXED", A2[A2.DEFAULT = 15] = "DEFAULT", A2[A2.ALL = 60943] = "ALL";
}(UA || (UA = {}));
class MI {
  constructor(A2, I2, g2, C2) {
    this.colliderSet = A2, this.handle = I2, this._parent = g2, this._shape = C2;
  }
  finalizeDeserialization(A2) {
    this.handle != null && (this._parent = A2.get(this.colliderSet.raw.coParent(this.handle)));
  }
  ensureShapeIsCached() {
    this._shape || (this._shape = gI.fromRaw(this.colliderSet.raw, this.handle));
  }
  get shape() {
    return this.ensureShapeIsCached(), this._shape;
  }
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  translation() {
    return iA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  rotation() {
    return oA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  setSensor(A2) {
    this.colliderSet.raw.coSetSensor(this.handle, A2);
  }
  setShape(A2) {
    let I2 = A2.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, I2), I2.free(), this._shape = A2;
  }
  setRestitution(A2) {
    this.colliderSet.raw.coSetRestitution(this.handle, A2);
  }
  setFriction(A2) {
    this.colliderSet.raw.coSetFriction(this.handle, A2);
  }
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  setFrictionCombineRule(A2) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, A2);
  }
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  setRestitutionCombineRule(A2) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, A2);
  }
  setCollisionGroups(A2) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, A2);
  }
  setSolverGroups(A2) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, A2);
  }
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  setActiveHooks(A2) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, A2);
  }
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  setActiveEvents(A2) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, A2);
  }
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  setContactForceEventThreshold(A2) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, A2);
  }
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  setActiveCollisionTypes(A2) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, A2);
  }
  setDensity(A2) {
    this.colliderSet.raw.coSetDensity(this.handle, A2);
  }
  setMass(A2) {
    this.colliderSet.raw.coSetMass(this.handle, A2);
  }
  setMassProperties(A2, I2, g2, C2) {
    let B2 = iA.intoRaw(I2), Q2 = iA.intoRaw(g2), E2 = oA.intoRaw(C2);
    this.colliderSet.raw.coSetMassProperties(this.handle, A2, B2, Q2, E2), B2.free(), Q2.free(), E2.free();
  }
  setTranslation(A2) {
    this.colliderSet.raw.coSetTranslation(this.handle, A2.x, A2.y, A2.z);
  }
  setTranslationWrtParent(A2) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, A2.x, A2.y, A2.z);
  }
  setRotation(A2) {
    this.colliderSet.raw.coSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  setRotationWrtParent(A2) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  halfExtents() {
    return iA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  heightfieldScale() {
    let A2 = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return iA.fromRaw(A2);
  }
  heightfieldNRows() {
    return this.colliderSet.raw.coHeightfieldNRows(this.handle);
  }
  heightfieldNCols() {
    return this.colliderSet.raw.coHeightfieldNCols(this.handle);
  }
  parent() {
    return this._parent;
  }
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  containsPoint(A2) {
    let I2 = iA.intoRaw(A2), g2 = this.colliderSet.raw.coContainsPoint(this.handle, I2);
    return I2.free(), g2;
  }
  projectPoint(A2, I2) {
    let g2 = iA.intoRaw(A2), C2 = XA.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, g2, I2));
    return g2.free(), C2;
  }
  intersectsRay(A2, I2) {
    let g2 = iA.intoRaw(A2.origin), C2 = iA.intoRaw(A2.dir), B2 = this.colliderSet.raw.coIntersectsRay(this.handle, g2, C2, I2);
    return g2.free(), C2.free(), B2;
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2) {
    let i2 = iA.intoRaw(A2), D2 = iA.intoRaw(g2), o2 = oA.intoRaw(C2), G2 = iA.intoRaw(B2), w2 = I2.intoRaw(), S2 = AI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, i2, w2, D2, o2, G2, Q2, E2));
    return i2.free(), D2.free(), o2.free(), G2.free(), w2.free(), S2;
  }
  castCollider(A2, I2, g2, C2, B2) {
    let Q2 = iA.intoRaw(A2), E2 = iA.intoRaw(g2), i2 = II.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, Q2, I2.handle, E2, C2, B2));
    return Q2.free(), E2.free(), i2;
  }
  intersectsShape(A2, I2, g2) {
    let C2 = iA.intoRaw(I2), B2 = oA.intoRaw(g2), Q2 = A2.intoRaw(), E2 = this.colliderSet.raw.coIntersectsShape(this.handle, Q2, C2, B2);
    return C2.free(), B2.free(), Q2.free(), E2;
  }
  contactShape(A2, I2, g2, C2) {
    let B2 = iA.intoRaw(I2), Q2 = oA.intoRaw(g2), E2 = A2.intoRaw(), i2 = mA.fromRaw(this.colliderSet.raw.coContactShape(this.handle, E2, B2, Q2, C2));
    return B2.free(), Q2.free(), E2.free(), i2;
  }
  contactCollider(A2, I2) {
    return mA.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, A2.handle, I2));
  }
  castRay(A2, I2, g2) {
    let C2 = iA.intoRaw(A2.origin), B2 = iA.intoRaw(A2.dir), Q2 = this.colliderSet.raw.coCastRay(this.handle, C2, B2, I2, g2);
    return C2.free(), B2.free(), Q2;
  }
  castRayAndGetNormal(A2, I2, g2) {
    let C2 = iA.intoRaw(A2.origin), B2 = iA.intoRaw(A2.dir), Q2 = vA.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, C2, B2, I2, g2));
    return C2.free(), B2.free(), Q2;
  }
}
!function(A2) {
  A2[A2.Density = 0] = "Density", A2[A2.Mass = 1] = "Mass", A2[A2.MassProps = 2] = "MassProps";
}(yA || (yA = {}));
class NI {
  constructor(A2) {
    this.shape = A2, this.massPropsMode = yA.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = oA.identity(), this.translation = iA.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = kA.Average, this.restitutionCombineRule = kA.Average, this.activeCollisionTypes = UA.DEFAULT, this.activeEvents = 0, this.activeHooks = 0, this.mass = 0, this.centerOfMass = iA.zeros(), this.contactForceEventThreshold = 0, this.principalAngularInertia = iA.zeros(), this.angularInertiaLocalFrame = oA.identity();
  }
  static ball(A2) {
    const I2 = new CI(A2);
    return new NI(I2);
  }
  static capsule(A2, I2) {
    const g2 = new iI(A2, I2);
    return new NI(g2);
  }
  static segment(A2, I2) {
    const g2 = new DI(A2, I2);
    return new NI(g2);
  }
  static triangle(A2, I2, g2) {
    const C2 = new oI(A2, I2, g2);
    return new NI(C2);
  }
  static roundTriangle(A2, I2, g2, C2) {
    const B2 = new GI(A2, I2, g2, C2);
    return new NI(B2);
  }
  static polyline(A2, I2) {
    const g2 = new wI(A2, I2);
    return new NI(g2);
  }
  static trimesh(A2, I2) {
    const g2 = new SI(A2, I2);
    return new NI(g2);
  }
  static cuboid(A2, I2, g2) {
    const C2 = new QI(A2, I2, g2);
    return new NI(C2);
  }
  static roundCuboid(A2, I2, g2, C2) {
    const B2 = new EI(A2, I2, g2, C2);
    return new NI(B2);
  }
  static heightfield(A2, I2, g2, C2) {
    const B2 = new aI(A2, I2, g2, C2);
    return new NI(B2);
  }
  static cylinder(A2, I2) {
    const g2 = new UI(A2, I2);
    return new NI(g2);
  }
  static roundCylinder(A2, I2, g2) {
    const C2 = new yI(A2, I2, g2);
    return new NI(C2);
  }
  static cone(A2, I2) {
    const g2 = new JI(A2, I2);
    return new NI(g2);
  }
  static roundCone(A2, I2, g2) {
    const C2 = new hI(A2, I2, g2);
    return new NI(C2);
  }
  static convexHull(A2) {
    const I2 = new kI(A2, null);
    return new NI(I2);
  }
  static convexMesh(A2, I2) {
    const g2 = new kI(A2, I2);
    return new NI(g2);
  }
  static roundConvexHull(A2, I2) {
    const g2 = new KI(A2, null, I2);
    return new NI(g2);
  }
  static roundConvexMesh(A2, I2, g2) {
    const C2 = new KI(A2, I2, g2);
    return new NI(C2);
  }
  setTranslation(A2, I2, g2) {
    if (typeof A2 != "number" || typeof I2 != "number" || typeof g2 != "number")
      throw TypeError("The translation components must be numbers.");
    return this.translation = {x: A2, y: I2, z: g2}, this;
  }
  setRotation(A2) {
    return oA.copy(this.rotation, A2), this;
  }
  setSensor(A2) {
    return this.isSensor = A2, this;
  }
  setDensity(A2) {
    return this.massPropsMode = yA.Density, this.density = A2, this;
  }
  setMass(A2) {
    return this.massPropsMode = yA.Mass, this.mass = A2, this;
  }
  setMassProperties(A2, I2, g2, C2) {
    return this.massPropsMode = yA.MassProps, this.mass = A2, iA.copy(this.centerOfMass, I2), iA.copy(this.principalAngularInertia, g2), oA.copy(this.angularInertiaLocalFrame, C2), this;
  }
  setRestitution(A2) {
    return this.restitution = A2, this;
  }
  setFriction(A2) {
    return this.friction = A2, this;
  }
  setFrictionCombineRule(A2) {
    return this.frictionCombineRule = A2, this;
  }
  setRestitutionCombineRule(A2) {
    return this.restitutionCombineRule = A2, this;
  }
  setCollisionGroups(A2) {
    return this.collisionGroups = A2, this;
  }
  setSolverGroups(A2) {
    return this.solverGroups = A2, this;
  }
  setActiveHooks(A2) {
    return this.activeHooks = A2, this;
  }
  setActiveEvents(A2) {
    return this.activeEvents = A2, this;
  }
  setActiveCollisionTypes(A2) {
    return this.activeCollisionTypes = A2, this;
  }
  setContactForceEventThreshold(A2) {
    return this.contactForceEventThreshold = A2, this;
  }
}
class FI {
  constructor(A2) {
    this.raw = A2 || new l(), this.map = new RA(), A2 && A2.forEachColliderHandle((A3) => {
      this.map.set(A3, new MI(this, A3, null));
    });
  }
  free() {
    this.raw.free(), this.raw = void 0, this.map.clear(), this.map = void 0;
  }
  castClosure(A2) {
    return (I2) => A2 ? A2(this.get(I2)) : void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createCollider(A2, I2, g2) {
    let C2 = g2 != null && g2 != null;
    if (C2 && isNaN(g2))
      throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let B2 = I2.shape.intoRaw(), Q2 = iA.intoRaw(I2.translation), E2 = oA.intoRaw(I2.rotation), i2 = iA.intoRaw(I2.centerOfMass), D2 = iA.intoRaw(I2.principalAngularInertia), o2 = oA.intoRaw(I2.angularInertiaLocalFrame), G2 = this.raw.createCollider(B2, Q2, E2, I2.massPropsMode, I2.mass, i2, D2, o2, I2.density, I2.friction, I2.restitution, I2.frictionCombineRule, I2.restitutionCombineRule, I2.isSensor, I2.collisionGroups, I2.solverGroups, I2.activeCollisionTypes, I2.activeHooks, I2.activeEvents, I2.contactForceEventThreshold, C2, C2 ? g2 : 0, A2.raw);
    B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2.free();
    let w2 = C2 ? A2.get(g2) : null, S2 = new MI(this, G2, w2, I2.shape);
    return this.map.set(G2, S2), S2;
  }
  remove(A2, I2, g2, C2) {
    this.raw.remove(A2, I2.raw, g2.raw, C2), this.unmap(A2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  get(A2) {
    return this.map.get(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  getAll() {
    return this.map.getAll();
  }
}
class qI {
  constructor(A2) {
    this.raw = A2 || new f();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  step(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2) {
    let S2 = iA.intoRaw(A2);
    G2 ? this.raw.stepWithEvents(S2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw, o2.raw, G2.raw, w2, w2 ? w2.filterContactPair : null, w2 ? w2.filterIntersectionPair : null) : this.raw.step(S2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw, o2.raw), S2.free();
  }
}
!function(A2) {
  A2[A2.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", A2[A2.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", A2[A2.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", A2[A2.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", A2[A2.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", A2[A2.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", A2[A2.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", A2[A2.ONLY_FIXED = 6] = "ONLY_FIXED";
}(JA || (JA = {}));
class RI {
  constructor(A2) {
    this.raw = A2 || new m();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  update(A2, I2, g2) {
    this.raw.update(A2.raw, I2.raw, g2.raw);
  }
  castRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = iA.intoRaw(g2.origin), w2 = iA.intoRaw(g2.dir), S2 = $A.fromRaw(I2, this.raw.castRay(A2.raw, I2.raw, G2, w2, C2, B2, Q2, E2, i2, D2, o2));
    return G2.free(), w2.free(), S2;
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = iA.intoRaw(g2.origin), w2 = iA.intoRaw(g2.dir), S2 = _A.fromRaw(I2, this.raw.castRayAndGetNormal(A2.raw, I2.raw, G2, w2, C2, B2, Q2, E2, i2, D2, o2));
    return G2.free(), w2.free(), S2;
  }
  intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    let w2 = iA.intoRaw(g2.origin), S2 = iA.intoRaw(g2.dir);
    this.raw.intersectionsWithRay(A2.raw, I2.raw, w2, S2, C2, B2, (A3) => Q2(_A.fromRaw(I2, A3)), E2, i2, D2, o2, G2), w2.free(), S2.free();
  }
  intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = iA.intoRaw(g2), w2 = oA.intoRaw(C2), S2 = B2.intoRaw(), k2 = this.raw.intersectionWithShape(A2.raw, I2.raw, G2, w2, S2, Q2, E2, i2, D2, o2);
    return G2.free(), w2.free(), S2.free(), k2;
  }
  projectPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = iA.intoRaw(g2), G2 = uA.fromRaw(I2, this.raw.projectPoint(A2.raw, I2.raw, o2, C2, B2, Q2, E2, i2, D2));
    return o2.free(), G2;
  }
  projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2, E2, i2) {
    let D2 = iA.intoRaw(g2), o2 = uA.fromRaw(I2, this.raw.projectPointAndGetFeature(A2.raw, I2.raw, D2, C2, B2, Q2, E2, i2));
    return D2.free(), o2;
  }
  intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = iA.intoRaw(g2);
    this.raw.intersectionsWithPoint(A2.raw, I2.raw, o2, C2, B2, Q2, E2, i2, D2), o2.free();
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, S2) {
    let k2 = iA.intoRaw(g2), K2 = oA.intoRaw(C2), a2 = iA.intoRaw(B2), U2 = Q2.intoRaw(), y2 = II.fromRaw(I2, this.raw.castShape(A2.raw, I2.raw, k2, K2, a2, U2, E2, i2, D2, o2, G2, w2, S2));
    return k2.free(), K2.free(), a2.free(), U2.free(), y2;
  }
  intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    let w2 = iA.intoRaw(g2), S2 = oA.intoRaw(C2), k2 = B2.intoRaw();
    this.raw.intersectionsWithShape(A2.raw, I2.raw, w2, S2, k2, Q2, E2, i2, D2, o2, G2), w2.free(), S2.free(), k2.free();
  }
  collidersWithAabbIntersectingAabb(A2, I2, g2) {
    let C2 = iA.intoRaw(A2), B2 = iA.intoRaw(I2);
    this.raw.collidersWithAabbIntersectingAabb(C2, B2, g2), C2.free(), B2.free();
  }
}
class sI {
  constructor(A2) {
    this.raw = A2 || new $();
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  serializeAll(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = iA.intoRaw(A2);
    const G2 = this.raw.serializeAll(o2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw);
    return o2.free(), G2;
  }
  deserializeAll(A2) {
    return lI.fromRaw(this.raw.deserializeAll(A2));
  }
}
class cI {
  constructor(A2, I2) {
    this.vertices = A2, this.colors = I2;
  }
}
class YI {
  constructor(A2) {
    this.raw = A2 || new e();
  }
  free() {
    this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
  }
  render(A2, I2, g2, C2, B2) {
    this.raw.render(A2.raw, I2.raw, g2.raw, C2.raw, B2.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
  }
}
class LI {
}
class HI {
  constructor(A2, I2, g2, C2, B2) {
    this.params = I2, this.bodies = g2, this.colliders = C2, this.queries = B2, this.raw = new W(A2), this.rawCharacterCollision = new H(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
  }
  free() {
    this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
  }
  up() {
    return this.raw.up();
  }
  setUp(A2) {
    let I2 = iA.intoRaw(A2);
    return this.raw.setUp(I2);
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(A2) {
    this._applyImpulsesToDynamicBodies = A2;
  }
  characterMass() {
    return this._characterMass;
  }
  setCharacterMass(A2) {
    this._characterMass = A2;
  }
  offset() {
    return this.raw.offset();
  }
  setOffset(A2) {
    this.raw.setOffset(A2);
  }
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  setSlideEnabled(A2) {
    this.raw.setSlideEnabled(A2);
  }
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  enableAutostep(A2, I2, g2) {
    this.raw.enableAutostep(A2, I2, g2);
  }
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  setMaxSlopeClimbAngle(A2) {
    this.raw.setMaxSlopeClimbAngle(A2);
  }
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  setMinSlopeSlideAngle(A2) {
    this.raw.setMinSlopeSlideAngle(A2);
  }
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  enableSnapToGround(A2) {
    this.raw.enableSnapToGround(A2);
  }
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  computeColliderMovement(A2, I2, g2, C2, B2) {
    let Q2 = iA.intoRaw(I2);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, A2.handle, Q2, this._applyImpulsesToDynamicBodies, this._characterMass, g2, C2, this.colliders.castClosure(B2)), Q2.free();
  }
  computedMovement() {
    return iA.fromRaw(this.raw.computedMovement());
  }
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  computedCollision(A2, I2) {
    if (!this.raw.computedCollision(A2, this.rawCharacterCollision))
      return null;
    {
      let A3 = this.rawCharacterCollision;
      (I2 = I2 != null ? I2 : new LI()).translationApplied = iA.fromRaw(A3.translationApplied()), I2.translationRemaining = iA.fromRaw(A3.translationRemaining()), I2.toi = A3.toi(), I2.witness1 = iA.fromRaw(A3.worldWitness1()), I2.witness2 = iA.fromRaw(A3.worldWitness2()), I2.normal1 = iA.fromRaw(A3.worldNormal1()), I2.normal2 = iA.fromRaw(A3.worldNormal2());
    }
  }
}
class lI {
  constructor(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, S2, k2) {
    this.gravity = A2, this.integrationParameters = new cA(I2), this.islands = new jA(g2), this.broadPhase = new fA(C2), this.narrowPhase = new VA(B2), this.bodies = new sA(Q2), this.colliders = new FI(E2), this.impulseJoints = new eA(i2), this.multibodyJoints = new WA(D2), this.ccdSolver = new bA(o2), this.queryPipeline = new RI(G2), this.physicsPipeline = new qI(w2), this.serializationPipeline = new sI(S2), this.debugRenderPipeline = new YI(k2), this.characterControllers = new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
  }
  free() {
    this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((A2) => A2.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0;
  }
  static fromRaw(A2) {
    return A2 ? new lI(iA.fromRaw(A2.takeGravity()), A2.takeIntegrationParameters(), A2.takeIslandManager(), A2.takeBroadPhase(), A2.takeNarrowPhase(), A2.takeBodies(), A2.takeColliders(), A2.takeImpulseJoints(), A2.takeMultibodyJoints()) : null;
  }
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  static restoreSnapshot(A2) {
    return new sI().deserializeAll(A2);
  }
  debugRender() {
    return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new cI(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  step(A2, I2) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, A2, I2), this.queryPipeline.update(this.islands, this.bodies, this.colliders);
  }
  get timestep() {
    return this.integrationParameters.dt;
  }
  set timestep(A2) {
    this.integrationParameters.dt = A2;
  }
  get maxVelocityIterations() {
    return this.integrationParameters.maxVelocityIterations;
  }
  set maxVelocityIterations(A2) {
    this.integrationParameters.maxVelocityIterations = A2;
  }
  get maxVelocityFrictionIterations() {
    return this.integrationParameters.maxVelocityFrictionIterations;
  }
  set maxVelocityFrictionIterations(A2) {
    this.integrationParameters.maxVelocityFrictionIterations = A2;
  }
  get maxStabilizationIterations() {
    return this.integrationParameters.maxStabilizationIterations;
  }
  set maxStabilizationIterations(A2) {
    this.integrationParameters.maxStabilizationIterations = A2;
  }
  createRigidBody(A2) {
    return this.bodies.createRigidBody(this.colliders, A2);
  }
  createCharacterController(A2) {
    let I2 = new HI(A2, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    return this.characterControllers.add(I2), I2;
  }
  removeCharacterController(A2) {
    this.characterControllers.delete(A2), A2.free();
  }
  createCollider(A2, I2) {
    let g2 = I2 ? I2.handle : void 0;
    return this.colliders.createCollider(this.bodies, A2, g2);
  }
  createImpulseJoint(A2, I2, g2, C2) {
    return this.impulseJoints.createJoint(this.bodies, A2, I2.handle, g2.handle, C2);
  }
  createMultibodyJoint(A2, I2, g2, C2) {
    return this.multibodyJoints.createJoint(A2, I2.handle, g2.handle, C2);
  }
  getRigidBody(A2) {
    return this.bodies.get(A2);
  }
  getCollider(A2) {
    return this.colliders.get(A2);
  }
  getImpulseJoint(A2) {
    return this.impulseJoints.get(A2);
  }
  getMultibodyJoint(A2) {
    return this.multibodyJoints.get(A2);
  }
  removeRigidBody(A2) {
    this.bodies && this.bodies.remove(A2.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  removeCollider(A2, I2) {
    this.colliders && this.colliders.remove(A2.handle, this.islands, this.bodies, I2);
  }
  removeImpulseJoint(A2, I2) {
    this.impulseJoints && this.impulseJoints.remove(A2.handle, I2);
  }
  removeMultibodyJoint(A2, I2) {
    this.impulseJoints && this.multibodyJoints.remove(A2.handle, I2);
  }
  forEachCollider(A2) {
    this.colliders.forEach(A2);
  }
  forEachRigidBody(A2) {
    this.bodies.forEach(A2);
  }
  forEachActiveRigidBody(A2) {
    this.bodies.forEachActiveRigidBody(this.islands, A2);
  }
  castRay(A2, I2, g2, C2, B2, Q2, E2, i2) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
  }
  intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2, E2 ? E2.handle : null, i2 ? i2.handle : null, this.colliders.castClosure(D2));
  }
  intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2) {
    let D2 = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
    return D2 != null ? this.colliders.get(D2) : null;
  }
  projectPoint(A2, I2, g2, C2, B2, Q2, E2) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, A2, I2, g2, C2, B2 ? B2.handle : null, Q2 ? Q2.handle : null, this.colliders.castClosure(E2));
  }
  projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, A2, I2, g2, C2 ? C2.handle : null, B2 ? B2.handle : null, this.colliders.castClosure(Q2));
  }
  intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, A2, this.colliders.castClosure(I2), g2, C2, B2 ? B2.handle : null, Q2 ? Q2.handle : null, this.colliders.castClosure(E2));
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2, E2, i2, D2 ? D2.handle : null, o2 ? o2.handle : null, this.colliders.castClosure(G2));
  }
  intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, A2, I2, g2, this.colliders.castClosure(C2), B2, Q2, E2 ? E2.handle : null, i2 ? i2.handle : null, this.colliders.castClosure(D2));
  }
  collidersWithAabbIntersectingAabb(A2, I2, g2) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(A2, I2, this.colliders.castClosure(g2));
  }
  contactsWith(A2, I2) {
    this.narrowPhase.contactsWith(A2.handle, this.colliders.castClosure(I2));
  }
  intersectionsWith(A2, I2) {
    this.narrowPhase.intersectionsWith(A2.handle, this.colliders.castClosure(I2));
  }
  contactPair(A2, I2, g2) {
    this.narrowPhase.contactPair(A2.handle, I2.handle, g2);
  }
  intersectionPair(A2, I2) {
    return this.narrowPhase.intersectionPair(A2.handle, I2.handle);
  }
}
!function(A2) {
  A2[A2.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", A2[A2.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
}(hA || (hA = {}));
class tI {
  free() {
    this.raw.free(), this.raw = void 0;
  }
  collider1() {
    return this.raw.collider1();
  }
  collider2() {
    return this.raw.collider2();
  }
  totalForce() {
    return iA.fromRaw(this.raw.total_force());
  }
  totalForceMagnitude() {
    return this.raw.total_force_magnitude();
  }
  maxForceDirection() {
    return iA.fromRaw(this.raw.max_force_direction());
  }
  maxForceMagnitude() {
    return this.raw.max_force_magnitude();
  }
}
class pI {
  constructor(A2, I2) {
    this.raw = I2 || new d(A2);
  }
  free() {
    this.raw.free(), this.raw = void 0;
  }
  drainCollisionEvents(A2) {
    this.raw.drainCollisionEvents(A2);
  }
  drainContactForceEvents(A2) {
    let I2 = new tI();
    this.raw.drainContactForceEvents((g2) => {
      I2.raw = g2, A2(I2), I2.free();
    });
  }
  clear() {
    this.raw.clear();
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function rI(A2, I2, g2, C2) {
  return new (g2 || (g2 = Promise))(function(B2, Q2) {
    function E2(A3) {
      try {
        D2(C2.next(A3));
      } catch (A4) {
        Q2(A4);
      }
    }
    function i2(A3) {
      try {
        D2(C2.throw(A3));
      } catch (A4) {
        Q2(A4);
      }
    }
    function D2(A3) {
      var I3;
      A3.done ? B2(A3.value) : (I3 = A3.value, I3 instanceof g2 ? I3 : new g2(function(A4) {
        A4(I3);
      })).then(E2, i2);
    }
    D2((C2 = C2.apply(A2, I2 || [])).next());
  });
}
!function(A2) {
  A2[A2.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", A2[A2.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
}(MA || (MA = {})), function(A2) {
  A2[A2.EMPTY = 0] = "EMPTY", A2[A2.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
}(NA || (NA = {}));
for (var eI = {byteLength: function(A2) {
  var I2 = WI(A2), g2 = I2[0], C2 = I2[1];
  return 3 * (g2 + C2) / 4 - C2;
}, toByteArray: function(A2) {
  var I2, g2, C2 = WI(A2), B2 = C2[0], Q2 = C2[1], E2 = new OI(function(A3, I3, g3) {
    return 3 * (I3 + g3) / 4 - g3;
  }(0, B2, Q2)), i2 = 0, D2 = Q2 > 0 ? B2 - 4 : B2;
  for (g2 = 0; g2 < D2; g2 += 4)
    I2 = dI[A2.charCodeAt(g2)] << 18 | dI[A2.charCodeAt(g2 + 1)] << 12 | dI[A2.charCodeAt(g2 + 2)] << 6 | dI[A2.charCodeAt(g2 + 3)], E2[i2++] = I2 >> 16 & 255, E2[i2++] = I2 >> 8 & 255, E2[i2++] = 255 & I2;
  Q2 === 2 && (I2 = dI[A2.charCodeAt(g2)] << 2 | dI[A2.charCodeAt(g2 + 1)] >> 4, E2[i2++] = 255 & I2);
  Q2 === 1 && (I2 = dI[A2.charCodeAt(g2)] << 10 | dI[A2.charCodeAt(g2 + 1)] << 4 | dI[A2.charCodeAt(g2 + 2)] >> 2, E2[i2++] = I2 >> 8 & 255, E2[i2++] = 255 & I2);
  return E2;
}, fromByteArray: function(A2) {
  for (var I2, g2 = A2.length, C2 = g2 % 3, B2 = [], Q2 = 16383, E2 = 0, i2 = g2 - C2; E2 < i2; E2 += Q2)
    B2.push(bI(A2, E2, E2 + Q2 > i2 ? i2 : E2 + Q2));
  C2 === 1 ? (I2 = A2[g2 - 1], B2.push(TI[I2 >> 2] + TI[I2 << 4 & 63] + "==")) : C2 === 2 && (I2 = (A2[g2 - 2] << 8) + A2[g2 - 1], B2.push(TI[I2 >> 10] + TI[I2 >> 4 & 63] + TI[I2 << 2 & 63] + "="));
  return B2.join("");
}}, TI = [], dI = [], OI = typeof Uint8Array != "undefined" ? Uint8Array : Array, nI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ZI = 0, xI = nI.length; ZI < xI; ++ZI)
  TI[ZI] = nI[ZI], dI[nI.charCodeAt(ZI)] = ZI;
function WI(A2) {
  var I2 = A2.length;
  if (I2 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var g2 = A2.indexOf("=");
  return g2 === -1 && (g2 = I2), [g2, g2 === I2 ? 0 : 4 - g2 % 4];
}
function bI(A2, I2, g2) {
  for (var C2, B2, Q2 = [], E2 = I2; E2 < g2; E2 += 3)
    C2 = (A2[E2] << 16 & 16711680) + (A2[E2 + 1] << 8 & 65280) + (255 & A2[E2 + 2]), Q2.push(TI[(B2 = C2) >> 18 & 63] + TI[B2 >> 12 & 63] + TI[B2 >> 6 & 63] + TI[63 & B2]);
  return Q2.join("");
}
function jI() {
  return rI(this, void 0, void 0, function* () {
  });
}
function fI() {
  return function() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.version(C2);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return k(I2, g2);
    } finally {
      A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_free(I2, g2);
    }
  }();
}
dI["-".charCodeAt(0)] = 62, dI["_".charCodeAt(0)] = 63;
var VI = Object.freeze({__proto__: null, version: fI, Vector3: EA, VectorOps: iA, Quaternion: DA, RotationOps: oA, get RigidBodyType() {
  return GA;
}, RigidBody: FA, RigidBodyDesc: qA, RigidBodySet: sA, IntegrationParameters: cA, get JointType() {
  return wA;
}, get MotorModel() {
  return SA;
}, ImpulseJoint: YA, UnitImpulseJoint: LA, FixedImpulseJoint: HA, PrismaticImpulseJoint: lA, RevoluteImpulseJoint: tA, SphericalImpulseJoint: pA, JointData: rA, ImpulseJointSet: eA, MultibodyJoint: TA, UnitMultibodyJoint: dA, FixedMultibodyJoint: OA, PrismaticMultibodyJoint: nA, RevoluteMultibodyJoint: ZA, SphericalMultibodyJoint: xA, MultibodyJointSet: WA, get CoefficientCombineRule() {
  return kA;
}, CCDSolver: bA, IslandManager: jA, BroadPhase: fA, NarrowPhase: VA, TempContactManifold: PA, Shape: gI, get ShapeType() {
  return aA;
}, Ball: CI, HalfSpace: BI, Cuboid: QI, RoundCuboid: EI, Capsule: iI, Segment: DI, Triangle: oI, RoundTriangle: GI, Polyline: wI, TriMesh: SI, ConvexPolyhedron: kI, RoundConvexPolyhedron: KI, Heightfield: aI, Cylinder: UI, RoundCylinder: yI, Cone: JI, RoundCone: hI, get ActiveCollisionTypes() {
  return UA;
}, Collider: MI, get MassPropsMode() {
  return yA;
}, ColliderDesc: NI, ColliderSet: FI, get FeatureType() {
  return KA;
}, Ray: zA, RayIntersection: vA, RayColliderIntersection: _A, RayColliderToi: $A, PointProjection: XA, PointColliderProjection: uA, ShapeTOI: AI, ShapeColliderTOI: II, ShapeContact: mA, World: lI, PhysicsPipeline: qI, SerializationPipeline: sI, get ActiveEvents() {
  return hA;
}, TempContactForceEvent: tI, EventQueue: pI, get ActiveHooks() {
  return MA;
}, get SolverFlags() {
  return NA;
}, DebugRenderBuffers: cI, DebugRenderPipeline: YI, get QueryFilterFlags() {
  return JA;
}, QueryPipeline: RI, init: jI, CharacterCollision: LI, KinematicCharacterController: HI});
export default VI;
export {UA as ActiveCollisionTypes, hA as ActiveEvents, MA as ActiveHooks, CI as Ball, fA as BroadPhase, bA as CCDSolver, iI as Capsule, LI as CharacterCollision, kA as CoefficientCombineRule, MI as Collider, NI as ColliderDesc, FI as ColliderSet, JI as Cone, kI as ConvexPolyhedron, QI as Cuboid, UI as Cylinder, cI as DebugRenderBuffers, YI as DebugRenderPipeline, pI as EventQueue, KA as FeatureType, HA as FixedImpulseJoint, OA as FixedMultibodyJoint, BI as HalfSpace, aI as Heightfield, YA as ImpulseJoint, eA as ImpulseJointSet, cA as IntegrationParameters, jA as IslandManager, rA as JointData, wA as JointType, HI as KinematicCharacterController, yA as MassPropsMode, SA as MotorModel, TA as MultibodyJoint, WA as MultibodyJointSet, VA as NarrowPhase, qI as PhysicsPipeline, uA as PointColliderProjection, XA as PointProjection, wI as Polyline, lA as PrismaticImpulseJoint, nA as PrismaticMultibodyJoint, DA as Quaternion, JA as QueryFilterFlags, RI as QueryPipeline, zA as Ray, _A as RayColliderIntersection, $A as RayColliderToi, vA as RayIntersection, tA as RevoluteImpulseJoint, ZA as RevoluteMultibodyJoint, FA as RigidBody, qA as RigidBodyDesc, sA as RigidBodySet, GA as RigidBodyType, oA as RotationOps, hI as RoundCone, KI as RoundConvexPolyhedron, EI as RoundCuboid, yI as RoundCylinder, GI as RoundTriangle, DI as Segment, sI as SerializationPipeline, gI as Shape, II as ShapeColliderTOI, mA as ShapeContact, AI as ShapeTOI, aA as ShapeType, NA as SolverFlags, pA as SphericalImpulseJoint, xA as SphericalMultibodyJoint, tI as TempContactForceEvent, PA as TempContactManifold, SI as TriMesh, oI as Triangle, LA as UnitImpulseJoint, dA as UnitMultibodyJoint, EA as Vector3, iA as VectorOps, lI as World, jI as init, fI as version};