const CONSTANTS = [
    [
        new H1('Покана за сватба'),
        new H2('Румен и Теодора'),
        new H3('Събота, 7 Октомври 2023г.'),
        new Image("./img/main_picture.jpg")
    ],
    [
        new P('Имаме удоволствието да Ви поканим да бъдете част от нашия специален ден. '),
        new P(' Денят, в който окрилени от любовта ще си кажем един на друг ВЕЧНО „ДА“!'),
        new P('ДА на копнежа един към друг, грижовносттa и мечтата да бъдем заедно дори и в безкрайността.'),
        new P('Семейство прекрасно бленуваме да изградим, но първо любовта си с ВАС, нашите близки и приятели искаме да споделим.'),
        new P('Заповядайте и радостта ни споделете, с широки усмивки се заредете, като присъствието си възможно най-скоро заявете.')
    ],
    [
        new H1('Граждански брак'),
        new H2('13:00'),
        new H3('Община Елин Пелин '),
        new H4('пл. Независимост 1, гр. Елин Пелин'),
        new Iframe('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933.6740598787496!2d23.5977475!3d42.668262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa63606dc83d65%3A0xbaa92b35e1cb929c!2z0J7QsdGJ0LjQvdCwINCV0LvQuNC9INCf0LXQu9C40L0!5e0!3m2!1sbg!2sbg!4v1687002674660!5m2!1sbg!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
    ],
    [
        new H1('Църковен брак'),
        new H2('14:00'),
        new H3('Храм Свети Николай Чудотворец '),
        new H4('пл. Независимост, гр. Елин Пелин'),
        new Iframe('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933.6363031810806!2d23.60234216930219!3d42.66906199839282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa649fd9504b45%3A0x70a226ea14ee41b9!2z0KXRgNCw0Lwg0KHQstC10YLQuCDQndC40LrQvtC70LDQuSDQp9GD0LTQvtGC0LLQvtGA0LXRhg!5e0!3m2!1sbg!2sbg!4v1687007807117!5m2!1sbg!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
    ],
    [
        new H1('Сватбено тържество'),
        new H2('19:00'),
        new H3('Резиденция Тера '),
        new H4('улица „Академик Андрей Сахаров 56, Младост 1, София'),
        new Iframe('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.444795211688!2d23.365000375001994!3d42.65192881661388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa869b6fa025c5%3A0xf208ee42b152e139!2z0KDQtdC30LjQtNC10L3RhtC40Y8g0KLQtdGA0LA!5e0!3m2!1sbg!2sbg!4v1687007893729!5m2!1sbg!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
    ],
    [
        new Iframe('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4X3SxWiI1fOf-RupoRId2ub04TggHepgCzA_5-YH4kH2csw/viewform?embedded=true" width="640" height="1200px" frameborder="0" marginheight="0" marginwidth="0">Зарежда се…</iframe>')

    ],
    [
        new Div('Румен и Теодора © 2023'),
        new Div('All rights reserved.')
    ]
];

CONSTANTS.forEach((elements,index)=> {
    const section = document.createElement(index == CONSTANTS.length - 1 ? 'footer' : 'section');
    section.classList.add(index % 2 == 0 ? 'dark' : 'darker');
    elements.forEach(e=> section.append(e.e));
    document.querySelector('body').append(section);
});



