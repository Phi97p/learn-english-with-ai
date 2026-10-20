// ========================================================
// JAPANESE_DATA / READING_DATA.JS
// Dữ liệu Đọc hiểu & Shadowing đoạn văn Tiếng Nhật
// Nguồn bài học: datasss/jp/doc_hieu/bai_1.txt
// ========================================================

const JA_READING_PASSAGES_DATA = {
  bai_1: {
    title: "Bài 1: もらいました・あげました (Minna Dokkai)",
    topic: "Hành động cho - nhận quà và đồ đạc",
    icon: "📖",
    fullText: "わたしは 去年 ベトナムから 日本へ 来ました。 ワットさんに テレビを もらいました。 松本さんに 机を もらいました。 山田さんに コートを もらいました。 会社の 人に 自転車を 借りました。 わたしは 皆さんに ベトナムの お土産を あげました。 わたしは 来週 国へ 帰ります。 きょう 会社の 人に 自転車を 返しました。 友達に テレビと 机を あげました。 でも、 コートを あげませんでした。 わたしの 身長は 165センチです。 友達の 身長は 2メートルです。",
    sentences: [
      {
        ja: "わたしは 去年 ベトナムから 日本へ 来ました。",
        romaji: "Watashi wa kyonen Betonamu kara Nihon e kimashita.",
        vi: "Tôi đã từ Việt Nam đến Nhật Bản vào năm ngoái."
      },
      {
        ja: "ワットさんに テレビを もらいました。",
        romaji: "Watto-san ni terebi o moraimashita.",
        vi: "Tôi đã nhận chiếc tivi từ thầy Watt."
      },
      {
        ja: "松本さんに 机を もらいました。",
        romaji: "Matsumoto-san ni tsukue o moraimashita.",
        vi: "Tôi đã nhận cái bàn từ anh Matsumoto."
      },
      {
        ja: "山田さんに コートを もらいました。",
        romaji: "Yamada-san ni kooto o moraimashita.",
        vi: "Tôi đã nhận chiếc áo khoác từ anh Yamada."
      },
      {
        ja: "会社の 人に 自転車を 借りました。",
        romaji: "Kaisha no hito ni jitensha o karimashita.",
        vi: "Tôi đã mượn chiếc xe đạp từ người cùng công ty."
      },
      {
        ja: "わたしは 皆さんに ベトナムの お土産を あげました。",
        romaji: "Watashi wa minasan ni Betonamu no omiyage o agemashita.",
        vi: "Tôi đã tặng quà lưu niệm Việt Nam cho mọi người."
      },
      {
        ja: "わたしは 来週 国へ 帰ります。",
        romaji: "Watashi wa raishuu kuni e kaerimasu.",
        vi: "Tuần sau tôi sẽ về nước."
      },
      {
        ja: "きょう 会社の 人に 自転車を 返しました。",
        romaji: "Kyou kaisha no hito ni jitensha o kaeshimashita.",
        vi: "Hôm nay tôi đã trả xe đạp lại cho người cùng công ty."
      },
      {
        ja: "友達に テレビと 机を あげました。",
        romaji: "Tomodachi ni terebi to tsukue o agemashita.",
        vi: "Tôi đã tặng tivi và bàn cho người bạn."
      },
      {
        ja: "でも、 コートを あげませんでした。",
        romaji: "Demo, kooto o agemasen deshita.",
        vi: "Nhưng mà, tôi đã không tặng chiếc áo khoác."
      },
      {
        ja: "わたしの 身長は 165センチです。",
        romaji: "Watashi no shinchou wa hyakurokujuugosenti desu.",
        vi: "Chiều cao của tôi là 165 cm."
      },
      {
        ja: "友達の 身長は 2メートルです。",
        romaji: "Tomodachi no shinchou wa ni meetoru desu.",
        vi: "Chiều cao của người bạn là 2 mét."
      }
    ]
  },
  bai_2: {
    title: "Bài 2: 町の 生活・田舎の 生活 (Minna Dokkai)",
    topic: "Cuộc sống ở thành phố và cuộc sống ở thôn quê",
    icon: "🏞️",
    fullText: "山川さん、お元気ですか。 もう 12月です。 寒いですね。 町は 今 とても にぎやかです。 そして、きれいです。 仕事は 忙しいですが、おもしろいです。 お正月に わたしの うちへ 来ませんか。 いっしょに 楽しい お正月の パーティーを しましょう。 12月3日 町田 太郎。 町田さん、先週は どうも ありがとう ございました。 町の 生活は おもしろいですね。 そして、便利です。 でも、とても 忙しいです。 食べ物も 高いです。 町の 生活は 大変ですね。 田舎の 生活は あまり 便利じゃ ありませんが、静かです。 山は とても きれいです。 今度は わたしの うちへ 来ませんか。 ここの 野菜は おいしいですよ。 いっしょに ごはんを 食べましょう。 1月7日 山川 健。",
    sentences: [
      {
        ja: "山川さん、お元気ですか。",
        romaji: "Yamakawa-san, ogenki desu ka.",
        vi: "Anh Yamakawa, anh có khỏe không?"
      },
      {
        ja: "もう 12月です。",
        romaji: "Mou juunigatsu desu.",
        vi: "Đã là tháng 12 rồi."
      },
      {
        ja: "寒いですね。",
        romaji: "Samui desu ne.",
        vi: "Trời lạnh nhỉ."
      },
      {
        ja: "町は 今 とても にぎやかです。",
        romaji: "Machi wa ima totemo nigiyaka desu.",
        vi: "Thành phố bây giờ rất nhộn nhịp."
      },
      {
        ja: "そして、きれいです。",
        romaji: "Soshite, kirei desu.",
        vi: "Và còn rất đẹp nữa."
      },
      {
        ja: "仕事は 忙しいですが、おもしろいです。",
        romaji: "Shigoto wa isogashii desu ga, omoshiroi desu.",
        vi: "Công việc tuy bận rộn nhưng rất thú vị."
      },
      {
        ja: "お正月に わたしの うちへ 来ませんか。",
        romaji: "Oshougatsu ni watashi no uchi e kimasen ka.",
        vi: "Dịp Tết anh có đến nhà tôi chơi không?"
      },
      {
        ja: "いっしょに 楽しい お正月の パーティーを しましょう。",
        romaji: "Issho ni tanoshii oshougatsu no paatii o shimashou.",
        vi: "Chúng ta hãy cùng nhau tổ chức một bữa tiệc Tết thật vui vẻ nhé."
      },
      {
        ja: "12月3日 町田 太郎",
        romaji: "Juunigatsu mikka Machida Tarou",
        vi: "Ngày 3 tháng 12 - Machida Taro"
      },
      {
        ja: "町田さん、先週は どうも ありがとう ございました。",
        romaji: "Machida-san, senshuu wa doumo arigatou gozaimashita.",
        vi: "Anh Machida, tuần trước cảm ơn anh rất nhiều."
      },
      {
        ja: "町の 生活は おもしろいですね。",
        romaji: "Machi no seikatsu wa omoshiroi desu ne.",
        vi: "Cuộc sống ở thành phố thật thú vị nhỉ."
      },
      {
        ja: "そして、便利です。",
        romaji: "Soshite, benri desu.",
        vi: "Và cũng rất tiện lợi nữa."
      },
      {
        ja: "でも、とても 忙しいです。",
        romaji: "Demo, totemo isogashii desu.",
        vi: "Nhưng mà rất bận rộn."
      },
      {
        ja: "食べ物も 高いです。",
        romaji: "Tabemono mo takai desu.",
        vi: "Đồ ăn cũng đắt đỏ nữa."
      },
      {
        ja: "町の 生活は 大変ですね。",
        romaji: "Machi no seikatsu wa taihen desu ne.",
        vi: "Cuộc sống ở thành phố vất vả thật đấy."
      },
      {
        ja: "田舎の 生活は あまり 便利じゃ ありませんが、静かです。",
        romaji: "Inaka no seikatsu wa amari benri ja arimasen ga, shizuka desu.",
        vi: "Cuộc sống ở thôn quê tuy không tiện lợi lắm nhưng rất yên tĩnh."
      },
      {
        ja: "山は とても きれいです。",
        romaji: "Yama wa totemo kirei desu.",
        vi: "Núi non ở đây rất đẹp."
      },
      {
        ja: "今度は わたしの うちへ 来ませんか。",
        romaji: "Kondo wa watashi no uchi e kimasen ka.",
        vi: "Lần tới anh có đến nhà tôi chơi không?"
      },
      {
        ja: "ここの 野菜は おいしいですよ。",
        romaji: "Koko no yasai wa oishii desu yo.",
        vi: "Rau ở đây rất ngon đấy."
      },
      {
        ja: "いっしょに ごはんを 食べましょう。",
        romaji: "Issho ni gohan o tabemashou.",
        vi: "Chúng ta hãy cùng nhau ăn bữa cơm nhé."
      },
      {
        ja: "1月7日 山川 健",
        romaji: "Ichigatsu nanoka Yamakawa Ken",
        vi: "Ngày 7 tháng 1 - Yamakawa Ken"
      }
    ]
  },
  bai_3: {
    title: "Bài 3: 日本が 好きです (Minna Dokkai)",
    topic: "Phỏng vấn nhiếp ảnh gia Musya về cuộc sống tại Nhật",
    icon: "📸",
    fullText: "ムスヤさんは 写真家です。 日本の 山の 写真を たくさん 撮りました。 うちは どちらですか。 長野です。 長野で 日本の 古い うちを 買いました。 畳の 部屋は とても 便利ですから、好きです。 仕事と 食事を 同じ 部屋で します。 そして、同じ 部屋で 寝ます。 ムスヤさんの お国は タンザニアですね。 長野は 寒いですか。 ええ、とても 寒いですから、大きい こたつを 買いました。 でも、わたしは 長野の 冬が 好きです。 冬の 山は きれいです。 奥さんは 日本の 方ですね。 どんな 方ですか。 妻は いつも 元気です。 そして、料理が 上手です。 毎日 妻の おいしい 料理を 食べますから、わたしも 元気です。 日本の 生活は どうですか。 日本の 生活は おもしろいです。 わたしは 日本が とても 好きです。 ありがとう ございました。",
    sentences: [
      {
        ja: "ムスヤさんは 写真家です。",
        romaji: "Musuya-san wa shashinka desu.",
        vi: "Anh Musya là một nhiếp ảnh gia."
      },
      {
        ja: "日本の 山の 写真を たくさん 撮りました。",
        romaji: "Nihon no yama no shashin o takusan torimashita.",
        vi: "Anh ấy đã chụp rất nhiều bức ảnh về núi non Nhật Bản."
      },
      {
        ja: "うちは どちらですか。",
        romaji: "Uchi wa dochira desu ka.",
        vi: "Nhà của anh ở đâu vậy?"
      },
      {
        ja: "長野です。",
        romaji: "Nagano desu.",
        vi: "Ở Nagano."
      },
      {
        ja: "長野で 日本の 古い うちを 買いました。",
        romaji: "Nagano de Nihon no furui uchi o kaimashita.",
        vi: "Tôi đã mua một ngôi nhà cổ của Nhật ở Nagano."
      },
      {
        ja: "畳の 部屋は とても 便利ですから、好きです。",
        romaji: "Tatami no heya wa totemo benri desu kara, suki desu.",
        vi: "Căn phòng chiếu tatami rất tiện lợi nên tôi rất thích."
      },
      {
        ja: "仕事と 食事を 同じ 部屋で します。",
        romaji: "Shigoto to shokuji o onaji heya de shimasu.",
        vi: "Tôi làm việc và ăn cơm trong cùng một căn phòng."
      },
      {
        ja: "そして、同じ 部屋で 寝ます。",
        romaji: "Soshite, onaji heya de nemasu.",
        vi: "Và tôi cũng ngủ luôn trong căn phòng đó."
      },
      {
        ja: "ムスヤさんの お国は タンザニアですね。",
        romaji: "Musuya-san no okuni wa Tanzania desu ne.",
        vi: "Đất nước của anh Musya là Tanzania đúng không ạ?"
      },
      {
        ja: "長野は 寒いですか。",
        romaji: "Nagano wa samui desu ka.",
        vi: "Nagano có lạnh không ạ?"
      },
      {
        ja: "ええ、とても 寒いですから、大きい こたつを 買いました。",
        romaji: "Ee, totemo samui desu kara, ookii kotatsu o kaimashita.",
        vi: "Vâng, vì rất lạnh nên tôi đã mua một chiếc bàn sưởi kotatsu lớn."
      },
      {
        ja: "でも、わたしは 長野の 冬が 好きです。",
        romaji: "Demo, watashi wa Nagano no fuyu ga suki desu.",
        vi: "Nhưng mà tôi lại rất thích mùa đông ở Nagano."
      },
      {
        ja: "冬の 山は きれいです。",
        romaji: "Fuyu no yama wa kirei desu.",
        vi: "Núi non vào mùa đông rất đẹp."
      },
      {
        ja: "奥さんは 日本の 方ですね。",
        romaji: "Okusan wa Nihon no kata desu ne.",
        vi: "Vợ của anh là người Nhật đúng không ạ?"
      },
      {
        ja: "どんな 方ですか。",
        romaji: "Donna kata desu ka.",
        vi: "Chị ấy là người như thế nào vậy?"
      },
      {
        ja: "妻は いつも 元気です。",
        romaji: "Tsuma wa itsumo genki desu.",
        vi: "Vợ tôi lúc nào cũng tràn đầy năng lượng."
      },
      {
        ja: "そして、料理が 上手です。",
        romaji: "Soshite, ryouri ga jouzu desu.",
        vi: "Và cô ấy nấu ăn rất giỏi."
      },
      {
        ja: "毎日 妻の おいしい 料理を 食べますから、わたしも 元気です。",
        romaji: "Mainichi tsuma no oishii ryouri o tabemasu kara, watashi mo genki desu.",
        vi: "Hàng ngày đều được ăn các món ngon của vợ nấu nên tôi cũng luôn khỏe mạnh."
      },
      {
        ja: "日本の 生活は どうですか。",
        romaji: "Nihon no seikatsu wa dou desu ka.",
        vi: "Cuộc sống ở Nhật Bản thì như thế nào?"
      },
      {
        ja: "日本の 生活は おもしろいです。",
        romaji: "Nihon no seikatsu wa omoshiroi desu.",
        vi: "Cuộc sống ở Nhật rất thú vị."
      },
      {
        ja: "わたしは 日本が とても 好きです。",
        romaji: "Watashi wa Nihon ga totemo suki desu.",
        vi: "Tôi rất yêu mến đất nước Nhật Bản."
      },
      {
        ja: "ありがとう ございました。",
        romaji: "Arigatou gozaimashita.",
        vi: "Cảm ơn anh rất nhiều."
      }
    ]
  },
  bai_4: {
    title: "Bài 4: 美術館 (Minna Dokkai)",
    topic: "Miêu tả các bức tranh trong bảo tàng mỹ thuật",
    icon: "🎨",
    fullText: "きのう 友達と 「みんなの 美術館」へ 行きました。 おもしろい 絵が たくさん ありました。 1. 窓の 近くに 男の 人と 女の 人が います。 女の 人の うしろに 地図が あります。 ヨーロッパの 地図です。 2. 絵の 真ん中に 町が あります。 町の 左に 男の 人が、右に 女の 人が います。 町の 右の 上に 木が あります。 木の 中に 男の 人と 女の 人が います。 この 女の 人は 男の 人の 奥さんです。 3. テーブルの 上に 果物や ナイフや グラスが あります。 でも、ワインは ありません。 4. ピアノの 上に 花が あります。 ピアノの 前に 女の 人が います。 女の 人の そばに 猫が います。 猫は 目が ありますが、女の 人は 目が ありません。 5. 高い 山が あります。 山の 上に 白い 雲が あります。 山と 山の 間に 川が あります。 川の 近くに 桜の 木が たくさん あります。",
    sentences: [
      {
        ja: "きのう 友達と 「みんなの 美術館」へ 行きました。",
        romaji: "Kinou tomodachi to 'Minna no Bijutsukan' e ikimashita.",
        vi: "Hôm qua tôi đã cùng bạn đến 'Bảo tàng mỹ thuật Mọi người'."
      },
      {
        ja: "おもしろい 絵が たくさん ありました。",
        romaji: "Omoshiroi e ga takusan arimashita.",
        vi: "Có rất nhiều bức tranh thú vị."
      },
      {
        ja: "1. 窓の 近くに 男の 人と 女の 人が います。",
        romaji: "1. Mado no chikaku ni otoko no hito to onna no hito ga imasu.",
        vi: "1. Ở gần cửa sổ có một người đàn ông và một người phụ nữ."
      },
      {
        ja: "女の 人の うしろに 地図が あります。",
        romaji: "Onna no hito no ushiro ni chizu ga arimasu.",
        vi: "Phía sau người phụ nữ có một tấm bản đồ."
      },
      {
        ja: "ヨーロッパの 地図です。",
        romaji: "Yooroppa no chizu desu.",
        vi: "Đó là bản đồ châu Âu."
      },
      {
        ja: "2. 絵の 真ん中に 町が あります。",
        romaji: "2. E no mannaka ni machi ga arimasu.",
        vi: "2. Ở chính giữa bức tranh có một thị trấn."
      },
      {
        ja: "町の 左に 男の 人が、右に 女の 人が います。",
        romaji: "Machi no hidari ni otoko no hito ga, migi ni onna no hito ga imasu.",
        vi: "Bên trái thị trấn có người đàn ông, bên phải có người phụ nữ."
      },
      {
        ja: "町の 右の 上に 木が あります。",
        romaji: "Machi no migi no ue ni ki ga arimasu.",
        vi: "Phía trên bên phải thị trấn có một cái cây."
      },
      {
        ja: "木の 中に 男の 人と 女の 人が います。",
        romaji: "Ki no naka ni otoko no hito to onna no hito ga imasu.",
        vi: "Bên trong cái cây có người đàn ông và người phụ nữ."
      },
      {
        ja: "この 女の 人は 男の 人の 奥さんです。",
        romaji: "Kono onna no hito wa otoko no hito no okusan desu.",
        vi: "Người phụ nữ này là vợ của người đàn ông."
      },
      {
        ja: "3. テーブルの 上に 果物や ナイフや グラスが あります。",
        romaji: "3. Teeburu no ue ni kudamono ya naifu ya gurasu ga arimasu.",
        vi: "3. Trên bàn có hoa quả, dao và ly."
      },
      {
        ja: "でも、ワインは ありません。",
        romaji: "Demo, wain wa arimasen.",
        vi: "Nhưng không có rượu vang."
      },
      {
        ja: "4. ピアノの 上に 花が あります。",
        romaji: "4. Piano no ue ni hana ga arimasu.",
        vi: "4. Trên cây đàn piano có hoa."
      },
      {
        ja: "ピアノの 前に 女の 人が います。",
        romaji: "Piano no mae ni onna no hito ga imasu.",
        vi: "Phía trước đàn piano có một người phụ nữ."
      },
      {
        ja: "女の 人の そばに 猫が います。",
        romaji: "Onna no hito no soba ni neko ga imasu.",
        vi: "Bên cạnh người phụ nữ có một con mèo."
      },
      {
        ja: "猫は 目が ありますが、女の 人は 目が ありません。",
        romaji: "Neko wa me ga arimasu ga, onna no hito wa me ga arimasen.",
        vi: "Con mèo có mắt, nhưng người phụ nữ lại không có mắt."
      },
      {
        ja: "5. 高い 山が あります。",
        romaji: "5. Takai yama ga arimasu.",
        vi: "5. Có một ngọn núi cao."
      },
      {
        ja: "山の 上に 白い 雲が あります。",
        romaji: "Yama no ue ni shiroi kumo ga arimasu.",
        vi: "Phía trên núi có những đám mây trắng."
      },
      {
        ja: "山と 山の 間に 川が あります。",
        romaji: "Yama to yama no aida ni kawa ga arimasu.",
        vi: "Ở giữa những ngọn núi có một con sông."
      },
      {
        ja: "川の 近くに 桜の 木が たくさん あります。",
        romaji: "Kawa no chikaku ni sakura no ki ga takusan arimasu.",
        vi: "Ở gần con sông có rất nhiều cây hoa anh đào."
      }
    ]
  },
  bai_5: {
    title: "Bài 5: お祭り (Minna Dokkai)",
    topic: "Homestay và trải nghiệm lễ hội mùa hè Nhật Bản",
    icon: "🏮",
    fullText: "先週 佐藤さんの うちで １週間 ホームステイを しました。 佐藤さんの 家族は ４人です。 お父さんと お母さんと ８歳の 健太ちゃんと ５歳の みきちゃんです。 佐藤さんの うちの 近くに 大きい 神社が あります。 神社の 夏の お祭りは とても 有名です。 わたしは 佐藤さんの 家族と いっしょに 行きました。 神社に いろいろな ゲームの 店や 食べ物の 店が ありました。 健太ちゃんは ゲームを ３回 しました。 そして、おもちゃの 車を ２台 もらいました。 わたしは お祭りの Ｔシャツを 買いました。 それから たこ焼きを 食べました。 健太ちゃんは ６つ、みきちゃんは ４つ、わたしは ８つ 食べました。 お父さんは お好み焼きを ２枚 食べました。 それから おみこしを 見ました。 お祭りの 踊りも 見ました。 舞台の 上に きれいな 女の 人が １人と かわいい 女の 子が ４人 いました。 わたしは、写真を たくさん 撮りました。 日本の お祭りは おもしろいです。 そして、楽しいです。",
    sentences: [
      {
        ja: "先週 佐藤さんの うちで １週間 ホームステイを しました。",
        romaji: "Senshuu Satou-san no uchi de isshuukan hoomusutei o shimashita.",
        vi: "Tuần trước tôi đã homestay ở nhà anh Sato trong 1 tuần."
      },
      {
        ja: "佐藤さんの 家族は ４人です。",
        romaji: "Satou-san no kazoku wa yonin desu.",
        vi: "Gia đình anh Sato có 4 người."
      },
      {
        ja: "お父さんと お母さんと ８歳の 健太ちゃんと ５歳の みきちゃんです。",
        romaji: "Otousan to okaasan to hassai no Kenta-chan to gosai no Miki-chan desu.",
        vi: "Gồm có bố, mẹ, bé Kenta 8 tuổi và bé Miki 5 tuổi."
      },
      {
        ja: "佐藤さんの うちの 近くに 大きい 神社が あります。",
        romaji: "Satou-san no uchi no chikaku ni ookii jinja ga arimasu.",
        vi: "Gần nhà anh Sato có một ngôi đền lớn."
      },
      {
        ja: "神社の 夏の お祭りは とても 有名です。",
        romaji: "Jinja no natsu no omatsuri wa totemo yuumei desu.",
        vi: "Lễ hội mùa hè của ngôi đền rất nổi tiếng."
      },
      {
        ja: "わたしは 佐藤さんの 家族と いっしょに 行きました。",
        romaji: "Watashi wa Satou-san no kazoku to issho ni ikimashita.",
        vi: "Tôi đã đi cùng với gia đình anh Sato."
      },
      {
        ja: "神社に いろいろな ゲームの 店や 食べ物の 店が ありました。",
        romaji: "Jinja ni iroirona geemu no mise ya tabemono no mise ga arimashita.",
        vi: "Ở đền có nhiều gian hàng trò chơi và quán ăn."
      },
      {
        ja: "健太ちゃんは ゲームを ３回 しました。",
        romaji: "Kenta-chan wa geemu o sankai shimashita.",
        vi: "Bé Kenta đã chơi trò chơi 3 lần."
      },
      {
        ja: "そして、おもちゃの 車を ２台 もらいました。",
        romaji: "Soshite, omocha no kuruma o nidai moraimashita.",
        vi: "Và bé nhận được 2 chiếc ô tô đồ chơi."
      },
      {
        ja: "わたしは お祭りの Ｔシャツを 買いました。",
        romaji: "Watashi wa omatsuri no tiishatsu o kaimashita.",
        vi: "Tôi đã mua chiếc áo phông lễ hội."
      },
      {
        ja: "それから たこ焼きを 食べました。",
        romaji: "Sorekara takoyaki o tabemashita.",
        vi: "Sau đó chúng tôi đã ăn bánh bạch tuộc takoyaki."
      },
      {
        ja: "健太ちゃんは ６つ、みきちゃんは ４つ、わたしは ８つ 食べました。",
        romaji: "Kenta-chan wa muttsu, Miki-chan wa yottsu, watashi wa yattsu tabemashita.",
        vi: "Bé Kenta ăn 6 cái, bé Miki ăn 4 cái, tôi ăn 8 cái."
      },
      {
        ja: "お父さんは お好み焼きを ２枚 食べました。",
        romaji: "Otousan wa okonomiyaki o nimai tabemashita.",
        vi: "Bố đã ăn 2 cái bánh xèo okonomiyaki."
      },
      {
        ja: "それから おみこしを 見ました。",
        romaji: "Sorekara omikoshi o mimashita.",
        vi: "Sau đó chúng tôi đã xem kiệu rước omikoshi."
      },
      {
        ja: "お祭りの 踊りも 見ました。",
        romaji: "Omatsuri no odori mo mimashita.",
        vi: "Chúng tôi cũng xem các điệu nhảy của lễ hội."
      },
      {
        ja: "舞台の 上に きれいな 女の 人が １人と かわいい 女の 子が ４人 いました。",
        romaji: "Butai no ue ni kireina onna no hito ga hitori to kawaii onna no ko ga yonin imashita.",
        vi: "Trên sân khấu có 1 người phụ nữ xinh đẹp và 4 bé gái dễ thương."
      },
      {
        ja: "わたしは、写真を たくさん 撮りました。",
        romaji: "Watashi wa, shashin o takusan torimashita.",
        vi: "Tôi đã chụp rất nhiều ảnh."
      },
      {
        ja: "日本の お祭りは おもしろいです。",
        romaji: "Nihon no omatsuri wa omoshiroi desu.",
        vi: "Lễ hội của Nhật Bản thật thú vị."
      },
      {
        ja: "そして、楽しいです。",
        romaji: "Soshite, tanoshii desu.",
        vi: "Và rất vui vẻ."
      }
    ]
  },
  bai_6: {
    title: "Bài 6: 沖縄旅行 (Minna Dokkai)",
    topic: "Chuyến du lịch khám phá hòn đảo Okinawa",
    icon: "🏝️",
    fullText: "わたしは ことしの ３月に 初めて 沖縄へ 行きました。 沖縄は 九州の 南に あります。 大阪から 船で 行きました。 ３８時間 かかりました。 それから １週間 旅行しました。 毎日 いい 天気でしたが、 少し 暑かったです。 いろいろな 所へ 行きました。 那覇は 沖縄で いちばん 大きい 町です。 旅行者が とても 多かったです。 台湾や 東南アジアの 人も たくさん いました。 店に 珍しい 物が たくさん ありました。 海は ほんとうに すばらしかったです。 珊瑚礁に きれいな 魚が たくさん いました。 時々 沖縄の ことばが わかりませんでしたが、 人は 親切でした。 沖縄の 料理は おいしかったです。 それに 沖縄の 音楽も すてきでした。 沖縄旅行は とても 楽しかったです。 わたしは 沖縄が 大好きです。",
    sentences: [
      {
        ja: "わたしは ことしの ３月に 初めて 沖縄へ 行きました。",
        romaji: "Watashi wa kotoshi no sangatsu ni hajimete Okinawa e ikimashita.",
        vi: "Vào tháng 3 năm nay, lần đầu tiên tôi đã đi du lịch Okinawa."
      },
      {
        ja: "沖縄は 九州の 南に あります。",
        romaji: "Okinawa wa Kyuushuu no minami ni arimasu.",
        vi: "Okinawa nằm ở phía nam của vùng Kyushu."
      },
      {
        ja: "大阪から 船で 行きました。",
        romaji: "Oosaka kara fune de ikimashita.",
        vi: "Tôi đã đi bằng thuyền từ Osaka."
      },
      {
        ja: "３８時間 かかりました。",
        romaji: "Sanjuuhachi jikan kakarimashita.",
        vi: "Chuyến đi mất 38 tiếng đồng hồ."
      },
      {
        ja: "それから １週間 旅行しました。",
        romaji: "Sorekara isshuukan ryokou shimashita.",
        vi: "Sau đó tôi đã đi du lịch trong vòng 1 tuần."
      },
      {
        ja: "毎日 いい 天気でしたが、 少し 暑かったです。",
        romaji: "Mainichi ii tenki deshita ga, sukoshi atsukatta desu.",
        vi: "Mỗi ngày thời tiết đều đẹp, nhưng hơi nóng một chút."
      },
      {
        ja: "いろいろな 所へ 行きました。",
        romaji: "Iroirona tokoro e ikimashita.",
        vi: "Tôi đã đi tham quan nhiều nơi."
      },
      {
        ja: "那覇は 沖縄で いちばん 大きい 町です。",
        romaji: "Naha wa Okinawa de ichiban ookii machi desu.",
        vi: "Naha là thành phố lớn nhất ở Okinawa."
      },
      {
        ja: "旅行者が とても 多かったです。",
        romaji: "Ryokousha ga totemo ookatta desu.",
        vi: "Khách du lịch ở đó rất đông."
      },
      {
        ja: "台湾や 東南アジアの 人も たくさん いました。",
        romaji: "Taiwan ya Tounan Ajia no hito mo takusan imashita.",
        vi: "Cũng có rất nhiều du khách đến từ Đài Loan và Đông Nam Á."
      },
      {
        ja: "店に 珍しい 物が たくさん ありました。",
        romaji: "Mise ni mezurashii mono ga takusan arimashita.",
        vi: "Trong các cửa hàng có rất nhiều đồ độc đáo, lạ mắt."
      },
      {
        ja: "海は ほんとうに すばらしかったです。",
        romaji: "Umi wa hontou ni subarashikatta desu.",
        vi: "Biển thì thực sự tuyệt đẹp."
      },
      {
        ja: "珊瑚礁に きれいな 魚が たくさん いました。",
        romaji: "Sangoshou ni kireina sakana ga takusan imashita.",
        vi: "Ở rạn san hô có rất nhiều loài cá sặc sỡ, xinh đẹp."
      },
      {
        ja: "時々 沖縄の ことばが わかりませんでしたが、 人は 親切でした。",
        romaji: "Tokidoki Okinawa no kotoba ga wakarimasen deshita ga, hito wa shinsetsu deshita.",
        vi: "Thỉnh thoảng tôi không hiểu phương ngữ Okinawa, nhưng người dân rất thân thiện, nhiệt tình."
      },
      {
        ja: "沖縄の 料理は おいしかったです。",
        romaji: "Okinawa no ryouri wa oishikatta desu.",
        vi: "Món ăn Okinawa rất ngon."
      },
      {
        ja: "それに 沖縄の 音楽も すてきでした。",
        romaji: "Sore ni Okinawa no ongaku mo suteki deshita.",
        vi: "Thêm vào đó, âm nhạc Okinawa cũng rất tuyệt vời."
      },
      {
        ja: "沖縄旅行は とても 楽しかったです。",
        romaji: "Okinawa ryokou wa totemo tanoshikatta desu.",
        vi: "Chuyến du lịch Okinawa đã vô cùng vui vẻ."
      },
      {
        ja: "わたしは 沖縄が 大好きです。",
        romaji: "Watashi wa Okinawa ga daisuki desu.",
        vi: "Tôi rất yêu thích Okinawa."
      }
    ]
  },
  bai_7: {
    title: "Bài 7: 宝くじ (Minna Dokkai)",
    topic: "Giấc mơ trúng vé số 300 triệu yên",
    icon: "🎟️",
    fullText: "宝くじが 当たりました。 3億円です。 信じられません。 仕事を やめます。 そして、 いろいろな 国へ 遊びに 行きたいです。 うちや 車が 欲しいです。 朝 9時に 銀行へ 3億円を もらいに 行きました。 机の 上に 新しい 一万円札が 3万枚 ありました。 銀行員は 機械で 数えました。 わたしは 自分で 数えたかったですから、 手で 数えました。 1枚、 2枚、 3枚……とても 疲れましたから、 ちょっと 休みました。 銀行の 隣の レストランへ 食事に 行きました。 そして、 また 数えました。 5時まで かかりました。 それから 警官と いっしょに うちへ 帰りました。 3万枚の 一万円札は とても 重かったです。 3億円 ありますから、 警官に 100万円 あげました。 「ありがとう ございます。 あなたは いい 人ですね。 あなたは……」 「あなた、 あなた、 7時ですよ。」 妻の 声です。 夢が 終わりました。 朝です。 楽しい 夢でした。 今晩も 同じ 夢を 見たいです。",
    sentences: [
      {
        ja: "宝くじが 当たりました。",
        romaji: "Takarakuji ga atarimashita.",
        vi: "Tôi đã trúng vé số."
      },
      {
        ja: "3億円です。",
        romaji: "San'okuen desu.",
        vi: "Trúng những 300 triệu yên."
      },
      {
        ja: "信じられません。",
        romaji: "Shinjiraremasen.",
        vi: "Thật không thể tin nổi."
      },
      {
        ja: "仕事を やめます。",
        romaji: "Shigoto o yamemasu.",
        vi: "Tôi sẽ bỏ việc."
      },
      {
        ja: "そして、 いろいろな 国へ 遊びに 行きたいです。",
        romaji: "Soshite, iroirona kuni e asobi ni ikitai desu.",
        vi: "Và rồi, tôi muốn đi du lịch đến nhiều quốc gia."
      },
      {
        ja: "うちや 車が 欲しいです。",
        romaji: "Uchi ya kuruma ga hoshii desu.",
        vi: "Tôi muốn có cả nhà và xe hơi."
      },
      {
        ja: "朝 9時に 銀行へ 3億円を もらいに 行きました。",
        romaji: "Asa kuji ni ginkou e san'okuen o morai ni ikimashita.",
        vi: "Sáng 9 giờ, tôi đã đến ngân hàng để nhận 300 triệu yên."
      },
      {
        ja: "机の 上に 新しい 一万円札が 3万枚 ありました。",
        romaji: "Tsukue no ue ni atarashii ichiman'ensatsu ga sanmanmai arimashita.",
        vi: "Ở trên bàn có sẵn 3 vạn (30.000) tờ 1 vạn yên mới tinh."
      },
      {
        ja: "銀行員は 機械で 数えました。",
        romaji: "Ginkouin wa kikai de kazoemashita.",
        vi: "Nhân viên ngân hàng đã đếm tiền bằng máy."
      },
      {
        ja: "わたしは 自分で 数えたかったですから、 手で 数えました。",
        romaji: "Watashi wa jibun de kazoetakatta desu kara, te de kazoemashita.",
        vi: "Vì tôi muốn tự mình đếm nên đã đếm bằng tay."
      },
      {
        ja: "1枚、 2枚、 3枚……とても 疲れましたから、 ちょっと 休みました。",
        romaji: "Ichimai, nimai, sanmai... totemo tsukaremashita kara, chotto yasumimashita.",
        vi: "1 tờ, 2 tờ, 3 tờ... vì quá mệt nên tôi đã nghỉ ngơi một chút."
      },
      {
        ja: "銀行の 隣の レストランへ 食事に 行きました。",
        romaji: "Ginkou no tonari no resutoran e shokuji ni ikimashita.",
        vi: "Tôi đã sang nhà hàng bên cạnh ngân hàng để dùng bữa."
      },
      {
        ja: "そして、 また 数えました。",
        romaji: "Soshite, mata kazoemashita.",
        vi: "Sau đó, tôi lại tiếp tục đếm."
      },
      {
        ja: "5時まで かかりました。",
        romaji: "Goji made kakarimashita.",
        vi: "Mất đến tận 5 giờ chiều."
      },
      {
        ja: "それから 警官と いっしょに うちへ 帰りました。",
        romaji: "Sorekara keikan to issho ni uchi e kaerimashita.",
        vi: "Sau đó, tôi cùng với viên cảnh sát trở về nhà."
      },
      {
        ja: "3万枚の 一万円札は とても 重かったです。",
        romaji: "Sanmanmai no ichiman'ensatsu wa totemo omokatta desu.",
        vi: "3 vạn tờ tiền 1 vạn yên nặng vô cùng."
      },
      {
        ja: "3億円 ありますから、 警官に 100万円 あげました。",
        romaji: "San'okuen arimasu kara, keikan ni hyakuman'en agemashita.",
        vi: "Vì có tới 300 triệu yên nên tôi đã tặng viên cảnh sát 1 triệu yên."
      },
      {
        ja: "「ありがとう ございます。 あなたは いい 人ですね。 あなたは……」",
        romaji: "\"Arigatou gozaimasu. Anata wa ii hito desu ne. Anata wa...\"",
        vi: "\"Xin cảm ơn anh. Anh quả là một người tốt bụng. Anh thật là...\""
      },
      {
        ja: "「あなた、 あなた、 7時ですよ。」",
        romaji: "\"Anata, anata, shichiji desu yo.\"",
        vi: "\"Anh ơi, anh à, 7 giờ rồi đấy nhé.\""
      },
      {
        ja: "妻の 声です。",
        romaji: "Tsuma no koe desu.",
        vi: "Đó là tiếng của vợ tôi."
      },
      {
        ja: "夢が 終わりました。",
        romaji: "Yume ga owarimashita.",
        vi: "Giấc mơ đã khép lại."
      },
      {
        ja: "朝です。",
        romaji: "Asa desu.",
        vi: "Trời đã sáng rồi."
      },
      {
        ja: "楽しい 夢でした。",
        romaji: "Tanoshii yume deshita.",
        vi: "Thật là một giấc mơ vui vẻ."
      },
      {
        ja: "今晩も 同じ 夢を 見たいです。",
        romaji: "Konban mo onaji yume o mitai desu.",
        vi: "Tối nay tôi cũng muốn gặp lại giấc mơ đó."
      }
    ]
  },
  bai_8: {
    title: "Bài 8: 大学生の一日 (Minna Dokkai)",
    topic: "Một ngày sinh hoạt và học tập của sinh viên đại học",
    icon: "🎓",
    fullText: "まずは聞いて、それから語彙を学びましょう。 私は 大学生です。 毎日 朝早く 起きます。 7時に 起きて、 シャワーを 浴びて、 朝ごはんを 食べます。 朝ごはんは ご飯と みそしるが 好きです。 食べた後、 学校へ 行きます。 学校は 家から 電車で 30分ぐらいです。 電車の中で 本を 読んだり、 音楽を 聞いたりして 過ごします。 学校に着いたら、 まず 授業が 始まります。 授業は 9時からです。 最初の 授業は 日本語の 授業です。 日本語は とても 面白いですが、 むずかしいです。 先生は とても 親切で、 わからない ことが あったら、 教えてくれます。 授業中に ノートを 取ったり、 先生の 質問に 答えたりします。 授業が 終わると、 お昼休みです。 お昼は 友達と 一緒に 食べます。 大学の 食堂で ランチを 食べることが 多いです。 わたしは ラーメンが 好きです。 ラーメンを 食べながら、 友達と 楽しく 話します。 お昼を 食べたあとは また 授業が あります。 午後の 授業は 少し 疲れますが、 頑張って 聞いています。",
    sentences: [
      {
        ja: "まずは聞いて、それから語彙を学びましょう。",
        romaji: "Mazu wa kiite, sorekara goi o manabimashou.",
        vi: "Trước tiên hãy lắng nghe, sau đó chúng ta hãy cùng học từ vựng nhé."
      },
      {
        ja: "私は 大学生です。",
        romaji: "Watashi wa daigakusei desu.",
        vi: "Tôi là sinh viên đại học."
      },
      {
        ja: "毎日 朝早く 起きます。",
        romaji: "Mainichi asa hayaku okimasu.",
        vi: "Mỗi ngày tôi đều thức dậy từ sáng sớm."
      },
      {
        ja: "7時に 起きて、シャワーを 浴びて、朝ごはんを 食べます。",
        romaji: "Shichiji ni okite, shawaa o abite, asagohan o tabemasu.",
        vi: "Tôi thức dậy lúc 7 giờ, tắm vòi sen rồi ăn bữa sáng."
      },
      {
        ja: "朝ごはんは ご飯と みそしるが 好きです。",
        romaji: "Asagohan wa gohan to misoshiru ga suki desu.",
        vi: "Bữa sáng tôi thích ăn cơm và súp miso."
      },
      {
        ja: "食べた後、学校へ 行きます。",
        romaji: "Tabeta ato, gakkou e ikimasu.",
        vi: "Sau khi ăn xong, tôi đi đến trường."
      },
      {
        ja: "学校は 家から 電車で 30分ぐらいです。",
        romaji: "Gakkou wa ie kara densha de sanjuppun gurai desu.",
        vi: "Trường học cách nhà tôi khoảng 30 phút đi tàu điện."
      },
      {
        ja: "電車の中で 本を 読んだり、音楽を 聞いたりして 過ごします。",
        romaji: "Densha no naka de hon o yondari, ongaku o kiitari shite sugoshimasu.",
        vi: "Ở trên tàu điện, tôi dành thời gian đọc sách hoặc nghe nhạc."
      },
      {
        ja: "学校に着いたら、まず 授業が 始まります。",
        romaji: "Gakkou ni tsuitara, mazu jugyou ga hajimarimasu.",
        vi: "Khi đến trường, trước tiên các tiết học sẽ bắt đầu."
      },
      {
        ja: "授業は 9時からです。",
        romaji: "Jugyou wa kuji kara desu.",
        vi: "Tiết học bắt đầu từ 9 giờ."
      },
      {
        ja: "最初の 授業は 日本語の 授業です。",
        romaji: "Saisho no jugyou wa Nihongo no jugyou desu.",
        vi: "Tiết học đầu tiên là tiết tiếng Nhật."
      },
      {
        ja: "日本語は とても 面白いですが、むずかしいです。",
        romaji: "Nihongo wa totemo omoshiroi desu ga, muzukashii desu.",
        vi: "Tiếng Nhật rất thú vị nhưng cũng khó."
      },
      {
        ja: "先生は とても 親切で、わからない ことが あったら、教えてくれます。",
        romaji: "Sensei wa totemo shinsetsu de, wakaranai koto ga attara, oshiete kuremasu.",
        vi: "Thầy cô rất nhiệt tình, nếu có điều gì không hiểu sẽ chỉ bảo cho tôi."
      },
      {
        ja: "授業中に ノートを 取ったり、先生の 質問に 答えたりします。",
        romaji: "Jugyouchuu ni nooto o tottari, sensei no shitsumon ni kotaetari shimasu.",
        vi: "Trong giờ học, tôi ghi chép bài hoặc trả lời câu hỏi của thầy cô."
      },
      {
        ja: "授業が 終わると、お昼休みです。",
        romaji: "Jugyou ga owaru to, ohiruyasumi desu.",
        vi: "Khi tiết học kết thúc là đến giờ nghỉ trưa."
      },
      {
        ja: "お昼は 友達と 一緒に 食べます。",
        romaji: "Ohiru wa tomodachi to issho ni tabemasu.",
        vi: "Buổi trưa tôi ăn cơm cùng với bạn bè."
      },
      {
        ja: "大学の 食堂で ランチを 食べることが 多いです。",
        romaji: "Daigaku no shokudou de ranchi o taberu koto ga ooi desu.",
        vi: "Tôi thường hay ăn trưa ở nhà ăn của trường đại học."
      },
      {
        ja: "わたしは ラーメンが 好きです。",
        romaji: "Watashi wa raamen ga suki desu.",
        vi: "Tôi rất thích ăn mì ramen."
      },
      {
        ja: "ラーメンを 食べながら、友達と 楽しく 話します。",
        romaji: "Raamen o tabenagara, tomodachi to tanoshiku hanashimasu.",
        vi: "Vừa ăn mì ramen, tôi vừa trò chuyện vui vẻ với bạn bè."
      },
      {
        ja: "お昼を 食べたあとは また 授業が あります。",
        romaji: "Ohiru o tabeta ato wa mata jugyou ga arimasu.",
        vi: "Sau khi ăn trưa xong lại có tiết học tiếp."
      },
      {
        ja: "午後の 授業は 少し 疲れますが、頑張って 聞いています。",
        romaji: "Gogo no jugyou wa sukoshi tsukaremasu ga, ganbatte kiite imasu.",
        vi: "Các tiết học buổi chiều có chút mệt mỏi nhưng tôi vẫn cố gắng chăm chú lắng nghe."
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.JA_READING_PASSAGES_DATA = JA_READING_PASSAGES_DATA;
}


