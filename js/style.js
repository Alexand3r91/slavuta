// Добавляем в блок id="teamSection" HTML код
function teams (left, position, name, description, img ) {
  $('#teamSection').append( `
  <div class="block ${left ? "blockLeft" : "blockRight"} " id="teamsLeft">
      <h3>${position}</h3>
      <div class="description">
        <img
          class="personal__photo"
          src="${img}"
          alt=""
        />
        <div class="description__all">
          <div class="description__name">
            <h4>${name}</h4>
          </div>
          <div class="description__person">
            ${description}
          </div>
        </div>
      </div>
    </div>
    `);
};

  teams(true, 'Голова Славутського Центру Товаривства Червоного Хреста України', 'Губаренко Любов Сергіївна', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'img/golova2.jpg');
  teams(false, 'Координатор Славутського Центру ТЧХУ', 'Губаренко Тетяна Миколаївна', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'img/tanya_hybarenko.jpg');
  teams(true, 'Лідер гуманітарного напрямку "Bravo"', 'Волков Олександр Олександрович', 'Олександр — лідер напрямку Гуманітарної допомоги, він з нами з першого дня заснування Центру. Саме він створив онлайн базу, яка ефективно покращила нашу роботу на видачі і дозволила якісніше надавати допомогу та перевіряти, коли, скільки і що ми надавали. Контроль і облік — це важливо.', 'img/face/VolkovOleksandr.JPG');
  teams(false, 'Волонтер гуманітарного напрямку, YABC (Life Skills)', 'Мартинюк Вікторія Сергіївна', 'Вікторія — наша знахідка. Її супер сила — це терпіння і надзвичайна зосередженість у роботі. Їй можна довірити будь-яку задачу, і вона з нею неодмінно впорається. Вона вдало поєднує роботу у нашому Центрі та онлайн навчання в університеті. Це, до речі, теж потрібно вміти, і що набагато важливіше — хотіти.', 'img/vika.jpg');
  teams(true, 'Волонтер гуманітарного напрямку', 'Степанюк Вячеслав Васильович', 'Славік — просто наш Славік. Волонтер, який з нами з початку роботи нашого Центру. Він найдовше займається лише одним основним процесом — роботою з електронними базами даних, і ми повністю йому в цьому довіряємо.', 'img/slava.jpg');
  teams(false,'Волонтер гуманітарного напрямку', 'Коваленко Віктор Андрійович', 'Вітя — наш містер "можу все!, що робити?". Він може заповнювати відомості, працювати з базами даних, робити електронні списки, відповідати на дзвінки, і з мовчазною згодою їхати туди, де треба допомогти нашим бенефіціарам. Він наш Король мемів та настільних ігор. Має хороший музичний смак і чудове почуття гумору.', 'img/vitya.jpg');
  teams(true, 'Лідер напрямку гуманітарної освіти "Bravo"', 'Рудніцька Анастасія Юріївна', 'Знайомтесь — це Анастасія Рудніцька. Наш лідер напрямку "Гуманітарна освіта" та найкращий фандрайзер у світі. Минулого тижня Настя прийняла участь у проєкті, який відбувався у Бельгії, в Overijse. Проєкт був націлений розповісти для молоді з усього світу про громадське здоров`я та здорові звички, як їх поширювати серед молоді, превентивно працювати з хворобами, боротись з міфами про здоров`я в масах і т. д.', 'img/face/RudnitskaAnastasia.PNG');
  teams(false,'Лідер по ПСП', 'Волкова Тетяна Олександрівна', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi deleniti autem dolor deserunt hic? Voluptate pariatur amet consequatur? Magni molestiae dolorem similique eius dolores voluptatem natus. Blanditiis, ab tenetur?', 'img/tanya_volkova.jpg');
  teams(true, 'Волонтер ПСП', 'Чудакорова Тетяна Анатоліївна', 'Тетяна Чудакарова приєдналась до нашої команди волонтерів в липні і проводить інформаційні сесії, як волонтерка Червоного Хреста. А ще вона нереально крута та розумна жінка Тетяна створила групу у телеграм каналі, де буде розповідати цікаві факти про ваш емоційний стан,як з ним працювати.', 'img/tanya_chydokorova.jpg');
  teams(false,'Лідер напрямку "Догляд в дома"', 'Юзефович Юлія Вікторівна', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi deleniti autem dolor deserunt hic? Voluptate pariatur amet consequatur? Magni molestiae dolorem similique eius dolores voluptatem natus. Blanditiis, ab tenetur?', 'img/ylya.jpg');
  teams(true, 'Лідер "Банк Одягу" "Bravo"', 'Богданова Олена Петрівна', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi deleniti autem dolor deserunt hic? Voluptate pariatur amet consequatur? Magni molestiae dolorem similique eius dolores voluptatem natus. Blanditiis, ab tenetur?', 'img/face/BogdanovaOlena.JPG');
