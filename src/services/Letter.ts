import api from "./api";
import { LetterProps } from "../types";

class Letter {
  async list(): Promise<LetterProps[]> {
    const { data } = await api.get("/letter");
    return data;
  }

  async create(letter:string): Promise<any> {
    const { data } = await api.post("/letter",{letter});
    return data;
  }

  async inc(letter:string): Promise<any> {
    const { data } = await api.put("/letter",{letter});
    return data;
  }

  async remove(letter:string): Promise<any> {
    const { data } = await api.delete("/letter",{data:{letter}});
    return data;
  }
}

const letter = new Letter();
export default letter;
