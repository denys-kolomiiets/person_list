import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAppSelector } from "../../store/store";
import "./style.css";

export default function PersoneList() {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <>
      <div className="list__wrapper">
        <p>This is list of persons</p>
        <TableContainer>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons &&
                persons.map((person) => (
                  <TableRow key={person.id} className="list__row">
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <button>
                      <span>x</span>
                    </button>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
