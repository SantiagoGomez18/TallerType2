export class serie{

    number: number;
    name:string;
    channel:string;
    seasons: number;
    description: string;
    url: string;
    image: string;


    constructor(number:number, name:string, channel:string, seasons:number, description:string, url:string, image:string){
        this.number = number;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }

}