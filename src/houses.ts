class HousesParser {
  private houses: Array<string> = [];

  constructor(private readonly source: string) {
    // заменяем "и вся улица до конца" на "+"
    let str = source.replace('и вся улица до конца', '+');
    
    // получаем массив из всех возможных вариантов
    const re = /((не)?четные(\s)*[а-я]*(\s)*\d+\-?\d+(\s)*\+?)|(\d+\-?\/?\d+[а-я]?)/gi;
    const strArray: string[] | null = str.match(re);
    
    strArray ? strArray.forEach(item => {
      // убираем всё лишнее
      let s = item.match(/(не|четные)|(\d+\/?\-?\а?)|\+/gi)?.join('');
      
      s ?
        // формируем диапазон
        s.indexOf('-') !== -1 ?
          this.houses = this.houses.concat(this.getDiaposone(s)) :
          this.houses.push(s)
      : null;
    }) : null;

  }

  private getDiaposone (value: string): Array<string>  {
    let resArray: Array<string> = [];
    let num = value.match(/(\d+)/g);

    if(num){
      if(value.indexOf('четные', 0) === 0){
        for (let i = +num[0]; i <= +num[1]; i++){
          this.isEven(i) ? resArray.push(i.toString()) : null;
        }
      }

      if(value.indexOf('не', 0) === 0){
        for (let i = +num[0]; i <= +num[1]; i++){
          this.isOdd(i) ? resArray.push(i.toString()) : null;
        }
      }

      if(value.indexOf('четные', 0 ) === -1){
        for (let i = +num[0]; i <= +num[1]; i++){
          resArray.push(i.toString());
        }
      }
    }    

    return resArray;
  }

  private isEven(n: number): boolean {
    return (n % 2 == 0) ? true : false;
  }

  private isOdd(n: number): boolean {
    return (n % 2 == 1) ? true : false;
  }

  // public functions
  public isHouseIncluded(houseNumber: string) : boolean {
    let isIncluded: boolean = false;

    // проверка на плюс
    this.houses.forEach(house => {
      if (house.indexOf('+')){
        let num = house.match(/(\d+)/g);

        if(num && house.indexOf('четные', 0) === 0){
          if(this.isEven(+houseNumber) && (+houseNumber >= +num[0])){
            isIncluded = true;
          }
        }

        if(num && house.indexOf('не', 0) === 0){
          if(this.isOdd(+houseNumber) && (+houseNumber >= +num[0])){
            isIncluded = true;
          }
        }

      }
    })

    // просмотр массива
    !isIncluded ? isIncluded = this.houses.includes(houseNumber) : false;
    return isIncluded;
  }
}

export default HousesParser;

