// Promise

console.log('this is tute39.js');

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error=true;
            if (!error) {
                console.log(`func1 say's: Promise Resolved`);
                resolve('Done');
            }
            else {
                console.log(`func1 say's: promise Rejected`);
                reject('sorry not accepted!');
            }
        }, 2000);
    });
}

func1().then(function(done){ // then is a promise is resolved
    console.log('Ashish: thanks for resolving\nReason: ' +done);
}).catch(function(error){ // catch is a promise is rejected   
    console.log('Ashish: very bad bro\nReason: ' +error);
});