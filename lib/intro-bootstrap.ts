// Runs in the head, before first paint, on both deployment paths. The timeout
// and early Skip/Escape keep the semantic site usable if enhancement never loads.
export const introBootstrap = `(function(){
if(location.pathname!=='/'&&location.pathname!=='/index.html')return;
var h=document.documentElement,s=window.__sshIntro={dismissed:false,claimed:false};
if(location.hash&&location.hash!=='#hero'){s.dismissed=true;return;}
if(matchMedia('(prefers-reduced-motion: reduce)').matches){s.dismissed=true;return;}
try{if(localStorage.getItem('ssh-intro-seen')==='true'||sessionStorage.getItem('ssh-intro-seen')==='true'){s.dismissed=true;return;}}catch(e){}
h.classList.add('intro-pending');
function release(){if(s.claimed)return;s.dismissed=true;h.classList.remove('intro-pending');clearTimeout(s.timer);}
s.timer=setTimeout(release,7000);
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('.intro-skip'))release();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')release();});
})();`;
