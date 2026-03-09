import { useState, useRef } from "react";

const DB = {
  art: {
    label: "艺术绘画", icon: "🖼️", color: "#9c6b3c",
    movements: [
      {
        id: "impressionism", name: "印象派", era: "1860s · 法国",
        desc: "不画「物体是什么」，只画「光在那一刻的感觉」。真实不是形状，而是感觉。",
        tags: ["感受", "光", "瞬间", "自然"],
        artists: [
          {
            id: "monet", name: "克劳德·莫奈", life: "1840–1926", origin: "法国", emoji: "🌸",
            bio: "印象派创始人。终生痴迷光与水的变化，在同一个池塘画了250余张睡莲。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/400px-Claude_Monet_1899_Nadar_crop.jpg",
            works: [
              { id:"w1", name:"睡莲", year:"1906", type:"油画", desc:"同一池塘，250余幅，每张都不同——因为光不同。芝加哥艺术学院藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg"},
              { id:"w2", name:"日出·印象", year:"1872", type:"油画", desc:"「印象派」这个名字来自这幅画，最初是嘲讽，后来成了荣誉。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg"},
              { id:"w3", name:"干草堆", year:"1890", type:"油画", desc:"同一个干草堆在不同季节、不同光线下——光才是真正的主题。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Claude_Monet%2C_1890-91%2C_Haystacks%2C_%28Effect_of_Snow_and_Sun%29%2C_36.2_x_51.1_cm%2C_Metropolitan_Museum_of_Art%2C_New_York.jpg/800px-Claude_Monet%2C_1890-91%2C_Haystacks%2C_%28Effect_of_Snow_and_Sun%29%2C_36.2_x_51.1_cm%2C_Metropolitan_Museum_of_Art%2C_New_York.jpg"},
            ]
          },
          {
            id: "renoir", name: "皮埃尔-奥古斯特·雷诺阿", life: "1841–1919", origin: "法国", emoji: "💃",
            bio: "印象派中最「快乐」的画家。笔触轻盈温暖，擅长描绘阳光下的人群与欢愉场景。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pierre-Auguste_Renoir.jpg/400px-Pierre-Auguste_Renoir.jpg",
            works: [
              { id:"w4", name:"煎饼磨坊的舞会", year:"1876", type:"油画", desc:"光斑透过树叶洒在人群上，捕捉了巴黎市井欢乐的瞬间。奥赛博物馆藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg/800px-Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg"},
              { id:"w5", name:"船上的午宴", year:"1880", type:"油画", desc:"朋友们聚在塞纳河边，阳光、美食、笑声。菲利普斯收藏馆藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg"},
              { id:"w5b", name:"两姐妹（阳台上）", year:"1881", type:"油画", desc:"色彩明亮，构图温柔，是雷诺阿人物画的顶峰之一。芝加哥艺术学院藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg"},
            ]
          },
          {
            id: "degas", name: "埃德加·德加", life: "1834–1917", origin: "法国", emoji: "🩰",
            bio: "痴迷芭蕾舞者和赛马。用不寻常的构图角度，开创了现代摄影式构图。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Edgar_Germain_Hilaire_Degas%2C_photo_bust.jpg/400px-Edgar_Germain_Hilaire_Degas%2C_photo_bust.jpg",
            works: [
              { id:"w6", name:"舞蹈课", year:"1874", type:"油画", desc:"排练室里的芭蕾女孩，疲倦与优雅并存。大都会博物馆藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Degas_-_The_Dance_Class.jpg/800px-Degas_-_The_Dance_Class.jpg"},
              { id:"w7", name:"苦艾酒", year:"1876", type:"油画", desc:"咖啡馆里两个陌生人，孤独感穿透画面。奥赛博物馆藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edgar_Degas_-_Dans_un_caf%C3%A9.jpg/800px-Edgar_Degas_-_Dans_un_caf%C3%A9.jpg"},
              { id:"w7b", name:"浴女", year:"1886", type:"粉彩", desc:"从上方俯视的浴女，真实而不加美化——这是德加最革命性的角度。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edgar_Degas_-_The_Tub_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_The_Tub_-_Google_Art_Project.jpg"},
            ]
          },
          {
            id: "pissarro", name: "卡米耶·毕沙罗", life: "1830–1903", origin: "法国", emoji: "🌳",
            bio: "「印象派之父」，是唯一参加了所有八届印象派展览的画家，也是塞尚和高更的老师。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Camille_Pissarro_-_Self-Portrait_1873.jpg/400px-Camille_Pissarro_-_Self-Portrait_1873.jpg",
            works: [
              { id:"w8", name:"蒙马特大道", year:"1897", type:"油画", desc:"从同一窗口俯视大道，画了不同季节的十余幅。城市也可以像自然一样流动。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Camille_Pissarro_-_Boulevard_Montmartre%2C_Mardi_Gras.jpg/800px-Camille_Pissarro_-_Boulevard_Montmartre%2C_Mardi_Gras.jpg"},
              { id:"w8b", name:"红屋顶", year:"1877", type:"油画", desc:"树叶间隙透出的红屋顶，光与色彩在枝叶中碎裂、重组。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Camille_Pissarro_-_Red_Roofs%2C_Corner_of_a_Village%2C_Winter_-_Google_Art_Project.jpg/800px-Camille_Pissarro_-_Red_Roofs%2C_Corner_of_a_Village%2C_Winter_-_Google_Art_Project.jpg"},
            ]
          },
          {
            id: "morisot", name: "贝尔特·莫里索", life: "1841–1895", origin: "法国", emoji: "🌿",
            bio: "印象派中最重要的女性画家。马奈的嫂子，用私密柔和的笔触描绘女性的日常生活世界。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Berthe_Morisot_by_Edouard_Manet.jpg/400px-Berthe_Morisot_by_Edouard_Manet.jpg",
            works: [
              { id:"w9", name:"摇篮", year:"1872", type:"油画", desc:"母亲凝视摇篮中的婴儿——这种私密的目光，只有莫里索才能捕捉。奥赛博物馆藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Berthe_Morisot_-_The_Cradle.jpg/800px-Berthe_Morisot_-_The_Cradle.jpg"},
              { id:"w9b", name:"夏日", year:"1879", type:"油画", desc:"湖上的两个女子，光与水的倒影模糊了边界，生活本身就是印象。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Berthe_Morisot_-_Summer%27s_Day_-_National_Gallery.jpg/800px-Berthe_Morisot_-_Summer%27s_Day_-_National_Gallery.jpg"},
            ]
          },
        ]
      },
      {
        id: "post-impressionism", name: "后印象派", era: "1880s · 西欧",
        desc: "从印象派出发，走向更强烈的个人表达。感受不够，还要有结构和情感。",
        tags: ["情感", "结构", "色彩", "个人"],
        artists: [
          {
            id: "vangogh", name: "文森特·梵高", life: "1853–1890", origin: "荷兰", emoji: "🌻",
            bio: "一生只卖出一幅画，死后成为最贵艺术家之一。用旋转的笔触把内心的激烈外化成画面。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/400px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
            works: [
              { id:"vg1", name:"星夜", year:"1889", type:"油画", desc:"在精神病院创作。旋涡状的天空是他内心世界的直接呈现。纽约现代艺术博物馆藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"},
              { id:"vg2", name:"向日葵", year:"1888", type:"油画", desc:"「我想用黄色来表达感恩。」梵高最具代表性的系列之一。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/800px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg"},
              { id:"vg3", name:"卧室", year:"1888", type:"油画", desc:"阿尔勒黄房子里的卧室。他画了三个版本，想传达绝对的安宁，反而令人不安。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg"},
              { id:"vg4", name:"麦田群鸦", year:"1890", type:"油画", desc:"去世前最后几幅画之一。低沉的天空，乌鸦升起——读出什么，取决于你当时的心情。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_Wheat_Field_with_Crows.jpg/800px-Vincent_van_Gogh_-_Wheat_Field_with_Crows.jpg"},
            ]
          },
          {
            id: "cezanne", name: "保罗·塞尚", life: "1839–1906", origin: "法国", emoji: "🍎",
            bio: "「现代艺术之父」。把自然几何化——圆柱、球体、锥体，开创了通往立体主义的路。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Paul_C%C3%A9zanne_190.jpg/400px-Paul_C%C3%A9zanne_190.jpg",
            works: [
              { id:"cz1", name:"圣维克多山系列", year:"1885–1906", type:"油画", desc:"同一座山画了60余次，寻找自然背后的几何结构。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg/800px-Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg"},
              { id:"cz2", name:"玩牌者", year:"1894", type:"油画", desc:"农民打牌的普通场景，用几何式构图赋予日常以纪念碑感。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/The-Card-Players-Paul-Cezanne-1892.jpg/800px-The-Card-Players-Paul-Cezanne-1892.jpg"},
              { id:"cz3", name:"大浴女", year:"1906", type:"油画", desc:"晚年最重要的作品，影响了毕加索和马蒂斯。人体与自然融为几何的整体。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Paul_Cezanne_-_Large_Bathers_%28Philadelphia%29.jpg/800px-Paul_Cezanne_-_Large_Bathers_%28Philadelphia%29.jpg"},
            ]
          },
          {
            id: "gauguin", name: "保罗·高更", life: "1848–1903", origin: "法国", emoji: "🌺",
            bio: "抛弃巴黎的股票经纪人生活，去塔希提岛寻找原始的生命力。用强烈的色块和平涂的方式对抗「文明」。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Paul_Gauguin_1891.jpg/400px-Paul_Gauguin_1891.jpg",
            works: [
              { id:"gg1", name:"我们从哪里来？我们是谁？我们向哪里去？", year:"1897", type:"油画", desc:"他最重要的作品，完成后他试图自杀。整幅画是他对生命的终极追问。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Paul_Gauguin_-_D%27ou_venons-nous.jpg/800px-Paul_Gauguin_-_D%27ou_venons-nous.jpg"},
              { id:"gg2", name:"塔希提女人", year:"1891", type:"油画", desc:"塔希提岛的女子，色彩饱和、线条简约，彻底背离了欧洲绘画传统。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Paul_Gauguin_-_Tahitian_Women_on_the_Beach.jpg/800px-Paul_Gauguin_-_Tahitian_Women_on_the_Beach.jpg"},
              { id:"gg3", name:"黄色基督", year:"1889", type:"油画", desc:"布列塔尼农妇围绕着金黄色的基督——宗教、民间与现代艺术的奇异融合。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Paul_Gauguin_-_The_Yellow_Christ.jpg/800px-Paul_Gauguin_-_The_Yellow_Christ.jpg"},
            ]
          },
          {
            id: "seurat", name: "乔治·修拉", life: "1859–1891", origin: "法国", emoji: "🔵",
            bio: "「点彩派」创始人，用科学方式分析色彩，把颜色拆成无数小点，让眼睛在脑中自行混合。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Portrait_of_the_Artist_by_Seurat.jpg/400px-Portrait_of_the_Artist_by_Seurat.jpg",
            works: [
              { id:"st1", name:"大碗岛的星期天下午", year:"1886", type:"油画", desc:"用了两年、无数小点完成的巨作。科学与诗意的完美结合。芝加哥艺术学院藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg/800px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg"},
              { id:"st2", name:"马戏团", year:"1891", type:"油画", desc:"未完成之作，他在展览开幕前夕去世，年仅31岁。动感与欢乐凝固在无数色点里。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Seurat-The_Circus.jpg/800px-Seurat-The_Circus.jpg"},
            ]
          },
          {
            id: "toulouse-lautrec", name: "亨利·图卢兹-劳特累克", life: "1864–1901", origin: "法国", emoji: "🎭",
            bio: "贵族出身却流连红磨坊，用尖锐的线条和海报式构图记录巴黎夜生活，影响了现代平面设计。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Henri_de_Toulouse-Lautrec_-_Self-Portrait.jpg/400px-Henri_de_Toulouse-Lautrec_-_Self-Portrait.jpg",
            works: [
              { id:"tl1", name:"红磨坊：拉古留舞", year:"1890", type:"油画", desc:"舞者拉古留的裙摆在灯光下翻飞，周围的观众只是模糊的剪影。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/La_danse_au_Moulin_Rouge_-_Henri_de_Toulouse-Lautrec.jpg/800px-La_danse_au_Moulin_Rouge_-_Henri_de_Toulouse-Lautrec.jpg"},
              { id:"tl2", name:"红磨坊海报", year:"1891", type:"石版画", desc:"第一张真正意义上的现代艺术海报，把劳特累克的名字传遍巴黎。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Toulouse-Lautrec_-_Moulin_Rouge_-_La_Goulue.jpg/600px-Toulouse-Lautrec_-_Moulin_Rouge_-_La_Goulue.jpg"},
            ]
          },
        ]
      },
      {
        id: "expressionism", name: "表现主义", era: "1905 · 德国/北欧",
        desc: "把内心的情绪直接外化成画面，不惜扭曲形状和颜色。真实不是眼睛看到的，而是心里感到的。",
        tags: ["情绪", "扭曲", "内心", "真实"],
        artists: [
          {
            id: "munch", name: "爱德华·蒙克", life: "1863–1944", origin: "挪威", emoji: "😱",
            bio: "将内心的焦虑、孤独和对死亡的恐惧直接画出来。《呐喊》成为现代人精神困境的永恒象征。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Edvard_Munch_1933.jpg/400px-Edvard_Munch_1933.jpg",
            works: [
              { id:"mn1", name:"呐喊", year:"1893", type:"蛋彩/油画", desc:"血红的天空，扭曲的人影——蒙克说他「感到大自然无尽的呐喊穿透一切」。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"},
              { id:"mn2", name:"忧郁", year:"1894", type:"油画", desc:"海边独坐的男人，蓝色的忧伤凝固在空气里。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Edvard_Munch_-_Melancholy_%281894-96%29.jpg/800px-Edvard_Munch_-_Melancholy_%281894-96%29.jpg"},
              { id:"mn3", name:"生命之舞", year:"1900", type:"油画", desc:"三个女人——白衣少女、红衣舞者、黑衣老妇——人生三阶段同时出现在一幅画里。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edvard_Munch_-_The_Dance_of_Life.jpg/800px-Edvard_Munch_-_The_Dance_of_Life.jpg"},
            ]
          },
          {
            id: "schiele", name: "埃贡·席勒", life: "1890–1918", origin: "奥地利", emoji: "🖊️",
            bio: "克里姆特的学生，用痉挛扭曲的线条表现人体的脆弱与生命力。28岁因流感离世。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Egon_Schiele_-_Self_Portrait_with_Physalis_%281912%29.jpg/400px-Egon_Schiele_-_Self_Portrait_with_Physalis_%281912%29.jpg",
            works: [
              { id:"sc1", name:"拥抱", year:"1917", type:"油画", desc:"两个人紧紧相拥，骨骼感的身体和白色床单——孤独与亲密同时存在。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Egon_Schiele_-_Umarmung_-_1917.jpg/800px-Egon_Schiele_-_Umarmung_-_1917.jpg"},
              { id:"sc2", name:"坐着的女人", year:"1917", type:"油画", desc:"直视观者的眼神，毫无遮掩。席勒的人物永远在挑战观看者的舒适感。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Egon_Schiele_-_Seated_Woman_with_Legs_Drawn_Up_%281917%29.jpg/600px-Egon_Schiele_-_Seated_Woman_with_Legs_Drawn_Up_%281917%29.jpg"},
            ]
          },
          {
            id: "klimt", name: "古斯塔夫·克里姆特", life: "1862–1918", origin: "奥地利", emoji: "✨",
            bio: "维也纳分离派领袖，用金箔、装饰图案和情欲主题创造了独特的华丽风格。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Klimt.jpg/400px-Klimt.jpg",
            works: [
              { id:"kl1", name:"吻", year:"1907", type:"油画/金箔", desc:"用金箔覆盖的拥吻，装饰性与情感强度同时达到顶峰。维也纳美景宫藏。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"},
              { id:"kl2", name:"朱迪思一世", year:"1901", type:"油画/金箔", desc:"手持将领首级的朱迪思——危险、美丽、权力，克里姆特最大胆的女性形象。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Judith_klimt.jpg/600px-Judith_klimt.jpg"},
              { id:"kl3", name:"生命之树", year:"1909", type:"装饰画", desc:"金色的树从大地蔓延至天空，象征生命的循环与连结。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Stocletfries_Klimt_Lebensbaum_links.jpg/600px-Stocletfries_Klimt_Lebensbaum_links.jpg"},
            ]
          },
          {
            id: "kirchner", name: "恩斯特·路德维希·基希纳", life: "1880–1938", origin: "德国", emoji: "🌆",
            bio: "德国表现主义团体「桥社」的核心人物，用尖锐的色彩和角度描绘城市生活的焦虑与疏离。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ernst_Ludwig_Kirchner_-_Self-Portrait_as_a_Soldier.jpg/400px-Ernst_Ludwig_Kirchner_-_Self-Portrait_as_a_Soldier.jpg",
            works: [
              { id:"ki1", name:"柏林街景", year:"1913", type:"油画", desc:"城市中的人群如幽灵般行走，繁华背后是深刻的孤独与不安。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ernst_Ludwig_Kirchner_-_Berliner_Strassenszene.jpg/600px-Ernst_Ludwig_Kirchner_-_Berliner_Strassenszene.jpg"},
              { id:"ki2", name:"军人自画像", year:"1915", type:"油画", desc:"被截去右手的自画像——战争对艺术家意味着什么？", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ernst_Ludwig_Kirchner_-_Self-Portrait_as_a_Soldier.jpg/600px-Ernst_Ludwig_Kirchner_-_Self-Portrait_as_a_Soldier.jpg"},
            ]
          },
        ]
      },
      {
        id: "surrealism", name: "超现实主义", era: "1920s · 法国",
        desc: "绕过理性，让潜意识直接作画。梦境比现实更真实。",
        tags: ["梦境", "潜意识", "奇异", "自由"],
        artists: [
          {
            id: "dali", name: "萨尔瓦多·达利", life: "1904–1989", origin: "西班牙", emoji: "⏰",
            bio: "超现实主义最著名的面孔。用极度写实的技法呈现梦境意象，制造令人不安的美。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Salvador_Dal%C3%AD_1939.jpg/400px-Salvador_Dal%C3%AD_1939.jpg",
            works: [
              { id:"dl1", name:"记忆的永恒", year:"1931", type:"油画", desc:"软化的钟表——时间在梦境里失去了固态。最知名的超现实主义作品。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Persistence_of_Memory.jpg/800px-The_Persistence_of_Memory.jpg"},
              { id:"dl2", name:"内战的预感", year:"1936", type:"油画", desc:"肢体相互撕扯的怪物——西班牙内战前画的，达利最政治性的作品。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Dali_-_Soft_Construction_with_Boiled_Beans.jpg/800px-Dali_-_Soft_Construction_with_Boiled_Beans.jpg"},
              { id:"dl3", name:"象的倒影", year:"1937", type:"油画", desc:"长着蜘蛛腿的大象驮着方尖碑，现实逻辑在这里不再适用。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Salvador_Dali_A_Couple_with_Their_Heads_Full_of_Clouds.jpg/600px-Salvador_Dali_A_Couple_with_Their_Heads_Full_of_Clouds.jpg"},
            ]
          },
          {
            id: "magritte", name: "雷内·马格里特", life: "1898–1967", origin: "比利时", emoji: "🎩",
            bio: "用哲学式思考创作绘画，质疑语言和图像的关系，每幅画都是一个谜题。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Magritte_by_Duane_Michals.jpg/400px-Magritte_by_Duane_Michals.jpg",
            works: [
              { id:"mg1", name:"这不是一只烟斗", year:"1929", type:"油画", desc:"画了一只烟斗，下面写「这不是一只烟斗」——因为画不能用来抽。", img:"https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg"},
              { id:"mg2", name:"人子", year:"1964", type:"油画", desc:"一个苹果遮住了西装男人的脸——隐藏的才是真实。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/The_Son_of_Man.jpg/600px-The_Son_of_Man.jpg"},
              { id:"mg3", name:"光之帝国", year:"1954", type:"油画", desc:"上半是白天的天空，下半是黑夜的街道——白昼与黑夜同时存在，这不可能，但就是如此。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/The_Empire_of_Light%2C_II.jpg/600px-The_Empire_of_Light%2C_II.jpg"},
            ]
          },
          {
            id: "frida", name: "弗里达·卡罗", life: "1907–1954", origin: "墨西哥", emoji: "🌹",
            bio: "用自画像记录自己的身体疼痛、流产、与迭戈的爱恨——她的画是日记，也是宣言。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/400px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
            works: [
              { id:"fk1", name:"两个弗里达", year:"1939", type:"油画", desc:"与迭戈离婚那年画的。两个自己坐在一起——一个心脏完整，一个心脏破碎。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Las_dos_Fridas.jpg/800px-Las_dos_Fridas.jpg"},
              { id:"fk2", name:"破碎的柱", year:"1944", type:"油画", desc:"脊柱变成了破碎的石柱，全身插满钉子——用画面直接呈现慢性疼痛的感受。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/The_Broken_Column.jpg/600px-The_Broken_Column.jpg"},
              { id:"fk3", name:"自画像与荆棘项链", year:"1940", type:"油画", desc:"荆棘、猴子、黑猫、蜂鸟——弗里达的画总是充满私人符号，每一件都有意义。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Frida_Kahlo_%28self_portrait%29.jpg/600px-Frida_Kahlo_%28self_portrait%29.jpg"},
            ]
          },
          {
            id: "miro", name: "胡安·米罗", life: "1893–1983", origin: "西班牙", emoji: "🌙",
            bio: "用儿童般的符号和原始能量创作，把超现实主义变得轻盈而充满生命力。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Joan_Mir%C3%B3_photograph.jpg/400px-Joan_Mir%C3%B3_photograph.jpg",
            works: [
              { id:"jr1", name:"哈雷昆狂欢节", year:"1925", type:"油画", desc:"充满奇异生物的欢宴，每个角落都有故事，像是梦境的派对。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Joan_Mir%C3%B3_-_The_Harlequin%27s_Carnival.jpg/800px-Joan_Mir%C3%B3_-_The_Harlequin%27s_Carnival.jpg"},
              { id:"jr2", name:"星座系列", year:"1940–41", type:"水粉", desc:"在战争最黑暗的时期创作，用星座符号构建出一个纯净的内心宇宙。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Miro_Woman_and_Bird_in_the_Night.jpg/600px-Miro_Woman_and_Bird_in_the_Night.jpg"},
            ]
          },
          {
            id: "chagall", name: "马克·夏加尔", life: "1887–1985", origin: "俄国/法国", emoji: "💙",
            bio: "把爱情、民间故事和梦境融为一体。画中的人常常飞翔——因为爱让人离地。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Chagall_Jerusalem.jpg/400px-Chagall_Jerusalem.jpg",
            works: [
              { id:"cg1", name:"生日", year:"1915", type:"油画", desc:"恋人在空中飘浮，爱情让人失重。纽约现代艺术博物馆藏。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Birthday-Marc-Chagall.jpg/800px-Birthday-Marc-Chagall.jpg"},
              { id:"cg2", name:"我与村庄", year:"1911", type:"油画", desc:"故乡记忆的碎片重新拼合，时间和空间在这里叠加。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Marc_Chagall_-_I_and_the_Village.jpg/800px-Marc_Chagall_-_I_and_the_Village.jpg"},
              { id:"cg3", name:"向埃菲尔铁塔献礼", year:"1939", type:"油画", desc:"巴黎、小提琴、新娘——夏加尔把流亡者对故乡和新家园的爱都放进一幅画里。", img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Marc_Chagall_-_Homage_to_Eiffel_Tower.jpg/600px-Marc_Chagall_-_Homage_to_Eiffel_Tower.jpg"},
            ]
          },
        ]
      },
      {
        id: "chinese-ink", name: "中国水墨", era: "宋代至今",
        desc: "无即是有，空处最有力量。气韵生动，意境深远。",
        tags: ["空灵", "含蓄", "留白", "气韵"],
        artists: [
          {
            id: "fan-kuan", name: "范宽", life: "约950–约1032", origin: "中国·北宋", emoji: "🏔️",
            bio: "北宋山水画大师，「宋三家」之一。画中的山威严逼人，人物渺小如尘，体现天地的壮阔。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg/400px-Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg",
            works: [
              { id:"fk10", name:"溪山行旅图", year:"约1000年", type:"绢本水墨", desc:"台北故宫博物院的镇馆之宝。巍峨的山在画面中占据一切，人与驴队在山脚显得微不足道。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg/600px-Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg"},
            ]
          },
          {
            id: "qi-baishi", name: "齐白石", life: "1864–1957", origin: "中国", emoji: "🦐",
            bio: "以虾、蟹、蔬果著称，将民间趣味与文人气韵融为一体。「学我者生，似我者死。」",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Qi_Baishi.jpg/400px-Qi_Baishi.jpg",
            works: [
              { id:"qb1", name:"墨虾", year:"1930s", type:"水墨", desc:"寥寥数笔，虾的透明感和弹性跃然纸上。极简的顶峰。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Qi_Baishi_-_Shrimps.jpg/600px-Qi_Baishi_-_Shrimps.jpg"},
              { id:"qb2", name:"蛙声十里出山泉", year:"1951", type:"水墨", desc:"只画了蝌蚪在溪流中游动，但你仿佛听见了蛙声——这是意境最高的留白。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Qi_Baishi.jpg/600px-Qi_Baishi.jpg"},
            ]
          },
          {
            id: "bada", name: "八大山人", life: "1626–1705", origin: "中国", emoji: "🐟",
            bio: "明朝宗室遗民，国破后出家为僧，晚年还俗。笔下的鸟鱼常翻白眼，极度内敛中藏着愤怒与孤独。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bada_shanren.jpg/400px-Bada_shanren.jpg",
            works: [
              { id:"bd1", name:"荷花水鸟图", year:"约1690s", type:"水墨", desc:"一只翻白眼的水鸟站在最小的石头上，倔强与孤寂共存。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bada_shanren.jpg/600px-Bada_shanren.jpg"},
              { id:"bd2", name:"鱼鸭图", year:"约1690s", type:"水墨", desc:"几条鱼，简简单单，却有无尽的留白，沉默本身就是话语。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bada_shanren.jpg/600px-Bada_shanren.jpg"},
            ]
          },
          {
            id: "shitao", name: "石涛", life: "1642–1707", origin: "中国", emoji: "🌿",
            bio: "明朝遗民，提出「一画论」——所有绘画技法都源于一笔之道，绘画是心灵自由的体现。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Shitao_self-portrait.jpg/400px-Shitao_self-portrait.jpg",
            works: [
              { id:"st10", name:"搜尽奇峰打草稿", year:"1691", type:"水墨", desc:"他踏遍名山，说「搜尽奇峰打草稿」——外师造化，中得心源。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Shitao_self-portrait.jpg/600px-Shitao_self-portrait.jpg"},
            ]
          },
        ]
      },
      {
        id: "wabi-sabi", name: "侘寂美学", era: "日本 · 永恒",
        desc: "在残缺、无常、不完整中发现美。不完美才是完整。",
        tags: ["留白", "接纳", "无常", "残缺"],
        artists: [
          {
            id: "hokusai", name: "葛饰北斋", life: "1760–1849", origin: "日本", emoji: "🌊",
            bio: "「富岳三十六景」的作者。「七十三岁才稍微懂得鸟兽草木的真骨。」活到90岁仍在画。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hokusai-Portrait.png/400px-Hokusai-Portrait.png",
            works: [
              { id:"hk1", name:"神奈川冲浪里", year:"1831", type:"浮世绘版画", desc:"世界上最知名的日本画作之一。巨浪之下，富士山渺小如幻。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/800px-Tsunami_by_hokusai_19th_century.jpg"},
              { id:"hk2", name:"红色富士山", year:"1831", type:"浮世绘版画", desc:"清晨阳光把富士山染成红色——短暂的美，永恒的凝视。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Red_Fuji_southern_wind_clear_morning.jpg/800px-Red_Fuji_southern_wind_clear_morning.jpg"},
              { id:"hk3", name:"凤凰图", year:"1835", type:"版画", desc:"晚年之作，神鸟翱翔，笔力雄健——九十岁的眼睛依然看得见永恒。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/400px-Tsunami_by_hokusai_19th_century.jpg"},
            ]
          },
          {
            id: "hiroshige", name: "歌川广重", life: "1797–1858", origin: "日本", emoji: "🌧️",
            bio: "江户时代最伟大的风景版画家，用雨、雪、雾表现自然的瞬息与哀愁。影响了莫奈和梵高。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hiroshige_by_Kunisada.jpg/400px-Hiroshige_by_Kunisada.jpg",
            works: [
              { id:"hg1", name:"大桥骤雨", year:"1857", type:"浮世绘版画", desc:"倾斜的雨线和渺小的人影，美在那种无力感里。梵高曾临摹此作。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hiroshige_-_Evening_Shower_at_Atake%2C_and_the_Great_Bridge_%28Ohashi%29.jpg/600px-Hiroshige_-_Evening_Shower_at_Atake%2C_and_the_Great_Bridge_%28Ohashi%29.jpg"},
              { id:"hg2", name:"龟户梅屋铺", year:"1857", type:"浮世绘版画", desc:"梅花枝干的大胆构图，画面被极度裁切——这是现代构图的先驱。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Hiroshige_Plum_Park.jpg/600px-Hiroshige_Plum_Park.jpg"},
              { id:"hg3", name:"东海道五十三次", year:"1833–34", type:"版画系列", desc:"53个宿场，53种天气和心情，旅途本身就是意义。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hiroshige_by_Kunisada.jpg/600px-Hiroshige_by_Kunisada.jpg"},
            ]
          },
        ]
      },
    ]
  },
  philosophy: {
    label: "哲学思想", icon: "💭", color: "#3d6b8c",
    movements: [
      {
        id: "existentialism", name: "存在主义", era: "20世纪 · 西方",
        desc: "存在先于本质。你通过每一个选择把自己变成那个人。",
        tags: ["选择", "自由", "荒诞", "责任"],
        artists: [
          {
            id: "camus", name: "阿尔贝·加缪", life: "1913–1960", origin: "法国/阿尔及利亚", emoji: "🪨",
            bio: "「荒诞主义」哲学家，也是小说家。相信在荒诞的世界里，人仍然可以选择反抗并寻找幸福。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/400px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg",
            works: [
              { id:"p1", name:"西西弗神话", year:"1942", type:"哲学随笔", desc:"「人必须想象西西弗是幸福的。」荒诞不是终点，而是起点。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/600px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg"},
              { id:"p2", name:"局外人", year:"1942", type:"小说", desc:"「今天，妈妈死了。」然后主人公去游泳——荒诞用小说来呈现。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/600px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg"},
              { id:"p2b", name:"鼠疫", year:"1947", type:"小说", desc:"用瘟疫隐喻荒诞处境，在绝望中寻找人与人之间的连结。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/600px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg"},
            ]
          },
          {
            id: "sartre", name: "让-保罗·萨特", life: "1905–1980", origin: "法国", emoji: "🗽",
            bio: "「他人即地狱」——但萨特的意思是，我们必须通过他人的目光来定义自己，这才是真正的困境。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Jean-Paul_Sartre_FP.jpg/400px-Jean-Paul_Sartre_FP.jpg",
            works: [
              { id:"p3", name:"存在与虚无", year:"1943", type:"哲学著作", desc:"存在主义的奠基之作，「存在先于本质」的完整论证。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Jean-Paul_Sartre_FP.jpg/600px-Jean-Paul_Sartre_FP.jpg"},
              { id:"p3b", name:"恶心", year:"1938", type:"小说", desc:"主人公突然感到日常事物令人作呕——存在本身的荒诞感用小说呈现。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Jean-Paul_Sartre_FP.jpg/600px-Jean-Paul_Sartre_FP.jpg"},
            ]
          },
          {
            id: "beauvoir", name: "西蒙·德·波伏娃", life: "1908–1986", origin: "法国", emoji: "✊",
            bio: "萨特的终身伴侣，女性主义存在主义哲学家。「女人不是天生的，而是后天形成的。」",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Simone_de_Beauvoir2.png/400px-Simone_de_Beauvoir2.png",
            works: [
              { id:"bv1", name:"第二性", year:"1949", type:"哲学著作", desc:"20世纪最重要的女性主义著作。用存在主义分析「女性」如何被建构。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Simone_de_Beauvoir2.png/600px-Simone_de_Beauvoir2.png"},
              { id:"bv2", name:"模糊性的道德", year:"1947", type:"哲学著作", desc:"存在主义的伦理学，如何在没有绝对价值的世界里做出道德选择。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Simone_de_Beauvoir2.png/600px-Simone_de_Beauvoir2.png"},
            ]
          },
          {
            id: "kierkegaard", name: "索伦·克尔凯郭尔", life: "1813–1855", origin: "丹麦", emoji: "🌊",
            bio: "存在主义的鼻祖。「主体性是真理」——真理不是客观的，而是你如何去活它。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kierkegaard.jpg/400px-Kierkegaard.jpg",
            works: [
              { id:"kk1", name:"非此即彼", year:"1843", type:"哲学著作", desc:"人生有三个阶段：审美、伦理、宗教。大多数人只停留在第一层。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kierkegaard.jpg/600px-Kierkegaard.jpg"},
              { id:"kk2", name:"恐惧与颤栗", year:"1843", type:"哲学著作", desc:"以亚伯拉罕献子的故事追问：绝对的信仰意味着什么？", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kierkegaard.jpg/600px-Kierkegaard.jpg"},
            ]
          },
          {
            id: "nietzsche", name: "弗里德里希·尼采", life: "1844–1900", origin: "德国", emoji: "⚡",
            bio: "「上帝死了，现在你必须自己创造意义。」最被误读也最被需要的哲学家。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/400px-Nietzsche187a.jpg",
            works: [
              { id:"nz1", name:"查拉图斯特拉如是说", year:"1883", type:"哲学散文", desc:"用诗歌和寓言写哲学。超人、永恒轮回、权力意志——都在这里。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/600px-Nietzsche187a.jpg"},
              { id:"nz2", name:"善恶的彼岸", year:"1886", type:"哲学著作", desc:"批判一切道德的「道德书」，成为自己的立法者。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/600px-Nietzsche187a.jpg"},
              { id:"nz3", name:"悲剧的诞生", year:"1872", type:"哲学著作", desc:"日神精神与酒神精神——用艺术来理解生命的两种冲动。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/600px-Nietzsche187a.jpg"},
            ]
          },
        ]
      },
      {
        id: "taoism", name: "道家哲学", era: "春秋 · 中国",
        desc: "不要对抗自然的流动，成为水。无为而无不为。",
        tags: ["无为", "流动", "自然", "当下"],
        artists: [
          {
            id: "laozi", name: "老子", life: "约前571–前471", origin: "中国", emoji: "⭕",
            bio: "道家创始人，据传骑牛西出函谷关，留下五千言《道德经》，此后消失无踪。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Laozi_color.jpg/400px-Laozi_color.jpg",
            works: [
              { id:"lz1", name:"道德经", year:"约前500年", type:"哲学文本", desc:"八十一章，五千字。「当其无，有车之用。」空才是本质。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Laozi_color.jpg/600px-Laozi_color.jpg"},
            ]
          },
          {
            id: "zhuangzi", name: "庄子", life: "约前369–前286", origin: "中国", emoji: "🦋",
            bio: "用寓言和故事传达道家思想，文字本身就是艺术，读庄子是一种审美体验。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Zhuangzi-Cahill.jpg/400px-Zhuangzi-Cahill.jpg",
            works: [
              { id:"zz1", name:"逍遥游", year:"约前300年", type:"哲学文本", desc:"大鹏鸟、小麻雀、列子御风——什么是真正的自由？", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zhuangzi_Butterfly_Dream.jpg/600px-Zhuangzi_Butterfly_Dream.jpg"},
              { id:"zz2", name:"齐物论", year:"约前300年", type:"哲学文本", desc:"「庄周梦蝶」就在这里。物我两忘，边界消融。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zhuangzi_Butterfly_Dream.jpg/600px-Zhuangzi_Butterfly_Dream.jpg"},
              { id:"zz3", name:"养生主", year:"约前300年", type:"哲学文本", desc:"庖丁解牛——顺应自然的纹理，就是最高的技艺，也是最高的生活方式。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zhuangzi_Butterfly_Dream.jpg/600px-Zhuangzi_Butterfly_Dream.jpg"},
            ]
          },
        ]
      },
      {
        id: "stoicism", name: "斯多葛主义", era: "古希腊 · 罗马",
        desc: "区分能控制和不能控制的事，只把精力放在前者上。",
        tags: ["克制", "内观", "接纳", "自律"],
        artists: [
          {
            id: "aurelius", name: "马可·奥勒留", life: "121–180", origin: "罗马", emoji: "🏛️",
            bio: "罗马皇帝，每天晚上写日记反省自己。《沉思录》从未打算出版，是写给自己的。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Marco_Aurelio_bronzo.jpg/400px-Marco_Aurelio_bronzo.jpg",
            works: [
              { id:"ma1", name:"沉思录", year:"约161–180", type:"哲学日记", desc:"世界上最伟大的日记。一个皇帝每天问自己：我是否活得有德？", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Marco_Aurelio_bronzo.jpg/600px-Marco_Aurelio_bronzo.jpg"},
            ]
          },
          {
            id: "epictetus", name: "爱比克泰德", life: "约50–135", origin: "希腊", emoji: "⛓️",
            bio: "出身奴隶，后成为最重要的斯多葛哲学家。哲学从最底层的处境出发，因此格外有力量。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Epiktetos.jpg/400px-Epiktetos.jpg",
            works: [
              { id:"ep1", name:"手册（Enchiridion）", year:"约2世纪", type:"哲学手册", desc:"只有53段，每段直指核心：什么在你的控制之内，什么不在。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Epiktetos.jpg/600px-Epiktetos.jpg"},
              { id:"ep2", name:"论述集", year:"约2世纪", type:"哲学讲义", desc:"弟子阿里安记录的课堂笔记，比手册更完整，更有生活的质感。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Epiktetos.jpg/600px-Epiktetos.jpg"},
            ]
          },
          {
            id: "seneca", name: "卢修斯·塞内卡", life: "前4–65", origin: "罗马", emoji: "📜",
            bio: "罗马皇帝尼禄的老师，后被命令自杀。他最好的作品就是他的死亡——从容而有尊严。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Seneca-berlinAntikeSlg-1.jpg/400px-Seneca-berlinAntikeSlg-1.jpg",
            works: [
              { id:"sn1", name:"论生命的短暂", year:"约49年", type:"哲学随笔", desc:"「人们不是生命太短，而是浪费了太多时间。」最精炼的斯多葛智慧。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Seneca-berlinAntikeSlg-1.jpg/600px-Seneca-berlinAntikeSlg-1.jpg"},
              { id:"sn2", name:"书信集", year:"约65年", type:"哲学书信", desc:"124封写给友人卢基利乌斯的信，每封都是一堂生活哲学课。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Seneca-berlinAntikeSlg-1.jpg/600px-Seneca-berlinAntikeSlg-1.jpg"},
            ]
          },
        ]
      },
      {
        id: "zen", name: "禅宗", era: "唐代 · 中国/日本",
        desc: "彻底活在当下，打破一切二元对立。答案在问题之外。",
        tags: ["当下", "顿悟", "简洁", "打破"],
        artists: [
          {
            id: "huineng", name: "慧能（六祖）", life: "638–713", origin: "中国", emoji: "🪷",
            bio: "禅宗六祖，不识字的樵夫，悟道后成为禅宗最重要的祖师。「菩提本无树，明镜亦非台。」",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Huineng.jpg/400px-Huineng.jpg",
            works: [
              { id:"hn1", name:"坛经", year:"约700年", type:"禅宗经典", desc:"中国人自己写的唯一一部「经」。悟道不需要文字，文字只是月亮的手指。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Huineng.jpg/600px-Huineng.jpg"},
            ]
          },
          {
            id: "suzuki", name: "铃木大拙", life: "1870–1966", origin: "日本", emoji: "📖",
            bio: "将禅宗介绍给西方世界，影响了凯鲁亚克、塞林格、乔布斯。用现代语言讲禅的第一人。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Suzuki_Daisetsu_Teitaro.jpg/400px-Suzuki_Daisetsu_Teitaro.jpg",
            works: [
              { id:"sz1", name:"禅与日本文化", year:"1938", type:"文化论著", desc:"禅如何渗透进日本的茶道、书道、剑道、园林——万事皆是禅。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Suzuki_Daisetsu_Teitaro.jpg/600px-Suzuki_Daisetsu_Teitaro.jpg"},
              { id:"sz2", name:"禅学随笔", year:"1949–71", type:"论文集", desc:"三卷本，让西方人第一次真正接近禅的核心。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Suzuki_Daisetsu_Teitaro.jpg/600px-Suzuki_Daisetsu_Teitaro.jpg"},
            ]
          },
          {
            id: "thich-nhat-hanh", name: "一行禅师", life: "1926–2022", origin: "越南/法国", emoji: "🌸",
            bio: "将正念冥想带入现代生活，提出「入世佛教」——道场不在山上，而在洗碗、走路、呼吸里。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thich_Nhat_Hanh.jpg/400px-Thich_Nhat_Hanh.jpg",
            works: [
              { id:"tn1", name:"正念的奇迹", year:"1975", type:"禅修指引", desc:"「洗碗就只是洗碗。」把正念带入最平凡的日常——这就是禅。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thich_Nhat_Hanh.jpg/600px-Thich_Nhat_Hanh.jpg"},
              { id:"tn2", name:"你可以不生气", year:"2001", type:"禅修指引", desc:"愤怒是苦，正念是出路——用禅的方式转化情绪。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thich_Nhat_Hanh.jpg/600px-Thich_Nhat_Hanh.jpg"},
            ]
          },
        ]
      },
    ]
  },
  literature: {
    label: "文学写作", icon: "📖", color: "#4a7a42",
    movements: [
      {
        id: "minimalist-prose", name: "极简叙事", era: "20世纪 · 美国",
        desc: "冰山只露出七分之一。省略比表达更有力量。",
        tags: ["克制", "留白", "冰山", "有力"],
        artists: [
          {
            id: "hemingway", name: "欧内斯特·海明威", life: "1899–1961", origin: "美国", emoji: "🧊",
            bio: "「冰山理论」创始人，用电报式短句写出最深重的情感。诺贝尔文学奖得主。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/400px-ErnestHemingway.jpg",
            works: [
              { id:"l1", name:"老人与海", year:"1952", type:"中篇小说", desc:"一个老人，一条鱼，一片海。最简单的故事，最重的重量。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/600px-ErnestHemingway.jpg"},
              { id:"l2", name:"太阳照常升起", year:"1926", type:"长篇小说", desc:"「迷惘的一代」的圣经，用最克制的笔触写无处安放的痛苦。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/600px-ErnestHemingway.jpg"},
              { id:"l3", name:"雨中的猫", year:"1925", type:"短篇小说", desc:"几百字，什么都没说清楚，但你知道那段婚姻里所有的孤独。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/600px-ErnestHemingway.jpg"},
            ]
          },
          {
            id: "carver", name: "雷蒙德·卡佛", life: "1938–1988", origin: "美国", emoji: "☕",
            bio: "写蓝领阶级的沉默与绝望，句子短到极致，空白里藏着所有说不出口的。被称为「美国的契诃夫」。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Raymond_Carver_circa_1983.jpg/400px-Raymond_Carver_circa_1983.jpg",
            works: [
              { id:"l4", name:"大教堂", year:"1983", type:"短篇集", desc:"一个盲人帮助叙述者「看见」了大教堂——克制中有巨大的温柔。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Raymond_Carver_circa_1983.jpg/600px-Raymond_Carver_circa_1983.jpg"},
              { id:"l4b", name:"当我们谈论爱情时我们在谈论什么", year:"1981", type:"短篇集", desc:"四个人，一瓶酒，越谈越不知道爱情是什么。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Raymond_Carver_circa_1983.jpg/600px-Raymond_Carver_circa_1983.jpg"},
            ]
          },
          {
            id: "chekhov", name: "安东·契诃夫", life: "1860–1904", origin: "俄国", emoji: "🌿",
            bio: "短篇小说之王，医生兼作家。「如果在第一幕里出现了一把枪，那么到最后一幕它必须被射击。」",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chekhov_1898_by_Osip_Braz.jpg/400px-Chekhov_1898_by_Osip_Braz.jpg",
            works: [
              { id:"ck1", name:"套中人", year:"1898", type:"短篇小说", desc:"别里科夫把自己装在套子里，最终也把周围的人装进了套子——最精准的人性寓言。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chekhov_1898_by_Osip_Braz.jpg/600px-Chekhov_1898_by_Osip_Braz.jpg"},
              { id:"ck2", name:"樱桃园", year:"1904", type:"话剧", desc:"一个贵族庄园的消亡——时代的变迁藏在日常对话的空隙里，没有人是反派。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chekhov_1898_by_Osip_Braz.jpg/600px-Chekhov_1898_by_Osip_Braz.jpg"},
              { id:"ck3", name:"带小狗的女人", year:"1899", type:"短篇小说", desc:"一段「不合规矩」的爱情，却是小说里最真实的爱情。结局没有结局——生活就是这样。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chekhov_1898_by_Osip_Braz.jpg/600px-Chekhov_1898_by_Osip_Braz.jpg"},
            ]
          },
          {
            id: "kafka", name: "弗兰兹·卡夫卡", life: "1883–1924", origin: "奥匈帝国（布拉格）", emoji: "🪲",
            bio: "用噩梦般的场景描写现代官僚制度和人的异化。他嘱咐朋友烧掉所有手稿，幸好没有被遵从。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Franz_Kafka%2C_1923.jpg/400px-Franz_Kafka%2C_1923.jpg",
            works: [
              { id:"kf1", name:"变形记", year:"1915", type:"中篇小说", desc:"一个推销员早晨醒来变成了甲虫——异化的现代人用最荒诞的方式被呈现出来。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Franz_Kafka%2C_1923.jpg/600px-Franz_Kafka%2C_1923.jpg"},
              { id:"kf2", name:"审判", year:"1925", type:"长篇小说", desc:"约瑟夫·K被逮捕，却永远不知道自己犯了什么罪——这是现代官僚制度的完美寓言。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Franz_Kafka%2C_1923.jpg/600px-Franz_Kafka%2C_1923.jpg"},
              { id:"kf3", name:"城堡", year:"1926", type:"长篇小说（未完成）", desc:"K永远无法到达城堡——它近在眼前，却始终无法抵达。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Franz_Kafka%2C_1923.jpg/600px-Franz_Kafka%2C_1923.jpg"},
            ]
          },
        ]
      },
      {
        id: "stream-of-consciousness", name: "意识流", era: "20世纪初 · 欧洲",
        desc: "思维不是线性的，写作也不必是。内心的流动才是最真实的现实。",
        tags: ["内心", "流动", "时间", "记忆"],
        artists: [
          {
            id: "woolf", name: "弗吉尼亚·伍尔夫", life: "1882–1941", origin: "英国", emoji: "🌊",
            bio: "意识流文学的开创者之一，女性主义先驱。「一个女人要写作，必须有钱，还要有一间自己的房间。」",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg/400px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg",
            works: [
              { id:"vw1", name:"达洛维夫人", year:"1925", type:"长篇小说", desc:"一天的故事，两条线索——意识在时间与记忆中不断流动。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg/600px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg"},
              { id:"vw2", name:"到灯塔去", year:"1927", type:"长篇小说", desc:"灯塔始终在那里，但到不到达并不重要——伍尔夫最诗意的小说。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg/600px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg"},
              { id:"vw3", name:"一间自己的房间", year:"1929", type:"随笔", desc:"女性要创作，需要经济独立和个人空间——这篇演讲改变了无数人的命运。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg/600px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_adjusted.jpg"},
            ]
          },
          {
            id: "proust", name: "马塞尔·普鲁斯特", life: "1871–1922", origin: "法国", emoji: "🍪",
            bio: "用一块玛德琳蛋糕的气味写了3000页——因为一个气味能唤起整个童年。记忆才是真正的时间。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Marcel_Proust_1900.jpg/400px-Marcel_Proust_1900.jpg",
            works: [
              { id:"mp1", name:"追忆似水年华", year:"1913–27", type:"长篇小说（7卷）", desc:"世界上最长的小说之一。时间、记忆、艺术、爱——普鲁斯特把整个人生装进了文字。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Marcel_Proust_1900.jpg/600px-Marcel_Proust_1900.jpg"},
            ]
          },
        ]
      },
      {
        id: "magical-realism", name: "魔幻现实主义", era: "20世纪 · 拉美",
        desc: "神奇的事情用日常的语气说，才最震撼。",
        tags: ["寓言", "奇异", "时间感", "神话"],
        artists: [
          {
            id: "marquez", name: "加西亚·马尔克斯", life: "1927–2014", origin: "哥伦比亚", emoji: "🌺",
            bio: "诺贝尔奖得主。他说马孔多是真实存在的，只是在地图上找不到。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gabriel_Garcia_Marquez.jpg/400px-Gabriel_Garcia_Marquez.jpg",
            works: [
              { id:"gg10", name:"百年孤独", year:"1967", type:"长篇小说", desc:"「多年以后，面对行刑队……」布恩迪亚家族的百年兴衰，神话与历史同行。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gabriel_Garcia_Marquez.jpg/600px-Gabriel_Garcia_Marquez.jpg"},
              { id:"gg11", name:"霍乱时期的爱情", year:"1985", type:"长篇小说", desc:"等待了51年9个月4天的爱情——荒诞的坚持成就最纯粹的爱情。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gabriel_Garcia_Marquez.jpg/600px-Gabriel_Garcia_Marquez.jpg"},
              { id:"gg12", name:"百年孤独的预兆·没有人给他写信的上校", year:"1961", type:"中篇小说", desc:"一个老上校等了75年，等那封永远不会来的信——克制与荒诞的完美结合。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gabriel_Garcia_Marquez.jpg/600px-Gabriel_Garcia_Marquez.jpg"},
            ]
          },
          {
            id: "borges", name: "豪尔赫·路易斯·博尔赫斯", life: "1899–1986", origin: "阿根廷", emoji: "📚",
            bio: "图书馆馆长，用短篇小说构建了比宇宙更大的迷宫。他影响了几乎所有后来的文学。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg/400px-Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg",
            works: [
              { id:"jb1", name:"小径分叉的花园", year:"1941", type:"短篇集", desc:"迷宫、镜子、无限、时间——几页纸里装下了整个哲学。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg/600px-Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg"},
              { id:"jb2", name:"巴别图书馆", year:"1941", type:"短篇小说", desc:"一座包含一切可能文字的无限图书馆——知识的终极寓言。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg/600px-Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg"},
            ]
          },
        ]
      },
      {
        id: "lyrical-prose", name: "抒情散文", era: "东西方皆有",
        desc: "散文也可以有音乐的节奏感。句子本身就是感官体验。",
        tags: ["音乐感", "感官", "细腻", "诗意"],
        artists: [
          {
            id: "zhang-ailing", name: "张爱玲", life: "1920–1995", origin: "中国", emoji: "🎵",
            bio: "中文现代散文里感官密度最高的写作者，每个句子都有颜色和气味。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Zhang_ailing.jpg/400px-Zhang_ailing.jpg",
            works: [
              { id:"za1", name:"流言", year:"1944", type:"散文集", desc:"《更衣记》《烬余录》，用散文解剖中国文化，华丽而冷酷。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Zhang_ailing.jpg/600px-Zhang_ailing.jpg"},
              { id:"za2", name:"倾城之恋", year:"1943", type:"中篇小说", desc:"「一座城的陷落成全了一对男女」——历史荒诞与情爱荒诞互相映照。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Zhang_ailing.jpg/600px-Zhang_ailing.jpg"},
              { id:"za3", name:"金锁记", year:"1943", type:"中篇小说", desc:"曹七巧被黄金锁住了一生，也用黄金锁住了周围所有人——张爱玲最狠的一刀。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Zhang_ailing.jpg/600px-Zhang_ailing.jpg"},
            ]
          },
          {
            id: "rilke", name: "里尔克", life: "1875–1926", origin: "奥地利", emoji: "✉️",
            bio: "德语诗人。温柔、有力、不给廉价的答案。影响了无数后来的写作者。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rilke_1900.jpg/400px-Rilke_1900.jpg",
            works: [
              { id:"rk1", name:"给一位年轻诗人的信", year:"1929", type:"书信", desc:"「要爱那些问题本身……也许有一天你会活进答案里。」最好的创作建议。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rilke_1900.jpg/600px-Rilke_1900.jpg"},
              { id:"rk2", name:"杜伊诺哀歌", year:"1923", type:"诗集", desc:"德语诗歌的顶峰之一，关于孤独、美、天使与人的处境。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rilke_1900.jpg/600px-Rilke_1900.jpg"},
              { id:"rk3", name:"旗手的爱与死之歌", year:"1899", type:"散文诗", desc:"里尔克最早成名的作品，散文诗的形式，骑士与爱情与死亡——美到令人心碎。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rilke_1900.jpg/600px-Rilke_1900.jpg"},
            ]
          },
          {
            id: "muzi", name: "木心", life: "1927–2011", origin: "中国", emoji: "🎹",
            bio: "画家、诗人、作家，被遗忘又被重新发现。陈丹青称他「最后的士大夫」。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mu_Xin_in_1980s.jpg/400px-Mu_Xin_in_1980s.jpg",
            works: [
              { id:"mx1", name:"文学回忆录", year:"2013", type:"讲稿", desc:"在纽约给中国艺术家讲了五年世界文学史，陈丹青整理成书。最好的文学入门。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mu_Xin_in_1980s.jpg/600px-Mu_Xin_in_1980s.jpg"},
              { id:"mx2", name:"素履之往", year:"1994", type:"随笔", desc:"极短的随笔和格言，中文最接近尼采的写作风格。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mu_Xin_in_1980s.jpg/600px-Mu_Xin_in_1980s.jpg"},
              { id:"mx3", name:"哥伦比亚的倒影", year:"2006", type:"散文集", desc:"「从前慢」的作者。散文如诗，每句话都有重量，都值得慢慢读。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mu_Xin_in_1980s.jpg/600px-Mu_Xin_in_1980s.jpg"},
            ]
          },
        ]
      },
      {
        id: "essay", name: "随笔散文", era: "蒙田以来 · 永恒",
        desc: "从最私人的出发，抵达最普遍的。随笔是思想的日记。",
        tags: ["真实", "私人", "漫游", "思考"],
        artists: [
          {
            id: "montaigne", name: "蒙田", life: "1533–1592", origin: "法国", emoji: "✍️",
            bio: "发明了「随笔」这个文学形式。研究对象就是自己——膝盖疼、害怕死亡、对友谊的看法。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg/400px-Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg",
            works: [
              { id:"mt1", name:"随笔集", year:"1580–1588", type:"随笔", desc:"「我研究的对象是人，而我最顺手的材料，就是我自己。」写尽了人的处境。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg/600px-Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg"},
            ]
          },
          {
            id: "orwell", name: "乔治·奥威尔", life: "1903–1950", origin: "英国", emoji: "📰",
            bio: "最诚实的散文作家之一，「好的散文就像一块玻璃窗——你不注意到它的存在，只看到后面的东西。」",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/400px-George_Orwell_press_photo.jpg",
            works: [
              { id:"ow1", name:"1984", year:"1949", type:"长篇小说", desc:"老大哥在看着你——极权主义最深刻的预言，今天读来仍令人不安。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/600px-George_Orwell_press_photo.jpg"},
              { id:"ow2", name:"我为什么写作", year:"1946", type:"随笔", desc:"最诚实的写作宣言之一：「写作是因为有什么东西不得不说。」", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/600px-George_Orwell_press_photo.jpg"},
              { id:"ow3", name:"射象", year:"1936", type:"随笔", desc:"一个殖民地警察被迫射杀一头大象——权力、观看、自由意志的第一现场。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/600px-George_Orwell_press_photo.jpg"},
            ]
          },
          {
            id: "sontag", name: "苏珊·桑塔格", life: "1933–2004", origin: "美国", emoji: "📷",
            bio: "美国最重要的公共知识分子之一，写摄影、疾病、战争、美学，每篇文章都是一次思维的革命。",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Susan_Sontag_%28Sbastian_Kim_photo%29.jpg/400px-Susan_Sontag_%28Sbastian_Kim_photo%29.jpg",
            works: [
              { id:"ss1", name:"论摄影", year:"1977", type:"随笔集", desc:"「拍照就是参与另一个人（或物）的凡人性、易逝性、变化性。」摄影美学的必读之作。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Susan_Sontag_%28Sbastian_Kim_photo%29.jpg/600px-Susan_Sontag_%28Sbastian_Kim_photo%29.jpg"},
              { id:"ss2", name:"反对阐释", year:"1966", type:"随笔集", desc:"「不要问作品意味着什么，而是问它如何作用于你。」艺术批评的革命宣言。", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Susan_Sontag_%28Sbastian_Kim_photo%29.jpg/600px-Susan_Sontag_%28Sbastian_Kim_photo%29.jpg"},
            ]
          },
        ]
      },
    ]
  },
};

const DC = { art: "#9c6b3c", philosophy: "#3d6b8c", literature: "#4a7a42" };

async function getAIFeedback(workText, imageBase64) {
  const artistList = Object.values(DB).flatMap(d =>
    d.movements.flatMap(m => m.artists.map(a => `${a.name}（${m.name}，${d.label}）`))
  ).join("、");
  const systemPrompt = `你是一位温柔而真实的创作导师，熟悉艺术、哲学和文学的各种流派。请用中文回答，语气诚恳有温度，给出真实有价值的观察，不要过度夸奖。`;
  const userContent = imageBase64
    ? [
        { type: "image", source: { type: "base64", media_type: "image/jpeg", data: imageBase64 } },
        { type: "text", text: `请分析这件作品${workText ? `（创作者说明：${workText}）` : ""}。\n给出：\n1. 作品印象（2-3句，真实感受）\n2. 风格关键词（2-3个）\n3. 最匹配的创作者（从以下选1-2位：${artistList}）并说明为什么\n4. 一个具体的练习建议\n\n用自然段落写，不用编号。` }
      ]
    : `分析这段文字创作：\n\n「${workText}」\n\n给出：\n1. 作品印象（2-3句，真实感受）\n2. 风格关键词（2-3个）\n3. 最匹配的创作者（从以下选1-2位：${artistList}）并说明为什么\n4. 一个具体的练习建议\n\n用自然段落写，不用编号。`;
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: systemPrompt, messages: [{ role: "user", content: userContent }] })
  });
  const data = await response.json();
  return data.content?.[0]?.text || "分析生成失败，请重试。";
}

function ArtImage({ src, alt, style, emoji = "🖼️" }) {
  const [err, setErr] = useState(false);
  if (err || !src) return (
    <div style={{ ...style, background: "linear-gradient(135deg,#f0ece4 0%,#e8e0d0 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: Math.min(parseInt(style?.height)||120, 48) }}>
      {emoji}
    </div>
  );
  return <img src={src} alt={alt} style={{ ...style, objectFit: "cover" }} onError={() => setErr(true)} />;
}

export default function YimuApp() {
  const [page, setPage] = useState("home");
  const [domain, setDomain] = useState("art");
  const [activeMov, setActiveMov] = useState(null);
  const [activeArtist, setActiveArtist] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [workText, setWorkText] = useState("");
  const [imageBase64, setImageBase64] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [userArtists, setUserArtists] = useState([]);
  const [showContribute, setShowContribute] = useState(false);
  const [contrib, setContrib] = useState({ name:"", life:"", origin:"", bio:"", movement:"", domain:"art", workName:"", workYear:"", workDesc:"" });
  const fileRef = useRef();

  const toggleFav = (workId, work, artist, movement, dk) => {
    setFavorites(prev => {
      if (prev[workId]) { const n = { ...prev }; delete n[workId]; return n; }
      return { ...prev, [workId]: { ...work, artistName: artist.name, artistEmoji: artist.emoji, movementName: movement.name, movementTags: movement.tags, domain: dk } };
    });
  };
  const favList = Object.values(favorites);
  const favCount = favList.length;
  const tagFreq = {};
  favList.forEach(w => (w.movementTags || []).forEach(t => { tagFreq[t] = (tagFreq[t] || 0) + 1; }));
  const topTags = Object.entries(tagFreq).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([t])=>t);
  const domainData = DB[domain];
  const movData = activeMov ? domainData.movements.find(m=>m.id===activeMov) : null;
  const artistData = activeArtist && movData ? movData.artists.find(a=>a.id===activeArtist) : null;

  const handleImage = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { const r = ev.target.result; setImagePreview(r); setImageBase64(r.split(",")[1]); };
    reader.readAsDataURL(file);
  };
  const handleAI = async () => {
    if (!workText.trim() && !imageBase64) return;
    setAiLoading(true); setAiResult("");
    try { setAiResult(await getAIFeedback(workText, imageBase64)); }
    catch { setAiResult("连接出现问题，请稍后再试。"); }
    setAiLoading(false);
  };
  const submitContrib = () => {
    if (!contrib.name) return;
    setUserArtists(prev => [...prev, { ...contrib, id:"u_"+Date.now(), emoji:"✨", isUserAdded:true }]);
    setShowContribute(false);
    setContrib({ name:"", life:"", origin:"", bio:"", movement:"", domain:"art", workName:"", workYear:"", workDesc:"" });
  };
  const navTo = (p) => { setPage(p); if(p==="explore"){ setActiveMov(null); setActiveArtist(null); } };

  return (
    <div style={{ minHeight:"100vh", background:"#f6f2eb", fontFamily:"'Noto Serif SC', Georgia, serif", color:"#1c1710" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Serif+SC:wght@300;400;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .nb{background:none;border:none;cursor:pointer;font-family:'Noto Serif SC',serif;font-size:13px;color:#7a6e58;padding:6px 14px;border-radius:100px;transition:all 0.2s;letter-spacing:0.04em;}
        .nb:hover{color:#1c1710;background:rgba(0,0,0,0.05);} .nb.on{color:#1c1710;font-weight:600;}
        .card{background:#fdfaf4;border:1px solid #e5ddd0;border-radius:8px;transition:all 0.22s;}
        .card:hover{background:#fff;box-shadow:0 5px 22px rgba(0,0,0,0.08);transform:translateY(-2px);}
        .pill{display:inline-block;font-size:11px;padding:3px 10px;border-radius:100px;}
        .cta{background:#1c1710;color:#f6f2eb;border:none;padding:12px 28px;border-radius:100px;cursor:pointer;font-size:14px;font-family:'Noto Serif SC',serif;transition:all 0.2s;letter-spacing:0.04em;}
        .cta:hover{background:#3a3020;transform:translateY(-1px);box-shadow:0 4px 16px rgba(0,0,0,0.18);}
        .cta:disabled{opacity:0.5;cursor:not-allowed;transform:none;box-shadow:none;}
        .ghost{background:none;border:1.5px solid #c8b898;padding:10px 22px;border-radius:100px;cursor:pointer;font-size:13px;font-family:'Noto Serif SC',serif;color:#5a4e38;transition:all 0.2s;}
        .ghost:hover{background:#1c1710;color:#f6f2eb;border-color:#1c1710;}
        .ta{width:100%;background:#fff;border:1.5px solid #ddd5c0;border-radius:10px;padding:14px 16px;font-size:14px;font-family:'Noto Serif SC',serif;color:#1c1710;resize:vertical;outline:none;line-height:1.8;}
        .ta:focus{border-color:#9c6b3c;box-shadow:0 0 0 3px rgba(156,107,60,0.1);}
        .inp{width:100%;background:#fff;border:1.5px solid #ddd5c0;border-radius:6px;padding:10px 14px;font-size:13px;font-family:'Noto Serif SC',serif;color:#1c1710;outline:none;}
        .inp:focus{border-color:#9c6b3c;}
        .bc{font-size:12px;color:#a89878;display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:20px;}
        .bc span{cursor:pointer;} .bc span:hover{color:#5a4e38;text-decoration:underline;}
        .aibox{background:#fff;border:1px solid #ddd5c0;border-radius:10px;padding:24px 26px;line-height:1.95;font-size:14px;color:#3a3020;white-space:pre-wrap;animation:fadeUp 0.4s ease;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .dots::after{content:'·';animation:dt 1.2s infinite;}
        @keyframes dt{0%,30%{content:'·'}40%,60%{content:'··'}70%,100%{content:'···'}}
        .mbg{position:fixed;inset:0;background:rgba(0,0,0,0.4);backdrop-filter:blur(4px);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;}
        .mbox{background:#fdfaf4;border-radius:12px;padding:36px;width:100%;max-width:560px;max-height:88vh;overflow-y:auto;}
        .gg{columns:2;column-gap:14px;}
        @media(min-width:640px){.gg{columns:3;}}
        @media(min-width:900px){.gg{columns:4;}}
        .gi{break-inside:avoid;margin-bottom:14px;border-radius:8px;overflow:hidden;position:relative;background:#fdfaf4;border:1px solid #e5ddd0;transition:all 0.22s;}
        .gi:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,0.12);}
        .gi:hover .go{opacity:1;}
        .go{position:absolute;inset:0;background:linear-gradient(to top,rgba(28,23,16,0.85) 0%,transparent 50%);opacity:0;transition:opacity 0.25s;display:flex;flex-direction:column;justify-content:flex-end;padding:14px;pointer-events:none;}
        .uz{border:2px dashed #c8b898;border-radius:10px;padding:32px 20px;text-align:center;cursor:pointer;transition:all 0.2s;}
        .uz:hover{border-color:#9c6b3c;background:rgba(156,107,60,0.04);}
        ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-thumb{background:#c8b898;border-radius:2px;}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"sticky",top:0,zIndex:100,background:"rgba(246,242,235,0.95)",backdropFilter:"blur(12px)",borderBottom:"1px solid #e5ddd0" }}>
        <div style={{ maxWidth:1100,margin:"0 auto",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56,flexWrap:"wrap",gap:8 }}>
          <button onClick={()=>navTo("home")} style={{ background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"baseline",gap:8 }}>
            <span style={{ fontFamily:"'Cormorant Garant',serif",fontSize:22,fontWeight:300,color:"#1c1710" }}>一亩三分地</span>
            <span style={{ fontSize:10,color:"#a89878",letterSpacing:"0.15em" }}>精神图书馆</span>
          </button>
          <div style={{ display:"flex",gap:2,flexWrap:"wrap" }}>
            {[["home","首页"],["explore","探索百科"],["feedback","创作反馈"],["collection","我的画廊"]].map(([p,l])=>(
              <button key={p} className={`nb ${page===p?"on":""}`} onClick={()=>navTo(p)}>
                {l}{p==="collection"&&favCount>0&&<span style={{ background:"#9c6b3c",color:"#fff",fontSize:9,padding:"1px 5px",borderRadius:100,marginLeft:4 }}>{favCount}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HOME */}
      {page==="home"&&(
        <div style={{ maxWidth:1100,margin:"0 auto",padding:"0 28px" }}>
          <div style={{ padding:"72px 0 56px",borderBottom:"1px solid #e5ddd0" }}>
            <div style={{ fontSize:10,letterSpacing:"0.35em",color:"#a89878",marginBottom:16,textTransform:"uppercase" }}>My Spiritual Library</div>
            <h1 style={{ fontFamily:"'Cormorant Garant',serif",fontSize:"clamp(48px,8vw,96px)",fontWeight:300,lineHeight:1,letterSpacing:"-0.03em",marginBottom:22 }}>一亩三分地</h1>
            <p style={{ fontSize:16,color:"#6a5e48",lineHeight:1.85,maxWidth:500,marginBottom:32 }}>给想创作、但不知道从哪里开始的人。<br/>探索艺术、哲学、文学的流派与风格，找到属于自己的创作方向。</p>
            <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
              <button className="cta" onClick={()=>navTo("explore")}>开始探索 →</button>
              <button className="ghost" onClick={()=>navTo("feedback")}>上传作品获取 AI 反馈</button>
            </div>
          </div>
          {/* Strip */}
          <div style={{ padding:"40px 0 28px" }}>
            <div style={{ fontSize:11,letterSpacing:"0.2em",color:"#a89878",marginBottom:16,textTransform:"uppercase" }}>馆藏预览</div>
            <div style={{ display:"flex",gap:10,overflowX:"auto",paddingBottom:10 }}>
              {[
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/400px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",label:"莫奈 · 睡莲"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",label:"梵高 · 星夜"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/400px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",label:"克里姆特 · 吻"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Persistence_of_Memory.jpg/400px-The_Persistence_of_Memory.jpg",label:"达利 · 记忆的永恒"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/400px-Tsunami_by_hokusai_19th_century.jpg",label:"北斋 · 浪"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg/400px-Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg",label:"雷诺阿 · 舞会"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/400px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",label:"蒙克 · 呐喊"},
                {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Paul_Gauguin_-_D%27ou_venons-nous.jpg/400px-Paul_Gauguin_-_D%27ou_venons-nous.jpg",label:"高更 · 我们从哪里来"},
              ].map((item,i)=>(
                <div key={i} style={{ flexShrink:0,width:150,borderRadius:6,overflow:"hidden",cursor:"pointer" }} onClick={()=>navTo("explore")}>
                  <ArtImage src={item.src} alt={item.label} style={{ width:150,height:100 }} />
                  <div style={{ padding:"5px 8px",fontSize:10,color:"#9a8878",background:"#fdfaf4" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:"28px 0",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:16,borderTop:"1px solid #e5ddd0" }}>
            {[
              {icon:"🗺️",title:"探索百科",desc:"三大领域，流派 → 创作者 → 代表作，逐层深入，随心收藏进你的画廊。",action:()=>navTo("explore"),color:"#9c6b3c"},
              {icon:"🤖",title:"AI 创作反馈",desc:"上传你的文字或图片，AI 分析风格倾向，告诉你最匹配的创作者。",action:()=>navTo("feedback"),color:"#3d6b8c"},
              {icon:"🖼️",title:"我的画廊",desc:"收藏积累成你的专属画廊，自动提炼你的风格关键词。",action:()=>navTo("collection"),color:"#4a7a42"},
            ].map(s=>(
              <div key={s.title} className="card" style={{ padding:"22px",cursor:"pointer",borderLeft:`3px solid ${s.color}` }} onClick={s.action}>
                <div style={{ fontSize:28,marginBottom:12 }}>{s.icon}</div>
                <h3 style={{ fontSize:17,fontWeight:400,marginBottom:8 }}>{s.title}</h3>
                <p style={{ fontSize:13,color:"#6a5e48",lineHeight:1.7,marginBottom:16 }}>{s.desc}</p>
                <button className="ghost" style={{ fontSize:12,padding:"7px 16px" }}>进入 →</button>
              </div>
            ))}
          </div>
          <div style={{ padding:"36px 0 72px",textAlign:"center",borderTop:"1px solid #e5ddd0" }}>
            <p style={{ fontFamily:"'Cormorant Garant',serif",fontSize:22,fontWeight:300,fontStyle:"italic",color:"#7a6e58",lineHeight:1.7 }}>
              「不是要变成别人，<br/>而是在别人的作品里，找到自己。」
            </p>
          </div>
        </div>
      )}

      {/* EXPLORE */}
      {page==="explore"&&(
        <div style={{ maxWidth:1100,margin:"0 auto",padding:"28px 28px 100px" }}>
          <div style={{ display:"flex",gap:12,marginBottom:24,flexWrap:"wrap" }}>
            {Object.entries(DB).map(([key,d])=>(
              <button key={key} onClick={()=>{ setDomain(key);setActiveMov(null);setActiveArtist(null); }}
                style={{ flex:"1 1 150px",padding:"14px",border:`2px solid ${domain===key?DC[key]:"#ddd5c0"}`,background:domain===key?DC[key]:"#fdfaf4",color:domain===key?"#fff":"#5a4e38",borderRadius:8,cursor:"pointer",fontFamily:"'Noto Serif SC',serif",transition:"all 0.2s",textAlign:"center" }}>
                <div style={{ fontSize:22,marginBottom:4 }}>{d.icon}</div>
                <div style={{ fontSize:14 }}>{d.label}</div>
              </button>
            ))}
          </div>
          <div style={{ display:"flex",justifyContent:"flex-end",marginBottom:18 }}>
            <button className="ghost" style={{ fontSize:12,padding:"7px 16px" }} onClick={()=>setShowContribute(true)}>＋ 我来添加创作者</button>
          </div>
          <div className="bc">
            <span onClick={()=>{ setActiveMov(null);setActiveArtist(null); }}>{domainData.label}</span>
            {movData&&<><span style={{ opacity:0.4 }}>›</span><span onClick={()=>setActiveArtist(null)}>{movData.name}</span></>}
            {artistData&&<><span style={{ opacity:0.4 }}>›</span><span>{artistData.name}</span></>}
          </div>

          {/* Level 1 */}
          {!activeMov&&(
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(256px,1fr))",gap:14 }}>
              {domainData.movements.map(mov=>(
                <div key={mov.id} className="card" style={{ padding:"20px 22px",cursor:"pointer",borderLeft:`4px solid ${DC[domain]}` }} onClick={()=>setActiveMov(mov.id)}>
                  <div style={{ fontSize:11,color:"#a89878",marginBottom:5,letterSpacing:"0.1em" }}>{mov.era}</div>
                  <h3 style={{ fontSize:19,fontWeight:400,marginBottom:10 }}>{mov.name}</h3>
                  <p style={{ fontSize:13,color:"#6a5e48",lineHeight:1.65,marginBottom:12 }}>{mov.desc}</p>
                  <div style={{ display:"flex",gap:5,flexWrap:"wrap",marginBottom:12 }}>
                    {mov.tags.map(t=><span key={t} className="pill" style={{ background:DC[domain]+"14",color:DC[domain] }}>{t}</span>)}
                  </div>
                  <div style={{ fontSize:12,color:"#a89878" }}>{mov.artists.length} 位代表人物 →</div>
                </div>
              ))}
              {userArtists.filter(u=>u.domain===domain).length>0&&(
                <div className="card" style={{ padding:"20px 22px",borderLeft:"4px solid #a89878" }}>
                  <div style={{ fontSize:11,color:"#a89878",marginBottom:8 }}>✨ 用户贡献</div>
                  {userArtists.filter(u=>u.domain===domain).map(u=>(
                    <div key={u.id} style={{ marginBottom:12,paddingBottom:12,borderBottom:"1px solid #f0ece4" }}>
                      <div style={{ fontSize:15,fontWeight:400,marginBottom:2 }}>{u.name}</div>
                      <div style={{ fontSize:11,color:"#a89878",marginBottom:4 }}>{u.movement} · {u.origin}</div>
                      <div style={{ fontSize:12,color:"#6a5e48",lineHeight:1.6 }}>{u.bio}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Level 2 */}
          {activeMov&&!activeArtist&&movData&&(
            <div>
              <div className="card" style={{ padding:"20px 24px",marginBottom:22 }}>
                <h2 style={{ fontFamily:"'Cormorant Garant',serif",fontSize:28,fontWeight:300,marginBottom:8 }}>{movData.name}</h2>
                <p style={{ fontSize:14,color:"#5a4e48",lineHeight:1.75,marginBottom:10 }}>{movData.desc}</p>
                <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>
                  {movData.tags.map(t=><span key={t} className="pill" style={{ background:DC[domain]+"14",color:DC[domain] }}>{t}</span>)}
                </div>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:14 }}>
                {movData.artists.map(a=>(
                  <div key={a.id} className="card" style={{ cursor:"pointer",overflow:"hidden" }} onClick={()=>setActiveArtist(a.id)}>
                    <ArtImage src={a.photo} alt={a.name} style={{ width:"100%",height:160 }} emoji={a.emoji} />
                    <div style={{ padding:"14px 16px" }}>
                      <h3 style={{ fontSize:16,fontWeight:400,marginBottom:3 }}>{a.name}</h3>
                      <div style={{ fontSize:11,color:"#a89878",marginBottom:7 }}>{a.life} · {a.origin}</div>
                      <p style={{ fontSize:12,color:"#6a5e48",lineHeight:1.6,marginBottom:8 }}>{a.bio}</p>
                      <div style={{ fontSize:11,color:"#a89878" }}>{a.works.length} 件代表作 →</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Level 3 */}
          {activeArtist&&artistData&&movData&&(
            <div>
              <div className="card" style={{ padding:"22px 26px",marginBottom:22 }}>
                <div style={{ display:"flex",gap:18,flexWrap:"wrap",alignItems:"flex-start" }}>
                  <ArtImage src={artistData.photo} alt={artistData.name} style={{ width:84,height:84,borderRadius:"50%",flexShrink:0 }} emoji={artistData.emoji} />
                  <div style={{ flex:1,minWidth:200 }}>
                    <div style={{ fontSize:11,color:"#a89878",marginBottom:3,letterSpacing:"0.1em" }}>{movData.name} · {artistData.origin}</div>
                    <h2 style={{ fontFamily:"'Cormorant Garant',serif",fontSize:26,fontWeight:300,marginBottom:5 }}>{artistData.name}</h2>
                    <div style={{ fontSize:12,color:"#b09878",marginBottom:8 }}>{artistData.life}</div>
                    <p style={{ fontSize:13,color:"#5a4e38",lineHeight:1.75 }}>{artistData.bio}</p>
                  </div>
                </div>
              </div>
              <div style={{ fontSize:11,letterSpacing:"0.15em",color:"#a89878",textTransform:"uppercase",marginBottom:12 }}>代表作品</div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:14 }}>
                {artistData.works.map(w=>(
                  <div key={w.id} className="card" style={{ overflow:"hidden" }}>
                    <div style={{ position:"relative" }}>
                      <ArtImage src={w.img} alt={w.name} style={{ width:"100%",height:190 }} emoji="🖼️" />
                      <button
                        onClick={()=>toggleFav(w.id,w,artistData,movData,domain)}
                        style={{ position:"absolute",top:9,right:9,background:"rgba(255,255,255,0.92)",border:"none",borderRadius:"50%",width:34,height:34,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.14)",transition:"transform 0.15s" }}
                        onMouseEnter={e=>e.currentTarget.style.transform="scale(1.18)"}
                        onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                      >{favorites[w.id]?"❤️":"🤍"}</button>
                    </div>
                    <div style={{ padding:"13px 15px" }}>
                      <div style={{ fontSize:15,fontWeight:400,marginBottom:2 }}>{w.name}</div>
                      <div style={{ fontSize:11,color:"#a89878",marginBottom:7 }}>{w.year} · {w.type}</div>
                      <p style={{ fontSize:12,color:"#6a5e48",lineHeight:1.65,fontStyle:"italic" }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* FEEDBACK */}
      {page==="feedback"&&(
        <div style={{ maxWidth:700,margin:"0 auto",padding:"44px 28px 100px" }}>
          <div style={{ fontSize:11,letterSpacing:"0.3em",color:"#a89878",marginBottom:10,textTransform:"uppercase" }}>创作反馈</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif",fontSize:"clamp(26px,4vw,40px)",fontWeight:300,marginBottom:10 }}>上传你的作品</h2>
          <p style={{ fontSize:14,color:"#6a5e48",lineHeight:1.8,marginBottom:28 }}>写下你的文字，或者上传你的画——AI 会给出风格分析、最匹配的创作者，以及一个具体的练习建议。</p>
          <div style={{ marginBottom:18 }}>
            <div style={{ fontSize:12,color:"#9a8878",marginBottom:8 }}>上传图片（可选）</div>
            <input type="file" accept="image/*" ref={fileRef} style={{ display:"none" }} onChange={handleImage} />
            {imagePreview?(
              <div style={{ position:"relative",marginBottom:10 }}>
                <img src={imagePreview} alt="preview" style={{ width:"100%",maxHeight:280,objectFit:"contain",borderRadius:10,border:"1px solid #e5ddd0" }} />
                <button onClick={()=>{ setImagePreview(null);setImageBase64(null); }} style={{ position:"absolute",top:8,right:8,background:"rgba(28,23,16,0.7)",color:"#fff",border:"none",borderRadius:"50%",width:28,height:28,cursor:"pointer",fontSize:14 }}>✕</button>
              </div>
            ):(
              <div className="uz" onClick={()=>fileRef.current.click()}>
                <div style={{ fontSize:30,marginBottom:8 }}>🎨</div>
                <div style={{ fontSize:14,color:"#7a6e58",marginBottom:3 }}>点击上传你的画作</div>
                <div style={{ fontSize:12,color:"#a89878" }}>支持 JPG、PNG 格式</div>
              </div>
            )}
          </div>
          <div style={{ marginBottom:18 }}>
            <div style={{ fontSize:12,color:"#9a8878",marginBottom:8 }}>{imagePreview?"补充说明（可选）":"文字作品"}</div>
            <textarea className="ta" rows={5} placeholder={imagePreview?"描述一下创作过程、心情，或你想了解什么……":"粘贴你写的一段文字——日记、随笔、故事片段……任何你自己写的都可以。"} value={workText} onChange={e=>setWorkText(e.target.value)} />
          </div>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24 }}>
            <span style={{ fontSize:12,color:"#b0a080",fontStyle:"italic" }}>{!imageBase64&&workText.length>0?`${workText.length} 字`:imageBase64?"图片已上传":"上传图片或写下文字"}</span>
            <button className="cta" onClick={handleAI} disabled={aiLoading||(!workText.trim()&&!imageBase64)}>
              {aiLoading?<span>分析中<span className="dots"/></span>:"获取风格分析 →"}
            </button>
          </div>
          {aiLoading&&<div style={{ background:"#fff",border:"1px solid #e5ddd0",borderRadius:10,padding:"28px",textAlign:"center",color:"#9a8878",fontStyle:"italic" }}>正在阅读你的作品，稍等片刻……</div>}
          {aiResult&&!aiLoading&&(
            <div>
              <div style={{ fontSize:11,letterSpacing:"0.15em",color:"#a89878",textTransform:"uppercase",marginBottom:10 }}>分析结果</div>
              <div className="aibox">{aiResult}</div>
              <div style={{ marginTop:14,display:"flex",gap:10,flexWrap:"wrap" }}>
                <button className="ghost" onClick={()=>navTo("explore")}>去探索百科 →</button>
                <button className="ghost" onClick={()=>{ setWorkText("");setAiResult("");setImagePreview(null);setImageBase64(null); }}>重新提交</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GALLERY */}
      {page==="collection"&&(
        <div style={{ maxWidth:1100,margin:"0 auto",padding:"44px 28px 100px" }}>
          <div style={{ fontSize:11,letterSpacing:"0.3em",color:"#a89878",marginBottom:8,textTransform:"uppercase" }}>我的画廊</div>
          <h2 style={{ fontFamily:"'Cormorant Garant',serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:300,marginBottom:8 }}>个人收藏馆</h2>
          {favCount===0?(
            <div style={{ textAlign:"center",padding:"90px 0",color:"#9a8b70" }}>
              <div style={{ fontSize:52,marginBottom:16 }}>🤍</div>
              <div style={{ fontSize:16,fontStyle:"italic",marginBottom:10 }}>你的画廊还是空的</div>
              <div style={{ fontSize:13,marginBottom:24,color:"#b0a080" }}>在「探索百科」里点击 ♡ 收藏你喜欢的作品</div>
              <button className="cta" onClick={()=>navTo("explore")}>去探索 →</button>
            </div>
          ):(
            <>
              {topTags.length>0&&(
                <div style={{ background:"#1c1710",color:"#f6f2eb",borderRadius:12,padding:"26px 32px",marginBottom:36,display:"flex",gap:36,alignItems:"center",flexWrap:"wrap" }}>
                  <div>
                    <div style={{ fontSize:10,letterSpacing:"0.28em",color:"rgba(255,255,255,0.38)",marginBottom:10,textTransform:"uppercase" }}>你的风格关键词</div>
                    <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
                      {topTags.map((t,i)=>(
                        <span key={t} style={{ fontFamily:"'Cormorant Garant',serif",fontSize:22,fontWeight:300,color:["#e8c285","#92b8d8","#98c080","#c19ed4","#f0a070"][i] }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ flex:1,minWidth:200 }}>
                    <p style={{ fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.8,fontStyle:"italic" }}>共 {favCount} 件收藏 · 这些是你真实的审美倾向，把它们写下来，就是你的创作起点。</p>
                  </div>
                  <button className="ghost" style={{ borderColor:"rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.7)",whiteSpace:"nowrap" }} onClick={()=>navTo("feedback")}>上传作品获取分析 →</button>
                </div>
              )}
              {Object.entries(DB).map(([dk,d])=>{
                const items=favList.filter(f=>f.domain===dk);
                if(!items.length) return null;
                return(
                  <div key={dk} style={{ marginBottom:44 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:18,paddingBottom:10,borderBottom:"1px solid #e5ddd0" }}>
                      <span style={{ fontSize:16 }}>{d.icon}</span>
                      <span style={{ fontSize:15,color:DC[dk],fontWeight:600 }}>{d.label}</span>
                      <span className="pill" style={{ background:DC[dk]+"18",color:DC[dk] }}>{items.length} 件</span>
                    </div>
                    <div className="gg">
                      {items.map(w=>(
                        <div key={w.id} className="gi">
                          <ArtImage src={w.img} alt={w.name} style={{ width:"100%",height:"auto",minHeight:100,display:"block" }} emoji={w.artistEmoji||"🖼️"} />
                          <div className="go">
                            <div style={{ fontSize:12,color:"#fff",marginBottom:2 }}>{w.name}</div>
                            <div style={{ fontSize:10,color:"rgba(255,255,255,0.65)" }}>{w.artistName} · {w.year}</div>
                          </div>
                          <button onClick={()=>toggleFav(w.id)} style={{ position:"absolute",top:7,right:7,background:"rgba(255,255,255,0.9)",border:"none",borderRadius:"50%",width:27,height:27,cursor:"pointer",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center" }}>❤️</button>
                          <div style={{ padding:"9px 11px 11px",background:"#fdfaf4" }}>
                            <div style={{ fontSize:13,fontWeight:400,marginBottom:2 }}>{w.name}</div>
                            <div style={{ fontSize:10,color:"#a89878",marginBottom:4 }}>{w.artistName}</div>
                            <span className="pill" style={{ background:DC[dk]+"14",color:DC[dk],fontSize:10 }}>{w.movementName}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}

      {/* CONTRIBUTE MODAL */}
      {showContribute&&(
        <div className="mbg" onClick={()=>setShowContribute(false)}>
          <div className="mbox" onClick={e=>e.stopPropagation()}>
            <h3 style={{ fontFamily:"'Cormorant Garant',serif",fontSize:24,fontWeight:300,marginBottom:6 }}>添加一位创作者</h3>
            <p style={{ fontSize:13,color:"#7a6e58",lineHeight:1.7,marginBottom:22 }}>知道一位小众但值得认识的画家、作者或思想家？填写信息，添加到资料库。</p>
            <div style={{ display:"grid",gap:12 }}>
              {[["name","姓名 *","梵高、张爱玲……"],["life","生卒年","1853–1890"],["origin","国家/地区","荷兰、中国……"],["movement","所属流派","印象派、极简叙事……"],["bio","简介","用一两句话介绍风格和重要性"],["workName","代表作名称","《星夜》……"],["workYear","代表作年份","1889"],["workDesc","代表作简介","这件作品的核心是……"]].map(([k,label,ph])=>(
                <div key={k}>
                  <div style={{ fontSize:12,color:"#9a8878",marginBottom:4 }}>{label}</div>
                  {k==="bio"||k==="workDesc"?<textarea className="ta" rows={2} placeholder={ph} value={contrib[k]} onChange={e=>setContrib(p=>({...p,[k]:e.target.value}))} style={{ minHeight:60 }}/>:<input className="inp" placeholder={ph} value={contrib[k]} onChange={e=>setContrib(p=>({...p,[k]:e.target.value}))}/>}
                </div>
              ))}
              <div>
                <div style={{ fontSize:12,color:"#9a8878",marginBottom:6 }}>领域</div>
                <div style={{ display:"flex",gap:8 }}>
                  {Object.entries(DB).map(([k,d])=>(
                    <button key={k} onClick={()=>setContrib(p=>({...p,domain:k}))}
                      style={{ flex:1,padding:"8px",border:`1.5px solid ${contrib.domain===k?DC[k]:"#ddd5c0"}`,background:contrib.domain===k?DC[k]:"none",color:contrib.domain===k?"#fff":"#5a4e38",borderRadius:6,cursor:"pointer",fontSize:12,fontFamily:"'Noto Serif SC',serif" }}>
                      {d.icon} {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display:"flex",gap:10,marginTop:22 }}>
              <button className="cta" onClick={submitContrib} disabled={!contrib.name}>提交添加</button>
              <button className="ghost" onClick={()=>setShowContribute(false)}>取消</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
