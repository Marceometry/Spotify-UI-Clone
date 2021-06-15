export default function reduceStringLength(string: string, length: number) {
    const words = string.split(" ")
    let reducedArray = [],
        reducedArrayLength = 0

    for (let i = 0; i < words.length; i++) {
        if ((reducedArrayLength + words[i].length) <= length) {
            reducedArray.push(words[i])
            reducedArrayLength = reducedArrayLength + reducedArray[i].length + i
        } else {
            let finalString = []
            finalString.push(reducedArray.join(" "), "...")
            return finalString
        }
    }
    
    const reducedString = reducedArray.join(" ")
    return reducedString
}