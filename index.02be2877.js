!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire7ae9;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire7ae9=a);var o=a("bpxeT"),i=a("2TvXO"),u=a("dCfNN"),s=(o=a("bpxeT"),i=a("2TvXO"),a("b7ONl")),l=a("4Nugj"),c=a("k7GPO"),p=a("6mu73"),d=a("kfpeU"),f=(l=a("4Nugj"),o=a("bpxeT"),i=a("2TvXO"),a("6JpON"));s=a("b7ONl"),p=a("6mu73"),l=a("4Nugj"),c=a("k7GPO");function v(){return v=e(o)(e(i).mark((function t(r){var n,a,o,u,d,v,g=arguments;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1===(n=g.length>1&&void 0!==g[1]?g[1]:1)&&(l.gallery.innerHTML="",T()),(0,c.default)(l.loader),e.prev=3,e.next=6,(0,s.getMovies)("movie/".concat(r),{page:n});case 6:if(a=e.sent,o=a.data.results,u=a.data.total_pages,!(n>u)){e.next=12;break}return f.Notify.info("It was last page",{position:"center-top",fontSize:"16px",info:{textColor:"#000"}}),e.abrupt("return");case 12:d=(0,p.default)(o),l.gallery.insertAdjacentHTML("beforeend",d),(v=document.querySelector(".movie-card:last-child"))&&w.observe(v),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(3),console.log("Error",e.t0),e.abrupt("return",null);case 22:return e.prev=22,(0,c.default)(l.loader),e.finish(22);case 25:case"end":return e.stop()}}),t,null,[[3,18,22,25]])}))),v.apply(this,arguments)}var g=function(e){return v.apply(this,arguments)},b=(o=a("bpxeT"),a("8nrFW"));i=a("2TvXO"),f=a("6JpON"),s=a("b7ONl"),l=a("4Nugj"),c=a("k7GPO"),p=a("6mu73");function h(){return(h=e(o)(e(i).mark((function t(r,n){var a,o,u,d,v;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b)(l.featuredBtns.querySelectorAll(".btn")).map((function(e){e.classList.remove("btn--active"),e.removeAttribute("disabled")})),1===n&&(l.gallery.innerHTML="",T()),(0,c.default)(l.loader),t.prev=3,t.next=6,(0,s.getMovies)("search/movie",{query:r.value,page:n});case 6:if(a=t.sent,o=a.data.results,u=a.data.total_pages,o.length){t.next=13;break}return f.Notify.info("".concat(r.value," nothing found. Try again."),{position:"center-top",fontSize:"16px",info:{textColor:"#000"}}),l.searchMovieForm.searchMovieQuery.value="",t.abrupt("return");case 13:if(!(n>u)){t.next=16;break}return f.Notify.info("It was last page",{position:"center-top",fontSize:"16px",info:{textColor:"#000"}}),t.abrupt("return");case 16:d=(0,p.default)(o),l.gallery.insertAdjacentHTML("beforeend",d),(v=document.querySelector(".movie-card:last-child"))&&m.observe(v),t.next=26;break;case 22:return t.prev=22,t.t0=t.catch(3),console.log("Error",t.t0),t.abrupt("return",null);case 26:return t.prev=26,(0,c.default)(l.loader),t.finish(26);case 29:case"end":return t.stop()}}),t,null,[[3,22,26,29]])})))).apply(this,arguments)}var x=function(e,t){return h.apply(this,arguments)},y=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(t.unobserve(e.target),l.pagination.nextPagePagination+=1,O(l.pagination.nextPagePagination))}))})),m=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(t.unobserve(e.target),l.pagination.nextPagePagination+=1,x(l.queryMovie,l.pagination.nextPagePagination))}))})),w=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(t.unobserve(e.target),l.pagination.nextPagePagination+=1,g(l.urlPath.value,l.pagination.nextPagePagination))}))}));function T(){l.pagination.nextPagePagination=1}function k(){return k=e(o)(e(i).mark((function t(){var r,n,a,o,u=arguments;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:1,(0,c.default)(l.loader),e.prev=2,e.next=5,(0,s.getMovies)("trending/movie/day",{page:r});case 5:n=e.sent,a=(0,p.default)(n.data.results),l.gallery.insertAdjacentHTML("beforeend",a),l.gallery.addEventListener("click",d.default),(o=document.querySelector(".movie-card:last-child"))&&y.observe(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),console.log("Error",e.t0),e.abrupt("return",null);case 17:return e.prev=17,(0,c.default)(l.loader),e.finish(17);case 20:case"end":return e.stop()}}),t,null,[[2,13,17,20]])}))),k.apply(this,arguments)}var O=function(){return k.apply(this,arguments)},P=a("dEmTs"),M=(l=a("4Nugj"),a("9VC5X"));f=a("6JpON"),l=a("4Nugj");var N=function(e){e.preventDefault(),l.queryMovie.value=e.target.searchMovieQuery.value.trim(),l.queryMovie.value?x(l.queryMovie,1):f.Notify.info("Please enter request")},L=a("iw235");o=a("bpxeT"),b=a("8nrFW"),i=a("2TvXO"),l=a("4Nugj");function E(){return(E=e(o)(e(i).mark((function t(r){var n,a,o,u;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l.searchMovieForm.searchMovieQuery.value="",(a=r.target)!==r.currentTarget){t.next=5;break}return t.abrupt("return");case 5:if(o=e(b)(r.currentTarget.querySelectorAll(".btn")),u=o.filter((function(e){return e.classList.contains("btn--active")})),null===(n=u[0])||void 0===n||n.removeAttribute("disabled"),u[0]!==a){t.next=10;break}return t.abrupt("return");case 10:o.map((function(e){return e.classList.remove("btn--active")})),a.classList.add("btn--active"),a.setAttribute("disabled",!0),l.urlPath.value=a.dataset.value,t.t0=l.urlPath.value,t.next="trend_day"===t.t0?17:"popular"===t.t0||"top_rated"===t.t0||"upcoming"===t.t0?19:21;break;case 17:return O(),t.abrupt("break",22);case 19:return g(l.urlPath.value),t.abrupt("break",22);case 21:console.log("something wrong");case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var q=function(e){return E.apply(this,arguments)};(0,M.setThemeFirstRender)(),window.addEventListener("DOMContentLoaded",e(o)(e(i).mark((function t(){return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=Object,t.t1=l.genres,t.next=5,(0,L.default)();case 5:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),O(),l.searchMovieForm.addEventListener("submit",N),document.body.addEventListener("scroll",e(u)(P.default,500)),l.toggleThemeBtn.addEventListener("click",M.toggleTheme),l.featuredBtns.addEventListener("click",q),t.next=18;break;case 14:return t.prev=14,t.t3=t.catch(0),console.log("Error",t.t3),t.abrupt("return",null);case 18:return t.prev=18,t.finish(18);case 20:case"end":return t.stop()}}),t,null,[[0,14,18,20]])}))))}();
//# sourceMappingURL=index.02be2877.js.map
