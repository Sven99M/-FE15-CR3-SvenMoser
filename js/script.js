var stage1 = (act1, act2, act3) => {
    console.log(`The TJ_Beastboy Concert costs ${act1}`);
    console.log(`The Lance Butters Concert costs ${act2}`);
    console.log(`The BHZ Concert costs ${act3}`);
    return act1, act2, act3;
}
stage1(90, 50, 80);
var stage2 = (act4, act5, act6) => {
    console.log(`The GreeeN Concert costs ${act4}`)
    console.log(`The Cro Concert costs ${act5}`)
    console.log(`The Apache 207 Concert costs ${act6}`)
    return act4, act5, act6;
}
stage2(420, 330, 220);
var stage3 = (act7, act8, act9) => {
    console.log(`The makko Concert costs ${act7}`)
    console.log(`The Yung Hurn Concert costs ${act8}`)
    console.log(`The Verifiziert Concert costs ${act9}`)
    return act7, act8, act9;
}
stage3(120, 90, 120);
var calculateInvoice = (act1, act2, act3, act4, act5, act6, act7, act8, act9) => {
    let sum = act3 + act5 + act9;
    let sum2 = act1 + act4 + act7;
    let sum3 = act2 + act6 + act8;
    let sum4 = act1 + act4 + act8;
    console.log(`Dear Customer, your total on the World Music festival will be ${sum} Euro`)
    console.log(`Dear Customer, your total on the World Music festival will be ${sum2} Euro`)
    console.log(`Dear Customer, your total on the World Music festival will be ${sum3} Euro`)
    console.log(`Dear Customer, your total on the World Music festival will be ${sum4} Euro`)
    return sum, sum2, sum3, sum4;
}
calculateInvoice(90, 50, 80, 420, 330, 220, 120, 90, 120);
var studentInvoice = (act1, act2, act3, act4, act5, act6, act7, act8, act9) => {
    let sum = act1 + act4 + act9;
    let div = sum * 0.9;
    let sum2 = act3 + act6 + act7;
    let div2 = sum2 * 0.9;
    let sum3 = act2 + act5 + act8;
    let div3 = sum3 * 0.9;
    console.log(`Dear Customer, your discounted invoice for the WMF will be ${div} Euro`);
    console.log(`Dear Customer, your discounted invoice for the WMF will be ${div2} Euro`);
    console.log(`Dear Customer, your discounted invoice for the WMF will be ${div3} Euro`);
}
studentInvoice(90, 50, 80, 420, 330, 220, 120, 90, 120);