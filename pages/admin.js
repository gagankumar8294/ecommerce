import Head from "next/head"
import styles from '../styles/Home.module.css'
import ProductForm from "@/comps/ProductForm"
import ProductList from "@/comps/ProductList"

const Admin = () => {
    return (
        <>
        <Head>
            <title>Elitepurchase | Admin Page</title>
            <meta name='keywords' content="elitepurchase" />
        </Head>
        <div style={{paddingTop:"150px"}}>
            <div style={{ padding: "20px" }}>
                <ProductForm onSuccess={() => window.location.reload()} />
                <ProductList />
            </div>
        </div>
        </>
    )
}

export default Admin; 