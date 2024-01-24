export default function merge(collection_1: number[], collection_2: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    //อันนี้คือ while ที่จะตรวจสอบว่า collection_1 น้อยกว่า collection_2 มั้ยถ้าน้อยกว่าก็ push เข้าไปใน array result[] จนหมดค่าที่อยู่ใน collection_1 หรือ collection_2 
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_2[j]);
            j++;
        }
    }
    //เเละค่าที่เหลืออยู่จะถูกนำมาส่งเข้าใน Array result[] ทั้งหมด
    while (i < collection_1.length) {
        result.push(collection_1[i]);
        i++;
    }

    while (j < collection_2.length) {
        result.push(collection_2[j]);
        j++;
    }

    return result;
}