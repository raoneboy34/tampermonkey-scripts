// ==UserScript==
// @name         Auto Collector (VPN Supported)
// @namespace    https://rewards.bing.com
// @version      1.1
// @description  Auto-complete daily set, poll, quizzes on VPN (USA) mode using simulated clicks
// @author       ChatGPT
// @match        https://rewards.bing.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function autoClickOffers() {
        const cards = document.querySelectorAll("a[href*='rewardsquiz'], a[href*='quiz'], a[href*='poll'], a[href*='search']");
        for (let card of cards) {
            if (card && card.href) {
                card.click();  // Simulated user click
                await delay(6000);  // Wait 6 sec for next
            }
        }
    }

    window.addEventListener('load', async () => {
        await delay(3000);  // Initial wait
        autoClickOffers();
    });
})();