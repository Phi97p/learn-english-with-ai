// ========================================================
// DATA.JS - Dữ liệu Học Tiếng Anh (SGK Tiếng Anh 6 - Tập 1)
// Nguồn bài học: datasss/en/luyen_noi_eng/ & sgk/
// ========================================================

// 1. DỮ LIỆU LUYỆN NÓI CẢ CÂU THEO UNIT (SHADOWING LAB)
const SENTENCE_UNITS_DATA = {
  unit_1_my_new_school: {
    title: "Unit 1: My New School (SGK Tiếng Anh 6)",
    icon: "🏫",
    sentences: [
      {
        category: "UNIT 1: LÀM QUEN & GIỚI THIỆU",
        en: "Hello, my name is Phong and I am a new student.",
        ipa: "/həˈləʊ maɪ neɪm ɪz fɒŋ ænd aɪ æm ə njuː ˈstjuːdnt/",
        vi: "Xin chào, tên tôi là Phong và tôi là học sinh mới.",
      },
      {
        category: "UNIT 1: LÀM QUEN & GIỚI THIỆU",
        en: "Welcome to our new school!",
        ipa: "/ˈwelkəm tuː ˈaʊə njuː skuːl/",
        vi: "Chào mừng bạn đến với ngôi trường mới của chúng tôi!",
      },
      {
        category: "UNIT 1: HOẠT ĐỘNG TRƯỜNG LỚP",
        en: "I wear my new uniform every Monday.",
        ipa: "/aɪ weə maɪ njuː ˈjuːnɪfɔːm ˈevri ˈmʌndeɪ/",
        vi: "Tôi mặc bộ đồng phục mới vào mỗi thứ Hai.",
      },
      {
        category: "UNIT 1: ĐỒ DÙNG HỌC TẬP",
        en: "Do you have a calculator and a pencil sharpener?",
        ipa: "/duː juː hæv ə ˈkælkjuleɪtə ænd ə ˈpensl ˈʃɑːpnə/",
        vi: "Bạn có máy tính bỏ túi và cái gọt bút chì không?",
      },
      {
        category: "UNIT 1: MÔN HỌC",
        en: "We study English, Maths and Science.",
        ipa: "/wiː ˈstʌdi ˈɪŋɡlɪʃ mæθs ænd ˈsaɪəns/",
        vi: "Chúng tôi học tiếng Anh, Toán và Khoa học.",
      },
      {
        category: "UNIT 1: KHUÔN VIÊN TRƯỜNG",
        en: "My school has a large playground and a computer room.",
        ipa: "/maɪ skuːl hæz ə lɑːdʒ ˈpleɪɡraʊnd ænd ə kəmˈpjuːtə ruːm/",
        vi: "Trường tôi có một sân chơi rộng lớn và phòng tin học.",
      },
      {
        category: "UNIT 1: THẦY CÔ & BẠN BÈ",
        en: "The teachers are very kind and friendly.",
        ipa: "/ðə ˈtiːtʃəz ɑː ˈveri kaɪnd ænd ˈfrendli/",
        vi: "Các thầy cô giáo rất tốt bụng và thân thiện.",
      },
      {
        category: "UNIT 1: MÔN HỌC YÊU THÍCH",
        en: "What is your favourite subject?",
        ipa: "/wɒt ɪz jɔː ˈfeɪvərɪt ˈsʌbdʒɪkt/",
        vi: "Môn học yêu thích của bạn là gì?",
      },
      {
        category: "UNIT 1: MÔN HỌC YÊU THÍCH",
        en: "I love English because it is very interesting.",
        ipa: "/aɪ lʌv ˈɪŋɡlɪʃ bɪˈkəz ɪt ɪz ˈveri ˈɪntrəstɪŋ/",
        vi: "Tôi yêu thích môn tiếng Anh vì nó rất thú vị.",
      },
      {
        category: "UNIT 1: ĐI HỌC CÙNG BẠN",
        en: "Duy and I go to school together by bicycle.",
        ipa: "/duːi ænd aɪ ɡəʊ tuː skuːl təˈɡeðə baɪ ˈbaɪsɪkl/",
        vi: "Duy và tôi cùng nhau đi học bằng xe đạp.",
      },
      {
        category: "UNIT 1: GIỜ RA CHƠI",
        en: "At break time, we play football in the school yard.",
        ipa: "/æt breɪk taɪm wiː pleɪ ˈfʊtbɔːl ɪn ðə skuːl jɑːd/",
        vi: "Vào giờ ra chơi, chúng tôi đá bóng ở sân trường.",
      },
      {
        category: "UNIT 1: BÀI TẬP VỀ NHÀ",
        en: "I do my homework every evening with my sister.",
        ipa: "/aɪ duː maɪ ˈhəʊmwɜːk ˈevri ˈiːvnɪŋ wɪð maɪ ˈsɪstə/",
        vi: "Tôi làm bài tập về nhà mỗi buổi tối cùng với chị gái.",
      }
    ]
  },

  unit_2_my_house: {
    title: "Unit 2: My House (SGK Tiếng Anh 6)",
    icon: "🏡",
    sentences: [
      {
        category: "UNIT 2: NƠI Ở & KIỂU NHÀ",
        en: "Where do you live? - I live in a town house.",
        ipa: "/weə duː juː lɪv - aɪ lɪv ɪn ə taʊn haʊs/",
        vi: "Bạn sống ở đâu? - Tôi sống trong một ngôi nhà phố.",
      },
      {
        category: "UNIT 2: CÁC PHÒNG TRONG NHÀ",
        en: "My house has six rooms: a living room, a kitchen, and three bedrooms.",
        ipa: "/maɪ haʊs hæz sɪks ruːmz: ə ˈlɪvɪŋ ruːm ə ˈkɪtʃɪn ænd θriː ˈbedruːmz/",
        vi: "Nhà tôi có sáu phòng: một phòng khách, một bếp và ba phòng ngủ.",
      },
      {
        category: "UNIT 2: NỘI THẤT PHÒNG KHÁCH",
        en: "There is a big sofa in front of the television.",
        ipa: "/ðeər ɪz ə bɪɡ ˈsəʊfə ɪn frʌnt əv ðə ˈtelɪvɪʒn/",
        vi: "Có một chiếc ghế sofa lớn ở phía trước tivi.",
      },
      {
        category: "UNIT 2: THIẾT BỊ PHÒNG BẾP",
        en: "The fridge and the microwave are in the kitchen.",
        ipa: "/ðə frɪdʒ ænd ðə ˈmaɪkrəweɪv ɑːr ɪn ðə ˈkɪtʃɪn/",
        vi: "Tủ lạnh và lò vi sóng ở trong phòng bếp.",
      },
      {
        category: "UNIT 2: ĐỒ VẬT TRÊN TƯỜNG",
        en: "There are family photos on the wall.",
        ipa: "/ðeər ɑː ˈfæməli ˈfəʊtəʊz ɒn ðə wɔːl/",
        vi: "Có những bức ảnh gia đình treo trên tường.",
      },
      {
        category: "UNIT 2: VỊ TRÍ CÁC PHÒNG",
        en: "My bedroom is between the bathroom and the living room.",
        ipa: "/maɪ ˈbedruːm ɪz bɪˈtwiːn ðə ˈbɑːθruːm ænd ðə ˈlɪvɪŋ ruːm/",
        vi: "Phòng ngủ của tôi nằm giữa phòng tắm và phòng khách.",
      },
      {
        category: "UNIT 2: VẬT NUÔI TRONG NHÀ",
        en: "The cat is sleeping under the table.",
        ipa: "/ðə kæt ɪz ˈsliːpɪŋ ˈʌndə ðə ˈteɪbl/",
        vi: "Chú mèo đang ngủ dưới gầm bàn.",
      },
      {
        category: "UNIT 2: VẬT NUÔI TRONG NHÀ",
        en: "Where is the dog? - It is behind the door.",
        ipa: "/weər ɪz ðə dɒɡ - ɪt ɪz bɪˈhaɪnd ðə dɔː/",
        vi: "Chú chó ở đâu? - Nó ở đằng sau cánh cửa.",
      },
      {
        category: "UNIT 2: KHÔNG GIAN SÂN VƯỜN",
        en: "There is a beautiful garden behind my house.",
        ipa: "/ðeər ɪz ə ˈbjuːtɪfl ˈɡɑːdn bɪˈhaɪnd maɪ haʊs/",
        vi: "Có một khu vườn xinh đẹp ở phía sau nhà tôi.",
      },
      {
        category: "UNIT 2: CẢM NHẬN VỀ PHÒNG",
        en: "I love my bedroom because it is very comfortable.",
        ipa: "/aɪ lʌv maɪ ˈbedruːm bɪˈkəz ɪt ɪz ˈveri ˈkʌmftəbl/",
        vi: "Tôi yêu phòng ngủ của mình vì nó rất thoải mái.",
      },
      {
        category: "UNIT 2: GIAO TIẾP GIA ĐÌNH",
        en: "Can you pass me the remote control, please?",
        ipa: "/kæn juː pɑːs miː ðə rɪˈməʊt kənˈtrəʊl pliːz/",
        vi: "Bạn có thể chuyển giúp tôi cái điều khiển từ xa được không?",
      },
      {
        category: "UNIT 2: SINH HOẠT HẰNG NGÀY",
        en: "My mother is cooking dinner in the kitchen.",
        ipa: "/maɪ ˈmʌðə ɪz ˈkʊkɪŋ ˈdɪnə ɪn ðə ˈkɪtʃɪn/",
        vi: "Mẹ tôi đang nấu bữa tối trong bếp.",
      }
    ]
  },

  unit_3_my_friends: {
    title: "Unit 3: My Friends (SGK Tiếng Anh 6)",
    icon: "👥",
    sentences: [
      {
        category: "UNIT 3: HỎI NGOẠI HÌNH BẠN BÈ",
        en: "What does your best friend look like?",
        ipa: "/wɒt dʌz jɔː best frend lʊk laɪk/",
        vi: "Bạn thân nhất của bạn trông như thế nào?",
      },
      {
        category: "UNIT 3: MÔ TẢ VÓC DÁNG & MÁI TÓC",
        en: "She is tall and slim with long black hair.",
        ipa: "/ʃiː ɪz tɔːl ænd slɪm wɪð lɒŋ blæk heə/",
        vi: "Cô ấy cao và mảnh khảnh với mái tóc đen dài.",
      },
      {
        category: "UNIT 3: MÔ TẢ ĐÔI MẮT & MÁI TÓC",
        en: "He has short brown hair and big blue eyes.",
        ipa: "/hiː hæz ʃɔːt braʊn heə ænd bɪɡ bluː aɪz/",
        vi: "Cậu ấy có mái tóc nâu ngắn và đôi mắt to màu xanh lam.",
      },
      {
        category: "UNIT 3: TÍNH CÁCH BẠN BÈ",
        en: "My friend Mai is very hard-working and clever.",
        ipa: "/maɪ frend maɪ ɪz ˈveri hɑːd ˈwɜːkɪŋ ænd ˈklevə/",
        vi: "Bạn Mai của tôi rất chăm chỉ và thông minh.",
      },
      {
        category: "UNIT 3: TÍNH CÁCH HÀI HƯỚC",
        en: "Minh is very funny and he always makes me laugh.",
        ipa: "/mɪn ɪz ˈveri ˈfʌni ænd hiː ˈɔːlweɪz meɪks miː lɑːf/",
        vi: "Minh rất hài hước và cậu ấy luôn làm tôi cười.",
      },
      {
        category: "UNIT 3: NĂNG KHIẾU & TÍNH CÁCH",
        en: "An is creative and she loves drawing pictures.",
        ipa: "/æn ɪz kriˈeɪtɪv ænd ʃiː lʌvz ˈdrɔːɪŋ ˈpɪktʃəz/",
        vi: "An rất sáng tạo và bạn ấy thích vẽ tranh.",
      },
      {
        category: "UNIT 3: LỜI MỜI DỰ TIỆC",
        en: "Would you like to come to my birthday party this Sunday?",
        ipa: "/wʊd juː laɪk tuː kʌm tuː maɪ ˈbɜːθdeɪ ˈpɑːti ðɪs ˈsʌndeɪ/",
        vi: "Bạn có muốn đến dự bữa tiệc sinh nhật của mình vào Chủ nhật này không?",
      },
      {
        category: "UNIT 3: ĐÁP LẠI LỜI MỜI",
        en: "Yes, I'd love to! Thank you for inviting me.",
        ipa: "/jes aɪd lʌv tuː θæŋk juː fɔːr ɪnˈvaɪtɪŋ miː/",
        vi: "Có chứ, mình rất muốn! Cảm ơn bạn đã mời mình nhé.",
      },
      {
        category: "UNIT 3: HOẠT ĐỘNG HIỆN TẠI",
        en: "What is he doing right now? - He is playing chess.",
        ipa: "/wɒt ɪz hiː ˈduːɪŋ raɪt naʊ - hiː ɪz ˈpleɪɪŋ tʃes/",
        vi: "Cậu ấy đang làm gì vào lúc này? - Cậu ấy đang chơi cờ vua.",
      },
      {
        category: "UNIT 3: HOẠT ĐỘNG NGOÀI TRỜI",
        en: "They are having a wonderful picnic in the park.",
        ipa: "/ðeɪ ɑː ˈhævɪŋ ə ˈwʌndəfl ˈpɪknɪk ɪn ðə pɑːk/",
        vi: "Họ đang có một buổi dã ngoại tuyệt vời ở công viên.",
      },
      {
        category: "UNIT 3: TÌNH BẠN ĐẸP",
        en: "A good friend is always kind and shares everything with you.",
        ipa: "/ə ɡʊd frend ɪz ˈɔːlweɪz kaɪnd ænd ʃeəz ˈevrɪθɪŋ wɪð juː/",
        vi: "Một người bạn tốt luôn tốt bụng và chia sẻ mọi thứ cùng bạn.",
      },
      {
        category: "UNIT 3: DỰ ÁN HỌC TẬP",
        en: "We are preparing for our English club project together.",
        ipa: "/wiː ɑː prɪˈpeərɪŋ fɔːr ˈaʊər ˈɪŋɡlɪʃ klʌb ˈprɒdʒekt təˈɡeðə/",
        vi: "Chúng tôi đang cùng nhau chuẩn bị cho dự án câu lạc bộ tiếng Anh.",
      }
    ]
  }
};

