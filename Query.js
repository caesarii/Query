const Q = (function() {
    
    // log
    const log = console.log.bind(console)
    
    // utils
    const ensure = (condition, message) => {
        if(condition) {
            console.log(message, ' succeed')
        } else {
            console.log(message, ' failed')
        }
    }
    
    const kebabToCamel = str => {
        let result = str
        if(str.indexOf('-') !== -1) {
            const tokens = str.split('-')
            result = tokens.slice(0, 1)
            const others = tokens.slice(1)
            for(let i = 0; i < others.length; i++) {
                const c = others[i]
                result += c.slice(0, 1).toUpperCase() + c.slice(1)
            }
        }
        return result
    
    }
    
    // if(require.main === module) {
    //
    //     const testKebaaToCamel = () => {
    //         const attr = kebabToCamel('margin-left')
    //         log('attr', attr)
    //         ensure(attr === 'marginLeft', 'test kebaaß')
    //
    //         const attr2 = kebabToCamel('border-left-color')
    //         log('attr', attr2)
    //         ensure(attr2 === 'borderLeftColor', 'test kebaaß 2')
    //     }
    //
    //     testKebaaToCamel()
    // }
    // utils end
    
    
    
    
    // 选择元素
    const e = sel => document.querySelector(sel)
    
    // events
    const bind = (element, eventType, callback) => {
        element.addEventListener(eventType, function(event) {
            callback(event)
        })
    }
    
    // html
    const getHtml = element => {
        return element.innerHTML
    }
    
    const setHtml = (element, html) => {
        element.innerHTML = html
    }
    
    
    const insertHTML = (element, html, pos) => {
        element.insertAdjacentHTML(pos, html)
    }
    
    const html = (...args) => {
        log('html', args)
        if(args.length === 1) {
            return getHtml(args[0])
        } else if(args.length === 2) {
            setHtml(args[0], args[1])
        } else if(args.length === 3) {
            insertHTML(args[0], args[1], args[2])
        } else {
            console.error('too many args!')
        }
    }
    
    // css style
    const getStyle = (element, attr) => {
        attr = kebabToCamel(attr)
        const css = window.getComputedStyle(element)
        return css[attr]
    }
    const setStyle = (element, attr, value) => {
        attr = kebabToCamel(attr)
        element.attr = value
    }
    
    const style = (...args) => {
        if(args.length === 2) {
            return getStyle(args[0], args[1])
        } else if(arr.length === 3) {
            setStyle(args[0], args[1], args[2])
        } else {
            console.error('too many or too few args ! please input two or three args')
        }
    }
    
    // css class
    const contains = (element, cls) => {
        return element.classList.contains(cls)
    }
    
    const add = (element, cls) => {
        element.classList.add(cls)
    }
    
    const remove = (element, cls) => {
        element.classList.remove(cls)
    }
    
    const toggle = (element, cls) => {
        element.classList.toggle(cls)
    }
    
    return {
        log,
        e,
        bind,
        html,
        style,
        contains,
        add,
        remove,
        toggle,
    }
})()





