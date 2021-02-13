//the output from the API always has the correct answer in the same index
//this is used to shuffle that up
export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() * 0.5)