import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import React from 'react'



const Layout = (props, script, link) => (
    <div>

        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />

            <title>Online Shopping | Best Deals in SA | Allsale.co.za</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <link src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous" />
            <meta name='description' content='Allsale Club. Join the Allsale club  and get exclusive shopping deals and discounts - the best anywhere in South Africa.' />
            <meta name="description" content="" />
            <link href="fad.html" rel="canonical" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://www.allsale.co.za/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://www.allsale.co.za/favicon-16x16.png" />
            <meta name="theme-color" content="#fafafa" />
        </ Head>

        <Header />

        <Navbar />

        <div >
            {props.children}

        </div>

        <Footer />

    </div>
)

export default Layout;