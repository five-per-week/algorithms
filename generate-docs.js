const axios = require('axios');
const dayjs = require('dayjs');
const fs = require('fs');

const LR = '\r\n';

function initDayJS() {
    var utc = require('dayjs/plugin/utc'); // dependent on utc plugin
    var timezone = require('dayjs/plugin/timezone');
    var weekOfYear = require('dayjs/plugin/weekOfYear');
    require('dayjs/locale/ko');
    dayjs().locale('ko').format();
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Asia/Seoul');
    dayjs.extend(weekOfYear);
}

function hasAlgorithmLabel(pr) {
    return pr.labels.some((label) => {
        if (label.name == 'algorithm') return true;
        return false;
    });
}
function getUsersFromPullRequests(prs) {
    return Object.values(
        prs.reduce((acc, pr) => {
            const id = pr.user.login;
            if (!(id in acc)) {
                acc[id] = Object.assign(pr.user, { prs: [] });
            }
            acc[id].prs.push(pr);

            return acc;
        }, new Map()),
    );
}
async function fetchPullRequests() {
    const { data } = await axios.get(
        'https://api.github.com/repos/five-per-week/algorithms/pulls?state=closed',
    );
    return data;
}
function generatePullRequestRow(pr) {
    const isSolved = pr.title.indexOf('✅') != -1 ? '✅' : '❌';
    const title = pr.title.match(/:(.*)[@\s]/)[1];
    const url = pr.html_url;
    return `| ${title} | ${isSolved} | [바로가기](${url}) |`;
}

function generateTable(prs) {
    const tRow = '| :-------: | :-------: | :------: |' + LR;
    return (
        '| 문제이름 | 해결 여부 | 링크 | ' +
        LR +
        tRow +
        prs.map(generatePullRequestRow).join(LR) +
        LR
    );
}
function generateSection(prs) {
    return getUsersFromPullRequests(prs)
        .map((user) => {
            return (
                LR +
                `### <img src="${user.avatar_url}" height="17px" width="17px"> ${user.login}` +
                LR +
                generateTable(user.prs) +
                LR
            );
        })
        .join(LR);
}
function generateSummaryThisWeek(prs) {
    const weekOfYear = dayjs().week();

    const pullRequestsThisWeek = prs.filter(
        (x) => dayjs(x.created_at).week() == weekOfYear,
    );

    const header =
        LR +
        `## 이번 주(${weekOfYear}주차) 요약` +
        LR +
        `[이전 요약들](https://github.com/five-per-week/algorithms/blob/master/LOG.md)` +
        LR;

    return header + generateSection(pullRequestsThisWeek);
}

function generateSummary(prs) {
    // TODO: 주차 별로 정보 모으기
    const header = LR + '## 모든 정보 요약 ##' + LR;
    return header + generateSection(prs);
}

initDayJS();
(async function () {
    const readme = fs.readFileSync('./README.md', 'utf8');
    const pullRequests = (await fetchPullRequests()).filter(hasAlgorithmLabel);

    const summaryThisWeek = generateSummaryThisWeek(pullRequests);
    const summary = generateSummary(pullRequests);
    const getCommentRegex = /(^[\s\S]*Start -->)([\S\s]*)(<!--[\s\S]*$)/;

    fs.writeFileSync(
        './README.md',
        readme.replace(getCommentRegex, (match, start, comment, end) =>
            [start, summaryThisWeek, end].join(''),
        ),
    );

    fs.writeFileSync('./LOG.md', summary);
})();
