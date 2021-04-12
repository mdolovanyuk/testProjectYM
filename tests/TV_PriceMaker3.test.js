const TV_PriceMaker = require('../TV_PriceMaker');

test('Test3. Find the first TV with proper price and maker (50000; LG, Samsung)', async () => {
    const result = await TV_PriceMaker(50000, ['LG','Samsung']);
    expect(result[0]).toBeGreaterThanOrEqual(50000);
    expect(['LG','Samsung']).toContain(result[1]);
},300000);