type FakeData = Row[]

type Row = {
    title: string
    subtitle: string
    type: string
    items: Item[]
}

type Item = {
    title: string
    subtitle: string
    image: string
    link: string
}

export const fakeData: FakeData = [
    {
        title: "Feito para você",
        subtitle: "Quanto mais você escutar, melhores recomendações vai receber.",
        type: "playlist",
        items: [
            {
                title: "Descobertas da semana",
                subtitle: "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.",
                image: "",
                link: "/"
            },
            {
                title: "Daily Mix 1",
                subtitle: "Metallica, Scorpions, ACDC e mais",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Daily Mix 2",
                subtitle: "Metallica, Scorpions, ACDC e mais",
                image: "",
                link: "/"
            },
            {
                title: "Daily Mix 3",
                subtitle: "Metallica, Scorpions, ACDC e mais",
                image: "",
                link: "/"
            },
            {
                title: "Daily Mix 4",
                subtitle: "Metallica, Scorpions, ACDC e mais",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Daily Mix 5",
                subtitle: "Metallica, Scorpions, ACDC e mais",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Daily Mix 6",
                subtitle: "Metallica, Scorpions, ACDC e mais",
                image: "",
                link: "/"
            },
            {
                title: "Radar de novidades",
                subtitle: "Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você. Atualiza toda sexta.",
                image: "",
                link: "/"
            }
        ]
    },
    {
        title: "Seus artistas favoritos",
        subtitle: null,
        type: "artist",
        items: [
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: "Artista",
                image: "",
                link: "/"
            },
        ]
    },
]