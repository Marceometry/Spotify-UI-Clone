import Link from 'next/link'

export default function UL() {
    return (
        <>
        <ul>
            <li>EMPRESA</li>
            
            <li>
              <Link href="/">
                <a> Sobre </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> Empregos </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> For the Record </a>
              </Link>
            </li>
        </ul>

        <ul>
            <li>COMUNIDADES</li>
            
            <li>
            <Link href="/">
                <a> Para Artistas </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a> Desenvolvedores </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a> Publicidade </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a> Investidores </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a> Fornecedores </a>
            </Link>
            </li>
        </ul>

        <ul>
            <li>LINKS ÚTEIS</li>
            
            <li>
            <Link href="/">
                <a> Suporte </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a> Player da Web </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a> Aplicativo móvel grátis </a>
            </Link>
            </li>
        </ul>
        </>
    )
}