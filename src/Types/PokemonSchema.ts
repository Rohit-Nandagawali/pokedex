export interface UnpachedPokemonSchema{
    // setting all the fields as nullable or optional using this syntax -> key?=type
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;
}
export interface PokemonSpriteSchema{
    normal ?:string;
    animated ?:string;
}

export interface PokemonSchema{
    // setting all the fields as nullable or optional using this syntax -> key?=type
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    sprites?: PokemonSpriteSchema;
    order?: string;
    is_default?: string;
    name?: string;
    // this is the type of the sprite
}