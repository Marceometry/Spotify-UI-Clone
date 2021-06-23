import Link from "next/link"

type FakeData = Row[]

type Row = {
    title: string
    description: string
    type: string
    items: Item[]
}

type Item = {
    title: string
    description: string
    image: string
    link: string
}

export const fakeData: FakeData = [
    {
        title: "Feito para você",
        description: "Quanto mais você escutar, melhores recomendações vai receber.",
        type: "playlists",
        items: [
            {
                title: "Descobertas da Semana",
                description: "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.",
                image: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/XutSn0_6ZZetQsoHgk96xg==/dHB0cHRwdHB0cHRwdHB0cA==",
                link: "/"
            },
            {
                title: "Daily Mix 1",
                description: "Megadeth, Scorpions, Europe e mais",
                image: "https://dailymix-images.scdn.co/v2/img/fdbf93704b51d1b96df59e762060ed45c420b6d6/1/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 2",
                description: "Sabaton, Powerwolf, Týr e mais",
                image: "https://dailymix-images.scdn.co/v2/img/ab6772690000dd22dcfed0b0cf82aaa3be8c849e/2/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 3",
                description: "Twenty One Pilots, Foster the People, Lady Gaga e mais",
                image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb196972172c37d934d9ca8093/3/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 4",
                description: "Red Hot Chili Peppers, Nirvana, Arctic Monkeys e mais",
                image: "https://dailymix-images.scdn.co/v2/img/89bc3c14aa2b4f250033ffcf5f322b2a553d9331/4/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 5",
                description: "Avenged Sevenfold, Disturbed, System Of a Down e mais",
                image: "https://dailymix-images.scdn.co/v2/img/e8469ef3c4e45f9574dc963a69043ac3f3e58d41/5/pt/default",
                link: "/"
            },
            {
                title: "Daily Mix 6",
                description: "Skank, Raça Negra, Paralamas do Sucesso e mais",
                image: "https://dailymix-images.scdn.co/v2/img/bbdaedcf66f3a3d424633484145e1d49cce9f612/6/pt/default",
                link: "/"
            },
            // {
            //     title: "Radar de Novidades",
            //     description: "Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você. Atualiza toda sexta.",
            //     image: null,
            //     link: "/"
            // }
        ]
    },
    {
        title: "Seus artistas favoritos",
        description: null,
        type: "artists",
        items: [
            {
                title: "Metallica",
                description: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                description: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                description: null,
                image: null,
                link: "/"
            },
            {
                title: "Metallica",
                description: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                description: null,
                image: null,
                link: "/"
            },
            {
                title: "Metallica",
                description: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            },
            {
                title: "Metallica",
                description: null,
                image: "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
                link: "/"
            }
        ]
    },
    {
        title: "Lançamentos para você",
        description: "Músicas novinhas em folha dos artistas que você adora.",
        type: "songs",
        items: [
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            },
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            },
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            },
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            },
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            },
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            },
            {
                title: "Enter Sandman (Acapella Cover)",
                description: "Metallica",
                image: "/black-album-paint.png",
                link: "/"
            }
        ]
    },
]

export const playlist = {
    name: "Descobertas da Semana",
    description: "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.",
    image: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/XutSn0_6ZZetQsoHgk96xg==/dHB0cHRwdHB0cHRwdHB0cA==",
    duration: 5746.32,
    songs: [
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        },
        {
            title: "Enter Sandman (Acapella Cover)",
            artist: "Metallica",
            album: "Black Album (Feito no Paint)",
            albumImage: "/black-album-paint.png",
            addedIn: "15 de jun. de 2021",
            duration: 287.316,
        }
    ]
}

export const sidebarPlaylists = (
    <>
      <li>
        <Link href="/">
          <a>This Is Metallica</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Queen</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is ACDC</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Avenged Sevenfold</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Guns and Roses</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Rolling Stones</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Nirvana</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is System of a Down</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Creedence</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Scorpions</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Beatles</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Led Zeppelin</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Red Hot Chili Peppers</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Disturbed</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Imagine Dragons</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Green Day</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Deep Purple</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Pink Floyd</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Slipknot</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>This Is Megadeth</a>
        </Link>
      </li>
    </>
)