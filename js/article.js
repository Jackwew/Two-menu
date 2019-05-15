let sidebar = document.querySelector('.sidebar');
let allBtn = sidebar.querySelector("ul").children;
let article = box.querySelector('.article');
let m = 0;
console.log(article);
for(let i = 0; i < allBtn.length;i ++){
    allBtn[i].onmouseenter = function () {
        switch (i) {
            case 0 : article.innerHTML = ` 
            <ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul>`;
                     article.classList.add('ac');
                     break;
            case 1 : article.innerHTML = `
                <ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul>`;
                     article.classList.add('ac');
                     break;
            case 2 : article.innerHTML = ` 
                <ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul><ul>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                <li>
                    <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80">
                    <a href="">小米9</a>
                </li>
                </ul>`;
                article.classList.add('ac');
                break;
        }


    };
}
box.onmouseleave = function () {
    article.classList.remove('ac');
};
