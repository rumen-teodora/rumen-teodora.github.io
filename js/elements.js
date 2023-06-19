class Element{
    constructor(type){
        this.e = document.createElement(type);
    }

    appendTo(target){
        target.append(this.e);
    }
}


class TextElement extends Element{
    constructor(type,text){
        super(type);
        this.e.append(text);
        this.e.setAttribute('data-aos','fade-up')
    }
}

class Iframe extends Element{
    constructor(iframe){
        super('div');
        this.e.innerHTML = iframe;
        this.e.setAttribute('data-aos','zoom-in')
    }
}

class P extends TextElement{
    constructor(text){
        super('p',text);
    }
}

class H1 extends TextElement{
    constructor(text){
        super('h1',text);
    }
}

class H2 extends TextElement{
    constructor(text){
        super('h2',text);
    }
}

class H3 extends TextElement{
    constructor(text){
        super('h3',text);
    }
}

class H4 extends TextElement{
    constructor(text){
        super('h4',text);
    }
}

class Div extends Element{
    constructor(content){
        super('div');
        this.e.append(content);
        // this.e.style = 'height:100vh'
    }
}

class Image extends Element{
    constructor(src){
        super('img')
        this.e.src = src;
    }
}