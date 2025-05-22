// BGMの処理1回のみ (!hasPlayed)は(hasPlayed === false)と同じ処理です
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



// "占う"ボタンをクリックした際の処理
button1.addEventListener(`click`, function() {

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

    // 基本的にHTML要素.style.プロパティ名 = `値`;でCSSのプロパティ書き換えれそう
    overlay.style.display = `block` ;
    document.getElementById(`container2`).style.visibility = `visible` ;
    document.getElementById(`result-flex1`).style.display = `flex`;
    document.getElementById(`result-flex2`).style.display = `flex`;
    // 用意されてるアニメーションのクラスに追加
    document.getElementById(`result-flex1`).classList.add(`slideInUp`);
    document.getElementById(`result-flex2`).classList.add(`slideInUp2`);

    // result1の書き換え
    result1.innerHTML = uranaikekka.kekka1;

    // indexOfは対象のインデックス番号を取得してくれる
    const index = uranai.indexOf(uranaikekka); 
    // index番号が4,5の時だけunlucky、それ以外はlucky
    if (index > 3) {
        result1.classList.add(`unlucky`);
        result2.innerHTML = uranaikekka.kekka2
    } else {
        result1.classList.add(`lucky`);
        result2.innerHTML = uranaikekka.kekka2
    }
});



// "占わない"ボタンをクリックした際の処理
button2.addEventListener(`click`, function() {
    bgm.pause();
    overlay.style.display = `block` ;
    document.getElementById(`container2`).style.visibility = `visible` ;
    result3.style.display = `block` ;
    result3.classList.add(`flipInY`);
    document.getElementById(`jojoquote`).volume = 0.03;
    document.getElementById(`jojoquote`).play();
});



// "overlay"をクリックした際の処理
overlay.addEventListener(`click`, function() {
    overlay.style.display = `none` ;
    document.getElementById(`container2`).style.visibility = `hidden` ;
    document.getElementById(`result-flex1`).style.display = `none`;
    document.getElementById(`result-flex2`).style.display = `none`;
    document.getElementById(`result-flex1`).classList.remove(`slideInUp`);
    document.getElementById(`result-flex2`).classList.remove(`slideInUp2`);
    result1.innerHTML = ``;
    result2.innerHTML = ``;
    result1.classList.remove(`unlucky`,`lucky`);
    result3.style.display = `none` ;
    result3.classList.remove(`flipInY`);
    bgm.play();
});