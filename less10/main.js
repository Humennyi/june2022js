let money = 0;

function goWork(isWarkimgDay) {
    return new  Promise((resolve, reject)=>{

        setTimeout(() => {
            if (isWarkimgDay) {
                money += 1500
                resolve(money);
                console.log('TESt')
            } else {
                console.log('I am relaxing');
                reject('its not working day')
            }

        }, 800);
    })

}

function goToCroatia(money) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

                if (money<800){
                    console.log('No money no honey')
                    reject('Ну поїду до батьків')


                }else {
                    console.log('Hoooray. Swimming all day');
                    money -=600
                    resolve(money)

                }
            },400);
        })
}


function buySouvenirs(money) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

            if (money<300){
                console.log('ну просто пофоткаюся');
                reject('Не було грошей на магніики')

            }else {
                console.log('Купив магнітика');
                money -= 250;
                resolve(money)

            }
        },1000);
    })

}

goWork(true)
    .then(payment => {
        console.log('I got', payment, 'after Working day');
        return goToCroatia(payment);

    }).then(moneyAfterTrip=>{
    console.log('After trip I got', moneyAfterTrip);
    return buySouvenirs(moneyAfterTrip);
}).then(moneyAfterShoping=>{
    console.log('I got', moneyAfterShoping, 'after relax day')
})
    .catch(reason => {
        console.warn('fhfghfgh',reason)
    }
    )
// async function vacation() {
//     try {
//         const payment = await goWork(true);
//         console.log(payment, 'payment')
//
//         const moneyAfterTrip = await goToCroatia(payment);
//         console.log(moneyAfterTrip, 'moneyAfterTrip');
//
//         const moneyAfterShoping = await buySouvenirs(moneyAfterTrip);
//         console.log(moneyAfterTrip, 'moneyAfterShoping')
//
//     }catch (e) {
//         console.warn('fhfghfgh',reason)
//     }
//
//
// }
//
// vacation()