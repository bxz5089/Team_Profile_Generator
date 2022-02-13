const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Test', 123, 'testing@gmail.com', 10);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Test', 123, 'testing@gmail.com', 10);

    expect(manager.getRole()).toEqual("Manager");
}); 