(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{55:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(28),r=n.n(i),o=n(8),c=n(2),l=n(17),u=n.n(l),d=n(29),m=n(11),j=n(12),h=n(14),v=n(13),b=n(30),p=n.n(b),O=(n(55),n(1));var x=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,i=e.poster,r=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:s,poster:i,genres:r}},children:[Object(O.jsx)("img",{src:i,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:a}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})})},f=(n(65),function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=title");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(66);var y=function(e){return console.log(e),Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:'"400 years in the future, set in the year 2415, Aeon Flux is a mysterious assassin. Four centuries after a virus nearly annihilated the human race,leaving only five million survivors in a utopian city called Bregna.Aeon is struggling to destroy the Goodchild regime led by its namesake,Trevor Goodchild, the ruler of Bregna and a descendant of the man who found a cure for the deadly virus.As instructed by the Handler, Aeon is assigned to assassinate Goodchild,but there are deeper secrets to be discovered, and conspiracies to be foiled."'}),Object(O.jsx)("span",{children:"- aeon-flux-2005"})]})},g=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?e.state.title:null}}]),n}(s.a.Component);n(67);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(o.b,{to:"/",children:"home"}),Object(O.jsx)(o.b,{to:"/about",children:"about"})]})};var N=function(){return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(c.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(c.a,{path:"/about",component:y}),Object(O.jsx)(c.a,{path:"/movie/:id",component:g})]})};r.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d199fe03.chunk.js.map