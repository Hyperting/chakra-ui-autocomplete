(this["webpackJsonpchakra-ui-autocomplete-example"]=this["webpackJsonpchakra-ui-autocomplete-example"]||[]).push([[0],{65:function(e,t,n){e.exports=n(85)},66:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);n(66);var r=n(0),o=n.n(r),a=n(48),i=n.n(a),u=n(46),c=n(27),l=n(93),s=n(92),f=n(90),p=n(10),d=n(91),h=Object(p.a)(Object(p.a)({},d.a.fonts),{},{mono:"'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace",heading:"\"Graphik Web\", 'Inter', 'Ubuntu', Cantarell, Oxygen, sans-serif",body:"\"Graphik Web\", 'Inter', 'Ubuntu', Segoe UI, Cantarell, Oxygen, Roboto, Fira Sans, Helvetica Neue, sans-serif"}),y=Object(p.a)(Object(p.a)({},d.a.colors),{},{black:"#40474e",default:"#1fdc6b",tomato:"FF5238",text:"#1D1D1D",background:"#F7FAFC",altBackground:"#fafffd"}),v=Object(p.a)(Object(p.a)({},d.a),{},{colors:y,fonts:h,fontSizes:{xs:"0.65rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"4rem"},breakpoints:["40em","52em","64em"],icons:Object(p.a)({},d.a.icons)}),g=n(62),b=n(16),m=n(15),O=n(53),E=n(45),x=n(5),j=n(61),w=n(63),_=n(44),S=n(94),I=n(89);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\u1ea4":"A","\u1eae":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc6":"AE","\u1ea6":"A","\u1eb0":"A","\u0202":"A","\xc7":"C","\u1e08":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\u1ebe":"E","\u1e16":"E","\u1ec0":"E","\u1e14":"E","\u1e1c":"E","\u0206":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\u1e2e":"I","\u020a":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\u1ed0":"O","\u1e4c":"O","\u1e52":"O","\u020e":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\u1ea5":"a","\u1eaf":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe6":"ae","\u1ea7":"a","\u1eb1":"a","\u0203":"a","\xe7":"c","\u1e09":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\u1ebf":"e","\u1e17":"e","\u1ec1":"e","\u1e15":"e","\u1e1d":"e","\u0207":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\u1e2f":"i","\u020b":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\u1ed1":"o","\u1e4d":"o","\u1e53":"o","\u020f":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u0108":"C","\u0109":"c","\u010a":"C","\u010b":"c","\u010c":"C","\u010d":"c","C\u0306":"C","c\u0306":"c","\u010e":"D","\u010f":"d","\u0110":"D","\u0111":"d","\u0112":"E","\u0113":"e","\u0114":"E","\u0115":"e","\u0116":"E","\u0117":"e","\u0118":"E","\u0119":"e","\u011a":"E","\u011b":"e","\u011c":"G","\u01f4":"G","\u011d":"g","\u01f5":"g","\u011e":"G","\u011f":"g","\u0120":"G","\u0121":"g","\u0122":"G","\u0123":"g","\u0124":"H","\u0125":"h","\u0126":"H","\u0127":"h","\u1e2a":"H","\u1e2b":"h","\u0128":"I","\u0129":"i","\u012a":"I","\u012b":"i","\u012c":"I","\u012d":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0132":"IJ","\u0133":"ij","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u1e30":"K","\u1e31":"k","K\u0306":"K","k\u0306":"k","\u0139":"L","\u013a":"l","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u013f":"L","\u0140":"l","\u0141":"l","\u0142":"l","\u1e3e":"M","\u1e3f":"m","M\u0306":"M","m\u0306":"m","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0149":"n","N\u0306":"N","n\u0306":"n","\u014c":"O","\u014d":"o","\u014e":"O","\u014f":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","P\u0306":"P","p\u0306":"p","\u0154":"R","\u0155":"r","\u0156":"R","\u0157":"r","\u0158":"R","\u0159":"r","R\u0306":"R","r\u0306":"r","\u0212":"R","\u0213":"r","\u015a":"S","\u015b":"s","\u015c":"S","\u015d":"s","\u015e":"S","\u0218":"S","\u0219":"s","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u021b":"t","\u021a":"T","\u0164":"T","\u0165":"t","\u0166":"T","\u0167":"t","T\u0306":"T","t\u0306":"t","\u0168":"U","\u0169":"u","\u016a":"U","\u016b":"u","\u016c":"U","\u016d":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0216":"U","\u0217":"u","V\u0306":"V","v\u0306":"v","\u0174":"W","\u0175":"w","\u1e82":"W","\u1e83":"w","X\u0306":"X","x\u0306":"x","\u0176":"Y","\u0177":"y","\u0178":"Y","Y\u0306":"Y","y\u0306":"y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u017f":"s","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01cd":"A","\u01ce":"a","\u01cf":"I","\u01d0":"i","\u01d1":"O","\u01d2":"o","\u01d3":"U","\u01d4":"u","\u01d5":"U","\u01d6":"u","\u01d7":"U","\u01d8":"u","\u01d9":"U","\u01da":"u","\u01db":"U","\u01dc":"u","\u1ee8":"U","\u1ee9":"u","\u1e78":"U","\u1e79":"u","\u01fa":"A","\u01fb":"a","\u01fc":"AE","\u01fd":"ae","\u01fe":"O","\u01ff":"o","\xde":"TH","\xfe":"th","\u1e54":"P","\u1e55":"p","\u1e64":"S","\u1e65":"s","X\u0301":"X","x\u0301":"x","\u0403":"\u0413","\u0453":"\u0433","\u040c":"\u041a","\u045c":"\u043a","A\u030b":"A","a\u030b":"a","E\u030b":"E","e\u030b":"e","I\u030b":"I","i\u030b":"i","\u01f8":"N","\u01f9":"n","\u1ed2":"O","\u1ed3":"o","\u1e50":"O","\u1e51":"o","\u1eea":"U","\u1eeb":"u","\u1e80":"W","\u1e81":"w","\u1ef2":"Y","\u1ef3":"y","\u0200":"A","\u0201":"a","\u0204":"E","\u0205":"e","\u0208":"I","\u0209":"i","\u020c":"O","\u020d":"o","\u0210":"R","\u0211":"r","\u0214":"U","\u0215":"u","B\u030c":"B","b\u030c":"b","\u010c\u0323":"C","\u010d\u0323":"c","\xca\u030c":"E","\xea\u030c":"e","F\u030c":"F","f\u030c":"f","\u01e6":"G","\u01e7":"g","\u021e":"H","\u021f":"h","J\u030c":"J","\u01f0":"j","\u01e8":"K","\u01e9":"k","M\u030c":"M","m\u030c":"m","P\u030c":"P","p\u030c":"p","Q\u030c":"Q","q\u030c":"q","\u0158\u0329":"R","\u0159\u0329":"r","\u1e66":"S","\u1e67":"s","V\u030c":"V","v\u030c":"v","W\u030c":"W","w\u030c":"w","X\u030c":"X","x\u030c":"x","Y\u030c":"Y","y\u030c":"y","A\u0327":"A","a\u0327":"a","B\u0327":"B","b\u0327":"b","\u1e10":"D","\u1e11":"d","\u0228":"E","\u0229":"e","\u0190\u0327":"E","\u025b\u0327":"e","\u1e28":"H","\u1e29":"h","I\u0327":"I","i\u0327":"i","\u0197\u0327":"I","\u0268\u0327":"i","M\u0327":"M","m\u0327":"m","O\u0327":"O","o\u0327":"o","Q\u0327":"Q","q\u0327":"q","U\u0327":"U","u\u0327":"u","X\u0327":"X","x\u0327":"x","Z\u0327":"Z","z\u0327":"z"},C=Object.keys(k).join("|"),A=new RegExp(C,"g"),P=new RegExp(C,""),N=function(e){return e.replace(A,(function(e){return k[e]}))},R=N,M=function(e){return!!e.match(P)},L=N;R.has=M,R.remove=L;var U={CASE_SENSITIVE_EQUAL:9,EQUAL:8,STARTS_WITH:7,WORD_STARTS_WITH:6,STRING_CASE:5,STRING_CASE_ACRONYM:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},D={CAMEL:.8,PASCAL:.6,KEBAB:.4,SNAKE:.2,NO_CASE:0};W.rankings=U,W.caseRankings=D;var H=function(e,t){return String(e.rankedItem).localeCompare(t.rankedItem)};function W(e,t,n){void 0===n&&(n={});var r=n,o=r.keys,a=r.threshold,i=void 0===a?U.MATCHES:a,u=r.baseSort,c=void 0===u?H:u;return e.reduce((function(e,r,a){var u=function(e,t,n,r){if(!t)return{rankedItem:e,rank:V(e,n,r),keyIndex:-1,keyThreshold:r.threshold};return function(e,t){return t.reduce((function(t,n){var r=function(e,t){"object"===typeof t&&(t=t.key);var n;n="function"===typeof t?t(e):-1!==t.indexOf(".")?t.split(".").reduce((function(e,t){return e?e[t]:null}),e):e[t];return null!=n?[].concat(n):null}(e,n);return r&&r.forEach((function(e){t.push({itemValue:e,attributes:F(n)})})),t}),[])}(e,t).reduce((function(e,t,o){var a=e.rank,i=e.rankedItem,u=e.keyIndex,c=e.keyThreshold,l=t.itemValue,s=t.attributes,f=V(l,n,r),p=i,d=s.minRanking,h=s.maxRanking,y=s.threshold;return f<d&&f>=U.MATCHES?f=d:f>h&&(f=h),f>a&&(a=f,u=o,c=y,p=l),{rankedItem:p,rank:a,keyIndex:u,keyThreshold:c}}),{rank:U.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold})}(r,o,t,n),c=u.rankedItem,l=u.rank,s=u.keyIndex,f=u.keyThreshold;l>=(void 0===f?i:f)&&e.push({rankedItem:c,item:r,rank:l,index:a,keyIndex:s});return e}),[]).sort((function(e,t){return function(e,t,n){var r=e.rank,o=e.keyIndex,a=t.rank,i=t.keyIndex;return r===a?o===i?n(e,t):o<i?-1:1:r>a?-1:1}(e,t,c)})).map((function(e){return e.item}))}function V(e,t,n){if(e=B(e,n),(t=B(t,n)).length>e.length)return U.NO_MATCH;if(e===t)return U.CASE_SENSITIVE_EQUAL;var r=function(e){var t=e.toLowerCase()!==e,n=e.indexOf("-")>=0,r=e.indexOf("_")>=0;if(!t&&!r&&n)return D.KEBAB;if(!t&&r&&!n)return D.SNAKE;if(t&&!n&&!r){return e[0].toUpperCase()===e[0]?D.PASCAL:D.CAMEL}return D.NO_CASE}(e),o=function(e,t,n){var r=e.toLowerCase().indexOf(t.toLowerCase());switch(n){case D.SNAKE:return"_"===e[r-1];case D.KEBAB:return"-"===e[r-1];case D.PASCAL:case D.CAMEL:return-1!==r&&e[r]===e[r].toUpperCase();default:return!1}}(e,t,r),a=function(e,t,n){var r=null;switch(n){case D.SNAKE:r="_";break;case D.KEBAB:r="-";break;case D.PASCAL:case D.CAMEL:r=/(?=[A-Z])/;break;default:r=null}var o=e.split(r);return t.toLowerCase().split("").reduce((function(e,t,n){var r=o[n];return e&&r&&r[0].toLowerCase()===t}),!0)}(e,t,r);return(e=e.toLowerCase())===(t=t.toLowerCase())?U.EQUAL+r:0===e.indexOf(t)?U.STARTS_WITH+r:-1!==e.indexOf(" "+t)?U.WORD_STARTS_WITH+r:o?U.STRING_CASE+r:r>0&&a?U.STRING_CASE_ACRONYM+r:-1!==e.indexOf(t)?U.CONTAINS+r:1===t.length?U.NO_MATCH:-1!==function(e){var t="";return e.split(" ").forEach((function(e){e.split("-").forEach((function(e){t+=e.substr(0,1)}))})),t}(e).indexOf(t)?U.ACRONYM+r:function(e,t){var n=0,r=0;function o(e,t,r){for(var o=r;o<t.length;o++){if(t[o]===e)return n+=1,o+1}return-1}var a=o(t[0],e,0);if(a<0)return U.NO_MATCH;r=a;for(var i=1;i<t.length;i++){var u=t[i];if(!((r=o(u,e,r))>-1))return U.NO_MATCH}return function(e){var r=n/t.length;return U.MATCHES+r*(1/e)}(r-a)}(e,t)}function B(e,t){return e=""+e,t.keepDiacritics||(e=R(e)),e}function F(e){return"string"===typeof e&&(e={key:e}),T({maxRanking:1/0,minRanking:-1/0},e)}function q(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function G(e,t){return e(t={exports:{}},t.exports),t.exports}var K=q(G((function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default,e.exports=t.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function o(e){return e&&e.__esModule?e:{default:e}}t.default=l;var a=n(3),i=o(n(4)),u=n(14),c=o(n(15));function l(e){var t=e.activeClassName,n=void 0===t?"":t,o=e.activeIndex,i=void 0===o?-1:o,l=e.activeStyle,s=e.autoEscape,f=e.caseSensitive,p=void 0!==f&&f,d=e.className,h=e.findChunks,y=e.highlightClassName,v=void 0===y?"":y,g=e.highlightStyle,b=void 0===g?{}:g,m=e.highlightTag,O=void 0===m?"mark":m,E=e.sanitize,x=e.searchWords,j=e.textToHighlight,w=e.unhighlightClassName,_=void 0===w?"":w,S=e.unhighlightStyle,I=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightClassName","unhighlightStyle"]),T=(0,a.findAll)({autoEscape:s,caseSensitive:p,findChunks:h,sanitize:E,searchWords:x,textToHighlight:j}),k=O,C=-1,A="",P=void 0,N=(0,c.default)((function(e){var t={};for(var n in e)t[n.toLowerCase()]=e[n];return t}));return(0,u.createElement)("span",r({className:d},I,{children:T.map((function(e,t){var r=j.substr(e.start,e.end-e.start);if(e.highlight){C++;var o=void 0;o="object"===typeof v?p?v[r]:(v=N(v))[r.toLowerCase()]:v;var a=C===+i;A=o+" "+(a?n:""),P=!0===a&&null!=l?Object.assign({},b,l):b;var c={children:r,className:A,key:t,style:P};return"string"!==typeof k&&(c.highlightIndex=C),(0,u.createElement)(k,c)}return(0,u.createElement)("span",{children:r,className:_,key:t,style:S})}))}))}l.propTypes={activeClassName:i.default.string,activeIndex:i.default.number,activeStyle:i.default.object,autoEscape:i.default.bool,className:i.default.string,findChunks:i.default.func,highlightClassName:i.default.oneOfType([i.default.object,i.default.string]),highlightStyle:i.default.object,highlightTag:i.default.oneOfType([i.default.node,i.default.func,i.default.string]),sanitize:i.default.func,searchWords:i.default.arrayOf(i.default.oneOfType([i.default.string,i.default.instanceOf(RegExp)])).isRequired,textToHighlight:i.default.string.isRequired,unhighlightClassName:i.default.string,unhighlightStyle:i.default.object},e.exports=t.default},function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return r.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return r.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return r.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return r.findChunks}})},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.findAll=function(e){var t=e.autoEscape,a=e.caseSensitive,i=void 0!==a&&a,u=e.findChunks,c=void 0===u?r:u,l=e.sanitize,s=e.searchWords,f=e.textToHighlight;return o({chunksToHighlight:n({chunks:c({autoEscape:t,caseSensitive:i,sanitize:l,searchWords:s,textToHighlight:f})}),totalLength:f?f.length:0})};var n=t.combineChunks=function(e){var t=e.chunks;return t=t.sort((function(e,t){return e.start-t.start})).reduce((function(e,t){if(0===e.length)return[t];var n=e.pop();if(t.start<=n.end){var r=Math.max(n.end,t.end);e.push({start:n.start,end:r})}else e.push(n,t);return e}),[])},r=function(e){var t=e.autoEscape,n=e.caseSensitive,r=e.sanitize,o=void 0===r?a:r,i=e.searchWords,u=e.textToHighlight;return u=o(u),i.filter((function(e){return e})).reduce((function(e,r){r=o(r),t&&(r=r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"));for(var a=new RegExp(r,n?"g":"gi"),i=void 0;i=a.exec(u);){var c=i.index,l=a.lastIndex;l>c&&e.push({start:c,end:l}),i.index==a.lastIndex&&a.lastIndex++}return e}),[])};t.findChunks=r;var o=t.fillInChunks=function(e){var t=e.chunksToHighlight,n=e.totalLength,r=[],o=function(e,t,n){t-e>0&&r.push({start:e,end:t,highlight:n})};if(0===t.length)o(0,n,!1);else{var a=0;t.forEach((function(e){o(a,e.start,!1),o(e.start,e.end,!0),a=e.end})),o(a,n,!1)}return r};function a(e){return e}}])},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(6)((function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(13)()}).call(t,n(5))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],s=!1,f=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(t){var r=n(7),o=n(8),a=n(9),i=n(10),u=n(11),c=n(12);e.exports=function(e,n){var l="function"===typeof Symbol&&Symbol.iterator;var s={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:d(r.thatReturnsNull),arrayOf:function(e){return d((function(t,n,r,o,a){if("function"!==typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new p("Invalid "+o+" `"+a+"` of type `"+v(i)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<i.length;c++){var l=e(i,c,r,o,a+"["+c+"]",u);if(l instanceof Error)return l}return null}))},element:d((function(t,n,r,o,a){var i=t[n];return e(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return d((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||"<<anonymous>>";return new p("Invalid "+o+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:d((function(e,t,n,r,o){return y(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(t,n,r,o,a){if("function"!==typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],c=v(i);if("object"!==c)return new p("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(i.hasOwnProperty(l)){var s=e(i,l,r,o,a+"."+l,u);if(s instanceof Error)return s}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull;return d((function(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(f(i,e[u]))return null;return new p("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!==typeof o)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",b(o),n),r.thatReturnsNull}return d((function(t,n,r,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,n,r,o,a,u))return null}return new p("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return d((function(t,n,r,o,a){var i=t[n],c=v(i);if("object"!==c)return new p("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var f=s(i,l,r,o,a+"."+l,u);if(f)return f}}return null}))},exact:function(e){return d((function(t,n,r,o,a){var c=t[n],l=v(c);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var s=i({},t[n],e);for(var f in s){var d=e[f];if(!d)return new p("Invalid "+o+" `"+a+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(c,f,r,o,a+"."+f,u);if(h)return h}return null}))}};function f(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function p(e){this.message=e,this.stack=""}function d(e){if("production"!==t.env.NODE_ENV)var r={},i=0;function c(c,l,s,f,d,h,y){if(f=f||"<<anonymous>>",h=h||s,y!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var v=f+":"+s;!r[v]&&i<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,f),r[v]=!0,i++)}return null==l[s]?c?null===l[s]?new p("The "+d+" `"+h+"` is marked as required in `"+f+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(l,s,f,d,h)}var l=c.bind(null,!1);return l.isRequired=c.bind(null,!0),l}function h(e){return d((function(t,n,r,o,a,i){var u=t[n];return v(u)!==e?new p("Invalid "+o+" `"+a+"` of type `"+g(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!y(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,s.checkPropTypes=c,s.PropTypes=s,s}}).call(t,n(5))},function(e,t){function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,a,i,u,c){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,o,a,i,u,c],f=0;(l=new Error(t.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}}).call(t,n(5))},function(e,t,n){(function(t){var r=n(7);if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.error(a);try{throw new Error(a)}catch(i){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];o.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(5))},function(e,t){var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var i,u,c=a(e),l=1;l<arguments.length;l++){for(var s in i=Object(arguments[l]))r.call(i,s)&&(c[s]=i[s]);if(n){u=n(i);for(var f=0;f<u.length;f++)o.call(i,u[f])&&(c[u[f]]=i[u[f]])}}return c}},function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV)var r=n(8),o=n(9),a=n(11),i={};e.exports=function(e,n,u,c,l){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var f;try{r("function"===typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",u,s,typeof e[s]),f=e[s](n,s,c,u,null,a)}catch(d){f=d}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",u,s,typeof f),f instanceof Error&&!(f.message in i)){i[f.message]=!0;var p=l?l():"";o(!1,"Failed %s type: %s%s",u,f.message,null!=p?p:"")}}}}).call(t,n(5))},function(e,t,n){var r=n(7),o=n(8),a=n(11);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){e.exports=o.a},function(e,t){var n=function(e,t){return e===t};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=void 0,o=[],a=void 0,i=!1,u=function(e,n){return t(e,o[n])},c=function(){for(var t=arguments.length,n=Array(t),c=0;c<t;c++)n[c]=arguments[c];return i&&r===this&&n.length===o.length&&n.every(u)?a:(i=!0,r=this,o=n,a=e.apply(this,n))};return c}}])}))),Y=function(e,t){return(Y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var J=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function Q(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function X(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function Z(e){return this instanceof Z?(this.v=e,this):new Z(e)}var $=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};var ee,te=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!==o--;){var i=a[o];if(("_owner"!==i||!t.$$typeof)&&!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n},ne=(ee={__proto__:null,__extends:function(e,t){function n(){this.constructor=e}Y(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},get __assign(){return z},__rest:function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},__decorate:function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},__param:function(e,t){return function(n,r){t(n,r,e)}},__metadata:function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter:function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},__generator:function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},__createBinding:J,__exportStar:function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||J(t,e,n)},__values:Q,__read:X,__spread:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(X(arguments[t]));return e},__spreadArrays:function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r},__await:Z,__asyncGenerator:function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof Z?Promise.resolve(n.value.v).then(c,l):s(a[0][2],n)}catch(r){s(a[0][3],r)}var n}function c(e){u("next",e)}function l(e){u("throw",e)}function s(e,t){e(t),a.shift(),a.length&&u(a[0][0],a[0][1])}},__asyncDelegator:function(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:Z(e[r](t)),done:"return"===r}:o?o(t):t}:o}},__asyncValues:function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=Q(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}},__makeTemplateObject:function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar:function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&J(t,e,n);return $(t,e),t},__importDefault:function(e){return e&&e.__esModule?e:{default:e}},__classPrivateFieldGet:function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet:function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}})&&ee.default||ee,re=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isDeepEqual=t.off=t.on=t.isClient=void 0;var n=ne.__importDefault(te);t.isClient="object"===typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=n.default}));q(re);var oe=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){var r=o.a.useRef(void 0);r.current&&n(t,r.current)||(r.current=t),o.a.useEffect(e,r.current)}}));q(oe);var ae=q(G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=ne.__importDefault(oe);t.default=function(e,t){n.default(e,t,re.isDeepEqual)}})));function ie(e,t){return W(e,t,{keys:["value","label"]})}function ue(e){return e.label}var ce=function(e){var t=e.items,n=e.optionFilterFunc,o=void 0===n?ie:n,a=e.itemRenderer,i=void 0===a?ue:a,u=e.placeholder,l=e.highlightItemBg,s=e.label,f=e.listStyleProps,d=e.onCreateItem,h=Object(g.a)(e,["items","optionFilterFunc","itemRenderer","placeholder","highlightItemBg","label","listStyleProps","onCreateItem"]),y=Object(r.useState)(!1),v=Object(c.a)(y,2),T=v[0],k=v[1],C=Object(r.useState)(""),A=Object(c.a)(C,2),P=A[0],N=A[1],R=Object(r.useState)(t),M=Object(c.a)(R,2),L=M[0],U=M[1],D=Object(r.useRef)(null),H=Object(b.b)(h),W=H.getSelectedItemProps,V=H.getDropdownProps,B=H.addSelectedItem,F=H.removeSelectedItem,q=H.selectedItems,G=q.map((function(e){return e.value})),Y=Object(b.a)({inputValue:P,selectedItem:void 0,items:L,onInputValueChange:function(e){var n=e.inputValue,r=e.selectedItem,a=o(t,n||"");T&&a.length>0&&k(!1),r||U(a)},stateReducer:function(e,t){var n=t.changes;switch(t.type){case b.a.stateChangeTypes.InputBlur:return Object(p.a)(Object(p.a)({},n),{},{isOpen:!1});case b.a.stateChangeTypes.InputKeyDownEnter:case b.a.stateChangeTypes.ItemClick:return Object(p.a)(Object(p.a)({},n),{},{highlightedIndex:e.highlightedIndex,inputValue:P,isOpen:!0});case b.a.stateChangeTypes.FunctionSelectItem:return Object(p.a)(Object(p.a)({},n),{},{inputValue:P});default:return n}},onStateChange:function(e){var n=e.inputValue,r=e.type,o=e.selectedItem;switch(r){case b.a.stateChangeTypes.InputChange:N(n||"");break;case b.a.stateChangeTypes.InputKeyDownEnter:case b.a.stateChangeTypes.ItemClick:o&&(G.includes(o.value)?F(o):d&&T?(d(o),k(!1),U(t),N("")):B(o),re(null))}}}),z=Y.isOpen,J=Y.getToggleButtonProps,Q=Y.getLabelProps,X=Y.getMenuProps,Z=Y.getInputProps,$=Y.getComboboxProps,ee=Y.highlightedIndex,te=Y.getItemProps,ne=Y.openMenu,re=Y.selectItem,oe=Y.setHighlightedIndex;return Object(r.useEffect)((function(){0===L.length&&(k(!0),U([{label:"".concat(P),value:P}]),oe(0))}),[L,k,oe,P]),ae((function(){U(t)}),[t]),Object(r.createElement)(m.a,null,Object(r.createElement)(S.a,null,Object(r.createElement)(O.a,Object.assign({},Q({})),s),q&&Object(r.createElement)(S.a,{spacing:2,isInline:!0,flexWrap:"wrap"},q.map((function(e,t){return Object(r.createElement)(E.c,Object.assign({mb:1,key:"selected-item-".concat(t)},W({selectedItem:e,index:t})),Object(r.createElement)(E.b,null,e.label),Object(r.createElement)(E.a,{onClick:function(t){t.stopPropagation(),F(e)},"aria-label":"Remove menu selection badge"}))}))),Object(r.createElement)(S.a,Object.assign({isInline:!0},$()),Object(r.createElement)(w.a,Object.assign({},Z(V({placeholder:u,onClick:z?function(){}:ne,onFocus:z?function(){}:ne,ref:D})))),Object(r.createElement)(j.a,Object.assign({},J(),{"aria-label":"toggle menu"})," \u2193 ")),Object(r.createElement)(x.a,{pb:4,mb:4},Object(r.createElement)(_.c,Object.assign({bg:"white",borderRadius:"4px",border:z&&"1px solid rgba(0,0,0,0.1)",boxShadow:"6px 5px 8px rgba(0,50,30,0.02)"},f,X()),z&&L.map((function(e,t){return Object(r.createElement)(_.b,Object.assign({px:2,py:1,borderBottom:"1px solid rgba(0,0,0,0.01)",bg:ee===t?l:"inherit",key:"".concat(e.value).concat(t)},te({item:e,index:t})),T?Object(r.createElement)(I.a,null,Object(r.createElement)(x.a,{as:"span"},"Create")," ",Object(r.createElement)(x.a,{as:"span",bg:"yellow.300",fontWeight:"bold"},'"',e.label,'"')):Object(r.createElement)("div",null,G.includes(e.value)&&Object(r.createElement)(_.a,{icon:"check-circle",color:"green.500",role:"img","aria-label":"Selected"}),Object(r.createElement)(K,{autoEscape:!0,searchWords:[P||""],textToHighlight:i(e)})))}))))))};ce.defaultProps={highlightItemBg:"gray.100"};var le=[{value:"ghana",label:"Ghana"},{value:"nigeria",label:"Nigeria"},{value:"kenya",label:"Kenya"},{value:"southAfrica",label:"South Africa"},{value:"unitedStates",label:"United States"},{value:"canada",label:"Canada"},{value:"germany",label:"Germany"}];function se(){var e=o.a.useState(le),t=Object(c.a)(e,2),n=t[0],r=t[1],a=o.a.useState([]),i=Object(c.a)(a,2),p=i[0],d=i[1];return o.a.createElement(l.a,{theme:v},o.a.createElement(s.a,null),o.a.createElement(f.a,{flexWrap:"wrap",px:6,pt:12,height:"100vh",bg:"rgba(247,250,252)",justify:"center",maxW:"800px",borderRight:"1px solid #ddd"},o.a.createElement(ce,{label:"Choose preferred work locations",placeholder:"Type a Country",onCreateItem:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])})),d((function(t){return[].concat(Object(u.a)(t),[e])}))},items:n,selectedItems:p,onSelectedItemsChange:function(e){return function(e){e&&d(e)}(e.selectedItems)}})))}i.a.render(o.a.createElement(se,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.745b9489.chunk.js.map