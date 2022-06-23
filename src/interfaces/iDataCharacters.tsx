export interface iDataCharacters {
  id?: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}
 export class Character implements iDataCharacters {
  selected: boolean;
  constructor(public name: string, 
    public responsible: string,
    public status: string,
    public profession: string,
    public twitter: string,
    public picture: string,
    public alternativeText: string,
    ) {
      this.selected = false;
    }
     
 }