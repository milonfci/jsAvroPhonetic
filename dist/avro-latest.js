/*! JS Avro Phonetic v1.1.3 http://omicronlab.com | https://raw.github.com/torifat/jsAvroPhonetic/master/MPL-1.1.txt */
var OmicronLab={};OmicronLab.Avro={},OmicronLab.Avro.Phonetic={parse:function(e){var t=this.fixString(e),n="";for(var r=0;r<t.length;++r){var i=r,s=r+1,o=i-1,u=!1;for(var a=0;a<this.data.patterns.length;++a){var f=this.data.patterns[a];s=r+f.f.length;if(s<=t.length&&t.substring(i,s)==f.f){o=i-1;if(typeof f.u!="undefined")for(var l=0;l<f.u.length;++l){var c=f.u[l],h=!0,p=0;for(var d=0;d<c.m.length;++d){var v=c.m[d];v.t==="s"?p=s:p=o,typeof v.negative=="undefined"&&(v.negative=!1,v.s.charAt(0)==="!"&&(v.negative=!0,v.s=v.s.substring(1))),typeof v.v=="undefined"&&(v.v="");if(v.s==="p"){if(!(p<0&&v.t==="p"||p>=t.length&&v.t==="s"||this.isPunctuation(t.charAt(p)))^v.negative){h=!1;break}}else if(v.s==="v"){if((!(p>=0&&v.t==="p"||p<t.length&&v.t==="s")||!this.isVowel(t.charAt(p)))^v.negative){h=!1;break}}else if(v.s==="c"){if((!(p>=0&&v.t==="p"||p<t.length&&v.t==="s")||!this.isConsonant(t.charAt(p)))^v.negative){h=!1;break}}else if(v.s==="e"){var m,g;v.t==="s"?(m=s,g=s+v.v.length):(m=i-v.v.length,g=i);if(!this.isExact(v.v,t,m,g,v.negative)){h=!1;break}}}if(h){n+=c.r,r=s-1,u=!0;break}}if(u==1)break;n+=f.r,r=s-1,u=!0;break}}u||(n+=t.charAt(r))}return n},fixString:function(e){var t="";for(var n=0;n<e.length;++n){var r=e.charAt(n);this.isCaseSensitive(r)?t+=r:t+=r.toLowerCase()}return t},isVowel:function(e){return this.data.v.indexOf(e.toLowerCase())>=0},isConsonant:function(e){return this.data.c.indexOf(e.toLowerCase())>=0},isPunctuation:function(e){return!this.isVowel(e)&&!this.isConsonant(e)},isExact:function(e,t,n,r,i){return(n>=0&&r<t.length&&t.substring(n,r)===e)^i},isCaseSensitive:function(e){return this.data.casesensitive.indexOf(e.toLowerCase())>=0},data:{patterns:[{f:"bhl",r:"ভ্ল"},{f:"psh",r:"পশ"},{f:"bdh",r:"ব্ধ"},{f:"bj",r:"ব্জ"},{f:"bd",r:"ব্দ"},{f:"bb",r:"ব্ব"},{f:"bl",r:"ব্ল"},{f:"bh",r:"ভ"},{f:"vl",r:"ভ্ল"},{f:"b",r:"ব"},{f:"v",r:"ভ"},{f:"cNG",r:"চ্ঞ"},{f:"cch",r:"চ্ছ"},{f:"cc",r:"চ্চ"},{f:"ch",r:"ছ"},{f:"c",r:"চ"},{f:"dhn",r:"ধ্ন"},{f:"dhm",r:"ধ্ম"},{f:"dgh",r:"দ্ঘ"},{f:"ddh",r:"দ্ধ"},{f:"dbh",r:"দ্ভ"},{f:"dv",r:"দ্ভ"},{f:"dm",r:"দ্ম"},{f:"DD",r:"ড্ড"},{f:"Dh",r:"ঢ"},{f:"dh",r:"ধ"},{f:"dg",r:"দ্গ"},{f:"dd",r:"দ্দ"},{f:"D",r:"ড"},{f:"d",r:"দ"},{f:"...",r:"..."},{f:".`",r:"."},{f:"..",r:"।।"},{f:".",r:"।"},{f:"ghn",r:"ঘ্ন"},{f:"Ghn",r:"ঘ্ন"},{f:"gdh",r:"গ্ধ"},{f:"Gdh",r:"গ্ধ"},{f:"gN",r:"গ্ণ"},{f:"GN",r:"গ্ণ"},{f:"gn",r:"গ্ন"},{f:"Gn",r:"গ্ন"},{f:"gm",r:"গ্ম"},{f:"Gm",r:"গ্ম"},{f:"gl",r:"গ্ল"},{f:"Gl",r:"গ্ল"},{f:"gg",r:"জ্ঞ"},{f:"GG",r:"জ্ঞ"},{f:"Gg",r:"জ্ঞ"},{f:"gG",r:"জ্ঞ"},{f:"gh",r:"ঘ"},{f:"Gh",r:"ঘ"},{f:"g",r:"গ"},{f:"G",r:"গ"},{f:"hN",r:"হ্ণ"},{f:"hn",r:"হ্ন"},{f:"hm",r:"হ্ম"},{f:"hl",r:"হ্ল"},{f:"h",r:"হ"},{f:"jjh",r:"জ্ঝ"},{f:"jNG",r:"জ্ঞ"},{f:"jh",r:"ঝ"},{f:"jj",r:"জ্জ"},{f:"j",r:"জ"},{f:"J",r:"জ"},{f:"kkhN",r:"ক্ষ্ণ"},{f:"kShN",r:"ক্ষ্ণ"},{f:"kkhm",r:"ক্ষ্ম"},{f:"kShm",r:"ক্ষ্ম"},{f:"kxN",r:"ক্ষ্ণ"},{f:"kxm",r:"ক্ষ্ম"},{f:"kkh",r:"ক্ষ"},{f:"kSh",r:"ক্ষ"},{f:"ksh",r:"কশ"},{f:"kx",r:"ক্ষ"},{f:"kk",r:"ক্ক"},{f:"kT",r:"ক্ট"},{f:"kt",r:"ক্ত"},{f:"kl",r:"ক্ল"},{f:"ks",r:"ক্স"},{f:"kh",r:"খ"},{f:"k",r:"ক"},{f:"lbh",r:"ল্ভ"},{f:"ldh",r:"ল্ধ"},{f:"lkh",r:"লখ"},{f:"lgh",r:"লঘ"},{f:"lph",r:"লফ"},{f:"lk",r:"ল্ক"},{f:"lg",r:"ল্গ"},{f:"lT",r:"ল্ট"},{f:"lD",r:"ল্ড"},{f:"lp",r:"ল্প"},{f:"lv",r:"ল্ভ"},{f:"lm",r:"ল্ম"},{f:"ll",r:"ল্ল"},{f:"lb",r:"ল্ব"},{f:"l",r:"ল"},{f:"mth",r:"ম্থ"},{f:"mph",r:"ম্ফ"},{f:"mbh",r:"ম্ভ"},{f:"mpl",r:"মপ্ল"},{f:"mn",r:"ম্ন"},{f:"mp",r:"ম্প"},{f:"mv",r:"ম্ভ"},{f:"mm",r:"ম্ম"},{f:"ml",r:"ম্ল"},{f:"mb",r:"ম্ব"},{f:"mf",r:"ম্ফ"},{f:"m",r:"ম"},{f:"0",r:"০"},{f:"1",r:"১"},{f:"2",r:"২"},{f:"3",r:"৩"},{f:"4",r:"৪"},{f:"5",r:"৫"},{f:"6",r:"৬"},{f:"7",r:"৭"},{f:"8",r:"৮"},{f:"9",r:"৯"},{f:"NgkSh",r:"ঙ্ক্ষ"},{f:"Ngkkh",r:"ঙ্ক্ষ"},{f:"NGch",r:"ঞ্ছ"},{f:"Nggh",r:"ঙ্ঘ"},{f:"Ngkh",r:"ঙ্খ"},{f:"NGjh",r:"ঞ্ঝ"},{f:"ngOU",r:"ঙ্গৌ"},{f:"ngOI",r:"ঙ্গৈ"},{f:"Ngkx",r:"ঙ্ক্ষ"},{f:"NGc",r:"ঞ্চ"},{f:"nch",r:"ঞ্ছ"},{f:"njh",r:"ঞ্ঝ"},{f:"ngh",r:"ঙ্ঘ"},{f:"Ngk",r:"ঙ্ক"},{f:"Ngx",r:"ঙ্ষ"},{f:"Ngg",r:"ঙ্গ"},{f:"Ngm",r:"ঙ্ম"},{f:"NGj",r:"ঞ্জ"},{f:"ndh",r:"ন্ধ"},{f:"nTh",r:"ন্ঠ"},{f:"NTh",r:"ণ্ঠ"},{f:"nth",r:"ন্থ"},{f:"nkh",r:"ঙ্খ"},{f:"ngo",r:"ঙ্গ"},{f:"nga",r:"ঙ্গা"},{f:"ngi",r:"ঙ্গি"},{f:"ngI",r:"ঙ্গী"},{f:"ngu",r:"ঙ্গু"},{f:"ngU",r:"ঙ্গূ"},{f:"nge",r:"ঙ্গে"},{f:"ngO",r:"ঙ্গো"},{f:"NDh",r:"ণ্ঢ"},{f:"nsh",r:"নশ"},{f:"Ngr",r:"ঙর"},{f:"NGr",r:"ঞর"},{f:"ngr",r:"ংর"},{f:"nj",r:"ঞ্জ"},{f:"Ng",r:"ঙ"},{f:"NG",r:"ঞ"},{f:"nk",r:"ঙ্ক"},{f:"ng",r:"ং"},{f:"nn",r:"ন্ন"},{f:"NN",r:"ণ্ণ"},{f:"Nn",r:"ণ্ন"},{f:"nm",r:"ন্ম"},{f:"Nm",r:"ণ্ম"},{f:"nd",r:"ন্দ"},{f:"nT",r:"ন্ট"},{f:"NT",r:"ণ্ট"},{f:"nD",r:"ন্ড"},{f:"ND",r:"ণ্ড"},{f:"nt",r:"ন্ত"},{f:"ns",r:"ন্স"},{f:"nc",r:"ঞ্চ"},{f:"n",r:"ন"},{f:"N",r:"ণ"},{f:"OI`",r:"ৈ"},{f:"OU`",r:"ৌ"},{f:"O`",r:"ো"},{f:"OI",r:"ৈ",u:[{m:[{t:"p",s:"!c"}],r:"ঐ"},{m:[{t:"p",s:"p"}],r:"ঐ"}]},{f:"OU",r:"ৌ",u:[{m:[{t:"p",s:"!c"}],r:"ঔ"},{m:[{t:"p",s:"p"}],r:"ঔ"}]},{f:"O",r:"ো",u:[{m:[{t:"p",s:"!c"}],r:"ও"},{m:[{t:"p",s:"p"}],r:"ও"}]},{f:"phl",r:"ফ্ল"},{f:"pT",r:"প্ট"},{f:"pt",r:"প্ত"},{f:"pn",r:"প্ন"},{f:"pp",r:"প্প"},{f:"pl",r:"প্ল"},{f:"ps",r:"প্স"},{f:"ph",r:"ফ"},{f:"fl",r:"ফ্ল"},{f:"f",r:"ফ"},{f:"p",r:"প"},{f:"rri`",r:"ৃ"},{f:"rri",r:"ৃ",u:[{m:[{t:"p",s:"!c"}],r:"ঋ"},{m:[{t:"p",s:"p"}],r:"ঋ"}]},{f:"rrZ",r:"রর‍্য"},{f:"rry",r:"রর‍্য"},{f:"rZ",r:"র‍্য",u:[{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"},{t:"p",s:"!e",v:"y"},{t:"p",s:"!e",v:"w"},{t:"p",s:"!e",v:"x"}],r:"্র্য"}]},{f:"ry",r:"র‍্য",u:[{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"},{t:"p",s:"!e",v:"y"},{t:"p",s:"!e",v:"w"},{t:"p",s:"!e",v:"x"}],r:"্র্য"}]},{f:"rr",r:"রর",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!v"},{t:"s",s:"!e",v:"r"},{t:"s",s:"!p"}],r:"র্"},{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"}],r:"্রর"}]},{f:"Rg",r:"ড়্গ"},{f:"Rh",r:"ঢ়"},{f:"R",r:"ড়"},{f:"r",r:"র",u:[{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"},{t:"p",s:"!e",v:"y"},{t:"p",s:"!e",v:"w"},{t:"p",s:"!e",v:"x"},{t:"p",s:"!e",v:"Z"}],r:"্র"}]},{f:"shch",r:"শ্ছ"},{f:"ShTh",r:"ষ্ঠ"},{f:"Shph",r:"ষ্ফ"},{f:"Sch",r:"শ্ছ"},{f:"skl",r:"স্ক্ল"},{f:"skh",r:"স্খ"},{f:"sth",r:"স্থ"},{f:"sph",r:"স্ফ"},{f:"shc",r:"শ্চ"},{f:"sht",r:"শ্ত"},{f:"shn",r:"শ্ন"},{f:"shm",r:"শ্ম"},{f:"shl",r:"শ্ল"},{f:"Shk",r:"ষ্ক"},{f:"ShT",r:"ষ্ট"},{f:"ShN",r:"ষ্ণ"},{f:"Shp",r:"ষ্প"},{f:"Shf",r:"ষ্ফ"},{f:"Shm",r:"ষ্ম"},{f:"spl",r:"স্প্ল"},{f:"sk",r:"স্ক"},{f:"Sc",r:"শ্চ"},{f:"sT",r:"স্ট"},{f:"st",r:"স্ত"},{f:"sn",r:"স্ন"},{f:"sp",r:"স্প"},{f:"sf",r:"স্ফ"},{f:"sm",r:"স্ম"},{f:"sl",r:"স্ল"},{f:"sh",r:"শ"},{f:"Sc",r:"শ্চ"},{f:"St",r:"শ্ত"},{f:"Sn",r:"শ্ন"},{f:"Sm",r:"শ্ম"},{f:"Sl",r:"শ্ল"},{f:"Sh",r:"ষ"},{f:"s",r:"স"},{f:"S",r:"শ"},{f:"oo`",r:"ু"},{f:"oo",r:"ু",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"উ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"উ"}]},{f:"o`",r:""},{f:"oZ",r:"অ্য"},{f:"o",r:"",u:[{m:[{t:"p",s:"v"},{t:"p",s:"!e",v:"o"}],r:"ও"},{m:[{t:"p",s:"v"},{t:"p",s:"e",v:"o"}],r:"অ"},{m:[{t:"p",s:"p"}],r:"অ"}]},{f:"tth",r:"ত্থ"},{f:"t``",r:"ৎ"},{f:"TT",r:"ট্ট"},{f:"Tm",r:"ট্ম"},{f:"Th",r:"ঠ"},{f:"tn",r:"ত্ন"},{f:"tm",r:"ত্ম"},{f:"th",r:"থ"},{f:"tt",r:"ত্ত"},{f:"T",r:"ট"},{f:"t",r:"ত"},{f:"aZ",r:"অ্যা"},{f:"AZ",r:"অ্যা"},{f:"a`",r:"া"},{f:"A`",r:"া"},{f:"a",r:"া",u:[{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"আ"},{m:[{t:"p",s:"!c"},{t:"p",s:"!e",v:"a"},{t:"s",s:"!e",v:"`"}],r:"য়া"},{m:[{t:"p",s:"e",v:"a"},{t:"s",s:"!e",v:"`"}],r:"আ"}]},{f:"i`",r:"ি"},{f:"i",r:"ি",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ই"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ই"}]},{f:"I`",r:"ী"},{f:"I",r:"ী",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ঈ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ঈ"}]},{f:"u`",r:"ু"},{f:"u",r:"ু",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"উ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"উ"}]},{f:"U`",r:"ূ"},{f:"U",r:"ূ",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ঊ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ঊ"}]},{f:"ee`",r:"ী"},{f:"ee",r:"ী",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ঈ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ঈ"}]},{f:"e`",r:"ে"},{f:"e",r:"ে",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"এ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"এ"}]},{f:"z",r:"য"},{f:"Z",r:"্য"},{f:"y",r:"্য",u:[{m:[{t:"p",s:"!c"},{t:"p",s:"!p"}],r:"য়"},{m:[{t:"p",s:"p"}],r:"ইয়"}]},{f:"Y",r:"য়"},{f:"q",r:"ক"},{f:"w",r:"ও",u:[{m:[{t:"p",s:"p"},{t:"s",s:"v"}],r:"ওয়"},{m:[{t:"p",s:"c"}],r:"্ব"}]},{f:"x",r:"ক্স",u:[{m:[{t:"p",s:"p"}],r:"এক্স"}]},{f:":`",r:":"},{f:":",r:"ঃ"},{f:"^`",r:"^"},{f:"^",r:"ঁ"},{f:",,",r:"্‌"},{f:",",r:","},{f:"$",r:"৳"},{f:"`",r:""}],v:"aeiou",c:"bcdfghjklmnpqrstvwxyz",casesensitive:"oiudgjnrstyz"}}; (function(e){var t={init:function(n,r){var i={bangla:!0};return n&&e.extend(i,n),this.each(function(){if("bangla"in this)return;this.bangla=i.bangla,this.callback=r||e.noop,e(this).bind("keydown.avro",t.keydown),e(this).bind("notify.avro",t.notify),e(this).bind("switch.avro",t.switchKb),e(this).bind("focus.avro",t.focus),e(this).bind("ready.avro",t.ready),e(this).trigger("ready")})},notify:function(e){this.callback(this.bangla)},switchKb:function(t,n){typeof n=="undefined"&&(n=!this.bangla),this.bangla=n,e(this).trigger("notify")},focus:function(t){e(this).trigger("notify")},ready:function(t){e(this).trigger("notify")},destroy:function(){return this.each(function(){e(this).unbind(".avro")})},keydown:function(n){var r=n.which;if(r===77&&n.ctrlKey&&!n.altKey&&!n.shiftKey)return e(this).trigger("switch",[!this.bangla]),!1;if(!this.bangla)return;(r===32||r===13||r===9)&&t.replace(this)},replace:function(e){var n=t.getCaret(e),r=t.findLast(e,n),i=OmicronLab.Avro.Phonetic.parse(e.value.substring(r,n));if(document.selection){var s=document.selection.createRange();s.moveStart("character",-1*Math.abs(n-r)),s.text=i,s.collapse(!0)}else e.value=e.value.substring(0,r)+i+e.value.substring(n),e.selectionStart=e.selectionEnd=n-(Math.abs(n-r)-i.length)},findLast:function(t,n){var r=n-1;while(r>0){var i=t.value.charAt(r);if(e.trim(i)==="")break;r--}return r},getCaret:function(e){if(e.selectionStart)return e.selectionStart;if(document.selection){e.focus();var t=document.selection.createRange();if(t===null)return 0;var n=e.createTextRange(),r=n.duplicate();return n.moveToBookmark(t.getBookmark()),r.setEndPoint("EndToStart",n),r.text.length}return 0}};e.fn.avro=function(n){if(n in["init","destroy"])return t[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="object"||!n)return t.init.apply(this,arguments);e.error("Method "+n+" does not exist on jQuery.avro")}})(jQuery);
