(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Grey Dog","image":"%PUBLIC_URL%/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg","clicked":false},{"id":2,"name":"Border Collie","image":"%PUBLIC_URL%/baptist-standaert-mx0DEnfYxic-unsplash.jpg","clicked":false},{"id":3,"name":"Black Mouth Cur","image":"%PUBLIC_URL%/Black-mouth-cur-cover.jpg","clicked":false},{"id":4,"name":"Pug","image":"%PUBLIC_URL%/charles-deluvio-zqhe4qjVTJI-unsplash.jpg","clicked":false},{"id":5,"name":"Siberian Husky","image":"%PUBLIC_URL%/clayton-caldwell-yMTb07aTw3I-unsplash.jpg","clicked":false},{"id":6,"name":"Australian Cattle Dog","image":"%PUBLIC_URL%/daniel-lincoln-VAQSOBLXoX4-unsplash.jpg","clicked":false},{"id":7,"name":"German Shepherd Dog","image":"%PUBLIC_URL%/ekaterina-kobalnova-DvxDrD6cFIc-unsplash.jpg","clicked":false},{"id":8,"name":"Retriever","image":"%PUBLIC_URL%/jamie-street-wcO2PWLuQ3U-unsplash.jpg","clicked":false},{"id":9,"name":"White Husky","image":"%PUBLIC_URL%/jf-brou-915UJQaxtrk-unsplash.jpg","clicked":false},{"id":10,"name":"Retriever","image":"%PUBLIC_URL%/justin-aikin-KFJuCzJiQYU-unsplash.jpg","clicked":false},{"id":11,"name":"Pug","image":"%PUBLIC_URL%/matthew-henry-U5rMrSI7Pn4-unsplash.jpg","clicked":false},{"id":12,"name":"Yellow Lab","image":"%PUBLIC_URL%/vincent-van-zalinge-vRNcSWIElE4-unsplash.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(2),s=t.n(i),l=t(3),r=t(4),o=t(7),u=t(6);t(13);var d=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"img-container row"},e.dogs.map((function(a){return n.a.createElement("div",{key:a.id,className:"col-3"},n.a.createElement("img",{onClick:function(){e.onClick(a.id)},className:"dogpic img-fluid",alt:a.name,src:a.image}))}))))},m=t(5);t(14);var g=function(e){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Good Boy Memory Click"),n.a.createElement("p",{className:"lead"},"Try to click each good boy only once!"),n.a.createElement("div",null,"Score: ",e.score," "),n.a.createElement("div",null,"High Score: ",e.highScore)))},h=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).clickHandle=function(e){console.log("clicked",e);var a=c.state.dogs.map((function(a){return a.id===e&&(!1===a.clicked?(c.updateScore(),c.state.score>=c.state.highScore&&(c.updateHighScore(),c.state.highScore===c.state.dogs.length&&c.winGame()),a.clicked=!0):c.restartGame()),a}));c.shuffleCards(a),console.log(a),c.setState({dogs:a})},c.shuffleCards=function(e){e.sort((function(){return Math.random()-.5}))},c.updateScore=function(){c.setState({score:c.state.score+1})},c.updateHighScore=function(){c.setState({highScore:c.state.highScore+1})},c.winGame=function(){alert("You've won"),c.setState({highScore:0}),c.restartGame()},c.restartGame=function(){c.setState({score:0});var e=c.state.dogs.map((function(e){return e.clicked=!1,e}));c.setState({dogs:e})},c.state={score:0,dogs:m,highScore:0},c}return Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,{score:this.state.score,highScore:this.state.highScore}),n.a.createElement(d,{dogs:this.state.dogs,onClick:this.clickHandle}))}}]),t}(c.Component);s.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.fea8a2bd.chunk.js.map