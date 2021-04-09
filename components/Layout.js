import Head from 'next/head'



const Layout = (children) => {
    console.log('Layout')
    return (
        <React.Fragment>
            <Head>
                <title>cristian-elena.ro</title>
                    <link rel='stylesheet' type="text/css" href='./style.css' media="screen" />
                    <script src="./jvs.js" defer></script>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cantata+One&family=Cinzel:wght@400;500&family=Elsie+Swash+Caps&family=Hammersmith+One&family=Indie+Flower&family=Josefin+Slab:wght@500&family=Montserrat:ital,wght@0,200;0,300;0,500;0,900;1,200;1,300;1,500;1,900&family=Poppins:ital,wght@0,200;0,400;0,600;0,900;1,200;1,400;1,600;1,900&family=Raleway:ital,wght@0,300;0,500;0,900;1,200&family=Special+Elite&display=swap"
                        rel="stylesheet" />
                        <script src="https://kit.fontawesome.com/cbb96f47ca.js" crossorigin="anonymous"></script>
            </Head>
            <body>{children}</body>
        </React.Fragment>
    );
}
 
export default Layout;