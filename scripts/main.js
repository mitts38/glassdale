import { getCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteFormComponent from "./notes/NoteForm.js";
import NoteListComponent from "./notes/NoteList.js";
import { getNotes } from "./notes/NoteDataProvider.js";
import WitnessListComponent from "./witnesses/witnessesList.js";
import { getWitnesses } from "./witnesses/witnessesDataProvider.js";
import { getOfficers } from "./officers/OfficerProvider.js";
import OfficerSelect from "./officers/OfficerSelect.js";
import { FilterButton } from "./filter/filter.js";

NoteFormComponent()

getWitnesses()
.then(() => WitnessListComponent())

getConvictions()
.then(() => ConvictionSelect())


getCriminals()
.then(() => CriminalListComponent())

getNotes()
.then(() => NoteListComponent())

getOfficers()
.then(() => OfficerSelect())

FilterButton()