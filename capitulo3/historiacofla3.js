function ejercicio1(){
    class Celulares{
        constructor(color,peso,rdp,rdc,ram){
            this.color = color;
            this.peso = peso;
            this.rdp = rdp;
            this.rdc = rdc;
            this.ram = ram;
            this.encendido = false;
        }


        presionarBotonEncendido(){
            if (this.encendido == false) {
                alert("celular prendido");
                this.encendido = true;
            }else{
                alert("el celular apagado");
                this.encendido = false;
            }
        }

        reiniciar(){
            if(this.encendido == true){
                alert("reiniciando celular");
            }else{
                alert("el celular esta apagado");
            }
        }

        tomarFoto(){
            alert(`Foto tomada en una resolucion de ${this.rdc}`);
        }

        grabarVideo(){
            alert(`grabando video en ${this.rdc}`);
        }


        mostrarInfo(){
            return `
                Color: <b>${this.color}</b></br> 
                Peso: <b>${this.peso}</b></br>
                Resolucion de camara: <b>${this.rdc}</b></br>
                Resolucion de video: <b>${this.rdp}</b></br>
                Memoria ram: <b>${this.ram}</b></br>      
            `;
        }
    }


    class celularAltaGamma extends Celulares{
        constructor(color,peso,rdp,rdc,ram,rdce){
            super(color,peso,rdp,rdc,ram);
            this.rdce = rdce;
        }

        grabarVideoLento(){
            alert("Estas grabando en camara lenta");
        }

        reconocimientoFacial(){
            alert("Vamos a iniciar un reconocimiento facial");
        }


        mostrarInfoAltaGama(){
            return this.mostrarInfo() + `${this.rdce} <br>`;
        }
    }
    // celular1 = new Celulares("rojo","150g","5'","full hd","2GB");
    // celular2 = new Celulares("verde","130g","3'","full hd","5GB");
    // celular3 = new Celulares("blanco","120g","11'","full hd","8GB");

    celular1 = new celularAltaGamma("rojo","150g","5.2'","full hd","22GB","full hd xd");
    celular2 = new celularAltaGamma("blanco","120g","11'","full hd","8GB","full hd xd");

    document.write(`
        ${celular1.mostrarInfoAltaGama()} <br>
        ${celular2.mostrarInfoAltaGama()} <br>
    
    `);

}


class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente")
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("app desinstalada correctamente")
		}
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}


    appInfo(){
        return `
            Descargas: <b> ${this.descargas}</b><br>
            Puntuacion: <b> ${this.puntuacion}</b><br>
            Peso: <b> ${this.peso}</b><br>
        `;
    }


}


app1 = new App("15.000","7 estrellas","900mb");
app2= new App("11.000","5 estrellas","100mb");
app3 = new App("2.000","4 estrellas","500mb");
app4 = new App("1.000","2 estrellas","700mb");
app5 = new App("133.000","2 estrellas","600mb");
app6 = new App("500","33 estrellas","10mb");
app7 = new App("11.210.002","1 estrellas","400mb");



document.write(`
	${app1.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);