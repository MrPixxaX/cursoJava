class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años 
        y soy de color ${this.color}`;
    }

    verInfo = ()=>{
        document.write(this.info+"<br>");
    }

    // ladrar(){
    //     if(this.especie == "perro"){
    //         document.write("waw <br>");
    //     }else{
    //         document.write("no puede ladrar, ya que es un "+this.especie + "<br>")
    //     }
    // }
}


class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }

    set SetRaza(newName){
        this.raza = newName;
    }
      
    get getRaza(){
        return this.raza;
    }
    
}

const perro = new Perro("perro",5,"rojo","deber");
const gato = new Animal("gato",3,"Green");
const pajaro = new Animal("rata",2,"Pink");


// document.write(perro.info + "<br>");

// document.write(gato.info + "<br>");

// document.write(pajaro.info + "<br>");

perro.SetRaza = "pedro";

document.write(perro.getRaza);