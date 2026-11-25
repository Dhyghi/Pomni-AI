
import {
    prepareWAMessageMedia,
    generateWAMessageFromContent
} from '@whiskeysockets/baileys';

const shadowza = [
    'https://c.top4top.io/p_332299v5b0.jpg'
];

const sections = [
    {
        title: '˚₊·˚₊· ͟͟͞͞➳❥ 𝗠𝗘𝗡𝗨 𝗕𝗢𝗧 ⛌',
        rows: [
            ['قـــســم الــاعــضــاء 📯', 'تشغيل قسم (#الاعضاء)', 'م1'],
            ['قـــســم الــمــطــور ❄️', 'تشغيل قسم (#المطور)', 'م13']
        ]
    },
    {
        title: 'قــائــمــة رقــم 1 🔴',
        rows: [
            ['قـــســم الـجـروبـات 🔱', 'تشغيل قسم (#الجروبات)', 'م2'],
            ['قـــســم الــبــحــث 🐉', 'تشغيل قسم (#البحث)', 'م14']
        ]
    },
    {
        title: 'قــائــمــة رقــم 2 🔵',
        rows: [
            ['قـــســم الـشـخـصـيـات 🫐', 'تشغيل قسم (#الشخصيات)', 'م10'],
            ['قـــســم الــمــلــصــقــات 🎀', 'تشغيل قسم (#الملصقات)', 'م15']
        ]
    },
    {
        title: 'قــائــمــة رقــم 3 🔴',
        rows: [
            ['قـــســم الـتـسـلـيـة 🍦', 'تشغيل قسم (#التسلية)', 'م16'],
            ['قـــســم الــالــعــاب 👾', 'تشغيل قسم (#الالعاب)', 'م17']
        ]
    },
    {
        title: 'قــائــمــة رقــم 4 🔵',
        rows: [
            ['قـــســم الــالــقــاب 🍷', 'تشغيل قسم (#الالقاب)', 'م5'],
            ['قـســم الـفـعـالـيـات 🎃', 'تشغيل قسم (#الفعاليات)', 'م12']
        ]
    },
    {
        title: 'قــائــمــة رقــم 5 🔴',
        rows: [
            ['قـــســم الــذكــاء 🤖', 'تشغيل قسم (#الذكاء)', 'م18'],
            ['قـــســم الــصــور ♠️', 'تشغيل قسم (#الصور)', 'م9']
        ]
    },
    {
        title: 'قــائــمــة رقــم 6 🔵',
        rows: [
            ['قــسـم الـتـنـزيـلات 🎭', 'تشغيل قسم (#التنزيلات)', 'م3'],
            ['قـــســم الــاصــوات 🎶', 'تشغيل قسم (#الاصوات)', 'م6']
        ]
    },
    {
        title: 'قــائــمــة رقــم 7 🔴',
        rows: [
            ['نــظــام الــالعـاب 💎', 'تشغيل قسم (#نظام الالعاب)', 'م7'],
            ['قـــســم الــديــن 🕋', 'تشغيل قسم (#الدين)', 'م8']
        ]
    },
    {
        title: 'قــائــمــة رقــم 8 🔵',
        rows: [
            ['قـــســم الـحـمـايـة 🍉', 'تشغيل قسم (#الحمايه)', 'م19'],
            ['قـــســم الادوات 🎐', 'تشغيل قسم (#الادوات)', 'م11']
        ]
    },
    {
        title: 'قــائــمــة رقــم 9 🔴',
        rows: [
            ['قـــســم الـايـديـت 🍩', 'تشغيل قسم (#الايديت)', 'م4'],
            ['قـــســم الـريـاكـشـنـات 🎐', 'تشغيل قسم (#الرياكشن)', '']
        ]
    },
    {
        title: 'قــائــمــة رقــم 10 🔵',
        rows: [
            ['جـمـيـع اوامـري 🗒️', 'تشغيل امر (#المهام)', '.مهام']
        ]
    }
];

const clockString = ms => {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor(ms / 60000) % 60;
    const s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
};

const handler = async (m, { conn, bot }) => {
    const user = global.db?.data?.users?.[m.sender] || {};
    const uptime = clockString(process.uptime() * 1000);
    const role = user.role || 'عضو';
    const who = m.mentionedJid?.[0] || m.sender;
    const name = who.split('@')[0];
    const image = shadowza[Math.floor(Math.random() * shadowza.length)];

    const d = new Date(Date.now() + 3600000);
    const week = d.toLocaleDateString('ar', { weekday: 'long' });
    const date = d.toLocaleDateString('ar', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const body = `
*اهلا بك يا @${name} ^ هذا قائمة الاوامر الخاصة بي*
╮─ׅ ─๋︩︪─┈ ─๋︩︪─═⊐‹🍒›⊏═┈ ─๋︩︪─ ∙ ∙ ⊰ـ
┤┌ ─๋︩︪─✦ الـتـشـغـيـل ☇─˚᳝᳝𖥻
│┊ ۬.͜ـ🕰️˖ ⟨ *${uptime}*
┤└ ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪─☇ـ
┤─ׅ─ׅ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪─☇ـ
┤┌ ─๋︩︪─✦ رتـبـتـك ☇─˚᳝᳝𖥻
│┊ ۬.͜ـ🪦˖ ⟨ *${role}*
┘└─ׅ─ׅ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪☇ـ
╯─ׅ─๋︩︪─┈─๋︩︪─═⊐‹🍒›⊏═┈ ─๋︩︪─ ∙ ∙ ⊰ـ`;

    try {
        if (typeof conn.waUploadToServer !== 'function' ||
            typeof conn.relayMessage !== 'function') {
            throw new Error('Interactive message methods are unavailable');
        }

        const media = await prepareWAMessageMedia(
            { image: { url: image } },
            { upload: conn.waUploadToServer }
        );

        const interactiveMessage = {
            body: { text: body.trim() },
            footer: {
                text: '𝗛𝗢𝗦𝗛𝗜𝗡𝗢-𝗕𝗢𝗧 © 𝗕𝗬 𝗔𝗡𝗚𝗘𝗟𝗢'
            },
            header: {
                hasMediaAttachment: true,
                ...media
            },
            contextInfo: {
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363272401238022@newsletter',
                    serverMessageId: 0,
                    newsletterName: '⤹ 𝖢𝖧𝖠𝖭𝖭𝖤𝖫 ⪩🎃⪨ 𝖠𝖭𝖦𝖤𝖫𝖮-𝖭𝖨𝖷ೀ'
                },
                isForwarded: true,
                mentionedJid: [who]
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '♡🍡╎قـوائـمـي╎🍇♡',
                            sections: sections.map(section => ({
                                title: section.title,
                                highlight_label: '◇ 𝑨𝑵𝑮𝑬𝑳𝑶 𝑩𝑶𝑻 ⪦ 米',
                                rows: section.rows.map(row => ({
                                    header: row[0],
                                    title: row[1],
                                    description: '᯽ᨘ‛᩠⋆ꣻ 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓˚₊·❥',
                                    id: row[2]
                                }))
                            }))
                        }),
                        messageParamsJson: ''
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '♡🍓╎مـطـوري╎🍫♡',
                            id: '.المطور'
                        })
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '♡🍡╎لـلاشـتـراك╎🫐♡',
                            id: '.اشتراك'
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };

        await conn.sendMessage(m.chat, {
            react: { text: '💞', key: m.key }
        });

        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: { interactiveMessage }
                }
            },
            {
                userJid: conn.user?.jid || m.sender,
                quoted: m
            }
        );

        await conn.relayMessage(m.chat, msg.message, {
            messageId: msg.key.id
        });

    } catch (e) {
        console.error('Interactive menu error:', e);

        await conn.sendMessage(m.chat, {
            text: `${body.trim()}\n\n*تعذر إرسال القائمة التفاعلية على هذا النظام.*`,
            contextInfo: {
                mentionedJid: [who]
            }
        }, { quoted: m });
    }
};

handler.help = ['اوامر'];
handler.tags = ['ازرار'];
handler.command = /^(تست)$/i;

export default handler;
