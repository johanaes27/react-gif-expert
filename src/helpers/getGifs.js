export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KMB3Hnl1yHH4xKKbe2dCO0JZJdXW2oc0&q=${ category }&limit=10`;
    const resp = await fetch ( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))


    return gifs;

}