const { heroes } = require("../data/heroes");

export const getHeroesByPublisher =(publisher)=>{

    const valiPublishers =['DC Comics', 'Marvel Comics'];

    if (!valiPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
        
    }
    return heroes.filter(hero =>hero.publisher === publisher);



}