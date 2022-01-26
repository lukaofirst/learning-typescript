/* --- Classes --- */

/* - Abstract Classes - */
// The abstract modifier indicate that a class is intended only to be
// a base class of other class, not instatiated on its own.

// A subclass that inherits from a base class must implement their methods
abstract class Team {
    constructor(protected name: string, protected ranking: number) {}

    abstract ShowInformation(): void;
}

class CSGOTeam extends Team {
    constructor(
        protected name: string,
        protected ranking: number,
        protected hasMajor: boolean
    ) {
        super(name, ranking);
    }

    ShowInformation() {
        console.log(
            `${this.name} is on ranking #${this.ranking} | It has major? ${this.hasMajor}`
        );
    }
}

const team1 = new CSGOTeam('Natus Vincere', 1, true);

team1.ShowInformation();
