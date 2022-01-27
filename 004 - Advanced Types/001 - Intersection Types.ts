/* --- Intersection Types --- */

// You can use with the "&" symbol
// If used with object type, the result will be the combination of these objects type
// If used with union type, the result will be the intersection of these union type

type Team = {
    name: string;
    players: string[];
};

type ESportsTeam = {
    name: string;
    lineupStartedYear: number;
};

type ProfessionalTeam = Team & ESportsTeam;

const team1: ProfessionalTeam = {
    name: 'Last Dance',
    players: ['FalleN', 'fer', 'fnx', 'VINI', 'boltz'],
    lineupStartedYear: 2022,
};

const team2: ProfessionalTeam = {
    name: 'GODSENT',
    players: ['TACO', 'felps', 'dumau', 'latto', 'b4rt1n'],
    lineupStartedYear: 2021,
};

type Combinable = string | number;
type Textable = string | boolean;

type Universal = Combinable & Textable;
