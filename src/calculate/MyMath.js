class MyMath{
    static mult(a, b){
        return a * b;
    }
    static add(a, b){
        return Number(a) + Number(b);
    }
    static sub(a, b){
        return a - b;
    }
    static div(a, b){
        if(b !== 0){
            return a / b;
        }
        throw new Error("деление на ноль!");
    }
}

export default MyMath;