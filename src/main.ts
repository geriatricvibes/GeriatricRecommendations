
import { CheerioCrawler, Dataset, KeyValueStore} from 'crawlee';
import { router } from './routes.js';

const startUrls =  ['https://www.novelupdates.com/novelslisting/?sort=2&order=1&status=1&pg=1']

const crawler = new CheerioCrawler({
    requestHandler: router,
});

await crawler.run(startUrls);

const dataset = await Dataset.open();
await KeyValueStore.setValue('OUTPUT', (await dataset.getData()).items)