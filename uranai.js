// 占いの結果をランダムで出す
const uranai = [
    {kekka1:`大吉`,kekka2:`今日は何をしても上手くいく日だね！`},
    {kekka1:`中吉`,kekka2:`思い切って何かチャレンジしてみよう！`},
    {kekka1:`小吉`,kekka2:`小さい幸運だろうと塵も積もれば山となる！`},
    {kekka1:`吉`,kekka2:`普段の日常もあなたの幸せだよ！`},
    {kekka1:`凶`,kekka2:`この程度ならめげずに頑張れ！`},
    {kekka1:`大凶`,kekka2:`所詮は占い！この先を決めるのは君自信だよ！`},
];
const uranaikekka = uranai[Math.floor(Math.random() * uranai.length)];


// BGMの処理 (!hasPlayed)は(hasPlayed === false)と同じ処理です
const bgm = document.getElementById(`bgm`);
bgm.volume = 0.02;

let hasPlayed = false;

document.body.addEventListener(`click`, function() {
    if(!hasPlayed) {
        bgm.play();
        hasPlayed = true;
    }
});


// よく使うHTMLの要素を定数に代入してる
// 一回限りのやつはdocument.getElementById();からつなげてます
const button1 = document.getElementById(`btn1`);
const button2 = document.getElementById(`btn2`);

const overlay = document.getElementById(`overlay`);

const result1 = document.getElementById(`h1`);
const result2 = document.getElementById(`h3`);
const result3 = document.getElementById(`jojo`);





button1.addEventListener(`click`, function() {
    // 基本的にHTML要素.style.プロパティ名 = `値`;でCSSのプロパティ書き換えれそう
    overlay.style.display = `block` ;
    document.getElementById(`container2`).style.visibility = `visible` ;
    document.getElementById(`result-flex1`).style.display = `flex`;
    document.getElementById(`result-flex2`).style.display = `flex`;
    // ↓2つもここでanimationプロパティ設定した方がいいかもしれない
    document.getElementById(`result-flex1`).classList.add(`slideInUp`);
    document.getElementById(`result-flex2`).classList.add(`slideInUp2`);
    result1.innerHTML = uranaikekka.kekka1;
    const index = uranai.indexOf(uranaikekka); // indexOfは対象のインデックス番号を取得してくれる
    if (index > 3) {
        result1.classList.add(`unlucky`);
        result2.innerHTML = uranaikekka.kekka2
    } else {
        result1.classList.add(`lucky`);
        result2.innerHTML = uranaikekka.kekka2
    }
});

button2.addEventListener(`click`, function() {
    bgm.pause();
    overlay.style.display = `block` ;
    document.getElementById(`container2`).style.visibility = `visible` ;
    result3.style.display = `block` ;
    result3.classList.add(`flipInY`);
    document.getElementById(`jojoquote`).volume = 0.03;
    document.getElementById(`jojoquote`).play();
});
