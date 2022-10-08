import { Dataset, createCheerioRouter } from 'crawlee';

export const router = createCheerioRouter();


router.addDefaultHandler(async ({ enqueueLinks, log }) => {
    log.info(`enqueueing new URLs`);    
    await enqueueLinks({
        globs: ['https://www.novelupdates.com/series/*'],
        label: 'detail',
    });
    await enqueueLinks({
        globs: ['https://www.novelupdates.com/novelslisting/?sort=2&order=1&status=1&pg=*',],
        label: 'list',
    });
});

router.addHandler('detail', async ({ enqueueLinks, request, $, log }) => {
    const title = $('title').text();

    await enqueueLinks({
        globs: ['https://www.novelupdates.com/series/*/*/#comments'],
        label: 'detail',
    });
    let user_interaction: (string | number | undefined)[][] = []
    $('.w-comments-list > .w-comments-item > .w-comments-item-meta-new tbody td:nth-child(1)').each(function(i) {
        const val = $(this).children('i.fa-star').length;
        const userid = $(this).children('a').attr('href');
        const username = $(this).children('a').text();
        const novelid = request.loadedUrl;
        user_interaction.push([novelid, val, username, userid])
        
    });    

    log.info(`${title}`, { url: request.loadedUrl });

    await Dataset.pushData({
        url: request.loadedUrl,
        title,
        user_interaction
    });
});