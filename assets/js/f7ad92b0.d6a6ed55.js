"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6956],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,f=d["".concat(u,".").concat(y)]||d[y]||c[y]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4130:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},u="Play Buttons",s={unversionedId:"guides/play-button",id:"guides/play-button",title:"Play Buttons",description:"UI often needs to display a Play button that changes between three states:",source:"@site/docs/guides/play-button.md",sourceDirName:"guides",slug:"/guides/play-button",permalink:"/docs/next/guides/play-button",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/guides/play-button.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"app",previous:{title:"Multitrack Progress",permalink:"/docs/next/guides/multitrack-progress"},next:{title:"Amazon FireOS Support",permalink:"/docs/next/guides/amazon-fire-support"}},p={},c=[],d={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"play-buttons"},"Play Buttons"),(0,i.kt)("p",null,"UI often needs to display a Play button that changes between three states:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Play"),(0,i.kt)("li",{parentName:"ol"},"Pause"),(0,i.kt)("li",{parentName:"ol"},"Spinner (e.g. if playback is being attempted, but sound is paused due to buffering)")),(0,i.kt)("p",null,"Implementing this correctly will take a bit of care. For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"usePlaybackState")," can return ",(0,i.kt)("inlineCode",{parentName:"p"},"State.Buffering")," even if playback is currently paused. ",(0,i.kt)("inlineCode",{parentName:"p"},"usePlayWhenReady")," is one way to check if the player is attempting to play, but can return true even if ",(0,i.kt)("inlineCode",{parentName:"p"},"PlaybackState")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"State.Error")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"State.Ended"),"."),(0,i.kt)("p",null,"To determine how to render a Play button in its three states correctly, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Render the button as a spinner if ",(0,i.kt)("inlineCode",{parentName:"li"},"playWhenReady")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"state === State.Loading || state === State.Buffering")),(0,i.kt)("li",{parentName:"ul"},"Else render the button as being in the Playing state if ",(0,i.kt)("inlineCode",{parentName:"li"},"playWhenReady && !(state === State.Error || state === State.Buffering)")),(0,i.kt)("li",{parentName:"ul"},"Otherwise render the button as being in the Paused state")),(0,i.kt)("p",null,"To help with this logic, the API has two utilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"useIsPlaying()")," hook. This returns ",(0,i.kt)("inlineCode",{parentName:"li"},"{playing: boolean | undefined, bufferingDuringPlay: boolean | undefined}"),", which you can consult to render your play button correctly. You should render a spinner if ",(0,i.kt)("inlineCode",{parentName:"li"},"bufferingDuringPlay === true"),"; otherwise render according to ",(0,i.kt)("inlineCode",{parentName:"li"},"playing"),". Values are ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," if the player isn't yet in a state where they can be determined."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"async isPlaying()")," function, which returns the same result as ",(0,i.kt)("inlineCode",{parentName:"li"},"useIsPlaying()"),", but can be used outside of React components (i.e. without hooks). Note that you can't easily just instead call ",(0,i.kt)("inlineCode",{parentName:"li"},"getPlaybackState()")," to determine the same answer, unless you've accounted for the issues mentioned above.")))}y.isMDXComponent=!0}}]);