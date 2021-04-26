export const counter = {
        baseCounter: 0,
        ingredient1Counter: 0,
        ingredient2Counter: 0,
        souceCounter: 0,
        checkCounter: function(yesOrNo, numcount) {
            switch(numcount) {
                case 1: 
                    return yesOrNo ? ++this.baseCounter : --this.baseCounter;
                case 2:
                    return yesOrNo ? ++this.ingredient1Counter : --this.ingredient1Counter;
                case 3:
                    return yesOrNo ? ++this.ingredient2Counter : --this.ingredient2Counter;
                case 4:
                    return yesOrNo ? ++this.souceCounter : --this.souceCounter;
            }
        }
    }