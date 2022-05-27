const puppeteer = require('puppeteer');


(async () => {
    scrapeMetropolis()
    scrapeWeisshaus()
    scrapeOffBroadway()
})();



async function scrapeMetropolis(){
    console.log('scrapeMetropolis')
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://metropolis-koeln.de/programm');

    let movies = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('.movie-list-view h2')
        items.forEach((item) => {
            results.push({
                movieName: item.innerText,
            });
        });
        return results;
    })
    console.log(movies)
    await browser.close();


}

async function scrapeWeisshaus(){
    console.log('scrapeWeisshaus')
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://www.weisshaus-kino.de/programm');

    let movies = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('.movie-fsk-tec-box')
        items.forEach((item) => {
            results.push({
                movieName: item.nextSibling.innerText,
            });
        });
        return results;
    })
    console.log(movies)
    await browser.close();
}

async function scrapeOffBroadway(){
    console.log('scrapeOffBroaday')
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://www.off-broadway.de/programm');

    let movies = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('.movie-fsk-tec-box')
        items.forEach((item) => {
            results.push({
                movieName: item.nextSibling.innerText,
            });
        });
        return results;
    })
    console.log(movies)
    await browser.close();
}