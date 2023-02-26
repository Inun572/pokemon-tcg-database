import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(res => res.data);

export default function useGetCard(nama) {
    const url = `https://api.pokemontcg.io/v2/cards?select=id,name,images&orderBy=name&page=1&pageSize=12&q=name:${nama}`;
    var { data, error, isLoading } = useSWR(url, fetcher);

    if (nama.length >= 3) {
        let card;
        if (data !== undefined && data.length === 0) {
            error = {
                code: 404,
                msg: 'Card not found'
            }
        }
        if (data !== undefined){
            card = data;
        }
    }
    return { data, error, isLoading}
}