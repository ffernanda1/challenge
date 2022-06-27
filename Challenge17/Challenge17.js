export const Pi = 22/7

export default class MesinHitung {

    constructor() {
        this.x = 1
       
    }
    //write code here

    tambah(value) {
        this.x += value;
        return this;
    }

    kurang(value) {
        this.x -= value;
        return this;
    }

    kali(value) {
        this.x *= value;
        return this;
    }

    bagi(value) {
        this.x /= value;
        return this;
    }

    pangkat(value) {
        this.x = this.x ** value
        return this;
    }

    akarPangkat() {
        this.x = Math.sqrt(this.x)
        return this;
    }

    pangkatDua() {
        this.x = this.x ** 2
        return this;
    }

    hasil() {
        console.log(this.x)

    }


}
