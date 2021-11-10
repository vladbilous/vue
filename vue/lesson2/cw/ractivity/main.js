class MyVue {
    constructor(params) {
        this.rootSelector = params.el;
        this.data = params.data;
        this.rootElement = null;
        this.newElem = null;

        this.init()
    }

    init() {
        this.rootElement = document.querySelector(this.rootSelector);

        for(let key in this.data) {
            this[key] = this.data[key];
            let value = this[key];

            Object.defineProperty(this, key, {
                get() {
                    return value
                },
                set(nValue) {
                    value = nValue;
                    this.render()
                }
            })
        }
    }

    render() {
        if(!this.newElem) {
            this.newElem = document.createElement('div')
        }

        this.newElem.innerHTML = `<span>${this.str}</span>`;

        this.rootElement.appendChild(this.newElem)
    }
}

document.addEventListener('DOMContentLoaded', main, false);

function main() {
    const testVue = new MyVue({
        el: '#app',
        data: {
            str: 'lesson 2'
        }
    })

    const inp = document.querySelector('#app input');

    inp.addEventListener('input', e => {
        e.preventDefault()
        testVue.str = e.target.value
    })

}