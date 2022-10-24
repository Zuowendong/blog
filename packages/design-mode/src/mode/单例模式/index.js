export default class SignCase {
    show() {
        console.log('我是一个单例对象')
    }

    static getInstance() {
        if(!SignCase.instance) {
            SignCase.instance = new SignCase()
        }
        return SignCase.instance
    }
}

const s1 = SignCase.getInstance()
const s2 = SignCase.getInstance()

console.log(s1 === s2)
console.log(s1)
console.log(s2)