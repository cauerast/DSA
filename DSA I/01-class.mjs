class GeometricForm{
    // private in js = #

    #hight;
    #width;
    #type;

    // get -> to get data
    // set -> to set data 

    get hight(){
        return this.#hight;
    }

    get width(){
        return this.#width;
    }

    set hight(value){
        if(typeof(value) !== "number" || value <= 0){
            throw new Error("ERROR: hight needs to be a number and > 0");
        }

        this.#hight = value;
    }

    set width(value){
        if(typeof(value) !== "number" || value <= 0){
            throw new Error("ERROR: width needs to be a number and > 0");
        }

        this.#width = value;
    }

    set type(value){
        if(!["R", "T", "E"].includes(value.toUpperCase())){
            throw new Error("ERROR: type needs to be [R, T or E]");
        }
        this.#type = value.toUpperCase();
    }

    calcArea(){
        switch (this.#type) {
            case "R":
                return this.#hight * this.#width;
            case "T":
                return (this.#hight * this.#width) / 2;
            case "E":
                return (this.#hight / 2) * (this.#width / 2) * Math.PI;
            default:
                break;
        }
    }
}

let form1 = new GeometricForm();
form1.hight = 7;
form1.width = 22.5;
form1.type = "E";

console.log("area: ", form1.calcArea());

