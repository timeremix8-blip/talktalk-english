// =====================================================================
// 톡톡 영어 30일 코스
// 한 과 = { icon, name, desc, turns: [ 대화 한 턴, ... ] }
// 대화 한 턴 = [ 토비가 하는 말, 뜻, 정답으로 인정할 말("|"로 구분), 예시 대답, 예시 대답 뜻 ]
//  - 정답으로 인정할 말 중 하나라도 대답에 들어 있으면 정답이에요.
//  - 각 과의 처음 3개 예시 대답이 그날의 "오늘의 표현"이 돼요.
// =====================================================================

// 내용을 고칠 때마다 날짜를 바꿔 주세요. 앱 처음 화면 맨 아래에 표시돼서 업데이트가 됐는지 알 수 있어요.
const CONTENT_VERSION = "2026-10-18";

const COLORS = "red|blue|green|yellow|black|white|pink|purple|orange|gray|grey|brown|sky blue|navy|mint";
const MONTHS = "january|february|march|april|may|june|july|august|september|october|november|december";
const NUMS = "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|1|2|3|4|5|6|7|8|9|10|11|12";
const BYE = "bye|see you|goodbye|later|you too|thank|okay|ok";

const LESSONS = [
  // ---------------- 1주차: 나와 친구 ----------------
  { icon: "👋", name: "처음 만난 친구", desc: "이름, 기분, 나이 말하기", turns: [
    ["Hi! I'm Toby. What's your name?", "안녕! 나는 토비야. 너는 이름이 뭐야?", "my name is|name|i'm|i am|call me", "My name is Jiwoo.", "내 이름은 지우야."],
    ["Nice to meet you! How are you today?", "만나서 반가워! 오늘 기분 어때?", "fine|good|great|okay|ok|happy|tired|so so|not bad|well|sad|excited", "I'm good, thank you.", "좋아, 고마워."],
    ["How old are you?", "몇 살이야?", "years old|" + NUMS + "|thirteen", "I'm twelve years old.", "나는 12살이야."],
    ["Where do you live?", "어디에 살아?", "i live|live in|seoul|busan|korea|incheon|daegu|daejeon|gwangju|ulsan|suwon|city|town", "I live in Seoul.", "나는 서울에 살아."],
    ["Cool! What do you like to do?", "멋지다! 뭐 하는 걸 좋아해?", "i like|i love|play|read|draw|watch|swim|dance|sing|game|soccer|cook|ride", "I like playing soccer.", "나는 축구하는 걸 좋아해."],
    ["That sounds fun! It was nice talking to you. See you later!", "재밌겠다! 얘기해서 즐거웠어. 다음에 봐!", BYE + "|nice talking", "See you later! Bye!", "다음에 봐! 안녕!"],
  ]},
  { icon: "👨‍👩‍👧", name: "우리 가족", desc: "가족 소개하기", turns: [
    ["Do you have any brothers or sisters?", "형제나 자매가 있어?", "yes|no|brother|sister|only child|i have", "Yes, I have a little sister.", "응, 여동생이 한 명 있어."],
    ["How many people are in your family?", "가족이 몇 명이야?", NUMS + "|people", "There are four people in my family.", "우리 가족은 네 명이야."],
    ["What does your dad do?", "아빠는 무슨 일을 하셔?", "he is|he's|teacher|doctor|cook|chef|police|engineer|office|works|driver|farmer|nurse|business|company", "He is a teacher.", "선생님이셔."],
    ["Who do you look like?", "너는 누구를 닮았어?", "look like|mom|dad|mother|father|grandma|grandpa|both", "I look like my mom.", "나는 엄마를 닮았어."],
    ["What do you do with your family on weekends?", "주말에 가족이랑 뭐 해?", "we|go|watch|play|eat|visit|walk|cook|camping|shopping|movie|together", "We watch movies together.", "같이 영화를 봐."],
  ]},
  { icon: "❤️", name: "내가 좋아하는 것", desc: "음식, 색깔, 계절 말하기", turns: [
    ["What's your favorite food?", "제일 좋아하는 음식이 뭐야?", "pizza|chicken|kimchi|noodle|ramen|tteokbokki|hamburger|burger|spaghetti|sushi|rice|fruit|ice cream|favorite food|i like|i love", "My favorite food is pizza.", "내가 제일 좋아하는 음식은 피자야."],
    ["What's your favorite color?", "제일 좋아하는 색깔은?", COLORS, "I like green.", "나는 초록색을 좋아해."],
    ["Do you like animals?", "동물 좋아해?", "yes|no|i like|i love|dog|cat|rabbit|animal|hamster|bird", "Yes, I love dogs.", "응, 강아지를 정말 좋아해."],
    ["What's your favorite season?", "제일 좋아하는 계절은?", "spring|summer|fall|autumn|winter", "I like summer because I can swim.", "수영할 수 있어서 여름이 좋아."],
    ["Who is your favorite singer?", "좋아하는 가수가 누구야?", "i like|my favorite|bts|newjeans|ive|seventeen|singer|i don't|i love", "I like BTS.", "나는 BTS를 좋아해."],
  ]},
  { icon: "🎂", name: "내 생일", desc: "날짜와 갖고 싶은 것 말하기", turns: [
    ["When is your birthday?", "생일이 언제야?", MONTHS + "|birthday is|it's on", "My birthday is May fifth.", "내 생일은 5월 5일이야."],
    ["What do you want for your birthday?", "생일 선물로 뭐 갖고 싶어?", "i want|a new|bike|book|game|doll|robot|phone|shoes|bag|lego|puppy|toy|watch", "I want a new bike.", "새 자전거를 갖고 싶어."],
    ["Do you have a birthday party?", "생일 파티 해?", "yes|no|we|party|sometimes|every year", "Yes, I have a party with my friends.", "응, 친구들이랑 파티를 해."],
    ["What kind of cake do you like?", "어떤 케이크 좋아해?", "chocolate|strawberry|cheese|ice cream|cream|fruit|cake|vanilla|carrot", "I like chocolate cake.", "초콜릿 케이크를 좋아해."],
    ["Happy birthday in advance!", "미리 생일 축하해!", "thank|thanks|so kind|you're", "Thank you so much!", "정말 고마워!"],
  ]},
  { icon: "😊", name: "기분과 감정", desc: "내 기분과 이유 말하기", turns: [
    ["How do you feel today?", "오늘 기분이 어때?", "happy|sad|tired|angry|excited|good|great|bored|sleepy|nervous|fine|okay|ok|upset", "I feel happy today.", "오늘 기분이 좋아."],
    ["Why do you feel that way?", "왜 그런 기분이야?", "because|it's|i got|i have|my|today|i'm", "Because it's Friday!", "금요일이니까!"],
    ["You look tired. Did you sleep well?", "피곤해 보여. 잘 잤어?", "yes|no|i slept|didn't|stayed up|well|late", "No, I went to bed late.", "아니, 늦게 잤어."],
    ["What makes you happy?", "너는 뭐 할 때 행복해?", "i'm happy|when i|playing|eating|reading|friends|family|games|music|play|eat", "I'm happy when I play with my friends.", "친구들이랑 놀 때 행복해."],
    ["When I feel sad, I listen to music. What about you?", "나는 슬플 때 음악을 들어. 너는?", "i |me too|sleep|eat|talk|play|watch|read|draw|cry|music", "I talk to my mom.", "나는 엄마랑 이야기해."],
  ]},
  { icon: "⏰", name: "나의 하루", desc: "일어나서 잘 때까지", turns: [
    ["What time do you get up?", "몇 시에 일어나?", "get up|wake up|at|o'clock|" + NUMS, "I get up at seven.", "7시에 일어나."],
    ["What do you eat for breakfast?", "아침으로 뭐 먹어?", "rice|bread|toast|cereal|milk|egg|soup|fruit|i eat|i have|nothing|don't", "I eat toast and milk.", "토스트랑 우유를 먹어."],
    ["How do you go to school?", "학교에 어떻게 가?", "walk|bus|bike|car|subway|on foot|by", "I walk to school.", "걸어서 가."],
    ["What do you do after school?", "방과 후에 뭐 해?", "academy|hagwon|play|homework|study|piano|taekwondo|go home|swim|read|watch|soccer", "I go to taekwondo.", "태권도에 가."],
    ["What time do you go to bed?", "몇 시에 자?", "go to bed|sleep|at|o'clock|" + NUMS, "I go to bed at ten.", "10시에 자."],
  ]},
  { icon: "🌤️", name: "주말 이야기", desc: "지난 주말에 한 일", turns: [
    ["Hi! How was your weekend?", "안녕! 주말 어땠어?", "good|great|fun|bad|okay|ok|boring|nice|fine|wonderful|awesome|so so", "It was great!", "정말 좋았어!"],
    ["What did you do?", "뭐 했어?", "i went|i played|i watched|i visited|i read|i ate|i made|went|played|watched|visited|stayed|read|ate|saw", "I went to the park.", "공원에 갔어."],
    ["Who did you go with?", "누구랑 같이 갔어?", "with|family|mom|dad|friend|brother|sister|grandma|grandpa|alone|myself", "I went with my family.", "가족이랑 갔어."],
    ["Nice! How's the weather today?", "좋다! 오늘 날씨는 어때?", "sunny|rainy|raining|cloudy|windy|snowy|snowing|cold|hot|warm|cool|nice", "It's sunny and warm.", "화창하고 따뜻해."],
    ["What do you want to do today?", "오늘은 뭐 하고 싶어?", "i want|want to|play|go|read|watch|eat|sleep|swim|ride|draw", "I want to play outside.", "밖에서 놀고 싶어."],
  ]},

  // ---------------- 2주차: 학교생활 ----------------
  { icon: "🏫", name: "학교에서", desc: "과목, 물건 빌리기, 점심", turns: [
    ["Good morning! Are you ready for school?", "좋은 아침! 학교 갈 준비 됐어?", "yes|yeah|ready|no|not yet|sure|of course", "Yes, I'm ready!", "응, 준비됐어!"],
    ["What's your favorite subject?", "제일 좋아하는 과목이 뭐야?", "math|english|science|music|art|p e|pe|korean|social|history|gym|subject is|i like", "My favorite subject is science.", "내가 제일 좋아하는 과목은 과학이야."],
    ["Oh no, I forgot my pencil. Can I borrow yours?", "앗, 연필을 깜빡했어. 네 거 빌려도 돼?", "sure|yes|of course|here|okay|ok|no problem|yeah", "Sure. Here you are.", "그럼. 여기 있어."],
    ["Thanks a lot! What do you have for lunch today?", "정말 고마워! 오늘 점심은 뭐 먹어?", "rice|kimchi|soup|noodle|pizza|chicken|sandwich|bread|curry|fish|i have|i eat|we have", "We have rice and chicken soup.", "밥이랑 닭고기 수프가 나와."],
    ["Yummy! See you after school!", "맛있겠다! 방과 후에 보자!", BYE, "Okay. See you!", "응. 이따 봐!"],
  ]},
  { icon: "🕒", name: "시간과 요일", desc: "몇 시인지, 무슨 요일인지", turns: [
    ["Excuse me, what time is it?", "실례지만 몇 시야?", "it's|o'clock|thirty|half|" + NUMS, "It's three thirty.", "3시 30분이야."],
    ["What time does your class start?", "수업이 몇 시에 시작해?", "at|start|o'clock|thirty|" + NUMS, "It starts at nine.", "9시에 시작해."],
    ["What day is it today?", "오늘 무슨 요일이야?", "monday|tuesday|wednesday|thursday|friday|saturday|sunday", "It's Wednesday.", "수요일이야."],
    ["What's the date today?", "오늘 며칠이야?", MONTHS + "|first|second|third|th|it's", "It's October eighteenth.", "10월 18일이야."],
    ["Let's meet at four. Is that okay?", "4시에 만나자. 괜찮아?", "okay|ok|sure|yes|sounds good|no|sorry|great|fine", "Sure. See you at four!", "좋아. 4시에 봐!"],
  ]},
  { icon: "⚽", name: "방과 후 활동", desc: "운동, 악기, 동아리", turns: [
    ["Do you play any sports?", "하는 운동 있어?", "soccer|basketball|baseball|swim|taekwondo|badminton|tennis|yes|no|i play|i do", "Yes, I play soccer.", "응, 축구를 해."],
    ["How often do you practice?", "얼마나 자주 연습해?", "every day|once|twice|times|a week|weekend|monday|sometimes|always|day", "I practice twice a week.", "일주일에 두 번 연습해."],
    ["Can you play the piano?", "피아노 칠 줄 알아?", "yes|no|i can|can't|cannot|a little", "Yes, I can play it a little.", "응, 조금 칠 줄 알아."],
    ["What club do you want to join?", "무슨 동아리에 들어가고 싶어?", "club|science|art|music|dance|soccer|book|cooking|robot|coding|i want", "I want to join the science club.", "과학 동아리에 들어가고 싶어."],
    ["Let's play together sometime!", "언제 같이 하자!", "okay|ok|sure|yes|sounds|great|good|let's", "Sounds great!", "좋아!"],
  ]},
  { icon: "🤒", name: "보건실에서", desc: "아픈 곳 말하기", turns: [
    ["What's wrong? You don't look well.", "무슨 일이야? 안 좋아 보여.", "i have|headache|stomachache|cold|fever|sick|hurt|toothache|i feel|my", "I have a headache.", "머리가 아파요."],
    ["When did it start?", "언제부터 아팠어?", "this morning|yesterday|after|ago|today|last night|lunch|started", "It started this morning.", "오늘 아침부터요."],
    ["Do you have a fever?", "열이 있니?", "yes|no|i think|don't know|a little|not sure", "I think so. I feel hot.", "그런 것 같아요. 몸이 뜨거워요."],
    ["Here, take this medicine and drink some water.", "여기, 이 약 먹고 물 좀 마시렴.", "thank|okay|ok|sure|yes", "Thank you.", "고맙습니다."],
    ["You should rest. Do you want to go home?", "쉬어야겠다. 집에 갈래?", "yes|no|i want|stay|i'm okay|please|i'm fine", "Yes, please. I want to go home.", "네, 집에 가고 싶어요."],
  ]},
  { icon: "📚", name: "숙제와 시험", desc: "공부 이야기", turns: [
    ["Did you do your homework?", "숙제 했어?", "yes|no|i did|didn't|not yet|forgot", "Yes, I did.", "응, 했어."],
    ["Which homework is the hardest?", "어떤 숙제가 제일 어려워?", "math|english|science|korean|social|writing|hardest|all|none", "Math homework is the hardest.", "수학 숙제가 제일 어려워."],
    ["We have a test tomorrow. Are you nervous?", "내일 시험이야. 긴장돼?", "yes|no|a little|nervous|not|i'm okay|ready", "Yes, a little.", "응, 조금."],
    ["How do you study for tests?", "시험 공부 어떻게 해?", "i read|i study|i write|i review|with|notes|book|practice|memorize", "I read my notes again.", "공책을 다시 읽어."],
    ["Good luck on the test!", "시험 잘 봐!", "thank|you too|thanks", "Thanks! You too!", "고마워! 너도!"],
  ]},
  { icon: "🚀", name: "나의 꿈", desc: "장래희망과 이유", turns: [
    ["What do you want to be in the future?", "커서 뭐가 되고 싶어?", "want to be|i want|teacher|doctor|scientist|singer|police|chef|cook|soccer player|youtuber|artist|pilot|vet|programmer|designer|astronaut|nurse", "I want to be a scientist.", "과학자가 되고 싶어."],
    ["Why do you want to be that?", "왜 그게 되고 싶어?", "because|i like|i love|want to|help|fun|cool|interesting", "Because I like science.", "과학을 좋아하니까."],
    ["What should you do to become that?", "그게 되려면 뭘 해야 할까?", "i should|study|practice|read|hard|learn|work", "I should study hard.", "열심히 공부해야 해."],
    ["Who is your role model?", "롤모델이 누구야?", "my|mom|dad|teacher|i don't|role model|like", "My role model is my teacher.", "내 롤모델은 우리 선생님이야."],
    ["I'm sure you can do it!", "넌 분명히 할 수 있어!", "thank|thanks|i hope|you too|i will", "Thank you! I'll do my best.", "고마워! 최선을 다할게."],
  ]},
  { icon: "☔", name: "날씨", desc: "날씨 묻고 답하기", turns: [
    ["Look outside! How's the weather?", "밖에 봐! 날씨 어때?", "sunny|rainy|raining|cloudy|windy|snowy|snowing|cold|hot|warm|cool|nice", "It's cloudy today.", "오늘은 흐려."],
    ["Is it cold outside?", "밖에 추워?", "yes|no|it's|cold|warm|hot|cool|a little|very", "Yes, it's very cold.", "응, 정말 추워."],
    ["It's going to rain. Do you have an umbrella?", "비가 올 거래. 우산 있어?", "yes|no|i have|i don't|umbrella|forgot", "No, I don't. Can I share yours?", "아니, 없어. 같이 써도 돼?"],
    ["What do you do on rainy days?", "비 오는 날엔 뭐 해?", "i |stay|read|watch|play|games|home|sleep|draw|inside", "I stay home and read books.", "집에서 책을 읽어."],
    ["What's your favorite weather?", "제일 좋아하는 날씨는?", "sunny|rainy|snowy|cloudy|windy|warm|cool|like|i love", "I like snowy days.", "눈 오는 날이 좋아."],
  ]},

  // ---------------- 3주차: 밖에서 ----------------
  { icon: "👕", name: "옷 가게에서", desc: "물건 찾기, 색깔, 값 치르기", turns: [
    ["Hello! Can I help you?", "안녕하세요! 도와드릴까요?", "yes|looking for|i want|i'd like|i would like|can i|please|need", "Yes, please. I'm looking for a T-shirt.", "네. 티셔츠를 찾고 있어요."],
    ["Sure. What color do you like?", "그럼요. 무슨 색을 좋아해요?", COLORS, "I like blue.", "파란색을 좋아해요."],
    ["How about this one?", "이건 어때요?", "like it|nice|good|great|pretty|cool|love|no|yes|how much|perfect", "I like it. How much is it?", "마음에 들어요. 얼마예요?"],
    ["It's ten thousand won.", "만 원이에요.", "here|okay|ok|expensive|cheap|take it|buy|thank", "Okay. Here you are.", "네. 여기 있어요."],
    ["Thank you! Have a nice day!", "고마워요! 좋은 하루 보내요!", "you too|thank|bye|same|nice day", "You too. Bye!", "당신도요. 안녕히 계세요!"],
  ]},
  { icon: "🍔", name: "식당에서", desc: "주문하기, 맛 말하기", turns: [
    ["Welcome! How many people?", "어서 오세요! 몇 분이세요?", NUMS + "|just me|people", "Two, please.", "두 명이요."],
    ["What would you like to eat?", "무엇을 드시겠어요?", "i'd like|i would like|i want|can i have|hamburger|burger|pizza|spaghetti|chicken|salad|sandwich|steak|noodle|please", "I'd like a cheeseburger, please.", "치즈버거 주세요."],
    ["Anything to drink?", "마실 것은요?", "juice|water|milk|coke|cola|soda|tea|lemonade|no thank|please", "Orange juice, please.", "오렌지 주스 주세요."],
    ["Here you are. How is it?", "여기 있습니다. 맛이 어때요?", "delicious|good|yummy|great|tasty|nice|love it|spicy|sweet|salty|awesome", "It's delicious!", "정말 맛있어요!"],
    ["I'm glad you like it! Do you want some dessert?", "맛있다니 다행이에요! 디저트 드릴까요?", "yes|no|ice cream|cake|please|full|thank|sure", "Yes, please. Ice cream!", "네, 아이스크림 주세요!"],
  ]},
  { icon: "🗺️", name: "길 묻기", desc: "장소 찾기, 길 안내 이해하기", turns: [
    ["Hi! You look lost. Can I help you?", "안녕! 길을 잃은 것 같네. 도와줄까?", "yes|where is|looking for|please|help|lost|how can i get", "Yes, please. Where is the library?", "네. 도서관이 어디예요?"],
    ["The library? Go straight and turn left. Do you understand?", "도서관? 쭉 가서 왼쪽으로 돌아. 알겠니?", "yes|understand|got it|okay|ok|no|again|sorry|sure", "Yes, I understand. Thank you!", "네, 알겠어요. 고마워요!"],
    ["Are you walking or taking the bus?", "걸어갈 거야, 버스 탈 거야?", "walk|bus|bike|subway|taxi|car|on foot", "I'm walking.", "걸어갈 거예요."],
    ["Good. It takes ten minutes. Be careful!", "좋아. 10분 걸려. 조심해!", "thank|okay|ok|i will|bye|you too|sure", "Thank you so much!", "정말 고마워요!"],
  ]},
  { icon: "🏪", name: "편의점에서", desc: "간식 사고 계산하기", turns: [
    ["Hi! Can I help you find something?", "안녕하세요! 찾는 거 도와드릴까요?", "yes|where|looking for|do you have|i want|please|no thanks|just looking", "Where are the snacks?", "과자는 어디 있어요?"],
    ["The snacks are over there. Anything else?", "과자는 저쪽에 있어요. 다른 건요?", "yes|no|that's all|water|milk|juice|ice cream|and|i want|thank", "That's all, thank you.", "그게 다예요, 고마워요."],
    ["Do you need a plastic bag?", "비닐봉지 필요하세요?", "yes|no|thank|please|i have", "No, thank you. I have a bag.", "아니요, 가방 있어요."],
    ["That's three thousand won.", "3천 원입니다.", "here|okay|ok|card|cash|can i pay", "Here you are.", "여기 있어요."],
    ["Here's your change. Have a good one!", "거스름돈이요. 좋은 하루 보내요!", "thank|you too|bye", "Thanks. You too!", "고마워요. 좋은 하루 보내세요!"],
  ]},
  { icon: "📖", name: "도서관에서", desc: "책 찾고 빌리기", turns: [
    ["Welcome to the library. What are you looking for?", "도서관에 온 걸 환영해. 무엇을 찾니?", "looking for|book|about|i want|do you have|where|comic|story|science|animal", "I'm looking for a book about dinosaurs.", "공룡에 관한 책을 찾고 있어요."],
    ["It's on the second floor. Do you have a library card?", "2층에 있어. 도서관 카드 있니?", "yes|no|i have|don't|here|make", "No, I don't. Can I make one?", "아니요. 만들 수 있어요?"],
    ["Sure. How many books do you want to borrow?", "그럼. 책 몇 권 빌릴래?", NUMS + "|books", "Two books, please.", "두 권이요."],
    ["Please return them in two weeks. Okay?", "2주 안에 반납해. 알겠지?", "okay|ok|yes|sure|i will|got it|thank", "Okay, I will.", "네, 그럴게요."],
    ["What kind of books do you like?", "어떤 책을 좋아하니?", "i like|comic|story|science|history|mystery|fantasy|animal|books|novel|fairy", "I like mystery books.", "추리 책을 좋아해요."],
  ]},
  { icon: "🚌", name: "버스와 지하철", desc: "어디에 어떻게 가는지", turns: [
    ["Hi! Where are you going?", "안녕! 어디 가?", "i'm going|going to|to the|zoo|park|school|home|museum|library|mall|grandma", "I'm going to the museum.", "박물관에 가."],
    ["How will you get there?", "거기 어떻게 갈 거야?", "bus|subway|walk|taxi|car|bike|train|by", "I'll take the subway.", "지하철을 탈 거야."],
    ["How long does it take?", "얼마나 걸려?", "minutes|hour|it takes|about|ten|twenty|thirty|10|20|30", "It takes about twenty minutes.", "20분쯤 걸려."],
    ["Where do we get off?", "어디서 내려?", "at|station|stop|get off|next|city hall|here", "We get off at the next stop.", "다음 정거장에서 내려."],
    ["Look! That old man needs a seat.", "봐! 저 할아버지가 자리가 필요하셔.", "please|sit|take my seat|here|sir|excuse me|seat", "Please take my seat.", "제 자리에 앉으세요."],
  ]},
  { icon: "🌳", name: "공원에서", desc: "놀이 제안하기", turns: [
    ["It's a nice day! What do you want to do in the park?", "날씨 좋다! 공원에서 뭐 하고 싶어?", "ride|bike|play|catch|walk|picnic|run|soccer|badminton|swing|slide|i want|let's", "Let's ride our bikes!", "자전거 타자!"],
    ["Can you ride a bike?", "자전거 탈 줄 알아?", "yes|no|i can|can't|a little", "Yes, I can. It's easy!", "응, 탈 줄 알아. 쉬워!"],
    ["Look at that dog! What is it doing?", "저 강아지 봐! 뭐 하고 있어?", "it's|running|sleeping|playing|eating|jumping|barking|swimming|walking", "It's running with a ball.", "공 들고 뛰고 있어."],
    ["I'm thirsty. Do you want something to drink?", "목말라. 마실 거 줄까?", "yes|no|water|juice|please|thank|i'm okay|sure", "Yes, water please.", "응, 물 줘."],
    ["It's getting dark. Let's go home.", "어두워지고 있어. 집에 가자.", "okay|ok|sure|yes|let's|five more|not yet|fun", "Okay. Today was fun!", "좋아. 오늘 재밌었어!"],
  ]},

  // ---------------- 4주차: 특별한 날 ----------------
  { icon: "🧳", name: "방학 계획", desc: "가고 싶은 곳, 하고 싶은 일", turns: [
    ["Vacation is coming! What are your plans?", "방학이 다가와! 계획이 뭐야?", "i'm going|i will|go|visit|travel|camp|beach|grandma|learn|swim|stay|plan", "I'm going to visit my grandma.", "할머니 댁에 갈 거야."],
    ["Where do you want to travel?", "어디로 여행 가고 싶어?", "jeju|busan|japan|america|usa|china|beach|mountain|i want|paris|london|australia", "I want to go to Jeju Island.", "제주도에 가고 싶어."],
    ["What do you want to do there?", "거기서 뭐 하고 싶어?", "swim|eat|see|climb|ride|visit|take|go|play|shop|want", "I want to swim in the sea.", "바다에서 수영하고 싶어."],
    ["Have you ever been on an airplane?", "비행기 타 본 적 있어?", "yes|no|i have|haven't|never|once|twice", "Yes, I have. It was exciting!", "응, 타 봤어. 신났어!"],
    ["Don't forget to take pictures!", "사진 찍는 거 잊지 마!", "okay|ok|i will|sure|thank|i won't|show you", "Okay! I'll show you later.", "알았어! 나중에 보여 줄게."],
  ]},
  { icon: "🦁", name: "동물원에서", desc: "동물 설명하기", turns: [
    ["Which animal do you want to see first?", "어떤 동물을 먼저 보고 싶어?", "lion|tiger|elephant|giraffe|monkey|panda|penguin|bear|zebra|rabbit|i want|let's", "I want to see the pandas!", "판다 보고 싶어!"],
    ["Wow, look at the giraffe! How tall is it?", "와, 기린 봐! 키가 얼마나 될까?", "very|so|tall|big|it's|meters|really|huge", "It's very tall!", "정말 크다!"],
    ["What do monkeys eat?", "원숭이는 뭘 먹을까?", "banana|fruit|they eat|leaves|apple|bugs|nuts", "They eat bananas.", "바나나를 먹어."],
    ["Which animal is the scariest?", "어떤 동물이 제일 무서워?", "lion|tiger|snake|bear|shark|crocodile|scariest|scary|spider|wolf", "The tiger is the scariest.", "호랑이가 제일 무서워."],
    ["If you could be an animal, what would you be?", "동물이 될 수 있다면 뭐가 될래?", "i'd be|i would be|i want|bird|cat|dog|lion|eagle|dolphin|rabbit|panda|cheetah|because", "I'd be a bird because I want to fly.", "날고 싶으니까 새가 될래."],
  ]},
  { icon: "📞", name: "전화로 약속 잡기", desc: "시간과 장소 정하기", turns: [
    ["Hello? Who's speaking?", "여보세요? 누구세요?", "this is|it's|i'm|speaking|hi|hello", "Hi, this is Jiwoo.", "안녕, 나 지우야."],
    ["Oh, hi! What's up?", "아, 안녕! 무슨 일이야?", "can you|do you want|let's|i want|are you|free|play|nothing|just|call", "Do you want to play tomorrow?", "내일 같이 놀래?"],
    ["Sure! What time?", "좋아! 몇 시에?", "at|o'clock|after|morning|afternoon|how about|" + NUMS, "How about two o'clock?", "2시 어때?"],
    ["Where should we meet?", "어디서 만날까?", "at|in front of|park|school|library|my house|your house|playground|station|let's meet", "Let's meet at the playground.", "놀이터에서 만나자."],
    ["Great. See you tomorrow!", "좋아. 내일 봐!", BYE + "|tomorrow", "See you! Bye!", "내일 봐! 안녕!"],
  ]},
  { icon: "🏠", name: "친구 집에 놀러 가기", desc: "초대받았을 때 하는 말", turns: [
    ["Welcome to my house! Come in.", "우리 집에 온 걸 환영해! 들어와.", "thank|thanks|wow|nice|hi|hello|your house", "Thank you for inviting me.", "초대해 줘서 고마워."],
    ["Would you like something to drink?", "뭐 마실래?", "yes|no|water|juice|milk|please|thank|i'm okay", "Juice, please.", "주스 줘."],
    ["This is my room. What do you think?", "여기가 내 방이야. 어때?", "nice|cool|great|big|clean|pretty|love|wow|awesome|like", "Wow, your room is so cool!", "와, 네 방 정말 멋지다!"],
    ["Do you want to play a board game or watch a movie?", "보드게임 할래, 영화 볼래?", "board game|game|movie|watch|play|both|i want", "Let's play a board game!", "보드게임 하자!"],
    ["Oh, it's six o'clock. Do you have to go home?", "아, 6시네. 집에 가야 해?", "yes|no|i have to|i should|i can stay|my mom|have to go", "Yes, I have to go. Thanks for today!", "응, 가야 해. 오늘 고마웠어!"],
  ]},
  { icon: "🎉", name: "생일 파티에서", desc: "축하하고 선물 주기", turns: [
    ["Thanks for coming to my party!", "내 파티에 와 줘서 고마워!", "happy birthday|thank|you're welcome|my pleasure|of course", "Happy birthday! This is for you.", "생일 축하해! 이거 선물이야."],
    ["Wow, thank you! Can I open it?", "와, 고마워! 열어 봐도 돼?", "sure|yes|of course|go ahead|okay|ok", "Sure, go ahead!", "그럼, 열어 봐!"],
    ["I love it! How did you know?", "정말 마음에 들어! 어떻게 알았어?", "you told|i know|you like|guessed|your mom|just|because", "You told me before.", "전에 네가 말해 줬잖아."],
    ["Let's sing the birthday song together!", "같이 생일 노래 부르자!", "happy birthday|okay|ok|sure|let's|yes", "Happy birthday to you!", "생일 축하합니다!"],
    ["Do you want a piece of cake?", "케이크 한 조각 먹을래?", "yes|please|sure|no|thank|big|small|i'd love", "Yes, please! It looks delicious.", "응! 정말 맛있어 보여."],
  ]},
  { icon: "🏀", name: "운동과 스포츠", desc: "좋아하는 운동과 선수", turns: [
    ["What sport do you like to watch?", "어떤 운동 경기 보는 걸 좋아해?", "soccer|baseball|basketball|volleyball|tennis|swimming|skating|i like|olympics", "I like watching soccer.", "축구 보는 걸 좋아해."],
    ["Who is your favorite player?", "좋아하는 선수 누구야?", "son|heung|messi|ronaldo|my favorite|i like|player|i don't|kim|lee|ryu", "My favorite player is Son Heung-min.", "손흥민 선수를 제일 좋아해."],
    ["Are you good at running?", "달리기 잘해?", "yes|no|i'm good|not good|a little|fast|slow|i am|i'm not", "Yes, I'm pretty fast.", "응, 꽤 빨라."],
    ["Our team won the game! How do you feel?", "우리 팀이 이겼어! 기분 어때?", "great|happy|excited|awesome|amazing|good|yay|wow|we did it", "I feel great! We did it!", "너무 좋아! 우리가 해냈어!"],
    ["How often do you exercise?", "얼마나 자주 운동해?", "every day|times|a week|sometimes|always|never|once|twice|weekend", "I exercise three times a week.", "일주일에 세 번 운동해."],
  ]},
  { icon: "🍳", name: "같이 요리하기", desc: "재료와 맛 말하기", turns: [
    ["Let's make sandwiches! What do we need?", "샌드위치 만들자! 뭐가 필요해?", "bread|cheese|ham|egg|lettuce|tomato|butter|jam|we need", "We need bread, cheese, and ham.", "빵, 치즈, 햄이 필요해."],
    ["Can you wash the tomatoes?", "토마토 좀 씻어 줄래?", "sure|yes|okay|ok|of course|no problem", "Sure, no problem.", "그럼, 문제없어."],
    ["Be careful! The knife is sharp.", "조심해! 칼이 날카로워.", "okay|ok|i will|thank|careful|got it", "Okay, I'll be careful.", "알았어, 조심할게."],
    ["How does it taste?", "맛이 어때?", "delicious|good|yummy|great|tasty|salty|sweet|nice|so good|awesome", "It's really delicious!", "정말 맛있어!"],
    ["What else can you cook?", "또 뭐 요리할 수 있어?", "i can|ramen|fried rice|eggs|pancake|toast|salad|noodle|cookies|nothing", "I can make fried rice.", "볶음밥을 만들 수 있어."],
  ]},
  { icon: "🎄", name: "명절과 휴일", desc: "추석, 설날, 크리스마스", turns: [
    ["What's your favorite holiday?", "제일 좋아하는 명절(휴일)은?", "christmas|chuseok|new year|seollal|children's day|halloween|birthday", "My favorite holiday is Christmas.", "크리스마스를 제일 좋아해."],
    ["What do you do on Chuseok?", "추석에는 뭐 해?", "visit|eat|songpyeon|grandparents|grandma|family|make|we|play|go", "I visit my grandparents.", "할머니 할아버지 댁에 가."],
    ["What do you want from Santa?", "산타한테 뭘 받고 싶어?", "i want|game|toy|bike|book|lego|doll|robot|phone|puppy", "I want a big Lego set.", "큰 레고 세트를 받고 싶어."],
    ["What do children get on New Year's Day in Korea?", "한국에서는 설날에 아이들이 뭘 받아?", "money|pocket|we get|gift|presents|tteokguk|rice cake", "We get pocket money!", "세뱃돈을 받아!"],
    ["Merry Christmas and Happy New Year!", "메리 크리스마스, 그리고 새해 복 많이 받아!", "you too|merry|happy|thank", "You too! Happy New Year!", "너도! 새해 복 많이 받아!"],
  ]},
  { icon: "🎓", name: "30일 졸업 대화", desc: "그동안 배운 것 총정리", turns: [
    ["Wow, it's our last day! Can you introduce yourself?", "와, 마지막 날이야! 자기소개 해 줄래?", "my name|i'm|i am|years old|i live|i like|hello|hi", "Hi! My name is Jiwoo. I'm twelve years old.", "안녕! 내 이름은 지우야. 12살이야."],
    ["What was your favorite lesson?", "어떤 수업이 제일 좋았어?", "lesson|zoo|park|birthday|restaurant|shopping|cooking|all|favorite|i liked|i like", "I liked the zoo lesson.", "동물원 수업이 좋았어."],
    ["What English sentence can you say well now?", "이제 어떤 영어 문장을 잘 말할 수 있어?", "i can say|nice to meet you|how are you|thank|what's|where is|i'd like|can i|i want", "I can say, nice to meet you!", "Nice to meet you를 잘 말할 수 있어!"],
    ["Will you keep practicing English?", "계속 영어 연습할 거야?", "yes|of course|i will|sure|every day|definitely|no", "Of course! I'll practice every day.", "물론이지! 매일 연습할게."],
    ["I'm so proud of you. Great job!", "네가 정말 자랑스러워. 잘했어!", "thank|you too|thanks|so much|bye|see you", "Thank you, Toby!", "고마워, 토비!"],
  ]},
];
