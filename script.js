const words = [
    { word: "account", definition: "帳目；帳單；帳戶" },
    { word: "acceptance", definition: "接受,同意,承認,認可" },
    { word: "accrue", definition: "產生；增加" },
    { word: "accountant", definition: "會計師" },
    { word: "conference", definition: "商務會議;圓桌會議" },
    { word: "absurd", definition: "荒謬的" },
    { word: "aspect", definition: "外觀,方面,方向" },
    { word: "affection", definition: "感情" },
    { word: "alleviate", definition: "(vt.)減輕,使緩和" },
    { word: "aerobics", definition: "有氧運動" },
    { word: "amuse", definition: "使快樂" },
    { word: "appliance", definition: "設備，器具" },
    { word: "alcohol", definition: "酒精" },
    { word: "advanced", definition: "先進的；高等的" },
    { word: "affordable", definition: "負擔得起的" },
    { word: "appointment", definition: "約會，約定" },
    { word: "bid", definition: "出價" },
    { word: "adjourn", definition: "(v) 暫時；休會" },
    { word: "allocate", definition: "撥出；分配；配置" },
    { word: "access", definition: "接近;進入;取得的方法" },
    { word: "advertisement", definition: "廣告" },
    { word: "accommodation", definition: "住宿" },
    { word: "accelerate", definition: "加速；促進" },
    { word: "appetite", definition: "食慾" },
    { word: "convention", definition: "大型會議;股東會議" },
    { word: "adequate", definition: "足夠的" },
    { word: "assumption", definition: "假設" },
    { word: "anticipate", definition: "期待" },
    { word: "burglar", definition: "竊賊" },
    { word: "bacteria", definition: "細菌" },
    { word: "audience", definition: "觀眾" },
    { word: "acquaintance", definition: "熟人" },
    { word: "agreement", definition: "同意,答應" },
    { word: "bazaar", definition: "市集" },
    { word: "commercial", definition: "商業的" },
    { word: "balance", definition: "餘額；差額" },
    { word: "aircraft", definition: "飛行器,飛機" },
    { word: "applicant", definition: "申請人" },
    { word: "attendance", definition: "出席人數；出席" },
    { word: "acquisition", definition: "獲得；習得" },
    { word: "capacity", definition: "容量,能力,才能" },
    { word: "automatically", definition: "自動的" },
    { word: "appendix", definition: "附錄" },
    { word: "boarding", definition: "登機" },
    { word: "artificial", definition: "人工的" },
    { word: "seminar", definition: "專題;討論會;研討室" },
    { word: "ample", definition: "充足的" },
    { word: "attempt", definition: "嘗試" },
    { word: "brag", definition: "吹牛" },
    { word: "collision", definition: "碰撞,沖突,抵觸" },
    { word: "compete", definition: "競爭" },
    { word: "ballet", definition: "芭蕾舞" },
    { word: "anniversary", definition: "週年紀念日" },
    { word: "community", definition: "社區" },
    { word: "client", definition: "客戶,顧客,委託人客戶" },
    { word: "amendment", definition: "修正" },
    { word: "arrival", definition: "到達" },
    { word: "authorize", definition: "授權；委託" },
    { word: "cabinet", definition: "櫥櫃" },
    { word: "competitor", definition: "競爭者" },
    { word: "amplify", definition: "放大；加強；擴展" },
    { word: "bond", definition: "債券" },
    { word: "component", definition: "成分、要素" },
    { word: "cable", definition: "纜線" },
    { word: "attach", definition: "附上" },
    { word: "brochure", definition: "小冊子" },
    { word: "bland", definition: "乏味的" },
    { word: "workshop", definition: "專題;討論會;工作坊" },
    { word: "decent", definition: "有分寸的,得體的,大方的" },
    { word: "call waiting", definition: "電話插播" },
    { word: "delighted", definition: "高興的" }
];



document.addEventListener('DOMContentLoaded', function() {
    loadWords();
});

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    const selectedWord = words[index];
    document.getElementById("wordDisplay").textContent = `${selectedWord.word}`;
    document.getElementById("ChineseDisplay").textContent = `${selectedWord.definition}`;
}

document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

function saveWord() {
    var word = document.getElementById('wordDisplay').textContent;
    var definition = document.getElementById('ChineseDisplay').textContent;
    var wordWithDefinition = word + " - " + definition;

    var savedWords = localStorage.getItem('savedWords');
    if (savedWords) {
        savedWords = JSON.parse(savedWords);
    } else {
        savedWords = [];
    }
    savedWords.push(wordWithDefinition);
    localStorage.setItem('savedWords', JSON.stringify(savedWords));
    alert('已記錄');
}

function loadWords() {
    var wordsList = document.getElementById('wordsList');
    wordsList.innerHTML = '';
    var savedWords = localStorage.getItem('savedWords');
    if (savedWords) {
        savedWords = JSON.parse(savedWords);
        savedWords.forEach(function(word) {
            var li = document.createElement('li');
            var span = document.createElement('span');
            span.textContent = word;

            var deleteButton = document.createElement('button');
            deleteButton.textContent = '刪除';
            deleteButton.addEventListener('click', function() {
                deleteWord(word);
            });

            li.appendChild(span);
            li.appendChild(deleteButton);
            wordsList.appendChild(li);
        });
    }
}


function deleteWord(wordToDelete) {
    var savedWords = JSON.parse(localStorage.getItem('savedWords'));
    var filteredWords = savedWords.filter(word => word !== wordToDelete);
    localStorage.setItem('savedWords', JSON.stringify(filteredWords));
    loadWords();
}
