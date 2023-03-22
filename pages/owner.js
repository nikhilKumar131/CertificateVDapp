import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'


export default function Home() {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.content}>
                    <div>
                        <p>Total number of certificates:</p>
                    </div>

                    <div>
                        <p>Name:</p>
                        <p>Title:</p>
                        <p>Program:</p>
                        <p>Date Of Graduation:</p>
                        <p>School:</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}