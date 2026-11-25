
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
      '*ماتزعجش دادي كلمني انا*'
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

  } else if (/^آي من عمك|آي عمك$/i.test(m.text)) {
    responses = [
      '*احمد حبيبي*'
    ];

  } else if (/^هاي|هالو$/i.test(m.text)) {
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
  }

  if (responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    m.reply(responses[randomIndex]);
  }

  return false;
}
