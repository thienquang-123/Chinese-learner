// --- VOCABULARY LIST ---
const vocab = [
    { chinese: "你好", pinyin: "nǐ hǎo", english: ["hello", "hi"], vietnamese: ["xin chào", "chào bạn"] },
    { chinese: "谢谢", pinyin: "xiè xie", english: ["thank you", "thanks"], vietnamese: ["cảm ơn", "cám ơn"] },
    { chinese: "不客气", pinyin: "bú kè qi", english: ["you're welcome", "you are welcome", "not at all"], vietnamese: ["không có gì", "đừng khách sáo"] },
    { chinese: "再见", pinyin: "zài jiàn", english: ["goodbye", "bye"], vietnamese: ["tạm biệt"] },
    { chinese: "对不起", pinyin: "duì bu qǐ", english: ["sorry", "excuse me"], vietnamese: ["xin lỗi"] },
    { chinese: "没关系", pinyin: "méi guān xi", english: ["it's ok", "it doesn't matter", "no problem"], vietnamese: ["không sao", "không có gì"] },
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
    { chinese: "爱", pinyin: "ài", english: ["love", "to love"], vietnamese: ["yêu", "ái", "thích"] },
    { chinese: "家", pinyin: "jiā", english: ["home", "family"], vietnamese: ["nhà", "gia", "gia đình"] },
    { chinese: "吃", pinyin: "chī", english: ["eat", "to eat"], vietnamese: ["ăn"] },
    { chinese: "人", pinyin: "rén", english: ["human", "man"], vietnamese: ["con người", "nhân", "người"] },
    { chinese: "从", pinyin: "cóng", english: ["from"], vietnamese: ["từ", "tòng", "tùng"] },
    { chinese: "个", pinyin: "ge", english: ["universal measured word"], vietnamese: ["từ dùng để đếm", "cái", "quả", "con"] },
    { chinese: "个人", pinyin: "gè rén", english: ["individual", "personal"], vietnamese: ["cá nhân", "riêng tư", "một mình"] },
    { chinese: "大", pinyin: "dà", english: ["big"], vietnamese: ["lớn", "to", "đại"] },
    { chinese: "天", pinyin: "tiān", english: ["sky", "day"], vietnamese: ["bầu trời", "thiên", "ngày"] },
    { chinese: "太", pinyin: "tài", english: ["too"], vietnamese: ["quá", "rất", "lắm", "thái"] },
    { chinese: "上", pinyin: "shàng", english: ["up", "above", "on", "over"], vietnamese: ["trên", "thượng"] },
    { chinese: "下", pinyin: "xià", english: ["down", "below", "under"], vietnamese: ["dưới", "hạ"] },
    { chinese: "中", pinyin: "zhōng", english: ["middle", "center"], vietnamese: ["giữa", "trung"] },
    { chinese: "了", pinyin: "le", english: ["common sentence particle"], vietnamese: ["liễu", "xong", "hết", "đã", "rồi"] },
    { chinese: "子", pinyin: "zǐ/zi", english: ["child", "suffix character"], vietnamese: ["tử", "con", "cái"] },
    { chinese: "字", pinyin: "zì", english: ["character", "letter"], vietnamese: ["tự", "chữ"] },
    { chinese: "口", pinyin: "kǒu", english: ["mouth", "opening"], vietnamese: ["cái miệng", "mồm", "khẩu", "cửa"] },
    { chinese: "人口", pinyin: "rén kǒu ", english: ["population"], vietnamese: ["dân số", "nhân khẩu"] },
    { chinese: "手", pinyin: "shǒu", english: ["hand"], vietnamese: ["cái tay", "thủ"] },
    { chinese: "心", pinyin: "xīn", english: ["heart"], vietnamese: ["trái tim", "tâm", "con tim", "lòng"] },
    { chinese: "中心", pinyin: "zhōng xīn", english: ["middle", "center"], vietnamese: ["trung tâm"] },
    { chinese: "心中", pinyin: "xīn zhōng", english: ["in the heart"], vietnamese: ["trong tim", "trong trái tim"] },
    { chinese: "开心", pinyin: "kāi xīn", english: ["happy"], vietnamese: ["vui vẻ", "hạnh phúc"] },
    { chinese: "日", pinyin: "rì", english: ["sun", "day"], vietnamese: ["mặt trời", "ngày", "nhật"] },
    { chinese: "月", pinyin: "yuè", english: ["moon", "month"], vietnamese: ["mặt trăng", "tháng", "nguyệt"] },
    { chinese: "明", pinyin: "míng", english: ["bright", "clear"], vietnamese: ["sáng", "minh"] },
    { chinese: "明天", pinyin: "míng tiān", english: ["tomorrow"], vietnamese: ["ngày mai"] },
    { chinese: "白", pinyin: "bái", english: ["white"], vietnamese: ["màu trắng", "bạch", "trắng"] },
    { chinese: "明白", pinyin: "míng bái", english: ["understand", "to understand"], vietnamese: ["hiểu", "minh bạch"] },
    { chinese: "白天", pinyin: "bái tiān", english: ["daytime"], vietnamese: ["ban ngày"] },
    { chinese: "百", pinyin: "bǎi", english: ["hundred"], vietnamese: ["trăm", "bách", "rất nhiều"] },
    { chinese: "的", pinyin: "de", english: ["possessive particle", "attributive particle"], vietnamese: ["của", "thuộc về"] },
    { chinese: "工", pinyin: "gōng", english: ["work"], vietnamese: ["công", "công việc"] },
    { chinese: "工人", pinyin: "gōng rén", english: ["worker"], vietnamese: ["công nhân"] },
    { chinese: "左", pinyin: "zuǒ", english: ["left"], vietnamese: ["tả", "trái"] },
    { chinese: "左手", pinyin: "zuǒ shǒu", english: ["left hand"], vietnamese: ["tả thủ", "tay trái"] },
    { chinese: "右", pinyin: "yòu", english: ["right"], vietnamese: ["hữu", "phải"] },
    { chinese: "右手", pinyin: "yòu shǒu", english: ["right hand"], vietnamese: ["hữu thủ", "tay phải"] },
    { chinese: "左右", pinyin: "zuǒ yòu", english: ["around", "about"], vietnamese: ["khoảng", "xấp xỉ"] },
    { chinese: "十", pinyin: "shí", english: ["ten"], vietnamese: ["thập", "mười"] },
    { chinese: "什么", pinyin: "shén me", english: ["what"], vietnamese: ["cái gì", "gì"] },
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
    { chinese: "北大", pinyin: "běi dà", english: ["Beijing university"], vietnamese: ["Bắc Đại", "Đại học Bắc Kinh"] },
    { chinese: "花", pinyin: "huā", english: ["flower", "to spend"], vietnamese: ["hoa", "bông hoa"] },
    { chinese: "文化", pinyin: "wén huà", english: ["culture"], vietnamese: ["văn hoá"] },
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
    { chinese: "女儿", pinyin: "nǚ ér", english: ["daughter"], vietnamese: ["con gái"] },
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
    { chinese: "门", pinyin: "mén", english: ["door", "gate"], vietnamese: ["môn", "cửa"] },
    { chinese: "门口", pinyin: "mén kǒu", english: ["doorway"], vietnamese: ["cửa", "cổng"] },
    { chinese: "开门", pinyin: "kāi mén", english: ["open the door"], vietnamese: ["mở cửa"] },
    { chinese: "关门", pinyin: "guān mén", english: ["door", "gate"], vietnamese: ["đóng cửa"] },
    { chinese: "们", pinyin: "men", english: ["pluralizing suffix"], vietnamese: ["môn", "bọn", "các", "chúng"] },
    { chinese: "你们", pinyin: "nǐ men", english: ["you"], vietnamese: ["các bạn"] },
    { chinese: "他们", pinyin: "tā men", english: ["they", "them"], vietnamese: ["họ", "bọn chúng", "bọn họ"] },
    { chinese: "问", pinyin: "wèn", english: ["ask", "to ask"], vietnamese: ["vấn", "hỏi"] },
    { chinese: "间", pinyin: "jiān", english: ["room"], vietnamese: ["gian", "khoảng không gian"] },
    { chinese: "中间", pinyin: "zhōng jiān", english: ["middle", "in between"], vietnamese: ["trung gian", "trung tâm", "ở giữa"] },
    { chinese: "早", pinyin: "zǎo", english: ["morning", "early"], vietnamese: ["tảo", "sớm"] },
    { chinese: "早日", pinyin: "zǎo rì", english: ["soon"], vietnamese: ["sớm"] },
    { chinese: "早上好", pinyin: "zǎo shàng hǎo", english: ["good morning"], vietnamese: ["chào buổi sáng"] },
    { chinese: "但", pinyin: "dàn", english: ["but"], vietnamese: ["đãn", "nhưng", "chỉ", "hễ"] },
    { chinese: "只", pinyin: "zhǐ", english: ["only"], vietnamese: ["chỉ", "mỗi một"] },
    { chinese: "认", pinyin: "rèn", english: ["recognize", "to recognize"], vietnamese: ["nhận"] },
    { chinese: "认为", pinyin: "rèn wéi", english: ["think", "to think"], vietnamese: ["cho rằng"] },
    { chinese: "识", pinyin: "shí", english: ["know", "to know"], vietnamese: ["thức", "biết"] },
    { chinese: "认识", pinyin: "rèn shi", english: ["know", "to know", "regconize", "to recognize"], vietnamese: ["nhận thức", "nhận biết", "quen biết"] },
    { chinese: "不识字", pinyin: "bù shí zì", english: ["illiterate"], vietnamese: ["không biết chữ"] },
    { chinese: "只好", pinyin: "zhǐ hǎo", english: ["have no choice"], vietnamese: ["đành phải", "buộc phải"] },
    { chinese: "水", pinyin: "shuǐ", english: ["water"], vietnamese: ["thuỷ", "nước"] },
    { chinese: "火", pinyin: "huǒ", english: ["fire"], vietnamese: ["hoả", "lửa"] },
    { chinese: "火车", pinyin: "huǒ chē", english: ["train"], vietnamese: ["tàu lửa", "xe lửa"] },
    { chinese: "休", pinyin: "xiū", english: ["rest", "to rest"], vietnamese: ["hưu", "nghỉ ngơi"] },
    { chinese: "午休", pinyin: "wǔ xiū", english: ["mid-day nap"], vietnamese: ["nghỉ trưa", "ngủ trưa"] },
    { chinese: "末", pinyin: "mò", english: ["end", "the end"], vietnamese: ["mạt", "cuối", "cuối cùng"] },
    { chinese: "月末", pinyin: "yuè mò", english: ["the end of the month"], vietnamese: ["cuối tháng"] },
    { chinese: "本", pinyin: "běn", english: ["origin", "root", "measure word for book"], vietnamese: ["bản", "bôn", "bổn", "gốc", "nguồn gốc", "vốn có", "từ trước"] },
    { chinese: "日本", pinyin: "rì běn", english: ["Japan"], vietnamese: ["Nhật Bản"] },
    { chinese: "本人", pinyin: "běn rén", english: ["oneself", "my self"], vietnamese: ["bản thân", "chính mình"] },
    { chinese: "体", pinyin: "tǐ", english: ["body"], vietnamese: ["thể", "thân", "mình", "hình thể", "dạng"] },
    { chinese: "体力", pinyin: "tǐ lì", english: ["physical strength"], vietnamese: ["thể lực"] },
    { chinese: "田", pinyin: "tián", english: ["field"], vietnamese: ["điền", "ruộng", "đồng"] },
    { chinese: "电", pinyin: "diàn", english: ["electricity"], vietnamese: ["điện"] },
    { chinese: "果", pinyin: "guǒ", english: ["fruit"], vietnamese: ["quả", "trái"] },
    { chinese: "水果", pinyin: "shuǐ guǒ", english: ["fruit"], vietnamese: ["trái cây", "hoa quả"] },
    { chinese: "如果", pinyin: "rú guǒ", english: ["if"], vietnamese: ["nếu", "nếu như", "nếu mà"] },
    { chinese: "里", pinyin: "lǐ", english: ["in", "inside"], vietnamese: ["lí", "lý", "bên trong", "phía trong"] },
    { chinese: "心里", pinyin: "xīn lǐ", english: ["in heart", "in mind"], vietnamese: ["trong lòng", "trong tâm trí"] },
    { chinese: "里边", pinyin: "lǐ biān", english: ["inside"], vietnamese: ["bên trong", "phía trong"] },
    { chinese: "平", pinyin: "píng", english: ["even", "equal", "level", "flat"], vietnamese: ["bình", "biền", "bằng"] },
    { chinese: "水平", pinyin: "shuǐ píng", english: ["level", "standard"], vietnamese: ["mức độ", "trình độ", "tiêu chuẩn"] },
    { chinese: "半", pinyin: "bàn", english: ["half"], vietnamese: ["bán", "một nửa"] },
    { chinese: "半天", pinyin: "bàn tiān", english: ["half day", "a long time"], vietnamese: ["nửa ngày", "một buổi", "một lúc lâu", "khá lâu"] },
    { chinese: "来", pinyin: "lái", english: ["come", "to come"], vietnamese: ["lai", "đến"] },
    { chinese: "回来", pinyin: "huí lái", english: ["come back"], vietnamese: ["quay về", "trở lại", "quay lại"] },
    { chinese: "上来", pinyin: "shàng lái", english: ["come up"], vietnamese: ["đi lên"] },
    { chinese: "下来", pinyin: "xià lái", english: ["come down"], vietnamese: ["đi xuống"] },
    { chinese: "从来", pinyin: "cóng lái", english: ["always"], vietnamese: ["luôn luôn", "từ trước đến nay", "chưa bao giờ"] },
    { chinese: "本来", pinyin: "běn lái", english: ["originally"], vietnamese: ["vốn dĩ", "ban đầu", "lúc đầu", "trước đây"] },
    { chinese: "米", pinyin: "mǐ", english: ["rice"], vietnamese: ["mễ", "gạo"] },
    { chinese: "去", pinyin: "qù", english: ["go", "to go", "past"], vietnamese: ["khu", "khứ", "đi", "đã qua"] },
    { chinese: "回去", pinyin: "huí qù", english: ["go back"], vietnamese: ["về", "đi về", "trở về"] },
    { chinese: "法", pinyin: "fǎ", english: ["method", "rule", "way"], vietnamese: ["pháp", "phép tắc", "khuôn mẫu", "nguyên tắc"] },
    { chinese: "土", pinyin: "tǔ", english: ["earth"], vietnamese: ["thổ", "đất"] },
    { chinese: "又", pinyin: "yòu", english: ["again"], vietnamese: ["hữu", "lại"] },
    { chinese: "友", pinyin: "yǒu", english: ["friend"], vietnamese: ["hữu", "bạn bè"] },
    { chinese: "朋友", pinyin: "péng you", english: ["friend"], vietnamese: ["bằng hữu", "bạn bè"] },
    { chinese: "友好", pinyin: "yǒu hǎo", english: ["friendly"], vietnamese: ["hữu hảo", "thân thiện", "hoà hảo"] },
    { chinese: "男", pinyin: "nán", english: ["man", "male"], vietnamese: ["nam", "đàn ông", "con trai"] },
    { chinese: "男友", pinyin: "nán yǒu", english: ["boyfriend"], vietnamese: ["bạn trai"] },
    { chinese: "女友", pinyin: "nǚ yǒu", english: ["girlfriend"], vietnamese: ["bạn gái"] },
    { chinese: "发", pinyin: "fā/fà/fa", english: ["to send", "hair"], vietnamese: ["phát", "gửi đi", "phất", "tóc"] },
    { chinese: "才", pinyin: "cái", english: ["ability", "talent", "just"], vietnamese: ["tài", "tài năng", "mới"] },
    { chinese: "有才", pinyin: "yǒu cái", english: ["talented"], vietnamese: ["có tài"] },
    { chinese: "天才", pinyin: "tiān cái", english: ["genius"], vietnamese: ["thiên tài"] },
    { chinese: "长", pinyin: "cháng", english: ["long"], vietnamese: ["trường", "tràng", "dài", "lâu"] },
    { chinese: "长", pinyin: "zhǎng", english: ["grow", "to grow"], vietnamese: ["trưởng", "mọc"] },
    { chinese: "长大", pinyin: "zhǎng dà", english: ["to grow up"], vietnamese: ["trưởng thành", "lớn lên", "phát triển"] },
    { chinese: "衣", pinyin: "yī", english: ["clothes", "clothing"], vietnamese: ["y", "áo"] },
    { chinese: "大衣", pinyin: "dà yī", english: ["coat"], vietnamese: ["áo khoác", "áo choàng"] },
    { chinese: "飞", pinyin: "fēi", english: ["to fly"], vietnamese: ["phi", "bay"] },
    { chinese: "飞机", pinyin: "fēi jī", english: ["airplane"], vietnamese: ["máy bay", "phi cơ"] },
    { chinese: "气", pinyin: "qì", english: ["air", "gas"], vietnamese: ["khí", "hơi"] },
    { chinese: "天气", pinyin: "tiān qì", english: ["weather"], vietnamese: ["thời tiết", "khí trời", "tiết trời"] },
    { chinese: "生气", pinyin: "shēng qì", english: ["angry", "to get angry"], vietnamese: ["tức giận", "giận"] },
    { chinese: "力气", pinyin: "lì qi", english: ["strength"], vietnamese: ["sức lực", "sức mạnh"] },
    { chinese: "每", pinyin: "měi", english: ["every", "each"], vietnamese: ["mỗi"] },
    { chinese: "每天", pinyin: "měi tiān", english: ["everyday"], vietnamese: ["mỗi ngày", "hàng ngày"] },
    { chinese: "五", pinyin: "wǔ", english: ["five"], vietnamese: ["ngũ", "năm"] },
    { chinese: "语", pinyin: "yǔ", english: ["language"], vietnamese: ["ngữ", "ngôn ngữ", "lời lẽ"] },
    { chinese: "语法", pinyin: "yǔ fǎ", english: ["grammar"], vietnamese: ["ngữ pháp"] },
    { chinese: "语言", pinyin: "yǔ yán", english: ["language"], vietnamese: ["ngôn ngữ"] },
    { chinese: "口语", pinyin: "kǒu yǔ", english: ["spoken language"], vietnamese: ["khẩu ngữ", "văn nói"] },
    { chinese: "语气", pinyin: "yǔ qì", english: ["tone", "manner of speaking"], vietnamese: ["ngữ khí", "giọng điệu", "khẩu khí"] },
    { chinese: "年", pinyin: "nián", english: ["year"], vietnamese: ["niên", "năm"] },
    { chinese: "去年", pinyin: "qù nián", english: ["last year"], vietnamese: ["năm ngoái", "năm trước"] },
    { chinese: "明年", pinyin: "míng nián", english: ["next year"], vietnamese: ["năm sau", "năm tới"] },
    { chinese: "中年", pinyin: "zhōng nián", english: ["middle-age"], vietnamese: ["trung niên"] },
    { chinese: "汉", pinyin: "hàn", english: ["Han ethnic group"], vietnamese: ["hán", "người Hán"] },
    { chinese: "汉字", pinyin: "hàn zì", english: ["Chinese character"], vietnamese: ["Hán tự"] },
    { chinese: "汉语", pinyin: "hàn yǔ", english: ["Chinese language"], vietnamese: ["Hán ngữ", "tiếng Trung Quốc", "tiếng Hán"] },
    { chinese: "没", pinyin: "méi", english: ["have not", "did not"], vietnamese: ["một", "không"] },
    { chinese: "没有", pinyin: "méi yǒu", english: ["don’t have", "haven’t"], vietnamese: ["không có", "chưa từng"] },
    { chinese: "没用", pinyin: "méi yòng", english: ["useless"], vietnamese: ["vô dụng", " không có tác dụng"] },
    { chinese: "没什么", pinyin: "méi shén me", english: ["It doesn’t matter", "It’s nothing", "That’s all right"], vietnamese: ["không sao", "không quan trọng"] },
    { chinese: "机", pinyin: "jī", english: ["machine"], vietnamese: ["cơ", "ki", "máy móc"] },
    { chinese: "手机", pinyin: "shǒu jī", english: ["cell phone", "mobile phone"], vietnamese: ["điện thoại di động"] },
    { chinese: "这", pinyin: "zhè/zhèi", english: ["this"], vietnamese: ["này"] },
    { chinese: "这里", pinyin: "zhè lǐ", english: ["here"], vietnamese: ["đây", "tại đây", "nơi này"] },
    { chinese: "那", pinyin: "nà/nèi", english: ["that"], vietnamese: ["đó"] },
    { chinese: "那里", pinyin: "nà lǐ", english: ["there"], vietnamese: ["chỗ đó", "nơi đó"] },
    { chinese: "哪", pinyin: "nǎ/něi", english: ["which"], vietnamese: ["gì", "nào"] },
    { chinese: "哪里", pinyin: "nǎ lǐ", english: ["where"], vietnamese: ["đâu"] },
    { chinese: "马", pinyin: "mǎ", english: ["horse"], vietnamese: ["mã", "con ngựa"] },
    { chinese: "马力", pinyin: "mǎ lì", english: ["horsepower"], vietnamese: ["mã lực"] },
    { chinese: "马上", pinyin: "mǎ shàng", english: ["immediately", "right away"], vietnamese: ["ngay lập tức", "ngay"] },
    { chinese: "吗", pinyin: "ma", english: ["question particle"], vietnamese: ["không", "gì"] },
    { chinese: "妈", pinyin: "mā", english: ["mom", "mother"], vietnamese: ["mẹ", "má"] },
    { chinese: "妈妈", pinyin: "mā ma", english: ["mother", "mom"], vietnamese: ["mẹ", "má"] },
    { chinese: "开", pinyin: "kāi", english: ["open", "to open"], vietnamese: ["khai", "mở"] },
    { chinese: "开车", pinyin: "kāi chē", english: ["to drive", "drive a vehicle"], vietnamese: ["lái xe"] },
    { chinese: "进", pinyin: "jìn", english: ["enter", "to enter"], vietnamese: ["tiến", "tấn", "vào"] },
    { chinese: "进来", pinyin: "jìn lái", english: ["come in"], vietnamese: ["vào đây"] },
    { chinese: "进去", pinyin: "jìn qù", english: ["go in"], vietnamese: ["đi vào"] },
    { chinese: "出", pinyin: "chū", english: ["exit", "go out"], vietnamese: ["ra", "xuất", "xuý"] },
    { chinese: "出去", pinyin: "chū qù", english: ["go out"], vietnamese: ["đi ra"] },
    { chinese: "出来", pinyin: "chū lái", english: ["come out"], vietnamese: ["ra đây"] },
    { chinese: "出口", pinyin: "chū kǒu", english: ["exit", "export"], vietnamese: ["lối ra", "cửa ra", "xuất khẩu"] },
    { chinese: "出发", pinyin: "chū fā", english: ["set off", "start off"], vietnamese: ["xuất phát", "ra đi"] },
    { chinese: "习", pinyin: "xí", english: ["to practice", "custom", "be used to"], vietnamese: ["tập", "luyện tập", "thói quen", "quen"] },
    { chinese: "冰", pinyin: "bīng", english: ["ice"], vietnamese: ["băng", "đá"] },
    { chinese: "次", pinyin: "cì", english: ["time"], vietnamese: ["lần", "thứ", "lượt"] },
    { chinese: "下次", pinyin: "xià cì", english: ["next time"], vietnamese: ["lần sau"] },
    { chinese: "上次", pinyin: "shàng cì", english: ["last time"], vietnamese: ["lần trước"] },
    { chinese: "它", pinyin: "tā", english: ["it"], vietnamese: ["nó"] },
    { chinese: "比", pinyin: "bǐ", english: ["compare"], vietnamese: ["so sánh", "đọ", "bì", "tỉ"] },
    { chinese: "比如", pinyin: "bǐ rú", english: ["for example"], vietnamese: ["ví dụ"] },
    { chinese: "呢", pinyin: "ne", english: ["particle for follow-up question"], vietnamese: ["biểu thị nghi vấn", "nhỉ", "hả"] },
    
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
