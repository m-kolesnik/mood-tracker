const Reply = {
    onStart: {
        text: '<b>Привет, мой милый друг</b>\n\n<i>Этот бот - барометр настроения, подпишись на уведомления о смене моего настроения чтобы понимать что происходит</i>',
        options: {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Исходный код', url: 'https://github.com/m-kolesnik/mood-tracker' }]
                ]
            },
            parse_mode: 'HTML'
        }
    },
    onMainMenu: {
        text: '<b>Главное меню:</b>',
        options: {
            reply_markup: {
                keyboard: [
                    [{ text: '❓ Узнать настроение' }],
                    [{ text: '👤 Профиль' }, { text: '✍️ Написать' }]
                ],
                resize_keyboard: true
            },
            parse_mode: 'HTML'
        },
        owner: {
            text: '<b>Главное меню:</b>',
            options: {
                reply_markup: {
                    keyboard: [
                        [{ text: '😊 Моё настроение' }, { text: '❓ Последнее' }],
                        [{ text: '📥 Сообщения' }, { text: '📈 Статистика' }]
                    ],
                    resize_keyboard: true
                },
                parse_mode: 'HTML'
            },
        }
    },
    onWrong: {
        text: '😔 <b>Я тебя не понимаю</b>\n\n<i>Знаешь, а ведь у меня есть клавиатура чтобы со мной было проще общаться</i>',
        options: {
            parse_mode: 'HTML'
        }
    },
    onSendMessage: {
        text: '✍️ <b>Отправить сообщение</b>\n\n<i>Пожалуйста, не пиши всякие гадости, ты ведь не хочешь испортить мне настроение?\n\nА хотя вряд ли у тебя получится.. Кстати я может и отвечу тебе, если напишешь что-то хорошее</i>',
        options: {
            reply_markup: {
                keyboard: [
                    [{ text: '❌ Отмена' }]
                ],
                resize_keyboard: true
            },
            parse_mode: 'HTML'
        }
    }
};

module.exports = { Reply };