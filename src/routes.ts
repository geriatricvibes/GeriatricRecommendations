import { Dataset, createCheerioRouter } from 'crawlee';

export const router = createCheerioRouter();


router.addDefaultHandler(async ({ enqueueLinks, log }) => {
    log.info(`enqueueing new URLs`);    
    await enqueueLinks({
        globs: ['https://www.novelupdates.com/series/*/'],
        label: 'detail',
    });
    await enqueueLinks({
        globs: ['https://www.novelupdates.com/novelslisting/?sort=2&order=1&status=1&pg=*'],
        label: 'list',
    });
});

router.addHandler('detail', async ({ request, $, log }) => {
    const title = $('title').text();
    const image = $('.seriesimg img').attr('src');
    const noveltype = $('#showtype span').text();
    const genre = $('#seriesgenre a').append("   ").text();
    const tags = $('#showtags a').append("   ").text();
    const rating = $('h5 span.uvotes').text();
    const author = $('#showauthors a').append("   ").text();
    const year = $('#edityear').text();
    const ranking = $('span.userrate.rank').append("   ").text();
    const reviewcount = $('#comments .review-count.pull-right').text();
    const description = $('meta[name=description]').attr('content');
    

    log.info(`${title}`, { url: request.loadedUrl });

    
    await Dataset.pushData({
        url: request.loadedUrl,
        title,
        image,
        noveltype,
        genre,
        tags,
        rating,
        author,
        year,
        ranking,
        reviewcount,
        description
    });
});
