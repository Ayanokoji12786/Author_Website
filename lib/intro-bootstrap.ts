// Runs in the head, before first paint, on both deployment paths. The timeout
// and early Skip/Escape keep the semantic site usable if enhancement never loads.
export const introBootstrap = `(function(){
var h=document.documentElement,s=window.__sshIntro={dismissed:false,claimed:false};
h.classList.add('intro-pending');
function release(){if(s.claimed)return;s.dismissed=true;h.classList.remove('intro-pending');clearTimeout(s.timer);}
s.timer=setTimeout(release,7000);
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('.intro-skip'))release();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')release();});
})();`;
