/// 配列
const colors = ["あか", "あお", "みどり"];

// 1.配列の中の"あお"をコンソールで表示する
console.log(colors[1]);

// 2.ループを使用して配列の中から全ての値をコンソールで表示する
// colors.forEach((value, index, array) => {
     colors.forEach((value) => {
    console.log(value)
});

/// オブジェクト
const ragamuffin = {
  name: "ラガマフィン",
  hairLength: "long",
  description: "おっとりした性格で人懐っこい",
};

// 3.コンソールに「ラガマフィンです！」と表示する
console.log(ragamuffin.name + 'です！');

// 4.コンソールに「ラガマフィンの特徴は、おっとりした性格で人懐っこいところです。」と表示する
console.log(ragamuffin.name + 'の特徴は' + ragamuffin.description + 'ところです！');


/// 配列とオブジェクトの組み合わせ
const cats = [
  {
    name: "ラガマフィン",
    hairLength: "long",
    description: "おっとりした性格で人懐っこい",
  },
  {
    name: "ロイヤルブルー",
    hairLength: "short",
    description: "やわらかい皮毛で上品さが売り",
  },
  {
    name: "ラグドール",
    hairLength: "long",
    description: "穏やかな性格で運動量が少なめ",
  },
];

// 5.コンソールに「ラグドールです！」と表示する
    const findName = cats.find(findName => findName.name === 'ラグドール');
    console.log(findName.name + 'です！')

// 6.コンソールに毛の長い猫のみ絞り込んでnameを表示する
    const findLongHair = cats.filter(findHair => findHair.hairLength === 'long' )
//     .map(({name}) => {
//         return{
//             name
//         }
//     });
// console.log(findLongHair);
    console.log(findLongHair[0].name + 'と' + findLongHair[1].name + 'です！');
    
