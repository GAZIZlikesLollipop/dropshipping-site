'use client'; // Обязательно для использования хуков React на стороне клиента

import { useParams } from 'next/navigation';
import styles from '@/app/page.module.css';

export default function ProductPage(){
    const { id } = useParams();
    return(
        <div>
            <h1 className={styles.productDescription}>{id}</h1>
        </div>
    )
}
