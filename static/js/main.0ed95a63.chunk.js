(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Grey Dog","image":"assets/images/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg","clicked":false},{"id":2,"name":"Border Collie","image":"assets/images/baptist-standaert-mx0DEnfYxic-unsplash.jpg","clicked":false},{"id":3,"name":"Black Mouth Cur","image":"assets/images/Black-mouth-cur-cover.jpg","clicked":false},{"id":4,"name":"Pug","image":"assets/images/charles-deluvio-zqhe4qjVTJI-unsplash.jpg","clicked":false},{"id":5,"name":"Siberian Husky","image":"assets/images/clayton-caldwell-yMTb07aTw3I-unsplash.jpg","clicked":false},{"id":6,"name":"Australian Cattle Dog","image":"assets/images/daniel-lincoln-VAQSOBLXoX4-unsplash.jpg","clicked":false},{"id":7,"name":"German Shepherd Dog","image":"assets/images/ekaterina-kobalnova-DvxDrD6cFIc-unsplash.jpg","clicked":false},{"id":8,"name":"Retriever","image":"assets/images/jamie-street-wcO2PWLuQ3U-unsplash.jpg","clicked":false},{"id":9,"name":"White Husky","image":"assets/images/jf-brou-915UJQaxtrk-unsplash.jpg","clicked":false},{"id":10,"name":"Retriever","image":"assets/images/justin-aikin-KFJuCzJiQYU-unsplash.jpg","clicked":false},{"id":11,"name":"Pug","image":"assets/images/matthew-henry-U5rMrSI7Pn4-unsplash.jpg","clicked":false},{"id":12,"name":"Yellow Lab","image":"assets/images/vincent-van-zalinge-vRNcSWIElE4-unsplash.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),n=t(2),i=t.n(n),l=t(3),r=t(4),o=t(7),m=t(6);t(13);var u=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"img-container row"},e.dogs.map((function(a){return c.a.createElement("div",{key:a.id,className:"col-3"},c.a.createElement("img",{onClick:function(){e.onClick(a.id)},className:"dogpic img-fluid",alt:a.name,src:a.image}))}))))},d=t(5);t(14);var g=function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Good Boy Memory Click"),c.a.createElement("p",{className:"lead"},"Try to click each good boy only once!"),c.a.createElement("div",null,"Score: ",e.score," "),c.a.createElement("div",null,"High Score: ",e.highScore)))};t(15);var h=function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"spacer"}),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card-body"},c.a.createElement("blockquote",{className:"blockquote mb-0"},c.a.createElement("p",null,"Turn your back on the pack, and the pack will turn on you. Any dog would tell you that."),c.a.createElement("footer",{className:"blockquote-footer"},"Wilfred"))))))},p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).clickHandle=function(e){console.log("clicked",e);var a=s.state.dogs.map((function(a){return a.id===e&&(!1===a.clicked?(s.updateScore(),s.state.score>=s.state.highScore&&(s.updateHighScore(),s.state.highScore===s.state.dogs.length&&s.winGame()),a.clicked=!0):s.restartGame()),a}));s.shuffleCards(a),console.log(a),s.setState({dogs:a})},s.shuffleCards=function(e){e.sort((function(){return Math.random()-.5}))},s.updateScore=function(){s.setState({score:s.state.score+1})},s.updateHighScore=function(){s.setState({highScore:s.state.highScore+1})},s.winGame=function(){alert("You've won"),s.setState({highScore:0}),s.restartGame()},s.restartGame=function(){s.setState({score:0});var e=s.state.dogs.map((function(e){return e.clicked=!1,e}));s.setState({dogs:e})},s.state={score:0,dogs:d,highScore:0},s}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{score:this.state.score,highScore:this.state.highScore}),c.a.createElement(u,{dogs:this.state.dogs,onClick:this.clickHandle}),c.a.createElement(h,null))}}]),t}(s.Component);i.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0ed95a63.chunk.js.map