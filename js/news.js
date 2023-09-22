function newsBlocks (title, text, video, img) {
    $('#latestNews').append( `
    <div class="allNews">
    <div>
      <div class="newsTitle">
        <h3>${title}</h3>
        <div class="newsBlock">
          <div class="newsBlockText">
            <p class="blockText">
            ${text}
            </p>
          </div>
          <div>
            ${video ? `<video src="${video}" controls width="400px" height="700px"></video>` : ""}
            ${img ? `<img src="${img}" alt="" style="width: 400px; height: 400px" />` : ""}
          </div>
        </div>
      </div>
    </div>
  </div>
      `);
};


// Еще один код для активации html кода
/*
$(document).ready(function() {
    newsBlocks();
});
*/
newsBlocks('Життя Нашої Команди', 'Зараз життя нашої команди активно проходить офлайн. Так активно, що не встигаємо публікувати все, що відбувається у нашому житті. 😅 Отже, з важливого:🙌  тривають ремонтні роботи. За ці два тижні ми встигли дуже багато, і вже скоро ви зможете побачити на скільки ми змінились. 🙌  отримали велику кількість спортивного обладнання та техніки. Облаштування спортивного простору триває, а грантовий проєкт наближається до фінішу закупівель. 🙌 пройшов новий набір волонтерів. Ми раді, що до нас приєдналось багато свідомих та класних людей. Ми навіть готові розширювати наші напрямки діяльності, а це ж була лише перша зустріч-знайомство. 😍 🙌 привітали нового волонтера у нашій команді, який проявив ініціативу, і вирішив підписати договір у свій День народження. 🙌 готуємось до OD-форуму, на якому чекаємо гостей з усієї області та наших партнерів. Будемо говорити про фандрейзинг, бренд Червоного Хреста та мотивацію волонтерів. Повертаємось до активної діяльності та наших заходів за тиждень. Очікуйте анонсів та слідкуйте за нашими соціальними мережами. 😉', '', 'img/life/life.jpg')
newsBlocks('Захід до 1 вересня', 'Ще один захід, який організувала наша команда — вдався 🙌 Вчора, 1 вересня, до Дня знань 🎊 ми влаштували свято і для дітей, і для дорослих. Окрім того, наші волонтери розповіли масу корисних речей, які знадобляться для школярів та батьків у новому навчальному році. Наш інструктор з першої допомоги, Юлія Юзефович, провела майстер клас з першої допомоги. Волонтери з напрямку ПЗПСП "Психічного здоров`я та психосоціальної підтримки" провели паралельно заходи для дорослих та дітей. Для дорослих відбулася сесія, яка допомогла знайти відповіді на запитання : 🔸 Як підтримати свого учня чи ученицю? 🔸 Що робити батькам для себе в період стресового навантаження на початку учбового року? 🔸Де знайти баланс в пошуку талантів своєї дитини? Для дітей провели цікавий та творчий захід по розмальовуванню футболок. Спочатку кожен учасник малював ескіз крейдою, а потім переносив його на футболку. Всі поділилися значеннями власних малюнків та забрали свої кастомізовані, унікальні футболки з собою. 😎 Окрім того, ми грали в бадмінтон, ігри з м`ячем, пригали на скакалці та загалом весело проводили час. 👐 Наш яскравий вечір завершився так само яскраво — під відкритим небом всі переглянули мультфільм «Енканто: Світ магії». Хочемо подякувати нашим постійним та спонтанним волонтерам за залученість та допомогу в організації заходу. Дякуємо Огойко Андрію, вже нашому постійному партнеру, за звуковий супровід заходу, а також додатково надані меблі. Дякуємо всім нашим учасникам, що провели вечір разом з нами, подарували масу посмішок та позитивних емоцій. Бажаємо усім успішного та легкого навчального року, нехай все вдається. 🙌', 'video/septemberOne.mp4', '')
newsBlocks('', 'Сьогодні, 1 вересня , наш інструктор з першої допомоги, Юзефович Юлія, Голова Центру та фахівець з розвитку побували на відкритті "Класу безпеки" у Славутській гімназії № 9. "Клас безпеки" розділений на кілька навчальних осередків та обладнаний різноманітним інвентарем. Метою даного простору є теоретичне і практичне навчання діям дітей під час виникнення надзвичайних ситуацій різного характеру. Юлія провела майстер клас з першої допомоги для учнів 5-го класу. Дякуємо за запрошення та можливість долучитись до такого важливого заходу. ✨', '', 'img/oneHelpOneSeptember.jpg')
newsBlocks('Еко Захід', 'Вчора, 31 серпня, провели еко захід та реалізували один з проєктів, який написали на попередній сесії Sprint. 🙌 Даний проєкт передбачав підготовку та проведення акції прибирання однієї з територій у місті Славута. Наша команда обрала частинку лісу. 🌲🌳 До даної акції залучили усіх охочих людей нашої громади. Дякуємо всім, хто до нас приєднався. Крім того, інформаційний складник акції полягав у розміщенні циклу постів у соціальних мережах Центру, що ми вже почали робити та опублікували 2 серії серіалу "Про пластик". ✅ Дякуємо нашій волонтерці Анна Білоус за вчорашню інформативну презентацію та цікаву лекцію "Сміття в нашому житті", фото-, відео матеріали та приклади з власного життя. Ми сподіваємось, що наша акція зможе стати для вас позитивним прикладом для наслідування. Наша головна мета підвищити обізнаність жителів нашої славутської громади в питаннях захисту довкілля, і розвинути усвідомлення важливості залучення кожного у збереження природи. 💚 Ми робимо перші кроки, сподіваємось нам це вдасться. 👌🏻', 'video/ekoAust.MP4')