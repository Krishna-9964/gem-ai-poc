export interface IquickLink {
    id : number;
    query : string;
    type ?: string;
}

const quickLinks : IquickLink[] = [
    {
        id : 1,
        query : "Pay ABC enterprises £100 as Chaps payment",
        type : "process"
    },
    {
        id : 2,
        query : "Check the balance for account GB/304065/00006",
        type : "query"
    },
    {
        id : 3,
        query : "Pay Clare £50 as Faster payment",
        type : "process"
    }
]

export default quickLinks;