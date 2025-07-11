// --- VOCABULARY LIST ---
const vocab = [
    { chinese: "你好", pinyin: "nǐ hǎo", english: ["hello", "hi"], vietnamese: ["xin chào", "chào bạn"] },
    { chinese: "谢谢", pinyin: "xiè xie", english: ["thank you", "thanks"], vietnamese: ["cảm ơn", "cám ơn"] },
    { chinese: "不客气", pinyin: "bú kè qi", english: ["you're welcome", "you are welcome", "not at all"], vietnamese: ["không có gì", "đừng khách sáo"] },
    { chinese: "再见", pinyin: "zài jiàn", english: ["goodbye", "bye"], vietnamese: ["tạm biệt"] },
    { chinese: "对不起", pinyin: "duì bu qǐ", english: ["sorry", "excuse me"], vietnamese: ["xin lỗi"] },
    { chinese: "没关系", pinyin: "méi guān xi", english: ["it's ok", "it doesn't matter", "no problem"], vietnamese: ["không có gì", "không sao"] },
    { chinese: "是", pinyin: "shì", english: ["yes", "is", "are", "am"], vietnamese: ["là", "phải", "đúng"] },
    { chinese: "我", pinyin: "wǒ", english: ["i", "me"], vietnamese: ["tôi", "tớ"] },
    { chinese: "我的", pinyin: "wǒ de", english: ["my", "mine"], vietnamese: ["của tôi"] },
    { chinese: "你", pinyin: "nǐ", english: ["you"], vietnamese: ["bạn", "cậu"] },
    { chinese: "你的", pinyin: "nǐ de", english: ["your", "yours"], vietnamese: ["của bạn"] },
    { chinese: "他", pinyin: "tā", english: ["he", "him"], vietnamese: ["anh ấy", "cậu ấy", "ông ấy"] },
    { chinese: "他的", pinyin: "tā de", english: ["his"], vietnamese: ["của anh ấy"] },
    { chinese: "她", pinyin: "tā", english: ["she", "her"], vietnamese: ["cô ấy", "chị ấy", "bà ấy"] },
    { chinese: "她的", pinyin: "tā de", english: ["her", "hers"], vietnamese: ["của cô ấy"] },
    { chinese: "我们", pinyin: "wǒ men", english: ["we", "us"], vietnamese: ["chúng tôi", "chúng ta"] },
    { chinese: "爱", pinyin: "ài", english: ["love", "to love"], vietnamese: ["yêu/thích", "ái"] },
    { chinese: "家", pinyin: "jiā", english: ["home", "family"], vietnamese: ["nhà/gia đình", "gia"] },
    { chinese: "吃", pinyin: "chī", english: ["eat", "to eat"], vietnamese: ["ăn", "thực"] },
    { chinese: "人", pinyin: "rén", english: ["human", "man"], vietnamese: ["người/con người", "nhân"] },
    { chinese: "从", pinyin: "cóng", english: ["from"], vietnamese: ["từ (từ khi/từ đó)", "từ", "tòng", "tùng"] },
    { chinese: "个", pinyin: "ge", english: ["universal measured word"], vietnamese: ["từ dùng để đếm", "cái", "quả", "con"] },
    { chinese: "个人", pinyin: "gè rén", english: ["individual", "personal"], vietnamese: ["cá nhân/riêng tư/một mình", "cá nhân"] },
    { chinese: "大", pinyin: "dà", english: ["big"], vietnamese: ["to/lớn", "đại"] },
    { chinese: "天", pinyin: "tiān", english: ["sky", "day"], vietnamese: ["trời/ngày", "thiên"] },
    { chinese: "太", pinyin: "tài", english: ["too"], vietnamese: ["quá/lắm/rất", "thái"] },
    { chinese: "上", pinyin: "shàng", english: ["up", "above", "on", "over"], vietnamese: ["trên", "thượng"] },
    { chinese: "下", pinyin: "xià", english: ["down", "below", "under"], vietnamese: ["dưới", "hạ"] },
    { chinese: "中", pinyin: "zhōng", english: ["middle", "center"], vietnamese: ["giữa/trung", "trung"] },
    { chinese: "了", pinyin: "le", english: ["common sentence particle"], vietnamese: ["xong/hết/đã/rồi", "liễu"] },
    { chinese: "子", pinyin: "zǐ/zi", english: ["child", "suffix character"], vietnamese: ["con/cái", "tử"] },
    { chinese: "字", pinyin: "zì", english: ["character", "letter"], vietnamese: ["chữ", "tự"] },
    { chinese: "口", pinyin: "kǒu", english: ["mouth", "opening"], vietnamese: ["miệng/mồm/cửa", "khẩu"] },
    { chinese: "人口", pinyin: "rén kǒu ", english: ["population"], vietnamese: ["dân số", "nhân khẩu"] },
    { chinese: "手", pinyin: "shǒu", english: ["hand"], vietnamese: ["tay", "thủ"] },
    { chinese: "心", pinyin: "xīn", english: ["heart"], vietnamese: ["con tim/trái tim/lòng", "tâm"] },
    { chinese: "中心", pinyin: "zhōng xīn", english: ["middle", "center"], vietnamese: ["trung tâm"] },
    { chinese: "心中", pinyin: "xīn zhōng", english: ["in the heart"], vietnamese: ["trong tim/trong trái tim", "trong tim"] },
    { chinese: "开心", pinyin: "kāi xīn", english: ["happy"], vietnamese: ["vui vẻ/hạnh phúc", "vui vẻ"] },
    { chinese: "日", pinyin: "rì", english: ["sun", "day"], vietnamese: ["mặt trời/ngày", "nhật"] },
    { chinese: "月", pinyin: "yuè", english: ["moon", "month"], vietnamese: ["mặt trăng/tháng", "nguyệt"] },
    { chinese: "明", pinyin: "míng", english: ["bright", "clear"], vietnamese: ["sáng", "minh"] },
    { chinese: "明天", pinyin: "míng tiān", english: ["tomorrow"], vietnamese: ["ngày mai"] },
    { chinese: "白", pinyin: "bái", english: ["white"], vietnamese: ["màu trắng", "bạch"] },
    { chinese: "明白", pinyin: "míng bái", english: ["understand", "to understand"], vietnamese: ["hiểu", "minh bạch"] },
    { chinese: "白天", pinyin: "bái tiān", english: ["daytime"], vietnamese: ["ban ngày"] },
    { chinese: "百", pinyin: "bǎi", english: ["hundred"], vietnamese: ["trăm/rất nhiều", "bách"] },
    { chinese: "的", pinyin: "de", english: ["possessive particle", "attributive particle"], vietnamese: ["của/thuộc về", "của"] },
    { chinese: "工", pinyin: "gōng", english: ["work"], vietnamese: ["công/công việc", "công"] },
    { chinese: "工人", pinyin: "gōng rén", english: ["worker"], vietnamese: ["công nhân"] },
    { chinese: "左", pinyin: "zuǒ", english: ["left"], vietnamese: ["trái (bên)", "tả"] },
    { chinese: "左手", pinyin: "zuǒ shǒu", english: ["left hand"], vietnamese: ["tay trái", "tả thủ"] },
    { chinese: "右", pinyin: "yòu", english: ["right"], vietnamese: ["phải (bên)", "hữu"] },
    { chinese: "右手", pinyin: "yòu shǒu", english: ["right hand"], vietnamese: ["tay phải", "hữu thủ"] },
    { chinese: "左右", pinyin: "zuǒ yòu", english: ["around", "about"], vietnamese: ["khoảng/xấp xỉ", "khoảng"] },
    { chinese: "十", pinyin: "shí", english: ["ten"], vietnamese: ["số mười", "thập"] },
    { chinese: "什么", pinyin: "shén me", english: ["what"], vietnamese: ["cái gì", "gì"] },
    { chinese: "干", pinyin: "gān", english: ["dry", "to do"], vietnamese: ["khô", "can"] },
    { chinese: "午", pinyin: "wǔ", english: ["noon", "mid-day"], vietnamese: ["trưa", "ngọ"] },
    { chinese: "上午", pinyin: "shàng wǔ", english: ["late morning"], vietnamese: ["buổi sáng"] },
    { chinese: "中午", pinyin: "zhōng wǔ", english: ["noon"], vietnamese: ["giữa trưa"] },
    { chinese: "下午", pinyin: "xià wǔ", english: ["afternoon"], vietnamese: ["buổi chiều"] },
    { chinese: "牛", pinyin: "niú", english: ["beef", "cow"], vietnamese: ["con bò/con trâu", "ngưu"] },
    { chinese: "生", pinyin: "shēng", english: ["life", "birth"], vietnamese: ["sinh/sinh đẻ", "sinh"] },
    { chinese: "八", pinyin: "bā", english: ["eight"], vietnamese: ["số tám", "bát"] },
    { chinese: "六", pinyin: "liù", english: ["six"], vietnamese: ["sáu", "lục"] },
    { chinese: "分", pinyin: "fēn", english: ["distinguish","minute", "point"], vietnamese: ["phân/phân biệt/phần", "phân"] },
    { chinese: "十分", pinyin: "shí fēn", english: ["very"], vietnamese: ["rất"] },
    { chinese: "几", pinyin: "jǐ", english: ["how many"], vietnamese: ["bao nhiêu (<10)", "kỷ"] },
    { chinese: "儿", pinyin: "ér", english: ["son"], vietnamese: ["đứa trẻ", "nhi"] },
    { chinese: "儿子", pinyin: "ér zi", english: ["son"], vietnamese: ["con trai"] },
    { chinese: "九", pinyin: "jiǔ", english: ["nine"], vietnamese: ["số chín", "cửu"] },
    { chinese: "小", pinyin: "xiǎo", english: ["small", "little", "young"], vietnamese: ["nhỏ/bé", "tiểu"] },
    { chinese: "小心", pinyin: "xiǎo xīn", english: ["careful"], vietnamese: ["cẩn thận"] },
    { chinese: "大小", pinyin: "dà xiǎo", english: ["size"], vietnamese: ["kích cỡ", "kích thước"] },
    { chinese: "从小", pinyin: "cóng xiǎo", english: ["since childhood", "since I was little"], vietnamese: ["từ nhỏ"] },
    { chinese: "少", pinyin: "shǎo", english: ["few (quantity)", "lacking"], vietnamese: ["ít/kém/không đủ", "thiểu", "thiếu"] },
    { chinese: "文", pinyin: "wén", english: ["wrting", "culture"], vietnamese: ["văn"] },
    { chinese: "中文", pinyin: "zhōng wén", english: ["Chinese language"], vietnamese: ["tiếng Trung", "Trung ngữ"] },
    { chinese: "文明", pinyin: "wén míng", english: ["civilization"], vietnamese: ["văn minh"] },
    { chinese: "因", pinyin: "yīn", english: ["because", "reason"], vietnamese: ["nguyên nhân", "nhân"] },
    { chinese: "回", pinyin: "huí", english: ["return", "back"], vietnamese: ["về/trở về", "hối", "hồi"] },
    { chinese: "四", pinyin: "sì", english: ["four"], vietnamese: ["số bốn", "tứ"] },
    { chinese: "不", pinyin: "bù", english: ["not"], vietnamese: ["không/chẳng", "bất"] },
    { chinese: "不少", pinyin: "bù shǎo", english: ["a lot"], vietnamese: ["nhiều/không ít", "nhiều"] },
    { chinese: "坏", pinyin: "huài", english: ["bad", "broken", "damaged"], vietnamese: ["tồi/kém/xấu/hư/hỏng/ung", "hoại"] },
    { chinese: "坏人", pinyin: "huài rén", english: ["bad person"], vietnamese: ["người xấu"] },
    { chinese: "坏了", pinyin: "huài le", english: ["broken", "damaged"], vietnamese: ["hư hỏng"] },
    { chinese: "还", pinyin: "hái", english: ["still", "yet"], vietnamese: ["vẫn còn/vẫn chưa", "hoàn"] },
    { chinese: "七", pinyin: "qī", english: ["seven"], vietnamese: ["số bảy", "thất"] },
    { chinese: "七上八下", pinyin: "qī shàng bā xià", english: ["to feel worried"], vietnamese: ["thấp thỏm/bồn chồn/lo lắng/bất an", "bất an", "lo lắng"] },
    { chinese: "北", pinyin: "běi", english: ["north"], vietnamese: ["phía bắc/phương bắc", "bắc"] },
    { chinese: "北大", pinyin: "běi dà", english: ["Beijing university"], vietnamese: ["Đại học Bắc Kinh", "Bắc Đại"] },
    { chinese: "花", pinyin: "huā", english: ["flower", "to spend"], vietnamese: ["hoa/bông hoa", "hoa"] },
    { chinese: "文化", pinyin: "wén huà", english: ["culture"], vietnamese: ["văn hoá"] },
    { chinese: "乐", pinyin: "lè", english: ["happy"], vietnamese: ["vui", "lạc"] },
    { chinese: "乐", pinyin: "yuè", english: ["music"], vietnamese: ["âm nhạc", "nhạc"] },
    { chinese: "东", pinyin: "dōng", english: ["east"], vietnamese: ["phía đông/phương đông", "đông"] },
    { chinese: "东北", pinyin: "dōng běi", english: ["northeast"], vietnamese: ["đông bắc"] },
    { chinese: "车", pinyin: "chē", english: ["car", "vehicle"], vietnamese: ["xe/xe cộ", "xa"] },
    { chinese: "上车", pinyin: "shàng chē", english: ["board the vehicle"], vietnamese: ["lên xe"] },
    { chinese: "下车", pinyin: "xià chē", english: ["get off the vehicle"], vietnamese: ["xuống xe"] },
    { chinese: "力", pinyin: "lì", english: ["power", "strength"], vietnamese: ["lực"] },
    { chinese: "人力", pinyin: "rén lì", english: ["manpower"], vietnamese: ["nhân lực"] },
    { chinese: "为", pinyin: "wèi", english: ["for"], vietnamese: ["vị"] },
    { chinese: "为了", pinyin: "wèi le", english: ["in order to"], vietnamese: ["để/để cho", "để"] },
    { chinese: "因为", pinyin: "yīn wéi", english: ["because"], vietnamese: ["bởi vì"] },
    { chinese: "边", pinyin: "biān", english: ["side"], vietnamese: ["bên/phía", "biên"] },
    { chinese: "左边", pinyin: "zuǒ biān", english: ["left side"], vietnamese: ["bên trái"] },
    { chinese: "右边", pinyin: "yòu biān", english: ["right side"], vietnamese: ["bên phải"] },
    { chinese: "上边", pinyin: "shàng biān", english: ["top side"], vietnamese: ["bên trên"] },
    { chinese: "下边", pinyin: "xià biān", english: ["bottom side"], vietnamese: ["bên dưới"] },
    { chinese: "女", pinyin: "nǚ", english: ["woman", "female"], vietnamese: ["nữ/đàn bà/con gái", "nữ"] },
    { chinese: "女儿", pinyin: "nǚ ér", english: ["daughter"], vietnamese: ["con gái"] },
    { chinese: "如", pinyin: "rú", english: ["if"], vietnamese: ["như"] },
    { chinese: "好", pinyin: "hǎo", english: ["good", "well", "fine"], vietnamese: ["tốt/được", "hảo"] },
    { chinese: "好人", pinyin: "hǎo rén", english: ["good person"], vietnamese: ["người tốt"] },
    { chinese: "好的", pinyin: "hǎo de", english: ["OK", "alright"], vietnamese: ["OK/được thôi"] },
    { chinese: "不分好坏", pinyin: "bù fēn hǎo huài", english: ["not distinguish good or bad"], vietnamese: ["bất phân tốt xấu"] },
    { chinese: "不如", pinyin: "bù rú", english: ["not as good as", "not equal to"], vietnamese: ["không bằng"] },
    { chinese: "儿女", pinyin: "ér nǚ", english: ["children", "sons and daughters"], vietnamese: ["con cái"] },
    { chinese: "也", pinyin: "yě", english: ["also", "too"], vietnamese: ["cũng/cũng vậy", "dã"] },
    { chinese: "地", pinyin: "dì", english: ["earth", "ground", "land"], vietnamese: ["đất/mặt đất", "địa"] },
    { chinese: "地下", pinyin: "dì xià", english: ["underground"], vietnamese: ["dưới đất/ngầm", "ngầm"] },
    { chinese: "天地", pinyin: "tiān dì", english: ["sky and earth", "the world"], vietnamese: ["trời đất", "thiên địa"] },
    { chinese: "有", pinyin: "yǒu", english: ["to have", "there is/are"], vietnamese: ["có/sở hữu", "hữu"] },
    { chinese: "用", pinyin: "yòng", english: ["to use"], vietnamese: ["dùng/sử dụng", "dụng"] },
    { chinese: "用心", pinyin: "yòng xīn", english: ["attentive", "diligent", "with care"], vietnamese: ["chuyên tâm/chú tâm/tận tâm", "tận tâm"] },
    { chinese: "不用", pinyin: "bú yòng", english: ["don't need to", "no need"], vietnamese: ["không cần"] },
    { chinese: "有用", pinyin: "yǒu yòng", english: ["useful"], vietnamese: ["có ích", "hữu dụng"] },
    { chinese: "朋", pinyin: "péng", english: ["friend"], vietnamese: ["bằng (bạn bè)", "bằng"] },
    { chinese: "门", pinyin: "mén", english: ["door", "gate"], vietnamese: ["cửa/cổng", "môn"] },
    { chinese: "门口", pinyin: "mén kǒu", english: ["doorway"], vietnamese: ["cửa/cổng", "cổng"] },
    { chinese: "开门", pinyin: "kāi mén", english: ["open the door"], vietnamese: ["mở cửa"] },
    { chinese: "关门", pinyin: "guān mén", english: ["door", "gate"], vietnamese: ["đóng cửa"] },
    { chinese: "们", pinyin: "men", english: ["pluralizing suffix"], vietnamese: ["bọn/các/chúng", "môn"] },
    { chinese: "你们", pinyin: "nǐ men", english: ["you"], vietnamese: ["các bạn"] },
    { chinese: "他们", pinyin: "tā men", english: ["they", "them"], vietnamese: ["họ/bọn chúng/bọn họ", "họ"] },
    { chinese: "问", pinyin: "wèn", english: ["ask", "to ask"], vietnamese: ["hỏi", "vấn"] },
    { chinese: "间", pinyin: "jiān", english: ["room"], vietnamese: ["phòng/khoảng không gian", "gian"] },
    { chinese: "中间", pinyin: "zhōng jiān", english: ["middle", "in between"], vietnamese: ["trung gian/trung tâm/ở giữa", "trung gian"] },
    { chinese: "早", pinyin: "zǎo", english: ["morning", "early"], vietnamese: ["sớm (tảo)", "tảo"] },
    { chinese: "早日", pinyin: "zǎo rì", english: ["soon"], vietnamese: ["sớm"] },
    { chinese: "早上好", pinyin: "zǎo shàng hǎo", english: ["good morning"], vietnamese: ["chào buổi sáng"] },
    { chinese: "但", pinyin: "dàn", english: ["but"], vietnamese: ["nhưng/chỉ/hễ", "đãn"] },
    { chinese: "只", pinyin: "zhǐ", english: ["only"], vietnamese: ["chỉ/mỗi một", "chỉ"] },
    { chinese: "认", pinyin: "rèn", english: ["recognize", "to recognize"], vietnamese: ["nhận"] },
    { chinese: "认为", pinyin: "rèn wéi", english: ["think", "to think"], vietnamese: ["cho rằng"] },
    { chinese: "识", pinyin: "shí", english: ["know", "to know"], vietnamese: ["biết", "thức"] },
    { chinese: "认识", pinyin: "rèn shi", english: ["know", "to know", "regconize", "to recognize"], vietnamese: ["nhận biết/quen biết", "nhận thức"] },
    { chinese: "不识字", pinyin: "bù shí zì", english: ["illiterate"], vietnamese: ["không biết chữ"] },
    { chinese: "只好", pinyin: "zhǐ hǎo", english: ["have no choice"], vietnamese: ["đành phải/buộc phải", "đành phải", "buộc phải"] },
    { chinese: "水", pinyin: "shuǐ", english: ["water"], vietnamese: ["nước", "thuỷ"] },
    { chinese: "火", pinyin: "huǒ", english: ["fire"], vietnamese: ["lửa", "hoả"] },
    { chinese: "火车", pinyin: "huǒ chē", english: ["train"], vietnamese: ["tàu lửa", "xe lửa"] },
    { chinese: "休", pinyin: "xiū", english: ["rest", "to rest"], vietnamese: ["nghỉ/nghỉ ngơi", "hưu"] },
    { chinese: "午休", pinyin: "wǔ xiū", english: ["mid-day nap"], vietnamese: ["nghỉ trưa", "ngủ trưa"] },
    { chinese: "末", pinyin: "mò", english: ["end", "the end"], vietnamese: ["cuối/cuối cùng", "mạt"] },
    { chinese: "月末", pinyin: "yuè mò", english: ["the end of the month"], vietnamese: ["cuối tháng"] },
    { chinese: "本", pinyin: "běn", english: ["origin", "root", "measure word for book"], vietnamese: ["gốc/nguồn gốc/vốn có/từ trước", "bản", "bổn"] },
    { chinese: "日本", pinyin: "rì běn", english: ["Japan"], vietnamese: ["Nhật Bản"] },
    { chinese: "本人", pinyin: "běn rén", english: ["oneself", "my self"], vietnamese: ["bản thân/chính mình", "bản thân"] },
    { chinese: "体", pinyin: "tǐ", english: ["body"], vietnamese: ["thân/mình/hình thể/dạng", "thể"] },
    { chinese: "体力", pinyin: "tǐ lì", english: ["physical strength"], vietnamese: ["thể lực"] },
    { chinese: "田", pinyin: "tián", english: ["field"], vietnamese: ["ruộng/đồng", "điền"] },
    { chinese: "电", pinyin: "diàn", english: ["electricity"], vietnamese: ["điện"] },
    { chinese: "果", pinyin: "guǒ", english: ["fruit"], vietnamese: ["quả/trái", "quả"] },
    { chinese: "水果", pinyin: "shuǐ guǒ", english: ["fruit"], vietnamese: ["trái cây", "hoa quả"] },
    { chinese: "如果", pinyin: "rú guǒ", english: ["if"], vietnamese: ["nếu như", "nếu mà"] },
    { chinese: "里", pinyin: "lǐ", english: ["in", "inside"], vietnamese: ["trong (phía)", "lí", "lý"] },
    { chinese: "心里", pinyin: "xīn lǐ", english: ["in heart", "in mind"], vietnamese: ["trong lòng/trong tâm trí", "trong lòng"] },
    { chinese: "里边", pinyin: "lǐ biān", english: ["inside"], vietnamese: ["bên trong", "phía trong"] },
    { chinese: "平", pinyin: "píng", english: ["even", "equal", "level", "flat"], vietnamese: ["bình/biền/bằng", "bình"] },
    { chinese: "水平", pinyin: "shuǐ píng", english: ["level", "standard"], vietnamese: ["mức độ/trình độ/tiêu chuẩn", "mức độ", "trình độ", "tiêu chuẩn"] },
    { chinese: "半", pinyin: "bàn", english: ["half"], vietnamese: ["một nửa", "bán"] },
    { chinese: "半天", pinyin: "bàn tiān", english: ["half day", "a long time"], vietnamese: ["nửa ngày/một buổi/một lúc lâu", "nửa ngày", "một lúc lâu"] },
    { chinese: "来", pinyin: "lái", english: ["come", "to come"], vietnamese: ["đến", "lai"] },
    { chinese: "回来", pinyin: "huí lái", english: ["come back"], vietnamese: ["quay về/trở lại/quay lại", "quay về", "trở lại", "quay về"] },
    { chinese: "上来", pinyin: "shàng lái", english: ["come up"], vietnamese: ["đi lên"] },
    { chinese: "下来", pinyin: "xià lái", english: ["come down"], vietnamese: ["đi xuống"] },
    { chinese: "从来", pinyin: "cóng lái", english: ["always"], vietnamese: ["luôn luôn/từ trước đến nay", "luôn luôn"] },
    { chinese: "本来", pinyin: "běn lái", english: ["originally"], vietnamese: ["vốn dĩ/ban đầu/lúc đầu/trước đây", "vốn dĩ", "ban đầu"] },
    { chinese: "米", pinyin: "mǐ", english: ["rice"], vietnamese: ["gạo", "mễ"] },
    { chinese: "去", pinyin: "qù", english: ["go", "to go", "past"], vietnamese: ["đi/đã qua", "khứ"] },
    { chinese: "回去", pinyin: "huí qù", english: ["go back"], vietnamese: ["đi về/trở về", "đi về", "trở về"] },
    { chinese: "法", pinyin: "fǎ", english: ["method", "rule", "way"], vietnamese: ["phép tắc/khuôn mẫu/nguyên tắc", "pháp"] },
    { chinese: "土", pinyin: "tǔ", english: ["earth"], vietnamese: ["đất", "thổ"] },
    { chinese: "又", pinyin: "yòu", english: ["again"], vietnamese: ["lại/lại nữa", "hữu"] },
    { chinese: "友", pinyin: "yǒu", english: ["friend"], vietnamese: ["bạn/bạn bè", "hữu"] },
    { chinese: "朋友", pinyin: "péng you", english: ["friend"], vietnamese: ["bằng hữu/bạn bè", "bằng hữu", "bạn bè"] },
    { chinese: "友好", pinyin: "yǒu hǎo", english: ["friendly"], vietnamese: ["thân thiện/hoà hảo", "hữu hảo"] },
    { chinese: "男", pinyin: "nán", english: ["man", "male"], vietnamese: ["nam/đàn ông/con trai", "nam"] },
    { chinese: "男友", pinyin: "nán yǒu", english: ["boyfriend"], vietnamese: ["bạn trai"] },
    { chinese: "女友", pinyin: "nǚ yǒu", english: ["girlfriend"], vietnamese: ["bạn gái"] },
    { chinese: "发", pinyin: "fā/fà/fa", english: ["to send", "hair"], vietnamese: ["gửi đi/tóc", "phất", "phát"] },
    { chinese: "才", pinyin: "cái", english: ["ability", "talent", "just"], vietnamese: ["tài/tài năng", "tài"] },
    { chinese: "有才", pinyin: "yǒu cái", english: ["talented"], vietnamese: ["có tài"] },
    { chinese: "天才", pinyin: "tiān cái", english: ["genius"], vietnamese: ["thiên tài"] },
    { chinese: "长", pinyin: "cháng", english: ["long"], vietnamese: ["dài/lâu", "trường", "tràng"] },
    { chinese: "长", pinyin: "zhǎng", english: ["grow", "to grow"], vietnamese: ["trưởng/mọc", "trưởng"] },
    { chinese: "长大", pinyin: "zhǎng dà", english: ["to grow up"], vietnamese: ["trưởng thành/lớn lên/phát triển", "trưởng thành", "lớn lên"] },
    { chinese: "衣", pinyin: "yī", english: ["clothes", "clothing"], vietnamese: ["áo (quần áo)", "y"] },
    { chinese: "大衣", pinyin: "dà yī", english: ["coat"], vietnamese: ["áo khoác", "áo choàng"] },
    { chinese: "飞", pinyin: "fēi", english: ["to fly"], vietnamese: ["bay", "phi"] },
    { chinese: "飞机", pinyin: "fēi jī", english: ["airplane"], vietnamese: ["máy bay", "phi cơ"] },
    { chinese: "气", pinyin: "qì", english: ["air", "gas"], vietnamese: ["khí/hơi", "khí"] },
    { chinese: "天气", pinyin: "tiān qì", english: ["weather"], vietnamese: ["thời tiết", "khí trời", "tiết trời"] },
    { chinese: "生气", pinyin: "shēng qì", english: ["angry", "to get angry"], vietnamese: ["tức giận", "giận"] },
    { chinese: "力气", pinyin: "lì qi", english: ["strength"], vietnamese: ["sức lực", "sức mạnh"] },
    { chinese: "每", pinyin: "měi", english: ["every", "each"], vietnamese: ["mỗi"] },
    { chinese: "每天", pinyin: "měi tiān", english: ["everyday"], vietnamese: ["mỗi ngày", "hàng ngày"] },
    { chinese: "五", pinyin: "wǔ", english: ["five"], vietnamese: ["số năm", "ngũ"] },
    { chinese: "语", pinyin: "yǔ", english: ["language"], vietnamese: ["ngữ (ngôn ngữ/lời lẽ)", "ngữ"] },
    { chinese: "语法", pinyin: "yǔ fǎ", english: ["grammar"], vietnamese: ["ngữ pháp"] },
    { chinese: "语言", pinyin: "yǔ yán", english: ["language"], vietnamese: ["ngôn ngữ"] },
    { chinese: "口语", pinyin: "kǒu yǔ", english: ["spoken language"], vietnamese: ["khẩu ngữ", "văn nói"] },
    { chinese: "语气", pinyin: "yǔ qì", english: ["tone", "manner of speaking"], vietnamese: ["ngữ khí/giọng điệu/khẩu khí", "ngữ khí"] },
    { chinese: "年", pinyin: "nián", english: ["year"], vietnamese: ["năm (thời gian)", "niên"] },
    { chinese: "去年", pinyin: "qù nián", english: ["last year"], vietnamese: ["năm ngoái", "năm trước"] },
    { chinese: "明年", pinyin: "míng nián", english: ["next year"], vietnamese: ["năm sau", "năm tới"] },
    { chinese: "中年", pinyin: "zhōng nián", english: ["middle-age"], vietnamese: ["trung niên"] },
    { chinese: "汉", pinyin: "hàn", english: ["Han ethnic group"], vietnamese: ["hán", "người Hán"] },
    { chinese: "汉字", pinyin: "hàn zì", english: ["Chinese character"], vietnamese: ["Hán tự"] },
    { chinese: "汉语", pinyin: "hàn yǔ", english: ["Chinese language"], vietnamese: ["Hán ngữ", "tiếng Trung Quốc", "tiếng Hán"] },
    { chinese: "没", pinyin: "méi", english: ["have not", "did not"], vietnamese: ["không", "một"] },
    { chinese: "没有", pinyin: "méi yǒu", english: ["don’t have", "haven’t"], vietnamese: ["không có", "chưa từng"] },
    { chinese: "没用", pinyin: "méi yòng", english: ["useless"], vietnamese: ["vô dụng", " không có tác dụng"] },
    { chinese: "没什么", pinyin: "méi shén me", english: ["It doesn’t matter", "It’s nothing", "That’s all right"], vietnamese: ["không sao", "không quan trọng"] },
    { chinese: "机", pinyin: "jī", english: ["machine"], vietnamese: ["máy/máy móc", "cơ"] },
    { chinese: "手机", pinyin: "shǒu jī", english: ["cell phone", "mobile phone"], vietnamese: ["điện thoại di động"] },
    { chinese: "这", pinyin: "zhè/zhèi", english: ["this"], vietnamese: ["này"] },
    { chinese: "这里", pinyin: "zhè lǐ", english: ["here"], vietnamese: ["đây", "tại đây", "nơi này"] },
    { chinese: "那", pinyin: "nà/nèi", english: ["that"], vietnamese: ["đó"] },
    { chinese: "那里", pinyin: "nà lǐ", english: ["there"], vietnamese: ["chỗ đó", "nơi đó"] },
    { chinese: "哪", pinyin: "nǎ/něi", english: ["which"], vietnamese: ["gì", "nào"] },
    { chinese: "哪里", pinyin: "nǎ lǐ", english: ["where"], vietnamese: ["đâu"] },
    { chinese: "马", pinyin: "mǎ", english: ["horse"], vietnamese: ["con ngựa", "mã"] },
    { chinese: "马力", pinyin: "mǎ lì", english: ["horsepower"], vietnamese: ["mã lực"] },
    { chinese: "马上", pinyin: "mǎ shàng", english: ["immediately", "right away"], vietnamese: ["ngay lập tức", "ngay"] },
    { chinese: "吗", pinyin: "ma", english: ["question particle"], vietnamese: ["không/gì", "không", "gì"] },
    { chinese: "妈", pinyin: "mā", english: ["mom", "mother"], vietnamese: ["mẹ", "má"] },
    { chinese: "妈妈", pinyin: "mā ma", english: ["mother", "mom"], vietnamese: ["mẹ", "má"] },
    { chinese: "开", pinyin: "kāi", english: ["open", "to open"], vietnamese: ["mở", "khai"] },
    { chinese: "开车", pinyin: "kāi chē", english: ["to drive", "drive a vehicle"], vietnamese: ["lái xe"] },
    { chinese: "进", pinyin: "jìn", english: ["enter", "to enter"], vietnamese: ["tiến/tấn/vào", "tiến", "tấn"] },
    { chinese: "进来", pinyin: "jìn lái", english: ["come in"], vietnamese: ["vào đây"] },
    { chinese: "进去", pinyin: "jìn qù", english: ["go in"], vietnamese: ["đi vào"] },
    { chinese: "出", pinyin: "chū", english: ["exit", "go out"], vietnamese: ["ra/xuất", "xuất"] },
    { chinese: "出去", pinyin: "chū qù", english: ["go out"], vietnamese: ["đi ra"] },
    { chinese: "出来", pinyin: "chū lái", english: ["come out"], vietnamese: ["ra đây"] },
    { chinese: "出口", pinyin: "chū kǒu", english: ["exit", "export"], vietnamese: ["lối ra/cửa ra", "xuất khẩu"] },
    { chinese: "出发", pinyin: "chū fā", english: ["set off", "start off"], vietnamese: ["xuất phát", "ra đi"] },
    { chinese: "习", pinyin: "xí", english: ["to practice", "custom", "be used to"], vietnamese: ["tập/luyện tập/thói quen/quen", "tập", "quen"] },
    { chinese: "冰", pinyin: "bīng", english: ["ice"], vietnamese: ["băng/đá", "băng"] },
    { chinese: "次", pinyin: "cì", english: ["time"], vietnamese: ["lần/thứ/lượt", "lần", "thứ"] },
    { chinese: "下次", pinyin: "xià cì", english: ["next time"], vietnamese: ["lần sau"] },
    { chinese: "上次", pinyin: "shàng cì", english: ["last time"], vietnamese: ["lần trước"] },
    { chinese: "它", pinyin: "tā", english: ["it"], vietnamese: ["nó"] },
    { chinese: "比", pinyin: "bǐ", english: ["compare"], vietnamese: ["so sánh/đọ/bì", "bì"] },
    { chinese: "比如", pinyin: "bǐ rú", english: ["for example"], vietnamese: ["ví dụ"] },
    { chinese: "呢", pinyin: "ne", english: ["particle for follow-up question"], vietnamese: ["biểu thị nghi vấn/nhỉ/hả", "nhỉ", "hả"] },
    { chinese: "名", pinyin: "míng", english: ["name", "fame"], vietnamese: ["tên/danh", "danh", "tên"] },
    { chinese: "名字", pinyin: "míng zi", english: ["name"], vietnamese: ["tên (2 từ)", "tên"] },
    { chinese: "有名", pinyin: "yǒu míng", english: ["famous"], vietnamese: ["có tiếng", "nổi tiếng"] },
    { chinese: "出名", pinyin: "chū míng", english: ["famous", "well-known"], vietnamese: ["nổi tiếng/nổi danh", "nổi tiếng", "nổi danh"] },
    { chinese: "外", pinyin: "wài", english: ["outside", "foreign"], vietnamese: ["ngoài/ngoại", "ngoại", "ngoài"] },
    { chinese: "外边", pinyin: "wài biān", english: ["outside"], vietnamese: ["bên ngoài"] },
    { chinese: "外语", pinyin: "wài yǔ", english: ["foreign language"], vietnamese: ["ngoại ngữ"] },
    { chinese: "外衣", pinyin: "wài yī", english: ["jacket", "coat"], vietnamese: ["áo khoác"] },
    { chinese: "多", pinyin: "duō", english: ["many", "much", "a lot", "how"], vietnamese: ["nhiều/bao nhiêu", "đa"] },
    { chinese: "多少", pinyin: "duō shǎo", english: ["how many", "how much"], vietnamese: ["bao nhiêu"] },
    { chinese: "岁", pinyin: "suì", english: ["year (age)"], vietnamese: ["tuổi", "tuế"] },
    { chinese: "岁月", pinyin: "suì yuè", english: ["years"], vietnamese: ["năm tháng/thời gian", "tuế nguyệt"] },
    { chinese: "死", pinyin: "sǐ", english: ["die", "death"], vietnamese: ["chết", "tử"] },
    { chinese: "久", pinyin: "jiǔ", english: ["long (time)"], vietnamese: ["lâu", "cửu"] },
    { chinese: "长久", pinyin: "cháng jiǔ", english: ["for a long time"], vietnamese: ["lâu dài/dài lâu/bền lâu", "trường cửu"] },
    { chinese: "好久不见", pinyin: "hǎo jiǔ bú jiàn", english: ["long time no see"], vietnamese: ["lâu rồi không gặp"] },
    { chinese: "兴", pinyin: "xīng/xìng", english: ["excitement", "interest"], vietnamese: ["hứng khởi/thích thú", "hứng", "hưng"] },
    { chinese: "高兴", pinyin: "gāo xìng", english: ["happy", "glad"], vietnamese: ["vui vẻ/hạnh phúc/cao hứng", "cao hứng"] },
    { chinese: "应", pinyin: "yīng", english: ["should"], vietnamese: ["nên/cần/phải", "ưng", "nên"] },
    { chinese: "应该", pinyin: "yīng gāi", english: ["should", "ought to"], vietnamese: ["nên/cần phải (2 từ)", "nên"] },
    { chinese: "买", pinyin: "mǎi", english: ["buy"], vietnamese: ["mua/sắm/tậu", "mãi", "mua"] },
    { chinese: "头", pinyin: "tóu", english: ["head"], vietnamese: ["đầu/cái đầu", "đầu"] },
    { chinese: "店", pinyin: "diàn", english: ["store", "shop"], vietnamese: ["cửa hàng/tiệm", "điếm", "tiệm"] },
    { chinese: "花店", pinyin: "huā diàn", english: ["flower shop"], vietnamese: ["cửa hàng hoa", "tiệm hoa"] },
    { chinese: "点", pinyin: "diǎn", english: ["to ignite", "a little", "o'clock"], vietnamese: ["một chút/châm lửa/giờ", "điểm", "chấm"] },
    { chinese: "地点", pinyin: "dì diǎn", english: ["place", "location"], vietnamese: ["địa điểm"] },
    { chinese: "一点", pinyin: "yì diǎn", english: ["a little (+ noun)"], vietnamese: ["một chút/một ít", "một chút", "một ít"] },
    { chinese: "有点", pinyin: "yǒu diǎn", english: ["a little (+ adj.)"], vietnamese: ["hơi/có chút", "hơi"] },
    { chinese: "早点", pinyin: "zǎo diǎn", english: ["breakfast"], vietnamese: ["bữa sáng"] },
    { chinese: "点心", pinyin: "diǎn xīn", english: ["dim-sum", "snack"], vietnamese: ["các món ăn nhẹ (bữa sáng hoặc ăn vặt)", "điểm tâm"] },
    { chinese: "热", pinyin: "rè", english: ["hot", "warm"], vietnamese: ["nóng", "nhiệt"] },
    { chinese: "热心", pinyin: "rè xīn", english: ["warm-hearted", "enthusiastic"], vietnamese: ["nhiệt tình"] },
    { chinese: "加", pinyin: "jiā", english: ["to add"], vietnamese: ["thêm vào/tăng thêm", "gia"] },
    { chinese: "叫", pinyin: "jiào", english: ["to call", "to be called"], vietnamese: ["kêu/gọi", "khiếu", "gọi", "kêu"] },
    { chinese: "和", pinyin: "hé", english: ["and", "harmonious"], vietnamese: ["cùng/và/hòa", "và", "hoà"] },
    { chinese: "和平", pinyin: "hé píng", english: ["peace"], vietnamese: ["hoà bình"] },
    { chinese: "可", pinyin: "kě", english: ["can", "may"], vietnamese: ["có thể", "khả"] },
    { chinese: "认可", pinyin: "rèn kě", english: ["accept", "approve"], vietnamese: ["chấp nhận/cho phép/công nhận", "chấp nhận", "cho phép", "công nhận"] },
    { chinese: "歌", pinyin: "gē", english: ["song"], vietnamese: ["bài hát", "ca"] },
    { chinese: "歌手", pinyin: "gē shǒu", english: ["singer"], vietnamese: ["ca sĩ"] },
    { chinese: "哥哥", pinyin: "gē gē", english: ["older brother"], vietnamese: ["anh trai"] },
    { chinese: "欢", pinyin: "huān", english: ["happy", "joyful"], vietnamese: ["vui vẻ/mừng/hoan", "hoan", "vui vẻ"] },
    { chinese: "欢乐", pinyin: "huān lè", english: ["joyful", "happy"], vietnamese: ["vui vẻ/hoan lạc", "hoan lạc"] },
    { chinese: "非", pinyin: "fēi", english: ["not"], vietnamese: ["không/không phải", "không", "phi"] },
    { chinese: "非常", pinyin: "fēi cháng", english: ["very", "exceptionally"], vietnamese: ["rất/vô cùng/cực kỳ", "rất", "phi thường"] },
    { chinese: "真", pinyin: "zhēn", english: ["true", "real"], vietnamese: ["thật/thực", "chân", "thật", "thực"] },
    { chinese: "真心", pinyin: "zhēn xīn", english: ["sincere"], vietnamese: ["thật lòng/thật tâm/chân thành/chân thật", "chân thật", "thật tâm", "thật lòng", "chân tâm"] },
    { chinese: "喜", pinyin: "xǐ", english: ["happy"], vietnamese: ["thích/mừng/việc tốt lành/việc vui mừng", "hỉ", "hỷ", "hí", "hý"] },
    { chinese: "喜欢", pinyin: "xǐ huān", english: ["like", "to like"], vietnamese: ["thích/yêu thích/yêu mến/ưa thích", "thích", "yêu thích"] },
    { chinese: "打", pinyin: "dǎ", english: ["hit", "strike", "play", "dial", "take"], vietnamese: ["đánh/đập", "đả"] },
    { chinese: "打车", pinyin: "dǎ chē", english: ["hail a taxi"], vietnamese: ["bắt taxi", "gọi taxi"] },
    { chinese: "找", pinyin: "zhǎo", english: ["look for"], vietnamese: ["tìm/kiếm", "tìm", "kiếm", "trảo"] },
    { chinese: "或", pinyin: "huò", english: ["or"], vietnamese: ["hoặc", "hay"] },
    { chinese: "见", pinyin: "jiàn", english: ["see"], vietnamese: ["gặp/thấy", "thấy", "kiến"] },
    { chinese: "现", pinyin: "xiàn", english: ["now", "present", "appear"], vietnamese: ["xuất hiện/bây giờ/tồn tại", "hiện"] },
    { chinese: "出现", pinyin: "chū xiàn", english: ["appear", "emerge"], vietnamese: ["xuất hiện"] },
    { chinese: "发现", pinyin: "fā xiàn", english: ["discover"], vietnamese: ["phát hiện", "khám phá"] },
    { chinese: "王", pinyin: "wáng", english: ["king"], vietnamese: ["vua", "vương"] },
    { chinese: "视", pinyin: "shì", english: ["vision", "to watch"], vietnamese: ["thị/nhìn", "nhìn", "thị"] },
    { chinese: "视力", pinyin: "shì lì", english: ["eyesight", "vision"], vietnamese: ["thị lực"] },
    { chinese: "电视", pinyin: "diàn shì", english: ["television", "TV"], vietnamese: ["tivi", "truyền hình"] },
    { chinese: "会", pinyin: "huì", english: ["can", "will", "meeting"], vietnamese: ["có thể/sẽ/họp", "sẽ", "có thể", "họp", "hội"] },
    { chinese: "开会", pinyin: "kāi huì", english: ["have a meeting", "hold a meeting"], vietnamese: ["họp", "tổ chức cuộc họp"] },
    { chinese: "机会", pinyin: "jī huì", english: ["chance", "opportunity"], vietnamese: ["cơ hội"] },
    { chinese: "云", pinyin: "yún", english: ["cloud"], vietnamese: ["mây", "vân"] },
    { chinese: "全", pinyin: "quán", english: ["whole", "complete"], vietnamese: ["toàn bộ/tất cả", "toàn"] },
    { chinese: "住", pinyin: "zhù", english: ["to live", "to reside"], vietnamese: ["sống/ở", "trú", "sống"] },
    { chinese: "主", pinyin: "zhǔ", english: ["master", "host", "owner"], vietnamese: ["chủ/chúa", "chủ"] },
    { chinese: "木", pinyin: "mù", english: ["tree"], vietnamese: ["cây/gỗ", "mộc"] },
    { chinese: "运", pinyin: "yùn", english: ["to transport", "luck", "fortune"], vietnamese: ["may mắn/vận may/chuyên chở", "vận"] },
    { chinese: "运气", pinyin: "yùn qì", english: ["luck"], vietnamese: ["vận khí/may mắn", "vận khí"] },
    { chinese: "动", pinyin: "dòng", english: ["to move"], vietnamese: ["động/cử động/hoạt động", "động"] },
    { chinese: "运动", pinyin: "yùn dòng", english: ["exercise", "sport"], vietnamese: ["thể dục/thể thao", "vận động"] },
    { chinese: "助", pinyin: "zhù", english: ["to help", "assist"], vietnamese: ["trợ/giúp", "trợ", "giúp"] },
    { chinese: "助手", pinyin: "zhù shǒu", english: ["assistant"], vietnamese: ["trợ thủ/trợ lý", "trợ lý", "trợ thủ"] },
    { chinese: "今", pinyin: "jīn", english: ["today", "present"], vietnamese: ["nay/bây giờ", "kim"] },
    { chinese: "今天", pinyin: "jīn tiān", english: ["today"], vietnamese: ["hôm nay"] },
    { chinese: "今日", pinyin: "jīn rì", english: ["today (formal)"], vietnamese: ["hôm nay (văn viết", "hôm nay"] },
    { chinese: "今年", pinyin: "jīn nián", english: ["this year"], vietnamese: ["năm nay"] },
    { chinese: "冷", pinyin: "lěng", english: ["cold"], vietnamese: ["lạnh", "lãnh"] },
    { chinese: "净", pinyin: "jìng", english: ["clean"], vietnamese: ["sạch", "tịnh"] },
    { chinese: "干净", pinyin: "gān jìng", english: ["clean", "neat"], vietnamese: ["sạch sẽ/gọn gàng", "sạch sẽ", "gọn gàng"] },
    { chinese: "方", pinyin: "fāng", english: ["place", "side"], vietnamese: ["phía", "phương"] },
    { chinese: "地方", pinyin: "dì fāng", english: ["place", "area"], vietnamese: ["chỗ/nơi", "địa phương", "chỗ", "nơi"] },
    { chinese: "放", pinyin: "fàng", english: ["to put", "to place"], vietnamese: ["đặt/để", "đặt", "để", "phóng"] },
    { chinese: "放下", pinyin: "fàng xià", english: ["put down", "set aside"], vietnamese: ["để xuống/đặt xuống", "để xuống", "đặt xuống"] },
    { chinese: "放心", pinyin: "fàng xīn", english: ["rest assured", "put your worries aside"], vietnamese: ["yên tâm/an tâm", "yên tâm", "an tâm"] },
    { chinese: "房", pinyin: "fáng", english: ["house", "room"], vietnamese: ["nhà/phòng/buồng", "phòng", "nhà"] },
    { chinese: "房子", pinyin: "fáng zi", english: ["house"], vietnamese: ["ngôi nhà/nhà/nơi ở", "nhà"] },
    { chinese: "房间", pinyin: "fáng jiān", english: ["room"], vietnamese: ["phòng/căn phòng/gian phòng", "phòng", "gian phòng"] },
    { chinese: "先", pinyin: "xiān", english: ["first", "before"], vietnamese: ["trước tiên/đầu tiên", "tiên"] },
    { chinese: "先生", pinyin: "xiān shēng", english: ["Mr", "Sir"], vietnamese: ["tiên sinh"] },
    { chinese: "洗", pinyin: "xǐ", english: ["to wash"], vietnamese: ["rửa/giặt", "rửa", "giặt"] },
    { chinese: "洗手间", pinyin: "xǐ shǒu jiān", english: ["restroom", "washroom"], vietnamese: ["nhà vệ sinh", "toilet"] },
    { chinese: "洗衣机", pinyin: "xǐ yī jī", english: ["washing machine"], vietnamese: ["máy giặt"] },
    { chinese: "干洗", pinyin: "gān xǐ", english: ["dry clean"], vietnamese: ["giặt khô"] },
    { chinese: "后", pinyin: "hòu", english: ["after", "back", "behind"], vietnamese: ["sau", "hậu"] },
    { chinese: "后天", pinyin: "hòu tiān", english: ["day after tomorrow"], vietnamese: ["ngày kia"] },
    { chinese: "后年", pinyin: "hòu nián", english: ["year after next year"], vietnamese: ["năm sau nữa"] },
    { chinese: "后门", pinyin: "hòu mén", english: ["back door"], vietnamese: ["cửa sau"] },
    { chinese: "以", pinyin: "yǐ", english: ["can"], vietnamese: ["dĩ"] },
    { chinese: "可以", pinyin: "kě yǐ", english: ["can", "may"], vietnamese: ["có thể", "khả dĩ"] },
    { chinese: "以为", pinyin: "yǐ wéi", english: ["to think", "to consider", "to believe"], vietnamese: ["tưởng rằng/tưởng là", "tưởng", "tường rằng", "tưởng là"] },
    { chinese: "关", pinyin: "guān", english: ["to close", "to turn off", "to concern"], vietnamese: ["đóng/tắt", "đóng", "tắt", "quan"] },
    { chinese: "关心", pinyin: "guān xīn", english: ["to care about", "to be concerned about"], vietnamese: ["quan tâm"] },
    { chinese: "开关", pinyin: "kāi guān", english: ["switch"], vietnamese: ["công tắc"] },
    { chinese: "送", pinyin: "sòng", english: ["to give", "to send", "to deliver", "to see off"], vietnamese: ["tặng/gửi/đưa", "tống", "tặng", "gửi", "đưa"] },
    { chinese: "自", pinyin: "zì", english: ["self"], vietnamese: ["tự/tự mình/riêng tư", "tự"] },
    { chinese: "自行车", pinyin: "zì xíng chē", english: ["bicycle"], vietnamese: ["xe đạp"] },
    { chinese: "自动", pinyin: "zì dòng", english: ["automatic"], vietnamese: ["tự động"] },
    { chinese: "息", pinyin: "xī", english: ["to rest"], vietnamese: ["nghỉ/nghỉ ngơi/hơi thở", "tức", "nghỉ"] },
    { chinese: "息休", pinyin: "xiū xi", english: ["to rest"], vietnamese: ["nghỉ/nghỉ ngơi", "nghỉ ngơi", "nghỉ"] },
    { chinese: "道", pinyin: "dào", english: ["way", "path", "road"], vietnamese: ["đường/đạo", "đạo"] },
    { chinese: "地道", pinyin: "dì dao", english: ["authentic", "genuine"], vietnamese: ["thật/đích thực", "thật", "đích thực"] },
    { chinese: "知道", pinyin: "zhī dào", english: ["to know"], vietnamese: ["biết"] },
    { chinese: "忘", pinyin: "wàng", english: ["to forget"], vietnamese: ["quên", "vong"] },
    { chinese: "忙", pinyin: "máng", english: ["busy"], vietnamese: ["bận", "mang"] },
    { chinese: "怕", pinyin: "pà", english: ["to fear", "afraid"], vietnamese: ["sợ", "sợ hãi", "phạ"] },
    { chinese: "可怕", pinyin: "kě pà", english: ["frightening", "terrible"], vietnamese: ["đáng sợ"] },
    { chinese: "昨", pinyin: "zuó", english: ["yesterday (prefix)"], vietnamese: ["hôm qua/tạc", "tạc", "hôm qua"] },
    { chinese: "昨天", pinyin: "zuó tiān", english: ["yesterday"], vietnamese: ["hôm qua"] },
    { chinese: "怎", pinyin: "zěn", english: ["how (prefix)"], vietnamese: ["nào/thế nào", "chẩm", "nào", "thế nào"] },
    { chinese: "怎么", pinyin: "zěn me", english: ["how"], vietnamese: ["như thế nào", "sao"] },
    { chinese: "作", pinyin: "zuò", english: ["to do", "to make", "work"], vietnamese: ["làm", "tác"] },
    { chinese: "工作", pinyin: "gōng zuò", english: ["work", "job"], vietnamese: ["công việc", "công tác"] },
    { chinese: "动作", pinyin: "dòng zuò", english: ["movement", "action"], vietnamese: ["động tác/hành động", "động tác", "hành động"] },
    { chinese: "作用", pinyin: "zuò yòng", english: ["function", "effect"], vietnamese: ["tác dụng"] },
    { chinese: "玩", pinyin: "wán", english: ["to play"], vietnamese: ["chơi", "ngoạn"] },
    { chinese: "远", pinyin: "yuǎn", english: ["far"], vietnamese: ["xa/xa xôi", "viễn", "xa"] },
    { chinese: "完", pinyin: "wán", english: ["to finish", "complete"], vietnamese: ["hoàn/hết/xong", "xong", "hoàn", "hết"] },
    { chinese: "完全", pinyin: "wán quán", english: ["complete"], vietnamese: ["hoàn toàn"] },
]

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
        // OLD
        // const isEnglish = Math.random() > 0.5;
        // const meaning = isEnglish ? currentWord.english[0] : currentWord.vietnamese[0];
        
        //NEW
        const meaning = currentWord.vietnamese[0];
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
    }, 1800); // Increased delay slightly to allow time to see pinyin
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
            // OLD
            // correctAnswerText = `${currentWord.english[0]} / ${currentWord.vietnamese[0]}`;

            // NEW
            correctAnswerText = currentWord.vietnamese[0];
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
