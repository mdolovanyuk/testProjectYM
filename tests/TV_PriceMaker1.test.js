const TV_PriceMaker = require('../TV_PriceMaker');

test('Test1. Find the first TV with proper price and maker (20000; LG)', async () => {
    const result = await TV_PriceMaker(20000, ['LG']);
    expect(result[0]).toBeGreaterThanOrEqual(20000);
    expect(['LG']).toContain(result[1]);
},300000);