class HeroAttributes{

    constructor(heroName, heroAge, heroType){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }
  
    atacar(){
  
      if (this.heroType === "mago"){
        this.attack = "magia";
  
      } else if (this.heroType === "guerreiro"){
        this.attack = "espada";
  
      } else if (this.heroType === "monge"){
        this.attack = "artes marciais";
  
      } else if (this.heroType === "ninja"){
        this.attack = "shuriken";
  
      }
  
      console.log(`o tipo ${this.heroType} atacou usando ${this.attack}`);
  
    }
  }
  
  let heroAttack = new HeroAttributes("Victor", 20, "monge");
  
  heroAttack.atacar();