export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2wt3XRtSy7IY1IFhB1YLp2f9gFrBcmPv&limit=10&q=${category}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}