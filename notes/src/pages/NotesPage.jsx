import { fakeData as notes } from "../assets/fakeData.js";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  return (
    <div>
      <h1>Notes Page</h1>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};
export default NotesPage;
