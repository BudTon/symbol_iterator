/* eslint-disable no-undef */
import { UnitCharacter } from '../UnitCharacter.class.js';
import { Team } from '../Team.class.js';

test.each([
    [['Tor', 'Magician'], {
        name: 'Tor',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }],
])('testing Team.add(response) with response = %s and expected = "%o"', (response, expected) => {
    const tor = new UnitCharacter(response[0], response[1])
    const teamDreem = new Team();
    teamDreem.add(tor);
    const expectedSet = new Set();
    expectedSet.add(expected)
    expect(teamDreem.members).toEqual(expectedSet);
})


test("Test Team.add doubling up ", () => {
    const result = () => {
        const tor = new UnitCharacter('Tor', 'Magician')
        const teamDreem = new Team();
        teamDreem.add(tor);
        teamDreem.add(tor);
    };
    expect(result).toThrow(Error);
});

test("Test Team.addAll", () => {
    const tor = new UnitCharacter('Tor', 'Magician');
    const gor = new UnitCharacter('Gor', 'Bowerman');
    const listAllUnit = [gor, tor, gor];
    const teamDreem = new Team();
    teamDreem.addAll(listAllUnit);
    const expectedSet = new Set();
    expectedSet.add(tor)
    expectedSet.add(gor)
    expect(teamDreem.members).toEqual(expectedSet);
});

test("Test Team.toArray()", () => {
    const tor = new UnitCharacter('Tor', 'Magician');
    const teamDreem = new Team();
    teamDreem.add(tor)
    const result = teamDreem.toArray()
    const expected = [["name - Tor", "type - Magician", "health - 100", "level - 1", "attack - 10", "defence - 40"]]
    expect(result).toEqual(expected);
});

test("Test description Name in UnitCharacter", () => {
    const listUtit = [{ name: 'T', type: 'Magician' }];
    const result = () => {
        new UnitCharacter(listUtit[0].name, listUtit[0].type);
    };
    expect(result).toThrow(Error);
});

test("Test description Type in UnitCharacter", () => {

    const listUtit = [{ name: 'Tor', type: 'Magic' }];
    const result = () => {
        new UnitCharacter(listUtit[0].name, listUtit[0].type);
    };
    expect(result).toThrow(Error);
});

test.each([
    [['Tor', 'Magician'], undefined],
])('testing Team.iterator() with response = %s and expected = "%o"', (response, expected) => {
    const tor = new UnitCharacter(response[0], response[1])
    const teamDreem = new Team();
    teamDreem.add(tor);
    expect(teamDreem.iterator()).toEqual(expected);
})

test("Test Team.iterator() else ", () => {
    const teamDreem = new Team();
    expect(teamDreem.iterator()).toEqual(undefined);
});