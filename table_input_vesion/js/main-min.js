const{createApp:createApp,ref:ref,computed:computed}=Vue;createApp({setup(){const e=ref([{currentRound:"一",card:"",box:""},{currentRound:"一",card:"",box:""},{currentRound:"二",card:"",box:""},{currentRound:"二",card:"",box:""},{currentRound:"三",card:"",box:""},{currentRound:"三",card:"",box:""},{currentRound:"三",card:"",box:""},{currentRound:"四",card:"",box:""}]),r={1:"巳",2:"午",3:"未",4:"申",5:"辰",6:"酉",7:"卯",8:"戌",9:"寅",10:"丑",11:"子",12:"亥",center:"中心區域"},a=ref({"一":[],"二":[],"三":[],"四":[],final:[]}),t=computed((()=>{const r=e.value.find((e=>""===e.card||""===e.box))?.currentRound;return a.value[r]||a.value.final})),n=r=>{const a=e.value[r].card,t=e.value[r].currentRound,n=c.rounds.find((e=>e.round===t)).texts.length;return/^\d*$/.test(a)?!(a<1||a>n)||(alert(`請輸入 1 到 ${n} 之間的數字！`),e.value[r].card="",!1):(e.value[r].card=a.replace(/\D/g,""),!1)},o=r=>{const a=e.value[r],t=a.currentRound,n=a.card;if(""===n)return;return!e.value.some(((e,a)=>a!==r&&e.currentRound===t&&e.card===n))||(alert("同一回合不能輸入相同的數字！"),e.value[r].card="",!1)},c={ver:"1.0",rounds:[{round:"一",card_back_background_image:"images/back3.jpg",card_face_background_image:"images/face10.jpg",totalCards:14,drawCount:2,texts:[{key:"AA",front:"",back:""},{key:"AB",front:"",back:""},{key:"AC",front:"",back:""},{key:"AD",front:"",back:""},{key:"AE",front:"",back:""},{key:"AF",front:"",back:""},{key:"AG",front:"",back:""},{key:"AH",front:"",back:""},{key:"AI",front:"",back:""},{key:"AJ",front:"",back:""},{key:"AK",front:"",back:""},{key:"AL",front:"",back:""},{key:"AM",front:"",back:""},{key:"AN",front:"",back:""}]},{round:"二",card_back_background_image:"images/back2.jpg",card_face_background_image:"images/face16.jpg",totalCards:14,drawCount:2,texts:[{key:"BA",front:"",back:""},{key:"BB",front:"",back:""},{key:"BC",front:"",back:""},{key:"BD",front:"",back:""},{key:"BE",front:"",back:""},{key:"BF",front:"",back:""},{key:"BG",front:"",back:""},{key:"BH",front:"",back:""},{key:"BI",front:"",back:""},{key:"BJ",front:"",back:""},{key:"BK",front:"",back:""},{key:"BL",front:"",back:""},{key:"BM",front:"",back:""},{key:"BN",front:"",back:""}]},{round:"三",card_back_background_image:"images/back1.jpg",card_face_background_image:"images/face17.jpg",totalCards:32,drawCount:3,texts:[{key:"CA",front:"",back:""},{key:"CB",front:"",back:""},{key:"CC",front:"",back:""},{key:"CD",front:"",back:""},{key:"CE",front:"",back:""},{key:"CF",front:"",back:""},{key:"CG",front:"",back:""},{key:"CH",front:"",back:""},{key:"CI",front:"",back:""},{key:"CJ",front:"",back:""},{key:"CK",front:"",back:""},{key:"CL",front:"",back:""},{key:"CM",front:"",back:""},{key:"CN",front:"",back:""},{key:"CO",front:"",back:""},{key:"CP",front:"",back:""},{key:"CQ",front:"",back:""},{key:"CR",front:"",back:""},{key:"CS",front:"",back:""},{key:"CT",front:"",back:""},{key:"CU",front:"",back:""},{key:"CV",front:"",back:""},{key:"CW",front:"",back:""},{key:"CX",front:"",back:""},{key:"CY",front:"",back:""},{key:"CZ",front:"",back:""},{key:"DA",front:"",back:""},{key:"DB",front:"",back:""},{key:"DC",front:"",back:""},{key:"DD",front:"",back:""},{key:"DE",front:"",back:""},{key:"DF",front:"",back:""}]},{round:"四",card_back_background_image:"images/back4.jpg",card_face_background_image:"images/face9.jpg",totalCards:12,drawCount:1,texts:[{key:"EA",front:"",back:""},{key:"EB",front:"",back:""},{key:"EC",front:"",back:""},{key:"ED",front:"",back:""},{key:"EE",front:"",back:""},{key:"EF",front:"",back:""},{key:"EG",front:"",back:""},{key:"EH",front:"",back:""},{key:"EI",front:"",back:""},{key:"EJ",front:"",back:""},{key:"EK",front:"",back:""},{key:"EL",front:"",back:""}]}]},k=ref({}),u=e=>{if(!k.value[e]){const r=c.rounds.find((r=>r.round===e));if(!r)return[];k.value[e]=b(r.texts)}return k.value[e]},b=e=>{for(let r=e.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1));[e[r],e[a]]=[e[a],e[r]]}return e};c.rounds.forEach((e=>{u(e.round)}));const d=(e,r)=>u(e)[r-1].key,f=computed((()=>e.value.every((e=>""!==e.card&&""!==e.box)))),y=computed((()=>f.value?e.value.map((e=>({round:e.currentRound,key:d(e.currentRound,e.card),box:e.box}))):[])),l=computed((()=>`${`${c.ver}`};${y.value.map((e=>`${e.box}-${e.key}`)).join("-")}`)),s=computed((()=>{const e=(new TextEncoder).encode(l.value);return btoa(String.fromCharCode.apply(null,e))})),i=computed((()=>{const e=atob(s.value),r=new Uint8Array(e.length);for(let a=0;a<e.length;a++)r[a]=e.charCodeAt(a);return(new TextDecoder).decode(r)})),g=((e,r)=>{let a;return function(...t){clearTimeout(a),a=setTimeout((()=>e.apply(this,t)),r)}})(((e,r)=>{n(e)&&o(e)}),500);return{rows:e,roundImages:a,canEdit:r=>{if(f.value)return!1;if(0===r)return!0;const a=e.value[r-1];return""!==a.card&&""!==a.box},currentRoundImages:t,validateNumber:n,randomTexts:k,getCardKey:d,checkDuplicate:o,debouncedHandleInput:g,allRoundsCompleted:f,results:y,formattedResults:l,base64Output:s,decodedBase64:i,getMaxNumber:e=>{const r=c.rounds.find((r=>r.round===e));return r?r.texts.length:0},canShow:r=>{if(0===r)return!0;const a=e.value[r-1];return""!==a.card&&""!==a.box},isNextFilled:r=>{const a=e.value[r];return!!a&&(""!==a.card&&""!==a.box)},getOptions:e=>"四"===e?[{value:"center",text:r.center}]:Object.keys(r).filter((e=>"center"!==e)).map((e=>({value:e,text:r[e]}))),copyToClipboard:e=>{navigator.clipboard.writeText(e).then((()=>{alert("字串已複製到剪貼板！")})).catch((e=>{}))}}}}).mount("#app");