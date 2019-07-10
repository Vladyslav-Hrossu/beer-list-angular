export class Beer {
  constructor(
    public id: number,
    public name: string,
    public tagline: string,
    public first_brewed: string,
    public description: string,
    public image_url: string,
    public abv: number,
    public ibu: number,
    public target_fg: number,
    public target_og: number,
    public ebc: number,
    public srm: number,
    public ph: number,
    public attenuation_level: number,
    public volume: {},
    public boil_volume: {},
    public method: {},
    public ingredients: {},
    public food_pairing: [],
    public brewers_tips: string,
    public contributed_by: string
  ) {
  }
}
