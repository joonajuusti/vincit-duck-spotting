export class Sighting {
  public dateString:string;
  constructor(
    public species:string,
    public description:string,
    public dateTime:Date,
    public count:number
  ){}
}
