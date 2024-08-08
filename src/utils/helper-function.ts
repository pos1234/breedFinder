export const combineBreeds = (breed: any[]) => {
    if (breed[0].length == 0) {
        return breed[1]
    }
    if (breed[1].length == 0) {
        return breed[0]
    }
};