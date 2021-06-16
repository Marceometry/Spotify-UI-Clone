export default function playlistDurationToString(duration: number) {
    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor(duration % 3600 / 60)

    const timeString = [`${hours}h`, `${minutes}min`]
        .map(unit => String(unit).padStart(2, '0'))
        .join(' ')
        
    return timeString
}