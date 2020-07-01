
export default {
    saveCards(name:any, newCards:any) {
        localStorage.setItem(name, JSON.stringify({cards: newCards}))
    },
    getCards(name: any) {
        const defaultCards = [
            {id: 1, title: 'test', text: 'test'},
            {id: 2, title: 'test2', text: 'test2.'}
        ]

        const json = localStorage.getItem(name) || JSON.stringify({cards: defaultCards});
        return JSON.parse(json).cards;
    },
    deleteCard(kanbanList: any, id:any) {
        const newCards = kanbanList.cards.filter((card: { id: any; }) => card.id !== id);
        return newCards;
    }
}
