import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { name } = pokemon;
    return (
        <div className="mx-auto right-0 mt-2 w-60">
        <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
            <Image
                key={ pokemon.id }
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={100}
                height={100}
                alt={ pokemon.name }
                priority={ false }
            />
                <path
                fill="currentColor"
                d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                ></path>
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
            <div className="mt-5">
                <Link href={`pokemons/${ name }`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                Más información
                </Link>
            </div>
            </div>
            <div className="border-b">
            <Link className="px-4 py-2 hover:bg-gray-100 flex items-center" href="/dashboard/main">
                <div className="text-red-600">
                    <IoHeartOutline />
                </div>
                <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                    No es favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
                </div>
            </Link>
        
            </div>
        </div>
        </div>
    );
};
