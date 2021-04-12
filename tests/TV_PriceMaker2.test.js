const TV_PriceMaker = require('../TV_PriceMaker');

test('Test2. Find the first TV with proper price and maker (35000; Samsung)', async () => {
    const result = await TV_PriceMaker(35000, ['Samsung']);
    expect(result[0]).toBeGreaterThanOrEqual(35000);
    expect(['Samsung']).toContain(result[1]);
},300000);
