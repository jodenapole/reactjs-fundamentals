import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount() {
        setLikeCount( currentLikeCount => {
            return currentLikeCount + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:/github.com/jodenapole.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jo de Napole</strong>
                            <time title='7 de Janeiro, 12:07h' dateTime='2023-01-07 12:07:00'>Cerca de 1h atrás</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>

                <footer className={styles.footer}>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}