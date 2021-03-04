function myGetData(getData, times, delay) {
    return new Promise((resolve, reject) => {
        function attempt() {
            getData().then(resolve).catch(function (error) {
                console.log(`还有 {times} 次尝试`);
                if (0 == times) {
                    reject(error)
                } else {
                    times--
                    setTimeout(attempt, delay)
                }
            })
        }
        attempt()
    })
}