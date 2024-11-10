import { FavoritePokemons } from "@/app/pokemons";


export const metadata = {
 title: 'Favoritos',
 description: '',
};

export default async function PokemonsPage() {
    return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global state</small></span>
        <FavoritePokemons />
    </div>
    );
}