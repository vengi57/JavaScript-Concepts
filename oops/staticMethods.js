class Squares{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static equals(a,b){
        return a.width == b.height && a.width == b.height
    }
    // static methods  are method ....but they are part of the objects which are crarted
    static isValidSquare(height,width){
        return height===width
    }
}

const s1 = new Squares(8)
const s2 = new Squares(9)
console.log(Squares.equals(s1,s1))

console.log(Squares.isValidSquare(4,5))
console.log(Squares.isValidSquare(5,5))