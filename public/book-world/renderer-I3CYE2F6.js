import{a as go,b as ss,c as pi}from"./chunk-PQ7DLSCF.js";var yc=0,nl=1,qc=2;var il=1,la=2,un=3,Mn=0,gt=1,Wt=2,En=0,Qn=1,sl=2,rl=3,al=4,Mc=5,Fn=100,Sc=101,bc=102,Ec=103,Tc=104,wc=200,Ac=201,Rc=202,Cc=203,Cr=204,Ir=205,Ic=206,Pc=207,Lc=208,Dc=209,Uc=210,Nc=211,Fc=212,Oc=213,Bc=214,ca=0,ha=1,ua=2,jn=3,da=4,fa=5,pa=6,ma=7,ga=0,zc=1,kc=2,Tn=0,Vc=1,Hc=2,Gc=3,_a=4,Wc=5,Xc=6,Yc=7;var ol=300,ri=301,ai=302,xa=303,va=304,Zs=306,Pr=1e3,Un=1001,Lr=1002,Lt=1003,Zc=1004;var Js=1005;var Qt=1006,ya=1007;var Vn=1008;var nn=1009,ll=1010,cl=1011,Wi=1012,qa=1013,Hn=1014,sn=1015,Xi=1016,Ma=1017,Sa=1018,Yi=1020,hl=35902,ul=35899,dl=1021,fl=1022,Xt=1023,Pi=1026,Zi=1027,ba=1028,Ea=1029,pl=1030,Ta=1031;var wa=1033,$s=33776,Ks=33777,Qs=33778,js=33779,Aa=35840,Ra=35841,Ca=35842,Ia=35843,Pa=36196,La=37492,Da=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,ka=37814,Va=37815,Ha=37816,Ga=37817,Wa=37818,Xa=37819,Ya=37820,Za=37821,Ja=36492,$a=36494,Ka=36495,Qa=36283,ja=36284,eo=36285,to=36286;var _s=2300,Dr=2301,Rr=2302,Ho=2400,Go=2401,Wo=2402;var Jc=3200,$c=3201;var no=0,Kc=1,wn="",Mt="srgb",ei="srgb-linear",xs="linear",tt="srgb";var $n=7680;var Xo=519,Qc=512,jc=513,eh=514,ml=515,th=516,nh=517,ih=518,sh=519,Yo=35044;var gl="300 es",Kt=2e3,vs=2001;var Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,fs=Math.PI/180,Li=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function _l(i,e){return(i%e+e)%e}function tu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nu(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function iu(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function su(i,e=1){return e-Math.abs(_l(i,e*2)-e)}function ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ou(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lu(i,e){return i+Math.random()*(e-i)}function cu(i){return i*(.5-Math.random())}function hu(i){i!==void 0&&(Yl=i);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uu(i){return i*fs}function du(i){return i*Li}function fu(i){return(i&i-1)===0&&i!==0}function pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ji={DEG2RAD:fs,RAD2DEG:Li,generateUUID:oi,clamp:Ge,euclideanModulo:_l,mapLinear:tu,inverseLerp:nu,lerp:ps,damp:iu,pingpong:su,smoothstep:ru,smootherstep:au,randInt:ou,randFloat:lu,randFloatSpread:cu,seededRandom:hu,degToRad:uu,radToDeg:du,isPowerOfTwo:fu,ceilPowerOfTwo:pu,floorPowerOfTwo:mu,setQuaternionFromProperEuler:gu,normalize:Ct,denormalize:Ri},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==g){let m=1-o,h=c*f+l*p+u*g+d*_,E=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){let w=Math.sqrt(S),R=Math.atan2(w,h*E);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}let y=o*E;if(c=c*m+f*y,l=l*m+p*y,u=u*m+g*y,d=d*m+_*y,m===1-o){let w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-o*p,e[t+2]=l*g+u*p+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new P,Zl=new jt,Be=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],h=s[6],E=s[1],S=s[4],y=s[7],w=s[2],R=s[5],A=s[8];return r[0]=a*_+o*E+c*w,r[3]=a*m+o*S+c*R,r[6]=a*h+o*y+c*A,r[1]=l*_+u*E+d*w,r[4]=l*m+u*S+d*R,r[7]=l*h+u*y+d*A,r[2]=f*_+p*E+g*w,r[5]=f*m+p*S+g*R,r[8]=f*h+p*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=t*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xo=new Be;function xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){let i=Di("canvas");return i.style.display="block",i}var Jl={};function Ui(i){i in Jl||(Jl[i]=!0,console.warn(i))}function ah(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $l=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _u(){let i={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ei]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:$l,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:$l,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var Je=_u();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mi,Ur=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=Di("canvas")),mi.width=e.width,mi.height=e.height;let s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Di("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xu=0,Ni=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vu=0,yo=new P,wt=class i extends Sn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,s=Un,r=Qt,a=Vn,o=Xt,c=nn,l=i.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=oi(),this.name="",this.source=new Ni(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=ol;wt.DEFAULT_ANISOTROPY=1;var et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,y=(p+1)/2,w=(h+1)/2,R=(u+f)/4,A=(d+_)/4,I=(g+m)/4;return S>y&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=A/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=I/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nr=class extends Sn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new wt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ni(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Nr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ys=class extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fr=class extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),lr.subVectors(this.max,rs),gi.subVectors(e.a,rs),_i.subVectors(e.b,rs),xi.subVectors(e.c,rs),An.subVectors(_i,gi),Rn.subVectors(xi,_i),Xn.subVectors(gi,xi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Xn.y,Xn.x,0];return!qo(t,gi,_i,xi,lr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,gi,_i,xi,lr))?!1:(cr.crossVectors(An,Rn),t=[cr.x,cr.y,cr.z],qo(t,gi,_i,xi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mn=[new P,new P,new P,new P,new P,new P,new P,new P],Zt=new P,or=new cn,gi=new P,_i=new P,xi=new P,An=new P,Rn=new P,Xn=new P,rs=new P,lr=new P,cr=new P,Yn=new P;function qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),c=e.dot(Yn),l=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var yu=new cn,as=new P,Mo=new P,On=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Mo)),this.expandByPoint(as.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gn=new P,So=new P,hr=new P,Cn=new P,bo=new P,ur=new P,Eo=new P,Or=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){So.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(So);let r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=Cn.dot(this.direction),c=-Cn.dot(hr),l=Cn.lengthSq(),u=Math.abs(1-a*a),d,f,p,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(So).addScaledVector(hr,f),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);let n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){bo.subVectors(t,e),ur.subVectors(n,e),Eo.crossVectors(bo,ur);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);let c=o*this.direction.dot(ur.crossVectors(Cn,ur));if(c<0)return null;let l=o*this.direction.dot(bo.cross(Cn));if(l<0||c+l>a)return null;let u=-o*Cn.dot(Eo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class i{constructor(e,t,n,s,r,a,o,c,l,u,d,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,f,p,g,_,m)}set(e,t,n,s,r,a,o,c,l,u,d,f,p,g,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,Mu)}lookAt(e,t,n){let s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),In.crossVectors(n,Ft),In.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),In.crossVectors(n,Ft)),In.normalize(),dr.crossVectors(Ft,In),s[0]=In.x,s[4]=dr.x,s[8]=Ft.x,s[1]=In.y,s[5]=dr.y,s[9]=Ft.y,s[2]=In.z,s[6]=dr.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],E=n[3],S=n[7],y=n[11],w=n[15],R=s[0],A=s[4],I=s[8],M=s[12],x=s[1],T=s[5],L=s[9],B=s[13],U=s[2],G=s[6],k=s[10],J=s[14],V=s[3],le=s[7],pe=s[11],xe=s[15];return r[0]=a*R+o*x+c*U+l*V,r[4]=a*A+o*T+c*G+l*le,r[8]=a*I+o*L+c*k+l*pe,r[12]=a*M+o*B+c*J+l*xe,r[1]=u*R+d*x+f*U+p*V,r[5]=u*A+d*T+f*G+p*le,r[9]=u*I+d*L+f*k+p*pe,r[13]=u*M+d*B+f*J+p*xe,r[2]=g*R+_*x+m*U+h*V,r[6]=g*A+_*T+m*G+h*le,r[10]=g*I+_*L+m*k+h*pe,r[14]=g*M+_*B+m*J+h*xe,r[3]=E*R+S*x+y*U+w*V,r[7]=E*A+S*T+y*G+w*le,r[11]=E*I+S*L+y*k+w*pe,r[15]=E*M+S*B+y*J+w*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*p-n*c*p)+_*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+t*l*d-t*o*p-r*a*d+n*a*p+r*o*u-n*l*u)+h*(-s*o*u-t*c*d+t*o*f+s*a*d-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],E=d*m*l-_*f*l+_*c*p-o*m*p-d*c*h+o*f*h,S=g*f*l-u*m*l-g*c*p+a*m*p+u*c*h-a*f*h,y=u*_*l-g*d*l+g*o*p-a*_*p-u*o*h+a*d*h,w=g*d*c-u*_*c-g*o*f+a*_*f+u*o*m-a*d*m,R=t*E+n*S+s*y+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=E*A,e[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*h-n*f*h)*A,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*h+n*c*h)*A,e[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*p-n*c*p)*A,e[4]=S*A,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*h+t*f*h)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*h-t*c*h)*A,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*A,e[8]=y*A,e[9]=(g*d*r-u*_*r-g*n*p+t*_*p+u*n*h-t*d*h)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*h+t*o*h)*A,e[11]=(u*o*r-a*d*r-u*n*l+t*d*l+a*n*p-t*o*p)*A,e[12]=w*A,e[13]=(u*_*s-g*d*s+g*n*f-t*_*f-u*n*m+t*d*m)*A,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,p=r*u,g=r*d,_=a*u,m=a*d,h=o*d,E=c*l,S=c*u,y=c*d,w=n.x,R=n.y,A=n.z;return s[0]=(1-(_+h))*w,s[1]=(p+y)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(f+h))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+S)*A,s[9]=(m-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vi.set(s[0],s[1],s[2]).length(),a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);let l=1/r,u=1/a,d=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Kt,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Kt)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===vs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kt,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Kt)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===vs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vi=new P,Jt=new Qe,qu=new P(0,0,0),Mu=new P(1,1,1),In=new P,dr=new P,Ft=new P,Ql=new Qe,jl=new jt,Gt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Su=0,ec=new P,yi=new jt,_n=new Qe,fr=new P,os=new P,bu=new P,Eu=new jt,tc=new P(1,0,0),nc=new P(0,1,0),ic=new P(0,0,1),sc={type:"added"},Tu={type:"removed"},qi={type:"childadded",child:null},To={type:"childremoved",child:null},ft=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Gt,n=new jt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Be}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(os,fr,this.up):_n.lookAt(fr,os,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(_n),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ft.DEFAULT_UP=new P(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=new P,xn=new P,wo=new P,vn=new P,Mi=new P,Si=new P,rc=new P,Ao=new P,Ro=new P,Co=new P,Io=new et,Po=new et,Lo=new et,Dn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),xn.subVectors(n,t),wo.subVectors(e,t);let a=$t.dot($t),o=$t.dot(xn),c=$t.dot(wo),l=xn.dot(xn),u=xn.dot(wo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(a,vn.y),c.addScaledVector(o,vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Io.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Io.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),xn.subVectors(e,t),$t.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),$t.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Si.subVectors(r,n),Ao.subVectors(e,n);let c=Mi.dot(Ao),l=Si.dot(Ao);if(c<=0&&l<=0)return t.copy(n);Ro.subVectors(e,s);let u=Mi.dot(Ro),d=Si.dot(Ro);if(u>=0&&d<=u)return t.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);Co.subVectors(e,r);let p=Mi.dot(Co),g=Si.dot(Co);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Si,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return rc.subVectors(r,s),o=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(rc,o);let h=1/(m+_+f);return a=_*h,o=f*h,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=_l(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(Tt.copy(this),e),Math.round(Ge(Tt.r*255,0,255))*65536+Math.round(Ge(Tt.g*255,0,255))*256+Math.round(Ge(Tt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Mt){Je.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(pr);let n=ps(Pn.h,pr.h,t),s=ps(Pn.s,pr.s,t),r=ps(Pn.l,pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new He;He.NAMES=oh;var wu=0,hn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Qn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Ir,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ti=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dt=new P,mr=new de,Au=0,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yo&&(e.usage=this.usage),e}};var Ms=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ss=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ru=0,Ht=new Qe,Uo=new ft,bi=new P,Ot=new cn,ls=new cn,yt=new P,en=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xl(e)?Ss:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ot.min,ls.min),Ot.expandByPoint(yt),yt.addVectors(Ot.max,ls.max),Ot.expandByPoint(yt)):(Ot.expandByPoint(ls.min),Ot.expandByPoint(ls.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)yt.fromBufferAttribute(o,l),c&&(bi.fromBufferAttribute(e,l),yt.add(bi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;let l=new P,u=new P,d=new P,f=new de,p=new de,g=new de,_=new P,m=new P;function h(I,M,x){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),o[I].add(_),o[M].add(_),o[x].add(_),c[I].add(m),c[M].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,M=E.length;I<M;++I){let x=E[I],T=x.start,L=x.count;for(let B=T,U=T+L;B<U;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new P,y=new P,w=new P,R=new P;function A(I){w.fromBufferAttribute(s,I),R.copy(w);let M=o[I];S.copy(M),S.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(R,M);let T=y.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,T)}for(let I=0,M=E.length;I<M;++I){let x=E[I],T=x.start,L=x.count;for(let B=T,U=T+L;B<U;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new Pt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ac=new Qe,Zn=new Or,gr=new On,oc=new P,_r=new P,xr=new P,vr=new P,No=new P,yr=new P,lc=new P,qr=new P,ke=class extends ft{constructor(e=new en,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(No.fromBufferAttribute(d,e),a?yr.addScaledVector(No,u):yr.addScaledVector(No.sub(t),u))}t.add(yr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(gr.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(gr,oc)===null||Zn.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(ac.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,w=S;y<w;y+=3){let R=o.getX(y),A=o.getX(y+1),I=o.getX(y+2);s=Mr(this,h,e,n,l,u,d,R,A,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let E=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=Mr(this,a,e,n,l,u,d,E,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,w=S;y<w;y+=3){let R=y,A=y+1,I=y+2;s=Mr(this,h,e,n,l,u,d,R,A,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let E=m,S=m+1,y=m+2;s=Mr(this,a,e,n,l,u,d,E,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Cu(i,e,t,n,s,r,a,o){let c;if(e.side===gt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Mn,o),c===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qr);return l<t.near||l>t.far?null:{distance:l,point:qr.clone(),object:i}}function Mr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,_r),i.getVertexPosition(c,xr),i.getVertexPosition(l,vr);let u=Cu(i,e,t,n,_r,xr,vr,lc);if(u){let d=new P;Dn.getBarycoord(lc,_r,xr,vr,d),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,c,l,d,new de)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,c,l,d,new de)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,c,l,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new P,materialIndex:0};Dn.getNormal(_r,xr,vr,f.normal),u.face=f,u.barycoord=d}return u}var mt=class i extends en{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function g(_,m,h,E,S,y,w,R,A,I,M){let x=y/A,T=w/I,L=y/2,B=w/2,U=R/2,G=A+1,k=I+1,J=0,V=0,le=new P;for(let pe=0;pe<k;pe++){let xe=pe*T-B;for(let Ne=0;Ne<G;Ne++){let We=Ne*x-L;le[_]=We*E,le[m]=xe*S,le[h]=U,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[h]=R>0?1:-1,u.push(le.x,le.y,le.z),d.push(Ne/A),d.push(1-pe/I),J+=1}}for(let pe=0;pe<I;pe++)for(let xe=0;xe<A;xe++){let Ne=f+xe+G*pe,We=f+xe+G*(pe+1),Ke=f+(xe+1)+G*(pe+1),Xe=f+(xe+1)+G*pe;c.push(Ne,We,Xe),c.push(We,Ke,Xe),V+=6}o.addGroup(p,V,M),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=li(i[t]);for(let s in n)e[s]=n[s]}return e}function Iu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var lh={clone:li,merge:At},Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bs=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Kt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ln=new P,cc=new de,hc=new de,St=class extends bs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,cc,hc),t.subVectors(hc,cc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ei=-90,Ti=1,Br=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ei,Ti,e,t);s.layers=this.layers,this.add(s);let r=new St(Ei,Ti,e,t);r.layers=this.layers,this.add(r);let a=new St(Ei,Ti,e,t);a.layers=this.layers,this.add(a);let o=new St(Ei,Ti,e,t);o.layers=this.layers,this.add(o);let c=new St(Ei,Ti,e,t);c.layers=this.layers,this.add(c);let l=new St(Ei,Ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Kt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends wt{constructor(e=[],t=ri,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zr=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mt(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:En});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Qt),new Br(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},bt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Du={type:"move"},Fi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Du)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Bn=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var kr=class extends wt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Lt,u=Lt,d,f){super(null,a,o,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wi=new Qe,uc=new Qe,Sr=[],dc=new cn,Uu=new Qe,cs=new ke,hs=new On,ni=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Uu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),dc.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(dc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),hs.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wi),uc.multiplyMatrices(n,wi),cs.matrixWorld=uc,cs.raycast(e,Sr);for(let a=0,o=Sr.length;a<o;a++){let c=Sr[a];c.instanceId=r,c.object=this,t.push(c)}Sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,ba,sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fo=new P,Nu=new P,Fu=new Be,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fo.subVectors(n,t).cross(Nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fu.getNormalMatrix(e),s=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new On,Ou=new de(.5,.5),br=new P,Oi=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],h=r[11],E=r[12],S=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-a,p-u,h-g,w-E).normalize(),s[1].setComponents(l+a,p+u,h+g,w+E).normalize(),s[2].setComponents(l+o,p+d,h+_,w+S).normalize(),s[3].setComponents(l-o,p-d,h-_,w-S).normalize(),n)s[4].setComponents(c,f,m,y).normalize(),s[5].setComponents(l-c,p-f,h-m,w-y).normalize();else if(s[4].setComponents(l-c,p-f,h-m,w-y).normalize(),t===Kt)s[5].setComponents(l+c,p+f,h+m,w+y).normalize();else if(t===vs)s[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);let t=Ou.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ws=class extends wt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends wt{constructor(e,t,n=Hn,s,r,a,o=Lt,c=Lt,l,u=Pi,d=1){if(u!==Pi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ni(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vr=class i extends en{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,_=[],m=n/2,h=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function E(){let y=new P,w=new P,R=0,A=(t-e)/n;for(let I=0;I<=r;I++){let M=[],x=I/r,T=x*(t-e)+e;for(let L=0;L<=s;L++){let B=L/s,U=B*c+o,G=Math.sin(U),k=Math.cos(U);w.x=T*G,w.y=-x*n+m,w.z=T*k,d.push(w.x,w.y,w.z),y.set(G,A,k).normalize(),f.push(y.x,y.y,y.z),p.push(B,1-x),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let x=_[M][I],T=_[M+1][I],L=_[M+1][I+1],B=_[M][I+1];(e>0||M!==0)&&(u.push(x,T,B),R+=3),(t>0||M!==r-1)&&(u.push(T,L,B),R+=3)}l.addGroup(h,R,0),h+=R}function S(y){let w=g,R=new de,A=new P,I=0,M=y===!0?e:t,x=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;let T=g;for(let L=0;L<=s;L++){let U=L/s*c+o,G=Math.cos(U),k=Math.sin(U);A.x=M*k,A.y=m*x,A.z=M*G,d.push(A.x,A.y,A.z),f.push(0,x,0),R.x=G*.5+.5,R.y=k*.5*x+.5,p.push(R.x,R.y),g++}for(let L=0;L<s;L++){let B=w+L,U=T+L;y===!0?u.push(U,U+1,B):u.push(U+1,U,B),I+=3}l.addGroup(h,I,y===!0?1:2),h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class i extends Vr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new Qe;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ge(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ge(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bi=class extends Bt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*d+this.aX,l=f*d+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hr=class extends Bi{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+d)+(c-o)/d;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Er=new P,Oo=new yl,Bo=new yl,zo=new yl,Gr=class extends Bt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),l=Er);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Er),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Oo.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,_,m),Bo.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,_,m),zo.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Bo.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),zo.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Oo.calc(c),Bo.calc(c),zo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Bu(i,e){let t=1-i;return t*t*e}function zu(i,e){return 2*(1-i)*i*e}function ku(i,e){return i*i*e}function ms(i,e,t,n){return Bu(i,e)+zu(i,t)+ku(i,n)}function Vu(i,e){let t=1-i;return t*t*t*e}function Hu(i,e){let t=1-i;return 3*t*t*i*e}function Gu(i,e){return 3*(1-i)*i*i*e}function Wu(i,e){return i*i*i*e}function gs(i,e,t,n,s){return Vu(i,e)+Hu(i,t)+Gu(i,n)+Wu(i,s)}var Is=class extends Bt{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,s.x,r.x,a.x,o.x),gs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wr=class extends Bt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,s.x,r.x,a.x,o.x),gs(e,s.y,r.y,a.y,o.y),gs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends Bt{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends Bt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Bt{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(e,s.x,r.x,a.x),ms(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends Bt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(e,s.x,r.x,a.x),ms(e,s.y,r.y,a.y),ms(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Bt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(fc(o,c.x,l.x,u.x,d.x),fc(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Zo=Object.freeze({__proto__:null,ArcCurve:Hr,CatmullRomCurve3:Gr,CubicBezierCurve:Is,CubicBezierCurve3:Wr,EllipseCurve:Bi,LineCurve:Ps,LineCurve3:Xr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Yr,SplineCurve:Ds}),Zr=class extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}},zi=class extends Zr{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ps(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ls(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Is(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ds(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Bi(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Kn=class extends zi{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new zi().fromJSON(s))}return this}};function Xu(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ch(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Ku(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let p=i[f],g=i[f+1];p<o&&(o=p),g<c&&(c=g),p>u&&(u=p),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Us(r,a,t,o,c,l,0),a}function ch(i,e,t,n,s){let r;if(s===ld(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=pc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pc(a/n|0,i[a],i[a+1],r);return r&&ki(r,r.next)&&(Fs(r),r=r.next),r}function ii(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ki(t,t.next)||ht(t.prev,t,t.next)===0)){if(Fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Us(i,e,t,n,s,r,a){if(!i)return;!a&&r&&nd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Zu(i,n,s,r):Yu(i)){e.push(c.i,i.i,l.i),Fs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Ju(ii(i),e),Us(i,e,t,n,s,r,2)):a===2&&$u(i,e,t,n,s,r):Us(ii(i),e,t,n,s,r,1);break}}}function Yu(i){let e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),d=Math.min(o,c,l),f=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=p&&ds(s,o,r,c,a,l,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zu(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ht(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,f=a.y,p=Math.min(o,c,l),g=Math.min(u,d,f),_=Math.max(o,c,l),m=Math.max(u,d,f),h=Jo(p,g,e,t,n),E=Jo(_,m,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=h&&y&&y.z<=E;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ds(o,u,c,d,l,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,u,c,d,l,f,y.x,y.y)&&ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=h;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ds(o,u,c,d,l,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=E;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,u,c,d,l,f,y.x,y.y)&&ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ju(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ki(n,s)&&uh(n,t,t.next,s)&&Ns(n,s)&&Ns(s,n)&&(e.push(n.i,t.i,s.i),Fs(t),Fs(t.next),t=i=s),t=t.next}while(t!==i);return ii(t)}function $u(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rd(a,o)){let c=dh(a,o);a=ii(a,a.next),c=ii(c,c.next),Us(a,e,t,n,s,r,0),Us(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ku(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=ch(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(sd(l))}s.sort(Qu);for(let r=0;r<s.length;r++)t=ju(s[r],t);return t}function Qu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ju(i,e){let t=ed(i,e);if(!t)return e;let n=dh(t,i);return ii(n,n.next),ii(t,t.next)}function ed(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ki(i,t))return t;do{if(ki(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ns(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&td(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function td(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function nd(i,e,t,n){let s=i;do s.z===0&&(s.z=Jo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,id(s)}function id(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Jo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ds(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&hh(i,e,t,n,s,r,a,o)}function rd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ad(i,e)&&(Ns(i,e)&&Ns(e,i)&&od(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||ki(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ki(i,e){return i.x===e.x&&i.y===e.y}function uh(i,e,t,n){let s=wr(ht(i,e,t)),r=wr(ht(i,e,n)),a=wr(ht(t,n,i)),o=wr(ht(t,n,e));return!!(s!==r&&a!==o||s===0&&Tr(i,t,e)||r===0&&Tr(i,n,e)||a===0&&Tr(t,i,n)||o===0&&Tr(t,e,n))}function Tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wr(i){return i>0?1:i<0?-1:0}function ad(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function od(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){let t=$o(i.i,i.x,i.y),n=$o(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pc(i,e,t,n){let s=$o(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $o(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ld(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ko=class{static triangulate(e,t,n=2){return Xu(e,t,n)}},Nn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mc(e),gc(n,e);let a=e.length;t.forEach(mc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,gc(n,t[c]);let o=Ko.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function mc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Os=class i extends en{constructor(e=new Kn([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:cd,S,y=!1,w,R,A,I;h&&(S=h.getSpacedPoints(u),y=!0,f=!1,w=h.computeFrenetFrames(u,!1),R=new P,A=new P,I=new P),f||(m=0,p=0,g=0,_=0);let M=o.extractPoints(l),x=M.shape,T=M.holes;if(!Nn.isClockWise(x)){x=x.reverse();for(let ee=0,K=T.length;ee<K;ee++){let $=T[ee];Nn.isClockWise($)&&(T[ee]=$.reverse())}}function B(ee){let $=10000000000000001e-36,Z=ee[0];for(let ce=1;ce<=ee.length;ce++){let ne=ce%ee.length,he=ee[ne],Fe=he.x-Z.x,Ue=he.y-Z.y,b=Fe*Fe+Ue*Ue,v=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(Z.x),Math.abs(Z.y)),O=$*v*v;if(b<=O){ee.splice(ne,1),ce--;continue}Z=he}}B(x),T.forEach(B);let U=T.length,G=x;for(let ee=0;ee<U;ee++){let K=T[ee];x=x.concat(K)}function k(ee,K,$){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(K,$)}let J=x.length;function V(ee,K,$){let Z,ce,ne,he=ee.x-K.x,Fe=ee.y-K.y,Ue=$.x-ee.x,b=$.y-ee.y,v=he*he+Fe*Fe,O=he*b-Fe*Ue;if(Math.abs(O)>Number.EPSILON){let W=Math.sqrt(v),j=Math.sqrt(Ue*Ue+b*b),X=K.x-Fe/W,we=K.y+he/W,oe=$.x-b/j,be=$.y+Ue/j,Ee=((oe-X)*b-(be-we)*Ue)/(he*b-Fe*Ue);Z=X+he*Ee-ee.x,ce=we+Fe*Ee-ee.y;let ie=Z*Z+ce*ce;if(ie<=2)return new de(Z,ce);ne=Math.sqrt(ie/2)}else{let W=!1;he>Number.EPSILON?Ue>Number.EPSILON&&(W=!0):he<-Number.EPSILON?Ue<-Number.EPSILON&&(W=!0):Math.sign(Fe)===Math.sign(b)&&(W=!0),W?(Z=-Fe,ce=he,ne=Math.sqrt(v)):(Z=he,ce=Fe,ne=Math.sqrt(v/2))}return new de(Z/ne,ce/ne)}let le=[];for(let ee=0,K=G.length,$=K-1,Z=ee+1;ee<K;ee++,$++,Z++)$===K&&($=0),Z===K&&(Z=0),le[ee]=V(G[ee],G[$],G[Z]);let pe=[],xe,Ne=le.concat();for(let ee=0,K=U;ee<K;ee++){let $=T[ee];xe=[];for(let Z=0,ce=$.length,ne=ce-1,he=Z+1;Z<ce;Z++,ne++,he++)ne===ce&&(ne=0),he===ce&&(he=0),xe[Z]=V($[Z],$[ne],$[he]);pe.push(xe),Ne=Ne.concat(xe)}let We;if(m===0)We=Nn.triangulateShape(G,T);else{let ee=[],K=[];for(let $=0;$<m;$++){let Z=$/m,ce=p*Math.cos(Z*Math.PI/2),ne=g*Math.sin(Z*Math.PI/2)+_;for(let he=0,Fe=G.length;he<Fe;he++){let Ue=k(G[he],le[he],ne);Re(Ue.x,Ue.y,-ce),Z===0&&ee.push(Ue)}for(let he=0,Fe=U;he<Fe;he++){let Ue=T[he];xe=pe[he];let b=[];for(let v=0,O=Ue.length;v<O;v++){let W=k(Ue[v],xe[v],ne);Re(W.x,W.y,-ce),Z===0&&b.push(W)}Z===0&&K.push(b)}}We=Nn.triangulateShape(ee,K)}let Ke=We.length,Xe=g+_;for(let ee=0;ee<J;ee++){let K=f?k(x[ee],Ne[ee],Xe):x[ee];y?(A.copy(w.normals[0]).multiplyScalar(K.x),R.copy(w.binormals[0]).multiplyScalar(K.y),I.copy(S[0]).add(A).add(R),Re(I.x,I.y,I.z)):Re(K.x,K.y,0)}for(let ee=1;ee<=u;ee++)for(let K=0;K<J;K++){let $=f?k(x[K],Ne[K],Xe):x[K];y?(A.copy(w.normals[ee]).multiplyScalar($.x),R.copy(w.binormals[ee]).multiplyScalar($.y),I.copy(S[ee]).add(A).add(R),Re(I.x,I.y,I.z)):Re($.x,$.y,d/u*ee)}for(let ee=m-1;ee>=0;ee--){let K=ee/m,$=p*Math.cos(K*Math.PI/2),Z=g*Math.sin(K*Math.PI/2)+_;for(let ce=0,ne=G.length;ce<ne;ce++){let he=k(G[ce],le[ce],Z);Re(he.x,he.y,d+$)}for(let ce=0,ne=T.length;ce<ne;ce++){let he=T[ce];xe=pe[ce];for(let Fe=0,Ue=he.length;Fe<Ue;Fe++){let b=k(he[Fe],xe[Fe],Z);y?Re(b.x,b.y+S[u-1].y,S[u-1].x+$):Re(b.x,b.y,d+$)}}}Y(),te();function Y(){let ee=s.length/3;if(f){let K=0,$=J*K;for(let Z=0;Z<Ke;Z++){let ce=We[Z];Se(ce[2]+$,ce[1]+$,ce[0]+$)}K=u+m*2,$=J*K;for(let Z=0;Z<Ke;Z++){let ce=We[Z];Se(ce[0]+$,ce[1]+$,ce[2]+$)}}else{for(let K=0;K<Ke;K++){let $=We[K];Se($[2],$[1],$[0])}for(let K=0;K<Ke;K++){let $=We[K];Se($[0]+J*u,$[1]+J*u,$[2]+J*u)}}n.addGroup(ee,s.length/3-ee,0)}function te(){let ee=s.length/3,K=0;ye(G,K),K+=G.length;for(let $=0,Z=T.length;$<Z;$++){let ce=T[$];ye(ce,K),K+=ce.length}n.addGroup(ee,s.length/3-ee,1)}function ye(ee,K){let $=ee.length;for(;--$>=0;){let Z=$,ce=$-1;ce<0&&(ce=ee.length-1);for(let ne=0,he=u+m*2;ne<he;ne++){let Fe=J*ne,Ue=J*(ne+1),b=K+Z+Fe,v=K+ce+Fe,O=K+ce+Ue,W=K+Z+Ue;Ye(b,v,O,W)}}}function Re(ee,K,$){c.push(ee),c.push(K),c.push($)}function Se(ee,K,$){st(ee),st(K),st($);let Z=s.length/3,ce=E.generateTopUV(n,s,Z-3,Z-2,Z-1);C(ce[0]),C(ce[1]),C(ce[2])}function Ye(ee,K,$,Z){st(ee),st(K),st(Z),st(K),st($),st(Z);let ce=s.length/3,ne=E.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);C(ne[0]),C(ne[1]),C(ne[3]),C(ne[1]),C(ne[2]),C(ne[3])}function st(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function C(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zo[s.type]().fromJSON(s)),new i(n,e.options)}},cd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new de(r,a),new de(o,c),new de(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],h=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-d),new de(f,1-g),new de(_,1-h)]:[new de(o,1-c),new de(u,1-d),new de(p,1-g),new de(m,1-h)]}};function hd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class i extends en{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){let E=h*f-a;for(let S=0;S<l;S++){let y=S*d-r;g.push(y,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){let S=E+l*h,y=E+l*(h+1),w=E+1+l*(h+1),R=E+1+l*h;p.push(S,y,R),p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vi=class i extends en{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new P,d=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,h=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(_,m,E),a.push(m,h,E)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bs=class extends hn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new He(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var pt=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zs=class extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jr=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$r=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ud(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kr=class extends si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ho,endingEnd:Ho}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Go:r=e,o=2*t-n;break;case Wo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Go:a=e,c=2*n-t;break;case Wo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let w=0;w!==o;++w)r[w]=h*a[u+w]+E*a[l+w]+S*a[c+w]+y*a[d+w];return r}},Qr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*u;return r}},jr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case Rr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return Rr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ud(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zt.prototype.ValueTypeName="";zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=Dr;var zn=class extends zt{constructor(e,t,n){super(e,t,n)}};zn.prototype.ValueTypeName="bool";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=_s;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};ea.prototype.ValueTypeName="color";var ta=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};ta.prototype.ValueTypeName="number";var na=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)jt.slerpFlat(r,0,a,l-o,a,l,c);return r}},ks=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;var kn=class extends zt{constructor(e,t,n){super(e,t,n)}};kn.prototype.ValueTypeName="string";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=_s;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};ia.prototype.ValueTypeName="vector";var Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},sa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fh=new sa,bn=class{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var yn={},Qo=class extends Error{constructor(e,t){super(e),this.response=t}},Vs=class extends bn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ii.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:s});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=yn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(h){E();function E(){d.read().then(({done:S,value:y})=>{if(S)h.close();else{_+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,A=u.length;R<A;R++){let I=u[R];I.onProgress&&I.onProgress(w)}h.enqueue(y),E()}},S=>{h.error(S)})}}});return new Response(m)}else throw new Qo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ii.add(`file:${e}`,l);let u=yn[e];delete yn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=yn[e];if(u===void 0)throw this.manager.itemError(e),l;delete yn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ai=new WeakMap,ra=class extends bn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ii.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ai.get(a);d===void 0&&(d=[],Ai.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Di("img");function c(){u(),t&&t(this);let d=Ai.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onLoad&&p.onLoad(this)}Ai.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),Ii.remove(`image:${e}`);let f=Ai.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(d)}Ai.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Hs=class extends bn{constructor(e){super(e)}load(e,t,n,s){let r=new wt,a=new ra(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hi=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gs=class extends Hi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ko=new Qe,_c=new P,xc=new P,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_c.setFromMatrixPosition(e.matrixWorld),t.position.copy(_c),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vc=new Qe,us=new P,Vo=new P,jo=class extends aa{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),Vo.copy(n.position),Vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vo),n.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,n.coordinateSystem,n.reversedDepth)}},Ws=class extends Hi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xs=class extends bs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},el=class extends aa{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends Hi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new el}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var oa=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ql="\\[\\]\\.:\\/",dd=new RegExp("["+ql+"]","g"),Ml="[^"+ql+"]",fd="[^"+ql.replace("\\.","")+"]",pd=/((?:WC+[\/:])*)/.source.replace("WC",Ml),md=/(WCOD+)?/.source.replace("WCOD",fd),gd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),_d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),xd=new RegExp("^"+pd+md+gd+_d+"$"),vd=["material","materials","bones","map"],tl=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dd,"")}static parseTrackName(e){let t=xd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=tl;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var im=new Float32Array(1);var Ys=class{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){let E=[];for(let S=0,y=h.length;S<y;S++){let w=h[S],R=new Kn;R.curves=w.curves,E.push(R)}return E}function n(h,E){let S=E.length,y=!1;for(let w=S-1,R=0;R<S;w=R++){let A=E[w],I=E[R],M=I.x-A.x,x=I.y-A.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(A=E[R],M=-M,I=E[w],x=-x),h.y<A.y||h.y>I.y)continue;if(h.y===A.y){if(h.x===A.x)return!0}else{let T=x*(h.x-A.x)-M*(h.y-A.y);if(T===0)return!0;if(T<0)continue;y=!y}}else{if(h.y!==A.y)continue;if(I.x<=h.x&&h.x<=A.x||A.x<=h.x&&h.x<=I.x)return!0}}return y}let s=Nn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new Kn,c.curves=o.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;let d=[],f=[],p=[],g=0,_;f[g]=void 0,p[g]=[];for(let h=0,E=r.length;h<E;h++)o=r[h],_=o.getPoints(),a=s(_),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Kn,p:_},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let h=!1,E=0;for(let S=0,y=f.length;S<y;S++)d[S]=[];for(let S=0,y=f.length;S<y;S++){let w=p[S];for(let R=0;R<w.length;R++){let A=w[R],I=!0;for(let M=0;M<f.length;M++)n(A.p,f[M].p)&&(S!==M&&E++,I?(I=!1,d[M].push(A)):h=!0);I&&d[S].push(A)}}E>0&&h===!1&&(p=d)}let m;for(let h=0,E=f.length;h<E;h++){c=f[h].s,l.push(c),m=p[h];for(let S=0,y=m.length;S<y;S++)c.holes.push(m[S].h)}return l}};function Sl(i,e,t,n){let s=yd(n);switch(t){case dl:return i*e;case ba:return i*e/s.components*s.byteLength;case Ea:return i*e/s.components*s.byteLength;case pl:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case fl:return i*e*3/s.components*s.byteLength;case Xt:return i*e*4/s.components*s.byteLength;case wa:return i*e*4/s.components*s.byteLength;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Ia:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case $a:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(i){switch(i){case nn:case ll:return{byteLength:1,components:1};case Wi:case cl:case Xi:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Hn:case qa:case sn:return{byteLength:4,components:1};case hl:case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Fh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Md(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Sd,alphahash_pars_fragment:bd,alphamap_fragment:Ed,alphamap_pars_fragment:Td,alphatest_fragment:wd,alphatest_pars_fragment:Ad,aomap_fragment:Rd,aomap_pars_fragment:Cd,batching_pars_vertex:Id,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Ud,iridescence_fragment:Nd,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:kd,color_fragment:Vd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:$d,emissivemap_fragment:Kd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Mf,lights_fragment_begin:Sf,lights_fragment_maps:bf,lights_fragment_end:Ef,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:Rf,map_fragment:Cf,map_pars_fragment:If,map_particle_fragment:Pf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Uf,morphinstance_vertex:Nf,morphcolor_vertex:Ff,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:zf,normal_fragment_begin:kf,normal_fragment_maps:Vf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:$f,opaque_fragment:Kf,packing:Qf,premultiplied_alpha_fragment:jf,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:ap,shadowmap_vertex:op,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:hp,skinning_vertex:up,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:_p,transmission_pars_fragment:xp,uv_pars_fragment:vp,uv_pars_vertex:yp,uv_vertex:qp,worldpos_vertex:Mp,background_vert:Sp,background_frag:bp,backgroundCube_vert:Ep,backgroundCube_frag:Tp,cube_vert:wp,cube_frag:Ap,depth_vert:Rp,depth_frag:Cp,distanceRGBA_vert:Ip,distanceRGBA_frag:Pp,equirect_vert:Lp,equirect_frag:Dp,linedashed_vert:Up,linedashed_frag:Np,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:Bp,meshlambert_frag:zp,meshmatcap_vert:kp,meshmatcap_frag:Vp,meshnormal_vert:Hp,meshnormal_frag:Gp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:Yp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:$p,points_vert:Kp,points_frag:Qp,shadow_vert:jp,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},dn={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};dn.physical={uniforms:At([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var io={r:0,b:0,g:0},ci=new Gt,i1=new Qe;function s1(i,e,t,n,s,r,a){let o=new He(0),c=r===!0?0:1,l,u,d=null,f=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1,w=g(S);w===null?h(o,c):w&&w.isColor&&(h(w,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===Zs)?(u===void 0&&(u=new ke(new mt(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:li(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ci.copy(y.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(ci)),u.material.toneMapped=Je.getTransfer(w.colorSpace)!==tt,(d!==w||f!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ke(new Dt(2,2),new tn({name:"BackgroundMaterial",uniforms:li(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(w.colorSpace)!==tt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,y){S.getRGB(io,vl(i)),n.buffers.color.setClear(io.r,io.g,io.b,y,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:_,addToRenderList:m,dispose:E}}function r1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,T,L,B,U){let G=!1,k=d(B,L,T);r!==k&&(r=k,l(r.object)),G=p(x,B,L,U),G&&g(x,B,L,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(x,T,L,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,T,L){let B=L.wireframe===!0,U=n[x.id];U===void 0&&(U={},n[x.id]=U);let G=U[T.id];G===void 0&&(G={},U[T.id]=G);let k=G[B];return k===void 0&&(k=f(c()),G[B]=k),k}function f(x){let T=[],L=[],B=[];for(let U=0;U<t;U++)T[U]=0,L[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,T,L,B){let U=r.attributes,G=T.attributes,k=0,J=L.getAttributes();for(let V in J)if(J[V].location>=0){let pe=U[V],xe=G[V];if(xe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(x,T,L,B){let U={},G=T.attributes,k=0,J=L.getAttributes();for(let V in J)if(J[V].location>=0){let pe=G[V];pe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));let xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),U[V]=xe,k++}r.attributes=U,r.attributesNum=k,r.index=B}function _(){let x=r.newAttributes;for(let T=0,L=x.length;T<L;T++)x[T]=0}function m(x){h(x,0)}function h(x,T){let L=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;L[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),U[x]!==T&&(i.vertexAttribDivisor(x,T),U[x]=T)}function E(){let x=r.newAttributes,T=r.enabledAttributes;for(let L=0,B=T.length;L<B;L++)T[L]!==x[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function S(x,T,L,B,U,G,k){k===!0?i.vertexAttribIPointer(x,T,L,U,G):i.vertexAttribPointer(x,T,L,B,U,G)}function y(x,T,L,B){_();let U=B.attributes,G=L.getAttributes(),k=T.defaultAttributeValues;for(let J in G){let V=G[J];if(V.location>=0){let le=U[J];if(le===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){let pe=le.normalized,xe=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;let We=Ne.buffer,Ke=Ne.type,Xe=Ne.bytesPerElement,Y=Ke===i.INT||Ke===i.UNSIGNED_INT||le.gpuType===qa;if(le.isInterleavedBufferAttribute){let te=le.data,ye=te.stride,Re=le.offset;if(te.isInstancedInterleavedBuffer){for(let Se=0;Se<V.locationSize;Se++)h(V.location+Se,te.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<V.locationSize;Se++)m(V.location+Se);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Se=0;Se<V.locationSize;Se++)S(V.location+Se,xe/V.locationSize,Ke,pe,ye*Xe,(Re+xe/V.locationSize*Se)*Xe,Y)}else{if(le.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)h(V.location+te,le.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);i.bindBuffer(i.ARRAY_BUFFER,We);for(let te=0;te<V.locationSize;te++)S(V.location+te,xe/V.locationSize,Ke,pe,xe*Xe,xe/V.locationSize*te*Xe,Y)}}else if(k!==void 0){let pe=k[J];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(V.location,pe);break;case 3:i.vertexAttrib3fv(V.location,pe);break;case 4:i.vertexAttrib4fv(V.location,pe);break;default:i.vertexAttrib1fv(V.location,pe)}}}}E()}function w(){I();for(let x in n){let T=n[x];for(let L in T){let B=T[L];for(let U in B)u(B[U].object),delete B[U];delete T[L]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let T=n[x.id];for(let L in T){let B=T[L];for(let U in B)u(B[U].object),delete B[U];delete T[L]}delete n[x.id]}function A(x){for(let T in n){let L=n[T];if(L[x.id]===void 0)continue;let B=L[x.id];for(let U in B)u(B[U].object),delete B[U];delete L[x.id]}}function I(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function a1(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function o1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Xt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let I=A===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:w,maxSamples:R}}function l1(i){let e=this,t=null,n=0,s=!1,r=!1,a=new on,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let E=r?0:n,S=E*4,y=h.clippingState||null;c.value=y,y=u(g,f,S,p);for(let w=0;w!==S;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let h=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,y=p;S!==_;++S,y+=4)a.copy(d[S]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function c1(i){let e=new WeakMap;function t(a,o){return o===xa?a.mapping=ri:o===va&&(a.mapping=ai),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===xa||o===va)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new zr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ki=4,ph=[.125,.215,.35,.446,.526,.582],di=20,bl=new Xs,mh=new He,El=null,Tl=0,wl=0,Al=!1,ui=(1+Math.sqrt(5))/2,$i=1/ui,gh=[new P(-ui,$i,0),new P(ui,$i,0),new P(-$i,0,ui),new P($i,0,ui),new P(0,ui,-$i),new P(0,ui,$i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],h1=new P,ji=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=h1}=r;El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,wl),this._renderer.xr.enabled=Al,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Xi,format:Xt,colorSpace:ei,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(r)),this._blurMaterial=d1(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mh),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new ti({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),m=new ke(new mt,_),h=!1,E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,h=!0):(_.color.copy(mh),h=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));let w=this._cubeSize;so(s,y*w,S>2?w:0,w,w),d.setRenderTarget(s),h&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ri||e.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;so(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gh[(s-r-1)%gh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ke(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);let h=[],E=0;for(let A=0;A<di;++A){let I=A/_,M=Math.exp(-I*I/2);h.push(M),A===0?E+=M:A<m&&(E+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let y=this._sizeLods[s],w=3*y*(s>S-Ki?s-S+Ki:0),R=4*(this._cubeSize-y);so(t,w,R,3*y,2*y),c.setRenderTarget(t),c.render(d,bl)}};function u1(i){let e=[],t=[],n=[],s=i,r=i-Ki+1+ph.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ki?c=ph[a-i+Ki-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,E=new Float32Array(_*g*p),S=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let R=0;R<p;R++){let A=R%3*2/3-1,I=R>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(M,_*g*R),S.set(f,m*g*R);let x=[R,R,R,R,R,R];y.set(x,h*g*R)}let w=new en;w.setAttribute("position",new Pt(E,_)),w.setAttribute("uv",new Pt(S,m)),w.setAttribute("faceIndex",new Pt(y,h)),e.push(w),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){let n=new ln(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function d1(i,e,t){let n=new Float32Array(di),s=new P(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function xh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function vh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===xa||c===va,u=c===ri||c===ai;if(l||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ji(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ji(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function p1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m1(i,e,t,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let S=0,y=E.length;S<y;S+=3){let w=E[S+0],R=E[S+1],A=E[S+2];f.push(w,R,R,A,A,w)}}else if(g!==void 0){let E=g.array;_=g.version;for(let S=0,y=E.length/3-1;S<y;S+=3){let w=S+0,R=S+1,A=S+2;f.push(w,R,R,A,A,w)}}else return;let m=new(xl(f)?Ss:Ms)(f,1);m.version=_;let h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function g1(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,n,1)}function d(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let h=0;for(let E=0;E<g;E++)h+=p[E]*_[E];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function x1(i,e,t){let n=new WeakMap,s=new et;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*w*4*d),A=new ys(R,y,w,d);A.type=sn,A.needsUpdate=!0;let I=S*4;for(let x=0;x<d;x++){let T=m[x],L=h[x],B=E[x],U=y*w*4*x;for(let G=0;G<T.count;G++){let k=G*I;p===!0&&(s.fromBufferAttribute(T,G),R[U+k+0]=s.x,R[U+k+1]=s.y,R[U+k+2]=s.z,R[U+k+3]=0),g===!0&&(s.fromBufferAttribute(L,G),R[U+k+4]=s.x,R[U+k+5]=s.y,R[U+k+6]=s.z,R[U+k+7]=0),_===!0&&(s.fromBufferAttribute(B,G),R[U+k+8]=s.x,R[U+k+9]=s.y,R[U+k+10]=s.z,R[U+k+11]=B.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new de(y,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function v1(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Oh=new wt,yh=new As(1,1),Bh=new ys,zh=new Fr,kh=new Es,qh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),Eh=new Float32Array(4);function es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function S1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function b1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),xt(t,n)}}function E1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),xt(t,n)}}function T1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),xt(t,n)}}function w1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function A1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function R1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function C1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function I1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function L1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function D1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function U1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=ml,r=yh):r=Oh,t.setTexture2D(e||r,s)}function N1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zh,s)}function F1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kh,s)}function O1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bh,s)}function B1(i){switch(i){case 5126:return y1;case 35664:return q1;case 35665:return M1;case 35666:return S1;case 35674:return b1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return w1;case 35667:case 35671:return A1;case 35668:case 35672:return R1;case 35669:case 35673:return C1;case 5125:return I1;case 36294:return P1;case 36295:return L1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}function z1(i,e){i.uniform1fv(this.addr,e)}function k1(i,e){let t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function V1(i,e){let t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function H1(i,e){let t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function G1(i,e){let t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W1(i,e){let t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X1(i,e){let t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y1(i,e){i.uniform1iv(this.addr,e)}function Z1(i,e){i.uniform2iv(this.addr,e)}function J1(i,e){i.uniform3iv(this.addr,e)}function $1(i,e){i.uniform4iv(this.addr,e)}function K1(i,e){i.uniform1uiv(this.addr,e)}function Q1(i,e){i.uniform2uiv(this.addr,e)}function j1(i,e){i.uniform3uiv(this.addr,e)}function e0(i,e){i.uniform4uiv(this.addr,e)}function t0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Oh,r[a])}function n0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zh,r[a])}function i0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kh,r[a])}function s0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bh,r[a])}function r0(i){switch(i){case 5126:return z1;case 35664:return k1;case 35665:return V1;case 35666:return H1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return Z1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return K1;case 36294:return Q1;case 36295:return j1;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}var Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}},Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r0(t.type)}},Pl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function Th(i,e){i.seq.push(e),i.map[e.id]=e}function a0(i,e,t){let n=i.name,s=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),a=Rl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Th(t,l===void 0?new Cl(o,i,e):new Il(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Pl(o),Th(t,d)),t=d}}}var Qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);a0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var o0=37297,l0=0;function c0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ah=new Be;function h0(i){Je._getMatrix(Ah,Je.workingColorSpace,i);let e=`mat3( ${Ah.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c0(i.getShaderSource(e),o)}else return r}function u0(i,e){let t=h0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function d0(i,e){let t;switch(e){case Vc:t="Linear";break;case Hc:t="Reinhard";break;case Gc:t="Cineon";break;case _a:t="ACESFilmic";break;case Xc:t="AgX";break;case Yc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ro=new P;function f0(){Je.getLuminanceCoefficients(ro);let i=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function m0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function er(i){return i!==""}function Ch(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(i){return i.replace(_0,v0)}var x0=new Map;function v0(i,e){let t=Ve[e];if(t===void 0){let n=x0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(y0,q0)}function q0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===la?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function S0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function E0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:e="ENVMAP_BLENDING_MULTIPLY";break;case zc:e="ENVMAP_BLENDING_MIX";break;case kc:e="ENVMAP_BLENDING_ADD";break}return e}function T0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=M0(t),l=S0(t),u=b0(t),d=E0(t),f=T0(t),p=p0(t),g=m0(r),_=s.createProgram(),m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),h.length>0&&(h+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),h=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Tn?d0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=Ll(a),a=Ch(a,t),a=Ih(a,t),o=Ll(o),o=Ch(o,t),o=Ih(o,t),a=Ph(a),o=Ph(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=E+m+a,y=E+h+o,w=wh(s,s.VERTEX_SHADER,S),R=wh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(T){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(w)||"",U=s.getShaderInfoLog(R)||"",G=L.trim(),k=B.trim(),J=U.trim(),V=!0,le=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,R);else{let pe=Rh(s,w,"vertex"),xe=Rh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+pe+`
`+xe)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||J==="")&&(le=!1);le&&(T.diagnostics={runnable:V,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:h}})}s.deleteShader(w),s.deleteShader(R),I=new Qi(s,_),M=g0(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,o0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}var A0=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ul(e),t.set(e,n)),n}},Ul=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function R0(i,e,t,n,s,r,a){let o=new qs,c=new Dl,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,T,L,B){let U=L.fog,G=B.geometry,k=M.isMeshStandardMaterial?L.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),V=J&&J.mapping===Zs?J.image.height:null,le=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=pe!==void 0?pe.length:0,Ne=0;G.morphAttributes.position!==void 0&&(Ne=1),G.morphAttributes.normal!==void 0&&(Ne=2),G.morphAttributes.color!==void 0&&(Ne=3);let We,Ke,Xe,Y;if(le){let je=dn[le];We=je.vertexShader,Ke=je.fragmentShader}else We=M.vertexShader,Ke=M.fragmentShader,c.update(M),Xe=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,Se=B.isBatchedMesh===!0,Ye=!!M.map,st=!!M.matcap,C=!!J,ee=!!M.aoMap,K=!!M.lightMap,$=!!M.bumpMap,Z=!!M.normalMap,ce=!!M.displacementMap,ne=!!M.emissiveMap,he=!!M.metalnessMap,Fe=!!M.roughnessMap,Ue=M.anisotropy>0,b=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,W=M.sheen>0,j=M.transmission>0,X=Ue&&!!M.anisotropyMap,we=b&&!!M.clearcoatMap,oe=b&&!!M.clearcoatNormalMap,be=b&&!!M.clearcoatRoughnessMap,Ee=O&&!!M.iridescenceMap,ie=O&&!!M.iridescenceThicknessMap,_e=W&&!!M.sheenColorMap,Le=W&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,me=!!M.specularColorMap,ze=!!M.specularIntensityMap,D=j&&!!M.transmissionMap,ae=j&&!!M.thicknessMap,ue=!!M.gradientMap,qe=!!M.alphaMap,se=M.alphaTest>0,Q=!!M.alphaHash,Te=!!M.extensions,Oe=Tn;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let rt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:Ke,defines:M.defines,customVertexShaderID:Xe,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Se,batchingColor:Se&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ei,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:st,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:V,aoMap:ee,lightMap:K,bumpMap:$,normalMap:Z,displacementMap:f&&ce,emissiveMap:ne,normalMapObjectSpace:Z&&M.normalMapType===Kc,normalMapTangentSpace:Z&&M.normalMapType===no,metalnessMap:he,roughnessMap:Fe,anisotropy:Ue,anisotropyMap:X,clearcoat:b,clearcoatMap:we,clearcoatNormalMap:oe,clearcoatRoughnessMap:be,dispersion:v,iridescence:O,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:W,sheenColorMap:_e,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:me,specularIntensityMap:ze,transmission:j,transmissionMap:D,thicknessMap:ae,gradientMap:ue,opaque:M.transparent===!1&&M.blending===Qn&&M.alphaToCoverage===!1,alphaMap:qe,alphaTest:se,alphaHash:Q,combine:M.combine,mapUv:Ye&&_(M.map.channel),aoMapUv:ee&&_(M.aoMap.channel),lightMapUv:K&&_(M.lightMap.channel),bumpMapUv:$&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:ce&&_(M.displacementMap.channel),emissiveMapUv:ne&&_(M.emissiveMap.channel),metalnessMapUv:he&&_(M.metalnessMap.channel),roughnessMapUv:Fe&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:we&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:Ae&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:ze&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ae&&_(M.thicknessMap.channel),alphaMapUv:qe&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Z||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Ye||qe),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wt,flipSided:M.side===gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function h(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)x.push(T),x.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(E(x,M),S(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let x=g[M.type],T;if(x){let L=dn[x];T=lh.clone(L.uniforms)}else T=M.uniforms;return T}function w(M,x){let T;for(let L=0,B=u.length;L<B;L++){let U=u[L];if(U.cacheKey===x){T=U,++T.usedTimes;break}}return T===void 0&&(T=new w0(i,x,M,r),u.push(T)),T}function R(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:I}}function C0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,g,_,m){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function o(d,f,p,g,_,m){let h=a(d,f,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function c(d,f,p,g,_,m){let h=a(d,f,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||I0),n.length>1&&n.sort(f||Dh),s.length>1&&s.sort(f||Dh)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function P0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function L0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function D0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function N0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F0(i){let e=new L0,t=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Qe,a=new Qe;function o(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,E=0,S=0,y=0,w=0,R=0,A=0;l.sort(N0);for(let M=0,x=l.length;M<x;M++){let T=l[M],L=T.color,B=T.intensity,U=T.distance,G=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=L.r*B,d+=L.g*B,f+=L.b*B;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],B);A++}else if(T.isDirectionalLight){let k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,V=t.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=T.shadow.matrix,E++}n.directional[p]=k,p++}else if(T.isSpotLight){let k=e.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(L).multiplyScalar(B),k.distance=U,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[_]=k;let J=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,J.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,T.castShadow){let V=t.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=G,y++}_++}else if(T.isRectAreaLight){let k=e.get(T);k.color.copy(L).multiplyScalar(B),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=k,m++}else if(T.isPointLight){let k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){let J=T.shadow,V=t.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=T.shadow.matrix,S++}n.point[g]=k,g++}else if(T.isHemisphereLight){let k=e.get(T);k.skyColor.copy(T.color).multiplyScalar(B),k.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[h]=k,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==w||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=w,I.numLightProbes=A,n.version=U0++)}function c(l,u){let d=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){let S=l[h];if(S.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(S.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Nh(i){let e=new F0(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function O0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nh(i),e.set(s,[o])):r>=a.length?(o=new Nh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k0(i,e,t){let n=new Oi,s=new de,r=new de,a=new et,o=new Jr({depthPacking:$c}),c=new $r,l={},u=t.maxTextureSize,d={[Mn]:gt,[gt]:Mn,[Wt]:Wt},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:B0,fragmentShader:z0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let h=this.type;this.render=function(R,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(En),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=h!==un&&this.type===un,U=h===un&&this.type!==un;for(let G=0,k=R.length;G<k;G++){let J=R[G],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let le=V.getFrameExtents();if(s.multiply(le),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||B===!0||U===!0){let xe=this.type!==un?{minFilter:Lt,magFilter:Lt}:{};V.map!==null&&V.map.dispose(),V.map=new ln(s.x,s.y,xe),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let pe=V.getViewportCount();for(let xe=0;xe<pe;xe++){let Ne=V.getViewport(xe);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),L.viewport(a),V.updateMatrices(J,xe),n=V.getFrustum(),y(A,I,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===un&&E(V,I),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,T)};function E(R,A){let I=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ln(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function S(R,A,I,M){let x=null,T=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=I.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=x.uuid,B=A.uuid,U=l[L];U===void 0&&(U={},l[L]=U);let G=U[B];G===void 0&&(G=x.clone(),U[B]=G,A.addEventListener("dispose",w)),x=G}if(x.visible=A.visible,x.wireframe=A.wireframe,M===un?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let L=i.properties.get(x);L.light=I}return x}function y(R,A,I,M,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let B=e.update(R),U=R.material;if(Array.isArray(U)){let G=B.groups;for(let k=0,J=G.length;k<J;k++){let V=G[k],le=U[V.materialIndex];if(le&&le.visible){let pe=S(R,le,M,x);R.onBeforeShadow(i,R,A,I,B,pe,V),i.renderBufferDirect(I,null,B,pe,R,V),R.onAfterShadow(i,R,A,I,B,pe,V)}}}else if(U.visible){let G=S(R,U,M,x);R.onBeforeShadow(i,R,A,I,B,G,null),i.renderBufferDirect(I,null,B,G,R,null),R.onAfterShadow(i,R,A,I,B,G,null)}}let L=R.children;for(let B=0,U=L.length;B<U;B++)y(L[B],A,I,M,x)}function w(R){R.target.removeEventListener("dispose",w);for(let I in l){let M=l[I],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var V0={[ca]:ha,[ua]:pa,[da]:ma,[jn]:fa,[ha]:ca,[pa]:ua,[ma]:da,[fa]:jn};function H0(i,e){function t(){let D=!1,ae=new et,ue=null,qe=new et(0,0,0,0);return{setMask:function(se){ue!==se&&!D&&(i.colorMask(se,se,se,se),ue=se)},setLocked:function(se){D=se},setClear:function(se,Q,Te,Oe,rt){rt===!0&&(se*=Oe,Q*=Oe,Te*=Oe),ae.set(se,Q,Te,Oe),qe.equals(ae)===!1&&(i.clearColor(se,Q,Te,Oe),qe.copy(ae))},reset:function(){D=!1,ue=null,qe.set(-1,0,0,0)}}}function n(){let D=!1,ae=!1,ue=null,qe=null,se=null;return{setReversed:function(Q){if(ae!==Q){let Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;let Oe=se;se=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(Q){Q?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Q){ue!==Q&&!D&&(i.depthMask(Q),ue=Q)},setFunc:function(Q){if(ae&&(Q=V0[Q]),qe!==Q){switch(Q){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}qe=Q}},setLocked:function(Q){D=Q},setClear:function(Q){se!==Q&&(ae&&(Q=1-Q),i.clearDepth(Q),se=Q)},reset:function(){D=!1,ue=null,qe=null,se=null,ae=!1}}}function s(){let D=!1,ae=null,ue=null,qe=null,se=null,Q=null,Te=null,Oe=null,rt=null;return{setTest:function(je){D||(je?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(je){ae!==je&&!D&&(i.stencilMask(je),ae=je)},setFunc:function(je,pn,an){(ue!==je||qe!==pn||se!==an)&&(i.stencilFunc(je,pn,an),ue=je,qe=pn,se=an)},setOp:function(je,pn,an){(Q!==je||Te!==pn||Oe!==an)&&(i.stencilOp(je,pn,an),Q=je,Te=pn,Oe=an)},setLocked:function(je){D=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){D=!1,ae=null,ue=null,qe=null,se=null,Q=null,Te=null,Oe=null,rt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,E=null,S=null,y=null,w=null,R=null,A=new He(0,0,0),I=0,M=!1,x=null,T=null,L=null,B=null,U=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=J>=2);let le=null,pe={},xe=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),We=new et().fromArray(xe),Ke=new et().fromArray(Ne);function Xe(D,ae,ue,qe){let se=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<ue;Te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,qe,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(ae+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return Q}let Y={};Y[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(jn),$(!1),Z(nl),te(i.CULL_FACE),ee(En);function te(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Re(D,ae){return d[D]!==ae?(i.bindFramebuffer(D,ae),d[D]=ae,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Se(D,ae){let ue=p,qe=!1;if(D){ue=f.get(ae),ue===void 0&&(ue=[],f.set(ae,ue));let se=D.textures;if(ue.length!==se.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Te=se.length;Q<Te;Q++)ue[Q]=i.COLOR_ATTACHMENT0+Q;ue.length=se.length,qe=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,qe=!0);qe&&i.drawBuffers(ue)}function Ye(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let st={[Fn]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[bc]:i.FUNC_REVERSE_SUBTRACT};st[Ec]=i.MIN,st[Tc]=i.MAX;let C={[wc]:i.ZERO,[Ac]:i.ONE,[Rc]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[Ir]:i.ONE_MINUS_SRC_ALPHA,[Dc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Fc]:i.ONE_MINUS_CONSTANT_COLOR,[Oc]:i.CONSTANT_ALPHA,[Bc]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(D,ae,ue,qe,se,Q,Te,Oe,rt,je){if(D===En){_===!0&&(ye(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),D!==Mc){if(D!==m||je!==M){if((h!==Fn||y!==Fn)&&(i.blendEquation(i.FUNC_ADD),h=Fn,y=Fn),je)switch(D){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,S=null,w=null,R=null,A.set(0,0,0),I=0,m=D,M=je}return}se=se||ae,Q=Q||ue,Te=Te||qe,(ae!==h||se!==y)&&(i.blendEquationSeparate(st[ae],st[se]),h=ae,y=se),(ue!==E||qe!==S||Q!==w||Te!==R)&&(i.blendFuncSeparate(C[ue],C[qe],C[Q],C[Te]),E=ue,S=qe,w=Q,R=Te),(Oe.equals(A)===!1||rt!==I)&&(i.blendColor(Oe.r,Oe.g,Oe.b,rt),A.copy(Oe),I=rt),m=D,M=!1}function K(D,ae){D.side===Wt?ye(i.CULL_FACE):te(i.CULL_FACE);let ue=D.side===gt;ae&&(ue=!ue),$(ue),D.blending===Qn&&D.transparent===!1?ee(En):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let qe=D.stencilWrite;o.setTest(qe),qe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Z(D){D!==yc?(te(i.CULL_FACE),D!==T&&(D===nl?i.cullFace(i.BACK):D===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),T=D}function ce(D){D!==L&&(k&&i.lineWidth(D),L=D)}function ne(D,ae,ue){D?(te(i.POLYGON_OFFSET_FILL),(B!==ae||U!==ue)&&(i.polygonOffset(ae,ue),B=ae,U=ue)):ye(i.POLYGON_OFFSET_FILL)}function he(D){D?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Fe(D){D===void 0&&(D=i.TEXTURE0+G-1),le!==D&&(i.activeTexture(D),le=D)}function Ue(D,ae,ue){ue===void 0&&(le===null?ue=i.TEXTURE0+G-1:ue=le);let qe=pe[ue];qe===void 0&&(qe={type:void 0,texture:void 0},pe[ue]=qe),(qe.type!==D||qe.texture!==ae)&&(le!==ue&&(i.activeTexture(ue),le=ue),i.bindTexture(D,ae||Y[D]),qe.type=D,qe.texture=ae)}function b(){let D=pe[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){We.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),We.copy(D))}function Le(D){Ke.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function Ae(D,ae){let ue=l.get(ae);ue===void 0&&(ue=new WeakMap,l.set(ae,ue));let qe=ue.get(D);qe===void 0&&(qe=i.getUniformBlockIndex(ae,D.name),ue.set(D,qe))}function me(D,ae){let qe=l.get(ae).get(D);c.get(ae)!==qe&&(i.uniformBlockBinding(ae,qe,D.__bindingPointIndex),c.set(ae,qe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,pe={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,E=null,S=null,y=null,w=null,R=null,A=new He(0,0,0),I=0,M=!1,x=null,T=null,L=null,B=null,U=null,We.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Re,drawBuffers:Se,useProgram:Ye,setBlending:ee,setMaterial:K,setFlipSided:$,setCullFace:Z,setLineWidth:ce,setPolygonOffset:ne,setScissorTest:he,activeTexture:Fe,bindTexture:Ue,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ee,texImage3D:ie,updateUBOMapping:Ae,uniformBlockBinding:me,texStorage2D:oe,texStorage3D:be,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:_e,viewport:Le,reset:ze}}function G0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):Di("canvas")}function _(b,v,O){let W=1,j=Ue(b);if((j.width>O||j.height>O)&&(W=O/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(W*j.width),we=Math.floor(W*j.height);d===void 0&&(d=g(X,we));let oe=v?g(X,we):d;return oe.width=X,oe.height=we,oe.getContext("2d").drawImage(b,0,0,X,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+we+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,v,O,W,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){let we=j?xs:Je.getTransfer(W);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=we===tt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(b,v){let O;return b?v===null||v===Hn||v===Yi?O=i.DEPTH24_STENCIL8:v===sn?O=i.DEPTH32F_STENCIL8:v===Wi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===Yi?O=i.DEPTH_COMPONENT24:v===sn?O=i.DEPTH_COMPONENT32F:v===Wi&&(O=i.DEPTH_COMPONENT16),O}function w(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Lt&&b.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){let v=b.target;v.removeEventListener("dispose",R),I(v),v.isVideoTexture&&u.delete(v)}function A(b){let v=b.target;v.removeEventListener("dispose",A),x(v)}function I(b){let v=n.get(b);if(v.__webglInit===void 0)return;let O=b.source,W=f.get(O);if(W){let j=W[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(W).length===0&&f.delete(O)}n.remove(b)}function M(b){let v=n.get(b);i.deleteTexture(v.__webglTexture);let O=b.source,W=f.get(O);delete W[v.__cacheKey],a.memory.textures--}function x(b){let v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let j=0;j<v.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[W][j]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=b.textures;for(let W=0,j=O.length;W<j;W++){let X=n.get(O[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(b)}let T=0;function L(){T=0}function B(){let b=T;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),T+=1,b}function U(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function G(b,v){let O=n.get(b);if(b.isVideoTexture&&he(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function k(b,v){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Y(O,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function J(b,v){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Y(O,b,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(b,v){let O=n.get(b);if(b.version>0&&O.__version!==b.version){te(O,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let le={[Pr]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},pe={[Lt]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},xe={[Qc]:i.NEVER,[sh]:i.ALWAYS,[jc]:i.LESS,[ml]:i.LEQUAL,[eh]:i.EQUAL,[ih]:i.GEQUAL,[th]:i.GREATER,[nh]:i.NOTEQUAL};function Ne(b,v){if(v.type===sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===ya||v.magFilter===Js||v.magFilter===Vn||v.minFilter===Qt||v.minFilter===ya||v.minFilter===Js||v.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,le[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,pe[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==Js&&v.minFilter!==Vn||v.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function We(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));let W=v.source,j=f.get(W);j===void 0&&(j={},f.set(W,j));let X=U(v);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[X].usedTimes++;let we=j[b.__cacheKey];we!==void 0&&(j[b.__cacheKey].usedTimes--,we.usedTimes===0&&M(v)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return O}function Ke(b,v,O){return Math.floor(Math.floor(b/O)/v)}function Xe(b,v,O,W){let X=b.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,W,v.data);else{X.sort((ie,_e)=>ie.start-_e.start);let we=0;for(let ie=1;ie<X.length;ie++){let _e=X[we],Le=X[ie],Ae=_e.start+_e.count,me=Ke(Le.start,v.width,4),ze=Ke(_e.start,v.width,4);Le.start<=Ae+1&&me===ze&&Ke(Le.start+Le.count-1,v.width,4)===me?_e.count=Math.max(_e.count,Le.start+Le.count-_e.start):(++we,X[we]=Le)}X.length=we+1;let oe=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ie=0,_e=X.length;ie<_e;ie++){let Le=X[ie],Ae=Math.floor(Le.start/4),me=Math.ceil(Le.count/4),ze=Ae%v.width,D=Math.floor(Ae/v.width),ae=me,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ze,D,ae,ue,O,W,v.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Y(b,v,O){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let j=We(b,v),X=v.source;t.bindTexture(W,b.__webglTexture,i.TEXTURE0+O);let we=n.get(X);if(X.version!==we.__version||j===!0){t.activeTexture(i.TEXTURE0+O);let oe=Je.getPrimaries(Je.workingColorSpace),be=v.colorSpace===wn?null:Je.getPrimaries(v.colorSpace),Ee=v.colorSpace===wn||oe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=_(v.image,!1,s.maxTextureSize);ie=Fe(v,ie);let _e=r.convert(v.format,v.colorSpace),Le=r.convert(v.type),Ae=S(v.internalFormat,_e,Le,v.colorSpace,v.isVideoTexture);Ne(W,v);let me,ze=v.mipmaps,D=v.isVideoTexture!==!0,ae=we.__version===void 0||j===!0,ue=X.dataReady,qe=w(v,ie);if(v.isDepthTexture)Ae=y(v.format===Zi,v.type),ae&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,_e,Le,null));else if(v.isDataTexture)if(ze.length>0){D&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,Ae,ze[0].width,ze[0].height);for(let se=0,Q=ze.length;se<Q;se++)me=ze[se],D?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,me.width,me.height,_e,Le,me.data):t.texImage2D(i.TEXTURE_2D,se,Ae,me.width,me.height,0,_e,Le,me.data);v.generateMipmaps=!1}else D?(ae&&t.texStorage2D(i.TEXTURE_2D,qe,Ae,ie.width,ie.height),ue&&Xe(v,ie,_e,Le)):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,_e,Le,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,Ae,ze[0].width,ze[0].height,ie.depth);for(let se=0,Q=ze.length;se<Q;se++)if(me=ze[se],v.format!==Xt)if(_e!==null)if(D){if(ue)if(v.layerUpdates.size>0){let Te=Sl(me.width,me.height,v.format,v.type);for(let Oe of v.layerUpdates){let rt=me.data.subarray(Oe*Te/me.data.BYTES_PER_ELEMENT,(Oe+1)*Te/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Oe,me.width,me.height,1,_e,rt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,ie.depth,_e,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ae,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,ie.depth,_e,Le,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ae,me.width,me.height,ie.depth,0,_e,Le,me.data)}else{D&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,Ae,ze[0].width,ze[0].height);for(let se=0,Q=ze.length;se<Q;se++)me=ze[se],v.format!==Xt?_e!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,me.width,me.height,_e,Le,me.data):t.texImage2D(i.TEXTURE_2D,se,Ae,me.width,me.height,0,_e,Le,me.data)}else if(v.isDataArrayTexture)if(D){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,Ae,ie.width,ie.height,ie.depth),ue)if(v.layerUpdates.size>0){let se=Sl(ie.width,ie.height,v.format,v.type);for(let Q of v.layerUpdates){let Te=ie.data.subarray(Q*se/ie.data.BYTES_PER_ELEMENT,(Q+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,_e,Le,Te)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Le,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,_e,Le,ie.data);else if(v.isData3DTexture)D?(ae&&t.texStorage3D(i.TEXTURE_3D,qe,Ae,ie.width,ie.height,ie.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Le,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,_e,Le,ie.data);else if(v.isFramebufferTexture){if(ae)if(D)t.texStorage2D(i.TEXTURE_2D,qe,Ae,ie.width,ie.height);else{let se=ie.width,Q=ie.height;for(let Te=0;Te<qe;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ae,se,Q,0,_e,Le,null),se>>=1,Q>>=1}}else if(ze.length>0){if(D&&ae){let se=Ue(ze[0]);t.texStorage2D(i.TEXTURE_2D,qe,Ae,se.width,se.height)}for(let se=0,Q=ze.length;se<Q;se++)me=ze[se],D?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e,Le,me):t.texImage2D(i.TEXTURE_2D,se,Ae,_e,Le,me);v.generateMipmaps=!1}else if(D){if(ae){let se=Ue(ie);t.texStorage2D(i.TEXTURE_2D,qe,Ae,se.width,se.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Le,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ae,_e,Le,ie);m(v)&&h(W),we.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function te(b,v,O){if(v.image.length!==6)return;let W=We(b,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);let X=n.get(j);if(j.version!==X.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let we=Je.getPrimaries(Je.workingColorSpace),oe=v.colorSpace===wn?null:Je.getPrimaries(v.colorSpace),be=v.colorSpace===wn||we===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Ee&&!ie?_e[Q]=_(v.image[Q],!0,s.maxCubemapSize):_e[Q]=ie?v.image[Q].image:v.image[Q],_e[Q]=Fe(v,_e[Q]);let Le=_e[0],Ae=r.convert(v.format,v.colorSpace),me=r.convert(v.type),ze=S(v.internalFormat,Ae,me,v.colorSpace),D=v.isVideoTexture!==!0,ae=X.__version===void 0||W===!0,ue=j.dataReady,qe=w(v,Le);Ne(i.TEXTURE_CUBE_MAP,v);let se;if(Ee){D&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,ze,Le.width,Le.height);for(let Q=0;Q<6;Q++){se=_e[Q].mipmaps;for(let Te=0;Te<se.length;Te++){let Oe=se[Te];v.format!==Xt?Ae!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Oe.width,Oe.height,Ae,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Oe.width,Oe.height,Ae,me,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,ze,Oe.width,Oe.height,0,Ae,me,Oe.data)}}}else{if(se=v.mipmaps,D&&ae){se.length>0&&qe++;let Q=Ue(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Ae,me,_e[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,_e[Q].width,_e[Q].height,0,Ae,me,_e[Q].data);for(let Te=0;Te<se.length;Te++){let rt=se[Te].image[Q].image;D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,rt.width,rt.height,Ae,me,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,ze,rt.width,rt.height,0,Ae,me,rt.data)}}else{D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,me,_e[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Ae,me,_e[Q]);for(let Te=0;Te<se.length;Te++){let Oe=se[Te];D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ae,me,Oe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,ze,Ae,me,Oe.image[Q])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),X.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ye(b,v,O,W,j,X){let we=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),be=S(O.internalFormat,we,oe,O.colorSpace),Ee=n.get(v),ie=n.get(O);if(ie.__renderTarget=v,!Ee.__hasExternalTextures){let _e=Math.max(1,v.width>>X),Le=Math.max(1,v.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,X,be,_e,Le,v.depth,0,we,oe,null):t.texImage2D(j,X,be,_e,Le,0,we,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ne(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,ie.__webglTexture,0,ce(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,ie.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(b,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){let W=v.depthTexture,j=W&&W.isDepthTexture?W.type:null,X=y(v.stencilBuffer,j),we=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=ce(v);ne(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,b)}else{let W=v.textures;for(let j=0;j<W.length;j++){let X=W[j],we=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),be=S(X.internalFormat,we,oe,X.colorSpace),Ee=ce(v);O&&ne(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,be,v.width,v.height):ne(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,be,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,be,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);let j=W.__webglTexture,X=ce(v);if(v.depthTexture.format===Pi)ne(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===Zi)ne(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ye(b){let v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let W=b.texture.mipmaps;W&&W.length>0?Se(v.__webglFramebuffer[0],b):Se(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Re(v.__webglDepthbuffer[W],b,!1);else{let j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else{let W=b.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Re(v.__webglDepthbuffer,b,!1);else{let j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(b,v,O){let W=n.get(b);v!==void 0&&ye(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ye(b)}function C(b){let v=b.texture,O=n.get(b),W=n.get(v);b.addEventListener("dispose",A);let j=b.textures,X=b.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let be=0;be<v.mipmaps.length;be++)O.__webglFramebuffer[oe][be]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(we)for(let oe=0,be=j.length;oe<be;oe++){let Ee=n.get(j[oe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ne(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){let be=j[oe];O.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);let Ee=r.convert(be.format,be.colorSpace),ie=r.convert(be.type),_e=S(be.internalFormat,Ee,ie,be.colorSpace,b.isXRRenderTarget===!0),Le=ce(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,_e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ye(O.__webglFramebuffer[oe][be],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be);else ye(O.__webglFramebuffer[oe],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let oe=0,be=j.length;oe<be;oe++){let Ee=j[oe],ie=n.get(Ee),_e=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ie.__webglTexture),Ne(_e,Ee),ye(O.__webglFramebuffer,b,Ee,i.COLOR_ATTACHMENT0+oe,_e,0),m(Ee)&&h(_e)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,W.__webglTexture),Ne(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ye(O.__webglFramebuffer[be],b,v,i.COLOR_ATTACHMENT0,oe,be);else ye(O.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,oe,0);m(v)&&h(oe),t.unbindTexture()}b.depthBuffer&&Ye(b)}function ee(b){let v=b.textures;for(let O=0,W=v.length;O<W;O++){let j=v[O];if(m(j)){let X=E(b),we=n.get(j).__webglTexture;t.bindTexture(X,we),h(X),t.unbindTexture()}}}let K=[],$=[];function Z(b){if(b.samples>0){if(ne(b)===!1){let v=b.textures,O=b.width,W=b.height,j=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(b),oe=v.length>1;if(oe)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let be=b.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let ie=n.get(v[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,j,i.NEAREST),c===!0&&(K.length=0,$.length=0,K.push(i.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(K.push(X),$.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let ie=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ce(b){return Math.min(s.maxSamples,b.samples)}function ne(b){let v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function he(b){let v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Fe(b,v){let O=b.colorSpace,W=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ei&&O!==wn&&(Je.getTransfer(O)===tt?(W!==Xt||j!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=st,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ne}function W0(i,e){function t(n,s=wn){let r,a=Je.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ll)return i.BYTE;if(n===cl)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===dl)return i.ALPHA;if(n===fl)return i.RGB;if(n===Xt)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===pl)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===$s||n===Ks||n===Qs||n===js)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===La)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===$a||n===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===eo||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:X0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fl=class extends Sn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Nl,h={},E=t.getContextAttributes(),S=null,y=null,w=[],R=[],A=new de,I=null,M=new St;M.viewport=new et;let x=new St;x.viewport=new et;let T=[M,x],L=new oa,B=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=w[Y];return te===void 0&&(te=new Fi,w[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=w[Y];return te===void 0&&(te=new Fi,w[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=w[Y];return te===void 0&&(te=new Fi,w[Y]=te),te.getHandSpace()};function G(Y){let te=R.indexOf(Y.inputSource);if(te===-1)return;let ye=w[te];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,l||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<w.length;Y++){let te=R[Y];te!==null&&(R[Y]=null,w[Y].disconnect(te))}B=null,U=null,m.reset();for(let Y in h)delete h[Y];e.setRenderTarget(S),p=null,f=null,d=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",k),s.addEventListener("inputsourceschange",J),E.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=E.stencil?Zi:Pi,Re=E.stencil?Yi:Hn);let Ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ln(f.textureWidth,f.textureHeight,{format:Xt,type:nn,depthTexture:new As(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ln(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let te=0;te<Y.removed.length;te++){let ye=Y.removed[te],Re=R.indexOf(ye);Re>=0&&(R[Re]=null,w[Re].disconnect(ye))}for(let te=0;te<Y.added.length;te++){let ye=Y.added[te],Re=R.indexOf(ye);if(Re===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=R.length){R.push(ye),Re=Ye;break}else if(R[Ye]===null){R[Ye]=ye,Re=Ye;break}if(Re===-1)break}let Se=w[Re];Se&&Se.connect(ye)}}let V=new P,le=new P;function pe(Y,te,ye){V.setFromMatrixPosition(te.matrixWorld),le.setFromMatrixPosition(ye.matrixWorld);let Re=V.distanceTo(le),Se=te.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,st=Se[14]/(Se[10]-1),C=Se[14]/(Se[10]+1),ee=(Se[9]+1)/Se[5],K=(Se[9]-1)/Se[5],$=(Se[8]-1)/Se[0],Z=(Ye[8]+1)/Ye[0],ce=st*$,ne=st*Z,he=Re/(-$+Z),Fe=he*-$;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Fe),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ue=st+he,b=C+he,v=ce-Fe,O=ne+(Re-Fe),W=ee*C/b*Ue,j=K*C/b*Ue;Y.projectionMatrix.makePerspective(v,O,W,j,Ue,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,ye=Y.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),L.near=x.near=M.near=te,L.far=x.far=M.far=ye,(B!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,U=L.far),L.layers.mask=Y.layers.mask|6,M.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;let Re=Y.parent,Se=L.cameras;xe(L,Re);for(let Ye=0;Ye<Se.length;Ye++)xe(Se[Ye],Re);Se.length===2?pe(L,M,x):L.projectionMatrix.copy(M.projectionMatrix),Ne(Y,L,Re)};function Ne(Y,te,ye){ye===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Li*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return h[Y]};let We=null;function Ke(Y,te){if(u=te.getViewerPose(l||a),g=te,u!==null){let ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Re=!1;ye.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let C=0;C<ye.length;C++){let ee=ye[C],K=null;if(p!==null)K=p.getViewport(ee);else{let Z=d.getViewSubImage(f,ee);K=Z.viewport,C===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let $=T[C];$===void 0&&($=new St,$.layers.enable(C),$.viewport=new et,T[C]=$),$.matrix.fromArray(ee.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ee.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),C===0&&(L.matrix.copy($.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push($)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let C=d.getDepthInformation(ye[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let C=0;C<ye.length;C++){let ee=ye[C].camera;if(ee){let K=h[ee];K||(K=new Rs,h[ee]=K);let $=d.getCameraImage(ee);K.sourceTexture=$}}}}for(let ye=0;ye<w.length;ye++){let Re=R[ye],Se=w[ye];Re!==null&&Se!==void 0&&Se.update(Re,te,l||a)}We&&We(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Xe=new Fh;Xe.setAnimationLoop(Ke),this.setAnimationLoop=function(Y){We=Y},this.dispose=function(){}}},hi=new Gt,Z0=new Qe;function J0(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,vl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,E,S,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,E,S):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===gt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===gt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let E=e.get(h),S=E.envMap,y=E.envMapRotation;S&&(m.envMap.value=S,hi.copy(y),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(hi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let y=S.program;n.uniformBlockBinding(E,y)}function l(E,S){let y=s[E.id];y===void 0&&(g(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",m));let w=S.program;n.updateUBOMapping(E,w);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function u(E){let S=d();E.__bindingPointIndex=S;let y=i.createBuffer(),w=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=s[E.id],y=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=y.length;R<A;R++){let I=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,x=I.length;M<x;M++){let T=I[M];if(p(T,R,M,w)===!0){let L=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],U=0;for(let G=0;G<B.length;G++){let k=B[G],J=_(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+U,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,y,w){let R=E.value,A=S+"_"+y;if(w[A]===void 0)return typeof R=="number"||typeof R=="boolean"?w[A]=R:w[A]=R.clone(),!0;{let I=w[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return w[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(E){let S=E.uniforms,y=0,w=16;for(let A=0,I=S.length;A<I;A++){let M=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,T=M.length;x<T;x++){let L=M[x],B=Array.isArray(L.value)?L.value:[L.value];for(let U=0,G=B.length;U<G;U++){let k=B[U],J=_(k),V=y%w,le=V%J.boundary,pe=V+le;y+=le,pe!==0&&w-pe<J.storage&&(y+=w-pe),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=J.storage}}}let R=y%w;return R>0&&(y+=w-R),E.__size=y,E.__cache={},this}function _(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var ao=class{constructor(e={}){let{canvas:t=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Mt;let R=0,A=0,I=null,M=-1,x=null,T=new et,L=new et,B=null,U=new He(0),G=0,k=t.width,J=t.height,V=1,le=null,pe=null,xe=new et(0,0,k,J),Ne=new et(0,0,k,J),We=!1,Ke=new Oi,Xe=!1,Y=!1,te=new Qe,ye=new P,Re=new et,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function st(){return I===null?V:1}let C=n;function ee(q,N){return t.getContext(q,N)}try{let q={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",se,!1),C===null){let N="webgl2";if(C=ee(N,q),C===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(q){throw console.error("THREE.WebGLRenderer: "+q.message),q}let K,$,Z,ce,ne,he,Fe,Ue,b,v,O,W,j,X,we,oe,be,Ee,ie,_e,Le,Ae,me,ze;function D(){K=new p1(C),K.init(),Ae=new W0(C,K),$=new o1(C,K,e,Ae),Z=new H0(C,K),$.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ce=new _1(C),ne=new C0,he=new G0(C,K,Z,ne,$,Ae,ce),Fe=new c1(y),Ue=new f1(y),b=new Md(C),me=new r1(C,b),v=new m1(C,b,ce,me),O=new v1(C,v,b,ce),ie=new x1(C,$,he),oe=new l1(ne),W=new R0(y,Fe,Ue,K,$,me,oe),j=new J0(y,ne),X=new P0,we=new O0(K),Ee=new s1(y,Fe,Ue,Z,O,p,c),be=new k0(y,O,$),ze=new $0(C,ce,$,Z),_e=new a1(C,K,ce),Le=new g1(C,K,ce),ce.programs=W.programs,y.capabilities=$,y.extensions=K,y.properties=ne,y.renderLists=X,y.shadowMap=be,y.state=Z,y.info=ce}D();let ae=new Fl(y,C);this.xr=ae,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let q=K.get("WEBGL_lose_context");q&&q.loseContext()},this.forceContextRestore=function(){let q=K.get("WEBGL_lose_context");q&&q.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(q){q!==void 0&&(V=q,this.setSize(k,J,!1))},this.getSize=function(q){return q.set(k,J)},this.setSize=function(q,N,z=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=q,J=N,t.width=Math.floor(q*V),t.height=Math.floor(N*V),z===!0&&(t.style.width=q+"px",t.style.height=N+"px"),this.setViewport(0,0,q,N)},this.getDrawingBufferSize=function(q){return q.set(k*V,J*V).floor()},this.setDrawingBufferSize=function(q,N,z){k=q,J=N,V=z,t.width=Math.floor(q*z),t.height=Math.floor(N*z),this.setViewport(0,0,q,N)},this.getCurrentViewport=function(q){return q.copy(T)},this.getViewport=function(q){return q.copy(xe)},this.setViewport=function(q,N,z,H){q.isVector4?xe.set(q.x,q.y,q.z,q.w):xe.set(q,N,z,H),Z.viewport(T.copy(xe).multiplyScalar(V).round())},this.getScissor=function(q){return q.copy(Ne)},this.setScissor=function(q,N,z,H){q.isVector4?Ne.set(q.x,q.y,q.z,q.w):Ne.set(q,N,z,H),Z.scissor(L.copy(Ne).multiplyScalar(V).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(q){Z.setScissorTest(We=q)},this.setOpaqueSort=function(q){le=q},this.setTransparentSort=function(q){pe=q},this.getClearColor=function(q){return q.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(q=!0,N=!0,z=!0){let H=0;if(q){let F=!1;if(I!==null){let re=I.texture.format;F=re===wa||re===Ta||re===Ea}if(F){let re=I.texture.type,ge=re===nn||re===Hn||re===Wi||re===Yi||re===Ma||re===Sa,Me=Ee.getClearColor(),ve=Ee.getClearAlpha(),Pe=Me.r,De=Me.g,Ce=Me.b;ge?(g[0]=Pe,g[1]=De,g[2]=Ce,g[3]=ve,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Pe,_[1]=De,_[2]=Ce,_[3]=ve,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}N&&(H|=C.DEPTH_BUFFER_BIT),z&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ee.dispose(),X.dispose(),we.dispose(),ne.dispose(),Fe.dispose(),Ue.dispose(),O.dispose(),me.dispose(),ze.dispose(),W.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",an),ae.removeEventListener("sessionend",kl),Gn.stop()};function ue(q){q.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let q=ce.autoReset,N=be.enabled,z=be.autoUpdate,H=be.needsUpdate,F=be.type;D(),ce.autoReset=q,be.enabled=N,be.autoUpdate=z,be.needsUpdate=H,be.type=F}function se(q){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",q.statusMessage)}function Q(q){let N=q.target;N.removeEventListener("dispose",Q),Te(N)}function Te(q){Oe(q),ne.remove(q)}function Oe(q){let N=ne.get(q).programs;N!==void 0&&(N.forEach(function(z){W.releaseProgram(z)}),q.isShaderMaterial&&W.releaseShaderCache(q))}this.renderBufferDirect=function(q,N,z,H,F,re){N===null&&(N=Se);let ge=F.isMesh&&F.matrixWorld.determinant()<0,Me=Jh(q,N,z,H,F);Z.setMaterial(H,ge);let ve=z.index,Pe=1;if(H.wireframe===!0){if(ve=v.getWireframeAttribute(z),ve===void 0)return;Pe=2}let De=z.drawRange,Ce=z.attributes.position,Ze=De.start*Pe,nt=(De.start+De.count)*Pe;re!==null&&(Ze=Math.max(Ze,re.start*Pe),nt=Math.min(nt,(re.start+re.count)*Pe)),ve!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,ve.count)):Ce!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Ce.count));let ut=nt-Ze;if(ut<0||ut===1/0)return;me.setup(F,H,Me,z,ve);let at,it=_e;if(ve!==null&&(at=b.get(ve),it=Le,it.setIndex(at)),F.isMesh)H.wireframe===!0?(Z.setLineWidth(H.wireframeLinewidth*st()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(F.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),Z.setLineWidth(Ie*st()),F.isLineSegments?it.setMode(C.LINES):F.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else F.isPoints?it.setMode(C.POINTS):F.isSprite&&it.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ui("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ie=F._multiDrawStarts,lt=F._multiDrawCounts,$e=F._multiDrawCount,Ut=ve?b.get(ve).bytesPerElement:1,fi=ne.get(H).currentProgram.getUniforms();for(let Nt=0;Nt<$e;Nt++)fi.setValue(C,"_gl_DrawID",Nt),it.render(Ie[Nt]/Ut,lt[Nt])}else if(F.isInstancedMesh)it.renderInstances(Ze,ut,F.count);else if(z.isInstancedBufferGeometry){let Ie=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,lt=Math.min(z.instanceCount,Ie);it.renderInstances(Ze,ut,lt)}else it.render(Ze,ut)};function rt(q,N,z){q.transparent===!0&&q.side===Wt&&q.forceSinglePass===!1?(q.side=gt,q.needsUpdate=!0,ar(q,N,z),q.side=Mn,q.needsUpdate=!0,ar(q,N,z),q.side=Wt):ar(q,N,z)}this.compile=function(q,N,z=null){z===null&&(z=q),h=we.get(z),h.init(N),S.push(h),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),q!==z&&q.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();let H=new Set;return q.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let re=F.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let Me=re[ge];rt(Me,z,F),H.add(Me)}else rt(re,z,F),H.add(re)}),h=S.pop(),H},this.compileAsync=function(q,N,z=null){let H=this.compile(q,N,z);return new Promise(F=>{function re(){if(H.forEach(function(ge){ne.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){F(q);return}setTimeout(re,10)}K.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let je=null;function pn(q){je&&je(q)}function an(){Gn.stop()}function kl(){Gn.start()}let Gn=new Fh;Gn.setAnimationLoop(pn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(q){je=q,ae.setAnimationLoop(q),q===null?Gn.stop():Gn.start()},ae.addEventListener("sessionstart",an),ae.addEventListener("sessionend",kl),this.render=function(q,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),q.isScene===!0&&q.onBeforeRender(y,q,N,I),h=we.get(q,S.length),h.init(N),S.push(h),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ke.setFromProjectionMatrix(te,Kt,N.reversedDepth),Y=this.localClippingEnabled,Xe=oe.init(this.clippingPlanes,Y),m=X.get(q,E.length),m.init(),E.push(m),ae.enabled===!0&&ae.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&po(re,N,-1/0,y.sortObjects)}po(q,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,pe),Ye=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ye&&Ee.addToRenderList(m,q),this.info.render.frame++,Xe===!0&&oe.beginShadows();let z=h.state.shadowsArray;be.render(z,q,N),Xe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,F=m.transmissive;if(h.setupLights(),N.isArrayCamera){let re=N.cameras;if(F.length>0)for(let ge=0,Me=re.length;ge<Me;ge++){let ve=re[ge];Hl(H,F,q,ve)}Ye&&Ee.render(q);for(let ge=0,Me=re.length;ge<Me;ge++){let ve=re[ge];Vl(m,q,ve,ve.viewport)}}else F.length>0&&Hl(H,F,q,N),Ye&&Ee.render(q),Vl(m,q,N);I!==null&&A===0&&(he.updateMultisampleRenderTarget(I),he.updateRenderTargetMipmap(I)),q.isScene===!0&&q.onAfterRender(y,q,N),me.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(h=S[S.length-1],Xe===!0&&oe.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function po(q,N,z,H){if(q.visible===!1)return;if(q.layers.test(N.layers)){if(q.isGroup)z=q.renderOrder;else if(q.isLOD)q.autoUpdate===!0&&q.update(N);else if(q.isLight)h.pushLight(q),q.castShadow&&h.pushShadow(q);else if(q.isSprite){if(!q.frustumCulled||Ke.intersectsSprite(q)){H&&Re.setFromMatrixPosition(q.matrixWorld).applyMatrix4(te);let ge=O.update(q),Me=q.material;Me.visible&&m.push(q,ge,Me,z,Re.z,null)}}else if((q.isMesh||q.isLine||q.isPoints)&&(!q.frustumCulled||Ke.intersectsObject(q))){let ge=O.update(q),Me=q.material;if(H&&(q.boundingSphere!==void 0?(q.boundingSphere===null&&q.computeBoundingSphere(),Re.copy(q.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Re.copy(ge.boundingSphere.center)),Re.applyMatrix4(q.matrixWorld).applyMatrix4(te)),Array.isArray(Me)){let ve=ge.groups;for(let Pe=0,De=ve.length;Pe<De;Pe++){let Ce=ve[Pe],Ze=Me[Ce.materialIndex];Ze&&Ze.visible&&m.push(q,ge,Ze,z,Re.z,Ce)}}else Me.visible&&m.push(q,ge,Me,z,Re.z,null)}}let re=q.children;for(let ge=0,Me=re.length;ge<Me;ge++)po(re[ge],N,z,H)}function Vl(q,N,z,H){let F=q.opaque,re=q.transmissive,ge=q.transparent;h.setupLightsView(z),Xe===!0&&oe.setGlobalState(y.clippingPlanes,z),H&&Z.viewport(T.copy(H)),F.length>0&&rr(F,N,z),re.length>0&&rr(re,N,z),ge.length>0&&rr(ge,N,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Hl(q,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new ln(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Xi:nn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=h.state.transmissionRenderTarget[H.id],ge=H.viewport||T;re.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);let Me=y.getRenderTarget(),ve=y.getActiveCubeFace(),Pe=y.getActiveMipmapLevel();y.setRenderTarget(re),y.getClearColor(U),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&Ee.render(z);let De=y.toneMapping;y.toneMapping=Tn;let Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),Xe===!0&&oe.setGlobalState(y.clippingPlanes,H),rr(q,z,H),he.updateMultisampleRenderTarget(re),he.updateRenderTargetMipmap(re),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let nt=0,ut=N.length;nt<ut;nt++){let at=N[nt],it=at.object,Ie=at.geometry,lt=at.material,$e=at.group;if(lt.side===Wt&&it.layers.test(H.layers)){let Ut=lt.side;lt.side=gt,lt.needsUpdate=!0,Gl(it,z,H,Ie,lt,$e),lt.side=Ut,lt.needsUpdate=!0,Ze=!0}}Ze===!0&&(he.updateMultisampleRenderTarget(re),he.updateRenderTargetMipmap(re))}y.setRenderTarget(Me,ve,Pe),y.setClearColor(U,G),Ce!==void 0&&(H.viewport=Ce),y.toneMapping=De}function rr(q,N,z){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=q.length;F<re;F++){let ge=q[F],Me=ge.object,ve=ge.geometry,Pe=ge.group,De=ge.material;De.allowOverride===!0&&H!==null&&(De=H),Me.layers.test(z.layers)&&Gl(Me,N,z,ve,De,Pe)}}function Gl(q,N,z,H,F,re){q.onBeforeRender(y,N,z,H,F,re),q.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,q.matrixWorld),q.normalMatrix.getNormalMatrix(q.modelViewMatrix),F.onBeforeRender(y,N,z,H,q,re),F.transparent===!0&&F.side===Wt&&F.forceSinglePass===!1?(F.side=gt,F.needsUpdate=!0,y.renderBufferDirect(z,N,H,F,q,re),F.side=Mn,F.needsUpdate=!0,y.renderBufferDirect(z,N,H,F,q,re),F.side=Wt):y.renderBufferDirect(z,N,H,F,q,re),q.onAfterRender(y,N,z,H,F,re)}function ar(q,N,z){N.isScene!==!0&&(N=Se);let H=ne.get(q),F=h.state.lights,re=h.state.shadowsArray,ge=F.state.version,Me=W.getParameters(q,F.state,re,N,z),ve=W.getProgramCacheKey(Me),Pe=H.programs;H.environment=q.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(q.isMeshStandardMaterial?Ue:Fe).get(q.envMap||H.environment),H.envMapRotation=H.environment!==null&&q.envMap===null?N.environmentRotation:q.envMapRotation,Pe===void 0&&(q.addEventListener("dispose",Q),Pe=new Map,H.programs=Pe);let De=Pe.get(ve);if(De!==void 0){if(H.currentProgram===De&&H.lightsStateVersion===ge)return Xl(q,Me),De}else Me.uniforms=W.getUniforms(q),q.onBeforeCompile(Me,y),De=W.acquireProgram(Me,ve),Pe.set(ve,De),H.uniforms=Me.uniforms;let Ce=H.uniforms;return(!q.isShaderMaterial&&!q.isRawShaderMaterial||q.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),Xl(q,Me),H.needsLights=Kh(q),H.lightsStateVersion=ge,H.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=De,H.uniformsList=null,De}function Wl(q){if(q.uniformsList===null){let N=q.currentProgram.getUniforms();q.uniformsList=Qi.seqWithValue(N.seq,q.uniforms)}return q.uniformsList}function Xl(q,N){let z=ne.get(q);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Jh(q,N,z,H,F){N.isScene!==!0&&(N=Se),he.resetTextureUnits();let re=N.fog,ge=H.isMeshStandardMaterial?N.environment:null,Me=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ei,ve=(H.isMeshStandardMaterial?Ue:Fe).get(H.envMap||ge),Pe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,nt=!!z.morphAttributes.color,ut=Tn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ut=y.toneMapping);let at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=at!==void 0?at.length:0,Ie=ne.get(H),lt=h.state.lights;if(Xe===!0&&(Y===!0||q!==x)){let Rt=q===x&&H.id===M;oe.setState(H,q,Rt)}let $e=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==lt.state.version||Ie.outputColorSpace!==Me||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==ve||H.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Pe||Ie.vertexTangents!==De||Ie.morphTargets!==Ce||Ie.morphNormals!==Ze||Ie.morphColors!==nt||Ie.toneMapping!==ut||Ie.morphTargetsCount!==it)&&($e=!0):($e=!0,Ie.__version=H.version);let Ut=Ie.currentProgram;$e===!0&&(Ut=ar(H,N,F));let fi=!1,Nt=!1,is=!1,ct=Ut.getUniforms(),kt=Ie.uniforms;if(Z.useProgram(Ut.program)&&(fi=!0,Nt=!0,is=!0),H.id!==M&&(M=H.id,Nt=!0),fi||x!==q){Z.buffers.depth.getReversed()&&q.reversedDepth!==!0&&(q._reversedDepth=!0,q.updateProjectionMatrix()),ct.setValue(C,"projectionMatrix",q.projectionMatrix),ct.setValue(C,"viewMatrix",q.matrixWorldInverse);let It=ct.map.cameraPosition;It!==void 0&&It.setValue(C,ye.setFromMatrixPosition(q.matrixWorld)),$.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(q.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(C,"isOrthographic",q.isOrthographicCamera===!0),x!==q&&(x=q,Nt=!0,is=!0)}if(F.isSkinnedMesh){ct.setOptional(C,F,"bindMatrix"),ct.setOptional(C,F,"bindMatrixInverse");let Rt=F.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(C,"boneTexture",Rt.boneTexture,he))}F.isBatchedMesh&&(ct.setOptional(C,F,"batchingTexture"),ct.setValue(C,"batchingTexture",F._matricesTexture,he),ct.setOptional(C,F,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",F._indirectTexture,he),ct.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",F._colorsTexture,he));let Vt=z.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&ie.update(F,z,Ut),(Nt||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,ct.setValue(C,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(kt.envMap.value=ve,kt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(kt.envMapIntensity.value=N.environmentIntensity),Nt&&(ct.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&$h(kt,is),re&&H.fog===!0&&j.refreshFogUniforms(kt,re),j.refreshMaterialUniforms(kt,H,V,J,h.state.transmissionRenderTarget[q.id]),Qi.upload(C,Wl(Ie),kt,he)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qi.upload(C,Wl(Ie),kt,he),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(C,"center",F.center),ct.setValue(C,"modelViewMatrix",F.modelViewMatrix),ct.setValue(C,"normalMatrix",F.normalMatrix),ct.setValue(C,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Rt=H.uniformsGroups;for(let It=0,mo=Rt.length;It<mo;It++){let Wn=Rt[It];ze.update(Wn,Ut),ze.bind(Wn,Ut)}}return Ut}function $h(q,N){q.ambientLightColor.needsUpdate=N,q.lightProbe.needsUpdate=N,q.directionalLights.needsUpdate=N,q.directionalLightShadows.needsUpdate=N,q.pointLights.needsUpdate=N,q.pointLightShadows.needsUpdate=N,q.spotLights.needsUpdate=N,q.spotLightShadows.needsUpdate=N,q.rectAreaLights.needsUpdate=N,q.hemisphereLights.needsUpdate=N}function Kh(q){return q.isMeshLambertMaterial||q.isMeshToonMaterial||q.isMeshPhongMaterial||q.isMeshStandardMaterial||q.isShadowMaterial||q.isShaderMaterial&&q.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(q,N,z){let H=ne.get(q);H.__autoAllocateDepthBuffer=q.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ne.get(q.texture).__webglTexture=N,ne.get(q.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(q,N){let z=ne.get(q);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};let Qh=C.createFramebuffer();this.setRenderTarget=function(q,N=0,z=0){I=q,R=N,A=z;let H=!0,F=null,re=!1,ge=!1;if(q){let ve=ne.get(q);if(ve.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(ve.__webglFramebuffer===void 0)he.setupRenderTarget(q);else if(ve.__hasExternalTextures)he.rebindTextures(q,ne.get(q.texture).__webglTexture,ne.get(q.depthTexture).__webglTexture);else if(q.depthBuffer){let Ce=q.depthTexture;if(ve.__boundDepthTexture!==Ce){if(Ce!==null&&ne.has(Ce)&&(q.width!==Ce.image.width||q.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(q)}}let Pe=q.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ge=!0);let De=ne.get(q).__webglFramebuffer;q.isWebGLCubeRenderTarget?(Array.isArray(De[N])?F=De[N][z]:F=De[N],re=!0):q.samples>0&&he.useMultisampledRTT(q)===!1?F=ne.get(q).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[z]:F=De,T.copy(q.viewport),L.copy(q.scissor),B=q.scissorTest}else T.copy(xe).multiplyScalar(V).floor(),L.copy(Ne).multiplyScalar(V).floor(),B=We;if(z!==0&&(F=Qh),Z.bindFramebuffer(C.FRAMEBUFFER,F)&&H&&Z.drawBuffers(q,F),Z.viewport(T),Z.scissor(L),Z.setScissorTest(B),re){let ve=ne.get(q.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,z)}else if(ge){let ve=N;for(let Pe=0;Pe<q.textures.length;Pe++){let De=ne.get(q.textures[Pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pe,De.__webglTexture,z,ve)}}else if(q!==null&&z!==0){let ve=ne.get(q.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ve.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(q,N,z,H,F,re,ge,Me=0){if(!(q&&q.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ne.get(q).__webglFramebuffer;if(q.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){Z.bindFramebuffer(C.FRAMEBUFFER,ve);try{let Pe=q.textures[Me],De=Pe.format,Ce=Pe.type;if(!$.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=q.width-H&&z>=0&&z<=q.height-F&&(q.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(N,z,H,F,Ae.convert(De),Ae.convert(Ce),re))}finally{let Pe=I!==null?ne.get(I).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(q,N,z,H,F,re,ge,Me=0){if(!(q&&q.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ne.get(q).__webglFramebuffer;if(q.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(N>=0&&N<=q.width-H&&z>=0&&z<=q.height-F){Z.bindFramebuffer(C.FRAMEBUFFER,ve);let Pe=q.textures[Me],De=Pe.format,Ce=Pe.type;if(!$.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),q.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(N,z,H,F,Ae.convert(De),Ae.convert(Ce),0);let nt=I!==null?ne.get(I).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,nt);let ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ah(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re),C.deleteBuffer(Ze),C.deleteSync(ut),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(q,N=null,z=0){let H=Math.pow(2,-z),F=Math.floor(q.image.width*H),re=Math.floor(q.image.height*H),ge=N!==null?N.x:0,Me=N!==null?N.y:0;he.setTexture2D(q,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,ge,Me,F,re),Z.unbindTexture()};let jh=C.createFramebuffer(),eu=C.createFramebuffer();this.copyTextureToTexture=function(q,N,z=null,H=null,F=0,re=null){re===null&&(F!==0?(Ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let ge,Me,ve,Pe,De,Ce,Ze,nt,ut,at=q.isCompressedTexture?q.mipmaps[re]:q.image;if(z!==null)ge=z.max.x-z.min.x,Me=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,De=z.min.y,Ce=z.isBox3?z.min.z:0;else{let Vt=Math.pow(2,-F);ge=Math.floor(at.width*Vt),Me=Math.floor(at.height*Vt),q.isDataArrayTexture?ve=at.depth:q.isData3DTexture?ve=Math.floor(at.depth*Vt):ve=1,Pe=0,De=0,Ce=0}H!==null?(Ze=H.x,nt=H.y,ut=H.z):(Ze=0,nt=0,ut=0);let it=Ae.convert(N.format),Ie=Ae.convert(N.type),lt;N.isData3DTexture?(he.setTexture3D(N,0),lt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(he.setTexture2DArray(N,0),lt=C.TEXTURE_2D_ARRAY):(he.setTexture2D(N,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let $e=C.getParameter(C.UNPACK_ROW_LENGTH),Ut=C.getParameter(C.UNPACK_IMAGE_HEIGHT),fi=C.getParameter(C.UNPACK_SKIP_PIXELS),Nt=C.getParameter(C.UNPACK_SKIP_ROWS),is=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,De),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let ct=q.isDataArrayTexture||q.isData3DTexture,kt=N.isDataArrayTexture||N.isData3DTexture;if(q.isDepthTexture){let Vt=ne.get(q),Rt=ne.get(N),It=ne.get(Vt.__renderTarget),mo=ne.get(Rt.__renderTarget);Z.bindFramebuffer(C.READ_FRAMEBUFFER,It.__webglFramebuffer),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let Wn=0;Wn<ve;Wn++)ct&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ne.get(q).__webglTexture,F,Ce+Wn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,re,ut+Wn)),C.blitFramebuffer(Pe,De,ge,Me,Ze,nt,ge,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||q.isRenderTargetTexture||ne.has(q)){let Vt=ne.get(q),Rt=ne.get(N);Z.bindFramebuffer(C.READ_FRAMEBUFFER,jh),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,eu);for(let It=0;It<ve;It++)ct?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Vt.__webglTexture,F,Ce+It):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vt.__webglTexture,F),kt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,re,ut+It):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Rt.__webglTexture,re),F!==0?C.blitFramebuffer(Pe,De,ge,Me,Ze,nt,ge,Me,C.COLOR_BUFFER_BIT,C.NEAREST):kt?C.copyTexSubImage3D(lt,re,Ze,nt,ut+It,Pe,De,ge,Me):C.copyTexSubImage2D(lt,re,Ze,nt,Pe,De,ge,Me);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else kt?q.isDataTexture||q.isData3DTexture?C.texSubImage3D(lt,re,Ze,nt,ut,ge,Me,ve,it,Ie,at.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,re,Ze,nt,ut,ge,Me,ve,it,at.data):C.texSubImage3D(lt,re,Ze,nt,ut,ge,Me,ve,it,Ie,at):q.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,re,Ze,nt,ge,Me,it,Ie,at.data):q.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,re,Ze,nt,at.width,at.height,it,at.data):C.texSubImage2D(C.TEXTURE_2D,re,Ze,nt,ge,Me,it,Ie,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut),C.pixelStorei(C.UNPACK_SKIP_PIXELS,fi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,is),re===0&&N.generateMipmaps&&C.generateMipmap(lt),Z.unbindTexture()},this.initRenderTarget=function(q){ne.get(q).__webglFramebuffer===void 0&&he.setupRenderTarget(q)},this.initTexture=function(q){q.isCubeTexture?he.setTextureCube(q,0):q.isData3DTexture?he.setTexture3D(q,0):q.isDataArrayTexture||q.isCompressedArrayTexture?he.setTexture2DArray(q,0):he.setTexture2D(q,0),Z.unbindTexture()},this.resetState=function(){R=0,A=0,I=null,Z.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Vh=new P,K0=new jt,Hh=new P,lo=class extends ft{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var fn=new Qe,Q0=new Qe,co=class{constructor(e={}){let t=this,n,s,r,a,o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let u=document.createElement("div");u.style.transformStyle="preserve-3d",l.appendChild(u),this.getSize=function(){return{width:n,height:s}},this.render=function(m,h){let E=h.projectionMatrix.elements[5]*a;h.view&&h.view.enabled?(l.style.transform=`translate( ${-h.view.offsetX*(n/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,l.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let S,y;h.isOrthographicCamera&&(S=-(h.right+h.left)/2,y=(h.top+h.bottom)/2);let w=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,R=h.isOrthographicCamera?`scale( ${w} )scale(`+E+")translate("+d(S)+"px,"+d(y)+"px)"+f(h.matrixWorldInverse):`scale( ${w} )translateZ(`+E+"px)"+f(h.matrixWorldInverse),I=(h.isPerspectiveCamera?"perspective("+E+"px) ":"")+R+"translate("+r+"px,"+a+"px)";o.camera.style!==I&&(u.style.transform=I,o.camera.style=I),_(m,m,h,R)},this.setSize=function(m,h){n=m,s=h,r=n/2,a=s/2,c.style.width=m+"px",c.style.height=h+"px",l.style.width=m+"px",l.style.height=h+"px",u.style.width=m+"px",u.style.height=h+"px"};function d(m){return Math.abs(m)<1e-10?0:m}function f(m){let h=m.elements;return"matrix3d("+d(h[0])+","+d(-h[1])+","+d(h[2])+","+d(h[3])+","+d(h[4])+","+d(-h[5])+","+d(h[6])+","+d(h[7])+","+d(h[8])+","+d(-h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(-h[13])+","+d(h[14])+","+d(h[15])+")"}function p(m){let h=m.elements;return"translate(-50%,-50%)"+("matrix3d("+d(h[0])+","+d(h[1])+","+d(h[2])+","+d(h[3])+","+d(-h[4])+","+d(-h[5])+","+d(-h[6])+","+d(-h[7])+","+d(h[8])+","+d(h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(h[13])+","+d(h[14])+","+d(h[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let h=0,E=m.children.length;h<E;h++)g(m.children[h])}function _(m,h,E,S){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let y=m.layers.test(E.layers)===!0,w=m.element;if(w.style.display=y===!0?"":"none",y===!0){m.onBeforeRender(t,h,E);let R;m.isCSS3DSprite?(fn.copy(E.matrixWorldInverse),fn.transpose(),m.rotation2D!==0&&fn.multiply(Q0.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Vh,K0,Hh),fn.setPosition(Vh),fn.scale(Hh),fn.elements[3]=0,fn.elements[7]=0,fn.elements[11]=0,fn.elements[15]=1,R=p(fn)):R=p(m.matrixWorld);let A=o.objects.get(m);if(A===void 0||A.style!==R){w.style.transform=R;let I={style:R};o.objects.set(m,I)}w.parentNode!==u&&u.appendChild(w),m.onAfterRender(t,h,E)}}for(let y=0,w=m.children.length;y<w;y++)_(m.children[y],h,E,S)}}};var ho=class extends Bn{constructor(){super();let e=new mt;e.deleteAttribute("uv");let t=new pt({side:gt}),n=new pt,s=new Ws(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ni(e,n,6),o=new ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ke(e,ts(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ke(e,ts(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new ke(e,ts(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ke(e,ts(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new ke(e,ts(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new ke(e,ts(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ts(i){return new zs({color:0,emissive:16777215,emissiveIntensity:i})}var nr=new P;function Yt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;nr.copy(e),nr[n]=0,nr.normalize();let l=.5*a/(a+o),u=1-nr.angleTo(i)/c;return Math.sign(nr[t])===1?u*l:o/(a+o)+l+l*(1-u)}var ir=class i extends mt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,_=new P,m=.5/a;for(let h=0,E=0;h<d.length;h+=3,E+=2)switch(c.fromArray(d,h),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[h+0]=u.x*Math.sign(c.x)+l.x*r,d[h+1]=u.y*Math.sign(c.y)+l.y*r,d[h+2]=u.z*Math.sign(c.z)+l.z*r,f[h+0]=l.x,f[h+1]=l.y,f[h+2]=l.z,Math.floor(h/g)){case 0:_.set(1,0,0),p[E+0]=Yt(_,l,"z","y",r,n),p[E+1]=1-Yt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[E+0]=1-Yt(_,l,"z","y",r,n),p[E+1]=1-Yt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[E+0]=1-Yt(_,l,"x","z",r,e),p[E+1]=Yt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),p[E+0]=1-Yt(_,l,"x","z",r,e),p[E+1]=1-Yt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),p[E+0]=1-Yt(_,l,"x","y",r,e),p[E+1]=1-Yt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[E+0]=Yt(_,l,"x","y",r,e),p[E+1]=1-Yt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var uo=class{constructor(e,t){this.width=e,this.geometry=new Dt(e,t,48,10),this.original=this.geometry.attributes.position.array.slice(),this.material=new pt({color:"#f7f2e8",roughness:.91,side:Wt}),this.mesh=new ke(this.geometry,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.position.z=.47,this.mesh.name="curved-turning-page",this.edge=new ke(this.geometry.clone(),new pt({color:"#c9b99a",roughness:1,side:gt})),this.edge.position.z=.452,this.mesh.add(this.edge)}update(e){if(this.mesh.visible=e>0&&e<1,!this.mesh.visible)return;let t=this.geometry.attributes.position,n=Math.sin(e*Math.PI)*1.6,s=96,r=[{x:0,z:0}];for(let a=1;a<=s;a++){let o=(a-.5)/s,c=-e*Math.PI+n*Math.sin(o*Math.PI);r.push({x:r[a-1].x+Math.cos(c)*this.width/s,z:r[a-1].z-Math.sin(c)*this.width/s})}for(let a=0;a<t.count;a++){let o=(this.original[a*3]+this.width/2)/this.width,c=Math.min(s,Math.round(o*s)),l=Math.sin(o*Math.PI)*Math.sin(e*Math.PI)*.16;t.setXYZ(a,r[c].x,this.original[a*3+1]+l*this.original[a*3+1]/6,r[c].z)}t.needsUpdate=!0,this.geometry.computeVertexNormals(),this.edge.geometry.attributes.position.array.set(t.array),this.edge.geometry.attributes.position.needsUpdate=!0,this.edge.geometry.computeVertexNormals(),this.edge.position.z=-.018}curvature(){if(!this.mesh.visible)return 0;let e=this.geometry.attributes.position,t=245,n=new P().fromBufferAttribute(e,t),s=new P().fromBufferAttribute(e,t+48),r=0;for(let a=1;a<48;a++){let o=new P().fromBufferAttribute(e,t+a);r=Math.max(r,o.distanceTo(n.clone().lerp(s,a/48)))}return r}};var vt=8,rn=vt*800/529;function Gh(i,e){let t=new bt;t.name="persistent-book";let n=new pt({color:"#f7f2e8",roughness:.92}),s=new pt({color:"#735624",roughness:.56,metalness:.08}),r=new pt({color:"#b99551",roughness:.36,metalness:.65});function a(w,R,A,I,M,x,T=.06){let L=new ke(new ir(w,R,A,2,T),I);return L.position.set(M,0,x),L.castShadow=!0,L.receiveShadow=!0,t.add(L),L}a(vt+.18,rn+.2,.22,s,vt/2,-.45),a(vt-.08,rn-.06,.72,n,vt/2,-.04);let o=a(vt+.18,rn+.2,.22,s,-vt/2,-.45),c=a(vt-.08,rn-.06,.38,n,-vt/2,.11),l=a(.38,rn+.15,.9,s,0,-.06,.08);l.name="rounded-cloth-spine";let u=new ni(new mt(vt-.1,.012,.009),new pt({color:"#bcb19c",roughness:1}),48),d=new Qe;for(let w=0;w<48;w++)d.makeTranslation(vt/2,-rn/2+.028,-.37+w*.015),u.setMatrixAt(w,d);t.add(u);let f=new bt;f.name="front-cover-hinge",f.position.z=.44,t.add(f);let p=new ke(new ir(vt+.16,rn+.16,.16,3,.045),s);p.position.x=vt/2,p.castShadow=!0,p.receiveShadow=!0,f.add(p);let g=new pt({color:"#ffffff",roughness:.52,metalness:.03}),_=new ke(new Dt(vt,rn),g);_.position.set(vt/2,0,.085),f.add(_),new Hs().load(i,w=>{w.colorSpace=Mt,w.anisotropy=4,g.map=w,g.needsUpdate=!0,e()},void 0,()=>{_.visible=!1,e()});let m=a(.045,rn-.1,.015,r,0,.37,.005);m.name="gilded-gutter";let h=new uo(vt,rn);t.add(h.mesh);let E=new pt({color:"#ffffff",roughness:.92}),S=new ke(new Dt(vt-.08,rn-.06),E);S.position.set(vt/2,0,.33),S.receiveShadow=!0,t.add(S);let y=new bt;return t.add(y),{group:t,hinge:f,page:h,paperMat:n,imprint:y,surfaceMaterial:E,update(w,R){t.rotation.set(-Math.PI/2*w.flat,R.x*.012*(1-w.dive),R.y*.009*(1-w.dive)),t.position.x=-vt/2*(1-w.opening),t.position.y=0,t.scale.setScalar(1+4*w.dive),f.rotation.y=-w.opening*Math.PI,f.position.z=.44-.3*w.opening,o.visible=c.visible=w.opening>.02,h.update(w.turn)}}}var fo=class extends bn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Vs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let c=r.parse(JSON.parse(o));t&&t(c)},n,s)}parse(e){return new Bl(e)}},Bl=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],s=j0(e,t,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}};function j0(i,e,t){let n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,a=[],o=0,c=0;for(let l=0;l<n.length;l++){let u=n[l];if(u===`
`)o=0,c-=r;else{let d=em(u,s,o,c,t);o+=d.offsetX,a.push(d.path)}}return a}function em(i,e,t,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let a=new Ys,o,c,l,u,d,f,p,g;if(r.o){let _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,h=_.length;m<h;)switch(_[m++]){case"m":o=_[m++]*e+t,c=_[m++]*e+n,a.moveTo(o,c);break;case"l":o=_[m++]*e+t,c=_[m++]*e+n,a.lineTo(o,c);break;case"q":l=_[m++]*e+t,u=_[m++]*e+n,d=_[m++]*e+t,f=_[m++]*e+n,a.quadraticCurveTo(d,f,l,u);break;case"b":l=_[m++]*e+t,u=_[m++]*e+n,d=_[m++]*e+t,f=_[m++]*e+n,p=_[m++]*e+t,g=_[m++]*e+n,a.bezierCurveTo(d,f,p,g,l,u);break}}return{offsetX:r.ha*e,path:a}}var ns=class extends Os{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let s=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}};var Wh={glyphs:{\u03BF:{x_min:41,x_max:710,ha:753,o:"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},S:{x_min:50,x_max:639,ha:699,o:"m 88 208 q 179 88 122 131 q 318 46 237 46 q 457 98 397 46 q 518 227 518 150 q 401 400 518 336 q 184 498 293 448 q 68 688 68 566 q 156 880 68 811 q 370 950 244 950 q 480 936 430 950 q 597 891 530 922 q 570 822 583 858 q 553 756 558 786 l 539 756 q 354 897 502 897 q 231 855 282 897 q 181 742 181 813 q 298 580 181 640 q 519 483 408 531 q 639 286 639 413 q 538 68 639 152 q 301 -15 438 -15 q 166 2 229 -15 q 50 59 104 19 q 68 135 62 104 q 75 205 75 166 l 88 208 "},"/":{x_min:-36.03125,x_max:404.15625,ha:383,o:"m -36 -125 l 340 1025 l 404 1024 l 28 -126 l -36 -125 "},\u03A4:{x_min:11,x_max:713,ha:725,o:"m 11 839 l 15 884 l 11 932 q 194 927 72 932 q 361 922 316 922 q 544 927 421 922 q 713 932 668 932 q 707 883 707 911 q 707 861 707 870 q 713 834 707 852 q 609 850 666 843 q 504 857 552 857 l 428 857 q 426 767 428 830 q 424 701 424 704 l 428 220 q 442 0 428 122 q 362 8 401 3 q 323 5 344 8 q 282 0 301 2 q 289 132 282 40 q 296 259 296 225 l 296 683 l 296 857 q 11 839 164 857 "},\u03D5:{x_min:41,x_max:960,ha:1006,o:"m 441 -10 q 162 76 283 -10 q 41 316 41 163 q 162 562 41 470 q 441 654 283 654 q 434 838 441 719 q 427 971 427 957 q 464 965 443 968 q 503 962 485 962 q 540 965 519 962 q 578 970 560 968 q 563 654 563 824 q 839 567 719 654 q 960 324 960 481 q 841 79 960 169 q 563 -10 722 -10 q 570 -201 563 -68 q 578 -371 578 -334 q 505 -362 539 -362 q 465 -365 483 -362 q 427 -372 446 -368 q 434 -161 427 -297 q 441 -10 441 -26 m 563 39 q 757 118 690 39 q 824 330 824 198 q 750 523 824 445 q 564 601 677 601 l 563 319 l 563 39 m 441 319 l 441 601 q 253 523 326 601 q 180 330 180 446 q 245 117 180 195 q 439 39 310 39 l 441 319 "},y:{x_min:4.171875,x_max:665.28125,ha:664,o:"m 4 654 l 86 647 l 165 654 q 202 536 188 577 q 241 431 215 495 l 363 129 l 473 413 q 552 654 519 537 q 606 647 583 647 q 665 654 633 647 q 416 125 531 388 q 223 -372 301 -137 l 187 -366 q 141 -366 163 -366 q 112 -372 122 -370 l 290 -22 q 4 654 170 294 "},"\u2248":{x_min:118.0625,x_max:1019.453125,ha:1139,o:"m 765 442 q 564 487 700 442 q 376 533 429 533 q 250 506 298 533 q 118 427 202 480 l 118 501 q 245 572 180 545 q 376 600 311 600 q 574 553 438 600 q 765 507 709 507 q 888 534 829 507 q 1019 614 947 562 l 1019 538 q 892 467 954 493 q 765 442 830 442 m 759 214 q 568 260 702 214 q 376 307 433 307 q 236 272 300 307 q 118 202 173 238 l 118 277 q 247 346 181 320 q 380 372 312 372 q 570 326 445 372 q 765 281 695 281 q 883 306 830 281 q 1019 388 936 331 l 1019 313 q 894 240 959 266 q 759 214 829 214 "},\u03A0:{x_min:108,x_max:927.453125,ha:1036,o:"m 432 846 l 263 846 q 260 634 263 781 q 257 475 257 486 q 262 236 257 395 q 268 0 268 77 q 229 3 255 0 q 188 8 202 8 q 149 3 177 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 803 q 285 926 166 932 q 464 921 405 921 q 695 926 541 921 q 927 932 849 932 q 915 793 921 871 q 909 659 909 716 l 909 504 q 917 245 909 427 q 926 0 926 62 q 887 4 913 0 q 847 8 860 8 q 810 5 827 8 q 768 0 792 2 q 773 259 768 94 q 778 469 778 423 l 778 731 l 773 846 l 432 846 "},\u0390:{x_min:-41,x_max:384,ha:342,o:"m 105 333 l 105 520 q 104 566 105 544 q 97 654 103 588 q 141 647 131 648 q 166 647 152 647 q 234 654 196 647 q 225 555 226 599 q 224 437 224 510 l 224 406 q 229 194 224 337 q 234 0 234 51 q 202 3 217 1 q 166 5 186 5 q 128 3 149 5 q 97 0 108 1 q 101 165 97 51 q 105 333 105 279 m 18 865 q 61 846 43 865 q 80 804 80 828 q 61 761 80 779 q 18 743 43 743 q -22 761 -4 743 q -41 804 -41 779 q -22 846 -41 828 q 18 865 -4 865 m 172 929 q 189 969 179 956 q 225 982 199 982 q 256 971 243 982 q 270 941 270 961 q 257 904 270 919 l 149 743 l 117 743 l 172 929 m 324 865 q 366 846 348 865 q 384 804 384 828 q 366 761 384 779 q 324 743 348 743 q 281 761 298 743 q 265 804 265 779 q 281 846 265 828 q 324 865 298 865 "},g:{x_min:32,x_max:672,ha:688,o:"m 81 123 q 112 201 81 169 q 193 252 144 233 l 193 262 q 97 329 130 277 q 64 447 64 380 q 141 610 64 549 q 323 672 218 672 q 421 661 357 672 q 500 650 486 651 l 672 654 l 672 582 q 599 592 635 587 q 537 597 563 597 q 607 458 607 548 q 527 294 607 356 q 342 232 447 232 q 291 235 319 232 q 255 239 262 239 q 208 220 228 239 q 188 173 188 201 q 221 120 188 136 q 296 104 254 104 l 427 104 q 603 56 534 104 q 672 -93 672 9 q 560 -299 672 -226 q 309 -372 448 -372 q 115 -327 199 -372 q 32 -183 32 -283 q 76 -62 32 -110 q 193 8 121 -13 q 112 51 143 25 q 81 123 81 77 m 332 278 q 439 332 401 278 q 478 457 478 386 q 441 575 478 525 q 338 625 404 625 q 232 570 271 625 q 194 447 194 515 q 230 328 194 379 q 332 278 266 278 m 337 -316 q 491 -270 423 -316 q 559 -141 559 -224 q 500 -29 559 -62 q 353 3 441 3 q 199 -36 263 3 q 136 -162 136 -76 q 195 -277 136 -238 q 337 -316 255 -316 "},"\xB2":{x_min:15.28125,x_max:412.5,ha:496,o:"m 297 744 q 270 830 297 795 q 197 866 244 866 q 120 837 149 866 q 83 761 90 808 l 76 759 q 54 802 68 780 q 31 837 40 824 q 210 901 108 901 q 334 862 278 901 q 390 758 390 824 q 282 568 390 656 q 111 428 174 479 l 293 428 q 350 431 316 428 q 412 439 384 434 l 406 397 l 412 356 l 304 361 l 111 361 l 15 355 l 15 378 q 220 567 144 484 q 297 744 297 651 "},\u039A:{x_min:108,x_max:856.625,ha:821,o:"m 255 314 q 261 132 255 250 q 268 0 268 13 q 229 4 255 0 q 188 8 202 8 q 148 4 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 712 126 621 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 203 925 q 267 932 259 932 l 255 671 l 255 499 q 480 693 375 586 q 687 932 585 800 q 732 932 710 932 q 777 932 753 932 l 837 932 q 606 727 720 830 q 389 522 493 623 q 525 358 465 426 q 666 202 586 290 q 856 0 747 115 l 746 0 q 692 -1 716 0 q 644 -8 669 -2 q 571 92 610 44 q 477 204 532 140 l 255 459 l 255 314 "},\u00EB:{x_min:40,x_max:646.9375,ha:681,o:"m 406 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 313 335 315 335 l 179 331 q 235 127 179 212 q 406 42 291 42 m 219 929 q 271 906 249 929 q 294 854 294 884 q 273 800 294 822 q 221 778 252 778 q 166 800 190 778 q 143 854 143 822 q 165 906 143 884 q 219 929 187 929 m 460 929 q 513 906 492 929 q 534 854 534 884 q 513 799 534 820 q 461 778 493 778 q 407 800 429 778 q 385 854 385 822 q 407 906 385 884 q 460 929 429 929 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},e:{x_min:41,x_max:645.15625,ha:681,o:"m 406 42 q 602 130 523 42 l 618 125 q 611 86 614 104 q 609 44 609 67 q 497 0 561 14 q 370 -15 434 -15 q 130 73 220 -15 q 41 311 41 161 q 127 563 41 455 q 356 672 214 672 q 563 592 482 672 q 645 385 645 512 l 643 331 l 313 335 l 179 331 q 235 126 179 210 q 406 42 291 42 m 511 392 l 513 436 q 470 563 513 509 q 356 618 427 618 q 230 553 268 618 q 179 388 191 488 l 511 392 "},\u03CC:{x_min:41,x_max:710,ha:753,o:"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 524 943 q 558 974 542 964 q 595 985 574 985 q 632 969 618 985 q 646 932 646 954 q 632 897 646 911 q 591 866 618 883 l 390 743 l 341 743 l 524 943 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},J:{x_min:-71,x_max:277,ha:385,o:"m 118 -40 q 131 62 128 9 q 135 184 135 115 q 132 462 135 325 q 127 690 130 598 q 111 932 123 782 q 159 928 129 932 q 193 925 189 925 q 238 927 221 925 q 277 932 256 929 q 268 665 277 843 q 260 457 260 487 l 260 165 q 260 107 260 147 q 260 48 260 68 q 169 -155 260 -88 q -62 -222 79 -222 l -71 -180 q 50 -134 1 -166 q 118 -40 100 -102 "},"\xBB":{x_min:43,x_max:543,ha:607,o:"m 196 322 l 43 607 l 81 645 l 303 322 l 81 0 l 43 37 l 196 322 m 436 322 l 283 607 l 322 645 l 543 322 l 322 0 l 283 37 l 436 322 "},"\xA9":{x_min:80,x_max:1058,ha:1139,o:"m 816 905 q 992 726 927 841 q 1058 481 1058 611 q 912 138 1058 283 q 567 -6 766 -6 q 225 139 370 -6 q 80 481 80 284 q 224 826 80 681 q 569 971 368 971 q 816 905 698 971 m 569 918 q 263 788 392 918 q 134 481 134 659 q 261 175 134 306 q 566 45 389 45 q 872 174 741 45 q 1004 478 1004 304 q 947 699 1004 596 q 787 859 890 801 q 569 918 684 918 m 570 724 q 441 652 483 724 q 399 490 399 581 q 438 320 399 396 q 560 245 478 245 q 664 278 621 245 q 723 370 707 311 l 798 370 q 720 232 788 283 q 561 181 653 181 q 379 268 446 181 q 313 476 313 355 q 380 694 313 604 q 571 785 447 785 q 717 738 656 785 q 793 610 779 691 l 715 610 q 664 692 705 660 q 570 724 624 724 "},\u03CE:{x_min:39.71875,x_max:1028.9375,ha:1068,o:"m 534 528 l 596 528 l 594 305 q 616 117 594 193 q 722 42 638 42 q 850 118 811 42 q 888 293 888 194 q 829 502 888 409 q 664 654 769 594 l 717 648 q 805 654 766 648 q 967 510 905 606 q 1028 304 1028 413 q 948 81 1028 177 q 744 -15 867 -15 q 622 16 678 -15 q 534 104 566 47 q 445 16 500 48 q 323 -15 389 -15 q 118 83 196 -15 q 39 311 39 182 q 100 511 39 419 q 262 654 161 604 q 303 650 278 651 q 349 648 327 648 l 402 654 q 238 501 296 593 q 179 291 179 409 q 218 116 179 191 q 348 42 257 42 q 419 68 390 42 q 461 138 448 94 q 472 216 469 175 q 475 303 475 257 q 472 420 475 353 q 469 529 470 486 l 534 528 m 681 943 q 714 974 699 964 q 751 985 730 985 q 788 969 774 985 q 802 932 802 954 q 787 896 802 912 q 746 866 773 880 l 547 743 l 498 743 l 681 943 "},"\u2265":{x_min:176.1875,x_max:963,ha:1139,o:"m 963 462 l 176 196 l 176 266 l 850 491 l 176 718 l 176 788 l 963 522 l 963 462 m 963 26 l 176 26 l 176 93 l 963 93 l 963 26 "},"^":{x_min:0,x_max:390,ha:403,o:"m 150 978 l 239 978 l 390 743 l 344 743 l 195 875 l 49 743 l 0 743 l 150 978 "},"\xAB":{x_min:48,x_max:549.390625,ha:607,o:"m 152 326 l 309 42 l 268 3 l 48 326 l 268 649 l 309 611 l 152 326 m 394 326 l 549 42 l 509 3 l 288 326 l 509 649 l 549 611 l 394 326 "},D:{x_min:108,x_max:991,ha:1043,o:"m 126 465 q 117 704 126 536 q 108 931 108 872 l 210 929 q 350 934 251 929 q 477 939 449 939 q 579 936 553 939 q 709 917 605 934 q 902 775 814 900 q 991 483 991 650 q 852 130 991 261 q 491 0 713 0 l 378 0 l 228 7 l 203 7 q 148 4 173 7 q 108 0 123 1 q 117 239 108 70 q 126 465 126 408 m 402 64 q 724 168 609 64 q 840 479 840 273 q 730 774 840 671 q 428 878 621 878 q 345 873 400 878 q 262 869 289 869 l 255 497 l 255 376 l 262 76 q 332 68 292 72 q 402 64 373 64 "},w:{x_min:4.171875,x_max:1052.78125,ha:1047,o:"m 4 655 q 55 648 41 648 q 86 647 69 647 q 165 654 120 647 q 190 540 176 587 q 238 394 204 492 l 329 141 q 498 654 419 386 q 551 647 526 647 q 609 654 577 647 q 637 544 620 601 q 677 420 654 487 l 770 135 l 872 413 q 911 532 893 472 q 944 654 930 592 q 979 647 970 648 q 1000 647 988 647 q 1052 654 1022 647 q 961 457 1002 555 q 871 235 919 359 q 782 0 824 110 q 755 3 772 0 q 733 6 738 6 q 708 3 724 6 q 686 0 692 0 q 650 127 667 72 q 611 239 632 183 l 518 494 q 432 258 475 382 q 348 0 390 134 q 325 3 336 1 q 297 5 313 5 q 269 3 284 5 q 245 0 254 1 q 162 244 200 140 q 86 447 125 347 q 4 655 47 546 "},$:{x_min:89,x_max:666,ha:749,o:"m 139 186 l 146 186 q 213 91 165 119 q 342 50 261 63 l 342 416 q 142 515 196 458 q 89 648 89 573 q 164 819 89 752 q 342 886 239 886 q 330 985 342 936 l 359 979 l 404 984 q 400 924 401 945 q 399 886 399 904 q 510 874 457 886 q 605 834 562 862 q 582 788 592 808 q 555 729 572 768 l 547 729 q 495 810 535 783 q 399 837 455 837 l 399 520 q 610 419 554 479 q 666 277 666 359 q 588 87 666 164 q 399 0 511 9 l 399 -32 q 399 -63 399 -48 q 405 -125 400 -78 l 368 -121 l 329 -125 l 342 0 q 210 13 273 0 q 98 58 147 27 l 139 186 m 342 836 q 237 787 278 826 q 196 686 196 748 q 237 588 196 626 q 342 537 279 551 l 342 836 m 553 231 q 513 337 553 300 q 399 402 473 375 l 399 51 q 512 113 471 66 q 553 231 553 159 "},"\u2027":{x_min:134,x_max:309,ha:446,o:"m 222 636 q 284 611 259 636 q 309 548 309 586 q 284 486 309 512 q 222 461 260 461 q 160 486 186 461 q 134 548 134 511 q 159 610 134 584 q 222 636 185 636 "},"\\":{x_min:-36,x_max:403.140625,ha:383,o:"m -36 1025 l 28 1025 l 403 -125 l 340 -125 l -36 1025 "},\u0399:{x_min:109,x_max:271,ha:385,o:"m 127 465 q 123 711 127 620 q 109 932 120 803 q 154 927 129 929 q 190 925 179 925 q 238 928 209 925 q 271 931 266 931 q 263 788 271 887 q 256 659 256 690 l 256 448 l 256 283 q 263 135 256 238 q 271 0 271 31 q 231 3 258 0 q 190 8 204 8 q 151 5 172 8 q 109 0 129 2 q 118 239 109 70 q 127 465 127 408 "},\u038E:{x_min:-1,x_max:1204.5625,ha:1165,o:"m 758 177 l 758 386 q 651 570 717 458 q 543 750 585 681 q 431 931 501 819 q 483 928 449 931 q 522 925 518 925 q 572 927 550 925 q 606 931 593 930 q 666 800 633 866 q 735 676 699 734 l 849 475 q 968 688 910 575 q 1086 931 1027 801 l 1142 926 q 1174 927 1160 926 q 1204 931 1187 929 q 1014 627 1099 769 l 891 415 l 891 240 q 894 101 891 198 q 897 0 897 5 q 860 4 885 1 q 820 6 835 6 q 778 4 793 6 q 743 0 763 2 q 753 88 748 36 q 758 177 758 140 m 182 943 q 215 974 200 964 q 252 985 231 985 q 289 969 274 985 q 305 932 305 954 q 290 896 305 911 q 248 866 275 882 l 48 743 l -1 743 l 182 943 "},"\u2019":{x_min:90.28125,x_max:305.5625,ha:374,o:"m 169 859 q 197 923 177 894 q 250 953 218 953 q 288 939 272 953 q 305 902 305 925 q 295 857 305 882 q 269 811 284 833 l 120 568 l 90 576 l 169 859 "},\u039D:{x_min:98,x_max:911.890625,ha:1011,o:"m 112 230 q 114 486 112 315 q 117 741 117 656 l 117 950 l 166 950 q 326 766 239 865 q 468 606 413 667 q 610 451 524 544 l 821 227 l 821 604 q 816 765 821 685 q 803 931 812 845 l 855 927 l 911 931 q 901 831 906 884 q 897 741 897 779 q 894 413 897 619 q 892 165 892 207 l 892 -15 l 849 -15 q 730 125 796 50 q 589 281 664 201 l 193 702 l 193 330 q 212 -1 193 169 l 149 2 l 98 -1 q 108 125 105 79 q 112 230 112 170 "},"-":{x_min:58.328125,x_max:388.890625,ha:449,o:"m 58 390 l 388 390 l 388 273 l 58 273 l 58 390 "},Q:{x_min:51,x_max:1074.609375,ha:1119,o:"m 566 -14 q 194 113 338 -14 q 51 465 51 241 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 756 q 1065 525 1062 551 q 1068 462 1068 499 q 1065 405 1068 429 q 1050 305 1062 381 q 960 144 1038 229 q 748 6 881 59 l 930 -112 q 1004 -161 963 -136 q 1074 -200 1045 -186 q 1008 -228 1035 -214 q 951 -267 980 -243 q 876 -208 912 -234 q 803 -154 841 -182 l 606 -14 l 566 -14 m 202 468 q 290 163 202 283 q 559 43 379 43 q 826 163 738 43 q 915 468 915 284 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 638 267 763 q 202 468 202 552 "},\u03C2:{x_min:44,x_max:613.453125,ha:644,o:"m 305 -206 q 350 -218 325 -218 q 447 -177 407 -218 q 487 -79 487 -136 q 376 55 487 4 q 159 156 266 106 q 44 365 44 231 q 143 585 44 499 q 380 672 242 672 q 506 658 448 672 q 613 616 564 645 q 587 500 595 559 l 562 500 q 501 586 549 557 q 391 616 453 616 q 233 551 296 616 q 170 393 170 486 q 216 271 170 320 q 339 196 263 223 l 467 149 q 569 76 531 119 q 608 -27 608 34 q 522 -206 608 -136 q 321 -293 437 -276 l 305 -206 "},M:{x_min:55,x_max:1165,ha:1238,o:"m 190 950 l 243 950 q 331 772 291 851 q 412 612 370 693 q 504 436 454 532 l 626 214 q 742 435 671 298 q 882 711 813 572 q 1001 950 952 850 l 1052 950 q 1082 649 1067 791 q 1118 341 1098 508 q 1165 0 1139 174 q 1121 8 1139 5 q 1088 11 1103 11 q 1049 6 1071 11 q 1008 0 1027 2 q 998 226 1008 109 q 974 461 989 343 q 944 695 959 579 l 748 312 q 610 0 665 152 l 594 1 l 576 0 q 227 685 402 364 l 188 307 q 172 128 175 179 q 168 0 168 77 q 138 4 157 1 q 110 6 118 6 q 81 4 93 6 q 55 0 68 2 q 121 333 89 168 q 171 652 152 498 q 190 950 190 805 "},\u03A8:{x_min:73,x_max:995.609375,ha:1071,o:"m 609 0 q 561 5 585 2 q 532 8 536 8 q 494 5 515 8 q 456 0 474 2 q 463 151 456 45 q 470 297 470 258 q 180 383 287 297 q 73 650 73 469 l 73 817 l 73 932 q 139 925 110 925 q 180 928 155 925 q 212 931 206 931 q 200 818 204 861 q 197 723 197 774 l 197 688 l 197 638 q 268 438 197 508 q 472 368 340 368 l 473 481 q 464 736 473 566 q 456 932 456 905 q 499 927 481 929 q 532 925 518 925 q 577 927 557 925 q 609 931 596 930 q 601 635 609 841 q 594 368 594 429 l 645 372 q 816 465 765 372 q 868 691 868 559 q 861 829 868 740 q 855 932 855 919 q 896 927 878 929 q 924 925 913 925 q 971 927 955 925 q 995 931 987 930 l 994 839 l 994 675 q 894 388 994 480 q 594 297 794 297 q 601 142 594 249 q 609 0 609 35 "},C:{x_min:51,x_max:881.5625,ha:913,o:"m 828 737 q 552 889 733 889 q 295 768 383 889 q 207 469 207 647 q 299 177 207 305 q 551 50 391 50 q 710 86 637 50 q 855 189 783 122 l 870 183 q 858 122 862 147 q 855 69 855 97 q 521 -15 699 -15 q 180 116 309 -15 q 51 462 51 248 q 189 820 51 690 q 556 950 327 950 q 719 930 638 950 q 881 875 799 911 q 857 809 867 843 q 845 737 847 775 l 828 737 "},\u0153:{x_min:39,x_max:1195.9375,ha:1226,o:"m 359 -15 q 125 76 212 -15 q 39 318 39 167 q 125 571 39 470 q 362 672 212 672 q 514 640 441 672 q 641 551 588 608 q 897 672 741 672 q 1110 593 1024 672 q 1195 390 1195 515 l 1193 331 q 1022 332 1108 331 q 851 334 935 333 l 708 331 q 765 124 708 206 q 944 42 822 42 q 1145 130 1068 42 l 1162 130 q 1155 85 1158 110 q 1151 47 1152 60 q 1036 0 1100 14 q 904 -15 973 -15 q 754 12 819 -15 q 641 106 689 40 q 514 14 584 44 q 359 -15 444 -15 m 376 625 q 224 534 270 625 q 179 328 179 443 q 224 124 179 215 q 369 34 269 34 q 521 127 470 34 q 573 328 573 221 q 526 534 573 443 q 376 625 480 625 m 1061 392 l 1061 423 q 1017 561 1061 504 q 894 618 973 618 q 756 549 805 618 q 708 390 708 480 l 1061 392 "},"!":{x_min:136,x_max:312,ha:449,o:"m 223 156 q 285 130 259 156 q 312 68 312 105 q 285 8 312 32 q 223 -15 259 -15 q 161 9 187 -15 q 136 68 136 33 q 160 130 136 105 q 223 156 185 156 m 150 752 l 144 841 q 161 919 144 888 q 223 950 178 950 q 282 925 260 950 q 304 863 304 901 q 299 808 304 845 q 295 752 295 770 l 246 250 q 223 250 238 250 q 199 250 206 250 l 150 752 "},\u00E7:{x_min:34,x_max:614.5625,ha:644,o:"m 607 119 l 592 41 q 490 -2 549 10 q 363 -15 431 -15 q 130 80 227 -15 q 34 313 34 175 q 132 576 34 480 q 397 672 231 672 q 511 659 456 672 q 614 617 565 647 q 597 558 604 587 q 584 492 589 528 l 570 492 q 507 587 547 553 q 406 622 467 622 q 234 534 293 622 q 176 329 176 447 q 238 126 176 211 q 414 42 300 42 q 592 124 521 42 l 607 119 m 202 -212 q 350 -246 273 -246 q 414 -232 388 -246 q 440 -186 440 -219 q 421 -142 440 -158 q 373 -126 402 -126 l 323 -126 l 323 0 l 367 0 l 367 -77 l 404 -73 q 495 -102 457 -73 q 533 -183 533 -132 q 494 -270 533 -237 q 402 -303 456 -303 q 286 -294 335 -303 q 184 -261 238 -286 l 202 -212 "},"{":{x_min:116,x_max:567.390625,ha:683,o:"m 491 909 q 421 874 445 909 q 397 792 397 839 l 397 744 l 397 583 q 368 434 397 493 q 263 354 339 376 q 367 272 338 332 q 397 125 397 212 l 397 -35 q 414 -149 397 -108 q 471 -197 431 -191 q 529 -204 511 -204 q 567 -204 548 -204 l 567 -276 q 387 -239 459 -276 q 315 -105 315 -203 l 315 -28 l 315 132 q 296 244 315 194 q 240 303 277 294 q 176 314 204 312 q 116 317 148 317 l 116 389 q 270 429 225 389 q 315 576 315 469 l 315 737 q 348 918 315 870 q 450 977 381 966 q 567 983 503 983 l 567 912 l 491 909 "},X:{x_min:0,x_max:739,ha:739,o:"m 200 285 l 318 456 q 18 932 159 718 q 63 929 33 932 q 109 926 94 926 q 168 929 147 926 q 198 932 188 932 q 296 743 244 841 q 391 568 348 644 l 489 726 q 597 932 548 825 q 627 927 614 929 q 661 926 641 926 q 693 929 671 926 q 728 932 715 932 q 616 781 673 862 q 524 652 558 700 l 427 512 q 523 347 480 419 q 614 197 566 275 q 739 0 662 119 q 686 3 719 0 q 647 6 652 6 q 595 4 618 6 q 558 0 572 1 q 459 197 512 97 q 353 398 405 298 l 265 249 q 174 96 193 130 q 127 0 155 62 q 89 3 113 0 q 62 6 65 6 q 26 4 43 6 q 0 0 9 1 l 200 285 "},\u00F4:{x_min:40,x_max:712,ha:753,o:"m 371 -15 q 131 79 223 -15 q 40 322 40 173 q 133 572 40 473 q 380 672 227 672 q 621 575 530 672 q 712 327 712 479 q 619 80 712 175 q 371 -15 527 -15 m 332 978 l 421 978 l 572 743 l 525 743 l 376 875 l 229 743 l 180 743 l 332 978 m 377 622 q 227 532 274 622 q 180 327 180 442 q 227 125 180 216 q 375 35 274 35 q 524 124 478 35 q 570 327 570 214 q 524 531 570 441 q 377 622 479 622 "},"#":{x_min:78,x_max:972.4375,ha:1050,o:"m 497 647 l 675 647 l 791 969 l 877 968 l 761 647 l 972 647 l 948 576 l 736 576 l 671 390 l 896 390 l 873 319 l 644 319 l 531 0 l 446 0 l 559 319 l 382 319 l 266 0 l 182 0 l 294 319 l 78 319 l 102 390 l 320 390 l 386 576 l 151 576 l 176 647 l 410 647 l 526 969 l 610 969 l 497 647 m 472 576 l 407 390 l 587 390 l 650 576 l 472 576 "},\u03B9:{x_min:96,x_max:233.5,ha:342,o:"m 104 333 l 104 521 q 103 567 104 545 q 96 655 102 589 q 141 648 130 648 q 165 647 151 647 q 233 654 196 647 q 224 555 226 599 q 223 437 223 511 l 223 406 q 228 194 223 337 q 233 0 233 51 q 201 3 216 1 q 165 5 185 5 q 127 3 148 5 q 96 0 107 1 q 100 165 96 51 q 104 333 104 279 "},\u0386:{x_min:12,x_max:910.609375,ha:896,o:"m 328 639 l 458 950 q 489 944 464 947 q 522 950 507 944 q 655 613 602 745 q 770 331 709 480 q 910 0 832 181 q 859 3 891 0 q 823 6 827 6 q 772 4 795 6 q 735 0 749 1 q 672 195 692 135 q 613 353 652 255 l 449 358 l 285 353 l 233 205 q 173 0 194 94 l 116 5 q 76 2 91 5 q 55 0 62 0 q 146 211 101 105 q 229 404 192 317 q 328 639 266 490 m 195 943 q 228 974 213 964 q 265 985 244 985 q 302 969 287 985 q 318 932 318 954 q 303 896 318 911 q 261 866 288 882 l 61 743 l 12 743 l 195 943 m 450 419 l 585 425 l 451 761 l 318 425 l 450 419 "},")":{x_min:65.671875,x_max:332,ha:449,o:"m 332 376 q 271 81 332 217 q 96 -183 211 -54 q 65 -151 83 -164 q 193 104 155 -16 q 232 386 232 226 q 191 661 232 533 q 65 918 150 789 q 96 950 87 933 q 273 681 215 816 q 332 376 332 545 "},\u03B5:{x_min:53,x_max:567,ha:628,o:"m 506 516 q 433 591 467 566 q 353 616 400 616 q 261 580 298 616 q 225 492 225 545 q 268 406 225 437 q 372 375 311 375 l 418 375 l 417 349 l 417 310 l 343 317 q 236 282 280 317 q 193 183 193 247 q 238 77 193 117 q 352 38 284 38 q 460 66 410 38 q 543 144 510 94 q 553 99 547 121 q 567 54 558 76 q 452 2 515 19 q 321 -15 388 -15 q 134 31 216 -15 q 53 175 53 78 q 95 286 53 246 q 214 355 137 326 q 127 408 162 370 q 93 497 93 445 q 165 625 93 579 q 323 672 237 672 q 430 654 378 672 q 541 604 481 637 q 522 564 529 584 q 506 516 514 545 "},\u0394:{x_min:0,x_max:899,ha:899,o:"m 899 0 q 701 5 833 0 q 501 11 569 11 q 251 5 418 11 q 0 0 84 0 q 225 473 126 251 q 407 932 323 696 q 432 929 415 932 q 457 926 448 926 q 482 927 471 926 q 505 932 493 929 q 691 449 601 664 q 899 0 782 234 m 281 429 q 158 90 212 259 q 290 84 201 90 q 423 79 379 79 l 456 79 q 587 81 550 79 q 692 90 625 83 l 651 188 l 576 383 l 422 778 l 281 429 "},\u00E2:{x_min:43,x_max:655.5,ha:649,o:"m 234 -15 q 98 33 153 -15 q 43 162 43 82 q 106 303 43 273 q 303 364 169 333 q 444 448 437 395 q 403 568 444 521 q 288 616 362 616 q 191 587 233 616 q 124 507 149 559 l 95 520 l 104 591 q 202 651 144 631 q 323 672 261 672 q 500 622 444 672 q 557 455 557 573 l 557 133 q 567 69 557 84 q 618 54 577 54 q 655 58 643 54 l 655 26 q 594 5 626 14 q 537 -6 562 -3 q 438 85 453 -6 q 342 10 388 35 q 234 -15 296 -15 m 279 978 l 368 978 l 522 743 l 471 743 l 323 875 l 176 743 l 126 743 l 279 978 m 176 186 q 204 98 176 133 q 284 64 232 64 q 390 107 342 64 q 438 212 438 151 l 438 345 q 239 293 303 319 q 176 186 176 268 "},"}":{x_min:114,x_max:567,ha:683,o:"m 369 576 q 405 438 369 487 q 527 389 441 389 l 567 389 l 567 317 q 415 278 461 317 q 369 132 369 239 l 369 -28 q 319 -229 369 -182 q 114 -276 270 -276 l 114 -204 q 252 -172 218 -204 q 286 -83 286 -141 l 286 -35 l 286 125 q 314 271 286 212 q 418 354 342 329 q 311 435 337 382 q 286 584 286 488 l 286 745 q 268 860 286 818 q 191 913 251 903 l 114 913 l 114 983 l 186 982 q 287 960 242 982 q 346 900 331 938 q 365 822 362 862 q 369 737 369 783 l 369 576 "},"\u2030":{x_min:28,x_max:1511,ha:1536,o:"m 799 0 q 647 62 708 0 q 586 218 586 124 q 647 372 586 309 q 799 436 709 436 q 949 373 888 436 q 1011 223 1011 311 q 995 130 1011 176 q 918 35 972 70 q 799 0 865 0 m 1298 0 q 1146 62 1206 0 q 1087 218 1087 124 q 1148 372 1087 308 q 1299 436 1209 436 q 1449 373 1388 436 q 1511 223 1511 311 q 1494 130 1511 169 q 1418 34 1472 69 q 1298 0 1365 0 m 241 448 q 89 510 150 448 q 28 663 28 573 q 89 820 28 755 q 241 885 151 885 q 391 823 329 885 q 453 672 453 761 q 434 580 453 620 q 359 483 412 518 q 241 448 307 448 m 863 1015 l 227 -125 l 158 -125 l 793 1015 l 863 1015 m 897 260 q 872 353 897 310 q 798 397 847 397 q 718 340 737 397 q 700 202 700 283 q 719 86 700 133 q 798 40 738 40 q 866 73 840 40 q 892 149 892 106 q 895 206 894 169 q 897 260 897 242 m 339 684 q 319 797 339 750 q 244 845 300 845 q 161 784 182 845 q 141 645 141 723 q 165 540 141 590 q 237 490 189 490 q 303 524 278 490 q 334 598 329 558 q 339 684 339 638 m 1397 260 q 1373 356 1397 315 q 1297 397 1349 397 q 1218 340 1237 397 q 1200 202 1200 283 q 1219 87 1200 134 q 1297 40 1238 40 q 1366 73 1340 40 q 1392 149 1392 106 q 1395 206 1394 169 q 1397 260 1397 242 "},\u00C4:{x_min:-16,x_max:839.5625,ha:826,o:"m 258 638 l 389 951 q 420 945 395 948 q 453 951 438 945 q 570 651 500 826 q 688 360 640 477 q 839 0 736 242 q 788 3 820 0 q 752 6 756 6 q 702 3 728 6 q 665 0 675 0 q 599 204 615 158 q 542 357 584 251 l 378 357 l 214 357 l 161 207 q 130 109 147 170 q 102 0 113 47 l 45 5 q 20 4 29 5 q -16 0 10 4 q 72 203 29 105 q 169 427 115 301 q 258 638 222 552 m 293 1208 q 345 1186 325 1208 q 366 1133 366 1164 q 345 1080 366 1102 q 293 1058 324 1058 q 239 1080 261 1058 q 217 1133 217 1102 q 239 1185 217 1163 q 293 1208 261 1208 m 535 1208 q 587 1186 565 1208 q 609 1133 609 1164 q 587 1080 609 1103 q 535 1058 565 1058 q 481 1080 503 1058 q 459 1133 459 1102 q 481 1185 459 1163 q 535 1208 503 1208 m 378 421 l 515 425 l 381 762 l 247 425 l 378 421 "},a:{x_min:44,x_max:653.734375,ha:647,o:"m 233 -15 q 99 33 154 -15 q 44 162 44 82 q 105 302 44 273 q 302 363 167 331 q 444 448 437 395 q 401 567 444 519 q 287 615 359 615 q 190 587 231 615 q 124 508 149 560 l 95 519 l 103 591 q 204 651 148 631 q 323 672 260 672 q 499 623 443 672 q 555 457 555 574 l 555 132 q 566 70 555 86 q 616 55 578 55 l 653 55 l 653 26 q 594 4 624 15 q 536 -6 564 -6 q 468 15 492 -6 q 436 83 445 38 q 341 9 387 34 q 233 -15 294 -15 m 175 185 q 204 99 175 135 q 282 63 234 63 q 389 106 343 63 q 436 211 436 150 l 436 344 q 239 294 304 320 q 175 185 175 268 "},"\u2014":{x_min:226.390625,x_max:1138.890625,ha:1367,o:"m 226 375 l 1138 375 l 1138 292 l 226 292 l 226 375 "},"=":{x_min:169.4375,x_max:969.453125,ha:1139,o:"m 969 499 l 169 499 l 169 564 l 969 564 l 969 499 m 969 248 l 169 248 l 169 315 l 969 315 l 969 248 "},N:{x_min:98,x_max:911.890625,ha:1011,o:"m 112 230 q 114 486 112 315 q 117 741 117 656 l 117 950 l 166 950 q 326 766 239 865 q 468 606 413 667 q 610 451 524 544 l 821 227 l 821 604 q 816 765 821 685 q 803 931 812 845 l 855 927 l 911 931 q 901 831 906 884 q 897 741 897 779 q 894 413 897 619 q 892 165 892 207 l 892 -15 l 849 -15 q 730 125 796 50 q 589 281 664 201 l 193 702 l 193 330 q 212 -1 193 169 l 149 2 l 98 -1 q 108 125 105 79 q 112 230 112 170 "},\u03C1:{x_min:65,x_max:711,ha:758,o:"m 191 -99 q 195 -235 191 -145 q 199 -371 199 -325 q 161 -367 169 -367 q 134 -366 153 -366 q 96 -368 116 -366 q 65 -372 76 -370 q 70 -190 65 -311 q 76 -8 76 -69 q 73 166 76 67 q 70 329 71 265 q 148 578 70 484 q 380 672 226 672 q 617 573 524 672 q 711 329 711 474 q 625 84 711 184 q 396 -15 539 -15 q 285 7 334 -15 q 191 78 236 30 l 191 -99 m 377 619 q 231 533 271 619 q 191 327 191 447 q 241 103 191 169 q 376 38 292 38 q 525 125 479 38 q 571 326 571 212 q 525 529 571 440 q 377 619 480 619 "},"2":{x_min:22,x_max:622,ha:749,o:"m 449 648 q 410 789 449 727 q 298 851 371 851 q 173 802 219 851 q 128 676 128 753 l 118 673 q 84 740 100 712 q 47 799 69 768 q 313 911 158 911 q 507 844 426 911 q 589 667 589 777 q 527 479 589 555 q 315 258 466 404 l 169 118 l 442 118 q 531 123 485 118 q 622 136 576 129 q 617 102 619 117 q 616 68 616 87 q 617 37 616 54 q 622 0 619 20 q 438 4 562 0 q 252 8 315 8 q 142 7 195 8 q 22 0 88 6 l 22 40 q 234 238 155 158 q 380 430 312 319 q 449 648 449 541 "},\u00FC:{x_min:90,x_max:664,ha:754,o:"m 653 498 q 653 329 653 443 q 653 158 653 215 q 664 0 653 82 q 631 3 647 1 q 598 5 616 5 q 563 3 583 5 q 533 0 544 1 l 538 118 q 440 18 494 52 q 312 -15 385 -15 q 148 50 201 -15 q 96 229 96 115 l 96 354 l 96 516 l 90 655 q 120 650 103 651 q 158 648 136 648 q 192 650 175 648 q 227 656 210 651 q 220 446 227 592 q 213 247 213 300 q 247 115 213 163 q 362 68 281 68 q 477 113 428 68 q 531 217 525 159 q 538 340 538 274 q 533 520 538 394 q 528 655 528 647 q 558 650 542 651 q 596 648 574 648 q 629 650 612 648 q 663 656 646 651 q 653 498 653 574 m 253 929 q 307 906 285 929 q 330 854 330 884 q 309 800 330 822 q 257 778 288 778 q 202 800 225 778 q 180 854 180 823 q 200 906 180 884 q 253 929 221 929 m 498 929 q 549 906 527 929 q 572 854 572 884 q 551 799 572 820 q 499 778 531 778 q 444 800 466 778 q 422 854 422 822 q 444 906 422 884 q 498 929 466 929 "},Z:{x_min:6.9375,x_max:801.390625,ha:828,o:"m 6 36 q 222 324 112 176 q 425 605 333 473 l 597 857 l 433 857 q 59 836 247 857 l 65 883 l 59 932 q 262 927 134 932 q 427 922 390 922 q 622 927 491 922 q 801 932 754 932 l 801 904 q 594 629 709 785 q 399 361 479 473 q 201 77 319 249 l 427 77 q 581 82 520 77 q 801 103 643 87 l 797 68 l 795 54 l 797 34 l 801 0 q 504 4 683 0 q 325 8 326 8 q 166 4 272 8 q 6 0 61 0 l 6 36 "},u:{x_min:90,x_max:662.21875,ha:754,o:"m 653 497 l 653 156 q 654 83 653 122 q 661 -1 656 44 q 623 3 632 2 q 596 4 615 4 q 572 3 581 4 q 533 -1 563 2 l 536 117 q 439 18 491 51 q 313 -15 386 -15 q 147 48 199 -15 q 96 227 96 112 l 96 352 l 96 516 l 90 654 q 158 647 125 647 q 189 648 178 647 q 226 654 200 650 q 220 450 226 586 q 215 246 215 314 q 248 114 215 163 q 361 66 281 66 q 473 112 426 66 q 527 225 520 158 q 536 340 536 282 q 531 497 536 393 q 527 654 527 601 q 572 647 563 647 q 595 647 581 647 q 626 648 616 647 q 662 654 637 650 l 653 497 "},k:{x_min:97,x_max:677.5625,ha:683,o:"m 104 656 q 100 873 104 741 q 97 1025 97 1005 q 164 1018 134 1018 q 231 1025 196 1018 q 227 825 231 962 q 223 622 223 687 l 223 377 l 245 377 q 507 654 391 506 q 563 647 538 647 q 616 647 589 647 q 648 652 638 651 l 349 398 l 548 165 q 608 93 577 127 q 677 19 638 59 l 677 0 q 628 3 659 0 q 591 6 597 6 q 544 3 567 6 q 510 0 520 0 q 438 101 473 54 q 360 197 402 148 l 269 308 l 252 324 l 223 326 q 227 164 223 272 q 231 0 231 55 q 200 4 215 2 q 164 5 185 5 q 127 3 146 5 q 97 0 108 1 q 100 386 97 151 q 104 656 104 620 "},\u0397:{x_min:109,x_max:928.453125,ha:1039,o:"m 257 317 q 262 142 257 253 q 267 0 267 30 q 226 3 253 0 q 188 8 200 8 q 147 3 174 8 q 109 0 121 0 q 116 243 109 72 q 124 465 124 415 q 116 710 124 540 q 109 932 109 880 q 152 929 121 932 q 188 926 183 926 q 231 929 200 926 q 267 932 262 932 q 262 719 267 854 q 257 547 257 584 q 406 544 301 547 q 517 541 511 541 q 666 544 562 541 q 777 547 770 547 q 773 786 777 641 q 769 932 769 930 q 813 929 781 932 q 849 926 845 926 q 893 929 861 926 q 928 932 924 932 q 914 795 920 866 q 909 659 909 723 l 909 505 q 918 252 909 420 q 927 0 927 84 q 887 4 913 0 q 848 8 861 8 q 811 5 829 8 q 769 0 793 2 q 773 103 769 41 q 777 176 777 166 l 777 317 l 777 465 q 604 466 692 465 q 430 469 517 467 l 257 465 l 257 317 "},\u0391:{x_min:-15.28125,x_max:838.890625,ha:825,o:"m 257 639 l 387 950 q 402 945 395 947 q 417 944 409 944 q 452 950 437 944 q 576 629 536 733 q 686 359 617 526 q 838 0 755 192 q 789 3 820 0 q 751 6 758 6 q 700 4 723 6 q 663 0 677 1 q 600 199 622 137 q 543 353 579 260 l 377 358 l 215 353 l 162 205 q 130 110 145 160 q 101 0 115 59 l 44 5 q 6 2 20 5 q -15 0 -8 0 q 76 211 30 105 q 158 404 121 318 q 257 639 195 490 m 378 419 l 513 425 l 379 761 l 246 425 l 378 419 "},\u00DF:{x_min:94,x_max:726,ha:765,o:"m 107 431 l 107 611 l 107 761 q 200 948 118 872 q 395 1025 283 1025 q 543 979 478 1025 q 608 852 608 933 q 530 709 608 783 q 453 586 453 636 q 589 457 453 547 q 726 259 726 368 q 648 64 726 143 q 453 -15 570 -15 q 379 -6 418 -15 q 309 15 339 1 l 334 128 l 348 127 q 405 70 368 91 q 485 49 442 49 q 583 92 544 49 q 622 193 622 135 q 484 365 622 280 q 347 525 347 450 q 433 667 347 561 q 520 838 520 773 q 483 939 520 899 q 386 979 446 979 q 269 924 313 979 q 226 795 226 870 l 226 629 l 226 344 q 229 141 226 265 q 233 1 233 18 q 196 4 219 1 q 166 8 173 8 q 123 5 142 8 q 94 1 105 2 q 100 250 94 91 q 107 431 107 409 "},\u00E9:{x_min:40,x_max:646.9375,ha:681,o:"m 406 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 313 335 315 335 l 179 331 q 235 127 179 212 q 406 42 291 42 m 406 945 q 440 976 424 966 q 477 986 455 986 q 528 934 528 986 q 513 895 528 912 q 471 866 498 879 l 272 743 l 222 743 l 406 945 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},s:{x_min:68,x_max:531,ha:593,o:"m 117 161 q 172 69 130 102 q 276 36 214 36 q 378 67 333 36 q 424 152 424 98 q 334 260 424 224 q 168 320 251 290 q 79 460 79 366 q 147 612 79 552 q 310 672 216 672 q 400 660 355 672 q 500 627 446 649 l 461 508 l 448 508 q 401 587 433 561 q 314 614 369 614 q 223 584 262 614 q 185 505 185 555 q 358 375 185 427 q 531 197 531 322 q 450 39 531 93 q 259 -15 369 -15 q 68 23 162 -15 l 103 161 l 117 161 "},B:{x_min:109,x_max:751,ha:801,o:"m 127 559 q 109 931 127 759 l 203 929 q 338 932 244 929 q 438 935 432 935 q 629 883 549 935 q 709 726 709 832 q 638 579 709 633 q 464 504 567 524 q 673 438 595 490 q 751 268 751 387 q 639 66 751 133 q 382 0 528 0 l 232 6 q 162 3 211 6 q 109 0 113 0 q 118 287 109 86 q 127 559 127 488 m 256 257 l 256 149 l 261 61 l 337 57 q 526 108 450 57 q 602 266 602 159 q 523 428 602 386 q 312 471 444 471 l 256 471 l 256 257 m 569 706 q 507 834 569 788 q 361 879 446 879 l 261 875 q 252 709 252 798 l 252 522 q 476 558 384 522 q 569 706 569 595 "},"\u2026":{x_min:119,x_max:1005,ha:1160,o:"m 191 130 q 244 108 223 130 q 266 55 266 87 q 244 5 266 25 q 191 -15 223 -15 q 139 4 160 -15 q 119 55 119 23 q 139 108 119 87 q 191 130 159 130 m 560 130 q 612 108 591 130 q 634 55 634 87 q 612 5 634 25 q 560 -15 591 -15 q 507 4 528 -15 q 487 55 487 23 q 507 109 487 88 q 560 130 528 130 m 930 130 q 983 108 962 130 q 1005 55 1005 87 q 983 5 1005 25 q 930 -15 962 -15 q 878 4 899 -15 q 858 55 858 23 q 878 108 858 87 q 930 130 898 130 "},"?":{x_min:128,x_max:520,ha:601,o:"m 307 156 q 367 130 342 156 q 392 68 392 105 q 367 7 392 30 q 307 -15 343 -15 q 244 8 269 -15 q 220 68 220 32 q 244 130 220 105 q 307 156 269 156 m 329 250 q 214 290 261 250 q 168 399 168 331 q 287 595 168 479 q 406 776 406 712 q 371 858 406 823 q 292 894 337 894 q 207 867 243 894 q 162 794 171 840 l 150 794 q 142 835 146 822 q 128 894 139 849 q 210 936 165 922 q 305 950 255 950 q 457 893 394 950 q 520 748 520 837 q 398 550 520 657 q 276 370 276 443 q 293 316 276 337 q 343 296 310 296 q 397 302 372 296 l 383 256 q 357 251 365 252 q 329 250 348 250 "},H:{x_min:108,x_max:927.453125,ha:1036,o:"m 258 318 q 263 143 258 255 q 268 0 268 30 q 229 3 255 0 q 188 8 202 8 q 148 3 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 204 925 q 268 932 259 932 q 263 719 268 854 q 258 547 258 584 l 517 543 l 777 547 q 773 786 777 641 q 769 932 769 930 q 814 928 785 932 q 848 925 842 925 q 894 928 864 925 q 927 932 923 932 q 914 798 919 868 q 909 659 909 729 l 909 448 l 909 283 q 916 135 909 238 q 924 0 924 31 q 885 4 911 0 q 846 8 860 8 q 807 4 832 8 q 769 0 781 0 q 773 101 769 37 q 777 177 777 164 l 777 318 l 777 468 q 604 468 720 468 q 431 468 489 468 l 258 468 l 258 318 "},\u03BD:{x_min:0,x_max:632,ha:654,o:"m 319 8 q 296 5 309 8 q 272 0 283 2 q 200 206 234 120 q 0 654 165 291 q 84 647 45 647 q 113 647 98 647 q 168 654 127 648 q 252 402 204 529 l 360 131 q 469 358 440 267 q 499 520 499 448 q 492 579 499 543 q 477 641 486 615 q 552 649 527 645 q 613 661 576 652 q 628 611 625 623 q 632 576 632 598 q 621 501 632 536 q 560 373 611 466 q 461 190 509 280 q 372 0 412 99 q 345 3 363 0 q 319 8 327 8 "},\u00EE:{x_min:-25,x_max:365.328125,ha:340,o:"m 104 144 l 104 522 l 97 655 q 138 650 113 651 q 167 649 162 649 q 233 655 206 649 q 225 506 225 581 q 229 254 225 423 q 233 0 233 84 q 201 3 216 1 q 164 5 186 5 q 127 3 146 5 q 97 0 108 1 l 104 144 m 125 978 l 214 978 l 365 743 l 319 743 l 170 875 l 24 743 l -25 743 l 125 978 "},c:{x_min:36,x_max:613.78125,ha:644,o:"m 606 119 l 594 41 q 493 -3 548 7 q 365 -15 438 -15 q 131 79 227 -15 q 36 312 36 173 q 134 576 36 480 q 399 672 233 672 q 513 658 459 672 q 613 616 566 645 q 586 492 597 563 l 571 492 q 510 586 550 553 q 406 619 470 619 q 235 532 294 619 q 176 327 176 445 q 237 125 176 209 q 415 42 299 42 q 594 122 520 42 l 606 119 "},"\xB6":{x_min:18,x_max:531,ha:590,o:"m 298 968 l 531 968 l 531 910 l 473 910 l 473 4 l 415 4 l 415 910 l 305 910 l 305 4 l 247 4 l 247 558 q 99 602 163 558 q 27 690 36 645 q 18 744 18 734 q 90 896 18 824 q 298 968 163 968 "},\u03B2:{x_min:96,x_max:737.671875,ha:779,o:"m 160 -365 q 129 -367 151 -365 q 96 -369 107 -369 q 100 -253 96 -325 q 104 -169 104 -182 l 104 101 l 104 565 q 168 898 104 771 q 419 1025 232 1025 q 605 960 525 1025 q 686 787 686 895 q 641 641 686 705 q 522 548 597 577 q 682 454 626 515 q 737 290 737 394 q 648 73 737 162 q 431 -15 559 -15 q 324 3 372 -15 q 226 61 276 22 q 224 -44 226 19 q 223 -110 223 -107 l 230 -369 q 193 -367 220 -369 q 160 -365 166 -365 m 356 564 q 507 618 458 564 q 557 779 557 673 q 520 917 557 859 q 407 975 483 975 q 279 906 323 975 q 234 752 234 838 q 232 613 234 701 q 230 506 230 524 l 226 355 l 230 230 q 275 94 230 147 q 406 41 321 41 q 552 116 504 41 q 600 297 600 192 q 550 443 600 386 q 412 499 500 499 q 361 497 384 499 q 327 493 337 494 l 329 516 l 329 565 l 356 564 "},\u039C:{x_min:55,x_max:1165,ha:1238,o:"m 190 950 l 243 950 q 331 772 291 851 q 412 612 370 693 q 504 436 454 532 l 626 214 q 742 435 671 298 q 882 711 813 572 q 1001 950 952 850 l 1052 950 q 1082 649 1067 791 q 1118 341 1098 508 q 1165 0 1139 174 q 1121 8 1139 5 q 1088 11 1103 11 q 1049 6 1071 11 q 1008 0 1027 2 q 998 226 1008 109 q 974 461 989 343 q 944 695 959 579 l 748 312 q 610 0 665 152 l 594 1 l 576 0 q 227 685 402 364 l 188 307 q 172 128 175 179 q 168 0 168 77 q 138 4 157 1 q 110 6 118 6 q 81 4 93 6 q 55 0 68 2 q 121 333 89 168 q 171 652 152 498 q 190 950 190 805 "},\u038C:{x_min:-1,x_max:1305,ha:1356,o:"m 288 465 q 429 820 288 690 q 796 950 570 950 q 1129 853 991 950 q 1284 654 1268 757 q 1302 525 1299 551 q 1305 462 1305 500 q 1302 402 1305 426 q 1284 277 1299 379 q 1131 80 1268 175 q 797 -15 993 -15 q 684 -10 733 -15 q 541 29 635 -5 q 367 186 447 64 q 288 465 288 308 m 182 943 q 215 974 200 964 q 251 985 230 985 q 289 969 274 985 q 304 932 304 954 q 290 896 304 911 q 247 866 275 882 l 48 743 l -1 743 l 182 943 m 439 468 q 527 162 439 282 q 796 42 616 42 q 1063 162 975 42 q 1152 468 1152 283 q 1062 770 1152 651 q 796 889 972 889 q 585 826 666 889 q 462 639 504 764 q 439 468 439 552 "},\u0389:{x_min:-1.390625,x_max:1233.046875,ha:1341,o:"m 564 316 q 569 142 564 254 q 574 0 574 30 q 535 4 561 0 q 494 8 508 8 q 454 4 480 8 q 414 0 427 0 q 423 239 414 70 q 432 465 432 408 q 428 711 432 620 q 414 931 425 802 q 459 928 430 931 q 494 924 489 924 q 537 928 510 924 q 574 931 565 931 q 569 719 574 854 q 564 547 564 584 l 823 543 l 1083 547 q 1078 786 1083 641 q 1074 931 1074 930 q 1119 928 1091 931 q 1153 924 1148 924 q 1199 928 1170 924 q 1233 931 1228 931 q 1221 798 1226 868 q 1217 659 1217 729 l 1215 448 l 1217 283 q 1225 135 1217 238 q 1233 0 1233 31 q 1194 4 1220 0 q 1154 8 1167 8 q 1113 4 1140 8 q 1075 0 1087 0 q 1078 100 1075 37 q 1082 176 1082 163 l 1083 316 l 1083 465 q 910 466 1026 465 q 737 468 795 468 l 564 465 l 564 316 m 181 943 q 215 974 200 964 q 251 985 230 985 q 288 969 273 985 q 304 932 304 954 q 289 896 304 911 q 247 866 275 882 l 47 743 l -1 743 l 181 943 "},"\u2022":{x_min:204.171875,x_max:795.828125,ha:1003,o:"m 501 789 q 709 702 622 789 q 795 493 795 615 q 709 286 795 372 q 501 201 623 201 q 290 286 377 201 q 204 493 204 371 q 226 605 204 550 q 312 725 248 661 q 501 789 376 789 "},"\xA5":{x_min:32,x_max:699,ha:750,o:"m 313 278 q 176 273 268 278 q 50 268 83 268 l 50 335 q 147 332 82 335 q 246 329 213 329 l 313 329 l 313 436 l 176 436 l 50 432 l 50 495 q 182 492 90 495 q 281 490 275 490 l 126 743 l 32 888 l 91 883 l 191 887 q 225 814 208 845 q 287 699 241 783 l 397 512 q 477 653 433 570 q 592 887 521 736 l 643 883 l 699 887 l 625 773 l 554 655 l 454 490 q 593 492 496 490 q 697 495 690 495 l 697 431 l 434 436 l 434 330 l 572 329 q 636 332 595 329 q 697 335 678 335 l 697 268 l 568 278 l 434 278 q 434 143 434 208 q 442 0 435 77 l 365 5 l 299 0 q 310 131 307 54 q 313 278 313 208 "},"(":{x_min:114,x_max:380.5625,ha:449,o:"m 114 388 q 175 684 114 545 q 351 950 237 822 q 380 918 361 933 q 253 660 291 782 q 215 379 215 538 q 256 103 215 231 q 380 -151 297 -25 q 351 -183 361 -167 q 173 84 232 -50 q 114 388 114 219 "},U:{x_min:101,x_max:919.0625,ha:1015,o:"m 181 926 q 228 929 195 926 q 263 932 262 932 q 251 804 255 853 q 248 697 248 755 l 248 457 q 315 134 248 212 q 515 57 382 57 q 733 129 654 57 q 813 334 813 201 l 813 458 l 813 655 q 810 797 813 733 q 798 931 807 862 q 827 927 813 929 q 859 926 841 926 q 888 929 868 926 q 919 932 907 932 q 905 779 909 853 q 902 600 902 705 l 902 366 q 793 81 902 178 q 492 -15 685 -15 q 211 66 307 -15 q 116 323 116 147 l 116 425 l 116 698 q 109 826 116 759 q 101 931 103 893 q 138 927 120 929 q 181 926 156 926 "},\u03B3:{x_min:-12,x_max:701,ha:681,o:"m 642 647 q 701 654 669 647 q 593 440 633 520 q 502 247 553 359 l 411 48 l 411 -90 q 415 -238 411 -138 q 419 -372 419 -337 l 372 -366 q 282 -372 325 -366 q 287 -195 282 -313 q 292 -33 292 -76 q 260 192 292 47 q 170 460 229 338 q 39 583 111 583 l -12 579 l -10 608 l -12 638 q 43 662 14 653 q 101 672 71 672 q 279 554 234 672 q 398 143 324 437 q 496 393 439 244 q 590 654 553 541 q 615 648 607 650 q 642 647 623 647 "},\u03B1:{x_min:41,x_max:827.109375,ha:846,o:"m 705 352 q 803 -1 763 155 l 739 1 l 673 -1 l 632 172 q 521 36 593 87 q 356 -15 448 -15 q 129 81 217 -15 q 41 316 41 177 q 130 569 41 467 q 368 672 220 672 q 537 622 464 672 q 659 486 610 573 q 711 654 691 569 l 770 650 l 827 654 q 763 505 792 576 q 705 352 734 434 m 377 619 q 226 530 272 619 q 181 326 181 442 q 223 124 181 214 q 367 34 265 34 q 528 137 480 34 q 601 323 577 240 q 527 531 578 444 q 377 619 475 619 "},F:{x_min:108,x_max:613.5625,ha:671,o:"m 258 316 q 263 142 258 254 q 268 0 268 30 q 229 3 255 0 q 188 8 202 8 q 148 3 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 802 l 358 928 l 613 931 l 610 886 l 613 836 q 505 855 549 851 q 388 860 460 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 "},"\xAD":{x_min:0,x_max:683.328125,ha:683,o:"m 0 374 l 683 374 l 683 289 l 0 289 l 0 374 "},":":{x_min:134,x_max:309,ha:446,o:"m 222 636 q 284 611 259 636 q 309 548 309 586 q 284 486 309 512 q 222 461 260 461 q 160 486 186 461 q 134 548 134 511 q 159 610 134 584 q 222 636 185 636 m 221 156 q 283 131 257 156 q 309 69 309 107 q 284 8 309 32 q 221 -15 259 -15 q 159 9 185 -15 q 134 69 134 33 q 159 131 134 107 q 221 156 185 156 "},\u03A7:{x_min:0,x_max:739,ha:739,o:"m 200 285 l 318 456 q 18 932 159 718 q 63 929 33 932 q 109 926 94 926 q 168 929 147 926 q 198 932 188 932 q 296 743 244 841 q 391 568 348 644 l 489 726 q 597 932 548 825 q 627 927 614 929 q 661 926 641 926 q 693 929 671 926 q 728 932 715 932 q 616 781 673 862 q 524 652 558 700 l 427 512 q 523 347 480 419 q 614 197 566 275 q 739 0 662 119 q 686 3 719 0 q 647 6 652 6 q 595 4 618 6 q 558 0 572 1 q 459 197 512 97 q 353 398 405 298 l 265 249 q 174 96 193 130 q 127 0 155 62 q 89 3 113 0 q 62 6 65 6 q 26 4 43 6 q 0 0 9 1 l 200 285 "},"*":{x_min:94,x_max:580,ha:675,o:"m 336 940 q 367 944 349 940 q 389 948 385 948 q 368 850 375 902 q 362 747 362 799 q 522 873 442 800 q 548 812 539 829 q 580 778 556 796 q 386 702 485 750 q 476 661 427 680 q 575 629 524 643 q 521 535 539 587 q 441 604 478 573 q 362 661 403 634 q 369 564 362 615 q 391 459 377 513 q 360 463 379 459 q 336 467 340 467 q 306 463 325 467 q 282 459 288 459 q 304 568 296 522 q 313 661 313 615 q 152 535 221 602 q 128 589 138 569 q 97 630 117 608 q 185 661 140 643 q 287 704 231 679 q 189 746 234 728 q 94 777 145 763 q 125 818 113 795 q 150 873 137 841 q 227 805 184 839 q 313 747 269 771 q 309 810 313 784 q 282 950 305 836 q 310 942 297 945 q 336 940 324 940 "},"\xB0":{x_min:176,x_max:508,ha:683,o:"m 176 889 q 228 1010 176 961 q 355 1060 280 1060 q 460 1011 413 1060 q 508 904 508 962 q 455 785 508 839 q 337 731 402 731 q 222 776 269 731 q 176 889 176 821 m 241 880 q 266 805 241 836 q 336 775 292 775 q 413 811 386 775 q 441 899 441 847 q 417 985 441 952 q 343 1018 393 1018 q 281 995 307 1018 q 247 940 254 973 q 241 880 241 906 "},V:{x_min:0,x_max:852.78125,ha:853,o:"m 190 477 l 74 759 l 0 932 l 83 926 q 134 929 98 926 q 173 931 170 931 q 206 829 187 884 q 248 704 224 773 l 308 548 l 454 153 l 586 502 q 729 931 666 713 l 790 927 l 852 931 q 643 467 748 720 q 470 0 538 215 q 445 4 457 1 q 418 6 432 6 q 384 3 399 6 q 366 0 368 0 q 279 256 331 123 q 190 477 226 389 "},\u039E:{x_min:58.328125,x_max:818.0625,ha:878,o:"m 437 821 q 258 817 377 821 q 77 813 138 813 q 84 851 83 838 q 84 872 84 864 q 77 932 84 900 q 256 928 137 932 q 437 924 376 924 q 618 928 497 924 q 797 932 738 932 l 791 872 q 794 842 791 861 q 797 813 797 822 q 619 817 738 813 q 437 821 500 821 m 470 430 q 335 425 440 430 q 183 421 230 421 q 187 456 186 433 q 188 481 188 480 q 183 543 188 515 q 304 538 215 543 q 437 533 394 533 q 572 538 481 533 q 694 543 662 543 l 687 482 l 694 421 q 572 425 650 421 q 470 430 494 430 m 437 8 q 250 4 376 8 q 58 0 123 0 l 63 63 l 58 129 q 268 124 134 129 q 437 119 401 119 q 636 124 502 119 q 818 129 769 129 l 813 63 l 818 0 q 627 4 754 0 q 437 8 501 8 "},"\xA0":{x_min:0,x_max:0,ha:375},\u03AB:{x_min:-26,x_max:746,ha:708,o:"m 299 177 l 299 387 q 190 577 235 501 q 87 747 146 652 q -26 931 29 841 q 23 929 -13 931 q 65 926 61 926 q 110 929 78 926 q 146 931 143 931 q 208 800 175 866 q 278 676 241 734 l 391 475 q 627 931 519 693 l 683 927 q 721 929 701 927 q 746 931 741 931 q 652 786 702 866 q 557 627 602 705 l 432 415 l 432 241 q 435 97 432 184 q 439 0 439 10 q 395 4 414 2 q 361 6 376 6 q 320 4 336 6 q 286 0 304 2 q 294 88 290 36 q 299 177 299 141 m 233 1208 q 286 1187 265 1208 q 307 1133 307 1166 q 285 1080 307 1103 q 233 1058 263 1058 q 179 1080 202 1058 q 157 1133 157 1103 q 179 1186 157 1164 q 233 1208 202 1208 m 475 1208 q 528 1186 506 1208 q 550 1133 550 1164 q 528 1080 550 1103 q 475 1058 506 1058 q 422 1080 444 1058 q 400 1133 400 1102 q 421 1186 400 1164 q 475 1208 443 1208 "},"0":{x_min:48,x_max:699,ha:749,o:"m 372 909 q 621 773 544 909 q 699 451 699 637 q 627 116 699 252 q 372 -19 556 -19 q 120 114 193 -19 q 48 444 48 247 q 120 774 48 639 q 372 909 193 909 m 187 365 q 226 137 187 238 q 373 37 266 37 q 457 62 421 37 q 519 142 494 88 q 552 271 545 196 q 559 455 559 346 q 526 736 559 622 q 371 851 493 851 q 245 783 280 851 q 198 647 210 716 q 187 444 187 577 l 187 365 "},"\u201D":{x_min:104.171875,x_max:570.828125,ha:625,o:"m 184 858 q 211 924 193 898 q 265 951 230 951 q 320 903 316 951 q 310 856 320 881 q 283 812 300 831 l 136 568 l 104 576 l 184 858 m 433 858 q 468 928 452 905 q 516 951 483 951 q 555 938 540 951 q 570 903 570 926 q 561 859 570 881 q 536 812 552 837 l 387 568 l 355 576 l 433 858 "},"@":{x_min:78,x_max:1289,ha:1367,o:"m 906 640 l 970 640 l 876 266 l 864 203 q 886 157 864 172 q 940 142 908 142 q 1136 262 1062 142 q 1211 513 1211 383 q 1067 801 1211 693 q 735 909 923 909 q 324 753 495 909 q 154 362 154 598 q 301 1 154 135 q 679 -132 448 -132 q 904 -99 791 -132 q 1105 -6 1016 -67 l 1129 -43 q 923 -150 1033 -113 q 694 -188 812 -188 q 258 -43 439 -188 q 78 350 78 100 q 273 791 78 614 q 737 969 469 969 q 1122 843 955 969 q 1289 507 1289 717 q 1187 214 1289 346 q 930 82 1086 82 q 835 103 879 82 q 792 170 792 124 l 792 203 q 709 116 762 150 q 595 82 655 82 q 439 139 493 82 q 386 302 386 197 q 471 553 386 441 q 692 665 556 665 q 797 639 754 665 q 864 556 840 613 l 906 640 m 849 477 q 796 572 835 535 q 701 609 758 609 q 529 511 592 609 q 467 297 467 413 q 503 184 467 230 q 605 139 540 139 q 733 188 679 139 q 807 313 787 238 l 849 477 "},\u038A:{x_min:-1.390625,x_max:580.0625,ha:690,o:"m 433 465 q 429 711 433 620 q 414 931 426 802 q 461 927 435 929 q 498 925 487 925 q 546 928 517 925 q 580 931 575 931 q 572 788 580 887 q 564 659 564 690 l 562 448 l 564 283 q 572 135 564 238 q 580 0 580 31 q 539 4 567 0 q 498 8 512 8 q 457 5 480 8 q 414 0 435 2 q 423 239 414 70 q 433 465 433 408 m 181 943 q 215 974 200 964 q 251 985 230 985 q 288 969 273 985 q 304 932 304 954 q 289 896 304 911 q 247 866 275 882 l 47 743 l -1 743 l 181 943 "},\u00F6:{x_min:40,x_max:712,ha:753,o:"m 371 -15 q 131 79 223 -15 q 40 322 40 173 q 133 572 40 473 q 380 672 227 672 q 621 575 530 672 q 712 327 712 479 q 619 80 712 175 q 371 -15 527 -15 m 253 929 q 307 906 285 929 q 330 854 330 884 q 309 800 330 822 q 257 778 288 778 q 202 800 225 778 q 180 854 180 823 q 200 906 180 884 q 253 929 221 929 m 498 929 q 549 906 527 929 q 572 854 572 884 q 551 799 572 820 q 499 778 531 778 q 444 800 466 778 q 422 854 422 822 q 444 906 422 884 q 498 929 466 929 m 377 622 q 227 532 274 622 q 180 327 180 442 q 227 125 180 216 q 375 35 274 35 q 524 124 478 35 q 570 327 570 214 q 524 531 570 441 q 377 622 479 622 "},i:{x_min:91.765625,x_max:244,ha:342,o:"m 100 144 l 100 520 l 93 654 q 161 648 130 648 q 194 649 182 648 q 229 654 207 650 q 221 579 224 616 q 219 505 219 543 q 224 240 219 417 q 229 0 229 63 q 197 3 212 1 q 161 5 181 5 q 116 2 131 5 q 91 0 100 0 l 100 144 m 168 963 q 223 940 202 963 q 244 881 244 917 q 222 831 244 849 q 168 813 200 813 q 115 833 137 813 q 93 885 93 853 q 113 941 93 919 q 168 963 134 963 "},\u0392:{x_min:109,x_max:751,ha:801,o:"m 127 559 q 109 931 127 759 l 203 929 q 338 932 244 929 q 438 935 432 935 q 629 883 549 935 q 709 726 709 832 q 638 579 709 633 q 464 504 567 524 q 673 438 595 490 q 751 268 751 387 q 639 66 751 133 q 382 0 528 0 l 232 6 q 162 3 211 6 q 109 0 113 0 q 118 287 109 86 q 127 559 127 488 m 256 257 l 256 149 l 261 61 l 337 57 q 526 108 450 57 q 602 266 602 159 q 523 428 602 386 q 312 471 444 471 l 256 471 l 256 257 m 569 706 q 507 834 569 788 q 361 879 446 879 l 261 875 q 252 709 252 798 l 252 522 q 476 558 384 522 q 569 706 569 595 "},"\u2264":{x_min:176,x_max:962.703125,ha:1139,o:"m 288 491 l 962 266 l 962 196 l 176 462 l 176 521 l 962 788 l 962 718 l 288 491 m 962 26 l 176 26 l 176 93 l 962 93 l 962 26 "},\u03C5:{x_min:79,x_max:703,ha:774,o:"m 703 397 q 596 110 703 236 q 332 -15 489 -15 q 145 54 211 -15 q 79 244 79 123 l 83 430 q 81 542 83 486 q 79 654 80 598 l 146 650 l 217 654 q 209 503 217 608 q 202 366 202 398 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 133 476 43 q 571 341 571 223 q 548 493 571 418 q 488 645 526 568 q 550 648 529 645 q 627 659 571 650 q 703 397 703 538 "},"]":{x_min:83,x_max:332,ha:449,o:"m 209 -154 l 83 -158 l 85 -129 l 85 -98 q 183 -104 128 -104 l 229 -104 l 232 386 l 232 880 l 185 880 q 134 877 162 880 q 83 872 107 874 l 85 903 l 85 932 l 205 929 l 332 929 q 326 852 332 909 q 321 766 321 794 l 321 455 l 321 2 l 332 -158 l 209 -154 "},m:{x_min:91,x_max:1075,ha:1167,o:"m 101 155 l 101 494 q 98 568 101 529 q 91 654 96 606 q 155 647 123 647 l 221 654 l 216 537 q 317 638 261 604 q 450 672 373 672 q 629 547 581 672 q 733 639 677 606 q 860 672 789 672 q 1018 606 968 672 q 1069 429 1069 540 l 1069 298 l 1069 136 l 1075 0 q 1038 3 1063 0 q 1006 6 1013 6 q 968 3 992 6 q 938 0 943 0 q 944 203 938 68 q 950 406 950 338 q 918 536 950 486 q 810 587 887 587 q 699 540 745 587 q 648 452 653 493 q 642 376 643 410 q 641 326 641 342 l 641 314 q 644 132 641 258 q 647 0 647 6 q 607 4 621 2 q 581 5 593 5 q 542 2 570 5 q 514 0 515 0 q 519 168 514 55 q 524 321 524 280 l 524 406 q 490 534 524 482 q 383 587 457 587 q 273 541 314 587 q 223 436 231 496 q 216 314 216 376 q 219 133 216 244 q 222 0 222 22 q 183 3 207 0 q 154 6 159 6 q 117 4 134 6 q 91 0 100 1 l 101 155 "},\u03C7:{x_min:-1,x_max:725.390625,ha:713,o:"m 500 426 q 554 536 528 476 q 607 654 580 595 l 675 650 l 725 652 q 623 507 672 586 q 519 330 573 427 l 444 197 q 575 -85 507 55 q 719 -371 643 -227 q 665 -371 701 -371 q 611 -371 629 -371 l 560 -371 q 444 -115 497 -230 q 358 72 392 -1 l 255 -95 q 178 -237 208 -174 q 125 -371 147 -299 l 62 -371 l 0 -371 q 125 -192 68 -278 q 240 -5 182 -106 l 324 136 l 201 402 q 146 519 174 460 q 43 587 103 587 l -1 584 l -1 638 q 128 672 57 672 q 222 627 181 672 q 292 522 264 583 l 359 374 l 411 260 l 500 426 "},"8":{x_min:59,x_max:689,ha:749,o:"m 110 696 q 187 853 110 797 q 370 909 264 909 q 558 854 480 909 q 636 694 636 800 q 589 575 636 621 q 467 510 543 529 l 467 499 q 630 413 572 475 q 689 247 689 351 q 597 51 689 120 q 374 -18 505 -18 q 149 48 239 -18 q 59 247 59 115 q 118 414 59 347 q 281 499 178 480 l 281 510 q 157 570 205 521 q 110 696 110 619 m 371 531 q 472 577 437 531 q 507 693 507 624 q 470 810 507 764 q 366 856 433 856 q 271 807 305 856 q 238 693 238 758 q 271 578 238 625 q 371 531 305 531 m 373 31 q 505 97 461 31 q 550 255 550 164 q 506 415 550 348 q 373 482 462 482 q 239 416 283 482 q 195 255 195 351 q 240 96 195 162 q 373 31 285 31 "},\u03AF:{x_min:96,x_max:429.34375,ha:342,o:"m 104 333 l 104 520 q 103 566 104 544 q 96 654 102 588 q 141 647 130 648 q 165 647 151 647 q 233 654 196 647 q 224 555 226 599 q 223 437 223 511 l 223 406 q 228 194 223 337 q 233 0 233 51 q 201 3 216 1 q 165 5 185 5 q 127 3 148 5 q 96 0 107 1 q 100 165 96 51 q 104 333 104 279 m 308 943 q 341 974 326 964 q 377 985 357 985 q 415 969 401 985 q 429 932 429 954 q 414 896 429 912 q 373 866 400 880 l 174 743 l 125 743 l 308 943 "},\u0396:{x_min:6.9375,x_max:801.390625,ha:828,o:"m 6 36 q 222 324 112 176 q 425 605 333 473 l 597 857 l 433 857 q 59 836 247 857 l 65 883 l 59 932 q 262 927 134 932 q 427 922 390 922 q 622 927 491 922 q 801 932 754 932 l 801 904 q 594 629 709 785 q 399 361 479 473 q 201 77 319 249 l 427 77 q 581 82 520 77 q 801 103 643 87 l 797 68 l 795 54 l 797 34 l 801 0 q 504 4 683 0 q 325 8 326 8 q 166 4 272 8 q 6 0 61 0 l 6 36 "},R:{x_min:109,x_max:806.234375,ha:785,o:"m 261 0 q 223 3 248 0 q 185 8 198 8 q 148 5 168 8 q 109 0 127 2 q 118 306 109 90 q 127 598 127 523 q 122 761 127 672 q 109 931 117 849 l 203 929 l 409 935 q 618 882 529 935 q 708 719 708 830 q 634 559 708 615 q 442 473 560 503 q 620 240 533 355 q 806 0 708 124 l 732 5 l 610 0 q 449 240 529 127 q 283 455 369 353 l 251 455 l 251 307 q 256 138 251 245 q 261 0 261 31 m 570 699 q 504 835 570 791 q 344 879 439 879 l 261 875 q 253 772 255 834 q 251 701 251 709 l 251 504 q 479 542 388 504 q 570 699 570 581 "},"\xD7":{x_min:203.984375,x_max:938.015625,ha:1139,o:"m 892 775 l 938 729 l 616 406 l 938 86 l 892 38 l 571 361 l 247 38 l 203 86 l 525 407 l 204 729 l 247 775 l 570 453 l 892 775 "},o:{x_min:41,x_max:710,ha:753,o:"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},"5":{x_min:75,x_max:654,ha:749,o:"m 116 201 q 176 77 131 120 q 303 35 221 35 q 454 98 396 35 q 512 255 512 161 q 457 407 512 346 q 313 469 403 469 q 170 417 227 469 l 150 428 l 158 526 q 158 662 158 570 q 158 801 158 754 l 147 888 l 383 879 l 412 879 q 628 887 520 879 q 624 848 626 870 q 622 818 622 826 l 626 760 l 425 761 l 227 761 q 221 631 227 717 q 216 500 216 544 q 375 536 296 536 q 572 465 491 536 q 654 279 654 394 q 550 60 654 139 q 304 -18 447 -18 q 179 -6 231 -18 q 75 34 127 4 q 101 201 87 118 l 116 201 "},"7":{x_min:122.609375,x_max:729.5625,ha:749,o:"m 461 553 l 586 770 l 362 770 q 129 755 232 770 q 133 786 132 769 q 135 820 135 804 q 128 888 135 853 l 408 883 l 729 887 l 729 871 q 463 429 582 641 q 251 0 344 216 l 194 8 q 153 5 169 8 q 122 0 137 2 q 214 146 179 91 q 333 339 249 201 q 461 553 417 477 "},K:{x_min:108,x_max:856.625,ha:821,o:"m 255 314 q 261 132 255 250 q 268 0 268 13 q 229 4 255 0 q 188 8 202 8 q 148 4 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 712 126 621 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 203 925 q 267 932 259 932 l 255 671 l 255 499 q 480 693 375 586 q 687 932 585 800 q 732 932 710 932 q 777 932 753 932 l 837 932 q 606 727 720 830 q 389 522 493 623 q 525 358 465 426 q 666 202 586 290 q 856 0 747 115 l 746 0 q 692 -1 716 0 q 644 -8 669 -2 q 571 92 610 44 q 477 204 532 140 l 255 459 l 255 314 "},",":{x_min:40.28125,x_max:272.21875,ha:374,o:"m 131 75 q 160 147 144 120 q 213 175 176 175 q 272 119 272 175 q 259 67 272 91 q 231 18 245 43 l 73 -243 l 40 -231 l 131 75 "},d:{x_min:55,x_max:676,ha:758,o:"m 668 762 l 672 137 l 676 -1 q 638 3 653 1 q 611 5 623 5 q 574 2 597 5 q 547 -1 551 -1 l 557 119 q 336 -15 484 -15 q 127 86 200 -15 q 55 330 55 187 q 127 569 55 467 q 332 672 199 672 q 457 643 402 672 q 551 556 513 615 l 551 756 l 551 789 l 551 818 q 542 1025 551 927 q 609 1018 576 1018 q 639 1019 628 1018 q 675 1025 651 1020 l 668 762 m 374 57 q 515 139 473 57 q 557 332 557 222 q 513 522 557 437 q 374 607 470 607 q 236 522 278 607 q 194 332 194 438 q 235 141 194 225 q 374 57 277 57 "},"\xA8":{x_min:83.71875,x_max:550.390625,ha:625,o:"m 471 659 q 441 593 458 618 q 389 568 424 568 q 350 579 365 568 q 335 613 335 591 q 346 660 335 633 q 371 706 358 687 l 519 950 l 550 940 l 471 659 m 221 659 q 192 593 211 618 q 137 568 174 568 q 83 613 83 568 q 93 658 83 637 q 119 706 103 680 l 268 950 l 300 940 l 221 659 "},E:{x_min:108,x_max:613.5625,ha:686,o:"m 126 465 q 122 711 126 620 q 108 932 119 802 l 353 928 l 610 931 l 606 884 l 610 836 q 508 853 562 847 q 408 860 453 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 l 264 73 q 456 76 380 73 q 613 94 531 80 l 610 47 l 613 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},Y:{x_min:-28,x_max:746,ha:707,o:"m 297 177 l 297 386 q 191 570 256 458 q 84 750 125 682 q -28 932 42 819 q 24 928 -9 932 q 63 925 59 925 q 112 927 91 925 q 146 932 134 930 q 207 800 174 866 q 275 676 239 735 l 389 475 q 509 688 451 575 q 627 932 567 801 l 683 926 q 715 927 701 926 q 746 932 729 929 q 555 627 640 769 l 432 415 l 432 240 q 435 101 432 198 q 438 0 438 5 q 401 4 426 1 q 361 6 376 6 q 319 4 334 6 q 284 0 304 2 q 292 88 288 36 q 297 177 297 140 "},'"':{x_min:64,x_max:315,ha:379,o:"m 133 587 l 64 587 l 64 957 l 133 957 l 133 587 m 315 587 l 247 587 l 247 957 l 315 957 l 315 587 "},\u00EA:{x_min:40,x_max:646.9375,ha:681,o:"m 406 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 314 335 315 335 l 179 331 q 235 127 179 212 q 406 42 291 42 m 296 978 l 386 978 l 537 743 l 488 743 l 340 875 l 193 743 l 143 743 l 296 978 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},\u03B4:{x_min:41,x_max:670,ha:710,o:"m 102 840 q 185 981 102 937 q 375 1025 268 1025 q 497 1010 436 1025 q 621 968 559 995 q 595 876 604 923 q 500 947 547 923 q 393 972 453 972 q 280 937 328 972 q 233 840 233 902 q 272 742 233 794 q 434 627 312 691 q 613 504 556 563 q 670 305 670 445 q 581 75 670 165 q 350 -15 492 -15 q 125 73 210 -15 q 41 305 41 162 q 113 526 41 430 q 306 622 186 622 q 145 726 189 674 q 102 840 102 779 m 356 576 q 221 492 261 576 q 181 302 181 409 q 223 118 181 203 q 356 34 265 34 q 490 116 450 34 q 530 307 530 198 q 489 492 530 409 q 356 576 449 576 "},\u03AD:{x_min:53,x_max:598.828125,ha:628,o:"m 506 516 q 433 591 467 566 q 353 616 400 616 q 261 580 298 616 q 225 492 225 545 q 268 406 225 437 q 372 375 311 375 l 418 375 l 417 352 l 417 313 l 343 317 q 237 282 281 317 q 193 185 193 247 q 238 78 193 118 q 352 38 284 38 q 460 66 410 38 q 543 144 510 94 q 553 99 547 121 q 567 54 558 76 q 452 2 515 19 q 321 -15 388 -15 q 134 31 216 -15 q 53 176 53 78 q 96 286 53 246 q 214 355 139 326 q 127 408 162 370 q 93 497 93 445 q 165 625 93 579 q 323 672 237 672 q 430 654 378 672 q 541 604 481 637 q 522 564 529 584 q 506 516 514 545 m 476 944 q 510 975 494 965 q 547 986 526 986 q 584 970 569 986 q 598 933 598 954 q 584 898 598 912 q 541 867 569 884 l 342 744 l 293 744 l 476 944 "},\u03C9:{x_min:39.71875,x_max:1028.9375,ha:1068,o:"m 535 526 l 596 528 l 594 305 q 616 117 594 193 q 722 42 638 42 q 850 118 811 42 q 888 293 888 194 q 829 502 888 409 q 664 654 769 594 l 717 648 q 805 654 766 648 q 967 510 905 606 q 1028 304 1028 413 q 948 81 1028 177 q 744 -15 867 -15 q 622 16 678 -15 q 534 104 566 47 q 445 16 500 48 q 323 -15 389 -15 q 118 83 196 -15 q 39 311 39 182 q 100 511 39 419 q 262 654 161 604 q 303 650 278 651 q 349 648 327 648 l 402 654 q 238 501 296 593 q 179 291 179 409 q 218 116 179 191 q 348 42 257 42 q 419 68 390 42 q 461 137 448 94 q 472 216 469 175 q 475 303 475 257 q 472 419 475 353 q 469 528 470 485 l 535 526 "},"\xB4":{x_min:90.28125,x_max:305.5625,ha:374,o:"m 169 859 q 197 923 177 894 q 250 953 218 953 q 288 939 272 953 q 305 902 305 925 q 295 857 305 882 q 269 811 284 833 l 120 568 l 90 576 l 169 859 "},"\xB1":{x_min:169,x_max:969,ha:1139,o:"m 602 549 l 969 549 l 969 482 l 602 482 l 602 247 l 534 247 l 534 482 l 169 482 l 169 549 l 534 549 l 534 779 l 602 779 l 602 549 m 969 33 l 169 33 l 169 100 l 969 100 l 969 33 "},"|":{x_min:305,x_max:376,ha:683,o:"m 376 448 l 305 448 l 305 956 l 376 956 l 376 448 m 376 -233 l 305 -233 l 305 272 l 376 272 l 376 -233 "},\u03CB:{x_min:79,x_max:703,ha:774,o:"m 703 395 q 595 110 703 236 q 332 -15 488 -15 q 145 54 211 -15 q 79 244 79 123 l 83 429 q 81 542 83 486 q 79 654 80 598 l 146 650 l 217 654 q 209 502 217 608 q 202 365 202 397 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 132 476 43 q 571 340 571 222 q 548 493 571 418 q 488 645 526 568 q 550 647 529 645 q 627 658 571 650 q 703 395 703 537 m 227 928 q 281 907 259 928 q 304 853 304 886 q 283 800 304 822 q 230 778 262 778 q 175 800 197 778 q 153 853 153 822 q 174 906 153 884 q 227 928 195 928 m 469 928 q 523 906 501 928 q 545 853 545 884 q 524 799 545 821 q 472 778 504 778 q 418 800 440 778 q 396 853 396 822 q 416 905 396 883 q 469 928 437 928 "},"\xA7":{x_min:64,x_max:620,ha:675,o:"m 114 36 l 128 36 q 198 -76 148 -33 q 319 -120 247 -120 q 430 -78 384 -120 q 476 27 476 -37 q 369 169 476 116 q 170 252 269 210 q 64 419 64 312 q 91 522 64 476 q 171 609 119 568 q 122 739 122 669 q 195 896 122 837 q 369 956 268 956 q 473 940 422 956 q 576 894 523 925 q 559 864 568 882 q 521 775 551 846 l 508 775 q 445 871 483 839 q 343 903 407 903 q 251 867 289 903 q 213 777 213 832 q 318 644 213 694 q 514 563 415 604 q 620 408 620 507 q 592 299 620 348 q 515 213 565 251 q 560 143 544 179 q 576 65 576 108 q 494 -112 576 -46 q 298 -178 412 -178 q 179 -163 239 -178 q 76 -119 120 -148 q 97 -42 86 -89 q 114 36 108 4 m 138 479 q 257 340 138 396 q 478 238 376 285 q 524 285 508 261 q 541 342 541 310 q 384 490 541 423 q 197 587 228 556 q 156 532 175 563 q 138 479 138 501 "},b:{x_min:78,x_max:703,ha:758,o:"m 152 1018 q 219 1025 181 1018 q 212 916 214 966 q 210 788 210 866 l 210 755 l 210 555 q 419 672 283 672 q 629 569 555 672 q 703 322 703 466 q 630 79 703 173 q 414 -15 558 -15 q 296 8 350 -15 q 193 79 242 31 q 160 49 175 64 q 120 -1 145 33 l 78 -1 q 87 106 82 43 q 92 213 92 169 l 92 545 q 88 784 92 625 q 85 1025 85 944 q 152 1018 119 1018 m 383 605 q 243 520 285 605 q 202 323 202 435 q 245 133 202 218 q 383 48 288 48 q 522 132 480 48 q 564 326 564 217 q 522 519 564 434 q 383 605 480 605 "},q:{x_min:54,x_max:675,ha:758,o:"m 608 -368 q 579 -368 591 -368 q 540 -373 567 -369 q 549 -213 548 -312 q 551 -101 551 -115 l 551 99 q 339 -15 476 -15 q 130 82 207 -15 q 54 316 54 180 q 125 564 54 456 q 333 672 197 672 q 464 636 407 672 q 557 535 520 601 q 546 655 557 594 q 586 649 576 650 q 611 648 597 648 q 674 655 640 648 l 671 433 q 669 163 671 298 q 666 -106 668 27 l 675 -373 q 643 -369 658 -370 q 608 -368 627 -368 m 373 48 q 515 134 473 48 q 557 331 557 220 q 511 514 557 433 q 372 596 466 596 q 234 512 276 596 q 193 322 193 429 q 236 133 193 218 q 373 48 279 48 "},\u03A9:{x_min:8,x_max:1119.125,ha:1129,o:"m 449 0 q 318 4 410 0 q 223 8 227 8 l 10 0 l 13 47 q 11 74 13 59 q 8 95 9 88 q 119 88 69 90 q 249 86 169 86 q 103 261 152 170 q 55 473 55 352 q 200 822 55 694 q 567 950 345 950 q 931 823 791 950 q 1072 473 1072 697 q 1025 261 1072 350 q 878 86 978 173 q 992 91 902 86 q 1119 96 1083 96 l 1114 33 l 1117 0 l 906 8 q 778 4 867 8 q 682 0 688 0 l 682 72 q 864 215 807 122 q 921 451 921 309 q 834 764 921 639 q 565 889 747 889 q 296 767 384 889 q 209 454 209 645 q 268 217 209 319 q 449 72 327 115 l 449 0 "},\u03CD:{x_min:79,x_max:703,ha:774,o:"m 703 395 q 595 110 703 236 q 332 -15 488 -15 q 145 54 211 -15 q 79 244 79 123 l 83 429 q 81 541 83 484 q 79 652 80 597 l 146 648 l 217 652 q 209 502 217 606 q 202 365 202 397 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 132 476 43 q 571 340 571 222 q 548 491 571 416 q 488 644 526 566 q 550 646 529 644 q 627 656 571 648 q 703 395 703 536 m 499 941 q 532 972 517 962 q 568 983 547 983 q 606 967 592 983 q 620 930 620 952 q 605 894 620 910 q 564 865 590 878 l 365 741 l 316 741 l 499 941 "},\u00D6:{x_min:51,x_max:1069,ha:1121,o:"m 51 465 q 191 819 51 688 q 559 950 332 950 q 891 852 750 950 q 1046 659 1031 755 q 1065 535 1062 562 q 1069 462 1069 508 q 1066 395 1069 416 q 1047 275 1063 373 q 894 80 1031 176 q 562 -15 756 -15 q 451 -8 503 -15 q 304 31 399 -2 q 130 187 209 65 q 51 465 51 308 m 439 1208 q 491 1186 470 1208 q 513 1133 513 1164 q 491 1080 513 1103 q 439 1058 470 1058 q 385 1080 409 1058 q 362 1133 362 1102 q 384 1186 362 1164 q 439 1208 407 1208 m 682 1208 q 735 1186 713 1208 q 757 1133 757 1164 q 735 1080 757 1103 q 682 1058 713 1058 q 628 1079 650 1058 q 607 1133 607 1101 q 628 1186 607 1164 q 682 1208 650 1208 m 204 469 q 292 162 204 283 q 559 42 380 42 q 827 162 739 42 q 916 469 916 283 q 825 767 916 648 q 559 887 735 887 q 349 825 430 887 q 226 638 267 763 q 204 469 204 558 "},z:{x_min:15.28125,x_max:606.9375,ha:647,o:"m 15 29 q 164 224 88 124 q 302 416 240 323 l 418 586 l 270 586 q 181 581 218 586 q 62 565 145 577 l 68 609 l 62 654 q 181 648 115 650 q 330 646 248 646 l 363 646 l 393 646 q 606 654 500 646 l 606 626 q 453 428 545 549 q 317 246 361 306 q 194 68 273 185 l 343 68 q 456 72 400 68 q 594 86 513 77 l 588 42 l 594 0 l 280 8 q 148 4 237 8 q 15 0 59 0 l 15 29 "},"\u2122":{x_min:176,x_max:918,ha:1139,o:"m 463 930 l 346 930 l 346 614 l 293 614 l 293 930 l 176 930 l 176 969 l 463 969 l 463 930 m 736 690 l 840 968 l 918 969 l 918 614 l 871 614 l 871 927 l 752 614 l 719 614 l 594 930 l 594 614 l 548 614 l 548 969 l 625 969 l 736 690 "},\u03AE:{x_min:91,x_max:662,ha:754,o:"m 594 -365 q 557 -366 577 -365 q 526 -369 537 -368 q 531 -189 526 -310 q 537 -7 537 -68 l 537 406 q 503 536 537 485 q 391 587 469 587 q 255 508 290 587 q 220 315 220 430 q 222 133 220 259 q 224 1 224 8 l 158 6 l 91 1 l 101 156 l 101 495 q 97 584 101 527 q 93 655 93 640 q 119 650 105 652 q 155 648 134 648 q 185 650 175 648 q 221 655 195 651 l 220 538 q 321 637 265 602 q 452 672 378 672 q 604 603 552 672 q 656 430 656 535 l 656 329 l 656 -186 q 659 -293 656 -227 q 662 -370 662 -359 q 630 -366 645 -368 q 594 -365 614 -365 m 481 944 q 515 975 499 965 q 552 986 531 986 q 589 970 575 986 q 603 933 603 955 q 589 898 603 912 q 547 868 575 884 l 348 744 l 298 744 l 481 944 "},\u0398:{x_min:51,x_max:1068,ha:1119,o:"m 51 465 q 193 820 51 690 q 562 950 335 950 q 893 852 755 950 q 1047 653 1031 755 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 280 1062 379 q 892 83 1033 182 q 560 -15 751 -15 q 435 -7 480 -15 q 299 32 390 0 q 130 187 209 65 q 51 465 51 308 m 202 468 q 290 163 202 283 q 559 43 379 43 q 826 163 738 43 q 915 468 915 283 q 826 770 915 652 q 559 889 738 889 q 254 720 306 889 q 202 468 202 552 m 560 507 q 683 510 608 507 q 768 514 758 514 l 765 465 l 765 429 q 648 432 730 429 q 558 435 566 435 q 440 432 523 435 q 351 429 357 429 l 353 470 l 353 514 q 474 510 400 514 q 560 507 549 507 "},"\xAE":{x_min:80,x_max:1058,ha:1139,o:"m 816 905 q 992 726 927 841 q 1058 481 1058 611 q 912 138 1058 283 q 567 -6 766 -6 q 225 139 370 -6 q 80 481 80 284 q 224 826 80 681 q 569 971 368 971 q 816 905 698 971 m 569 918 q 263 788 392 918 q 134 481 134 659 q 261 175 134 306 q 566 45 389 45 q 872 174 741 45 q 1004 478 1004 304 q 947 699 1004 596 q 787 859 890 801 q 569 918 684 918 m 815 619 q 776 521 815 562 q 681 468 738 480 l 809 209 l 709 208 l 592 456 l 462 457 l 462 209 l 376 209 l 376 771 l 581 771 q 745 737 676 771 q 815 619 815 704 m 462 714 l 462 513 l 566 513 q 682 532 635 513 q 729 611 729 551 q 681 692 729 671 q 564 714 634 714 l 462 714 "},\u00C9:{x_min:109,x_max:614.5625,ha:685,o:"m 124 465 q 116 710 124 540 q 109 932 109 880 l 353 929 l 610 929 q 607 904 607 918 q 607 884 607 891 l 610 838 q 407 860 506 860 l 259 860 l 257 670 l 257 530 l 397 530 q 586 542 492 530 q 584 518 584 530 q 584 499 584 506 q 586 450 584 465 q 487 458 542 454 q 393 463 432 463 l 257 463 l 257 318 l 262 74 q 452 77 381 74 q 614 94 524 80 l 613 47 l 614 0 l 356 0 l 109 0 q 116 243 109 72 q 124 465 124 415 m 426 1225 q 461 1255 445 1244 q 499 1267 478 1267 q 536 1251 522 1267 q 549 1212 549 1236 q 533 1176 549 1192 q 492 1147 517 1160 l 292 1024 l 242 1024 l 426 1225 "},"~":{x_min:284,x_max:1080,ha:1368,o:"m 850 650 q 667 750 761 650 q 511 850 573 850 q 396 793 431 850 q 362 650 362 737 l 284 650 q 339 846 284 768 q 508 924 395 924 q 697 824 606 924 q 853 725 788 725 q 969 779 936 725 q 1002 924 1002 834 l 1080 924 q 1023 727 1080 805 q 850 650 966 650 "},\u0395:{x_min:108,x_max:613.5625,ha:686,o:"m 126 465 q 122 711 126 620 q 108 932 119 802 l 353 928 l 610 931 l 606 884 l 610 836 q 508 853 562 847 q 408 860 453 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 l 264 73 q 456 76 380 73 q 613 94 531 80 l 610 47 l 613 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},"\xB3":{x_min:48,x_max:424,ha:496,o:"m 159 636 l 156 663 q 178 661 167 661 q 200 661 189 661 q 280 690 248 661 q 312 767 312 719 q 212 869 312 869 q 143 846 168 869 q 107 781 117 823 l 102 779 q 84 812 93 795 q 66 845 75 830 q 134 886 98 871 q 212 901 171 901 q 341 873 284 901 q 398 778 398 845 q 355 691 398 724 q 252 643 313 658 q 373 610 322 643 q 424 509 424 577 q 353 385 424 427 q 196 343 283 343 q 48 373 117 343 q 57 422 52 391 q 66 469 63 454 l 75 469 q 120 399 88 425 q 199 374 153 374 q 294 409 254 374 q 334 499 334 444 q 299 588 334 553 q 207 623 264 623 q 179 620 193 623 q 156 617 166 618 l 159 636 "},"[":{x_min:116,x_max:364.609375,ha:449,o:"m 127 2 l 127 386 l 127 769 l 116 932 l 235 929 l 364 929 l 363 908 l 363 872 q 263 880 313 880 l 216 880 l 216 387 l 216 -105 l 264 -105 q 329 -102 308 -105 q 364 -98 351 -99 l 363 -123 l 363 -158 l 237 -154 l 116 -158 q 121 -81 116 -138 q 127 2 127 -24 "},L:{x_min:108,x_max:627.453125,ha:629,o:"m 126 465 q 122 712 126 621 q 108 932 119 803 q 149 930 126 932 q 188 926 173 927 q 233 929 202 926 q 268 932 265 932 q 263 797 268 883 q 258 684 258 711 q 261 332 258 577 q 264 73 264 86 l 402 73 q 512 78 458 73 q 627 94 566 84 l 624 47 l 627 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},\u03C3:{x_min:41,x_max:802.109375,ha:806,o:"m 625 644 l 802 651 l 797 611 l 802 566 l 626 573 q 690 464 671 527 q 710 327 710 402 q 616 81 710 177 q 371 -15 522 -15 q 131 78 222 -15 q 41 322 41 172 q 131 572 41 472 q 371 672 221 672 q 439 665 403 672 q 508 653 475 659 q 569 645 541 646 q 625 644 597 644 m 376 619 q 226 530 272 619 q 181 326 181 442 q 224 124 181 213 q 369 35 268 35 q 522 123 474 35 q 570 326 570 211 q 524 529 570 440 q 376 619 479 619 "},\u03B6:{x_min:75,x_max:675,ha:683,o:"m 642 987 l 642 949 q 425 760 524 860 q 260 545 326 661 q 194 303 194 428 q 194 278 194 289 q 202 215 194 267 q 335 141 210 163 q 558 116 447 128 q 675 -7 675 91 q 643 -109 675 -65 q 544 -232 612 -154 l 500 -205 q 565 -113 555 -131 q 576 -66 576 -94 q 552 -20 576 -37 q 292 22 509 2 q 75 240 75 41 q 143 487 75 357 q 297 719 212 616 q 508 949 383 821 l 359 949 q 252 945 301 949 q 130 933 204 941 l 134 977 l 130 1025 q 272 1021 186 1025 q 372 1018 358 1018 q 526 1021 429 1018 q 643 1025 623 1025 l 642 987 "},\u03B8:{x_min:48,x_max:699,ha:749,o:"m 375 909 q 621 773 544 909 q 699 456 699 638 q 627 118 699 255 q 372 -19 556 -19 q 120 114 193 -19 q 48 444 48 247 q 122 773 48 638 q 375 909 196 909 m 184 383 q 221 136 184 242 q 374 31 259 31 q 534 137 505 31 q 564 424 564 244 l 408 428 l 184 423 l 184 383 m 371 858 q 257 804 300 858 q 196 673 214 751 q 186 581 189 630 q 184 483 184 532 l 322 478 q 461 480 364 478 q 564 483 558 483 q 528 747 564 637 q 371 858 493 858 "},\u039F:{x_min:51,x_max:1068,ha:1119,o:"m 51 465 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 757 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 277 1062 379 q 894 80 1031 175 q 560 -15 756 -15 q 447 -10 496 -15 q 304 29 398 -5 q 130 186 210 64 q 51 465 51 308 m 202 468 q 290 162 202 282 q 559 42 379 42 q 826 162 738 42 q 915 468 915 283 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 639 267 764 q 202 468 202 552 "},\u0393:{x_min:108,x_max:627.453125,ha:629,o:"m 448 932 l 627 932 q 623 902 624 921 q 621 874 621 883 l 627 836 q 402 863 512 863 l 264 863 q 261 586 264 779 q 258 379 258 393 q 263 181 258 313 q 268 0 268 48 l 187 5 l 108 0 q 121 209 117 106 q 126 427 126 311 q 117 686 126 504 q 108 932 108 869 l 448 932 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:28,x_max:1011,ha:1032,o:"m 799 0 q 647 62 708 0 q 586 218 586 124 q 647 372 586 309 q 799 436 709 436 q 949 373 888 436 q 1011 223 1011 311 q 995 130 1011 176 q 918 35 972 70 q 799 0 865 0 m 863 1015 l 227 -125 l 158 -125 l 793 1015 l 863 1015 m 241 451 q 89 513 150 451 q 28 668 28 576 q 89 823 28 759 q 241 888 150 888 q 391 825 330 888 q 453 673 453 762 q 434 581 453 623 q 359 486 412 521 q 241 451 307 451 m 897 260 q 872 353 897 310 q 798 397 847 397 q 718 340 737 397 q 700 202 700 283 q 719 86 700 133 q 798 40 738 40 q 866 73 840 40 q 892 149 892 106 q 895 206 894 169 q 897 260 897 242 m 339 689 q 312 812 339 775 q 240 849 285 849 q 160 788 179 849 q 141 648 141 728 q 164 541 141 590 q 240 493 188 493 q 307 527 281 493 q 334 602 334 561 q 339 689 339 641 "},P:{x_min:109,x_max:722,ha:736,o:"m 127 559 q 109 931 127 759 l 231 927 q 337 931 270 927 q 416 935 403 935 q 632 874 543 935 q 722 694 722 814 q 616 493 722 564 q 371 422 510 422 l 252 422 q 257 200 252 348 q 262 0 262 52 q 224 3 249 0 q 185 8 199 8 q 147 5 168 8 q 109 0 127 2 q 118 287 109 85 q 127 559 127 488 m 576 684 q 515 826 576 773 q 364 879 455 879 l 262 875 q 254 781 257 827 q 252 688 252 735 l 252 476 q 507 530 439 476 q 576 684 576 584 "},\u038F:{x_min:-1,x_max:1355.953125,ha:1365,o:"m 685 0 q 555 4 646 0 q 460 8 464 8 l 247 0 l 250 47 q 248 74 250 59 q 244 95 246 88 q 355 88 305 90 q 486 86 405 86 q 340 261 389 170 q 292 473 292 352 q 437 822 292 694 q 804 950 582 950 q 1168 823 1028 950 q 1309 473 1309 697 q 1262 261 1309 350 q 1115 86 1215 173 q 1229 91 1139 86 q 1355 96 1319 96 l 1351 33 l 1354 0 l 1143 8 q 1014 4 1104 8 q 918 0 924 0 l 918 72 q 1100 215 1043 122 q 1158 451 1158 309 q 1071 764 1158 639 q 802 889 984 889 q 533 767 621 889 q 446 454 446 645 q 505 217 446 319 q 685 72 564 115 l 685 0 m 182 943 q 215 974 200 964 q 251 985 230 985 q 289 969 274 985 q 304 932 304 954 q 290 896 304 911 q 247 866 275 882 l 48 743 l -1 743 l 182 943 "},\u0388:{x_min:-1.390625,x_max:920.015625,ha:992,o:"m 432 465 q 428 711 432 620 q 414 932 425 802 l 660 928 l 917 932 l 912 884 l 917 836 q 814 853 868 847 q 714 860 760 860 l 567 860 l 564 671 l 564 528 l 704 528 q 893 541 786 528 l 890 497 l 893 451 l 700 462 l 564 462 l 564 317 l 570 74 q 762 77 686 74 q 920 94 838 80 l 917 47 l 920 0 l 664 4 l 414 0 q 423 239 414 70 q 432 465 432 408 m 181 943 q 215 974 200 964 q 251 985 230 985 q 288 969 273 985 q 304 932 304 954 q 289 896 304 911 q 247 866 275 882 l 47 743 l -1 743 l 181 943 "},_:{x_min:0,x_max:683.328125,ha:683,o:"m 683 -322 l 0 -322 l 0 -256 l 683 -256 l 683 -322 "},\u03AA:{x_min:-3,x_max:388,ha:386,o:"m 126 465 q 118 710 126 540 q 111 932 111 880 q 156 929 123 932 q 192 926 190 926 q 238 929 205 926 q 276 932 271 932 q 265 697 276 863 q 255 465 255 530 q 265 230 255 397 q 276 0 276 63 q 233 3 260 0 q 192 8 205 8 q 153 5 176 8 q 111 0 131 2 q 118 243 111 72 q 126 465 126 415 m 73 1208 q 124 1186 102 1208 q 146 1133 146 1164 q 123 1081 146 1105 q 73 1058 101 1058 q 19 1080 42 1058 q -3 1133 -3 1103 q 19 1185 -3 1163 q 73 1208 41 1208 m 313 1208 q 366 1186 344 1208 q 388 1133 388 1164 q 365 1080 388 1103 q 313 1058 342 1058 q 260 1080 283 1058 q 238 1133 238 1103 q 260 1185 238 1163 q 313 1208 282 1208 "},"+":{x_min:169,x_max:970,ha:1139,o:"m 603 441 l 970 441 l 970 374 l 603 374 l 603 0 l 536 0 l 536 374 l 169 374 l 169 441 l 536 441 l 536 816 l 603 816 l 603 441 "},"\xBD":{x_min:83,x_max:1094.125,ha:1172,o:"m 250 743 l 245 836 q 181 804 205 818 q 120 768 156 791 q 104 788 117 775 q 83 808 91 801 q 200 851 141 825 q 327 913 259 877 l 336 911 q 331 724 336 850 q 326 551 326 598 l 326 391 q 301 394 319 391 q 280 397 283 397 q 254 394 271 397 q 233 391 238 391 q 246 551 242 473 q 250 743 250 629 m 859 1015 l 929 1015 l 312 -124 l 243 -124 l 859 1015 m 982 363 q 959 443 982 413 q 887 478 936 473 q 821 458 852 478 q 784 407 790 439 l 778 377 l 773 376 q 728 448 753 416 q 899 513 801 513 q 1019 476 967 513 q 1072 374 1072 439 q 955 189 1072 285 q 806 67 838 93 l 978 67 q 1094 79 1039 67 q 1090 63 1092 76 q 1088 41 1088 49 q 1094 3 1088 18 q 981 3 1056 3 q 867 3 906 3 q 791 3 842 3 q 714 3 739 3 l 714 25 q 913 198 844 125 q 982 363 982 270 "},\u03A1:{x_min:109,x_max:722,ha:736,o:"m 127 559 q 109 931 127 759 l 231 927 q 337 931 270 927 q 416 935 403 935 q 632 874 543 935 q 722 694 722 814 q 616 493 722 564 q 371 422 510 422 l 252 422 q 257 200 252 348 q 262 0 262 52 q 224 3 249 0 q 185 8 199 8 q 147 5 168 8 q 109 0 127 2 q 118 287 109 85 q 127 559 127 488 m 576 684 q 515 826 576 773 q 364 879 455 879 l 262 875 q 254 781 257 827 q 252 688 252 735 l 252 476 q 507 530 439 476 q 576 684 576 584 "},"'":{x_min:88.890625,x_max:306.9375,ha:374,o:"m 169 858 q 196 923 177 896 q 250 951 215 951 q 289 937 272 951 q 306 903 306 923 q 295 858 306 883 q 269 812 284 833 l 122 568 l 88 576 l 169 858 "},T:{x_min:11,x_max:713,ha:725,o:"m 11 839 l 15 884 l 11 932 q 194 927 72 932 q 361 922 316 922 q 544 927 421 922 q 713 932 668 932 q 707 883 707 911 q 707 861 707 870 q 713 834 707 852 q 609 850 666 843 q 504 857 552 857 l 428 857 q 426 767 428 830 q 424 701 424 704 l 428 220 q 442 0 428 122 q 362 8 401 3 q 323 5 344 8 q 282 0 301 2 q 289 132 282 40 q 296 259 296 225 l 296 683 l 296 857 q 11 839 164 857 "},\u03A6:{x_min:50,x_max:1068,ha:1119,o:"m 637 -25 q 559 -15 591 -15 q 527 -17 544 -15 q 483 -25 509 -19 l 487 68 q 181 179 313 68 q 50 465 50 291 q 172 744 50 647 q 487 865 295 842 l 483 958 q 522 952 502 955 q 559 950 543 950 q 596 952 576 950 q 637 958 616 955 l 631 865 q 942 758 816 865 q 1068 465 1068 651 q 944 184 1068 286 q 631 68 820 83 l 637 -25 m 501 502 q 497 677 501 570 q 494 800 494 784 q 278 698 354 786 q 203 466 203 611 q 282 231 203 331 q 494 132 361 132 q 497 363 494 225 q 501 502 501 501 m 915 466 q 839 706 915 612 q 626 800 764 800 q 622 636 626 738 q 618 470 618 533 q 622 301 618 408 q 626 132 626 194 q 839 226 764 132 q 915 466 915 320 "},j:{x_min:-55,x_max:248,ha:342,o:"m 113 391 q 106 543 113 444 q 100 654 100 641 q 144 648 135 648 q 167 648 153 648 q 202 649 189 648 q 241 654 214 650 q 237 507 241 595 q 234 405 234 419 l 234 -13 l 234 -109 q 154 -303 234 -234 q -55 -372 74 -372 l -55 -333 q 78 -267 44 -323 q 113 -103 113 -212 l 113 -26 l 113 391 m 171 963 q 226 940 205 963 q 248 881 248 917 q 226 831 248 849 q 171 813 204 813 q 116 833 139 813 q 94 885 94 853 q 115 941 94 919 q 171 963 136 963 "},\u03A3:{x_min:44.4375,x_max:790.28125,ha:825,o:"m 729 883 l 733 835 q 272 855 519 855 q 544 500 391 691 q 372 312 446 399 q 219 119 297 224 l 455 119 q 638 124 522 119 q 790 129 755 129 l 784 86 l 783 68 l 784 42 q 785 25 784 33 q 790 0 786 17 q 558 4 694 0 q 416 8 422 8 q 230 4 350 8 q 44 0 111 0 l 44 50 q 169 182 105 109 q 307 344 232 255 l 406 468 q 242 689 314 594 q 76 899 170 785 l 76 932 q 231 929 123 932 q 345 926 340 926 q 568 929 412 926 q 733 932 723 932 l 729 883 "},"1":{x_min:72,x_max:472,ha:749,o:"m 334 626 q 331 722 334 655 q 329 793 329 788 q 228 737 278 765 q 133 673 177 709 q 102 713 124 688 q 72 743 80 737 q 274 827 177 780 q 458 935 372 875 l 472 929 q 463 552 472 804 q 455 259 455 300 l 459 0 q 421 5 441 2 q 384 8 401 8 q 349 5 367 8 q 312 0 330 2 q 329 289 324 133 q 334 626 334 445 "},\u00E4:{x_min:43,x_max:655.5,ha:649,o:"m 234 -15 q 98 33 153 -15 q 43 162 43 82 q 106 303 43 273 q 303 364 169 333 q 444 448 437 395 q 403 568 444 521 q 288 616 362 616 q 191 587 233 616 q 124 507 149 559 l 95 520 l 104 591 q 202 651 144 631 q 323 672 261 672 q 500 622 444 672 q 557 455 557 573 l 557 133 q 567 69 557 84 q 618 54 577 54 q 655 58 643 54 l 655 26 q 594 5 626 14 q 537 -6 562 -3 q 438 85 453 -6 q 342 10 388 35 q 234 -15 296 -15 m 203 929 q 254 906 232 929 q 277 854 277 884 q 256 799 277 820 q 204 778 236 778 q 149 800 173 778 q 126 854 126 822 q 148 906 126 884 q 203 929 170 929 m 444 929 q 498 906 476 929 q 521 854 521 884 q 500 800 521 822 q 447 778 479 778 q 392 800 415 778 q 370 854 370 823 q 392 906 370 884 q 444 929 414 929 m 176 186 q 204 98 176 133 q 284 64 232 64 q 390 107 342 64 q 438 212 438 151 l 438 345 q 239 293 303 319 q 176 186 176 268 "},"<":{x_min:176,x_max:961.109375,ha:1139,o:"m 279 406 l 960 130 l 961 56 l 176 379 l 176 432 l 960 756 l 960 682 l 279 406 "},"\xA3":{x_min:65,x_max:728.890625,ha:749,o:"m 67 47 l 65 98 l 116 101 q 203 168 176 112 q 231 292 231 224 q 227 375 231 330 q 221 444 223 420 q 139 441 171 444 q 76 432 107 439 l 78 479 l 76 503 q 105 495 92 498 q 134 493 117 493 l 219 493 q 212 550 214 522 q 209 609 209 578 q 304 825 209 742 q 537 909 399 909 q 633 896 592 909 q 723 864 673 884 q 666 731 694 809 l 656 731 q 605 825 641 791 q 512 859 570 859 q 383 796 427 859 q 340 646 340 734 l 345 493 l 366 493 q 523 502 450 493 l 521 466 l 526 434 q 438 441 493 439 q 345 444 383 444 l 345 378 q 310 238 345 302 q 213 107 275 173 q 527 113 421 107 q 728 134 633 119 l 721 66 q 728 0 721 34 q 542 3 666 0 q 358 8 419 8 q 176 3 285 8 q 65 0 67 0 l 67 47 "},"\xB9":{x_min:82,x_max:347,ha:496,o:"m 255 731 l 255 833 l 123 759 q 104 780 120 763 q 82 801 87 797 q 208 850 148 822 q 337 917 269 878 l 347 912 q 341 721 347 848 q 336 529 336 593 l 336 356 q 311 358 327 356 q 289 361 295 361 q 264 358 280 361 q 242 356 248 356 q 251 498 247 407 q 255 731 255 590 "},t:{x_min:18,x_max:415.21875,ha:425,o:"m 18 586 l 22 630 l 18 654 q 133 643 80 643 q 131 732 133 669 q 129 799 129 796 q 199 827 163 811 q 263 863 234 843 q 252 758 255 811 q 250 643 250 705 q 334 645 310 643 q 401 654 358 647 l 398 618 l 401 586 q 248 594 323 594 l 243 258 l 243 162 q 272 76 243 109 q 353 43 301 43 q 387 44 369 43 q 415 48 405 46 l 415 4 q 349 -10 378 -5 q 290 -15 319 -15 q 174 18 221 -15 q 123 118 128 51 l 123 200 l 129 387 l 133 594 q 84 592 113 594 q 18 586 55 590 "},\u03BB:{x_min:2.78125,x_max:652.78125,ha:657,o:"m 302 670 q 227 871 262 803 q 111 940 193 940 q 78 937 94 940 q 20 924 62 934 l 20 978 q 96 1012 59 1000 q 170 1025 133 1025 q 329 947 287 1025 q 427 692 372 869 q 538 340 481 515 q 652 1 594 166 l 579 5 l 504 0 q 336 573 423 305 q 218 301 272 438 q 111 0 163 163 l 61 6 q 27 3 48 6 q 2 0 5 0 q 302 670 165 329 "},\u00F9:{x_min:90,x_max:664,ha:754,o:"m 653 498 q 653 329 653 443 q 653 158 653 215 q 664 0 653 81 q 631 3 647 1 q 598 5 616 5 q 563 3 583 5 q 533 0 544 1 l 538 118 q 440 18 494 52 q 312 -15 385 -15 q 148 50 201 -15 q 96 229 96 115 l 96 354 l 96 516 l 90 655 q 120 650 103 651 q 158 648 136 648 q 192 650 175 648 q 227 655 210 651 q 220 445 227 591 q 213 247 213 299 q 247 115 213 163 q 362 68 281 68 q 477 113 428 68 q 531 217 525 159 q 538 340 538 274 q 533 520 538 394 q 528 655 528 647 q 561 650 548 651 q 596 648 574 648 q 663 655 628 648 q 653 498 653 573 m 445 743 l 244 866 q 205 896 223 877 q 187 934 187 915 q 202 970 187 955 q 238 986 217 986 q 277 973 256 986 q 309 945 298 961 l 496 743 l 445 743 "},W:{x_min:0,x_max:1306.953125,ha:1307,o:"m 0 932 q 47 927 31 929 q 76 926 62 926 q 121 929 88 926 q 155 931 154 931 q 262 547 200 750 l 380 171 q 470 437 415 272 q 552 693 525 602 q 619 931 580 784 l 672 926 q 700 928 684 926 q 726 931 716 930 q 825 604 787 727 q 883 419 862 482 q 969 171 904 357 l 1087 522 q 1143 720 1120 623 q 1187 931 1166 816 q 1221 929 1197 931 q 1247 926 1245 926 q 1280 928 1262 926 q 1306 931 1298 930 q 1131 467 1218 716 q 990 0 1045 217 q 963 4 980 1 q 937 7 947 7 q 904 3 925 7 q 880 0 883 0 q 761 385 831 184 l 641 733 l 491 287 q 402 0 438 133 q 370 3 391 0 q 344 7 350 7 q 315 4 327 7 q 287 0 302 2 q 206 296 252 142 q 122 568 161 450 q 0 932 83 686 "},\u00EF:{x_min:-25,x_max:365.328125,ha:340,o:"m 104 144 l 104 522 l 97 655 q 138 650 113 651 q 167 648 162 648 q 233 655 206 648 q 225 506 225 581 q 229 254 225 423 q 233 0 233 84 q 201 3 216 1 q 164 5 186 5 q 128 3 143 5 q 97 0 113 1 l 104 144 m 50 929 q 102 906 80 929 q 125 854 125 884 q 104 799 125 820 q 52 778 84 778 q -2 800 19 778 q -25 854 -25 822 q -4 906 -25 884 q 50 929 16 929 m 290 929 q 343 906 320 929 q 365 854 365 884 q 345 799 365 820 q 294 778 324 778 q 238 800 260 778 q 216 854 216 822 q 237 906 216 884 q 290 929 258 929 "},">":{x_min:176.390625,x_max:963,ha:1139,o:"m 963 379 l 176 56 l 176 130 l 858 406 l 176 682 l 176 756 l 962 432 l 963 379 "},v:{x_min:0,x_max:658.328125,ha:654,o:"m 0 655 q 54 648 38 648 q 86 647 69 647 q 113 647 100 647 q 168 654 127 648 q 252 402 204 529 l 358 134 l 470 436 q 543 654 508 533 q 570 650 554 651 q 600 648 586 648 q 636 648 618 648 q 658 654 652 652 q 506 340 577 502 q 372 0 436 177 q 347 5 362 2 q 319 8 333 8 q 296 5 309 8 q 272 0 283 2 q 200 206 234 120 q 0 655 165 292 "},\u03C4:{x_min:30,x_max:677,ha:701,o:"m 423 573 l 419 303 q 423 146 419 250 q 428 0 428 42 q 394 4 410 2 q 359 5 378 5 q 333 4 343 5 q 289 0 323 4 l 298 194 l 294 573 q 156 553 207 573 q 57 472 105 534 q 30 559 49 522 q 149 626 82 609 q 307 644 216 644 l 510 644 q 604 647 545 644 q 677 651 664 651 l 671 610 q 677 566 671 586 q 527 569 618 566 q 423 573 436 573 "},\u00FB:{x_min:90,x_max:664,ha:754,o:"m 653 498 q 653 328 653 442 q 653 158 653 215 q 664 0 653 81 q 631 3 647 1 q 598 5 616 5 q 563 3 583 5 q 533 0 544 1 l 538 118 q 440 18 494 52 q 312 -15 385 -15 q 148 50 201 -15 q 96 229 96 115 l 96 354 l 96 516 l 90 655 q 120 650 103 651 q 158 648 136 648 q 192 649 175 648 q 227 655 210 651 q 220 445 227 591 q 213 247 213 299 q 247 115 213 163 q 362 68 281 68 q 477 113 428 68 q 531 217 525 159 q 538 340 538 274 q 533 520 538 394 q 528 655 528 647 q 558 650 542 651 q 596 648 574 648 q 629 649 612 648 q 663 655 646 651 q 653 498 653 573 m 332 978 l 421 978 l 572 743 l 525 743 l 376 875 l 227 743 l 180 743 l 332 978 "},\u03BE:{x_min:64,x_max:654,ha:656,o:"m 562 861 q 502 941 539 911 q 414 972 465 972 q 299 917 342 972 q 256 788 256 862 q 312 650 256 701 q 458 599 369 599 l 526 599 l 524 563 l 524 528 q 480 533 503 532 q 427 535 457 535 q 271 494 337 535 q 197 408 205 454 q 187 347 188 361 q 186 326 186 333 q 186 294 186 300 q 190 282 187 287 q 238 200 201 229 q 335 153 276 171 l 494 118 q 610 73 567 100 q 654 -13 654 46 q 628 -103 654 -60 q 511 -238 602 -146 l 466 -210 q 541 -121 530 -139 q 553 -75 553 -103 q 393 16 553 -18 q 149 92 234 50 q 64 276 64 133 q 130 462 64 379 q 299 575 197 544 q 175 652 222 600 q 128 780 128 704 q 213 954 128 883 q 405 1025 298 1025 q 507 1009 458 1025 q 609 965 555 994 q 585 914 600 945 q 562 861 571 883 "},"&":{x_min:76,x_max:917.671875,ha:975,o:"m 360 -18 q 160 41 245 -18 q 76 211 76 101 q 137 382 76 315 q 314 515 199 448 q 249 618 273 569 q 225 722 225 668 q 287 872 225 812 q 441 932 349 932 q 581 891 520 932 q 643 777 643 851 q 588 640 643 701 q 453 532 533 579 q 568 390 509 459 q 690 253 627 321 q 815 530 792 379 l 829 530 l 887 466 q 814 327 856 396 q 727 209 772 259 q 807 115 760 169 q 917 0 853 61 q 855 1 896 0 q 791 2 813 2 l 739 0 l 649 110 q 515 15 586 48 q 360 -18 445 -18 m 341 475 q 234 380 267 419 q 201 273 201 340 q 258 125 201 190 q 401 61 316 61 q 508 86 458 61 q 606 154 559 111 l 341 475 m 547 770 q 524 854 547 823 q 454 886 502 886 q 363 851 402 886 q 325 769 325 817 q 344 685 325 718 q 422 575 363 652 q 514 661 481 615 q 547 770 547 708 "},\u039B:{x_min:0,x_max:852.78125,ha:853,o:"m 662 452 l 778 172 l 852 0 l 769 5 q 734 4 747 5 q 679 0 722 4 q 647 102 661 55 q 605 226 633 148 l 547 383 l 401 777 l 266 429 q 191 213 226 319 q 125 0 157 108 l 62 2 l 0 0 q 205 459 95 191 q 380 932 315 726 q 404 927 393 929 q 431 926 416 926 q 459 929 441 926 q 487 932 477 932 q 548 743 511 850 q 662 452 586 637 "},I:{x_min:109,x_max:271,ha:385,o:"m 127 465 q 123 711 127 620 q 109 932 120 803 q 154 927 129 929 q 190 925 179 925 q 238 928 209 925 q 271 931 266 931 q 263 788 271 887 q 256 659 256 690 l 256 448 l 256 283 q 263 135 256 238 q 271 0 271 31 q 231 3 258 0 q 190 8 204 8 q 151 5 172 8 q 109 0 129 2 q 118 239 109 70 q 127 465 127 408 "},G:{x_min:51,x_max:942,ha:1001,o:"m 581 -15 q 198 107 345 -15 q 51 459 51 229 q 196 815 51 680 q 566 950 342 950 q 755 929 659 950 q 930 869 852 909 q 906 802 916 836 q 895 737 897 769 l 874 737 q 739 855 808 818 q 571 893 670 893 q 305 770 406 893 q 204 479 204 647 q 298 168 204 291 q 577 46 393 46 q 689 56 640 46 q 790 94 738 66 q 794 184 790 123 q 798 251 798 246 q 794 337 798 280 q 790 423 790 394 q 830 417 821 418 q 863 416 838 416 q 901 419 880 416 q 941 425 923 422 l 936 236 q 939 121 936 201 q 942 37 942 41 q 757 -1 843 11 q 581 -15 672 -15 "},\u03B0:{x_min:79,x_max:703,ha:774,o:"m 703 395 q 595 110 703 236 q 332 -15 488 -15 q 145 54 211 -15 q 79 244 79 123 l 83 430 q 81 542 83 486 q 79 654 80 598 l 146 650 l 217 654 q 209 502 217 608 q 202 365 202 397 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 132 476 43 q 571 340 571 222 q 548 493 571 418 q 488 645 526 568 q 550 647 529 645 q 627 658 571 650 q 703 395 703 537 m 209 865 q 250 846 232 865 q 269 804 269 828 q 251 761 269 780 q 209 743 234 743 q 166 761 184 743 q 148 804 148 779 q 166 846 148 828 q 209 865 184 865 m 361 929 q 378 969 368 956 q 414 982 388 982 q 458 941 458 982 q 446 904 458 919 l 338 743 l 306 743 l 361 929 m 513 865 q 555 846 537 865 q 573 804 573 828 q 555 761 573 779 q 513 743 537 743 q 470 761 487 743 q 454 804 454 779 q 470 846 454 828 q 513 865 487 865 "},"`":{x_min:86.5,x_max:303.171875,ha:374,o:"m 222 659 q 194 595 214 622 q 140 568 175 568 q 86 613 86 568 q 96 660 86 636 q 122 706 107 684 l 271 950 l 303 940 l 222 659 "},\u03A5:{x_min:-28,x_max:746,ha:707,o:"m 297 177 l 297 386 q 191 570 256 458 q 84 750 125 682 q -28 932 42 819 q 24 928 -9 932 q 63 925 59 925 q 112 927 91 925 q 146 932 134 930 q 207 800 174 866 q 275 676 239 735 l 389 475 q 509 688 451 575 q 627 932 567 801 l 683 926 q 715 927 701 926 q 746 932 729 929 q 555 627 640 769 l 432 415 l 432 240 q 435 101 432 198 q 438 0 438 5 q 401 4 426 1 q 361 6 376 6 q 319 4 334 6 q 284 0 304 2 q 292 88 288 36 q 297 177 297 140 "},r:{x_min:89,x_max:465.390625,ha:488,o:"m 99 120 l 99 400 l 99 433 q 91 654 99 548 q 125 648 114 650 q 162 647 136 647 q 232 654 195 647 q 223 588 226 626 q 220 516 220 550 q 313 628 264 589 q 437 668 362 668 l 465 668 l 459 604 l 465 537 q 427 544 448 541 q 383 551 407 548 q 256 482 292 551 q 220 312 220 413 q 222 131 220 256 q 225 0 225 6 l 157 6 l 89 0 l 99 120 "},x:{x_min:1,x_max:635,ha:632,o:"m 264 316 l 158 461 q 78 563 120 508 q 5 655 36 619 q 97 647 51 647 q 141 649 120 647 q 177 654 162 651 q 249 538 214 592 q 334 415 284 484 q 420 533 377 473 q 501 654 464 592 q 523 650 508 652 q 550 647 539 648 q 616 654 582 647 l 371 365 q 477 210 434 267 q 635 0 519 152 q 587 3 616 0 q 551 6 558 6 q 501 4 523 6 q 465 0 479 1 q 380 140 407 98 q 295 264 352 183 q 172 84 194 117 q 123 0 151 51 l 66 5 q 33 2 55 5 q 1 0 10 0 q 131 154 63 72 q 264 316 199 236 "},\u00E8:{x_min:40,x_max:646.9375,ha:681,o:"m 407 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 313 335 315 335 l 179 331 q 235 127 179 212 q 407 42 291 42 m 407 743 l 208 866 q 166 895 183 880 q 149 934 149 911 q 167 967 149 949 q 202 986 185 986 q 243 969 220 986 q 273 945 266 952 l 457 743 l 407 743 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},\u03BC:{x_min:84,x_max:669.109375,ha:754,o:"m 331 -15 q 265 -7 292 -15 q 210 19 238 0 l 208 -128 q 211 -266 208 -178 q 214 -373 214 -354 q 183 -369 198 -370 q 150 -368 168 -368 q 114 -370 133 -368 q 84 -373 95 -372 q 89 -165 84 -304 q 94 43 94 -26 q 89 363 94 149 q 84 655 84 578 q 150 647 118 647 q 219 654 180 647 q 213 495 219 601 q 208 334 208 390 q 232 155 208 227 q 339 75 256 83 q 471 112 419 75 q 531 212 523 150 q 539 332 539 273 q 536 518 539 388 q 533 655 533 648 q 600 647 568 647 q 669 654 629 647 q 660 477 662 566 q 658 257 658 389 q 660 113 658 171 q 669 -1 662 55 l 602 4 l 537 -1 l 539 106 q 449 17 502 50 q 331 -15 397 -15 "},"\xF7":{x_min:169,x_max:969,ha:1139,o:"m 641 643 q 618 593 641 615 q 566 571 596 571 q 518 592 538 571 q 498 643 498 613 q 518 692 498 670 q 567 715 539 715 q 610 703 579 715 q 641 643 641 691 m 969 374 l 169 374 l 169 441 l 969 441 l 969 374 m 641 170 q 619 120 641 141 q 570 100 598 100 q 519 120 540 100 q 498 170 498 141 q 518 221 498 199 q 568 243 538 243 q 604 235 584 243 q 632 214 624 227 q 641 170 641 201 "},h:{x_min:92,x_max:665,ha:758,o:"m 102 136 l 102 859 q 100 934 102 894 q 94 1025 98 975 q 136 1018 126 1019 q 158 1018 146 1018 q 226 1025 188 1018 q 222 957 223 1001 q 221 888 221 913 l 221 868 l 221 543 q 322 637 264 602 q 450 672 380 672 q 608 606 558 672 q 659 429 659 541 l 659 298 l 659 136 l 665 0 q 633 3 648 1 q 597 5 617 5 q 560 3 580 5 q 529 0 540 1 q 534 202 529 68 q 540 405 540 337 q 503 533 540 481 q 394 586 467 586 q 256 508 291 586 q 221 313 221 430 q 224 133 221 244 q 227 0 227 22 q 188 3 211 0 q 161 6 164 6 q 123 4 137 6 q 92 0 108 2 l 102 136 "},".":{x_min:100,x_max:274,ha:374,o:"m 187 156 q 248 130 223 156 q 274 68 274 105 q 248 8 274 32 q 187 -15 223 -15 q 125 8 150 -15 q 100 68 100 32 q 125 130 100 105 q 187 156 150 156 "},\u03C6:{x_min:39,x_max:965,ha:1006,o:"m 578 -371 q 505 -362 539 -362 q 465 -365 483 -362 q 427 -372 446 -368 q 433 -163 427 -298 q 440 -11 440 -29 q 156 76 274 -11 q 39 327 39 163 q 145 571 39 486 q 410 656 252 656 q 412 635 411 645 q 413 615 413 625 q 235 516 292 580 q 179 327 179 451 q 247 118 179 197 q 442 39 316 39 l 444 197 l 444 311 q 444 400 444 340 q 444 491 444 461 q 514 619 452 570 q 657 668 577 668 q 879 568 794 668 q 965 332 965 469 q 850 84 965 169 q 563 -14 735 0 q 570 -203 563 -71 q 578 -371 578 -334 m 826 347 q 794 534 826 451 q 677 617 763 617 q 592 572 621 617 q 563 470 563 527 l 559 350 l 563 39 q 759 126 693 39 q 826 347 826 213 "},";":{x_min:72.609375,x_max:312,ha:446,o:"m 224 636 q 287 611 262 636 q 312 548 312 586 q 287 486 312 511 q 224 461 262 461 q 162 486 188 461 q 137 548 137 512 q 162 611 137 586 q 224 636 187 636 m 164 75 q 198 157 182 140 q 244 175 214 175 q 304 119 304 175 q 296 75 304 93 q 262 18 287 56 l 103 -243 l 72 -231 l 164 75 "},f:{x_min:12,x_max:432.546875,ha:397,o:"m 127 324 l 127 597 q 66 595 92 597 q 12 588 39 594 l 14 626 l 12 654 q 79 648 38 649 q 127 647 121 647 q 192 901 127 777 q 378 1025 257 1025 q 409 1022 400 1025 q 432 1015 418 1019 l 415 896 q 371 911 395 905 q 325 918 347 918 q 252 886 278 918 q 227 805 227 855 q 235 713 227 760 q 246 647 243 665 q 330 650 276 647 q 396 654 384 654 q 391 642 393 647 q 389 633 389 637 l 388 622 l 389 610 q 396 589 389 609 q 323 595 357 594 q 246 597 289 597 l 246 366 q 250 183 246 305 q 254 0 254 60 q 213 3 238 0 q 183 6 187 6 q 144 4 161 6 q 116 0 127 1 q 121 160 116 52 q 127 324 127 269 "},"\u201C":{x_min:83.71875,x_max:550.390625,ha:625,o:"m 471 659 q 441 593 458 618 q 389 568 424 568 q 350 579 365 568 q 335 613 335 591 q 346 660 335 633 q 371 706 358 687 l 519 950 l 550 940 l 471 659 m 221 659 q 192 593 211 618 q 137 568 174 568 q 83 613 83 568 q 93 658 83 637 q 119 706 103 680 l 268 950 l 300 940 l 221 659 "},A:{x_min:-15.28125,x_max:838.890625,ha:825,o:"m 257 639 l 387 950 q 402 945 395 947 q 417 944 409 944 q 452 950 437 944 q 576 629 536 733 q 686 359 617 526 q 838 0 755 192 q 789 3 820 0 q 751 6 758 6 q 700 4 723 6 q 663 0 677 1 q 600 199 622 137 q 543 353 579 260 l 377 358 l 215 353 l 162 205 q 130 110 145 160 q 101 0 115 59 l 44 5 q 6 2 20 5 q -15 0 -8 0 q 76 211 30 105 q 158 404 121 318 q 257 639 195 490 m 378 419 l 513 425 l 379 761 l 246 425 l 378 419 "},"6":{x_min:64,x_max:692,ha:749,o:"m 464 859 q 267 730 324 859 q 210 442 210 602 q 315 514 262 488 q 431 540 367 540 q 618 462 545 540 q 692 270 692 385 q 604 65 692 145 q 390 -15 516 -15 q 142 93 221 -15 q 64 377 64 201 q 167 745 64 581 q 462 909 270 909 q 524 905 501 909 q 579 890 547 902 l 574 827 q 521 851 547 844 q 464 859 495 859 m 554 258 q 510 409 554 347 q 380 471 466 471 q 255 409 300 471 q 210 264 210 348 q 253 105 210 172 q 384 39 297 39 q 485 73 441 39 q 540 148 529 108 q 552 206 551 187 q 554 258 554 225 "},"\u2018":{x_min:86.5,x_max:303.171875,ha:374,o:"m 224 659 q 193 594 212 620 q 140 568 174 568 q 86 615 86 568 q 98 660 86 633 q 122 708 110 687 l 271 951 l 303 942 l 224 659 "},\u03CA:{x_min:-29,x_max:362,ha:342,o:"m 104 333 l 104 520 q 103 566 104 544 q 96 654 102 588 q 140 647 130 648 q 165 647 151 647 q 232 654 195 647 q 224 555 225 599 q 223 437 223 511 l 223 406 q 228 194 223 337 q 233 0 233 51 q 201 3 216 1 q 165 5 185 5 q 127 3 148 5 q 96 0 107 1 q 100 165 96 51 q 104 333 104 279 m 45 928 q 99 907 77 928 q 122 853 122 886 q 101 800 122 822 q 48 778 80 778 q -6 800 15 778 q -29 853 -29 822 q -7 906 -29 884 q 45 928 13 928 m 286 928 q 340 906 318 928 q 362 853 362 884 q 341 799 362 821 q 289 778 321 778 q 235 800 257 778 q 213 853 213 822 q 233 905 213 883 q 286 928 254 928 "},\u03C0:{x_min:19,x_max:957,ha:989,o:"m 702 5 l 635 0 q 639 114 635 44 q 643 196 643 185 l 643 575 l 508 575 l 373 575 l 369 284 q 373 143 369 236 q 377 0 377 50 q 345 3 360 1 q 309 5 329 5 q 271 3 292 5 q 239 0 250 1 l 248 196 l 243 575 q 130 553 171 575 q 43 472 89 532 q 19 559 35 519 q 139 627 71 611 q 305 644 207 644 l 658 644 l 852 644 l 957 651 l 951 610 l 957 566 l 769 575 l 765 310 q 769 154 765 257 q 773 0 773 51 q 739 3 755 1 q 702 5 724 5 "},\u03AC:{x_min:41,x_max:827.109375,ha:846,o:"m 705 352 q 803 -1 763 155 l 739 1 l 673 -1 l 632 172 q 521 36 593 87 q 356 -15 448 -15 q 129 81 217 -15 q 41 316 41 177 q 130 569 41 467 q 368 672 220 672 q 537 622 464 672 q 659 486 610 573 q 711 654 691 569 l 770 650 l 827 654 q 763 505 792 576 q 705 352 734 434 m 518 943 q 552 974 536 964 q 589 985 568 985 q 626 969 611 985 q 641 932 641 953 q 627 897 641 911 q 585 866 613 883 l 384 743 l 335 743 l 518 943 m 377 619 q 226 530 272 619 q 181 326 181 442 q 223 124 181 214 q 367 34 265 34 q 528 137 480 34 q 601 323 577 240 q 527 531 578 444 q 377 619 475 619 "},O:{x_min:51,x_max:1068,ha:1119,o:"m 51 465 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 757 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 277 1062 379 q 894 80 1031 175 q 560 -15 756 -15 q 447 -10 496 -15 q 304 29 398 -5 q 130 186 210 64 q 51 465 51 308 m 202 468 q 290 162 202 282 q 559 42 379 42 q 826 162 738 42 q 915 468 915 283 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 639 267 764 q 202 468 202 552 "},n:{x_min:89,x_max:661,ha:754,o:"m 99 155 l 99 495 q 97 569 99 530 q 91 655 95 608 q 153 648 122 648 l 219 656 l 218 539 q 319 635 260 599 q 451 672 378 672 q 591 624 528 672 q 654 501 654 576 l 654 299 l 654 136 l 661 0 q 629 3 644 1 q 593 5 613 5 q 556 3 576 5 q 525 0 536 1 q 530 222 525 80 q 535 406 535 364 q 501 536 535 485 q 389 587 467 587 q 253 508 288 587 q 218 313 218 430 q 220 132 218 258 q 222 0 222 6 q 184 3 208 0 q 155 6 159 6 q 117 3 141 6 q 89 0 93 0 l 99 155 "},"3":{x_min:75,x_max:644,ha:749,o:"m 241 465 l 238 512 l 294 510 q 424 554 375 510 q 474 680 474 599 q 434 805 474 754 q 322 856 394 856 q 220 818 257 856 q 164 711 183 780 l 153 706 q 127 767 136 747 q 99 819 118 788 q 220 886 162 863 q 348 909 278 909 q 526 857 450 909 q 603 706 603 805 q 542 564 603 617 q 383 479 482 511 q 567 423 490 479 q 644 262 644 366 q 542 55 644 129 q 302 -18 441 -18 q 183 -6 240 -18 q 75 32 127 5 q 99 189 91 116 l 113 188 q 182 73 136 115 q 302 31 229 31 q 448 92 392 31 q 505 246 505 154 q 451 389 505 333 q 312 446 398 446 q 238 435 279 446 l 241 465 "},"9":{x_min:57,x_max:688,ha:749,o:"m 261 38 q 475 166 405 38 q 546 451 546 295 q 442 378 494 403 q 325 354 389 354 q 132 428 208 354 q 57 617 57 502 q 148 828 57 748 q 372 909 240 909 q 612 801 536 909 q 688 520 688 693 q 574 143 688 305 q 252 -18 461 -18 q 186 -14 211 -18 q 127 0 161 -11 l 113 90 q 180 51 143 64 q 261 38 218 38 m 372 419 q 501 482 457 419 q 546 634 546 545 q 504 790 546 725 q 373 855 462 855 q 238 791 284 855 q 193 637 193 727 q 238 482 193 545 q 372 419 284 419 "},l:{x_min:100,x_max:237.5,ha:342,o:"m 107 118 l 107 881 q 104 965 107 915 q 101 1025 101 1016 q 169 1018 138 1018 q 237 1025 203 1018 q 228 872 230 948 q 226 684 226 797 l 226 512 l 232 111 l 237 0 q 205 3 220 1 q 169 5 189 5 q 131 3 152 5 q 100 0 111 1 l 107 118 "},\u03BA:{x_min:97,x_max:677.5625,ha:683,o:"m 104 365 q 100 531 104 428 q 97 655 97 634 q 164 647 134 647 q 231 654 196 647 q 227 516 231 608 q 223 377 223 425 l 258 377 q 386 498 323 431 q 528 654 449 565 q 588 647 563 647 q 640 647 613 647 q 672 652 662 651 l 358 387 l 548 165 q 608 93 577 127 q 677 19 638 59 l 677 0 q 628 3 659 0 q 591 6 596 6 q 544 3 567 6 q 510 0 520 0 q 437 100 477 47 q 360 196 398 153 l 269 308 l 252 323 l 223 326 q 227 163 223 274 q 231 0 231 52 l 164 5 l 97 0 q 100 208 97 77 q 104 365 104 339 "},"4":{x_min:39,x_max:691.78125,ha:749,o:"m 453 252 l 177 257 l 39 253 l 39 291 q 204 522 111 392 q 345 721 297 653 q 475 906 394 789 l 527 906 l 581 906 q 575 805 581 872 q 569 705 569 739 l 569 343 l 598 343 q 644 344 620 343 q 690 350 667 345 l 683 297 q 686 270 683 287 q 691 244 689 254 q 568 253 629 253 l 568 137 l 569 0 l 505 6 l 437 0 q 450 120 447 51 q 453 252 453 190 m 453 767 l 344 626 q 230 465 298 562 q 144 343 162 368 l 453 343 l 453 767 "},p:{x_min:83,x_max:702,ha:758,o:"m 91 -106 q 89 202 91 47 q 87 513 88 358 l 83 655 q 109 650 95 652 q 146 648 124 648 q 177 650 165 648 q 213 655 188 651 q 202 535 202 591 q 297 637 246 602 q 425 672 349 672 q 630 567 558 672 q 702 322 702 463 q 629 84 702 183 q 423 -15 556 -15 q 210 99 287 -15 l 210 -101 q 214 -244 210 -148 q 219 -373 219 -340 q 185 -369 201 -370 q 151 -368 170 -368 q 130 -368 138 -368 q 83 -373 123 -368 q 87 -240 83 -329 q 91 -106 91 -151 m 384 596 q 245 514 289 596 q 202 328 202 433 q 244 134 202 220 q 383 48 286 48 q 520 131 478 48 q 563 322 563 215 q 519 509 563 423 q 384 596 475 596 "},\u03C8:{x_min:78,x_max:1002,ha:1038,o:"m 78 294 l 82 477 l 82 654 l 145 650 l 215 654 q 209 517 215 605 q 203 421 203 430 l 203 341 q 264 117 203 197 q 465 38 325 38 l 468 260 q 461 535 468 342 q 455 786 455 729 q 496 779 479 782 q 526 776 513 776 q 566 780 545 776 q 600 786 587 784 q 591 496 600 690 q 583 270 583 302 l 587 38 q 791 132 715 38 q 867 357 867 227 q 824 641 867 506 q 885 645 857 641 q 960 656 912 648 q 1002 419 1002 544 q 891 118 1002 231 q 587 -13 780 5 l 591 -221 l 600 -372 q 561 -365 578 -367 q 526 -363 543 -363 q 491 -366 511 -363 q 455 -372 471 -369 q 461 -162 455 -302 q 468 -13 468 -22 q 194 64 310 -13 q 78 294 78 142 "},\u00DC:{x_min:101,x_max:919.0625,ha:1015,o:"m 182 927 l 262 931 q 250 805 253 854 q 247 697 247 757 l 247 457 q 314 136 247 212 q 516 60 381 60 q 733 130 654 60 q 813 336 813 201 l 813 458 l 813 657 q 799 931 813 802 l 859 927 l 919 931 q 905 770 909 863 q 901 600 901 677 l 901 366 q 792 82 901 179 q 491 -15 684 -15 q 211 66 307 -15 q 116 325 116 148 l 116 426 l 116 698 q 112 805 116 757 q 101 931 109 854 l 182 927 m 410 1208 q 462 1186 442 1208 q 483 1133 483 1164 q 460 1081 483 1105 q 410 1058 438 1058 q 356 1080 379 1058 q 334 1133 334 1103 q 356 1185 334 1163 q 410 1208 378 1208 m 650 1208 q 704 1187 682 1208 q 727 1133 727 1166 q 704 1080 727 1103 q 650 1058 681 1058 q 598 1078 620 1058 q 576 1133 576 1099 q 598 1185 576 1163 q 650 1208 620 1208 "},\u00E0:{x_min:43,x_max:655.5,ha:649,o:"m 234 -15 q 98 33 153 -15 q 43 162 43 82 q 106 303 43 273 q 303 364 169 333 q 444 448 437 395 q 403 568 444 521 q 288 616 362 616 q 191 587 233 616 q 124 507 149 559 l 95 520 l 104 591 q 202 651 144 631 q 323 672 261 672 q 500 622 444 672 q 557 455 557 573 l 557 133 q 567 69 557 84 q 618 54 577 54 q 655 58 643 54 l 655 26 q 594 5 626 14 q 537 -6 562 -3 q 438 85 453 -6 q 342 10 388 35 q 234 -15 296 -15 m 392 743 l 191 866 q 152 896 170 877 q 133 934 133 915 q 148 970 133 955 q 186 986 163 986 q 222 972 200 986 q 254 945 245 958 l 442 743 l 392 743 m 176 186 q 204 98 176 133 q 284 64 232 64 q 390 107 342 64 q 438 212 438 151 l 438 345 q 239 293 303 319 q 176 186 176 268 "},\u03B7:{x_min:91,x_max:662,ha:754,o:"m 594 -365 q 557 -366 577 -365 q 526 -369 537 -368 q 531 -189 526 -310 q 537 -7 537 -68 l 537 406 q 503 536 537 485 q 391 587 469 587 q 255 508 290 587 q 220 315 220 430 q 222 133 220 259 q 224 1 224 8 l 158 6 l 91 1 l 101 156 l 101 495 q 97 584 101 527 q 93 655 93 640 q 119 650 105 652 q 155 648 134 648 q 185 650 175 648 q 221 655 195 651 l 220 538 q 321 637 265 602 q 452 672 378 672 q 604 603 552 672 q 656 430 656 535 l 656 329 l 656 -186 q 659 -293 656 -227 q 662 -370 662 -359 q 630 -366 645 -368 q 594 -365 614 -365 "}},cssFontWeight:"normal",ascender:1267,underlinePosition:-133,cssFontStyle:"normal",boundingBox:{yMin:-373.75,xMin:-71,yMax:1267,xMax:1511},resolution:1e3,original_font_information:{postscript_name:"Optimer-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Optimer",font_family_name:"Optimer",copyright:"Copyright (c) Magenta Ltd., 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta Ltd.:Optimer:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta Ltd.",font_sub_family_name:"Regular"},descender:-374,familyName:"Optimer",lineHeight:1640,underlineThickness:20};var Xh=[{id:"inside",name:"The book",selectors:[".book-introduction > .eyebrow",".book-introduction > h2",".book-introduction > .lead-copy",".book-introduction > .body-copy",".book-introduction > .purchase-links",".book-introduction > a"],combine:[[0,1,2],[4,5]],motif:"cover",sway:.12},{id:"themes",name:"The meaning",selectors:[".meaning-heading",".theme-row",".meaning-footnote"],attachLast:[2],motif:"pillars",sway:.38},{id:"pages",name:"Inside the pages",selectors:[".pages-intro",".reading-preview"],motif:"leaves",sway:-.25},{id:"chapters",name:"The chapter journey",selectors:[".chapter-header",".chapter-tabs",".chapter-panels",".chapter-footer"],combine:[1,2,3],motif:"steps",sway:.24},{id:"authors",name:"Behind the pages",selectors:[".authors-copy",".author-monogram"],motif:"voices",sway:-.3},{id:"voices",name:"Reader responses",selectors:[".reviews-header",".reader-review"],motif:"quotes",sway:.28},{id:"buy",name:"Into the light",selectors:[".final-content"],motif:"summit",sway:0}];var zl=new fo().parse(Wh),sr=new pt({color:"#c8a362",roughness:.4,metalness:.5}),nm=new pt({color:"#c9b99b",roughness:.7});function Yh(i,e,t,n){return Xh.map((s,r)=>{let a=i.querySelector("#"+s.id),o=document.createElement("canvas");o.width=innerWidth<=760?512:768,o.height=Math.round(o.width*800/529);let c=o.getContext("2d"),l=o.width,u=o.height;c.fillStyle="#f7f2e8",c.fillRect(0,0,l,u),c.strokeStyle="#cbb998",c.lineWidth=1,c.strokeRect(l*.09,u*.065,l*.82,u*.87),c.fillStyle="#6b5b3f",c.font=`${l*.025}px Inter`,c.textAlign="center",c.fillText(String(r+1).padStart(2,"0")+" / "+s.name.toUpperCase(),l/2,u*.13),c.fillStyle="#242c29",c.font=`${l*.064}px "Cormorant Garamond"`;let d=a.querySelector("h2").cloneNode(!0);d.querySelectorAll("br").forEach(x=>x.replaceWith(" "));let f=d.textContent.trim().split(/\s+/),p="",g=[];f.forEach(x=>{c.measureText(p+" "+x).width>l*.7?(g.push(p),p=x):p+=(p?" ":"")+x}),g.push(p),g.forEach((x,T)=>c.fillText(x,l/2,u*.3+T*l*.078)),c.font=`italic ${l*.034}px "Cormorant Garamond"`,c.fillStyle="#847044",c.fillText("Still Standing, Still Here",l/2,u*.76),c.font=`${l*.02}px Inter`,c.fillText("DHRUVA NERELLA & TATTVA NERELLA",l/2,u*.83);let _=new ws(o);_.colorSpace=Mt;let m=new bt;e.add(m);let h=new bt;t.add(h);let E=[];s.selectors.forEach((x,T)=>{a.querySelectorAll(x).forEach(L=>{let B=document.createComment("3D content home");L.before(B),E.push({node:L,marker:B,selectorIndex:T})})});let S=[],y=s.combine?Array.isArray(s.combine[0])?s.combine:[s.combine]:[];E.forEach(x=>{if(s.attachLast?.includes(x.selectorIndex)){S.at(-1).pieces.push(x);return}let T=y.findIndex(L=>L.includes(x.selectorIndex));if(T>=0){let L=S.find(B=>B.combined===T);L||(L={pieces:[],combined:T},S.push(L)),L.pieces.push(x)}else S.push({pieces:[x]})});let w=S.map((x,T)=>{let L=document.createElement("div");L.className="journey-card "+a.className.replace("reader-scene",""),L.dataset.chapter=s.id,L.dataset.station=String(T),L.setAttribute("role","group"),L.setAttribute("aria-label",s.name+" \xB7 "+(T+1)+" of "+S.length);let B=document.createElement("div");B.className="journey-card-copy",L.append(B);let U=new lo(L);h.add(U);let G=new ke(new Dt(6.7,2),new ti({color:"#40351f",transparent:!0,opacity:.12,depthWrite:!1}));G.position.z=.397,m.add(G);let k=new ke(new mt(6.7,.04,.04),sr);k.castShadow=!0,m.add(k);let J=new ke(new mt(1,1,.065),new pt({color:a.dataset.tone==="dark"?"#171d1c":"#f7f2e8",roughness:.8}));J.castShadow=!0,J.receiveShadow=!0,m.add(J);let V=new ke(new ns(String(T+1).padStart(2,"0"),{font:zl,size:.34,depth:.035,curveSegments:3,bevelEnabled:!0,bevelThickness:.006,bevelSize:.004,bevelSegments:1}),sr);V.castShadow=!0,m.add(V);let le=S.length===1?-1:pi(-3.8,4,T/(S.length-1)),pe=4+Math.sin(T*1.7)*s.sway;return{block:x,holder:B,element:L,object:U,shadow:G,support:k,backing:J,number:V,y:le,x:pe,height:3,width:6.7,scale:.009}}),R=new bt;m.add(R);for(let x=0;x<3;x++){let T;s.motif==="pillars"?T=new mt(.15,.18,.8+x*.25):s.motif==="leaves"?T=new mt(1,.75,.035):s.motif==="steps"?T=new mt(.65,.8,.2+x*.12):s.motif==="voices"?T=new Vi(.55,.035,6,32):s.motif==="quotes"?T=new Vi(.25,.09,8,18,Math.PI*1.5):s.motif==="summit"?T=new Cs(.6,1.3,4):T=new mt(.8,1.2,.12);let L=new ke(T,x%2?nm:sr);L.position.set(-4.5+Math.sin(x)*.7,-3+x*3,.46),s.motif==="summit"&&(L.rotation.x=Math.PI/2),L.castShadow=!0,L.receiveShadow=!0,R.add(L)}let A=new ke(new ns(String(r+1).padStart(2,"0"),{font:zl,size:1.15,depth:.14,curveSegments:4,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2}),sr);A.position.set(-5.6,0,.44),A.castShadow=!0,R.add(A);let I=new ke(new ns(s.name.toUpperCase(),{font:zl,size:.27,depth:.05,curveSegments:3}),sr);I.position.set(-7.3,-4.8,.44),I.castShadow=!0,R.add(I);let M={...s,section:a,cards:w,webGroup:m,domGroup:h,pageTexture:_,mounted:!1,mount(){this.mounted||(w.forEach(x=>x.block.pieces.forEach(T=>x.holder.append(T.node))),this.mounted=!0)},restore(){this.mounted&&(E.forEach(x=>x.marker.after(x.node)),this.mounted=!1)},measure(){let x=innerWidth<=760;w.forEach(T=>{T.element.style.width=(x?Math.max(280,innerWidth-44):760)+"px",T.element.offsetWidth&&(T.width=x?3.6:6.7,T.scale=T.width/T.element.offsetWidth,T.height=T.element.offsetHeight*T.scale,T.object.scale.setScalar(T.scale))})},view(x,T){let L=go(x)*(w.length-1),B=w[Math.floor(L)],U=w[Math.ceil(L)],G=ss(L%1),k=pi(B.y,U.y,G),J=pi(B.x,U.x,G),V=pi(B.height,U.height,G),le=pi(B.width,U.width,G),pe=innerWidth<=760?.84:Math.min(.64,860/innerWidth),xe=le/(2*Math.tan(Ji.degToRad(19))*T*pe),Ne=V/(2*Math.tan(Ji.degToRad(19))*.67),We=Math.max(xe,Ne,7.8)+(w.length===1?(1-x)*1.8:0),Ke=Math.sin(x*Math.PI*2)*this.sway*.32,Xe=.47+V/2;return{position:new P(J+Ke,Xe+1.35,-k+We),target:new P(J,Xe,-k)}},update(x,T){m.visible=h.visible=T;let L=1+4*x.dive;m.scale.setScalar(1/L),h.scale.copy(m.scale),m.position.z=h.position.z=.33*(1-1/L);let B=x.journey*(w.length-1);w.forEach((U,G)=>{let k=go(1-Math.abs(B-G)*.85),J=x.rise*ss(k);U.object.position.set(U.x,U.y,.42+U.height/2*J),U.object.rotation.x=J*Math.PI/2;let V=new P(0,0,1).applyEuler(U.object.rotation);U.backing.position.copy(U.object.position).addScaledVector(V,-.033),U.backing.rotation.copy(U.object.rotation),U.backing.scale.set(U.width,U.height,1),U.element.style.visibility=T&&x.flat>.05&&x.out<.5?"visible":"hidden",U.element.inert=!T||!x.readable||k<.7,U.element.classList.toggle("is-readable",T&&x.readable&&k>.7),U.element.style.setProperty("--content-lift",String(J)),U.element.style.setProperty("--glyph-depth",((1-J)*18).toFixed(2)+"px"),U.element.dataset.rise=J.toFixed(5),U.shadow.position.set(U.x,U.y,.399),U.shadow.scale.set(U.width/6.7,Math.max(1,U.height/2),1),U.shadow.material.opacity=.16*J,U.support.position.set(U.x,U.y,.42+.1*J),U.support.scale.x=U.width/6.7,U.number.position.set(U.x-U.width/2,U.y-U.height/2-.4,.42+.55*J),U.number.rotation.x=J*Math.PI/2}),R.visible=T&&x.flat>.8&&x.rise>.01,R.children.forEach((U,G)=>{U.position.z=.46+x.rise*(.35+G*.15),U.rotation.y=x.journey*.25*(G%2?1:-1)}),A.rotation.x=I.rotation.x=x.rise*Math.PI/2}};if("ResizeObserver"in window){let x=new ResizeObserver(T=>{M.mounted&&T.some(L=>L.contentRect.width>0)&&(M.measure(),n())});w.forEach(T=>x.observe(T.element)),M.observer=x}return M})}function Zh(i,e,t,n){let s=Math.max(25,16.6/(2*Math.tan(Ji.degToRad(19))*n*.86)),r=t.view(e.journey,n),a=.33*4*e.dive;r.position.y+=a,r.target.y+=a;let o=new P(0,1,s),c=new P(1,s*.77,s*.64),l=o.clone().lerp(c,ss((e.flat-.45)/.55)),u=new P(0,0,0);l.lerp(r.position,e.dive),u.lerp(r.target,e.dive),i.position.copy(l),i.lookAt(u),i.updateMatrixWorld()}function L5(i,e,t,n){let s=new ao({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,innerWidth<=760?1.25:1.75)),s.setSize(innerWidth,innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=la,s.toneMapping=_a,s.toneMappingExposure=.94,s.domElement.className="book-webgl",s.domElement.setAttribute("aria-hidden","true"),e.append(s.domElement);let r=new co;r.setSize(innerWidth,innerHeight),r.domElement.className="book-spatial-content",e.append(r.domElement);let a=new Bn,o=new Bn,c=new St(38,innerWidth/innerHeight,.1,200),l=new Gs("#f7eddb","#343d35",1.2);a.add(l);let u=new Gi("#fff0d2",2.1);u.position.set(-7,16,14),u.castShadow=!0,u.shadow.mapSize.set(innerWidth<=760?512:1024,innerWidth<=760?512:1024),Object.assign(u.shadow.camera,{left:-16,right:16,top:17,bottom:-17,near:1,far:60}),u.shadow.normalBias=.03,u.shadow.bias=-3e-4,a.add(u);let d=new Gi("#a7b8bb",1.2);d.position.set(8,6,-10),a.add(d);let f=new ji(s),p=new ho,g=f.fromScene(p,.08);a.environment=g.texture,p.dispose(),f.dispose();let _=Gh(i.querySelector("[data-intro-cover]").src,t);a.add(_.group);let m=new bt;o.add(m);let h=Yh(i,_.group,m,t),E=new ke(new Dt(120,120),new Bs({opacity:.24}));E.rotation.x=-Math.PI/2,E.receiveShadow=!0,a.add(E);let S={x:0,y:0};function y(A){A.pointerType!=="touch"&&(S.x=(A.clientX/innerWidth-.5)*2,S.y=(A.clientY/innerHeight-.5)*2,t())}window.addEventListener("pointermove",y,{passive:!0}),s.domElement.addEventListener("webglcontextlost",A=>{A.preventDefault(),n()});let w=0,R=-1;return{chapters:h,book:_,camera:c,renderer:s,mount(){h.forEach(A=>A.mount()),r.render(o,c),this.resize()},restore(){h.forEach(A=>A.restore())},resize(){s.setPixelRatio(Math.min(devicePixelRatio,innerWidth<=760?1.25:1.75)),s.setSize(innerWidth,innerHeight),r.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix();let A=e.hidden,I=e.style.visibility;e.hidden=!1,e.style.visibility="hidden",h.forEach(M=>{if(M.mounted){let x=M.cards.map(T=>T.element.style.display);M.cards.forEach(T=>T.element.style.display="block"),M.measure(),M.cards.forEach((T,L)=>T.element.style.display=x[L])}}),e.hidden=A,e.style.visibility=I},render(A,I){let M=h[A];_.update(I,S),R!==A&&(_.surfaceMaterial.map=M.pageTexture,_.surfaceMaterial.needsUpdate=!0,_.page.material.map=M.pageTexture,_.page.material.needsUpdate=!0,_.page.edge.material.map=h[Math.min(h.length-1,A+1)].pageTexture,_.page.edge.material.needsUpdate=!0,R=A);let x=h[Math.min(h.length-1,A+(I.turn>0?1:0))].pageTexture;_.surfaceMaterial.map!==x&&(_.surfaceMaterial.map=x,_.surfaceMaterial.needsUpdate=!0),m.position.copy(_.group.position),m.rotation.copy(_.group.rotation),m.scale.copy(_.group.scale),h.forEach((T,L)=>T.update(I,L===A)),E.position.y=-6.5+5.3*I.flat,Zh(c,I,M,c.aspect),s.render(a,c),r.render(o,c),w++,i.dataset.bookRotation=(-_.group.rotation.x*180/Math.PI).toFixed(5),i.dataset.pageFlip=I.turn.toFixed(6),i.dataset.bookScale=_.group.scale.x.toFixed(6),i.dataset.pageCurvature=_.page.curvature().toFixed(6),i.dataset.cameraPosition=c.position.toArray().map(T=>T.toFixed(5)).join(","),i.dataset.worldUuid=_.group.uuid,i.dataset.worldFrames=String(w),i.dataset.drawCalls=String(s.info.render.calls),i.dataset.worldTriangles=String(s.info.render.triangles)},dispose(){this.restore(),h.forEach(A=>{A.observer?.disconnect(),A.pageTexture.dispose()}),a.traverse(A=>{A.geometry?.dispose(),A.material&&(Array.isArray(A.material)?A.material:[A.material]).forEach(M=>{M.map?.dispose(),M.dispose()})}),g.dispose(),s.dispose(),s.domElement.remove(),r.domElement.remove(),window.removeEventListener("pointermove",y)}}}export{L5 as createWorld};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
