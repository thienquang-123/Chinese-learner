// --- VOCABULARY LIST ---
const vocab = [
    { chinese: "你好", pinyin: "nǐ hǎo", english: ["hello", "hi"], vietnamese: ["xin chào", "chào bạn"] },
    { chinese: "谢谢", pinyin: "xièxie", english: ["thank you", "thanks"], vietnamese: ["cảm ơn", "cám ơn"] },
    { chinese: "不客气", pinyin: "bú kèqi", english: ["you're welcome", "you are welcome", "not at all"], vietnamese: ["không có gì", "đừng khách sáo"] },
    { chinese: "再见", pinyin: "zàijiàn", english: ["goodbye", "bye"], vietnamese: ["tạm biệt"] },
    { chinese: "对不起", pinyin: "duìbuqǐ", english: ["sorry", "excuse me"], vietnamese: ["xin lỗi"] },
    { chinese: "没关系", pinyin: "méi guānxi", english: ["it's ok", "it doesn't matter", "no problem"], vietnamese: ["không sao", "không có gì"] },
    { chinese: "是", pinyin: "shì", english: ["yes", "is", "are", "am"], vietnamese: ["là", "phải", "đúng"] },
    { chinese: "我", pinyin: "wǒ", english: ["i", "me"], vietnamese: ["tôi", "tớ"] },
    { chinese: "我的", pinyin: "wǒ de", english: ["my", "mine"], vietnamese: ["của tôi"] },
    { chinese: "你", pinyin: "nǐ", english: ["you"], vietnamese: ["bạn", "cậu"] },
    { chinese: "你的", pinyin: "nǐ de", english: ["your", "yours"], vietnamese: ["của bạn"] },
    { chinese: "他", pinyin: "tā", english: ["he", "him"], vietnamese: ["anh ấy", "cậu ấy", "ông ấy"] },
    { chinese: "他的", pinyin: "tā de", english: ["his"], vietnamese: ["của anh ấy"] },
    { chinese: "她", pinyin: "tā", english: ["she", "her"], vietnamese: ["cô ấy", "chị ấy", "bà ấy"] },
    { chinese: "她的", pinyin: "tā de", english: ["her", "hers"], vietnamese: ["của cô ấy"] },
    { chinese: "我们", pinyin: "wǒmen", english: ["we", "us"], vietnamese: ["chúng tôi", "chúng ta"] },
    { chinese: "爱", pinyin: "ài", english: ["love", "to love"], vietnamese: ["yêu", "thích"] },
    { chinese: "家", pinyin: "jiā", english: ["home", "family"], vietnamese: ["nhà", "gia đình"] },
    { chinese: "吃", pinyin: "chī", english: ["eat", "to eat"], vietnamese: ["ăn"] },
    { chinese: "人", pinyin: "rén", english: ["human", "man"], vietnamese: ["nhân", "người", "con người"] },
    { chinese: "从", pinyin: "cóng", english: ["from"], vietnamese: ["từ"] },
    { chinese: "个", pinyin: "ge", english: ["universal measured word"], vietnamese: ["từ dùng để đếm", "cái", "quả", "con"] },
    { chinese: "个人", pinyin: "gè rén", english: ["individual", "personal"], vietnamese: ["riêng tư", "cá nhân", "một mình"] },
    { chinese: "大", pinyin: "dà", english: ["big"], vietnamese: ["to", "lớn", "đại"] },
    { chinese: "天", pinyin: "tiān", english: ["sky", "day"], vietnamese: ["bầu trời", "thiên", "ngày"] },
    { chinese: "太", pinyin: "tài", english: ["too"], vietnamese: ["thái", "rất", "lắm", "quá"] },
    { chinese: "上", pinyin: "shàng", english: ["up", "above", "on", "over"], vietnamese: ["thượng"] },
    { chinese: "下", pinyin: "xià", english: ["down", "below", "under"], vietnamese: ["hạ"] },
    { chinese: "中", pinyin: "zhōng", english: ["middle", "center"], vietnamese: ["trung"] },
    { chinese: "了", pinyin: "le", english: ["common sentence particle"], vietnamese: ["liễu", "xong", "hết", "đã", "rồi"] },
    { chinese: "子", pinyin: "zǐ/zi", english: ["child", "suffix character"], vietnamese: ["tử", "con", "cái"] },
    { chinese: "字", pinyin: "zì", english: ["character", "letter"], vietnamese: ["tự", "chữ"] },
    { chinese: "口", pinyin: "kǒu", english: ["mouth", "opening"], vietnamese: ["khẩu", "mồm", "miệng", "cửa"] },
    { chinese: "人口", pinyin: "rén kǒu ", english: ["population"], vietnamese: ["nhân khẩu", "dân số"] },
    { chinese: "手", pinyin: "shǒu", english: ["hand"], vietnamese: ["thủ", "tay"] },
    { chinese: "心", pinyin: "xīn", english: ["heart"], vietnamese: ["tâm", "tim", "lòng"] },
    { chinese: "中心", pinyin: "zhōng xīn", english: ["middle", "center"], vietnamese: ["trung tâm"] },
    { chinese: "心中", pinyin: "xīn zhōng", english: ["in the heart"], vietnamese: ["trong tim", "trong trái tim"] },
    { chinese: "开心", pinyin: "kāi xīn", english: ["happy"], vietnamese: ["vui vẻ", "hạnh phúc"] },
    { chinese: "日", pinyin: "rì", english: ["sun", "day"], vietnamese: ["nhật", "mặt trời", "ngày"] },
    { chinese: "月", pinyin: "yuè", english: ["moon", "month"], vietnamese: ["nguyệt", "mặt trăng", "tháng"] },
    { chinese: "明", pinyin: "míng", english: ["bright", "clear"], vietnamese: ["minh", "sáng"] },
    { chinese: "明天", pinyin: "míng tiān", english: ["tomorrow"], vietnamese: ["ngày mai"] },
    { chinese: "白", pinyin: "bái", english: ["white"], vietnamese: ["bạch", "trắng", "màu trắng"] },
    { chinese: "明白", pinyin: "míng bái", english: ["understand", "to understand"], vietnamese: ["minh bạch", "hiểu"] },
    { chinese: "白天", pinyin: "bái tiān", english: ["daytime"], vietnamese: ["ban ngày"] },
    { chinese: "百", pinyin: "bǎi", english: ["hundred"], vietnamese: ["bách", "trăm", "rất nhiều"] },
    { chinese: "的", pinyin: "de", english: ["possessive particle", "attributive particle"], vietnamese: ["của", "thuộc về"] },
    { chinese: "工", pinyin: "gōng", english: ["work"], vietnamese: ["công", "công việc"] },
    { chinese: "工人", pinyin: "gōng rén", english: ["worker"], vietnamese: ["công nhân"] },
    { chinese: "左", pinyin: "zuǒ", english: ["left"], vietnamese: ["tả", "trái"] },
    { chinese: "左手", pinyin: "zuǒ shǒu", english: ["left hand"], vietnamese: ["tả thủ", "tay trái"] },
    { chinese: "右", pinyin: "yòu", english: ["right"], vietnamese: ["hữu", "phải"] },
    { chinese: "右手", pinyin: "yòu shǒu", english: ["right hand"], vietnamese: ["hữu thủ", "tay phải"] },
    { chinese: "左右", pinyin: "zuǒ yòu", english: ["around", "about"], vietnamese: ["khoảng", "xấp xỉ"] },
    { chinese: "十", pinyin: "shí", english: ["ten"], vietnamese: ["thập", "mười"] },
    { chinese: "什", pinyin: "shén", english: ["part of the word what"], vietnamese: [""] },
    { chinese: "干", pinyin: "gān", english: ["dry", "to do"], vietnamese: ["can", "khô"] },
    { chinese: "午", pinyin: "wǔ", english: ["noon", "mid-day"], vietnamese: ["ngọ", "buổi trưa"] },
    { chinese: "上午", pinyin: "shàng wǔ", english: ["late morning"], vietnamese: ["buổi sáng"] },
    { chinese: "中午", pinyin: "zhōng wǔ", english: ["noon"], vietnamese: ["giữa trưa"] },
    { chinese: "下午", pinyin: "xià wǔ", english: ["afternoon"], vietnamese: ["buổi chiều"] },
    { chinese: "牛", pinyin: "niú", english: ["beef", "cow"], vietnamese: ["ngưu", "con bò", "con trâu"] },
    { chinese: "生", pinyin: "shēng", english: ["life", "birth"], vietnamese: ["sinh", "sinh đẻ"] },
    { chinese: "八", pinyin: "bā", english: ["eight"], vietnamese: ["bát", "tám"] },
    { chinese: "六", pinyin: "liù", english: ["six"], vietnamese: ["lục", "sáu"] },
    { chinese: "分", pinyin: "fēn", english: ["distinguish","minute", "point"], vietnamese: ["phân", "phân chia", "phần"] },
    { chinese: "十分", pinyin: "shí fēn", english: ["very"], vietnamese: ["rất"] },
    { chinese: "几", pinyin: "jǐ", english: ["how many"], vietnamese: ["kỷ", "bao nhiêu"] },
    { chinese: "儿", pinyin: "ér", english: ["son"], vietnamese: ["nhi", "đứa trẻ"] },
    { chinese: "儿子", pinyin: "ér zi", english: ["son"], vietnamese: ["con trai"] },
    { chinese: "九", pinyin: "jiǔ", english: ["nine"], vietnamese: ["cửu", "chín"] },
    { chinese: "小", pinyin: "xiǎo", english: ["small", "little", "young"], vietnamese: ["tiểu", "nhỏ", "bé", "nhỏ bé"] },
    { chinese: "小心", pinyin: "xiǎo xīn", english: ["careful"], vietnamese: ["cẩn thận"] },
    { chinese: "大小", pinyin: "dà xiǎo", english: ["size"], vietnamese: ["kích cỡ", "kích thước"] },
    { chinese: "从小", pinyin: "cóng xiǎo", english: ["since childhood", "since I was little"], vietnamese: ["từ nhỏ"] },
    { chinese: "少", pinyin: "shǎo", english: ["few (quantity)", "lacking"], vietnamese: ["thiếu", "thiểu", "ít ỏi", "kém", "không đủ"] },
    { chinese: "文", pinyin: "wén", english: ["wrting", "culture"], vietnamese: ["văn"] },
    { chinese: "中文", pinyin: "zhōng wén", english: ["Chinese language"], vietnamese: ["Trung ngữ", "tiếng Trung"] },
    { chinese: "文明", pinyin: "wén míng", english: ["civilization"], vietnamese: ["văn minh"] },
    { chinese: "因", pinyin: "yīn", english: ["because", "reason"], vietnamese: ["nguyên nhân", "nhân"] },
    { chinese: "回", pinyin: "huí", english: ["return", "back"], vietnamese: ["hối", "hồi", "về", "trở về"] },
    { chinese: "四", pinyin: "sì", english: ["four"], vietnamese: ["tứ", "bốn"] },
    { chinese: "不", pinyin: "bù", english: ["not"], vietnamese: ["bất", "không", "chẳng"] },
    { chinese: "不少", pinyin: "bù shǎo", english: ["a lot"], vietnamese: ["nhiều", "không ít"] },
    { chinese: "坏", pinyin: "huài", english: ["bad", "broken", "damaged"], vietnamese: ["hoài", "hoại", "tồi", "kém", "xấu", "hư", "hỏng", "ung"] },
    { chinese: "坏人", pinyin: "huài rén", english: ["bad person"], vietnamese: ["người xấu"] },
    { chinese: "坏了", pinyin: "huài le", english: ["broken", "damaged"], vietnamese: ["hư hỏng"] },
    { chinese: "还", pinyin: "hái", english: ["still", "yet"], vietnamese: ["hoàn", "vẫn còn", "vẫn chưa"] },
    { chinese: "七", pinyin: "qī", english: ["seven"], vietnamese: ["thất", "bảy"] },
    { chinese: "七上八下", pinyin: "qī shàng bā xià", english: ["to feel worried"], vietnamese: ["thấp thỏm", "bồn chồn", "lo lắng", "bất an"] },
    { chinese: "北", pinyin: "běi", english: ["north"], vietnamese: ["bắc", "phía bắc", "phương bắc"] },
    { chinese: "北大", pinyin: "běi dà", english: ["Beijing University"], vietnamese: ["Đại học Bắc Kinh"] },
    { chinese: "花", pinyin: "huā", english: ["flower", "to spend"], vietnamese: ["hoa", "bông hoa"] },
    { chinese: "文化", pinyin: "wén huà", english: ["culture"], vietnamese: ["văn hóa"] },
    { chinese: "乐", pinyin: "lè/yuè", english: ["happy", "music"], vietnamese: ["lạc", "nhạc"] },
    { chinese: "东", pinyin: "dōng", english: ["east"], vietnamese: ["đông", "phía đông", "phương đông"] },
    { chinese: "东北", pinyin: "dōng běi", english: ["northeast"], vietnamese: ["đông bắc"] },
    { chinese: "车", pinyin: "chē", english: ["car", "vehicle"], vietnamese: ["xa", "xe"] },
    { chinese: "上车", pinyin: "shàng chē", english: ["board the vehicle"], vietnamese: ["lên xe"] },
    { chinese: "下车", pinyin: "xià chē", english: ["get off the vehicle"], vietnamese: ["xuống xe"] },
    { chinese: "力", pinyin: "lì", english: ["power", "strength"], vietnamese: ["lực", "sức lực"] },
    { chinese: "人力", pinyin: "rén lì", english: ["manpower"], vietnamese: ["nhân lực"] },
    { chinese: "为", pinyin: "wèi", english: ["for"], vietnamese: ["vị"] },
    { chinese: "为了", pinyin: "wèi le", english: ["in order to"], vietnamese: ["để", "để cho"] },
    { chinese: "因为", pinyin: "yīn wéi", english: ["because"], vietnamese: ["bởi vì"] },
    { chinese: "边", pinyin: "biān", english: ["side"], vietnamese: ["biên", "bên", "phía"] },
    { chinese: "左边", pinyin: "zuǒ biān", english: ["left side"], vietnamese: ["bên trái"] },
    { chinese: "右边", pinyin: "yòu biān", english: ["right side"], vietnamese: ["bên phải"] },
    { chinese: "上边", pinyin: "shàng biān", english: ["top side"], vietnamese: ["bên trên"] },
    { chinese: "下边", pinyin: "xià biān", english: ["bottom side"], vietnamese: ["bên dưới"] },
    { chinese: "女", pinyin: "nǚ", english: ["woman", "female"], vietnamese: ["nữ", "đàn bà", "con gái"] },
    { chinese: "如", pinyin: "rú", english: ["if"], vietnamese: ["như"] },
    { chinese: "好", pinyin: "hǎo", english: ["good", "well", "fine"], vietnamese: ["tốt", "được", "hảo"] },
    { chinese: "好人", pinyin: "hǎo rén", english: ["good person"], vietnamese: ["người tốt"] },
    { chinese: "好的", pinyin: "hǎo de", english: ["OK", "alright"], vietnamese: ["được thôi", "vâng ạ"] },
    { chinese: "不分好坏", pinyin: "bù fēn hǎo huài", english: ["not distinguish good or bad"], vietnamese: ["bất phân tốt xấu"] },
    { chinese: "不如", pinyin: "bù rú", english: ["not as good as", "not equal to"], vietnamese: ["không bằng"] },
    { chinese: "儿女", pinyin: "ér nǚ", english: ["children", "sons and daughters"], vietnamese: ["con cái", "con trai và con gái"] },
    { chinese: "也", pinyin: "yě", english: ["also", "too"], vietnamese: ["cũng", "cũng vậy", "dã"] },
    { chinese: "地", pinyin: "dì", english: ["earth", "ground", "land"], vietnamese: ["đất", "mặt đất", "địa"] },
    { chinese: "地下", pinyin: "dì xià", english: ["underground"], vietnamese: ["dưới lòng đất", "ngầm"] },
    { chinese: "天地", pinyin: "tiān dì", english: ["sky and earth", "the world"], vietnamese: ["trời đất", "thiên địa"] },
    { chinese: "有", pinyin: "yǒu", english: ["to have", "there is/are"], vietnamese: ["hữu", "có"] },
    { chinese: "用", pinyin: "yòng", english: ["to use"], vietnamese: ["dụng", "dùng", "sử dụng"] },
    { chinese: "用心", pinyin: "yòng xīn", english: ["attentive", "diligent", "with care"], vietnamese: ["dụng tâm", "chuyên tâm", "chú tâm", "tận tâm"] },
    { chinese: "不用", pinyin: "bú yòng", english: ["don't need to", "no need"], vietnamese: ["không cần"] },
    { chinese: "有用", pinyin: "yǒu yòng", english: ["useful"], vietnamese: ["hữu dụng", "có ích"] },
    { chinese: "朋", pinyin: "péng", english: ["friend"], vietnamese: ["bằng", "bạn bè"] },
];

// --- DOM ELEMENTS ---
const questionDisplay = document.getElementById('question-display');
const pinyinDisplay = document.getElementById('pinyin-display');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackMessage = document.getElementById('feedback-message');
const scoreDisplay = document.getElementById('score-display');
const switchModeBtn = document.getElementById('switch-mode-btn');

// --- QUIZ STATE ---
let currentWordIndex = 0;
let wrongAttempts = 0;
let score = 0;
let currentMode = 'char_to_meaning';

// --- FUNCTIONS ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadNextWord() {
    if (currentWordIndex >= vocab.length) {
        questionDisplay.textContent = 'Quiz Complete!';
        pinyinDisplay.textContent = `Final Score: ${score} / ${vocab.length}`;
        answerInput.style.display = 'none';
        submitBtn.style.display = 'none';
        return;
    }

    wrongAttempts = 0;
    answerInput.value = '';
    feedbackMessage.textContent = '\u00A0';
    feedbackMessage.className = '';
    pinyinDisplay.textContent = '\u00A0'; // CHANGED: Clear pinyin on new word
    answerInput.focus();

    const currentWord = vocab[currentWordIndex];

    if (currentMode === 'char_to_meaning') {
        questionDisplay.textContent = currentWord.chinese;
        // Pinyin is now hidden on load
        questionDisplay.classList.add('character');
        questionDisplay.classList.remove('meaning');
        answerInput.placeholder = "Type meaning (EN or VI)...";
    } else { // 'meaning_to_char'
        const isEnglish = Math.random() > 0.5;
        const meaning = isEnglish ? currentWord.english[0] : currentWord.vietnamese[0];
        questionDisplay.textContent = meaning;
        // pinyinDisplay is already cleared above, so nothing shows here
        questionDisplay.classList.add('meaning');
        questionDisplay.classList.remove('character');
        answerInput.placeholder = "Type the Chinese characters...";
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;

    const currentWord = vocab[currentWordIndex];
    let isCorrect = false;

    if (currentMode === 'char_to_meaning') {
        const correctAnswers = [...currentWord.english, ...currentWord.vietnamese].map(ans => ans.toLowerCase());
        isCorrect = correctAnswers.includes(userAnswer);
    } else { // 'meaning_to_char'
        isCorrect = (userAnswer === currentWord.chinese);
    }

    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}

function handleCorrectAnswer() {
    score++;
    scoreDisplay.textContent = score;
    feedbackMessage.textContent = 'Correct!';
    feedbackMessage.className = 'feedback-correct';

    const currentWord = vocab[currentWordIndex];
    // ADDED: Show pinyin on correct answer, but only in the right mode
    if (currentMode === 'char_to_meaning') {
        pinyinDisplay.textContent = currentWord.pinyin;
    }
    
    setTimeout(() => {
        currentWordIndex++;
        loadNextWord();
    }, 2400); // Increased delay slightly to allow time to see pinyin
}

function handleWrongAnswer() {
    wrongAttempts++;
    feedbackMessage.className = 'feedback-wrong';
    answerInput.value = '';

    if (wrongAttempts >= 3) {
        const currentWord = vocab[currentWordIndex];
        let correctAnswerText;

        if (currentMode === 'char_to_meaning') {
            // ADDED: Show pinyin after 3 wrong attempts
            pinyinDisplay.textContent = currentWord.pinyin;
            correctAnswerText = `${currentWord.english[0]} / ${currentWord.vietnamese[0]}`;
        } else {
            correctAnswerText = currentWord.chinese;
        }

        feedbackMessage.innerHTML = `The correct answer is: <br><strong>${correctAnswerText}</strong>`;
        
        setTimeout(() => {
            currentWordIndex++;
            loadNextWord();
        }, 6000);

    } else {
        feedbackMessage.textContent = `Incorrect. Try again. (${wrongAttempts}/3)`;
    }
}

function switchMode() {
    if (currentMode === 'char_to_meaning') {
        currentMode = 'meaning_to_char';
        switchModeBtn.textContent = 'Switch to: Character ➔ Meaning';
    } else {
        currentMode = 'char_to_meaning';
        switchModeBtn.textContent = 'Switch to: Meaning ➔ Character';
    }
    startQuiz();
}

function startQuiz() {
    currentWordIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    answerInput.style.display = 'block';
    submitBtn.style.display = 'block';
    shuffleArray(vocab);
    loadNextWord();
}

// --- EVENT LISTENERS ---
submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
switchModeBtn.addEventListener('click', switchMode);

// --- INITIALIZE ---
startQuiz();
