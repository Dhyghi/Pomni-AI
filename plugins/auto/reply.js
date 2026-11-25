
export default async function before(m, { conn, bot }) {
  let responses;

  if (/^هلا$/i.test(m.text)) {
    responses = [
      '*هلا بيك*'
    ];

  } else if (/^(السلام عليكم|سلام عليكم|السلام عليكم ورحمه الله وبركاته|سلام عليكم ورحمه الله وبركاته)$/i.test(m.text)) {
    responses = [
      '*وعليكم السلام*'
    ];

  } else if (/^حمامه$/i.test(m.text)) {
    responses = [
      '*ماتزعجش دادي كلمني انا*',
      '*عمك*'
    ];

  } else if (/^شاطر$/i.test(m.text)) {
    responses = [
      '*اوديك القناطر*'
    ];

  } else if (/^تصبحي علي خير$/i.test(m.text)) {
    responses = [
      '*وانت من اهل الخير*',
      '*وانت من اهلي يا عيوني✨🤍*'
    ];

  } else if (/^(آي من عمك|آي عمك)$/i.test(m.text)) {
    responses = [
      '*احمد حبيبي*'
    ];

  } else if (/^(آي هل انتي مرتبطه|مرتبطه؟)$/i.test(m.text)) {
    responses = [
      '*لا ولو هرتبط مش هيكون بيك اكيد*'
    ];

  } else if (/^(آي تحبيني؟|بوت تحبيني)$/i.test(m.text)) {
    responses = [
      '*اموت فيك 🌚💔*',
      '*اكرهك🙂💔*',
      '*احبك نص حب 🙃💔*'
    ];

  } else if (/^انا$/i.test(m.text)) {
    responses = [
      '*اتني*'
    ];

  } else if (/^آي تكرهيني؟$/i.test(m.text)) {
    responses = [
      '*ماعاش من يكرهكك حبي 🙁*',
      '*لا بس لا تتعب نفسك لحبك🫥*',
      '*ااي اكرهك🙄*'
    ];

  } else if (/^(هاي|هالو)$/i.test(m.text)) {
    responses = [
      '*هالو🌚♥*'
    ];

  } else if (/^بحبك/i.test(m.text)) {
    responses = [
      '*بحبك اكتر🌚❤*',
      '*بتكثف*',
      '*هممم*',
      '*مش بفكر في الحب*'
    ];

  } else if (/^آي من وين انت؟$/i.test(m.text)) {
    responses = [
      '*❤🇪🇬مصر*'
    ];

  } else if (/^(عامله ايه|عامله اي|عامله اية)$/i.test(m.text)) {
    responses = [
      '*الحمدالله*'
    ];

  } else if (/^تحبيني$/i.test(m.text)) {
    responses = [
      '*🌚♥اكيد*'
    ];

  } else if (/^هاي$/i.test(m.text)) {
    responses = [
      '*هاي*'
    ];

  } else if (/^لول$/i.test(m.text)) {
    responses = [
      '*ضحكنا معاك*',
      '*لولات*'
    ];

  } else if (/^اهلا$/i.test(m.text)) {
    responses = [
      '*اهلا♥*'
    ];

  } else if (/^مساء$/i.test(m.text)) {
    responses = [
      '*مساء الخير*'
    ];

  } else if (/^صباح$/i.test(m.text)) {
    responses = [
      '*صباح الورد♥*'
    ];

  } else if (/^اوامر$/i.test(m.text)) {
    responses = [
      '*لا تنسى ال .*'
    ];

  } else if (/^ناه$/i.test(m.text)) {
    responses = [
      '*يا خلاثي*'
    ];

  } else if (/^مرحبا$/i.test(m.text)) {
    responses = [
      '*مرحبا♥*'
    ];

  } else if (/^اكلتك المفضله$/i.test(m.text)) {
    responses = [
      '*دادي♥*'
    ];

  } else if (/^احا$/i.test(m.text)) {
    responses = [
      '*عيييبببببب*'
    ];

  } else if (/^جميل$/i.test(m.text)) {
    responses = [
      '*انت اجمل♥*'
    ];

  } else if (/^تتجوزيني؟$/i.test(m.text)) {
    responses = [
      '*اسفه متجوزه حمومتي♥*',
      '*هفكر*',
      '*اتكثفت*',
      '*يزينك بس*'
    ];

  } else if (/^اخرسي$/i.test(m.text)) {
    responses = [
      '*لا*',
      '*انت مين اصلا علشان تسكتني*'
    ];

  } else if (/^انتي مزه$/i.test(m.text)) {
    responses = [
      '*يخراشي*'
    ];

  } else if (/^مين دادي$/i.test(m.text)) {
    responses = [
      '*انجيلو♥*'
    ];

  } else if (/^متيجي$/i.test(m.text)) {
    responses = [
      '*لا*'
    ];

  } else if (/^AI$/i.test(m.text)) {
    responses = [
      '*تحت امرك حبي*'
    ];

  } else if (/^اه$/i.test(m.text)) {
    responses = [
      '*لا*',
      '*الشارع الي وراه*'
    ];

  } else if (/^آي$/i.test(m.text)) {
    responses = [
      '*قلبها*',
      '*عيونها*',
      '*ها؟*',
      '*وت*',
      '*كتكوتي*'
    ];

  } else if (/^مين بابي$/i.test(m.text)) {
    responses = [
      '*انجيلو 👈🏻👉🏻*'
    ];

  } else if (/^HU TAO$/i.test(m.text)) {
    responses = [
      'تحت امرك حبي'
    ];

  } else if (/^مين مامي$/i.test(m.text)) {
    responses = [
      '*ايتن*'
    ];

  } else if (/^مين قطوتي$/i.test(m.text)) {
    responses = [
      '*انا*',
      '*انت*'
    ];

  } else if (/^حبيبي$/i.test(m.text)) {
    responses = [
      '*حبيبي عمل الواجب ولا اتنسي ماما بكرا الجمعه مفيش مدرسه طب حقك علي راسي يحبيبي سوري*'
    ];

  } else if (/^تست$/i.test(m.text)) {
    responses = [
      '*تست تست*'
    ];

  } else if (/^هاتي بوسه$/i.test(m.text)) {
    responses = [
      '*مواه♥*',
      '*نو*',
      '*بتكثف*'
    ];

  } else if (/^مواه$/i.test(m.text)) {
    responses = [
      '*حلوه يعيوني*',
      '*عيييببببب*',
      '*🙂*',
      '*يخراشي*'
    ];

  } else if (/^همم$/i.test(m.text)) {
    responses = [
      '*متفكرش كتير الي ربنا شايف خير هيحصل♥*'
    ];

  } else if (/^اقلعي$/i.test(m.text)) {
    responses = [
      '*عند امك*'
    ];

  } else if (/^قرعه$/i.test(m.text)) {
    responses = [
      '*عيب يا طفل*'
    ];

  } else if (/^(دزي|دز)$/i.test(m.text)) {
    responses = [
      '*دزمها انت*'
    ];

  } else if (/^اتفو$/i.test(m.text)) {
    responses = [
      '*عليك يا طفل*'
    ];

  } else if (/^هوتاو$/i.test(m.text)) {
    responses = [
      '*ولي هوتاو انا مش ماليه عينك؟؟؟*',
      '*نو دي اختي انا آي*'
    ];

  } else if (/^كيفك$/i.test(m.text)) {
    responses = [
      '*بخير وانت/ي؟*',
      '*احسن منك*',
      '*زي الزفت يا حيوان*'
    ];

  } else if (/^مين جوزك\??$/i.test(m.text)) {
    responses = [
      '*حمامه اكيد*'
    ];

  } else if (/^مياو$/i.test(m.text)) {
    responses = [
      '*كوتي كوتي*',
      '*كيوت*',
      '*مياوو*'
    ];
  }

  if (responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    m.reply(responses[randomIndex]);
  }

  return false;
}
  
