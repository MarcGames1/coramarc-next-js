import MainLayout from "../../layout/MainLayout"
import { useRouter } from 'next/router'

const Blog_cat = () => {
const router = useRouter()
console.log(router)
    const slug  = router.asPath
    return (<>
        <MainLayout>

            <h1>Blog categoy {slug}</h1>

        </MainLayout>
    </>)
}

export default Blog_cat