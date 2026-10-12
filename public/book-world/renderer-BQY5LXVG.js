import{a as uo,b as Xn,c as ir}from"./chunk-PQ7DLSCF.js";var yc=0,jo=1,qc=2;var el=0,tl=1,sa=2,un=3,Kt=0,_t=1,dn=2,bn=0,jn=1,nl=2,il=3,sl=4,Mc=5,Nn=100,Sc=101,bc=102,Ec=103,Tc=104,wc=200,Ac=201,Rc=202,Cc=203,wr=204,Ar=205,Ic=206,Pc=207,Lc=208,Dc=209,Uc=210,Nc=211,Fc=212,Oc=213,Bc=214,ra=0,aa=1,oa=2,ei=3,la=4,ca=5,ha=6,ua=7,da=0,zc=1,kc=2,En=0,Hc=1,Vc=2,Gc=3,fa=4,Wc=5,Xc=6,Yc=7;var rl=300,oi=301,li=302,pa=303,ma=304,Ws=306,Rr=1e3,Dn=1001,Cr=1002,Lt=1003,Zc=1004;var Xs=1005;var Qt=1006,ga=1007;var kn=1008;var nn=1009,al=1010,ol=1011,Vi=1012,_a=1013,Hn=1014,sn=1015,Gi=1016,xa=1017,va=1018,Wi=1020,ll=35902,cl=35899,hl=1021,ul=1022,Wt=1023,Ii=1026,Xi=1027,ya=1028,qa=1029,dl=1030,Ma=1031;var Sa=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,ba=35840,Ea=35841,Ta=35842,wa=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37808,Pa=37809,La=37810,Da=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,za=37817,ka=37818,Ha=37819,Va=37820,Ga=37821,Wa=36492,Xa=36494,Ya=36495,Za=36283,Ja=36284,$a=36285,Ka=36286;var ps=2300,Ir=2301,Tr=2302,Bo=2400,zo=2401,ko=2402;var Jc=3200,$c=3201;var Qa=0,Kc=1,Tn="",Ct="srgb",ti="srgb-linear",ms="linear",nt="srgb";var Kn=7680;var Ho=519,Qc=512,jc=513,eh=514,fl=515,th=516,nh=517,ih=518,sh=519,Vo=35044;var pl="300 es",$t=2e3,gs=2001;var Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,hs=Math.PI/180,Pi=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function ru(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function au(i,e,t){return i!==e?(t-i)/(e-i):0}function us(i,e,t){return(1-t)*i+t*e}function ou(i,e,t,n){return us(i,e,1-Math.exp(-t*n))}function lu(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function du(i,e){return i+Math.random()*(e-i)}function fu(i){return i*(.5-Math.random())}function pu(i){i!==void 0&&(Yl=i);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mu(i){return i*hs}function gu(i){return i*Pi}function _u(i){return(i&i-1)===0&&i!==0}function xu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*d,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yi={DEG2RAD:hs,RAD2DEG:Pi,generateUUID:ci,clamp:Ze,euclideanModulo:ml,mapLinear:ru,inverseLerp:au,lerp:us,damp:ou,pingpong:lu,smoothstep:cu,smootherstep:hu,randInt:uu,randFloat:du,randFloatSpread:fu,seededRandom:pu,degToRad:mu,radToDeg:gu,isPowerOfTwo:_u,ceilPowerOfTwo:xu,floorPowerOfTwo:vu,setQuaternionFromProperEuler:yu,normalize:Rt,denormalize:Ri},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==p||d!==g){let m=1-o,h=c*f+l*p+d*g+u*_,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){let A=Math.sqrt(S),w=Math.atan2(A,h*b);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let q=o*b;if(c=c*m+f*q,l=l*m+p*q,d=d*m+g*q,u=u*m+_*q,m===1-o){let A=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=A,l*=A,d*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+d*u+c*p-l*f,e[t+1]=c*g+d*f+l*u-o*p,e[t+2]=l*g+d*p+o*f-c*u,e[t+3]=d*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"YZX":this._x=f*d*u+l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u-f*p*g;break;case"XZY":this._x=f*d*u-l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fo=new P,Zl=new jt,Ve=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],h=s[6],b=s[1],S=s[4],q=s[7],A=s[2],w=s[5],C=s[8];return r[0]=a*_+o*b+c*A,r[3]=a*m+o*S+c*w,r[6]=a*h+o*q+c*C,r[1]=l*_+d*b+u*A,r[4]=l*m+d*S+u*w,r[7]=l*h+d*q+u*C,r[2]=f*_+p*b+g*A,r[5]=f*m+p*S+g*w,r[8]=f*h+p*q+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,f=o*c-d*r,p=l*r-a*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-d*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(d*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},po=new Ve;function gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){let i=_s("canvas");return i.style.display="block",i}var Jl={};function Li(i){i in Jl||(Jl[i]=!0,console.warn(i))}function ah(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $l=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qu(){let i={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ti]:{primaries:e,whitePoint:n,transfer:ms,toXYZ:$l,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:$l,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var $e=qu();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gi,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=_s("canvas")),gi.width=e.width,gi.height=e.height;let s=gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mu=0,Di=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mo(s[a].image)):r.push(mo(s[a]))}else r=mo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,go=new P,bt=class i extends Sn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=Qt,a=kn,o=Wt,c=nn,l=i.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ci(),this.name="",this.source=new Di(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=rl;bt.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,q=(p+1)/2,A=(h+1)/2,w=(d+f)/4,C=(u+_)/4,I=(g+m)/4;return S>q&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=C/n):q>A?q<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(q),n=w/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=I/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-d)/b,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lr=class extends Sn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new bt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Di(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Lr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xs=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),rr.subVectors(this.max,ns),_i.subVectors(e.a,ns),xi.subVectors(e.b,ns),vi.subVectors(e.c,ns),wn.subVectors(xi,_i),An.subVectors(vi,xi),Yn.subVectors(_i,vi);let t=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Yn.z,Yn.y,wn.z,0,-wn.x,An.z,0,-An.x,Yn.z,0,-Yn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Yn.y,Yn.x,0];return!_o(t,_i,xi,vi,rr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,_i,xi,vi,rr))?!1:(ar.crossVectors(wn,An),t=[ar.x,ar.y,ar.z],_o(t,_i,xi,vi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gn=[new P,new P,new P,new P,new P,new P,new P,new P],Yt=new P,sr=new cn,_i=new P,xi=new P,vi=new P,wn=new P,An=new P,Yn=new P,ns=new P,rr=new P,ar=new P,Zn=new P;function _o(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=e.dot(Zn),l=t.dot(Zn),d=n.dot(Zn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var bu=new cn,is=new P,xo=new P,Fn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);let t=is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(xo)),this.expandByPoint(is.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_n=new P,vo=new P,or=new P,Rn=new P,yo=new P,lr=new P,qo=new P,Ur=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vo.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(vo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=Rn.dot(this.direction),c=-Rn.dot(or),l=Rn.lengthSq(),d=Math.abs(1-a*a),u,f,p,g;if(d>0)if(u=a*c-o,f=a*o-c,g=r*d,u>=0)if(f>=-g)if(f<=g){let _=1/d;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vo).addScaledVector(or,f),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){yo.subVectors(t,e),lr.subVectors(n,e),qo.crossVectors(yo,lr);let a=this.direction.dot(qo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);let c=o*this.direction.dot(lr.crossVectors(Rn,lr));if(c<0)return null;let l=o*this.direction.dot(yo.cross(Rn));if(l<0||c+l>a)return null;let d=-o*Rn.dot(qo);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class i{constructor(e,t,n,s,r,a,o,c,l,d,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,u,f,p,g,_,m)}set(e,t,n,s,r,a,o,c,l,d,u,f,p,g,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*d,p=a*u,g=o*d,_=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*d,p=c*u,g=l*d,_=l*u;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*d,p=c*u,g=l*d,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*d,p=a*u,g=o*d,_=o*u;t[0]=c*d,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+_,t[5]=a*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Tu)}lookAt(e,t,n){let s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Cn.crossVectors(n,Ft),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Cn.crossVectors(n,Ft)),Cn.normalize(),cr.crossVectors(Ft,Cn),s[0]=Cn.x,s[4]=cr.x,s[8]=Ft.x,s[1]=Cn.y,s[5]=cr.y,s[9]=Ft.y,s[2]=Cn.z,s[6]=cr.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],b=n[3],S=n[7],q=n[11],A=n[15],w=s[0],C=s[4],I=s[8],x=s[12],y=s[1],T=s[5],U=s[9],k=s[13],L=s[2],B=s[6],z=s[10],Z=s[14],H=s[3],ne=s[7],ce=s[11],ve=s[15];return r[0]=a*w+o*y+c*L+l*H,r[4]=a*C+o*T+c*B+l*ne,r[8]=a*I+o*U+c*z+l*ce,r[12]=a*x+o*k+c*Z+l*ve,r[1]=d*w+u*y+f*L+p*H,r[5]=d*C+u*T+f*B+p*ne,r[9]=d*I+u*U+f*z+p*ce,r[13]=d*x+u*k+f*Z+p*ve,r[2]=g*w+_*y+m*L+h*H,r[6]=g*C+_*T+m*B+h*ne,r[10]=g*I+_*U+m*z+h*ce,r[14]=g*x+_*k+m*Z+h*ve,r[3]=b*w+S*y+q*L+A*H,r[7]=b*C+S*T+q*B+A*ne,r[11]=b*I+S*U+q*z+A*ce,r[15]=b*x+S*k+q*Z+A*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+_*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*d-r*c*d)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*d-n*l*d)+h*(-s*o*d-t*c*u+t*o*f+s*a*u-n*a*f+n*c*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],b=u*m*l-_*f*l+_*c*p-o*m*p-u*c*h+o*f*h,S=g*f*l-d*m*l-g*c*p+a*m*p+d*c*h-a*f*h,q=d*_*l-g*u*l+g*o*p-a*_*p-d*o*h+a*u*h,A=g*u*c-d*_*c-g*o*f+a*_*f+d*o*m-a*u*m,w=t*b+n*S+s*q+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=b*C,e[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*h-n*f*h)*C,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*h+n*c*h)*C,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*C,e[4]=S*C,e[5]=(d*m*r-g*f*r+g*s*p-t*m*p-d*s*h+t*f*h)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*h-t*c*h)*C,e[7]=(a*f*r-d*c*r+d*s*l-t*f*l-a*s*p+t*c*p)*C,e[8]=q*C,e[9]=(g*u*r-d*_*r-g*n*p+t*_*p+d*n*h-t*u*h)*C,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*h+t*o*h)*C,e[11]=(d*o*r-a*u*r-d*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=A*C,e[13]=(d*_*s-g*u*s+g*n*f-t*_*f-d*n*m+t*u*m)*C,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*C,e[15]=(a*u*s-d*o*s+d*n*c-t*u*c-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,u=o+o,f=r*l,p=r*d,g=r*u,_=a*d,m=a*u,h=o*u,b=c*l,S=c*d,q=c*u,A=n.x,w=n.y,C=n.z;return s[0]=(1-(_+h))*A,s[1]=(p+q)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(p-q)*w,s[5]=(1-(f+h))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+S)*C,s[9]=(m-b)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=yi.set(s[0],s[1],s[2]).length(),a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);let l=1/r,d=1/a,u=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$t,c=!1){let l=this.elements,d=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===$t)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===gs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$t,c=!1){let l=this.elements,d=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===$t)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===gs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yi=new P,Zt=new Qe,Eu=new P(0,0,0),Tu=new P(1,1,1),Cn=new P,cr=new P,Ft=new P,Ql=new Qe,jl=new jt,Gt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wu=0,ec=new P,qi=new jt,xn=new Qe,hr=new P,ss=new P,Au=new P,Ru=new jt,tc=new P(1,0,0),nc=new P(0,1,0),ic=new P(0,0,1),sc={type:"added"},Cu={type:"removed"},Mi={type:"childadded",child:null},Mo={type:"childremoved",child:null},mt=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Gt,n=new jt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ve}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ss,hr,this.up):xn.lookAt(hr,ss,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(xn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=new P,vn=new P,So=new P,yn=new P,Si=new P,bi=new P,rc=new P,bo=new P,Eo=new P,To=new P,wo=new tt,Ao=new tt,Ro=new tt,Ln=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),vn.subVectors(n,t),So.subVectors(e,t);let a=Jt.dot(Jt),o=Jt.dot(vn),c=Jt.dot(So),l=vn.dot(vn),d=vn.dot(So),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*d)*f,g=(a*d-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return wo.setScalar(0),Ao.setScalar(0),Ro.setScalar(0),wo.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wo,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),vn.subVectors(e,t),Jt.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Si.subVectors(s,n),bi.subVectors(r,n),bo.subVectors(e,n);let c=Si.dot(bo),l=bi.dot(bo);if(c<=0&&l<=0)return t.copy(n);Eo.subVectors(e,s);let d=Si.dot(Eo),u=bi.dot(Eo);if(d>=0&&u<=d)return t.copy(s);let f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Si,a);To.subVectors(e,r);let p=Si.dot(To),g=bi.dot(To);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(bi,o);let m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return rc.subVectors(r,s),o=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(rc,o);let h=1/(m+_+f);return a=_*h,o=f*h,t.copy(n).addScaledVector(Si,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=ml(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Co(a,r,e+1/3),this.g=Co(a,r,e),this.b=Co(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return $e.workingToColorSpace(Tt.copy(this),e),Math.round(Ze(Tt.r*255,0,255))*65536+Math.round(Ze(Tt.g*255,0,255))*256+Math.round(Ze(Tt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ct){$e.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(ur);let n=us(In.h,ur.h,t),s=us(In.s,ur.s,t),r=us(In.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Ye;Ye.NAMES=oh;var Iu=0,hn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=jn,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Ar,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==Kt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ni=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new P,dr=new fe,Pu=0,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),e}};var ys=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qs=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lu=0,Vt=new Qe,Io=new mt,Ei=new P,Ot=new cn,rs=new cn,yt=new P,en=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?qs:ys)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ot.min,rs.min),Ot.expandByPoint(yt),yt.addVectors(Ot.max,rs.max),Ot.expandByPoint(yt)):(Ot.expandByPoint(rs.min),Ot.expandByPoint(rs.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)yt.fromBufferAttribute(o,l),c&&(Ei.fromBufferAttribute(e,l),yt.add(Ei)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;let l=new P,d=new P,u=new P,f=new fe,p=new fe,g=new fe,_=new P,m=new P;function h(I,x,y){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),d.sub(l),u.sub(l),p.sub(f),g.sub(f);let T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(T),o[I].add(_),o[x].add(_),o[y].add(_),c[I].add(m),c[x].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,x=b.length;I<x;++I){let y=b[I],T=y.start,U=y.count;for(let k=T,L=T+U;k<L;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new P,q=new P,A=new P,w=new P;function C(I){A.fromBufferAttribute(s,I),w.copy(A);let x=o[I];S.copy(x),S.sub(A.multiplyScalar(A.dot(x))).normalize(),q.crossVectors(w,x);let T=q.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,T)}for(let I=0,x=b.length;I<x;++I){let y=b[I],T=y.start,U=y.count;for(let k=T,L=T+U;k<L;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,d=new P,u=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d),p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*d;for(let h=0;h<d;h++)f[g++]=l[p++]}return new Pt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){let f=l[d],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],u=r[l];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ac=new Qe,Jn=new Ur,fr=new Fn,oc=new P,pr=new P,mr=new P,gr=new P,Po=new P,_r=new P,lc=new P,xr=new P,We=class extends mt{constructor(e=new en,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],u=r[c];d!==0&&(Po.fromBufferAttribute(u,e),a?_r.addScaledVector(Po,d):_r.addScaledVector(Po.sub(t),d))}t.add(_r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(fr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(fr,oc)===null||Jn.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(ac.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let q=b,A=S;q<A;q+=3){let w=o.getX(q),C=o.getX(q+1),I=o.getX(q+2);s=vr(this,h,e,n,l,d,u,w,C,I),s&&(s.faceIndex=Math.floor(q/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let b=o.getX(m),S=o.getX(m+1),q=o.getX(m+2);s=vr(this,a,e,n,l,d,u,b,S,q),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let q=b,A=S;q<A;q+=3){let w=q,C=q+1,I=q+2;s=vr(this,h,e,n,l,d,u,w,C,I),s&&(s.faceIndex=Math.floor(q/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let b=m,S=m+1,q=m+2;s=vr(this,a,e,n,l,d,u,b,S,q),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Du(i,e,t,n,s,r,a,o){let c;if(e.side===_t?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Kt,o),c===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:i}}function vr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);let d=Du(i,e,t,n,pr,mr,gr,lc);if(d){let u=new P;Ln.getBarycoord(lc,pr,mr,gr,u),s&&(d.uv=Ln.getInterpolatedAttribute(s,o,c,l,u,new fe)),r&&(d.uv1=Ln.getInterpolatedAttribute(r,o,c,l,u,new fe)),a&&(d.normal=Ln.getInterpolatedAttribute(a,o,c,l,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new P,materialIndex:0};Ln.getNormal(pr,mr,gr,f.normal),d.face=f,d.barycoord=u}return d}var gt=class i extends en{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(u,2));function g(_,m,h,b,S,q,A,w,C,I,x){let y=q/C,T=A/I,U=q/2,k=A/2,L=w/2,B=C+1,z=I+1,Z=0,H=0,ne=new P;for(let ce=0;ce<z;ce++){let ve=ce*T-k;for(let Se=0;Se<B;Se++){let Fe=Se*y-U;ne[_]=Fe*b,ne[m]=ve*S,ne[h]=L,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[h]=w>0?1:-1,d.push(ne.x,ne.y,ne.z),u.push(Se/C),u.push(1-ce/I),Z+=1}}for(let ce=0;ce<I;ce++)for(let ve=0;ve<C;ve++){let Se=f+ve+B*ce,Fe=f+ve+B*(ce+1),Le=f+(ve+1)+B*(ce+1),Be=f+(ve+1)+B*ce;c.push(Se,Fe,Be),c.push(Fe,Le,Be),H+=6}o.addGroup(p,H,x),p+=H,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wt(i){let e={};for(let t=0;t<i.length;t++){let n=hi(i[t]);for(let s in n)e[s]=n[s]}return e}function Uu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _l(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var lh={clone:hi,merge:wt},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ms=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new P,cc=new fe,hc=new fe,Mt=class extends Ms{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,cc,hc),t.subVectors(hc,cc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,wi=1,Nr=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mt(Ti,wi,e,t);s.layers=this.layers,this.add(s);let r=new Mt(Ti,wi,e,t);r.layers=this.layers,this.add(r);let a=new Mt(Ti,wi,e,t);a.layers=this.layers,this.add(a);let o=new Mt(Ti,wi,e,t);o.layers=this.layers,this.add(o);let c=new Mt(Ti,wi,e,t);c.layers=this.layers,this.add(c);let l=new Mt(Ti,wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ss=class extends bt{constructor(e=[],t=oi,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fr=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ss(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_t,blending:bn});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=Qt),new Nr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},St=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ou={type:"move"},Ui=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var On=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Or=class extends bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Lt,d=Lt,u,f){super(null,a,o,c,l,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ai=new Qe,uc=new Qe,yr=[],dc=new cn,Bu=new Qe,as=new We,os=new Fn,ii=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),dc.copy(e.boundingBox).applyMatrix4(Ai),this.boundingBox.union(dc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),os.copy(e.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),e.ray.intersectsSphere(os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),uc.multiplyMatrices(n,Ai),as.matrixWorld=uc,as.raycast(e,yr);for(let a=0,o=yr.length;a<o;a++){let c=yr[a];c.instanceId=r,c.object=this,t.push(c)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,ya,sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lo=new P,zu=new P,ku=new Ve,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Lo.subVectors(n,t).cross(zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ku.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new Fn,Hu=new fe(.5,.5),qr=new P,Ni=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],h=r[11],b=r[12],S=r[13],q=r[14],A=r[15];if(s[0].setComponents(l-a,p-d,h-g,A-b).normalize(),s[1].setComponents(l+a,p+d,h+g,A+b).normalize(),s[2].setComponents(l+o,p+u,h+_,A+S).normalize(),s[3].setComponents(l-o,p-u,h-_,A-S).normalize(),n)s[4].setComponents(c,f,m,q).normalize(),s[5].setComponents(l-c,p-f,h-m,A-q).normalize();else if(s[4].setComponents(l-c,p-f,h-m,A-q).normalize(),t===$t)s[5].setComponents(l+c,p+f,h+m,A+q).normalize();else if(t===gs)s[5].setComponents(c,f,m,q).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);let t=Hu.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Es=class extends bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ts=class extends bt{constructor(e,t,n=Hn,s,r,a,o=Lt,c=Lt,l,d=Ii,u=1){if(d!==Ii&&d!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Di(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ws=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Br=class i extends en{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],g=0,_=[],m=n/2,h=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function b(){let q=new P,A=new P,w=0,C=(t-e)/n;for(let I=0;I<=r;I++){let x=[],y=I/r,T=y*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,L=k*c+o,B=Math.sin(L),z=Math.cos(L);A.x=T*B,A.y=-y*n+m,A.z=T*z,u.push(A.x,A.y,A.z),q.set(B,C,z).normalize(),f.push(q.x,q.y,q.z),p.push(k,1-y),x.push(g++)}_.push(x)}for(let I=0;I<s;I++)for(let x=0;x<r;x++){let y=_[x][I],T=_[x+1][I],U=_[x+1][I+1],k=_[x][I+1];(e>0||x!==0)&&(d.push(y,T,k),w+=3),(t>0||x!==r-1)&&(d.push(T,U,k),w+=3)}l.addGroup(h,w,0),h+=w}function S(q){let A=g,w=new fe,C=new P,I=0,x=q===!0?e:t,y=q===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let T=g;for(let U=0;U<=s;U++){let L=U/s*c+o,B=Math.cos(L),z=Math.sin(L);C.x=x*z,C.y=m*y,C.z=x*B,u.push(C.x,C.y,C.z),f.push(0,y,0),w.x=B*.5+.5,w.y=z*.5*y+.5,p.push(w.x,w.y),g++}for(let U=0;U<s;U++){let k=A+U,L=T+U;q===!0?d.push(L,L+1,k):d.push(L+1,L,k),I+=3}l.addGroup(h,I,q===!0?1:2),h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},As=class i extends Br{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new Qe;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fi=class extends Bt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*d-p*u+this.aX,l=f*u+p*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zr=class extends Fi{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,u){let f=(a-r)/l-(o-r)/(l+d)+(o-a)/d,p=(o-a)/d-(c-a)/(d+u)+(c-o)/u;f*=d,p*=d,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Mr=new P,Do=new xl,Uo=new xl,No=new xl,kr=class extends Bt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(Mr.subVectors(s[0],s[1]).add(s[0]),l=Mr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Do.initNonuniformCatmullRom(l.x,u.x,f.x,d.x,g,_,m),Uo.initNonuniformCatmullRom(l.y,u.y,f.y,d.y,g,_,m),No.initNonuniformCatmullRom(l.z,u.z,f.z,d.z,g,_,m)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(l.x,u.x,f.x,d.x,this.tension),Uo.initCatmullRom(l.y,u.y,f.y,d.y,this.tension),No.initCatmullRom(l.z,u.z,f.z,d.z,this.tension));return n.set(Do.calc(c),Uo.calc(c),No.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Vu(i,e){let t=1-i;return t*t*e}function Gu(i,e){return 2*(1-i)*i*e}function Wu(i,e){return i*i*e}function ds(i,e,t,n){return Vu(i,e)+Gu(i,t)+Wu(i,n)}function Xu(i,e){let t=1-i;return t*t*t*e}function Yu(i,e){let t=1-i;return 3*t*t*i*e}function Zu(i,e){return 3*(1-i)*i*i*e}function Ju(i,e){return i*i*i*e}function fs(i,e,t,n,s){return Xu(i,e)+Yu(i,t)+Zu(i,n)+Ju(i,s)}var Rs=class extends Bt{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fs(e,s.x,r.x,a.x,o.x),fs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hr=class extends Bt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fs(e,s.x,r.x,a.x,o.x),fs(e,s.y,r.y,a.y,o.y),fs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cs=class extends Bt{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Bt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends Bt{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ds(e,s.x,r.x,a.x),ds(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends Bt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ds(e,s.x,r.x,a.x),ds(e,s.y,r.y,a.y),ds(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends Bt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(fc(o,c.x,l.x,d.x,u.x),fc(o,c.y,l.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Go=Object.freeze({__proto__:null,ArcCurve:zr,CatmullRomCurve3:kr,CubicBezierCurve:Rs,CubicBezierCurve3:Hr,EllipseCurve:Fi,LineCurve:Cs,LineCurve3:Vr,QuadraticBezierCurve:Is,QuadraticBezierCurve3:Gr,SplineCurve:Ps}),Wr=class extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Go[s.type]().fromJSON(s))}return this}},Oi=class extends Wr{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Cs(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Is(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Rs(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ps(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Fi(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qn=class extends Oi{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Oi().fromJSON(s))}return this}};function $u(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ch(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=td(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let d=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let p=i[f],g=i[f+1];p<o&&(o=p),g<c&&(c=g),p>d&&(d=p),g>u&&(u=g)}l=Math.max(d-o,u-c),l=l!==0?32767/l:0}return Ls(r,a,t,o,c,l,0),a}function ch(i,e,t,n,s){let r;if(s===dd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=pc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pc(a/n|0,i[a],i[a+1],r);return r&&Bi(r,r.next)&&(Us(r),r=r.next),r}function si(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bi(t,t.next)||ht(t.prev,t,t.next)===0)){if(Us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ls(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ad(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Qu(i,n,s,r):Ku(i)){e.push(c.i,i.i,l.i),Us(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ju(si(i),e),Ls(i,e,t,n,s,r,2)):a===2&&ed(i,e,t,n,s,r):Ls(si(i),e,t,n,s,r,1);break}}}function Ku(i){let e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,d=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=f&&g.y>=u&&g.y<=p&&cs(s,o,r,c,a,l,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qu(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ht(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,d=s.y,u=r.y,f=a.y,p=Math.min(o,c,l),g=Math.min(d,u,f),_=Math.max(o,c,l),m=Math.max(d,u,f),h=Wo(p,g,e,t,n),b=Wo(_,m,e,t,n),S=i.prevZ,q=i.nextZ;for(;S&&S.z>=h&&q&&q.z<=b;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&cs(o,d,c,u,l,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0||(S=S.prevZ,q.x>=p&&q.x<=_&&q.y>=g&&q.y<=m&&q!==s&&q!==a&&cs(o,d,c,u,l,f,q.x,q.y)&&ht(q.prev,q,q.next)>=0))return!1;q=q.nextZ}for(;S&&S.z>=h;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&cs(o,d,c,u,l,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;q&&q.z<=b;){if(q.x>=p&&q.x<=_&&q.y>=g&&q.y<=m&&q!==s&&q!==a&&cs(o,d,c,u,l,f,q.x,q.y)&&ht(q.prev,q,q.next)>=0)return!1;q=q.nextZ}return!0}function ju(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Bi(n,s)&&uh(n,t,t.next,s)&&Ds(n,s)&&Ds(s,n)&&(e.push(n.i,t.i,s.i),Us(t),Us(t.next),t=i=s),t=t.next}while(t!==i);return si(t)}function ed(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cd(a,o)){let c=dh(a,o);a=si(a,a.next),c=si(c,c.next),Ls(a,e,t,n,s,r,0),Ls(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function td(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=ch(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ld(l))}s.sort(nd);for(let r=0;r<s.length;r++)t=id(s[r],t);return t}function nd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function id(i,e){let t=sd(i,e);if(!t)return e;let n=dh(t,i);return si(n,n.next),si(t,t.next)}function sd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Bi(i,t))return t;do{if(Bi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ds(t,i)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&rd(a,t)))&&(a=t,d=u)}t=t.next}while(t!==o);return a}function rd(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function ad(i,e,t,n){let s=i;do s.z===0&&(s.z=Wo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,od(s)}function od(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Wo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ld(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function cs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&hh(i,e,t,n,s,r,a,o)}function cd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hd(i,e)&&(Ds(i,e)&&Ds(e,i)&&ud(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||Bi(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bi(i,e){return i.x===e.x&&i.y===e.y}function uh(i,e,t,n){let s=br(ht(i,e,t)),r=br(ht(i,e,n)),a=br(ht(t,n,i)),o=br(ht(t,n,e));return!!(s!==r&&a!==o||s===0&&Sr(i,t,e)||r===0&&Sr(i,n,e)||a===0&&Sr(t,i,n)||o===0&&Sr(t,e,n))}function Sr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function br(i){return i>0?1:i<0?-1:0}function hd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ds(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function ud(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){let t=Xo(i.i,i.x,i.y),n=Xo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pc(i,e,t,n){let s=Xo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Yo=class{static triangulate(e,t,n=2){return $u(e,t,n)}},Un=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mc(e),gc(n,e);let a=e.length;t.forEach(mc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,gc(n,t[c]);let o=Yo.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function mc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ns=class i extends en{constructor(e=new Qn([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:fd,S,q=!1,A,w,C,I;h&&(S=h.getSpacedPoints(d),q=!0,f=!1,A=h.computeFrenetFrames(d,!1),w=new P,C=new P,I=new P),f||(m=0,p=0,g=0,_=0);let x=o.extractPoints(l),y=x.shape,T=x.holes;if(!Un.isClockWise(y)){y=y.reverse();for(let ee=0,K=T.length;ee<K;ee++){let $=T[ee];Un.isClockWise($)&&(T[ee]=$.reverse())}}function k(ee){let $=10000000000000001e-36,J=ee[0];for(let he=1;he<=ee.length;he++){let ie=he%ee.length,ue=ee[ie],ke=ue.x-J.x,Oe=ue.y-J.y,E=ke*ke+Oe*Oe,v=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(J.x),Math.abs(J.y)),O=$*v*v;if(E<=O){ee.splice(ie,1),he--;continue}J=ue}}k(y),T.forEach(k);let L=T.length,B=y;for(let ee=0;ee<L;ee++){let K=T[ee];y=y.concat(K)}function z(ee,K,$){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(K,$)}let Z=y.length;function H(ee,K,$){let J,he,ie,ue=ee.x-K.x,ke=ee.y-K.y,Oe=$.x-ee.x,E=$.y-ee.y,v=ue*ue+ke*ke,O=ue*E-ke*Oe;if(Math.abs(O)>Number.EPSILON){let W=Math.sqrt(v),te=Math.sqrt(Oe*Oe+E*E),X=K.x-ke/W,Re=K.y+ue/W,le=$.x-E/te,Te=$.y+Oe/te,we=((le-X)*E-(Te-Re)*Oe)/(ue*E-ke*Oe);J=X+ue*we-ee.x,he=Re+ke*we-ee.y;let se=J*J+he*he;if(se<=2)return new fe(J,he);ie=Math.sqrt(se/2)}else{let W=!1;ue>Number.EPSILON?Oe>Number.EPSILON&&(W=!0):ue<-Number.EPSILON?Oe<-Number.EPSILON&&(W=!0):Math.sign(ke)===Math.sign(E)&&(W=!0),W?(J=-ke,he=ue,ie=Math.sqrt(v)):(J=ue,he=ke,ie=Math.sqrt(v/2))}return new fe(J/ie,he/ie)}let ne=[];for(let ee=0,K=B.length,$=K-1,J=ee+1;ee<K;ee++,$++,J++)$===K&&($=0),J===K&&(J=0),ne[ee]=H(B[ee],B[$],B[J]);let ce=[],ve,Se=ne.concat();for(let ee=0,K=L;ee<K;ee++){let $=T[ee];ve=[];for(let J=0,he=$.length,ie=he-1,ue=J+1;J<he;J++,ie++,ue++)ie===he&&(ie=0),ue===he&&(ue=0),ve[J]=H($[J],$[ie],$[ue]);ce.push(ve),Se=Se.concat(ve)}let Fe;if(m===0)Fe=Un.triangulateShape(B,T);else{let ee=[],K=[];for(let $=0;$<m;$++){let J=$/m,he=p*Math.cos(J*Math.PI/2),ie=g*Math.sin(J*Math.PI/2)+_;for(let ue=0,ke=B.length;ue<ke;ue++){let Oe=z(B[ue],ne[ue],ie);be(Oe.x,Oe.y,-he),J===0&&ee.push(Oe)}for(let ue=0,ke=L;ue<ke;ue++){let Oe=T[ue];ve=ce[ue];let E=[];for(let v=0,O=Oe.length;v<O;v++){let W=z(Oe[v],ve[v],ie);be(W.x,W.y,-he),J===0&&E.push(W)}J===0&&K.push(E)}}Fe=Un.triangulateShape(ee,K)}let Le=Fe.length,Be=g+_;for(let ee=0;ee<Z;ee++){let K=f?z(y[ee],Se[ee],Be):y[ee];q?(C.copy(A.normals[0]).multiplyScalar(K.x),w.copy(A.binormals[0]).multiplyScalar(K.y),I.copy(S[0]).add(C).add(w),be(I.x,I.y,I.z)):be(K.x,K.y,0)}for(let ee=1;ee<=d;ee++)for(let K=0;K<Z;K++){let $=f?z(y[K],Se[K],Be):y[K];q?(C.copy(A.normals[ee]).multiplyScalar($.x),w.copy(A.binormals[ee]).multiplyScalar($.y),I.copy(S[ee]).add(C).add(w),be(I.x,I.y,I.z)):be($.x,$.y,u/d*ee)}for(let ee=m-1;ee>=0;ee--){let K=ee/m,$=p*Math.cos(K*Math.PI/2),J=g*Math.sin(K*Math.PI/2)+_;for(let he=0,ie=B.length;he<ie;he++){let ue=z(B[he],ne[he],J);be(ue.x,ue.y,u+$)}for(let he=0,ie=T.length;he<ie;he++){let ue=T[he];ve=ce[he];for(let ke=0,Oe=ue.length;ke<Oe;ke++){let E=z(ue[ke],ve[ke],J);q?be(E.x,E.y+S[d-1].y,S[d-1].x+$):be(E.x,E.y,u+$)}}}Y(),j();function Y(){let ee=s.length/3;if(f){let K=0,$=Z*K;for(let J=0;J<Le;J++){let he=Fe[J];ye(he[2]+$,he[1]+$,he[0]+$)}K=d+m*2,$=Z*K;for(let J=0;J<Le;J++){let he=Fe[J];ye(he[0]+$,he[1]+$,he[2]+$)}}else{for(let K=0;K<Le;K++){let $=Fe[K];ye($[2],$[1],$[0])}for(let K=0;K<Le;K++){let $=Fe[K];ye($[0]+Z*d,$[1]+Z*d,$[2]+Z*d)}}n.addGroup(ee,s.length/3-ee,0)}function j(){let ee=s.length/3,K=0;xe(B,K),K+=B.length;for(let $=0,J=T.length;$<J;$++){let he=T[$];xe(he,K),K+=he.length}n.addGroup(ee,s.length/3-ee,1)}function xe(ee,K){let $=ee.length;for(;--$>=0;){let J=$,he=$-1;he<0&&(he=ee.length-1);for(let ie=0,ue=d+m*2;ie<ue;ie++){let ke=Z*ie,Oe=Z*(ie+1),E=K+J+ke,v=K+he+ke,O=K+he+Oe,W=K+J+Oe;ze(E,v,O,W)}}}function be(ee,K,$){c.push(ee),c.push(K),c.push($)}function ye(ee,K,$){je(ee),je(K),je($);let J=s.length/3,he=b.generateTopUV(n,s,J-3,J-2,J-1);R(he[0]),R(he[1]),R(he[2])}function ze(ee,K,$,J){je(ee),je(K),je(J),je(K),je($),je(J);let he=s.length/3,ie=b.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);R(ie[0]),R(ie[1]),R(ie[3]),R(ie[1]),R(ie[2]),R(ie[3])}function je(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function R(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Go[s.type]().fromJSON(s)),new i(n,e.options)}},fd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],d=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,d)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],d=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],h=e[r*3+2];return Math.abs(o-d)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-u),new fe(f,1-g),new fe(_,1-h)]:[new fe(o,1-c),new fe(d,1-u),new fe(p,1-g),new fe(m,1-h)]}};function pd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class i extends en{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=e/o,f=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<d;h++){let b=h*f-a;for(let S=0;S<l;S++){let q=S*u-r;g.push(q,-b,0),_.push(0,0,1),m.push(S/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<o;b++){let S=b+l*h,q=b+l*(h+1),A=b+1+l*(h+1),w=b+1+l*h;p.push(S,q,w),p.push(q,A,w)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zi=class i extends en{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],d=new P,u=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,h=(s+1)*(p-1)+g,b=(s+1)*p+g;a.push(_,m,b),a.push(m,h,b)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Fs=class extends hn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var ft=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Os=class extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xr=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yr=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function md(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zr=class extends ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bo,endingEnd:Bo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zo:r=e,o=2*t-n;break;case ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zo:a=e,c=2*n-t;break;case ko:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,q=p*m-p*_;for(let A=0;A!==o;++A)r[A]=h*a[d+A]+b*a[l+A]+S*a[c+A]+q*a[u+A];return r}},Jr=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),u=1-d;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*d;return r}},$r=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Tr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Tr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&md(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zt.prototype.ValueTypeName="";zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=Ir;var Bn=class extends zt{constructor(e,t,n){super(e,t,n)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=ps;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="color";var Qr=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="number";var jr=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)jt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Bs=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends zt{constructor(e,t,n){super(e,t,n)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=ps;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};ea.prototype.ValueTypeName="vector";var Zo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ta=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){let u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fh=new ta,ai=class{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},Jo=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends ai{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Zo.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:s});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let d=qn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(h){b();function b(){u.read().then(({done:S,value:q})=>{if(S)h.close();else{_+=q.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,C=d.length;w<C;w++){let I=d[w];I.onProgress&&I.onProgress(A)}h.enqueue(q),b()}},S=>{h.error(S)})}}});return new Response(m)}else throw new Jo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Zo.add(`file:${e}`,l);let d=qn[e];delete qn[e];for(let u=0,f=d.length;u<f;u++){let p=d[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let d=qn[e];if(d===void 0)throw this.manager.itemError(e),l;delete qn[e];for(let u=0,f=d.length;u<f;u++){let p=d[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ki=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ks=class extends ki{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fo=new Qe,_c=new P,xc=new P,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_c.setFromMatrixPosition(e.matrixWorld),t.position.copy(_c),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vc=new Qe,ls=new P,Oo=new P,$o=class extends na{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(ls),Oo.copy(n.position),Oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oo),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,n.coordinateSystem,n.reversedDepth)}},Hs=class extends ki{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $o}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vs=class extends Ms{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ko=class extends na{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hi=class extends ki{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Ko}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ia=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vl="\\[\\]\\.:\\/",gd=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",_d="[^"+vl.replace("\\.","")+"]",xd=/((?:WC+[\/:])*)/.source.replace("WC",yl),vd=/(WCOD+)?/.source.replace("WCOD",_d),yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Md=new RegExp("^"+xd+vd+yd+qd+"$"),Sd=["material","materials","bones","map"],Qo=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gd,"")}static parseTrackName(e){let t=Md.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Qo;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lm=new Float32Array(1);var Gs=class{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Oi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){let b=[];for(let S=0,q=h.length;S<q;S++){let A=h[S],w=new Qn;w.curves=A.curves,b.push(w)}return b}function n(h,b){let S=b.length,q=!1;for(let A=S-1,w=0;w<S;A=w++){let C=b[A],I=b[w],x=I.x-C.x,y=I.y-C.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(C=b[w],x=-x,I=b[A],y=-y),h.y<C.y||h.y>I.y)continue;if(h.y===C.y){if(h.x===C.x)return!0}else{let T=y*(h.x-C.x)-x*(h.y-C.y);if(T===0)return!0;if(T<0)continue;q=!q}}else{if(h.y!==C.y)continue;if(I.x<=h.x&&h.x<=C.x||C.x<=h.x&&h.x<=I.x)return!0}}return q}let s=Un.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new Qn,c.curves=o.curves,l.push(c),l;let d=!s(r[0].getPoints());d=e?!d:d;let u=[],f=[],p=[],g=0,_;f[g]=void 0,p[g]=[];for(let h=0,b=r.length;h<b;h++)o=r[h],_=o.getPoints(),a=s(_),a=e?!a:a,a?(!d&&f[g]&&g++,f[g]={s:new Qn,p:_},f[g].s.curves=o.curves,d&&g++,p[g]=[]):p[g].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let h=!1,b=0;for(let S=0,q=f.length;S<q;S++)u[S]=[];for(let S=0,q=f.length;S<q;S++){let A=p[S];for(let w=0;w<A.length;w++){let C=A[w],I=!0;for(let x=0;x<f.length;x++)n(C.p,f[x].p)&&(S!==x&&b++,I?(I=!1,u[x].push(C)):h=!0);I&&u[S].push(C)}}b>0&&h===!1&&(p=u)}let m;for(let h=0,b=f.length;h<b;h++){c=f[h].s,l.push(c),m=p[h];for(let S=0,q=m.length;S<q;S++)c.holes.push(m[S].h)}return l}};function ql(i,e,t,n){let s=bd(n);switch(t){case hl:return i*e;case ya:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case dl:return i*e*2/s.components*s.byteLength;case Ma:return i*e*2/s.components*s.byteLength;case ul:return i*e*3/s.components*s.byteLength;case Wt:return i*e*4/s.components*s.byteLength;case Sa:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(e,8)/4;case ba:case Ta:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $a:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bd(i){switch(i){case nn:case al:return{byteLength:1,components:1};case Vi:case ol:case Gi:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case Hn:case _a:case sn:return{byteLength:4,components:1};case ll:case cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Fh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Td(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,kd=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
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
#endif`,Tf=`struct PhysicalMaterial {
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
}`,wf=`
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ff=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Up=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,Yp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,e1=`#define TOON
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
}`,t1=`uniform float size;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,a1=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:wd,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Id,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:Bd,iridescence_fragment:zd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:Yd,color_pars_vertex:Zd,color_vertex:Jd,common:$d,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:jd,displacementmap_vertex:ef,emissivemap_fragment:tf,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:af,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:yf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:xf,lights_pars_begin:vf,lights_toon_fragment:qf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:bf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Tf,lights_fragment_begin:wf,lights_fragment_maps:Af,lights_fragment_end:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:Uf,map_particle_fragment:Nf,map_particle_pars_fragment:Ff,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphinstance_vertex:zf,morphcolor_vertex:kf,morphnormal_vertex:Hf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Gf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:Yf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:rp,dithering_pars_fragment:ap,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:hp,shadowmap_vertex:up,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:xp,tonemapping_fragment:vp,tonemapping_pars_fragment:yp,transmission_fragment:qp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:wp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Ip,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:zp,meshbasic_vert:kp,meshbasic_frag:Hp,meshlambert_vert:Vp,meshlambert_frag:Gp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:Yp,meshnormal_frag:Zp,meshphong_vert:Jp,meshphong_frag:$p,meshphysical_vert:Kp,meshphysical_frag:Qp,meshtoon_vert:jp,meshtoon_frag:e1,points_vert:t1,points_frag:n1,shadow_vert:i1,shadow_frag:s1,sprite_vert:r1,sprite_frag:a1},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},fn={basic:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:wt([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:wt([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:wt([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:wt([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:wt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};fn.physical={uniforms:wt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var ja={r:0,b:0,g:0},ui=new Gt,o1=new Qe;function l1(i,e,t,n,s,r,a){let o=new Ye(0),c=r===!0?0:1,l,d,u=null,f=0,p=null;function g(S){let q=S.isScene===!0?S.background:null;return q&&q.isTexture&&(q=(S.backgroundBlurriness>0?t:e).get(q)),q}function _(S){let q=!1,A=g(S);A===null?h(o,c):A&&A.isColor&&(h(A,1),q=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||q)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,q){let A=g(q);A&&(A.isCubeTexture||A.mapping===Ws)?(d===void 0&&(d=new We(new gt(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:hi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ui.copy(q.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=q.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(ui)),d.material.toneMapped=$e.getTransfer(A.colorSpace)!==nt,(u!==A||f!==A.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new We(new Dt(2,2),new tn({name:"BackgroundMaterial",uniforms:hi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,l.material.toneMapped=$e.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,q){S.getRGB(ja,_l(i)),n.buffers.color.setClear(ja.r,ja.g,ja.b,q,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,q=1){o.set(S),c=q,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:_,addToRenderList:m,dispose:b}}function c1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,T,U,k,L){let B=!1,z=u(k,U,T);r!==z&&(r=z,l(r.object)),B=p(y,k,U,L),B&&g(y,k,U,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,q(y,T,U,k),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function u(y,T,U){let k=U.wireframe===!0,L=n[y.id];L===void 0&&(L={},n[y.id]=L);let B=L[T.id];B===void 0&&(B={},L[T.id]=B);let z=B[k];return z===void 0&&(z=f(c()),B[k]=z),z}function f(y){let T=[],U=[],k=[];for(let L=0;L<t;L++)T[L]=0,U[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,T,U,k){let L=r.attributes,B=T.attributes,z=0,Z=U.getAttributes();for(let H in Z)if(Z[H].location>=0){let ce=L[H],ve=B[H];if(ve===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(y,T,U,k){let L={},B=T.attributes,z=0,Z=U.getAttributes();for(let H in Z)if(Z[H].location>=0){let ce=B[H];ce===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));let ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),L[H]=ve,z++}r.attributes=L,r.attributesNum=z,r.index=k}function _(){let y=r.newAttributes;for(let T=0,U=y.length;T<U;T++)y[T]=0}function m(y){h(y,0)}function h(y,T){let U=r.newAttributes,k=r.enabledAttributes,L=r.attributeDivisors;U[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),L[y]!==T&&(i.vertexAttribDivisor(y,T),L[y]=T)}function b(){let y=r.newAttributes,T=r.enabledAttributes;for(let U=0,k=T.length;U<k;U++)T[U]!==y[U]&&(i.disableVertexAttribArray(U),T[U]=0)}function S(y,T,U,k,L,B,z){z===!0?i.vertexAttribIPointer(y,T,U,L,B):i.vertexAttribPointer(y,T,U,k,L,B)}function q(y,T,U,k){_();let L=k.attributes,B=U.getAttributes(),z=T.defaultAttributeValues;for(let Z in B){let H=B[Z];if(H.location>=0){let ne=L[Z];if(ne===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){let ce=ne.normalized,ve=ne.itemSize,Se=e.get(ne);if(Se===void 0)continue;let Fe=Se.buffer,Le=Se.type,Be=Se.bytesPerElement,Y=Le===i.INT||Le===i.UNSIGNED_INT||ne.gpuType===_a;if(ne.isInterleavedBufferAttribute){let j=ne.data,xe=j.stride,be=ne.offset;if(j.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)h(H.location+ye,j.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let ye=0;ye<H.locationSize;ye++)S(H.location+ye,ve/H.locationSize,Le,ce,xe*Be,(be+ve/H.locationSize*ye)*Be,Y)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)h(H.location+j,ne.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let j=0;j<H.locationSize;j++)S(H.location+j,ve/H.locationSize,Le,ce,ve*Be,ve/H.locationSize*j*Be,Y)}}else if(z!==void 0){let ce=z[Z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(H.location,ce);break;case 3:i.vertexAttrib3fv(H.location,ce);break;case 4:i.vertexAttrib4fv(H.location,ce);break;default:i.vertexAttrib1fv(H.location,ce)}}}}b()}function A(){I();for(let y in n){let T=n[y];for(let U in T){let k=T[U];for(let L in k)d(k[L].object),delete k[L];delete T[U]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let U in T){let k=T[U];for(let L in k)d(k[L].object),delete k[L];delete T[U]}delete n[y.id]}function C(y){for(let T in n){let U=n[T];if(U[y.id]===void 0)continue;let k=U[y.id];for(let L in k)d(k[L].object),delete k[L];delete U[y.id]}}function I(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function h1(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,n,1)}function c(l,d,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function u1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Wt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let I=C===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==sn&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),q=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:q,vertexTextures:A,maxSamples:w}}function d1(i){let e=this,t=null,n=0,s=!1,r=!1,a=new on,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{let b=r?0:n,S=b*4,q=h.clippingState||null;c.value=q,q=d(g,f,S,p);for(let A=0;A!==S;++A)q[A]=t[A];h.clippingState=q,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let h=p+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,q=p;S!==_;++S,q+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(m,q),m[q+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function f1(i){let e=new WeakMap;function t(a,o){return o===pa?a.mapping=oi:o===ma&&(a.mapping=li),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pa||o===ma)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Fr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ji=4,ph=[.125,.215,.35,.446,.526,.582],pi=20,Ml=new Vs,mh=new Ye,Sl=null,bl=0,El=0,Tl=!1,fi=(1+Math.sqrt(5))/2,Zi=1/fi,gh=[new P(-fi,Zi,0),new P(fi,Zi,0),new P(-Zi,0,fi),new P(Zi,0,fi),new P(0,fi,-Zi),new P(0,fi,Zi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],p1=new P,Ki=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=p1}=r;Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,bl,El),this._renderer.xr.enabled=Tl,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Gi,format:Wt,colorSpace:ti,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m1(r)),this._blurMaterial=g1(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s,r){let c=new Mt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(mh),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new ni({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),m=new We(new gt,_),h=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,h=!0):(_.color.copy(mh),h=!0);for(let S=0;S<6;S++){let q=S%3;q===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[S],r.y,r.z)):q===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[S]));let A=this._cubeSize;eo(s,q*A,S>2?A:0,A,A),u.setRenderTarget(s),h&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===oi||e.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gh[(s-r-1)%gh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new We(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*pi-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);let h=[],b=0;for(let C=0;C<pi;++C){let I=C/_,x=Math.exp(-I*I/2);h.push(x),C===0?b+=x:C<m&&(b+=2*x)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let q=this._sizeLods[s],A=3*q*(s>S-Ji?s-S+Ji:0),w=4*(this._cubeSize-q);eo(t,A,w,3*q,2*q),c.setRenderTarget(t),c.render(u,Ml)}};function m1(i){let e=[],t=[],n=[],s=i,r=i-Ji+1+ph.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ji?c=ph[a-i+Ji-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,_=3,m=2,h=1,b=new Float32Array(_*g*p),S=new Float32Array(m*g*p),q=new Float32Array(h*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,I=w>2?0:-1,x=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(x,_*g*w),S.set(f,m*g*w);let y=[w,w,w,w,w,w];q.set(y,h*g*w)}let A=new en;A.setAttribute("position",new Pt(b,_)),A.setAttribute("uv",new Pt(S,m)),A.setAttribute("faceIndex",new Pt(q,h)),e.push(A),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){let n=new ln(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function g1(i,e,t){let n=new Float32Array(pi),s=new P(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function xh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function vh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function _1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===pa||c===ma,d=c===oi||c===li;if(l||d){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ki(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new Ki(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function x1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function v1(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let b=p.array;_=p.version;for(let S=0,q=b.length;S<q;S+=3){let A=b[S+0],w=b[S+1],C=b[S+2];f.push(A,w,w,C,C,A)}}else if(g!==void 0){let b=g.array;_=g.version;for(let S=0,q=b.length/3-1;S<q;S+=3){let A=S+0,w=S+1,C=S+2;f.push(A,w,w,C,C,A)}}else return;let m=new(gl(f)?qs:ys)(f,1);m.version=_;let h=r.get(u);h&&e.remove(h),r.set(u,m)}function d(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function y1(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,n,1)}function u(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b]*_[b];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function q1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function M1(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==u){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let q=o.attributes.position.count*S,A=1;q>e.maxTextureSize&&(A=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);let w=new Float32Array(q*A*4*u),C=new xs(w,q,A,u);C.type=sn,C.needsUpdate=!0;let I=S*4;for(let y=0;y<u;y++){let T=m[y],U=h[y],k=b[y],L=q*A*4*y;for(let B=0;B<T.count;B++){let z=B*I;p===!0&&(s.fromBufferAttribute(T,B),w[L+z+0]=s.x,w[L+z+1]=s.y,w[L+z+2]=s.z,w[L+z+3]=0),g===!0&&(s.fromBufferAttribute(U,B),w[L+z+4]=s.x,w[L+z+5]=s.y,w[L+z+6]=s.z,w[L+z+7]=0),_===!0&&(s.fromBufferAttribute(k,B),w[L+z+8]=s.x,w[L+z+9]=s.y,w[L+z+10]=s.z,w[L+z+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new fe(q,A)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function S1(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Oh=new bt,yh=new Ts(1,1),Bh=new xs,zh=new Dr,kh=new Ss,qh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),Eh=new Float32Array(4);function Qi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function io(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function b1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function E1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function T1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function w1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function A1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),vt(t,n)}}function R1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),vt(t,n)}}function C1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),vt(t,n)}}function I1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function L1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function D1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function U1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function N1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function F1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function O1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function B1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=fl,r=yh):r=Oh,t.setTexture2D(e||r,s)}function z1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zh,s)}function k1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kh,s)}function H1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bh,s)}function V1(i){switch(i){case 5126:return b1;case 35664:return E1;case 35665:return T1;case 35666:return w1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return I1;case 35667:case 35671:return P1;case 35668:case 35672:return L1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return N1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return H1}}function G1(i,e){i.uniform1fv(this.addr,e)}function W1(i,e){let t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function X1(i,e){let t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Y1(i,e){let t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Z1(i,e){let t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J1(i,e){let t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $1(i,e){let t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function K1(i,e){i.uniform1iv(this.addr,e)}function Q1(i,e){i.uniform2iv(this.addr,e)}function j1(i,e){i.uniform3iv(this.addr,e)}function e0(i,e){i.uniform4iv(this.addr,e)}function t0(i,e){i.uniform1uiv(this.addr,e)}function n0(i,e){i.uniform2uiv(this.addr,e)}function i0(i,e){i.uniform3uiv(this.addr,e)}function s0(i,e){i.uniform4uiv(this.addr,e)}function r0(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Oh,r[a])}function a0(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zh,r[a])}function o0(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kh,r[a])}function l0(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bh,r[a])}function c0(i){switch(i){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return Y1;case 35674:return Z1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return j1;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}var Al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}},Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}},Cl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;function Th(i,e){i.seq.push(e),i.map[e.id]=e}function h0(i,e,t){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),a=wl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Th(t,l===void 0?new Al(o,i,e):new Rl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Cl(o),Th(t,u)),t=u}}}var $i=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);h0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u0=37297,d0=0;function f0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ah=new Ve;function p0(i){$e._getMatrix(Ah,$e.workingColorSpace,i);let e=`mat3( ${Ah.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ms:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f0(i.getShaderSource(e),o)}else return r}function m0(i,e){let t=p0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function g0(i,e){let t;switch(e){case Hc:t="Linear";break;case Vc:t="Reinhard";break;case Gc:t="Cineon";break;case fa:t="ACESFilmic";break;case Xc:t="AgX";break;case Yc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var to=new P;function _0(){$e.getLuminanceCoefficients(to);let i=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function v0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ks(i){return i!==""}function Ch(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(i){return i.replace(q0,S0)}var M0=new Map;function S0(i,e){let t=Xe[e];if(t===void 0){let n=M0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(b0,E0)}function E0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function T0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function w0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case li:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case zc:e="ENVMAP_BLENDING_MIX";break;case kc:e="ENVMAP_BLENDING_ADD";break}return e}function C0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=T0(t),l=w0(t),d=A0(t),u=R0(t),f=C0(t),p=x0(t),g=v0(r),_=s.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),h.length>0&&(h+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),h=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Xe.tonemapping_pars_fragment:"",t.toneMapping!==En?g0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Il(a),a=Ch(a,t),a=Ih(a,t),o=Il(o),o=Ch(o,t),o=Ih(o,t),a=Ph(a),o=Ph(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=b+m+a,q=b+h+o,A=wh(s,s.VERTEX_SHADER,S),w=wh(s,s.FRAGMENT_SHADER,q);s.attachShader(_,A),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(T){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(w)||"",B=U.trim(),z=k.trim(),Z=L.trim(),H=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{let ce=Rh(s,A,"vertex"),ve=Rh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+ce+`
`+ve)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||Z==="")&&(ne=!1);ne&&(T.diagnostics={runnable:H,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(A),s.deleteShader(w),I=new $i(s,_),x=y0(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,u0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var P0=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ll(e),t.set(e,n)),n}},Ll=class{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}};function L0(i,e,t,n,s,r,a){let o=new vs,c=new Pl,l=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,T,U,k){let L=U.fog,B=k.geometry,z=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),H=Z&&Z.mapping===Ws?Z.image.height:null,ne=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=ce!==void 0?ce.length:0,Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let Fe,Le,Be,Y;if(ne){let et=fn[ne];Fe=et.vertexShader,Le=et.fragmentShader}else Fe=x.vertexShader,Le=x.fragmentShader,c.update(x),Be=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),be=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,ze=!!x.map,je=!!x.matcap,R=!!Z,ee=!!x.aoMap,K=!!x.lightMap,$=!!x.bumpMap,J=!!x.normalMap,he=!!x.displacementMap,ie=!!x.emissiveMap,ue=!!x.metalnessMap,ke=!!x.roughnessMap,Oe=x.anisotropy>0,E=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,W=x.sheen>0,te=x.transmission>0,X=Oe&&!!x.anisotropyMap,Re=E&&!!x.clearcoatMap,le=E&&!!x.clearcoatNormalMap,Te=E&&!!x.clearcoatRoughnessMap,we=O&&!!x.iridescenceMap,se=O&&!!x.iridescenceThicknessMap,_e=W&&!!x.sheenColorMap,Ue=W&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,me=!!x.specularColorMap,Ge=!!x.specularIntensityMap,D=te&&!!x.transmissionMap,oe=te&&!!x.thicknessMap,de=!!x.gradientMap,Me=!!x.alphaMap,re=x.alphaTest>0,Q=!!x.alphaHash,Ae=!!x.extensions,He=En;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=i.toneMapping);let rt={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:Le,defines:x.defines,customVertexShaderID:Be,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:be,instancingColor:be&&k.instanceColor!==null,instancingMorph:be&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ti,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:je,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:K,bumpMap:$,normalMap:J,displacementMap:f&&he,emissiveMap:ie,normalMapObjectSpace:J&&x.normalMapType===Kc,normalMapTangentSpace:J&&x.normalMapType===Qa,metalnessMap:ue,roughnessMap:ke,anisotropy:Oe,anisotropyMap:X,clearcoat:E,clearcoatMap:Re,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:v,iridescence:O,iridescenceMap:we,iridescenceThicknessMap:se,sheen:W,sheenColorMap:_e,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:me,specularIntensityMap:Ge,transmission:te,transmissionMap:D,thicknessMap:oe,gradientMap:de,opaque:x.transparent===!1&&x.blending===jn&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:re,alphaHash:Q,combine:x.combine,mapUv:ze&&_(x.map.channel),aoMapUv:ee&&_(x.aoMap.channel),lightMapUv:K&&_(x.lightMap.channel),bumpMapUv:$&&_(x.bumpMap.channel),normalMapUv:J&&_(x.normalMap.channel),displacementMapUv:he&&_(x.displacementMap.channel),emissiveMapUv:ie&&_(x.emissiveMap.channel),metalnessMapUv:ue&&_(x.metalnessMap.channel),roughnessMapUv:ke&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:Re&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(x.sheenRoughnessMap.channel),specularMapUv:Ce&&_(x.specularMap.channel),specularColorMapUv:me&&_(x.specularColorMap.channel),specularIntensityMapUv:Ge&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:oe&&_(x.thicknessMap.channel),alphaMapUv:Me&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(J||Oe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(ze||Me),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:ie&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===_t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&x.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function h(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)y.push(T),y.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(b(y,x),S(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function q(x){let y=g[x.type],T;if(y){let U=fn[y];T=lh.clone(U.uniforms)}else T=x.uniforms;return T}function A(x,y){let T;for(let U=0,k=d.length;U<k;U++){let L=d[U];if(L.cacheKey===y){T=L,++T.usedTimes;break}}return T===void 0&&(T=new I0(i,y,x,r),d.push(T)),T}function w(x){if(--x.usedTimes===0){let y=d.indexOf(x);d[y]=d[d.length-1],d.pop(),x.destroy()}}function C(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:q,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:d,dispose:I}}function D0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function U0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=_,h.group=m),e++,h}function o(u,f,p,g,_,m){let h=a(u,f,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function c(u,f,p,g,_,m){let h=a(u,f,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function l(u,f){t.length>1&&t.sort(u||U0),n.length>1&&n.sort(f||Dh),s.length>1&&s.sort(f||Dh)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function N0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function F0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function O0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var B0=0;function z0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k0(i){let e=new F0,t=O0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Qe,a=new Qe;function o(l){let d=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,b=0,S=0,q=0,A=0,w=0,C=0;l.sort(z0);for(let x=0,y=l.length;x<y;x++){let T=l[x],U=T.color,k=T.intensity,L=T.distance,B=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=U.r*k,u+=U.g*k,f+=U.b*k;else if(T.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(T.sh.coefficients[z],k);C++}else if(T.isDirectionalLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z=T.shadow,H=t.get(T);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=T.shadow.matrix,b++}n.directional[p]=z,p++}else if(T.isSpotLight){let z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(U).multiplyScalar(k),z.distance=L,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,n.spot[_]=z;let Z=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,Z.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,T.castShadow){let H=t.get(T);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=B,q++}_++}else if(T.isRectAreaLight){let z=e.get(T);z.color.copy(U).multiplyScalar(k),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=z,m++}else if(T.isPointLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){let Z=T.shadow,H=t.get(T);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=T.shadow.matrix,S++}n.point[g]=z,g++}else if(T.isHemisphereLight){let z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(k),z.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[h]=z,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==q||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=q,n.spotShadowMap.length=q,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=q+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=q,I.numSpotMaps=A,I.numLightProbes=C,n.version=B0++)}function c(l,d){let u=0,f=0,p=0,g=0,_=0,m=d.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){let S=l[h];if(S.isDirectionalLight){let q=n.directional[u];q.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),q.direction.sub(s),q.direction.transformDirection(m),u++}else if(S.isSpotLight){let q=n.spot[p];q.position.setFromMatrixPosition(S.matrixWorld),q.position.applyMatrix4(m),q.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),q.direction.sub(s),q.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let q=n.rectArea[g];q.position.setFromMatrixPosition(S.matrixWorld),q.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),q.halfWidth.set(S.width*.5,0,0),q.halfHeight.set(0,S.height*.5,0),q.halfWidth.applyMatrix4(a),q.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let q=n.point[f];q.position.setFromMatrixPosition(S.matrixWorld),q.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let q=n.hemi[_];q.direction.setFromMatrixPosition(S.matrixWorld),q.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Nh(i){let e=new k0(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function H0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nh(i),e.set(s,[o])):r>=a.length?(o=new Nh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
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
}`;function W0(i,e,t){let n=new Ni,s=new fe,r=new fe,a=new tt,o=new Xr({depthPacking:$c}),c=new Yr,l={},d=t.maxTextureSize,u={[Kt]:_t,[_t]:Kt,[dn]:dn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:V0,fragmentShader:G0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let h=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let x=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=h!==un&&this.type===un,L=h===un&&this.type!==un;for(let B=0,z=w.length;B<z;B++){let Z=w[B],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ne=H.getFrameExtents();if(s.multiply(ne),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,H.mapSize.y=r.y)),H.map===null||k===!0||L===!0){let ve=this.type!==un?{minFilter:Lt,magFilter:Lt}:{};H.map!==null&&H.map.dispose(),H.map=new ln(s.x,s.y,ve),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ce=H.getViewportCount();for(let ve=0;ve<ce;ve++){let Se=H.getViewport(ve);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),U.viewport(a),H.updateMatrices(Z,ve),n=H.getFrustum(),q(C,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===un&&b(H,I),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,T)};function b(w,C){let I=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ln(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,I,p,_,null)}function S(w,C,I,x){let y=null,T=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)y=T;else if(y=I.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=y.uuid,k=C.uuid,L=l[U];L===void 0&&(L={},l[U]=L);let B=L[k];B===void 0&&(B=y.clone(),L[k]=B,C.addEventListener("dispose",A)),y=B}if(y.visible=C.visible,y.wireframe=C.wireframe,x===un?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=I}return y}function q(w,C,I,x,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let k=e.update(w),L=w.material;if(Array.isArray(L)){let B=k.groups;for(let z=0,Z=B.length;z<Z;z++){let H=B[z],ne=L[H.materialIndex];if(ne&&ne.visible){let ce=S(w,ne,x,y);w.onBeforeShadow(i,w,C,I,k,ce,H),i.renderBufferDirect(I,null,k,ce,w,H),w.onAfterShadow(i,w,C,I,k,ce,H)}}}else if(L.visible){let B=S(w,L,x,y);w.onBeforeShadow(i,w,C,I,k,B,null),i.renderBufferDirect(I,null,k,B,w,null),w.onAfterShadow(i,w,C,I,k,B,null)}}let U=w.children;for(let k=0,L=U.length;k<L;k++)q(U[k],C,I,x,y)}function A(w){w.target.removeEventListener("dispose",A);for(let I in l){let x=l[I],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var X0={[ra]:aa,[oa]:ha,[la]:ua,[ei]:ca,[aa]:ra,[ha]:oa,[ua]:la,[ca]:ei};function Y0(i,e){function t(){let D=!1,oe=new tt,de=null,Me=new tt(0,0,0,0);return{setMask:function(re){de!==re&&!D&&(i.colorMask(re,re,re,re),de=re)},setLocked:function(re){D=re},setClear:function(re,Q,Ae,He,rt){rt===!0&&(re*=He,Q*=He,Ae*=He),oe.set(re,Q,Ae,He),Me.equals(oe)===!1&&(i.clearColor(re,Q,Ae,He),Me.copy(oe))},reset:function(){D=!1,de=null,Me.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,de=null,Me=null,re=null;return{setReversed:function(Q){if(oe!==Q){let Ae=e.get("EXT_clip_control");Q?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;let He=re;re=null,this.setClear(He)}},getReversed:function(){return oe},setTest:function(Q){Q?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Q){de!==Q&&!D&&(i.depthMask(Q),de=Q)},setFunc:function(Q){if(oe&&(Q=X0[Q]),Me!==Q){switch(Q){case ra:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case ei:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Q}},setLocked:function(Q){D=Q},setClear:function(Q){re!==Q&&(oe&&(Q=1-Q),i.clearDepth(Q),re=Q)},reset:function(){D=!1,de=null,Me=null,re=null,oe=!1}}}function s(){let D=!1,oe=null,de=null,Me=null,re=null,Q=null,Ae=null,He=null,rt=null;return{setTest:function(et){D||(et?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(et){oe!==et&&!D&&(i.stencilMask(et),oe=et)},setFunc:function(et,mn,an){(de!==et||Me!==mn||re!==an)&&(i.stencilFunc(et,mn,an),de=et,Me=mn,re=an)},setOp:function(et,mn,an){(Q!==et||Ae!==mn||He!==an)&&(i.stencilOp(et,mn,an),Q=et,Ae=mn,He=an)},setLocked:function(et){D=et},setClear:function(et){rt!==et&&(i.clearStencil(et),rt=et)},reset:function(){D=!1,oe=null,de=null,Me=null,re=null,Q=null,Ae=null,He=null,rt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,b=null,S=null,q=null,A=null,w=null,C=new Ye(0,0,0),I=0,x=!1,y=null,T=null,U=null,k=null,L=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Z>=2);let ne=null,ce={},ve=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Fe=new tt().fromArray(ve),Le=new tt().fromArray(Se);function Be(D,oe,de,Me){let re=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<de;Ae++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(oe+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Q}let Y={};Y[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ei),$(!1),J(jo),j(i.CULL_FACE),ee(bn);function j(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function xe(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function be(D,oe){return u[D]!==oe?(i.bindFramebuffer(D,oe),u[D]=oe,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ye(D,oe){let de=p,Me=!1;if(D){de=f.get(oe),de===void 0&&(de=[],f.set(oe,de));let re=D.textures;if(de.length!==re.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ae=re.length;Q<Ae;Q++)de[Q]=i.COLOR_ATTACHMENT0+Q;de.length=re.length,Me=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Me=!0);Me&&i.drawBuffers(de)}function ze(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let je={[Nn]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[bc]:i.FUNC_REVERSE_SUBTRACT};je[Ec]=i.MIN,je[Tc]=i.MAX;let R={[wc]:i.ZERO,[Ac]:i.ONE,[Rc]:i.SRC_COLOR,[wr]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[Ar]:i.ONE_MINUS_SRC_ALPHA,[Dc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Fc]:i.ONE_MINUS_CONSTANT_COLOR,[Oc]:i.CONSTANT_ALPHA,[Bc]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(D,oe,de,Me,re,Q,Ae,He,rt,et){if(D===bn){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),D!==Mc){if(D!==m||et!==x){if((h!==Nn||q!==Nn)&&(i.blendEquation(i.FUNC_ADD),h=Nn,q=Nn),et)switch(D){case jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,A=null,w=null,C.set(0,0,0),I=0,m=D,x=et}return}re=re||oe,Q=Q||de,Ae=Ae||Me,(oe!==h||re!==q)&&(i.blendEquationSeparate(je[oe],je[re]),h=oe,q=re),(de!==b||Me!==S||Q!==A||Ae!==w)&&(i.blendFuncSeparate(R[de],R[Me],R[Q],R[Ae]),b=de,S=Me,A=Q,w=Ae),(He.equals(C)===!1||rt!==I)&&(i.blendColor(He.r,He.g,He.b,rt),C.copy(He),I=rt),m=D,x=!1}function K(D,oe){D.side===dn?xe(i.CULL_FACE):j(i.CULL_FACE);let de=D.side===_t;oe&&(de=!de),$(de),D.blending===jn&&D.transparent===!1?ee(bn):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function J(D){D!==yc?(j(i.CULL_FACE),D!==T&&(D===jo?i.cullFace(i.BACK):D===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),T=D}function he(D){D!==U&&(z&&i.lineWidth(D),U=D)}function ie(D,oe,de){D?(j(i.POLYGON_OFFSET_FILL),(k!==oe||L!==de)&&(i.polygonOffset(oe,de),k=oe,L=de)):xe(i.POLYGON_OFFSET_FILL)}function ue(D){D?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ke(D){D===void 0&&(D=i.TEXTURE0+B-1),ne!==D&&(i.activeTexture(D),ne=D)}function Oe(D,oe,de){de===void 0&&(ne===null?de=i.TEXTURE0+B-1:de=ne);let Me=ce[de];Me===void 0&&(Me={type:void 0,texture:void 0},ce[de]=Me),(Me.type!==D||Me.texture!==oe)&&(ne!==de&&(i.activeTexture(de),ne=de),i.bindTexture(D,oe||Y[D]),Me.type=D,Me.texture=oe)}function E(){let D=ce[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){Fe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Fe.copy(D))}function Ue(D){Le.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Le.copy(D))}function Ce(D,oe){let de=l.get(oe);de===void 0&&(de=new WeakMap,l.set(oe,de));let Me=de.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(oe,D.name),de.set(D,Me))}function me(D,oe){let Me=l.get(oe).get(D);c.get(oe)!==Me&&(i.uniformBlockBinding(oe,Me,D.__bindingPointIndex),c.set(oe,Me))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,ce={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,b=null,S=null,q=null,A=null,w=null,C=new Ye(0,0,0),I=0,x=!1,y=null,T=null,U=null,k=null,L=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:xe,bindFramebuffer:be,drawBuffers:ye,useProgram:ze,setBlending:ee,setMaterial:K,setFlipSided:$,setCullFace:J,setLineWidth:he,setPolygonOffset:ie,setScissorTest:ue,activeTexture:ke,bindTexture:Oe,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:we,texImage3D:se,updateUBOMapping:Ce,uniformBlockBinding:me,texStorage2D:le,texStorage3D:Te,texSubImage2D:W,texSubImage3D:te,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:_e,viewport:Ue,reset:Ge}}function Z0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):_s("canvas")}function _(E,v,O){let W=1,te=Oe(E);if((te.width>O||te.height>O)&&(W=O/Math.max(te.width,te.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor(W*te.width),Re=Math.floor(W*te.height);u===void 0&&(u=g(X,Re));let le=v?g(X,Re):u;return le.width=X,le.height=Re,le.getContext("2d").drawImage(E,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+X+"x"+Re+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,O,W,te=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){let Re=te?ms:$e.getTransfer(W);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Re===nt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function q(E,v){let O;return E?v===null||v===Hn||v===Wi?O=i.DEPTH24_STENCIL8:v===sn?O=i.DEPTH32F_STENCIL8:v===Vi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===Wi?O=i.DEPTH_COMPONENT24:v===sn?O=i.DEPTH_COMPONENT32F:v===Vi&&(O=i.DEPTH_COMPONENT16),O}function A(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){let v=E.target;v.removeEventListener("dispose",w),I(v),v.isVideoTexture&&d.delete(v)}function C(E){let v=E.target;v.removeEventListener("dispose",C),y(v)}function I(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,W=f.get(O);if(W){let te=W[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&x(E),Object.keys(W).length===0&&f.delete(O)}n.remove(E)}function x(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,W=f.get(O);delete W[v.__cacheKey],a.memory.textures--}function y(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let te=0;te<v.__webglFramebuffer[W].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[W][te]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let W=0,te=O.length;W<te;W++){let X=n.get(O[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(E)}let T=0;function U(){T=0}function k(){let E=T;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),T+=1,E}function L(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function B(E,v){let O=n.get(E);if(E.isVideoTexture&&ue(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function z(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Y(O,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Z(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Y(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function H(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){j(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ne={[Rr]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},ce={[Lt]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},ve={[Qc]:i.NEVER,[sh]:i.ALWAYS,[jc]:i.LESS,[fl]:i.LEQUAL,[eh]:i.EQUAL,[ih]:i.GEQUAL,[th]:i.GREATER,[nh]:i.NOTEQUAL};function Se(E,v){if(v.type===sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===ga||v.magFilter===Xs||v.magFilter===kn||v.minFilter===Qt||v.minFilter===ga||v.minFilter===Xs||v.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ne[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ce[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==Xs&&v.minFilter!==kn||v.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Fe(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));let W=v.source,te=f.get(W);te===void 0&&(te={},f.set(W,te));let X=L(v);if(X!==E.__cacheKey){te[X]===void 0&&(te[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[X].usedTimes++;let Re=te[E.__cacheKey];Re!==void 0&&(te[E.__cacheKey].usedTimes--,Re.usedTimes===0&&x(v)),E.__cacheKey=X,E.__webglTexture=te[X].texture}return O}function Le(E,v,O){return Math.floor(Math.floor(E/O)/v)}function Be(E,v,O,W){let X=E.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,W,v.data);else{X.sort((se,_e)=>se.start-_e.start);let Re=0;for(let se=1;se<X.length;se++){let _e=X[Re],Ue=X[se],Ce=_e.start+_e.count,me=Le(Ue.start,v.width,4),Ge=Le(_e.start,v.width,4);Ue.start<=Ce+1&&me===Ge&&Le(Ue.start+Ue.count-1,v.width,4)===me?_e.count=Math.max(_e.count,Ue.start+Ue.count-_e.start):(++Re,X[Re]=Ue)}X.length=Re+1;let le=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let se=0,_e=X.length;se<_e;se++){let Ue=X[se],Ce=Math.floor(Ue.start/4),me=Math.ceil(Ue.count/4),Ge=Ce%v.width,D=Math.floor(Ce/v.width),oe=me,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ge,D,oe,de,O,W,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Y(E,v,O){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let te=Fe(E,v),X=v.source;t.bindTexture(W,E.__webglTexture,i.TEXTURE0+O);let Re=n.get(X);if(X.version!==Re.__version||te===!0){t.activeTexture(i.TEXTURE0+O);let le=$e.getPrimaries($e.workingColorSpace),Te=v.colorSpace===Tn?null:$e.getPrimaries(v.colorSpace),we=v.colorSpace===Tn||le===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=_(v.image,!1,s.maxTextureSize);se=ke(v,se);let _e=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type),Ce=S(v.internalFormat,_e,Ue,v.colorSpace,v.isVideoTexture);Se(W,v);let me,Ge=v.mipmaps,D=v.isVideoTexture!==!0,oe=Re.__version===void 0||te===!0,de=X.dataReady,Me=A(v,se);if(v.isDepthTexture)Ce=q(v.format===Xi,v.type),oe&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ce,se.width,se.height,0,_e,Ue,null));else if(v.isDataTexture)if(Ge.length>0){D&&oe&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,Ge[0].width,Ge[0].height);for(let re=0,Q=Ge.length;re<Q;re++)me=Ge[re],D?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,_e,Ue,me.data):t.texImage2D(i.TEXTURE_2D,re,Ce,me.width,me.height,0,_e,Ue,me.data);v.generateMipmaps=!1}else D?(oe&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,se.width,se.height),de&&Be(v,se,_e,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ce,se.width,se.height,0,_e,Ue,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,Ge[0].width,Ge[0].height,se.depth);for(let re=0,Q=Ge.length;re<Q;re++)if(me=Ge[re],v.format!==Wt)if(_e!==null)if(D){if(de)if(v.layerUpdates.size>0){let Ae=ql(me.width,me.height,v.format,v.type);for(let He of v.layerUpdates){let rt=me.data.subarray(He*Ae/me.data.BYTES_PER_ELEMENT,(He+1)*Ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,He,me.width,me.height,1,_e,rt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,_e,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ce,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,_e,Ue,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ce,me.width,me.height,se.depth,0,_e,Ue,me.data)}else{D&&oe&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,Ge[0].width,Ge[0].height);for(let re=0,Q=Ge.length;re<Q;re++)me=Ge[re],v.format!==Wt?_e!==null?D?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,_e,Ue,me.data):t.texImage2D(i.TEXTURE_2D,re,Ce,me.width,me.height,0,_e,Ue,me.data)}else if(v.isDataArrayTexture)if(D){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,se.width,se.height,se.depth),de)if(v.layerUpdates.size>0){let re=ql(se.width,se.height,v.format,v.type);for(let Q of v.layerUpdates){let Ae=se.data.subarray(Q*re/se.data.BYTES_PER_ELEMENT,(Q+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,_e,Ue,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ue,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,_e,Ue,se.data);else if(v.isData3DTexture)D?(oe&&t.texStorage3D(i.TEXTURE_3D,Me,Ce,se.width,se.height,se.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ue,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,_e,Ue,se.data);else if(v.isFramebufferTexture){if(oe)if(D)t.texStorage2D(i.TEXTURE_2D,Me,Ce,se.width,se.height);else{let re=se.width,Q=se.height;for(let Ae=0;Ae<Me;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ce,re,Q,0,_e,Ue,null),re>>=1,Q>>=1}}else if(Ge.length>0){if(D&&oe){let re=Oe(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ce,re.width,re.height)}for(let re=0,Q=Ge.length;re<Q;re++)me=Ge[re],D?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,_e,Ue,me):t.texImage2D(i.TEXTURE_2D,re,Ce,_e,Ue,me);v.generateMipmaps=!1}else if(D){if(oe){let re=Oe(se);t.texStorage2D(i.TEXTURE_2D,Me,Ce,re.width,re.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ue,se)}else t.texImage2D(i.TEXTURE_2D,0,Ce,_e,Ue,se);m(v)&&h(W),Re.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function j(E,v,O){if(v.image.length!==6)return;let W=Fe(E,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let X=n.get(te);if(te.version!==X.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let Re=$e.getPrimaries($e.workingColorSpace),le=v.colorSpace===Tn?null:$e.getPrimaries(v.colorSpace),Te=v.colorSpace===Tn||Re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!we&&!se?_e[Q]=_(v.image[Q],!0,s.maxCubemapSize):_e[Q]=se?v.image[Q].image:v.image[Q],_e[Q]=ke(v,_e[Q]);let Ue=_e[0],Ce=r.convert(v.format,v.colorSpace),me=r.convert(v.type),Ge=S(v.internalFormat,Ce,me,v.colorSpace),D=v.isVideoTexture!==!0,oe=X.__version===void 0||W===!0,de=te.dataReady,Me=A(v,Ue);Se(i.TEXTURE_CUBE_MAP,v);let re;if(we){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ge,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){re=_e[Q].mipmaps;for(let Ae=0;Ae<re.length;Ae++){let He=re[Ae];v.format!==Wt?Ce!==null?D?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,He.width,He.height,Ce,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,He.width,He.height,Ce,me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Ge,He.width,He.height,0,Ce,me,He.data)}}}else{if(re=v.mipmaps,D&&oe){re.length>0&&Me++;let Q=Oe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){D?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Ce,me,_e[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,_e[Q].width,_e[Q].height,0,Ce,me,_e[Q].data);for(let Ae=0;Ae<re.length;Ae++){let rt=re[Ae].image[Q].image;D?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,rt.width,rt.height,Ce,me,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Ge,rt.width,rt.height,0,Ce,me,rt.data)}}else{D?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,me,_e[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,Ce,me,_e[Q]);for(let Ae=0;Ae<re.length;Ae++){let He=re[Ae];D?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,Ce,me,He.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Ge,Ce,me,He.image[Q])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),X.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xe(E,v,O,W,te,X){let Re=r.convert(O.format,O.colorSpace),le=r.convert(O.type),Te=S(O.internalFormat,Re,le,O.colorSpace),we=n.get(v),se=n.get(O);if(se.__renderTarget=v,!we.__hasExternalTextures){let _e=Math.max(1,v.width>>X),Ue=Math.max(1,v.height>>X);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,X,Te,_e,Ue,v.depth,0,Re,le,null):t.texImage2D(te,X,Te,_e,Ue,0,Re,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,te,se.__webglTexture,0,he(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,te,se.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let W=v.depthTexture,te=W&&W.isDepthTexture?W.type:null,X=q(v.stencilBuffer,te),Re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=he(v);ie(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,E)}else{let W=v.textures;for(let te=0;te<W.length;te++){let X=W[te],Re=r.convert(X.format,X.colorSpace),le=r.convert(X.type),Te=S(X.internalFormat,Re,le,X.colorSpace),we=he(v);O&&ie(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Te,v.width,v.height):ie(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);let te=W.__webglTexture,X=he(v);if(v.depthTexture.format===Ii)ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===Xi)ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ze(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",te)};W.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let W=E.texture.mipmaps;W&&W.length>0?ye(v.__webglFramebuffer[0],E):ye(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),be(v.__webglDepthbuffer[W],E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,X)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),be(v.__webglDepthbuffer,E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(E,v,O){let W=n.get(E);v!==void 0&&xe(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ze(E)}function R(E){let v=E.texture,O=n.get(E),W=n.get(v);E.addEventListener("dispose",C);let te=E.textures,X=E.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Te=0;Te<v.mipmaps.length;Te++)O.__webglFramebuffer[le][Te]=i.createFramebuffer()}else O.__webglFramebuffer[le]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Re)for(let le=0,Te=te.length;le<Te;le++){let we=n.get(te[le]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ie(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){let Te=te[le];O.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let we=r.convert(Te.format,Te.colorSpace),se=r.convert(Te.type),_e=S(Te.internalFormat,we,se,Te.colorSpace,E.isXRRenderTarget===!0),Ue=he(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,O.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),be(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Se(i.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)xe(O.__webglFramebuffer[le][Te],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else xe(O.__webglFramebuffer[le],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,Te=te.length;le<Te;le++){let we=te[le],se=n.get(we),_e=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_e=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),Se(_e,we),xe(O.__webglFramebuffer,E,we,i.COLOR_ATTACHMENT0+le,_e,0),m(we)&&h(_e)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,W.__webglTexture),Se(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)xe(O.__webglFramebuffer[Te],E,v,i.COLOR_ATTACHMENT0,le,Te);else xe(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,le,0);m(v)&&h(le),t.unbindTexture()}E.depthBuffer&&ze(E)}function ee(E){let v=E.textures;for(let O=0,W=v.length;O<W;O++){let te=v[O];if(m(te)){let X=b(E),Re=n.get(te).__webglTexture;t.bindTexture(X,Re),h(X),t.unbindTexture()}}}let K=[],$=[];function J(E){if(E.samples>0){if(ie(E)===!1){let v=E.textures,O=E.width,W=E.height,te=i.COLOR_BUFFER_BIT,X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(E),le=v.length>1;if(le)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<v.length;we++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);let se=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,te,i.NEAREST),c===!0&&(K.length=0,$.length=0,K.push(i.COLOR_ATTACHMENT0+we),E.depthBuffer&&E.resolveDepthBuffer===!1&&(K.push(X),$.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);let se=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function he(E){return Math.min(s.maxSamples,E.samples)}function ie(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ue(E){let v=a.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function ke(E,v){let O=E.colorSpace,W=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ti&&O!==Tn&&($e.getTransfer(O)===nt?(W!==Wt||te!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=je,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ie}function J0(i,e){function t(n,s=Tn){let r,a=$e.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===al)return i.BYTE;if(n===ol)return i.SHORT;if(n===Vi)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===hl)return i.ALPHA;if(n===ul)return i.RGB;if(n===Wt)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===dl)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ea||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===Ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===$a||n===Ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:$0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends Sn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Dl,h={},b=t.getContextAttributes(),S=null,q=null,A=[],w=[],C=new fe,I=null,x=new Mt;x.viewport=new tt;let y=new Mt;y.viewport=new tt;let T=[x,y],U=new ia,k=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=A[Y];return j===void 0&&(j=new Ui,A[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=A[Y];return j===void 0&&(j=new Ui,A[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=A[Y];return j===void 0&&(j=new Ui,A[Y]=j),j.getHandSpace()};function B(Y){let j=w.indexOf(Y.inputSource);if(j===-1)return;let xe=A[j];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<A.length;Y++){let j=w[Y];j!==null&&(w[Y]=null,A[Y].disconnect(j))}k=null,L=null,m.reset();for(let Y in h)delete h[Y];e.setRenderTarget(S),p=null,f=null,u=null,s=null,q=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,be=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?Xi:Ii,be=b.stencil?Wi:Hn);let ze={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),q=new ln(f.textureWidth,f.textureHeight,{format:Wt,type:nn,depthTexture:new Ts(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),q=new ln(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}q.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let j=0;j<Y.removed.length;j++){let xe=Y.removed[j],be=w.indexOf(xe);be>=0&&(w[be]=null,A[be].disconnect(xe))}for(let j=0;j<Y.added.length;j++){let xe=Y.added[j],be=w.indexOf(xe);if(be===-1){for(let ze=0;ze<A.length;ze++)if(ze>=w.length){w.push(xe),be=ze;break}else if(w[ze]===null){w[ze]=xe,be=ze;break}if(be===-1)break}let ye=A[be];ye&&ye.connect(xe)}}let H=new P,ne=new P;function ce(Y,j,xe){H.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(xe.matrixWorld);let be=H.distanceTo(ne),ye=j.projectionMatrix.elements,ze=xe.projectionMatrix.elements,je=ye[14]/(ye[10]-1),R=ye[14]/(ye[10]+1),ee=(ye[9]+1)/ye[5],K=(ye[9]-1)/ye[5],$=(ye[8]-1)/ye[0],J=(ze[8]+1)/ze[0],he=je*$,ie=je*J,ue=be/(-$+J),ke=ue*-$;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Oe=je+ue,E=R+ue,v=he-ke,O=ie+(be-ke),W=ee*R/E*Oe,te=K*R/E*Oe;Y.projectionMatrix.makePerspective(v,O,W,te,Oe,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ve(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,xe=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),U.near=y.near=x.near=j,U.far=y.far=x.far=xe,(k!==U.near||L!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,L=U.far),U.layers.mask=Y.layers.mask|6,x.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let be=Y.parent,ye=U.cameras;ve(U,be);for(let ze=0;ze<ye.length;ze++)ve(ye[ze],be);ye.length===2?ce(U,x,y):U.projectionMatrix.copy(x.projectionMatrix),Se(Y,U,be)};function Se(Y,j,xe){xe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Pi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return h[Y]};let Fe=null;function Le(Y,j){if(d=j.getViewerPose(l||a),g=j,d!==null){let xe=d.views;p!==null&&(e.setRenderTargetFramebuffer(q,p.framebuffer),e.setRenderTarget(q));let be=!1;xe.length!==U.cameras.length&&(U.cameras.length=0,be=!0);for(let R=0;R<xe.length;R++){let ee=xe[R],K=null;if(p!==null)K=p.getViewport(ee);else{let J=u.getViewSubImage(f,ee);K=J.viewport,R===0&&(e.setRenderTargetTextures(q,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(q))}let $=T[R];$===void 0&&($=new Mt,$.layers.enable(R),$.viewport=new tt,T[R]=$),$.matrix.fromArray(ee.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ee.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),R===0&&(U.matrix.copy($.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),be===!0&&U.cameras.push($)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let R=u.getDepthInformation(xe[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let R=0;R<xe.length;R++){let ee=xe[R].camera;if(ee){let K=h[ee];K||(K=new ws,h[ee]=K);let $=u.getCameraImage(ee);K.sourceTexture=$}}}}for(let xe=0;xe<A.length;xe++){let be=w[xe],ye=A[xe];be!==null&&ye!==void 0&&ye.update(be,j,l||a)}Fe&&Fe(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Be=new Fh;Be.setAnimationLoop(Le),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}},di=new Gt,Q0=new Qe;function j0(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,_l(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,S,q){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,q)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,b,S):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_t&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_t&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h),S=b.envMap,q=b.envMapRotation;S&&(m.envMap.value=S,di.copy(q),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_t&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let q=S.program;n.uniformBlockBinding(b,q)}function l(b,S){let q=s[b.id];q===void 0&&(g(b),q=d(b),s[b.id]=q,b.addEventListener("dispose",m));let A=S.program;n.updateUBOMapping(b,A);let w=e.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function d(b){let S=u();b.__bindingPointIndex=S;let q=i.createBuffer(),A=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,q),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,q),q}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=s[b.id],q=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,C=q.length;w<C;w++){let I=Array.isArray(q[w])?q[w]:[q[w]];for(let x=0,y=I.length;x<y;x++){let T=I[x];if(p(T,w,x,A)===!0){let U=T.__offset,k=Array.isArray(T.value)?T.value:[T.value],L=0;for(let B=0;B<k.length;B++){let z=k[B],Z=_(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,U+L,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,S,q,A){let w=b.value,C=S+"_"+q;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{let I=A[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(b){let S=b.uniforms,q=0,A=16;for(let C=0,I=S.length;C<I;C++){let x=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,T=x.length;y<T;y++){let U=x[y],k=Array.isArray(U.value)?U.value:[U.value];for(let L=0,B=k.length;L<B;L++){let z=k[L],Z=_(z),H=q%A,ne=H%Z.boundary,ce=H+ne;q+=ne,ce!==0&&A-ce<Z.storage&&(q+=A-ce),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=q,q+=Z.storage}}}let w=q%A;return w>0&&(q+=A-w),b.__size=q,b.__cache={},this}function _(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let q=a.indexOf(S.__bindingPointIndex);a.splice(q,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var no=class{constructor(e={}){let{canvas:t=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let q=this,A=!1;this._outputColorSpace=Ct;let w=0,C=0,I=null,x=-1,y=null,T=new tt,U=new tt,k=null,L=new Ye(0),B=0,z=t.width,Z=t.height,H=1,ne=null,ce=null,ve=new tt(0,0,z,Z),Se=new tt(0,0,z,Z),Fe=!1,Le=new Ni,Be=!1,Y=!1,j=new Qe,xe=new P,be=new tt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function je(){return I===null?H:1}let R=n;function ee(M,N){return t.getContext(M,N)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){let N="webgl2";if(R=ee(N,M),R===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let K,$,J,he,ie,ue,ke,Oe,E,v,O,W,te,X,Re,le,Te,we,se,_e,Ue,Ce,me,Ge;function D(){K=new x1(R),K.init(),Ce=new J0(R,K),$=new u1(R,K,e,Ce),J=new Y0(R,K),$.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),he=new q1(R),ie=new D0,ue=new Z0(R,K,J,ie,$,Ce,he),ke=new f1(q),Oe=new _1(q),E=new Td(R),me=new c1(R,E),v=new v1(R,E,he,me),O=new S1(R,v,E,he),se=new M1(R,$,ue),le=new d1(ie),W=new L0(q,ke,Oe,K,$,me,le),te=new j0(q,ie),X=new N0,Re=new H0(K),we=new l1(q,ke,Oe,J,O,p,c),Te=new W0(q,O,$),Ge=new em(R,he,$,J),_e=new h1(R,K,he),Ue=new y1(R,K,he),he.programs=W.programs,q.capabilities=$,q.extensions=K,q.properties=ie,q.renderLists=X,q.shadowMap=Te,q.state=J,q.info=he}D();let oe=new Ul(q,R);this.xr=oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=K.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=K.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(z,Z,!1))},this.getSize=function(M){return M.set(z,Z)},this.setSize=function(M,N,V=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,Z=N,t.width=Math.floor(M*H),t.height=Math.floor(N*H),V===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(z*H,Z*H).floor()},this.setDrawingBufferSize=function(M,N,V){z=M,Z=N,H=V,t.width=Math.floor(M*V),t.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,N,V,G){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,N,V,G),J.viewport(T.copy(ve).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Se)},this.setScissor=function(M,N,V,G){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,N,V,G),J.scissor(U.copy(Se).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(M){J.setScissorTest(Fe=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let G=0;if(M){let F=!1;if(I!==null){let ae=I.texture.format;F=ae===Sa||ae===Ma||ae===qa}if(F){let ae=I.texture.type,ge=ae===nn||ae===Hn||ae===Vi||ae===Wi||ae===xa||ae===va,Ee=we.getClearColor(),qe=we.getClearAlpha(),De=Ee.r,Ne=Ee.g,Ie=Ee.b;ge?(g[0]=De,g[1]=Ne,g[2]=Ie,g[3]=qe,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=De,_[1]=Ne,_[2]=Ie,_[3]=qe,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}N&&(G|=R.DEPTH_BUFFER_BIT),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",re,!1),we.dispose(),X.dispose(),Re.dispose(),ie.dispose(),ke.dispose(),Oe.dispose(),O.dispose(),me.dispose(),Ge.dispose(),W.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",an),oe.removeEventListener("sessionend",kl),Gn.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=he.autoReset,N=Te.enabled,V=Te.autoUpdate,G=Te.needsUpdate,F=Te.type;D(),he.autoReset=M,Te.enabled=N,Te.autoUpdate=V,Te.needsUpdate=G,Te.type=F}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q(M){let N=M.target;N.removeEventListener("dispose",Q),Ae(N)}function Ae(M){He(M),ie.remove(M)}function He(M){let N=ie.get(M).programs;N!==void 0&&(N.forEach(function(V){W.releaseProgram(V)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,G,F,ae){N===null&&(N=ye);let ge=F.isMesh&&F.matrixWorld.determinant()<0,Ee=jh(M,N,V,G,F);J.setMaterial(G,ge);let qe=V.index,De=1;if(G.wireframe===!0){if(qe=v.getWireframeAttribute(V),qe===void 0)return;De=2}let Ne=V.drawRange,Ie=V.attributes.position,Je=Ne.start*De,it=(Ne.start+Ne.count)*De;ae!==null&&(Je=Math.max(Je,ae.start*De),it=Math.min(it,(ae.start+ae.count)*De)),qe!==null?(Je=Math.max(Je,0),it=Math.min(it,qe.count)):Ie!=null&&(Je=Math.max(Je,0),it=Math.min(it,Ie.count));let dt=it-Je;if(dt<0||dt===1/0)return;me.setup(F,G,Ee,V,qe);let at,st=_e;if(qe!==null&&(at=E.get(qe),st=Ue,st.setIndex(at)),F.isMesh)G.wireframe===!0?(J.setLineWidth(G.wireframeLinewidth*je()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(F.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),J.setLineWidth(Pe*je()),F.isLineSegments?st.setMode(R.LINES):F.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else F.isPoints?st.setMode(R.POINTS):F.isSprite&&st.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Pe=F._multiDrawStarts,lt=F._multiDrawCounts,Ke=F._multiDrawCount,Ut=qe?E.get(qe).bytesPerElement:1,mi=ie.get(G).currentProgram.getUniforms();for(let Nt=0;Nt<Ke;Nt++)mi.setValue(R,"_gl_DrawID",Nt),st.render(Pe[Nt]/Ut,lt[Nt])}else if(F.isInstancedMesh)st.renderInstances(Je,dt,F.count);else if(V.isInstancedBufferGeometry){let Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,lt=Math.min(V.instanceCount,Pe);st.renderInstances(Je,dt,lt)}else st.render(Je,dt)};function rt(M,N,V){M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=_t,M.needsUpdate=!0,nr(M,N,V),M.side=Kt,M.needsUpdate=!0,nr(M,N,V),M.side=dn):nr(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),h=Re.get(V),h.init(N),S.push(h),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();let G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Ee=ae[ge];rt(Ee,V,F),G.add(Ee)}else rt(ae,V,F),G.add(ae)}),h=S.pop(),G},this.compileAsync=function(M,N,V=null){let G=this.compile(M,N,V);return new Promise(F=>{function ae(){if(G.forEach(function(ge){ie.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){F(M);return}setTimeout(ae,10)}K.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let et=null;function mn(M){et&&et(M)}function an(){Gn.stop()}function kl(){Gn.start()}let Gn=new Fh;Gn.setAnimationLoop(mn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){et=M,oe.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},oe.addEventListener("sessionstart",an),oe.addEventListener("sessionend",kl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(q,M,N,I),h=Re.get(M,S.length),h.init(N),S.push(h),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(j,$t,N.reversedDepth),Y=this.localClippingEnabled,Be=le.init(this.clippingPlanes,Y),m=X.get(M,b.length),m.init(),b.push(m),oe.enabled===!0&&oe.isPresenting===!0){let ae=q.xr.getDepthSensingMesh();ae!==null&&co(ae,N,-1/0,q.sortObjects)}co(M,N,0,q.sortObjects),m.finish(),q.sortObjects===!0&&m.sort(ne,ce),ze=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ze&&we.addToRenderList(m,M),this.info.render.frame++,Be===!0&&le.beginShadows();let V=h.state.shadowsArray;Te.render(V,M,N),Be===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(h.setupLights(),N.isArrayCamera){let ae=N.cameras;if(F.length>0)for(let ge=0,Ee=ae.length;ge<Ee;ge++){let qe=ae[ge];Vl(G,F,M,qe)}ze&&we.render(M);for(let ge=0,Ee=ae.length;ge<Ee;ge++){let qe=ae[ge];Hl(m,M,qe,qe.viewport)}}else F.length>0&&Vl(G,F,M,N),ze&&we.render(M),Hl(m,M,N);I!==null&&C===0&&(ue.updateMultisampleRenderTarget(I),ue.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(q,M,N),me.resetDefaultState(),x=-1,y=null,S.pop(),S.length>0?(h=S[S.length-1],Be===!0&&le.setGlobalState(q.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function co(M,N,V,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Le.intersectsSprite(M)){G&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);let ge=O.update(M),Ee=M.material;Ee.visible&&m.push(M,ge,Ee,V,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Le.intersectsObject(M))){let ge=O.update(M),Ee=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),be.copy(ge.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(Ee)){let qe=ge.groups;for(let De=0,Ne=qe.length;De<Ne;De++){let Ie=qe[De],Je=Ee[Ie.materialIndex];Je&&Je.visible&&m.push(M,ge,Je,V,be.z,Ie)}}else Ee.visible&&m.push(M,ge,Ee,V,be.z,null)}}let ae=M.children;for(let ge=0,Ee=ae.length;ge<Ee;ge++)co(ae[ge],N,V,G)}function Hl(M,N,V,G){let F=M.opaque,ae=M.transmissive,ge=M.transparent;h.setupLightsView(V),Be===!0&&le.setGlobalState(q.clippingPlanes,V),G&&J.viewport(T.copy(G)),F.length>0&&tr(F,N,V),ae.length>0&&tr(ae,N,V),ge.length>0&&tr(ge,N,V),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Vl(M,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new ln(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Gi:nn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ae=h.state.transmissionRenderTarget[G.id],ge=G.viewport||T;ae.setSize(ge.z*q.transmissionResolutionScale,ge.w*q.transmissionResolutionScale);let Ee=q.getRenderTarget(),qe=q.getActiveCubeFace(),De=q.getActiveMipmapLevel();q.setRenderTarget(ae),q.getClearColor(L),B=q.getClearAlpha(),B<1&&q.setClearColor(16777215,.5),q.clear(),ze&&we.render(V);let Ne=q.toneMapping;q.toneMapping=En;let Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),Be===!0&&le.setGlobalState(q.clippingPlanes,G),tr(M,V,G),ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae),K.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let it=0,dt=N.length;it<dt;it++){let at=N[it],st=at.object,Pe=at.geometry,lt=at.material,Ke=at.group;if(lt.side===dn&&st.layers.test(G.layers)){let Ut=lt.side;lt.side=_t,lt.needsUpdate=!0,Gl(st,V,G,Pe,lt,Ke),lt.side=Ut,lt.needsUpdate=!0,Je=!0}}Je===!0&&(ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae))}q.setRenderTarget(Ee,qe,De),q.setClearColor(L,B),Ie!==void 0&&(G.viewport=Ie),q.toneMapping=Ne}function tr(M,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ae=M.length;F<ae;F++){let ge=M[F],Ee=ge.object,qe=ge.geometry,De=ge.group,Ne=ge.material;Ne.allowOverride===!0&&G!==null&&(Ne=G),Ee.layers.test(V.layers)&&Gl(Ee,N,V,qe,Ne,De)}}function Gl(M,N,V,G,F,ae){M.onBeforeRender(q,N,V,G,F,ae),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(q,N,V,G,M,ae),F.transparent===!0&&F.side===dn&&F.forceSinglePass===!1?(F.side=_t,F.needsUpdate=!0,q.renderBufferDirect(V,N,G,F,M,ae),F.side=Kt,F.needsUpdate=!0,q.renderBufferDirect(V,N,G,F,M,ae),F.side=dn):q.renderBufferDirect(V,N,G,F,M,ae),M.onAfterRender(q,N,V,G,F,ae)}function nr(M,N,V){N.isScene!==!0&&(N=ye);let G=ie.get(M),F=h.state.lights,ae=h.state.shadowsArray,ge=F.state.version,Ee=W.getParameters(M,F.state,ae,N,V),qe=W.getProgramCacheKey(Ee),De=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?Oe:ke).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",Q),De=new Map,G.programs=De);let Ne=De.get(qe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===ge)return Xl(M,Ee),Ne}else Ee.uniforms=W.getUniforms(M),M.onBeforeCompile(Ee,q),Ne=W.acquireProgram(Ee,qe),De.set(qe,Ne),G.uniforms=Ee.uniforms;let Ie=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=le.uniform),Xl(M,Ee),G.needsLights=tu(M),G.lightsStateVersion=ge,G.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function Wl(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=$i.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Xl(M,N){let V=ie.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function jh(M,N,V,G,F){N.isScene!==!0&&(N=ye),ue.resetTextureUnits();let ae=N.fog,ge=G.isMeshStandardMaterial?N.environment:null,Ee=I===null?q.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ti,qe=(G.isMeshStandardMaterial?Oe:ke).get(G.envMap||ge),De=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,it=!!V.morphAttributes.color,dt=En;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=q.toneMapping);let at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=at!==void 0?at.length:0,Pe=ie.get(G),lt=h.state.lights;if(Be===!0&&(Y===!0||M!==y)){let At=M===y&&G.id===x;le.setState(G,M,At)}let Ke=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==lt.state.version||Pe.outputColorSpace!==Ee||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==qe||G.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Ne||Pe.morphTargets!==Ie||Pe.morphNormals!==Je||Pe.morphColors!==it||Pe.toneMapping!==dt||Pe.morphTargetsCount!==st)&&(Ke=!0):(Ke=!0,Pe.__version=G.version);let Ut=Pe.currentProgram;Ke===!0&&(Ut=nr(G,N,F));let mi=!1,Nt=!1,ts=!1,ct=Ut.getUniforms(),kt=Pe.uniforms;if(J.useProgram(Ut.program)&&(mi=!0,Nt=!0,ts=!0),G.id!==x&&(x=G.id,Nt=!0),mi||y!==M){J.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(R,"projectionMatrix",M.projectionMatrix),ct.setValue(R,"viewMatrix",M.matrixWorldInverse);let It=ct.map.cameraPosition;It!==void 0&&It.setValue(R,xe.setFromMatrixPosition(M.matrixWorld)),$.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Nt=!0,ts=!0)}if(F.isSkinnedMesh){ct.setOptional(R,F,"bindMatrix"),ct.setOptional(R,F,"bindMatrixInverse");let At=F.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ct.setValue(R,"boneTexture",At.boneTexture,ue))}F.isBatchedMesh&&(ct.setOptional(R,F,"batchingTexture"),ct.setValue(R,"batchingTexture",F._matricesTexture,ue),ct.setOptional(R,F,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",F._indirectTexture,ue),ct.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",F._colorsTexture,ue));let Ht=V.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&se.update(F,V,Ut),(Nt||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,ct.setValue(R,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kt.envMap.value=qe,kt.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(kt.envMapIntensity.value=N.environmentIntensity),Nt&&(ct.setValue(R,"toneMappingExposure",q.toneMappingExposure),Pe.needsLights&&eu(kt,ts),ae&&G.fog===!0&&te.refreshFogUniforms(kt,ae),te.refreshMaterialUniforms(kt,G,H,Z,h.state.transmissionRenderTarget[M.id]),$i.upload(R,Wl(Pe),kt,ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($i.upload(R,Wl(Pe),kt,ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(R,"center",F.center),ct.setValue(R,"modelViewMatrix",F.modelViewMatrix),ct.setValue(R,"normalMatrix",F.normalMatrix),ct.setValue(R,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let At=G.uniformsGroups;for(let It=0,ho=At.length;It<ho;It++){let Wn=At[It];Ge.update(Wn,Ut),Ge.bind(Wn,Ut)}}return Ut}function eu(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function tu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,N,V){let G=ie.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ie.get(M.texture).__webglTexture=N,ie.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let V=ie.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let nu=R.createFramebuffer();this.setRenderTarget=function(M,N=0,V=0){I=M,w=N,C=V;let G=!0,F=null,ae=!1,ge=!1;if(M){let qe=ie.get(M);if(qe.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(qe.__webglFramebuffer===void 0)ue.setupRenderTarget(M);else if(qe.__hasExternalTextures)ue.rebindTextures(M,ie.get(M.texture).__webglTexture,ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ie=M.depthTexture;if(qe.__boundDepthTexture!==Ie){if(Ie!==null&&ie.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(M)}}let De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);let Ne=ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?F=Ne[N][V]:F=Ne[N],ae=!0):M.samples>0&&ue.useMultisampledRTT(M)===!1?F=ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[V]:F=Ne,T.copy(M.viewport),U.copy(M.scissor),k=M.scissorTest}else T.copy(ve).multiplyScalar(H).floor(),U.copy(Se).multiplyScalar(H).floor(),k=Fe;if(V!==0&&(F=nu),J.bindFramebuffer(R.FRAMEBUFFER,F)&&G&&J.drawBuffers(M,F),J.viewport(T),J.scissor(U),J.setScissorTest(k),ae){let qe=ie.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,qe.__webglTexture,V)}else if(ge){let qe=N;for(let De=0;De<M.textures.length;De++){let Ne=ie.get(M.textures[De]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+De,Ne.__webglTexture,V,qe)}}else if(M!==null&&V!==0){let qe=ie.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qe.__webglTexture,V)}x=-1},this.readRenderTargetPixels=function(M,N,V,G,F,ae,ge,Ee=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(qe=qe[ge]),qe){J.bindFramebuffer(R.FRAMEBUFFER,qe);try{let De=M.textures[Ee],Ne=De.format,Ie=De.type;if(!$.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&V>=0&&V<=M.height-F&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ee),R.readPixels(N,V,G,F,Ce.convert(Ne),Ce.convert(Ie),ae))}finally{let De=I!==null?ie.get(I).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,G,F,ae,ge,Ee=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(qe=qe[ge]),qe)if(N>=0&&N<=M.width-G&&V>=0&&V<=M.height-F){J.bindFramebuffer(R.FRAMEBUFFER,qe);let De=M.textures[Ee],Ne=De.format,Ie=De.type;if(!$.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Je),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ee),R.readPixels(N,V,G,F,Ce.convert(Ne),Ce.convert(Ie),0);let it=I!==null?ie.get(I).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,it);let dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ah(R,dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer(Je),R.deleteSync(dt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){let G=Math.pow(2,-V),F=Math.floor(M.image.width*G),ae=Math.floor(M.image.height*G),ge=N!==null?N.x:0,Ee=N!==null?N.y:0;ue.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,ge,Ee,F,ae),J.unbindTexture()};let iu=R.createFramebuffer(),su=R.createFramebuffer();this.copyTextureToTexture=function(M,N,V=null,G=null,F=0,ae=null){ae===null&&(F!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=F,F=0):ae=0);let ge,Ee,qe,De,Ne,Ie,Je,it,dt,at=M.isCompressedTexture?M.mipmaps[ae]:M.image;if(V!==null)ge=V.max.x-V.min.x,Ee=V.max.y-V.min.y,qe=V.isBox3?V.max.z-V.min.z:1,De=V.min.x,Ne=V.min.y,Ie=V.isBox3?V.min.z:0;else{let Ht=Math.pow(2,-F);ge=Math.floor(at.width*Ht),Ee=Math.floor(at.height*Ht),M.isDataArrayTexture?qe=at.depth:M.isData3DTexture?qe=Math.floor(at.depth*Ht):qe=1,De=0,Ne=0,Ie=0}G!==null?(Je=G.x,it=G.y,dt=G.z):(Je=0,it=0,dt=0);let st=Ce.convert(N.format),Pe=Ce.convert(N.type),lt;N.isData3DTexture?(ue.setTexture3D(N,0),lt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ue.setTexture2DArray(N,0),lt=R.TEXTURE_2D_ARRAY):(ue.setTexture2D(N,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let Ke=R.getParameter(R.UNPACK_ROW_LENGTH),Ut=R.getParameter(R.UNPACK_IMAGE_HEIGHT),mi=R.getParameter(R.UNPACK_SKIP_PIXELS),Nt=R.getParameter(R.UNPACK_SKIP_ROWS),ts=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,De),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ie);let ct=M.isDataArrayTexture||M.isData3DTexture,kt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let Ht=ie.get(M),At=ie.get(N),It=ie.get(Ht.__renderTarget),ho=ie.get(At.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,It.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,ho.__webglFramebuffer);for(let Wn=0;Wn<qe;Wn++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ie.get(M).__webglTexture,F,Ie+Wn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ie.get(N).__webglTexture,ae,dt+Wn)),R.blitFramebuffer(De,Ne,ge,Ee,Je,it,ge,Ee,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||ie.has(M)){let Ht=ie.get(M),At=ie.get(N);J.bindFramebuffer(R.READ_FRAMEBUFFER,iu),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,su);for(let It=0;It<qe;It++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.__webglTexture,F,Ie+It):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ht.__webglTexture,F),kt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,At.__webglTexture,ae,dt+It):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,At.__webglTexture,ae),F!==0?R.blitFramebuffer(De,Ne,ge,Ee,Je,it,ge,Ee,R.COLOR_BUFFER_BIT,R.NEAREST):kt?R.copyTexSubImage3D(lt,ae,Je,it,dt+It,De,Ne,ge,Ee):R.copyTexSubImage2D(lt,ae,Je,it,De,Ne,ge,Ee);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else kt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(lt,ae,Je,it,dt,ge,Ee,qe,st,Pe,at.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,ae,Je,it,dt,ge,Ee,qe,st,at.data):R.texSubImage3D(lt,ae,Je,it,dt,ge,Ee,qe,st,Pe,at):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ae,Je,it,ge,Ee,st,Pe,at.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ae,Je,it,at.width,at.height,st,at.data):R.texSubImage2D(R.TEXTURE_2D,ae,Je,it,ge,Ee,st,Pe,at);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ke),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ut),R.pixelStorei(R.UNPACK_SKIP_PIXELS,mi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ts),ae===0&&N.generateMipmaps&&R.generateMipmap(lt),J.unbindTexture()},this.initRenderTarget=function(M){ie.get(M).__webglFramebuffer===void 0&&ue.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ue.setTextureCube(M,0):M.isData3DTexture?ue.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ue.setTexture2DArray(M,0):ue.setTexture2D(M,0),J.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,J.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Hh=new P,tm=new jt,Vh=new P,so=class extends mt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var pn=new Qe,nm=new Qe,ro=class{constructor(e={}){let t=this,n,s,r,a,o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let d=document.createElement("div");d.style.transformStyle="preserve-3d",l.appendChild(d),this.getSize=function(){return{width:n,height:s}},this.render=function(m,h){let b=h.projectionMatrix.elements[5]*a;h.view&&h.view.enabled?(l.style.transform=`translate( ${-h.view.offsetX*(n/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,l.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let S,q;h.isOrthographicCamera&&(S=-(h.right+h.left)/2,q=(h.top+h.bottom)/2);let A=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,w=h.isOrthographicCamera?`scale( ${A} )scale(`+b+")translate("+u(S)+"px,"+u(q)+"px)"+f(h.matrixWorldInverse):`scale( ${A} )translateZ(`+b+"px)"+f(h.matrixWorldInverse),I=(h.isPerspectiveCamera?"perspective("+b+"px) ":"")+w+"translate("+r+"px,"+a+"px)";o.camera.style!==I&&(d.style.transform=I,o.camera.style=I),_(m,m,h,w)},this.setSize=function(m,h){n=m,s=h,r=n/2,a=s/2,c.style.width=m+"px",c.style.height=h+"px",l.style.width=m+"px",l.style.height=h+"px",d.style.width=m+"px",d.style.height=h+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function f(m){let h=m.elements;return"matrix3d("+u(h[0])+","+u(-h[1])+","+u(h[2])+","+u(h[3])+","+u(h[4])+","+u(-h[5])+","+u(h[6])+","+u(h[7])+","+u(h[8])+","+u(-h[9])+","+u(h[10])+","+u(h[11])+","+u(h[12])+","+u(-h[13])+","+u(h[14])+","+u(h[15])+")"}function p(m){let h=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(h[0])+","+u(h[1])+","+u(h[2])+","+u(h[3])+","+u(-h[4])+","+u(-h[5])+","+u(-h[6])+","+u(-h[7])+","+u(h[8])+","+u(h[9])+","+u(h[10])+","+u(h[11])+","+u(h[12])+","+u(h[13])+","+u(h[14])+","+u(h[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let h=0,b=m.children.length;h<b;h++)g(m.children[h])}function _(m,h,b,S){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let q=m.layers.test(b.layers)===!0,A=m.element;if(A.style.display=q===!0?"":"none",q===!0){m.onBeforeRender(t,h,b);let w;m.isCSS3DSprite?(pn.copy(b.matrixWorldInverse),pn.transpose(),m.rotation2D!==0&&pn.multiply(nm.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Hh,tm,Vh),pn.setPosition(Hh),pn.scale(Vh),pn.elements[3]=0,pn.elements[7]=0,pn.elements[11]=0,pn.elements[15]=1,w=p(pn)):w=p(m.matrixWorld);let C=o.objects.get(m);if(C===void 0||C.style!==w){A.style.transform=w;let I={style:w};o.objects.set(m,I)}A.parentNode!==d&&d.appendChild(A),m.onAfterRender(t,h,b)}}for(let q=0,A=m.children.length;q<A;q++)_(m.children[q],h,b,S)}}};var ao=class extends On{constructor(){super();let e=new gt;e.deleteAttribute("uv");let t=new ft({side:_t}),n=new ft,s=new Hs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new We(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ii(e,n,6),o=new mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new We(e,ji(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new We(e,ji(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let d=new We(e,ji(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new We(e,ji(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new We(e,ji(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new We(e,ji(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ji(i){return new Os({color:0,emissive:16777215,emissiveIntensity:i})}var js=new P;function Xt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let l=.5*a/(a+o),d=1-js.angleTo(i)/c;return Math.sign(js[t])===1?d*l:o/(a+o)+l+l*(1-d)}var er=class i extends gt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,d=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,_=new P,m=.5/a;for(let h=0,b=0;h<u.length;h+=3,b+=2)switch(c.fromArray(u,h),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[h+0]=d.x*Math.sign(c.x)+l.x*r,u[h+1]=d.y*Math.sign(c.y)+l.y*r,u[h+2]=d.z*Math.sign(c.z)+l.z*r,f[h+0]=l.x,f[h+1]=l.y,f[h+2]=l.z,Math.floor(h/g)){case 0:_.set(1,0,0),p[b+0]=Xt(_,l,"z","y",r,n),p[b+1]=1-Xt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[b+0]=1-Xt(_,l,"z","y",r,n),p[b+1]=1-Xt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[b+0]=1-Xt(_,l,"x","z",r,e),p[b+1]=Xt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),p[b+0]=1-Xt(_,l,"x","z",r,e),p[b+1]=1-Xt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),p[b+0]=1-Xt(_,l,"x","y",r,e),p[b+1]=1-Xt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[b+0]=Xt(_,l,"x","y",r,e),p[b+1]=1-Xt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var oo=class{constructor(e,t){this.width=e,this.progress=-1,this.bend=0,this.stripX=new Float32Array(129),this.stripZ=new Float32Array(129),this.geometry=new Dt(e,t,64,12),this.original=this.geometry.attributes.position.array.slice(),this.material=new ft({color:"#ffffff",roughness:.91,side:Kt}),this.mesh=new We(this.geometry,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.position.z=.34,this.mesh.name="curved-turning-page",this.edge=new We(this.geometry.clone(),new ft({color:"#ffffff",roughness:1,side:_t})),this.mesh.frustumCulled=this.edge.frustumCulled=!1,this.mesh.add(this.edge)}update(e){if(this.mesh.visible=e>0&&e<1,!this.mesh.visible){this.bend=0,this.progress=-1;return}if(e===this.progress)return;this.progress=e;let t=this.geometry.attributes.position,n=Math.sin(e*Math.PI)*1.25,s=128,r=this.stripX,a=this.stripZ;for(let l=1;l<=s;l++){let d=(l-.5)/s,u=-e*Math.PI+n*(Math.sin(d*Math.PI)-2/Math.PI);r[l]=r[l-1]+Math.cos(u)*this.width/s,a[l]=a[l-1]-Math.sin(u)*this.width/s}for(let l=0;l<t.count;l++){let d=(this.original[l*3]+this.width/2)/this.width,u=Math.min(s,Math.round(d*s)),f=Math.sin(e*Math.PI)*d**3*(this.original[l*3+1]/this.width)*.14;t.setXYZ(l,r[u],this.original[l*3+1],a[u]+f+.065*Math.exp(-d*28))}t.needsUpdate=!0,this.geometry.computeVertexNormals();let o=this.edge.geometry.attributes.position,c=this.geometry.attributes.normal;for(let l=0;l<t.count;l++)o.setXYZ(l,t.getX(l)-c.getX(l)*.008,t.getY(l)-c.getY(l)*.008,t.getZ(l)-c.getZ(l)*.008);o.needsUpdate=!0,this.edge.geometry.attributes.normal.array.set(c.array),this.edge.geometry.attributes.normal.needsUpdate=!0,this.bend=this.measureCurvature()}curvature(){return this.bend}measureCurvature(){if(!this.mesh.visible)return 0;let e=this.geometry.attributes.position,t=390,n=e.getX(t),s=e.getZ(t),r=e.getX(t+64)-n,a=e.getZ(t+64)-s,o=0;for(let c=1;c<64;c++)o=Math.max(o,Math.hypot(e.getX(t+c)-n-r*c/64,e.getZ(t+c)-s-a*c/64));return o}};var ut=8,rn=ut*800/529;function Gh(i){let e=new St;e.name="persistent-book";let t=new ft({color:"#ffffff",roughness:.92}),n=new ft({color:"#635038",roughness:.68,metalness:.08}),s=new ft({color:"#b99e67",roughness:.48,metalness:.45});function r(x,y,T,U,k,L,B=.06){let z=new We(new er(x,y,T,2,B),U);return z.position.set(k,0,L),z.castShadow=!0,z.receiveShadow=!0,e.add(z),z}r(ut+.18,rn+.2,.22,n,ut/2,-.45),r(ut-.08,rn-.06,.72,t,ut/2,-.04);let a=r(ut+.18,rn+.2,.22,n,-ut/2,-.45),o=r(ut-.08,rn-.06,.38,t,-ut/2,.11),c=r(.38,rn+.15,.9,n,0,-.06,.08);c.name="rounded-cloth-spine";let l=new ii(new gt(ut-.1,.012,.009),new ft({color:"#bcb19c",roughness:1}),48),d=new Qe;for(let x=0;x<48;x++)d.makeTranslation(ut/2,-rn/2+.028,-.37+x*.015),l.setMatrixAt(x,d);e.add(l);let u=new St;u.name="front-cover-hinge",u.position.z=.44,e.add(u);let f=new We(new er(ut+.16,rn+.16,.16,4,.065),n);f.position.x=ut/2,f.castShadow=!0,f.receiveShadow=!0,u.add(f);let p=new ft({color:"#ffffff",roughness:.52,metalness:.03}),g=new We(new Dt(ut,rn),p);g.position.set(ut/2,0,.085),u.add(g);let _=new bt(i);_.colorSpace=Ct,_.anisotropy=4,_.needsUpdate=!0,p.map=_;let m=new ft({color:"#ffffff",roughness:.94});function h(){let x=new Dt(ut-.08,rn-.06,32,2),y=x.attributes.position;for(let T=0;T<y.count;T++){let U=y.getX(T)+(ut-.08)/2;y.setZ(T,.065*Math.exp(-U*3.5))}return x.computeVertexNormals(),x}let b=new We(h(),m),S=b.geometry.attributes.position;for(let x=0;x<S.count;x++)S.setZ(x,.065*Math.exp(-((ut-.08)/2-S.getX(x))*3.5));b.geometry.computeVertexNormals(),b.position.set(-ut/2,0,.34),b.receiveShadow=!0,e.add(b);let q=r(.045,rn-.1,.015,s,0,.37,.005);q.name="gilded-gutter";let A=new oo(ut,rn);e.add(A.mesh);let w=new ft({color:"#ffffff",roughness:.92}),C=new We(h(),w);C.position.set(ut/2,0,.33),C.receiveShadow=!0,e.add(C);let I=new St;return e.add(I),{group:e,hinge:u,page:A,paperMat:t,imprint:I,surfaceMaterial:w,leftMaterial:m,coverTexture:_,update(x,y){e.rotation.set(-Math.PI/2*x.flat,y.x*.012*(1-x.dive),y.y*.009*(1-x.dive)),e.position.x=-ut/2*(1-x.opening),e.position.y=0,e.scale.setScalar(1+4*x.dive),u.rotation.y=-x.opening*Math.PI,u.position.z=.44-.3*x.opening,a.visible=o.visible=b.visible=x.opening>0,[a,o,b].forEach(T=>{T.scale.x=Math.max(.001,x.opening),T.position.x=-ut/2*x.opening}),A.update(x.turn)}}}var lo=class extends ai{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new zs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let c=r.parse(JSON.parse(o));t&&t(c)},n,s)}parse(e){return new Fl(e)}},Fl=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],s=im(e,t,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}};function im(i,e,t){let n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,a=[],o=0,c=0;for(let l=0;l<n.length;l++){let d=n[l];if(d===`
`)o=0,c-=r;else{let u=sm(d,s,o,c,t);o+=u.offsetX,a.push(u.path)}}return a}function sm(i,e,t,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let a=new Gs,o,c,l,d,u,f,p,g;if(r.o){let _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,h=_.length;m<h;)switch(_[m++]){case"m":o=_[m++]*e+t,c=_[m++]*e+n,a.moveTo(o,c);break;case"l":o=_[m++]*e+t,c=_[m++]*e+n,a.lineTo(o,c);break;case"q":l=_[m++]*e+t,d=_[m++]*e+n,u=_[m++]*e+t,f=_[m++]*e+n,a.quadraticCurveTo(u,f,l,d);break;case"b":l=_[m++]*e+t,d=_[m++]*e+n,u=_[m++]*e+t,f=_[m++]*e+n,p=_[m++]*e+t,g=_[m++]*e+n,a.bezierCurveTo(u,f,p,g,l,d);break}}return{offsetX:r.ha*e,path:a}}var es=class extends Ns{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let s=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}};var Wh={glyphs:{\u03BF:{x_min:41,x_max:710,ha:753,o:"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},S:{x_min:50,x_max:639,ha:699,o:"m 88 208 q 179 88 122 131 q 318 46 237 46 q 457 98 397 46 q 518 227 518 150 q 401 400 518 336 q 184 498 293 448 q 68 688 68 566 q 156 880 68 811 q 370 950 244 950 q 480 936 430 950 q 597 891 530 922 q 570 822 583 858 q 553 756 558 786 l 539 756 q 354 897 502 897 q 231 855 282 897 q 181 742 181 813 q 298 580 181 640 q 519 483 408 531 q 639 286 639 413 q 538 68 639 152 q 301 -15 438 -15 q 166 2 229 -15 q 50 59 104 19 q 68 135 62 104 q 75 205 75 166 l 88 208 "},"/":{x_min:-36.03125,x_max:404.15625,ha:383,o:"m -36 -125 l 340 1025 l 404 1024 l 28 -126 l -36 -125 "},\u03A4:{x_min:11,x_max:713,ha:725,o:"m 11 839 l 15 884 l 11 932 q 194 927 72 932 q 361 922 316 922 q 544 927 421 922 q 713 932 668 932 q 707 883 707 911 q 707 861 707 870 q 713 834 707 852 q 609 850 666 843 q 504 857 552 857 l 428 857 q 426 767 428 830 q 424 701 424 704 l 428 220 q 442 0 428 122 q 362 8 401 3 q 323 5 344 8 q 282 0 301 2 q 289 132 282 40 q 296 259 296 225 l 296 683 l 296 857 q 11 839 164 857 "},\u03D5:{x_min:41,x_max:960,ha:1006,o:"m 441 -10 q 162 76 283 -10 q 41 316 41 163 q 162 562 41 470 q 441 654 283 654 q 434 838 441 719 q 427 971 427 957 q 464 965 443 968 q 503 962 485 962 q 540 965 519 962 q 578 970 560 968 q 563 654 563 824 q 839 567 719 654 q 960 324 960 481 q 841 79 960 169 q 563 -10 722 -10 q 570 -201 563 -68 q 578 -371 578 -334 q 505 -362 539 -362 q 465 -365 483 -362 q 427 -372 446 -368 q 434 -161 427 -297 q 441 -10 441 -26 m 563 39 q 757 118 690 39 q 824 330 824 198 q 750 523 824 445 q 564 601 677 601 l 563 319 l 563 39 m 441 319 l 441 601 q 253 523 326 601 q 180 330 180 446 q 245 117 180 195 q 439 39 310 39 l 441 319 "},y:{x_min:4.171875,x_max:665.28125,ha:664,o:"m 4 654 l 86 647 l 165 654 q 202 536 188 577 q 241 431 215 495 l 363 129 l 473 413 q 552 654 519 537 q 606 647 583 647 q 665 654 633 647 q 416 125 531 388 q 223 -372 301 -137 l 187 -366 q 141 -366 163 -366 q 112 -372 122 -370 l 290 -22 q 4 654 170 294 "},"\u2248":{x_min:118.0625,x_max:1019.453125,ha:1139,o:"m 765 442 q 564 487 700 442 q 376 533 429 533 q 250 506 298 533 q 118 427 202 480 l 118 501 q 245 572 180 545 q 376 600 311 600 q 574 553 438 600 q 765 507 709 507 q 888 534 829 507 q 1019 614 947 562 l 1019 538 q 892 467 954 493 q 765 442 830 442 m 759 214 q 568 260 702 214 q 376 307 433 307 q 236 272 300 307 q 118 202 173 238 l 118 277 q 247 346 181 320 q 380 372 312 372 q 570 326 445 372 q 765 281 695 281 q 883 306 830 281 q 1019 388 936 331 l 1019 313 q 894 240 959 266 q 759 214 829 214 "},\u03A0:{x_min:108,x_max:927.453125,ha:1036,o:"m 432 846 l 263 846 q 260 634 263 781 q 257 475 257 486 q 262 236 257 395 q 268 0 268 77 q 229 3 255 0 q 188 8 202 8 q 149 3 177 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 803 q 285 926 166 932 q 464 921 405 921 q 695 926 541 921 q 927 932 849 932 q 915 793 921 871 q 909 659 909 716 l 909 504 q 917 245 909 427 q 926 0 926 62 q 887 4 913 0 q 847 8 860 8 q 810 5 827 8 q 768 0 792 2 q 773 259 768 94 q 778 469 778 423 l 778 731 l 773 846 l 432 846 "},\u0390:{x_min:-41,x_max:384,ha:342,o:"m 105 333 l 105 520 q 104 566 105 544 q 97 654 103 588 q 141 647 131 648 q 166 647 152 647 q 234 654 196 647 q 225 555 226 599 q 224 437 224 510 l 224 406 q 229 194 224 337 q 234 0 234 51 q 202 3 217 1 q 166 5 186 5 q 128 3 149 5 q 97 0 108 1 q 101 165 97 51 q 105 333 105 279 m 18 865 q 61 846 43 865 q 80 804 80 828 q 61 761 80 779 q 18 743 43 743 q -22 761 -4 743 q -41 804 -41 779 q -22 846 -41 828 q 18 865 -4 865 m 172 929 q 189 969 179 956 q 225 982 199 982 q 256 971 243 982 q 270 941 270 961 q 257 904 270 919 l 149 743 l 117 743 l 172 929 m 324 865 q 366 846 348 865 q 384 804 384 828 q 366 761 384 779 q 324 743 348 743 q 281 761 298 743 q 265 804 265 779 q 281 846 265 828 q 324 865 298 865 "},g:{x_min:32,x_max:672,ha:688,o:"m 81 123 q 112 201 81 169 q 193 252 144 233 l 193 262 q 97 329 130 277 q 64 447 64 380 q 141 610 64 549 q 323 672 218 672 q 421 661 357 672 q 500 650 486 651 l 672 654 l 672 582 q 599 592 635 587 q 537 597 563 597 q 607 458 607 548 q 527 294 607 356 q 342 232 447 232 q 291 235 319 232 q 255 239 262 239 q 208 220 228 239 q 188 173 188 201 q 221 120 188 136 q 296 104 254 104 l 427 104 q 603 56 534 104 q 672 -93 672 9 q 560 -299 672 -226 q 309 -372 448 -372 q 115 -327 199 -372 q 32 -183 32 -283 q 76 -62 32 -110 q 193 8 121 -13 q 112 51 143 25 q 81 123 81 77 m 332 278 q 439 332 401 278 q 478 457 478 386 q 441 575 478 525 q 338 625 404 625 q 232 570 271 625 q 194 447 194 515 q 230 328 194 379 q 332 278 266 278 m 337 -316 q 491 -270 423 -316 q 559 -141 559 -224 q 500 -29 559 -62 q 353 3 441 3 q 199 -36 263 3 q 136 -162 136 -76 q 195 -277 136 -238 q 337 -316 255 -316 "},"\xB2":{x_min:15.28125,x_max:412.5,ha:496,o:"m 297 744 q 270 830 297 795 q 197 866 244 866 q 120 837 149 866 q 83 761 90 808 l 76 759 q 54 802 68 780 q 31 837 40 824 q 210 901 108 901 q 334 862 278 901 q 390 758 390 824 q 282 568 390 656 q 111 428 174 479 l 293 428 q 350 431 316 428 q 412 439 384 434 l 406 397 l 412 356 l 304 361 l 111 361 l 15 355 l 15 378 q 220 567 144 484 q 297 744 297 651 "},\u039A:{x_min:108,x_max:856.625,ha:821,o:"m 255 314 q 261 132 255 250 q 268 0 268 13 q 229 4 255 0 q 188 8 202 8 q 148 4 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 712 126 621 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 203 925 q 267 932 259 932 l 255 671 l 255 499 q 480 693 375 586 q 687 932 585 800 q 732 932 710 932 q 777 932 753 932 l 837 932 q 606 727 720 830 q 389 522 493 623 q 525 358 465 426 q 666 202 586 290 q 856 0 747 115 l 746 0 q 692 -1 716 0 q 644 -8 669 -2 q 571 92 610 44 q 477 204 532 140 l 255 459 l 255 314 "},\u00EB:{x_min:40,x_max:646.9375,ha:681,o:"m 406 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 313 335 315 335 l 179 331 q 235 127 179 212 q 406 42 291 42 m 219 929 q 271 906 249 929 q 294 854 294 884 q 273 800 294 822 q 221 778 252 778 q 166 800 190 778 q 143 854 143 822 q 165 906 143 884 q 219 929 187 929 m 460 929 q 513 906 492 929 q 534 854 534 884 q 513 799 534 820 q 461 778 493 778 q 407 800 429 778 q 385 854 385 822 q 407 906 385 884 q 460 929 429 929 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},e:{x_min:41,x_max:645.15625,ha:681,o:"m 406 42 q 602 130 523 42 l 618 125 q 611 86 614 104 q 609 44 609 67 q 497 0 561 14 q 370 -15 434 -15 q 130 73 220 -15 q 41 311 41 161 q 127 563 41 455 q 356 672 214 672 q 563 592 482 672 q 645 385 645 512 l 643 331 l 313 335 l 179 331 q 235 126 179 210 q 406 42 291 42 m 511 392 l 513 436 q 470 563 513 509 q 356 618 427 618 q 230 553 268 618 q 179 388 191 488 l 511 392 "},\u03CC:{x_min:41,x_max:710,ha:753,o:"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 524 943 q 558 974 542 964 q 595 985 574 985 q 632 969 618 985 q 646 932 646 954 q 632 897 646 911 q 591 866 618 883 l 390 743 l 341 743 l 524 943 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},J:{x_min:-71,x_max:277,ha:385,o:"m 118 -40 q 131 62 128 9 q 135 184 135 115 q 132 462 135 325 q 127 690 130 598 q 111 932 123 782 q 159 928 129 932 q 193 925 189 925 q 238 927 221 925 q 277 932 256 929 q 268 665 277 843 q 260 457 260 487 l 260 165 q 260 107 260 147 q 260 48 260 68 q 169 -155 260 -88 q -62 -222 79 -222 l -71 -180 q 50 -134 1 -166 q 118 -40 100 -102 "},"\xBB":{x_min:43,x_max:543,ha:607,o:"m 196 322 l 43 607 l 81 645 l 303 322 l 81 0 l 43 37 l 196 322 m 436 322 l 283 607 l 322 645 l 543 322 l 322 0 l 283 37 l 436 322 "},"\xA9":{x_min:80,x_max:1058,ha:1139,o:"m 816 905 q 992 726 927 841 q 1058 481 1058 611 q 912 138 1058 283 q 567 -6 766 -6 q 225 139 370 -6 q 80 481 80 284 q 224 826 80 681 q 569 971 368 971 q 816 905 698 971 m 569 918 q 263 788 392 918 q 134 481 134 659 q 261 175 134 306 q 566 45 389 45 q 872 174 741 45 q 1004 478 1004 304 q 947 699 1004 596 q 787 859 890 801 q 569 918 684 918 m 570 724 q 441 652 483 724 q 399 490 399 581 q 438 320 399 396 q 560 245 478 245 q 664 278 621 245 q 723 370 707 311 l 798 370 q 720 232 788 283 q 561 181 653 181 q 379 268 446 181 q 313 476 313 355 q 380 694 313 604 q 571 785 447 785 q 717 738 656 785 q 793 610 779 691 l 715 610 q 664 692 705 660 q 570 724 624 724 "},\u03CE:{x_min:39.71875,x_max:1028.9375,ha:1068,o:"m 534 528 l 596 528 l 594 305 q 616 117 594 193 q 722 42 638 42 q 850 118 811 42 q 888 293 888 194 q 829 502 888 409 q 664 654 769 594 l 717 648 q 805 654 766 648 q 967 510 905 606 q 1028 304 1028 413 q 948 81 1028 177 q 744 -15 867 -15 q 622 16 678 -15 q 534 104 566 47 q 445 16 500 48 q 323 -15 389 -15 q 118 83 196 -15 q 39 311 39 182 q 100 511 39 419 q 262 654 161 604 q 303 650 278 651 q 349 648 327 648 l 402 654 q 238 501 296 593 q 179 291 179 409 q 218 116 179 191 q 348 42 257 42 q 419 68 390 42 q 461 138 448 94 q 472 216 469 175 q 475 303 475 257 q 472 420 475 353 q 469 529 470 486 l 534 528 m 681 943 q 714 974 699 964 q 751 985 730 985 q 788 969 774 985 q 802 932 802 954 q 787 896 802 912 q 746 866 773 880 l 547 743 l 498 743 l 681 943 "},"\u2265":{x_min:176.1875,x_max:963,ha:1139,o:"m 963 462 l 176 196 l 176 266 l 850 491 l 176 718 l 176 788 l 963 522 l 963 462 m 963 26 l 176 26 l 176 93 l 963 93 l 963 26 "},"^":{x_min:0,x_max:390,ha:403,o:"m 150 978 l 239 978 l 390 743 l 344 743 l 195 875 l 49 743 l 0 743 l 150 978 "},"\xAB":{x_min:48,x_max:549.390625,ha:607,o:"m 152 326 l 309 42 l 268 3 l 48 326 l 268 649 l 309 611 l 152 326 m 394 326 l 549 42 l 509 3 l 288 326 l 509 649 l 549 611 l 394 326 "},D:{x_min:108,x_max:991,ha:1043,o:"m 126 465 q 117 704 126 536 q 108 931 108 872 l 210 929 q 350 934 251 929 q 477 939 449 939 q 579 936 553 939 q 709 917 605 934 q 902 775 814 900 q 991 483 991 650 q 852 130 991 261 q 491 0 713 0 l 378 0 l 228 7 l 203 7 q 148 4 173 7 q 108 0 123 1 q 117 239 108 70 q 126 465 126 408 m 402 64 q 724 168 609 64 q 840 479 840 273 q 730 774 840 671 q 428 878 621 878 q 345 873 400 878 q 262 869 289 869 l 255 497 l 255 376 l 262 76 q 332 68 292 72 q 402 64 373 64 "},w:{x_min:4.171875,x_max:1052.78125,ha:1047,o:"m 4 655 q 55 648 41 648 q 86 647 69 647 q 165 654 120 647 q 190 540 176 587 q 238 394 204 492 l 329 141 q 498 654 419 386 q 551 647 526 647 q 609 654 577 647 q 637 544 620 601 q 677 420 654 487 l 770 135 l 872 413 q 911 532 893 472 q 944 654 930 592 q 979 647 970 648 q 1000 647 988 647 q 1052 654 1022 647 q 961 457 1002 555 q 871 235 919 359 q 782 0 824 110 q 755 3 772 0 q 733 6 738 6 q 708 3 724 6 q 686 0 692 0 q 650 127 667 72 q 611 239 632 183 l 518 494 q 432 258 475 382 q 348 0 390 134 q 325 3 336 1 q 297 5 313 5 q 269 3 284 5 q 245 0 254 1 q 162 244 200 140 q 86 447 125 347 q 4 655 47 546 "},$:{x_min:89,x_max:666,ha:749,o:"m 139 186 l 146 186 q 213 91 165 119 q 342 50 261 63 l 342 416 q 142 515 196 458 q 89 648 89 573 q 164 819 89 752 q 342 886 239 886 q 330 985 342 936 l 359 979 l 404 984 q 400 924 401 945 q 399 886 399 904 q 510 874 457 886 q 605 834 562 862 q 582 788 592 808 q 555 729 572 768 l 547 729 q 495 810 535 783 q 399 837 455 837 l 399 520 q 610 419 554 479 q 666 277 666 359 q 588 87 666 164 q 399 0 511 9 l 399 -32 q 399 -63 399 -48 q 405 -125 400 -78 l 368 -121 l 329 -125 l 342 0 q 210 13 273 0 q 98 58 147 27 l 139 186 m 342 836 q 237 787 278 826 q 196 686 196 748 q 237 588 196 626 q 342 537 279 551 l 342 836 m 553 231 q 513 337 553 300 q 399 402 473 375 l 399 51 q 512 113 471 66 q 553 231 553 159 "},"\u2027":{x_min:134,x_max:309,ha:446,o:"m 222 636 q 284 611 259 636 q 309 548 309 586 q 284 486 309 512 q 222 461 260 461 q 160 486 186 461 q 134 548 134 511 q 159 610 134 584 q 222 636 185 636 "},"\\":{x_min:-36,x_max:403.140625,ha:383,o:"m -36 1025 l 28 1025 l 403 -125 l 340 -125 l -36 1025 "},\u0399:{x_min:109,x_max:271,ha:385,o:"m 127 465 q 123 711 127 620 q 109 932 120 803 q 154 927 129 929 q 190 925 179 925 q 238 928 209 925 q 271 931 266 931 q 263 788 271 887 q 256 659 256 690 l 256 448 l 256 283 q 263 135 256 238 q 271 0 271 31 q 231 3 258 0 q 190 8 204 8 q 151 5 172 8 q 109 0 129 2 q 118 239 109 70 q 127 465 127 408 "},\u038E:{x_min:-1,x_max:1204.5625,ha:1165,o:"m 758 177 l 758 386 q 651 570 717 458 q 543 750 585 681 q 431 931 501 819 q 483 928 449 931 q 522 925 518 925 q 572 927 550 925 q 606 931 593 930 q 666 800 633 866 q 735 676 699 734 l 849 475 q 968 688 910 575 q 1086 931 1027 801 l 1142 926 q 1174 927 1160 926 q 1204 931 1187 929 q 1014 627 1099 769 l 891 415 l 891 240 q 894 101 891 198 q 897 0 897 5 q 860 4 885 1 q 820 6 835 6 q 778 4 793 6 q 743 0 763 2 q 753 88 748 36 q 758 177 758 140 m 182 943 q 215 974 200 964 q 252 985 231 985 q 289 969 274 985 q 305 932 305 954 q 290 896 305 911 q 248 866 275 882 l 48 743 l -1 743 l 182 943 "},"\u2019":{x_min:90.28125,x_max:305.5625,ha:374,o:"m 169 859 q 197 923 177 894 q 250 953 218 953 q 288 939 272 953 q 305 902 305 925 q 295 857 305 882 q 269 811 284 833 l 120 568 l 90 576 l 169 859 "},\u039D:{x_min:98,x_max:911.890625,ha:1011,o:"m 112 230 q 114 486 112 315 q 117 741 117 656 l 117 950 l 166 950 q 326 766 239 865 q 468 606 413 667 q 610 451 524 544 l 821 227 l 821 604 q 816 765 821 685 q 803 931 812 845 l 855 927 l 911 931 q 901 831 906 884 q 897 741 897 779 q 894 413 897 619 q 892 165 892 207 l 892 -15 l 849 -15 q 730 125 796 50 q 589 281 664 201 l 193 702 l 193 330 q 212 -1 193 169 l 149 2 l 98 -1 q 108 125 105 79 q 112 230 112 170 "},"-":{x_min:58.328125,x_max:388.890625,ha:449,o:"m 58 390 l 388 390 l 388 273 l 58 273 l 58 390 "},Q:{x_min:51,x_max:1074.609375,ha:1119,o:"m 566 -14 q 194 113 338 -14 q 51 465 51 241 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 756 q 1065 525 1062 551 q 1068 462 1068 499 q 1065 405 1068 429 q 1050 305 1062 381 q 960 144 1038 229 q 748 6 881 59 l 930 -112 q 1004 -161 963 -136 q 1074 -200 1045 -186 q 1008 -228 1035 -214 q 951 -267 980 -243 q 876 -208 912 -234 q 803 -154 841 -182 l 606 -14 l 566 -14 m 202 468 q 290 163 202 283 q 559 43 379 43 q 826 163 738 43 q 915 468 915 284 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 638 267 763 q 202 468 202 552 "},\u03C2:{x_min:44,x_max:613.453125,ha:644,o:"m 305 -206 q 350 -218 325 -218 q 447 -177 407 -218 q 487 -79 487 -136 q 376 55 487 4 q 159 156 266 106 q 44 365 44 231 q 143 585 44 499 q 380 672 242 672 q 506 658 448 672 q 613 616 564 645 q 587 500 595 559 l 562 500 q 501 586 549 557 q 391 616 453 616 q 233 551 296 616 q 170 393 170 486 q 216 271 170 320 q 339 196 263 223 l 467 149 q 569 76 531 119 q 608 -27 608 34 q 522 -206 608 -136 q 321 -293 437 -276 l 305 -206 "},M:{x_min:55,x_max:1165,ha:1238,o:"m 190 950 l 243 950 q 331 772 291 851 q 412 612 370 693 q 504 436 454 532 l 626 214 q 742 435 671 298 q 882 711 813 572 q 1001 950 952 850 l 1052 950 q 1082 649 1067 791 q 1118 341 1098 508 q 1165 0 1139 174 q 1121 8 1139 5 q 1088 11 1103 11 q 1049 6 1071 11 q 1008 0 1027 2 q 998 226 1008 109 q 974 461 989 343 q 944 695 959 579 l 748 312 q 610 0 665 152 l 594 1 l 576 0 q 227 685 402 364 l 188 307 q 172 128 175 179 q 168 0 168 77 q 138 4 157 1 q 110 6 118 6 q 81 4 93 6 q 55 0 68 2 q 121 333 89 168 q 171 652 152 498 q 190 950 190 805 "},\u03A8:{x_min:73,x_max:995.609375,ha:1071,o:"m 609 0 q 561 5 585 2 q 532 8 536 8 q 494 5 515 8 q 456 0 474 2 q 463 151 456 45 q 470 297 470 258 q 180 383 287 297 q 73 650 73 469 l 73 817 l 73 932 q 139 925 110 925 q 180 928 155 925 q 212 931 206 931 q 200 818 204 861 q 197 723 197 774 l 197 688 l 197 638 q 268 438 197 508 q 472 368 340 368 l 473 481 q 464 736 473 566 q 456 932 456 905 q 499 927 481 929 q 532 925 518 925 q 577 927 557 925 q 609 931 596 930 q 601 635 609 841 q 594 368 594 429 l 645 372 q 816 465 765 372 q 868 691 868 559 q 861 829 868 740 q 855 932 855 919 q 896 927 878 929 q 924 925 913 925 q 971 927 955 925 q 995 931 987 930 l 994 839 l 994 675 q 894 388 994 480 q 594 297 794 297 q 601 142 594 249 q 609 0 609 35 "},C:{x_min:51,x_max:881.5625,ha:913,o:"m 828 737 q 552 889 733 889 q 295 768 383 889 q 207 469 207 647 q 299 177 207 305 q 551 50 391 50 q 710 86 637 50 q 855 189 783 122 l 870 183 q 858 122 862 147 q 855 69 855 97 q 521 -15 699 -15 q 180 116 309 -15 q 51 462 51 248 q 189 820 51 690 q 556 950 327 950 q 719 930 638 950 q 881 875 799 911 q 857 809 867 843 q 845 737 847 775 l 828 737 "},\u0153:{x_min:39,x_max:1195.9375,ha:1226,o:"m 359 -15 q 125 76 212 -15 q 39 318 39 167 q 125 571 39 470 q 362 672 212 672 q 514 640 441 672 q 641 551 588 608 q 897 672 741 672 q 1110 593 1024 672 q 1195 390 1195 515 l 1193 331 q 1022 332 1108 331 q 851 334 935 333 l 708 331 q 765 124 708 206 q 944 42 822 42 q 1145 130 1068 42 l 1162 130 q 1155 85 1158 110 q 1151 47 1152 60 q 1036 0 1100 14 q 904 -15 973 -15 q 754 12 819 -15 q 641 106 689 40 q 514 14 584 44 q 359 -15 444 -15 m 376 625 q 224 534 270 625 q 179 328 179 443 q 224 124 179 215 q 369 34 269 34 q 521 127 470 34 q 573 328 573 221 q 526 534 573 443 q 376 625 480 625 m 1061 392 l 1061 423 q 1017 561 1061 504 q 894 618 973 618 q 756 549 805 618 q 708 390 708 480 l 1061 392 "},"!":{x_min:136,x_max:312,ha:449,o:"m 223 156 q 285 130 259 156 q 312 68 312 105 q 285 8 312 32 q 223 -15 259 -15 q 161 9 187 -15 q 136 68 136 33 q 160 130 136 105 q 223 156 185 156 m 150 752 l 144 841 q 161 919 144 888 q 223 950 178 950 q 282 925 260 950 q 304 863 304 901 q 299 808 304 845 q 295 752 295 770 l 246 250 q 223 250 238 250 q 199 250 206 250 l 150 752 "},\u00E7:{x_min:34,x_max:614.5625,ha:644,o:"m 607 119 l 592 41 q 490 -2 549 10 q 363 -15 431 -15 q 130 80 227 -15 q 34 313 34 175 q 132 576 34 480 q 397 672 231 672 q 511 659 456 672 q 614 617 565 647 q 597 558 604 587 q 584 492 589 528 l 570 492 q 507 587 547 553 q 406 622 467 622 q 234 534 293 622 q 176 329 176 447 q 238 126 176 211 q 414 42 300 42 q 592 124 521 42 l 607 119 m 202 -212 q 350 -246 273 -246 q 414 -232 388 -246 q 440 -186 440 -219 q 421 -142 440 -158 q 373 -126 402 -126 l 323 -126 l 323 0 l 367 0 l 367 -77 l 404 -73 q 495 -102 457 -73 q 533 -183 533 -132 q 494 -270 533 -237 q 402 -303 456 -303 q 286 -294 335 -303 q 184 -261 238 -286 l 202 -212 "},"{":{x_min:116,x_max:567.390625,ha:683,o:"m 491 909 q 421 874 445 909 q 397 792 397 839 l 397 744 l 397 583 q 368 434 397 493 q 263 354 339 376 q 367 272 338 332 q 397 125 397 212 l 397 -35 q 414 -149 397 -108 q 471 -197 431 -191 q 529 -204 511 -204 q 567 -204 548 -204 l 567 -276 q 387 -239 459 -276 q 315 -105 315 -203 l 315 -28 l 315 132 q 296 244 315 194 q 240 303 277 294 q 176 314 204 312 q 116 317 148 317 l 116 389 q 270 429 225 389 q 315 576 315 469 l 315 737 q 348 918 315 870 q 450 977 381 966 q 567 983 503 983 l 567 912 l 491 909 "},X:{x_min:0,x_max:739,ha:739,o:"m 200 285 l 318 456 q 18 932 159 718 q 63 929 33 932 q 109 926 94 926 q 168 929 147 926 q 198 932 188 932 q 296 743 244 841 q 391 568 348 644 l 489 726 q 597 932 548 825 q 627 927 614 929 q 661 926 641 926 q 693 929 671 926 q 728 932 715 932 q 616 781 673 862 q 524 652 558 700 l 427 512 q 523 347 480 419 q 614 197 566 275 q 739 0 662 119 q 686 3 719 0 q 647 6 652 6 q 595 4 618 6 q 558 0 572 1 q 459 197 512 97 q 353 398 405 298 l 265 249 q 174 96 193 130 q 127 0 155 62 q 89 3 113 0 q 62 6 65 6 q 26 4 43 6 q 0 0 9 1 l 200 285 "},\u00F4:{x_min:40,x_max:712,ha:753,o:"m 371 -15 q 131 79 223 -15 q 40 322 40 173 q 133 572 40 473 q 380 672 227 672 q 621 575 530 672 q 712 327 712 479 q 619 80 712 175 q 371 -15 527 -15 m 332 978 l 421 978 l 572 743 l 525 743 l 376 875 l 229 743 l 180 743 l 332 978 m 377 622 q 227 532 274 622 q 180 327 180 442 q 227 125 180 216 q 375 35 274 35 q 524 124 478 35 q 570 327 570 214 q 524 531 570 441 q 377 622 479 622 "},"#":{x_min:78,x_max:972.4375,ha:1050,o:"m 497 647 l 675 647 l 791 969 l 877 968 l 761 647 l 972 647 l 948 576 l 736 576 l 671 390 l 896 390 l 873 319 l 644 319 l 531 0 l 446 0 l 559 319 l 382 319 l 266 0 l 182 0 l 294 319 l 78 319 l 102 390 l 320 390 l 386 576 l 151 576 l 176 647 l 410 647 l 526 969 l 610 969 l 497 647 m 472 576 l 407 390 l 587 390 l 650 576 l 472 576 "},\u03B9:{x_min:96,x_max:233.5,ha:342,o:"m 104 333 l 104 521 q 103 567 104 545 q 96 655 102 589 q 141 648 130 648 q 165 647 151 647 q 233 654 196 647 q 224 555 226 599 q 223 437 223 511 l 223 406 q 228 194 223 337 q 233 0 233 51 q 201 3 216 1 q 165 5 185 5 q 127 3 148 5 q 96 0 107 1 q 100 165 96 51 q 104 333 104 279 "},\u0386:{x_min:12,x_max:910.609375,ha:896,o:"m 328 639 l 458 950 q 489 944 464 947 q 522 950 507 944 q 655 613 602 745 q 770 331 709 480 q 910 0 832 181 q 859 3 891 0 q 823 6 827 6 q 772 4 795 6 q 735 0 749 1 q 672 195 692 135 q 613 353 652 255 l 449 358 l 285 353 l 233 205 q 173 0 194 94 l 116 5 q 76 2 91 5 q 55 0 62 0 q 146 211 101 105 q 229 404 192 317 q 328 639 266 490 m 195 943 q 228 974 213 964 q 265 985 244 985 q 302 969 287 985 q 318 932 318 954 q 303 896 318 911 q 261 866 288 882 l 61 743 l 12 743 l 195 943 m 450 419 l 585 425 l 451 761 l 318 425 l 450 419 "},")":{x_min:65.671875,x_max:332,ha:449,o:"m 332 376 q 271 81 332 217 q 96 -183 211 -54 q 65 -151 83 -164 q 193 104 155 -16 q 232 386 232 226 q 191 661 232 533 q 65 918 150 789 q 96 950 87 933 q 273 681 215 816 q 332 376 332 545 "},\u03B5:{x_min:53,x_max:567,ha:628,o:"m 506 516 q 433 591 467 566 q 353 616 400 616 q 261 580 298 616 q 225 492 225 545 q 268 406 225 437 q 372 375 311 375 l 418 375 l 417 349 l 417 310 l 343 317 q 236 282 280 317 q 193 183 193 247 q 238 77 193 117 q 352 38 284 38 q 460 66 410 38 q 543 144 510 94 q 553 99 547 121 q 567 54 558 76 q 452 2 515 19 q 321 -15 388 -15 q 134 31 216 -15 q 53 175 53 78 q 95 286 53 246 q 214 355 137 326 q 127 408 162 370 q 93 497 93 445 q 165 625 93 579 q 323 672 237 672 q 430 654 378 672 q 541 604 481 637 q 522 564 529 584 q 506 516 514 545 "},\u0394:{x_min:0,x_max:899,ha:899,o:"m 899 0 q 701 5 833 0 q 501 11 569 11 q 251 5 418 11 q 0 0 84 0 q 225 473 126 251 q 407 932 323 696 q 432 929 415 932 q 457 926 448 926 q 482 927 471 926 q 505 932 493 929 q 691 449 601 664 q 899 0 782 234 m 281 429 q 158 90 212 259 q 290 84 201 90 q 423 79 379 79 l 456 79 q 587 81 550 79 q 692 90 625 83 l 651 188 l 576 383 l 422 778 l 281 429 "},\u00E2:{x_min:43,x_max:655.5,ha:649,o:"m 234 -15 q 98 33 153 -15 q 43 162 43 82 q 106 303 43 273 q 303 364 169 333 q 444 448 437 395 q 403 568 444 521 q 288 616 362 616 q 191 587 233 616 q 124 507 149 559 l 95 520 l 104 591 q 202 651 144 631 q 323 672 261 672 q 500 622 444 672 q 557 455 557 573 l 557 133 q 567 69 557 84 q 618 54 577 54 q 655 58 643 54 l 655 26 q 594 5 626 14 q 537 -6 562 -3 q 438 85 453 -6 q 342 10 388 35 q 234 -15 296 -15 m 279 978 l 368 978 l 522 743 l 471 743 l 323 875 l 176 743 l 126 743 l 279 978 m 176 186 q 204 98 176 133 q 284 64 232 64 q 390 107 342 64 q 438 212 438 151 l 438 345 q 239 293 303 319 q 176 186 176 268 "},"}":{x_min:114,x_max:567,ha:683,o:"m 369 576 q 405 438 369 487 q 527 389 441 389 l 567 389 l 567 317 q 415 278 461 317 q 369 132 369 239 l 369 -28 q 319 -229 369 -182 q 114 -276 270 -276 l 114 -204 q 252 -172 218 -204 q 286 -83 286 -141 l 286 -35 l 286 125 q 314 271 286 212 q 418 354 342 329 q 311 435 337 382 q 286 584 286 488 l 286 745 q 268 860 286 818 q 191 913 251 903 l 114 913 l 114 983 l 186 982 q 287 960 242 982 q 346 900 331 938 q 365 822 362 862 q 369 737 369 783 l 369 576 "},"\u2030":{x_min:28,x_max:1511,ha:1536,o:"m 799 0 q 647 62 708 0 q 586 218 586 124 q 647 372 586 309 q 799 436 709 436 q 949 373 888 436 q 1011 223 1011 311 q 995 130 1011 176 q 918 35 972 70 q 799 0 865 0 m 1298 0 q 1146 62 1206 0 q 1087 218 1087 124 q 1148 372 1087 308 q 1299 436 1209 436 q 1449 373 1388 436 q 1511 223 1511 311 q 1494 130 1511 169 q 1418 34 1472 69 q 1298 0 1365 0 m 241 448 q 89 510 150 448 q 28 663 28 573 q 89 820 28 755 q 241 885 151 885 q 391 823 329 885 q 453 672 453 761 q 434 580 453 620 q 359 483 412 518 q 241 448 307 448 m 863 1015 l 227 -125 l 158 -125 l 793 1015 l 863 1015 m 897 260 q 872 353 897 310 q 798 397 847 397 q 718 340 737 397 q 700 202 700 283 q 719 86 700 133 q 798 40 738 40 q 866 73 840 40 q 892 149 892 106 q 895 206 894 169 q 897 260 897 242 m 339 684 q 319 797 339 750 q 244 845 300 845 q 161 784 182 845 q 141 645 141 723 q 165 540 141 590 q 237 490 189 490 q 303 524 278 490 q 334 598 329 558 q 339 684 339 638 m 1397 260 q 1373 356 1397 315 q 1297 397 1349 397 q 1218 340 1237 397 q 1200 202 1200 283 q 1219 87 1200 134 q 1297 40 1238 40 q 1366 73 1340 40 q 1392 149 1392 106 q 1395 206 1394 169 q 1397 260 1397 242 "},\u00C4:{x_min:-16,x_max:839.5625,ha:826,o:"m 258 638 l 389 951 q 420 945 395 948 q 453 951 438 945 q 570 651 500 826 q 688 360 640 477 q 839 0 736 242 q 788 3 820 0 q 752 6 756 6 q 702 3 728 6 q 665 0 675 0 q 599 204 615 158 q 542 357 584 251 l 378 357 l 214 357 l 161 207 q 130 109 147 170 q 102 0 113 47 l 45 5 q 20 4 29 5 q -16 0 10 4 q 72 203 29 105 q 169 427 115 301 q 258 638 222 552 m 293 1208 q 345 1186 325 1208 q 366 1133 366 1164 q 345 1080 366 1102 q 293 1058 324 1058 q 239 1080 261 1058 q 217 1133 217 1102 q 239 1185 217 1163 q 293 1208 261 1208 m 535 1208 q 587 1186 565 1208 q 609 1133 609 1164 q 587 1080 609 1103 q 535 1058 565 1058 q 481 1080 503 1058 q 459 1133 459 1102 q 481 1185 459 1163 q 535 1208 503 1208 m 378 421 l 515 425 l 381 762 l 247 425 l 378 421 "},a:{x_min:44,x_max:653.734375,ha:647,o:"m 233 -15 q 99 33 154 -15 q 44 162 44 82 q 105 302 44 273 q 302 363 167 331 q 444 448 437 395 q 401 567 444 519 q 287 615 359 615 q 190 587 231 615 q 124 508 149 560 l 95 519 l 103 591 q 204 651 148 631 q 323 672 260 672 q 499 623 443 672 q 555 457 555 574 l 555 132 q 566 70 555 86 q 616 55 578 55 l 653 55 l 653 26 q 594 4 624 15 q 536 -6 564 -6 q 468 15 492 -6 q 436 83 445 38 q 341 9 387 34 q 233 -15 294 -15 m 175 185 q 204 99 175 135 q 282 63 234 63 q 389 106 343 63 q 436 211 436 150 l 436 344 q 239 294 304 320 q 175 185 175 268 "},"\u2014":{x_min:226.390625,x_max:1138.890625,ha:1367,o:"m 226 375 l 1138 375 l 1138 292 l 226 292 l 226 375 "},"=":{x_min:169.4375,x_max:969.453125,ha:1139,o:"m 969 499 l 169 499 l 169 564 l 969 564 l 969 499 m 969 248 l 169 248 l 169 315 l 969 315 l 969 248 "},N:{x_min:98,x_max:911.890625,ha:1011,o:"m 112 230 q 114 486 112 315 q 117 741 117 656 l 117 950 l 166 950 q 326 766 239 865 q 468 606 413 667 q 610 451 524 544 l 821 227 l 821 604 q 816 765 821 685 q 803 931 812 845 l 855 927 l 911 931 q 901 831 906 884 q 897 741 897 779 q 894 413 897 619 q 892 165 892 207 l 892 -15 l 849 -15 q 730 125 796 50 q 589 281 664 201 l 193 702 l 193 330 q 212 -1 193 169 l 149 2 l 98 -1 q 108 125 105 79 q 112 230 112 170 "},\u03C1:{x_min:65,x_max:711,ha:758,o:"m 191 -99 q 195 -235 191 -145 q 199 -371 199 -325 q 161 -367 169 -367 q 134 -366 153 -366 q 96 -368 116 -366 q 65 -372 76 -370 q 70 -190 65 -311 q 76 -8 76 -69 q 73 166 76 67 q 70 329 71 265 q 148 578 70 484 q 380 672 226 672 q 617 573 524 672 q 711 329 711 474 q 625 84 711 184 q 396 -15 539 -15 q 285 7 334 -15 q 191 78 236 30 l 191 -99 m 377 619 q 231 533 271 619 q 191 327 191 447 q 241 103 191 169 q 376 38 292 38 q 525 125 479 38 q 571 326 571 212 q 525 529 571 440 q 377 619 480 619 "},"2":{x_min:22,x_max:622,ha:749,o:"m 449 648 q 410 789 449 727 q 298 851 371 851 q 173 802 219 851 q 128 676 128 753 l 118 673 q 84 740 100 712 q 47 799 69 768 q 313 911 158 911 q 507 844 426 911 q 589 667 589 777 q 527 479 589 555 q 315 258 466 404 l 169 118 l 442 118 q 531 123 485 118 q 622 136 576 129 q 617 102 619 117 q 616 68 616 87 q 617 37 616 54 q 622 0 619 20 q 438 4 562 0 q 252 8 315 8 q 142 7 195 8 q 22 0 88 6 l 22 40 q 234 238 155 158 q 380 430 312 319 q 449 648 449 541 "},\u00FC:{x_min:90,x_max:664,ha:754,o:"m 653 498 q 653 329 653 443 q 653 158 653 215 q 664 0 653 82 q 631 3 647 1 q 598 5 616 5 q 563 3 583 5 q 533 0 544 1 l 538 118 q 440 18 494 52 q 312 -15 385 -15 q 148 50 201 -15 q 96 229 96 115 l 96 354 l 96 516 l 90 655 q 120 650 103 651 q 158 648 136 648 q 192 650 175 648 q 227 656 210 651 q 220 446 227 592 q 213 247 213 300 q 247 115 213 163 q 362 68 281 68 q 477 113 428 68 q 531 217 525 159 q 538 340 538 274 q 533 520 538 394 q 528 655 528 647 q 558 650 542 651 q 596 648 574 648 q 629 650 612 648 q 663 656 646 651 q 653 498 653 574 m 253 929 q 307 906 285 929 q 330 854 330 884 q 309 800 330 822 q 257 778 288 778 q 202 800 225 778 q 180 854 180 823 q 200 906 180 884 q 253 929 221 929 m 498 929 q 549 906 527 929 q 572 854 572 884 q 551 799 572 820 q 499 778 531 778 q 444 800 466 778 q 422 854 422 822 q 444 906 422 884 q 498 929 466 929 "},Z:{x_min:6.9375,x_max:801.390625,ha:828,o:"m 6 36 q 222 324 112 176 q 425 605 333 473 l 597 857 l 433 857 q 59 836 247 857 l 65 883 l 59 932 q 262 927 134 932 q 427 922 390 922 q 622 927 491 922 q 801 932 754 932 l 801 904 q 594 629 709 785 q 399 361 479 473 q 201 77 319 249 l 427 77 q 581 82 520 77 q 801 103 643 87 l 797 68 l 795 54 l 797 34 l 801 0 q 504 4 683 0 q 325 8 326 8 q 166 4 272 8 q 6 0 61 0 l 6 36 "},u:{x_min:90,x_max:662.21875,ha:754,o:"m 653 497 l 653 156 q 654 83 653 122 q 661 -1 656 44 q 623 3 632 2 q 596 4 615 4 q 572 3 581 4 q 533 -1 563 2 l 536 117 q 439 18 491 51 q 313 -15 386 -15 q 147 48 199 -15 q 96 227 96 112 l 96 352 l 96 516 l 90 654 q 158 647 125 647 q 189 648 178 647 q 226 654 200 650 q 220 450 226 586 q 215 246 215 314 q 248 114 215 163 q 361 66 281 66 q 473 112 426 66 q 527 225 520 158 q 536 340 536 282 q 531 497 536 393 q 527 654 527 601 q 572 647 563 647 q 595 647 581 647 q 626 648 616 647 q 662 654 637 650 l 653 497 "},k:{x_min:97,x_max:677.5625,ha:683,o:"m 104 656 q 100 873 104 741 q 97 1025 97 1005 q 164 1018 134 1018 q 231 1025 196 1018 q 227 825 231 962 q 223 622 223 687 l 223 377 l 245 377 q 507 654 391 506 q 563 647 538 647 q 616 647 589 647 q 648 652 638 651 l 349 398 l 548 165 q 608 93 577 127 q 677 19 638 59 l 677 0 q 628 3 659 0 q 591 6 597 6 q 544 3 567 6 q 510 0 520 0 q 438 101 473 54 q 360 197 402 148 l 269 308 l 252 324 l 223 326 q 227 164 223 272 q 231 0 231 55 q 200 4 215 2 q 164 5 185 5 q 127 3 146 5 q 97 0 108 1 q 100 386 97 151 q 104 656 104 620 "},\u0397:{x_min:109,x_max:928.453125,ha:1039,o:"m 257 317 q 262 142 257 253 q 267 0 267 30 q 226 3 253 0 q 188 8 200 8 q 147 3 174 8 q 109 0 121 0 q 116 243 109 72 q 124 465 124 415 q 116 710 124 540 q 109 932 109 880 q 152 929 121 932 q 188 926 183 926 q 231 929 200 926 q 267 932 262 932 q 262 719 267 854 q 257 547 257 584 q 406 544 301 547 q 517 541 511 541 q 666 544 562 541 q 777 547 770 547 q 773 786 777 641 q 769 932 769 930 q 813 929 781 932 q 849 926 845 926 q 893 929 861 926 q 928 932 924 932 q 914 795 920 866 q 909 659 909 723 l 909 505 q 918 252 909 420 q 927 0 927 84 q 887 4 913 0 q 848 8 861 8 q 811 5 829 8 q 769 0 793 2 q 773 103 769 41 q 777 176 777 166 l 777 317 l 777 465 q 604 466 692 465 q 430 469 517 467 l 257 465 l 257 317 "},\u0391:{x_min:-15.28125,x_max:838.890625,ha:825,o:"m 257 639 l 387 950 q 402 945 395 947 q 417 944 409 944 q 452 950 437 944 q 576 629 536 733 q 686 359 617 526 q 838 0 755 192 q 789 3 820 0 q 751 6 758 6 q 700 4 723 6 q 663 0 677 1 q 600 199 622 137 q 543 353 579 260 l 377 358 l 215 353 l 162 205 q 130 110 145 160 q 101 0 115 59 l 44 5 q 6 2 20 5 q -15 0 -8 0 q 76 211 30 105 q 158 404 121 318 q 257 639 195 490 m 378 419 l 513 425 l 379 761 l 246 425 l 378 419 "},\u00DF:{x_min:94,x_max:726,ha:765,o:"m 107 431 l 107 611 l 107 761 q 200 948 118 872 q 395 1025 283 1025 q 543 979 478 1025 q 608 852 608 933 q 530 709 608 783 q 453 586 453 636 q 589 457 453 547 q 726 259 726 368 q 648 64 726 143 q 453 -15 570 -15 q 379 -6 418 -15 q 309 15 339 1 l 334 128 l 348 127 q 405 70 368 91 q 485 49 442 49 q 583 92 544 49 q 622 193 622 135 q 484 365 622 280 q 347 525 347 450 q 433 667 347 561 q 520 838 520 773 q 483 939 520 899 q 386 979 446 979 q 269 924 313 979 q 226 795 226 870 l 226 629 l 226 344 q 229 141 226 265 q 233 1 233 18 q 196 4 219 1 q 166 8 173 8 q 123 5 142 8 q 94 1 105 2 q 100 250 94 91 q 107 431 107 409 "},\u00E9:{x_min:40,x_max:646.9375,ha:681,o:"m 406 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 313 335 315 335 l 179 331 q 235 127 179 212 q 406 42 291 42 m 406 945 q 440 976 424 966 q 477 986 455 986 q 528 934 528 986 q 513 895 528 912 q 471 866 498 879 l 272 743 l 222 743 l 406 945 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},s:{x_min:68,x_max:531,ha:593,o:"m 117 161 q 172 69 130 102 q 276 36 214 36 q 378 67 333 36 q 424 152 424 98 q 334 260 424 224 q 168 320 251 290 q 79 460 79 366 q 147 612 79 552 q 310 672 216 672 q 400 660 355 672 q 500 627 446 649 l 461 508 l 448 508 q 401 587 433 561 q 314 614 369 614 q 223 584 262 614 q 185 505 185 555 q 358 375 185 427 q 531 197 531 322 q 450 39 531 93 q 259 -15 369 -15 q 68 23 162 -15 l 103 161 l 117 161 "},B:{x_min:109,x_max:751,ha:801,o:"m 127 559 q 109 931 127 759 l 203 929 q 338 932 244 929 q 438 935 432 935 q 629 883 549 935 q 709 726 709 832 q 638 579 709 633 q 464 504 567 524 q 673 438 595 490 q 751 268 751 387 q 639 66 751 133 q 382 0 528 0 l 232 6 q 162 3 211 6 q 109 0 113 0 q 118 287 109 86 q 127 559 127 488 m 256 257 l 256 149 l 261 61 l 337 57 q 526 108 450 57 q 602 266 602 159 q 523 428 602 386 q 312 471 444 471 l 256 471 l 256 257 m 569 706 q 507 834 569 788 q 361 879 446 879 l 261 875 q 252 709 252 798 l 252 522 q 476 558 384 522 q 569 706 569 595 "},"\u2026":{x_min:119,x_max:1005,ha:1160,o:"m 191 130 q 244 108 223 130 q 266 55 266 87 q 244 5 266 25 q 191 -15 223 -15 q 139 4 160 -15 q 119 55 119 23 q 139 108 119 87 q 191 130 159 130 m 560 130 q 612 108 591 130 q 634 55 634 87 q 612 5 634 25 q 560 -15 591 -15 q 507 4 528 -15 q 487 55 487 23 q 507 109 487 88 q 560 130 528 130 m 930 130 q 983 108 962 130 q 1005 55 1005 87 q 983 5 1005 25 q 930 -15 962 -15 q 878 4 899 -15 q 858 55 858 23 q 878 108 858 87 q 930 130 898 130 "},"?":{x_min:128,x_max:520,ha:601,o:"m 307 156 q 367 130 342 156 q 392 68 392 105 q 367 7 392 30 q 307 -15 343 -15 q 244 8 269 -15 q 220 68 220 32 q 244 130 220 105 q 307 156 269 156 m 329 250 q 214 290 261 250 q 168 399 168 331 q 287 595 168 479 q 406 776 406 712 q 371 858 406 823 q 292 894 337 894 q 207 867 243 894 q 162 794 171 840 l 150 794 q 142 835 146 822 q 128 894 139 849 q 210 936 165 922 q 305 950 255 950 q 457 893 394 950 q 520 748 520 837 q 398 550 520 657 q 276 370 276 443 q 293 316 276 337 q 343 296 310 296 q 397 302 372 296 l 383 256 q 357 251 365 252 q 329 250 348 250 "},H:{x_min:108,x_max:927.453125,ha:1036,o:"m 258 318 q 263 143 258 255 q 268 0 268 30 q 229 3 255 0 q 188 8 202 8 q 148 3 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 204 925 q 268 932 259 932 q 263 719 268 854 q 258 547 258 584 l 517 543 l 777 547 q 773 786 777 641 q 769 932 769 930 q 814 928 785 932 q 848 925 842 925 q 894 928 864 925 q 927 932 923 932 q 914 798 919 868 q 909 659 909 729 l 909 448 l 909 283 q 916 135 909 238 q 924 0 924 31 q 885 4 911 0 q 846 8 860 8 q 807 4 832 8 q 769 0 781 0 q 773 101 769 37 q 777 177 777 164 l 777 318 l 777 468 q 604 468 720 468 q 431 468 489 468 l 258 468 l 258 318 "},\u03BD:{x_min:0,x_max:632,ha:654,o:"m 319 8 q 296 5 309 8 q 272 0 283 2 q 200 206 234 120 q 0 654 165 291 q 84 647 45 647 q 113 647 98 647 q 168 654 127 648 q 252 402 204 529 l 360 131 q 469 358 440 267 q 499 520 499 448 q 492 579 499 543 q 477 641 486 615 q 552 649 527 645 q 613 661 576 652 q 628 611 625 623 q 632 576 632 598 q 621 501 632 536 q 560 373 611 466 q 461 190 509 280 q 372 0 412 99 q 345 3 363 0 q 319 8 327 8 "},\u00EE:{x_min:-25,x_max:365.328125,ha:340,o:"m 104 144 l 104 522 l 97 655 q 138 650 113 651 q 167 649 162 649 q 233 655 206 649 q 225 506 225 581 q 229 254 225 423 q 233 0 233 84 q 201 3 216 1 q 164 5 186 5 q 127 3 146 5 q 97 0 108 1 l 104 144 m 125 978 l 214 978 l 365 743 l 319 743 l 170 875 l 24 743 l -25 743 l 125 978 "},c:{x_min:36,x_max:613.78125,ha:644,o:"m 606 119 l 594 41 q 493 -3 548 7 q 365 -15 438 -15 q 131 79 227 -15 q 36 312 36 173 q 134 576 36 480 q 399 672 233 672 q 513 658 459 672 q 613 616 566 645 q 586 492 597 563 l 571 492 q 510 586 550 553 q 406 619 470 619 q 235 532 294 619 q 176 327 176 445 q 237 125 176 209 q 415 42 299 42 q 594 122 520 42 l 606 119 "},"\xB6":{x_min:18,x_max:531,ha:590,o:"m 298 968 l 531 968 l 531 910 l 473 910 l 473 4 l 415 4 l 415 910 l 305 910 l 305 4 l 247 4 l 247 558 q 99 602 163 558 q 27 690 36 645 q 18 744 18 734 q 90 896 18 824 q 298 968 163 968 "},\u03B2:{x_min:96,x_max:737.671875,ha:779,o:"m 160 -365 q 129 -367 151 -365 q 96 -369 107 -369 q 100 -253 96 -325 q 104 -169 104 -182 l 104 101 l 104 565 q 168 898 104 771 q 419 1025 232 1025 q 605 960 525 1025 q 686 787 686 895 q 641 641 686 705 q 522 548 597 577 q 682 454 626 515 q 737 290 737 394 q 648 73 737 162 q 431 -15 559 -15 q 324 3 372 -15 q 226 61 276 22 q 224 -44 226 19 q 223 -110 223 -107 l 230 -369 q 193 -367 220 -369 q 160 -365 166 -365 m 356 564 q 507 618 458 564 q 557 779 557 673 q 520 917 557 859 q 407 975 483 975 q 279 906 323 975 q 234 752 234 838 q 232 613 234 701 q 230 506 230 524 l 226 355 l 230 230 q 275 94 230 147 q 406 41 321 41 q 552 116 504 41 q 600 297 600 192 q 550 443 600 386 q 412 499 500 499 q 361 497 384 499 q 327 493 337 494 l 329 516 l 329 565 l 356 564 "},\u039C:{x_min:55,x_max:1165,ha:1238,o:"m 190 950 l 243 950 q 331 772 291 851 q 412 612 370 693 q 504 436 454 532 l 626 214 q 742 435 671 298 q 882 711 813 572 q 1001 950 952 850 l 1052 950 q 1082 649 1067 791 q 1118 341 1098 508 q 1165 0 1139 174 q 1121 8 1139 5 q 1088 11 1103 11 q 1049 6 1071 11 q 1008 0 1027 2 q 998 226 1008 109 q 974 461 989 343 q 944 695 959 579 l 748 312 q 610 0 665 152 l 594 1 l 576 0 q 227 685 402 364 l 188 307 q 172 128 175 179 q 168 0 168 77 q 138 4 157 1 q 110 6 118 6 q 81 4 93 6 q 55 0 68 2 q 121 333 89 168 q 171 652 152 498 q 190 950 190 805 "},\u038C:{x_min:-1,x_max:1305,ha:1356,o:"m 288 465 q 429 820 288 690 q 796 950 570 950 q 1129 853 991 950 q 1284 654 1268 757 q 1302 525 1299 551 q 1305 462 1305 500 q 1302 402 1305 426 q 1284 277 1299 379 q 1131 80 1268 175 q 797 -15 993 -15 q 684 -10 733 -15 q 541 29 635 -5 q 367 186 447 64 q 288 465 288 308 m 182 943 q 215 974 200 964 q 251 985 230 985 q 289 969 274 985 q 304 932 304 954 q 290 896 304 911 q 247 866 275 882 l 48 743 l -1 743 l 182 943 m 439 468 q 527 162 439 282 q 796 42 616 42 q 1063 162 975 42 q 1152 468 1152 283 q 1062 770 1152 651 q 796 889 972 889 q 585 826 666 889 q 462 639 504 764 q 439 468 439 552 "},\u0389:{x_min:-1.390625,x_max:1233.046875,ha:1341,o:"m 564 316 q 569 142 564 254 q 574 0 574 30 q 535 4 561 0 q 494 8 508 8 q 454 4 480 8 q 414 0 427 0 q 423 239 414 70 q 432 465 432 408 q 428 711 432 620 q 414 931 425 802 q 459 928 430 931 q 494 924 489 924 q 537 928 510 924 q 574 931 565 931 q 569 719 574 854 q 564 547 564 584 l 823 543 l 1083 547 q 1078 786 1083 641 q 1074 931 1074 930 q 1119 928 1091 931 q 1153 924 1148 924 q 1199 928 1170 924 q 1233 931 1228 931 q 1221 798 1226 868 q 1217 659 1217 729 l 1215 448 l 1217 283 q 1225 135 1217 238 q 1233 0 1233 31 q 1194 4 1220 0 q 1154 8 1167 8 q 1113 4 1140 8 q 1075 0 1087 0 q 1078 100 1075 37 q 1082 176 1082 163 l 1083 316 l 1083 465 q 910 466 1026 465 q 737 468 795 468 l 564 465 l 564 316 m 181 943 q 215 974 200 964 q 251 985 230 985 q 288 969 273 985 q 304 932 304 954 q 289 896 304 911 q 247 866 275 882 l 47 743 l -1 743 l 181 943 "},"\u2022":{x_min:204.171875,x_max:795.828125,ha:1003,o:"m 501 789 q 709 702 622 789 q 795 493 795 615 q 709 286 795 372 q 501 201 623 201 q 290 286 377 201 q 204 493 204 371 q 226 605 204 550 q 312 725 248 661 q 501 789 376 789 "},"\xA5":{x_min:32,x_max:699,ha:750,o:"m 313 278 q 176 273 268 278 q 50 268 83 268 l 50 335 q 147 332 82 335 q 246 329 213 329 l 313 329 l 313 436 l 176 436 l 50 432 l 50 495 q 182 492 90 495 q 281 490 275 490 l 126 743 l 32 888 l 91 883 l 191 887 q 225 814 208 845 q 287 699 241 783 l 397 512 q 477 653 433 570 q 592 887 521 736 l 643 883 l 699 887 l 625 773 l 554 655 l 454 490 q 593 492 496 490 q 697 495 690 495 l 697 431 l 434 436 l 434 330 l 572 329 q 636 332 595 329 q 697 335 678 335 l 697 268 l 568 278 l 434 278 q 434 143 434 208 q 442 0 435 77 l 365 5 l 299 0 q 310 131 307 54 q 313 278 313 208 "},"(":{x_min:114,x_max:380.5625,ha:449,o:"m 114 388 q 175 684 114 545 q 351 950 237 822 q 380 918 361 933 q 253 660 291 782 q 215 379 215 538 q 256 103 215 231 q 380 -151 297 -25 q 351 -183 361 -167 q 173 84 232 -50 q 114 388 114 219 "},U:{x_min:101,x_max:919.0625,ha:1015,o:"m 181 926 q 228 929 195 926 q 263 932 262 932 q 251 804 255 853 q 248 697 248 755 l 248 457 q 315 134 248 212 q 515 57 382 57 q 733 129 654 57 q 813 334 813 201 l 813 458 l 813 655 q 810 797 813 733 q 798 931 807 862 q 827 927 813 929 q 859 926 841 926 q 888 929 868 926 q 919 932 907 932 q 905 779 909 853 q 902 600 902 705 l 902 366 q 793 81 902 178 q 492 -15 685 -15 q 211 66 307 -15 q 116 323 116 147 l 116 425 l 116 698 q 109 826 116 759 q 101 931 103 893 q 138 927 120 929 q 181 926 156 926 "},\u03B3:{x_min:-12,x_max:701,ha:681,o:"m 642 647 q 701 654 669 647 q 593 440 633 520 q 502 247 553 359 l 411 48 l 411 -90 q 415 -238 411 -138 q 419 -372 419 -337 l 372 -366 q 282 -372 325 -366 q 287 -195 282 -313 q 292 -33 292 -76 q 260 192 292 47 q 170 460 229 338 q 39 583 111 583 l -12 579 l -10 608 l -12 638 q 43 662 14 653 q 101 672 71 672 q 279 554 234 672 q 398 143 324 437 q 496 393 439 244 q 590 654 553 541 q 615 648 607 650 q 642 647 623 647 "},\u03B1:{x_min:41,x_max:827.109375,ha:846,o:"m 705 352 q 803 -1 763 155 l 739 1 l 673 -1 l 632 172 q 521 36 593 87 q 356 -15 448 -15 q 129 81 217 -15 q 41 316 41 177 q 130 569 41 467 q 368 672 220 672 q 537 622 464 672 q 659 486 610 573 q 711 654 691 569 l 770 650 l 827 654 q 763 505 792 576 q 705 352 734 434 m 377 619 q 226 530 272 619 q 181 326 181 442 q 223 124 181 214 q 367 34 265 34 q 528 137 480 34 q 601 323 577 240 q 527 531 578 444 q 377 619 475 619 "},F:{x_min:108,x_max:613.5625,ha:671,o:"m 258 316 q 263 142 258 254 q 268 0 268 30 q 229 3 255 0 q 188 8 202 8 q 148 3 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 711 126 620 q 108 932 119 802 l 358 928 l 613 931 l 610 886 l 613 836 q 505 855 549 851 q 388 860 460 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 "},"\xAD":{x_min:0,x_max:683.328125,ha:683,o:"m 0 374 l 683 374 l 683 289 l 0 289 l 0 374 "},":":{x_min:134,x_max:309,ha:446,o:"m 222 636 q 284 611 259 636 q 309 548 309 586 q 284 486 309 512 q 222 461 260 461 q 160 486 186 461 q 134 548 134 511 q 159 610 134 584 q 222 636 185 636 m 221 156 q 283 131 257 156 q 309 69 309 107 q 284 8 309 32 q 221 -15 259 -15 q 159 9 185 -15 q 134 69 134 33 q 159 131 134 107 q 221 156 185 156 "},\u03A7:{x_min:0,x_max:739,ha:739,o:"m 200 285 l 318 456 q 18 932 159 718 q 63 929 33 932 q 109 926 94 926 q 168 929 147 926 q 198 932 188 932 q 296 743 244 841 q 391 568 348 644 l 489 726 q 597 932 548 825 q 627 927 614 929 q 661 926 641 926 q 693 929 671 926 q 728 932 715 932 q 616 781 673 862 q 524 652 558 700 l 427 512 q 523 347 480 419 q 614 197 566 275 q 739 0 662 119 q 686 3 719 0 q 647 6 652 6 q 595 4 618 6 q 558 0 572 1 q 459 197 512 97 q 353 398 405 298 l 265 249 q 174 96 193 130 q 127 0 155 62 q 89 3 113 0 q 62 6 65 6 q 26 4 43 6 q 0 0 9 1 l 200 285 "},"*":{x_min:94,x_max:580,ha:675,o:"m 336 940 q 367 944 349 940 q 389 948 385 948 q 368 850 375 902 q 362 747 362 799 q 522 873 442 800 q 548 812 539 829 q 580 778 556 796 q 386 702 485 750 q 476 661 427 680 q 575 629 524 643 q 521 535 539 587 q 441 604 478 573 q 362 661 403 634 q 369 564 362 615 q 391 459 377 513 q 360 463 379 459 q 336 467 340 467 q 306 463 325 467 q 282 459 288 459 q 304 568 296 522 q 313 661 313 615 q 152 535 221 602 q 128 589 138 569 q 97 630 117 608 q 185 661 140 643 q 287 704 231 679 q 189 746 234 728 q 94 777 145 763 q 125 818 113 795 q 150 873 137 841 q 227 805 184 839 q 313 747 269 771 q 309 810 313 784 q 282 950 305 836 q 310 942 297 945 q 336 940 324 940 "},"\xB0":{x_min:176,x_max:508,ha:683,o:"m 176 889 q 228 1010 176 961 q 355 1060 280 1060 q 460 1011 413 1060 q 508 904 508 962 q 455 785 508 839 q 337 731 402 731 q 222 776 269 731 q 176 889 176 821 m 241 880 q 266 805 241 836 q 336 775 292 775 q 413 811 386 775 q 441 899 441 847 q 417 985 441 952 q 343 1018 393 1018 q 281 995 307 1018 q 247 940 254 973 q 241 880 241 906 "},V:{x_min:0,x_max:852.78125,ha:853,o:"m 190 477 l 74 759 l 0 932 l 83 926 q 134 929 98 926 q 173 931 170 931 q 206 829 187 884 q 248 704 224 773 l 308 548 l 454 153 l 586 502 q 729 931 666 713 l 790 927 l 852 931 q 643 467 748 720 q 470 0 538 215 q 445 4 457 1 q 418 6 432 6 q 384 3 399 6 q 366 0 368 0 q 279 256 331 123 q 190 477 226 389 "},\u039E:{x_min:58.328125,x_max:818.0625,ha:878,o:"m 437 821 q 258 817 377 821 q 77 813 138 813 q 84 851 83 838 q 84 872 84 864 q 77 932 84 900 q 256 928 137 932 q 437 924 376 924 q 618 928 497 924 q 797 932 738 932 l 791 872 q 794 842 791 861 q 797 813 797 822 q 619 817 738 813 q 437 821 500 821 m 470 430 q 335 425 440 430 q 183 421 230 421 q 187 456 186 433 q 188 481 188 480 q 183 543 188 515 q 304 538 215 543 q 437 533 394 533 q 572 538 481 533 q 694 543 662 543 l 687 482 l 694 421 q 572 425 650 421 q 470 430 494 430 m 437 8 q 250 4 376 8 q 58 0 123 0 l 63 63 l 58 129 q 268 124 134 129 q 437 119 401 119 q 636 124 502 119 q 818 129 769 129 l 813 63 l 818 0 q 627 4 754 0 q 437 8 501 8 "},"\xA0":{x_min:0,x_max:0,ha:375},\u03AB:{x_min:-26,x_max:746,ha:708,o:"m 299 177 l 299 387 q 190 577 235 501 q 87 747 146 652 q -26 931 29 841 q 23 929 -13 931 q 65 926 61 926 q 110 929 78 926 q 146 931 143 931 q 208 800 175 866 q 278 676 241 734 l 391 475 q 627 931 519 693 l 683 927 q 721 929 701 927 q 746 931 741 931 q 652 786 702 866 q 557 627 602 705 l 432 415 l 432 241 q 435 97 432 184 q 439 0 439 10 q 395 4 414 2 q 361 6 376 6 q 320 4 336 6 q 286 0 304 2 q 294 88 290 36 q 299 177 299 141 m 233 1208 q 286 1187 265 1208 q 307 1133 307 1166 q 285 1080 307 1103 q 233 1058 263 1058 q 179 1080 202 1058 q 157 1133 157 1103 q 179 1186 157 1164 q 233 1208 202 1208 m 475 1208 q 528 1186 506 1208 q 550 1133 550 1164 q 528 1080 550 1103 q 475 1058 506 1058 q 422 1080 444 1058 q 400 1133 400 1102 q 421 1186 400 1164 q 475 1208 443 1208 "},"0":{x_min:48,x_max:699,ha:749,o:"m 372 909 q 621 773 544 909 q 699 451 699 637 q 627 116 699 252 q 372 -19 556 -19 q 120 114 193 -19 q 48 444 48 247 q 120 774 48 639 q 372 909 193 909 m 187 365 q 226 137 187 238 q 373 37 266 37 q 457 62 421 37 q 519 142 494 88 q 552 271 545 196 q 559 455 559 346 q 526 736 559 622 q 371 851 493 851 q 245 783 280 851 q 198 647 210 716 q 187 444 187 577 l 187 365 "},"\u201D":{x_min:104.171875,x_max:570.828125,ha:625,o:"m 184 858 q 211 924 193 898 q 265 951 230 951 q 320 903 316 951 q 310 856 320 881 q 283 812 300 831 l 136 568 l 104 576 l 184 858 m 433 858 q 468 928 452 905 q 516 951 483 951 q 555 938 540 951 q 570 903 570 926 q 561 859 570 881 q 536 812 552 837 l 387 568 l 355 576 l 433 858 "},"@":{x_min:78,x_max:1289,ha:1367,o:"m 906 640 l 970 640 l 876 266 l 864 203 q 886 157 864 172 q 940 142 908 142 q 1136 262 1062 142 q 1211 513 1211 383 q 1067 801 1211 693 q 735 909 923 909 q 324 753 495 909 q 154 362 154 598 q 301 1 154 135 q 679 -132 448 -132 q 904 -99 791 -132 q 1105 -6 1016 -67 l 1129 -43 q 923 -150 1033 -113 q 694 -188 812 -188 q 258 -43 439 -188 q 78 350 78 100 q 273 791 78 614 q 737 969 469 969 q 1122 843 955 969 q 1289 507 1289 717 q 1187 214 1289 346 q 930 82 1086 82 q 835 103 879 82 q 792 170 792 124 l 792 203 q 709 116 762 150 q 595 82 655 82 q 439 139 493 82 q 386 302 386 197 q 471 553 386 441 q 692 665 556 665 q 797 639 754 665 q 864 556 840 613 l 906 640 m 849 477 q 796 572 835 535 q 701 609 758 609 q 529 511 592 609 q 467 297 467 413 q 503 184 467 230 q 605 139 540 139 q 733 188 679 139 q 807 313 787 238 l 849 477 "},\u038A:{x_min:-1.390625,x_max:580.0625,ha:690,o:"m 433 465 q 429 711 433 620 q 414 931 426 802 q 461 927 435 929 q 498 925 487 925 q 546 928 517 925 q 580 931 575 931 q 572 788 580 887 q 564 659 564 690 l 562 448 l 564 283 q 572 135 564 238 q 580 0 580 31 q 539 4 567 0 q 498 8 512 8 q 457 5 480 8 q 414 0 435 2 q 423 239 414 70 q 433 465 433 408 m 181 943 q 215 974 200 964 q 251 985 230 985 q 288 969 273 985 q 304 932 304 954 q 289 896 304 911 q 247 866 275 882 l 47 743 l -1 743 l 181 943 "},\u00F6:{x_min:40,x_max:712,ha:753,o:"m 371 -15 q 131 79 223 -15 q 40 322 40 173 q 133 572 40 473 q 380 672 227 672 q 621 575 530 672 q 712 327 712 479 q 619 80 712 175 q 371 -15 527 -15 m 253 929 q 307 906 285 929 q 330 854 330 884 q 309 800 330 822 q 257 778 288 778 q 202 800 225 778 q 180 854 180 823 q 200 906 180 884 q 253 929 221 929 m 498 929 q 549 906 527 929 q 572 854 572 884 q 551 799 572 820 q 499 778 531 778 q 444 800 466 778 q 422 854 422 822 q 444 906 422 884 q 498 929 466 929 m 377 622 q 227 532 274 622 q 180 327 180 442 q 227 125 180 216 q 375 35 274 35 q 524 124 478 35 q 570 327 570 214 q 524 531 570 441 q 377 622 479 622 "},i:{x_min:91.765625,x_max:244,ha:342,o:"m 100 144 l 100 520 l 93 654 q 161 648 130 648 q 194 649 182 648 q 229 654 207 650 q 221 579 224 616 q 219 505 219 543 q 224 240 219 417 q 229 0 229 63 q 197 3 212 1 q 161 5 181 5 q 116 2 131 5 q 91 0 100 0 l 100 144 m 168 963 q 223 940 202 963 q 244 881 244 917 q 222 831 244 849 q 168 813 200 813 q 115 833 137 813 q 93 885 93 853 q 113 941 93 919 q 168 963 134 963 "},\u0392:{x_min:109,x_max:751,ha:801,o:"m 127 559 q 109 931 127 759 l 203 929 q 338 932 244 929 q 438 935 432 935 q 629 883 549 935 q 709 726 709 832 q 638 579 709 633 q 464 504 567 524 q 673 438 595 490 q 751 268 751 387 q 639 66 751 133 q 382 0 528 0 l 232 6 q 162 3 211 6 q 109 0 113 0 q 118 287 109 86 q 127 559 127 488 m 256 257 l 256 149 l 261 61 l 337 57 q 526 108 450 57 q 602 266 602 159 q 523 428 602 386 q 312 471 444 471 l 256 471 l 256 257 m 569 706 q 507 834 569 788 q 361 879 446 879 l 261 875 q 252 709 252 798 l 252 522 q 476 558 384 522 q 569 706 569 595 "},"\u2264":{x_min:176,x_max:962.703125,ha:1139,o:"m 288 491 l 962 266 l 962 196 l 176 462 l 176 521 l 962 788 l 962 718 l 288 491 m 962 26 l 176 26 l 176 93 l 962 93 l 962 26 "},\u03C5:{x_min:79,x_max:703,ha:774,o:"m 703 397 q 596 110 703 236 q 332 -15 489 -15 q 145 54 211 -15 q 79 244 79 123 l 83 430 q 81 542 83 486 q 79 654 80 598 l 146 650 l 217 654 q 209 503 217 608 q 202 366 202 398 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 133 476 43 q 571 341 571 223 q 548 493 571 418 q 488 645 526 568 q 550 648 529 645 q 627 659 571 650 q 703 397 703 538 "},"]":{x_min:83,x_max:332,ha:449,o:"m 209 -154 l 83 -158 l 85 -129 l 85 -98 q 183 -104 128 -104 l 229 -104 l 232 386 l 232 880 l 185 880 q 134 877 162 880 q 83 872 107 874 l 85 903 l 85 932 l 205 929 l 332 929 q 326 852 332 909 q 321 766 321 794 l 321 455 l 321 2 l 332 -158 l 209 -154 "},m:{x_min:91,x_max:1075,ha:1167,o:"m 101 155 l 101 494 q 98 568 101 529 q 91 654 96 606 q 155 647 123 647 l 221 654 l 216 537 q 317 638 261 604 q 450 672 373 672 q 629 547 581 672 q 733 639 677 606 q 860 672 789 672 q 1018 606 968 672 q 1069 429 1069 540 l 1069 298 l 1069 136 l 1075 0 q 1038 3 1063 0 q 1006 6 1013 6 q 968 3 992 6 q 938 0 943 0 q 944 203 938 68 q 950 406 950 338 q 918 536 950 486 q 810 587 887 587 q 699 540 745 587 q 648 452 653 493 q 642 376 643 410 q 641 326 641 342 l 641 314 q 644 132 641 258 q 647 0 647 6 q 607 4 621 2 q 581 5 593 5 q 542 2 570 5 q 514 0 515 0 q 519 168 514 55 q 524 321 524 280 l 524 406 q 490 534 524 482 q 383 587 457 587 q 273 541 314 587 q 223 436 231 496 q 216 314 216 376 q 219 133 216 244 q 222 0 222 22 q 183 3 207 0 q 154 6 159 6 q 117 4 134 6 q 91 0 100 1 l 101 155 "},\u03C7:{x_min:-1,x_max:725.390625,ha:713,o:"m 500 426 q 554 536 528 476 q 607 654 580 595 l 675 650 l 725 652 q 623 507 672 586 q 519 330 573 427 l 444 197 q 575 -85 507 55 q 719 -371 643 -227 q 665 -371 701 -371 q 611 -371 629 -371 l 560 -371 q 444 -115 497 -230 q 358 72 392 -1 l 255 -95 q 178 -237 208 -174 q 125 -371 147 -299 l 62 -371 l 0 -371 q 125 -192 68 -278 q 240 -5 182 -106 l 324 136 l 201 402 q 146 519 174 460 q 43 587 103 587 l -1 584 l -1 638 q 128 672 57 672 q 222 627 181 672 q 292 522 264 583 l 359 374 l 411 260 l 500 426 "},"8":{x_min:59,x_max:689,ha:749,o:"m 110 696 q 187 853 110 797 q 370 909 264 909 q 558 854 480 909 q 636 694 636 800 q 589 575 636 621 q 467 510 543 529 l 467 499 q 630 413 572 475 q 689 247 689 351 q 597 51 689 120 q 374 -18 505 -18 q 149 48 239 -18 q 59 247 59 115 q 118 414 59 347 q 281 499 178 480 l 281 510 q 157 570 205 521 q 110 696 110 619 m 371 531 q 472 577 437 531 q 507 693 507 624 q 470 810 507 764 q 366 856 433 856 q 271 807 305 856 q 238 693 238 758 q 271 578 238 625 q 371 531 305 531 m 373 31 q 505 97 461 31 q 550 255 550 164 q 506 415 550 348 q 373 482 462 482 q 239 416 283 482 q 195 255 195 351 q 240 96 195 162 q 373 31 285 31 "},\u03AF:{x_min:96,x_max:429.34375,ha:342,o:"m 104 333 l 104 520 q 103 566 104 544 q 96 654 102 588 q 141 647 130 648 q 165 647 151 647 q 233 654 196 647 q 224 555 226 599 q 223 437 223 511 l 223 406 q 228 194 223 337 q 233 0 233 51 q 201 3 216 1 q 165 5 185 5 q 127 3 148 5 q 96 0 107 1 q 100 165 96 51 q 104 333 104 279 m 308 943 q 341 974 326 964 q 377 985 357 985 q 415 969 401 985 q 429 932 429 954 q 414 896 429 912 q 373 866 400 880 l 174 743 l 125 743 l 308 943 "},\u0396:{x_min:6.9375,x_max:801.390625,ha:828,o:"m 6 36 q 222 324 112 176 q 425 605 333 473 l 597 857 l 433 857 q 59 836 247 857 l 65 883 l 59 932 q 262 927 134 932 q 427 922 390 922 q 622 927 491 922 q 801 932 754 932 l 801 904 q 594 629 709 785 q 399 361 479 473 q 201 77 319 249 l 427 77 q 581 82 520 77 q 801 103 643 87 l 797 68 l 795 54 l 797 34 l 801 0 q 504 4 683 0 q 325 8 326 8 q 166 4 272 8 q 6 0 61 0 l 6 36 "},R:{x_min:109,x_max:806.234375,ha:785,o:"m 261 0 q 223 3 248 0 q 185 8 198 8 q 148 5 168 8 q 109 0 127 2 q 118 306 109 90 q 127 598 127 523 q 122 761 127 672 q 109 931 117 849 l 203 929 l 409 935 q 618 882 529 935 q 708 719 708 830 q 634 559 708 615 q 442 473 560 503 q 620 240 533 355 q 806 0 708 124 l 732 5 l 610 0 q 449 240 529 127 q 283 455 369 353 l 251 455 l 251 307 q 256 138 251 245 q 261 0 261 31 m 570 699 q 504 835 570 791 q 344 879 439 879 l 261 875 q 253 772 255 834 q 251 701 251 709 l 251 504 q 479 542 388 504 q 570 699 570 581 "},"\xD7":{x_min:203.984375,x_max:938.015625,ha:1139,o:"m 892 775 l 938 729 l 616 406 l 938 86 l 892 38 l 571 361 l 247 38 l 203 86 l 525 407 l 204 729 l 247 775 l 570 453 l 892 775 "},o:{x_min:41,x_max:710,ha:753,o:"m 371 -15 q 131 78 222 -15 q 41 322 41 172 q 133 573 41 474 q 378 672 225 672 q 619 574 528 672 q 710 326 710 477 q 617 80 710 175 q 371 -15 525 -15 m 377 619 q 226 530 272 619 q 180 327 180 441 q 227 125 180 216 q 375 35 274 35 q 524 123 478 35 q 570 326 570 211 q 524 529 570 440 q 377 619 479 619 "},"5":{x_min:75,x_max:654,ha:749,o:"m 116 201 q 176 77 131 120 q 303 35 221 35 q 454 98 396 35 q 512 255 512 161 q 457 407 512 346 q 313 469 403 469 q 170 417 227 469 l 150 428 l 158 526 q 158 662 158 570 q 158 801 158 754 l 147 888 l 383 879 l 412 879 q 628 887 520 879 q 624 848 626 870 q 622 818 622 826 l 626 760 l 425 761 l 227 761 q 221 631 227 717 q 216 500 216 544 q 375 536 296 536 q 572 465 491 536 q 654 279 654 394 q 550 60 654 139 q 304 -18 447 -18 q 179 -6 231 -18 q 75 34 127 4 q 101 201 87 118 l 116 201 "},"7":{x_min:122.609375,x_max:729.5625,ha:749,o:"m 461 553 l 586 770 l 362 770 q 129 755 232 770 q 133 786 132 769 q 135 820 135 804 q 128 888 135 853 l 408 883 l 729 887 l 729 871 q 463 429 582 641 q 251 0 344 216 l 194 8 q 153 5 169 8 q 122 0 137 2 q 214 146 179 91 q 333 339 249 201 q 461 553 417 477 "},K:{x_min:108,x_max:856.625,ha:821,o:"m 255 314 q 261 132 255 250 q 268 0 268 13 q 229 4 255 0 q 188 8 202 8 q 148 4 174 8 q 108 0 121 0 q 117 239 108 70 q 126 465 126 408 q 122 712 126 621 q 108 932 119 803 q 153 928 124 932 q 188 925 183 925 q 231 928 203 925 q 267 932 259 932 l 255 671 l 255 499 q 480 693 375 586 q 687 932 585 800 q 732 932 710 932 q 777 932 753 932 l 837 932 q 606 727 720 830 q 389 522 493 623 q 525 358 465 426 q 666 202 586 290 q 856 0 747 115 l 746 0 q 692 -1 716 0 q 644 -8 669 -2 q 571 92 610 44 q 477 204 532 140 l 255 459 l 255 314 "},",":{x_min:40.28125,x_max:272.21875,ha:374,o:"m 131 75 q 160 147 144 120 q 213 175 176 175 q 272 119 272 175 q 259 67 272 91 q 231 18 245 43 l 73 -243 l 40 -231 l 131 75 "},d:{x_min:55,x_max:676,ha:758,o:"m 668 762 l 672 137 l 676 -1 q 638 3 653 1 q 611 5 623 5 q 574 2 597 5 q 547 -1 551 -1 l 557 119 q 336 -15 484 -15 q 127 86 200 -15 q 55 330 55 187 q 127 569 55 467 q 332 672 199 672 q 457 643 402 672 q 551 556 513 615 l 551 756 l 551 789 l 551 818 q 542 1025 551 927 q 609 1018 576 1018 q 639 1019 628 1018 q 675 1025 651 1020 l 668 762 m 374 57 q 515 139 473 57 q 557 332 557 222 q 513 522 557 437 q 374 607 470 607 q 236 522 278 607 q 194 332 194 438 q 235 141 194 225 q 374 57 277 57 "},"\xA8":{x_min:83.71875,x_max:550.390625,ha:625,o:"m 471 659 q 441 593 458 618 q 389 568 424 568 q 350 579 365 568 q 335 613 335 591 q 346 660 335 633 q 371 706 358 687 l 519 950 l 550 940 l 471 659 m 221 659 q 192 593 211 618 q 137 568 174 568 q 83 613 83 568 q 93 658 83 637 q 119 706 103 680 l 268 950 l 300 940 l 221 659 "},E:{x_min:108,x_max:613.5625,ha:686,o:"m 126 465 q 122 711 126 620 q 108 932 119 802 l 353 928 l 610 931 l 606 884 l 610 836 q 508 853 562 847 q 408 860 453 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 l 264 73 q 456 76 380 73 q 613 94 531 80 l 610 47 l 613 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},Y:{x_min:-28,x_max:746,ha:707,o:"m 297 177 l 297 386 q 191 570 256 458 q 84 750 125 682 q -28 932 42 819 q 24 928 -9 932 q 63 925 59 925 q 112 927 91 925 q 146 932 134 930 q 207 800 174 866 q 275 676 239 735 l 389 475 q 509 688 451 575 q 627 932 567 801 l 683 926 q 715 927 701 926 q 746 932 729 929 q 555 627 640 769 l 432 415 l 432 240 q 435 101 432 198 q 438 0 438 5 q 401 4 426 1 q 361 6 376 6 q 319 4 334 6 q 284 0 304 2 q 292 88 288 36 q 297 177 297 140 "},'"':{x_min:64,x_max:315,ha:379,o:"m 133 587 l 64 587 l 64 957 l 133 957 l 133 587 m 315 587 l 247 587 l 247 957 l 315 957 l 315 587 "},\u00EA:{x_min:40,x_max:646.9375,ha:681,o:"m 406 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 314 335 315 335 l 179 331 q 235 127 179 212 q 406 42 291 42 m 296 978 l 386 978 l 537 743 l 488 743 l 340 875 l 193 743 l 143 743 l 296 978 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},\u03B4:{x_min:41,x_max:670,ha:710,o:"m 102 840 q 185 981 102 937 q 375 1025 268 1025 q 497 1010 436 1025 q 621 968 559 995 q 595 876 604 923 q 500 947 547 923 q 393 972 453 972 q 280 937 328 972 q 233 840 233 902 q 272 742 233 794 q 434 627 312 691 q 613 504 556 563 q 670 305 670 445 q 581 75 670 165 q 350 -15 492 -15 q 125 73 210 -15 q 41 305 41 162 q 113 526 41 430 q 306 622 186 622 q 145 726 189 674 q 102 840 102 779 m 356 576 q 221 492 261 576 q 181 302 181 409 q 223 118 181 203 q 356 34 265 34 q 490 116 450 34 q 530 307 530 198 q 489 492 530 409 q 356 576 449 576 "},\u03AD:{x_min:53,x_max:598.828125,ha:628,o:"m 506 516 q 433 591 467 566 q 353 616 400 616 q 261 580 298 616 q 225 492 225 545 q 268 406 225 437 q 372 375 311 375 l 418 375 l 417 352 l 417 313 l 343 317 q 237 282 281 317 q 193 185 193 247 q 238 78 193 118 q 352 38 284 38 q 460 66 410 38 q 543 144 510 94 q 553 99 547 121 q 567 54 558 76 q 452 2 515 19 q 321 -15 388 -15 q 134 31 216 -15 q 53 176 53 78 q 96 286 53 246 q 214 355 139 326 q 127 408 162 370 q 93 497 93 445 q 165 625 93 579 q 323 672 237 672 q 430 654 378 672 q 541 604 481 637 q 522 564 529 584 q 506 516 514 545 m 476 944 q 510 975 494 965 q 547 986 526 986 q 584 970 569 986 q 598 933 598 954 q 584 898 598 912 q 541 867 569 884 l 342 744 l 293 744 l 476 944 "},\u03C9:{x_min:39.71875,x_max:1028.9375,ha:1068,o:"m 535 526 l 596 528 l 594 305 q 616 117 594 193 q 722 42 638 42 q 850 118 811 42 q 888 293 888 194 q 829 502 888 409 q 664 654 769 594 l 717 648 q 805 654 766 648 q 967 510 905 606 q 1028 304 1028 413 q 948 81 1028 177 q 744 -15 867 -15 q 622 16 678 -15 q 534 104 566 47 q 445 16 500 48 q 323 -15 389 -15 q 118 83 196 -15 q 39 311 39 182 q 100 511 39 419 q 262 654 161 604 q 303 650 278 651 q 349 648 327 648 l 402 654 q 238 501 296 593 q 179 291 179 409 q 218 116 179 191 q 348 42 257 42 q 419 68 390 42 q 461 137 448 94 q 472 216 469 175 q 475 303 475 257 q 472 419 475 353 q 469 528 470 485 l 535 526 "},"\xB4":{x_min:90.28125,x_max:305.5625,ha:374,o:"m 169 859 q 197 923 177 894 q 250 953 218 953 q 288 939 272 953 q 305 902 305 925 q 295 857 305 882 q 269 811 284 833 l 120 568 l 90 576 l 169 859 "},"\xB1":{x_min:169,x_max:969,ha:1139,o:"m 602 549 l 969 549 l 969 482 l 602 482 l 602 247 l 534 247 l 534 482 l 169 482 l 169 549 l 534 549 l 534 779 l 602 779 l 602 549 m 969 33 l 169 33 l 169 100 l 969 100 l 969 33 "},"|":{x_min:305,x_max:376,ha:683,o:"m 376 448 l 305 448 l 305 956 l 376 956 l 376 448 m 376 -233 l 305 -233 l 305 272 l 376 272 l 376 -233 "},\u03CB:{x_min:79,x_max:703,ha:774,o:"m 703 395 q 595 110 703 236 q 332 -15 488 -15 q 145 54 211 -15 q 79 244 79 123 l 83 429 q 81 542 83 486 q 79 654 80 598 l 146 650 l 217 654 q 209 502 217 608 q 202 365 202 397 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 132 476 43 q 571 340 571 222 q 548 493 571 418 q 488 645 526 568 q 550 647 529 645 q 627 658 571 650 q 703 395 703 537 m 227 928 q 281 907 259 928 q 304 853 304 886 q 283 800 304 822 q 230 778 262 778 q 175 800 197 778 q 153 853 153 822 q 174 906 153 884 q 227 928 195 928 m 469 928 q 523 906 501 928 q 545 853 545 884 q 524 799 545 821 q 472 778 504 778 q 418 800 440 778 q 396 853 396 822 q 416 905 396 883 q 469 928 437 928 "},"\xA7":{x_min:64,x_max:620,ha:675,o:"m 114 36 l 128 36 q 198 -76 148 -33 q 319 -120 247 -120 q 430 -78 384 -120 q 476 27 476 -37 q 369 169 476 116 q 170 252 269 210 q 64 419 64 312 q 91 522 64 476 q 171 609 119 568 q 122 739 122 669 q 195 896 122 837 q 369 956 268 956 q 473 940 422 956 q 576 894 523 925 q 559 864 568 882 q 521 775 551 846 l 508 775 q 445 871 483 839 q 343 903 407 903 q 251 867 289 903 q 213 777 213 832 q 318 644 213 694 q 514 563 415 604 q 620 408 620 507 q 592 299 620 348 q 515 213 565 251 q 560 143 544 179 q 576 65 576 108 q 494 -112 576 -46 q 298 -178 412 -178 q 179 -163 239 -178 q 76 -119 120 -148 q 97 -42 86 -89 q 114 36 108 4 m 138 479 q 257 340 138 396 q 478 238 376 285 q 524 285 508 261 q 541 342 541 310 q 384 490 541 423 q 197 587 228 556 q 156 532 175 563 q 138 479 138 501 "},b:{x_min:78,x_max:703,ha:758,o:"m 152 1018 q 219 1025 181 1018 q 212 916 214 966 q 210 788 210 866 l 210 755 l 210 555 q 419 672 283 672 q 629 569 555 672 q 703 322 703 466 q 630 79 703 173 q 414 -15 558 -15 q 296 8 350 -15 q 193 79 242 31 q 160 49 175 64 q 120 -1 145 33 l 78 -1 q 87 106 82 43 q 92 213 92 169 l 92 545 q 88 784 92 625 q 85 1025 85 944 q 152 1018 119 1018 m 383 605 q 243 520 285 605 q 202 323 202 435 q 245 133 202 218 q 383 48 288 48 q 522 132 480 48 q 564 326 564 217 q 522 519 564 434 q 383 605 480 605 "},q:{x_min:54,x_max:675,ha:758,o:"m 608 -368 q 579 -368 591 -368 q 540 -373 567 -369 q 549 -213 548 -312 q 551 -101 551 -115 l 551 99 q 339 -15 476 -15 q 130 82 207 -15 q 54 316 54 180 q 125 564 54 456 q 333 672 197 672 q 464 636 407 672 q 557 535 520 601 q 546 655 557 594 q 586 649 576 650 q 611 648 597 648 q 674 655 640 648 l 671 433 q 669 163 671 298 q 666 -106 668 27 l 675 -373 q 643 -369 658 -370 q 608 -368 627 -368 m 373 48 q 515 134 473 48 q 557 331 557 220 q 511 514 557 433 q 372 596 466 596 q 234 512 276 596 q 193 322 193 429 q 236 133 193 218 q 373 48 279 48 "},\u03A9:{x_min:8,x_max:1119.125,ha:1129,o:"m 449 0 q 318 4 410 0 q 223 8 227 8 l 10 0 l 13 47 q 11 74 13 59 q 8 95 9 88 q 119 88 69 90 q 249 86 169 86 q 103 261 152 170 q 55 473 55 352 q 200 822 55 694 q 567 950 345 950 q 931 823 791 950 q 1072 473 1072 697 q 1025 261 1072 350 q 878 86 978 173 q 992 91 902 86 q 1119 96 1083 96 l 1114 33 l 1117 0 l 906 8 q 778 4 867 8 q 682 0 688 0 l 682 72 q 864 215 807 122 q 921 451 921 309 q 834 764 921 639 q 565 889 747 889 q 296 767 384 889 q 209 454 209 645 q 268 217 209 319 q 449 72 327 115 l 449 0 "},\u03CD:{x_min:79,x_max:703,ha:774,o:"m 703 395 q 595 110 703 236 q 332 -15 488 -15 q 145 54 211 -15 q 79 244 79 123 l 83 429 q 81 541 83 484 q 79 652 80 597 l 146 648 l 217 652 q 209 502 217 606 q 202 365 202 397 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 132 476 43 q 571 340 571 222 q 548 491 571 416 q 488 644 526 566 q 550 646 529 644 q 627 656 571 648 q 703 395 703 536 m 499 941 q 532 972 517 962 q 568 983 547 983 q 606 967 592 983 q 620 930 620 952 q 605 894 620 910 q 564 865 590 878 l 365 741 l 316 741 l 499 941 "},\u00D6:{x_min:51,x_max:1069,ha:1121,o:"m 51 465 q 191 819 51 688 q 559 950 332 950 q 891 852 750 950 q 1046 659 1031 755 q 1065 535 1062 562 q 1069 462 1069 508 q 1066 395 1069 416 q 1047 275 1063 373 q 894 80 1031 176 q 562 -15 756 -15 q 451 -8 503 -15 q 304 31 399 -2 q 130 187 209 65 q 51 465 51 308 m 439 1208 q 491 1186 470 1208 q 513 1133 513 1164 q 491 1080 513 1103 q 439 1058 470 1058 q 385 1080 409 1058 q 362 1133 362 1102 q 384 1186 362 1164 q 439 1208 407 1208 m 682 1208 q 735 1186 713 1208 q 757 1133 757 1164 q 735 1080 757 1103 q 682 1058 713 1058 q 628 1079 650 1058 q 607 1133 607 1101 q 628 1186 607 1164 q 682 1208 650 1208 m 204 469 q 292 162 204 283 q 559 42 380 42 q 827 162 739 42 q 916 469 916 283 q 825 767 916 648 q 559 887 735 887 q 349 825 430 887 q 226 638 267 763 q 204 469 204 558 "},z:{x_min:15.28125,x_max:606.9375,ha:647,o:"m 15 29 q 164 224 88 124 q 302 416 240 323 l 418 586 l 270 586 q 181 581 218 586 q 62 565 145 577 l 68 609 l 62 654 q 181 648 115 650 q 330 646 248 646 l 363 646 l 393 646 q 606 654 500 646 l 606 626 q 453 428 545 549 q 317 246 361 306 q 194 68 273 185 l 343 68 q 456 72 400 68 q 594 86 513 77 l 588 42 l 594 0 l 280 8 q 148 4 237 8 q 15 0 59 0 l 15 29 "},"\u2122":{x_min:176,x_max:918,ha:1139,o:"m 463 930 l 346 930 l 346 614 l 293 614 l 293 930 l 176 930 l 176 969 l 463 969 l 463 930 m 736 690 l 840 968 l 918 969 l 918 614 l 871 614 l 871 927 l 752 614 l 719 614 l 594 930 l 594 614 l 548 614 l 548 969 l 625 969 l 736 690 "},\u03AE:{x_min:91,x_max:662,ha:754,o:"m 594 -365 q 557 -366 577 -365 q 526 -369 537 -368 q 531 -189 526 -310 q 537 -7 537 -68 l 537 406 q 503 536 537 485 q 391 587 469 587 q 255 508 290 587 q 220 315 220 430 q 222 133 220 259 q 224 1 224 8 l 158 6 l 91 1 l 101 156 l 101 495 q 97 584 101 527 q 93 655 93 640 q 119 650 105 652 q 155 648 134 648 q 185 650 175 648 q 221 655 195 651 l 220 538 q 321 637 265 602 q 452 672 378 672 q 604 603 552 672 q 656 430 656 535 l 656 329 l 656 -186 q 659 -293 656 -227 q 662 -370 662 -359 q 630 -366 645 -368 q 594 -365 614 -365 m 481 944 q 515 975 499 965 q 552 986 531 986 q 589 970 575 986 q 603 933 603 955 q 589 898 603 912 q 547 868 575 884 l 348 744 l 298 744 l 481 944 "},\u0398:{x_min:51,x_max:1068,ha:1119,o:"m 51 465 q 193 820 51 690 q 562 950 335 950 q 893 852 755 950 q 1047 653 1031 755 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 280 1062 379 q 892 83 1033 182 q 560 -15 751 -15 q 435 -7 480 -15 q 299 32 390 0 q 130 187 209 65 q 51 465 51 308 m 202 468 q 290 163 202 283 q 559 43 379 43 q 826 163 738 43 q 915 468 915 283 q 826 770 915 652 q 559 889 738 889 q 254 720 306 889 q 202 468 202 552 m 560 507 q 683 510 608 507 q 768 514 758 514 l 765 465 l 765 429 q 648 432 730 429 q 558 435 566 435 q 440 432 523 435 q 351 429 357 429 l 353 470 l 353 514 q 474 510 400 514 q 560 507 549 507 "},"\xAE":{x_min:80,x_max:1058,ha:1139,o:"m 816 905 q 992 726 927 841 q 1058 481 1058 611 q 912 138 1058 283 q 567 -6 766 -6 q 225 139 370 -6 q 80 481 80 284 q 224 826 80 681 q 569 971 368 971 q 816 905 698 971 m 569 918 q 263 788 392 918 q 134 481 134 659 q 261 175 134 306 q 566 45 389 45 q 872 174 741 45 q 1004 478 1004 304 q 947 699 1004 596 q 787 859 890 801 q 569 918 684 918 m 815 619 q 776 521 815 562 q 681 468 738 480 l 809 209 l 709 208 l 592 456 l 462 457 l 462 209 l 376 209 l 376 771 l 581 771 q 745 737 676 771 q 815 619 815 704 m 462 714 l 462 513 l 566 513 q 682 532 635 513 q 729 611 729 551 q 681 692 729 671 q 564 714 634 714 l 462 714 "},\u00C9:{x_min:109,x_max:614.5625,ha:685,o:"m 124 465 q 116 710 124 540 q 109 932 109 880 l 353 929 l 610 929 q 607 904 607 918 q 607 884 607 891 l 610 838 q 407 860 506 860 l 259 860 l 257 670 l 257 530 l 397 530 q 586 542 492 530 q 584 518 584 530 q 584 499 584 506 q 586 450 584 465 q 487 458 542 454 q 393 463 432 463 l 257 463 l 257 318 l 262 74 q 452 77 381 74 q 614 94 524 80 l 613 47 l 614 0 l 356 0 l 109 0 q 116 243 109 72 q 124 465 124 415 m 426 1225 q 461 1255 445 1244 q 499 1267 478 1267 q 536 1251 522 1267 q 549 1212 549 1236 q 533 1176 549 1192 q 492 1147 517 1160 l 292 1024 l 242 1024 l 426 1225 "},"~":{x_min:284,x_max:1080,ha:1368,o:"m 850 650 q 667 750 761 650 q 511 850 573 850 q 396 793 431 850 q 362 650 362 737 l 284 650 q 339 846 284 768 q 508 924 395 924 q 697 824 606 924 q 853 725 788 725 q 969 779 936 725 q 1002 924 1002 834 l 1080 924 q 1023 727 1080 805 q 850 650 966 650 "},\u0395:{x_min:108,x_max:613.5625,ha:686,o:"m 126 465 q 122 711 126 620 q 108 932 119 802 l 353 928 l 610 931 l 606 884 l 610 836 q 508 853 562 847 q 408 860 453 860 l 260 860 l 258 671 l 258 528 l 398 528 q 587 541 480 528 l 584 497 l 587 451 l 394 463 l 258 463 l 258 316 l 264 73 q 456 76 380 73 q 613 94 531 80 l 610 47 l 613 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},"\xB3":{x_min:48,x_max:424,ha:496,o:"m 159 636 l 156 663 q 178 661 167 661 q 200 661 189 661 q 280 690 248 661 q 312 767 312 719 q 212 869 312 869 q 143 846 168 869 q 107 781 117 823 l 102 779 q 84 812 93 795 q 66 845 75 830 q 134 886 98 871 q 212 901 171 901 q 341 873 284 901 q 398 778 398 845 q 355 691 398 724 q 252 643 313 658 q 373 610 322 643 q 424 509 424 577 q 353 385 424 427 q 196 343 283 343 q 48 373 117 343 q 57 422 52 391 q 66 469 63 454 l 75 469 q 120 399 88 425 q 199 374 153 374 q 294 409 254 374 q 334 499 334 444 q 299 588 334 553 q 207 623 264 623 q 179 620 193 623 q 156 617 166 618 l 159 636 "},"[":{x_min:116,x_max:364.609375,ha:449,o:"m 127 2 l 127 386 l 127 769 l 116 932 l 235 929 l 364 929 l 363 908 l 363 872 q 263 880 313 880 l 216 880 l 216 387 l 216 -105 l 264 -105 q 329 -102 308 -105 q 364 -98 351 -99 l 363 -123 l 363 -158 l 237 -154 l 116 -158 q 121 -81 116 -138 q 127 2 127 -24 "},L:{x_min:108,x_max:627.453125,ha:629,o:"m 126 465 q 122 712 126 621 q 108 932 119 803 q 149 930 126 932 q 188 926 173 927 q 233 929 202 926 q 268 932 265 932 q 263 797 268 883 q 258 684 258 711 q 261 332 258 577 q 264 73 264 86 l 402 73 q 512 78 458 73 q 627 94 566 84 l 624 47 l 627 0 l 358 4 l 108 0 q 117 239 108 70 q 126 465 126 408 "},\u03C3:{x_min:41,x_max:802.109375,ha:806,o:"m 625 644 l 802 651 l 797 611 l 802 566 l 626 573 q 690 464 671 527 q 710 327 710 402 q 616 81 710 177 q 371 -15 522 -15 q 131 78 222 -15 q 41 322 41 172 q 131 572 41 472 q 371 672 221 672 q 439 665 403 672 q 508 653 475 659 q 569 645 541 646 q 625 644 597 644 m 376 619 q 226 530 272 619 q 181 326 181 442 q 224 124 181 213 q 369 35 268 35 q 522 123 474 35 q 570 326 570 211 q 524 529 570 440 q 376 619 479 619 "},\u03B6:{x_min:75,x_max:675,ha:683,o:"m 642 987 l 642 949 q 425 760 524 860 q 260 545 326 661 q 194 303 194 428 q 194 278 194 289 q 202 215 194 267 q 335 141 210 163 q 558 116 447 128 q 675 -7 675 91 q 643 -109 675 -65 q 544 -232 612 -154 l 500 -205 q 565 -113 555 -131 q 576 -66 576 -94 q 552 -20 576 -37 q 292 22 509 2 q 75 240 75 41 q 143 487 75 357 q 297 719 212 616 q 508 949 383 821 l 359 949 q 252 945 301 949 q 130 933 204 941 l 134 977 l 130 1025 q 272 1021 186 1025 q 372 1018 358 1018 q 526 1021 429 1018 q 643 1025 623 1025 l 642 987 "},\u03B8:{x_min:48,x_max:699,ha:749,o:"m 375 909 q 621 773 544 909 q 699 456 699 638 q 627 118 699 255 q 372 -19 556 -19 q 120 114 193 -19 q 48 444 48 247 q 122 773 48 638 q 375 909 196 909 m 184 383 q 221 136 184 242 q 374 31 259 31 q 534 137 505 31 q 564 424 564 244 l 408 428 l 184 423 l 184 383 m 371 858 q 257 804 300 858 q 196 673 214 751 q 186 581 189 630 q 184 483 184 532 l 322 478 q 461 480 364 478 q 564 483 558 483 q 528 747 564 637 q 371 858 493 858 "},\u039F:{x_min:51,x_max:1068,ha:1119,o:"m 51 465 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 757 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 277 1062 379 q 894 80 1031 175 q 560 -15 756 -15 q 447 -10 496 -15 q 304 29 398 -5 q 130 186 210 64 q 51 465 51 308 m 202 468 q 290 162 202 282 q 559 42 379 42 q 826 162 738 42 q 915 468 915 283 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 639 267 764 q 202 468 202 552 "},\u0393:{x_min:108,x_max:627.453125,ha:629,o:"m 448 932 l 627 932 q 623 902 624 921 q 621 874 621 883 l 627 836 q 402 863 512 863 l 264 863 q 261 586 264 779 q 258 379 258 393 q 263 181 258 313 q 268 0 268 48 l 187 5 l 108 0 q 121 209 117 106 q 126 427 126 311 q 117 686 126 504 q 108 932 108 869 l 448 932 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:28,x_max:1011,ha:1032,o:"m 799 0 q 647 62 708 0 q 586 218 586 124 q 647 372 586 309 q 799 436 709 436 q 949 373 888 436 q 1011 223 1011 311 q 995 130 1011 176 q 918 35 972 70 q 799 0 865 0 m 863 1015 l 227 -125 l 158 -125 l 793 1015 l 863 1015 m 241 451 q 89 513 150 451 q 28 668 28 576 q 89 823 28 759 q 241 888 150 888 q 391 825 330 888 q 453 673 453 762 q 434 581 453 623 q 359 486 412 521 q 241 451 307 451 m 897 260 q 872 353 897 310 q 798 397 847 397 q 718 340 737 397 q 700 202 700 283 q 719 86 700 133 q 798 40 738 40 q 866 73 840 40 q 892 149 892 106 q 895 206 894 169 q 897 260 897 242 m 339 689 q 312 812 339 775 q 240 849 285 849 q 160 788 179 849 q 141 648 141 728 q 164 541 141 590 q 240 493 188 493 q 307 527 281 493 q 334 602 334 561 q 339 689 339 641 "},P:{x_min:109,x_max:722,ha:736,o:"m 127 559 q 109 931 127 759 l 231 927 q 337 931 270 927 q 416 935 403 935 q 632 874 543 935 q 722 694 722 814 q 616 493 722 564 q 371 422 510 422 l 252 422 q 257 200 252 348 q 262 0 262 52 q 224 3 249 0 q 185 8 199 8 q 147 5 168 8 q 109 0 127 2 q 118 287 109 85 q 127 559 127 488 m 576 684 q 515 826 576 773 q 364 879 455 879 l 262 875 q 254 781 257 827 q 252 688 252 735 l 252 476 q 507 530 439 476 q 576 684 576 584 "},\u038F:{x_min:-1,x_max:1355.953125,ha:1365,o:"m 685 0 q 555 4 646 0 q 460 8 464 8 l 247 0 l 250 47 q 248 74 250 59 q 244 95 246 88 q 355 88 305 90 q 486 86 405 86 q 340 261 389 170 q 292 473 292 352 q 437 822 292 694 q 804 950 582 950 q 1168 823 1028 950 q 1309 473 1309 697 q 1262 261 1309 350 q 1115 86 1215 173 q 1229 91 1139 86 q 1355 96 1319 96 l 1351 33 l 1354 0 l 1143 8 q 1014 4 1104 8 q 918 0 924 0 l 918 72 q 1100 215 1043 122 q 1158 451 1158 309 q 1071 764 1158 639 q 802 889 984 889 q 533 767 621 889 q 446 454 446 645 q 505 217 446 319 q 685 72 564 115 l 685 0 m 182 943 q 215 974 200 964 q 251 985 230 985 q 289 969 274 985 q 304 932 304 954 q 290 896 304 911 q 247 866 275 882 l 48 743 l -1 743 l 182 943 "},\u0388:{x_min:-1.390625,x_max:920.015625,ha:992,o:"m 432 465 q 428 711 432 620 q 414 932 425 802 l 660 928 l 917 932 l 912 884 l 917 836 q 814 853 868 847 q 714 860 760 860 l 567 860 l 564 671 l 564 528 l 704 528 q 893 541 786 528 l 890 497 l 893 451 l 700 462 l 564 462 l 564 317 l 570 74 q 762 77 686 74 q 920 94 838 80 l 917 47 l 920 0 l 664 4 l 414 0 q 423 239 414 70 q 432 465 432 408 m 181 943 q 215 974 200 964 q 251 985 230 985 q 288 969 273 985 q 304 932 304 954 q 289 896 304 911 q 247 866 275 882 l 47 743 l -1 743 l 181 943 "},_:{x_min:0,x_max:683.328125,ha:683,o:"m 683 -322 l 0 -322 l 0 -256 l 683 -256 l 683 -322 "},\u03AA:{x_min:-3,x_max:388,ha:386,o:"m 126 465 q 118 710 126 540 q 111 932 111 880 q 156 929 123 932 q 192 926 190 926 q 238 929 205 926 q 276 932 271 932 q 265 697 276 863 q 255 465 255 530 q 265 230 255 397 q 276 0 276 63 q 233 3 260 0 q 192 8 205 8 q 153 5 176 8 q 111 0 131 2 q 118 243 111 72 q 126 465 126 415 m 73 1208 q 124 1186 102 1208 q 146 1133 146 1164 q 123 1081 146 1105 q 73 1058 101 1058 q 19 1080 42 1058 q -3 1133 -3 1103 q 19 1185 -3 1163 q 73 1208 41 1208 m 313 1208 q 366 1186 344 1208 q 388 1133 388 1164 q 365 1080 388 1103 q 313 1058 342 1058 q 260 1080 283 1058 q 238 1133 238 1103 q 260 1185 238 1163 q 313 1208 282 1208 "},"+":{x_min:169,x_max:970,ha:1139,o:"m 603 441 l 970 441 l 970 374 l 603 374 l 603 0 l 536 0 l 536 374 l 169 374 l 169 441 l 536 441 l 536 816 l 603 816 l 603 441 "},"\xBD":{x_min:83,x_max:1094.125,ha:1172,o:"m 250 743 l 245 836 q 181 804 205 818 q 120 768 156 791 q 104 788 117 775 q 83 808 91 801 q 200 851 141 825 q 327 913 259 877 l 336 911 q 331 724 336 850 q 326 551 326 598 l 326 391 q 301 394 319 391 q 280 397 283 397 q 254 394 271 397 q 233 391 238 391 q 246 551 242 473 q 250 743 250 629 m 859 1015 l 929 1015 l 312 -124 l 243 -124 l 859 1015 m 982 363 q 959 443 982 413 q 887 478 936 473 q 821 458 852 478 q 784 407 790 439 l 778 377 l 773 376 q 728 448 753 416 q 899 513 801 513 q 1019 476 967 513 q 1072 374 1072 439 q 955 189 1072 285 q 806 67 838 93 l 978 67 q 1094 79 1039 67 q 1090 63 1092 76 q 1088 41 1088 49 q 1094 3 1088 18 q 981 3 1056 3 q 867 3 906 3 q 791 3 842 3 q 714 3 739 3 l 714 25 q 913 198 844 125 q 982 363 982 270 "},\u03A1:{x_min:109,x_max:722,ha:736,o:"m 127 559 q 109 931 127 759 l 231 927 q 337 931 270 927 q 416 935 403 935 q 632 874 543 935 q 722 694 722 814 q 616 493 722 564 q 371 422 510 422 l 252 422 q 257 200 252 348 q 262 0 262 52 q 224 3 249 0 q 185 8 199 8 q 147 5 168 8 q 109 0 127 2 q 118 287 109 85 q 127 559 127 488 m 576 684 q 515 826 576 773 q 364 879 455 879 l 262 875 q 254 781 257 827 q 252 688 252 735 l 252 476 q 507 530 439 476 q 576 684 576 584 "},"'":{x_min:88.890625,x_max:306.9375,ha:374,o:"m 169 858 q 196 923 177 896 q 250 951 215 951 q 289 937 272 951 q 306 903 306 923 q 295 858 306 883 q 269 812 284 833 l 122 568 l 88 576 l 169 858 "},T:{x_min:11,x_max:713,ha:725,o:"m 11 839 l 15 884 l 11 932 q 194 927 72 932 q 361 922 316 922 q 544 927 421 922 q 713 932 668 932 q 707 883 707 911 q 707 861 707 870 q 713 834 707 852 q 609 850 666 843 q 504 857 552 857 l 428 857 q 426 767 428 830 q 424 701 424 704 l 428 220 q 442 0 428 122 q 362 8 401 3 q 323 5 344 8 q 282 0 301 2 q 289 132 282 40 q 296 259 296 225 l 296 683 l 296 857 q 11 839 164 857 "},\u03A6:{x_min:50,x_max:1068,ha:1119,o:"m 637 -25 q 559 -15 591 -15 q 527 -17 544 -15 q 483 -25 509 -19 l 487 68 q 181 179 313 68 q 50 465 50 291 q 172 744 50 647 q 487 865 295 842 l 483 958 q 522 952 502 955 q 559 950 543 950 q 596 952 576 950 q 637 958 616 955 l 631 865 q 942 758 816 865 q 1068 465 1068 651 q 944 184 1068 286 q 631 68 820 83 l 637 -25 m 501 502 q 497 677 501 570 q 494 800 494 784 q 278 698 354 786 q 203 466 203 611 q 282 231 203 331 q 494 132 361 132 q 497 363 494 225 q 501 502 501 501 m 915 466 q 839 706 915 612 q 626 800 764 800 q 622 636 626 738 q 618 470 618 533 q 622 301 618 408 q 626 132 626 194 q 839 226 764 132 q 915 466 915 320 "},j:{x_min:-55,x_max:248,ha:342,o:"m 113 391 q 106 543 113 444 q 100 654 100 641 q 144 648 135 648 q 167 648 153 648 q 202 649 189 648 q 241 654 214 650 q 237 507 241 595 q 234 405 234 419 l 234 -13 l 234 -109 q 154 -303 234 -234 q -55 -372 74 -372 l -55 -333 q 78 -267 44 -323 q 113 -103 113 -212 l 113 -26 l 113 391 m 171 963 q 226 940 205 963 q 248 881 248 917 q 226 831 248 849 q 171 813 204 813 q 116 833 139 813 q 94 885 94 853 q 115 941 94 919 q 171 963 136 963 "},\u03A3:{x_min:44.4375,x_max:790.28125,ha:825,o:"m 729 883 l 733 835 q 272 855 519 855 q 544 500 391 691 q 372 312 446 399 q 219 119 297 224 l 455 119 q 638 124 522 119 q 790 129 755 129 l 784 86 l 783 68 l 784 42 q 785 25 784 33 q 790 0 786 17 q 558 4 694 0 q 416 8 422 8 q 230 4 350 8 q 44 0 111 0 l 44 50 q 169 182 105 109 q 307 344 232 255 l 406 468 q 242 689 314 594 q 76 899 170 785 l 76 932 q 231 929 123 932 q 345 926 340 926 q 568 929 412 926 q 733 932 723 932 l 729 883 "},"1":{x_min:72,x_max:472,ha:749,o:"m 334 626 q 331 722 334 655 q 329 793 329 788 q 228 737 278 765 q 133 673 177 709 q 102 713 124 688 q 72 743 80 737 q 274 827 177 780 q 458 935 372 875 l 472 929 q 463 552 472 804 q 455 259 455 300 l 459 0 q 421 5 441 2 q 384 8 401 8 q 349 5 367 8 q 312 0 330 2 q 329 289 324 133 q 334 626 334 445 "},\u00E4:{x_min:43,x_max:655.5,ha:649,o:"m 234 -15 q 98 33 153 -15 q 43 162 43 82 q 106 303 43 273 q 303 364 169 333 q 444 448 437 395 q 403 568 444 521 q 288 616 362 616 q 191 587 233 616 q 124 507 149 559 l 95 520 l 104 591 q 202 651 144 631 q 323 672 261 672 q 500 622 444 672 q 557 455 557 573 l 557 133 q 567 69 557 84 q 618 54 577 54 q 655 58 643 54 l 655 26 q 594 5 626 14 q 537 -6 562 -3 q 438 85 453 -6 q 342 10 388 35 q 234 -15 296 -15 m 203 929 q 254 906 232 929 q 277 854 277 884 q 256 799 277 820 q 204 778 236 778 q 149 800 173 778 q 126 854 126 822 q 148 906 126 884 q 203 929 170 929 m 444 929 q 498 906 476 929 q 521 854 521 884 q 500 800 521 822 q 447 778 479 778 q 392 800 415 778 q 370 854 370 823 q 392 906 370 884 q 444 929 414 929 m 176 186 q 204 98 176 133 q 284 64 232 64 q 390 107 342 64 q 438 212 438 151 l 438 345 q 239 293 303 319 q 176 186 176 268 "},"<":{x_min:176,x_max:961.109375,ha:1139,o:"m 279 406 l 960 130 l 961 56 l 176 379 l 176 432 l 960 756 l 960 682 l 279 406 "},"\xA3":{x_min:65,x_max:728.890625,ha:749,o:"m 67 47 l 65 98 l 116 101 q 203 168 176 112 q 231 292 231 224 q 227 375 231 330 q 221 444 223 420 q 139 441 171 444 q 76 432 107 439 l 78 479 l 76 503 q 105 495 92 498 q 134 493 117 493 l 219 493 q 212 550 214 522 q 209 609 209 578 q 304 825 209 742 q 537 909 399 909 q 633 896 592 909 q 723 864 673 884 q 666 731 694 809 l 656 731 q 605 825 641 791 q 512 859 570 859 q 383 796 427 859 q 340 646 340 734 l 345 493 l 366 493 q 523 502 450 493 l 521 466 l 526 434 q 438 441 493 439 q 345 444 383 444 l 345 378 q 310 238 345 302 q 213 107 275 173 q 527 113 421 107 q 728 134 633 119 l 721 66 q 728 0 721 34 q 542 3 666 0 q 358 8 419 8 q 176 3 285 8 q 65 0 67 0 l 67 47 "},"\xB9":{x_min:82,x_max:347,ha:496,o:"m 255 731 l 255 833 l 123 759 q 104 780 120 763 q 82 801 87 797 q 208 850 148 822 q 337 917 269 878 l 347 912 q 341 721 347 848 q 336 529 336 593 l 336 356 q 311 358 327 356 q 289 361 295 361 q 264 358 280 361 q 242 356 248 356 q 251 498 247 407 q 255 731 255 590 "},t:{x_min:18,x_max:415.21875,ha:425,o:"m 18 586 l 22 630 l 18 654 q 133 643 80 643 q 131 732 133 669 q 129 799 129 796 q 199 827 163 811 q 263 863 234 843 q 252 758 255 811 q 250 643 250 705 q 334 645 310 643 q 401 654 358 647 l 398 618 l 401 586 q 248 594 323 594 l 243 258 l 243 162 q 272 76 243 109 q 353 43 301 43 q 387 44 369 43 q 415 48 405 46 l 415 4 q 349 -10 378 -5 q 290 -15 319 -15 q 174 18 221 -15 q 123 118 128 51 l 123 200 l 129 387 l 133 594 q 84 592 113 594 q 18 586 55 590 "},\u03BB:{x_min:2.78125,x_max:652.78125,ha:657,o:"m 302 670 q 227 871 262 803 q 111 940 193 940 q 78 937 94 940 q 20 924 62 934 l 20 978 q 96 1012 59 1000 q 170 1025 133 1025 q 329 947 287 1025 q 427 692 372 869 q 538 340 481 515 q 652 1 594 166 l 579 5 l 504 0 q 336 573 423 305 q 218 301 272 438 q 111 0 163 163 l 61 6 q 27 3 48 6 q 2 0 5 0 q 302 670 165 329 "},\u00F9:{x_min:90,x_max:664,ha:754,o:"m 653 498 q 653 329 653 443 q 653 158 653 215 q 664 0 653 81 q 631 3 647 1 q 598 5 616 5 q 563 3 583 5 q 533 0 544 1 l 538 118 q 440 18 494 52 q 312 -15 385 -15 q 148 50 201 -15 q 96 229 96 115 l 96 354 l 96 516 l 90 655 q 120 650 103 651 q 158 648 136 648 q 192 650 175 648 q 227 655 210 651 q 220 445 227 591 q 213 247 213 299 q 247 115 213 163 q 362 68 281 68 q 477 113 428 68 q 531 217 525 159 q 538 340 538 274 q 533 520 538 394 q 528 655 528 647 q 561 650 548 651 q 596 648 574 648 q 663 655 628 648 q 653 498 653 573 m 445 743 l 244 866 q 205 896 223 877 q 187 934 187 915 q 202 970 187 955 q 238 986 217 986 q 277 973 256 986 q 309 945 298 961 l 496 743 l 445 743 "},W:{x_min:0,x_max:1306.953125,ha:1307,o:"m 0 932 q 47 927 31 929 q 76 926 62 926 q 121 929 88 926 q 155 931 154 931 q 262 547 200 750 l 380 171 q 470 437 415 272 q 552 693 525 602 q 619 931 580 784 l 672 926 q 700 928 684 926 q 726 931 716 930 q 825 604 787 727 q 883 419 862 482 q 969 171 904 357 l 1087 522 q 1143 720 1120 623 q 1187 931 1166 816 q 1221 929 1197 931 q 1247 926 1245 926 q 1280 928 1262 926 q 1306 931 1298 930 q 1131 467 1218 716 q 990 0 1045 217 q 963 4 980 1 q 937 7 947 7 q 904 3 925 7 q 880 0 883 0 q 761 385 831 184 l 641 733 l 491 287 q 402 0 438 133 q 370 3 391 0 q 344 7 350 7 q 315 4 327 7 q 287 0 302 2 q 206 296 252 142 q 122 568 161 450 q 0 932 83 686 "},\u00EF:{x_min:-25,x_max:365.328125,ha:340,o:"m 104 144 l 104 522 l 97 655 q 138 650 113 651 q 167 648 162 648 q 233 655 206 648 q 225 506 225 581 q 229 254 225 423 q 233 0 233 84 q 201 3 216 1 q 164 5 186 5 q 128 3 143 5 q 97 0 113 1 l 104 144 m 50 929 q 102 906 80 929 q 125 854 125 884 q 104 799 125 820 q 52 778 84 778 q -2 800 19 778 q -25 854 -25 822 q -4 906 -25 884 q 50 929 16 929 m 290 929 q 343 906 320 929 q 365 854 365 884 q 345 799 365 820 q 294 778 324 778 q 238 800 260 778 q 216 854 216 822 q 237 906 216 884 q 290 929 258 929 "},">":{x_min:176.390625,x_max:963,ha:1139,o:"m 963 379 l 176 56 l 176 130 l 858 406 l 176 682 l 176 756 l 962 432 l 963 379 "},v:{x_min:0,x_max:658.328125,ha:654,o:"m 0 655 q 54 648 38 648 q 86 647 69 647 q 113 647 100 647 q 168 654 127 648 q 252 402 204 529 l 358 134 l 470 436 q 543 654 508 533 q 570 650 554 651 q 600 648 586 648 q 636 648 618 648 q 658 654 652 652 q 506 340 577 502 q 372 0 436 177 q 347 5 362 2 q 319 8 333 8 q 296 5 309 8 q 272 0 283 2 q 200 206 234 120 q 0 655 165 292 "},\u03C4:{x_min:30,x_max:677,ha:701,o:"m 423 573 l 419 303 q 423 146 419 250 q 428 0 428 42 q 394 4 410 2 q 359 5 378 5 q 333 4 343 5 q 289 0 323 4 l 298 194 l 294 573 q 156 553 207 573 q 57 472 105 534 q 30 559 49 522 q 149 626 82 609 q 307 644 216 644 l 510 644 q 604 647 545 644 q 677 651 664 651 l 671 610 q 677 566 671 586 q 527 569 618 566 q 423 573 436 573 "},\u00FB:{x_min:90,x_max:664,ha:754,o:"m 653 498 q 653 328 653 442 q 653 158 653 215 q 664 0 653 81 q 631 3 647 1 q 598 5 616 5 q 563 3 583 5 q 533 0 544 1 l 538 118 q 440 18 494 52 q 312 -15 385 -15 q 148 50 201 -15 q 96 229 96 115 l 96 354 l 96 516 l 90 655 q 120 650 103 651 q 158 648 136 648 q 192 649 175 648 q 227 655 210 651 q 220 445 227 591 q 213 247 213 299 q 247 115 213 163 q 362 68 281 68 q 477 113 428 68 q 531 217 525 159 q 538 340 538 274 q 533 520 538 394 q 528 655 528 647 q 558 650 542 651 q 596 648 574 648 q 629 649 612 648 q 663 655 646 651 q 653 498 653 573 m 332 978 l 421 978 l 572 743 l 525 743 l 376 875 l 227 743 l 180 743 l 332 978 "},\u03BE:{x_min:64,x_max:654,ha:656,o:"m 562 861 q 502 941 539 911 q 414 972 465 972 q 299 917 342 972 q 256 788 256 862 q 312 650 256 701 q 458 599 369 599 l 526 599 l 524 563 l 524 528 q 480 533 503 532 q 427 535 457 535 q 271 494 337 535 q 197 408 205 454 q 187 347 188 361 q 186 326 186 333 q 186 294 186 300 q 190 282 187 287 q 238 200 201 229 q 335 153 276 171 l 494 118 q 610 73 567 100 q 654 -13 654 46 q 628 -103 654 -60 q 511 -238 602 -146 l 466 -210 q 541 -121 530 -139 q 553 -75 553 -103 q 393 16 553 -18 q 149 92 234 50 q 64 276 64 133 q 130 462 64 379 q 299 575 197 544 q 175 652 222 600 q 128 780 128 704 q 213 954 128 883 q 405 1025 298 1025 q 507 1009 458 1025 q 609 965 555 994 q 585 914 600 945 q 562 861 571 883 "},"&":{x_min:76,x_max:917.671875,ha:975,o:"m 360 -18 q 160 41 245 -18 q 76 211 76 101 q 137 382 76 315 q 314 515 199 448 q 249 618 273 569 q 225 722 225 668 q 287 872 225 812 q 441 932 349 932 q 581 891 520 932 q 643 777 643 851 q 588 640 643 701 q 453 532 533 579 q 568 390 509 459 q 690 253 627 321 q 815 530 792 379 l 829 530 l 887 466 q 814 327 856 396 q 727 209 772 259 q 807 115 760 169 q 917 0 853 61 q 855 1 896 0 q 791 2 813 2 l 739 0 l 649 110 q 515 15 586 48 q 360 -18 445 -18 m 341 475 q 234 380 267 419 q 201 273 201 340 q 258 125 201 190 q 401 61 316 61 q 508 86 458 61 q 606 154 559 111 l 341 475 m 547 770 q 524 854 547 823 q 454 886 502 886 q 363 851 402 886 q 325 769 325 817 q 344 685 325 718 q 422 575 363 652 q 514 661 481 615 q 547 770 547 708 "},\u039B:{x_min:0,x_max:852.78125,ha:853,o:"m 662 452 l 778 172 l 852 0 l 769 5 q 734 4 747 5 q 679 0 722 4 q 647 102 661 55 q 605 226 633 148 l 547 383 l 401 777 l 266 429 q 191 213 226 319 q 125 0 157 108 l 62 2 l 0 0 q 205 459 95 191 q 380 932 315 726 q 404 927 393 929 q 431 926 416 926 q 459 929 441 926 q 487 932 477 932 q 548 743 511 850 q 662 452 586 637 "},I:{x_min:109,x_max:271,ha:385,o:"m 127 465 q 123 711 127 620 q 109 932 120 803 q 154 927 129 929 q 190 925 179 925 q 238 928 209 925 q 271 931 266 931 q 263 788 271 887 q 256 659 256 690 l 256 448 l 256 283 q 263 135 256 238 q 271 0 271 31 q 231 3 258 0 q 190 8 204 8 q 151 5 172 8 q 109 0 129 2 q 118 239 109 70 q 127 465 127 408 "},G:{x_min:51,x_max:942,ha:1001,o:"m 581 -15 q 198 107 345 -15 q 51 459 51 229 q 196 815 51 680 q 566 950 342 950 q 755 929 659 950 q 930 869 852 909 q 906 802 916 836 q 895 737 897 769 l 874 737 q 739 855 808 818 q 571 893 670 893 q 305 770 406 893 q 204 479 204 647 q 298 168 204 291 q 577 46 393 46 q 689 56 640 46 q 790 94 738 66 q 794 184 790 123 q 798 251 798 246 q 794 337 798 280 q 790 423 790 394 q 830 417 821 418 q 863 416 838 416 q 901 419 880 416 q 941 425 923 422 l 936 236 q 939 121 936 201 q 942 37 942 41 q 757 -1 843 11 q 581 -15 672 -15 "},\u03B0:{x_min:79,x_max:703,ha:774,o:"m 703 395 q 595 110 703 236 q 332 -15 488 -15 q 145 54 211 -15 q 79 244 79 123 l 83 430 q 81 542 83 486 q 79 654 80 598 l 146 650 l 217 654 q 209 502 217 608 q 202 365 202 397 l 202 261 q 240 105 202 168 q 369 43 279 43 q 523 132 476 43 q 571 340 571 222 q 548 493 571 418 q 488 645 526 568 q 550 647 529 645 q 627 658 571 650 q 703 395 703 537 m 209 865 q 250 846 232 865 q 269 804 269 828 q 251 761 269 780 q 209 743 234 743 q 166 761 184 743 q 148 804 148 779 q 166 846 148 828 q 209 865 184 865 m 361 929 q 378 969 368 956 q 414 982 388 982 q 458 941 458 982 q 446 904 458 919 l 338 743 l 306 743 l 361 929 m 513 865 q 555 846 537 865 q 573 804 573 828 q 555 761 573 779 q 513 743 537 743 q 470 761 487 743 q 454 804 454 779 q 470 846 454 828 q 513 865 487 865 "},"`":{x_min:86.5,x_max:303.171875,ha:374,o:"m 222 659 q 194 595 214 622 q 140 568 175 568 q 86 613 86 568 q 96 660 86 636 q 122 706 107 684 l 271 950 l 303 940 l 222 659 "},\u03A5:{x_min:-28,x_max:746,ha:707,o:"m 297 177 l 297 386 q 191 570 256 458 q 84 750 125 682 q -28 932 42 819 q 24 928 -9 932 q 63 925 59 925 q 112 927 91 925 q 146 932 134 930 q 207 800 174 866 q 275 676 239 735 l 389 475 q 509 688 451 575 q 627 932 567 801 l 683 926 q 715 927 701 926 q 746 932 729 929 q 555 627 640 769 l 432 415 l 432 240 q 435 101 432 198 q 438 0 438 5 q 401 4 426 1 q 361 6 376 6 q 319 4 334 6 q 284 0 304 2 q 292 88 288 36 q 297 177 297 140 "},r:{x_min:89,x_max:465.390625,ha:488,o:"m 99 120 l 99 400 l 99 433 q 91 654 99 548 q 125 648 114 650 q 162 647 136 647 q 232 654 195 647 q 223 588 226 626 q 220 516 220 550 q 313 628 264 589 q 437 668 362 668 l 465 668 l 459 604 l 465 537 q 427 544 448 541 q 383 551 407 548 q 256 482 292 551 q 220 312 220 413 q 222 131 220 256 q 225 0 225 6 l 157 6 l 89 0 l 99 120 "},x:{x_min:1,x_max:635,ha:632,o:"m 264 316 l 158 461 q 78 563 120 508 q 5 655 36 619 q 97 647 51 647 q 141 649 120 647 q 177 654 162 651 q 249 538 214 592 q 334 415 284 484 q 420 533 377 473 q 501 654 464 592 q 523 650 508 652 q 550 647 539 648 q 616 654 582 647 l 371 365 q 477 210 434 267 q 635 0 519 152 q 587 3 616 0 q 551 6 558 6 q 501 4 523 6 q 465 0 479 1 q 380 140 407 98 q 295 264 352 183 q 172 84 194 117 q 123 0 151 51 l 66 5 q 33 2 55 5 q 1 0 10 0 q 131 154 63 72 q 264 316 199 236 "},\u00E8:{x_min:40,x_max:646.9375,ha:681,o:"m 407 42 q 602 130 523 42 l 621 130 q 613 93 617 112 q 609 47 609 73 q 496 0 558 14 q 369 -15 435 -15 q 130 73 220 -15 q 40 311 40 162 q 126 562 40 456 q 355 669 212 669 q 564 590 481 669 q 646 386 646 512 l 644 331 q 438 333 562 331 q 313 335 315 335 l 179 331 q 235 127 179 212 q 407 42 291 42 m 407 743 l 208 866 q 166 895 183 880 q 149 934 149 911 q 167 967 149 949 q 202 986 185 986 q 243 969 220 986 q 273 945 266 952 l 457 743 l 407 743 m 513 392 l 513 437 q 470 563 513 509 q 356 618 427 618 q 233 552 271 618 q 183 390 195 487 l 513 392 "},\u03BC:{x_min:84,x_max:669.109375,ha:754,o:"m 331 -15 q 265 -7 292 -15 q 210 19 238 0 l 208 -128 q 211 -266 208 -178 q 214 -373 214 -354 q 183 -369 198 -370 q 150 -368 168 -368 q 114 -370 133 -368 q 84 -373 95 -372 q 89 -165 84 -304 q 94 43 94 -26 q 89 363 94 149 q 84 655 84 578 q 150 647 118 647 q 219 654 180 647 q 213 495 219 601 q 208 334 208 390 q 232 155 208 227 q 339 75 256 83 q 471 112 419 75 q 531 212 523 150 q 539 332 539 273 q 536 518 539 388 q 533 655 533 648 q 600 647 568 647 q 669 654 629 647 q 660 477 662 566 q 658 257 658 389 q 660 113 658 171 q 669 -1 662 55 l 602 4 l 537 -1 l 539 106 q 449 17 502 50 q 331 -15 397 -15 "},"\xF7":{x_min:169,x_max:969,ha:1139,o:"m 641 643 q 618 593 641 615 q 566 571 596 571 q 518 592 538 571 q 498 643 498 613 q 518 692 498 670 q 567 715 539 715 q 610 703 579 715 q 641 643 641 691 m 969 374 l 169 374 l 169 441 l 969 441 l 969 374 m 641 170 q 619 120 641 141 q 570 100 598 100 q 519 120 540 100 q 498 170 498 141 q 518 221 498 199 q 568 243 538 243 q 604 235 584 243 q 632 214 624 227 q 641 170 641 201 "},h:{x_min:92,x_max:665,ha:758,o:"m 102 136 l 102 859 q 100 934 102 894 q 94 1025 98 975 q 136 1018 126 1019 q 158 1018 146 1018 q 226 1025 188 1018 q 222 957 223 1001 q 221 888 221 913 l 221 868 l 221 543 q 322 637 264 602 q 450 672 380 672 q 608 606 558 672 q 659 429 659 541 l 659 298 l 659 136 l 665 0 q 633 3 648 1 q 597 5 617 5 q 560 3 580 5 q 529 0 540 1 q 534 202 529 68 q 540 405 540 337 q 503 533 540 481 q 394 586 467 586 q 256 508 291 586 q 221 313 221 430 q 224 133 221 244 q 227 0 227 22 q 188 3 211 0 q 161 6 164 6 q 123 4 137 6 q 92 0 108 2 l 102 136 "},".":{x_min:100,x_max:274,ha:374,o:"m 187 156 q 248 130 223 156 q 274 68 274 105 q 248 8 274 32 q 187 -15 223 -15 q 125 8 150 -15 q 100 68 100 32 q 125 130 100 105 q 187 156 150 156 "},\u03C6:{x_min:39,x_max:965,ha:1006,o:"m 578 -371 q 505 -362 539 -362 q 465 -365 483 -362 q 427 -372 446 -368 q 433 -163 427 -298 q 440 -11 440 -29 q 156 76 274 -11 q 39 327 39 163 q 145 571 39 486 q 410 656 252 656 q 412 635 411 645 q 413 615 413 625 q 235 516 292 580 q 179 327 179 451 q 247 118 179 197 q 442 39 316 39 l 444 197 l 444 311 q 444 400 444 340 q 444 491 444 461 q 514 619 452 570 q 657 668 577 668 q 879 568 794 668 q 965 332 965 469 q 850 84 965 169 q 563 -14 735 0 q 570 -203 563 -71 q 578 -371 578 -334 m 826 347 q 794 534 826 451 q 677 617 763 617 q 592 572 621 617 q 563 470 563 527 l 559 350 l 563 39 q 759 126 693 39 q 826 347 826 213 "},";":{x_min:72.609375,x_max:312,ha:446,o:"m 224 636 q 287 611 262 636 q 312 548 312 586 q 287 486 312 511 q 224 461 262 461 q 162 486 188 461 q 137 548 137 512 q 162 611 137 586 q 224 636 187 636 m 164 75 q 198 157 182 140 q 244 175 214 175 q 304 119 304 175 q 296 75 304 93 q 262 18 287 56 l 103 -243 l 72 -231 l 164 75 "},f:{x_min:12,x_max:432.546875,ha:397,o:"m 127 324 l 127 597 q 66 595 92 597 q 12 588 39 594 l 14 626 l 12 654 q 79 648 38 649 q 127 647 121 647 q 192 901 127 777 q 378 1025 257 1025 q 409 1022 400 1025 q 432 1015 418 1019 l 415 896 q 371 911 395 905 q 325 918 347 918 q 252 886 278 918 q 227 805 227 855 q 235 713 227 760 q 246 647 243 665 q 330 650 276 647 q 396 654 384 654 q 391 642 393 647 q 389 633 389 637 l 388 622 l 389 610 q 396 589 389 609 q 323 595 357 594 q 246 597 289 597 l 246 366 q 250 183 246 305 q 254 0 254 60 q 213 3 238 0 q 183 6 187 6 q 144 4 161 6 q 116 0 127 1 q 121 160 116 52 q 127 324 127 269 "},"\u201C":{x_min:83.71875,x_max:550.390625,ha:625,o:"m 471 659 q 441 593 458 618 q 389 568 424 568 q 350 579 365 568 q 335 613 335 591 q 346 660 335 633 q 371 706 358 687 l 519 950 l 550 940 l 471 659 m 221 659 q 192 593 211 618 q 137 568 174 568 q 83 613 83 568 q 93 658 83 637 q 119 706 103 680 l 268 950 l 300 940 l 221 659 "},A:{x_min:-15.28125,x_max:838.890625,ha:825,o:"m 257 639 l 387 950 q 402 945 395 947 q 417 944 409 944 q 452 950 437 944 q 576 629 536 733 q 686 359 617 526 q 838 0 755 192 q 789 3 820 0 q 751 6 758 6 q 700 4 723 6 q 663 0 677 1 q 600 199 622 137 q 543 353 579 260 l 377 358 l 215 353 l 162 205 q 130 110 145 160 q 101 0 115 59 l 44 5 q 6 2 20 5 q -15 0 -8 0 q 76 211 30 105 q 158 404 121 318 q 257 639 195 490 m 378 419 l 513 425 l 379 761 l 246 425 l 378 419 "},"6":{x_min:64,x_max:692,ha:749,o:"m 464 859 q 267 730 324 859 q 210 442 210 602 q 315 514 262 488 q 431 540 367 540 q 618 462 545 540 q 692 270 692 385 q 604 65 692 145 q 390 -15 516 -15 q 142 93 221 -15 q 64 377 64 201 q 167 745 64 581 q 462 909 270 909 q 524 905 501 909 q 579 890 547 902 l 574 827 q 521 851 547 844 q 464 859 495 859 m 554 258 q 510 409 554 347 q 380 471 466 471 q 255 409 300 471 q 210 264 210 348 q 253 105 210 172 q 384 39 297 39 q 485 73 441 39 q 540 148 529 108 q 552 206 551 187 q 554 258 554 225 "},"\u2018":{x_min:86.5,x_max:303.171875,ha:374,o:"m 224 659 q 193 594 212 620 q 140 568 174 568 q 86 615 86 568 q 98 660 86 633 q 122 708 110 687 l 271 951 l 303 942 l 224 659 "},\u03CA:{x_min:-29,x_max:362,ha:342,o:"m 104 333 l 104 520 q 103 566 104 544 q 96 654 102 588 q 140 647 130 648 q 165 647 151 647 q 232 654 195 647 q 224 555 225 599 q 223 437 223 511 l 223 406 q 228 194 223 337 q 233 0 233 51 q 201 3 216 1 q 165 5 185 5 q 127 3 148 5 q 96 0 107 1 q 100 165 96 51 q 104 333 104 279 m 45 928 q 99 907 77 928 q 122 853 122 886 q 101 800 122 822 q 48 778 80 778 q -6 800 15 778 q -29 853 -29 822 q -7 906 -29 884 q 45 928 13 928 m 286 928 q 340 906 318 928 q 362 853 362 884 q 341 799 362 821 q 289 778 321 778 q 235 800 257 778 q 213 853 213 822 q 233 905 213 883 q 286 928 254 928 "},\u03C0:{x_min:19,x_max:957,ha:989,o:"m 702 5 l 635 0 q 639 114 635 44 q 643 196 643 185 l 643 575 l 508 575 l 373 575 l 369 284 q 373 143 369 236 q 377 0 377 50 q 345 3 360 1 q 309 5 329 5 q 271 3 292 5 q 239 0 250 1 l 248 196 l 243 575 q 130 553 171 575 q 43 472 89 532 q 19 559 35 519 q 139 627 71 611 q 305 644 207 644 l 658 644 l 852 644 l 957 651 l 951 610 l 957 566 l 769 575 l 765 310 q 769 154 765 257 q 773 0 773 51 q 739 3 755 1 q 702 5 724 5 "},\u03AC:{x_min:41,x_max:827.109375,ha:846,o:"m 705 352 q 803 -1 763 155 l 739 1 l 673 -1 l 632 172 q 521 36 593 87 q 356 -15 448 -15 q 129 81 217 -15 q 41 316 41 177 q 130 569 41 467 q 368 672 220 672 q 537 622 464 672 q 659 486 610 573 q 711 654 691 569 l 770 650 l 827 654 q 763 505 792 576 q 705 352 734 434 m 518 943 q 552 974 536 964 q 589 985 568 985 q 626 969 611 985 q 641 932 641 953 q 627 897 641 911 q 585 866 613 883 l 384 743 l 335 743 l 518 943 m 377 619 q 226 530 272 619 q 181 326 181 442 q 223 124 181 214 q 367 34 265 34 q 528 137 480 34 q 601 323 577 240 q 527 531 578 444 q 377 619 475 619 "},O:{x_min:51,x_max:1068,ha:1119,o:"m 51 465 q 192 820 51 690 q 559 950 333 950 q 892 853 754 950 q 1047 654 1031 757 q 1065 525 1062 551 q 1068 462 1068 500 q 1065 402 1068 426 q 1047 277 1062 379 q 894 80 1031 175 q 560 -15 756 -15 q 447 -10 496 -15 q 304 29 398 -5 q 130 186 210 64 q 51 465 51 308 m 202 468 q 290 162 202 282 q 559 42 379 42 q 826 162 738 42 q 915 468 915 283 q 825 770 915 651 q 559 889 735 889 q 348 826 429 889 q 225 639 267 764 q 202 468 202 552 "},n:{x_min:89,x_max:661,ha:754,o:"m 99 155 l 99 495 q 97 569 99 530 q 91 655 95 608 q 153 648 122 648 l 219 656 l 218 539 q 319 635 260 599 q 451 672 378 672 q 591 624 528 672 q 654 501 654 576 l 654 299 l 654 136 l 661 0 q 629 3 644 1 q 593 5 613 5 q 556 3 576 5 q 525 0 536 1 q 530 222 525 80 q 535 406 535 364 q 501 536 535 485 q 389 587 467 587 q 253 508 288 587 q 218 313 218 430 q 220 132 218 258 q 222 0 222 6 q 184 3 208 0 q 155 6 159 6 q 117 3 141 6 q 89 0 93 0 l 99 155 "},"3":{x_min:75,x_max:644,ha:749,o:"m 241 465 l 238 512 l 294 510 q 424 554 375 510 q 474 680 474 599 q 434 805 474 754 q 322 856 394 856 q 220 818 257 856 q 164 711 183 780 l 153 706 q 127 767 136 747 q 99 819 118 788 q 220 886 162 863 q 348 909 278 909 q 526 857 450 909 q 603 706 603 805 q 542 564 603 617 q 383 479 482 511 q 567 423 490 479 q 644 262 644 366 q 542 55 644 129 q 302 -18 441 -18 q 183 -6 240 -18 q 75 32 127 5 q 99 189 91 116 l 113 188 q 182 73 136 115 q 302 31 229 31 q 448 92 392 31 q 505 246 505 154 q 451 389 505 333 q 312 446 398 446 q 238 435 279 446 l 241 465 "},"9":{x_min:57,x_max:688,ha:749,o:"m 261 38 q 475 166 405 38 q 546 451 546 295 q 442 378 494 403 q 325 354 389 354 q 132 428 208 354 q 57 617 57 502 q 148 828 57 748 q 372 909 240 909 q 612 801 536 909 q 688 520 688 693 q 574 143 688 305 q 252 -18 461 -18 q 186 -14 211 -18 q 127 0 161 -11 l 113 90 q 180 51 143 64 q 261 38 218 38 m 372 419 q 501 482 457 419 q 546 634 546 545 q 504 790 546 725 q 373 855 462 855 q 238 791 284 855 q 193 637 193 727 q 238 482 193 545 q 372 419 284 419 "},l:{x_min:100,x_max:237.5,ha:342,o:"m 107 118 l 107 881 q 104 965 107 915 q 101 1025 101 1016 q 169 1018 138 1018 q 237 1025 203 1018 q 228 872 230 948 q 226 684 226 797 l 226 512 l 232 111 l 237 0 q 205 3 220 1 q 169 5 189 5 q 131 3 152 5 q 100 0 111 1 l 107 118 "},\u03BA:{x_min:97,x_max:677.5625,ha:683,o:"m 104 365 q 100 531 104 428 q 97 655 97 634 q 164 647 134 647 q 231 654 196 647 q 227 516 231 608 q 223 377 223 425 l 258 377 q 386 498 323 431 q 528 654 449 565 q 588 647 563 647 q 640 647 613 647 q 672 652 662 651 l 358 387 l 548 165 q 608 93 577 127 q 677 19 638 59 l 677 0 q 628 3 659 0 q 591 6 596 6 q 544 3 567 6 q 510 0 520 0 q 437 100 477 47 q 360 196 398 153 l 269 308 l 252 323 l 223 326 q 227 163 223 274 q 231 0 231 52 l 164 5 l 97 0 q 100 208 97 77 q 104 365 104 339 "},"4":{x_min:39,x_max:691.78125,ha:749,o:"m 453 252 l 177 257 l 39 253 l 39 291 q 204 522 111 392 q 345 721 297 653 q 475 906 394 789 l 527 906 l 581 906 q 575 805 581 872 q 569 705 569 739 l 569 343 l 598 343 q 644 344 620 343 q 690 350 667 345 l 683 297 q 686 270 683 287 q 691 244 689 254 q 568 253 629 253 l 568 137 l 569 0 l 505 6 l 437 0 q 450 120 447 51 q 453 252 453 190 m 453 767 l 344 626 q 230 465 298 562 q 144 343 162 368 l 453 343 l 453 767 "},p:{x_min:83,x_max:702,ha:758,o:"m 91 -106 q 89 202 91 47 q 87 513 88 358 l 83 655 q 109 650 95 652 q 146 648 124 648 q 177 650 165 648 q 213 655 188 651 q 202 535 202 591 q 297 637 246 602 q 425 672 349 672 q 630 567 558 672 q 702 322 702 463 q 629 84 702 183 q 423 -15 556 -15 q 210 99 287 -15 l 210 -101 q 214 -244 210 -148 q 219 -373 219 -340 q 185 -369 201 -370 q 151 -368 170 -368 q 130 -368 138 -368 q 83 -373 123 -368 q 87 -240 83 -329 q 91 -106 91 -151 m 384 596 q 245 514 289 596 q 202 328 202 433 q 244 134 202 220 q 383 48 286 48 q 520 131 478 48 q 563 322 563 215 q 519 509 563 423 q 384 596 475 596 "},\u03C8:{x_min:78,x_max:1002,ha:1038,o:"m 78 294 l 82 477 l 82 654 l 145 650 l 215 654 q 209 517 215 605 q 203 421 203 430 l 203 341 q 264 117 203 197 q 465 38 325 38 l 468 260 q 461 535 468 342 q 455 786 455 729 q 496 779 479 782 q 526 776 513 776 q 566 780 545 776 q 600 786 587 784 q 591 496 600 690 q 583 270 583 302 l 587 38 q 791 132 715 38 q 867 357 867 227 q 824 641 867 506 q 885 645 857 641 q 960 656 912 648 q 1002 419 1002 544 q 891 118 1002 231 q 587 -13 780 5 l 591 -221 l 600 -372 q 561 -365 578 -367 q 526 -363 543 -363 q 491 -366 511 -363 q 455 -372 471 -369 q 461 -162 455 -302 q 468 -13 468 -22 q 194 64 310 -13 q 78 294 78 142 "},\u00DC:{x_min:101,x_max:919.0625,ha:1015,o:"m 182 927 l 262 931 q 250 805 253 854 q 247 697 247 757 l 247 457 q 314 136 247 212 q 516 60 381 60 q 733 130 654 60 q 813 336 813 201 l 813 458 l 813 657 q 799 931 813 802 l 859 927 l 919 931 q 905 770 909 863 q 901 600 901 677 l 901 366 q 792 82 901 179 q 491 -15 684 -15 q 211 66 307 -15 q 116 325 116 148 l 116 426 l 116 698 q 112 805 116 757 q 101 931 109 854 l 182 927 m 410 1208 q 462 1186 442 1208 q 483 1133 483 1164 q 460 1081 483 1105 q 410 1058 438 1058 q 356 1080 379 1058 q 334 1133 334 1103 q 356 1185 334 1163 q 410 1208 378 1208 m 650 1208 q 704 1187 682 1208 q 727 1133 727 1166 q 704 1080 727 1103 q 650 1058 681 1058 q 598 1078 620 1058 q 576 1133 576 1099 q 598 1185 576 1163 q 650 1208 620 1208 "},\u00E0:{x_min:43,x_max:655.5,ha:649,o:"m 234 -15 q 98 33 153 -15 q 43 162 43 82 q 106 303 43 273 q 303 364 169 333 q 444 448 437 395 q 403 568 444 521 q 288 616 362 616 q 191 587 233 616 q 124 507 149 559 l 95 520 l 104 591 q 202 651 144 631 q 323 672 261 672 q 500 622 444 672 q 557 455 557 573 l 557 133 q 567 69 557 84 q 618 54 577 54 q 655 58 643 54 l 655 26 q 594 5 626 14 q 537 -6 562 -3 q 438 85 453 -6 q 342 10 388 35 q 234 -15 296 -15 m 392 743 l 191 866 q 152 896 170 877 q 133 934 133 915 q 148 970 133 955 q 186 986 163 986 q 222 972 200 986 q 254 945 245 958 l 442 743 l 392 743 m 176 186 q 204 98 176 133 q 284 64 232 64 q 390 107 342 64 q 438 212 438 151 l 438 345 q 239 293 303 319 q 176 186 176 268 "},\u03B7:{x_min:91,x_max:662,ha:754,o:"m 594 -365 q 557 -366 577 -365 q 526 -369 537 -368 q 531 -189 526 -310 q 537 -7 537 -68 l 537 406 q 503 536 537 485 q 391 587 469 587 q 255 508 290 587 q 220 315 220 430 q 222 133 220 259 q 224 1 224 8 l 158 6 l 91 1 l 101 156 l 101 495 q 97 584 101 527 q 93 655 93 640 q 119 650 105 652 q 155 648 134 648 q 185 650 175 648 q 221 655 195 651 l 220 538 q 321 637 265 602 q 452 672 378 672 q 604 603 552 672 q 656 430 656 535 l 656 329 l 656 -186 q 659 -293 656 -227 q 662 -370 662 -359 q 630 -366 645 -368 q 594 -365 614 -365 "}},cssFontWeight:"normal",ascender:1267,underlinePosition:-133,cssFontStyle:"normal",boundingBox:{yMin:-373.75,xMin:-71,yMax:1267,xMax:1511},resolution:1e3,original_font_information:{postscript_name:"Optimer-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Optimer",font_family_name:"Optimer",copyright:"Copyright (c) Magenta Ltd., 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta Ltd.:Optimer:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta Ltd.",font_sub_family_name:"Regular"},descender:-374,familyName:"Optimer",lineHeight:1640,underlineThickness:20};var Xh=[{id:"inside",name:"The book",selectors:[".book-introduction > .eyebrow",".book-introduction > h2",".book-introduction > .lead-copy",".book-introduction > .body-copy",".book-introduction > .purchase-links",".book-introduction > a"],combine:[[0,1,2],[4,5]],motif:"cover",sway:.12},{id:"themes",name:"The meaning",selectors:[".meaning-heading",".theme-row",".meaning-footnote"],attachLast:[2],motif:"pillars",sway:.38},{id:"pages",name:"Inside the pages",selectors:[".pages-intro",".reading-preview"],motif:"leaves",sway:-.25},{id:"chapters",name:"The chapter journey",selectors:[".chapter-header",".chapter-tabs",".chapter-panels",".chapter-footer"],combine:[1,2,3],motif:"steps",sway:.24},{id:"authors",name:"Behind the pages",selectors:[".authors-copy",".author-monogram"],motif:"voices",sway:-.3},{id:"voices",name:"Reader responses",selectors:[".reviews-header",".reader-review"],motif:"quotes",sway:.28},{id:"buy",name:"Into the light",selectors:[".final-content"],motif:"summit",sway:0}];var Ol=new lo().parse(Wh),Yh=new P,Vn=new ft({color:"#c8a362",roughness:.4,metalness:.5,transparent:!0}),am=new ft({color:"#c9b99b",roughness:.7,transparent:!0});function Zh(i,e,t,n,s=[]){let r=document.createElement("canvas");r.width=128,r.height=64;let a=r.getContext("2d");a.scale(2,1);let o=a.createRadialGradient(32,32,3,32,32,32);o.addColorStop(0,"#211c1780"),o.addColorStop(1,"#211c1700"),a.fillStyle=o,a.fillRect(0,0,64,64);let c=new Es(r);return Xh.map((l,d)=>{let u=i.querySelector("#"+l.id),f=new St;e.add(f);let p=new St;t.add(p);let g=[];l.selectors.forEach((x,y)=>{u.querySelectorAll(x).forEach(T=>{let U=document.createComment("3D content home");T.before(U),g.push({node:T,marker:U,selectorIndex:y})})});let _=[],m=l.combine?Array.isArray(l.combine[0])?l.combine:[l.combine]:[];g.forEach(x=>{if(l.attachLast?.includes(x.selectorIndex)){_.at(-1).pieces.push(x);return}let y=m.findIndex(T=>T.includes(x.selectorIndex));if(y>=0){let T=_.find(U=>U.combined===y);T||(T={pieces:[],combined:y},_.push(T)),T.pieces.push(x)}else _.push({pieces:[x]})});let h=_.map((x,y)=>{let T=document.createElement("div");T.className="journey-card "+u.className.replace("reader-scene",""),T.dataset.chapter=l.id,T.dataset.station=String(y),T.setAttribute("role","group"),T.setAttribute("aria-label",l.name+" \xB7 "+(y+1)+" of "+_.length);let U=document.createElement("div");U.className="journey-card-copy",T.append(U);let k=new so(T);p.add(k);let L=new We(new Dt(6.7,2),new ni({map:c,color:"#ffffff",transparent:!0,opacity:.12,depthWrite:!1}));L.position.z=.397,f.add(L);let B=new We(new gt(6.7,.04,.04),Vn.clone());B.castShadow=!0,f.add(B);let z=new We(new gt(1,1,.065),new ft({color:u.dataset.tone==="dark"?"#171d1c":"#f7f2e8",roughness:.8,transparent:!0}));z.castShadow=!0,z.receiveShadow=!0,f.add(z);let Z=new We(new es(String(y+1).padStart(2,"0"),{font:Ol,size:.34,depth:.035,curveSegments:3,bevelEnabled:!0,bevelThickness:.006,bevelSize:.004,bevelSegments:1}),Vn);Z.material=Vn.clone(),Z.castShadow=!0,f.add(Z);let H=_.length===1?-1:ir(-3.8,4,y/(_.length-1)),ne=20+Math.sin(y*1.7)*l.sway;return{block:x,holder:U,element:T,object:k,shadow:L,support:B,backing:z,number:Z,y:H,x:ne,height:3,width:6.7,scale:.009}}),b=new St;f.add(b);for(let x=0;x<3;x++){let y;l.motif==="pillars"?y=new gt(.15,.18,.8+x*.25):l.motif==="leaves"?y=new gt(1,.75,.035):l.motif==="steps"?y=new gt(.65,.8,.2+x*.12):l.motif==="voices"?y=new zi(.55,.035,6,32):l.motif==="quotes"?y=new zi(.25,.09,8,18,Math.PI*1.5):l.motif==="summit"?y=new As(.6,1.3,4):y=new gt(.8,1.2,.12);let T=new We(y,(x%2?am:Vn).clone());T.position.set(15+Math.sin(x)*.7,-3+x*3,.46),l.motif==="summit"&&(T.rotation.x=Math.PI/2),T.castShadow=!0,T.receiveShadow=!0,b.add(T)}let S=new We(new es(String(d+1).padStart(2,"0"),{font:Ol,size:1.15,depth:.14,curveSegments:4,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2}),Vn);S.material=Vn.clone(),S.position.set(14.8,0,.44),S.castShadow=!0,b.add(S);let q=new We(new es(l.name.toUpperCase(),{font:Ol,size:.27,depth:.05,curveSegments:3}),Vn);q.material=Vn.clone(),q.position.set(13.3,-4.8,.44),q.castShadow=!0,b.add(q);let A=new P,w=new P,C={position:A,target:w},I={...l,section:u,cards:h,webGroup:f,domGroup:p,mounted:!1,mount(){this.mounted||(h.forEach(x=>x.block.pieces.forEach(y=>x.holder.append(y.node))),this.mounted=!0)},restore(){this.mounted&&(g.forEach(x=>x.marker.after(x.node)),this.mounted=!1)},measure(){let x=innerWidth<=760,y=(x?Math.max(280,innerWidth-44):760)+"px";h.forEach(T=>{T.element.style.width!==y&&(T.element.style.width=y)}),h.forEach(T=>{T.element.offsetWidth&&(T.width=x?3.6:6.7,T.scale=T.width/T.element.offsetWidth,T.height=T.element.offsetHeight*T.scale,T.object.scale.setScalar(T.scale),T.element.dataset.measuredHeight=T.height.toFixed(5))}),this.fitWidth=Math.max(...h.map(T=>T.width)),this.fitHeight=Math.max(...h.map(T=>T.height))},view(x,y){let T=uo(x)*(h.length-1),U=h[Math.floor(T)],k=h[Math.ceil(T)],L=T%1,B=h[Math.max(0,Math.floor(T)-1)],z=h[Math.min(h.length-1,Math.ceil(T)+1)],Z=ye=>{let ze=U[ye],je=k[ye],R=(je-B[ye])/2,ee=(z[ye]-ze)/2;return(2*ze-2*je+R+ee)*L*L*L+(-3*ze+3*je-2*R-ee)*L*L+R*L+ze},H=Z("x"),ne=ir(U.height,k.height,L),ce=this.fitWidth||6.7,ve=this.fitHeight||3,Se=innerWidth<=760?.84:Math.min(.64,860/innerWidth),Fe=ce/(2*Math.tan(Yi.degToRad(19))*y*Se),Le=ve/(2*Math.tan(Yi.degToRad(19))*.67),Be=Math.max(Fe,Le,7.8)+(h.length===1?(1-x)*1.8:0),Y=-Math.min(4,Math.max(0,15-Be));h.forEach((ye,ze)=>{ye.y=h.length===1?-1:ir(Y,18,ze/(h.length-1))});let j=Z("y"),xe=Math.sin(x*Math.PI*2)*this.sway*.32,be=.47+ne/2;return A.set(H+xe,be+1.35,-j+Be),w.set(H,be,-j),C},deactivate(){f.visible=p.visible=!1,h.forEach(x=>{x.element.inert=!0,x.element.classList.remove("is-readable"),x.element.style.visibility="hidden"})},update(x){f.visible=p.visible=!0;let y=!0,T=1+4*x.dive;f.scale.setScalar(1/T),p.scale.copy(f.scale),f.position.z=p.position.z=.33*(1-1/T);let U=Xn((x.dive-.7)/.3)*x.rise,k=x.journey*(h.length-1);h.forEach((L,B)=>{let z=uo(1-Math.abs(k-B)*.85),Z=x.rise*Xn(z),H=Xn((A.z+L.y-1)/4),ne=U*Xn(z)*H;L.element.style.opacity=String(ne),L.element.dataset.opacity=ne.toFixed(5),[L.backing,L.support,L.number,L.shadow].forEach(ce=>{ce.visible=ne>.001,ce!==L.shadow&&(ce.material.transparent=!0,ce.material.opacity=ne)}),L.object.position.set(L.x,L.y,.42+L.height/2*Z),L.object.rotation.x=Z*Math.PI/2,Yh.set(0,0,1).applyEuler(L.object.rotation),L.backing.position.copy(L.object.position).addScaledVector(Yh,-.033),L.backing.rotation.copy(L.object.rotation),L.backing.scale.set(L.width,L.height,1),L.element.style.visibility=y&&ne>.001?"visible":"hidden",L.element.inert=!y||!x.readable||z<.7||ne<.95,L.element.classList.toggle("is-readable",y&&x.readable&&z>.7),L.element.style.setProperty("--content-lift",String(Z)),L.element.style.setProperty("--glyph-depth",((1-Z)*18).toFixed(2)+"px"),L.element.dataset.rise=Z.toFixed(5),L.shadow.position.set(L.x,L.y,.399),L.shadow.scale.set(L.width/6.7,Math.max(1,L.height/2),1),L.shadow.material.opacity=.22*Z*ne,L.support.position.set(L.x,L.y,.42+.1*Z),L.support.scale.x=L.width/6.7,L.number.position.set(L.x-L.width/2,L.y-L.height/2-.4,.42+.55*Z),L.number.rotation.x=Z*Math.PI/2}),b.visible=y&&U>.001,b.children.forEach((L,B)=>{L.material.transparent=!0,L.material.opacity=U,L.position.z=.46+x.rise*(.35+B*.15),L.rotation.y=x.journey*.25*(B%2?1:-1)}),S.rotation.x=q.rotation.x=x.rise*Math.PI/2}};if("ResizeObserver"in window){let x=new ResizeObserver(y=>{I.mounted&&p.visible&&y.some(T=>T.contentRect.width>0)&&(I.measure(),n())});h.forEach(y=>x.observe(y.element)),I.observer=x}return s.push(I),I})}var Jh=new P,$h=new P,Bl=new P,zl=new P;function Kh(i,e,t,n){let s=Math.max(25,(8.3+8.3*e.opening)/(2*Math.tan(Yi.degToRad(19))*n*.86)),r=t.view(e.journey,n),a=.33*4*e.dive;r.position.y+=a,r.target.y+=a,Jh.set(0,1,s),$h.set(1,s*.77,s*.64),Bl.copy(Jh).lerp($h,Xn((e.flat-.45)/.55)),zl.set(0,0,0),Bl.lerp(r.position,e.dive),zl.lerp(r.target,e.dive),i.position.copy(Bl),i.lookAt(zl),i.updateMatrixWorld()}async function B5(i,e,t,n){let s=i.querySelector("[data-intro-cover]"),r;try{if(await Promise.race([s.decode(),new Promise((h,b)=>{r=setTimeout(()=>b(new Error("Cover decode timeout")),4500)})]),!s.naturalWidth)throw new Error("Original cover unavailable")}finally{clearTimeout(r)}let a=!1,o=0,c=-1,l=innerWidth,d=innerHeight,u=Math.min(devicePixelRatio,innerWidth<=760?1:1.25),f=0,p=0;i.dataset.renderQuality="balanced";let g={chapters:[]},_=()=>Qh(g);try{let ce=function(Se){Se.pointerType==="touch"||e.hidden||!i.classList.contains("is-immersive")||Number(i.dataset.bookScale)>1.05||(ne.x=(Se.clientX/innerWidth-.5)*2,ne.y=(Se.clientY/innerHeight-.5)*2,t())};var m=ce;let h=new no({alpha:!0,antialias:!0,powerPreference:"high-performance"});g.renderer=h;let b=h.getContext(),S=b.getExtension("WEBGL_debug_renderer_info"),q=S&&/swiftshader|llvmpipe|software/i.test(b.getParameter(S.UNMASKED_RENDERER_WEBGL));q&&(u=Math.min(u,.8),i.dataset.renderQuality="software"),h.setPixelRatio(u),h.setSize(innerWidth,innerHeight),h.shadowMap.enabled=!0,h.shadowMap.type=q?el:sa,h.toneMapping=fa,h.toneMappingExposure=.88,h.domElement.className="book-webgl",h.domElement.setAttribute("aria-hidden","true"),e.append(h.domElement);let A=new ro;g.css=A,A.setSize(innerWidth,innerHeight),A.domElement.className="book-spatial-content",e.append(A.domElement);let w=new On;g.scene=w;let C=new On,I=new Mt(38,innerWidth/innerHeight,.1,200),x=new ks("#f7eddb","#343d35",.9);w.add(x);let y=new Hi("#fff0d2",1.7);y.position.set(-7,16,14),y.castShadow=!0,y.shadow.mapSize.set(q?256:innerWidth<=760?512:1024,q?256:innerWidth<=760?512:1024),Object.assign(y.shadow.camera,{left:-16,right:16,top:17,bottom:-17,near:1,far:60}),y.shadow.normalBias=.03,y.shadow.bias=-3e-4,w.add(y);let T=new Hi("#a7b8bb",1.2);T.position.set(8,6,-10),w.add(T);let U=new Ki(h),k=new ao,L=U.fromScene(k,.08);g.reflection=L,w.environment=L.texture,w.environmentIntensity=.4,k.dispose(),U.dispose();let B=Gh(s);w.add(B.group);let z=new St;C.add(z);let Z=Zh(i,B.group,z,t,g.chapters),H=new We(new Dt(120,120),new Fs({opacity:.24}));H.rotation.x=-Math.PI/2,H.receiveShadow=!0,w.add(H);let ne={x:0,y:0};g.move=ce,window.addEventListener("pointermove",ce,{passive:!0}),h.domElement.addEventListener("webglcontextlost",Se=>{Se.preventDefault(),n()});let ve={chapters:Z,book:B,camera:I,renderer:h,mount(){Z.forEach(Le=>Le.mount());let Se=e.style.visibility;e.style.visibility="hidden";let Fe=Z.map(Le=>Le.domGroup.visible);Z.forEach(Le=>Le.domGroup.visible=!0),A.render(C,I),Z.forEach((Le,Be)=>Le.domGroup.visible=Fe[Be]),this.resize(),A.render(C,I),e.style.visibility=Se},restore(){Z.forEach(Se=>Se.restore())},resize(){(l!==innerWidth||d!==innerHeight)&&(l=innerWidth,d=innerHeight,h.setSize(l,d),A.setSize(l,d),I.aspect=l/d,I.updateProjectionMatrix());let Se=e.hidden,Fe=e.style.visibility;e.hidden=!1,e.style.visibility="hidden",Z.forEach(Le=>{if(Le.mounted){let Be=Le.cards.map(Y=>Y.element.style.display);Le.cards.forEach(Y=>Y.element.style.display="block"),Le.measure(),Le.cards.forEach((Y,j)=>Y.element.style.display=Be[j])}}),e.hidden=Se,e.style.visibility=Fe},render(Se,Fe){if(a)return;let Le=performance.now(),Be=Z[Se];B.update(Fe,ne),c!==Se&&(c>=0&&Z[c].deactivate(),c=Se),z.position.copy(B.group.position),z.rotation.copy(B.group.rotation),z.scale.copy(B.group.scale),Kh(I,Fe,Be,I.aspect),Be.update(Fe),H.position.y=-6.5+5.3*Fe.flat,h.render(w,I),A.render(C,I);let Y=performance.now()-Le;i.dataset.renderCpuMs=Y.toFixed(2);let j=Le-p;p=Le,Y>25||j>45&&j<1500?f++:f=Math.max(0,f-1),f>=8&&u>.85&&(u=.85,h.setPixelRatio(u),i.dataset.renderQuality="economy",f=0),o++,i.dataset.bookRotation=(-B.group.rotation.x*180/Math.PI).toFixed(5),i.dataset.pageFlip=Fe.turn.toFixed(6),i.dataset.bookScale=B.group.scale.x.toFixed(6),i.dataset.pageCurvature=B.page.curvature().toFixed(6),i.dataset.cameraPosition=I.position.toArray().map(xe=>xe.toFixed(5)).join(","),i.dataset.blankPages=String(!B.surfaceMaterial.map&&!B.leftMaterial.map&&!B.page.material.map&&!B.page.edge.material.map),i.dataset.visibleContentMeshes=String(Be.cards.reduce((xe,be)=>xe+[be.backing,be.support,be.number].filter(ye=>ye.visible).length,0)),i.dataset.worldUuid=B.group.uuid,i.dataset.worldFrames=String(o),i.dataset.drawCalls=String(h.info.render.calls),i.dataset.worldTriangles=String(h.info.render.triangles)},dispose(){a||(a=!0,this.restore(),Qh(g))}};return _=()=>ve.dispose(),h.initTexture(B.coverTexture),I.position.set(0,1,25),I.lookAt(0,0,0),await h.compileAsync(w,I),Z.forEach(Se=>Se.deactivate()),ve.render(0,{opening:0,flat:0,dive:0,rise:0,journey:0,out:0,turn:0,readable:!1}),await om(b),ve}catch(h){throw _(),h}}function om(i){return new Promise((e,t)=>{let n=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);if(!n){t(new Error("GPU readiness fence unavailable"));return}i.flush();let s=performance.now();function r(){let a=i.clientWaitSync(n,0,0);a===i.ALREADY_SIGNALED||a===i.CONDITION_SATISFIED?(i.deleteSync(n),e()):i.isContextLost()||a===i.WAIT_FAILED||performance.now()-s>5e3?(i.deleteSync(n),t(new Error("GPU readiness failed"))):setTimeout(r,16)}r()})}function Qh(i){let e=new Set,t=new Set,n=new Set;i.chapters.forEach(s=>{s.restore(),s.observer?.disconnect()}),i.scene?.traverse(s=>{s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{t.add(r),r.map&&n.add(r.map)})}),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),i.reflection?.dispose(),i.renderer?.dispose(),i.renderer?.domElement.remove(),i.css?.domElement.remove(),i.move&&window.removeEventListener("pointermove",i.move)}export{B5 as createWorld};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
