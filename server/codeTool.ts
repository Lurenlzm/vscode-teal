import { } from "vscode";
import { Location, Position, Range } from "vscode-languageclient";



export function buildEmptyLocation(uri: string): Location {
    let pos = Position.create(0, 0);
    let rg = Range.create(pos, pos)
    let retLoc = Location.create(uri, rg);
    return retLoc;
}