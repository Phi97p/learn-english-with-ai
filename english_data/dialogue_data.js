// ========================================================
// ENGLISH_DATA / DIALOGUE_DATA.JS
// Dữ liệu Hội thoại Tiếng Anh (2 người đối thoại)
// Nguồn bài học: datasss/en/hoi_thoai/ (SGK Tiếng Anh 6 - Tập 1)
// ========================================================

const EN_DIALOGUE_DATA = {
  unit_1_my_new_school: {
    title: "Unit 1: A Special Day at School (SGK 6)",
    topic: "Gặp gỡ ngày đầu năm học và chuẩn bị đồ dùng",
    icon: "🏫",
    roleA: {
      name: "Duy (Bạn thân)",
      avatar: "👦",
      desc: "Học sinh lớp 6, bạn thân của Phong",
      gender: "male"
    },
    roleB: {
      name: "Phong (Nhân vật chính)",
      avatar: "🧑",
      desc: "Học sinh lớp 6 trường mới",
      gender: "male"
    },
    turns: [
      {
        id: 1,
        speaker: "Duy",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "Hi, Phong. Are you ready for our first day at school?",
        ipa: "/haɪ fɒŋ ɑː juː ˈredi fɔːr ˈaʊə fɜːst deɪ æt skuːl/",
        vi: "Chào Phong. Cậu đã sẵn sàng cho ngày đầu tiên đến trường chưa?",
      },
      {
        id: 2,
        speaker: "Phong",
        role: "B",
        avatar: "🧑",
        gender: "male",
        en: "Hi, Duy. Yes, just a minute. I'm having breakfast.",
        ipa: "/haɪ duːi jes dʒʌst ə ˈmɪnɪt aɪm ˈhævɪŋ ˈbrekfəst/",
        vi: "Chào Duy. Có chứ, đợi mình một phút nhé. Mình đang ăn sáng.",
      },
      {
        id: 3,
        speaker: "Duy",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "Oh, you have a new uniform. It looks really smart on you!",
        ipa: "/əʊ juː hæv ə njuː ˈjuːnɪfɔːm ɪt lʊks ˈrɪəli smɑːt ɒn juː/",
        vi: "Ồ, cậu có đồng phục mới kìa. Trông cậu bảnh bao và chỉn chu lắm!",
      },
      {
        id: 4,
        speaker: "Phong",
        role: "B",
        avatar: "🧑",
        gender: "male",
        en: "Thanks, Duy. My mum bought it for me yesterday. Do you have all your new books?",
        ipa: "/θæŋks duːi maɪ mʌm bɔːt ɪt fɔː miː ˈjestədeɪ duː juː hæv ɔːl jɔː njuː bʊks/",
        vi: "Cảm ơn Duy. Mẹ mình mua cho mình hôm qua đấy. Cậu có đủ sách vở mới chưa?",
      },
      {
        id: 5,
        speaker: "Duy",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "Yes, I put my calculator, compass, and textbooks into my bag.",
        ipa: "/jes aɪ pʊt maɪ ˈkælkjuleɪtə ˈkʌmpəs ænd ˈtekstbʊks ˈɪntuː maɪ bæɡ/",
        vi: "Có, mình đã để máy tính bỏ túi, com-pa và sách giáo khoa vào cặp rồi.",
      },
      {
        id: 6,
        speaker: "Phong",
        role: "B",
        avatar: "🧑",
        gender: "male",
        en: "Great! Let's ride our bicycles to school together now.",
        ipa: "/ɡreɪt lets raɪd ˈaʊə ˈbaɪsɪklz tuː skuːl təˈɡeðə naʊ/",
        vi: "Tuyệt quá! Chúng mình cùng nhau đạp xe đến trường ngay bây giờ nhé.",
      },
      {
        id: 7,
        speaker: "Duy",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "Sure. We don't want to be late on our first day!",
        ipa: "/ʃʊə wiː dəʊnt wɒnt tuː biː leɪt ɒn ˈaʊə fɜːst deɪ/",
        vi: "Chắc chắn rồi. Chúng mình đâu muốn bị muộn trong ngày đầu tiên chứ!",
      }
    ]
  },

  unit_2_my_house: {
    title: "Unit 2: Visiting My New House (SGK 6)",
    topic: "Thăm và giới thiệu các phòng trong ngôi nhà mới",
    icon: "🏡",
    roleA: {
      name: "Nick (Bạn cùng trường)",
      avatar: "👱‍♂️",
      desc: "Người bạn đến thăm hỏi về ngôi nhà mới",
      gender: "male"
    },
    roleB: {
      name: "Mi (Chủ nhà)",
      avatar: "👧",
      desc: "Học sinh vừa chuyển về ngôi nhà phố mới",
      gender: "female"
    },
    turns: [
      {
        id: 1,
        speaker: "Nick",
        role: "A",
        avatar: "👱‍♂️",
        gender: "male",
        en: "Wow, Mi! Is that a picture of your new house?",
        ipa: "/waʊ miː ɪz ðæt ə ˈpɪktʃər əv jɔː njuː haʊs/",
        vi: "Oa, Mi ơi! Đó có phải là ảnh ngôi nhà mới của cậu không?",
      },
      {
        id: 2,
        speaker: "Mi",
        role: "B",
        avatar: "👧",
        gender: "female",
        en: "Yes, Nick. It's a town house in Da Nang. We moved there last week.",
        ipa: "/jes nɪk ɪts ə taʊn haʊs ɪn daː næŋ wiː muːvd ðeə lɑːst wiːk/",
        vi: "Đúng rồi Nick. Đó là một ngôi nhà phố ở Đà Nẵng. Gia đình mình mới chuyển đến tuần trước.",
      },
      {
        id: 3,
        speaker: "Nick",
        role: "A",
        avatar: "👱‍♂️",
        gender: "male",
        en: "It looks very spacious. How many rooms are there?",
        ipa: "/ɪt lʊks ˈveri ˈspeɪʃəs haʊ ˈmeni ruːmz ɑː ðeə/",
        vi: "Trông nó rộng rãi và thoáng mát thật đấy. Nhà có bao nhiêu phòng vậy cậu?",
      },
      {
        id: 4,
        speaker: "Mi",
        role: "B",
        avatar: "👧",
        gender: "female",
        en: "There are six rooms: a living room, a kitchen, three bedrooms and two bathrooms.",
        ipa: "/ðeər ɑː sɪks ruːmz: ə ˈlɪvɪŋ ruːm ə ˈkɪtʃɪn θriː ˈbedruːmz ænd tuː ˈbɑːθruːmz/",
        vi: "Có sáu phòng tất cả: một phòng khách, một bếp, ba phòng ngủ và hai phòng tắm.",
      },
      {
        id: 5,
        speaker: "Nick",
        role: "A",
        avatar: "👱‍♂️",
        gender: "male",
        en: "Which room is your favourite?",
        ipa: "/wɪtʃ ruːm ɪz jɔː ˈfeɪvərɪt/",
        vi: "Thế cậu thích nhất là căn phòng nào?",
      },
      {
        id: 6,
        speaker: "Mi",
        role: "B",
        avatar: "👧",
        gender: "female",
        en: "My bedroom! It has a big window and there is a lovely desk near the bed.",
        ipa: "/maɪ ˈbedruːm ɪt hæz ə bɪɡ ˈwɪndəʊ ænd ðeər ɪz ə ˈlʌvli desk nɪə ðə bed/",
        vi: "Phòng ngủ của mình! Phòng có cửa sổ lớn và một chiếc bàn học xinh xắn cạnh giường.",
      },
      {
        id: 7,
        speaker: "Nick",
        role: "A",
        avatar: "👱‍♂️",
        gender: "male",
        en: "That sounds wonderful. I'd love to visit your house soon!",
        ipa: "/ðæt saʊndz ˈwʌndəfl aɪd lʌv tuː ˈvɪzɪt jɔː haʊs suːn/",
        vi: "Nghe tuyệt thật đấy. Mình rất mong sớm được đến thăm nhà cậu!",
      }
    ]
  },

  unit_3_my_friends: {
    title: "Unit 3: Plans for the Weekend (SGK 6)",
    topic: "Bàn kế hoạch dã ngoại cuối tuần cùng nhóm bạn",
    icon: "👥",
    roleA: {
      name: "Dương (Bạn học)",
      avatar: "👦",
      desc: "Người bạn hỏi thăm kế hoạch cuối tuần",
      gender: "male"
    },
    roleB: {
      name: "Phúc (Trưởng nhóm)",
      avatar: "🧑",
      desc: "Người tổ chức buổi dã ngoại tại công viên",
      gender: "male"
    },
    turns: [
      {
        id: 1,
        speaker: "Dương",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "Hi, Phuc. What are you doing this Saturday afternoon?",
        ipa: "/haɪ fʊk wɒt ɑː juː ˈduːɪŋ ðɪs ˈsætədeɪ ˌɑːftəˈnuːn/",
        vi: "Chào Phúc. Chiều thứ Bảy tuần này cậu định làm gì thế?",
      },
      {
        id: 2,
        speaker: "Phúc",
        role: "B",
        avatar: "🧑",
        gender: "male",
        en: "Hello, Duong. I'm meeting Mai and An at the central park. We're having a picnic.",
        ipa: "/həˈləʊ zɯəŋ aɪm ˈmiːtɪŋ maɪ ænd æn æt ðə ˈsentrəl pɑːk wɪə ˈhævɪŋ ə ˈpɪknɪk/",
        vi: "Chào Dương. Mình sẽ gặp Mai và An ở công viên trung tâm. Tụi mình tổ chức dã ngoại.",
      },
      {
        id: 3,
        speaker: "Dương",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "That sounds exciting! What does An look like?",
        ipa: "/ðæt saʊndz ɪkˈsaɪtɪŋ wɒt dʌz æn lʊk laɪk/",
        vi: "Nghe hấp dẫn quá! Thế bạn An trông như thế nào?",
      },
      {
        id: 4,
        speaker: "Phúc",
        role: "B",
        avatar: "🧑",
        gender: "male",
        en: "She has long black hair and big brown eyes. She is very creative and loves drawing.",
        ipa: "/ʃiː hæz lɒŋ blæk heər ænd bɪɡ braʊn aɪz ʃiː ɪz ˈveri kriˈeɪtɪv ænd lʌvz ˈdrɔːɪŋ/",
        vi: "Bạn ấy có mái tóc đen dài và đôi mắt nâu to. Bạn ấy rất sáng tạo và thích vẽ tranh.",
      },
      {
        id: 5,
        speaker: "Dương",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "And how about Mai? Is she friendly?",
        ipa: "/ænd haʊ əˈbaʊt maɪ ɪz ʃiː ˈfrendli/",
        vi: "Còn Mai thì sao? Bạn ấy có thân thiện không?",
      },
      {
        id: 6,
        speaker: "Phúc",
        role: "B",
        avatar: "🧑",
        gender: "male",
        en: "Yes, Mai is very clever, kind and hard-working. Would you like to come with us?",
        ipa: "/jes maɪ ɪz ˈveri ˈklevə kaɪnd ænd ˌhɑːd ˈwɜːkɪŋ wʊd juː laɪk tuː kʌm wɪð ʌs/",
        vi: "Có chứ, Mai rất lanh lợi, tốt bụng và chăm chỉ. Cậu có muốn đi cùng tụi mình không?",
      },
      {
        id: 7,
        speaker: "Dương",
        role: "A",
        avatar: "👦",
        gender: "male",
        en: "I'd love to! I'll bring some biscuits and fruit juice for everyone.",
        ipa: "/aɪd lʌv tuː aɪl brɪŋ sʌm ˈbɪskɪts ænd fruːt dʒuːs fɔːr ˈevriwʌn/",
        vi: "Mình rất thích! Mình sẽ mang bánh quy và nước trái cây cho mọi người nhé.",
      }
    ]
  }
};
