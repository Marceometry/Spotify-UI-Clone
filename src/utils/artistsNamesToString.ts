type Artist = {name: string, id: string}

export default function artistsNamesToString(artists: Artist[]) {
    if (!artists) {
        return ''
    }

    let artistsArray = []

    for (let i = 0; i < artists.length; i++) {
      artistsArray.push(artists[i].name)
    }

    return artistsArray.join(", ")
}