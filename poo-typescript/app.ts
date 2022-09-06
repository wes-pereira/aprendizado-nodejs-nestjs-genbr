
import PromptSync from "prompt-sync"
import { Animal } from "./src/animal"
import { Cachorro } from "./src/cachorro"
import { Cavalo } from "./src/cavalo"
import { BichoPreguica } from "./src/preguica"

const prompt = PromptSync()

let cachorro = new Cachorro(
    "rex",
    5,
    "preto",
    "labrador"
)

let cavalo = new Cavalo(
    "pandora",
    7,
    "grande",
    "sul"
)

let bichopreguica = new BichoPreguica(
    "moacir",
    3,
    false
)

cachorro.movimento

cachorro.emitirSom

cavalo.movimento

cavalo.emitirSom

bichopreguica.movimento

bichopreguica.emitirSom