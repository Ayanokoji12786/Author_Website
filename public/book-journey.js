/* Lazy, same-origin 3D journey. The semantic document remains usable if loading fails. */
import("./book-world/controller.js").catch(function(){var r=document.getElementById("literary-experience");if(r)r.dataset.worldStatus="unavailable";});
