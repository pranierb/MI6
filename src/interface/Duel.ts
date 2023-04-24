export default interface IDuel {
    id: number,
    date: Date,
    champions: Array<number>
    winnerId: number |undefined
}