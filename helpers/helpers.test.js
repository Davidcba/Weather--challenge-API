const {isOver} = require("./helpers");

test('Comparing temp number bigger ', ()=>{

    expect(isOver(18)).toBe(true);

})
test('Comparing temp number lower ', ()=>{

    expect(isOver(12)).toBe(false);
})

test('Comparing temp number equal ', ()=>{

    expect(isOver(15)).toBe(false);
})