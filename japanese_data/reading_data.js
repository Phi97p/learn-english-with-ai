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
  }
};
