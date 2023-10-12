
let regex = ''
export function isCorrectForm(errors) {
    const e = errors??{error:true};
    return Object.keys(e).length < 1;
}
export function isEmpty(text) {
    if (text === "") return true;
    else return false;
}
export function isArrayEmpty(array) {
    console.log("array ===<<>>===",array);
    if (array.length === 0) return true;
    else return false;
}
export function isLengthMax(text, max) {
    if (text.length > max) return true;
    else return false;
}
export function isLengthMin(text, min) {
    if (text.length < min) return true;
    else return false;
}
export function isNumber(text) {
    regex = /^([0-9])*$/;
    if (!regex.test(text)) return true;
    else return false;
}
export function isNumberDocument(text) {
    regex = /^[0-9\-]+$/;
    if (!regex.test(text)) return true;
    else return false;
}
export function isGreaterThanZero(text) {
    if (parseInt(text) === 0) return true;
    else return false;
}
export function isNumberMax(text, max) {
    if (parseInt(text) > max) return true;
    else return false;
}
export function isMoney(text) {
    regex = /^(\d{1,3},)*\d{1,3}(\.\d+)?$/;
    if (!regex.test(text)) return true;
    else return false;
}
export function isDecimal(text) {
    regex = /^(\d+)?(\.\d+)?$/;
    if (!regex.test(text)) return true;
    else return false;
}
export function isText(text) {
    regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(text)) return true;
    else return false;
}
export function isFileImage(file) {
    const extensionAllowed = ['jpg', 'png', 'jpeg',]
    if (!file) return
    const name = file?.name;
    const extensionFile = name?.split('.').pop().toLowerCase();
    if (!extensionAllowed.includes(extensionFile)) return true;
    else return false;
}
export function isFileSizeCorrect(file, size) {
    console.log("vemos el archivo", file);
    if (!file) return
    if (file?.size > size * 1024 * 1024) return true;
    else return false;
}

export function isGreaterThan(max, min) {
    
    if (parseInt(min) >= parseInt(max)) return true;
    return false;
}
