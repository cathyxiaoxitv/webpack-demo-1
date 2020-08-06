import x from './x.js'
import png from './assets/1.png'

console.log(png)

const div = document.getElementById('app')
console.log('div');
console.log(div);
div.innerHTML = `
<img src="${png}">
    `

const button = document.createElement('button');
button.innerText = '懒加载'
button.onclick = ()=>{
 const promise = import('./lazy')
    promise.then((module)=>{
        module.default();//就是lazy.js这个模块里的默认值
    },()=>{})
}

div.appendChild(button)