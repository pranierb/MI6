export default interface IDuel {
    id: number,
    date: Date,
    championId1: number,
    championId2: number,
    winnerId: number |undefined
}