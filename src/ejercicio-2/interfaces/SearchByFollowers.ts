/**
 * Interfaz generica para buscar por numero de seguidores
 */
export interface SearchByFollowers<T> {
    findByFollowers(followers: number): T[];
}