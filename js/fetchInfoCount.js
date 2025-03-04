const apiUrl = 'https://kompotserver.net'

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${apiUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

let userCount = fetchData('user/count');
let placeCount = fetchData('place/count');
let stampCount = fetchData('stamp/count');
let rewardCount = fetchData('reward/count');
let userStampRecordCount = fetchData('user-stamp-record/count');

Promise.all([userCount, placeCount, stampCount, rewardCount, userStampRecordCount]).then((values) => {
    const [userCount, placeCount, stampCount, rewardCount, userStampRecordCount] = values;
    document.getElementById('user-count').innerText = userCount;
    document.getElementById('place-count').innerText = placeCount;
    document.getElementById('stamp-count').innerText = stampCount;
    document.getElementById('reward-count').innerText = rewardCount;
    document.getElementById('user-stamp-record-count').innerText = userStampRecordCount;
});
