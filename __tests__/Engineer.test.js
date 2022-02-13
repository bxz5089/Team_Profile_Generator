const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Test', 123, 'testing@gmail', 'test123');
    
    expect(engineer.gitHub) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Test', 123, 'testing@gmail', 'test123');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Test', 123, 'testing@gmail', 'test123');

    expect(engineer.getRole()).toEqual("Engineer");
});