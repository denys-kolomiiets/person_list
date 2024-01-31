import { Button, TextField } from "@mui/material";
import "./style.css";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addPerson } from "../../store/features/personSlice";

export default function AddPersone() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "") {
      dispatch(addPerson({ name }));
      setName("");
    }
  };
  return (
    <>
      <form className="add__form" onSubmit={handleSubmit}>
        <TextField
          placeholder="Add a person name"
          className="add__input"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          className="add__button"
          type="submit"
        >
          Add
        </Button>
      </form>
    </>
  );
}
