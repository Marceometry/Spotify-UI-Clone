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
        type: "playlists",
        items: [
            {
                title: "Descobertas da Semana",
                subtitle: "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.",
                image: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/XutSn0_6ZZetQsoHgk96xg==/dHB0cHRwdHB0cHRwdHB0cA==",
                link: "/"
            },
            {
                title: "Daily Mix 1",
                subtitle: "Megadeth, Scorpions, Europe e mais",
                image: "https://dailymix-images.scdn.co/v2/img/fdbf93704b51d1b96df59e762060ed45c420b6d6/1/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 2",
                subtitle: "Sabaton, Powerwolf, Týr e mais",
                image: "https://dailymix-images.scdn.co/v2/img/ab6772690000dd22dcfed0b0cf82aaa3be8c849e/2/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 3",
                subtitle: "Twenty One Pilots, Foster the People, Lady Gaga e mais",
                image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb196972172c37d934d9ca8093/3/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 4",
                subtitle: "Red Hot Chili Peppers, Nirvana, Arctic Monkeys e mais",
                image: "https://dailymix-images.scdn.co/v2/img/89bc3c14aa2b4f250033ffcf5f322b2a553d9331/4/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 5",
                subtitle: "Avenged Sevenfold, Disturbed, System Of a Down e mais",
                image: "https://dailymix-images.scdn.co/v2/img/e8469ef3c4e45f9574dc963a69043ac3f3e58d41/5/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 6",
                subtitle: "Skank, Raça Negra, Paralamas do Sucesso e mais",
                image: "https://dailymix-images.scdn.co/v2/img/bbdaedcf66f3a3d424633484145e1d49cce9f612/6/pt/default",
                link: "/"
            },
            {
                title: "Radar de Novidades",
                subtitle: "Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você. Atualiza toda sexta.",
                image: "",
                link: "/"
            }
        ]
    },
    {
        title: "Seus artistas favoritos",
        subtitle: null,
        type: "artists",
        items: [
            {
                title: "Metallica",
                subtitle: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                subtitle: null,
                image: "",
                link: "/"
            },
        ]
    },
    {
        title: "Lançamentos para você",
        subtitle: "Músicas novinhas em folha dos artistas que você adora.",
        type: "songs",
        items: [
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
            {
                title: "One",
                subtitle: "Metallica",
                image: "/teste-img.jpg",
                link: "/"
            },
        ]
    },
]